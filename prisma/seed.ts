import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

// Placeholder lyrics - to be replaced with actual translations
const PLACEHOLDER = {
  jp: '[Japanese lyrics to be added]',
  romaji: '[Romaji lyrics to be added]',
  en: '[English translation to be added]',
}

async function main() {
  console.log('Seeding database with Fukuro discography...')

  // Clear existing data
  await prisma.trackOnRelease.deleteMany()
  await prisma.song.deleteMany()
  await prisma.release.deleteMany()

  // ============================================
  // RELEASES
  // ============================================

  const releases = await Promise.all([
    // 1st Mini Album
    prisma.release.create({
      data: {
        slug: 'fukuro-no-mori',
        titleJp: '梟の森',
        titleRomaji: 'Fukuro no Mori',
        titleEn: 'Forest of the Owl',
        releaseDate: new Date('2021-09-06'),
        type: 'EP',
      },
    }),
    // 2nd Mini Album
    prisma.release.create({
      data: {
        slug: 'ningen-ja-nai',
        titleJp: '人間じゃない',
        titleRomaji: 'Ningen ja nai',
        titleEn: 'Not Human',
        releaseDate: new Date('2022-01-23'),
        type: 'EP',
      },
    }),
    // 3rd Mini Album
    prisma.release.create({
      data: {
        slug: '3rd-mini-album',
        titleJp: '6人による、6つの世界の、6つの物語。',
        titleRomaji: '6-nin ni yoru, 6-tsu no Sekai no, 6-tsu no Monogatari',
        titleEn: '6 Stories of 6 Worlds by 6 People',
        releaseDate: new Date('2022-10-12'),
        type: 'EP',
      },
    }),
    // Limited Single + Photobook
    prisma.release.create({
      data: {
        slug: 'limited-single-photobook',
        titleJp: '梟 Limited Single & Official Photo Book',
        titleRomaji: 'Fukuro Limited Single & Official Photo Book',
        releaseDate: new Date('2023-03-17'),
        type: 'SINGLE',
      },
    }),
    // Acoustic Album
    prisma.release.create({
      data: {
        slug: 'acoustic-album',
        titleJp: '梟 Acoustic album',
        titleRomaji: 'Fukuro Acoustic Album',
        releaseDate: new Date('2023-06-18'),
        type: 'EP',
      },
    }),
    // 1st Full Album
    prisma.release.create({
      data: {
        slug: 'fukuro-1st-album',
        titleJp: '梟',
        titleRomaji: 'Fukuro',
        titleEn: 'Owl',
        releaseDate: new Date('2023-10-23'),
        type: 'ALBUM',
      },
    }),
    // 1st Single
    prisma.release.create({
      data: {
        slug: 'road-to-the-future-single',
        titleJp: 'ROAD TO THE FUTURE',
        titleRomaji: 'ROAD TO THE FUTURE',
        releaseDate: new Date('2024-11-23'),
        type: 'SINGLE',
      },
    }),
    // 4th Mini Album
    prisma.release.create({
      data: {
        slug: 'sekai-ga-houkai-suru-ochi-wa',
        titleJp: '世界が崩壊するオチは',
        titleRomaji: 'Sekai ga Houkai Suru Ochi wa',
        releaseDate: new Date('2025-11-05'),
        type: 'EP',
      },
    }),
    // Chou Ka Ga Single
    prisma.release.create({
      data: {
        slug: 'chou-ka-ga-single',
        titleJp: '蝶か蛾',
        titleRomaji: 'Chou Ka Ga',
        titleEn: 'Butterfly or Moth',
        releaseDate: new Date('2025-01-01'),
        type: 'SINGLE',
      },
    }),
  ])

  const [
    fukuroNoMori,
    ningenJaNai,
    thirdMini,
    limitedSingle,
    acousticAlbum,
    firstAlbum,
    roadToFutureSingle,
    fourthMini,
    chouKaGaSingle,
  ] = releases

  console.log(`Created ${releases.length} releases`)

  // ============================================
  // SONGS - 1st Mini Album (梟の森)
  // ============================================

  const fukuroNoMoriSongs = await Promise.all([
    prisma.song.create({
      data: {
        slug: 'fukuro-no-ki',
        titleJp: '梟の樹',
        titleRomaji: 'Fukuro no Ki',
        titleEn: 'Tree of the Owl',
        lyricsJp: PLACEHOLDER.jp,
        lyricsRomaji: PLACEHOLDER.romaji,
        lyricsEn: PLACEHOLDER.en,
      },
    }),
    prisma.song.create({
      data: {
        slug: 'neo-tokyo',
        titleJp: 'NEO TOKYO',
        titleRomaji: 'NEO TOKYO',
        lyricsJp: PLACEHOLDER.jp,
        lyricsRomaji: PLACEHOLDER.romaji,
        lyricsEn: PLACEHOLDER.en,
      },
    }),
    prisma.song.create({
      data: {
        slug: 'kamisama-wa-inai-kara',
        titleJp: '神様はいないから',
        titleRomaji: 'Kamisama wa Inai kara',
        titleEn: 'Because There Is No God',
        lyricsJp: PLACEHOLDER.jp,
        lyricsRomaji: PLACEHOLDER.romaji,
        lyricsEn: PLACEHOLDER.en,
      },
    }),
    prisma.song.create({
      data: {
        slug: 'cadenza',
        titleJp: 'カデンツァ',
        titleRomaji: 'Kadentsa',
        titleEn: 'Cadenza',
        lyricsJp: PLACEHOLDER.jp,
        lyricsRomaji: PLACEHOLDER.romaji,
        lyricsEn: PLACEHOLDER.en,
      },
    }),
    prisma.song.create({
      data: {
        slug: 'hikyousha-no-romance',
        titleJp: '卑怯者のロマンス',
        titleRomaji: 'Hikyousha no Romansu',
        titleEn: 'Romance of a Coward',
        lyricsJp: PLACEHOLDER.jp,
        lyricsRomaji: PLACEHOLDER.romaji,
        lyricsEn: PLACEHOLDER.en,
      },
    }),
    prisma.song.create({
      data: {
        slug: 'itsuka-wa-shinde-shimau-bokura-wa',
        titleJp: 'いつかは死んでしまう僕らは',
        titleRomaji: 'Itsuka wa Shinde shimau Bokura wa',
        titleEn: 'We Who Will Someday Die',
        lyricsJp: PLACEHOLDER.jp,
        lyricsRomaji: PLACEHOLDER.romaji,
        lyricsEn: PLACEHOLDER.en,
      },
    }),
  ])

  // ============================================
  // SONGS - 2nd Mini Album (人間じゃない)
  // ============================================

  const ningenJaNaiSongs = await Promise.all([
    prisma.song.create({
      data: {
        slug: 'ningen-ja-nai',
        titleJp: '人間じゃない',
        titleRomaji: 'Ningen ja nai',
        titleEn: 'Not Human',
        lyricsJp: PLACEHOLDER.jp,
        lyricsRomaji: PLACEHOLDER.romaji,
        lyricsEn: PLACEHOLDER.en,
      },
    }),
    prisma.song.create({
      data: {
        slug: 'vinyl-children',
        titleJp: 'ビニールチルドレン',
        titleRomaji: 'Vinyl Children',
        lyricsJp: PLACEHOLDER.jp,
        lyricsRomaji: PLACEHOLDER.romaji,
        lyricsEn: PLACEHOLDER.en,
      },
    }),
    prisma.song.create({
      data: {
        slug: 'sociopath',
        titleJp: 'ソシオパス',
        titleRomaji: 'Sociopath',
        lyricsJp: PLACEHOLDER.jp,
        lyricsRomaji: PLACEHOLDER.romaji,
        lyricsEn: PLACEHOLDER.en,
      },
    }),
    prisma.song.create({
      data: {
        slug: 'sayonara-dake-ja',
        titleJp: 'サヨナラだけじゃ',
        titleRomaji: 'Sayonara Dake ja',
        titleEn: 'Just Goodbye Isn\'t Enough',
        lyricsJp: PLACEHOLDER.jp,
        lyricsRomaji: PLACEHOLDER.romaji,
        lyricsEn: PLACEHOLDER.en,
      },
    }),
    prisma.song.create({
      data: {
        slug: 'seppun',
        titleJp: '接吻',
        titleRomaji: 'Seppun',
        titleEn: 'Kiss',
        lyricsJp: PLACEHOLDER.jp,
        lyricsRomaji: PLACEHOLDER.romaji,
        lyricsEn: PLACEHOLDER.en,
      },
    }),
    prisma.song.create({
      data: {
        slug: 'bar-fukuro',
        titleJp: 'BAR FUKURO',
        titleRomaji: 'BAR FUKURO',
        lyricsJp: PLACEHOLDER.jp,
        lyricsRomaji: PLACEHOLDER.romaji,
        lyricsEn: PLACEHOLDER.en,
      },
    }),
  ])

  // ============================================
  // SONGS - 3rd Mini Album
  // ============================================

  const thirdMiniSongs = await Promise.all([
    prisma.song.create({
      data: {
        slug: 'bakemono-no-watashi-ni-wa',
        titleJp: 'バケモノの私には',
        titleRomaji: 'Bakemono no Watashi ni wa',
        titleEn: 'To Me, a Monster',
        lyricsJp: PLACEHOLDER.jp,
        lyricsRomaji: PLACEHOLDER.romaji,
        lyricsEn: PLACEHOLDER.en,
      },
    }),
    prisma.song.create({
      data: {
        slug: 'oroka',
        titleJp: '愚か',
        titleRomaji: 'Oroka',
        titleEn: 'Foolish',
        lyricsJp: PLACEHOLDER.jp,
        lyricsRomaji: PLACEHOLDER.romaji,
        lyricsEn: PLACEHOLDER.en,
      },
    }),
    prisma.song.create({
      data: {
        slug: 'garasu-no-kutsu',
        titleJp: 'ガラスの靴',
        titleRomaji: 'Garasu no Kutsu',
        titleEn: 'Glass Slippers',
        lyricsJp: PLACEHOLDER.jp,
        lyricsRomaji: PLACEHOLDER.romaji,
        lyricsEn: PLACEHOLDER.en,
      },
    }),
    prisma.song.create({
      data: {
        slug: 'dorobou-no-march',
        titleJp: '泥棒のマーチ',
        titleRomaji: 'Dorobou no March',
        titleEn: 'Thief\'s March',
        lyricsJp: PLACEHOLDER.jp,
        lyricsRomaji: PLACEHOLDER.romaji,
        lyricsEn: PLACEHOLDER.en,
      },
    }),
    prisma.song.create({
      data: {
        slug: 'korogaru-rock-ni-koke-wa-haenee',
        titleJp: '転がるROCKにコケは生えねぇ',
        titleRomaji: 'Korogaru ROCK ni Koke wa Haenee',
        titleEn: 'A Rolling Rock Gathers No Moss',
        lyricsJp: PLACEHOLDER.jp,
        lyricsRomaji: PLACEHOLDER.romaji,
        lyricsEn: PLACEHOLDER.en,
      },
    }),
    prisma.song.create({
      data: {
        slug: 'mitei',
        titleJp: '未定',
        titleRomaji: 'Mitei',
        titleEn: 'Undecided',
        lyricsJp: PLACEHOLDER.jp,
        lyricsRomaji: PLACEHOLDER.romaji,
        lyricsEn: PLACEHOLDER.en,
      },
    }),
  ])

  // ============================================
  // SONGS - Limited Single + Photobook
  // ============================================

  const limitedSingleSongs = await Promise.all([
    prisma.song.create({
      data: {
        slug: 'minna-no-uta',
        titleJp: 'みんなのうた',
        titleRomaji: 'Minna no Uta',
        titleEn: 'Everyone\'s Song',
        lyricsJp: PLACEHOLDER.jp,
        lyricsRomaji: PLACEHOLDER.romaji,
        lyricsEn: PLACEHOLDER.en,
      },
    }),
    prisma.song.create({
      data: {
        slug: 'itsuka-wa-shinde-shimau-bokura-wa-live',
        titleJp: 'いつかは死んでしまう僕らは (Live)',
        titleRomaji: 'Itsuka wa Shinde shimau Bokura wa (Live)',
        titleEn: 'We Who Will Someday Die (Live)',
        lyricsJp: PLACEHOLDER.jp,
        lyricsRomaji: PLACEHOLDER.romaji,
        lyricsEn: PLACEHOLDER.en,
        notes: 'Live version from Limited Single & Official Photo Book',
      },
    }),
  ])

  // ============================================
  // SONGS - Acoustic Album
  // ============================================

  const acousticSongs = await Promise.all([
    prisma.song.create({
      data: {
        slug: 'dorobou-no-march-acoustic',
        titleJp: '泥棒のマーチ (Acoustic ver.)',
        titleRomaji: 'Dorobou no March (Acoustic ver.)',
        titleEn: 'Thief\'s March (Acoustic ver.)',
        lyricsJp: PLACEHOLDER.jp,
        lyricsRomaji: PLACEHOLDER.romaji,
        lyricsEn: PLACEHOLDER.en,
        notes: 'Acoustic version',
      },
    }),
    prisma.song.create({
      data: {
        slug: 'neo-tokyo-acoustic',
        titleJp: 'NEO TOKYO (Acoustic ver.)',
        titleRomaji: 'NEO TOKYO (Acoustic ver.)',
        lyricsJp: PLACEHOLDER.jp,
        lyricsRomaji: PLACEHOLDER.romaji,
        lyricsEn: PLACEHOLDER.en,
        notes: 'Acoustic version',
      },
    }),
    prisma.song.create({
      data: {
        slug: 'bitterchoco-acoustic',
        titleJp: 'BitterChoco (Acoustic ver.)',
        titleRomaji: 'BitterChoco (Acoustic ver.)',
        lyricsJp: PLACEHOLDER.jp,
        lyricsRomaji: PLACEHOLDER.romaji,
        lyricsEn: PLACEHOLDER.en,
        notes: 'Acoustic version',
      },
    }),
    prisma.song.create({
      data: {
        slug: 'vinyl-children-acoustic',
        titleJp: 'ビニールチルドレン (Acoustic ver.)',
        titleRomaji: 'Vinyl Children (Acoustic ver.)',
        lyricsJp: PLACEHOLDER.jp,
        lyricsRomaji: PLACEHOLDER.romaji,
        lyricsEn: PLACEHOLDER.en,
        notes: 'Acoustic version',
      },
    }),
    prisma.song.create({
      data: {
        slug: 'seppun-piano',
        titleJp: '接吻 (Piano ver.)',
        titleRomaji: 'Seppun (Piano ver.)',
        titleEn: 'Kiss (Piano ver.)',
        lyricsJp: PLACEHOLDER.jp,
        lyricsRomaji: PLACEHOLDER.romaji,
        lyricsEn: PLACEHOLDER.en,
        notes: 'Piano version',
      },
    }),
    prisma.song.create({
      data: {
        slug: 'ningen-ja-nai-acoustic',
        titleJp: '人間じゃない (Acoustic ver.)',
        titleRomaji: 'Ningen ja nai (Acoustic ver.)',
        titleEn: 'Not Human (Acoustic ver.)',
        lyricsJp: PLACEHOLDER.jp,
        lyricsRomaji: PLACEHOLDER.romaji,
        lyricsEn: PLACEHOLDER.en,
        notes: 'Acoustic version',
      },
    }),
  ])

  // ============================================
  // SONGS - 1st Full Album (梟)
  // ============================================

  const firstAlbumSongs = await Promise.all([
    prisma.song.create({
      data: {
        slug: 'yakkou',
        titleJp: '夜行',
        titleRomaji: 'Yakkou',
        titleEn: 'Nocturnal',
        lyricsJp: PLACEHOLDER.jp,
        lyricsRomaji: PLACEHOLDER.romaji,
        lyricsEn: PLACEHOLDER.en,
      },
    }),
    prisma.song.create({
      data: {
        slug: 'arubasu-no-tabi',
        titleJp: 'アルバスの旅',
        titleRomaji: 'Arubasu no Tabi',
        titleEn: 'Arbus\'s Journey',
        lyricsJp: PLACEHOLDER.jp,
        lyricsRomaji: PLACEHOLDER.romaji,
        lyricsEn: PLACEHOLDER.en,
      },
    }),
    prisma.song.create({
      data: {
        slug: 'neko',
        titleJp: '猫',
        titleRomaji: 'Neko',
        titleEn: 'Cat',
        lyricsJp: PLACEHOLDER.jp,
        lyricsRomaji: PLACEHOLDER.romaji,
        lyricsEn: PLACEHOLDER.en,
      },
    }),
    prisma.song.create({
      data: {
        slug: 'mom',
        titleJp: 'MOM！',
        titleRomaji: 'MOM!',
        lyricsJp: PLACEHOLDER.jp,
        lyricsRomaji: PLACEHOLDER.romaji,
        lyricsEn: PLACEHOLDER.en,
      },
    }),
    prisma.song.create({
      data: {
        slug: 'texas-holdem-poker',
        titleJp: 'テキサスホールデムポーカー',
        titleRomaji: 'Texas Hold\'em Poker',
        lyricsJp: PLACEHOLDER.jp,
        lyricsRomaji: PLACEHOLDER.romaji,
        lyricsEn: PLACEHOLDER.en,
      },
    }),
    prisma.song.create({
      data: {
        slug: 'bitterchoco',
        titleJp: 'BitterChoco',
        titleRomaji: 'BitterChoco',
        lyricsJp: PLACEHOLDER.jp,
        lyricsRomaji: PLACEHOLDER.romaji,
        lyricsEn: PLACEHOLDER.en,
      },
    }),
    prisma.song.create({
      data: {
        slug: 'tsumi-no-naka-yoru-no-naka',
        titleJp: '罪の中、夜の中',
        titleRomaji: 'Tsumi no Naka, Yoru no Naka',
        titleEn: 'In Sin, In Night',
        lyricsJp: PLACEHOLDER.jp,
        lyricsRomaji: PLACEHOLDER.romaji,
        lyricsEn: PLACEHOLDER.en,
      },
    }),
    prisma.song.create({
      data: {
        slug: 'gekkou',
        titleJp: '月光',
        titleRomaji: 'Gekkou',
        titleEn: 'Moonlight',
        lyricsJp: PLACEHOLDER.jp,
        lyricsRomaji: PLACEHOLDER.romaji,
        lyricsEn: PLACEHOLDER.en,
      },
    }),
    prisma.song.create({
      data: {
        slug: 'rarara',
        titleJp: 'ららら',
        titleRomaji: 'Rarara',
        lyricsJp: PLACEHOLDER.jp,
        lyricsRomaji: PLACEHOLDER.romaji,
        lyricsEn: PLACEHOLDER.en,
      },
    }),
    prisma.song.create({
      data: {
        slug: 'dare-mo-sukuenai-uta-datoshitemo',
        titleJp: '誰も救えない歌だとしても',
        titleRomaji: 'Dare mo Sukuenai Uta Datoshitemo',
        titleEn: 'Even If It\'s a Song That Can\'t Save Anyone',
        lyricsJp: PLACEHOLDER.jp,
        lyricsRomaji: PLACEHOLDER.romaji,
        lyricsEn: PLACEHOLDER.en,
      },
    }),
    prisma.song.create({
      data: {
        slug: 'hero-gokko',
        titleJp: 'ヒーローごっこ',
        titleRomaji: 'Hero Gokko',
        titleEn: 'Playing Hero',
        lyricsJp: PLACEHOLDER.jp,
        lyricsRomaji: PLACEHOLDER.romaji,
        lyricsEn: PLACEHOLDER.en,
      },
    }),
    prisma.song.create({
      data: {
        slug: 'beep',
        titleJp: 'Beep',
        titleRomaji: 'Beep',
        lyricsJp: PLACEHOLDER.jp,
        lyricsRomaji: PLACEHOLDER.romaji,
        lyricsEn: PLACEHOLDER.en,
      },
    }),
  ])

  // ============================================
  // SONGS - 1st Single (ROAD TO THE FUTURE)
  // ============================================

  const roadToFutureSongs = await Promise.all([
    prisma.song.create({
      data: {
        slug: 'road-to-the-future',
        titleJp: 'ROAD TO THE FUTURE',
        titleRomaji: 'ROAD TO THE FUTURE',
        lyricsJp: PLACEHOLDER.jp,
        lyricsRomaji: PLACEHOLDER.romaji,
        lyricsEn: PLACEHOLDER.en,
      },
    }),
    prisma.song.create({
      data: {
        slug: 'tanteki-koufukuron',
        titleJp: '端的幸福論',
        titleRomaji: 'Tanteki Koufukuron',
        titleEn: 'A Simple Theory of Happiness',
        lyricsJp: PLACEHOLDER.jp,
        lyricsRomaji: PLACEHOLDER.romaji,
        lyricsEn: PLACEHOLDER.en,
      },
    }),
  ])

  // ============================================
  // SONGS - 4th Mini Album (世界が崩壊するオチは)
  // ============================================

  const fourthMiniSongs = await Promise.all([
    prisma.song.create({
      data: {
        slug: 'picaresque-roman',
        titleJp: 'ピカレスクロマン',
        titleRomaji: 'Picaresque Roman',
        lyricsJp: PLACEHOLDER.jp,
        lyricsRomaji: PLACEHOLDER.romaji,
        lyricsEn: PLACEHOLDER.en,
      },
    }),
    prisma.song.create({
      data: {
        slug: 'smells-like-human-diner',
        titleJp: 'Smells Like Human Diner',
        titleRomaji: 'Smells Like Human Diner',
        lyricsJp: PLACEHOLDER.jp,
        lyricsRomaji: PLACEHOLDER.romaji,
        lyricsEn: PLACEHOLDER.en,
      },
    }),
    prisma.song.create({
      data: {
        slug: 'hysteric-glamour',
        titleJp: 'ヒステリックグラマー',
        titleRomaji: 'Hysteric Glamour',
        lyricsJp: PLACEHOLDER.jp,
        lyricsRomaji: PLACEHOLDER.romaji,
        lyricsEn: PLACEHOLDER.en,
      },
    }),
    prisma.song.create({
      data: {
        slug: 'mom-retake',
        titleJp: 'MOM！(Retake)',
        titleRomaji: 'MOM! (Retake)',
        lyricsJp: PLACEHOLDER.jp,
        lyricsRomaji: PLACEHOLDER.romaji,
        lyricsEn: PLACEHOLDER.en,
        notes: 'Retake version from 4th Mini Album',
      },
    }),
    prisma.song.create({
      data: {
        slug: 'utopia',
        titleJp: 'ユートピア',
        titleRomaji: 'Utopia',
        lyricsJp: PLACEHOLDER.jp,
        lyricsRomaji: PLACEHOLDER.romaji,
        lyricsEn: PLACEHOLDER.en,
      },
    }),
    prisma.song.create({
      data: {
        slug: 'missing-me',
        titleJp: 'Missing Me',
        titleRomaji: 'Missing Me',
        lyricsJp: PLACEHOLDER.jp,
        lyricsRomaji: PLACEHOLDER.romaji,
        lyricsEn: PLACEHOLDER.en,
      },
    }),
  ])

  // ============================================
  // SONGS - Chou Ka Ga Single (蝶か蛾)
  // ============================================

  const chouKaGaSongs = await Promise.all([
    prisma.song.create({
      data: {
        slug: 'chou-ka-ga',
        titleJp: '蝶か蛾',
        titleRomaji: 'Chou Ka Ga',
        titleEn: 'Butterfly or Moth',
        lyricsJp: PLACEHOLDER.jp,
        lyricsRomaji: PLACEHOLDER.romaji,
        lyricsEn: PLACEHOLDER.en,
      },
    }),
  ])

  console.log('Created all songs')

  // ============================================
  // TRACK RELATIONSHIPS
  // ============================================

  // Helper function to create tracks
  async function createTracks(
    releaseId: string,
    songs: { id: string }[]
  ) {
    for (let i = 0; i < songs.length; i++) {
      await prisma.trackOnRelease.create({
        data: {
          releaseId,
          songId: songs[i].id,
          trackNumber: i + 1,
        },
      })
    }
  }

  await createTracks(fukuroNoMori.id, fukuroNoMoriSongs)
  await createTracks(ningenJaNai.id, ningenJaNaiSongs)
  await createTracks(thirdMini.id, thirdMiniSongs)
  await createTracks(limitedSingle.id, limitedSingleSongs)
  await createTracks(acousticAlbum.id, acousticSongs)
  await createTracks(firstAlbum.id, firstAlbumSongs)
  await createTracks(roadToFutureSingle.id, roadToFutureSongs)
  await createTracks(fourthMini.id, fourthMiniSongs)
  await createTracks(chouKaGaSingle.id, chouKaGaSongs)

  console.log('Created all track relationships')

  // Summary
  const songCount = await prisma.song.count()
  const releaseCount = await prisma.release.count()
  const trackCount = await prisma.trackOnRelease.count()

  console.log(`
Seeding complete!
- ${releaseCount} releases
- ${songCount} songs
- ${trackCount} track relationships
  `)
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
