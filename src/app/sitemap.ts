/**
 * Auto-generated sitemap.xml
 * Covers all locale routes and dynamic pages.
 */
import type { MetadataRoute } from 'next';
import { getServices } from '@/content/services';
import { getArticles } from '@/content/articles';
import { siteConfig } from '@/config/site';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url;
  const locales = ['en', 'ar'];

  const staticRoutes = ['', '/services', '/legal', '/legal/product', '/blog', '/about', '/contact', '/privacy'];

  const staticPages = locales.flatMap((locale) =>
    staticRoutes.map((route) => ({
      url: `${baseUrl}/${locale}${route}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: route === '' ? 1 : 0.8,
      alternates: {
        languages: {
          en: `${baseUrl}/en${route}`,
          ar: `${baseUrl}/ar${route}`,
        },
      },
    }))
  );

  const servicePages = locales.flatMap((locale) =>
    getServices().map((service) => ({
      url: `${baseUrl}/${locale}/services/${service.slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
      alternates: {
        languages: {
          en: `${baseUrl}/en/services/${service.slug}`,
          ar: `${baseUrl}/ar/services/${service.slug}`,
        },
      },
    }))
  );

  const articlePages = locales.flatMap((locale) =>
    getArticles().map((article) => ({
      url: `${baseUrl}/${locale}/blog/${article.slug}`,
      lastModified: new Date(article.date),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
      alternates: {
        languages: {
          en: `${baseUrl}/en/blog/${article.slug}`,
          ar: `${baseUrl}/ar/blog/${article.slug}`,
        },
      },
    }))
  );

  return [...staticPages, ...servicePages, ...articlePages];
}
