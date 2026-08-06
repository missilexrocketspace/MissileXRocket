'use client';

import { useState } from 'react';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useTranslation } from 'react-i18next';
import { programData } from '@/lib/site-data';

type ApplicationFormValues = { name: string; email: string; phone: string; program: string; motivation: string };

export default function ProgramApplicationForm() {
  const { t } = useTranslation('forms');
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting }
  } = useForm<ApplicationFormValues>({
    resolver: zodResolver(
      z.object({
        name: z.string().min(2, t('validation.nameRequired')),
        email: z.string().email(t('validation.emailRequired')),
        phone: z.string().min(10, t('validation.phoneRequired')),
        program: z.string().min(1, t('validation.programRequired')),
        motivation: z.string().min(30, t('validation.motivationMin'))
      })
    )
  });

  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const onSubmit = async (data: ApplicationFormValues) => {
    setStatus('idle');
    try {
      const response = await fetch('/api/programs-apply', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });
      if (!response.ok) throw new Error('Application failed');
      setStatus('success');
      reset();
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      <div className="grid gap-5 lg:grid-cols-2">
        <label className="space-y-2 text-sm">
          <span className="text-steel">{t('fields.name')}</span>
          <input {...register('name')} className="w-full rounded border border-line bg-mist px-4 py-3 text-sm text-charcoal outline-none transition focus:border-isroBlue" />
          <p className="text-xs text-red-600">{errors.name?.message}</p>
        </label>
        <label className="space-y-2 text-sm">
          <span className="text-steel">{t('fields.email')}</span>
          <input {...register('email')} className="w-full rounded border border-line bg-mist px-4 py-3 text-sm text-charcoal outline-none transition focus:border-isroBlue" />
          <p className="text-xs text-red-600">{errors.email?.message}</p>
        </label>
      </div>

      <div className="grid gap-5 lg:grid-cols-2">
        <label className="space-y-2 text-sm">
          <span className="text-steel">{t('fields.phone')}</span>
          <input {...register('phone')} className="w-full rounded border border-line bg-mist px-4 py-3 text-sm text-charcoal outline-none transition focus:border-isroBlue" />
          <p className="text-xs text-red-600">{errors.phone?.message}</p>
        </label>
        <label className="space-y-2 text-sm">
          <span className="text-steel">{t('fields.program')}</span>
          <select {...register('program')} defaultValue="" className="w-full rounded border border-line bg-mist px-4 py-3 text-sm text-charcoal outline-none transition focus:border-isroBlue">
            <option value="" disabled>{t('placeholders.selectProgram')}</option>
            {programData.map((program) => (
              <option key={program.title} value={program.title}>{program.title}</option>
            ))}
          </select>
          <p className="text-xs text-red-600">{errors.program?.message}</p>
        </label>
      </div>

      <label className="space-y-2 text-sm">
        <span className="text-steel">{t('fields.motivation')}</span>
        <textarea {...register('motivation')} rows={5} className="w-full rounded border border-line bg-mist px-4 py-3 text-sm text-charcoal outline-none transition focus:border-isroBlue" />
        <p className="text-xs text-red-600">{errors.motivation?.message}</p>
      </label>

      <button
        type="submit"
        disabled={isSubmitting}
        className="inline-flex items-center justify-center rounded bg-signal px-6 py-3 text-sm font-semibold text-white transition hover:bg-signalDark disabled:cursor-not-allowed disabled:opacity-70"
      >
        {isSubmitting ? t('buttons.submitting') : t('buttons.submitApplication')}
      </button>

      {status === 'success' && (
        <p className="rounded border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-700">
          {t('status.applicationSuccessProgram')}
        </p>
      )}
      {status === 'error' && (
        <p className="rounded border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
          {t('status.genericError')}
        </p>
      )}
    </form>
  );
}
