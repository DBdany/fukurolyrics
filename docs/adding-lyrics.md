# adding lyrics

want to add lyrics for a song? heres how.

## the database structure

each song in the database has:

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

## adding via script

theres an update script at `prisma/update-lyrics.ts`. to add lyrics:

1. find the song slug in the database (check `prisma/seed.ts` for existing songs)
2. add your lyrics to the script
3. run it:

```bash
npx ts-node --compiler-options '{"module":"CommonJS"}' prisma/update-lyrics.ts
```

## lyrics format

keep the formatting consistent across all three versions (jp, romaji, en) so lines match up.

```
line one
line two

new verse starts here
another line
```

use single line breaks within verses, double line breaks between verses.

## translator notes

if theres wordplay, cultural references, or translation decisions worth explaining, add them to the `notes` field. these show up in a collapsible section on the lyrics page.

example:
```
notes: `
- "梟" (fukuro) means owl in japanese
- verse 2 contains a pun on...
`
```

## checking your work

after running the update script:

1. check the library page - the song should have a green dot now
2. visit the lyrics page and check all view modes
3. make sure lines match up between versions

## submitting

if youre contributing lyrics:

1. fork the repo
2. add your lyrics to `prisma/update-lyrics.ts`
3. run the script locally to test
4. commit and open a pr
5. include the song name in your pr title

thanks for helping out!
