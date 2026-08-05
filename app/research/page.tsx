import type { Metadata } from 'next';
import ResearchPageContent from '@/components/research/ResearchPageContent';

export const metadata: Metadata = {
  title: 'Research',
  description: 'Submit research proposals, reference published findings, and collaborate with mission teams in a secure environment built for national research programs.',
  alternates: { canonical: '/research' },
  openGraph: { title: 'Research Portal', description: 'The research portal for next-generation aerospace and defence systems.', url: '/research' }
};

export default function ResearchPage() {
  return <ResearchPageContent />;
}
