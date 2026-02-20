/**
 * Card Component
 * Versatile card with header, body, footer, and hover effects.
 */
import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  padding?: 'none' | 'sm' | 'md' | 'lg';
  border?: boolean;
}

const paddingStyles: Record<string, string> = {
  none: '',
  sm: 'p-4',
  md: 'p-6',
  lg: 'p-8',
};

export default function Card({
  children,
  className = '',
  hover = false,
  padding = 'md',
  border = true,
}: CardProps) {
  return (
    <div
      className={`
        bg-white rounded-2xl
        ${border ? 'border border-neutral-200' : ''}
        ${hover ? 'hover:shadow-xl hover:-translate-y-1 transition-all duration-300' : 'shadow-sm'}
        ${paddingStyles[padding]}
        ${className}
      `}
    >
      {children}
    </div>
  );
}

/* Card sub-components for composition */
export function CardHeader({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return <div className={`mb-4 ${className}`}>{children}</div>;
}

export function CardBody({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return <div className={className}>{children}</div>;
}

export function CardFooter({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return <div className={`mt-6 pt-4 border-t border-neutral-100 ${className}`}>{children}</div>;
}
