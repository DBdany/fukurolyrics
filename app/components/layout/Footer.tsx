import Link from 'next/link'
import { Container } from './Container'

export function Footer() {
  return (
    <footer className="border-t border-neutral-200 py-8">
      <Container>
        <div className="flex flex-col items-center justify-between gap-4 text-xs text-neutral-500 sm:flex-row">
          <p>Unofficial lyrics archive for 梟 (Fukuro)</p>
          <div className="flex items-center gap-4">
            <a
              href="https://ko-fi.com/enchantedruin"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-black"
            >
              <span className="text-xs">🖤</span> Ko-fi
            </a>
            <span className="text-neutral-300">·</span>
            <Link
              href="/settings"
              className="transition-colors hover:text-black"
            >
              Settings
            </Link>
          </div>
          <p>Translations may contain errors</p>
        </div>
      </Container>
    </footer>
  )
}
