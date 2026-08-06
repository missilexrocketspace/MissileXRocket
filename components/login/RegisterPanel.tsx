'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useTranslation } from 'react-i18next';
import { useAuth } from '@/components/auth/AuthContext';
import { UserPlus, Mail, Lock } from 'lucide-react';

type RegisterFormValues = { email: string; password: string };

export default function RegisterPanel() {
  const router = useRouter();
  const { signUp } = useAuth();
  const { t } = useTranslation(['auth', 'forms']);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<RegisterFormValues>({
    resolver: zodResolver(
      z.object({
        email: z.string().email(t('forms:validation.emailRequired')),
        password: z.string().min(8, t('forms:validation.passwordMin'))
      })
    )
  });

  const onSubmit = async (values: RegisterFormValues) => {
    setStatus('idle');
    setLoading(true);

    try {
      await signUp(values.email, values.password);
      setStatus('success');
      setTimeout(() => router.push('/login'), 900);
    } catch (err) {
      setStatus('error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mx-auto w-full max-w-3xl border border-line bg-white p-8">
      <div className="space-y-4">
        <p className="text-sm font-semibold uppercase tracking-[0.32em] text-isroBlue">{t('register.panelEyebrow')}</p>
        <h2 className="text-4xl font-semibold text-charcoal">{t('register.panelTitle')}</h2>
        <p className="max-w-xl text-sm leading-7 text-steel">{t('register.panelDescription')}</p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="mt-10 space-y-5">
        <label className="space-y-2 text-sm text-steel">
          <span className="flex items-center gap-2"><Mail className="h-4 w-4" /> {t('forms:fields.officialEmail')}</span>
          <input type="email" {...register('email')} className="w-full rounded border border-line bg-mist px-4 py-3 text-sm text-charcoal outline-none transition focus:border-isroBlue" />
          <p className="text-xs text-red-600">{errors.email?.message}</p>
        </label>

        <label className="space-y-2 text-sm text-steel">
          <span className="flex items-center gap-2"><Lock className="h-4 w-4" /> {t('forms:fields.password')}</span>
          <input type="password" {...register('password')} className="w-full rounded border border-line bg-mist px-4 py-3 text-sm text-charcoal outline-none transition focus:border-isroBlue" />
          <p className="text-xs text-red-600">{errors.password?.message}</p>
        </label>

        <button type="submit" disabled={loading} className="inline-flex w-full items-center justify-center gap-2 rounded bg-isroBlue px-6 py-3 text-sm font-semibold text-white transition hover:bg-isroBlueDark disabled:cursor-not-allowed disabled:opacity-70">
          <UserPlus className="h-4 w-4" />
          {loading ? t('forms:buttons.creatingAccount') : t('forms:buttons.register')}
        </button>

        {status === 'success' && (
          <p className="rounded border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-700">{t('forms:status.registerSuccess')}</p>
        )}
        {status === 'error' && (
          <p className="rounded border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">{t('forms:status.registerError')}</p>
        )}

        <p className="text-sm text-steel">
          {t('register.alreadyRegistered')}{' '}
          <Link href="/login" className="text-isroBlue transition hover:text-isroBlueDark">{t('register.signInHere')}</Link>
        </p>
      </form>
    </div>
  );
}
