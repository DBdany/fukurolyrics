import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  console.log('Updating lyrics from collection...')

  // ============================================
  // UTOPIA / ユートピア
  // ============================================
  await prisma.song.update({
    where: { slug: 'utopia' },
    data: {
      lyricsJp: `AかBに別れるゲームになってんだね
無ければ無いで苦しくなっちゃうから
あるもの全てを頂戴

白いモノから汚れて、もう落ちなくなって
欲望が土台の世界の中心部で
どれから食べればいいの?

壊れていく君は
美しくて
綺麗に見えたんだ

最後のオチは言わないで
最後まで見ないのが好きなの
世界が崩壊するオチは
もう飽きただけ
もう飽きただけ

気づいちゃいけない事ばっかり
シンプルな世界だった
刺さなきゃなんない世界の急降下で
どれから守ればいいの?

壊れていく君は
美しくて
綺麗に見えたんだ

最後のオチは言わないで
最後まで見ないのが好きなの
世界が崩壊するオチは
もう飽きただけ
もう飽きただけ

最後のオチは言わないで
最後までわからないのが好きなの
あなたに想像できちゃうオチは
もう飽きたから

サヨナラなんて言わないで
最後までわからないのが好きなの
私に想像できちゃうオチは
もう飽きただけ
もう飽きただけ`,

      lyricsRomaji: `A ka B ni wakareru geemu ni natten da ne
Nakereba nai de kurushiku natchau kara
Aru mono subete wo choudai

Shiroi mono kara yogorete, mou ochinaku natte
Yokubou ga dodai no sekai no chuushinbu de
Dore kara tabereba ii no?

Kowarete iku kimi wa
Utsukushikute
Kirei ni mietanda

Saigo no ochi wa iwanaide
Saigo made minai no ga suki na no
Sekai ga houkai suru ochi wa
Mou akita dake
Mou akita dake

Kizuicha ikenai koto bakkari
Shinpuru na sekai datta
Sasanakya nannai sekai no kyuukouka de
Dore kara mamoreba ii no?

Kowarete iku kimi wa
Utsukushikute
Kirei ni mietanda

Saigo no ochi wa iwanaide
Saigo made minai no ga suki na no
Sekai ga houkai suru ochi wa
Mou akita dake
Mou akita dake

Saigo no ochi wa iwanaide
Saigo made wakaranai no ga suki na no
Anata ni souzou dekichau ochi wa
Mou akita kara

Sayonara nante iwanaide
Saigo made wakaranai no ga suki na no
Watashi ni souzou dekichau ochi wa
Mou akita dake
Mou akita dake`,

      lyricsEn: `So it's become a game of choosing A or B
Since not having anything makes it painful too
Give me everything there is

Stained from the white things first, now the dirt won't come off
At the center of a world built on desire
Which one should I eat first?

You, as you fall apart
Were so beautiful
You looked so pretty to me

Don't tell me the ending
I like not watching until the end
An ending where the world collapses—
I'm just tired of it
I'm just tired of it

Nothing but things I shouldn't notice
It was such a simple world
In this world's nosedive where I have to keep stabbing
Which one should I protect first?

You, as you fall apart
Were so beautiful
You looked so pretty to me

Don't tell me the ending
I like not watching until the end
An ending where the world collapses—
I'm just tired of it
I'm just tired of it

Don't tell me the ending
I like not knowing until the end
An ending you can easily imagine—
I'm already tired of it

Don't say goodbye
I like not knowing until the end
An ending I can easily imagine—
I'm just tired of it
I'm just tired of it`,

      notes: `• オチ (ochi) - Literally "punchline" or "conclusion/ending" of a story. The repeated use suggests weariness with predictable narratives and apocalyptic endings.
• 頂戴 (choudai) - A casual/childish way of saying "give me," adding a sense of greed or desperation.
• 刺さなきゃなんない (sasanakya nannai) - "Have to stab/pierce" - ambiguous whether this means attacking or being pierced by the falling world.
• 壊れていく君 (kowarete iku kimi) - "You who are breaking/falling apart" - the progressive form emphasizes ongoing deterioration, yet the speaker finds this beautiful.
• The shift from 見ない (minai - not watching) to わからない (wakaranai - not knowing) in the later verses suggests a deepening desire to avoid predictable conclusions.
• The final verses shift perspective between あなた (anata - you) and 私 (watashi - I), blurring who is tired of whose predictable ending.`,
    },
  })
  console.log('✓ Updated: Utopia')

  // ============================================
  // NINGEN JANAI / 人間じゃない
  // ============================================
  await prisma.song.update({
    where: { slug: 'ningen-ja-nai' },
    data: {
      lyricsJp: `安らぐ為に殺し 安らぐ為に自死し
言葉は嘘のツールで 豚ほど金を握る

所詮獣、獣、腹は減る

アンタらみんな人間じゃないって！
朱色の心臓は
アンタらみんな人間じゃないって！
時代に犯されている
アンタらみんな人間じゃないって！
朱色の心臓は
アンタらみんな人間じゃないって！
時代に犯されて腰振る

レモンを思い出せば 唾液が零れ落ちて
朱色の甘いシンナー 乗るのか、馬になるのか

所詮獣、獣、腹は減る

アンタらみんな人間じゃないって！
朱色の心臓は
アンタらみんな人間じゃないって！
時代に犯されている
アンタらみんな人間じゃないって！
朱色の心臓は
アンタらみんな人間じゃないって！
時代に犯されて腰振る

僕たちはきっと、人間になれていなくって
明日も腐ってる
じゃあ人間てなにって、そんなの知るかよって
答えなんてないまま
誰かの犠牲で生きて、でもそれは悪なのかって
心は迷ってる
答えは見つからないまま、みんな死んでくんだろうな
レモンの酸味だけ残して`,

      lyricsRomaji: `Yasuragu tame ni koroshi, yasuragu tame ni jishi shi
Kotoba wa uso no tsuuru de, buta hodo kane wo nigiru

Shosen kemono, kemono, hara wa heru

Antara minna ningen janai tte!
Shuiro no shinzou wa
Antara minna ningen janai tte!
Jidai ni okasarete iru
Antara minna ningen janai tte!
Shuiro no shinzou wa
Antara minna ningen janai tte!
Jidai ni okasarete koshi furu

Remon wo omoidaseba, daeki ga kobore ochite
Shuiro no amai shinnaa, noru no ka, uma ni naru no ka

Shosen kemono, kemono, hara wa heru

Antara minna ningen janai tte!
Shuiro no shinzou wa
Antara minna ningen janai tte!
Jidai ni okasarete iru
Antara minna ningen janai tte!
Shuiro no shinzou wa
Antara minna ningen janai tte!
Jidai ni okasarete koshi furu

Bokutachi wa kitto, ningen ni narete inakutte
Ashita mo kusatteru
Jaa ningen te nani tte, sonna no shiru ka yo tte
Kotae nante nai mama
Dareka no gisei de ikite, demo sore wa aku na no ka tte
Kokoro wa mayotteru
Kotae wa mitsukaranai mama, minna shinde kun darou na
Remon no sanmi dake nokoshite`,

      lyricsEn: `Killing for peace, dying by your own hand for peace
Words are tools for lies, clutching money like pigs

In the end we're beasts, beasts—stomachs get hungry

You're all not human!
These vermillion hearts
You're all not human!
Being violated by the times
You're all not human!
These vermillion hearts
You're all not human!
Violated by the times, shaking your hips

If I remember lemons, saliva spills out
Vermillion sweet thinner—will you ride, or become the horse?

In the end we're beasts, beasts—stomachs get hungry

You're all not human!
These vermillion hearts
You're all not human!
Being violated by the times
You're all not human!
These vermillion hearts
You're all not human!
Violated by the times, shaking your hips

We probably never became human
Still rotting tomorrow too
"Then what even is human?" "Hell if I know"
With no answer in sight
Living off someone's sacrifice—but is that even evil?
My heart wavers
Without ever finding the answer, everyone will just die off
Leaving only the sourness of lemons behind`,

      notes: `• 人間じゃない (ningen janai) - "Not human" - The title and hook. Accusatory toward others but ultimately self-reflective.
• 朱色 (shuiro) - Vermillion/cinnabar red. A vivid orange-red associated with both vitality and blood. "Vermillion hearts" suggests something raw and exposed.
• 時代に犯されている (jidai ni okasarete iru) - "Being violated by the era/times" - 犯される can mean violated, raped, or corrupted. The era itself as perpetrator.
• 腰振る (koshi furu) - "Shaking hips" - Sexual movement, suggesting complicity or participation in the violation.
• シンナー (shinnaa) - Thinner (paint thinner) - A drug reference. "Sweet vermillion thinner" evokes both the color of blood and substance abuse.
• 乗るのか、馬になるのか (noru no ka, uma ni naru no ka) - "Will you ride, or become the horse?" - A question of dominance vs. submission, exploiter vs. exploited.
• レモンの酸味 (remon no sanmi) - "Sourness of lemons" - The Pavlovian response earlier returns as the only thing left behind after death.
• The final verse shifts from accusation ("you're all not human!") to existential doubt ("what even is human?"), ultimately admitting the speaker doesn't know either.`,
    },
  })
  console.log('✓ Updated: Ningen Janai')

  // ============================================
  // SAYONARA DAKEJA / サヨナラだけじゃ
  // ============================================
  await prisma.song.update({
    where: { slug: 'sayonara-dake-ja' },
    data: {
      lyricsJp: `瞬きが 気付かせた
泣いている 私を

愛していた 忘れていた
あの夜の 出会いを

時が経つと ありがとうも
愛してるも 言えないまま

この部屋では 狭過ぎたね
二人の距離 近過ぎては、遠い

同じ笑顔 似た二人
「兄妹みたい」だなんて

守られていた 知らぬ間に
当たり前に なってた

初々しさ 求めていた
忘れていた 有り難みも

サヨナラだけじゃ 終われないくらい
色んな日々を 過ごして来たね

最後だね 手に触れて
ありがとう、呟く`,

      lyricsRomaji: `Mabataki ga kizukaseta
Naite iru watashi wo

Aishite ita wasurete ita
Ano yoru no deai wo

Toki ga tatsu to arigatou mo
Aishiteru mo ienai mama

Kono heya de wa semasugita ne
Futari no kyori chikasugite wa, tooi

Onaji egao nita futari
"Kyoudai mitai" da nante

Mamorarete ita shiranu ma ni
Atarimae ni natteta

Uiuishisa motomete ita
Wasurete ita arigatami mo

Sayonara dake ja owarenai kurai
Ironna hibi wo sugoshite kita ne

Saigo da ne te ni furete
Arigatou, tsubuyaku`,

      lyricsEn: `A blink made me notice
Myself crying

I loved you, I had forgotten
That night we met

As time passes, "thank you" and
"I love you" stay unsaid

This room was too small, wasn't it
The distance between us—too close becomes far

Two people with the same smile
"You're like siblings," they said

I was being protected, without realizing
It had become normal

I was searching for that freshness
Had forgotten to be grateful too

Just "goodbye" isn't enough to end this
We've spent so many different days together

This is the end, isn't it—touching your hand
"Thank you," I whisper`,

      notes: `• サヨナラだけじゃ (sayonara dake ja) - "Just goodbye (isn't enough)" - The title captures the impossibility of a clean ending after deep intimacy.
• 兄妹みたい (kyoudai mitai) - "Like siblings" - That painful thing people say about couples who've become too comfortable, too familiar. The romance has faded into family-like routine.
• 近過ぎては、遠い (chikasugite wa, tooi) - "Too close becomes far" - A paradox about intimacy. When you're so close you stop seeing each other, emotional distance grows.
• 有り難み (arigatami) - "Gratitude/appreciation" - Related to ありがとう (arigatou/thank you). The speaker forgot to appreciate what they had.
• 初々しさ (uiuishisa) - "Freshness/newness" - That early-relationship excitement. The speaker was chasing it, perhaps elsewhere.
• 呟く (tsubuyaku) - "To murmur/whisper" - The final "arigatou" is whispered, barely audible. A quiet, tender ending.
• This is notably softer than most Fukuro tracks—a quiet, melancholic breakup song about love that died from neglect and familiarity rather than any dramatic betrayal.`,
    },
  })
  console.log('✓ Updated: Sayonara Dakeja')

  // ============================================
  // BAKEMONO NO WATASHI NI WA / バケモノの私には
  // ============================================
  await prisma.song.update({
    where: { slug: 'bakemono-no-watashi-ni-wa' },
    data: {
      lyricsJp: `ねえ見えているの? 僕はお化けだから
ねえ聞こえてるの? 僕はお化けだから

ねえ怖えてるの? 僕がお化けだから
ねえ恐れてるの? 僕がお化けだから

誰もいないお屋敷で一人暮らす少年は
街の少女に恋をする
半透明な体だけが違くて

バケモノの私にはあなたを抱きしめる事も出来ない
汚い手で、汚い目で、あなたには触れちゃいけない
僕は見てるだけ

ねえ泣いているの? 誰にやられたんだい
ねえ怪我してるの? 僕がこらしめるよ

誰もいないお屋敷の窓の外は賑やかで
皆が歌い踊っている
半透明な僕はただ見てるだけ

バケモノの私にはあなたを愛する資格はないから
一人でいい、孤独でいい、ただあなたの笑顔が
綺麗なままで

バケモノの私にはあなたを愛する事は許されない
汚い手で、汚い目で、あなたには触れちゃいけない
僕は見てるだけ`,

      lyricsRomaji: `Nee miete iru no? Boku wa obake da kara
Nee kikoeteru no? Boku wa obake da kara

Nee kowae teru no? Boku ga obake da kara
Nee osoreteru no? Boku ga obake da kara

Dare mo inai oyashiki de hitori kurasu shounen wa
Machi no shoujo ni koi wo suru
Hantoumei na karada dake ga chigakute

Bakemono no watashi ni wa anata wo dakishimeru koto mo dekinai
Kitanai te de, kitanai me de, anata ni wa furechaikenai
Boku wa miteru dake

Nee naite iru no? Dare ni yararetan dai
Nee kega shiteru no? Boku ga korashimeru yo

Dare mo inai oyashiki no mado no soto wa nigiyaka de
Minna ga utai odotte iru
Hantoumei na boku wa tada miteru dake

Bakemono no watashi ni wa anata wo ai suru shikaku wa nai kara
Hitori de ii, kodoku de ii, tada anata no egao ga
Kirei na mama de

Bakemono no watashi ni wa anata wo ai suru koto wa yurusarenai
Kitanai te de, kitanai me de, anata ni wa furechaikenai
Boku wa miteru dake`,

      lyricsEn: `Hey, can you see me? I'm a ghost, you know
Hey, can you hear me? I'm a ghost, you know

Hey, are you scared? Because I'm a ghost
Hey, are you afraid? Because I'm a ghost

A boy living alone in an empty mansion
Falls in love with a girl from town
Only his translucent body sets him apart

A monster like me can't even hold you
With these dirty hands, these dirty eyes, I mustn't touch you
I can only watch

Hey, are you crying? Who did this to you?
Hey, are you hurt? I'll make them pay

Outside the window of this empty mansion, it's so lively
Everyone is singing and dancing
Translucent me can only watch

A monster like me has no right to love you
Alone is fine, loneliness is fine, as long as your smile
Stays beautiful

A monster like me isn't allowed to love you
With these dirty hands, these dirty eyes, I mustn't touch you
I can only watch`,

      notes: `• お化け (obake) vs バケモノ (bakemono) - Both mean ghost/monster, but obake is softer (think Casper), while bakemono is harsher, more monstrous. The speaker uses obake when describing himself to the girl, but bakemono when condemning himself.
• 半透明 (hantoumei) - "Semi-transparent/translucent" - He's a ghost, visible but not solid. A perfect metaphor for feeling present but unable to participate.
• 汚い手で、汚い目で (kitanai te de, kitanai me de) - "With dirty hands, with dirty eyes" - Self-loathing. He sees himself as too impure to touch her, even though ghosts are typically intangible anyway. The dirtiness is moral/emotional.
• 僕は見てるだけ (boku wa miteru dake) - "I can only watch" - The repeated refrain. Powerless observation, longing without the ability to act.
• こらしめる (korashimeru) - "To punish/discipline/make them pay" - A sudden flash of protectiveness. He can't touch her, but he wants to avenge her.
• 資格はない (shikaku wa nai) - "Have no right/qualification" - He's disqualified from love not by circumstance but by his own self-judgment.
• The song tells a complete story: ghost boy in mansion → sees girl → falls in love → can't touch her → sees her hurt → wants to protect her → accepts eternal loneliness so her smile stays pure.`,
    },
  })
  console.log('✓ Updated: Bakemono no Watashi ni wa')

  console.log('\n✅ All lyrics updated successfully!')
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
