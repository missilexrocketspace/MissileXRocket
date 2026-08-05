'use client';

import { useState } from 'react';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { UploadCloud } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const patentOptions = ['Not Filed', 'Filed', 'Granted'] as const;

type ResearchFormValues = {
  name: string;
  email: string;
  phone: string;
  projectTitle: string;
  description: string;
  technology: string;
  githubUrl?: string;
  patentStatus: (typeof patentOptions)[number];
};

export default function ResearchSubmissionForm() {
  const { t } = useTranslation('forms');
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting }
  } = useForm<ResearchFormValues>({
    resolver: zodResolver(
      z.object({
        name: z.string().min(2, t('validation.nameRequired')),
        email: z.string().email(t('validation.emailRequired')),
        phone: z.string().min(10, t('validation.phoneRequired')),
        projectTitle: z.string().min(3, t('validation.titleRequired')),
        description: z.string().min(30, t('validation.descriptionMin')),
        technology: z.string().min(2, t('validation.technologyRequired')),
        githubUrl: z.string().url(t('validation.urlInvalid')).optional().or(z.literal('')),
        patentStatus: z.enum(patentOptions)
      })
    ),
    defaultValues: { patentStatus: 'Not Filed' }
  });

  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [files, setFiles] = useState<FileList | null>(null);

  const onSubmit = async (data: ResearchFormValues) => {
    setStatus('idle');

    try {
      const payload = new FormData();
      Object.entries(data).forEach(([key, value]) => payload.append(key, value ?? ''));
      if (files) {
        Array.from(files).forEach((file) => payload.append('files', file));
      }

      const response = await fetch('/api/research-submit', { method: 'POST', body: payload });
      if (!response.ok) throw new Error('Submission failed');

      setStatus('success');
      reset();
      setFiles(null);
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
          <span className="text-steel">{t('fields.projectTitle')}</span>
          <input {...register('projectTitle')} className="w-full rounded border border-line bg-mist px-4 py-3 text-sm text-charcoal outline-none transition focus:border-isroBlue" />
          <p className="text-xs text-red-600">{errors.projectTitle?.message}</p>
        </label>
      </div>

      <label className="space-y-2 text-sm">
        <span className="text-steel">{t('fields.description')}</span>
        <textarea {...register('description')} rows={5} className="w-full rounded border border-line bg-mist px-4 py-3 text-sm text-charcoal outline-none transition focus:border-isroBlue" />
        <p className="text-xs text-red-600">{errors.description?.message}</p>
      </label>

      <div className="grid gap-5 lg:grid-cols-2">
        <label className="space-y-2 text-sm">
          <span className="text-steel">{t('fields.technology')}</span>
          <input {...register('technology')} className="w-full rounded border border-line bg-mist px-4 py-3 text-sm text-charcoal outline-none transition focus:border-isroBlue" />
          <p className="text-xs text-red-600">{errors.technology?.message}</p>
        </label>
        <label className="space-y-2 text-sm">
          <span className="text-steel">{t('fields.githubUrl')}</span>
          <input {...register('githubUrl')} placeholder={t('placeholders.githubUrl')} className="w-full rounded border border-line bg-mist px-4 py-3 text-sm text-charcoal outline-none transition focus:border-isroBlue" />
          <p className="text-xs text-red-600">{errors.githubUrl?.message}</p>
        </label>
      </div>

      <label className="space-y-2 text-sm">
        <span className="text-steel">{t('fields.patentStatus')}</span>
        <select {...register('patentStatus')} className="w-full rounded border border-line bg-mist px-4 py-3 text-sm text-charcoal outline-none transition focus:border-isroBlue">
          {patentOptions.map((option) => (
            <option key={option} value={option}>{option}</option>
          ))}
        </select>
      </label>

      <label className="block space-y-2 text-sm">
        <span className="text-steel">{t('fields.attachments')}</span>
        <div className="flex items-center gap-3 rounded border border-dashed border-line bg-mist px-4 py-4">
          <UploadCloud className="h-5 w-5 shrink-0 text-isroBlue" />
          <input
            type="file"
            multiple
            accept=".pdf,.ppt,.pptx,.png,.jpg,.jpeg,.gif,.mp4,.mov,.zip"
            onChange={(event) => setFiles(event.target.files)}
            className="w-full text-sm text-steel file:mr-4 file:rounded file:border-0 file:bg-isroBlue file:px-4 file:py-2 file:text-sm file:font-semibold file:text-white"
          />
        </div>
        {files && files.length > 0 && (
          <p className="text-xs text-steel">{t('status.filesSelected', { count: files.length })}</p>
        )}
      </label>

      <button
        type="submit"
        disabled={isSubmitting}
        className="inline-flex items-center justify-center rounded bg-signal px-6 py-3 text-sm font-semibold text-white transition hover:bg-signalDark disabled:cursor-not-allowed disabled:opacity-70"
      >
        {isSubmitting ? t('buttons.submitting') : t('buttons.submitProject')}
      </button>

      {status === 'success' && (
        <p className="rounded border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-700">
          {t('status.submissionSuccess')}
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
