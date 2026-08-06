import type { Metadata } from 'next';
import HomeContent from '@/components/home/HomeContent';

export const metadata: Metadata = {
  description: "A national research portal for advanced aerospace mission design, guided systems, sensor fusion and data analytics — building India's next generation intelligent missile and space technologies.",
  alternates: { canonical: '/' },
  openGraph: {
    title: 'MissileX Rocket Space',
    description: "A national research portal for advanced aerospace mission design, guided systems, sensor fusion and data analytics.",
    url: '/',
    type: 'website'
  }
};

export default function HomePage() {
  return <HomeContent />;
}
