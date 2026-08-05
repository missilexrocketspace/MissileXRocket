import type { Metadata } from 'next';
import ProgramsPageContent from '@/components/programs/ProgramsPageContent';

export const metadata: Metadata = {
  title: 'Programs',
  description: 'Research fellowship, career-building internship tracks, and concept-driven AI defence labs designed for high-integrity mission systems.',
  alternates: { canonical: '/programs' },
  openGraph: { title: 'Programs', description: 'Strategic programs advancing defence research and aerospace innovation.', url: '/programs' }
};

export default function ProgramsPage() {
  return <ProgramsPageContent />;
}
