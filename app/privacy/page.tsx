import type { Metadata } from 'next';
import PrivacyPageContent from '@/components/legal/PrivacyPageContent';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'MissileX maintains strict controls for user data, research submissions, authentication flows, and email communications.',
  alternates: { canonical: '/privacy' }
};

export default function PrivacyPage() {
  return <PrivacyPageContent />;
}
