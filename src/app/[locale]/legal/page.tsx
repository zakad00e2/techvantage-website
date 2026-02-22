/**
 * Legal Solutions Overview Page
 * Presents the legal technology division and links to the product page.
 */
import React from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { Section, SectionHeader, Card, Button, Badge, Icon } from '@/components/ui';
import type { Locale } from '@/config/site';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Legal Technology Solutions',
};

export default function LegalOverviewPage() {
  const t = useTranslations('legal');
  const tn = useTranslations('nav');
  const locale = useLocale() as Locale;

  const solutions = [
    {
      icon: 'clipboard-list',
      title: locale === 'ar' ? 'إدارة القضايا' : 'Case Management',
      desc: locale === 'ar'
        ? 'نظام شامل لتتبع القضايا من البداية إلى النهاية مع جداول زمنية ومهام آلية.'
        : 'Comprehensive case tracking from intake to resolution with timelines and automated tasks.',
    },
    {
      icon: 'file-text',
      title: locale === 'ar' ? 'أتمتة المستندات' : 'Document Automation',
      desc: locale === 'ar'
        ? 'إنشاء العقود والمستندات القانونية تلقائياً بقوالب ذكية قابلة للتخصيص.'
        : 'Auto-generate contracts and legal documents with intelligent, customizable templates.',
    },
    {
      icon: 'dollar-sign',
      title: locale === 'ar' ? 'الفوترة وتتبع الوقت' : 'Billing & Time Tracking',
      desc: locale === 'ar'
        ? 'فوترة دقيقة مع تتبع الوقت التلقائي ومحاسبة الأمانات وبوابات الدفع.'
        : 'Accurate billing with automatic time tracking, trust accounting, and payment gateways.',
    },
    {
      icon: 'users',
      title: locale === 'ar' ? 'بوابة العملاء' : 'Client Portal',
      desc: locale === 'ar'
        ? 'بوابة آمنة للعملاء لمتابعة قضاياهم ومشاركة المستندات والتواصل مع فريقك.'
        : 'Secure portal for clients to track cases, share documents, and communicate with your team.',
    },
    {
      icon: 'bar-chart-2',
      title: locale === 'ar' ? 'التقارير والتحليلات' : 'Reports & Analytics',
      desc: locale === 'ar'
        ? 'لوحات تحليلية متقدمة لقياس أداء المكتب وتحسين الكفاءة واتخاذ قرارات أفضل.'
        : 'Advanced dashboards to measure firm performance, improve efficiency, and make better decisions.',
    },
    {
      icon: 'link',
      title: locale === 'ar' ? 'التكاملات' : 'Integrations',
      desc: locale === 'ar'
        ? 'تكامل سلس مع Microsoft 365 و Google Workspace وأنظمة المحاسبة والتوقيع الإلكتروني.'
        : 'Seamless integration with Microsoft 365, Google Workspace, accounting tools, and e-signatures.',
    },
  ];

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-950 to-primary-800 text-white py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <Badge variant="secondary" size="md" className="mb-6">
            <Icon name="scale" size={16} className="inline-block me-1 align-text-bottom" /> {locale === 'ar' ? 'تقنية قانونية' : 'Legal Technology'}
          </Badge>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold">{t('overviewTitle')}</h1>
          <p className="mt-4 text-lg md:text-xl text-white/80 max-w-2xl mx-auto">
            {t('overviewSubtitle')}
          </p>
          <div className="mt-8">
            <Link href="/legal/product">
              <Button variant="secondary" size="lg">
                {locale === 'ar' ? 'اكتشف ليجال إيدج برو' : 'Discover LegalEdge Pro'}
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <Section background="white" padding="lg">
        <SectionHeader
          title={locale === 'ar' ? 'حلول قانونية متكاملة' : 'Comprehensive Legal Solutions'}
          subtitle={locale === 'ar' ? 'كل ما يحتاجه مكتبك القانوني في منصة واحدة' : 'Everything your legal practice needs in one platform'}
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((solution) => (
            <Card key={solution.title} padding="lg" hover className="text-center">
              <Icon name={solution.icon} size={40} className="text-primary-600 mb-4 mx-auto" />
              <h3 className="text-lg font-bold text-neutral-900">{solution.title}</h3>
              <p className="mt-2 text-neutral-600">{solution.desc}</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* Product Banner */}
      <Section background="gradient" padding="lg">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <Badge className="mb-4 bg-white/20 text-white">{t('productName')}</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-white">{t('productTagline')}</h2>
            <p className="mt-4 text-lg text-white/80">
              {t('heroSubtitle')}
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/legal/product">
                <Button variant="white" size="lg">{tn('learnMore')}</Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                  {t('contactSales')}
                </Button>
              </Link>
            </div>
          </div>
          <div className="bg-white/10 backdrop-blur rounded-2xl p-8 border border-white/20">
            <div className="space-y-4">
              {[
                locale === 'ar' ? '✓ إدارة القضايا المتقدمة' : '✓ Advanced Case Management',
                locale === 'ar' ? '✓ أتمتة المستندات والقوالب' : '✓ Document Automation & Templates',
                locale === 'ar' ? '✓ الفوترة وتتبع الوقت' : '✓ Billing & Time Tracking',
                locale === 'ar' ? '✓ بوابة عملاء آمنة' : '✓ Secure Client Portal',
                locale === 'ar' ? '✓ تقارير وتحليلات متقدمة' : '✓ Advanced Reports & Analytics',
                locale === 'ar' ? '✓ دعم ثنائي اللغة كامل' : '✓ Full Bilingual Support',
              ].map((feature) => (
                <div key={feature} className="text-white text-lg font-medium">{feature}</div>
              ))}
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
