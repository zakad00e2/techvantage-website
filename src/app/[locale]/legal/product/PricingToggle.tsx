/**
 * Pricing Toggle — Client component for monthly/annual pricing switch.
 */
'use client';

import React, { useState } from 'react';
import { Card, Button, Badge } from '@/components/ui';
import type { PricingPlan } from '@/content/pricing';
import type { Locale } from '@/config/site';

interface PricingToggleProps {
  plans: PricingPlan[];
  locale: Locale;
}

export default function PricingToggle({ plans, locale }: PricingToggleProps) {
  const [annual, setAnnual] = useState(true);

  const monthlyLabel = locale === 'ar' ? 'شهري' : 'Monthly';
  const annualLabel = locale === 'ar' ? 'سنوي' : 'Annually';
  const saveLabel = locale === 'ar' ? 'وفّر 20%' : 'Save 20%';
  const perMonth = locale === 'ar' ? '/شهر' : '/month';
  const popularLabel = locale === 'ar' ? 'الأكثر شعبية' : 'Most Popular';
  const trialLabel = locale === 'ar' ? 'ابدأ تجربة مجانية' : 'Start Free Trial';
  const contactLabel = locale === 'ar' ? 'تواصل مع المبيعات' : 'Contact Sales';
  const customLabel = locale === 'ar' ? 'مخصص' : 'Custom';

  return (
    <div>
      {/* Toggle */}
      <div className="flex items-center justify-center gap-4 mb-12">
        <span className={`font-medium ${!annual ? 'text-neutral-900' : 'text-neutral-400'}`}>
          {monthlyLabel}
        </span>
        <button
          onClick={() => setAnnual(!annual)}
          className={`relative w-14 h-7 rounded-full transition-colors ${
            annual ? 'bg-primary-600' : 'bg-neutral-300'
          }`}
        >
          <span
            className={`absolute top-0.5 w-6 h-6 bg-white rounded-full shadow transition-transform ${
              annual ? 'translate-x-7' : 'translate-x-0.5'
            }`}
          />
        </button>
        <span className={`font-medium ${annual ? 'text-neutral-900' : 'text-neutral-400'}`}>
          {annualLabel}
        </span>
        {annual && (
          <Badge variant="success" size="sm">{saveLabel}</Badge>
        )}
      </div>

      {/* Plans Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {plans.map((plan) => {
          const price = annual ? plan.annualPrice : plan.monthlyPrice;
          const isCustom = price === 0;

          return (
            <Card
              key={plan.id}
              padding="lg"
              className={`relative flex flex-col ${
                plan.highlighted
                  ? 'border-2 border-primary-500 shadow-xl scale-105 z-10'
                  : ''
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-4 start-1/2 -translate-x-1/2">
                  <Badge variant="primary" size="md">{popularLabel}</Badge>
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-xl font-bold text-neutral-900">{plan.name[locale]}</h3>
                <p className="mt-1 text-neutral-500 text-sm">{plan.description[locale]}</p>
              </div>

              <div className="mb-6">
                {isCustom ? (
                  <div className="text-4xl font-extrabold text-neutral-900">{customLabel}</div>
                ) : (
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-extrabold text-neutral-900">${price}</span>
                    <span className="text-neutral-500">{perMonth}</span>
                  </div>
                )}
              </div>

              <ul className="space-y-3 mb-8 flex-1">
                {plan.features[locale].map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm">
                    <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-neutral-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                variant={plan.highlighted ? 'primary' : 'outline'}
                fullWidth
                size="lg"
              >
                {plan.cta === 'trial' ? trialLabel : contactLabel}
              </Button>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
