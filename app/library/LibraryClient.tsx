'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'
import { Container } from '@/components/layout'
import type { SongLibraryItem } from '@/types'

type FilterStatus = 'all' | 'has-lyrics' | 'missing-lyrics'
type SortOption = 'title-asc' | 'title-desc'
type ViewMode = 'table' | 'cards'

interface LibraryClientProps {
  songs: SongLibraryItem[]
}

export function LibraryClient({ songs }: LibraryClientProps) {
  const [filter, setFilter] = useState<FilterStatus>('all')
  const [sort, setSort] = useState<SortOption>('title-asc')
  const [viewMode, setViewMode] = useState<ViewMode>('table')

  const songsWithLyrics = songs.filter(s => s.hasLyrics).length
  const songsMissingLyrics = songs.length - songsWithLyrics

  const filteredAndSortedSongs = useMemo(() => {
    let result = [...songs]

    // Apply filter
    if (filter === 'has-lyrics') {
      result = result.filter(s => s.hasLyrics)
    } else if (filter === 'missing-lyrics') {
      result = result.filter(s => !s.hasLyrics)
    }

    // Apply sort
    result.sort((a, b) => {
      const comparison = a.titleRomaji.localeCompare(b.titleRomaji)
      return sort === 'title-desc' ? -comparison : comparison
    })

    return result
  }, [songs, filter, sort])

  return (
    <Container>
      <div className="mb-6">
        <h1 className="text-3xl font-bold tracking-tight">Library</h1>
        <p className="mt-2 text-neutral-500">
          {songs.length} songs · {songsWithLyrics} with lyrics · {songsMissingLyrics} pending
        </p>
      </div>

      {/* Filter & Sort Controls */}
      <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
        {/* Filter Tabs */}
        <div className="flex gap-2">
          <button
            onClick={() => setFilter('all')}
            className={`rounded-full px-3 py-1.5 text-sm transition-colors ${
              filter === 'all'
                ? 'bg-black text-white'
                : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200'
            }`}
          >
            All ({songs.length})
          </button>
          <button
            onClick={() => setFilter('has-lyrics')}
            className={`rounded-full px-3 py-1.5 text-sm transition-colors ${
              filter === 'has-lyrics'
                ? 'bg-green-600 text-white'
                : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200'
            }`}
          >
            <span className="mr-1.5 inline-block h-2 w-2 rounded-full bg-green-500" />
            Has Lyrics ({songsWithLyrics})
          </button>
          <button
            onClick={() => setFilter('missing-lyrics')}
            className={`rounded-full px-3 py-1.5 text-sm transition-colors ${
              filter === 'missing-lyrics'
                ? 'bg-neutral-600 text-white'
                : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200'
            }`}
          >
            <span className="mr-1.5 inline-block h-2 w-2 rounded-full bg-neutral-400" />
            Missing ({songsMissingLyrics})
          </button>
        </div>

        <div className="flex items-center gap-3">
          {/* View Toggle */}
          <div className="flex rounded-lg border border-neutral-200 p-0.5">
            <button
              onClick={() => setViewMode('table')}
              className={`rounded-md px-2 py-1 text-sm transition-colors ${
                viewMode === 'table'
                  ? 'bg-neutral-900 text-white'
                  : 'text-neutral-600 hover:bg-neutral-100'
              }`}
              aria-label="Table view"
            >
              ☰
            </button>
            <button
              onClick={() => setViewMode('cards')}
              className={`rounded-md px-2 py-1 text-sm transition-colors ${
                viewMode === 'cards'
                  ? 'bg-neutral-900 text-white'
                  : 'text-neutral-600 hover:bg-neutral-100'
              }`}
              aria-label="Card view"
            >
              ▦
            </button>
          </div>

          {/* Sort Dropdown */}
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value as SortOption)}
            className="rounded-lg border border-neutral-200 bg-white px-3 py-1.5 text-sm text-neutral-600 focus:border-neutral-400 focus:outline-none"
          >
            <option value="title-asc">Title A–Z</option>
            <option value="title-desc">Title Z–A</option>
          </select>
        </div>
      </div>

      {/* Table View */}
      {viewMode === 'table' && (
        <div className="overflow-hidden rounded-lg border border-neutral-200">
          <table className="w-full">
            <thead>
              <tr className="border-b border-neutral-200 bg-neutral-50 text-left text-sm text-neutral-500">
                <th scope="col" className="w-8 px-4 py-3">
                  <span className="sr-only">Status</span>
                </th>
                <th scope="col" className="px-4 py-3">Title</th>
                <th scope="col" className="hidden px-4 py-3 sm:table-cell">Release</th>
              </tr>
            </thead>
            <tbody>
              {filteredAndSortedSongs.map((song, index) => (
                <tr
                  key={song.slug}
                  className={`
                    border-b border-neutral-100 last:border-0
                    transition-colors hover:bg-neutral-50
                    ${index % 2 === 0 ? 'bg-white' : 'bg-neutral-50/50'}
                  `}
                >
                  <td className="px-4 py-3">
                    <span
                      className={`
                        inline-block h-2 w-2 rounded-full
                        ${song.hasLyrics ? 'bg-green-500' : 'bg-neutral-300'}
                      `}
                      role="img"
                      aria-label={song.hasLyrics ? 'Lyrics available' : 'Lyrics coming soon'}
                      title={song.hasLyrics ? 'Lyrics available' : 'Lyrics coming soon'}
                    />
                  </td>
                  <td className="px-4 py-3">
                    <Link
                      href={`/lyrics/${song.slug}`}
                      className="group block"
                    >
                      <span className="font-medium text-neutral-900 group-hover:text-black">
                        {song.titleRomaji}
                      </span>
                      <span className="ml-2 text-neutral-400" lang="ja">
                        {song.titleJp}
                      </span>
                    </Link>
                  </td>
                  <td className="hidden px-4 py-3 text-sm text-neutral-500 sm:table-cell">
                    {song.releases.length > 0 ? (
                      <Link
                        href={`/releases/${song.releases[0].slug}`}
                        className="hover:text-neutral-900"
                      >
                        {song.releases[0].titleRomaji}
                      </Link>
                    ) : (
                      <span className="text-neutral-300">-</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Card View */}
      {viewMode === 'cards' && (
        <div className="grid gap-3 sm:grid-cols-2">
          {filteredAndSortedSongs.map((song) => (
            <Link
              key={song.slug}
              href={`/lyrics/${song.slug}`}
              className="group block rounded-lg border border-neutral-200 p-4 transition-colors hover:border-neutral-300 hover:bg-neutral-50"
            >
              <div className="flex items-start gap-3">
                <span
                  className={`
                    mt-1.5 inline-block h-2.5 w-2.5 flex-shrink-0 rounded-full
                    ${song.hasLyrics ? 'bg-green-500' : 'bg-neutral-300'}
                  `}
                  role="img"
                  aria-label={song.hasLyrics ? 'Lyrics available' : 'Lyrics coming soon'}
                />
                <div className="min-w-0 flex-1">
                  <h3 className="font-medium text-neutral-900 group-hover:text-black">
                    {song.titleRomaji}
                  </h3>
                  <p className="mt-0.5 text-sm text-neutral-500" lang="ja">
                    {song.titleJp}
                  </p>
                  {song.releases.length > 0 && (
                    <p className="mt-2 text-xs text-neutral-400">
                      {song.releases[0].titleRomaji}
                    </p>
                  )}
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}

      {/* Empty State */}
      {filteredAndSortedSongs.length === 0 && (
        <div className="rounded-lg border border-dashed border-neutral-300 p-8 text-center">
          <p className="text-neutral-500">No songs match your filters.</p>
        </div>
      )}
    </Container>
  )
}
