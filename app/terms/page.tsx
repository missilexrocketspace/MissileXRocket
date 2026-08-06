import type { Metadata } from 'next';
import TermsPageContent from '@/components/legal/TermsPageContent';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Terms for using the MissileX research platform.',
  alternates: { canonical: '/terms' }
};

export default function TermsPage() {
  return <TermsPageContent />;
}
