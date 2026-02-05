# deployment

automated deployments via github actions to fly.io.

## how it works

```
push to main → github actions → fly.io deploy → migrations → seeds
```

every push to `main` triggers:

1. github actions runs `.github/workflows/deploy.yml`
2. fly.io builds docker image from `Dockerfile`
3. deploys to production
4. runs release command (migrations + seeds)

## github actions workflow

located at `.github/workflows/deploy.yml`:

```yaml
name: Deploy to Fly.io

on:
  push:
    branches: [main]
  workflow_dispatch:  # manual trigger

env:
  FLY_API_TOKEN: ${{ secrets.FLY_API_TOKEN }}

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: superfly/flyctl-actions/setup-flyctl@master
      - run: flyctl deploy --remote-only
```

### required secrets

add to github repo → settings → secrets → actions:

| secret | value |
|--------|-------|
| `FLY_API_TOKEN` | fly.io deploy token |

to get your fly token:

```bash
fly tokens create deploy -x 999999h
```

## fly.io configuration

### fly.toml

```toml
app = 'fukurolyrics-bold-shadow-503'
primary_region = 'sjc'

[deploy]
  release_command = "prisma migrate deploy && node /app/prisma/seeds/run-seeds.js"

[http_service]
  internal_port = 3000
  auto_stop_machines = 'stop'
  auto_start_machines = true
```

key settings:
- `release_command` runs after deploy, before app starts
- `auto_stop_machines` stops VMs when idle (cost savings)

### Dockerfile

multi-stage build:

1. **deps** - install node_modules
2. **builder** - generate prisma client, build seeds, build next.js
3. **runner** - minimal production image

the builder stage compiles typescript seed scripts to javascript:

```dockerfile
# build seed scripts for production
RUN pnpm seeds:build
```

## seed scripts

### the problem

production doesnt have `ts-node`, so we cant run typescript directly.

### the solution

1. `prisma/seeds/build-seeds.mjs` compiles ts → js using esbuild
2. compiled scripts go to `prisma/seeds/*.js`
3. `run-seeds.js` orchestrates seeding in production

### how run-seeds.js works

```
check release count in database
├── if 0 releases → run full seed (seed.js)
└── always run lyrics update (update-lyrics.js)
```

this means:
- first deploy: creates all releases + songs + lyrics
- subsequent deploys: only updates lyrics (idempotent)

### building seeds locally

```bash
pnpm seeds:build
```

outputs:
- `prisma/seeds/seed.js`
- `prisma/seeds/update-lyrics.js`

## manual deployment

if you need to deploy without github actions:

```bash
fly deploy
```

## manual seeding

ssh into production and run seeds:

```bash
# full seed (deletes existing data!)
fly ssh console -C "node /app/prisma/seeds/seed.js"

# just update lyrics
fly ssh console -C "node /app/prisma/seeds/update-lyrics.js"

# or use the smart runner
fly ssh console -C "node /app/prisma/seeds/run-seeds.js"
```

## viewing logs

```bash
# recent logs
fly logs --no-tail

# live tail
fly logs

# check release status
fly releases
```

## troubleshooting

### deploy fails with "no access token"

your `FLY_API_TOKEN` secret is missing or invalid.

1. go to github → repo settings → secrets → actions
2. delete `FLY_API_TOKEN`
3. create new token: `fly tokens create deploy -x 999999h`
4. add it back as a secret

### seeds fail with "record not found"

the `update-lyrics.ts` is trying to update a song that doesnt exist. either:

1. run full seed first: `fly ssh console -C "node /app/prisma/seeds/seed.js"`
2. or add the missing song to `prisma/seed.ts`

### migrations fail

check if theres a pending migration:

```bash
fly ssh console -C "prisma migrate status"
```

### checking production database

```bash
# count songs with lyrics
fly ssh console -C "node -e \"
const { PrismaClient } = require('@prisma/client');
const p = new PrismaClient();
p.song.count({ where: { lyricsJp: { not: { startsWith: '[' } } } })
  .then(c => console.log('Songs with lyrics:', c));
\""
```

## deployment checklist

before merging to main:

- [ ] `pnpm typecheck` passes
- [ ] `pnpm build` succeeds locally
- [ ] `pnpm seeds:build` succeeds
- [ ] new songs added to `prisma/seed.ts`
- [ ] new lyrics added to `prisma/update-lyrics.ts`
