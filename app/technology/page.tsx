import type { Metadata } from 'next';
import TechnologyPageContent from '@/components/technology/TechnologyPageContent';

export const metadata: Metadata = {
  title: 'Technology',
  description: 'Research concepts in AI mission planning, sensor fusion, satellite analytics, and digital twin architectures — presented at a conceptual level only.',
  alternates: { canonical: '/technology' },
  openGraph: { title: 'Technology', description: 'Conceptual AI defence and aerospace research technologies.', url: '/technology' }
};

export default function TechnologyPage() {
  return <TechnologyPageContent />;
}
