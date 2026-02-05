import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'adding lyrics',
  description: 'how to add new song lyrics to fukuro lyrics',
}

export default function AddingLyricsDocsPage() {
  return (
    <div>
      <h1>adding lyrics</h1>
      <p>
        want to help add lyrics? heres how the system works.
      </p>

      <h2>the database</h2>
      <p>
        all lyrics live in a postgres database. each song has:
      </p>
      <ul>
        <li><code>titleJp</code> - japanese title</li>
        <li><code>titleRomaji</code> - romanized title</li>
        <li><code>titleEn</code> - english title (optional)</li>
        <li><code>lyricsJp</code> - full japanese lyrics</li>
        <li><code>lyricsRomaji</code> - romanized lyrics</li>
        <li><code>lyricsEn</code> - english translation</li>
        <li><code>notes</code> - translator notes (optional)</li>
      </ul>

      <h2>the update script</h2>
      <p>
        theres a script at <code>prisma/update-lyrics.ts</code> that shows
        how to update songs. basically you:
      </p>
      <ol>
        <li>find the song by slug</li>
        <li>update the lyrics fields</li>
        <li>run the script with ts-node</li>
      </ol>

      <h2>format</h2>
      <p>
        lyrics should be plain text with line breaks between verses.
        use double line breaks for verse separation. keep the formatting
        consistent between japanese, romaji, and english versions so
        the lines match up.
      </p>

      <h2>example</h2>
      <pre className="overflow-x-auto rounded bg-neutral-100 p-4 text-sm">
{`const lyrics = {
  lyricsJp: \`最初の行
二行目

新しい段落\`,
  lyricsRomaji: \`saisho no gyou
nigyoume

atarashii danraku\`,
  lyricsEn: \`first line
second line

new paragraph\`
}`}
      </pre>

      <h2>translator notes</h2>
      <p>
        if theres wordplay, cultural references, or translation decisions
        worth explaining, add them to the <code>notes</code> field. these
        show up in a collapsible section on the lyrics page.
      </p>
    </div>
  )
}
