# FukuroLyrics.com - Project Plan

## Overview
A minimalist lyrics website for the Japanese visual kei band 梟 (Fukuro). The site provides song lyrics in three formats: Japanese (kanji/kana), Romaji, and English translations.

**Domain:** fukurolyrics.com  
**Stack:** Next.js (App Router), PostgreSQL, Docker  
**Design:** Minimal black and white, light mode only

---

## Design Philosophy
- Clean, readable typography optimized for lyrics
- Black text on white background
- No unnecessary decoration — let the lyrics breathe
- Mobile-first responsive design
- Fast, lightweight, accessible

---

## Tech Stack

| Layer | Technology |
|-------|------------|
| Framework | Next.js 14+ (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS |
| Database | PostgreSQL 16 |
| ORM | Prisma |
| Container | Docker / Docker Compose |
| Deployment | Vercel (app) + managed Postgres or self-hosted |

---

## Docker Setup

### docker-compose.yml

```yaml
version: '3.8'

services:
  postgres:
    image: postgres:16-alpine
    container_name: fukuro-db
    restart: unless-stopped
    environment:
      POSTGRES_USER: fukuro
      POSTGRES_PASSWORD: fukuro_dev_password
      POSTGRES_DB: fukurolyrics
    ports:
      - "5432:5432"
    volumes:
      - fukuro_postgres_data:/var/lib/postgresql/data
    healthcheck:
      test: ["CMD-SHELL", "pg_isready -U fukuro -d fukurolyrics"]
      interval: 10s
      timeout: 5s
      retries: 5

volumes:
  fukuro_postgres_data:
```

### Environment Variables (.env.local)

```bash
# Database
DATABASE_URL="postgresql://fukuro:fukuro_dev_password@localhost:5432/fukurolyrics?schema=public"

# Next.js
NEXT_PUBLIC_SITE_URL="http://localhost:3000"
```

### Docker Commands

```bash
# Start the database
docker-compose up -d

# View logs
docker-compose logs -f postgres

# Stop the database
docker-compose down

# Stop and remove volumes (⚠️ deletes all data)
docker-compose down -v

# Access psql directly
docker exec -it fukuro-db psql -U fukuro -d fukurolyrics
```

---

## Database Schema (Prisma)

### prisma/schema.prisma

```prisma
generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

model Release {
  id          String      @id @default(cuid())
  slug        String      @unique
  titleJp     String      @map("title_jp")
  titleRomaji String      @map("title_romaji")
  titleEn     String?     @map("title_en")
  releaseDate DateTime    @map("release_date")
  type        ReleaseType
  coverArt    String?     @map("cover_art")
  createdAt   DateTime    @default(now()) @map("created_at")
  updatedAt   DateTime    @updatedAt @map("updated_at")

  tracks      TrackOnRelease[]

  @@map("releases")
}

model Song {
  id           String   @id @default(cuid())
  slug         String   @unique
  titleJp      String   @map("title_jp")
  titleRomaji  String   @map("title_romaji")
  titleEn      String?  @map("title_en")
  lyricsJp     String   @map("lyrics_jp")
  lyricsRomaji String   @map("lyrics_romaji")
  lyricsEn     String   @map("lyrics_en")
  notes        String?
  createdAt    DateTime @default(now()) @map("created_at")
  updatedAt    DateTime @updatedAt @map("updated_at")

  releases     TrackOnRelease[]

  @@map("songs")
}

model TrackOnRelease {
  id          String  @id @default(cuid())
  releaseId   String  @map("release_id")
  songId      String  @map("song_id")
  trackNumber Int     @map("track_number")

  release     Release @relation(fields: [releaseId], references: [id], onDelete: Cascade)
  song        Song    @relation(fields: [songId], references: [id], onDelete: Cascade)

  @@unique([releaseId, songId])
  @@unique([releaseId, trackNumber])
  @@map("tracks_on_releases")
}

enum ReleaseType {
  ALBUM
  EP
  SINGLE
}
```

### Prisma Commands

```bash
# Generate Prisma client
npx prisma generate

# Create migration
npx prisma migrate dev --name init

# Push schema changes (dev only, no migration)
npx prisma db push

# Open Prisma Studio (GUI)
npx prisma studio

# Seed database
npx prisma db seed
```

---

## Project Structure

```
fukurolyrics/
├── docker-compose.yml
├── .env.local
├── .env.example
├── package.json
├── next.config.js
├── tailwind.config.ts
├── tsconfig.json
├── prisma/
│   ├── schema.prisma
│   ├── seed.ts
│   └── migrations/
├── src/
│   ├── app/
│   │   ├── layout.tsx
│   │   ├── page.tsx              # Homepage
│   │   ├── about/
│   │   │   └── page.tsx
│   │   ├── lyrics/
│   │   │   └── [slug]/
│   │   │       └── page.tsx
│   │   └── releases/
│   │       └── [slug]/
│   │           └── page.tsx
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.tsx
│   │   │   ├── Footer.tsx
│   │   │   └── Container.tsx
│   │   ├── ui/
│   │   │   ├── ReleaseCard.tsx
│   │   │   ├── TrackList.tsx
│   │   │   └── LyricsDisplay.tsx
│   │   └── seo/
│   │       └── MetaTags.tsx
│   ├── lib/
│   │   ├── db.ts                 # Prisma client singleton
│   │   └── queries.ts            # Database query functions
│   └── types/
│       └── index.ts
└── public/
    └── covers/                   # Album artwork
```

---

## Site Structure

```
/                       → Homepage (band intro + discography list)
/lyrics/[slug]          → Individual song lyrics page
/releases/[slug]        → Release page (album/EP with tracklist)
/about                  → About the site + Micah persona tie-in
```

---

## Pages Specification

### Homepage `/`
- Site title: "FUKURO LYRICS | 梟"
- Brief band description (1-2 sentences)
- Members list (Yoshiatsu, Daisuke, Yutara, Lotto)
- Discography grid/list showing all releases
  - Sorted by release date (newest first)
  - Each release links to its page
- Recent additions section (optional)

### Release Page `/releases/[slug]`
- Release title (JP + Romaji)
- Release date and type
- Tracklist with links to each song's lyrics page
- Optional: cover art if available

### Lyrics Page `/lyrics/[slug]`
- Song title (JP + Romaji + EN if available)
- Release info with link back
- Toggle or tabs for viewing mode:
  - Japanese only
  - Romaji only  
  - English only
  - Side-by-side (JP | Romaji | EN) — default on desktop
  - Stacked (JP → Romaji → EN per line) — mobile friendly
- Lyrics content with proper line breaks preserved
- Translator notes at bottom if present

### About Page `/about`
- About the site
- Translation credits/disclaimer
- Link to official Fukuro channels
- Optional: Micah persona introduction for the lore

---

## Component Structure

```
components/
├── layout/
│   ├── Header.tsx        # Site nav (Home, Releases, About)
│   ├── Footer.tsx        # Credits, links
│   └── Container.tsx     # Max-width wrapper
├── ui/
│   ├── ReleaseCard.tsx   # Card for release in grid
│   ├── TrackList.tsx     # Ordered list of songs
│   └── LyricsDisplay.tsx # The main lyrics viewer with toggle
└── seo/
    └── MetaTags.tsx      # Dynamic OG tags per page
```

---

## Styling Guidelines

### Typography
- Font: System font stack or a clean sans-serif (Inter, or stick with system)
- Lyrics font-size: 1.125rem (18px) base, comfortable reading
- Line-height: 1.8 for lyrics (generous spacing)
- Japanese text should render properly (ensure lang="ja" attribute)

### Colors
```css
--color-bg: #ffffff;
--color-text: #000000;
--color-text-muted: #666666;
--color-border: #e0e0e0;
--color-hover: #f5f5f5;
```

### Spacing
- Consistent padding: 1rem mobile, 2rem desktop
- Generous whitespace between sections
- Lyrics lines should have clear separation

### Layout
- Max content width: 800px for lyrics readability
- Responsive breakpoints: 640px (sm), 768px (md), 1024px (lg)

---

## Database Query Examples

### lib/db.ts
```typescript
import { PrismaClient } from '@prisma/client'

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined
}

export const prisma = globalForPrisma.prisma ?? new PrismaClient()

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma
```

### lib/queries.ts
```typescript
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
```

---

## SEO Requirements

Each page needs:
- Unique `<title>` tag
- Meta description
- Open Graph tags (og:title, og:description, og:image)
- Structured data (JSON-LD) for songs if possible
- Proper lang attributes (html lang="en", individual jp elements lang="ja")

Example title formats:
- Home: "FUKURO LYRICS | 梟 - Japanese & English Translations"
- Song: "Utopia Lyrics - 梟 (Fukuro) | Japanese, Romaji, English"
- Release: "Minority/Minority - 梟 (Fukuro) | Full Album Lyrics"

---

## Discography Data (Current as of Dec 2025)

### EPs/Mini-Albums
1. **梟の森 (Fukuro no Mori)** - 2021-09-06 - 6 tracks
2. **ドラマトゥルギー (Dramaturgie)** - 2022 - EP
3. **アダルトチルドレン (Adult Children)** - 2022-01-23 - EP
4. **Bedtime stories** - 2023
5. **星なき夜 (Hoshi Naki Yoru)** - 2023-06-18 - acoustic EP
6. **Utopia** - 2025 - EP

### Full Albums
1. **マイノリティ・マイノリティ (Minority/Minority)** - 2023-10-23 - 12 tracks

### Singles
1. **ROAD TO THE FUTURE** - 2024-11-23
2. **MOM!** - 2025-04-28
3. **蝶ヶ我 (Chou Ka Ga)** - 2025
4. **Smells Like Human Diner** - 2025

---

## Implementation Phases

### Phase 1: Foundation
- [ ] Initialize Next.js project with App Router
- [ ] Set up Docker with PostgreSQL
- [ ] Configure Prisma and run initial migration
- [ ] Set up Tailwind CSS with custom color config
- [ ] Create layout components (Header, Footer, Container)
- [ ] Build homepage with placeholder content
- [ ] Create release and lyrics page templates

### Phase 2: Content Structure  
- [ ] Create database seed file with initial data
- [ ] Add first batch of songs (start with Utopia EP)
- [ ] Implement LyricsDisplay component with view toggles
- [ ] Build release pages with tracklists

### Phase 3: Polish
- [ ] Add SEO meta tags
- [ ] Mobile responsive testing
- [ ] Add about page
- [ ] Performance optimization

### Phase 4: Launch
- [ ] Set up production database (Vercel Postgres, Supabase, or self-hosted)
- [ ] Deploy to Vercel
- [ ] Connect fukurolyrics.com domain
- [ ] Test all pages
- [ ] Announce!

---

## Local Development Setup

### Prerequisites
- Node.js 18+
- Docker Desktop
- pnpm (recommended) or npm

### Quick Start

```bash
# 1. Clone the repo
git clone https://github.com/yourusername/fukurolyrics.git
cd fukurolyrics

# 2. Install dependencies
pnpm install

# 3. Copy environment file
cp .env.example .env.local

# 4. Start PostgreSQL
docker-compose up -d

# 5. Run database migrations
npx prisma migrate dev

# 6. Seed initial data (optional)
npx prisma db seed

# 7. Start dev server
pnpm dev

# Visit http://localhost:3000
```

### Useful Scripts

Add these to your `package.json`:

```json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint",
    "db:start": "docker-compose up -d",
    "db:stop": "docker-compose down",
    "db:reset": "docker-compose down -v && docker-compose up -d && npx prisma migrate dev",
    "db:studio": "npx prisma studio",
    "db:seed": "npx prisma db seed",
    "db:migrate": "npx prisma migrate dev",
    "db:push": "npx prisma db push"
  }
}
```

---

## Production Database Options

| Option | Pros | Cons |
|--------|------|------|
| **Vercel Postgres** | Native integration, easy setup | Limited free tier |
| **Supabase** | Generous free tier, good dashboard | Additional service to manage |
| **Railway** | Easy Docker deploys | Costs can add up |
| **Self-hosted** | Full control, cheapest long-term | More maintenance |

For a lyrics site with low traffic initially, **Supabase** or **Vercel Postgres** free tiers should be plenty.

---

## Future Enhancements (Post-Launch)
- Search functionality
- Dark mode toggle
- Favorite songs (local storage)
- Furigana toggle for kanji
- Audio player integration (if allowed)
- Admin panel for easier lyric entry
- User-submitted translation corrections

---

## Notes for Claude Code

When implementing:
1. Use Next.js 14+ App Router (not Pages Router)
2. Use TypeScript throughout
3. Tailwind CSS for styling (no additional UI libraries needed)
4. Prisma for database access
5. Docker Compose for local PostgreSQL
6. Keep it simple — avoid over-engineering
7. Prioritize readability of lyrics above all else
8. Test Japanese text rendering

Start with the Utopia EP lyrics that the user has already provided as the first content to add.