import { defineRouting } from 'next-intl/routing';

/**
 * Routing configuration for next-intl.
 * Defines supported locales and default locale.
 */
export const routing = defineRouting({
  locales: ['en', 'ar'],
  defaultLocale: 'en',
  localePrefix: 'always',
});
