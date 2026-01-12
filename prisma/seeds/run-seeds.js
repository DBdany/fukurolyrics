#!/usr/bin/env node

/**
 * Production seed runner
 * - If database is empty, runs full seed (releases + songs)
 * - If data exists, only updates lyrics
 */

const { execSync } = require('child_process')
const path = require('path')
const fs = require('fs')
const { PrismaClient } = require('@prisma/client')

const seedsDir = __dirname

async function runSeeds() {
  const prisma = new PrismaClient()

  try {
    console.log('Checking database state...')

    // Check if we have any releases
    const releaseCount = await prisma.release.count()
    console.log(`Found ${releaseCount} releases in database`)

    const seedFile = path.join(seedsDir, 'seed.js')
    const updateLyricsFile = path.join(seedsDir, 'update-lyrics.js')

    if (releaseCount === 0) {
      // Empty database - run full seed
      console.log('\n--- Database empty, running full seed ---')
      if (fs.existsSync(seedFile)) {
        execSync(`node ${seedFile}`, { stdio: 'inherit' })
        // Wait for seed to complete
        await new Promise(resolve => setTimeout(resolve, 2000))
      } else {
        console.log('Warning: seed.js not found')
      }
    } else {
      console.log('Database has data, skipping full seed')
    }

    // Always run lyrics update if file exists
    if (fs.existsSync(updateLyricsFile)) {
      console.log('\n--- Running lyrics update ---')
      execSync(`node ${updateLyricsFile}`, { stdio: 'inherit' })
    } else {
      console.log('No update-lyrics.js found - skipping lyrics update')
    }

    console.log('\n--- Seeds complete ---')
  } catch (error) {
    console.error('Error running seeds:', error.message)
    process.exit(1)
  } finally {
    await prisma.$disconnect()
  }
}

runSeeds()
