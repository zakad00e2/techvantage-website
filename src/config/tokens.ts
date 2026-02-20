/**
 * Design System Tokens
 * Central source of truth for all design decisions.
 * These tokens feed into TailwindCSS and component styles.
 */

/* ─────────────────────────────────────────────
   COLOR PALETTE — Corporate professional tones
   ───────────────────────────────────────────── */
export const colors = {
  /* Primary – deep professional blue */
  primary: {
    50:  '#EEF2FF',
    100: '#DEE5FF',
    200: '#C3CEFF',
    300: '#96ABFF',
    400: '#637DFF',
    500: '#1B4DFF',  /* main */
    600: '#0B3AE8',
    700: '#0A2EB8',
    800: '#0D2691',
    900: '#0F2272',
    950: '#0A1545',
  },
  /* Secondary – warm accent for CTAs */
  secondary: {
    50:  '#FFF8ED',
    100: '#FFEFD4',
    200: '#FFDBA8',
    300: '#FFC170',
    400: '#FF9E36',
    500: '#FF8210',  /* main */
    600: '#F06806',
    700: '#C74E07',
    800: '#9E3D0E',
    900: '#7F330F',
    950: '#451805',
  },
  /* Neutral – gray scale */
  neutral: {
    50:  '#F9FAFB',
    100: '#F3F4F6',
    200: '#E5E7EB',
    300: '#D1D5DB',
    400: '#9CA3AF',
    500: '#6B7280',
    600: '#4B5563',
    700: '#374151',
    800: '#1F2937',
    900: '#111827',
    950: '#030712',
  },
  /* Success, Warning, Error states */
  success: { light: '#ECFDF5', main: '#10B981', dark: '#065F46' },
  warning: { light: '#FFFBEB', main: '#F59E0B', dark: '#92400E' },
  error:   { light: '#FEF2F2', main: '#EF4444', dark: '#991B1B' },
} as const;

/* ─────────────────────────────────────────────
   TYPOGRAPHY SCALE  (rem based, 16px root)
   ───────────────────────────────────────────── */
export const typography = {
  fontFamily: {
    sans: {
      en: '"Inter", "Segoe UI", system-ui, -apple-system, sans-serif',
      ar: '"IBM Plex Sans Arabic", "Noto Sans Arabic", "Segoe UI", sans-serif',
    },
    mono: '"JetBrains Mono", "Fira Code", monospace',
  },
  fontSize: {
    xs:   { size: '0.75rem',   lineHeight: '1rem' },     /* 12px */
    sm:   { size: '0.875rem',  lineHeight: '1.25rem' },  /* 14px */
    base: { size: '1rem',      lineHeight: '1.5rem' },   /* 16px */
    lg:   { size: '1.125rem',  lineHeight: '1.75rem' },  /* 18px */
    xl:   { size: '1.25rem',   lineHeight: '1.75rem' },  /* 20px */
    '2xl': { size: '1.5rem',   lineHeight: '2rem' },     /* 24px */
    '3xl': { size: '1.875rem', lineHeight: '2.25rem' },  /* 30px */
    '4xl': { size: '2.25rem',  lineHeight: '2.5rem' },   /* 36px */
    '5xl': { size: '3rem',     lineHeight: '1.15' },     /* 48px */
    '6xl': { size: '3.75rem',  lineHeight: '1.1' },      /* 60px */
    '7xl': { size: '4.5rem',   lineHeight: '1.05' },     /* 72px */
  },
  fontWeight: {
    normal: '400',
    medium: '500',
    semibold: '600',
    bold: '700',
    extrabold: '800',
  },
} as const;

/* ─────────────────────────────────────────────
   SPACING SYSTEM  (4px base unit)
   ───────────────────────────────────────────── */
export const spacing = {
  px: '1px',
  0:   '0',
  0.5: '0.125rem',  /* 2px */
  1:   '0.25rem',   /* 4px */
  2:   '0.5rem',    /* 8px */
  3:   '0.75rem',   /* 12px */
  4:   '1rem',      /* 16px */
  5:   '1.25rem',   /* 20px */
  6:   '1.5rem',    /* 24px */
  8:   '2rem',      /* 32px */
  10:  '2.5rem',    /* 40px */
  12:  '3rem',      /* 48px */
  16:  '4rem',      /* 64px */
  20:  '5rem',      /* 80px */
  24:  '6rem',      /* 96px */
  32:  '8rem',      /* 128px */
} as const;

/* ─────────────────────────────────────────────
   BREAKPOINTS
   ───────────────────────────────────────────── */
export const breakpoints = {
  sm:  '640px',
  md:  '768px',
  lg:  '1024px',
  xl:  '1280px',
  '2xl': '1536px',
} as const;

/* ─────────────────────────────────────────────
   SHADOWS, RADII, TRANSITIONS
   ───────────────────────────────────────────── */
export const shadows = {
  sm:  '0 1px 2px 0 rgba(0,0,0,0.05)',
  md:  '0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -2px rgba(0,0,0,0.1)',
  lg:  '0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -4px rgba(0,0,0,0.1)',
  xl:  '0 20px 25px -5px rgba(0,0,0,0.1), 0 8px 10px -6px rgba(0,0,0,0.1)',
  '2xl': '0 25px 50px -12px rgba(0,0,0,0.25)',
} as const;

export const radii = {
  none: '0',
  sm:   '0.25rem',
  md:   '0.375rem',
  lg:   '0.5rem',
  xl:   '0.75rem',
  '2xl': '1rem',
  '3xl': '1.5rem',
  full:  '9999px',
} as const;

export const transitions = {
  fast:    '150ms cubic-bezier(0.4, 0, 0.2, 1)',
  normal:  '200ms cubic-bezier(0.4, 0, 0.2, 1)',
  slow:    '300ms cubic-bezier(0.4, 0, 0.2, 1)',
  spring:  '500ms cubic-bezier(0.175, 0.885, 0.32, 1.275)',
} as const;
