import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'docs',
  description: 'documentation for fukuro lyrics',
}

const topics = [
  {
    title: 'for visitors',
    items: [
      { href: '/shh/docs/search', label: 'search', desc: 'finding songs fast' },
      { href: '/shh/docs/library', label: 'library', desc: 'browsing all songs' },
      { href: '/shh/docs/lyrics', label: 'lyrics views', desc: 'different ways to read' },
      { href: '/shh/docs/discography', label: 'discography', desc: 'albums and releases' },
      { href: '/shh/docs/animation', label: 'animation', desc: 'the cool intro thing' },
    ],
  },
  {
    title: 'for contributors',
    items: [
      { href: '/shh/docs/adding-lyrics', label: 'adding lyrics', desc: 'how to add songs' },
      { href: '/shh/docs/development', label: 'development', desc: 'running locally' },
      { href: '/shh/docs/contributing', label: 'contributing', desc: 'how to help out' },
    ],
  },
]

export default function DocsPage() {
  return (
    <div>
      <h1>docs</h1>
      <p className="text-neutral-500">
        hey welcome to the fukuro lyrics docs. this is a fan-made lyrics site
        for the japanese visual kei band 梟 (fukuro). everything here is lowercase
        and chill, just like the vibes we&apos;re going for.
      </p>

      <p className="mt-4 text-neutral-500">
        pick a topic below or use the sidebar to navigate around.
      </p>

      {topics.map((section) => (
        <div key={section.title} className="mt-8">
          <h2>{section.title}</h2>
          <div className="not-prose mt-4 grid gap-3 sm:grid-cols-2">
            {section.items.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group block rounded-lg border border-neutral-200 p-4 transition-colors hover:border-neutral-400"
              >
                <p className="font-medium text-black group-hover:underline">
                  {item.label}
                </p>
                <p className="mt-1 text-sm text-neutral-500">{item.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
