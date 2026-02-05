import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'lyrics views',
  description: 'different ways to view lyrics on fukuro lyrics',
}

export default function LyricsDocsPage() {
  return (
    <div>
      <h1>lyrics views</h1>
      <p>
        when youre on a song page, you can switch between different views
        depending on how you want to read the lyrics.
      </p>

      <h2>the five modes</h2>

      <h3>stacked (default)</h3>
      <p>
        shows all three versions stacked vertically - japanese on top,
        romaji in the middle, english at the bottom. good for studying
        or when you want to see everything at once.
      </p>

      <h3>side by side</h3>
      <p>
        puts japanese/romaji on the left and english on the right in columns.
        nice on wider screens when you want to compare translations line by line.
      </p>

      <h3>japanese only</h3>
      <p>
        just the original japanese lyrics. clean and simple if you can read it
        or just want the aesthetic.
      </p>

      <h3>romaji only</h3>
      <p>
        romanized version of the lyrics. perfect for singing along if you
        cant read japanese but want to follow the sounds.
      </p>

      <h3>english only</h3>
      <p>
        just the english translation. for when you just want to understand
        what the songs about without the japanese.
      </p>

      <h2>how to switch</h2>
      <p>
        theres a row of buttons at the top of the lyrics. click any mode
        to switch. your choice isnt saved anywhere so itll reset if you
        leave the page.
      </p>

      <h2>translator notes</h2>
      <p>
        some songs have translator notes that explain cultural references,
        wordplay, or translation choices. when available, youll see a
        collapsible section below the lyrics.
      </p>
    </div>
  )
}
