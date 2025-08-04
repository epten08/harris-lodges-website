// src/app/layout.tsx
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'Harris Lodges - Premium Accommodation in Zimbabwe',
    template: '%s | Harris Lodges'
  },
  description: 'Experience luxury accommodation at Harris Lodges, Zimbabwe. Modern rooms, exceptional service, and authentic Zimbabwean hospitality.',
  keywords: ['Zimbabwe accommodation', 'lodge', 'hotel', 'Harris Lodges', 'hospitality'],
  authors: [{ name: 'Harris Lodges' }],
  creator: 'Harris Lodges',
  publisher: 'Harris Lodges',
  robots: {
    index: process.env.NODE_ENV === 'production',
    follow: process.env.NODE_ENV === 'production',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://harrislodges.com',
    siteName: 'Harris Lodges',
    title: 'Harris Lodges - Premium Accommodation in Zimbabwe',
    description: 'Experience luxury accommodation at Harris Lodges, Zimbabwe.',
    images: [
      {
        url: '/images/lodge-exterior.jpg',
        width: 1200,
        height: 630,
        alt: 'Harris Lodges Exterior',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Harris Lodges - Premium Accommodation in Zimbabwe',
    description: 'Experience luxury accommodation at Harris Lodges, Zimbabwe.',
    images: ['/images/lodge-exterior.jpg'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://harrislodges.com" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={inter.className}>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}