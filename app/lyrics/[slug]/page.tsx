import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { getSongBySlug, getAllSongSlugs } from '@/lib/queries'
import { LyricsPageClient } from './LyricsClient'

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const songs = await getAllSongSlugs()
  return songs.map((song) => ({
    slug: song.slug,
  }))
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

  return <LyricsPageClient song={song} />
}
