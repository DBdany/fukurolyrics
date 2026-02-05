import { prisma } from './db'

export async function getAllReleases() {
  return prisma.release.findMany({
    orderBy: { releaseDate: 'desc' },
    include: {
      tracks: {
        include: { song: true },
        orderBy: { trackNumber: 'asc' }
      }
    }
  })
}

export async function getReleaseBySlug(slug: string) {
  return prisma.release.findUnique({
    where: { slug },
    include: {
      tracks: {
        include: { song: true },
        orderBy: { trackNumber: 'asc' }
      }
    }
  })
}

export async function getSongBySlug(slug: string) {
  return prisma.song.findUnique({
    where: { slug },
    include: {
      releases: {
        include: { release: true }
      }
    }
  })
}

export async function getAllSongSlugs() {
  return prisma.song.findMany({
    select: { slug: true }
  })
}

export async function getAllReleaseSlugs() {
  return prisma.release.findMany({
    select: { slug: true }
  })
}

export async function getAllSongsForSearch() {
  return prisma.song.findMany({
    select: {
      slug: true,
      titleJp: true,
      titleRomaji: true,
      titleEn: true
    },
    orderBy: { titleRomaji: 'asc' }
  })
}

export async function getTrackContext(songSlug: string, releaseSlug: string) {
  const release = await prisma.release.findUnique({
    where: { slug: releaseSlug },
    include: {
      tracks: {
        include: { song: { select: { slug: true, titleRomaji: true } } },
        orderBy: { trackNumber: 'asc' }
      }
    }
  })

  if (!release) return null

  const currentIndex = release.tracks.findIndex(t => t.song.slug === songSlug)
  if (currentIndex === -1) return null

  const prevTrack = currentIndex > 0 ? release.tracks[currentIndex - 1] : null
  const nextTrack = currentIndex < release.tracks.length - 1 ? release.tracks[currentIndex + 1] : null

  return {
    currentTrack: currentIndex + 1,
    totalTracks: release.tracks.length,
    prevSong: prevTrack ? { slug: prevTrack.song.slug, titleRomaji: prevTrack.song.titleRomaji } : null,
    nextSong: nextTrack ? { slug: nextTrack.song.slug, titleRomaji: nextTrack.song.titleRomaji } : null
  }
}

export async function getAllSongsWithStatus() {
  const songs = await prisma.song.findMany({
    select: {
      slug: true,
      titleJp: true,
      titleRomaji: true,
      titleEn: true,
      lyricsJp: true,
      releases: {
        include: {
          release: {
            select: {
              slug: true,
              titleRomaji: true
            }
          }
        }
      }
    },
    orderBy: { titleRomaji: 'asc' }
  })

  return songs.map(song => ({
    slug: song.slug,
    titleJp: song.titleJp,
    titleRomaji: song.titleRomaji,
    titleEn: song.titleEn,
    hasLyrics: !song.lyricsJp.startsWith('[') && !song.lyricsJp.includes('to be added'),
    releases: song.releases.map(r => ({
      slug: r.release.slug,
      titleRomaji: r.release.titleRomaji
    }))
  }))
}
