import type { MetadataRoute } from 'next';

const baseUrl = 'https://missilex-rocket-space.vercel.app';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/dashboard', '/profile', '/api/']
    },
    sitemap: `${baseUrl}/sitemap.xml`
  };
}
