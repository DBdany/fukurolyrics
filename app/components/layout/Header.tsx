import Link from 'next/link'
import { Container } from './Container'

export function Header() {
  return (
    <header className="border-b border-neutral-200 py-6">
      <Container>
        <nav className="flex items-center justify-between">
          <Link href="/" className="text-xl font-semibold tracking-tight">
            <span className="mr-2">梟</span>
            <span className="text-neutral-500">FUKURO LYRICS</span>
          </Link>
          <ul className="flex items-center gap-6 text-sm">
            <li>
              <Link
                href="/"
                className="text-neutral-600 transition-colors hover:text-black"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="text-neutral-600 transition-colors hover:text-black"
              >
                About
              </Link>
            </li>
          </ul>
        </nav>
      </Container>
    </header>
  )
}
