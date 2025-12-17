import { getAllReleases } from '@/lib/queries'
import { HomePageClient } from './HomePageClient'
import type { ReleaseWithTracks } from '@/types'

export default async function HomePage() {
  const releases = (await getAllReleases()) as ReleaseWithTracks[]

  return <HomePageClient releases={releases} />
}
