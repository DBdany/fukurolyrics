import Link from 'next/link'
import { Container } from '@/components/layout'
import { getAllReleases } from '@/lib/queries'
import type { ReleaseWithTracks } from '@/types'

function formatDate(date: Date): string {
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  }).format(date)
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

export default async function HomePage() {
  const releases = await getAllReleases() as ReleaseWithTracks[]

  return (
    <Container>
      {/* Hero Section */}
      <section className="mb-12 text-center">
        <h1 className="mb-4 text-4xl font-bold tracking-tight">
          <span lang="ja" className="mr-3">梟</span>
          <span className="text-neutral-400">FUKURO</span>
        </h1>
        <p className="mx-auto max-w-lg text-lg text-neutral-600">
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

      {/* Discography */}
      <section>
        <h2 className="mb-6 text-sm font-medium uppercase tracking-wider text-neutral-400">
          Discography
        </h2>

        {releases.length === 0 ? (
          <div className="rounded-lg border border-dashed border-neutral-300 p-8 text-center">
            <p className="text-neutral-500">No releases yet. Add some lyrics to get started!</p>
          </div>
        ) : (
          <div className="space-y-4">
            {releases.map((release) => (
              <Link
                key={release.id}
                href={`/releases/${release.slug}`}
                className="block rounded-lg border border-neutral-200 p-4 transition-colors hover:border-neutral-300 hover:bg-neutral-50"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
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
  )
}
