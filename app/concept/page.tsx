import type { Metadata } from 'next';
import ConceptPageContent from '@/components/concept/ConceptPageContent';

export const metadata: Metadata = {
  title: 'Concept',
  description: 'A conceptual research proposal exploring how advances in AI, aerospace engineering, and sensing systems could be studied together as a unified defence research concept.',
  alternates: { canonical: '/concept' },
  openGraph: { title: 'MissileX Integrated Defence Platform', description: 'A futuristic, high-level research concept.', url: '/concept' }
};

export default function ConceptPage() {
  return <ConceptPageContent />;
}
