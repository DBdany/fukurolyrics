# adding lyrics

want to add lyrics for a song? heres how.

## overview

lyrics live in two files:

| file | purpose |
|------|---------|
| `prisma/seed.ts` | creates songs (title, slug, placeholder lyrics) |
| `prisma/update-lyrics.ts` | fills in actual lyrics content |

when you merge to main, github actions deploys and runs both scripts automatically.

## the database structure

each song has:

```
slug         - url-friendly identifier (e.g., "utopia")
titleJp      - japanese title (e.g., "ユートピア")
titleRomaji  - romanized title (e.g., "Utopia")
titleEn      - english title (optional)
lyricsJp     - full japanese lyrics
lyricsRomaji - romanized lyrics
lyricsEn     - english translation
notes        - translator notes (optional)
```

## adding a new song

if the song doesnt exist yet, add it to `prisma/seed.ts`:

```typescript
prisma.song.create({
  data: {
    slug: 'new-song',
    titleJp: '新曲',
    titleRomaji: 'Shinkyoku',
    titleEn: 'New Song',
    lyricsJp: PLACEHOLDER.jp,
    lyricsRomaji: PLACEHOLDER.romaji,
    lyricsEn: PLACEHOLDER.en,
  },
}),
```

make sure to also add it to a release's track list.

## adding lyrics content

add your lyrics to `prisma/update-lyrics.ts`:

```typescript
await prisma.song.update({
  where: { slug: 'new-song' },
  data: {
    lyricsJp: `一行目
二行目

新しいverse`,

    lyricsRomaji: `Ichigyoume
Nigyoume

Atarashii verse`,

    lyricsEn: `First line
Second line

New verse`,

    notes: `optional translator notes here`,
  },
})
console.log('✓ Updated: New Song')
```

## lyrics formatting

keep formatting consistent across all three versions so lines match:

```
line one
line two

new verse starts here
another line
```

- single line breaks within verses
- double line breaks between verses
- no trailing whitespace

## translator notes

if theres wordplay, cultural references, or translation decisions worth explaining:

```typescript
notes: `• 梟 (fukuro) means owl in japanese
• verse 2 contains a pun on...
• the title references...`
```

these show up in a collapsible section on the lyrics page.

## testing locally

```bash
# make sure docker is running
docker-compose up -d

# run the update script
npx ts-node --compiler-options '{"module":"CommonJS"}' prisma/update-lyrics.ts

# or if adding a new song, re-seed first
pnpm db:seed
npx ts-node --compiler-options '{"module":"CommonJS"}' prisma/update-lyrics.ts

# check your work
pnpm dev
# visit http://localhost:3000/library
```

the song should show a green dot in the library.

## deploying to production

once your lyrics work locally:

```bash
# rebuild seed scripts
pnpm seeds:build

# commit everything
git add prisma/seed.ts prisma/update-lyrics.ts prisma/seeds/
git commit -m "add lyrics for [song name]"
git push origin main
```

github actions will:
1. deploy to fly.io
2. run migrations
3. run seed scripts (updates lyrics in production)

## contributing lyrics (for external contributors)

1. fork the repo
2. add lyrics to `prisma/update-lyrics.ts`
3. if its a new song, also add to `prisma/seed.ts`
4. test locally
5. run `pnpm seeds:build`
6. commit and open a pr
7. include the song name in your pr title

## checking production

after deploy, verify at:

- library page: https://fukurolyrics.com/library (green dot = has lyrics)
- lyrics page: https://fukurolyrics.com/lyrics/[slug]

or check via cli:

```bash
fly ssh console -C "node -e \"
const { PrismaClient } = require('@prisma/client');
const p = new PrismaClient();
p.song.findUnique({ where: { slug: 'new-song' }, select: { lyricsJp: true } })
  .then(s => console.log(s.lyricsJp.substring(0, 100)));
\""
```

## common issues

### "record not found" error

the song slug in `update-lyrics.ts` doesnt exist. either:
- check the slug spelling matches `seed.ts`
- add the song to `seed.ts` first

### lyrics not showing on production

1. check github actions completed successfully
2. wait a minute for cache to clear
3. hard refresh the page (cmd+shift+r)

### lines dont match between versions

make sure jp, romaji, and en have the same number of lines and line breaks.

thanks for helping out!
