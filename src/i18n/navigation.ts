import { createNavigation } from 'next-intl/navigation';
import { routing } from './routing';

/**
 * Internationalized navigation hooks.
 * Use these instead of Next.js native Link/redirect/useRouter.
 */
export const { Link, redirect, usePathname, useRouter, getPathname } =
  createNavigation(routing);
