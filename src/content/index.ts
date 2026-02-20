/**
 * CMS Content Layer
 * File-based content management system.
 * All content is stored as typed TypeScript objects that can be
 * easily migrated to any headless CMS (Contentful, Sanity, Strapi).
 *
 * To edit content: simply modify the data files in /src/content/
 * No code changes needed — just update the JSON-like objects.
 */

export type { Service } from './services';
export type { Article } from './articles';
export type { Testimonial } from './testimonials';
export type { FAQ } from './faq';
export type { PricingPlan } from './pricing';
export type { TeamMember } from './team';

export { getServices, getServiceBySlug } from './services';
export { getArticles, getArticleBySlug } from './articles';
export { getTestimonials } from './testimonials';
export { getFAQs } from './faq';
export { getPricingPlans } from './pricing';
export { getTeamMembers } from './team';
