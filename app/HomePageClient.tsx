'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Container } from '@/components/layout'
import { AnimatedHero } from './components/ui/AnimatedHero'
import type { ReleaseWithTracks } from '@/types'

type ReleaseFilter = 'ALL' | 'ALBUM' | 'EP' | 'SINGLE'

function formatDate(date: Date): string {
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  }).format(new Date(date))
}

function getReleaseTypeLabel(type: string): string {
  switch (type) {
    case 'ALBUM':
      return 'Album'
    case 'EP':
      return 'EP'
    case 'SINGLE':
      return 'Single'
    default:
      return type
  }
}

function isRecentRelease(date: Date): boolean {
  const thirtyDaysAgo = new Date()
  thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30)
  return new Date(date) > thirtyDaysAgo
}

interface HomePageClientProps {
  releases: ReleaseWithTracks[]
  allSongSlugs?: string[]
}

export function HomePageClient({ releases, allSongSlugs = [] }: HomePageClientProps) {
  const router = useRouter()
  const [animationComplete, setAnimationComplete] = useState(false)
  const [typeFilter, setTypeFilter] = useState<ReleaseFilter>('ALL')

  const filteredReleases = useMemo(() => {
    if (typeFilter === 'ALL') return releases
    return releases.filter(r => r.type === typeFilter)
  }, [releases, typeFilter])

  const featuredRelease = releases[0] // Most recent
  const otherReleases = filteredReleases.filter(r => r.id !== featuredRelease?.id)

  const handleRandomSong = () => {
    if (allSongSlugs.length === 0) return
    const randomSlug = allSongSlugs[Math.floor(Math.random() * allSongSlugs.length)]
    router.push(`/lyrics/${randomSlug}`)
  }

  return (
    <>
      <AnimatedHero onAnimationComplete={() => setAnimationComplete(true)} />

      <div
        className={`
          transition-opacity duration-500
          ${animationComplete ? 'opacity-100' : 'opacity-0'}
        `}
      >
        <Container>
          {/* Hero Section */}
          <section className="mb-12 text-center">
            <h1
              className={`
                mb-4 text-4xl font-bold tracking-tight
                transition-all duration-500
                ${animationComplete ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}
              `}
            >
              <span lang="ja" className="mr-3">梟</span>
              <span className="text-neutral-400">FUKURO</span>
            </h1>

            <p
              className={`
                mx-auto max-w-lg text-lg text-neutral-600
                transition-all duration-500 delay-100
                ${animationComplete ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}
              `}
            >
              Lyrics archive for the Japanese visual kei band 梟 (Fukuro).
              Japanese, Romaji, and English translations.
            </p>
          </section>

          {/* Band Members */}
          <section className="mb-12">
            <h2 className="mb-4 text-sm font-medium uppercase tracking-wider text-neutral-400">
              Members
            </h2>
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-neutral-600">
              <span>Yoshiatsu (Vo.)</span>
              <span>Daisuke (Gt.)</span>
              <span>Yutara (Ba.)</span>
              <span>Lotto (Dr.)</span>
            </div>
          </section>

          {/* Random Song Button */}
          {allSongSlugs.length > 0 && (
            <section className="mb-8 text-center">
              <button
                onClick={handleRandomSong}
                className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-4 py-2 text-sm text-neutral-600 transition-colors hover:border-neutral-300 hover:bg-neutral-50"
              >
                <span>🎲</span>
                Discover a random song
              </button>
            </section>
          )}

          {/* Featured Release */}
          {featuredRelease && (
            <section className="mb-8">
              <h2 className="mb-4 text-sm font-medium uppercase tracking-wider text-neutral-400">
                Latest Release
              </h2>
              <Link
                href={`/releases/${featuredRelease.slug}`}
                className="block rounded-xl border-2 border-neutral-900 bg-neutral-900 p-6 text-white transition-all hover:bg-neutral-800"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    {isRecentRelease(featuredRelease.releaseDate) && (
                      <span className="mb-2 inline-block rounded-full bg-green-500 px-2 py-0.5 text-xs font-medium text-white">
                        New
                      </span>
                    )}
                    <h3 className="text-xl font-bold">
                      <span lang="ja">{featuredRelease.titleJp}</span>
                      <span className="ml-2 text-neutral-400">
                        {featuredRelease.titleRomaji}
                      </span>
                    </h3>
                    <p className="mt-2 text-neutral-400">
                      {featuredRelease.tracks.length} tracks
                    </p>
                  </div>
                  <div className="text-right text-sm text-neutral-400">
                    <p>{getReleaseTypeLabel(featuredRelease.type)}</p>
                    <p>{formatDate(featuredRelease.releaseDate)}</p>
                  </div>
                </div>
              </Link>
            </section>
          )}

          {/* Discography */}
          <section>
            <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
              <h2 className="text-sm font-medium uppercase tracking-wider text-neutral-400">
                All Releases
              </h2>

              {/* Type Filter Tabs */}
              <div className="flex gap-2">
                {(['ALL', 'ALBUM', 'EP', 'SINGLE'] as ReleaseFilter[]).map((type) => (
                  <button
                    key={type}
                    onClick={() => setTypeFilter(type)}
                    className={`rounded-full px-3 py-1 text-sm transition-colors ${
                      typeFilter === type
                        ? 'bg-black text-white'
                        : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200'
                    }`}
                  >
                    {type === 'ALL' ? 'All' : getReleaseTypeLabel(type)}
                  </button>
                ))}
              </div>
            </div>

            {otherReleases.length === 0 ? (
              <div className="rounded-lg border border-dashed border-neutral-300 p-8 text-center">
                <p className="text-neutral-500">
                  {typeFilter === 'ALL'
                    ? 'No other releases yet.'
                    : `No ${getReleaseTypeLabel(typeFilter).toLowerCase()}s found.`}
                </p>
              </div>
            ) : (
              <div className="space-y-4">
                {otherReleases.map((release) => (
                  <Link
                    key={release.id}
                    href={`/releases/${release.slug}`}
                    className="block rounded-lg border border-neutral-200 p-4 transition-colors hover:border-neutral-300 hover:bg-neutral-50"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        {isRecentRelease(release.releaseDate) && (
                          <span className="mb-1 inline-block rounded-full bg-green-500 px-2 py-0.5 text-xs font-medium text-white">
                            New
                          </span>
                        )}
                        <h3 className="font-medium">
                          <span lang="ja">{release.titleJp}</span>
                          <span className="ml-2 text-neutral-500">
                            {release.titleRomaji}
                          </span>
                        </h3>
                        <p className="mt-1 text-sm text-neutral-500">
                          {release.tracks.length} tracks
                        </p>
                      </div>
                      <div className="text-right text-sm text-neutral-500">
                        <p>{getReleaseTypeLabel(release.type)}</p>
                        <p>{formatDate(release.releaseDate)}</p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </section>
        </Container>
      </div>
    </>
  )
}
