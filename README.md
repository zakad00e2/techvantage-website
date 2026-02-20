# TechVantage Solutions — Corporate Website

A production-ready, bilingual (English + Arabic RTL) corporate website for a technology company that provides general digital services and offers **LegalEdge Pro**, a specialized legal office management system, as a standalone product.

Built with **Next.js 16** (App Router), **TypeScript**, **TailwindCSS 4**, and **next-intl** for full internationalization.

---

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Content Management (File-Based CMS)](#content-management-file-based-cms)
- [Internationalization (i18n)](#internationalization-i18n)
- [SEO](#seo)
- [Deployment](#deployment)

---

## Features

- **Bilingual** — English (LTR) and Arabic (RTL) with automatic direction switching
- **File-Based CMS** — Edit content in simple TypeScript files, no database required
- **SEO Optimized** — Auto-generated sitemap, robots.txt, JSON-LD structured data, Open Graph, Twitter Cards
- **Performance** — Lazy-loaded images (AVIF/WebP), font preconnect, page-level loading states
- **Security** — HSTS, X-Frame-Options DENY, Content-Type sniffing protection, Permissions-Policy
- **Responsive** — Mobile-first design with sticky header and hamburger menu
- **Accessible** — Semantic HTML, ARIA attributes, keyboard navigable
- **Modular Design System** — Reusable UI primitives (Button, Card, Section, Accordion, Badge, Input)

### Pages

| Route | Description |
|---|---|
| `/` | Redirects to `/en` |
| `/[locale]` | Home — hero, stats, services, testimonials, blog, CTA |
| `/[locale]/services` | Services overview grid |
| `/[locale]/services/[slug]` | Individual service detail page |
| `/[locale]/legal` | Legal solutions overview |
| `/[locale]/legal/product` | LegalEdge Pro product landing page (SaaS) |
| `/[locale]/blog` | Blog index with article cards |
| `/[locale]/blog/[slug]` | Individual article page |
| `/[locale]/about` | Company story, team, values, timeline |
| `/[locale]/contact` | Contact form + company info |
| `/[locale]/privacy` | Privacy policy |

---

## Tech Stack

| Technology | Purpose |
|---|---|
| [Next.js 16](https://nextjs.org/) | React framework (App Router) |
| [TypeScript](https://www.typescriptlang.org/) | Type safety |
| [TailwindCSS 4](https://tailwindcss.com/) | Utility-first CSS with `@theme` |
| [next-intl](https://next-intl.dev/) | i18n routing + translations |
| [sharp](https://sharp.pixelplumbing.com/) | Image optimization |
| [gray-matter](https://github.com/jonschlinkert/gray-matter) + [remark](https://remark.js.org/) | Markdown processing |

---

## Project Structure

```
src/
├── app/
│   ├── [locale]/          # All locale-scoped pages & layouts
│   │   ├── layout.tsx     # Locale layout (HTML, fonts, header/footer)
│   │   ├── loading.tsx    # Page loading skeleton
│   │   ├── page.tsx       # Home page
│   │   ├── services/      # Services pages
│   │   ├── legal/         # Legal solutions & product page
│   │   ├── blog/          # Blog pages
│   │   ├── about/         # About page
│   │   ├── contact/       # Contact page
│   │   └── privacy/       # Privacy policy
│   ├── layout.tsx         # Root layout (minimal shell)
│   ├── page.tsx           # Root redirect → /en
│   ├── not-found.tsx      # 404 page
│   ├── sitemap.ts         # Auto-generated sitemap
│   └── robots.ts          # robots.txt
├── components/
│   ├── layout/            # Header, Footer, LanguageSwitcher
│   └── ui/                # Button, Card, Section, Badge, Accordion, Input, Loading
├── config/
│   ├── site.ts            # Company info, URLs, social links
│   └── tokens.ts          # Design system tokens (colors, typography, spacing)
├── content/               # ← FILE-BASED CMS (edit these files)
│   ├── services.ts        # 6 services
│   ├── articles.ts        # Blog articles
│   ├── testimonials.ts    # Customer testimonials
│   ├── faq.ts             # LegalEdge Pro FAQs
│   ├── pricing.ts         # Pricing plans
│   ├── team.ts            # Team members
│   └── index.ts           # Barrel exports
├── i18n/
│   ├── routing.ts         # Locale config
│   ├── request.ts         # Message loader
│   └── navigation.ts      # Locale-aware Link, redirect, etc.
├── lib/
│   └── structured-data.ts # JSON-LD schema generators
├── messages/
│   ├── en.json            # English translations
│   └── ar.json            # Arabic translations
└── middleware.ts           # i18n middleware
```

---

## Getting Started

### Prerequisites

- **Node.js** >= 18.18
- **npm** >= 9 (or pnpm / yarn)

### Install & Run

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Build for Production

```bash
npm run build
npm start
```

---

## Content Management (File-Based CMS)

All website content lives in `src/content/`. To add or edit content, simply modify the TypeScript files — no database, no headless CMS, no API keys.

### Adding a Service

Edit `src/content/services.ts`:

```typescript
{
  slug: 'my-new-service',
  icon: '🚀',
  title: {
    en: 'My New Service',
    ar: 'خدمتي الجديدة',
  },
  description: {
    en: 'Description in English...',
    ar: 'الوصف بالعربية...',
  },
  features: {
    en: ['Feature 1', 'Feature 2'],
    ar: ['ميزة 1', 'ميزة 2'],
  },
}
```

### Adding a Blog Article

Edit `src/content/articles.ts`:

```typescript
{
  slug: 'my-article',
  title: { en: '...', ar: '...' },
  excerpt: { en: '...', ar: '...' },
  content: { en: '<p>HTML content</p>', ar: '<p>محتوى HTML</p>' },
  author: { name: { en: 'Name', ar: 'الاسم' }, role: { en: 'Role', ar: 'الدور' } },
  date: '2025-01-15',
  category: { en: 'Tech', ar: 'تقنية' },
  readTime: { en: '5 min read', ar: '5 دقائق قراءة' },
  featured: false,
}
```

### Editing Pricing

Edit `src/content/pricing.ts` — change prices, features, plan names.

### UI Text & Translations

Edit `src/messages/en.json` and `src/messages/ar.json` for all navigation labels, headings, button text, and page copy.

---

## Internationalization (i18n)

- **Locales**: `en` (default), `ar`
- **Direction**: Automatically sets `dir="rtl"` for Arabic
- **Fonts**: Inter (English) + IBM Plex Sans Arabic (Arabic)
- **URL Structure**: `/en/services`, `/ar/services`
- **Language Switcher**: Toggle between locales from the header

To add a new locale:

1. Add it to `src/i18n/routing.ts` → `locales` array
2. Create `src/messages/{locale}.json`
3. Add translations for content in `src/content/*.ts`

---

## SEO

- **Sitemap** — Auto-generated at `/sitemap.xml` from all routes and content
- **Robots.txt** — At `/robots.txt`, allows all crawlers, blocks `/api/` and `/_next/`
- **Structured Data** — JSON-LD schemas for Organization, Website, Product (LegalEdge Pro), and Articles
- **Meta Tags** — Open Graph, Twitter Cards, canonical URLs, alternate hreflang per locale
- **Security Headers** — HSTS, X-Frame-Options, Permissions-Policy, and more

---

## Deployment

### Vercel (Recommended)

```bash
npx vercel
```

Or connect the GitHub repository to [vercel.com](https://vercel.com).

### Docker

```dockerfile
FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM node:20-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/node_modules ./node_modules
EXPOSE 3000
CMD ["npm", "start"]
```

### Environment Variables

For production, update these values in `src/config/site.ts`:

| Variable | Description |
|---|---|
| `siteConfig.url` | Your production domain (currently `https://techvantage.com`) |
| `siteConfig.contact.email` | Contact email |
| `siteConfig.contact.phone` | Contact phone |
| `siteConfig.social.*` | Social media links |

---

## License

Private — All rights reserved.
