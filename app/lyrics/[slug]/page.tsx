import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { getSongBySlug, getTrackContext } from '@/lib/queries'
import { LyricsPageClient } from './LyricsClient'

export const dynamic = 'force-dynamic'

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const song = await getSongBySlug(slug)

  if (!song) {
    return { title: 'Song Not Found' }
  }

  return {
    title: `${song.titleRomaji} Lyrics - ${song.titleJp}`,
    description: `Lyrics for ${song.titleRomaji} (${song.titleJp}) by 梟 (Fukuro) with Japanese, Romaji, and English translations.`,
  }
}

export default async function LyricsPage({ params }: PageProps) {
  const { slug } = await params
  const song = await getSongBySlug(slug)

  if (!song) {
    notFound()
  }

  // Get track context for navigation (use first release)
  const firstRelease = song.releases[0]
  const trackContext = firstRelease
    ? await getTrackContext(slug, firstRelease.release.slug)
    : null

  return <LyricsPageClient song={song} trackContext={trackContext} />
}
