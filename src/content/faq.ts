/**
 * FAQ Content for Legal Product
 * Edit this file to add/modify/remove FAQ items.
 */

export interface FAQ {
  id: string;
  question: { en: string; ar: string };
  answer: { en: string; ar: string };
  category: string;
}

const faqs: FAQ[] = [
  {
    id: '1',
    question: {
      en: 'What is LegalEdge Pro?',
      ar: 'ما هو ليجال إيدج برو؟',
    },
    answer: {
      en: 'LegalEdge Pro is a comprehensive legal office management system designed to streamline case management, document automation, billing, time tracking, and client communication for law firms and legal departments of all sizes.',
      ar: 'ليجال إيدج برو هو نظام شامل لإدارة المكاتب القانونية مصمم لتبسيط إدارة القضايا وأتمتة المستندات والفوترة وتتبع الوقت وتواصل العملاء لمكاتب المحاماة والأقسام القانونية بجميع أحجامها.',
    },
    category: 'general',
  },
  {
    id: '2',
    question: {
      en: 'How long does implementation take?',
      ar: 'كم تستغرق عملية التنفيذ؟',
    },
    answer: {
      en: 'Most firms are up and running within 2-4 weeks. Our dedicated onboarding team handles data migration, configuration, and training. Enterprise deployments with custom integrations typically take 6-8 weeks.',
      ar: 'معظم المكاتب تبدأ العمل خلال 2-4 أسابيع. يتولى فريق الإعداد المخصص لدينا ترحيل البيانات والتهيئة والتدريب. عمليات النشر المؤسسية مع التكاملات المخصصة تستغرق عادة 6-8 أسابيع.',
    },
    category: 'implementation',
  },
  {
    id: '3',
    question: {
      en: 'Is my data secure?',
      ar: 'هل بياناتي آمنة؟',
    },
    answer: {
      en: 'Absolutely. We use bank-grade encryption (AES-256) for data at rest and TLS 1.3 for data in transit. Our infrastructure is SOC 2 Type II certified, and we offer data residency options to comply with local regulations.',
      ar: 'بالتأكيد. نستخدم تشفير بمستوى البنوك (AES-256) للبيانات المخزنة و TLS 1.3 للبيانات المنقولة. بنيتنا التحتية حاصلة على شهادة SOC 2 Type II، ونقدم خيارات إقامة البيانات للامتثال للوائح المحلية.',
    },
    category: 'security',
  },
  {
    id: '4',
    question: {
      en: 'Can I migrate from my current system?',
      ar: 'هل يمكنني الانتقال من نظامي الحالي؟',
    },
    answer: {
      en: 'Yes. We provide full data migration support. Our team has experience migrating from all major legal management systems including Clio, PracticePanther, and custom-built solutions. We ensure zero data loss during migration.',
      ar: 'نعم. نقدم دعم ترحيل بيانات كامل. لدى فريقنا خبرة في الترحيل من جميع أنظمة الإدارة القانونية الرئيسية. نضمن عدم فقدان البيانات أثناء الترحيل.',
    },
    category: 'implementation',
  },
  {
    id: '5',
    question: {
      en: 'Does LegalEdge Pro support Arabic?',
      ar: 'هل يدعم ليجال إيدج برو اللغة العربية؟',
    },
    answer: {
      en: 'Yes. LegalEdge Pro is fully bilingual with complete Arabic RTL support. All interfaces, documents, reports, and communications can be managed in both Arabic and English.',
      ar: 'نعم. ليجال إيدج برو ثنائي اللغة بالكامل مع دعم كامل للعربية من اليمين لليسار. يمكن إدارة جميع الواجهات والمستندات والتقارير والاتصالات بالعربية والإنجليزية.',
    },
    category: 'features',
  },
  {
    id: '6',
    question: {
      en: 'What kind of support do you offer?',
      ar: 'ما نوع الدعم الذي تقدمونه؟',
    },
    answer: {
      en: 'We offer tiered support: Starter plans include email support with 24-hour response times. Professional plans include priority support with 4-hour response. Enterprise plans include 24/7 phone support with a dedicated account manager.',
      ar: 'نقدم دعماً متدرجاً: خطط المبتدئين تشمل دعم البريد الإلكتروني مع استجابة خلال 24 ساعة. الخطط الاحترافية تشمل دعماً ذا أولوية مع استجابة خلال 4 ساعات. خطط المؤسسات تشمل دعماً هاتفياً على مدار الساعة مع مدير حساب مخصص.',
    },
    category: 'support',
  },
  {
    id: '7',
    question: {
      en: 'Is there a free trial?',
      ar: 'هل هناك تجربة مجانية؟',
    },
    answer: {
      en: 'Yes! We offer a 14-day free trial with full access to all Professional plan features. No credit card required. You can also request a personalized demo from our team.',
      ar: 'نعم! نقدم تجربة مجانية لمدة 14 يوماً مع وصول كامل لجميع ميزات الخطة الاحترافية. لا حاجة لبطاقة ائتمان. يمكنك أيضاً طلب عرض توضيحي مخصص من فريقنا.',
    },
    category: 'pricing',
  },
  {
    id: '8',
    question: {
      en: 'Can LegalEdge Pro integrate with other tools?',
      ar: 'هل يمكن لليجال إيدج برو التكامل مع أدوات أخرى؟',
    },
    answer: {
      en: 'Yes. We offer native integrations with Microsoft 365, Google Workspace, accounting tools (QuickBooks, Xero), and popular e-signature platforms. Our REST API also allows custom integrations with any system.',
      ar: 'نعم. نقدم تكاملات أصلية مع Microsoft 365 و Google Workspace وأدوات المحاسبة (QuickBooks, Xero) ومنصات التوقيع الإلكتروني الشائعة. تتيح واجهة REST API الخاصة بنا أيضاً تكاملات مخصصة مع أي نظام.',
    },
    category: 'features',
  },
];

/**
 * Get all FAQs optionally filtered by category.
 */
export function getFAQs(category?: string): FAQ[] {
  if (category) return faqs.filter((f) => f.category === category);
  return faqs;
}
