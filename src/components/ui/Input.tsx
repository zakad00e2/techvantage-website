/**
 * Input Component
 * Form input with labels, validation states, and helper text.
 */
import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  helper?: string;
}

export default function Input({
  label,
  error,
  helper,
  className = '',
  id,
  ...props
}: InputProps) {
  const inputId = id || label?.toLowerCase().replace(/\s/g, '-');
  return (
    <div className="w-full">
      {label && (
        <label htmlFor={inputId} className="block text-sm font-medium text-neutral-700 mb-1.5">
          {label}
        </label>
      )}
      <input
        id={inputId}
        className={`
          w-full rounded-xl border px-4 py-3 text-base
          transition-colors duration-200
          focus:outline-none focus:ring-2 focus:ring-offset-0
          placeholder:text-neutral-400
          ${
            error
              ? 'border-red-300 focus:border-red-500 focus:ring-red-200'
              : 'border-neutral-300 focus:border-primary-500 focus:ring-primary-200'
          }
          ${className}
        `}
        {...props}
      />
      {error && <p className="mt-1.5 text-sm text-red-600">{error}</p>}
      {helper && !error && <p className="mt-1.5 text-sm text-neutral-500">{helper}</p>}
    </div>
  );
}

/**
 * Textarea variant
 */
export function Textarea({
  label,
  error,
  helper,
  className = '',
  id,
  ...props
}: InputProps & React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
  const inputId = id || label?.toLowerCase().replace(/\s/g, '-');
  return (
    <div className="w-full">
      {label && (
        <label htmlFor={inputId} className="block text-sm font-medium text-neutral-700 mb-1.5">
          {label}
        </label>
      )}
      <textarea
        id={inputId}
        rows={5}
        className={`
          w-full rounded-xl border px-4 py-3 text-base
          transition-colors duration-200
          focus:outline-none focus:ring-2 focus:ring-offset-0
          placeholder:text-neutral-400
          ${
            error
              ? 'border-red-300 focus:border-red-500 focus:ring-red-200'
              : 'border-neutral-300 focus:border-primary-500 focus:ring-primary-200'
          }
          ${className}
        `}
        {...props}
      />
      {error && <p className="mt-1.5 text-sm text-red-600">{error}</p>}
      {helper && !error && <p className="mt-1.5 text-sm text-neutral-500">{helper}</p>}
    </div>
  );
}
