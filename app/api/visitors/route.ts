import { db } from '@/lib/db'
import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'

const VISITOR_COOKIE = 'fukuro_visited'
const STATS_ID = 'visitor_count'

// Get current visitor count
export async function GET() {
  const stats = await db.siteStats.findUnique({
    where: { id: STATS_ID },
  })

  return NextResponse.json({ count: stats?.count ?? 0 })
}

// Increment visitor count (once per session)
export async function POST() {
  const cookieStore = await cookies()
  const hasVisited = cookieStore.get(VISITOR_COOKIE)

  // If already visited this session, just return current count
  if (hasVisited) {
    const stats = await db.siteStats.findUnique({
      where: { id: STATS_ID },
    })
    return NextResponse.json({ count: stats?.count ?? 0, incremented: false })
  }

  // Increment the counter
  const stats = await db.siteStats.upsert({
    where: { id: STATS_ID },
    update: { count: { increment: 1 } },
    create: { id: STATS_ID, count: 1 },
  })

  // Set cookie to prevent multiple increments (expires in 24 hours)
  const response = NextResponse.json({ count: stats.count, incremented: true })
  response.cookies.set(VISITOR_COOKIE, 'true', {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    maxAge: 60 * 60 * 24, // 24 hours
  })

  return response
}
