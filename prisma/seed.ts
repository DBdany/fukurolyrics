import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  console.log('Seeding database...')

  // Create sample release: Utopia EP
  const utopia = await prisma.release.upsert({
    where: { slug: 'utopia' },
    update: {},
    create: {
      slug: 'utopia',
      titleJp: 'Utopia',
      titleRomaji: 'Utopia',
      titleEn: 'Utopia',
      releaseDate: new Date('2025-01-01'),
      type: 'EP',
    },
  })

  console.log('Created release:', utopia.titleRomaji)

  // Create a sample song
  const sampleSong = await prisma.song.upsert({
    where: { slug: 'sample-song' },
    update: {},
    create: {
      slug: 'sample-song',
      titleJp: 'サンプル曲',
      titleRomaji: 'Sample Kyoku',
      titleEn: 'Sample Song',
      lyricsJp: `夜空に浮かぶ星を見上げて
君のことを思い出す
遠い記憶の中で
まだ輝いている

忘れられない日々が
心の中に残っている
いつかまた会える日まで
この想いを胸に`,
      lyricsRomaji: `Yozora ni ukabu hoshi wo miagete
Kimi no koto wo omoidasu
Tooi kioku no naka de
Mada kagayaite iru

Wasurerarenai hibi ga
Kokoro no naka ni nokotte iru
Itsuka mata aeru hi made
Kono omoi wo mune ni`,
      lyricsEn: `Looking up at the stars floating in the night sky
I remember you
In distant memories
Still shining bright

Unforgettable days
Remain in my heart
Until the day we meet again
I hold these feelings close`,
      notes: 'This is a sample song for testing the lyrics display.',
    },
  })

  console.log('Created song:', sampleSong.titleRomaji)

  // Link song to release
  await prisma.trackOnRelease.upsert({
    where: {
      releaseId_songId: {
        releaseId: utopia.id,
        songId: sampleSong.id,
      },
    },
    update: {},
    create: {
      releaseId: utopia.id,
      songId: sampleSong.id,
      trackNumber: 1,
    },
  })

  console.log('Linked song to release')
  console.log('Seeding complete!')
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
