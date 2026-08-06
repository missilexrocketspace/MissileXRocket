import type { Metadata } from 'next';
import RegisterPageContent from '@/components/login/RegisterPageContent';

export const metadata: Metadata = {
  title: 'Register',
  description: 'Register with your organisational email to access collaborative defence research workflows and secure project submission tools.',
  alternates: { canonical: '/register' },
  robots: { index: false, follow: true }
};

export default function RegisterPage() {
  return <RegisterPageContent />;
}
