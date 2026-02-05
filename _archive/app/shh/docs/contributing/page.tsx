import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'contributing',
  description: 'how to contribute to fukuro lyrics',
}

export default function ContributingDocsPage() {
  return (
    <div>
      <h1>contributing</h1>
      <p>
        thanks for wanting to help! heres how you can contribute.
      </p>

      <h2>ways to help</h2>

      <h3>add lyrics</h3>
      <p>
        the biggest help is adding lyrics for songs that dont have them yet.
        check the <a href="/library">library</a> for songs with gray dots -
        those need lyrics. see the <a href="/shh/docs/adding-lyrics">adding lyrics</a> guide
        for how to do it.
      </p>

      <h3>fix translations</h3>
      <p>
        if you spot a translation error or have a better interpretation,
        open an issue or pr. translations are subjective so include your
        reasoning.
      </p>

      <h3>report bugs</h3>
      <p>
        found something broken? open a github issue. include:
      </p>
      <ul>
        <li>what you expected</li>
        <li>what actually happened</li>
        <li>browser/device if relevant</li>
      </ul>

      <h3>suggest features</h3>
      <p>
        have an idea? open an issue. were keeping the site minimal but
        open to good suggestions.
      </p>

      <h2>code contributions</h2>
      <p>
        for code changes:
      </p>
      <ol>
        <li>fork the repo</li>
        <li>make a branch</li>
        <li>make your changes</li>
        <li>run <code>pnpm typecheck</code> to make sure nothing broke</li>
        <li>open a pr with a clear description</li>
      </ol>

      <h2>style guide</h2>
      <ul>
        <li>keep it minimal - no over-engineering</li>
        <li>typescript everywhere</li>
        <li>no unnecessary dependencies</li>
        <li>match existing code style</li>
        <li>test your changes locally first</li>
      </ul>

      <h2>questions?</h2>
      <p>
        open a github issue or discussion. were friendly, promise.
      </p>
    </div>
  )
}
