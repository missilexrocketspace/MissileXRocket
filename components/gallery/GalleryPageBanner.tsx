'use client';

import { useTranslation } from 'react-i18next';
import PageBanner from '@/components/patterns/PageBanner';

export default function GalleryPageBanner() {
  const { t } = useTranslation('pages');
  return <PageBanner eyebrow={t('gallery.eyebrow')} title={t('gallery.title')} description={t('gallery.description')} />;
}
