'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import type { ReleaseWithTracks } from '@/types'

interface TrackListProps {
  release: ReleaseWithTracks
}

export function TrackList({ release }: TrackListProps) {
  const pathname = usePathname()

  return (
    <div className="flex flex-col">
      {/* Release header */}
      <div className="px-4 py-3">
        <Link
          href={`/releases/${release.slug}`}
          className="group block"
        >
          <h3 className="text-sm font-semibold text-[var(--text-primary)] group-hover:text-[var(--accent-secondary)]">
            {release.titleRomaji}
          </h3>
          <p className="text-xs text-[var(--text-muted)]" lang="ja">
            {release.titleJp}
          </p>
        </Link>
      </div>

      {/* Divider */}
      <div className="mx-2 border-t border-[var(--border-primary)]" />

      {/* Tracks */}
      <nav className="flex-1 overflow-y-auto px-2 py-2">
        <ul className="space-y-0.5">
          {release.tracks.map((track) => {
            const isActive = pathname === `/lyrics/${track.song.slug}`
            return (
              <li key={track.id}>
                <Link
                  href={`/lyrics/${track.song.slug}`}
                  className={`
                    flex items-center gap-2 rounded-md px-2 py-1.5 text-sm
                    transition-colors duration-150
                    ${isActive
                      ? 'bg-[var(--accent-secondary)]/20 text-[var(--text-primary)] border-l-2 border-[var(--accent-crimson)]'
                      : 'text-[var(--text-secondary)] hover:bg-[var(--accent-secondary)]/10 hover:text-[var(--text-primary)]'
                    }
                  `}
                >
                  <span className="w-5 text-right text-xs text-[var(--text-muted)]">
                    {track.trackNumber}
                  </span>
                  <span className="truncate">
                    {track.song.titleRomaji}
                  </span>
                </Link>
              </li>
            )
          })}
        </ul>
      </nav>
    </div>
  )
}
