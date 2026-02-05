'use client'

import { createContext, useContext, useEffect, useState, type ReactNode } from 'react'
import type { ReleaseWithTracks } from '@/types'

interface SidebarState {
  isOpen: boolean
  selectedReleaseSlug: string | null
  isPanelOpen: boolean
}

interface SidebarContextType extends SidebarState {
  releases: ReleaseWithTracks[]
  selectedRelease: ReleaseWithTracks | null
  toggleSidebar: () => void
  selectRelease: (slug: string | null) => void
  openPanel: () => void
  closePanel: () => void
}

const SidebarContext = createContext<SidebarContextType>({
  isOpen: false,
  selectedReleaseSlug: null,
  isPanelOpen: false,
  releases: [],
  selectedRelease: null,
  toggleSidebar: () => {},
  selectRelease: () => {},
  openPanel: () => {},
  closePanel: () => {},
})

export function useSidebar() {
  return useContext(SidebarContext)
}

const STORAGE_KEY = 'fukuro-sidebar'

interface SidebarProviderProps {
  children: ReactNode
  releases: ReleaseWithTracks[]
}

export function SidebarProvider({ children, releases }: SidebarProviderProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedReleaseSlug, setSelectedReleaseSlug] = useState<string | null>(null)
  const [isPanelOpen, setIsPanelOpen] = useState(false)
  const [mounted, setMounted] = useState(false)

  // Load persisted state on mount
  useEffect(() => {
    setMounted(true)
    try {
      const stored = localStorage.getItem(STORAGE_KEY)
      if (stored) {
        const parsed = JSON.parse(stored) as Partial<SidebarState>
        if (typeof parsed.isOpen === 'boolean') setIsOpen(parsed.isOpen)
        if (parsed.selectedReleaseSlug) {
          setSelectedReleaseSlug(parsed.selectedReleaseSlug)
          setIsPanelOpen(true)
        }
      }
    } catch {
      // Ignore parse errors
    }
  }, [])

  // Persist state changes
  useEffect(() => {
    if (!mounted) return
    localStorage.setItem(STORAGE_KEY, JSON.stringify({
      isOpen,
      selectedReleaseSlug,
    }))
  }, [isOpen, selectedReleaseSlug, mounted])

  const toggleSidebar = () => {
    setIsOpen(prev => !prev)
  }

  const selectRelease = (slug: string | null) => {
    setSelectedReleaseSlug(slug)
    if (slug) {
      setIsPanelOpen(true)
      // Auto-expand sidebar if collapsed
      if (!isOpen) setIsOpen(true)
    } else {
      setIsPanelOpen(false)
    }
  }

  const openPanel = () => setIsPanelOpen(true)
  const closePanel = () => setIsPanelOpen(false)

  const selectedRelease = selectedReleaseSlug
    ? releases.find(r => r.slug === selectedReleaseSlug) ?? null
    : null

  // Prevent hydration mismatch
  if (!mounted) {
    return <>{children}</>
  }

  return (
    <SidebarContext.Provider
      value={{
        isOpen,
        selectedReleaseSlug,
        isPanelOpen,
        releases,
        selectedRelease,
        toggleSidebar,
        selectRelease,
        openPanel,
        closePanel,
      }}
    >
      {children}
    </SidebarContext.Provider>
  )
}
