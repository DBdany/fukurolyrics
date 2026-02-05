import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'development',
  description: 'how to run fukuro lyrics locally',
}

export default function DevelopmentDocsPage() {
  return (
    <div>
      <h1>development</h1>
      <p>
        heres how to get the site running on your machine.
      </p>

      <h2>prerequisites</h2>
      <ul>
        <li>node.js 20+</li>
        <li>pnpm (we use pnpm not npm)</li>
        <li>docker (for the database)</li>
      </ul>

      <h2>setup</h2>
      <pre className="overflow-x-auto rounded bg-neutral-100 p-4 text-sm">
{`# clone the repo
git clone git@github.com:dyanabutler/fukurolyrics.git
cd fukurolyrics

# install dependencies
pnpm install

# start the database
docker-compose up -d

# set up environment
cp .env.example .env
# edit .env if needed

# run migrations
npx prisma migrate dev

# seed the database
npx prisma db seed

# start dev server
pnpm dev`}
      </pre>

      <h2>project structure</h2>
      <pre className="overflow-x-auto rounded bg-neutral-100 p-4 text-sm">
{`app/
├── components/     # react components
│   ├── layout/     # header, footer, container
│   └── ui/         # reusable ui bits
├── docs/           # these docs pages
├── lib/            # utilities, db client, queries
├── library/        # library page
├── lyrics/[slug]/  # individual song pages
├── releases/[slug]/ # release/album pages
└── types/          # typescript types

prisma/
├── schema.prisma   # database schema
├── seed.ts         # seed data
└── update-lyrics.ts # lyrics update script

docs/               # repo markdown docs`}
      </pre>

      <h2>useful commands</h2>
      <pre className="overflow-x-auto rounded bg-neutral-100 p-4 text-sm">
{`pnpm dev          # start dev server
pnpm build        # production build
pnpm typecheck    # run typescript check
npx prisma studio # open database gui`}
      </pre>

      <h2>database</h2>
      <p>
        were using postgres with prisma orm. the docker-compose file
        sets up a local postgres instance. connection string is in .env.
      </p>

      <h2>styling</h2>
      <p>
        tailwind css v4. minimal black/white/gray palette. no ui libraries,
        just pure tailwind. keep it simple.
      </p>
    </div>
  )
}
