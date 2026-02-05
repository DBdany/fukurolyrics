import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'animation',
  description: 'about the homepage intro animation',
}

export default function AnimationDocsPage() {
  return (
    <div>
      <h1>animation</h1>
      <p>
        you mightve noticed the homepage has a little intro animation
        when you first visit. heres whats going on.
      </p>

      <h2>the sequence</h2>
      <p>
        when you load the site fresh:
      </p>
      <ol>
        <li>screen starts white</li>
        <li>梟 (the kanji for fukuro/owl) fades in, centered</li>
        <li>&quot;FUKURO&quot; slides in from the left</li>
        <li>the whole thing fades up and disappears</li>
        <li>homepage content appears</li>
      </ol>
      <p>
        takes about 2 seconds total. just a little branding moment.
      </p>

      <h2>when it plays</h2>
      <p>
        the animation only plays once per session. if you navigate away
        and come back, it wont replay. we use sessionstorage to track this
        so itll play again if you close your browser and come back later.
      </p>

      <h2>why</h2>
      <p>
        honestly? it just looks cool. fukuro (梟) means owl in japanese
        and the kanji is beautiful. we wanted the site to have a moment
        where that character gets to shine before you dive into the lyrics.
      </p>

      <h2>technical bits</h2>
      <p>
        its pure css animations + react state, no animation libraries.
        the component is in <code>app/components/ui/AnimatedHero.tsx</code> if
        youre curious.
      </p>
    </div>
  )
}
