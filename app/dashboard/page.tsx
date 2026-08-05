import type { Metadata } from 'next';
import DashboardPageContent from '@/components/dashboard/DashboardPageContent';

export const metadata: Metadata = {
  title: 'Dashboard',
  description: 'Secure operations dashboard for MissileX researchers and administrators.',
  alternates: { canonical: '/dashboard' },
  robots: { index: false, follow: false }
};

export default function DashboardPage() {
  return <DashboardPageContent />;
}
