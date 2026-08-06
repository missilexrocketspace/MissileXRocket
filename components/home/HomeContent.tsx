'use client';

import { useTranslation } from 'react-i18next';
import HeroSection from '@/components/hero/HeroSection';
import NoticeBoard from '@/components/patterns/NoticeBoard';
import LatestNews from '@/components/home/LatestNews';
import MissionHighlights from '@/components/home/MissionHighlights';
import HomeGallery from '@/components/home/HomeGallery';
import ResearchTimelineSection from '@/components/home/ResearchTimelineSection';
import AchievementsList from '@/components/home/AchievementsList';
import ProgramsList from '@/components/home/ProgramsList';

export default function HomeContent() {
  const { t } = useTranslation('home');

  const notices = [
    { date: '28 Jul 2026', text: t('announcements.item1') },
    { date: '14 Jul 2026', text: t('announcements.item2') },
    { date: '02 Jul 2026', text: t('announcements.item3') }
  ];

  return (
    <main className="bg-white">
      <HeroSection />
      <div className="mx-auto max-w-7xl px-6 pt-10 sm:px-8 xl:px-12">
        <NoticeBoard notices={notices} label={t('announcements.label')} />
      </div>
      <LatestNews />
      <MissionHighlights />
      <HomeGallery />
      <ResearchTimelineSection />
      <AchievementsList />
      <ProgramsList />
    </main>
  );
}
