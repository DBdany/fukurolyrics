'use client'

import { useSidebar } from '@/components/SidebarProvider'
import { ReleaseIcon } from './ReleaseIcon'

export function SidebarRail() {
  const { releases, selectedReleaseSlug, selectRelease, isOpen, toggleSidebar } = useSidebar()

  return (
    <div className="sidebar-rail">
      {/* Logo - click kanji to toggle sidebar */}
      <button
        onClick={toggleSidebar}
        className="flex items-center justify-center gap-2 py-2 text-[var(--text-primary)] transition-colors hover:text-[var(--accent-primary)]"
        title={isOpen ? 'Collapse sidebar' : 'Expand sidebar'}
      >
        <span className="text-xl font-semibold" lang="ja">梟</span>
        {isOpen && (
          <span className="text-sm font-medium text-[var(--text-muted)]">FUKURO</span>
        )}
      </button>

      {/* Divider */}
      <div className="mx-3 my-2 border-t border-[var(--border-primary)]" />

      {/* Release icons */}
      {releases.map((release) => (
        <ReleaseIcon
          key={release.id}
          coverArt={release.coverArt}
          titleRomaji={release.titleRomaji}
          isSelected={selectedReleaseSlug === release.slug}
          onClick={() => selectRelease(
            selectedReleaseSlug === release.slug ? null : release.slug
          )}
        />
      ))}

      {/* Spacer */}
      <div className="flex-1" />

      {/* Hamburger toggle button */}
      <button
        onClick={toggleSidebar}
        title={isOpen ? 'Collapse sidebar' : 'Expand sidebar'}
        className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--bg-primary)] border border-[var(--border-primary)] text-[var(--text-muted)] transition-all hover:bg-[var(--bg-secondary)] hover:text-[var(--text-primary)]"
      >
        {isOpen ? (
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        )}
      </button>
    </div>
  )
}
