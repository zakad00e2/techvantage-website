import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';

/**
 * i18n middleware — handles locale detection, redirects, and cookie-based persistence.
 */
export default createMiddleware(routing);

export const config = {
  // Match all pathnames except for API routes, _next, static files, etc.
  matcher: ['/', '/(ar|en)/:path*'],
};
