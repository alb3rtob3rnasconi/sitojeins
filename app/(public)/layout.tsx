import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import AuthProvider from '@/components/AuthProvider'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import CookieBanner from '@/components/CookieBanner'
import CookiePreferencesButton from '@/components/CookiePreferencesButton'
import StructuredData from '@/components/StructuredData'

const inter = Inter({ subsets: ['latin'] })

// Meta dati ottimizzati per SEO globale con verifica Google Search Console
export const metadata: Metadata = {
  title: {
    default: 'JEIns Consulting | Junior Enterprise Insubria',
    template: '%s | JEIns Consulting'
  },
  description: 'Consulenza strategica, IT e marketing per startup e PMI. La Junior Enterprise dell\'Università dell\'Insubria che unisce accademia e business.',
  keywords: ['Consulenza aziendale', 'Junior Enterprise', 'Varese', 'Insubria', 'Business Plan', 'Digital Marketing', 'Sviluppo Software'],
  authors: [{ name: 'JEIns Consulting' }],
  creator: 'JEIns Consulting',
  publisher: 'JEIns Consulting',
  openGraph: {
    type: 'website',
    locale: 'it_IT',
    url: 'https://www.jeins.it/',
    siteName: 'JEIns Consulting',
    images: [
      {
        url: '/images/logo-jeins.png', 
        width: 1200,
        height: 630,
        alt: 'JEIns Consulting - Junior Enterprise Insubria',
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    google: 'TgZ2_3Wwonrry8E7LILZxS3r5mqGBzEC-F_llfRRXBU',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="it">
      <body className={inter.className}>
        <AuthProvider>
          {/* Dati strutturati per Google */}
          <StructuredData />
          
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <div className="flex-grow">
              {children}
            </div>
            <Footer />
          </div>
          <CookieBanner />
          <CookiePreferencesButton />
        </AuthProvider>
      </body>
    </html>
  )
}