import type { Metadata } from 'next';
import RocketsPageContent from '@/components/rockets/RocketsPageContent';

export const metadata: Metadata = {
  title: 'Rocket Systems',
  description: "An overview of satellite launch vehicles, heavy lift systems, and scientific rocket platforms that support India's next generation aerospace programs.",
  alternates: { canonical: '/rockets' },
  openGraph: { title: 'Rocket Systems', description: 'Launch vehicles and research-oriented payload systems.', url: '/rockets' }
};

export default function RocketsPage() {
  return <RocketsPageContent />;
}
