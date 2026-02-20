/**
 * Pricing Plans Content
 * Edit this file to modify pricing tiers.
 */

export interface PricingPlan {
  id: string;
  name: { en: string; ar: string };
  description: { en: string; ar: string };
  monthlyPrice: number;
  annualPrice: number;
  currency: string;
  features: { en: string[]; ar: string[] };
  highlighted: boolean;
  cta: 'trial' | 'contact';
}

const plans: PricingPlan[] = [
  {
    id: 'starter',
    name: { en: 'Starter', ar: 'المبتدئ' },
    description: {
      en: 'Perfect for solo practitioners and small firms getting started.',
      ar: 'مثالي للممارسين المنفردين والمكاتب الصغيرة في البداية.',
    },
    monthlyPrice: 49,
    annualPrice: 39,
    currency: 'USD',
    features: {
      en: [
        'Up to 5 users',
        'Case management',
        'Document storage (10GB)',
        'Basic billing & invoicing',
        'Client portal',
        'Email support',
      ],
      ar: [
        'حتى 5 مستخدمين',
        'إدارة القضايا',
        'تخزين المستندات (10 جيجابايت)',
        'الفوترة الأساسية',
        'بوابة العملاء',
        'دعم البريد الإلكتروني',
      ],
    },
    highlighted: false,
    cta: 'trial',
  },
  {
    id: 'professional',
    name: { en: 'Professional', ar: 'الاحترافي' },
    description: {
      en: 'For growing firms that need advanced features and automation.',
      ar: 'للمكاتب المتنامية التي تحتاج ميزات متقدمة وأتمتة.',
    },
    monthlyPrice: 99,
    annualPrice: 79,
    currency: 'USD',
    features: {
      en: [
        'Up to 25 users',
        'Advanced case management',
        'Document automation & templates',
        'Document storage (100GB)',
        'Advanced billing & trust accounting',
        'Time tracking',
        'Client portal with messaging',
        'Calendar & deadline management',
        'Custom reports & analytics',
        'Priority support (4hr response)',
        'API access',
      ],
      ar: [
        'حتى 25 مستخدماً',
        'إدارة قضايا متقدمة',
        'أتمتة المستندات والقوالب',
        'تخزين المستندات (100 جيجابايت)',
        'فوترة متقدمة ومحاسبة الأمانات',
        'تتبع الوقت',
        'بوابة عملاء مع مراسلة',
        'إدارة التقويم والمواعيد النهائية',
        'تقارير وتحليلات مخصصة',
        'دعم ذو أولوية (استجابة 4 ساعات)',
        'الوصول لواجهة API',
      ],
    },
    highlighted: true,
    cta: 'trial',
  },
  {
    id: 'enterprise',
    name: { en: 'Enterprise', ar: 'المؤسسات' },
    description: {
      en: 'For large firms and legal departments with complex needs.',
      ar: 'للمكاتب الكبيرة والأقسام القانونية ذات الاحتياجات المعقدة.',
    },
    monthlyPrice: 0,
    annualPrice: 0,
    currency: 'USD',
    features: {
      en: [
        'Unlimited users',
        'Everything in Professional',
        'Unlimited document storage',
        'Custom workflows & automations',
        'Advanced security & compliance',
        'Single sign-on (SSO)',
        'Custom integrations',
        'Dedicated account manager',
        '24/7 phone support',
        'On-premise deployment option',
        'SLA guarantee',
        'Custom training program',
      ],
      ar: [
        'مستخدمون غير محدودين',
        'كل شيء في الاحترافي',
        'تخزين مستندات غير محدود',
        'سير عمل وأتمتة مخصصة',
        'أمان وامتثال متقدم',
        'تسجيل دخول موحد (SSO)',
        'تكاملات مخصصة',
        'مدير حساب مخصص',
        'دعم هاتفي على مدار الساعة',
        'خيار النشر المحلي',
        'ضمان اتفاقية مستوى الخدمة',
        'برنامج تدريب مخصص',
      ],
    },
    highlighted: false,
    cta: 'contact',
  },
];

/**
 * Get all pricing plans.
 */
export function getPricingPlans(): PricingPlan[] {
  return plans;
}
