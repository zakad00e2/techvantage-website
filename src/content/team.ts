/**
 * Team Members Content
 * Edit this file to add/modify/remove team members.
 */

export interface TeamMember {
  id: string;
  name: string;
  role: { en: string; ar: string };
  bio: { en: string; ar: string };
  image: string;
  linkedin?: string;
  twitter?: string;
}

const team: TeamMember[] = [
  {
    id: '1',
    name: 'Ahmed Al-Rashid',
    role: { en: 'CEO & Founder', ar: 'الرئيس التنفيذي والمؤسس' },
    bio: {
      en: '15+ years in enterprise technology. Former VP at a Fortune 500 tech company. Passionate about digital transformation in the MENA region.',
      ar: 'أكثر من 15 عاماً في تقنية المؤسسات. نائب رئيس سابق في شركة تقنية ضمن Fortune 500. شغوف بالتحول الرقمي في منطقة الشرق الأوسط.',
    },
    image: '/images/team/ahmed.jpg',
    linkedin: '#',
    twitter: '#',
  },
  {
    id: '2',
    name: 'Sarah Mitchell',
    role: { en: 'CTO', ar: 'الرئيسة التنفيذية للتقنية' },
    bio: {
      en: 'Expert in cloud architecture and AI. Led engineering teams at top Silicon Valley startups. M.S. Computer Science from Stanford.',
      ar: 'خبيرة في بنية السحابة والذكاء الاصطناعي. قادت فرق هندسية في أفضل شركات وادي السيليكون الناشئة.',
    },
    image: '/images/team/sarah.jpg',
    linkedin: '#',
  },
  {
    id: '3',
    name: 'Omar Khalid',
    role: { en: 'VP of Legal Solutions', ar: 'نائب رئيس الحلول القانونية' },
    bio: {
      en: 'Former practicing attorney turned legal tech innovator. 10+ years building technology solutions for the legal industry.',
      ar: 'محامٍ سابق تحول إلى مبتكر في التقنية القانونية. أكثر من 10 سنوات في بناء حلول تقنية للصناعة القانونية.',
    },
    image: '/images/team/omar.jpg',
    linkedin: '#',
  },
  {
    id: '4',
    name: 'Lina Mahmoud',
    role: { en: 'Head of Design', ar: 'رئيسة قسم التصميم' },
    bio: {
      en: 'Award-winning UX designer with a focus on enterprise applications. Previously led design at two successful SaaS companies.',
      ar: 'مصممة UX حائزة على جوائز مع تركيز على تطبيقات المؤسسات. قادت التصميم سابقاً في شركتي SaaS ناجحتين.',
    },
    image: '/images/team/lina.jpg',
    linkedin: '#',
    twitter: '#',
  },
];

/**
 * Get all team members.
 */
export function getTeamMembers(): TeamMember[] {
  return team;
}
