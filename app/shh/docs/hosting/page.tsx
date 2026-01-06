import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'hosting',
  description: 'fly.io hosting setup and costs for fukuro lyrics',
}

export default function HostingDoc() {
  return (
    <>
      <h1>hosting</h1>
      <p className="lead">
        fukurolyrics.com runs on fly.io with a postgres database. heres how it
        works and what it costs.
      </p>

      <h2>the setup</h2>
      <p>we have two things running on fly.io:</p>
      <table>
        <thead>
          <tr>
            <th>resource</th>
            <th>specs</th>
            <th>runs 24/7?</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>app (next.js)</td>
            <td>2 VMs × 1GB RAM, shared CPU</td>
            <td>no (auto-stops when idle)</td>
          </tr>
          <tr>
            <td>postgres database</td>
            <td>1 VM × 256MB RAM</td>
            <td>yes (always on)</td>
          </tr>
        </tbody>
      </table>

      <h2>how billing works</h2>
      <p>
        fly.io charges per second that a VM is running. the app VMs auto-stop
        after ~5 minutes of no traffic, so you only pay when people are actually
        using the site.
      </p>
      <p>the postgres database runs 24/7 because it needs to be ready for queries.</p>

      <h3>fly.io free tier</h3>
      <ul>
        <li>3 shared-cpu VMs with 256MB RAM each</li>
        <li>3GB persistent volume storage</li>
        <li>~100GB outbound bandwidth</li>
      </ul>

      <h3>what we pay for</h3>
      <ul>
        <li>
          <strong>extra memory</strong> - our app VMs use 1GB instead of the free 256MB
        </li>
        <li>
          <strong>postgres uptime</strong> - runs 24/7 even at minimum specs
        </li>
      </ul>

      <h2>monthly cost estimate</h2>
      <table>
        <thead>
          <tr>
            <th>item</th>
            <th>cost</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>postgres (256MB, 24/7)</td>
            <td>~$2/month</td>
          </tr>
          <tr>
            <td>app VMs (1GB, auto-stop)</td>
            <td>~$0.50-2/month</td>
          </tr>
          <tr>
            <td><strong>total</strong></td>
            <td><strong>~$2.50-4/month</strong></td>
          </tr>
        </tbody>
      </table>

      <h2>does traffic affect cost?</h2>
      <p>yes, but not directly:</p>
      <ul>
        <li>
          <strong>more traffic</strong> = VMs stay awake longer = slightly higher cost
        </li>
        <li>
          <strong>no traffic</strong> = VMs stop = $0 for app (postgres still runs)
        </li>
        <li>
          <strong>bandwidth</strong> = free tier is generous, youd need massive traffic to exceed it
        </li>
      </ul>
      <p>
        for a niche lyrics site, traffic would need to be constant 24/7 to hit
        max cost (~$5-6/month for app VMs). realistically its closer to $3-4 total.
      </p>

      <h2>scaling options</h2>
      <p>if you need to reduce costs, you can scale down the app VMs:</p>
      <pre><code>fly scale memory 512 --app fukurolyrics-bold-shadow-503</code></pre>
      <p>
        512MB is fine for this app since its lightweight. the only downside is
        slightly less headroom if you add memory-heavy features later.
      </p>
      <p>to scale back up:</p>
      <pre><code>fly scale memory 1024 --app fukurolyrics-bold-shadow-503</code></pre>

      <h2>cold starts</h2>
      <p>
        when no ones visited for ~5 minutes, the VMs stop. the first visitor
        after that waits 2-3 seconds for a VM to boot. after that, its instant
        for everyone until traffic dies down again.
      </p>
      <p>
        this is the tradeoff for auto-stop saving money. for a low-traffic site
        its usually fine.
      </p>

      <h2>useful commands</h2>
      <pre><code>{`# check app status
fly status --app fukurolyrics-bold-shadow-503

# check VM specs
fly scale show --app fukurolyrics-bold-shadow-503

# view logs
fly logs --app fukurolyrics-bold-shadow-503

# ssh into running VM
fly ssh console --app fukurolyrics-bold-shadow-503

# check postgres
fly postgres list`}</code></pre>

      <h2>domain</h2>
      <p>
        the custom domain fukurolyrics.com is configured through namecheap DNS
        pointing to fly.io. ssl certificates are auto-managed by fly (lets encrypt).
      </p>
    </>
  )
}
