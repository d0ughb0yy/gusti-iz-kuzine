# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Astro 7, static output, deployed on Vercel. No server-side code, database, or CMS. Google Analytics 4 loads only after opt-in. The contact form posts to Web3Forms; private dining bookings go through Take a Chef.

## Users

Private clients in Istria, Croatia: couples, families, and small groups of up to six, often staying in a villa, holiday home, or family house. They are planning an occasion — a birthday, an anniversary, a family dinner, a quiet holiday evening — and want restaurant-level food without going to a restaurant. They value local and seasonal sourcing, precise technique, and a host who handles the evening quietly and professionally.

A second audience is the host or villa manager arranging the dinner on a guest's behalf.

A third, smaller audience is local: people looking for a dated pop-up dinner or a cooking workshop. They are not booking a villa dinner, but they belong to the same project and should be able to see both without the private-chef funnel hiding them.

## Product Purpose

A bilingual (Croatian/English) site for Tin Lučić's gastro project. It presents three formats — private dining, pop-ups and workshops — and turns high-intent visitors into private dining enquiries on Take a Chef. The contact form is the secondary path for questions, workshop interest, and occasions that do not fit the standard booking flow. Success means qualified enquiries and bookings, not traffic for its own sake.

## Positioning

One chef's project with three ways to sit at a table, built like an Istrian dry-stone wall. Private dining is the main business: fine-dining technique and contemporary dishes built from Istrian ingredients, cooked in the guest's own home. The fish and vegetables come from the Pula market that morning; the meat comes from central Croatia. The pop-up is a real, dated dinner in Fažana. Workshops are being planned and are presented honestly as such.

It is not a restaurant, not a catering company, and not a generic private-chef listing: the chef is personally present, the sourcing is seasonal and named, and the evening stays at the guest's table.

## Operating Context

- Service area: Istria, Croatia.
- Private dining capacity: up to six guests; larger groups by enquiry. Four days' notice.
- The chef shops the Pula market that morning for fish and vegetables; the meat comes from central Croatia. He brings basic equipment, cooks and serves in the guest's kitchen, and leaves it clean.
- Menus are contemporary dishes built from Istrian fish and vegetables and meat from central Croatia, adjusted with the guest for season, allergies, and diet. Three menus ship: meat, fresh/local, Adriatic seafood.
- Wine pairing is available on request.
- Background: fine-dining kitchens in Croatia and Ireland. No restaurant names are published.
- Private dining bookings happen on the Take a Chef profile; those CTAs go there. No private dining prices are shown; Take a Chef issues the real quote.
- The pop-up is a fixed, dated dinner: Saturday 5 December 2026, Fažana, €85 per person, including two signature cocktails. Seats are requested on WhatsApp with a prefilled message; while no number is configured, the button says "Reserve by email" and opens a prefilled email.
- Workshops are in planning. No dates, prices, formats, capacity, or schedule are published. The page carries a planning status, a three-step outline of how it will work, and an interest prompt that links to the contact page; it promises nothing more.
- The contact form is one page, `/kontakt/` and `/en/contact/`, delivered by Web3Forms to the chef's email; the site stores nothing. A required topic group labels each enquiry.
- No guest reviews are published yet.

## Capabilities and Constraints

- Static Astro site, eighteen built pages: home, private dining, pop-up, workshops, contact, gallery, privacy and thank-you in HR and EN, plus a 404 in each language.
- Bilingual content is key-for-key between `src/data/site/hr.json` and `src/data/site/en.json`; the two files move together.
- No backend beyond Web3Forms. No cookies or tracking before opt-in; Google Analytics 4 runs only after consent.
- Analytics: GA4 pageviews and a `contact_submit` event after a successful Web3Forms response. No GTM, ads, remarketing, or Google Signals.
- Fonts are bundled locally (Young Serif display, Archivo text); no Google Fonts or third-party font requests.
- Images are declared in `src/data/images.json` with intrinsic width/height. Development photography is stock until the real shoot.
- JavaScript is an enhancement: the header, menu tabs, form, and lightbox must keep working without it. The home wall and format stones need no JavaScript. Without JavaScript there is no consent bar and no tracking.
- Accessibility target: WCAG 2.2 AA — keyboard operation, visible focus, 4.5:1 body contrast, 48px touch targets, reduced-motion support.
- SEO: canonical URLs, hreflang alternates, ProfessionalService and FAQPage structured data.

## Brand Commitments

- Name: **Gušti iz Kužine**.
- Chef: **Tin Lučić**.
- Voice: first person, warm but restrained; no competitor put-downs, no luxury clichés, no invented claims.
- Place: Istria, and the chef's own history in Fažana. Kužina is the Istrian word for kitchen; the name means the pleasures of the kitchen.
- The site is personal: the chef is the differentiator, not an anonymous brand.

## Evidence on Hand

- Real contact email and Take a Chef profile URL in `src/config.ts`.
- Three local Istrian photographs in `public/images/`: Pula market hall, Motovun, Istrian vineyards.
- A set of stock food and atmosphere photographs declared in `src/data/images.json`; these are development placeholders, not evidence of Tin's cooking.
- No real portrait, action photography, or food photography yet. Tin has confirmed a shoot is coming.
- No guest testimonials, press, awards, or workshop evidence. Do not fabricate any.

## Product Principles

1. **The offer and the booking action are always clear.** A cold visitor should know what this is, where it happens, and what to do next within seconds.
2. **The chef is the differentiator.** Personal story, face, hands, and sourcing carry more trust than generic luxury signals.
3. **Truth over decoration.** No invented prices, reviews, credentials, workshop programme, or claims; placeholders stay labelled until replaced.
4. **Bilingual parity.** Croatian and English are equal citizens, not an afterthought.
5. **Quiet, fast, accessible.** The site should feel effortless on a phone in a villa, on a slow connection, with JavaScript off.

## Accessibility & Inclusion

WCAG 2.2 AA. The site must work with keyboard only, with a screen reader, at 200% zoom, at 390px width, with reduced motion enabled, and with JavaScript disabled. Body text at least 4.5:1; large text at least 3:1; focus rings never removed; touch targets at least 48px.
