/**
 * Services Overview Page
 * Lists all service offerings with filtering and CTA.
 */
import React from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { Section, SectionHeader, Card, Button, Icon } from '@/components/ui';
import { getServices } from '@/content/services';
import type { Locale } from '@/config/site';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Services',
};

export default function ServicesPage() {
  const t = useTranslations('services');
  const tn = useTranslations('nav');
  const locale = useLocale() as Locale;
  const services = getServices();

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

      {/* Services Grid */}
      <Section background="white" padding="lg">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <Link key={service.slug} href={`/services/${service.slug}`}>
              <Card hover padding="lg" className="h-full group">
                <Icon name={service.icon} size={40} className="text-primary-600 mb-4" />
                <h2 className="text-xl font-bold text-neutral-900 group-hover:text-primary-600 transition-colors">
                  {service.title[locale]}
                </h2>
                <p className="mt-3 text-neutral-600 leading-relaxed">
                  {service.shortDescription[locale]}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {service.features[locale].slice(0, 3).map((f) => (
                    <span
                      key={f}
                      className="inline-flex items-center px-2.5 py-1 bg-primary-50 text-primary-700 text-xs font-medium rounded-lg"
                    >
                      {f}
                    </span>
                  ))}
                </div>
                <div className="mt-6 inline-flex items-center text-primary-600 font-semibold text-sm group-hover:gap-2 transition-all">
                  {tn('learnMore')}
                  <svg className="w-4 h-4 ms-1 rtl:rotate-180 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section background="gradient" padding="md">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white">{t('ctaTitle')}</h2>
          <p className="mt-4 text-lg text-white/80">{t('ctaSubtitle')}</p>
          <div className="mt-8">
            <Link href="/contact">
              <Button variant="white" size="lg">{t('ctaCta')}</Button>
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}
