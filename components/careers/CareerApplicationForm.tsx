'use client';

import { useState } from 'react';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { UploadCloud } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { careerData } from '@/lib/site-data';

type ApplicationFormValues = { name: string; email: string; phone: string; position: string; coverNote: string };

export default function CareerApplicationForm() {
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
        position: z.string().min(1, t('validation.positionRequired')),
        coverNote: z.string().min(20, t('validation.coverNoteMin'))
      })
    )
  });

  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [resume, setResume] = useState<File | null>(null);

  const onSubmit = async (data: ApplicationFormValues) => {
    setStatus('idle');
    try {
      const payload = new FormData();
      Object.entries(data).forEach(([key, value]) => payload.append(key, value));
      if (resume) payload.append('resume', resume);

      const response = await fetch('/api/careers-apply', { method: 'POST', body: payload });
      if (!response.ok) throw new Error('Application failed');
      setStatus('success');
      reset();
      setResume(null);
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
          <span className="text-steel">{t('fields.position')}</span>
          <select {...register('position')} defaultValue="" className="w-full rounded border border-line bg-mist px-4 py-3 text-sm text-charcoal outline-none transition focus:border-isroBlue">
            <option value="" disabled>{t('placeholders.selectPosition')}</option>
            {careerData.map((position) => (
              <option key={position.title} value={position.title}>{position.title}</option>
            ))}
            <option value="Internship">Internship</option>
          </select>
          <p className="text-xs text-red-600">{errors.position?.message}</p>
        </label>
      </div>

      <label className="space-y-2 text-sm">
        <span className="text-steel">{t('fields.coverNote')}</span>
        <textarea {...register('coverNote')} rows={4} className="w-full rounded border border-line bg-mist px-4 py-3 text-sm text-charcoal outline-none transition focus:border-isroBlue" />
        <p className="text-xs text-red-600">{errors.coverNote?.message}</p>
      </label>

      <label className="block space-y-2 text-sm">
        <span className="text-steel">{t('fields.resume')}</span>
        <div className="flex items-center gap-3 rounded border border-dashed border-line bg-mist px-4 py-4">
          <UploadCloud className="h-5 w-5 shrink-0 text-isroBlue" />
          <input
            type="file"
            accept=".pdf"
            onChange={(event) => setResume(event.target.files?.[0] ?? null)}
            className="w-full text-sm text-steel file:mr-4 file:rounded file:border-0 file:bg-isroBlue file:px-4 file:py-2 file:text-sm file:font-semibold file:text-white"
          />
        </div>
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
          {t('status.applicationSuccessCareer')}
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
