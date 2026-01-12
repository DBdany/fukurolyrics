# images & cdn

album artwork and band photos are served via cloudflare r2 with automatic optimization.

## how it works

```
upload to r2 → store path in db → next.js Image component → cloudflare cdn
```

images are automatically:
- converted to webp/avif for smaller file sizes
- resized based on the component size (sm/md/lg)
- cached at cloudflare's edge for fast global delivery

## r2 bucket

- **url**: `https://pub-2bc3a6c5a2eb4902b5da3f71447725ae.r2.dev`
- **bucket name**: `fukurolyrics-images`

## adding album artwork

### 1. upload to r2

go to cloudflare dashboard → r2 → fukurolyrics-images bucket → upload

recommended structure:
```
releases/
  dramaturgie.jpg
  adult-children.jpg
  picaresque-roman.jpg
photos/
  band-promo-2024.jpg
```

### 2. update the database

the `releases` table has a `cover_art` column. store the path (not full url):

```sql
UPDATE releases
SET cover_art = 'releases/dramaturgie.jpg'
WHERE slug = 'dramaturgie';
```

or via prisma:
```typescript
await prisma.release.update({
  where: { slug: 'dramaturgie' },
  data: { coverArt: 'releases/dramaturgie.jpg' }
})
```

### 3. done

the `AlbumCover` component handles the rest - it builds the full url and optimizes the image.

## image sizes

the `AlbumCover` component supports three sizes:

| size | dimensions | usage |
|------|------------|-------|
| sm | 64x64 | homepage release cards |
| md | 128x128 | featured release |
| lg | 300x300 | release detail page |

## placeholder

releases without cover art show a placeholder with the 梟 kanji on a neutral background.

## component usage

```tsx
import { AlbumCover } from '@/components/ui/AlbumCover'

<AlbumCover
  src={release.coverArt}      // path from db, or null
  alt="Album name cover art"
  size="lg"                   // sm | md | lg
  priority                    // optional: load immediately (for above-fold)
/>
```

## files

- `app/components/ui/AlbumCover.tsx` - the component
- `next.config.ts` - r2 domain allowlist
