"use strict";

// prisma/seed.ts
var import_client = require("@prisma/client");
var prisma = new import_client.PrismaClient();
var PLACEHOLDER = {
  jp: "[Japanese lyrics to be added]",
  romaji: "[Romaji lyrics to be added]",
  en: "[English translation to be added]"
};
async function main() {
  console.log("Seeding database with Fukuro discography...");
  await prisma.trackOnRelease.deleteMany();
  await prisma.song.deleteMany();
  await prisma.release.deleteMany();
  const releases = await Promise.all([
    // 1st Mini Album
    prisma.release.create({
      data: {
        slug: "fukuro-no-mori",
        titleJp: "\u689F\u306E\u68EE",
        titleRomaji: "Fukuro no Mori",
        titleEn: "Forest of the Owl",
        releaseDate: /* @__PURE__ */ new Date("2021-09-06"),
        type: "EP"
      }
    }),
    // 2nd Mini Album
    prisma.release.create({
      data: {
        slug: "ningen-ja-nai",
        titleJp: "\u4EBA\u9593\u3058\u3083\u306A\u3044",
        titleRomaji: "Ningen ja nai",
        titleEn: "Not Human",
        releaseDate: /* @__PURE__ */ new Date("2022-01-23"),
        type: "EP"
      }
    }),
    // 3rd Mini Album
    prisma.release.create({
      data: {
        slug: "3rd-mini-album",
        titleJp: "6\u4EBA\u306B\u3088\u308B\u30016\u3064\u306E\u4E16\u754C\u306E\u30016\u3064\u306E\u7269\u8A9E\u3002",
        titleRomaji: "6-nin ni yoru, 6-tsu no Sekai no, 6-tsu no Monogatari",
        titleEn: "6 Stories of 6 Worlds by 6 People",
        releaseDate: /* @__PURE__ */ new Date("2022-10-12"),
        type: "EP"
      }
    }),
    // Limited Single + Photobook
    prisma.release.create({
      data: {
        slug: "limited-single-photobook",
        titleJp: "\u689F Limited Single & Official Photo Book",
        titleRomaji: "Fukuro Limited Single & Official Photo Book",
        releaseDate: /* @__PURE__ */ new Date("2023-03-17"),
        type: "SINGLE"
      }
    }),
    // Acoustic Album
    prisma.release.create({
      data: {
        slug: "acoustic-album",
        titleJp: "\u689F Acoustic album",
        titleRomaji: "Fukuro Acoustic Album",
        releaseDate: /* @__PURE__ */ new Date("2023-06-18"),
        type: "EP"
      }
    }),
    // 1st Full Album
    prisma.release.create({
      data: {
        slug: "fukuro-1st-album",
        titleJp: "\u689F",
        titleRomaji: "Fukuro",
        titleEn: "Owl",
        releaseDate: /* @__PURE__ */ new Date("2023-10-23"),
        type: "ALBUM"
      }
    }),
    // 1st Single
    prisma.release.create({
      data: {
        slug: "road-to-the-future-single",
        titleJp: "ROAD TO THE FUTURE",
        titleRomaji: "ROAD TO THE FUTURE",
        releaseDate: /* @__PURE__ */ new Date("2024-11-23"),
        type: "SINGLE"
      }
    }),
    // 4th Mini Album
    prisma.release.create({
      data: {
        slug: "sekai-ga-houkai-suru-ochi-wa",
        titleJp: "\u4E16\u754C\u304C\u5D29\u58CA\u3059\u308B\u30AA\u30C1\u306F",
        titleRomaji: "Sekai ga Houkai Suru Ochi wa",
        releaseDate: /* @__PURE__ */ new Date("2025-11-05"),
        type: "EP"
      }
    }),
    // Chou Ka Ga Single
    prisma.release.create({
      data: {
        slug: "chou-ka-ga-single",
        titleJp: "\u8776\u304B\u86FE",
        titleRomaji: "Chou Ka Ga",
        titleEn: "Butterfly or Moth",
        releaseDate: /* @__PURE__ */ new Date("2025-01-01"),
        type: "SINGLE"
      }
    })
  ]);
  const [
    fukuroNoMori,
    ningenJaNai,
    thirdMini,
    limitedSingle,
    acousticAlbum,
    firstAlbum,
    roadToFutureSingle,
    fourthMini,
    chouKaGaSingle
  ] = releases;
  console.log(`Created ${releases.length} releases`);
  const fukuroNoMoriSongs = await Promise.all([
    prisma.song.create({
      data: {
        slug: "fukuro-no-ki",
        titleJp: "\u689F\u306E\u6A39",
        titleRomaji: "Fukuro no Ki",
        titleEn: "Tree of the Owl",
        lyricsJp: PLACEHOLDER.jp,
        lyricsRomaji: PLACEHOLDER.romaji,
        lyricsEn: PLACEHOLDER.en
      }
    }),
    prisma.song.create({
      data: {
        slug: "neo-tokyo",
        titleJp: "NEO TOKYO",
        titleRomaji: "NEO TOKYO",
        lyricsJp: PLACEHOLDER.jp,
        lyricsRomaji: PLACEHOLDER.romaji,
        lyricsEn: PLACEHOLDER.en
      }
    }),
    prisma.song.create({
      data: {
        slug: "kamisama-wa-inai-kara",
        titleJp: "\u795E\u69D8\u306F\u3044\u306A\u3044\u304B\u3089",
        titleRomaji: "Kamisama wa Inai kara",
        titleEn: "Because There Is No God",
        lyricsJp: PLACEHOLDER.jp,
        lyricsRomaji: PLACEHOLDER.romaji,
        lyricsEn: PLACEHOLDER.en
      }
    }),
    prisma.song.create({
      data: {
        slug: "cadenza",
        titleJp: "\u30AB\u30C7\u30F3\u30C4\u30A1",
        titleRomaji: "Kadentsa",
        titleEn: "Cadenza",
        lyricsJp: PLACEHOLDER.jp,
        lyricsRomaji: PLACEHOLDER.romaji,
        lyricsEn: PLACEHOLDER.en
      }
    }),
    prisma.song.create({
      data: {
        slug: "hikyousha-no-romance",
        titleJp: "\u5351\u602F\u8005\u306E\u30ED\u30DE\u30F3\u30B9",
        titleRomaji: "Hikyousha no Romansu",
        titleEn: "Romance of a Coward",
        lyricsJp: PLACEHOLDER.jp,
        lyricsRomaji: PLACEHOLDER.romaji,
        lyricsEn: PLACEHOLDER.en
      }
    }),
    prisma.song.create({
      data: {
        slug: "itsuka-wa-shinde-shimau-bokura-wa",
        titleJp: "\u3044\u3064\u304B\u306F\u6B7B\u3093\u3067\u3057\u307E\u3046\u50D5\u3089\u306F",
        titleRomaji: "Itsuka wa Shinde shimau Bokura wa",
        titleEn: "We Who Will Someday Die",
        lyricsJp: PLACEHOLDER.jp,
        lyricsRomaji: PLACEHOLDER.romaji,
        lyricsEn: PLACEHOLDER.en
      }
    })
  ]);
  const ningenJaNaiSongs = await Promise.all([
    prisma.song.create({
      data: {
        slug: "ningen-ja-nai",
        titleJp: "\u4EBA\u9593\u3058\u3083\u306A\u3044",
        titleRomaji: "Ningen ja nai",
        titleEn: "Not Human",
        lyricsJp: PLACEHOLDER.jp,
        lyricsRomaji: PLACEHOLDER.romaji,
        lyricsEn: PLACEHOLDER.en
      }
    }),
    prisma.song.create({
      data: {
        slug: "vinyl-children",
        titleJp: "\u30D3\u30CB\u30FC\u30EB\u30C1\u30EB\u30C9\u30EC\u30F3",
        titleRomaji: "Vinyl Children",
        lyricsJp: PLACEHOLDER.jp,
        lyricsRomaji: PLACEHOLDER.romaji,
        lyricsEn: PLACEHOLDER.en
      }
    }),
    prisma.song.create({
      data: {
        slug: "sociopath",
        titleJp: "\u30BD\u30B7\u30AA\u30D1\u30B9",
        titleRomaji: "Sociopath",
        lyricsJp: PLACEHOLDER.jp,
        lyricsRomaji: PLACEHOLDER.romaji,
        lyricsEn: PLACEHOLDER.en
      }
    }),
    prisma.song.create({
      data: {
        slug: "sayonara-dake-ja",
        titleJp: "\u30B5\u30E8\u30CA\u30E9\u3060\u3051\u3058\u3083",
        titleRomaji: "Sayonara Dake ja",
        titleEn: "Just Goodbye Isn't Enough",
        lyricsJp: PLACEHOLDER.jp,
        lyricsRomaji: PLACEHOLDER.romaji,
        lyricsEn: PLACEHOLDER.en
      }
    }),
    prisma.song.create({
      data: {
        slug: "seppun",
        titleJp: "\u63A5\u543B",
        titleRomaji: "Seppun",
        titleEn: "Kiss",
        lyricsJp: PLACEHOLDER.jp,
        lyricsRomaji: PLACEHOLDER.romaji,
        lyricsEn: PLACEHOLDER.en
      }
    }),
    prisma.song.create({
      data: {
        slug: "bar-fukuro",
        titleJp: "BAR FUKURO",
        titleRomaji: "BAR FUKURO",
        lyricsJp: PLACEHOLDER.jp,
        lyricsRomaji: PLACEHOLDER.romaji,
        lyricsEn: PLACEHOLDER.en
      }
    })
  ]);
  const thirdMiniSongs = await Promise.all([
    prisma.song.create({
      data: {
        slug: "bakemono-no-watashi-ni-wa",
        titleJp: "\u30D0\u30B1\u30E2\u30CE\u306E\u79C1\u306B\u306F",
        titleRomaji: "Bakemono no Watashi ni wa",
        titleEn: "To Me, a Monster",
        lyricsJp: PLACEHOLDER.jp,
        lyricsRomaji: PLACEHOLDER.romaji,
        lyricsEn: PLACEHOLDER.en
      }
    }),
    prisma.song.create({
      data: {
        slug: "oroka",
        titleJp: "\u611A\u304B",
        titleRomaji: "Oroka",
        titleEn: "Foolish",
        lyricsJp: PLACEHOLDER.jp,
        lyricsRomaji: PLACEHOLDER.romaji,
        lyricsEn: PLACEHOLDER.en
      }
    }),
    prisma.song.create({
      data: {
        slug: "garasu-no-kutsu",
        titleJp: "\u30AC\u30E9\u30B9\u306E\u9774",
        titleRomaji: "Garasu no Kutsu",
        titleEn: "Glass Slippers",
        lyricsJp: PLACEHOLDER.jp,
        lyricsRomaji: PLACEHOLDER.romaji,
        lyricsEn: PLACEHOLDER.en
      }
    }),
    prisma.song.create({
      data: {
        slug: "dorobou-no-march",
        titleJp: "\u6CE5\u68D2\u306E\u30DE\u30FC\u30C1",
        titleRomaji: "Dorobou no March",
        titleEn: "Thief's March",
        lyricsJp: PLACEHOLDER.jp,
        lyricsRomaji: PLACEHOLDER.romaji,
        lyricsEn: PLACEHOLDER.en
      }
    }),
    prisma.song.create({
      data: {
        slug: "korogaru-rock-ni-koke-wa-haenee",
        titleJp: "\u8EE2\u304C\u308BROCK\u306B\u30B3\u30B1\u306F\u751F\u3048\u306D\u3047",
        titleRomaji: "Korogaru ROCK ni Koke wa Haenee",
        titleEn: "A Rolling Rock Gathers No Moss",
        lyricsJp: PLACEHOLDER.jp,
        lyricsRomaji: PLACEHOLDER.romaji,
        lyricsEn: PLACEHOLDER.en
      }
    }),
    prisma.song.create({
      data: {
        slug: "mitei",
        titleJp: "\u672A\u5B9A",
        titleRomaji: "Mitei",
        titleEn: "Undecided",
        lyricsJp: PLACEHOLDER.jp,
        lyricsRomaji: PLACEHOLDER.romaji,
        lyricsEn: PLACEHOLDER.en
      }
    })
  ]);
  const limitedSingleSongs = await Promise.all([
    prisma.song.create({
      data: {
        slug: "minna-no-uta",
        titleJp: "\u307F\u3093\u306A\u306E\u3046\u305F",
        titleRomaji: "Minna no Uta",
        titleEn: "Everyone's Song",
        lyricsJp: PLACEHOLDER.jp,
        lyricsRomaji: PLACEHOLDER.romaji,
        lyricsEn: PLACEHOLDER.en
      }
    }),
    prisma.song.create({
      data: {
        slug: "itsuka-wa-shinde-shimau-bokura-wa-live",
        titleJp: "\u3044\u3064\u304B\u306F\u6B7B\u3093\u3067\u3057\u307E\u3046\u50D5\u3089\u306F (Live)",
        titleRomaji: "Itsuka wa Shinde shimau Bokura wa (Live)",
        titleEn: "We Who Will Someday Die (Live)",
        lyricsJp: PLACEHOLDER.jp,
        lyricsRomaji: PLACEHOLDER.romaji,
        lyricsEn: PLACEHOLDER.en,
        notes: "Live version from Limited Single & Official Photo Book"
      }
    })
  ]);
  const acousticSongs = await Promise.all([
    prisma.song.create({
      data: {
        slug: "dorobou-no-march-acoustic",
        titleJp: "\u6CE5\u68D2\u306E\u30DE\u30FC\u30C1 (Acoustic ver.)",
        titleRomaji: "Dorobou no March (Acoustic ver.)",
        titleEn: "Thief's March (Acoustic ver.)",
        lyricsJp: PLACEHOLDER.jp,
        lyricsRomaji: PLACEHOLDER.romaji,
        lyricsEn: PLACEHOLDER.en,
        notes: "Acoustic version"
      }
    }),
    prisma.song.create({
      data: {
        slug: "neo-tokyo-acoustic",
        titleJp: "NEO TOKYO (Acoustic ver.)",
        titleRomaji: "NEO TOKYO (Acoustic ver.)",
        lyricsJp: PLACEHOLDER.jp,
        lyricsRomaji: PLACEHOLDER.romaji,
        lyricsEn: PLACEHOLDER.en,
        notes: "Acoustic version"
      }
    }),
    prisma.song.create({
      data: {
        slug: "bitterchoco-acoustic",
        titleJp: "BitterChoco (Acoustic ver.)",
        titleRomaji: "BitterChoco (Acoustic ver.)",
        lyricsJp: PLACEHOLDER.jp,
        lyricsRomaji: PLACEHOLDER.romaji,
        lyricsEn: PLACEHOLDER.en,
        notes: "Acoustic version"
      }
    }),
    prisma.song.create({
      data: {
        slug: "vinyl-children-acoustic",
        titleJp: "\u30D3\u30CB\u30FC\u30EB\u30C1\u30EB\u30C9\u30EC\u30F3 (Acoustic ver.)",
        titleRomaji: "Vinyl Children (Acoustic ver.)",
        lyricsJp: PLACEHOLDER.jp,
        lyricsRomaji: PLACEHOLDER.romaji,
        lyricsEn: PLACEHOLDER.en,
        notes: "Acoustic version"
      }
    }),
    prisma.song.create({
      data: {
        slug: "seppun-piano",
        titleJp: "\u63A5\u543B (Piano ver.)",
        titleRomaji: "Seppun (Piano ver.)",
        titleEn: "Kiss (Piano ver.)",
        lyricsJp: PLACEHOLDER.jp,
        lyricsRomaji: PLACEHOLDER.romaji,
        lyricsEn: PLACEHOLDER.en,
        notes: "Piano version"
      }
    }),
    prisma.song.create({
      data: {
        slug: "ningen-ja-nai-acoustic",
        titleJp: "\u4EBA\u9593\u3058\u3083\u306A\u3044 (Acoustic ver.)",
        titleRomaji: "Ningen ja nai (Acoustic ver.)",
        titleEn: "Not Human (Acoustic ver.)",
        lyricsJp: PLACEHOLDER.jp,
        lyricsRomaji: PLACEHOLDER.romaji,
        lyricsEn: PLACEHOLDER.en,
        notes: "Acoustic version"
      }
    })
  ]);
  const firstAlbumSongs = await Promise.all([
    prisma.song.create({
      data: {
        slug: "yakkou",
        titleJp: "\u591C\u884C",
        titleRomaji: "Yakkou",
        titleEn: "Nocturnal",
        lyricsJp: PLACEHOLDER.jp,
        lyricsRomaji: PLACEHOLDER.romaji,
        lyricsEn: PLACEHOLDER.en
      }
    }),
    prisma.song.create({
      data: {
        slug: "arubasu-no-tabi",
        titleJp: "\u30A2\u30EB\u30D0\u30B9\u306E\u65C5",
        titleRomaji: "Arubasu no Tabi",
        titleEn: "Arbus's Journey",
        lyricsJp: PLACEHOLDER.jp,
        lyricsRomaji: PLACEHOLDER.romaji,
        lyricsEn: PLACEHOLDER.en
      }
    }),
    prisma.song.create({
      data: {
        slug: "neko",
        titleJp: "\u732B",
        titleRomaji: "Neko",
        titleEn: "Cat",
        lyricsJp: PLACEHOLDER.jp,
        lyricsRomaji: PLACEHOLDER.romaji,
        lyricsEn: PLACEHOLDER.en
      }
    }),
    prisma.song.create({
      data: {
        slug: "mom",
        titleJp: "MOM\uFF01",
        titleRomaji: "MOM!",
        lyricsJp: PLACEHOLDER.jp,
        lyricsRomaji: PLACEHOLDER.romaji,
        lyricsEn: PLACEHOLDER.en
      }
    }),
    prisma.song.create({
      data: {
        slug: "texas-holdem-poker",
        titleJp: "\u30C6\u30AD\u30B5\u30B9\u30DB\u30FC\u30EB\u30C7\u30E0\u30DD\u30FC\u30AB\u30FC",
        titleRomaji: "Texas Hold'em Poker",
        lyricsJp: PLACEHOLDER.jp,
        lyricsRomaji: PLACEHOLDER.romaji,
        lyricsEn: PLACEHOLDER.en
      }
    }),
    prisma.song.create({
      data: {
        slug: "bitterchoco",
        titleJp: "BitterChoco",
        titleRomaji: "BitterChoco",
        lyricsJp: PLACEHOLDER.jp,
        lyricsRomaji: PLACEHOLDER.romaji,
        lyricsEn: PLACEHOLDER.en
      }
    }),
    prisma.song.create({
      data: {
        slug: "tsumi-no-naka-yoru-no-naka",
        titleJp: "\u7F6A\u306E\u4E2D\u3001\u591C\u306E\u4E2D",
        titleRomaji: "Tsumi no Naka, Yoru no Naka",
        titleEn: "In Sin, In Night",
        lyricsJp: PLACEHOLDER.jp,
        lyricsRomaji: PLACEHOLDER.romaji,
        lyricsEn: PLACEHOLDER.en
      }
    }),
    prisma.song.create({
      data: {
        slug: "gekkou",
        titleJp: "\u6708\u5149",
        titleRomaji: "Gekkou",
        titleEn: "Moonlight",
        lyricsJp: PLACEHOLDER.jp,
        lyricsRomaji: PLACEHOLDER.romaji,
        lyricsEn: PLACEHOLDER.en
      }
    }),
    prisma.song.create({
      data: {
        slug: "rarara",
        titleJp: "\u3089\u3089\u3089",
        titleRomaji: "Rarara",
        lyricsJp: PLACEHOLDER.jp,
        lyricsRomaji: PLACEHOLDER.romaji,
        lyricsEn: PLACEHOLDER.en
      }
    }),
    prisma.song.create({
      data: {
        slug: "dare-mo-sukuenai-uta-datoshitemo",
        titleJp: "\u8AB0\u3082\u6551\u3048\u306A\u3044\u6B4C\u3060\u3068\u3057\u3066\u3082",
        titleRomaji: "Dare mo Sukuenai Uta Datoshitemo",
        titleEn: "Even If It's a Song That Can't Save Anyone",
        lyricsJp: PLACEHOLDER.jp,
        lyricsRomaji: PLACEHOLDER.romaji,
        lyricsEn: PLACEHOLDER.en
      }
    }),
    prisma.song.create({
      data: {
        slug: "hero-gokko",
        titleJp: "\u30D2\u30FC\u30ED\u30FC\u3054\u3063\u3053",
        titleRomaji: "Hero Gokko",
        titleEn: "Playing Hero",
        lyricsJp: PLACEHOLDER.jp,
        lyricsRomaji: PLACEHOLDER.romaji,
        lyricsEn: PLACEHOLDER.en
      }
    }),
    prisma.song.create({
      data: {
        slug: "beep",
        titleJp: "Beep",
        titleRomaji: "Beep",
        lyricsJp: PLACEHOLDER.jp,
        lyricsRomaji: PLACEHOLDER.romaji,
        lyricsEn: PLACEHOLDER.en
      }
    })
  ]);
  const roadToFutureSongs = await Promise.all([
    prisma.song.create({
      data: {
        slug: "road-to-the-future",
        titleJp: "ROAD TO THE FUTURE",
        titleRomaji: "ROAD TO THE FUTURE",
        lyricsJp: PLACEHOLDER.jp,
        lyricsRomaji: PLACEHOLDER.romaji,
        lyricsEn: PLACEHOLDER.en
      }
    }),
    prisma.song.create({
      data: {
        slug: "tanteki-koufukuron",
        titleJp: "\u7AEF\u7684\u5E78\u798F\u8AD6",
        titleRomaji: "Tanteki Koufukuron",
        titleEn: "A Simple Theory of Happiness",
        lyricsJp: PLACEHOLDER.jp,
        lyricsRomaji: PLACEHOLDER.romaji,
        lyricsEn: PLACEHOLDER.en
      }
    })
  ]);
  const fourthMiniSongs = await Promise.all([
    prisma.song.create({
      data: {
        slug: "picaresque-roman",
        titleJp: "\u30D4\u30AB\u30EC\u30B9\u30AF\u30ED\u30DE\u30F3",
        titleRomaji: "Picaresque Roman",
        lyricsJp: PLACEHOLDER.jp,
        lyricsRomaji: PLACEHOLDER.romaji,
        lyricsEn: PLACEHOLDER.en
      }
    }),
    prisma.song.create({
      data: {
        slug: "smells-like-human-diner",
        titleJp: "Smells Like Human Diner",
        titleRomaji: "Smells Like Human Diner",
        lyricsJp: PLACEHOLDER.jp,
        lyricsRomaji: PLACEHOLDER.romaji,
        lyricsEn: PLACEHOLDER.en
      }
    }),
    prisma.song.create({
      data: {
        slug: "hysteric-glamour",
        titleJp: "\u30D2\u30B9\u30C6\u30EA\u30C3\u30AF\u30B0\u30E9\u30DE\u30FC",
        titleRomaji: "Hysteric Glamour",
        lyricsJp: PLACEHOLDER.jp,
        lyricsRomaji: PLACEHOLDER.romaji,
        lyricsEn: PLACEHOLDER.en
      }
    }),
    prisma.song.create({
      data: {
        slug: "mom-retake",
        titleJp: "MOM\uFF01(Retake)",
        titleRomaji: "MOM! (Retake)",
        lyricsJp: PLACEHOLDER.jp,
        lyricsRomaji: PLACEHOLDER.romaji,
        lyricsEn: PLACEHOLDER.en,
        notes: "Retake version from 4th Mini Album"
      }
    }),
    prisma.song.create({
      data: {
        slug: "utopia",
        titleJp: "\u30E6\u30FC\u30C8\u30D4\u30A2",
        titleRomaji: "Utopia",
        lyricsJp: PLACEHOLDER.jp,
        lyricsRomaji: PLACEHOLDER.romaji,
        lyricsEn: PLACEHOLDER.en
      }
    }),
    prisma.song.create({
      data: {
        slug: "missing-me",
        titleJp: "Missing Me",
        titleRomaji: "Missing Me",
        lyricsJp: PLACEHOLDER.jp,
        lyricsRomaji: PLACEHOLDER.romaji,
        lyricsEn: PLACEHOLDER.en
      }
    })
  ]);
  const chouKaGaSongs = await Promise.all([
    prisma.song.create({
      data: {
        slug: "chou-ka-ga",
        titleJp: "\u8776\u304B\u86FE",
        titleRomaji: "Chou Ka Ga",
        titleEn: "Butterfly or Moth",
        lyricsJp: PLACEHOLDER.jp,
        lyricsRomaji: PLACEHOLDER.romaji,
        lyricsEn: PLACEHOLDER.en
      }
    })
  ]);
  console.log("Created all songs");
  async function createTracks(releaseId, songs) {
    for (let i = 0; i < songs.length; i++) {
      await prisma.trackOnRelease.create({
        data: {
          releaseId,
          songId: songs[i].id,
          trackNumber: i + 1
        }
      });
    }
  }
  await createTracks(fukuroNoMori.id, fukuroNoMoriSongs);
  await createTracks(ningenJaNai.id, ningenJaNaiSongs);
  await createTracks(thirdMini.id, thirdMiniSongs);
  await createTracks(limitedSingle.id, limitedSingleSongs);
  await createTracks(acousticAlbum.id, acousticSongs);
  await createTracks(firstAlbum.id, firstAlbumSongs);
  await createTracks(roadToFutureSingle.id, roadToFutureSongs);
  await createTracks(fourthMini.id, fourthMiniSongs);
  await createTracks(chouKaGaSingle.id, chouKaGaSongs);
  console.log("Created all track relationships");
  const songCount = await prisma.song.count();
  const releaseCount = await prisma.release.count();
  const trackCount = await prisma.trackOnRelease.count();
  console.log(`
Seeding complete!
- ${releaseCount} releases
- ${songCount} songs
- ${trackCount} track relationships
  `);
}
main().then(async () => {
  await prisma.$disconnect();
}).catch(async (e) => {
  console.error(e);
  await prisma.$disconnect();
  process.exit(1);
});
