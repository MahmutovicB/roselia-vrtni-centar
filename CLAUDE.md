# CLAUDE.md — Roselia Vrtni Centar Website Project

> This file is the single source of truth for every Claude Code session on this project.
> Read it fully at the start of every session before writing or modifying any code.

---

## 👤 Client Overview

- **Business name:** Roselia Vrtni Centar
- **Type:** Garden center (vrtni centar) — sadnice, cvijeće, alat, sjeme, radne mašine
- **Founded:** December 2020
- **Owner profile:** Young entrepreneur, strong local reputation
- **Location:** Moševićka bb, Podlugovi 71380 (preko puta pošte u Podlugovima)
- **Municipality:** Općina Ilijaš, Kanton Sarajevo, BiH
- **Phone:** 061 559 593
- **Email:** vrt.roselia@gmail.com
- **Instagram:** https://www.instagram.com/vrtroselia/ (@vrtroselia — 304 followera, 27 postova)
- **Facebook:** https://www.facebook.com/roseliavrt/ (529 lajkova)

### Working Hours
| Day | Hours |
|-----|-------|
| Monday | 08:00 – 17:00 |
| Tuesday | 08:00 – 17:00 |
| Wednesday | 08:00 – 17:00 |
| Thursday | 08:00 – 17:00 |
| Friday | 08:00 – 17:00 |
| Saturday | 08:00 – 17:00 |
| Sunday | ZATVORENO |

---

## 🎯 Project Goals (Priority Order)

1. **Build brand credibility** — establish Roselia as the go-to garden center in the Ilijaš region
2. **Showcase products & services** — present the offer visually and clearly
3. **Drive calls / direct inquiries** — every CTA leads to a phone call or contact form

> There is NO e-commerce, NO booking system, NO CMS required. This is a static showcase site.

---

## 🧱 Tech Stack

| Layer | Technology | Reason |
|-------|------------|--------|
| Framework | Next.js 14 (App Router) | SSG/SSR, SEO-friendly, Vercel deployment |
| Styling | Tailwind CSS | Utility-first, mobile-first, fast |
| Animations | Framer Motion | Subtle, performant scroll animations |
| Forms | React Hook Form + Resend API | Simple, free tier (3k emails/mo) |
| Images | Next.js `<Image>` component | Auto WebP, lazy load, responsive sizes |
| SEO | Next.js Metadata API (App Router) | Built-in, no extra library needed |
| Deployment | Vercel (free tier) | Zero-config, auto HTTPS, fast CDN |
| Analytics | Vercel Analytics (free) | Lightweight, privacy-friendly |

---

## 🗂️ Site Architecture

Single-page layout with anchor-based navigation. All content on one scroll. One additional route for form success.

```
/ (homepage)
├── #hero          Hero section — full-bleed visual, tagline, dual CTA
├── #o-nama        About — brand story, local roots, young entrepreneur angle
├── #usluge        Products & Services — what Roselia offers
├── #galerija      Gallery — Instagram-style photo grid
└── #kontakt       Contact — form + Google Maps embed + phone/address/hours

/zahvalnost        Thank you page after form submission (for conversion tracking)
```

### File/Folder Structure

```
roselia-vrtni-centar/
├── CLAUDE.md                        ← You are here
├── public/
│   ├── logo.png                     ← Roselia logo (tamnocrvena ruža + wordmark)
│   ├── og-image.jpg                 ← Open Graph image (1200x630)
│   └── images/                      ← All gallery/hero photos (optimized)
├── src/
│   └── app/
│       ├── layout.tsx               ← Root layout, metadata, fonts, global SEO
│       ├── page.tsx                 ← Homepage — imports all sections
│       ├── zahvalnost/
│       │   └── page.tsx             ← Thank you page
│       ├── components/
│       │   ├── layout/
│       │   │   ├── Navbar.tsx       ← Sticky mobile-first navbar, hamburger menu
│       │   │   └── Footer.tsx       ← Footer with links, social, copyright
│       │   └── sections/
│       │       ├── Hero.tsx         ← Full-bleed hero with CTA
│       │       ├── ONama.tsx        ← About section
│       │       ├── Usluge.tsx       ← Services/products grid
│       │       ├── Galerija.tsx     ← Photo gallery grid
│       │       └── Kontakt.tsx      ← Contact form + map
│       └── api/
│           └── kontakt/
│               └── route.ts         ← API route for contact form (Resend)
├── tailwind.config.ts
└── next.config.ts
```

---

## 🎨 Brand & Design System

### Brand Colors (extracted from logo)

```ts
// tailwind.config.ts — extend colors with:
colors: {
  roselia: {
    red:       '#8B1A1A',  // Primary — tamnocrvena ruža (logo dominant color)
    'red-dark': '#6B1414', // Hover states, darker accents
    'red-light': '#A52020', // Lighter variant
    cream:     '#FAF7F2',  // Background — warm off-white
    'cream-dark': '#F0EBE1', // Section alternating background
    earth:     '#5C4033',  // Earthy brown — text, secondary elements
    'earth-light': '#8B6355', // Lighter earth tone
    green:     '#2D5016',  // Deep forest green — accents, icons
    'green-light': '#4A7A25', // Lighter green
    charcoal:  '#1A1A1A',  // Near-black for headings (matches logo text)
    white:     '#FFFFFF',
  }
}
```

### Typography

```ts
// Use Google Fonts via next/font:
// Headings: Playfair Display (serif — elegant, matches logo serif feel)
// Body: Inter (clean, readable on mobile)
// Accent/tagline: Playfair Display Italic

fonts: {
  heading: 'Playfair Display',
  body: 'Inter',
}
```

### Design Principles

- **Mobile-first** — design for 375px width, scale up. Most traffic from Instagram/Facebook links.
- **Nature aesthetic** — use overlapping organic shapes, leaf motifs (SVG), natural textures
- **Warm, not cold** — avoid pure white backgrounds; use cream tones to feel inviting
- **Photography-forward** — images are the hero; let them breathe with generous whitespace
- **One warm overlay** — apply a subtle warm color-mix overlay on inconsistent phone photos to unify the gallery look
- **Subtle animations** — Framer Motion fade-in-up on scroll, nothing flashy

### Logo Usage

- Logo file: `/public/logo.png` — tamnocrvena ruža + "ROSELIA VRTNI CENTAR" wordmark
- On dark/photo backgrounds: use white version or place on dark overlay
- On light backgrounds: use original full-color version
- Minimum size: 120px wide on mobile

---

## 🔍 Local SEO Strategy

### Primary Target Keywords (Bosnian/local language)

```
vrtni centar Ilijaš
vrtni centar Podlugovi
sadnice Ilijaš
cvijeće Podlugovi
sadnice Breza
vrtni centar Visoko
sadnice Visoko
vrtlarstvo Ilijaš
kupiti cvijeće Ilijaš
ruže sadnice Podlugovi
alat za vrt Ilijaš
```

### Page Title Tag
```
Roselia Vrtni Centar Podlugovi | Sadnice, Cvijeće i Alat – Ilijaš, Breza, Visoko
```

### Meta Description
```
Roselia Vrtni Centar u Podlugovima – vaš lokalni izbor za sadnice, cvijeće, vrtni alat i sjeme. Posjetite nas u ulici Moševićka, Podlugovi. Radimo pon–sub 8:00–17:00. ☎ 061 559 593
```

### Open Graph Tags
- `og:title` — same as page title
- `og:description` — same as meta description
- `og:image` — `/public/og-image.jpg` (1200x630px, branded image with logo)
- `og:type` — `website`
- `og:locale` — `bs_BA`

### JSON-LD LocalBusiness Schema (insert in layout.tsx)

```json
{
  "@context": "https://schema.org",
  "@type": "GardenStore",
  "name": "Roselia Vrtni Centar",
  "image": "https://roselia.ba/og-image.jpg",
  "url": "https://roselia.ba",
  "telephone": "+38761559593",
  "email": "vrt.roselia@gmail.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Moševićka bb",
    "addressLocality": "Podlugovi",
    "postalCode": "71380",
    "addressCountry": "BA"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 43.9747,
    "longitude": 18.2853
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],
      "opens": "08:00",
      "closes": "17:00"
    }
  ],
  "sameAs": [
    "https://www.instagram.com/vrtroselia/",
    "https://www.facebook.com/roseliavrt/"
  ]
}
```

---

## 📱 Sections — Content & Copy Guide

### 1. Hero Section (`#hero`)
- **Layout:** Full-viewport height, full-bleed background image (best available photo), dark overlay (20–30% opacity), content centered/left-aligned
- **Tagline (H1):** `Vaš zeleni kutak u srcu Podlugova`
- **Subtext:** `Sadnice, cvijeće, alat i sve za vaš vrt — na jednom mjestu u Podlugovima.`
- **CTA buttons (two):**
  - Primary: `Pozovite nas` → `tel:+38761559593`
  - Secondary: `Pogledajte ponudu` → `#usluge` (smooth scroll)
- **Bottom element:** Subtle scroll indicator (animated arrow)

### 2. O Nama Section (`#o-nama`)
- **Layout:** Two-column on desktop (text left, image right), stacked on mobile
- **Heading:** `Naša priča`
- **Copy direction:** Local roots, opened 2020, young owner with passion for plants and nature, serving Ilijaš municipality and surrounding areas (Breza, Visoko). Welcoming atmosphere, expert advice. Feel free to write natural-sounding copy — avoid corporate tone.
- **Trust signal:** "Otvoreni od 2020. godine — prepoznatljivi u Podlugovima"

### 3. Usluge Section (`#usluge`)
- **Layout:** Grid of cards (2 cols mobile, 3–4 cols desktop)
- **Heading:** `Šta nudimo`
- **Service/product categories** (based on research):
  1. 🌹 Sadnice i cvijeće
  2. 🌳 Ukrasno bilje i drveće
  3. 🌱 Sjeme i gnojiva
  4. 🔧 Vrtni alat i oprema
  5. 🚜 Radne mašine
  6. 🪴 Lončanice i tegle
- **Card design:** Icon (SVG/emoji) + category name + short description, roselia-red accent on hover

### 4. Galerija Section (`#galerija`)
- **Layout:** Masonry or uniform grid (3 cols mobile, 4 cols desktop)
- **Source:** Client's Instagram/phone photos
- **Heading:** `Iz našeg centra`
- **Overlay on hover:** Subtle darkening, no text needed
- **Note:** Apply `mix-blend-mode` warm filter or CSS filter to unify inconsistent phone photos
- **Link at bottom:** `Pratite nas na Instagramu @vrtroselia` → opens instagram in new tab

### 5. Kontakt Section (`#kontakt`)
- **Layout:** Two-column (form left, info + map right), stacked on mobile
- **Heading:** `Pronađite nas`
- **Form fields:** Ime i prezime, Email ili telefon, Poruka (textarea), Submit button
- **Form action:** POST to `/api/kontakt` → Resend API → email to `vrt.roselia@gmail.com`
- **Success redirect:** `/zahvalnost`
- **Info block:**
  - 📍 Moševićka bb, Podlugovi 71380
  - 📞 061 559 593
  - 🕐 Pon–Sub: 08:00–17:00 | Ned: Zatvoreno
  - 📸 @vrtroselia (Instagram link)
  - 📘 Vrt Roselia (Facebook link)
- **Map:** Google Maps embed (iframe) showing Podlugovi location

---

## ⚡ Performance Requirements

- Lighthouse mobile score target: **90+**
- Core Web Vitals: LCP < 2.5s, CLS < 0.1, FID < 100ms
- All images: Next.js `<Image>` with `sizes` prop, WebP format
- Hero image: `priority` prop (preload), appropriate `sizes`
- Fonts: `next/font/google` with `display: 'swap'`
- No layout shift on load — set explicit `width` and `height` on all images
- Framer Motion: Use `LazyMotion` with `domAnimation` features only (reduces bundle)

---

## 📦 Build Order / Task List

Work through these in order. Check off as completed.

- [ ] 1. `npx create-next-app@latest roselia-vrtni-centar` (TypeScript, Tailwind, App Router, src/ dir)
- [ ] 2. Install dependencies: `framer-motion`, `react-hook-form`, `resend`, `@hookform/resolvers`, `zod`
- [ ] 3. Configure `tailwind.config.ts` — add roselia color tokens and font config
- [ ] 4. Set up `next/font` in `layout.tsx` — Playfair Display + Inter
- [ ] 5. Add global CSS variables and base styles in `globals.css`
- [ ] 6. Place logo in `/public/logo.png`
- [ ] 7. Build `Navbar.tsx` — sticky, mobile hamburger, smooth scroll anchor links
- [ ] 8. Build `Footer.tsx` — links, social icons, copyright, address
- [ ] 9. Build `Hero.tsx` — full-bleed, overlay, tagline, dual CTA
- [ ] 10. Build `ONama.tsx` — about section with image
- [ ] 11. Build `Usluge.tsx` — service cards grid
- [ ] 12. Build `Galerija.tsx` — photo grid
- [ ] 13. Build `Kontakt.tsx` — form + map + info block
- [ ] 14. Wire up `page.tsx` — import all sections in order
- [ ] 15. Create `/api/kontakt/route.ts` — Resend email API
- [ ] 16. Create `/zahvalnost/page.tsx` — thank you page
- [ ] 17. Add metadata to `layout.tsx` — title, description, OG tags, robots
- [ ] 18. Add JSON-LD LocalBusiness schema to `layout.tsx`
- [ ] 19. Create `sitemap.ts` and `robots.ts` in `/app`
- [ ] 20. Final audit — Lighthouse, mobile responsiveness, form test, smooth scroll test
- [ ] 21. Deploy to Vercel — connect domain (roselia.ba if available)

---

## 🚫 Constraints & Don'ts

- **NO** e-commerce or shopping cart
- **NO** CMS or admin panel
- **NO** user accounts or authentication
- **NO** heavy JavaScript libraries (keep bundle lean)
- **NO** Bootstrap or other CSS frameworks — Tailwind only
- **NO** placeholder lorem ipsum in final build — use real Bosnian copy
- **DO NOT** use `export default function Page()` without proper metadata per page
- **DO NOT** use client components unnecessarily — keep `'use client'` only where truly needed (forms, animations)

---

## 🔑 Environment Variables (add to `.env.local`)

```env
RESEND_API_KEY=your_resend_api_key_here
CONTACT_EMAIL=vrt.roselia@gmail.com
NEXT_PUBLIC_SITE_URL=https://roselia.ba
```

---

## 📝 Notes for Claude Code Sessions

- Always check this file at session start before any code changes
- When building components, always start mobile-first (375px) then scale up with Tailwind breakpoints (`sm:`, `md:`, `lg:`)
- All user-facing text should be in Bosnian/Croatian language
- When adding animations with Framer Motion, always include `reduced-motion` media query fallback
- Test every interactive element (nav, form, CTAs) at 375px width before moving on
- Images from client are phone photos — always use `object-fit: cover` and warm CSS filter to unify
- The contact form is the most critical functional element — test thoroughly including error states
