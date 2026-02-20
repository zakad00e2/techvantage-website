/**
 * Section Component
 * Standardized content section with consistent spacing and backgrounds.
 */
import React from 'react';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  background?: 'white' | 'light' | 'dark' | 'primary' | 'gradient';
  padding?: 'sm' | 'md' | 'lg' | 'xl';
  id?: string;
}

const bgStyles: Record<string, string> = {
  white: 'bg-white',
  light: 'bg-neutral-50',
  dark: 'bg-neutral-900 text-white',
  primary: 'bg-primary-600 text-white',
  gradient: 'bg-gradient-to-br from-primary-700 via-primary-600 to-primary-800 text-white',
};

const paddingStyles: Record<string, string> = {
  sm: 'py-12 md:py-16',
  md: 'py-16 md:py-24',
  lg: 'py-20 md:py-32',
  xl: 'py-24 md:py-40',
};

export default function Section({
  children,
  className = '',
  background = 'white',
  padding = 'md',
  id,
}: SectionProps) {
  return (
    <section id={id} className={`${bgStyles[background]} ${paddingStyles[padding]} ${className}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </section>
  );
}

/**
 * Section heading with title and subtitle.
 */
export function SectionHeader({
  title,
  subtitle,
  centered = true,
  light = false,
  className = '',
}: {
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
  className?: string;
}) {
  return (
    <div className={`mb-12 md:mb-16 ${centered ? 'text-center' : ''} ${className}`}>
      <h2
        className={`text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight ${
          light ? 'text-white' : 'text-neutral-900'
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-4 text-lg md:text-xl max-w-3xl ${centered ? 'mx-auto' : ''} ${
            light ? 'text-white/80' : 'text-neutral-600'
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
