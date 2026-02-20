/**
 * FAQ Section — Client component with accordion.
 */
'use client';

import React from 'react';
import { Accordion } from '@/components/ui';
import type { FAQ } from '@/content/faq';
import type { Locale } from '@/config/site';

interface FAQSectionProps {
  faqs: FAQ[];
  locale: Locale;
}

export default function FAQSection({ faqs, locale }: FAQSectionProps) {
  const items = faqs.map((faq) => ({
    id: faq.id,
    title: faq.question[locale],
    content: faq.answer[locale],
  }));

  return <Accordion items={items} />;
}
