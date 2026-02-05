import type {
  Release,
  Song,
  TrackOnRelease,
  ForumCategory as PrismaForumCategory,
  ForumThread as PrismaForumThread,
  ForumPost as PrismaForumPost,
  Member as PrismaMember,
  GuestbookEntry as PrismaGuestbookEntry,
  ReleaseType,
  MemberRole,
} from '@prisma/client'

// Re-export Prisma types for convenience
export type { ReleaseType, MemberRole }

// Extended types with relations
export type ReleaseWithTracks = Release & {
  tracks: (TrackOnRelease & { song: Song })[]
}

export type SongWithReleases = Song & {
  releases: (TrackOnRelease & { release: Release })[]
}

// Types mapped for v0 component compatibility
export interface Track {
  id: string
  number: number
  title: string
  titleJp: string
  slug: string
  hasLyrics?: boolean
}

export interface Album {
  id: string
  slug: string
  title: string
  titleJp: string
  titleEn: string | null
  releaseDate: string
  type: 'album' | 'single' | 'mini-album' | 'ep'
  coverArt: string | null
  tracks: Track[]
}

export interface LyricsData {
  id: string
  slug: string
  titleJp: string
  titleRomaji: string
  titleEn: string | null
  japanese: string
  romaji: string
  english: string
  notes: string | null
  albumSlug: string
  albumTitle: string
  trackNumber: number
}

// Forum types for v0 compatibility
export interface ForumCategory {
  id: string
  slug: string
  name: string
  nameJp: string | null
  description: string
  threadCount: number
  postCount: number
}

export interface ForumThread {
  id: string
  slug: string
  categoryId: string
  categorySlug: string
  title: string
  author: string
  createdAt: string
  lastActivity: string
  replyCount: number
  views: number
  isPinned: boolean
  isLocked: boolean
}

export interface ForumPost {
  id: string
  threadId: string
  author: string
  content: string
  createdAt: string
  likes: number
}

export interface ForumThreadWithPosts extends ForumThread {
  posts: ForumPost[]
}

// Member types
export interface Member {
  id: string
  username: string
  displayName: string
  joinDate: string
  postCount: number
  favoriteSong: string | null
  bio: string | null
  accentColor: string
  role: 'admin' | 'moderator' | 'member'
}

// Guestbook types
export interface GuestbookEntry {
  id: string
  name: string
  message: string
  timestamp: string
  signature: string | null
}

// Helper functions to map Prisma types to v0 types
export function mapReleaseTypeToV0(type: ReleaseType): Album['type'] {
  switch (type) {
    case 'ALBUM':
      return 'album'
    case 'EP':
      return 'ep'
    case 'SINGLE':
      return 'single'
    default:
      return 'album'
  }
}

export function mapMemberRoleToV0(role: MemberRole): Member['role'] {
  switch (role) {
    case 'ADMIN':
      return 'admin'
    case 'MODERATOR':
      return 'moderator'
    case 'MEMBER':
      return 'member'
    default:
      return 'member'
  }
}

export function formatDate(date: Date): string {
  return date.toISOString().slice(0, 10).replace(/-/g, '.')
}

export function formatDateTime(date: Date): string {
  const d = formatDate(date)
  const time = date.toTimeString().slice(0, 5)
  return `${d} ${time}`
}
