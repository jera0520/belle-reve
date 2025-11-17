import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const locales = ['ko', 'ja', 'en-US', 'fr'];
  const baseUrl = 'https://belle-reve.vercel.app';
  
  const routes = ['', '/editions/japan', '/community'];
  
  return locales.flatMap((locale) =>
    routes.map((route) => ({
      url: `${baseUrl}/${locale}${route}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: route === '' ? 1 : 0.8,
    }))
  );
}
