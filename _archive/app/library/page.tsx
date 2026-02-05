import type { Metadata } from 'next'
import { getAllSongsWithStatus } from '@/lib/queries'
import { LibraryClient } from './LibraryClient'

export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: 'Library',
  description: 'Browse all Fukuro songs with lyrics availability status.',
}

export default async function LibraryPage() {
  const songs = await getAllSongsWithStatus()

  return <LibraryClient songs={songs} />
}
