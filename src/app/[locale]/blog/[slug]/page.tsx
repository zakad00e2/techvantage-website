/**
 * Dynamic Blog Article Page
 * Full article view with content, author info, and related posts.
 */
import React from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { Section, Badge, Card } from '@/components/ui';
import { getArticles, getArticleBySlug } from '@/content/articles';
import { notFound } from 'next/navigation';
import type { Locale } from '@/config/site';
import type { Metadata } from 'next';

/**
 * Generate static paths for all articles.
 */
export function generateStaticParams() {
  const articles = getArticles();
  const locales = ['ar', 'en'];
  return locales.flatMap((locale) => 
    articles.map((article) => ({
      locale,
      slug: article.slug
    }))
  );
}

/**
 * Dynamic metadata for SEO.
 */
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string; locale: string }>;
}): Promise<Metadata> {
  const { slug, locale } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return {};
  const loc = locale as Locale;
  return {
    title: article.title[loc],
    description: article.excerpt[loc],
    openGraph: {
      type: 'article',
      title: article.title[loc],
      description: article.excerpt[loc],
      publishedTime: article.date,
      authors: [article.author],
    },
  };
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) notFound();

  return <ArticlePageContent article={article} />;
}

function ArticlePageContent({ article }: { article: NonNullable<ReturnType<typeof getArticleBySlug>> }) {
  const t = useTranslations('blog');
  const locale = useLocale() as Locale;
  const relatedArticles = getArticles().filter((a) => a.slug !== article.slug).slice(0, 2);

  return (
    <>
      {/* Article Header */}
      <section className="bg-gradient-to-br from-primary-950 to-primary-800 text-white py-16 md:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Link
            href="/blog"
            className="flex items-center text-white/70 hover:text-white text-sm mb-6 transition-colors w-fit"
          >
            <svg className="w-4 h-4 me-1 rtl:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            {t('backToBlog')}
          </Link>
          <Badge variant="secondary" className="mb-4">{article.category[locale]}</Badge>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight">
            {article.title[locale]}
          </h1>
          <div className="mt-6 flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center text-white font-bold">
              {article.author.split(' ').map(n => n[0]).join('')}
            </div>
            <div>
              <p className="font-semibold">{article.author}</p>
              <p className="text-white/60 text-sm">
                {article.authorRole[locale]} · {article.date} · {article.readTime} {t('readTime')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <Section background="white" padding="md">
        <div className="max-w-4xl mx-auto">
          <div
            className="prose max-w-none"
            dangerouslySetInnerHTML={{ __html: article.content[locale] }}
          />
        </div>
      </Section>

      {/* Related Articles */}
      {relatedArticles.length > 0 && (
        <Section background="light" padding="md">
          <h2 className="text-2xl font-bold text-neutral-900 mb-8 text-center">
            {locale === 'ar' ? 'مقالات ذات صلة' : 'Related Articles'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {relatedArticles.map((related) => (
              <Link key={related.slug} href={`/blog/${related.slug}`}>
                <Card hover padding="lg" className="h-full group">
                  <Badge className="mb-3">{related.category[locale]}</Badge>
                  <h3 className="text-lg font-bold text-neutral-900 group-hover:text-primary-600 transition-colors">
                    {related.title[locale]}
                  </h3>
                  <p className="mt-2 text-neutral-600 text-sm line-clamp-2">
                    {related.excerpt[locale]}
                  </p>
                </Card>
              </Link>
            ))}
          </div>
        </Section>
      )}
    </>
  );
}
