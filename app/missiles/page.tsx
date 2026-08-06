import type { Metadata } from 'next';
import MissilesPageContent from '@/components/missiles/MissilesPageContent';

export const metadata: Metadata = {
  title: 'Missile Systems',
  description: 'Overview of key missile categories used in modern defence research, from ballistic deterrence systems to air-to-air and surface-to-air interceptors.',
  alternates: { canonical: '/missiles' },
  openGraph: { title: 'Missile Systems', description: 'Defence missile families with payload, guidance, and mission context.', url: '/missiles' }
};

export default function MissilesPage() {
  return <MissilesPageContent />;
}
