/**
 * Testimonials Content
 * Edit this file to add/modify/remove testimonials.
 */

export interface Testimonial {
  id: string;
  name: string;
  role: { en: string; ar: string };
  company: { en: string; ar: string };
  quote: { en: string; ar: string };
  avatar: string;
  rating: number;
  type: 'general' | 'legal';
}

const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Khalid Al-Mansour',
    role: { en: 'CTO', ar: 'الرئيس التنفيذي للتقنية' },
    company: { en: 'National Logistics Corp', ar: 'شركة الخدمات اللوجستية الوطنية' },
    quote: {
      en: 'TechVantage transformed our entire IT infrastructure. Their cloud migration reduced our operational costs by 40% while dramatically improving system reliability.',
      ar: 'حوّلت تك فانتج بنيتنا التحتية بالكامل. خفضت الهجرة السحابية تكاليفنا التشغيلية بنسبة 40% مع تحسين موثوقية النظام بشكل كبير.',
    },
    avatar: '/images/testimonials/khalid.jpg',
    rating: 5,
    type: 'general',
  },
  {
    id: '2',
    name: 'Fatima Hassan',
    role: { en: 'Managing Partner', ar: 'الشريك الإداري' },
    company: { en: 'Hassan & Associates Law Firm', ar: 'مكتب حسن والشركاء للمحاماة' },
    quote: {
      en: 'LegalEdge Pro completely changed how we operate. Case management, billing, document generation — everything is streamlined. We handle 3x more cases with the same team.',
      ar: 'غيّر ليجال إيدج برو طريقة عملنا بالكامل. إدارة القضايا والفوترة وإنشاء المستندات — كل شيء مبسّط. نتعامل مع 3 أضعاف القضايا بنفس الفريق.',
    },
    avatar: '/images/testimonials/fatima.jpg',
    rating: 5,
    type: 'legal',
  },
  {
    id: '3',
    name: 'Mohammed Al-Sheikh',
    role: { en: 'CEO', ar: 'الرئيس التنفيذي' },
    company: { en: 'Riyadh Commercial Group', ar: 'مجموعة الرياض التجارية' },
    quote: {
      en: 'Working with TechVantage on our digital transformation was a game-changer. They understood our business needs and delivered solutions that exceeded expectations.',
      ar: 'كان العمل مع تك فانتج في تحولنا الرقمي نقلة نوعية. فهموا احتياجات أعمالنا وقدموا حلولاً تجاوزت التوقعات.',
    },
    avatar: '/images/testimonials/mohammed.jpg',
    rating: 5,
    type: 'general',
  },
  {
    id: '4',
    name: 'Dr. Noura Al-Otaibi',
    role: { en: 'Head of Legal Department', ar: 'رئيسة القسم القانوني' },
    company: { en: 'Kingdom Investment Authority', ar: 'هيئة الاستثمار المملكة' },
    quote: {
      en: 'LegalEdge Pro brought order to our complex legal operations. The document automation alone saves us hundreds of hours each month.',
      ar: 'جلب ليجال إيدج برو النظام لعملياتنا القانونية المعقدة. أتمتة المستندات وحدها توفر لنا مئات الساعات كل شهر.',
    },
    avatar: '/images/testimonials/noura.jpg',
    rating: 5,
    type: 'legal',
  },
  {
    id: '5',
    name: 'Tariq Ibrahim',
    role: { en: 'IT Director', ar: 'مدير تقنية المعلومات' },
    company: { en: 'Gulf Healthcare Network', ar: 'شبكة الخليج للرعاية الصحية' },
    quote: {
      en: 'The cybersecurity audit and implementation by TechVantage was thorough and professional. Our security posture improved dramatically.',
      ar: 'كان تدقيق وتنفيذ الأمن السيبراني من تك فانتج شاملاً ومحترفاً. تحسن وضعنا الأمني بشكل كبير.',
    },
    avatar: '/images/testimonials/tariq.jpg',
    rating: 5,
    type: 'general',
  },
];

/**
 * Get testimonials, optionally filtered by type.
 */
export function getTestimonials(type?: Testimonial['type']): Testimonial[] {
  if (type) return testimonials.filter((t) => t.type === type);
  return testimonials;
}
