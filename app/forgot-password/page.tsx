import type { Metadata } from 'next';
import ForgotPasswordPageContent from '@/components/login/ForgotPasswordPageContent';

export const metadata: Metadata = {
  title: 'Forgot Password',
  description: 'Use your registered email to receive a secure password reset message.',
  alternates: { canonical: '/forgot-password' },
  robots: { index: false, follow: true }
};

export default function ForgotPasswordPage() {
  return <ForgotPasswordPageContent />;
}
