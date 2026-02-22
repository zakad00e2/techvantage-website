/**
 * Home Page
 * Main landing page with hero, services overview, stats, testimonials, blog, and CTA.
 */
import React from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { Section, SectionHeader, Card, Button, Badge, Icon } from '@/components/ui';
import { getServices } from '@/content/services';
import { getArticles } from '@/content/articles';
import { getTestimonials } from '@/content/testimonials';
import type { Locale } from '@/config/site';

export default function HomePage() {
  const t = useTranslations('home');
  const tn = useTranslations('nav');
  const locale = useLocale() as Locale;

  const services = getServices();
  const articles = getArticles().slice(0, 3);
  const testimonials = getTestimonials();

  return (
    <>
      {/* ─── HERO SECTION ─── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary-950 via-primary-900 to-primary-800 text-white rtl:bg-gradient-to-bl">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-grid-pattern opacity-10" />
        <div className="absolute top-0 end-0 w-1/2 h-full bg-gradient-to-l from-secondary-500/10 to-transparent rtl:bg-gradient-to-r" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 md:py-32 lg:py-40">
          <div className="max-w-4xl">
            <Badge variant="secondary" size="md" className="mb-6">
              <Icon name="rocket" size={16} className="inline-block me-1 align-text-bottom" /> {locale === 'ar' ? 'حلول رقمية متكاملة' : 'Enterprise Digital Solutions'}
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-tight tracking-tight">
              {t('heroTitle')}
            </h1>
            <p className="mt-6 text-lg md:text-xl text-white/80 max-w-2xl leading-relaxed">
              {t('heroSubtitle')}
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link href="/services">
                <Button variant="secondary" size="lg">
                  {t('heroCta')}
                </Button>
              </Link>
              <Link href="/legal/product">
                <Button variant="white" size="lg">
                  {t('heroSecondaryCta')}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ─── STATS BAR ─── */}
      <section className="relative -mt-8 z-10">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {[
              { value: '200+', label: t('statsClients') },
              { value: '500+', label: t('statsProjects') },
              { value: '99.9%', label: t('statsUptime') },
              { value: '24/7', label: t('statsSupport') },
            ].map((stat) => (
              <div
                key={stat.label}
                className="bg-white rounded-2xl shadow-xl p-6 text-center border border-neutral-100"
              >
                <div className="text-3xl md:text-4xl font-extrabold text-primary-600">
                  {stat.value}
                </div>
                <div className="mt-1 text-sm text-neutral-500 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SERVICES SECTION ─── */}
      <Section background="white" padding="lg">
        <SectionHeader title={t('servicesTitle')} subtitle={t('servicesSubtitle')} />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <Link key={service.slug} href={`/services/${service.slug}`}>
              <Card hover padding="lg" className="h-full group">
                <Icon name={service.icon} size={40} className="text-primary-600 mb-4" />
                <h3 className="text-xl font-bold text-neutral-900 group-hover:text-primary-600 transition-colors">
                  {service.title[locale]}
                </h3>
                <p className="mt-3 text-neutral-600 leading-relaxed line-clamp-3">
                  {service.shortDescription[locale]}
                </p>
                <div className="mt-4 inline-flex items-center text-primary-600 font-semibold text-sm group-hover:gap-2 transition-all">
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

      {/* ─── WHY US SECTION ─── */}
      <Section background="light" padding="lg">
        <SectionHeader title={t('whyUsTitle')} subtitle={t('whyUsSubtitle')} />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: 'trophy',
              title: locale === 'ar' ? 'خبرة مثبتة' : 'Proven Expertise',
              desc: locale === 'ar'
                ? 'أكثر من 8 سنوات من الخبرة في تقديم حلول تقنية على مستوى المؤسسات عبر صناعات متعددة.'
                : '8+ years delivering enterprise-grade technology solutions across multiple industries.',
            },
            {
              icon: 'wrench',
              title: locale === 'ar' ? 'حلول مخصصة' : 'Tailored Solutions',
              desc: locale === 'ar'
                ? 'كل حل مصمم وفقاً لاحتياجات عملك الفريدة، وليس حزماً جاهزة.'
                : 'Every solution is custom-built for your unique business needs, not off-the-shelf packages.',
            },
            {
              icon: 'handshake',
              title: locale === 'ar' ? 'دعم مستمر' : 'Ongoing Support',
              desc: locale === 'ar'
                ? 'شراكة طويلة الأمد مع دعم مخصص ومراقبة استباقية وتحسين مستمر.'
                : 'Long-term partnership with dedicated support, proactive monitoring, and continuous improvement.',
            },
            {
              icon: 'shield',
              title: locale === 'ar' ? 'الأمان أولاً' : 'Security First',
              desc: locale === 'ar'
                ? 'أمان وامتثال على مستوى المؤسسات مدمج في كل حل نقدمه.'
                : 'Enterprise-grade security and compliance built into every solution we deliver.',
            },
            {
              icon: 'zap',
              title: locale === 'ar' ? 'تسليم سريع' : 'Fast Delivery',
              desc: locale === 'ar'
                ? 'منهجيات رشيقة تضمن التسليم في الوقت المحدد دون المساومة على الجودة.'
                : 'Agile methodologies ensure on-time delivery without compromising on quality.',
            },
            {
              icon: 'trending-up',
              title: locale === 'ar' ? 'نتائج قابلة للقياس' : 'Measurable Results',
              desc: locale === 'ar'
                ? 'تقنية مدعومة بالبيانات وعائد استثمار قابل للقياس مع تقارير شفافة.'
                : 'Data-driven approach with measurable ROI and transparent reporting.',
            },
          ].map((item) => (
            <Card key={item.title} padding="lg" className="text-center">
              <Icon name={item.icon} size={40} className="text-primary-600 mb-4 mx-auto" />
              <h3 className="text-lg font-bold text-neutral-900">{item.title}</h3>
              <p className="mt-2 text-neutral-600">{item.desc}</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* ─── TESTIMONIALS SECTION ─── */}
      <Section background="white" padding="lg">
        <SectionHeader title={t('testimonialsTitle')} subtitle={t('testimonialsSubtitle')} />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.slice(0, 3).map((item) => (
            <Card key={item.id} padding="lg" className="flex flex-col">
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: item.rating }, (_, i) => (
                  <svg key={i} className="w-5 h-5 text-secondary-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-neutral-700 leading-relaxed flex-1 italic">
                &ldquo;{item.quote[locale]}&rdquo;
              </p>
              <div className="mt-6 pt-4 border-t border-neutral-100 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center text-primary-700 font-bold text-sm">
                  {item.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <p className="font-semibold text-neutral-900 text-sm">{item.name}</p>
                  <p className="text-neutral-500 text-xs">
                    {item.role[locale]}, {item.company[locale]}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      {/* ─── FEATURED BLOG SECTION ─── */}
      <Section background="light" padding="lg">
        <SectionHeader title={t('featuredBlogTitle')} subtitle={t('featuredBlogSubtitle')} />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((article) => (
            <Link key={article.slug} href={`/blog/${article.slug}`}>
              <Card hover padding="none" className="h-full group overflow-hidden">
                <div className="h-48 bg-gradient-to-br from-primary-100 to-primary-200 flex items-center justify-center">
                  <Icon name="file-text" size={56} className="opacity-50 text-primary-600" />
                </div>
                <div className="p-6">
                  <Badge>{article.category[locale]}</Badge>
                  <h3 className="mt-3 text-lg font-bold text-neutral-900 group-hover:text-primary-600 transition-colors line-clamp-2">
                    {article.title[locale]}
                  </h3>
                  <p className="mt-2 text-neutral-600 text-sm line-clamp-2">
                    {article.excerpt[locale]}
                  </p>
                  <div className="mt-4 flex items-center gap-2 text-xs text-neutral-500">
                    <span>{article.date}</span>
                    <span>·</span>
                    <span>{article.readTime} {locale === 'ar' ? 'دقيقة قراءة' : 'min read'}</span>
                  </div>
                </div>
              </Card>
            </Link>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Link href="/blog">
            <Button variant="outline">{tn('viewAll')}</Button>
          </Link>
        </div>
      </Section>

      {/* ─── CTA SECTION ─── */}
      <Section background="gradient" padding="lg">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
            {t('ctaTitle')}
          </h2>
          <p className="mt-4 text-lg text-white/80">
            {t('ctaSubtitle')}
          </p>
          <div className="mt-8">
            <Link href="/contact">
              <Button variant="white" size="lg">
                {t('ctaCta')}
              </Button>
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}
