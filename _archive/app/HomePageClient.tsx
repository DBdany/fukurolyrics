'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Container } from '@/components/layout'
import { AlbumCover } from './components/ui/AlbumCover'
import { AnimatedHero } from './components/ui/AnimatedHero'
import { CollapsibleBanner } from './components/ui/CollapsibleBanner'
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
        {/* Collapsible Hero Banner */}
        <CollapsibleBanner
          imageSrc="/images/band-banner.jpg"
          title="FUKURO LYRICS"
          titleJp="梟"
          subtitle="Japanese Visual Kei Lyrics Archive"
        />

        <Container>
          {/* Band Members */}
          <section className="mb-8">
            <h2 className="mb-4 text-sm font-medium uppercase tracking-wider text-[var(--text-muted)]">
              Members
            </h2>
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-[var(--text-secondary)]">
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
                className="inline-flex items-center gap-2 rounded-full border border-[var(--border-primary)] bg-[var(--bg-secondary)] px-4 py-2 text-sm text-[var(--text-secondary)] transition-colors hover:border-[var(--border-secondary)] hover:bg-[var(--bg-tertiary)]"
              >
                <span>🎲</span>
                Discover a random song
              </button>
            </section>
          )}

          {/* Featured Release */}
          {featuredRelease && (
            <section className="mb-8">
              <h2 className="mb-4 text-sm font-medium uppercase tracking-wider text-[var(--text-muted)]">
                Latest Release
              </h2>
              <Link
                href={`/releases/${featuredRelease.slug}`}
                className="block rounded-xl border-2 border-[var(--bg-accent)] bg-[var(--bg-accent)] p-6 text-[var(--text-inverted)] transition-all hover:opacity-90"
              >
                <div className="flex gap-5">
                  <AlbumCover
                    src={featuredRelease.coverArt}
                    alt={`${featuredRelease.titleRomaji} cover`}
                    size="md"
                    priority
                  />
                  <div className="flex flex-1 items-start justify-between gap-4">
                    <div>
                      {isRecentRelease(featuredRelease.releaseDate) && (
                        <span className="mb-2 inline-block rounded-full bg-[var(--status-success)] px-2 py-0.5 text-xs font-medium text-white">
                          New
                        </span>
                      )}
                      <h3 className="text-xl font-bold">
                        <span lang="ja">{featuredRelease.titleJp}</span>
                        <span className="ml-2 opacity-60">
                          {featuredRelease.titleRomaji}
                        </span>
                      </h3>
                      <p className="mt-2 opacity-60">
                        {featuredRelease.tracks.length} {featuredRelease.tracks.length === 1 ? 'track' : 'tracks'}
                      </p>
                    </div>
                    <div className="text-right text-sm opacity-60">
                      <p>{getReleaseTypeLabel(featuredRelease.type)}</p>
                      <p>{formatDate(featuredRelease.releaseDate)}</p>
                    </div>
                  </div>
                </div>
              </Link>
            </section>
          )}

          {/* Discography */}
          <section>
            <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
              <h2 className="text-sm font-medium uppercase tracking-wider text-[var(--text-muted)]">
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
                        ? 'bg-[var(--bg-accent)] text-[var(--text-inverted)]'
                        : 'bg-[var(--bg-secondary)] text-[var(--text-secondary)] hover:bg-[var(--bg-tertiary)]'
                    }`}
                  >
                    {type === 'ALL' ? 'All' : getReleaseTypeLabel(type)}
                  </button>
                ))}
              </div>
            </div>

            {otherReleases.length === 0 ? (
              <div className="rounded-lg border border-dashed border-[var(--border-secondary)] p-8 text-center">
                <p className="text-[var(--text-muted)]">
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
                    className="block rounded-lg border border-[var(--border-primary)] p-4 transition-colors hover:border-[var(--border-secondary)] hover:bg-[var(--bg-secondary)]"
                  >
                    <div className="flex gap-4">
                      <AlbumCover
                        src={release.coverArt}
                        alt={`${release.titleRomaji} cover`}
                        size="sm"
                      />
                      <div className="flex flex-1 items-start justify-between gap-4">
                        <div>
                          {isRecentRelease(release.releaseDate) && (
                            <span className="mb-1 inline-block rounded-full bg-[var(--status-success)] px-2 py-0.5 text-xs font-medium text-white">
                              New
                            </span>
                          )}
                          <h3 className="font-medium">
                            <span lang="ja">{release.titleJp}</span>
                            <span className="ml-2 text-[var(--text-muted)]">
                              {release.titleRomaji}
                            </span>
                          </h3>
                          <p className="mt-1 text-sm text-[var(--text-muted)]">
                            {release.tracks.length} {release.tracks.length === 1 ? 'track' : 'tracks'}
                          </p>
                        </div>
                        <div className="text-right text-sm text-[var(--text-muted)]">
                          <p>{getReleaseTypeLabel(release.type)}</p>
                          <p>{formatDate(release.releaseDate)}</p>
                        </div>
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
