# architecture

how the codebase is organized.

## directory structure

```
fukurolyrics/
├── app/                      # next.js app router
│   ├── components/           # react components
│   │   ├── analytics/        # grafana faro provider
│   │   ├── layout/           # header, footer, search, container
│   │   └── ui/               # reusable ui (album cover, hero, etc)
│   ├── lib/                  # utilities
│   │   ├── db.ts             # prisma client singleton
│   │   └── queries.ts        # database queries
│   ├── types/                # typescript types
│   ├── library/              # /library page
│   ├── lyrics/[slug]/        # /lyrics/:slug pages
│   ├── releases/[slug]/      # /releases/:slug pages
│   ├── about/                # /about page
│   ├── layout.tsx            # root layout
│   ├── page.tsx              # homepage
│   └── HomePageClient.tsx    # homepage client component
│
├── prisma/
│   ├── schema.prisma         # database schema
│   ├── migrations/           # prisma migrations
│   ├── seed.ts               # seed data (releases, songs)
│   ├── update-lyrics.ts      # lyrics content updates
│   └── seeds/                # production seed scripts
│       ├── build-seeds.mjs   # compiles ts to js
│       ├── run-seeds.js      # production seed runner
│       ├── seed.js           # compiled seed script
│       └── update-lyrics.js  # compiled lyrics script
│
├── public/                   # static assets
├── docs/                     # documentation (youre here)
│
├── .github/
│   └── workflows/
│       └── deploy.yml        # github actions ci/cd
│
├── Dockerfile                # production docker image
├── fly.toml                  # fly.io configuration
├── docker-compose.yml        # local postgres
└── next.config.ts            # next.js config
```

## database schema

three main tables:

```
Release
├── id
├── slug              # url-friendly (e.g., "fukuro-1st-album")
├── titleJp           # 梟
├── titleRomaji       # Fukuro
├── titleEn           # Owl (optional)
├── releaseDate
├── type              # ALBUM | EP | SINGLE
└── tracks[]          # → TrackOnRelease

Song
├── id
├── slug              # url-friendly (e.g., "utopia")
├── titleJp           # ユートピア
├── titleRomaji       # Utopia
├── titleEn           # (optional)
├── lyricsJp          # japanese lyrics
├── lyricsRomaji      # romanized lyrics
├── lyricsEn          # english translation
├── notes             # translator notes (optional)
└── releases[]        # → TrackOnRelease

TrackOnRelease        # many-to-many join table
├── releaseId
├── songId
└── trackNumber
```

## key files

### queries.ts

all database queries live in `app/lib/queries.ts`:

- `getAllReleases()` - homepage release list
- `getReleaseBySlug(slug)` - single release with tracks
- `getSongBySlug(slug)` - single song with lyrics
- `getAllSongsWithStatus()` - library page (includes hasLyrics flag)
- `getTrackContext(slug)` - prev/next track navigation
- `getRandomSong()` - random song for discovery

### page rendering

| page | rendering | reason |
|------|-----------|--------|
| `/` | dynamic | shows random song button |
| `/library` | dynamic | real-time lyrics status |
| `/lyrics/[slug]` | dynamic | track navigation context |
| `/releases/[slug]` | dynamic | fresh data |
| `/about` | static | no dynamic content |

all dynamic pages use `export const dynamic = 'force-dynamic'`.

## component patterns

### server vs client components

- **server components** (default): pages, data fetching
- **client components**: interactivity (filters, modals, localStorage)

client components are suffixed with `Client.tsx`:
- `HomePageClient.tsx` - type filters, random song
- `LibraryClient.tsx` - filter/sort controls, view toggle
- `LyricsClient.tsx` - view mode selector, track nav

### layout components

```tsx
import { Container, Header, Footer } from '@/components/layout'

// Container wraps content with max-width and padding
<Container>
  <h1>Page Title</h1>
</Container>
```

## data flow

```
1. user visits /lyrics/utopia
2. page.tsx (server) calls getSongBySlug('utopia')
3. queries.ts fetches from postgres via prisma
4. page.tsx passes data to LyricsClient
5. LyricsClient (client) handles view mode switching
```

## styling approach

- tailwind css v4
- black/white/gray palette (minimal color)
- no ui component libraries
- responsive with sm/md/lg breakpoints
- mobile-first approach
