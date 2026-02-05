import { db } from './db'
import {
  type Album,
  type Track,
  type LyricsData,
  type ForumCategory,
  type ForumThread,
  type ForumPost,
  type ForumThreadWithPosts,
  type Member,
  type GuestbookEntry,
  mapReleaseTypeToV0,
  mapMemberRoleToV0,
  formatDate,
  formatDateTime,
} from './types'

// ============================================
// RELEASES / DISCOGRAPHY
// ============================================

export async function getAllReleases(): Promise<Album[]> {
  const releases = await db.release.findMany({
    include: {
      tracks: {
        include: { song: true },
        orderBy: { trackNumber: 'asc' },
      },
    },
    orderBy: { releaseDate: 'desc' },
  })

  return releases.map((release) => ({
    id: release.id,
    slug: release.slug,
    title: release.titleRomaji,
    titleJp: release.titleJp,
    titleEn: release.titleEn,
    releaseDate: formatDate(release.releaseDate),
    type: mapReleaseTypeToV0(release.type),
    coverArt: release.coverArt,
    tracks: release.tracks.map((track) => ({
      id: track.song.id,
      number: track.trackNumber,
      title: track.song.titleRomaji,
      titleJp: track.song.titleJp,
      slug: track.song.slug,
      hasLyrics: !track.song.lyricsJp.includes('[') && track.song.lyricsJp.length > 50,
    })),
  }))
}

export async function getReleaseBySlug(slug: string): Promise<Album | null> {
  const release = await db.release.findUnique({
    where: { slug },
    include: {
      tracks: {
        include: { song: true },
        orderBy: { trackNumber: 'asc' },
      },
    },
  })

  if (!release) return null

  return {
    id: release.id,
    slug: release.slug,
    title: release.titleRomaji,
    titleJp: release.titleJp,
    titleEn: release.titleEn,
    releaseDate: formatDate(release.releaseDate),
    type: mapReleaseTypeToV0(release.type),
    coverArt: release.coverArt,
    tracks: release.tracks.map((track) => ({
      id: track.song.id,
      number: track.trackNumber,
      title: track.song.titleRomaji,
      titleJp: track.song.titleJp,
      slug: track.song.slug,
    })),
  }
}

// ============================================
// SONGS / LYRICS
// ============================================

export async function getSongBySlug(songSlug: string, albumSlug: string): Promise<LyricsData | null> {
  const song = await db.song.findUnique({
    where: { slug: songSlug },
    include: {
      releases: {
        include: { release: true },
        where: { release: { slug: albumSlug } },
      },
    },
  })

  if (!song || song.releases.length === 0) return null

  const trackOnRelease = song.releases[0]

  return {
    id: song.id,
    slug: song.slug,
    titleJp: song.titleJp,
    titleRomaji: song.titleRomaji,
    titleEn: song.titleEn,
    japanese: song.lyricsJp,
    romaji: song.lyricsRomaji,
    english: song.lyricsEn,
    notes: song.notes,
    albumSlug: trackOnRelease.release.slug,
    albumTitle: trackOnRelease.release.titleRomaji,
    trackNumber: trackOnRelease.trackNumber,
  }
}

export async function getAllSongsForSearch(): Promise<{ slug: string; title: string; titleJp: string; albumSlug: string }[]> {
  const songs = await db.song.findMany({
    include: {
      releases: {
        include: { release: true },
        take: 1,
      },
    },
    orderBy: { titleRomaji: 'asc' },
  })

  return songs
    .filter((song) => song.releases.length > 0)
    .map((song) => ({
      slug: song.slug,
      title: song.titleRomaji,
      titleJp: song.titleJp,
      albumSlug: song.releases[0].release.slug,
    }))
}

// ============================================
// FORUM
// ============================================

export async function getForumCategories(): Promise<ForumCategory[]> {
  const categories = await db.forumCategory.findMany({
    include: {
      threads: {
        include: {
          posts: true,
        },
      },
    },
    orderBy: { createdAt: 'asc' },
  })

  return categories.map((cat) => ({
    id: cat.id,
    slug: cat.slug,
    name: cat.name,
    nameJp: cat.nameJp,
    description: cat.description,
    threadCount: cat.threads.length,
    postCount: cat.threads.reduce((sum, t) => sum + t.posts.length, 0),
  }))
}

export async function getForumCategory(slug: string): Promise<(ForumCategory & { threads: ForumThread[] }) | null> {
  const category = await db.forumCategory.findUnique({
    where: { slug },
    include: {
      threads: {
        include: {
          posts: true,
        },
        orderBy: [{ isPinned: 'desc' }, { updatedAt: 'desc' }],
      },
    },
  })

  if (!category) return null

  return {
    id: category.id,
    slug: category.slug,
    name: category.name,
    nameJp: category.nameJp,
    description: category.description,
    threadCount: category.threads.length,
    postCount: category.threads.reduce((sum, t) => sum + t.posts.length, 0),
    threads: category.threads.map((thread) => ({
      id: thread.id,
      slug: thread.slug,
      categoryId: category.id,
      categorySlug: category.slug,
      title: thread.title,
      author: thread.authorName,
      createdAt: formatDate(thread.createdAt),
      lastActivity: formatDate(thread.updatedAt),
      replyCount: thread.posts.length,
      views: thread.views,
      isPinned: thread.isPinned,
      isLocked: thread.isLocked,
    })),
  }
}

export async function getForumThread(slug: string): Promise<ForumThreadWithPosts | null> {
  const thread = await db.forumThread.findUnique({
    where: { slug },
    include: {
      category: true,
      posts: {
        orderBy: { createdAt: 'asc' },
      },
    },
  })

  if (!thread) return null

  // Increment view count
  await db.forumThread.update({
    where: { id: thread.id },
    data: { views: { increment: 1 } },
  })

  return {
    id: thread.id,
    slug: thread.slug,
    categoryId: thread.category.id,
    categorySlug: thread.category.slug,
    title: thread.title,
    author: thread.authorName,
    createdAt: formatDate(thread.createdAt),
    lastActivity: formatDate(thread.updatedAt),
    replyCount: thread.posts.length,
    views: thread.views + 1,
    isPinned: thread.isPinned,
    isLocked: thread.isLocked,
    posts: thread.posts.map((post) => ({
      id: post.id,
      threadId: thread.id,
      author: post.authorName,
      content: post.content,
      createdAt: formatDateTime(post.createdAt),
      likes: post.likes,
    })),
  }
}

// ============================================
// MEMBERS
// ============================================

export async function getMembers(): Promise<Member[]> {
  const members = await db.member.findMany({
    orderBy: { postCount: 'desc' },
  })

  return members.map((member) => ({
    id: member.id,
    username: member.username,
    displayName: member.displayName,
    joinDate: formatDate(member.joinDate),
    postCount: member.postCount,
    favoriteSong: member.favoriteSong,
    bio: member.bio,
    accentColor: member.accentColor,
    role: mapMemberRoleToV0(member.role),
  }))
}

export async function getMember(username: string): Promise<Member | null> {
  const member = await db.member.findUnique({
    where: { username },
  })

  if (!member) return null

  return {
    id: member.id,
    username: member.username,
    displayName: member.displayName,
    joinDate: formatDate(member.joinDate),
    postCount: member.postCount,
    favoriteSong: member.favoriteSong,
    bio: member.bio,
    accentColor: member.accentColor,
    role: mapMemberRoleToV0(member.role),
  }
}

// ============================================
// GUESTBOOK
// ============================================

export async function getGuestbookEntries(): Promise<GuestbookEntry[]> {
  const entries = await db.guestbookEntry.findMany({
    orderBy: { createdAt: 'desc' },
  })

  return entries.map((entry) => ({
    id: entry.id,
    name: entry.name,
    message: entry.message,
    timestamp: formatDateTime(entry.createdAt),
    signature: entry.signature,
  }))
}

export async function createGuestbookEntry(data: {
  name: string
  message: string
  signature?: string
}): Promise<GuestbookEntry> {
  const entry = await db.guestbookEntry.create({
    data: {
      name: data.name,
      message: data.message,
      signature: data.signature ?? null,
    },
  })

  return {
    id: entry.id,
    name: entry.name,
    message: entry.message,
    timestamp: formatDateTime(entry.createdAt),
    signature: entry.signature,
  }
}

// ============================================
// SITE STATS
// ============================================

export async function getSiteStats(): Promise<{
  songCount: number
  releaseCount: number
  forumPostCount: number
  lastUpdated: string
}> {
  const [songCount, releaseCount, forumPostCount, latestSong] = await Promise.all([
    db.song.count(),
    db.release.count(),
    db.forumPost.count(),
    db.song.findFirst({
      orderBy: { createdAt: 'desc' },
      select: { createdAt: true },
    }),
  ])

  return {
    songCount,
    releaseCount,
    forumPostCount,
    lastUpdated: latestSong ? formatDate(latestSong.createdAt) : formatDate(new Date()),
  }
}
