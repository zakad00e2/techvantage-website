/**
 * Structured Data (JSON-LD) generators for SEO.
 * Generates Organization, Product, and Article schemas.
 */
import { siteConfig } from '@/config/site';

/**
 * Organization schema for the company.
 */
export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: siteConfig.name.en,
    alternateName: siteConfig.name.ar,
    url: siteConfig.url,
    logo: `${siteConfig.url}/images/logo.png`,
    description: siteConfig.description.en,
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'King Fahd Road',
      addressLocality: 'Riyadh',
      addressCountry: 'SA',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: siteConfig.contact.phone,
      email: siteConfig.contact.email,
      contactType: 'customer service',
      availableLanguage: ['English', 'Arabic'],
    },
    sameAs: [
      siteConfig.social.twitter,
      siteConfig.social.linkedin,
      siteConfig.social.github,
    ],
  };
}

/**
 * Product schema for LegalEdge Pro.
 */
export function generateProductSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'LegalEdge Pro',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web',
    description:
      'All-in-one legal office management system for case management, document automation, billing, and client communication.',
    url: `${siteConfig.url}/en/legal/product`,
    offers: [
      {
        '@type': 'Offer',
        name: 'Starter',
        price: '49',
        priceCurrency: 'USD',
        priceSpecification: {
          '@type': 'UnitPriceSpecification',
          price: '49',
          priceCurrency: 'USD',
          billingDuration: 'P1M',
        },
      },
      {
        '@type': 'Offer',
        name: 'Professional',
        price: '99',
        priceCurrency: 'USD',
        priceSpecification: {
          '@type': 'UnitPriceSpecification',
          price: '99',
          priceCurrency: 'USD',
          billingDuration: 'P1M',
        },
      },
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      ratingCount: '156',
      bestRating: '5',
    },
    provider: {
      '@type': 'Organization',
      name: siteConfig.name.en,
    },
  };
}

/**
 * Article schema for blog posts.
 */
export function generateArticleSchema(article: {
  title: string;
  description: string;
  url: string;
  date: string;
  author: string;
  image?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.description,
    url: article.url,
    datePublished: article.date,
    dateModified: article.date,
    author: {
      '@type': 'Person',
      name: article.author,
    },
    publisher: {
      '@type': 'Organization',
      name: siteConfig.name.en,
      logo: {
        '@type': 'ImageObject',
        url: `${siteConfig.url}/images/logo.png`,
      },
    },
    image: article.image || `${siteConfig.url}/images/og-default.jpg`,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': article.url,
    },
  };
}

/**
 * WebSite schema for search engines.
 */
export function generateWebsiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: siteConfig.name.en,
    alternateName: siteConfig.name.ar,
    url: siteConfig.url,
    inLanguage: ['en', 'ar'],
    potentialAction: {
      '@type': 'SearchAction',
      target: `${siteConfig.url}/en/blog?q={search_term_string}`,
      'query-input': 'required name=search_term_string',
    },
  };
}
