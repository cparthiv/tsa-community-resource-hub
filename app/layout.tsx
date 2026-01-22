import type { Metadata } from 'next'
import { Inter, Poppins, DM_Sans, Playfair_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter',
  display: 'swap',
});

const poppins = Poppins({ 
  subsets: ["latin"],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-poppins',
  display: 'swap',
});

const dmSans = DM_Sans({ 
  subsets: ["latin"],
  weight: ['400', '500', '700'],
  variable: '--font-dm-sans',
  display: 'swap',
});

const playfairDisplay = Playfair_Display({ 
  subsets: ["latin"],
  weight: ['400', '700', '900'],
  variable: '--font-playfair',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Redmond Community Resource Hub',
  description: 'Find local resources, support services, and community programs in Redmond, Washington',
  icons: {
    icon: [
      {
        url: '/placeholder-logo.svg',
        type: 'image/svg+xml',
      },
      {
        url: '/placeholder-logo.png',
      },
    ],
    apple: '/placeholder-logo.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${poppins.variable} ${dmSans.variable} ${playfairDisplay.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
