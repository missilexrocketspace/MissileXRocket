import type { Metadata } from 'next';
import ProfilePageContent from '@/components/profile/ProfilePageContent';

export const metadata: Metadata = {
  title: 'Profile',
  description: 'Manage your MissileX account profile, verification status, and saved research projects.',
  alternates: { canonical: '/profile' },
  robots: { index: false, follow: false }
};

export default function ProfilePage() {
  return <ProfilePageContent />;
}
