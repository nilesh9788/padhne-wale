import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import {
  Space_Grotesk,
  Instrument_Serif,
  Syncopate,
} from 'next/font/google'
import './globals.css'

/* =========================================================
   FONTS
========================================================= */

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
})

const instrumentSerif = Instrument_Serif({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-instrument-serif',
  display: 'swap',
})

const syncopate = Syncopate({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-syncopate',
  display: 'swap',
})


/* =========================================================
   METADATA
========================================================= */

export const metadata: Metadata = {
  title: 'Padhne Wale — Study material for everywhere',

  description:
    'Unexpected objects, made into collectible study material. Padhne wale kahin bhi padh lete hain.',

  generator: 'v0.app',
}


/* =========================================================
   VIEWPORT
========================================================= */

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#050505',
  userScalable: true,
}


/* =========================================================
   ROOT LAYOUT
========================================================= */

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`
        bg-background
        ${spaceGrotesk.variable}
        ${instrumentSerif.variable}
        ${syncopate.variable}
      `}
    >
      <body className="antialiased">
        {children}

        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}