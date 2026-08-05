import type { Metadata } from 'next';
import AboutContent from '@/components/about/AboutContent';

export const metadata: Metadata = {
  title: 'About',
  description: 'MissileX Rocket Space connects researchers, engineers, and mission planners with secure collaboration tools, advanced modelling, and verified analytics.',
  alternates: { canonical: '/about' },
  openGraph: { title: 'About MissileX', description: "A sovereign research platform for defence and space missions.", url: '/about' }
};

export default function AboutPage() {
  return <AboutContent />;
}
