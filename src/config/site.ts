/**
 * Site-wide configuration constants.
 * Central place for company info, URLs, social links, etc.
 */
export const siteConfig = {
  name: {
    en: 'VantageTech',
    ar: 'فانتج تك',
  },
  description: {
    en: 'Enterprise digital solutions and legal office management systems',
    ar: 'حلول رقمية متكاملة وأنظمة إدارة المكاتب القانونية',
  },
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://vantagetech.com',
  ogImage: '/images/og-default.jpg',
  creator: 'VantageTech Solutions',
  keywords: {
    en: ['digital transformation', 'legal management system', 'enterprise solutions', 'software development', 'cloud services'],
    ar: ['التحول الرقمي', 'نظام إدارة قانوني', 'حلول مؤسسية', 'تطوير برمجيات', 'خدمات سحابية'],
  },
  social: {
    twitter: 'https://twitter.com/vantagetech',
    linkedin: 'https://linkedin.com/company/vantagetech',
    github: 'https://github.com/vantagetech',
  },
  contact: {
    email: 'info@vantagetech.com',
    phone: '+966 50 000 0000',
    address: {
      en: 'King Fahd Road, Riyadh, Saudi Arabia',
      ar: 'طريق الملك فهد، الرياض، المملكة العربية السعودية',
    },
  },
} as const;

export type Locale = 'en' | 'ar';
export const locales: Locale[] = ['en', 'ar'];
export const defaultLocale: Locale = 'ar';
