import type { Metadata } from 'next'
import { JetBrains_Mono, Syne } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const jetbrainsMono = JetBrains_Mono({
  variable: '--font-jetbrains',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
})

const syne = Syne({
  variable: '--font-syne',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'Samuel Nwankwo — Backend Engineer',
    template: '%s · Samuel Nwankwo',
  },
  description:
    'Backend Engineer specializing in Node.js, PHP, Laravel, NestJS, and cloud infrastructure. Building scalable APIs and distributed systems.',
  keywords: ['Samuel Nwankwo', 'Backend Engineer', 'Node.js', 'PHP', 'Laravel', 'NestJS', 'AWS'],
  openGraph: {
    title: 'Samuel Nwankwo — Backend Engineer',
    description: 'Backend Engineer specializing in Node.js, PHP, Laravel, and Cloud infrastructure.',
    url: 'https://saminwankwo.github.io',
    siteName: 'Samuel Nwankwo',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Samuel Nwankwo — Backend Engineer',
    description: 'Backend Engineer specializing in Node.js, PHP, Laravel, and Cloud infrastructure.',
  },
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${jetbrainsMono.variable} ${syne.variable}`}>
      <body>
        <Header />
        <main className="pt-14">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
