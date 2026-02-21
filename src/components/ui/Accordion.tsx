/**
 * Accordion Component
 * Expandable/collapsible content sections, used for FAQ and similar patterns.
 */
'use client';

import React, { useState } from 'react';

interface AccordionItem {
  id: string;
  title: string;
  content: string;
}

interface AccordionProps {
  items: AccordionItem[];
  className?: string;
  allowMultiple?: boolean;
}

export default function Accordion({
  items,
  className = '',
  allowMultiple = false,
}: AccordionProps) {
  const [openItems, setOpenItems] = useState<Set<string>>(new Set());

  const toggle = (id: string) => {
    setOpenItems((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        if (!allowMultiple) next.clear();
        next.add(id);
      }
      return next;
    });
  };

  return (
    <div className={`divide-y divide-neutral-200 border-y border-neutral-200 ${className}`}>
      {items.map((item) => {
        const isOpen = openItems.has(item.id);
        return (
          <div key={item.id}>
            <button
              onClick={() => toggle(item.id)}
              className="w-full flex items-center justify-between py-5 px-1 text-left group cursor-pointer"
              aria-expanded={isOpen}
            >
              <span className="text-lg font-semibold text-neutral-900 group-hover:text-primary-600 transition-colors">
                {item.title}
              </span>
              <svg
                className={`w-5 h-5 text-neutral-500 transition-transform duration-300 flex-shrink-0 ms-4 ${
                  isOpen ? 'rotate-180' : ''
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                isOpen ? 'max-h-96 pb-5' : 'max-h-0'
              }`}
            >
              <p className="text-neutral-600 leading-relaxed px-1">{item.content}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
