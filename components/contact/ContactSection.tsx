'use client';

import { useState } from 'react';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useTranslation } from 'react-i18next';
import PageBanner from '@/components/patterns/PageBanner';

const contactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(10),
  organization: z.string().optional(),
  researchInterest: z.string().min(10),
  message: z.string().min(20)
});

type ContactFormValues = z.infer<typeof contactSchema>;

const inputClass = 'w-full rounded border border-line bg-white px-4 py-2.5 text-sm text-charcoal outline-none transition focus:border-isroBlue';

export function ContactPageBanner() {
  const { t } = useTranslation('pages');
  return <PageBanner eyebrow={t('contact.eyebrow')} title={t('contact.title')} description={t('contact.description')} />;
}

export default function ContactSection() {
  const { t } = useTranslation(['pages', 'forms']);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting }
  } = useForm<ContactFormValues>({
    resolver: zodResolver(
      z.object({
        name: z.string().min(2, t('forms:validation.nameRequired')),
        email: z.string().email(t('forms:validation.emailRequired')),
        phone: z.string().min(10, t('forms:validation.phoneRequired')),
        organization: z.string().optional(),
        researchInterest: z.string().min(10, t('forms:validation.interestRequired')),
        message: z.string().min(20, t('forms:validation.messageRequired'))
      })
    )
  });

  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const onSubmit = async (data: ContactFormValues) => {
    setStatus('idle');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      setStatus('success');
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr]">
      <div className="space-y-6">
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-isroBlue">{t('pages:contact.eyebrow')}</p>
        <p className="max-w-sm text-sm leading-7 text-steel">{t('pages:contact.intro')}</p>
        <dl className="space-y-4 border-t border-line pt-6 text-sm">
          <div>
            <dt className="text-xs font-semibold uppercase tracking-[0.18em] text-steel">{t('pages:contact.emailLabel')}</dt>
            <dd className="mt-1 text-charcoal">admin@missilexspace.in</dd>
          </div>
          <div>
            <dt className="text-xs font-semibold uppercase tracking-[0.18em] text-steel">{t('pages:contact.phoneLabel')}</dt>
            <dd className="mt-1 text-charcoal">+91 22 4000 9000</dd>
          </div>
          <div>
            <dt className="text-xs font-semibold uppercase tracking-[0.18em] text-steel">{t('pages:contact.locationLabel')}</dt>
            <dd className="mt-1 text-charcoal">{t('pages:contact.locationValue')}</dd>
          </div>
        </dl>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        <div className="grid gap-5 lg:grid-cols-2">
          <label className="space-y-2 text-sm">
            <span className="text-steel">{t('forms:fields.name')}</span>
            <input {...register('name')} className={inputClass} />
            <p className="text-xs text-red-600">{errors.name?.message}</p>
          </label>
          <label className="space-y-2 text-sm">
            <span className="text-steel">{t('forms:fields.email')}</span>
            <input {...register('email')} className={inputClass} />
            <p className="text-xs text-red-600">{errors.email?.message}</p>
          </label>
        </div>

        <div className="grid gap-5 lg:grid-cols-2">
          <label className="space-y-2 text-sm">
            <span className="text-steel">{t('forms:fields.phone')}</span>
            <input {...register('phone')} className={inputClass} />
            <p className="text-xs text-red-600">{errors.phone?.message}</p>
          </label>
          <label className="space-y-2 text-sm">
            <span className="text-steel">{t('forms:fields.organization')}</span>
            <input {...register('organization')} className={inputClass} />
          </label>
        </div>

        <label className="space-y-2 text-sm">
          <span className="text-steel">{t('forms:fields.researchInterest')}</span>
          <input {...register('researchInterest')} className={inputClass} />
          <p className="text-xs text-red-600">{errors.researchInterest?.message}</p>
        </label>

        <label className="space-y-2 text-sm">
          <span className="text-steel">{t('forms:fields.message')}</span>
          <textarea {...register('message')} rows={5} className={inputClass} />
          <p className="text-xs text-red-600">{errors.message?.message}</p>
        </label>

        <button type="submit" disabled={isSubmitting} className="inline-flex items-center justify-center rounded bg-isroBlue px-6 py-3 text-sm font-semibold text-white transition hover:bg-isroBlueDark disabled:cursor-not-allowed disabled:opacity-70">
          {isSubmitting ? t('forms:buttons.sending') : t('forms:buttons.sendMessage')}
        </button>
        {status === 'success' && (
          <p className="mt-4 border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-700">
            {t('forms:status.contactSuccess')}
          </p>
        )}
        {status === 'error' && (
          <p className="mt-4 border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
            {t('forms:status.genericError')}
          </p>
        )}
      </form>
    </div>
  );
}
