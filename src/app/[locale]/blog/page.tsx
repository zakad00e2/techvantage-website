/**
 * Blog Index Page
 * Lists all articles with categories and search.
 */
import React from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { Section, SectionHeader, Card, Badge, Icon } from '@/components/ui';
import { getArticles } from '@/content/articles';
import type { Locale } from '@/config/site';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog & Insights',
};

export default function BlogPage() {
  const t = useTranslations('blog');
  const locale = useLocale() as Locale;
  const articles = getArticles();

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-950 to-primary-800 text-white py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold">{t('title')}</h1>
          <p className="mt-4 text-lg md:text-xl text-white/80 max-w-2xl mx-auto">
            {t('subtitle')}
          </p>
        </div>
      </section>

      {/* Articles Grid */}
      <Section background="white" padding="lg">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article) => (
            <Link key={article.slug} href={`/blog/${article.slug}`}>
              <Card hover padding="none" className="h-full group overflow-hidden">
                <div className="h-48 bg-gradient-to-br from-primary-100 to-primary-200 flex items-center justify-center">
                  <Icon name="file-text" size={56} className="opacity-50 text-primary-600" />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Badge>{article.category[locale]}</Badge>
                    <span className="text-xs text-neutral-500">
                      {article.readTime} {t('readTime')}
                    </span>
                  </div>
                  <h2 className="text-lg font-bold text-neutral-900 group-hover:text-primary-600 transition-colors line-clamp-2">
                    {article.title[locale]}
                  </h2>
                  <p className="mt-2 text-neutral-600 text-sm line-clamp-3">
                    {article.excerpt[locale]}
                  </p>
                  <div className="mt-4 flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary-100 flex items-center justify-center text-primary-700 font-bold text-xs">
                      {article.author.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <p className="text-sm font-medium text-neutral-900">{article.author}</p>
                      <p className="text-xs text-neutral-500">{article.date}</p>
                    </div>
                  </div>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </Section>
    </>
  );
}
