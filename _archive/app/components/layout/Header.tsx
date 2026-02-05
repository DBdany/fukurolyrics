import Link from 'next/link'
import { SearchBar } from './SearchBar'
import { ThemeToggle } from '@/components/ui/ThemeToggle'
import type { SongSearchResult } from '@/types'

interface HeaderProps {
  songs?: SongSearchResult[]
}

export function Header({ songs = [] }: HeaderProps) {
  return (
    <header className="border-b border-[var(--border-primary)] py-4">
      <div className="flex items-center justify-between px-4">
        {/* Tagline */}
        <span className="text-sm text-[var(--text-muted)]">
          Fan Site
        </span>

        {/* Right side: nav + search + theme */}
        <div className="flex items-center gap-4">
          <nav className="hidden items-center gap-4 text-sm md:flex">
            <Link
              href="/"
              className="text-[var(--text-secondary)] transition-colors hover:text-[var(--text-primary)]"
            >
              Home
            </Link>
            <Link
              href="/library"
              className="text-[var(--text-secondary)] transition-colors hover:text-[var(--text-primary)]"
            >
              Library
            </Link>
            <Link
              href="/about"
              className="text-[var(--text-secondary)] transition-colors hover:text-[var(--text-primary)]"
            >
              About
            </Link>
          </nav>
          <SearchBar songs={songs} />
          <ThemeToggle />
        </div>
      </div>
    </header>
  )
}
