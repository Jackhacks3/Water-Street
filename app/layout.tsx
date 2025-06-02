import type { Metadata } from 'next'
import './globals.css'
import { Toaster } from 'react-hot-toast'

export const metadata: Metadata = {
  title: 'Water Street Seafood - Fresh Gulf Coast Seafood | From Boat to You in One Day',
  description: 'Florida Panhandle\'s largest seafood distributor. Fresh and frozen seafood, custom cuts, freight shipping across US/Canada. Direct from fishing boats in Apalachicola, Florida.',
  keywords: 'fresh seafood, Florida seafood, Gulf Coast seafood, seafood distributor, Apalachicola seafood, restaurant seafood supplier',
  authors: [{ name: 'Water Street Seafood' }],
  creator: 'Water Street Seafood',
  publisher: 'Water Street Seafood',
  openGraph: {
    title: 'Water Street Seafood - Fresh Gulf Coast Seafood',
    description: 'From Boat to You in One Day - Premium fresh seafood from the Gulf of Mexico',
    url: 'https://waterstreetseafood.com',
    siteName: 'Water Street Seafood',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Water Street Seafood - Fresh Gulf Coast Seafood',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Water Street Seafood - Fresh Gulf Coast Seafood',
    description: 'From Boat to You in One Day - Premium fresh seafood from the Gulf of Mexico',
    images: ['/og-image.jpg'],
  },
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-screen bg-gray-50 antialiased">
        {children}
        <Toaster 
          position="top-right"
          toastOptions={{
            duration: 4000,
            style: {
              background: '#0ea5e9',
              color: '#fff',
            },
          }}
        />
      </body>
    </html>
  )
} 