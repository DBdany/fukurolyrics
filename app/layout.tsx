import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Header, Footer } from '@/components/layout'
import { FaroProvider } from '@/components/analytics'
import { getAllSongsForSearch } from '@/lib/queries'
import './globals.css'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: {
    default: 'FUKURO LYRICS | 梟 - Japanese & English Translations',
    template: '%s | FUKURO LYRICS',
  },
  description:
    'Lyrics for the Japanese visual kei band 梟 (Fukuro) in Japanese, Romaji, and English translations.',
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  // Handle build-time when DATABASE_URL isn't available
  let songs: Awaited<ReturnType<typeof getAllSongsForSearch>> = []
  try {
    songs = await getAllSongsForSearch()
  } catch {
    // Database not available during build, search will work at runtime
  }

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} min-h-screen antialiased`}
      >
        <FaroProvider />
        <div className="flex min-h-screen flex-col">
          <Header songs={songs} />
          <main className="flex-1 py-8">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
