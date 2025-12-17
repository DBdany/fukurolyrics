import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Header, Footer } from '@/components/layout'
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} min-h-screen antialiased`}
      >
        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="flex-1 py-8">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
