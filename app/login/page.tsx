import type { Metadata } from 'next';
import LoginPageContent from '@/components/login/LoginPageContent';

export const metadata: Metadata = {
  title: 'Login',
  description: 'Sign in securely to manage submissions, view program details, and access the MissileX analytics network.',
  alternates: { canonical: '/login' },
  robots: { index: false, follow: true }
};

export default function LoginPage() {
  return <LoginPageContent />;
}
