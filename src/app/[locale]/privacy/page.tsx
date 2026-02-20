/**
 * Privacy Policy Page
 * Static privacy policy content.
 */
import React from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { Section } from '@/components/ui';
import type { Locale } from '@/config/site';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy',
};

export default function PrivacyPage() {
  const t = useTranslations('privacy');
  const locale = useLocale() as Locale;

  const sections = locale === 'ar'
    ? [
        { title: 'جمع المعلومات', content: 'نجمع المعلومات التي تقدمها لنا مباشرة، مثل اسمك وعنوان بريدك الإلكتروني ومعلومات الاتصال عند ملء نموذج الاتصال أو التسجيل في خدماتنا. نجمع أيضاً معلومات تلقائياً عند زيارتك لموقعنا، بما في ذلك عنوان IP ونوع المتصفح والصفحات التي زرتها.' },
        { title: 'استخدام المعلومات', content: 'نستخدم المعلومات التي نجمعها لتقديم خدماتنا وتحسينها وصيانتها، والتواصل معك بشأن حسابك وخدماتنا، والرد على استفساراتك وطلبات الدعم، وإرسال تحديثات ومواد تسويقية (بموافقتك).' },
        { title: 'مشاركة المعلومات', content: 'لا نبيع أو نؤجر أو نتاجر بمعلوماتك الشخصية مع أطراف ثالثة. قد نشارك معلوماتك مع مقدمي الخدمات الموثوقين الذين يساعدوننا في تشغيل أعمالنا، شريطة أن يوافقوا على الحفاظ على سرية هذه المعلومات.' },
        { title: 'أمان البيانات', content: 'نتخذ تدابير أمنية معقولة لحماية معلوماتك الشخصية من الفقدان والسرقة والوصول غير المصرح به والإفصاح والتعديل والتدمير. نستخدم تشفير SSL ونتبع أفضل الممارسات الصناعية لأمان البيانات.' },
        { title: 'ملفات تعريف الارتباط', content: 'نستخدم ملفات تعريف الارتباط وتقنيات تتبع مماثلة لتتبع النشاط على موقعنا وحفظ معلومات معينة. يمكنك توجيه متصفحك لرفض جميع ملفات تعريف الارتباط أو للإشارة عند إرسال ملف تعريف ارتباط.' },
        { title: 'حقوقك', content: 'لديك الحق في الوصول إلى معلوماتك الشخصية وتصحيحها وحذفها. يمكنك أيضاً الانسحاب من تلقي الاتصالات التسويقية في أي وقت. لممارسة هذه الحقوق، يرجى الاتصال بنا على info@techvantage.com.' },
        { title: 'التغييرات على هذه السياسة', content: 'قد نقوم بتحديث سياسة الخصوصية هذه من وقت لآخر. سننشر أي تغييرات على هذه الصفحة ونحدث تاريخ "آخر تحديث" في أعلى هذه السياسة.' },
        { title: 'اتصل بنا', content: 'إذا كانت لديك أسئلة حول سياسة الخصوصية هذه، يرجى الاتصال بنا على info@techvantage.com.' },
      ]
    : [
        { title: 'Information We Collect', content: 'We collect information you provide directly to us, such as your name, email address, and contact information when you fill out a contact form or register for our services. We also automatically collect certain information when you visit our website, including your IP address, browser type, and pages visited.' },
        { title: 'How We Use Your Information', content: 'We use the information we collect to provide, improve, and maintain our services; communicate with you about your account and our services; respond to your inquiries and support requests; and send you updates and marketing materials (with your consent).' },
        { title: 'Information Sharing', content: 'We do not sell, rent, or trade your personal information with third parties. We may share your information with trusted service providers who assist us in operating our business, subject to their agreement to maintain the confidentiality of such information.' },
        { title: 'Data Security', content: 'We take reasonable security measures to protect your personal information from loss, theft, unauthorized access, disclosure, alteration, and destruction. We use SSL encryption and follow industry best practices for data security.' },
        { title: 'Cookies', content: 'We use cookies and similar tracking technologies to track activity on our website and hold certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.' },
        { title: 'Your Rights', content: 'You have the right to access, correct, and delete your personal information. You can also opt out of receiving marketing communications at any time. To exercise these rights, please contact us at info@techvantage.com.' },
        { title: 'Changes to This Policy', content: 'We may update this privacy policy from time to time. We will post any changes on this page and update the "last updated" date at the top of this policy.' },
        { title: 'Contact Us', content: 'If you have questions about this privacy policy, please contact us at info@techvantage.com.' },
      ];

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-950 to-primary-800 text-white py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold">{t('title')}</h1>
          <p className="mt-4 text-white/60">
            {t('lastUpdated')}: February 1, 2026
          </p>
        </div>
      </section>

      {/* Content */}
      <Section background="white" padding="lg">
        <div className="max-w-4xl mx-auto prose">
          {sections.map((section, i) => (
            <div key={i} className="mb-10">
              <h2>{section.title}</h2>
              <p>{section.content}</p>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
