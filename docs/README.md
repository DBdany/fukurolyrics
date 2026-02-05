# docs

hey, welcome to the fukuro lyrics repo docs.

this is a fan-made lyrics site for the japanese visual kei band 梟 (fukuro). we provide lyrics in japanese, romaji, and english translations.

## quick links

- [architecture](./architecture.md) - how the codebase is organized
- [development](./development.md) - running the site locally
- [deployment](./deployment.md) - github actions + fly.io ci/cd
- [adding lyrics](./adding-lyrics.md) - how to add songs to the database
- [images & cdn](./images.md) - adding album artwork
- [hosting](./hosting.md) - fly.io infrastructure and costs
- [contributing](./contributing.md) - how to help out

## tech stack

- next.js 16 (app router)
- typescript
- tailwind css v4
- postgres + prisma
- fly.io (hosting)
- cloudflare r2 (images)
- github actions (ci/cd)

## live site

the site is deployed at [fukurolyrics.com](https://fukurolyrics.com).

## quick start

```bash
git clone git@github.com:DBdany/fukurolyrics.git
cd fukurolyrics
pnpm install
docker-compose up -d
pnpm db:migrate
pnpm db:seed
pnpm dev
```

## questions?

open an issue on github. were friendly.
