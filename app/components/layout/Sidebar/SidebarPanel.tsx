'use client'

import { useSidebar } from '@/components/SidebarProvider'
import { TrackList } from './TrackList'

export function SidebarPanel() {
  const { selectedRelease, isPanelOpen } = useSidebar()

  if (!selectedRelease || !isPanelOpen) {
    return (
      <div className="sidebar-panel flex flex-col items-center justify-center text-center">
        <p className="px-4 text-sm text-[var(--text-muted)]">
          Select a release to see tracks
        </p>
      </div>
    )
  }

  return (
    <div className="sidebar-panel">
      <TrackList release={selectedRelease} />
    </div>
  )
}
