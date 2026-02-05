import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'library',
  description: 'browsing all songs in the fukuro lyrics library',
}

export default function LibraryDocsPage() {
  return (
    <div>
      <h1>library</h1>
      <p>
        the <Link href="/library">library</Link> is where you can see every song we have,
        all in one place. think of it like an itunes library but way simpler.
      </p>

      <h2>whats in there</h2>
      <p>
        each row shows:
      </p>
      <ul>
        <li><strong>status dot</strong> - green means lyrics are available, gray means coming soon</li>
        <li><strong>title</strong> - romaji name + japanese name</li>
        <li><strong>release</strong> - which album/ep the song is from</li>
      </ul>

      <h2>the status dots</h2>
      <p>
        were still adding lyrics to the database. the dots help you see at a glance
        which songs have full translations vs which are placeholders.
      </p>
      <ul>
        <li>🟢 green = lyrics available in japanese, romaji, and english</li>
        <li>⚪ gray = placeholder, lyrics coming soon</li>
      </ul>

      <h2>navigating</h2>
      <p>
        click any song to go to its lyrics page. click a release name to see
        all the tracks on that album.
      </p>

      <p>
        the list is sorted alphabetically by romaji title. we might add sorting
        options later but for now this keeps it simple.
      </p>
    </div>
  )
}
