import Link from 'next/link'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { Container } from '@/components/layout'
import { AlbumCover } from '@/components/ui/AlbumCover'
import { getReleaseBySlug } from '@/lib/queries'
import type { ReleaseWithTracks } from '@/types'

export const dynamic = 'force-dynamic'

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const release = await getReleaseBySlug(slug)

  if (!release) {
    return { title: 'Release Not Found' }
  }

  return {
    title: `${release.titleRomaji} - ${release.titleJp}`,
    description: `Lyrics for ${release.titleRomaji} (${release.titleJp}) by 梟 (Fukuro). ${release.tracks.length} tracks with Japanese, Romaji, and English translations.`,
  }
}

function formatDate(date: Date): string {
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
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

export default async function ReleasePage({ params }: PageProps) {
  const { slug } = await params
  const release = (await getReleaseBySlug(slug)) as ReleaseWithTracks | null

  if (!release) {
    notFound()
  }

  return (
    <Container>
      {/* Back Link */}
      <Link
        href="/"
        className="mb-6 inline-flex items-center text-sm text-neutral-500 transition-colors hover:text-black"
      >
        <span className="mr-1">←</span> Back to discography
      </Link>

      {/* Release Header */}
      <header className="mb-8 border-b border-neutral-200 pb-8">
        <div className="flex gap-6">
          <AlbumCover
            src={release.coverArt}
            alt={`${release.titleRomaji} cover art`}
            size="lg"
            priority
          />
          <div>
            <p className="mb-2 text-sm text-neutral-500">
              {getReleaseTypeLabel(release.type)} · {formatDate(release.releaseDate)}
            </p>
            <h1 className="text-3xl font-bold tracking-tight">
              <span lang="ja">{release.titleJp}</span>
            </h1>
            <p className="mt-1 text-xl text-neutral-500">{release.titleRomaji}</p>
            {release.titleEn && (
              <p className="mt-1 text-neutral-400">{release.titleEn}</p>
            )}
          </div>
        </div>
      </header>

      {/* Tracklist */}
      <section>
        <h2 className="mb-4 text-sm font-medium uppercase tracking-wider text-neutral-400">
          Tracklist
        </h2>

        {release.tracks.length === 0 ? (
          <p className="text-neutral-500">No tracks available.</p>
        ) : (
          <ol className="space-y-2">
            {release.tracks.map((track) => (
              <li key={track.id}>
                <Link
                  href={`/lyrics/${track.song.slug}`}
                  className="flex items-baseline gap-4 rounded-lg px-3 py-2 transition-colors hover:bg-neutral-50"
                >
                  <span className="w-6 text-right text-sm text-neutral-400">
                    {track.trackNumber}.
                  </span>
                  <span className="flex-1">
                    <span lang="ja" className="font-medium">
                      {track.song.titleJp}
                    </span>
                    <span className="ml-2 text-neutral-500">
                      {track.song.titleRomaji}
                    </span>
                  </span>
                </Link>
              </li>
            ))}
          </ol>
        )}
      </section>
    </Container>
  )
}
