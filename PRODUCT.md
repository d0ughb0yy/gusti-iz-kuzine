# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Astro 7, static output, deployed on Vercel. No server-side code, database, CMS, or analytics. The contact form posts to Web3Forms; bookings go through Take a Chef.

## Users

Private clients in Istria, Croatia: couples, families, and small groups of up to six, often staying in a villa, holiday home, or family house. They are planning an occasion — a birthday, an anniversary, a family dinner, a quiet holiday evening — and want restaurant-level food without going to a restaurant. They value local and seasonal sourcing, precise technique, and a host who handles the evening quietly and professionally.

A second audience is the host or villa manager arranging the dinner on a guest's behalf.

## Product Purpose

A bilingual (Croatian/English) site that presents Tin Lučić's private chef service and turns high-intent visitors into booking enquiries on Take a Chef. The contact form is the secondary path for questions, custom ideas, and occasions that do not fit the standard booking flow. Success means qualified enquiries and bookings, not traffic for its own sake.

## Positioning

Restaurant precision and technique brought into the guest's own home, with the menu built that morning from what is best in Istria. It is not a restaurant, not a catering company, and not a generic private-chef listing: the chef is personally present, the sourcing is local and seasonal, and the evening stays at the guest's table.

## Operating Context

- Service area: Istria, Croatia.
- Capacity: up to six guests; larger groups by enquiry.
- The chef shops that morning, brings knives and basic equipment, cooks and serves in the guest's kitchen, and leaves it clean.
- Menus are proposals, adjusted with the guest for season, allergies, and diet. Three sample menus ship: meat, fresh/local, Adriatic seafood.
- Bookings happen on the Take a Chef profile; the site sends every booking CTA there.
- The contact form is delivered by Web3Forms to the chef's email; the site stores nothing.
- No prices are shown: Take a Chef issues the real quote.
- No guest reviews are published yet.

## Capabilities and Constraints

- Static Astro site, nine built pages: home, gallery, privacy, thank-you in HR and EN, plus the bilingual 404.
- Bilingual content is key-for-key between `src/data/site/hr.json` and `src/data/site/en.json`; the two files move together.
- No backend beyond Web3Forms. No cookies, analytics, or tracking.
- Fonts are bundled locally; no Google Fonts or third-party font requests.
- Images are declared in `src/data/images.json` with intrinsic width/height. Development photography is stock until the real shoot; the real shoot will provide portrait, action, and food images.
- JavaScript is an enhancement: the header, menu tabs, form, and lightbox must keep working without it.
- Accessibility target: WCAG 2.2 AA — keyboard operation, visible focus, 4.5:1 body contrast, 48px touch targets, reduced-motion support.
- SEO: canonical URLs, hreflang alternates, ProfessionalService and FAQPage structured data.

## Brand Commitments

- Name: **Gušti iz Kužine**.
- Chef: **Tin Lučić**.
- Voice: first person, warm but restrained; no competitor put-downs, no luxury clichés, no invented claims.
- Place: Istria, and the chef's own history in Fažani. The "grandmother's kitchen in Kužine" line is a drafted placeholder, not confirmed biography; Tin must confirm or rewrite it in his own words.
- The site is personal: the chef is the differentiator, not an anonymous brand.

## Evidence on Hand

- Real contact email and Take a Chef profile URL in `src/config.ts`.
- Three local Istrian photographs in `public/images/`: Pula market hall, Motovun, Istrian vineyards.
- A set of stock food and atmosphere photographs declared in `src/data/images.json`; these are development placeholders, not evidence of Tin's cooking.
- No real portrait, action photography, or food photography yet. Tin has confirmed a shoot is coming.
- No guest testimonials, press, awards, or price evidence. Do not fabricate any.

## Product Principles

1. **The offer and the booking action are always clear.** A cold visitor should know what this is, where it happens, and what to do next within seconds.
2. **The chef is the differentiator.** Personal story, face, hands, and sourcing carry more trust than generic luxury signals.
3. **Truth over decoration.** No invented prices, reviews, credentials, or claims; placeholders stay labelled until replaced.
4. **Bilingual parity.** Croatian and English are equal citizens, not an afterthought.
5. **Quiet, fast, accessible.** The site should feel effortless on a phone in a villa, on a slow connection, with JavaScript off.

## Accessibility & Inclusion

WCAG 2.2 AA. The site must work with keyboard only, with a screen reader, at 200% zoom, at 390px width, with reduced motion enabled, and with JavaScript disabled. Body text at least 4.5:1; large text at least 3:1; focus rings never removed; touch targets at least 48px.
