import type { Release, Song, TrackOnRelease, ReleaseType } from '@prisma/client'

export type { Release, Song, TrackOnRelease, ReleaseType }

// Release with tracks and songs included
export type ReleaseWithTracks = Release & {
  tracks: (TrackOnRelease & {
    song: Song
  })[]
}

// Song with its releases included
export type SongWithReleases = Song & {
  releases: (TrackOnRelease & {
    release: Release
  })[]
}

// Lyrics view mode
export type LyricsViewMode = 'japanese' | 'romaji' | 'english' | 'side-by-side' | 'stacked'
