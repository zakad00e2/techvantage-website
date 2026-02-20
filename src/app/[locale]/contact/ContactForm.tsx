/**
 * Contact Form — Client component with form handling.
 */
'use client';

import React, { useState } from 'react';
import { useTranslations } from 'next-intl';
import { Button } from '@/components/ui';
import Input, { Textarea } from '@/components/ui/Input';

export default function ContactForm() {
  const t = useTranslations('contact');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setLoading(false);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="p-8 bg-green-50 rounded-2xl border border-green-200 text-center">
        <span className="text-5xl block mb-4">✅</span>
        <p className="text-lg font-semibold text-green-800">{t('successMessage')}</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Input label={t('nameLabel')} name="name" required placeholder="John Doe" />
        <Input label={t('emailLabel')} name="email" type="email" required placeholder="john@company.com" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Input label={t('phoneLabel')} name="phone" type="tel" placeholder="+966 50 000 0000" />
        <Input label={t('companyLabel')} name="company" placeholder="Company Inc." />
      </div>
      <Input label={t('subjectLabel')} name="subject" required placeholder="" />
      <Textarea label={t('messageLabel')} name="message" required placeholder="" />
      <Button type="submit" size="lg" loading={loading}>
        {t('submitButton')}
      </Button>
    </form>
  );
}
