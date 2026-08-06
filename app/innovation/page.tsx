import type { Metadata } from 'next';
import InnovationPageContent from '@/components/innovation/InnovationPageContent';

export const metadata: Metadata = {
  title: 'Innovation',
  description: 'MissileX runs structured innovation tracks that pair student and researcher ideas with mentorship, lab access, and rigorous review.',
  alternates: { canonical: '/innovation' },
  openGraph: { title: 'Innovation', description: "Where early-stage research becomes tomorrow's aerospace technology.", url: '/innovation' }
};

export default function InnovationPage() {
  return <InnovationPageContent />;
}
