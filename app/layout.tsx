import React from "react"
import type { Metadata, Viewport } from 'next'
import { VT323, Inter, Noto_Sans_JP } from 'next/font/google'

import './globals.css'

const vt323 = VT323({ 
  weight: '400',
  subsets: ['latin'],
  variable: '--font-pixel'
})

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-sans'
})

const notoSansJP = Noto_Sans_JP({ 
  subsets: ['latin'],
  variable: '--font-jp'
})

export const metadata: Metadata = {
  title: {
    default: 'FUKURO Shrine - Visual Kei Lyrics & Fan Community',
    template: '%s | FUKURO Shrine',
  },
  description: 'The ultimate fan shrine dedicated to FUKURO (梟), featuring lyrics, translations, discography, and community forums. Welcome to the darkness.',
  keywords: ['fukuro', '梟', 'visual kei', 'vkei', 'lyrics', 'fan site', 'japanese rock', 'jrock'],
  icons: {
    icon: '/icon.svg',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'FUKURO Shrine',
    title: 'FUKURO Shrine - Visual Kei Lyrics & Fan Community',
    description: 'The ultimate fan shrine dedicated to FUKURO (梟), featuring lyrics, translations, discography, and community forums.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FUKURO Shrine',
    description: 'Visual Kei lyrics & fan community dedicated to FUKURO (梟)',
  },
}

export const viewport: Viewport = {
  themeColor: '#1a0a1f',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${vt323.variable} ${inter.variable} ${notoSansJP.variable} font-sans antialiased`}>{children}</body>
    </html>
  )
}
