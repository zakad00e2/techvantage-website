/**
 * About Page
 * Company info, mission/vision, values, team, and timeline.
 */
import React from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { Section, SectionHeader, Card, Icon } from '@/components/ui';
import { getTeamMembers } from '@/content/team';
import type { Locale } from '@/config/site';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us',
};

export default function AboutPage() {
  const t = useTranslations('about');
  const locale = useLocale() as Locale;
  const team = getTeamMembers();

  const values = [
    {
      icon: 'lightbulb',
      title: locale === 'ar' ? 'الابتكار' : 'Innovation',
      desc: locale === 'ar'
        ? 'نبحث دائماً عن طرق أفضل وأذكى لحل المشكلات المعقدة.'
        : 'We constantly seek better, smarter ways to solve complex problems.',
    },
    {
      icon: 'handshake',
      title: locale === 'ar' ? 'الشراكة' : 'Partnership',
      desc: locale === 'ar'
        ? 'نعمل كامتداد لفريقك، ملتزمون بنجاحك على المدى الطويل.'
        : 'We operate as an extension of your team, committed to your long-term success.',
    },
    {
      icon: 'star',
      title: locale === 'ar' ? 'التميز' : 'Excellence',
      desc: locale === 'ar'
        ? 'نلتزم بأعلى معايير الجودة في كل ما نقدمه.'
        : 'We hold ourselves to the highest standards of quality in everything we deliver.',
    },
    {
      icon: 'shield-check',
      title: locale === 'ar' ? 'النزاهة' : 'Integrity',
      desc: locale === 'ar'
        ? 'نعمل بشفافية ونزاهة في كل تعامل مع عملائنا وشركائنا.'
        : 'We operate with transparency and honesty in every interaction with clients and partners.',
    },
  ];

  const timeline = [
    { year: '2018', title: locale === 'ar' ? 'التأسيس' : 'Founded', desc: locale === 'ar' ? 'تأسست فانتج تك في الرياض مع فريق من 5 خبراء.' : 'VantageTech founded in Riyadh with a team of 5 experts.' },
    { year: '2019', title: locale === 'ar' ? 'أول 50 عميل' : 'First 50 Clients', desc: locale === 'ar' ? 'وصلنا إلى 50 عميل مؤسسي وتوسعنا إلى 25 موظفاً.' : 'Reached 50 enterprise clients and grew to 25 employees.' },
    { year: '2021', title: locale === 'ar' ? 'إطلاق ليجال إيدج' : 'LegalEdge Launch', desc: locale === 'ar' ? 'أطلقنا نظام ليجال إيدج برو لإدارة المكاتب القانونية.' : 'Launched LegalEdge Pro legal office management system.' },
    { year: '2023', title: locale === 'ar' ? 'التوسع الإقليمي' : 'Regional Expansion', desc: locale === 'ar' ? 'توسعنا إلى الإمارات والبحرين والكويت مع أكثر من 200 عميل.' : 'Expanded to UAE, Bahrain, and Kuwait with 200+ clients.' },
    { year: '2025', title: locale === 'ar' ? '500+ مكتب قانوني' : '500+ Law Firms', desc: locale === 'ar' ? 'تجاوزنا 500 مكتب محاماة يستخدمون ليجال إيدج برو.' : 'Surpassed 500 law firms using LegalEdge Pro.' },
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

      {/* Mission & Vision */}
      <Section background="white" padding="lg">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="p-8 bg-primary-50 rounded-2xl border border-primary-100">
            <h2 className="text-2xl font-bold text-neutral-900 mb-4 flex items-center gap-3">
              <Icon name="target" size={28} className="text-primary-600" /> {t('missionTitle')}
            </h2>
            <p className="text-neutral-700 leading-relaxed text-lg">{t('missionText')}</p>
          </div>
          <div className="p-8 bg-secondary-50 rounded-2xl border border-secondary-100">
            <h2 className="text-2xl font-bold text-neutral-900 mb-4 flex items-center gap-3">
              <Icon name="telescope" size={28} className="text-secondary-600" /> {t('visionTitle')}
            </h2>
            <p className="text-neutral-700 leading-relaxed text-lg">{t('visionText')}</p>
          </div>
        </div>
      </Section>

      {/* Values */}
      <Section background="light" padding="lg">
        <SectionHeader title={t('valuesTitle')} />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value) => (
            <Card key={value.title} padding="lg" className="text-center">
              <Icon name={value.icon} size={40} className="text-primary-600 mb-4 mx-auto" />
              <h3 className="text-lg font-bold text-neutral-900">{value.title}</h3>
              <p className="mt-2 text-neutral-600 text-sm">{value.desc}</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* Team */}
      <Section background="white" padding="lg">
        <SectionHeader title={t('teamTitle')} subtitle={t('teamSubtitle')} />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member) => (
            <Card key={member.id} padding="lg" hover className="text-center">
              <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-br from-primary-100 to-primary-200 flex items-center justify-center text-primary-700 font-bold text-2xl mb-4">
                {member.name.split(' ').map(n => n[0]).join('')}
              </div>
              <h3 className="text-lg font-bold text-neutral-900">{member.name}</h3>
              <p className="text-primary-600 font-medium text-sm">{member.role[locale]}</p>
              <p className="mt-3 text-neutral-600 text-sm">{member.bio[locale]}</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* Timeline */}
      <Section background="light" padding="lg">
        <SectionHeader title={t('timelineTitle')} subtitle={t('timelineSubtitle')} />
        <div className="max-w-3xl mx-auto">
          <div className="relative">
            {/* Line */}
            <div className="absolute start-8 top-0 bottom-0 w-0.5 bg-primary-200" />
            {timeline.map((item, i) => (
              <div key={item.year} className="relative flex gap-6 mb-12 last:mb-0">
                <div className="flex-shrink-0 w-16 h-16 rounded-full bg-primary-600 text-white flex items-center justify-center font-bold text-sm z-10">
                  {item.year}
                </div>
                <div className={`pt-2 ${i === timeline.length - 1 ? '' : 'pb-8'}`}>
                  <h3 className="text-lg font-bold text-neutral-900">{item.title}</h3>
                  <p className="mt-1 text-neutral-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>
    </>
  );
}
