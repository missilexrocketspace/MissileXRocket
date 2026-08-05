import type { Metadata } from 'next';
import SpaceSystemsPageContent from '@/components/space-systems/SpaceSystemsPageContent';

export const metadata: Metadata = {
  title: 'Space Systems',
  description: "An educational overview of major Indian space missions — the launch vehicles that carried them, their scientific objectives, and current status.",
  alternates: { canonical: '/space-systems' },
  openGraph: { title: 'Space Systems', description: "Mission timeline for India's flagship space programs.", url: '/space-systems' }
};

export default function SpaceSystemsPage() {
  return <SpaceSystemsPageContent />;
}
