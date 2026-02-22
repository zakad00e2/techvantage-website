/**
 * Dynamic Single Service Page
 * Template for individual service detail pages.
 */
import React from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { Section, SectionHeader, Card, Button, Icon } from '@/components/ui';
import { getServices, getServiceBySlug } from '@/content/services';
import { notFound } from 'next/navigation';
import type { Locale } from '@/config/site';
import type { Metadata } from 'next';

/**
 * Generate static paths for all services.
 */
export function generateStaticParams() {
  const services = getServices();
  const locales = ['ar', 'en'];
  return locales.flatMap((locale) =>
    services.map((service) => ({
      locale,
      slug: service.slug
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
  const service = getServiceBySlug(slug);
  if (!service) return {};
  const loc = locale as Locale;
  return {
    title: service.title[loc],
    description: service.shortDescription[loc],
  };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  return <ServicePageContent service={service} />;
}

function ServicePageContent({ service }: { service: NonNullable<ReturnType<typeof getServiceBySlug>> }) {
  const t = useTranslations('services');
  const tn = useTranslations('nav');
  const locale = useLocale() as Locale;
  const allServices = getServices().filter((s) => s.slug !== service.slug);

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-950 to-primary-800 text-white py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Link
            href="/services"
            className="inline-flex items-center text-white/70 hover:text-white text-sm mb-6 transition-colors"
          >
            <svg className="w-4 h-4 me-1 rtl:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            {t('allServices')}
          </Link>
          <div className="flex items-start gap-6">
            <Icon name={service.icon} size={56} className="text-white/80 hidden md:block" />
            <div>
              <h1 className="text-4xl md:text-5xl font-extrabold">{service.title[locale]}</h1>
              <p className="mt-4 text-lg text-white/80 max-w-2xl">
                {service.shortDescription[locale]}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Details */}
      <Section background="white" padding="lg">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold text-neutral-900 mb-4">
              {locale === 'ar' ? 'نظرة عامة' : 'Overview'}
            </h2>
            <p className="text-neutral-700 leading-relaxed text-lg">
              {service.longDescription[locale]}
            </p>

            {/* Features List */}
            <h3 className="text-xl font-bold text-neutral-900 mt-10 mb-6">
              {locale === 'ar' ? 'ما نقدمه' : 'What We Deliver'}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {service.features[locale].map((feature) => (
                <div key={feature} className="flex items-start gap-3 p-4 rounded-xl bg-neutral-50">
                  <svg className="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-neutral-700 font-medium">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div>
            <Card padding="lg" className="sticky top-28 bg-primary-50 border-primary-200">
              <h3 className="text-lg font-bold text-neutral-900 mb-4">
                {locale === 'ar' ? 'ابدأ مشروعك' : 'Start Your Project'}
              </h3>
              <p className="text-neutral-600 text-sm mb-6">
                {locale === 'ar'
                  ? 'تحدث مع خبرائنا حول كيف يمكننا مساعدتك في تحقيق أهدافك.'
                  : 'Talk to our experts about how we can help achieve your goals.'}
              </p>
              <Link href="/contact">
                <Button fullWidth size="lg">{tn('getStarted')}</Button>
              </Link>
            </Card>
          </div>
        </div>
      </Section>

      {/* Related Services */}
      <Section background="light" padding="md">
        <SectionHeader title={t('relatedServices')} />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {allServices.slice(0, 3).map((s) => (
            <Link key={s.slug} href={`/services/${s.slug}`}>
              <Card hover padding="lg" className="h-full group">
                <Icon name={s.icon} size={32} className="text-primary-600 mb-3" />
                <h3 className="text-lg font-bold text-neutral-900 group-hover:text-primary-600 transition-colors">
                  {s.title[locale]}
                </h3>
                <p className="mt-2 text-neutral-600 text-sm line-clamp-2">
                  {s.shortDescription[locale]}
                </p>
              </Card>
            </Link>
          ))}
        </div>
      </Section>
    </>
  );
}
