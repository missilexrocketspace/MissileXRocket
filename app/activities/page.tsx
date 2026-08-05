import type { Metadata } from 'next';
import ActivitiesPageContent from '@/components/activities/ActivitiesPageContent';

export const metadata: Metadata = {
  title: 'Activities',
  description: 'Discover the active workstreams driving MissileX research, from launch systems to AI defence concepts and gallery insights.',
  alternates: { canonical: '/activities' },
  openGraph: { title: 'Activities', description: 'Active research streams and mission capability programs.', url: '/activities' }
};

export default function ActivitiesPage() {
  return <ActivitiesPageContent />;
}
