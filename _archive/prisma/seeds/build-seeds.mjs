import * as esbuild from 'esbuild'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const prismaDir = path.join(__dirname, '..')

// Build seed.ts
await esbuild.build({
  entryPoints: [path.join(prismaDir, 'seed.ts')],
  bundle: true,
  platform: 'node',
  target: 'node20',
  outfile: path.join(__dirname, 'seed.js'),
  external: ['@prisma/client'],
  format: 'cjs',
})

console.log('Built: prisma/seeds/seed.js')

// Build update-lyrics.ts
await esbuild.build({
  entryPoints: [path.join(prismaDir, 'update-lyrics.ts')],
  bundle: true,
  platform: 'node',
  target: 'node20',
  outfile: path.join(__dirname, 'update-lyrics.js'),
  external: ['@prisma/client'],
  format: 'cjs',
})

console.log('Built: prisma/seeds/update-lyrics.js')
