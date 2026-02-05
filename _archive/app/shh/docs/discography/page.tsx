import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'discography',
  description: 'browsing fukuro releases and albums',
}

export default function DiscographyDocsPage() {
  return (
    <div>
      <h1>discography</h1>
      <p>
        the <Link href="/">homepage</Link> shows fukuros full discography -
        all their albums, eps, and singles in reverse chronological order
        (newest first).
      </p>

      <h2>release types</h2>
      <p>
        fukuro has released a few different types of stuff:
      </p>
      <ul>
        <li><strong>albums</strong> - full length releases</li>
        <li><strong>eps / mini albums</strong> - shorter releases, usually 5-6 songs</li>
        <li><strong>singles</strong> - one or two tracks</li>
      </ul>

      <h2>release pages</h2>
      <p>
        click any release to see its full tracklist. each track links to
        its lyrics page. if a song appears on multiple releases (like a
        single thats also on an album), the lyrics page will show all
        the releases it appears on.
      </p>

      <h2>whats included</h2>
      <p>
        we try to include everything from fukuros official discography.
        right now we have:
      </p>
      <ul>
        <li>梟の森 (1st mini album)</li>
        <li>人間じゃない (2nd mini album)</li>
        <li>3rd mini album</li>
        <li>limited single + photobook</li>
        <li>acoustic album</li>
        <li>梟 (1st full album)</li>
        <li>road to the future (1st single)</li>
        <li>世界が崩壊するオチは (4th mini album)</li>
      </ul>

      <p>
        if were missing something let us know in the github issues.
      </p>
    </div>
  )
}
