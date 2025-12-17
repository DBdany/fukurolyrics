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
