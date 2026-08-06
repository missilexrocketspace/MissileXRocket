'use client';

import { useTranslation } from 'react-i18next';
import ImageTextRow from '@/components/patterns/ImageTextRow';
import StatBar from '@/components/patterns/StatBar';
import { galleryImages } from '@/lib/gallery';

const researchLabImage = galleryImages.find((image) => image.slug === 'research-lab')!;

export default function MissionHighlights() {
  const { t } = useTranslation('home');

  const stats = [
    { label: t('mission.stat1Label'), value: '34+' },
    { label: t('mission.stat2Label'), value: '19' },
    { label: t('mission.stat3Label'), value: '12' },
    { label: t('mission.stat4Label'), value: '52' }
  ];

  return (
    <section className="border-t border-line py-16">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 xl:px-12">
        <ImageTextRow
          eyebrow={t('mission.eyebrow')}
          title={t('mission.title')}
          imageSrc={researchLabImage.src}
          imageAlt={t('mission.imageAlt')}
          credit={t('mission.imageCredit')}
        >
          <p>{t('mission.paragraph1')}</p>
          <p>{t('mission.paragraph2')}</p>
        </ImageTextRow>
        <div className="mt-12">
          <StatBar stats={stats} />
        </div>
      </div>
    </section>
  );
}
