import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { Analytics } from '@vercel/analytics/next'
import { ScrollToTop } from '@/components/scroll-to-top'
import './globals.css'

export const metadata: Metadata = {
  title: 'Mount Whitney Talent - We build your world',
  description: 'We are a digital agency with extensive experience in Web, App, IT Solutions, Digital Marketing, Brand Communication Solutions.',
  generator: 'Mount Whitney Talent',
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon.ico' },
    ],
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        {children}
        <Analytics />
        <ScrollToTop />
      </body>
    </html>
  )
}
