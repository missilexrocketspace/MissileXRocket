import type { Metadata, Viewport } from 'next';
import './globals.css';
import { Analytics } from '@vercel/analytics/next';

export const metadata: Metadata = {
  title: {
    default: 'MissileX Rocket Space | Intelligent Missile & Space Technologies',
    template: '%s | MissileX Rocket Space'
  },
  description: 'A premium defence and aerospace research portal for next-generation missile and space technologies, offered in English and Hindi.',
  metadataBase: new URL('https://missilex-rocket-space.vercel.app'),
  robots: { index: true, follow: true },
  openGraph: {
    siteName: 'MissileX Rocket Space',
    title: 'MissileX Rocket Space',
    description: 'A premium defence and aerospace research portal for next-generation missile and space technologies.',
    type: 'website',
    locale: 'en_IN'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MissileX Rocket Space',
    description: 'A premium defence and aerospace research portal for next-generation missile and space technologies.'
  }
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0A4D8C'
};

import RootProvider from '@/components/RootProvider';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="min-h-screen bg-white text-charcoal">
          <RootProvider>{children}</RootProvider>
        </div>
        <Analytics />
      </body>
    </html>
  );
}
