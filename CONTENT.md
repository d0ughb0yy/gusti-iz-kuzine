# Launch checklist — what to replace before going live

Everything below is a placeholder or an assumption in the prototype. Work top to bottom; the site is built to run without a CMS, so each item is a small edit in a JSON or TypeScript file.

Legend: **required** = do not launch without it · **recommended** = affects trust or legal safety · **optional** = nice to have.

---

## 1. Identity

| # | Item | Where | Current placeholder | Status |
| --- | --- | --- | --- | --- |
| 1.1 | Brand / site name | `src/config.ts` → `site.name` | `Gušti iz Kužine` | **done** — confirmed November 2026 |
| 1.2 | Chef's name | `src/data/site/hr.json` → `statement.attribution`; `src/data/site/en.json` → `statement.attribution` | `Tin Lučić` | **required** |
| 1.3 | Favicon | `public/favicon.svg` | Palette 3 monogram | optional |

The brand name is used in the header, footer, page titles, 404, and structured data. `src/config.ts` drives the layout templates; the hero's stacked name and page titles live in `src/data/site/hr.json` and `src/data/site/en.json`.

## 2. Booking

| # | Item | Where | Current placeholder | Status |
| --- | --- | --- | --- | --- |
| 2.1 | Take a Chef profile URL | `src/config.ts` → `bookingUrl` | `https://www.takeachef.com/en-hr/chef/tin-lu-i` | **required** |
| 2.2 | Confirm the profile accepts bookings for up to 6 guests | Take a Chef dashboard | — | **required** |
| 2.3 | Confirm service area matches the site | Take a Chef dashboard | Istria, Croatia | **required** |

Every CTA on both pages — hero, menu panel, gallery CTA band, footer — reads `bookingUrl`. Reservations still go through Take a Chef; the home page also carries a contact panel (see §10) for questions and custom ideas. If the profile URL is wrong, every button is wrong.

## 3. Copy

| # | Item | Where | Notes | Status |
| --- | --- | --- | --- | --- |
| 3.1 | Croatian copy review | `src/data/site/hr.json` | Written as a first draft; have the chef read it aloud and adjust to their voice. The intro byline fact (`intro.who.fact` — the grandmother's kitchen in Kužine) is a **drafted placeholder story, not confirmed biography** — Tin must confirm or rewrite it in his own words. | **required** |
| 3.2 | English copy review | `src/data/site/en.json` | Mirrors the Croatian structure key for key. If you add or remove a menu/item in one file, do the same in the other. | **required** |
| 3.3 | Service area wording | `src/config.ts` → `serviceArea`; both site JSON files (`hero.lead`, `faq`, `footer`) | Currently Istria / Istra. Decide whether nearby areas (Kvarner, Trieste, Ljubljana) should be mentioned. | recommended |
| 3.4 | Menu names, courses, and dishes | `hr.json` / `en.json` → `menus.items[].courses[].options` | Three sample menus: Ljubitelji mesa / Svježe i lokalno / Plodovi Jadrana. Each course holds one or two options: one option renders as a tasting course, two render as a choice. | **required** |
| 3.5 | "Included" list | `hr.json` / `en.json` → `included.rows` | Confirm each claim is true (travel, shopping, service, cleanup, discretion). | **required** |
| 3.6 | FAQ answers | `hr.json` / `en.json` → `faq.items` | Travel radius, kitchen requirements, lead time, deposit, cancellation. Current answers are plausible defaults, not confirmed policy. | **required** |
| 3.7 | Page titles and meta descriptions | `hr.json` / `en.json` → `meta`, `galleryPage.metaTitle`, `galleryPage.metaDescription` | Include the location and "private chef" for search. | recommended |
| 3.8 | 404 page copy | `src/pages/404.astro` | Bilingual by design. | optional |

## 4. Prices

The menu section does not show prices by design. Take a Chef issues the real quote after the guest sends an enquiry. If an indicative "from" price is added later, keep the wording and the disclaimer explicit.

## 5. Reviews

The current design has no reviews section, so there is nothing to replace or publish here.

## 6. Photography

> **Development status (2026-11-05):** stock photography is intentional while the site is in development. Do not treat it as a launch defect or replace it until Tin says the real shoot is ready. The `chef-portrait` / `gallery-plating` duplicate is deferred with it; resolve that with the real portrait, not another stock frame. Future critique runs should honour `.impeccable/critique/ignore.md`.
>
> **Decision (2026-11-06):** the gallery teaser's “photographs are temporary” note stays visible until Tin completes the real photo shoot. It is an intentional development disclosure, not a launch defect. The decision is also recorded in `.impeccable/critique/ignore.md` so future critiques drop it silently.

| # | Item | Where | Current placeholder | Status |
| --- | --- | --- | --- | --- |
| 6.1 | Replace all Unsplash photos with real work | `src/data/images.json` | Temporary hotlinked Unsplash images | **required** |
| 6.2 | Add local files | `public/images/` | Already holds the three Istrian photos | **required** |
| 6.3 | Set real dimensions | `src/data/images.json` → `width`, `height` | Unsplash dimensions | **required** |
| 6.4 | Rewrite alt text in both languages | `src/data/images.json` → `alt.hr`, `alt.en` | Descriptive, but describes stock photos | **required** |
| 6.5 | Update gallery captions | `src/data/gallery.json` | Generic dish descriptions | recommended |
| 6.6 | Replace the byline portrait with the chef's real photo | `images.json` → `chef-portrait` | The intro byline ships a hands-only stock placeholder. Swap in a real portrait of Tin (hands-and-face welcome); keep the hero and any other slot free of identifiable strangers. One entry: `src`, `full`, `width`, `height`, both `alt` texts. | **required** |

How to swap an image (four steps) is in `docs/development.md` → "Replacing an Unsplash image with a real photo". Keep the aspect ratio close to the slot it fills: hero and intro are 4:5, gallery images vary.

**Photo quality bar:** natural light, real tables, real hands, no heavy filters. The design leans on whitespace and typography; overly styled stock imagery undercuts it.

## 7. Domain and deployment

| # | Item | Where | Current placeholder | Status |
| --- | --- | --- | --- | --- |
| 7.1 | Production URL | `astro.config.mjs` → `site`; `src/config.ts` → `url` | `https://gusti-iz-kuzine.vercel.app` | **required** |
| 7.2 | Connect the custom domain in Vercel | Vercel dashboard | — | **required** |
| 7.3 | Rebuild after changing the URL | `npm run build` | — | **required** |
| 7.4 | Check canonical + hreflang after deploy | View source on the home, gallery and privacy pages in both languages | They derive from `site.url` | recommended |
| 7.5 | Submit the sitemap or request indexing | Google Search Console | No sitemap is generated; submit the six indexable URLs (home, gallery and privacy in both languages) manually or add `@astrojs/sitemap` | optional |
| 7.6 | Add an OG image if social previews matter | `src/layouts/BaseLayout.astro` → `ogImage` | Uses the hero Unsplash image | optional |

Vercel settings: framework Astro, build command `npm run build`, output directory `dist`, Node 24.x (from `package.json` `engines`). No functions, rewrites, or `vercel.json` are required.

## 8. Legal and trust (Croatia / EU)

| # | Item | Where | Status |
| --- | --- | --- | --- |
| 8.1 | Privacy notice for the contact form | `src/components/ContactPanel.astro` → `.contact-form__privacy` | **done** — short note beside the form names Web3Forms as the processor and links to the privacy policy |
| 8.2 | Business/sole-trader details (name, address, VAT ID) if required for Croatian e-commerce/consumer law | Footer | not applicable while Tin operates as a private individual; revisit if a company or obrt is registered |
| 8.3 | Cookie banner only if non-essential cookies are introduced | — | not needed today: the site sets no cookies and loads no analytics |
| 8.4 | Privacy policy page | `/politika-privatnosti/` and `/en/privacy-policy/` | **done**: bilingual policy covering controller, data, purposes, recipients, transfers, retention, rights and AZOP; linked from the contact form and footer |
| 8.5 | Legal review of the privacy policy | `/politika-privatnosti/` and `/en/privacy-policy/` | **open**: Tin is arranging a review by a legal professional before launch |

The current build loads no third-party scripts, fonts from Google, or analytics. Fonts are bundled from `@fontsource`, so there is no third-party request beyond the Unsplash images — and those disappear when real local photos replace them.

## 9. Contact form

| # | Item | Where | Current placeholder | Status |
| --- | --- | --- | --- | --- |
| 10.1 | Contact email address | `src/config.ts` → `contactEmail` | `tin.lucic172@gmail.com` — real address supplied by Tin | **done** |
| 10.2 | Privacy notice | `src/components/ContactPanel.astro` → `.contact-form__privacy` | Short note near the form names the four fields and states the data is sent through Web3Forms and delivered by email, and is not stored on this site (GDPR art. 5/6). It links to the privacy policy page | **done** |
| 10.3 | Form delivery | `src/components/ContactPanel.astro` | The form posts to Web3Forms via fetch and the message arrives by email. The public access key lives in `src/config.ts`; enable domain restriction in the Web3Forms dashboard. No server-side code or database on this site. A hidden redirect sends native fallback submissions to `/hvala/` or `/en/thank-you/`. | **done** |

The message is delivered through Web3Forms by email; the site itself stores nothing. If JavaScript fails, the native form posts to Web3Forms and the hidden redirect sends the visitor to the thank-you page.

## 10. Final pre-launch pass

- [ ] `npm install && npm run build` succeeds from a clean checkout.
- [ ] All main pages return 200: `/`, `/galerija/`, `/en/`, `/en/gallery/`, plus `/politika-privatnosti/`, `/en/privacy-policy/`, `/hvala/`, and `/en/thank-you/`.
- [ ] No "Dalmacija", "Dalmatia", "Split", or stock-photo credit remains.
- [ ] Every CTA opens the real Take a Chef profile in a new tab.
- [ ] Language switch keeps you on the equivalent page (home ↔ home, gallery ↔ gallery, privacy ↔ privacy).
- [ ] Gallery: all photos load while scrolling; lightbox opens, arrows stay still between portrait and landscape photos, outside click and `Esc` close it.
- [ ] Mobile: navigation opens and closes; hero and menu tabs are readable at 390px; tab switching works.
- [ ] Prices are either omitted or clearly marked as "from" (Take a Chef issues the real quote).
- [ ] Footer year and service area are correct.
- [ ] Check the site with `prefers-reduced-motion` enabled — animations should disappear, not break.
