"use strict";

// prisma/update-lyrics.ts
var import_client = require("@prisma/client");
var prisma = new import_client.PrismaClient();
async function main() {
  console.log("Updating lyrics from collection...");
  await prisma.song.update({
    where: { slug: "utopia" },
    data: {
      lyricsJp: `A\u304BB\u306B\u5225\u308C\u308B\u30B2\u30FC\u30E0\u306B\u306A\u3063\u3066\u3093\u3060\u306D
\u7121\u3051\u308C\u3070\u7121\u3044\u3067\u82E6\u3057\u304F\u306A\u3063\u3061\u3083\u3046\u304B\u3089
\u3042\u308B\u3082\u306E\u5168\u3066\u3092\u9802\u6234

\u767D\u3044\u30E2\u30CE\u304B\u3089\u6C5A\u308C\u3066\u3001\u3082\u3046\u843D\u3061\u306A\u304F\u306A\u3063\u3066
\u6B32\u671B\u304C\u571F\u53F0\u306E\u4E16\u754C\u306E\u4E2D\u5FC3\u90E8\u3067
\u3069\u308C\u304B\u3089\u98DF\u3079\u308C\u3070\u3044\u3044\u306E?

\u58CA\u308C\u3066\u3044\u304F\u541B\u306F
\u7F8E\u3057\u304F\u3066
\u7DBA\u9E97\u306B\u898B\u3048\u305F\u3093\u3060

\u6700\u5F8C\u306E\u30AA\u30C1\u306F\u8A00\u308F\u306A\u3044\u3067
\u6700\u5F8C\u307E\u3067\u898B\u306A\u3044\u306E\u304C\u597D\u304D\u306A\u306E
\u4E16\u754C\u304C\u5D29\u58CA\u3059\u308B\u30AA\u30C1\u306F
\u3082\u3046\u98FD\u304D\u305F\u3060\u3051
\u3082\u3046\u98FD\u304D\u305F\u3060\u3051

\u6C17\u3065\u3044\u3061\u3083\u3044\u3051\u306A\u3044\u4E8B\u3070\u3063\u304B\u308A
\u30B7\u30F3\u30D7\u30EB\u306A\u4E16\u754C\u3060\u3063\u305F
\u523A\u3055\u306A\u304D\u3083\u306A\u3093\u306A\u3044\u4E16\u754C\u306E\u6025\u964D\u4E0B\u3067
\u3069\u308C\u304B\u3089\u5B88\u308C\u3070\u3044\u3044\u306E?

\u58CA\u308C\u3066\u3044\u304F\u541B\u306F
\u7F8E\u3057\u304F\u3066
\u7DBA\u9E97\u306B\u898B\u3048\u305F\u3093\u3060

\u6700\u5F8C\u306E\u30AA\u30C1\u306F\u8A00\u308F\u306A\u3044\u3067
\u6700\u5F8C\u307E\u3067\u898B\u306A\u3044\u306E\u304C\u597D\u304D\u306A\u306E
\u4E16\u754C\u304C\u5D29\u58CA\u3059\u308B\u30AA\u30C1\u306F
\u3082\u3046\u98FD\u304D\u305F\u3060\u3051
\u3082\u3046\u98FD\u304D\u305F\u3060\u3051

\u6700\u5F8C\u306E\u30AA\u30C1\u306F\u8A00\u308F\u306A\u3044\u3067
\u6700\u5F8C\u307E\u3067\u308F\u304B\u3089\u306A\u3044\u306E\u304C\u597D\u304D\u306A\u306E
\u3042\u306A\u305F\u306B\u60F3\u50CF\u3067\u304D\u3061\u3083\u3046\u30AA\u30C1\u306F
\u3082\u3046\u98FD\u304D\u305F\u304B\u3089

\u30B5\u30E8\u30CA\u30E9\u306A\u3093\u3066\u8A00\u308F\u306A\u3044\u3067
\u6700\u5F8C\u307E\u3067\u308F\u304B\u3089\u306A\u3044\u306E\u304C\u597D\u304D\u306A\u306E
\u79C1\u306B\u60F3\u50CF\u3067\u304D\u3061\u3083\u3046\u30AA\u30C1\u306F
\u3082\u3046\u98FD\u304D\u305F\u3060\u3051
\u3082\u3046\u98FD\u304D\u305F\u3060\u3051`,
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
An ending where the world collapses\u2014
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
An ending where the world collapses\u2014
I'm just tired of it
I'm just tired of it

Don't tell me the ending
I like not knowing until the end
An ending you can easily imagine\u2014
I'm already tired of it

Don't say goodbye
I like not knowing until the end
An ending I can easily imagine\u2014
I'm just tired of it
I'm just tired of it`,
      notes: `\u2022 \u30AA\u30C1 (ochi) - Literally "punchline" or "conclusion/ending" of a story. The repeated use suggests weariness with predictable narratives and apocalyptic endings.
\u2022 \u9802\u6234 (choudai) - A casual/childish way of saying "give me," adding a sense of greed or desperation.
\u2022 \u523A\u3055\u306A\u304D\u3083\u306A\u3093\u306A\u3044 (sasanakya nannai) - "Have to stab/pierce" - ambiguous whether this means attacking or being pierced by the falling world.
\u2022 \u58CA\u308C\u3066\u3044\u304F\u541B (kowarete iku kimi) - "You who are breaking/falling apart" - the progressive form emphasizes ongoing deterioration, yet the speaker finds this beautiful.
\u2022 The shift from \u898B\u306A\u3044 (minai - not watching) to \u308F\u304B\u3089\u306A\u3044 (wakaranai - not knowing) in the later verses suggests a deepening desire to avoid predictable conclusions.
\u2022 The final verses shift perspective between \u3042\u306A\u305F (anata - you) and \u79C1 (watashi - I), blurring who is tired of whose predictable ending.`
    }
  });
  console.log("\u2713 Updated: Utopia");
  await prisma.song.update({
    where: { slug: "ningen-ja-nai" },
    data: {
      lyricsJp: `\u5B89\u3089\u3050\u70BA\u306B\u6BBA\u3057 \u5B89\u3089\u3050\u70BA\u306B\u81EA\u6B7B\u3057
\u8A00\u8449\u306F\u5618\u306E\u30C4\u30FC\u30EB\u3067 \u8C5A\u307B\u3069\u91D1\u3092\u63E1\u308B

\u6240\u8A6E\u7363\u3001\u7363\u3001\u8179\u306F\u6E1B\u308B

\u30A2\u30F3\u30BF\u3089\u307F\u3093\u306A\u4EBA\u9593\u3058\u3083\u306A\u3044\u3063\u3066\uFF01
\u6731\u8272\u306E\u5FC3\u81D3\u306F
\u30A2\u30F3\u30BF\u3089\u307F\u3093\u306A\u4EBA\u9593\u3058\u3083\u306A\u3044\u3063\u3066\uFF01
\u6642\u4EE3\u306B\u72AF\u3055\u308C\u3066\u3044\u308B
\u30A2\u30F3\u30BF\u3089\u307F\u3093\u306A\u4EBA\u9593\u3058\u3083\u306A\u3044\u3063\u3066\uFF01
\u6731\u8272\u306E\u5FC3\u81D3\u306F
\u30A2\u30F3\u30BF\u3089\u307F\u3093\u306A\u4EBA\u9593\u3058\u3083\u306A\u3044\u3063\u3066\uFF01
\u6642\u4EE3\u306B\u72AF\u3055\u308C\u3066\u8170\u632F\u308B

\u30EC\u30E2\u30F3\u3092\u601D\u3044\u51FA\u305B\u3070 \u553E\u6DB2\u304C\u96F6\u308C\u843D\u3061\u3066
\u6731\u8272\u306E\u7518\u3044\u30B7\u30F3\u30CA\u30FC \u4E57\u308B\u306E\u304B\u3001\u99AC\u306B\u306A\u308B\u306E\u304B

\u6240\u8A6E\u7363\u3001\u7363\u3001\u8179\u306F\u6E1B\u308B

\u30A2\u30F3\u30BF\u3089\u307F\u3093\u306A\u4EBA\u9593\u3058\u3083\u306A\u3044\u3063\u3066\uFF01
\u6731\u8272\u306E\u5FC3\u81D3\u306F
\u30A2\u30F3\u30BF\u3089\u307F\u3093\u306A\u4EBA\u9593\u3058\u3083\u306A\u3044\u3063\u3066\uFF01
\u6642\u4EE3\u306B\u72AF\u3055\u308C\u3066\u3044\u308B
\u30A2\u30F3\u30BF\u3089\u307F\u3093\u306A\u4EBA\u9593\u3058\u3083\u306A\u3044\u3063\u3066\uFF01
\u6731\u8272\u306E\u5FC3\u81D3\u306F
\u30A2\u30F3\u30BF\u3089\u307F\u3093\u306A\u4EBA\u9593\u3058\u3083\u306A\u3044\u3063\u3066\uFF01
\u6642\u4EE3\u306B\u72AF\u3055\u308C\u3066\u8170\u632F\u308B

\u50D5\u305F\u3061\u306F\u304D\u3063\u3068\u3001\u4EBA\u9593\u306B\u306A\u308C\u3066\u3044\u306A\u304F\u3063\u3066
\u660E\u65E5\u3082\u8150\u3063\u3066\u308B
\u3058\u3083\u3042\u4EBA\u9593\u3066\u306A\u306B\u3063\u3066\u3001\u305D\u3093\u306A\u306E\u77E5\u308B\u304B\u3088\u3063\u3066
\u7B54\u3048\u306A\u3093\u3066\u306A\u3044\u307E\u307E
\u8AB0\u304B\u306E\u72A0\u7272\u3067\u751F\u304D\u3066\u3001\u3067\u3082\u305D\u308C\u306F\u60AA\u306A\u306E\u304B\u3063\u3066
\u5FC3\u306F\u8FF7\u3063\u3066\u308B
\u7B54\u3048\u306F\u898B\u3064\u304B\u3089\u306A\u3044\u307E\u307E\u3001\u307F\u3093\u306A\u6B7B\u3093\u3067\u304F\u3093\u3060\u308D\u3046\u306A
\u30EC\u30E2\u30F3\u306E\u9178\u5473\u3060\u3051\u6B8B\u3057\u3066`,
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

In the end we're beasts, beasts\u2014stomachs get hungry

You're all not human!
These vermillion hearts
You're all not human!
Being violated by the times
You're all not human!
These vermillion hearts
You're all not human!
Violated by the times, shaking your hips

If I remember lemons, saliva spills out
Vermillion sweet thinner\u2014will you ride, or become the horse?

In the end we're beasts, beasts\u2014stomachs get hungry

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
Living off someone's sacrifice\u2014but is that even evil?
My heart wavers
Without ever finding the answer, everyone will just die off
Leaving only the sourness of lemons behind`,
      notes: `\u2022 \u4EBA\u9593\u3058\u3083\u306A\u3044 (ningen janai) - "Not human" - The title and hook. Accusatory toward others but ultimately self-reflective.
\u2022 \u6731\u8272 (shuiro) - Vermillion/cinnabar red. A vivid orange-red associated with both vitality and blood. "Vermillion hearts" suggests something raw and exposed.
\u2022 \u6642\u4EE3\u306B\u72AF\u3055\u308C\u3066\u3044\u308B (jidai ni okasarete iru) - "Being violated by the era/times" - \u72AF\u3055\u308C\u308B can mean violated, raped, or corrupted. The era itself as perpetrator.
\u2022 \u8170\u632F\u308B (koshi furu) - "Shaking hips" - Sexual movement, suggesting complicity or participation in the violation.
\u2022 \u30B7\u30F3\u30CA\u30FC (shinnaa) - Thinner (paint thinner) - A drug reference. "Sweet vermillion thinner" evokes both the color of blood and substance abuse.
\u2022 \u4E57\u308B\u306E\u304B\u3001\u99AC\u306B\u306A\u308B\u306E\u304B (noru no ka, uma ni naru no ka) - "Will you ride, or become the horse?" - A question of dominance vs. submission, exploiter vs. exploited.
\u2022 \u30EC\u30E2\u30F3\u306E\u9178\u5473 (remon no sanmi) - "Sourness of lemons" - The Pavlovian response earlier returns as the only thing left behind after death.
\u2022 The final verse shifts from accusation ("you're all not human!") to existential doubt ("what even is human?"), ultimately admitting the speaker doesn't know either.`
    }
  });
  console.log("\u2713 Updated: Ningen Janai");
  await prisma.song.update({
    where: { slug: "sayonara-dake-ja" },
    data: {
      lyricsJp: `\u77AC\u304D\u304C \u6C17\u4ED8\u304B\u305B\u305F
\u6CE3\u3044\u3066\u3044\u308B \u79C1\u3092

\u611B\u3057\u3066\u3044\u305F \u5FD8\u308C\u3066\u3044\u305F
\u3042\u306E\u591C\u306E \u51FA\u4F1A\u3044\u3092

\u6642\u304C\u7D4C\u3064\u3068 \u3042\u308A\u304C\u3068\u3046\u3082
\u611B\u3057\u3066\u308B\u3082 \u8A00\u3048\u306A\u3044\u307E\u307E

\u3053\u306E\u90E8\u5C4B\u3067\u306F \u72ED\u904E\u304E\u305F\u306D
\u4E8C\u4EBA\u306E\u8DDD\u96E2 \u8FD1\u904E\u304E\u3066\u306F\u3001\u9060\u3044

\u540C\u3058\u7B11\u9854 \u4F3C\u305F\u4E8C\u4EBA
\u300C\u5144\u59B9\u307F\u305F\u3044\u300D\u3060\u306A\u3093\u3066

\u5B88\u3089\u308C\u3066\u3044\u305F \u77E5\u3089\u306C\u9593\u306B
\u5F53\u305F\u308A\u524D\u306B \u306A\u3063\u3066\u305F

\u521D\u3005\u3057\u3055 \u6C42\u3081\u3066\u3044\u305F
\u5FD8\u308C\u3066\u3044\u305F \u6709\u308A\u96E3\u307F\u3082

\u30B5\u30E8\u30CA\u30E9\u3060\u3051\u3058\u3083 \u7D42\u308F\u308C\u306A\u3044\u304F\u3089\u3044
\u8272\u3093\u306A\u65E5\u3005\u3092 \u904E\u3054\u3057\u3066\u6765\u305F\u306D

\u6700\u5F8C\u3060\u306D \u624B\u306B\u89E6\u308C\u3066
\u3042\u308A\u304C\u3068\u3046\u3001\u545F\u304F`,
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
The distance between us\u2014too close becomes far

Two people with the same smile
"You're like siblings," they said

I was being protected, without realizing
It had become normal

I was searching for that freshness
Had forgotten to be grateful too

Just "goodbye" isn't enough to end this
We've spent so many different days together

This is the end, isn't it\u2014touching your hand
"Thank you," I whisper`,
      notes: `\u2022 \u30B5\u30E8\u30CA\u30E9\u3060\u3051\u3058\u3083 (sayonara dake ja) - "Just goodbye (isn't enough)" - The title captures the impossibility of a clean ending after deep intimacy.
\u2022 \u5144\u59B9\u307F\u305F\u3044 (kyoudai mitai) - "Like siblings" - That painful thing people say about couples who've become too comfortable, too familiar. The romance has faded into family-like routine.
\u2022 \u8FD1\u904E\u304E\u3066\u306F\u3001\u9060\u3044 (chikasugite wa, tooi) - "Too close becomes far" - A paradox about intimacy. When you're so close you stop seeing each other, emotional distance grows.
\u2022 \u6709\u308A\u96E3\u307F (arigatami) - "Gratitude/appreciation" - Related to \u3042\u308A\u304C\u3068\u3046 (arigatou/thank you). The speaker forgot to appreciate what they had.
\u2022 \u521D\u3005\u3057\u3055 (uiuishisa) - "Freshness/newness" - That early-relationship excitement. The speaker was chasing it, perhaps elsewhere.
\u2022 \u545F\u304F (tsubuyaku) - "To murmur/whisper" - The final "arigatou" is whispered, barely audible. A quiet, tender ending.
\u2022 This is notably softer than most Fukuro tracks\u2014a quiet, melancholic breakup song about love that died from neglect and familiarity rather than any dramatic betrayal.`
    }
  });
  console.log("\u2713 Updated: Sayonara Dakeja");
  await prisma.song.update({
    where: { slug: "bakemono-no-watashi-ni-wa" },
    data: {
      lyricsJp: `\u306D\u3048\u898B\u3048\u3066\u3044\u308B\u306E? \u50D5\u306F\u304A\u5316\u3051\u3060\u304B\u3089
\u306D\u3048\u805E\u3053\u3048\u3066\u308B\u306E? \u50D5\u306F\u304A\u5316\u3051\u3060\u304B\u3089

\u306D\u3048\u6016\u3048\u3066\u308B\u306E? \u50D5\u304C\u304A\u5316\u3051\u3060\u304B\u3089
\u306D\u3048\u6050\u308C\u3066\u308B\u306E? \u50D5\u304C\u304A\u5316\u3051\u3060\u304B\u3089

\u8AB0\u3082\u3044\u306A\u3044\u304A\u5C4B\u6577\u3067\u4E00\u4EBA\u66AE\u3089\u3059\u5C11\u5E74\u306F
\u8857\u306E\u5C11\u5973\u306B\u604B\u3092\u3059\u308B
\u534A\u900F\u660E\u306A\u4F53\u3060\u3051\u304C\u9055\u304F\u3066

\u30D0\u30B1\u30E2\u30CE\u306E\u79C1\u306B\u306F\u3042\u306A\u305F\u3092\u62B1\u304D\u3057\u3081\u308B\u4E8B\u3082\u51FA\u6765\u306A\u3044
\u6C5A\u3044\u624B\u3067\u3001\u6C5A\u3044\u76EE\u3067\u3001\u3042\u306A\u305F\u306B\u306F\u89E6\u308C\u3061\u3083\u3044\u3051\u306A\u3044
\u50D5\u306F\u898B\u3066\u308B\u3060\u3051

\u306D\u3048\u6CE3\u3044\u3066\u3044\u308B\u306E? \u8AB0\u306B\u3084\u3089\u308C\u305F\u3093\u3060\u3044
\u306D\u3048\u602A\u6211\u3057\u3066\u308B\u306E? \u50D5\u304C\u3053\u3089\u3057\u3081\u308B\u3088

\u8AB0\u3082\u3044\u306A\u3044\u304A\u5C4B\u6577\u306E\u7A93\u306E\u5916\u306F\u8CD1\u3084\u304B\u3067
\u7686\u304C\u6B4C\u3044\u8E0A\u3063\u3066\u3044\u308B
\u534A\u900F\u660E\u306A\u50D5\u306F\u305F\u3060\u898B\u3066\u308B\u3060\u3051

\u30D0\u30B1\u30E2\u30CE\u306E\u79C1\u306B\u306F\u3042\u306A\u305F\u3092\u611B\u3059\u308B\u8CC7\u683C\u306F\u306A\u3044\u304B\u3089
\u4E00\u4EBA\u3067\u3044\u3044\u3001\u5B64\u72EC\u3067\u3044\u3044\u3001\u305F\u3060\u3042\u306A\u305F\u306E\u7B11\u9854\u304C
\u7DBA\u9E97\u306A\u307E\u307E\u3067

\u30D0\u30B1\u30E2\u30CE\u306E\u79C1\u306B\u306F\u3042\u306A\u305F\u3092\u611B\u3059\u308B\u4E8B\u306F\u8A31\u3055\u308C\u306A\u3044
\u6C5A\u3044\u624B\u3067\u3001\u6C5A\u3044\u76EE\u3067\u3001\u3042\u306A\u305F\u306B\u306F\u89E6\u308C\u3061\u3083\u3044\u3051\u306A\u3044
\u50D5\u306F\u898B\u3066\u308B\u3060\u3051`,
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
      notes: `\u2022 \u304A\u5316\u3051 (obake) vs \u30D0\u30B1\u30E2\u30CE (bakemono) - Both mean ghost/monster, but obake is softer (think Casper), while bakemono is harsher, more monstrous. The speaker uses obake when describing himself to the girl, but bakemono when condemning himself.
\u2022 \u534A\u900F\u660E (hantoumei) - "Semi-transparent/translucent" - He's a ghost, visible but not solid. A perfect metaphor for feeling present but unable to participate.
\u2022 \u6C5A\u3044\u624B\u3067\u3001\u6C5A\u3044\u76EE\u3067 (kitanai te de, kitanai me de) - "With dirty hands, with dirty eyes" - Self-loathing. He sees himself as too impure to touch her, even though ghosts are typically intangible anyway. The dirtiness is moral/emotional.
\u2022 \u50D5\u306F\u898B\u3066\u308B\u3060\u3051 (boku wa miteru dake) - "I can only watch" - The repeated refrain. Powerless observation, longing without the ability to act.
\u2022 \u3053\u3089\u3057\u3081\u308B (korashimeru) - "To punish/discipline/make them pay" - A sudden flash of protectiveness. He can't touch her, but he wants to avenge her.
\u2022 \u8CC7\u683C\u306F\u306A\u3044 (shikaku wa nai) - "Have no right/qualification" - He's disqualified from love not by circumstance but by his own self-judgment.
\u2022 The song tells a complete story: ghost boy in mansion \u2192 sees girl \u2192 falls in love \u2192 can't touch her \u2192 sees her hurt \u2192 wants to protect her \u2192 accepts eternal loneliness so her smile stays pure.`
    }
  });
  console.log("\u2713 Updated: Bakemono no Watashi ni wa");
  await prisma.song.update({
    where: { slug: "vinyl-children" },
    data: {
      lyricsJp: `\u50D5\u3068\u541B\u3068\u50D5\u3068\u541B\u304C\u5C45\u305F
\u904E\u53BB\u3068\u4ECA\u3068\u904E\u53BB\u3068\u4ECA\u3060\u3051\u306E
\u3072\u3068\u308A\u3075\u305F\u308A\u3072\u3068\u308A\u3075\u305F\u308A\u6B7B\u3093\u3060
\u660E\u65E5\u3082\u6B64\u51E6\u306B\u5C45\u305F\u3089\u3044\u3044\u306E

\u6B63\u3057\u3055\u3082\u9593\u9055\u3044\u3082\u308F\u304B\u3089\u306A\u3044
\u5922\u3082\u672A\u6765\u3082\u3069\u3046\u3067\u3082\u3044\u3044\u304B\u3089
\u3044\u307E\u541B\u3068\u7B11\u3048\u308C\u3070\u305D\u308C\u3067\u3044\u3044
\u660E\u65E5\u306A\u3069100\u5186\u306B\u3082\u306A\u3089\u306A\u3044\u306D

\u305F\u3060\u50D5\u3068\u541B\u3068\u50D5\u3068\u541B\u304C\u5C45\u305F
\u904E\u53BB\u3068\u4ECA\u3068\u904E\u53BB\u3068\u4ECA\u3060\u3051\u306E
\u89E6\u308C\u308B\u541B\u304C\u7B11\u3046\u4ECA\u304C\u3042\u3063\u3066
\u305D\u308C\u3067\u3088\u304B\u3063\u305F

\u67A0\u306B\u99B4\u67D3\u3081\u305A\u306B\u5ACC\u3063\u305F
\u305D\u3093\u306A\u50D5\u305F\u3061\u306E\u96C6\u307E\u308A\u3060\u3063\u305F
\u521D\u3081\u3066\u306E\u5C45\u5834\u6240\u3060\u3063\u305F
\u4ECA\u697D\u3057\u3051\u308C\u3070\u305D\u308C\u3067\u3088\u304B\u3063\u305F

\u50D5\u3068\u541B\u3068\u50D5\u3068\u541B\u304C\u5C45\u305F
\u904E\u53BB\u3068\u4ECA\u3068\u904E\u53BB\u3068\u4ECA\u3060\u3051\u306E
\u3072\u3068\u308A\u3075\u305F\u308A\u3072\u3068\u308A\u3075\u305F\u308A\u6B7B\u3093\u3060
\u660E\u65E5\u3082\u3053\u3053\u306B\u5C45\u305F\u3089\u3044\u3044\u306E

\u4ED6\u4EBA\u3092\u6BBA\u3059\u4E8B\u304C\u7F6A\u306B\u306A\u308B\u306A\u3089
\u81EA\u5206\u3092\u6BBA\u3059\u4E8B\u306F\u7F6A\u3058\u3083\u306A\u3044\u306E\u304B
\u8AB0\u306B\u3067\u3082\u512A\u3057\u304B\u3063\u305F\u306F\u305A\u306E\u541B\u304C
\u8AB0\u306B\u3082\u6253\u3061\u660E\u3051\u305A\u306B\u98DB\u3073\u964D\u308A\u305F

\u305F\u3060\u50D5\u3068\u541B\u3068\u50D5\u3068\u541B\u304C\u5C45\u305F
\u904E\u53BB\u3068\u4ECA\u3068\u904E\u53BB\u3068\u4ECA\u3060\u3051\u306E
\u89E6\u308C\u308B\u541B\u304C\u7B11\u3046\u4ECA\u304C\u3042\u3063\u3066
\u50D5\u3089\u304C\u5C45\u305F

\u50D5\u3089\u306E\u672A\u6765\u3092\u6C7A\u3081\u308B\u306E\u306F\u8AB0\u3060
\u50D5\u3089\u306E\u4FA1\u5024\u3092\u6C7A\u3081\u308B\u306E\u306F\u8AB0\u3060
\u50D5\u3089\u306E\u672A\u6765\u3092\u596A\u3046\u306E\u306F\u8AB0\u3060
\u50D5\u3089\u306E\u4FA1\u5024\u3092\u596A\u3046\u306E\u306F\u8AB0\u3060

\u305F\u3060\u50D5\u3068\u541B\u3068\u50D5\u3068\u541B\u304C\u5C45\u305F
\u904E\u53BB\u3068\u4ECA\u3068\u904E\u53BB\u3068\u4ECA\u3060\u3051\u306E
\u3072\u3068\u308A\u3075\u305F\u308A\u3072\u3068\u308A\u3075\u305F\u308A\u6B7B\u3093\u3060
\u50D5\u3089\u304C\u5C45\u305F`,
      lyricsRomaji: `Boku to kimi to boku to kimi ga ita
Kako to ima to kako to ima dake no
Hitori futari hitori futari shinda
Ashita mo koko ni itara ii no

Tadashisa mo machigai mo wakaranai
Yume mo mirai mo dou demo ii kara
Ima kimi to waraereba sore de ii
Ashita nado hyaku en ni mo naranai ne

Tada boku to kimi to boku to kimi ga ita
Kako to ima to kako to ima dake no
Fureru kimi ga warau ima ga atte
Sore de yokatta

Waku ni najimezu ni kiratta
Sonna bokutachi no atsumari datta
Hajimete no ibasho datta
Ima tanoshikereba sore de yokatta

Boku to kimi to boku to kimi ga ita
Kako to ima to kako to ima dake no
Hitori futari hitori futari shinda
Ashita mo koko ni itara ii no

Tanin wo korosu koto ga tsumi ni naru nara
Jibun wo korosu koto wa tsumi janai no ka
Dare ni demo yasashikatta hazu no kimi ga
Dare ni mo uchiakezu ni tobiorita

Tada boku to kimi to boku to kimi ga ita
Kako to ima to kako to ima dake no
Fureru kimi ga warau ima ga atte
Bokura ga ita

Bokura no mirai wo kimeru no wa dare da
Bokura no kachi wo kimeru no wa dare da
Bokura no mirai wo ubau no wa dare da
Bokura no kachi wo ubau no wa dare da

Tada boku to kimi to boku to kimi ga ita
Kako to ima to kako to ima dake no
Hitori futari hitori futari shinda
Bokura ga ita`,
      lyricsEn: `There was me and you and me and you
Only the past and now and past and now
One by one, two by two, they died
Would it be okay to still be here tomorrow?

I don't know what's right or wrong
Dreams and the future don't matter anyway
If I can laugh with you now, that's enough
Tomorrow isn't even worth 100 yen

There was just me and you and me and you
Only the past and now and past and now
There's a present where I can touch you and you smile
And that was enough

We hated not fitting into the frame
That's the kind of gathering we were
It was our first place to belong
If we're having fun now, that was enough

There was me and you and me and you
Only the past and now and past and now
One by one, two by two, they died
Would it be okay to still be here tomorrow?

If killing others is a crime
Then isn't killing yourself also a crime?
You, who should have been kind to everyone
Jumped without telling anyone

There was just me and you and me and you
Only the past and now and past and now
There's a present where I can touch you and you smile
We were here

Who decides our future?
Who decides our worth?
Who steals our future?
Who steals our worth?

There was just me and you and me and you
Only the past and now and past and now
One by one, two by two, they died
We were here`,
      notes: `\u2022 \u30F4\u30A1\u30A4\u30CA\u30EB\u30C1\u30EB\u30C9\u30EC\u30F3 (Vinyl Children) - The title evokes both records/music and the idea of being pressed/molded, connecting to the "Adult Children" EP theme.
\u2022 \u660E\u65E5\u306A\u3069100\u5186\u306B\u3082\u306A\u3089\u306A\u3044 (ashita nado hyaku en ni mo naranai) - "Tomorrow isn't even worth 100 yen" - Devaluing the future completely.
\u2022 \u67A0\u306B\u99B4\u67D3\u3081\u305A\u306B (waku ni najimezu ni) - "Not fitting into the frame" - Misfits, outsiders.
\u2022 \u98DB\u3073\u964D\u308A\u305F (tobiorita) - "Jumped" - The song directly addresses suicide, with the speaker questioning why killing others is a crime but killing yourself isn't treated the same.
\u2022 The repetitive structure (boku to kimi to boku to kimi) creates a hypnotic, grief-stricken loop, cycling through memories of people who are no longer here.`
    }
  });
  console.log("\u2713 Updated: Vinyl Children");
  await prisma.song.update({
    where: { slug: "sociopath" },
    data: {
      lyricsJp: `\u5FD8\u308C\u3066\u3044\u304F\u3060\u3051\u3060\u3088
\u305F\u3060\u6642\u306E\u6D77
\u60B2\u3057\u304F\u306A\u3044 \u60B2\u3057\u304F\u306A\u3044

\u5FD8\u308C\u3066\u3044\u304F\u3060\u3051\u3060\u3088
\u3053\u306E\u6642\u306E\u6D77
\u60B2\u3057\u304F\u306A\u3044 \u60B2\u3057\u304F\u306A\u3044
\u541B\u306E\u624B\u306B\u89E6\u308C\u305F

\u307E\u305F\u8AE6\u3081\u3066 \u307E\u305F\u8AE6\u3081\u3066
\u3044\u3064\u3082 \u3044\u3064\u3082
\u3069\u3053\u3078\u5411\u304B\u3046\u306E?
\u307E\u305F\u8AE6\u3081\u3066 \u307E\u305F\u8AE6\u3081\u3066
\u3044\u3064\u3082 \u3044\u3064\u3082 \u3044\u3064\u3082
\u3069\u3053\u3078\u884C\u304F\u306E?

\u6674\u308C\u305F\u7A7A\u3068\u6625\u304C\u8A00\u3046
\u7686\u3001\u6642\u306E\u82B1
\u60B2\u3057\u304F\u306A\u3044 \u60B2\u3057\u304F\u306A\u3044
\u541B\u304C\u7B11\u3046\u306E\u306A\u3089

\u307E\u305F\u8AE6\u3081\u3066 \u307E\u305F\u8AE6\u3081\u3066
\u3044\u3064\u3082 \u3044\u3064\u3082
\u3069\u3053\u3078\u5411\u304B\u3046\u306E?
\u307E\u305F\u8AE6\u3081\u3066 \u307E\u305F\u8AE6\u3081\u3066
\u3044\u3064\u3082 \u3044\u3064\u3082 \u3044\u3064\u3082
\u3069\u3053\u3078\u884C\u304F\u306E?

\u671D\u304C\u6765\u308B \u76EE\u3092\u9589\u3058\u308B \u8857\u304C\u307E\u305F \u606F\u3092\u3059\u308B

\u307E\u305F\u8AE6\u3081\u3066 \u307E\u305F\u8AE6\u3081\u3066
\u3044\u3064\u3082 \u3044\u3064\u3082
\u3069\u3053\u3078\u5411\u304B\u3046\u306E?
\u307E\u305F\u8AE6\u3081\u3066 \u307E\u305F\u8AE6\u3081\u3066
\u3044\u3064\u3082 \u3044\u3064\u3082 \u3044\u3064\u3082

\u307E\u305F\u9003\u3052\u51FA\u3057\u3066 \u307E\u305F\u5618\u3064\u3044\u3066
\u3044\u3064\u3082 \u3044\u3064\u3082
\u3069\u3053\u3078\u5411\u304B\u3046\u306E?
\u307E\u305F\u9003\u3052\u51FA\u3057\u3066 \u307E\u305F\u5618\u3064\u3044\u3066
\u3044\u3064\u3082 \u3044\u3064\u3082 \u3044\u3064\u3082
\u3069\u3053\u3078\u884C\u304F\u306E?`,
      lyricsRomaji: `Wasurete iku dake da yo
Tada toki no umi
Kanashikunai kanashikunai

Wasurete iku dake da yo
Kono toki no umi
Kanashikunai kanashikunai
Kimi no te ni fureta

Mata akiramete mata akiramete
Itsumo itsumo
Doko e mukau no?
Mata akiramete mata akiramete
Itsumo itsumo itsumo
Doko e iku no?

Hareta sora to haru ga iu
Mina, toki no hana
Kanashikunai kanashikunai
Kimi ga warau no nara

Mata akiramete mata akiramete
Itsumo itsumo
Doko e mukau no?
Mata akiramete mata akiramete
Itsumo itsumo itsumo
Doko e iku no?

Asa ga kuru me wo tojiru machi ga mata iki wo suru

Mata akiramete mata akiramete
Itsumo itsumo
Doko e mukau no?
Mata akiramete mata akiramete
Itsumo itsumo itsumo

Mata nigedashite mata uso tsuite
Itsumo itsumo
Doko e mukau no?
Mata nigedashite mata uso tsuite
Itsumo itsumo itsumo
Doko e iku no?`,
      lyricsEn: `We're just forgetting
Just the sea of time
Not sad, not sad

We're just forgetting
This sea of time
Not sad, not sad
I touched your hand

Giving up again, giving up again
Always, always
Where are you heading?
Giving up again, giving up again
Always, always, always
Where are you going?

The clear sky and spring say
Everyone is a flower of time
Not sad, not sad
If you're smiling

Giving up again, giving up again
Always, always
Where are you heading?
Giving up again, giving up again
Always, always, always
Where are you going?

Morning comes, I close my eyes, the city breathes again

Giving up again, giving up again
Always, always
Where are you heading?
Giving up again, giving up again
Always, always, always

Running away again, lying again
Always, always
Where are you heading?
Running away again, lying again
Always, always, always
Where are you going?`,
      notes: `\u2022 \u30BD\u30B7\u30AA\u30D1\u30B9 (Sociopath) - The title contrasts with the gentle, resigned lyrics. The "sociopath" may be the speaker themselves, unable to feel sadness ("not sad, not sad") while watching time pass.
\u2022 \u6642\u306E\u6D77 (toki no umi) - "Sea of time" - Time as an ocean that swallows memories.
\u2022 \u6642\u306E\u82B1 (toki no hana) - "Flowers of time" - Everyone blooms and withers with time.
\u2022 \u60B2\u3057\u304F\u306A\u3044 (kanashikunai) - "Not sad" - Repeated like a mantra, like trying to convince oneself.
\u2022 \u307E\u305F\u8AE6\u3081\u3066 (mata akiramete) - "Giving up again" - The repetition creates a sense of cyclical defeat.
\u2022 The shift from "giving up" to "running away and lying" in the final verse reveals the coping mechanism beneath the numbness.`
    }
  });
  console.log("\u2713 Updated: Sociopath");
  await prisma.song.update({
    where: { slug: "seppun" },
    data: {
      lyricsJp: `\u55DA\u547C\u3001\u5EFB\u308B\u591C\u3068
\u7D50\u9732\u306E\u857E \u54A5\u3048\u3066

\u547C\u5438\u3092\u5830\u304D\u6B62\u3081\u3066\u3001\u6BD2\u3092\u5DE1\u3089\u305B\u3066
\u3082\u3046\u8AB0\u3082\u898B\u3066\u306A\u3044\u304B\u3089\u306D\u3047
\u541B\u3092\u898B\u305B\u3066\u3088

\u4ECA\u591C\u306F\u3044\u3044\u3058\u3083\u306A\u3044 \u305D\u3093\u306A\u591C\u3082
\u4ECA\u591C\u306F\u3044\u3044\u3058\u3083\u306A\u3044 \u3055\u3042\u88F8\u8DB3\u3067\u99C6\u3051\u51FA\u305D\u3046\u3088

\u55DA\u547C\u3001\u5EFB\u308B\u591C\u3068\u4E0D\u57D2\u306A\u611B\u60C5
\u30A2\u30CA\u30BF\u306F\u306D\u3047\u4F55\u51E6\u304C\u597D\u304D? \u6559\u3048\u3066\u3088
\u55DA\u547C\u3001\u5EFB\u308B\u591C\u3068\u4E0D\u57D2\u306A\u7D14\u60C5
\u30A2\u30CA\u30BF\u306F\u306D\u3047

\u5E03\u3092\u5265\u304E\u53D6\u3063\u3066\u3001\u8718\u86DB\u3092\u5DE1\u3089\u305B\u3066
\u3082\u3046\u8AB0\u3082\u898B\u3066\u306A\u3044\u3058\u3083\u306A\u3044\u306D\u3047
\u541B\u3092\u898B\u305B\u3066\u3088

\u4ECA\u591C\u306F\u3044\u3044\u3058\u3083\u306A\u3044 \u305D\u3093\u306A\u591C\u3082
\u4ECA\u591C\u306F\u3044\u3044\u3058\u3083\u306A\u3044 \u3055\u3042\u88F8\u8DB3\u3067\u8E0A\u308A\u51FA\u305D\u3046\u3088

\u55DA\u547C\u3001\u5EFB\u308B\u591C\u3068\u77DB\u76FE\u306A\u611B\u60C5
\u30A2\u30CA\u30BF\u306F\u306D\u3047\u4F55\u304C\u597D\u304D? \u6559\u3048\u3066\u3088
\u55DA\u547C\u3001\u5EFB\u308B\u591C\u3068\u77DB\u76FE\u306A\u7D14\u60C5
\u30A2\u30CA\u30BF\u306F\u306D\u3047

\u4ECA\u591C\u306F\u3044\u3044\u3058\u3083\u306A\u3044 \u305D\u3093\u306A\u591C\u3082
\u4ECA\u591C\u306F\u3044\u3044\u3058\u3083\u306A\u3044 \u3055\u3042\u88F8\u3067\u9003\u3052\u51FA\u305D\u3046\u3088

\u55DA\u547C\u3001\u30A2\u30CA\u30BF\u306E\u540D\u3082\u77E5\u3089\u306A\u3044\u307E\u307E\u3067
\u56C1\u304F\u306D\u3047\u300C\u541B\u304C\u597D\u304D\u300D\u30AD\u30B9\u3057\u3066\u3088
\u55DA\u547C\u3001\u5EFB\u308B\u591C\u3068\u5B64\u72EC\u306A\u7D14\u60C5
\u30A2\u30CA\u30BF\u306F\u306D\u3047`,
      lyricsRomaji: `Aa, mawaru yoru to
Ketsuro no tsubomi kuwaete

Kokyuu wo sekitomete, doku wo megurasete
Mou dare mo mitenai kara nee
Kimi wo misete yo

Konya wa ii janai sonna yoru mo
Konya wa ii janai saa hadashi de kakedaso u yo

Aa, mawaru yoru to furachina aijou
Anata wa nee doko ga suki? Oshiete yo
Aa, mawaru yoru to furachina junjou
Anata wa nee

Nuno wo hagitotte, kumo wo megurasete
Mou dare mo mitenai janai nee
Kimi wo misete yo

Konya wa ii janai sonna yoru mo
Konya wa ii janai saa hadashi de odoridaso u yo

Aa, mawaru yoru to mujun na aijou
Anata wa nee nani ga suki? Oshiete yo
Aa, mawaru yoru to mujun na junjou
Anata wa nee

Konya wa ii janai sonna yoru mo
Konya wa ii janai saa hadaka de nigedaso u yo

Aa, anata no na mo shiranai mama de
Sasayaku nee "kimi ga suki" kisu shite yo
Aa, mawaru yoru to kodoku na junjou
Anata wa nee`,
      lyricsEn: `Ah, the spinning night and
Holding a bud of condensation in my mouth

Holding my breath, letting the poison circulate
No one's watching anymore, you know
Show yourself to me

Tonight's fine, isn't it? Even a night like this
Tonight's fine, isn't it? Come on, let's run barefoot

Ah, the spinning night and shameless love
Hey, where do you like to be touched? Tell me
Ah, the spinning night and shameless innocence
Hey, you...

Tearing off the cloth, letting spiders crawl
No one's watching anymore, right?
Show yourself to me

Tonight's fine, isn't it? Even a night like this
Tonight's fine, isn't it? Come on, let's dance barefoot

Ah, the spinning night and contradicting love
Hey, what do you like? Tell me
Ah, the spinning night and contradicting innocence
Hey, you...

Tonight's fine, isn't it? Even a night like this
Tonight's fine, isn't it? Come on, let's escape naked

Ah, without even knowing your name
I whisper, "I like you"\u2014kiss me
Ah, the spinning night and lonely innocence
Hey, you...`,
      notes: `\u2022 \u63A5\u543B (seppun) - "Kiss" - A more literary/formal word for kiss than \u30AD\u30B9 (kisu).
\u2022 \u7D50\u9732\u306E\u857E (ketsuro no tsubomi) - "Bud of condensation" - Dew drops, morning moisture, something delicate and temporary.
\u2022 \u4E0D\u57D2\u306A (furachina) - "Shameless/improper/indecent" - Used for the love and innocence, creating an oxymoron.
\u2022 \u77DB\u76FE\u306A (mujun na) - "Contradictory" - The love and innocence are paradoxical.
\u2022 \u5B64\u72EC\u306A\u7D14\u60C5 (kodoku na junjou) - "Lonely innocence" - The final iteration changes from shameless to lonely.
\u2022 The progression: barefoot running \u2192 barefoot dancing \u2192 escaping naked. Increasing vulnerability and abandon.
\u2022 \u30A2\u30CA\u30BF\u306E\u540D\u3082\u77E5\u3089\u306A\u3044\u307E\u307E\u3067 (anata no na mo shiranai mama de) - "Without even knowing your name" - Anonymous intimacy, connection without identity.`
    }
  });
  console.log("\u2713 Updated: Seppun");
  await prisma.song.update({
    where: { slug: "bar-fukuro" },
    data: {
      lyricsJp: `\u6BBA\u3057\u5408\u3046\u53CB\u9054
\u30DF\u30BD\u30B8\u30CB\u30FC\u30DF\u30B5\u30F3\u30C9\u30EA\u30FC
\u5237\u308A\u8FBC\u307E\u308C\u3066\u884C\u304F
\u5F77\u5FA8\u3046\u5C11\u5E74\u5C11\u5973
\u7DBA\u9E97\u306B\u4E26\u3079\u3066
\u6574\u5217\u4FA1\u5024\u89B3

\u3042\u308A\u3075\u308C\u305F\u671D\u713C\u3051\u304C
\u50D5\u305F\u3061\u3092\u7720\u3089\u305B\u308B
\u3042\u308A\u3075\u308C\u305F\u5E78\u305B\u304C
\u50D5\u3089\u3092\u547C\u3076

\u30CD\u30BA\u30DF\u304C\u6B7B\u3093\u3067\u3044\u305F
\u7E41\u83EF\u8857\u8DEF\u5730\u88CF
\u30CD\u30AA\u30F3\u304C\u7DBA\u9E97\u3060\u3063\u305F
\u6574\u5217\u4FA1\u5024\u89B3

\u3042\u308A\u3075\u308C\u305F\u671D\u713C\u3051\u304C
\u50D5\u305F\u3061\u3092\u7720\u3089\u305B\u308B
\u3042\u308A\u3075\u308C\u305F\u5E78\u305B\u304C
\u50D5\u3089\u3092\u547C\u3076

\u3042\u308A\u3075\u308C\u305F\u671D\u304C\u6765\u308B
\u50D5\u305F\u3061\u306F\u76EE\u3092\u9589\u3058\u308B
\u307F\u3093\u306A\u304C\u305D\u3046\u3060
\u5922\u3092\u898B\u308B\u50D5\u3089\u306F

\u3042\u308A\u3075\u308C\u305F\u671D\u713C\u3051\u304C
\u50D5\u305F\u3061\u3092\u7720\u3089\u305B\u308B
\u3042\u308A\u3075\u308C\u305F\u5E78\u305B\u304C
\u50D5\u3089\u3092\u547C\u3076`,
      lyricsRomaji: `Koroshiau tomodachi
Misojinii misandorii
Surikoma rete iku
Samayou shounen shoujo
Kirei ni narabete
Seiretsu kachikan

Arifureta asayake ga
Bokutachi wo nemuraseru
Arifureta shiawase ga
Bokura wo yobu

Nezumi ga shinde ita
Hankagai rojiura
Neon ga kirei datta
Seiretsu kachikan

Arifureta asayake ga
Bokutachi wo nemuraseru
Arifureta shiawase ga
Bokura wo yobu

Arifureta asa ga kuru
Bokutachi wa me wo tojiru
Minna ga sou da
Yume wo miru bokura wa

Arifureta asayake ga
Bokutachi wo nemuraseru
Arifureta shiawase ga
Bokura wo yobu`,
      lyricsEn: `Friends who kill each other
Misogyny, misandry
Being indoctrinated
Wandering boys and girls
Lined up neatly
Conforming values

An ordinary sunrise
Puts us to sleep
An ordinary happiness
Calls to us

A rat had died
In the back alleys of downtown
The neon lights were beautiful
Conforming values

An ordinary sunrise
Puts us to sleep
An ordinary happiness
Calls to us

An ordinary morning comes
We close our eyes
Everyone's the same
We who dream

An ordinary sunrise
Puts us to sleep
An ordinary happiness
Calls to us`,
      notes: `\u2022 \u30D0\u30FC\u689F (Bar Fukuro) - Named after Yoshiatsu's actual bar in Tokyo. The song captures the late-night/early-morning world of nightlife.
\u2022 \u30DF\u30BD\u30B8\u30CB\u30FC\u30DF\u30B5\u30F3\u30C9\u30EA\u30FC (misojinii misandorii) - "Misogyny, misandry" - Hatred going both ways, everyone against everyone.
\u2022 \u5237\u308A\u8FBC\u307E\u308C\u3066 (surikomarete) - "Being indoctrinated/imprinted" - Like brainwashing or conditioning.
\u2022 \u6574\u5217\u4FA1\u5024\u89B3 (seiretsu kachikan) - "Lined-up values" or "conforming values" - Values that make everyone stand in line, uniform.
\u2022 \u3042\u308A\u3075\u308C\u305F (arifureta) - "Ordinary/commonplace" - The mundane as both comforting and numbing.
\u2022 \u671D\u713C\u3051\u304C\u50D5\u305F\u3061\u3092\u7720\u3089\u305B\u308B (asayake ga bokutachi wo nemuraseru) - "Sunrise puts us to sleep" - Inverted sleep schedule of nightlife people; when the sun rises, they finally rest.
\u2022 The dead rat in the beautiful neon-lit alley captures the duality of nightlife\u2014glamour and decay coexisting.`
    }
  });
  console.log("\u2713 Updated: Bar Fukuro");
  await prisma.song.update({
    where: { slug: "oroka" },
    data: {
      lyricsJp: `\u685C\u306E\u82B1\u306F\u307B\u308D\u307B\u308D\u3068
\u3044\u3064\u3057\u304B\u9060\u3044\u76C3

\u9670\u8E0F\u307F\u904A\u3076\u3001\u30AA\u30B9\u306E\u7FA4\u308C\u30E1\u30B9\u306E\u7FA4\u308C
\u3044\u3064\u304B\u3068\u9858\u3046\u5E0C\u671B\u3082\u672A\u6765\u3082
\u9759\u304B\u306B\u971E\u3080

\u5168\u90E8\u62B1\u304D\u3057\u3081\u305F\u3001\u5168\u90E8\u96E2\u308C\u3066\u3044\u3063\u305F
\u512A\u3057\u3055\u3060\u3051\u3067\u306F\u6551\u3048\u306A\u3044\u304B\u3089
\u591C\u306B\u6EB6\u3051\u3066\u3044\u3063\u305F\u7159\u3068\u5410\u3044\u3066\u51FA\u305F
\u5438\u3044\u6BBB\u3092\u898B\u3066\u3044\u305F

\u96E8\u964D\u308A\u5FAE\u71B1\u3075\u308F\u3075\u308F\u3068
\u7E8F\u3046\u306F\u6545\u90F7\u306E\u6B8B\u308A\u9999

\u3044\u3064\u304B\u306F\u6D88\u3048\u3066\u3057\u307E\u3046\u3060\u308D\u3046\u3001\u305D\u308C\u3067\u3082
\u4FE1\u3058\u3066\u3057\u307E\u3046\u6C38\u9060\u3082\u611B\u3082
\u9759\u304B\u306B\u63FA\u308C\u308B

\u5168\u90E8\u611B\u3057\u3066\u305F\u3001\u5168\u90E8\u58CA\u308C\u3066\u3044\u3063\u305F
\u6B63\u3057\u3055\u3060\u3051\u3067\u306F\u5B88\u308C\u306A\u3044\u304B\u3089
\u591C\u306B\u6EB6\u3051\u3066\u3044\u3063\u305F\u7159\u3068\u5410\u3044\u3066\u51FA\u305F
\u5438\u3044\u6BBB\u3092\u898B\u3066\u3044\u305F

\u685C\u306E\u82B1\u306F\u307B\u308D\u307B\u308D\u3068
\u611A\u304B\u306B \u611A\u304B\u306B`,
      lyricsRomaji: `Sakura no hana wa horohoro to
Itsushika tooi sakazuki

Kage fumi asobu, osu no mure mesu no mure
Itsuka to negau kibou mo mirai mo
Shizuka ni kasumu

Zenbu dakishimeta, zenbu hanarete itta
Yasashisa dake de wa sukuenai kara
Yoru ni tokete itta kemuri to haite deta
Suigara wo mite ita

Amefuri binetsu fuwafuwa to
Matou wa furusato no nokori ga

Itsuka wa kiete shimau darou, sore demo
Shinjite shimau eien mo ai mo
Shizuka ni yureru

Zenbu aishiteta, zenbu kowarete itta
Tadashisa dake de wa mamorenai kara
Yoru ni tokete itta kemuri to haite deta
Suigara wo mite ita

Sakura no hana wa horohoro to
Oroka ni oroka ni`,
      lyricsEn: `Cherry blossoms fall softly, fluttering down
Someday, a distant sake cup

Playing in the shadows, herds of males, herds of females
The hopes and futures we wished for "someday"
Quietly fade into haze

I held onto everything, everything slipped away
Because kindness alone can't save anyone
The smoke that dissolved into night, exhaled and expelled
I was watching the cigarette butts

Rain falling, a slight fever, floating softly
Wrapped in the lingering scent of home

Someday it will all disappear, even so
I still believe in eternity and love
Quietly swaying

I loved everything, everything broke apart
Because being right alone can't protect anything
The smoke that dissolved into night, exhaled and expelled
I was watching the cigarette butts

Cherry blossoms fall softly, fluttering down
Foolishly, foolishly`,
      notes: `\u2022 \u611A\u304B (oroka) - "Foolish/stupid" - The title and final word. Self-deprecating acceptance.
\u2022 \u307B\u308D\u307B\u308D (horohoro) - Onomatopoeia for things falling softly, fluttering down. Often used for petals or tears.
\u2022 \u76C3 (sakazuki) - A sake cup, used in ceremonies. "A distant sake cup" suggests memories of celebrations past.
\u2022 \u9670\u8E0F\u307F\u904A\u3076 (kage fumi asobu) - "Playing by stepping on shadows" - A children's game, but here with "herds of males and females" it becomes more animalistic.
\u2022 \u512A\u3057\u3055\u3060\u3051\u3067\u306F\u6551\u3048\u306A\u3044 (yasashisa dake de wa sukuenai) - "Kindness alone can't save" - A painful realization.
\u2022 \u6B63\u3057\u3055\u3060\u3051\u3067\u306F\u5B88\u308C\u306A\u3044 (tadashisa dake de wa mamorenai) - "Being right alone can't protect" - The parallel line in the second verse.
\u2022 \u5438\u3044\u6BBB (suigara) - Cigarette butts. Watching smoke dissolve and butts pile up\u2014time passing in small, disposable increments.
\u2022 \u6545\u90F7\u306E\u6B8B\u308A\u9999 (furusato no nokori ga) - "Lingering scent of home" - Nostalgia, something fading.
\u2022 The song is deeply melancholic, about holding onto things that inevitably slip away, and the foolishness of believing in permanence anyway.`
    }
  });
  console.log("\u2713 Updated: Oroka");
  await prisma.song.update({
    where: { slug: "garasu-no-kutsu" },
    data: {
      lyricsJp: `\u305D\u308C\u3067\u3082\u307E\u3060\u79C1\u306F\u305F\u3060\u582A\u3048\u7D9A\u3051\u3066\u3044\u305F
\u6298\u308C\u305F\u30EB\u30D6\u30BF\u30F3\u3092\u7247\u624B\u306B
\u7B54\u3048\u308B\u306A\u3089\u300C\u30A4\u30A8\u30B9\u300D\u304B\u300C\u30CE\u30FC\u300D\u3060\u5531\u3048\u7D9A\u3051\u3066\u3044\u305F
\u3053\u306E\u90FD\u4F1A\u306B

\u5B89\u58F2\u308A? \u3044\u3048\u9055\u3046\u308F
\u9AD8\u671B\u307F? \u305D\u308C\u3092\u8A00\u3046\u306A\u3089\u3069\u3046\u305E\u304A\u597D\u304D\u306B

\u30AC\u30E9\u30B9\u306E\u9774\u3092\u4ED5\u639B\u3051\u3066\u30AA\u30AA\u30AB\u30DF\u3092\u72E9\u308B\u3060\u3051\u306E
\u304A\u3068\u304E\u8A71\u306F\u3044\u3089\u306A\u3044\u6708\u66DC9\u6642
\u5B50\u4F9B\u306F\u5BDD\u308B\u6642\u9593\u3088

\u305D\u308C\u3067\u3082\u307E\u3060\u79C1\u306F\u305F\u3060\u5FDC\u3048\u7D9A\u3051\u3066\u3044\u305F
\u4E16\u306E\u4E2D\u306E\u8A00\u3046\u826F\u3044\u5973\u306B
\u7B54\u3048\u308B\u306A\u3089\u75BE\u3046\u306B\u300C\u30CE\u30FC\u300D\u3060\u5446\u308C\u7D9A\u3051\u3066\u3044\u305F
\u3053\u306E\u90FD\u4F1A\u306B

\u5B89\u58F2\u308A? \u3044\u3048\u9055\u3046\u308F
\u8AE6\u3081? \u3044\u3048\u9055\u3046\u308F
\u6298\u308A\u5408\u3044? \u3044\u3048\u9055\u3046\u308F
\u9AD8\u671B\u307F? \u305D\u308C\u3092\u8A00\u3046\u306A\u3089\u304A\u4E92\u3044\u69D8\u3067\u3057\u3087\u3046

\u30AC\u30E9\u30B9\u306E\u9774\u3092\u4ED5\u639B\u3051\u3066\u30AA\u30AA\u30AB\u30DF\u3092\u72E9\u308B\u3060\u3051\u306E
\u304A\u3068\u304E\u8A71\u306F\u3084\u3081\u3066\u3088\u6708\u66DC9\u6642
\u5B50\u4F9B\u306F\u5BDD\u308B\u6642\u9593\u3088

\u30AC\u30E9\u30B9\u306E\u9774\u3092\u4ED5\u639B\u3051\u3066\u738B\u5B50\u69D8\u3092\u5F85\u3064\u3060\u3051\u306E
\u304A\u3068\u304E\u8A71\u3092\u5922\u898B\u305F\u5E7C\u6C17\u306A\u9803

\u30AC\u30E9\u30B9\u306E\u9774\u3092\u8131\u304E\u6368\u3066\u88F8\u8DB3\u3067\u99C6\u3051\u51FA\u3059\u306E
\u793E\u4F1A\u306E\u671F\u5F85\u306B\u5FDC\u3048\u308B\u79C1\u306B\u30D0\u30A4\u30D0\u30A4
\u30AC\u30E9\u30B9\u306E\u9774\u3092\u4ED5\u639B\u3051\u3066\u30AA\u30AA\u30AB\u30DF\u3092\u72E9\u308B\u3060\u3051\u306E
\u304A\u3068\u304E\u8A71\u306F\u3044\u3089\u306A\u3044\u6708\u66DC9\u6642
\u5B50\u4F9B\u306F\u5BDD\u308B\u6642\u9593\u3088`,
      lyricsRomaji: `Sore demo mada watashi wa tada taetsuzukete ita
Oreta Rubu tan wo katate ni
Kotaeru nara "iesu" ka "noo" da tonae tsuzukete ita
Kono tokai ni

Yasuuri? Ie chigau wa
Takanozomi? Sore wo iu nara douzo osuki ni

Garasu no kutsu wo shikakete ookami wo karu dake no
Otogibanashi wa iranai getsuyou kuji
Kodomo wa neru jikan yo

Sore demo mada watashi wa tada kotae tsuzukete ita
Yononaka no iu ii onna ni
Kotaeru nara tou ni "noo" da akire tsuzukete ita
Kono tokai ni

Yasuuri? Ie chigau wa
Akirame? Ie chigau wa
Oriai? Ie chigau wa
Takanozomi? Sore wo iu nara otagai sama deshou

Garasu no kutsu wo shikakete ookami wo karu dake no
Otogibanashi wa yamete yo getsuyou kuji
Kodomo wa neru jikan yo

Garasu no kutsu wo shikakete oujisama wo matsu dake no
Otogibanashi wo yumemita osanage na koro

Garasu no kutsu wo nugisute hadashi de kakedasu no
Shakai no kitai ni kotaeru watashi ni baibai
Garasu no kutsu wo shikakete ookami wo karu dake no
Otogibanashi wa iranai getsuyou kuji
Kodomo wa neru jikan yo`,
      lyricsEn: `Even so, I just kept enduring
With a broken Louboutin in one hand
Chanting "yes" or "no" as my only answers
In this city

Selling cheap? No, that's not it
Aiming too high? If you're going to say that, go right ahead

I don't need fairy tales about
Setting glass slippers as traps to hunt wolves
Monday at 9\u2014it's bedtime for children

Even so, I just kept responding
To what society calls "a good woman"
My answer has long been "no"\u2014I've been fed up
With this city

Selling cheap? No, that's not it
Giving up? No, that's not it
Compromising? No, that's not it
Aiming too high? If you're going to say that, we're both the same

Stop it with these fairy tales about
Setting glass slippers as traps to hunt wolves
Monday at 9\u2014it's bedtime for children

Back in my naive days, I dreamed of fairy tales
Where I'd set out glass slippers and just wait for a prince

I'm throwing off the glass slippers and running barefoot
Goodbye to the me who met society's expectations
I don't need fairy tales about
Setting glass slippers as traps to hunt wolves
Monday at 9\u2014it's bedtime for children`,
      notes: `\u2022 \u30AC\u30E9\u30B9\u306E\u9774 (garasu no kutsu) - "Glass slipper" - The Cinderella symbol, but subverted. Here it's a trap, not a symbol of rescue.
\u2022 \u30EB\u30D6\u30BF\u30F3 (Rubutan) - Louboutin, the luxury shoe brand. A broken Louboutin = broken dreams of glamour, the reality of trying to perform femininity.
\u2022 \u30AA\u30AA\u30AB\u30DF\u3092\u72E9\u308B (ookami wo karu) - "Hunting wolves" - Inverting the fairy tale. Instead of being prey, she's the hunter. But she's tired of even that.
\u2022 \u6708\u66DC9\u6642 (getsuyou kuji) - "Monday at 9" - The traditional timeslot for Japanese TV dramas, especially romantic ones. "It's bedtime for children" = these fantasies are childish.
\u2022 \u826F\u3044\u5973 (ii onna) - "A good woman" - Society's ideal, which she's exhausted from performing.
\u2022 \u304A\u4E92\u3044\u69D8 (otagai sama) - "We're both the same" / "It goes both ways" - A sharp comeback.
\u2022 \u88F8\u8DB3\u3067\u99C6\u3051\u51FA\u3059 (hadashi de kakedasu) - "Running barefoot" - Rejecting the glass slipper entirely, choosing freedom over fairy tales.
\u2022 This is a feminist anthem about rejecting both the "wait for a prince" narrative AND the "girl boss hunting wolves" narrative\u2014both are exhausting performances.`
    }
  });
  console.log("\u2713 Updated: Glass no Kutsu");
  await prisma.song.update({
    where: { slug: "dorobou-no-march" },
    data: {
      lyricsJp: `\u591C\u306E\u30AB\u30FC\u30C6\u30F3\u9589\u3081\u308A\u3083 \u304A\u3044\u3089\u306E\u821E\u53F0
\u304A\u6708\u69D8\u3072\u3068\u308A \u304A\u5BA2\u69D8
\u9811\u4E08\u306A\u91D1\u5EAB\u3082 \u91DD\u91D1\u4E00\u3064
\u30C1\u30FC\u30BA\u306E\u69D8\u306B \u3068\u308D\u3051\u308B

\u92FC\u9244\u306E\u624B\u9320\u3082\u51B7\u305F\u3044\u30AA\u30EA\u3082
\u304A\u3044\u3089\u3092\u6355\u3089\u3048\u3089\u308C\u3084\u3057\u306A\u3044

\u5C71\u7A4D\u307F\u306E\u672D\u675F\u3092\u304B\u3063\u3055\u3089\u3044\u9784\u306B\u8A70\u3081\u3066
\u3072\u3087\u3044\u3068\u6301\u3061\u4E0A\u3052\u308C\u3070\u305D\u308C\u306F\u5C11\u5973\u3072\u3068\u308A\u3076\u3093\u3050\u3089\u3044
\u98DB\u3073\u51FA\u3057\u305F\u6469\u5929\u697C \u30AC\u30E9\u30B9\u306E\u96E8 \u591C\u666F\u306E\u6E26 \u30B3\u30D0\u30EB\u30C8\u306E\u6DF1\u6D77
\u30CB\u30E4\u30EA\u3068 \u632F\u308A\u8FD4\u308C\u3070 \u771F\u3063\u8D64\u306A\u9854\u306E\u30DD\u30EA\u30B9\u30E1\u30F3

\u6B21\u306E\u30BF\u30FC\u30B2\u30C3\u30C8\u306B\u306F \u6975\u60AA\u5927\u5BCC\u8C6A
\u95C7\u53D6\u5F15\u306E\u8CA1\u5B9D\u3092 \u9802\u304F
\u9ED2\u732B\u306E\u69D8\u306B \u3059\u308B\u308A\u3068\u5165\u308C\u3070
\u3054\u5BFE\u9762\u3055 \u5B9D\u77F3\u306E\u5C71

\u304A\u6C7A\u307E\u308A\u306E\u9784\u306B\u8A70\u3081\u8FBC\u3093\u3060\u3089
\u30B0\u30C3\u30D0\u30A4 \u30E9\u30E9\u30D0\u30A4 \u304A\u90AA\u9B54\u3057\u307E\u3057\u305F!

\u99C6\u3051\u629C\u3051\u308B\u8857 \u901A\u308A\u904E\u304E\u308B\u30B9\u30C8\u30EA\u30C3\u30D7 \u541B\u306F\u8AB0?
\u7740\u305B\u3089\u308C\u305F\u30C9\u30EC\u30B9\u306B\u66C7\u308B\u9854\u96A0\u3057\u8E0A\u308B \u5C11\u5973\u306F
\u30B4\u30FC\u30EB\u30C9\u3084\u30C0\u30A4\u30E4\u3088\u308A \u7DBA\u9E97\u306A\u77B3\u3067 \u3067\u3082\u60B2\u3057\u3044\u77B3\u3067 \u304A\u3044\u3089\u3092\u898B\u3064\u3081\u305F
\u30CB\u30B3\u30EA\u3068 \u632F\u308A\u8FD4\u308C\u3070 \u5C11\u3057\u7B11\u3063\u305F\u30AC\u30FC\u30EB\u30D5\u30EC\u30F3\u30C9

\u304A\u3044\u3089\u306F\u6CE5\u68D2 \u541B\u306F\u8AB0
\u304A\u3044\u3089\u306F\u6CE5\u68D2 \u541B\u306F\u8AB0
\u6559\u3048\u3066

\u6B21\u306E\u30BF\u30FC\u30B2\u30C3\u30C8\u306F \u541B\u306B\u3059\u308B\u3088
\u4ECA\u5BB5\u306E\u821E\u53F0 \u8FCE\u3048\u306B\u884C\u304F\u3088

\u306F\u3058\u3081\u307E\u3057\u3066\u304A\u5B22\u3055\u3093\u3069\u3046\u304B\u6CE5\u68D2\u306E\u79C1\u5974\u306B
\u305D\u306E\u7F8E\u3057\u3044\u77B3\u3092\u596A\u308F\u305B\u3066\u304F\u308C\u306A\u3044\u3067\u3057\u3087\u3046\u304B?
\u98DB\u3073\u51FA\u3057\u305F\u6469\u5929\u697C \u624B\u3092\u5F15\u3044\u3066 \u99C6\u3051\u629C\u3051\u308B \u3075\u305F\u308A\u306F\u305F\u3060
\u611B\u3060\u3068\u304B \u6B63\u3057\u3055\u3060\u3068\u304B \u96E3\u3057\u3044\u4E8B\u306F \u3069\u3046\u3067\u3082\u3088\u304B\u3063\u305F
\u30CB\u30B3\u30EA\u3068 \u632F\u308A\u8FD4\u308C\u3070 \u5C11\u3057\u6CE3\u3044\u3066\u308B\u30AC\u30FC\u30EB\u30D5\u30EC\u30F3\u30C9

\u591C\u306E\u30AB\u30FC\u30C6\u30F3\u9589\u3081\u308A\u3083 \u304A\u3044\u3089\u306E\u821E\u53F0
\u304A\u6708\u69D8\u3072\u3068\u308A \u304A\u5BA2\u69D8`,
      lyricsRomaji: `Yoru no kaaten shimerya oira no butai
Otsukisama hitori okyakusama
Ganjou na kinko mo harigane hitotsu
Chiizu no you ni torokeru

Koutetsu no tejou mo tsumetai ori mo
Oira wo toraerarera shinai

Yamazumi no satsutaba wo kassarai kaban ni tsumete
Hyoi to mochiagereba sore wa shoujo hitori bun gurai
Tobidashita matenrou garasu no ame yakei no uzu kobaruto no shinkai
Niyari to furikaereba makka na kao no porisumen

Tsugi no taagetto ni wa gokuaku daifugou
Yami torihiki no zaihou wo itadaku
Kuroneko no you ni sururi to haireba
Gotaimen sa houseki no yama

Okimari no kaban ni tsumekondara
Gubbai rarabai ojama shimashita!

Kakenukeru machi toorisugiru sutorippu kimi wa dare?
Kiserareta doresu ni kumoru kao kakushi odoru shoujo wa
Goorudo ya daiya yori kirei na hitomi de demo kanashii hitomi de oira wo mitsumeta
Nikori to furikaereba sukoshi waratta gaarufurendo

Oira wa dorobou kimi wa dare
Oira wa dorobou kimi wa dare
Oshiete

Tsugi no taagetto wa kimi ni suru yo
Koyoi no butai mukae ni iku yo

Hajimemashite ojousan douka dorobou no watakushi me ni
Sono utsukushii hitomi wo ubawasete kurenadeshou ka?
Tobidashita matenrou te wo hiite kakenukeru futari wa tada
Ai da toka tadashisa da toka muzukashii koto wa dou demo yokatta
Nikori to furikaereba sukoshi naiteru gaarufurendo

Yoru no kaaten shimerya oira no butai
Otsukisama hitori okyakusama`,
      lyricsEn: `When the curtain of night closes, it's my stage
The moon alone is my audience
Even the sturdiest safe, with just one wire
Melts like cheese

Steel handcuffs and cold cages
Can't catch me

Snatching piles of cash and stuffing them in my bag
Lifting it up, it weighs about as much as one girl
Leaping from the skyscraper, rain of glass, whirlpool of night lights, cobalt deep sea
Grinning, I look back at the red-faced policemen

My next target is an evil billionaire
I'll take the treasures from his black market deals
Slipping in like a black cat
There it is\u2014a mountain of jewels

Once I've stuffed them in my usual bag
Goodbye, lullaby, thanks for having me!

Racing through the city, passing by strip clubs\u2014who are you?
A girl dancing with a clouded face hidden, dressed up in clothes forced on her
With eyes more beautiful than gold or diamonds, but sad eyes, she stared at me
Smiling, I look back at a girlfriend who smiled a little

I'm a thief, who are you?
I'm a thief, who are you?
Tell me

My next target will be you
Tonight's stage\u2014I'm coming to get you

Nice to meet you, miss, won't you let this humble thief
Steal those beautiful eyes of yours?
Leaping from the skyscraper, hand in hand, racing through\u2014we were just
Love, rightness, difficult things\u2014none of it mattered
Smiling, I look back at a girlfriend who's crying a little

When the curtain of night closes, it's my stage
The moon alone is my audience`,
      notes: `\u2022 \u6CE5\u68D2\u306E\u30DE\u30FC\u30C1 (Dorobo no March) - "The Thief's March" - A playful, theatrical heist song with a romantic twist.
\u2022 \u304A\u3044\u3089 (oira) - An old-fashioned/rough masculine first-person pronoun, giving the thief a roguish, theatrical character.
\u2022 \u79C1\u5974 (watakushi me) - Very humble/archaic way of saying "I" - used when the thief formally introduces himself to the girl, adding gentlemanly charm.
\u2022 \u30C1\u30FC\u30BA\u306E\u69D8\u306B\u3068\u308D\u3051\u308B (chiizu no you ni torokeru) - "Melts like cheese" - Safes are nothing to this thief.
\u2022 \u5C11\u5973\u3072\u3068\u308A\u3076\u3093\u3050\u3089\u3044 (shoujo hitori bun gurai) - "About the weight of one girl" - Foreshadowing that his real prize won't be money.
\u2022 \u7740\u305B\u3089\u308C\u305F\u30C9\u30EC\u30B9 (kiserareta doresu) - "Clothes forced on her" / "made to wear a dress" - The girl is performing, trapped.
\u2022 \u305D\u306E\u7F8E\u3057\u3044\u77B3\u3092\u596A\u308F\u305B\u3066 (sono utsukushii hitomi wo ubawasete) - "Let me steal those beautiful eyes" - The thief's pickup line, turning theft into romance.
\u2022 The progression: stealing money \u2192 stealing jewels \u2192 stealing a girl (rescuing her). A Lupin III-esque gentleman thief fantasy.
\u2022 \u5C11\u3057\u7B11\u3063\u305F \u2192 \u5C11\u3057\u6CE3\u3044\u3066\u308B (sukoshi waratta \u2192 sukoshi naiteru) - "Smiled a little" \u2192 "Crying a little" - The girlfriend's expression changes as she's rescued, overwhelmed.`
    }
  });
  console.log("\u2713 Updated: Dorobo no March");
  await prisma.song.update({
    where: { slug: "cadenza" },
    data: {
      lyricsJp: `\u91DD\u3092\u98F2\u3093\u3067 \u982C\u3092\u4E0A\u3052\u305F
\u5782\u308C\u306A\u3044\u3088\u3046\u306B \u77AC\u304D\u3082\u305B\u305A

\u611B\u304C\u306A\u3093\u3060\u3068\u304B \u8981\u3089\u306A\u3044
\u5F7C\u304C\u671B\u3080\u306A\u3089 \u6C5A\u308C\u3088\u3046

\u606F\u3092\u6F5C\u3081\u3066\u308B \u8107\u5F79\u8005\u306F
\u88F8\u306E\u307E\u307E\u3067 \u8EE2\u304C\u308B

\u9014\u5207\u308C\u305D\u3046\u306A\u30AB\u30C7\u30F3\u30C4\u30A1 \u3042\u306A\u305F\u306E\u982C\u306B\u89E6\u308C\u308B
\u307E\u3060\u671D\u306F\u6765\u306A\u304F\u3066\u3044\u3044
\u5343\u5207\u308C\u305D\u3046\u306A\u30AB\u30C7\u30F3\u30C4\u30A1 \u3042\u306A\u305F\u306E\u982C\u306B\u89E6\u308C\u308B
\u305F\u3060\u305D\u308C\u3060\u3051\u3067\u3044\u3044

\u7D61\u3080\u6307\u306B \u6E29\u5EA6\u306F\u306A\u3044
\u7D21\u3050\u6642\u9593\u306B \u51FA\u53E3\u306F\u306A\u3044

\u611B\u304C\u306A\u3093\u3060\u3068\u304B \u805E\u304D\u305F\u304F\u306A\u3044
\u5F7C\u304C\u671B\u3080\u306A\u3089 \u673D\u3061\u3088\u3046

\u606F\u3092\u6F5C\u3081\u3066\u308B \u8107\u5F79\u8005\u306F
\u88F8\u306E\u307E\u307E\u3067 \u7DBB\u3076

\u9014\u5207\u308C\u305D\u3046\u306A\u30AB\u30C7\u30F3\u30C4\u30A1 \u3042\u306A\u305F\u306E\u6B32\u306B\u6C88\u3080
\u307E\u3060\u660E\u65E5\u306F\u898B\u306A\u304F\u3066\u3044\u3044
\u5343\u5207\u308C\u305D\u3046\u306A\u30AB\u30C7\u30F3\u30C4\u30A1 \u3042\u306A\u305F\u306E\u6B32\u306B\u6C88\u3080
\u307E\u3060\u4ECA\u306F\u305D\u308C\u3067\u3044\u3044\u306E

\u606F\u3092\u6F5C\u3081\u3066\u308B \u8107\u5F79\u8005\u306F
\u97F3\u3082\u7ACB\u3066\u305A\u306B \u9759\u304B\u306B \u6CE3\u3044\u3066\u3044\u308B

\u9014\u5207\u308C\u305D\u3046\u306A\u30AB\u30C7\u30F3\u30C4\u30A1 \u3042\u306A\u305F\u306E\u5965\u306B\u89E6\u308C\u305F\u3044
\u305F\u3060\u305D\u308C\u3060\u3051\u3067\u3044\u3044\u306E
\u5343\u5207\u308C\u305D\u3046\u306A\u30AB\u30C7\u30F3\u30C4\u30A1 \u3042\u306A\u305F\u306E\u5965\u306B\u89E6\u308C\u305F\u3044
\u305F\u3060\u305D\u308C\u3060\u3051`,
      lyricsRomaji: `Hari wo nonde hoho wo ageta
Tarenai you ni mabataki mo sezu

Ai ga nan da toka iranai
Kare ga nozomu nara yogoreyou

Iki wo hisometeru wakiyakusha wa
Hadaka no mama de korogaru

Togiresou na kadentsa anata no hoho ni fureru
Mada asa wa konakute ii
Chigiresou na kadentsa anata no hoho ni fureru
Tada sore dake de ii

Karamu yubi ni ondo wa nai
Tsumugu jikan ni deguchi wa nai

Ai ga nan da toka kikitakunai
Kare ga nozomu nara kuchiyou

Iki wo hisometeru wakiyakusha wa
Hadaka no mama de hokorobu

Togiresou na kadentsa anata no yoku ni shizumu
Mada ashita wa minakute ii
Chigiresou na kadentsa anata no yoku ni shizumu
Mada ima wa sore de ii no

Iki wo hisometeru wakiyakusha wa
Oto mo tatezu ni shizuka ni naite iru

Togiresou na kadentsa anata no oku ni furetai
Tada sore dake de ii no
Chigiresou na kadentsa anata no oku ni furetai
Tada sore dake`,
      lyricsEn: `Swallowing needles, I raised my cheek
Not even blinking, so nothing drips down

I don't need things like "what is love"
If he wants it, I'll get dirty

The supporting actor holding their breath
Rolls around, still naked

A cadenza about to break off\u2014I touch your cheek
Morning doesn't have to come yet
A cadenza about to tear apart\u2014I touch your cheek
That alone is enough

The intertwining fingers have no warmth
The time we spin has no exit

I don't want to hear things like "what is love"
If he wants it, I'll rot away

The supporting actor holding their breath
Comes undone, still naked

A cadenza about to break off\u2014I sink into your desire
I don't have to see tomorrow yet
A cadenza about to tear apart\u2014I sink into your desire
For now, that's enough

The supporting actor holding their breath
Without making a sound, quietly crying

A cadenza about to break off\u2014I want to touch your depths
That alone is enough
A cadenza about to tear apart\u2014I want to touch your depths
Just that`,
      notes: `\u2022 \u30AB\u30C7\u30F3\u30C4\u30A1 (kadenza) - Cadenza, a musical term for an elaborate, virtuosic solo passage. Here it represents a fragile, intimate moment that could shatter at any time.
\u2022 \u91DD\u3092\u98F2\u3093\u3067 (hari wo nonde) - "Swallowing needles" - Enduring pain silently.
\u2022 \u8107\u5F79\u8005 (wakiyakusha) - "Supporting actor" - The speaker sees themselves as secondary in this relationship.
\u2022 \u6C5A\u308C\u3088\u3046 / \u673D\u3061\u3088\u3046 (yogoreyou / kuchiyou) - "I'll get dirty / I'll rot" - Total submission.
\u2022 \u7DBB\u3076 (hokorobu) - "To come undone/unravel" - Like stitches loosening.
\u2022 \u3042\u306A\u305F\u306E\u5965\u306B\u89E6\u308C\u305F\u3044 (anata no oku ni furetai) - "I want to touch your depths" - Both physically and emotionally intimate.`
    }
  });
  console.log("\u2713 Updated: Cadenza");
  await prisma.song.update({
    where: { slug: "hikyousha-no-romance" },
    data: {
      lyricsJp: `\u3059\u308C\u9055\u3046\u5408\u3044\u306E\u624B \u79FB\u308A\u3086\u304F \u672A\u6765\u5F71
\u5909\u308F\u3089\u306A\u3044\u5730\u5143\u306B \u5E7C\u3044\u8A18\u61B6\u3092\u898B\u3066

\u30B5\u30E8\u30CA\u30E9\u3082\u8A00\u308F\u305A \u3069\u306E\u9762\u3092\u4E0B\u3052\u3066
\u541B\u306B\u611B\u3092\u6B4C\u3046\u3068\u8A00\u3046\u306E\u3060\u308D\u3046\u304B?

\u660E\u65E5\u3082\u307E\u305F\u751F\u304D\u3066\u307F\u308B\u3088
\u4E0D\u826F\u54C1\u306E\u30DE\u30A4\u30AF\u3092\u63B2\u3052\u3066
\u660E\u65E5\u3082\u307E\u305F\u751F\u304D\u3066\u307F\u308B\u3088
\u4E0D\u826F\u54C1\u306E\u30ED\u30DE\u30F3\u3092\u62B1\u304D\u3057\u3081\u3066

\u6700\u521D\u304B\u3089\u8EAB\u52DD\u624B\u3067 \u6700\u5F8C\u307E\u3067\u8EAB\u52DD\u624B\u3067
\u5FDC\u3048\u308B\u306A\u3089\u3001\u305F\u3076\u3093\u3001\u305D\u308C\u306F
\u8F9E\u3081\u306A\u3044\u3053\u3068\u3001\u305D\u308C\u3060\u3051

\u30B5\u30E8\u30CA\u30E9\u3082\u8A00\u308F\u305A \u5351\u602F\u8005\u306A\u50D5\u306B
\u3069\u306E\u5922\u3092\u6B4C\u3048\u3068\u8A00\u3046\u306E\u3060\u308D\u3046\u304B?

\u660E\u65E5\u3082\u307E\u305F\u751F\u304D\u3066\u307F\u308B\u3088
\u4E0D\u826F\u54C1\u306E\u30DE\u30A4\u30AF\u3092\u63B2\u3052\u3066
\u660E\u65E5\u3082\u307E\u305F\u751F\u304D\u3066\u307F\u308B\u3088
\u4E0D\u826F\u54C1\u306E\u30ED\u30DE\u30F3\u3092\u62B1\u304D\u3057\u3081\u3066

\u3054\u3081\u3093\u306D\u3055\u3048\u3082\u8A00\u308F\u305A \u99C6\u3051\u51FA\u3059\u30B9\u30CB\u30FC\u30AB\u30FC\u306B
\u306A\u306B\u304C\u6B63\u7FA9\u304B\u306A\u3093\u3066\u6B4C\u3048\u308B\u3060\u308D\u3046\u304B
\u30B5\u30E8\u30CA\u30E9\u3082\u8A00\u308F\u305A \u81C6\u75C5\u8005\u306A\u50D5\u306B
\u3069\u306E\u611B\u3092\u6B4C\u3048\u3068\u8A00\u3046\u306E\u3060\u308D\u3046\u304B?

\u660E\u65E5\u3082\u307E\u305F\u751F\u304D\u3066\u307F\u308B\u3088
\u4E0D\u826F\u54C1\u306E\u30DE\u30A4\u30AF\u3092\u63B2\u3052\u3066
\u660E\u65E5\u3082\u307E\u305F\u751F\u304D\u3066\u307F\u308B\u3088
\u4E0D\u826F\u54C1\u306E\u30ED\u30DE\u30F3\u3092\u62B1\u304D\u3057\u3081\u3066`,
      lyricsRomaji: `Surechigau ainote utsuriyuku mirai kage
Kawaranai jimoto ni osanai kioku wo mite

Sayonara mo iwazu dono tsura wo sagete
Kimi ni ai wo utau to iu no darou ka?

Ashita mo mata ikite miru yo
Furyouhin no maiku wo kakagete
Ashita mo mata ikite miru yo
Furyouhin no roman wo dakishimete

Saisho kara migatte de saigo made migatte de
Kotaeru nara, tabun, sore wa
Yamenai koto, sore dake

Sayonara mo iwazu hikyoumono na boku ni
Dono yume wo utae to iu no darou ka?

Ashita mo mata ikite miru yo
Furyouhin no maiku wo kakagete
Ashita mo mata ikite miru yo
Furyouhin no roman wo dakishimete

Gomen ne sae mo iwazu kakedasu suniikaa ni
Nani ga seigi ka nante utaeru darou ka
Sayonara mo iwazu okubyoumono na boku ni
Dono ai wo utae to iu no darou ka?

Ashita mo mata ikite miru yo
Furyouhin no maiku wo kakagete
Ashita mo mata ikite miru yo
Furyouhin no roman wo dakishimete`,
      lyricsEn: `Passing by responses, shifting shadows of the future
In my unchanging hometown, seeing childhood memories

Without even saying goodbye, with what face
Could I possibly say I'll sing of love to you?

I'll try living again tomorrow
Holding up a defective microphone
I'll try living again tomorrow
Embracing a defective romance

Selfish from the start, selfish until the end
If I had to answer, probably, it's just
Not quitting\u2014that's all

Without even saying goodbye, to a coward like me
What dream are they telling me to sing?

I'll try living again tomorrow
Holding up a defective microphone
I'll try living again tomorrow
Embracing a defective romance

Without even saying sorry, in these sneakers that run off
How could I possibly sing about what's right?
Without even saying goodbye, to a coward like me
What love are they telling me to sing?

I'll try living again tomorrow
Holding up a defective microphone
I'll try living again tomorrow
Embracing a defective romance`,
      notes: `\u2022 \u5351\u602F\u8005 (hikyoumono) - "Coward" - Someone who acts dishonorably. The speaker condemns himself.
\u2022 \u3069\u306E\u9762\u3092\u4E0B\u3052\u3066 (dono tsura wo sagete) - "With what face" - "What right do I have."
\u2022 \u4E0D\u826F\u54C1 (furyouhin) - "Defective product" - The microphone and romance are both flawed, rejected goods.
\u2022 \u8F9E\u3081\u306A\u3044\u3053\u3068\u3001\u305D\u308C\u3060\u3051 (yamenai koto, sore dake) - "Just not quitting, that's all" - The only virtue he claims.
\u2022 This is about imposter syndrome as an artist, feeling unworthy to sing about love while still choosing to keep going.`
    }
  });
  console.log("\u2713 Updated: Hikyoumono No Romance");
  await prisma.song.update({
    where: { slug: "road-to-the-future" },
    data: {
      lyricsJp: `\u82B1\u3092\u80B2\u3066\u307E\u3057\u3087\u3046
\u591C\u306B\u306A\u308B\u524D\u306B
\u5FC3\u304C\u30AB\u30D3\u3061\u3083\u3063\u3066
\u67AF\u308C\u308B\u524D\u306B

\u3042\u3063\u3061\u306E\u4E16\u754C\u3058\u3083
\u30D1\u30F3\u306F\u30BF\u30C0\u3089\u3057\u3044\u305C
\u6C34\u306A\u3093\u3066\u3082\u3093\u306F
\u3044\u3064\u3082\u3042\u308B\u3089\u3057\u3044

\u300CWELCOME TO THE FUTURE \u79C1\u3053\u305D\u304C\u4E16\u754C\u3092\u6551\u3046HERO\u3060\u300D
\u6642\u4EE3\u306F\u3044\u3064\u3082\u9006\u623B\u308A \u8CE2\u3044\u5974\u3089\u306F\u3044\u3064\u3082 \u3046\u307E\u3044\u8089\u98DF\u3079\u3066\u3093\u3060

\u7D42\u6F14\u306E\u30E1\u30EA\u30FC\u30B4\u30FC\u30E9\u30F3\u30C9
\u541B\u306F\u306A\u305C\u8E0A\u308B\u306E\u304B?
\u6642\u4EE3\u304C\u751F\u3080\u30C9\u30E9\u30C3\u30B0\u30B9\u306B
\u660E\u65E5\u3082\u307E\u305F\u76EE\u96A0\u3057\u3092\u3055\u308C\u3066\u3093\u3060

\u82B1\u304C\u54B2\u304D\u307E\u3057\u305F
\u591C\u306B\u306A\u308B\u524D\u306B
\u3068\u3053\u308D\u304C\u96A3\u4EBA\u304C
\u8E0F\u307F\u6F70\u3057\u307E\u3057\u305F

\u3042\u3063\u3061\u306E\u4E16\u754C\u3058\u3083
\u7C73\u306F\u7F6A\u3089\u3057\u3044\u305C
\u6C34\u306A\u3093\u3066\u3082\u3093\u306F
\u98F2\u3093\u3058\u3083\u30C0\u30E1\u3089\u3057\u3044

\u300CWELCOME TO THE FUTURE \u304A\u5F85\u3061\u304B\u306D\u7686\u304C\u671B\u3093\u3060\u5E73\u548C\u3055\u300D
\u6642\u4EE3\u306F\u3068\u3046\u306B\u884C\u304D\u6B62\u307E\u308A \u5F31\u8005\u306F\u4ECA\u65E5\u3082 \u30AC\u30E0\u30B7\u30ED\u30C3\u30D7\u8210\u3081\u3066\u3093\u3060

\u7D42\u6F14\u306E\u30E1\u30EA\u30FC\u30B4\u30FC\u30E9\u30F3\u30C9
\u541B\u306F\u306A\u305C\u8E0A\u308B\u306E\u304B?
\u6642\u4EE3\u304C\u751F\u3080\u30C9\u30E9\u30C3\u30B0\u30B9\u306B
\u660E\u65E5\u3082\u307E\u305F\u76EE\u96A0\u3057\u3092\u3055\u308C\u3066\u3093\u3060

\u30BF\u30E9\u30E9\u30E9\u30C3\u30BF\u30E9\u30FC\u30E9\u30E9\u30E9\u30FC\u30E9
ROCK\uFF08\u30AC\u30E9\u30AF\u30BF\uFF09\u306E\u30EA\u30BA\u30E0\u3067
\u82B1\u54B2\u304B\u305B\u3066\u307F\u305B\u307E\u3057\u3087\u3046

\u7D42\u6F14\u306E\u30E1\u30EA\u30FC\u30B4\u30FC\u30E9\u30F3\u30C9
\u541B\u306F\u306A\u305C\u8E0A\u308B\u306E\u304B?
\u6642\u4EE3\u304C\u751F\u3080\u30C9\u30E9\u30C3\u30B0\u30B9\u306B
\u660E\u65E5\u3082\u307E\u305F\u76EE\u96A0\u3057\u3092\u3055\u308C\u3066\u3093\u3060

\u624B\u304C\u89E6\u308C\u5408\u3046\u3068 \u307E\u3060\u6E29\u5EA6\u304C\u3042\u308B\u3093\u3060
\u541B\u306E\u624B\u3082 \u50D5\u306E\u624B\u3082 \u541B\u3082 \u541B\u3082 \u541B\u3082
\u660E\u65E5\u306B\u306A\u3093\u3066\u4F55\u3082\u5F85\u3063\u3066\u306F\u3044\u306A\u3044\u3088
\u7A2E\u3092\u690D\u3048\u308D \u690D\u3048\u308D \u690D\u3048\u308D`,
      lyricsRomaji: `Hana wo sodatemashou
Yoru ni naru mae ni
Kokoro ga kabi chatte
Kareru mae ni

Acchi no sekai ja
Pan wa tada rashii ze
Mizu nante mon wa
Itsumo aru rashii

"WELCOME TO THE FUTURE watashi koso ga sekai wo sukuu HERO da"
Jidai wa itsumo gyakumodori kashikoi yatsura wa itsumo umai niku tabeten da

Shuuen no merii-goo-rando
Kimi wa naze odoru no ka?
Jidai ga umu doraggsu ni
Ashita mo mata mekakushi wo sareten da

Hana ga sakimashita
Yoru ni naru mae ni
Tokoro ga rinjin ga
Fumitsubushimashita

Acchi no sekai ja
Kome wa tsumi rashii ze
Mizu nante mon wa
Nonja dame rashii

"WELCOME TO THE FUTURE omachikane mina ga nozonda heiwa sa"
Jidai wa tou ni ikidomari jakusha wa kyou mo gamu shiroppu nameten da

Shuuen no merii-goo-rando
Kimi wa naze odoru no ka?
Jidai ga umu doraggsu ni
Ashita mo mata mekakushi wo sareten da

Tarararattaraa-rararaa-ra
ROCK (garakuta) no rizumu de
Hana sakasete misemashou

Shuuen no merii-goo-rando
Kimi wa naze odoru no ka?
Jidai ga umu doraggsu ni
Ashita mo mata mekakushi wo sareten da

Te ga fureau to mada ondo ga arun da
Kimi no te mo boku no te mo kimi mo kimi mo kimi mo
Ashita ni nante nani mo matte wa inai yo
Tane wo uerou uerou uerou`,
      lyricsEn: `Let's grow some flowers
Before night falls
Before our hearts get moldy
And wither away

In that other world over there
Bread is free, apparently
And water?
Always available, they say

"WELCOME TO THE FUTURE\u2014I'm the HERO who'll save the world!"
The era always moves backwards\u2014the smart ones are always eating the good meat

The merry-go-round at the final curtain
Why are you dancing?
Blindfolded again tomorrow too
By the drugs this era produces

The flowers bloomed
Before night fell
But then the neighbor
Stomped them flat

In that other world over there
Rice is a sin, apparently
And water?
You're not allowed to drink it, they say

"WELCOME TO THE FUTURE\u2014the peace everyone's been waiting for!"
The era hit a dead end long ago\u2014the weak are still licking gum syrup today

The merry-go-round at the final curtain
Why are you dancing?
Blindfolded again tomorrow too
By the drugs this era produces

Ta-la-la-la-la-la-la-la-la
To the rhythm of ROCK (junk)
Let's make the flowers bloom

The merry-go-round at the final curtain
Why are you dancing?
Blindfolded again tomorrow too
By the drugs this era produces

When our hands touch, there's still warmth
Your hands, my hands, you, you, you
Don't wait for anything from tomorrow
Plant the seeds\u2014plant them, plant them`,
      notes: `\u2022 ROCK\uFF08\u30AC\u30E9\u30AF\u30BF\uFF09- ROCK with "garakuta" (junk) in parentheses. Embracing "worthless" art.
\u2022 \u7D42\u6F14\u306E\u30E1\u30EA\u30FC\u30B4\u30FC\u30E9\u30F3\u30C9 (shuuen no merii-goo-rando) - "Merry-go-round at the final curtain" - The world keeps spinning even as the show ends.
\u2022 \u6642\u4EE3\u304C\u751F\u3080\u30C9\u30E9\u30C3\u30B0\u30B9 (jidai ga umu doraggsu) - "Drugs the era produces" - Distractions that blindfold people.
\u2022 \u30AC\u30E0\u30B7\u30ED\u30C3\u30D7\u8210\u3081\u3066\u3093\u3060 (gamu shiroppu nameten da) - "Licking gum syrup" - The weak get only artificial sweetness.
\u2022 \u7A2E\u3092\u690D\u3048\u308D (tane wo uerou) - "Plant the seeds" - Despite cynicism, the song ends with a call to action.`
    }
  });
  console.log("\u2713 Updated: Road to the Future");
  await prisma.song.update({
    where: { slug: "smells-like-human-diner" },
    data: {
      lyricsJp: `\u30AD\u30E9\u30A4\u306A\u7269\u3092\u98DF\u3079\u3066
\u80B2\u3063\u305F\u8EAB\u4F53
\u3053\u3053\u306F\u68EE\u306E\u30C0\u30A4\u30CA\u30FC
\u307F\u3093\u306A\u306E\u304A\u5893

\u30E9\u30A4\u30AA\u30F3\u306E\u9996\u3092\u5207\u308A\u843D\u3068\u3057\u3066
\u53D6\u308A\u66FF\u3048\u3066\u30B9\u30C6\u30FC\u30B8\u306B\u7ACB\u305F\u305B\u308A\u3083
\u30CD\u30BA\u30DF\u306F\u307F\u3093\u306A\u5927\u559C\u3073\u3055
\u305D\u308C\u3001\u3082\u3046\u3044\u3044\u3093\u3058\u3083\u306A\u3044?

\u672A\u6765\u3060\u306E\u6B4C\u3063\u3066\u6FC1\u3057\u3061\u3083\u3048\u3070
\u591C\u306F\u3050\u3063\u3059\u308A\u7720\u308C\u308B\u3067\u3057\u3087\u3046
\u307F\u3093\u306A\u305D\u308D\u305D\u308D\u6C17\u3065\u304D\u59CB\u3081\u308B\u305E
\u305D\u3057\u3066\u6700\u5F8C\u306F

\u4EBA\u8089\u306E\u30B9\u30FC\u30D7\u3067\u304A\u5225\u308C\u3057\u307E\u3057\u3087\u3046
\u6765\u4E16\u304C\u3042\u308B\u306A\u3089\u63A2\u3057\u3066
\u6700\u5F8C\u306E\u30C7\u30B6\u30FC\u30C8\u306F\u304A\u63C3\u3044\u306B\u3057\u307E\u3057\u3087\u3046
\u30AD\u30B9\u3092\u3057\u306A\u304C\u3089\u7720\u308A\u306B\u3064\u304F\u306E

\u672A\u6765\u304C\u97F3\u3092\u7ACB\u3066\u3066
\u30B0\u30E9\u30B9\u306B\u6CE8\u304C\u308C\u308B
\u3053\u3053\u306F\u591C\u306E\u30C0\u30A4\u30CA\u30FC
\u5ACC\u3044\u306A\u30E1\u30ED\u30C7\u30A3

\u30AF\u30BA\u304B\u3069\u3046\u304B\u3067\u8A00\u3048\u3070\u30C9\u30AF\u30BA\u3060\u306D
\u3060\u304B\u3089\u3057\u3063\u304B\u308A\u898B\u3048\u3066\u3044\u308B\u306E\u3055
\u30CD\u30BA\u30DF\u306B\u7D1B\u308C\u751F\u304D\u308B\u50D5\u305F\u3061\u306F
\u4EBA\u9593\u3058\u3083\u306A\u3044\u3093\u3058\u3083\u306A\u3044?

\u6642\u4EE3\u3060\u306E\u6B4C\u3063\u3066\u6FC1\u3057\u3061\u3083\u3048\u3070
\u671D\u306F\u3057\u3063\u304B\u308A\u8D77\u304D\u308C\u308B\u3067\u3057\u3087\u3046
\u307F\u3093\u306A\u305D\u308D\u305D\u308D\u9A12\u304E\u59CB\u3081\u308B\u305E
\u305D\u3057\u3066\u6700\u5F8C\u306F

\u4EBA\u8089\u306E\u30B9\u30FC\u30D7\u3067\u304A\u5225\u308C\u3057\u307E\u3057\u3087\u3046
\u6765\u4E16\u304C\u3042\u308B\u306A\u3089\u63A2\u3057\u3066
\u6700\u5F8C\u306E\u30C7\u30B6\u30FC\u30C8\u306F\u304A\u63C3\u3044\u306B\u3057\u307E\u3057\u3087\u3046
\u30AD\u30B9\u3092\u3057\u306A\u304C\u3089\u7720\u308A\u306B\u3064\u304F\u306E

\u751F\u306C\u308B\u3044\u95C7\u306E\u4E2D\u9759\u304B\u306B
\u58CA\u308C\u308B\u306E\u306A\u3089\u3070\u30012\u4EBA
\u671D\u304C\u6765\u308B\u305D\u306E\u524D\u306B...!

\u30D1\u30E9\u30C3\u30D1\u30E9\u30C3\u30D1\u30FC\u30E9\u30C3\u30D1\u3092\u9CF4\u3089\u3057\u3066
\u30B9\u30C6\u30FC\u30B8\u3067\u622F\u3051\u3066\u898B\u305B\u308C\u3070
\u68EE\u304C\u3086\u3063\u304F\u308A\u63FA\u308C\u59CB\u3081\u308B\u306E\u3055
\u30D1\u30FC\u30C6\u30A3\u306E\u6642\u9593\u3060

\u3053\u3093\u306A\u30D3\u30FC\u30C8\u306F\u3044\u304B\u304C\u3067\u3057\u3087\u3046\u304B\u3068
\u541B\u306E\u8170\u3092\u8210\u3081\u3066\u3044\u308B\u306E\u3055
\u307F\u3093\u306A\u305D\u308D\u305D\u308D\u8E0A\u308A\u59CB\u3081\u308B\u305E
\u305D\u3057\u3066\u6700\u5F8C\u306F

\u4EBA\u8089\u306E\u30B9\u30FC\u30D7\u3067\u304A\u5225\u308C\u3057\u307E\u3057\u3087\u3046
\u6765\u4E16\u304C\u3042\u308B\u306A\u3089\u63A2\u3057\u3066
\u6700\u5F8C\u306E\u30C7\u30B6\u30FC\u30C8\u306F\u304A\u63C3\u3044\u306B\u3057\u307E\u3057\u3087\u3046
\u30AD\u30B9\u3092\u3057\u306A\u304C\u3089\u7720\u308A\u306B\u3064\u304F\u306E`,
      lyricsRomaji: `Kirai na mono wo tabete
Sodatta karada
Koko wa mori no dainaa
Minna no ohaka

Raion no kubi wo kiriotoshite
Torikaete suteeji ni tataseryaa
Nezumi wa minna ooyorokobi sa
Sore, mou ii n janai?

Mirai da no utatte nigoshichaeba
Yoru wa gussuri nemureru deshou
Minna sorosoro kizuki hajimeru zo
Soshite saigo wa

Jinniku no suupu de owakare shimashou
Raise ga aru nara sagashite
Saigo no dezaato wa osoroi ni shimashou
Kisu wo shinagara nemuri ni tsuku no

Mirai ga oto wo tatete
Gurasu ni sosogareru
Koko wa yoru no dainaa
Kirai na merodii

Kuzu ka dou ka de ieba dokuzu da ne
Dakara shikkari miete iru no sa
Nezumi ni magire ikiru bokutachi wa
Ningen janai n janai?

Jidai da no utatte nigoshichaeba
Asa wa shikkari okireru deshou
Minna sorosoro sawagi hajimeru zo
Soshite saigo wa

Jinniku no suupu de owakare shimashou
Raise ga aru nara sagashite
Saigo no dezaato wa osoroi ni shimashou
Kisu wo shinagara nemuri ni tsuku no

Namanurui yami no naka shizuka ni
Kowareru no naraba, futari
Asa ga kuru sono mae ni...!

Parappara-ppaa rappa wo narashite
Suteeji de fuzakete misereba
Mori ga yukkuri yure hajimeru no sa
Paatii no jikan da

Konna biito wa ikaga deshou ka to
Kimi no koshi wo namete iru no sa
Minna sorosoro odori hajimeru zo
Soshite saigo wa

Jinniku no suupu de owakare shimashou
Raise ga aru nara sagashite
Saigo no dezaato wa osoroi ni shimashou
Kisu wo shinagara nemuri ni tsuku no`,
      lyricsEn: `Eating things I hate
This body that grew up
This is the forest diner
Everyone's grave

Cut off the lion's head
Replace it and put it on stage
The mice all rejoice
Isn't that enough already?

If you muddy it up singing about "the future"
You'll sleep soundly at night
Everyone's about to start noticing
And in the end

Let's say goodbye with human soup
If there's a next life, go find it
Let's have matching desserts at the end
Falling asleep while kissing

The future makes a sound
As it's poured into a glass
This is the night diner
A melody I hate

If you're asking whether I'm trash\u2014I'm total garbage
That's why I can see so clearly
Living among the rats, aren't we
Not even human?

If you muddy it up singing about "the era"
You'll wake up properly in the morning
Everyone's about to start making noise
And in the end

Let's say goodbye with human soup
If there's a next life, go find it
Let's have matching desserts at the end
Falling asleep while kissing

Quietly in the lukewarm darkness
If we're going to break, the two of us
Before morning comes...!

Pa-ra-pa-pa-paa, blow the trumpet
If you clown around on stage
The forest will slowly start swaying
It's party time

How about a beat like this?
I'm licking your hips
Everyone's about to start dancing
And in the end

Let's say goodbye with human soup
If there's a next life, go find it
Let's have matching desserts at the end
Falling asleep while kissing`,
      notes: `\u2022 Smells Like Human Diner - A play on "Smells Like Teen Spirit" but with cannibalistic horror vibes.
\u2022 \u4EBA\u8089\u306E\u30B9\u30FC\u30D7 (jinniku no suupu) - "Human soup" - Cannibalism as metaphor for consumption, capitalism eating itself.
\u2022 \u30E9\u30A4\u30AA\u30F3\u306E\u9996\u3092\u5207\u308A\u843D\u3068\u3057\u3066 (raion no kubi wo kiriotoshite) - "Cut off the lion's head" - Replacing leaders/kings with puppets while the masses (mice) celebrate.
\u2022 \u30C9\u30AF\u30BA (dokuzu) - "Total garbage/scum" - Emphatic form of \u30AF\u30BA (trash). Self-aware self-deprecation.
\u2022 \u30CD\u30BA\u30DF\u306B\u7D1B\u308C\u751F\u304D\u308B (nezumi ni magire ikiru) - "Living among rats" - The masses as vermin, including the speaker.
\u2022 \u6765\u4E16\u304C\u3042\u308B\u306A\u3089\u63A2\u3057\u3066 (raise ga aru nara sagashite) - "If there's a next life, go find it" - Dismissive of salvation.
\u2022 The song is darkly comedic horror-carnival, a danse macabre about society consuming itself while dancing.`
    }
  });
  console.log("\u2713 Updated: Smells Like Human Diner");
  await prisma.song.update({
    where: { slug: "picaresque-roman" },
    data: {
      lyricsJp: `\u30EC\u30F3\u30AC\u3067\u3067\u304D\u305F\u968E\u6BB5\u3092
\u6756\u3092\u6301\u305F\u305A\u306B\u767B\u308B\u306E\u306F
\u732B\u3092\u6BBA\u3059\u7CDE\u3063\u305F\u308C\u3092
\u7A81\u304D\u843D\u3068\u3057\u3066\u3084\u308B\u305F\u3081\u3055
\u307E\u305F\u30DD\u30ED\u30DD\u30ED\u3068\u6B7B\u3093\u3067\u3044\u304F

\u30AB\u30D3\u306E\u751F\u3048\u305F\u30D1\u30F3\u3055\u3048\u3082
\u76D7\u307F\u3092\u3084\u308C\u3070\u60AA\u515A\u3055
\u751F\u306E\u67AF\u6E07 \u98E2\u3048\u51CC\u3050
\u751F\u304D\u65B9\u3082\u308D\u304F\u3067\u306A\u3057\u3055
\u307E\u305F\u30DD\u30ED\u30DD\u30ED\u3068\u6B7B\u3093\u3067\u3044\u304F

\u624B\u3092\u4F38\u3070\u305B\u3070\u898B\u3048\u308B\u304B\u306A\u3001\u3042\u306A\u305F\u306B
\u624B\u3092\u4F38\u3070\u305B\u3070\u5C4A\u304F\u304B\u306A

\u9727\u306E\u304B\u304B\u308B

\u3053\u306E\u68EE\u306B\u306F\u4EBA\u306F\u3044\u306A\u3044
\u4EBA\u9593\u3058\u3083\u306A\u3044\u50D5\u3089\u306E\u6E26
\u30E9\u30F3\u30D7\u306E\u6D88\u3048\u305F\u68EE\u3092\u5F77\u5FA8\u3046
\u50D5\u3089\u304C\u843D\u3068\u3059\u8DB3\u8DE1\u306E\u6B4C

\u541B\u304C\u7B11\u3046\u306A\u3089\u3001\u50D5\u306F\u8E0A\u308B\u3088
\u541B\u3092\u6CE3\u304B\u305B\u305F\u3089\u3001\u60AA\u9B54\u306B\u306A\u308D\u3046

\u4F53\u306E\u5965\u3001\u305A\u3063\u3068\u5965
\u541B\u304C\u96A0\u3059\u305D\u306E\u9ED2\u306F
\u3044\u3064\u304B\u5831\u308F\u308C\u308B\u306E\u3055
\u3055\u3042\u50D5\u306E\u58F0\u3092\u805E\u3044\u3066
\u307B\u3089\u30DD\u30ED\u30DD\u30ED\u3068\u6B7B\u3093\u3067\u3044\u304F

\u624B\u3092\u4F38\u3070\u305B\u3070\u58CA\u305B\u308B\u304B\u306A\u3001\u3042\u306A\u305F\u3092
\u624B\u3092\u4F38\u3070\u305B\u3070\u5C4A\u304F\u304B\u306A

\u9727\u306E\u304B\u304B\u308B

\u3053\u306E\u68EE\u306B\u306F\u4EBA\u306F\u3044\u306A\u3044
\u4EBA\u9593\u3058\u3083\u306A\u3044\u50D5\u3089\u306E\u6E26
\u30E9\u30F3\u30D7\u306E\u6D88\u3048\u305F\u68EE\u3092\u5F77\u5FA8\u3046
\u50D5\u3089\u304C\u843D\u3068\u3059\u8DB3\u8DE1\u306E\u6B4C

\u541B\u304C\u7B11\u3046\u306A\u3089\u3001\u50D5\u306F\u8E0A\u308B\u3088
\u541B\u3092\u6CE3\u304B\u305B\u305F\u3089\u3001\u60AA\u9B54\u306B\u306A\u308D\u3046

\u3053\u306E\u68EE\u306B\u306F\u4EBA\u306F\u3044\u306A\u3044
\u4EBA\u9593\u3058\u3083\u306A\u3044\u50D5\u3089\u306E\u6E26
\u660E\u304B\u308A\u306E\u6D88\u3048\u305F\u5730\u7403\uFF08\u307B\u3057\uFF09\u3092\u5F77\u5FA8\u3046
\u50D5\u3089\u304C\u843D\u3068\u3059\u6D99\u306E\u97F3

\u541B\u306E\u7B54\u3048\u304C\u3001\u8AB0\u304B\u306E\u5FC3\u3092
\u6BBA\u3057\u3066\u3057\u307E\u3046\u3001\u50D5\u3089\u306E\u6E26
\u30E9\u30F3\u30D7\u306E\u6D88\u3048\u305F\u68EE\u3092\u5F77\u5FA8\u3046
\u50D5\u3089\u304C\u843D\u3068\u3059\u8DB3\u8DE1\u306E\u6B4C

\u541B\u304C\u7B11\u3046\u306A\u3089\u3001\u50D5\u306F\u8E0A\u308B\u3088
\u541B\u3092\u6CE3\u304B\u305B\u305F\u3089\u3001\u60AA\u9B54\u306B\u306A\u308D\u3046`,
      lyricsRomaji: `Renga de dekita kaidan wo
Tsue wo motazu ni noboru no wa
Neko wo korosu kusottare wo
Tsukiotoshite yaru tame sa
Mata poroporo to shinde iku

Kabi no haeta pan sae mo
Nusumi wo yareba akutou sa
Sei no kokatsu ue shinogu
Ikikata mo roku de nashi sa
Mata poroporo to shinde iku

Te wo nobaseba mieru ka na, anata ni
Te wo nobaseba todoku ka na

Kiri no kakaru

Kono mori ni wa hito wa inai
Ningen janai bokura no uzu
Ranpu no kieta mori wo samayou
Bokura ga otosu ashiato no uta

Kimi ga warau nara, boku wa odoru yo
Kimi wo nakaseta ra, akuma ni narou

Karada no oku, zutto oku
Kimi ga kakusu sono kuro wa
Itsuka mukuwareru no sa
Saa boku no koe wo kiite
Hora poroporo to shinde iku

Te wo nobaseba kowaseru ka na, anata wo
Te wo nobaseba todoku ka na

Kiri no kakaru

Kono mori ni wa hito wa inai
Ningen janai bokura no uzu
Ranpu no kieta mori wo samayou
Bokura ga otosu ashiato no uta

Kimi ga warau nara, boku wa odoru yo
Kimi wo nakaseta ra, akuma ni narou

Kono mori ni wa hito wa inai
Ningen janai bokura no uzu
Akari no kieta hoshi wo samayou
Bokura ga otosu namida no oto

Kimi no kotae ga, dareka no kokoro wo
Koroshite shimau, bokura no uzu
Ranpu no kieta mori wo samayou
Bokura ga otosu ashiato no uta

Kimi ga warau nara, boku wa odoru yo
Kimi wo nakaseta ra, akuma ni narou`,
      lyricsEn: `Climbing brick stairs
Without a cane
To push down the bastard
Who kills cats
Again, crumbling away, they die

Even moldy bread\u2014
If you steal it, you're a villain
Withering life, enduring hunger
A worthless way to live
Again, crumbling away, they die

If I reach out, can I see you?
If I reach out, can I reach you?

Shrouded in fog

In this forest, there are no people
A vortex of us who aren't human
Wandering the forest where the lamps went out
The song of footprints we leave behind

If you smile, I'll dance
If I make you cry, I'll become a demon

Deep in your body, deeper still
That darkness you hide
Will be rewarded someday
Come now, listen to my voice
Look\u2014crumbling away, they die

If I reach out, can I break you?
If I reach out, can I reach you?

Shrouded in fog

In this forest, there are no people
A vortex of us who aren't human
Wandering the forest where the lamps went out
The song of footprints we leave behind

If you smile, I'll dance
If I make you cry, I'll become a demon

In this forest, there are no people
A vortex of us who aren't human
Wandering this planet where the lights went out
The sound of tears we drop

Your answer will kill
Someone's heart\u2014our vortex
Wandering the forest where the lamps went out
The song of footprints we leave behind

If you smile, I'll dance
If I make you cry, I'll become a demon`,
      notes: `\u2022 \u30D4\u30AB\u30EC\u30B9\u30AF (pikaresuku) - "Picaresque" - A literary genre featuring roguish heroes surviving by their wits in a corrupt society. The "picaresque romance" is love among outcasts and criminals.
\u2022 \u30DD\u30ED\u30DD\u30ED\u3068\u6B7B\u3093\u3067\u3044\u304F (poroporo to shinde iku) - "Crumbling away, dying" - \u30DD\u30ED\u30DD\u30ED is onomatopoeia for things falling apart, often tears falling. People dying like crumbs.
\u2022 \u7CDE\u3063\u305F\u308C (kusottare) - "Bastard/shithead" - Crude insult.
\u2022 \u308D\u304F\u3067\u306A\u3057 (roku de nashi) - "Good-for-nothing/worthless person"
\u2022 \u4EBA\u9593\u3058\u3083\u306A\u3044\u50D5\u3089\u306E\u6E26 (ningen janai bokura no uzu) - "Vortex of us who aren't human" - Calling back to "Ningen Janai" but now with solidarity among the outcasts.
\u2022 \u5730\u7403\uFF08\u307B\u3057\uFF09(hoshi) - The kanji \u5730\u7403 (earth/planet) is given the reading \u307B\u3057 (star/planet). The whole earth has gone dark.
\u2022 \u541B\u304C\u7B11\u3046\u306A\u3089\u3001\u50D5\u306F\u8E0A\u308B\u3088 / \u541B\u3092\u6CE3\u304B\u305B\u305F\u3089\u3001\u60AA\u9B54\u306B\u306A\u308D\u3046 - "If you smile, I'll dance / If I make you cry, I'll become a demon" - Total devotion; he'll be anything for her.
\u2022 This is a dark fairy tale about outlaws in a dying world, finding meaning in each other.`
    }
  });
  console.log("\u2713 Updated: Picaresque Romance");
  await prisma.song.update({
    where: { slug: "chou-ka-ga" },
    data: {
      lyricsJp: `\u30B3\u30A4\u30F3\u3092\u6295\u3052\u305F\u30D5\u30EA\u3057\u3066
\u3069\u3061\u3089\u3082\u88CF\u304B\u3082\u306D
\u3044\u3064\u3082\u72D9\u3063\u3066\u7B11\u3046\u304F\u305B\u306B

\u5C0F\u3055\u306A\u82B1\u675F\u3092\u5E95\u306E\u958B\u3044\u305F\u30AB\u30B4\u306B\u5165\u308C
\u771F\u3063\u9ED2\u306A\u30B4\u30DF\u306F\u30C9\u30EC\u30B9\u306E\u30D0\u30B9\u30C8\u306B\u96A0\u3057\u3066

\u8AB0\u3082\u304C\u8A00\u3046
\u3053\u306E\u8857\u306F\u6C5A\u308C\u3061\u3083\u3063\u3066\u99C4\u76EE\u3089\u3057\u3044
\u307F\u3059\u307C\u3089\u3057\u3044\u624B\u7D19\u306A\u3069\u3044\u3089\u306A\u3044\u308F
\u306D\u3048\u305D\u3046\u3067\u3057\u3087

\u30B3\u30A4\u30F3\u3092\u6295\u3052\u305F\u30D5\u30EA\u3057\u3066
\u3069\u3061\u3089\u3082\u88CF\u304B\u3082\u306D
\u8776\u304B\u86FE\u304B\u306F\u5225\u306B\u8208\u5473\u306A\u3044\u306D

\u3044\u3064\u3082\u30B3\u30A4\u30F3\u3092\u6295\u3052\u305F\u30D5\u30EA\u3057\u3066
\u3069\u3061\u3089\u3082\u88CF\u304B\u3082\u306D
\u3044\u3064\u3082\u72D9\u3063\u3066\u7B11\u3046\u304F\u305B\u306B

\u5C0F\u3055\u306A\u82B1\u675F\u304C\u67AF\u308C\u59CB\u3081\u6C34\u3092\u3084\u3063\u3066
\u771F\u3063\u9ED2\u306A\u30B4\u30DF\u304C\u5897\u3048\u7D9A\u3051\u3001\u4E0B\u7740\u3092\u5265\u304C\u3059

\u8AB0\u3082\u304C\u8A00\u3046
\u7686\u304C\u3082\u3046\u82E6\u3057\u304F\u3066\u99C4\u76EE\u3089\u3057\u3044
\u6D41\u884C\u308A\u3060\u3051\u306E\u30C9\u30EC\u30B9\u3067\u306F\u8E0A\u308C\u306A\u3044
\u306D\u3048\u305D\u3046\u3067\u3057\u3087

\u30B3\u30A4\u30F3\u3092\u6295\u3052\u305F\u30D5\u30EA\u3057\u3066
\u3069\u3061\u3089\u3082\u88CF\u304B\u3082\u306D
\u8776\u304B\u86FE\u304B\u306F\u5225\u306B\u8208\u5473\u306A\u3044\u306D

\u3044\u3064\u3082\u30B3\u30A4\u30F3\u3092\u6295\u3052\u305F\u30D5\u30EA\u3057\u3066
\u3069\u3061\u3089\u3082\u88CF\u304B\u3082\u306D
\u3044\u3064\u3082\u72D9\u3063\u3066\u7B11\u3046\u304F\u305B\u306B

\u3044\u3064\u3082\u30B3\u30A4\u30F3\u3092\u6295\u3052\u305F\u30D5\u30EA\u3057\u3066
\u3069\u3061\u3089\u3082\u88CF\u304B\u3082\u306D
\u8776\u304B\u86FE\u304B\u306F\u5225\u306B\u8208\u5473\u306A\u3044\u3088

\u3044\u3064\u3082\u30B3\u30A4\u30F3\u3092\u6295\u3052\u305F\u30D5\u30EA\u3057\u3066
\u3069\u3061\u3089\u3082\u88CF\u304B\u3082\u306D
\u9000\u5EC3\u3082\u6226\u4E89\u3082\u5225\u306B\u8208\u5473\u306A\u3044\u3088

\u3044\u3064\u3082\u30B3\u30A4\u30F3\u3092\u6295\u3052\u305F\u30D5\u30EA\u3057\u3066
\u3069\u3061\u3089\u3082\u88CF\u304B\u3082\u306D
\u3044\u3064\u3082\u72D9\u3063\u3066\u7B11\u3046\u304F\u305B\u306B
\u3044\u3064\u3082\u72D9\u3063\u3066\u7B11\u3046\u7656\u306B`,
      lyricsRomaji: `Koin wo nageta furi shite
Dochira mo ura kamo ne
Itsumo neratte warau kuse ni

Chiisana hanataba wo soko no aita kago ni ire
Makkuro na gomi wa doresu no basuto ni kakushite

Dare mo ga iu
Kono machi wa yogorechatte dame rashii
Misuborashii tegami nado iranai wa
Nee sou desho

Koin wo nageta furi shite
Dochira mo ura kamo ne
Chou ka ga ka wa betsu ni kyoumi nai ne

Itsumo koin wo nageta furi shite
Dochira mo ura kamo ne
Itsumo neratte warau kuse ni

Chiisana hanataba ga karehajime mizu wo yatte
Makkuro na gomi ga fuetsuzuke, shitagi wo hagasu

Dare mo ga iu
Mina ga mou kurushikute dame rashii
Hayari dake no doresu de wa odorenai
Nee sou desho

Koin wo nageta furi shite
Dochira mo ura kamo ne
Chou ka ga ka wa betsu ni kyoumi nai ne

Itsumo koin wo nageta furi shite
Dochira mo ura kamo ne
Itsumo neratte warau kuse ni

Itsumo koin wo nageta furi shite
Dochira mo ura kamo ne
Chou ka ga ka wa betsu ni kyoumi nai yo

Itsumo koin wo nageta furi shite
Dochira mo ura kamo ne
Taihai mo sensou mo betsu ni kyoumi nai yo

Itsumo koin wo nageta furi shite
Dochira mo ura kamo ne
Itsumo neratte warau kuse ni
Itsumo neratte warau kuse ni`,
      lyricsEn: `Pretending to flip a coin
Maybe both sides are tails
Even though you always aim and smile

Putting a small bouquet in a basket with no bottom
Hiding pitch-black trash in the bust of a dress

Everyone says
This city's gotten dirty and it's no good anymore
I don't need shabby letters
Right?

Pretending to flip a coin
Maybe both sides are tails
Butterfly or moth\u2014I don't really care

Always pretending to flip a coin
Maybe both sides are tails
Even though you always aim and smile

The small bouquet starts to wilt, I water it
The pitch-black trash keeps piling up, stripping off underwear

Everyone says
Everyone's suffering and it's no good anymore
You can't dance in a dress that's only trendy
Right?

Pretending to flip a coin
Maybe both sides are tails
Butterfly or moth\u2014I don't really care

Always pretending to flip a coin
Maybe both sides are tails
Even though you always aim and smile

Always pretending to flip a coin
Maybe both sides are tails
Butterfly or moth\u2014I don't really care

Always pretending to flip a coin
Maybe both sides are tails
Decadence or war\u2014I don't really care

Always pretending to flip a coin
Maybe both sides are tails
Even though you always aim and smile
Even though you always aim and smile`,
      notes: `\u2022 \u8776\u304B\u86FE (chou ka ga) - "Butterfly or moth" - The title asks: what's the difference? Both are lepidoptera. One is beautiful, one is seen as ugly. The speaker doesn't care about the distinction.
\u2022 \u30B3\u30A4\u30F3\u3092\u6295\u3052\u305F\u30D5\u30EA (koin wo nageta furi) - "Pretending to flip a coin" - Fake randomness. The choice was never real.
\u2022 \u3069\u3061\u3089\u3082\u88CF (dochira mo ura) - "Both sides are tails" - A rigged game. No winning option.
\u2022 \u72D9\u3063\u3066\u7B11\u3046 (neratte warau) - "Aiming and smiling" - Calculated, predatory smiling. Not genuine.
\u2022 \u5E95\u306E\u958B\u3044\u305F\u30AB\u30B4 (soko no aita kago) - "Basket with no bottom" - A futile gesture. The flowers will fall through.
\u2022 \u9000\u5EC3\u3082\u6226\u4E89\u3082\u5225\u306B\u8208\u5473\u306A\u3044 (taihai mo sensou mo betsu ni kyoumi nai) - "Decadence or war\u2014I don't care" - The escalation from butterfly/moth to societal collapse, met with the same apathy.
\u2022 The imagery of dresses, underwear, and hiding trash suggests performance, surface beauty concealing rot.`
    }
  });
  console.log("\u2713 Updated: Chou Ka Ga");
  console.log("\n\u2705 All lyrics updated successfully!");
}
main().then(async () => {
  await prisma.$disconnect();
}).catch(async (e) => {
  console.error(e);
  await prisma.$disconnect();
  process.exit(1);
});
