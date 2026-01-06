'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Container } from '@/components/layout'

const navItems = [
  { href: '/shh/docs', label: 'overview' },
  { href: '/shh/docs/search', label: 'search' },
  { href: '/shh/docs/library', label: 'library' },
  { href: '/shh/docs/lyrics', label: 'lyrics views' },
  { href: '/shh/docs/discography', label: 'discography' },
  { href: '/shh/docs/animation', label: 'animation' },
  { divider: true },
  { href: '/shh/docs/adding-lyrics', label: 'adding lyrics' },
  { href: '/shh/docs/development', label: 'development' },
  { href: '/shh/docs/hosting', label: 'hosting' },
  { href: '/shh/docs/contributing', label: 'contributing' },
]

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()

  return (
    <Container>
      <div className="flex gap-12">
        {/* sidebar */}
        <nav className="hidden w-48 shrink-0 md:block">
          <div className="sticky top-8">
            <p className="mb-4 text-xs font-medium uppercase tracking-wider text-neutral-400">
              docs
            </p>
            <ul className="space-y-1">
              {navItems.map((item, i) =>
                'divider' in item ? (
                  <li key={i} className="my-3 border-t border-neutral-200" />
                ) : (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={`
                        block rounded px-2 py-1.5 text-sm transition-colors
                        ${pathname === item.href
                          ? 'bg-neutral-100 text-black'
                          : 'text-neutral-500 hover:text-black'
                        }
                      `}
                    >
                      {item.label}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>
        </nav>

        {/* mobile nav */}
        <div className="mb-6 md:hidden">
          <select
            value={pathname}
            onChange={(e) => window.location.href = e.target.value}
            className="w-full rounded border border-neutral-200 px-3 py-2 text-sm"
          >
            {navItems
              .filter(item => !('divider' in item))
              .map(item => (
                <option key={item.href} value={item.href}>
                  {item.label}
                </option>
              ))}
          </select>
        </div>

        {/* content */}
        <main className="min-w-0 flex-1">
          <article className="prose prose-neutral max-w-none prose-headings:font-semibold prose-h1:text-2xl prose-h2:text-xl prose-a:text-black prose-a:underline-offset-2">
            {children}
          </article>
        </main>
      </div>
    </Container>
  )
}
