'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Container } from '@/components/layout'
import type { LyricsViewMode } from '@/types'

interface TrackContext {
  currentTrack: number
  totalTracks: number
  prevSong: { slug: string; titleRomaji: string } | null
  nextSong: { slug: string; titleRomaji: string } | null
}

interface LyricsPageClientProps {
  song: {
    titleJp: string
    titleRomaji: string
    titleEn: string | null
    lyricsJp: string
    lyricsRomaji: string
    lyricsEn: string
    notes: string | null
    releases: {
      release: {
        slug: string
        titleJp: string
        titleRomaji: string
      }
      trackNumber: number
    }[]
  }
  trackContext?: TrackContext | null
}

const viewModeLabels: Record<LyricsViewMode, string> = {
  japanese: '日本語',
  romaji: 'Romaji',
  english: 'English',
  'side-by-side': 'Side by Side',
  stacked: 'Stacked',
}

function LyricsContent({
  lyricsJp,
  lyricsRomaji,
  lyricsEn,
  viewMode,
}: {
  lyricsJp: string
  lyricsRomaji: string
  lyricsEn: string
  viewMode: LyricsViewMode
}) {
  const jpLines = lyricsJp.split('\n')
  const romajiLines = lyricsRomaji.split('\n')
  const enLines = lyricsEn.split('\n')

  if (viewMode === 'japanese') {
    return (
      <div className="lyrics-text" lang="ja">
        {jpLines.map((line, i) => (
          <p key={i} className={line === '' ? 'h-6' : ''}>
            {line}
          </p>
        ))}
      </div>
    )
  }

  if (viewMode === 'romaji') {
    return (
      <div className="lyrics-text">
        {romajiLines.map((line, i) => (
          <p key={i} className={line === '' ? 'h-6' : ''}>
            {line}
          </p>
        ))}
      </div>
    )
  }

  if (viewMode === 'english') {
    return (
      <div className="lyrics-text">
        {enLines.map((line, i) => (
          <p key={i} className={line === '' ? 'h-6' : ''}>
            {line}
          </p>
        ))}
      </div>
    )
  }

  if (viewMode === 'side-by-side') {
    const maxLines = Math.max(jpLines.length, romajiLines.length, enLines.length)
    return (
      <div className="overflow-x-auto">
        <table className="w-full min-w-[800px] border-collapse">
          <thead>
            <tr className="border-b border-neutral-200 text-left text-sm text-neutral-500">
              <th className="pb-2 pr-4 font-medium">日本語</th>
              <th className="pb-2 pr-4 font-medium">Romaji</th>
              <th className="pb-2 font-medium">English</th>
            </tr>
          </thead>
          <tbody className="lyrics-text">
            {Array.from({ length: maxLines }).map((_, i) => (
              <tr key={i} className="border-b border-neutral-100">
                <td className="py-1 pr-4 align-top" lang="ja">
                  {jpLines[i] || ''}
                </td>
                <td className="py-1 pr-4 align-top">{romajiLines[i] || ''}</td>
                <td className="py-1 align-top">{enLines[i] || ''}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )
  }

  // Stacked mode (default)
  const maxLines = Math.max(jpLines.length, romajiLines.length, enLines.length)
  return (
    <div className="space-y-6">
      {Array.from({ length: maxLines }).map((_, i) => {
        const jp = jpLines[i] || ''
        const romaji = romajiLines[i] || ''
        const en = enLines[i] || ''

        // Skip empty line groups
        if (!jp && !romaji && !en) {
          return <div key={i} className="h-4" />
        }

        return (
          <div key={i} className="space-y-1">
            {jp && (
              <p className="text-lg font-medium" lang="ja">
                {jp}
              </p>
            )}
            {romaji && <p className="text-neutral-600">{romaji}</p>}
            {en && <p className="text-neutral-500 italic">{en}</p>}
          </div>
        )
      })}
    </div>
  )
}

const VIEW_MODE_KEY = 'fukuro-lyrics-view-mode'

export function LyricsPageClient({ song, trackContext }: LyricsPageClientProps) {
  const [viewMode, setViewMode] = useState<LyricsViewMode>('stacked')

  // Load saved view mode from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem(VIEW_MODE_KEY)
    if (saved && ['stacked', 'side-by-side', 'japanese', 'romaji', 'english'].includes(saved)) {
      setViewMode(saved as LyricsViewMode)
    }
  }, [])

  // Save view mode to localStorage when changed
  const handleViewModeChange = (mode: LyricsViewMode) => {
    setViewMode(mode)
    localStorage.setItem(VIEW_MODE_KEY, mode)
  }

  const firstRelease = song.releases[0]

  return (
    <Container>
      {/* Back Link */}
      {firstRelease && (
        <Link
          href={`/releases/${firstRelease.release.slug}`}
          className="mb-6 inline-flex items-center text-sm text-neutral-500 transition-colors hover:text-black"
        >
          <span className="mr-1">←</span> Back to {firstRelease.release.titleRomaji}
        </Link>
      )}

      {/* Song Header */}
      <header className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight">
          <span lang="ja">{song.titleJp}</span>
        </h1>
        <p className="mt-1 text-xl text-neutral-500">{song.titleRomaji}</p>
        {song.titleEn && (
          <p className="mt-1 text-neutral-400">{song.titleEn}</p>
        )}

        {/* Release info */}
        {firstRelease && (
          <p className="mt-3 text-sm text-neutral-500">
            Track {firstRelease.trackNumber} on{' '}
            <Link
              href={`/releases/${firstRelease.release.slug}`}
              className="underline hover:text-black"
            >
              {firstRelease.release.titleRomaji}
            </Link>
          </p>
        )}
      </header>

      {/* View Mode Toggle */}
      <div className="mb-6 flex flex-wrap gap-2">
        {(
          ['stacked', 'side-by-side', 'japanese', 'romaji', 'english'] as LyricsViewMode[]
        ).map((mode) => (
          <button
            key={mode}
            onClick={() => handleViewModeChange(mode)}
            className={`rounded-full px-3 py-1 text-sm transition-colors ${
              viewMode === mode
                ? 'bg-black text-white'
                : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200'
            }`}
          >
            {viewModeLabels[mode]}
          </button>
        ))}
      </div>

      {/* Lyrics Content */}
      <section className="mb-8">
        <LyricsContent
          lyricsJp={song.lyricsJp}
          lyricsRomaji={song.lyricsRomaji}
          lyricsEn={song.lyricsEn}
          viewMode={viewMode}
        />
      </section>

      {/* Notes */}
      {song.notes && (
        <section className="border-t border-neutral-200 pt-6">
          <h2 className="mb-2 text-sm font-medium uppercase tracking-wider text-neutral-400">
            Translation Notes
          </h2>
          <p className="text-sm text-neutral-600">{song.notes}</p>
        </section>
      )}

      {/* Track Navigation */}
      {trackContext && (
        <nav className="mt-8 border-t border-neutral-200 pt-6">
          <div className="mb-4 text-center text-sm text-neutral-500">
            Track {trackContext.currentTrack} of {trackContext.totalTracks}
          </div>
          <div className="flex items-center justify-between gap-4">
            {trackContext.prevSong ? (
              <Link
                href={`/lyrics/${trackContext.prevSong.slug}`}
                className="flex items-center gap-2 rounded-lg border border-neutral-200 px-4 py-2 text-sm transition-colors hover:border-neutral-300 hover:bg-neutral-50"
              >
                <span>←</span>
                <span className="hidden sm:inline">{trackContext.prevSong.titleRomaji}</span>
                <span className="sm:hidden">Previous</span>
              </Link>
            ) : (
              <div />
            )}
            {trackContext.nextSong ? (
              <Link
                href={`/lyrics/${trackContext.nextSong.slug}`}
                className="flex items-center gap-2 rounded-lg border border-neutral-200 px-4 py-2 text-sm transition-colors hover:border-neutral-300 hover:bg-neutral-50"
              >
                <span className="hidden sm:inline">{trackContext.nextSong.titleRomaji}</span>
                <span className="sm:hidden">Next</span>
                <span>→</span>
              </Link>
            ) : (
              <div />
            )}
          </div>
        </nav>
      )}
    </Container>
  )
}
