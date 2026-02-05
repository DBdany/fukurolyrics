import { db } from '../lib/db'
import { readFileSync } from 'fs'

// Mapping from markdown titles to database slugs
const titleToSlug: Record<string, string> = {
  'ningen janai': 'ningen-ja-nai',
  'sayonara dakeja': 'sayonara-dake-ja',
  'vinyl children': 'vinyl-children',
  'sociopath': 'sociopath',
  'seppun': 'seppun',
  'bar fukuro': 'bar-fukuro',
  'bakemono no watashi ni wa': 'bakemono-no-watashi-ni-wa',
  'oroka': 'oroka',
  'glass no kutsu': 'garasu-no-kutsu',
  'dorobo no march': 'dorobou-no-march',
  'chou ka ga': 'chou-ka-ga',
  'utopia': 'utopia',
  'cadenza': 'cadenza',
  'hikyoumono no romance': 'hikyousha-no-romance',
  'road to the future': 'road-to-the-future',
  'smells like human diner': 'smells-like-human-diner',
  'picaresque romance': 'picaresque-roman',
}

interface ParsedSong {
  title: string
  japanese: string
  romaji: string
  english: string
}

function parseMarkdown(content: string): ParsedSong[] {
  const songs: ParsedSong[] = []

  // Split by song headers (# Title / 日本語)
  const songSections = content.split(/^# (?!Table|梟)/m).filter(s => s.trim())

  for (const section of songSections) {
    // Get the title from first line
    const lines = section.split('\n')
    const titleLine = lines[0]?.trim()
    if (!titleLine || titleLine.startsWith('Table')) continue

    // Extract romaji title (before the /)
    const titleMatch = titleLine.match(/^([^/]+)/)
    if (!titleMatch) continue
    const title = titleMatch[1].trim().toLowerCase()

    // Extract Japanese, Romaji, English sections
    const japaneseMatch = section.match(/## Japanese\s*\n([\s\S]*?)(?=\n---|\n## Romaji)/i)
    const romajiMatch = section.match(/## Romaji\s*\n([\s\S]*?)(?=\n---|\n## English)/i)
    const englishMatch = section.match(/## English\s*\n([\s\S]*?)(?=\n---|\n#|$)/i)

    if (japaneseMatch && romajiMatch && englishMatch) {
      songs.push({
        title,
        japanese: japaneseMatch[1].trim(),
        romaji: romajiMatch[1].trim(),
        english: englishMatch[1].trim(),
      })
    }
  }

  return songs
}

async function main() {
  const filePath = '/Users/dyanabutler/Development/fukurolyrics/_archive/public/fukuro-lyrics-collection.md'
  const content = readFileSync(filePath, 'utf-8')

  console.log('Parsing lyrics file...')
  const songs = parseMarkdown(content)
  console.log(`Found ${songs.length} songs in markdown file\n`)

  let updated = 0
  let notFound = 0

  for (const song of songs) {
    const slug = titleToSlug[song.title]

    if (!slug) {
      console.log(`❌ No slug mapping for: "${song.title}"`)
      notFound++
      continue
    }

    try {
      const result = await db.song.update({
        where: { slug },
        data: {
          lyricsJp: song.japanese,
          lyricsRomaji: song.romaji,
          lyricsEn: song.english,
        },
      })
      console.log(`✅ Updated: ${result.titleRomaji} (${slug})`)
      updated++
    } catch (e) {
      console.log(`❌ Failed to update: ${slug}`)
      notFound++
    }
  }

  console.log(`\n--- Summary ---`)
  console.log(`Updated: ${updated}`)
  console.log(`Not found: ${notFound}`)
}

main()
  .then(() => process.exit(0))
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
