/**
 * Contact Page
 * Contact form and company info.
 */
import React from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { Section, Card } from '@/components/ui';
import { siteConfig, type Locale } from '@/config/site';
import type { Metadata } from 'next';
import ContactForm from './ContactForm';

export const metadata: Metadata = {
  title: 'Contact Us',
};

export default function ContactPage() {
  const t = useTranslations('contact');
  const locale = useLocale() as Locale;

  const contactInfo = [
    {
      icon: '📍',
      title: t('addressTitle'),
      content: siteConfig.contact.address[locale],
    },
    {
      icon: '✉️',
      title: t('emailTitle'),
      content: siteConfig.contact.email,
    },
    {
      icon: '📞',
      title: t('phoneTitle'),
      content: siteConfig.contact.phone,
    },
    {
      icon: '🕐',
      title: t('hoursTitle'),
      content: t('hoursText'),
    },
  ];

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

      {/* Contact Content */}
      <Section background="white" padding="lg">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Form */}
          <div className="lg:col-span-3">
            <h2 className="text-2xl font-bold text-neutral-900 mb-6">{t('formTitle')}</h2>
            <ContactForm />
          </div>

          {/* Info Sidebar */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold text-neutral-900 mb-6">{t('infoTitle')}</h2>
            <div className="space-y-6">
              {contactInfo.map((info) => (
                <Card key={info.title} padding="md" className="flex items-start gap-4">
                  <span className="text-2xl flex-shrink-0">{info.icon}</span>
                  <div>
                    <h3 className="font-semibold text-neutral-900">{info.title}</h3>
                    <p className="text-neutral-600 mt-1">{info.content}</p>
                  </div>
                </Card>
              ))}
            </div>

            {/* Map placeholder */}
            <div className="mt-8 rounded-2xl bg-neutral-100 border border-neutral-200 h-64 flex items-center justify-center">
              <div className="text-center text-neutral-500">
                <span className="text-4xl block mb-2">🗺️</span>
                <p className="font-medium">{locale === 'ar' ? 'خريطة الموقع' : 'Location Map'}</p>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
