/**
 * LegalEdge Pro — Product Landing Page
 * High-conversion SaaS-style landing page with hero, features, benefits,
 * screenshots, pricing, comparison, FAQ, testimonials, and CTA sections.
 */
import React from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { Section, SectionHeader, Card, Button, Badge, Icon } from '@/components/ui';
import { getPricingPlans } from '@/content/pricing';
import { getTestimonials } from '@/content/testimonials';
import { getFAQs } from '@/content/faq';
import type { Locale } from '@/config/site';
import type { Metadata } from 'next';
import FAQSection from './FAQSection';
import PricingToggle from './PricingToggle';

export const metadata: Metadata = {
  title: 'LegalEdge Pro — Legal Office Management System',
  description: 'All-in-one legal office management system for case management, document automation, billing, and client communication.',
};

export default function LegalProductPage() {
  const t = useTranslations('legal');
  const locale = useLocale() as Locale;

  const plans = getPricingPlans();
  const testimonials = getTestimonials('legal');
  const faqs = getFAQs();

  /* Features data */
  const features = [
    {
      icon: 'clipboard-list',
      title: locale === 'ar' ? 'إدارة القضايا' : 'Case Management',
      desc: locale === 'ar'
        ? 'تتبع كل قضية من القبول حتى الإغلاق مع جداول زمنية وملاحظات ومهام آلية.'
        : 'Track every case from intake to closure with timelines, notes, and automated tasks.',
    },
    {
      icon: 'file-text',
      title: locale === 'ar' ? 'أتمتة المستندات' : 'Document Automation',
      desc: locale === 'ar'
        ? 'أنشئ العقود والمذكرات والمستندات القانونية في ثوانٍ باستخدام قوالب ذكية.'
        : 'Generate contracts, memos, and legal documents in seconds with smart templates.',
    },
    {
      icon: 'timer',
      title: locale === 'ar' ? 'تتبع الوقت والفوترة' : 'Time & Billing',
      desc: locale === 'ar'
        ? 'تتبع الوقت تلقائياً مع فوترة مرنة ومحاسبة أمانات ودفع إلكتروني.'
        : 'Automatic time tracking with flexible billing, trust accounting, and online payments.',
    },
    {
      icon: 'users',
      title: locale === 'ar' ? 'بوابة العملاء' : 'Client Portal',
      desc: locale === 'ar'
        ? 'بوابة آمنة للعملاء لمتابعة قضاياهم وتبادل المستندات والتواصل.'
        : 'Secure client portal for case updates, document sharing, and communication.',
    },
    {
      icon: 'calendar',
      title: locale === 'ar' ? 'التقويم والمواعيد' : 'Calendar & Deadlines',
      desc: locale === 'ar'
        ? 'لا تفوت أي موعد نهائي مع تقويم متكامل وتنبيهات ذكية ومزامنة.'
        : 'Never miss a deadline with integrated calendar, smart alerts, and sync capabilities.',
    },
    {
      icon: 'bar-chart-2',
      title: locale === 'ar' ? 'التحليلات والتقارير' : 'Analytics & Reports',
      desc: locale === 'ar'
        ? 'لوحات تحليلية تفاعلية لقياس الأداء وتحسين الإنتاجية وزيادة الإيرادات.'
        : 'Interactive dashboards to measure performance, improve productivity, and grow revenue.',
    },
  ];

  /* Benefits data */
  const benefits = [
    {
      stat: '3x',
      title: locale === 'ar' ? 'زيادة الإنتاجية' : 'Productivity Increase',
      desc: locale === 'ar'
        ? 'تعامل مع المزيد من القضايا بنفس الفريق من خلال أتمتة المهام المتكررة.'
        : 'Handle more cases with the same team by automating repetitive tasks.',
    },
    {
      stat: '40%',
      title: locale === 'ar' ? 'وقت أقل في الإدارة' : 'Less Admin Time',
      desc: locale === 'ar'
        ? 'قلل الوقت المستهلك في المهام الإدارية وركز على العمل القانوني الفعلي.'
        : 'Reduce time spent on admin tasks and focus on actual legal work.',
    },
    {
      stat: '60%',
      title: locale === 'ar' ? 'فوترة أسرع' : 'Faster Billing',
      desc: locale === 'ar'
        ? 'حسّن تدفق الإيرادات مع فوترة تلقائية وتتبع وقت دقيق.'
        : 'Improve cash flow with automated billing and accurate time tracking.',
    },
    {
      stat: '99.9%',
      title: locale === 'ar' ? 'وقت تشغيل مضمون' : 'Uptime Guaranteed',
      desc: locale === 'ar'
        ? 'بنية تحتية سحابية موثوقة مع نسخ احتياطي تلقائي وأمان على مستوى البنوك.'
        : 'Reliable cloud infrastructure with automatic backups and bank-grade security.',
    },
  ];

  /* Comparison data */
  const comparisonFeatures = [
    { name: locale === 'ar' ? 'إدارة القضايا' : 'Case Management', us: true, competitor1: true, competitor2: true },
    { name: locale === 'ar' ? 'أتمتة المستندات' : 'Document Automation', us: true, competitor1: false, competitor2: true },
    { name: locale === 'ar' ? 'دعم عربي كامل (RTL)' : 'Full Arabic RTL Support', us: true, competitor1: false, competitor2: false },
    { name: locale === 'ar' ? 'بوابة العملاء' : 'Client Portal', us: true, competitor1: true, competitor2: false },
    { name: locale === 'ar' ? 'تتبع الوقت' : 'Time Tracking', us: true, competitor1: true, competitor2: true },
    { name: locale === 'ar' ? 'محاسبة الأمانات' : 'Trust Accounting', us: true, competitor1: false, competitor2: true },
    { name: locale === 'ar' ? 'واجهة API مفتوحة' : 'Open API', us: true, competitor1: false, competitor2: false },
    { name: locale === 'ar' ? 'نشر محلي' : 'On-Premise Option', us: true, competitor1: false, competitor2: false },
    { name: locale === 'ar' ? 'دعم على مدار الساعة' : '24/7 Support', us: true, competitor1: false, competitor2: true },
  ];

  return (
    <>
      {/* ─── HERO ─── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary-950 via-primary-900 to-primary-800 text-white">
        <div className="absolute inset-0 bg-grid-pattern opacity-10" />
        <div className="absolute bottom-0 start-0 w-1/3 h-1/2 bg-gradient-to-tr from-secondary-500/10 to-transparent" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 md:py-32 lg:py-40">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="secondary" size="md" className="mb-6">
                <Icon name="scale" size={16} className="inline-block me-1 align-text-bottom" /> {t('productName')}
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
                {t('heroTitle')}
              </h1>
              <p className="mt-6 text-lg md:text-xl text-white/80 leading-relaxed">
                {t('heroSubtitle')}
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <Button variant="secondary" size="lg">{t('heroCta')}</Button>
                <Button variant="white" size="lg">{t('heroSecondaryCta')}</Button>
              </div>
              {/* Trust indicators */}
              <div className="mt-8 flex items-center gap-6 text-white/60 text-sm">
                <span>✓ {locale === 'ar' ? 'تجربة مجانية 14 يوم' : '14-day free trial'}</span>
                <span>✓ {locale === 'ar' ? 'بدون بطاقة ائتمان' : 'No credit card needed'}</span>
              </div>
            </div>

            {/* Product Preview Placeholder */}
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 p-4 shadow-2xl">
                <div className="bg-neutral-900/80 rounded-xl aspect-[4/3] flex items-center justify-center">
                  <div className="text-center p-8">
                    <Icon name="scale" size={56} className="text-white/80 mb-4" />
                    <p className="text-white/80 font-medium">{t('productName')}</p>
                    <p className="text-white/50 text-sm mt-1">{locale === 'ar' ? 'واجهة لوحة التحكم' : 'Dashboard Interface'}</p>
                  </div>
                </div>
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-4 -start-4 bg-white rounded-xl shadow-xl px-4 py-3 flex items-center gap-2">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <p className="text-neutral-900 font-semibold text-sm">500+</p>
                  <p className="text-neutral-500 text-xs">{locale === 'ar' ? 'مكتب محاماة' : 'Law Firms'}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── FEATURES ─── */}
      <Section background="white" padding="lg">
        <SectionHeader title={t('featuresTitle')} subtitle={t('featuresSubtitle')} />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <Card key={feature.title} padding="lg" hover>
              <Icon name={feature.icon} size={40} className="text-primary-600 mb-4" />
              <h3 className="text-lg font-bold text-neutral-900">{feature.title}</h3>
              <p className="mt-2 text-neutral-600">{feature.desc}</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* ─── BENEFITS ─── */}
      <Section background="light" padding="lg">
        <SectionHeader title={t('benefitsTitle')} subtitle={t('benefitsSubtitle')} />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit) => (
            <div key={benefit.title} className="text-center">
              <div className="text-5xl font-extrabold text-primary-600 mb-3">{benefit.stat}</div>
              <h3 className="text-lg font-bold text-neutral-900">{benefit.title}</h3>
              <p className="mt-2 text-neutral-600 text-sm">{benefit.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* ─── SCREENSHOTS ─── */}
      <Section background="white" padding="lg">
        <SectionHeader title={t('screenshotsTitle')} subtitle={t('screenshotsSubtitle')} />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            { label: locale === 'ar' ? 'لوحة التحكم' : 'Dashboard', icon: 'bar-chart-2' },
            { label: locale === 'ar' ? 'إدارة القضايا' : 'Case Management', icon: 'clipboard-list' },
            { label: locale === 'ar' ? 'أتمتة المستندات' : 'Document Builder', icon: 'file-text' },
            { label: locale === 'ar' ? 'الفوترة' : 'Billing', icon: 'dollar-sign' },
          ].map((screenshot) => (
            <div key={screenshot.label} className="group">
              <div className="bg-neutral-100 rounded-2xl aspect-video flex items-center justify-center border border-neutral-200 group-hover:border-primary-300 transition-colors overflow-hidden">
                <div className="text-center">
                  <Icon name={screenshot.icon} size={48} className="text-primary-600 mb-3" />
                  <p className="text-neutral-500 font-medium">{screenshot.label}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* ─── PRICING ─── */}
      <Section background="light" padding="lg" id="pricing">
        <SectionHeader title={t('pricingTitle')} subtitle={t('pricingSubtitle')} />
        <PricingToggle plans={plans} locale={locale} />
      </Section>

      {/* ─── COMPARISON TABLE ─── */}
      <Section background="white" padding="lg">
        <SectionHeader title={t('comparisonTitle')} subtitle={t('comparisonSubtitle')} />
        <div className="overflow-x-auto">
          <table className="w-full max-w-4xl mx-auto">
            <thead>
              <tr className="border-b-2 border-neutral-200">
                <th className="text-start py-4 px-4 text-neutral-700 font-semibold">
                  {locale === 'ar' ? 'الميزة' : 'Feature'}
                </th>
                <th className="py-4 px-4 text-center">
                  <span className="text-primary-600 font-bold">{t('productName')}</span>
                </th>
                <th className="py-4 px-4 text-center text-neutral-500">
                  {locale === 'ar' ? 'المنافس أ' : 'Competitor A'}
                </th>
                <th className="py-4 px-4 text-center text-neutral-500">
                  {locale === 'ar' ? 'المنافس ب' : 'Competitor B'}
                </th>
              </tr>
            </thead>
            <tbody>
              {comparisonFeatures.map((row, i) => (
                <tr key={row.name} className={i % 2 === 0 ? 'bg-neutral-50' : ''}>
                  <td className="py-3 px-4 font-medium text-neutral-700">{row.name}</td>
                  <td className="py-3 px-4 text-center">
                    <span className="text-green-600 text-lg">✓</span>
                  </td>
                  <td className="py-3 px-4 text-center">
                    {row.competitor1 ? (
                      <span className="text-green-600 text-lg">✓</span>
                    ) : (
                      <span className="text-neutral-300 text-lg">✗</span>
                    )}
                  </td>
                  <td className="py-3 px-4 text-center">
                    {row.competitor2 ? (
                      <span className="text-green-600 text-lg">✓</span>
                    ) : (
                      <span className="text-neutral-300 text-lg">✗</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      {/* ─── TESTIMONIALS ─── */}
      <Section background="light" padding="lg">
        <SectionHeader title={t('testimonialsTitle')} subtitle={t('testimonialsSubtitle')} />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {testimonials.map((item) => (
            <Card key={item.id} padding="lg">
              <div className="flex gap-1 mb-4">
                {Array.from({ length: item.rating }, (_, i) => (
                  <svg key={i} className="w-5 h-5 text-secondary-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-neutral-700 leading-relaxed italic">
                &ldquo;{item.quote[locale]}&rdquo;
              </p>
              <div className="mt-6 pt-4 border-t border-neutral-100 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center text-primary-700 font-bold text-sm">
                  {item.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <p className="font-semibold text-neutral-900 text-sm">{item.name}</p>
                  <p className="text-neutral-500 text-xs">{item.role[locale]}, {item.company[locale]}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      {/* ─── FAQ ─── */}
      <Section background="white" padding="lg">
        <SectionHeader title={t('faqTitle')} subtitle={t('faqSubtitle')} />
        <div className="max-w-3xl mx-auto">
          <FAQSection faqs={faqs} locale={locale} />
        </div>
      </Section>

      {/* ─── FINAL CTA ─── */}
      <Section background="gradient" padding="lg">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
            {t('ctaTitle')}
          </h2>
          <p className="mt-4 text-lg text-white/80">{t('ctaSubtitle')}</p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button variant="white" size="lg">{t('ctaCta')}</Button>
            <Link href="/contact">
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                {t('contactSales')}
              </Button>
            </Link>
          </div>
          <div className="mt-6 flex items-center justify-center gap-6 text-white/60 text-sm">
            <span>✓ {locale === 'ar' ? 'تجربة مجانية 14 يوم' : '14-day free trial'}</span>
            <span>✓ {locale === 'ar' ? 'بدون بطاقة ائتمان' : 'No credit card'}</span>
            <span>✓ {locale === 'ar' ? 'إلغاء في أي وقت' : 'Cancel anytime'}</span>
          </div>
        </div>
      </Section>
    </>
  );
}
