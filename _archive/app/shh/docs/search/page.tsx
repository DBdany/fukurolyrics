import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'search',
  description: 'how to search for songs on fukuro lyrics',
}

export default function SearchDocsPage() {
  return (
    <div>
      <h1>search</h1>
      <p>
        so you wanna find a song? easy.
      </p>

      <h2>how it works</h2>
      <p>
        theres a search bar in the header. just start typing and itll search through:
      </p>
      <ul>
        <li>japanese titles (kanji/kana)</li>
        <li>romaji titles</li>
        <li>english titles (when available)</li>
      </ul>

      <h2>using it</h2>
      <p>
        as you type, matching songs pop up in a dropdown. you can:
      </p>
      <ul>
        <li>click a result to go there</li>
        <li>use arrow keys to navigate</li>
        <li>press enter to select</li>
        <li>press escape to close</li>
      </ul>

      <h2>tips</h2>
      <p>
        searching is case-insensitive so dont worry about caps.
        if youre looking for a song but dont remember the exact title,
        try typing part of it - even a few characters might be enough.
      </p>

      <p>
        the search works instantly, no need to press enter or wait for anything.
        its all client-side so its fast.
      </p>
    </div>
  )
}
