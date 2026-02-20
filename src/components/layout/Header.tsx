/**
 * Header Component
 * Sticky header with logo, mega menu for services, language switcher, and CTA.
 */
'use client';

import React, { useState, useEffect } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { Link } from '@/i18n/navigation';
import LanguageSwitcher from './LanguageSwitcher';
import { siteConfig, type Locale } from '@/config/site';
import { getServices } from '@/content/services';

export default function Header() {
  const t = useTranslations('nav');
  const locale = useLocale() as Locale;
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const services = getServices();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setServicesOpen(false);
  }, []);

  const navLinks = [
    { href: '/', label: t('home') },
    { href: '/services', label: t('services'), hasMega: true },
    { href: '/legal', label: t('legalSolutions') },
    { href: '/blog', label: t('blog') },
    { href: '/about', label: t('about') },
    { href: '/contact', label: t('contact') },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-lg shadow-md border-b border-neutral-100'
          : 'bg-white/80 backdrop-blur-sm'
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-gradient-to-br from-primary-600 to-primary-800 rounded-xl flex items-center justify-center text-white font-bold text-lg shadow-md group-hover:shadow-lg transition-shadow">
              TV
            </div>
            <span className="hidden sm:block text-lg font-bold text-neutral-900">
              {siteConfig.name[locale]}
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <div
                key={link.href}
                className="relative"
                onMouseEnter={() => link.hasMega && setServicesOpen(true)}
                onMouseLeave={() => link.hasMega && setServicesOpen(false)}
              >
                <Link
                  href={link.href}
                  className="px-4 py-2 text-sm font-medium text-neutral-700 hover:text-primary-600 rounded-lg hover:bg-primary-50 transition-colors duration-200"
                >
                  {link.label}
                </Link>

                {/* Mega Menu for Services */}
                {link.hasMega && servicesOpen && (
                  <div className="absolute top-full start-1/2 -translate-x-1/2 rtl:translate-x-1/2 pt-2 w-[700px] z-50">
                    <div className="bg-white rounded-2xl shadow-2xl border border-neutral-100 p-6 grid grid-cols-2 gap-4">
                      {services.map((service) => (
                        <Link
                          key={service.slug}
                          href={`/services/${service.slug}`}
                          className="flex items-start gap-3 p-3 rounded-xl hover:bg-primary-50 transition-colors group"
                        >
                          <span className="text-2xl flex-shrink-0 mt-0.5">{service.icon}</span>
                          <div>
                            <p className="font-semibold text-neutral-900 group-hover:text-primary-600 transition-colors">
                              {service.title[locale]}
                            </p>
                            <p className="text-sm text-neutral-500 line-clamp-2 mt-0.5">
                              {service.shortDescription[locale]}
                            </p>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Right Actions */}
          <div className="hidden lg:flex items-center gap-3">
            <LanguageSwitcher label={t('language')} />
            <Link
              href="/contact"
              className="inline-flex items-center px-5 py-2.5 bg-primary-600 text-white text-sm font-semibold rounded-xl hover:bg-primary-700 transition-colors shadow-md hover:shadow-lg"
            >
              {t('getStarted')}
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden p-2 rounded-lg hover:bg-neutral-100 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6 text-neutral-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-neutral-100 shadow-lg">
          <div className="px-4 py-4 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block px-4 py-3 text-base font-medium text-neutral-700 hover:text-primary-600 hover:bg-primary-50 rounded-xl transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-4 mt-4 border-t border-neutral-100 flex items-center gap-3">
              <LanguageSwitcher label={t('language')} />
              <Link
                href="/contact"
                className="flex-1 text-center px-5 py-2.5 bg-primary-600 text-white text-sm font-semibold rounded-xl hover:bg-primary-700 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {t('getStarted')}
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
