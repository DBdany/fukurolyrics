import { getAllReleases, getAllSongSlugs } from '@/lib/queries'
import { HomePageClient } from './HomePageClient'
import type { ReleaseWithTracks } from '@/types'

export const dynamic = 'force-dynamic'

export default async function HomePage() {
  const [releases, songSlugs] = await Promise.all([
    getAllReleases(),
    getAllSongSlugs()
  ])

  return (
    <HomePageClient
      releases={releases as ReleaseWithTracks[]}
      allSongSlugs={songSlugs.map(s => s.slug)}
    />
  )
}
