import type { Metadata } from 'next';
import ContactSection, { ContactPageBanner } from '@/components/contact/ContactSection';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Submit your research interest, program inquiry, or collaboration request to the MissileX research leadership team.',
  alternates: { canonical: '/contact' },
  openGraph: { title: 'Contact', description: 'Connect with the research leadership team.', url: '/contact' }
};

export default function ContactPage() {
  return (
    <main className="bg-white">
      <ContactPageBanner />
      <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 xl:px-12">
        <ContactSection />
      </div>
    </main>
  );
}
