import type { Metadata } from 'next';
import CareersPageContent from '@/components/careers/CareersPageContent';

export const metadata: Metadata = {
  title: 'Careers',
  description: 'Opportunities in defence research, software engineering, and aerospace systems at MissileX Rocket Space.',
  alternates: { canonical: '/careers' },
  openGraph: { title: 'Careers', description: 'Opportunities in defence research, software engineering, and aerospace systems.', url: '/careers' }
};

export default function CareersPage() {
  return <CareersPageContent />;
}
