'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useTranslation } from 'react-i18next';
import { useAuth } from '@/components/auth/AuthContext';
import { diagnoseAuthError } from '@/lib/auth-errors';
import { Mail, Lock, ShieldCheck, ArrowRight } from 'lucide-react';

type LoginFormValues = { email: string; password: string };

export default function LoginPanel() {
  const router = useRouter();
  const { signIn, signInWithGoogle } = useAuth();
  const { t } = useTranslation(['auth', 'forms']);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<LoginFormValues>({
    resolver: zodResolver(
      z.object({
        email: z.string().email(t('forms:validation.emailRequired')),
        password: z.string().min(8, t('forms:validation.passwordMin'))
      })
    )
  });

  const onSubmit = async (values: LoginFormValues) => {
    setError(null);
    setLoading(true);

    try {
      await signIn(values.email, values.password);
      router.push('/');
    } catch (error: any) {
      console.error('========== EMAIL/PASSWORD AUTH ERROR ==========');
      console.error('Error:', error);
      console.error('Code:', error.code);
      console.error('Message:', error.message);
      console.error('Stack:', error.stack);
      console.error('================================================');
      setError(t('forms:status.loginError'));
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSignIn = async () => {
    setError(null);
    setLoading(true);

    try {
      await signInWithGoogle();
      router.push('/');
    } catch (error: any) {
      console.error('========== GOOGLE AUTH ERROR ==========');
      console.error('Error:', error);
      console.error('Code:', error.code);
      console.error('Message:', error.message);
      console.error('Stack:', error.stack);
      console.error('======================================');

      const diagnosis = diagnoseAuthError(error);
      console.error('[Auth] Diagnosis:', diagnosis);
      setError(`${diagnosis.friendlyMessage} (${diagnosis.code})`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mx-auto w-full max-w-3xl border border-line bg-white p-8">
      <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div className="space-y-4">
          <p className="text-sm font-semibold uppercase tracking-[0.32em] text-isroBlue">{t('login.panelEyebrow')}</p>
          <h2 className="text-4xl font-semibold text-charcoal">{t('login.panelTitle')}</h2>
          <p className="max-w-xl text-sm leading-7 text-steel">{t('login.panelDescription')}</p>
        </div>
        <div className="rounded border border-isroBlue/15 bg-isroBlue/5 p-6">
          <div className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.32em] text-isroBlue">
            <ShieldCheck className="h-5 w-5" /> {t('login.secureAuth')}
          </div>
          <p className="mt-3 text-sm leading-7 text-steel">{t('login.secureAuthDesc')}</p>
        </div>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="mt-10 space-y-5">
        <label className="space-y-2 text-sm text-steel">
          <span className="flex items-center gap-2"><Mail className="h-4 w-4" /> {t('forms:fields.email')}</span>
          <input type="email" {...register('email')} className="w-full rounded border border-line bg-mist px-4 py-3 text-sm text-charcoal outline-none transition focus:border-isroBlue" />
          <p className="text-xs text-red-600">{errors.email?.message}</p>
        </label>

        <label className="space-y-2 text-sm text-steel">
          <span className="flex items-center gap-2"><Lock className="h-4 w-4" /> {t('forms:fields.password')}</span>
          <input type="password" {...register('password')} className="w-full rounded border border-line bg-mist px-4 py-3 text-sm text-charcoal outline-none transition focus:border-isroBlue" />
          <p className="text-xs text-red-600">{errors.password?.message}</p>
        </label>

        {error && <p className="rounded border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">{error}</p>}

        <button type="submit" disabled={loading} className="inline-flex w-full items-center justify-center rounded bg-isroBlue px-6 py-3 text-sm font-semibold text-white transition hover:bg-isroBlueDark disabled:cursor-not-allowed disabled:opacity-70">
          {loading ? t('forms:buttons.signingIn') : t('forms:buttons.signIn')}
        </button>

        <button type="button" onClick={handleGoogleSignIn} disabled={loading} className="inline-flex w-full items-center justify-center rounded border border-line bg-white px-6 py-3 text-sm font-semibold text-charcoal transition hover:border-isroBlue/40 hover:bg-mist">
          {loading ? t('forms:buttons.processing') : t('forms:buttons.signInWithGoogle')}
        </button>

        <div className="flex flex-col gap-3 text-sm text-steel sm:flex-row sm:items-center sm:justify-between">
          <Link href="/forgot-password" className="transition hover:text-isroBlue">{t('login.forgotPassword')}</Link>
          <Link href="/register" className="inline-flex items-center gap-2 text-isroBlue transition hover:text-isroBlueDark">
            {t('login.createAccount')} <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </form>
    </div>
  );
}
