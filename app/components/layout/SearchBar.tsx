'use client'

import { useState, useRef, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import type { SongSearchResult } from '@/types'

interface SearchBarProps {
  songs: SongSearchResult[]
}

export function SearchBar({ songs }: SearchBarProps) {
  const router = useRouter()
  const [query, setQuery] = useState('')
  const [isOpen, setIsOpen] = useState(false)
  const [selectedIndex, setSelectedIndex] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  const filteredSongs = query.length > 0
    ? songs.filter(song => {
        const q = query.toLowerCase()
        return (
          song.titleJp.toLowerCase().includes(q) ||
          song.titleRomaji.toLowerCase().includes(q) ||
          (song.titleEn?.toLowerCase().includes(q) ?? false)
        )
      }).slice(0, 8)
    : []

  useEffect(() => {
    setSelectedIndex(0)
  }, [query])

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  function handleKeyDown(e: React.KeyboardEvent) {
    if (!isOpen || filteredSongs.length === 0) return

    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault()
        setSelectedIndex(i => (i + 1) % filteredSongs.length)
        break
      case 'ArrowUp':
        e.preventDefault()
        setSelectedIndex(i => (i - 1 + filteredSongs.length) % filteredSongs.length)
        break
      case 'Enter':
        e.preventDefault()
        if (filteredSongs[selectedIndex]) {
          navigateToSong(filteredSongs[selectedIndex].slug)
        }
        break
      case 'Escape':
        setIsOpen(false)
        inputRef.current?.blur()
        break
    }
  }

  function navigateToSong(slug: string) {
    setQuery('')
    setIsOpen(false)
    router.push(`/lyrics/${slug}`)
  }

  return (
    <div ref={containerRef} className="relative">
      <div className="relative">
        <svg
          className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[var(--text-muted)]"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
        <input
          ref={inputRef}
          type="text"
          placeholder="Search..."
          value={query}
          onChange={e => {
            setQuery(e.target.value)
            setIsOpen(true)
          }}
          onFocus={() => setIsOpen(true)}
          onKeyDown={handleKeyDown}
          className="w-36 rounded-md border border-[var(--border-primary)] bg-[var(--bg-secondary)] py-1.5 pl-9 pr-3 text-sm
                     text-[var(--text-primary)] placeholder:text-[var(--text-muted)]
                     focus:w-48 focus:border-[var(--border-secondary)] focus:outline-none
                     transition-all duration-200"
        />
      </div>

      {isOpen && query.length > 0 && (
        <div className="absolute right-0 top-full z-50 mt-1 w-72 overflow-hidden rounded-md border border-[var(--border-primary)] bg-[var(--bg-secondary)] shadow-lg">
          {filteredSongs.length > 0 ? (
            <ul className="max-h-64 overflow-y-auto py-1">
              {filteredSongs.map((song, index) => (
                <li key={song.slug}>
                  <button
                    onClick={() => navigateToSong(song.slug)}
                    className={`
                      w-full px-3 py-2 text-left text-sm transition-colors
                      ${index === selectedIndex ? 'bg-[var(--bg-tertiary)]' : 'hover:bg-[var(--bg-tertiary)]'}
                    `}
                  >
                    <span className="font-medium text-[var(--text-primary)]">{song.titleRomaji}</span>
                    <span className="ml-2 text-[var(--text-muted)]" lang="ja">{song.titleJp}</span>
                  </button>
                </li>
              ))}
            </ul>
          ) : (
            <div className="px-3 py-4 text-center text-sm text-[var(--text-muted)]">
              No songs found
            </div>
          )}
        </div>
      )}
    </div>
  )
}
