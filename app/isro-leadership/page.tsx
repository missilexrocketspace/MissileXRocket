import type { Metadata } from 'next';
import IsroLeadershipPageContent from '@/components/isro-leadership/IsroLeadershipPageContent';

export const metadata: Metadata = {
  title: 'ISRO Leadership',
  description: "A high-level, educational overview of leadership roles and administrative guidance in advancing India's space research agenda.",
  alternates: { canonical: '/isro-leadership' },
  openGraph: { title: 'ISRO Leadership', description: "Overview of the leadership supporting India's space research programs.", url: '/isro-leadership' }
};

export default function ISROLeadershipPage() {
  return <IsroLeadershipPageContent />;
}
