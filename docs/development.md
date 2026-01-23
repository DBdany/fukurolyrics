# development

heres how to get the site running locally.

## prerequisites

- node.js 20+
- pnpm (not npm)
- docker (for postgres)

## setup

```bash
# clone
git clone git@github.com:DBdany/fukurolyrics.git
cd fukurolyrics

# install deps
pnpm install

# start database
docker-compose up -d

# set up env
cp .env.example .env

# run migrations
pnpm db:migrate

# seed database
pnpm db:seed

# start dev server
pnpm dev
```

site should be running at http://localhost:3000

## project structure

```
app/
├── components/        # react components
│   ├── analytics/     # grafana faro provider
│   ├── layout/        # header, footer, search, container
│   └── ui/            # reusable ui bits
├── lib/               # utilities, db, queries
├── types/             # typescript types
├── library/           # library page
├── lyrics/[slug]/     # song pages
├── releases/[slug]/   # album pages
└── about/             # about page

prisma/
├── schema.prisma      # database schema
├── migrations/        # migration files
├── seed.ts            # seed data (releases, songs)
├── update-lyrics.ts   # lyrics content updates
└── seeds/             # production seed scripts
    ├── build-seeds.mjs    # compiles ts → js
    ├── run-seeds.js       # production runner
    ├── seed.js            # compiled seed
    └── update-lyrics.js   # compiled lyrics

docs/                  # repo docs (youre here)
```

## npm scripts

```bash
# development
pnpm dev              # dev server
pnpm build            # production build
pnpm typecheck        # typescript check
pnpm lint             # eslint

# database
pnpm db:start         # start postgres container
pnpm db:stop          # stop postgres container
pnpm db:reset         # nuke and recreate database
pnpm db:migrate       # run migrations
pnpm db:seed          # seed database
pnpm db:studio        # prisma studio gui
pnpm db:generate      # regenerate prisma client
pnpm db:push          # push schema without migration

# deployment
pnpm seeds:build      # compile seed scripts for production
```

## database

postgres via docker. prisma as the orm.

```bash
# view/edit data directly
pnpm db:studio

# connect via psql
psql postgresql://fukuro:fukuro_dev_password@localhost:5433/fukurolyrics
```

note: local postgres runs on port 5433 (not 5432) to avoid conflicts.

## environment variables

`.env` file:

```
DATABASE_URL=postgresql://fukuro:fukuro_dev_password@localhost:5433/fukurolyrics
```

## adding lyrics locally

```bash
# edit prisma/update-lyrics.ts with your lyrics

# run the update
npx ts-node --compiler-options '{"module":"CommonJS"}' prisma/update-lyrics.ts

# check in browser
pnpm dev
```

## rebuilding seed scripts

if you modify `seed.ts` or `update-lyrics.ts`:

```bash
pnpm seeds:build
```

this compiles typescript to javascript for production deployment.

## styling

tailwind css v4. minimal black/white/gray. no ui libraries. keep it simple.

## common issues

### "ECONNREFUSED" on db commands

docker isnt running:

```bash
docker-compose up -d
```

### port 5433 in use

check whats using it:

```bash
lsof -i :5433
```

### prisma client out of sync

regenerate:

```bash
pnpm db:generate
```
