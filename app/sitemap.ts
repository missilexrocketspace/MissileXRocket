import type { MetadataRoute } from 'next';
import { missiles } from '@/lib/missiles';
import { rockets } from '@/lib/rockets';

const baseUrl = 'https://missilex-rocket-space.vercel.app';

const staticRoutes = [
  '',
  '/about',
  '/activities',
  '/research',
  '/technology',
  '/programs',
  '/missiles',
  '/rockets',
  '/space-systems',
  '/innovation',
  '/concept',
  '/gallery',
  '/news',
  '/careers',
  '/contact',
  '/isro-leadership',
  '/apj-abdul-kalam',
  '/login',
  '/register',
  '/forgot-password',
  '/privacy',
  '/terms'
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticEntries: MetadataRoute.Sitemap = staticRoutes.map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: now,
    changeFrequency: path === '' ? 'weekly' : 'monthly',
    priority: path === '' ? 1 : 0.7
  }));

  const missileEntries: MetadataRoute.Sitemap = missiles.map((missile) => ({
    url: `${baseUrl}/missiles/${missile.slug}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.6
  }));

  const rocketEntries: MetadataRoute.Sitemap = rockets.map((rocket) => ({
    url: `${baseUrl}/rockets/${rocket.slug}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.6
  }));

  return [...staticEntries, ...missileEntries, ...rocketEntries];
}
