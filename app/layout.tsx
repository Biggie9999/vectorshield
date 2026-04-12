import type { Metadata, Viewport } from 'next'
import { Space_Grotesk, Space_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { ThemeProvider } from '@/components/theme-provider'
import './globals.css'

const spaceGrotesk = Space_Grotesk({ 
  subsets: ["latin"],
  variable: '--font-sans',
  display: 'swap',
});

const spaceMono = Space_Mono({ 
  subsets: ["latin"],
  weight: ['400', '700'],
  variable: '--font-mono',
  display: 'swap',
});

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LegalService",
  "name": "VectorShield Recovery",
  "image": "https://vectorshielderecovery.com/icon.svg",
  "description": "Forensic-grade blockchain tracing and legal recovery for crypto fraud victims.",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "184"
  },
  "review": [
    {
      "@type": "Review",
      "author": {
        "@type": "Person",
        "name": "Sarah M."
      },
      "datePublished": "2026-03-15",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5",
        "bestRating": "5"
      },
      "reviewBody": "Thank you Vector Shield Recovery Partners for restoring my smile. Successfully recovered lost retirement funds from a sophisticated investment scam."
    }
  ]
};

export const metadata: Metadata = {
  title: 'VectorShield Recovery | Crypto Fraud Recovery Specialists',
  description: 'Forensic-grade blockchain tracing and legal recovery for crypto fraud victims. $47M+ recovered across 800+ cases in 62 countries.',
  generator: 'v0.app',
  keywords: ['crypto recovery', 'blockchain forensics', 'scam recovery', 'cryptocurrency fraud', 'asset recovery'],
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  themeColor: '#080C12',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${spaceMono.variable}`} suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans antialiased bg-background text-foreground">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
