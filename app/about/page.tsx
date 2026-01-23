import type { Metadata } from 'next'
import { Container } from '@/components/layout'

export const metadata: Metadata = {
  title: 'About',
  description: 'About FUKURO LYRICS - an unofficial lyrics archive for the Japanese visual kei band 梟 (Fukuro).',
}

export default function AboutPage() {
  return (
    <Container>
      <h1 className="mb-6 text-3xl font-bold tracking-tight">About</h1>

      <section className="mb-8">
        <h2 className="mb-3 text-lg font-semibold">About This Site</h2>
        <p className="text-[var(--text-secondary)] leading-relaxed">
          FUKURO LYRICS is an unofficial fan-made archive of lyrics for the Japanese
          visual kei band 梟 (Fukuro). The site provides lyrics in three formats:
          the original Japanese text, Romanized Japanese (Romaji), and English translations.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="mb-3 text-lg font-semibold">About the Band</h2>
        <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
          梟 (Fukuro, meaning &ldquo;owl&rdquo; in Japanese) is a visual kei band known for their
          dynamic sound and evocative lyrics. The current lineup consists of:
        </p>
        <ul className="list-disc list-inside text-[var(--text-secondary)] space-y-1">
          <li>Yoshiatsu — Vocals</li>
          <li>Daisuke — Guitar</li>
          <li>Yutara — Bass</li>
          <li>Lotto — Drums</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="mb-3 text-lg font-semibold">Translation Disclaimer</h2>
        <p className="text-[var(--text-secondary)] leading-relaxed">
          All translations on this site are unofficial and may contain errors or
          interpretive choices. Japanese lyrics often contain wordplay, cultural
          references, and poetic ambiguity that can be difficult to capture in
          translation. If you notice any mistakes, please reach out.
        </p>
      </section>

      <section>
        <h2 className="mb-3 text-lg font-semibold">Official Links</h2>
        <p className="text-[var(--text-secondary)] leading-relaxed">
          To support the band, please check out their official channels and purchase
          their music through official distributors.
        </p>
      </section>
    </Container>
  )
}
