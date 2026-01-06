# development

heres how to get the site running locally.

## prerequisites

- node.js 20+
- pnpm (not npm)
- docker (for postgres)

## setup

```bash
# clone
git clone git@github.com:dyanabutler/fukurolyrics.git
cd fukurolyrics

# install deps
pnpm install

# start database
docker-compose up -d

# set up env
cp .env.example .env

# run migrations
npx prisma migrate dev

# seed database
npx prisma db seed

# start dev server
pnpm dev
```

site should be running at http://localhost:3000

## project structure

```
app/
├── components/        # react components
│   ├── layout/        # header, footer, container
│   └── ui/            # reusable ui bits
├── docs/              # in-app docs pages
├── lib/               # utilities, db, queries
├── library/           # library page
├── lyrics/[slug]/     # song pages
├── releases/[slug]/   # album pages
└── types/             # typescript types

prisma/
├── schema.prisma      # database schema
├── seed.ts            # seed data
└── update-lyrics.ts   # lyrics update script

docs/                  # repo docs (youre here)
```

## useful commands

```bash
pnpm dev              # dev server
pnpm build            # production build
pnpm typecheck        # typescript check
npx prisma studio     # database gui
npx prisma migrate dev # run migrations
npx prisma db seed    # seed database
```

## database

postgres via docker. prisma as the orm. connection string in `.env`.

to view/edit data directly:
```bash
npx prisma studio
```

## styling

tailwind css v4. minimal black/white/gray. no ui libraries. keep it simple.

## environment variables

```
DATABASE_URL=postgresql://fukuro:fukuro_dev_password@localhost:5432/fukurolyrics
```

thats pretty much it for local dev.
