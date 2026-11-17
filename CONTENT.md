# Launch checklist — what to replace before going live

Everything below is a placeholder or an assumption in the prototype. Work top to bottom; the site is built to run without a CMS, so each item is a small edit in a JSON or TypeScript file.

Legend: **required** = do not launch without it · **recommended** = affects trust or legal safety · **optional** = nice to have.

---

## 1. Identity

| # | Item | Where | Current placeholder | Status |
| --- | --- | --- | --- | --- |
| 1.1 | Brand / site name | `src/config.ts` → `site.name` | `Gušti iz Kužine` | **done** — confirmed November 2026 |
| 1.2 | Chef's name | `src/data/site/hr.json` → `statement.attribution`; `src/data/site/en.json` → `statement.attribution` | `Tin Lučić` | **required** |
| 1.3 | Favicon | `public/favicon.svg` | Iron square with an ivory serif monogram and a sun diamond | optional |

The brand name is used in the header, footer, page titles, 404, and structured data. `src/config.ts` drives the layout templates; the home wall name and page titles live in `src/data/site/hr.json` and `src/data/site/en.json`.

## 2. Booking

| # | Item | Where | Current placeholder | Status |
| --- | --- | --- | --- | --- |
| 2.1 | Take a Chef profile URL | `src/config.ts` → `bookingUrl` | `https://www.takeachef.com/en-hr/chef/tin-lu-i` | **required** |
| 2.2 | Confirm the profile accepts bookings for up to 6 guests | Take a Chef dashboard | — | **required** |
| 2.3 | Confirm service area matches the site | Take a Chef dashboard | Istria, Croatia | **required** |
| 2.4 | WhatsApp number for pop-up reservations | `src/config.ts` → `site.whatsapp.number` | Empty string; the pop-up falls back to a prefilled email | **required** |
| 2.5 | Confirm the pop-up date, place, and price | `src/data/site/hr.json` / `en.json` → `popupPage.dates`, `place`, `price` | Saturday, 5 December 2026, 19:30, Fažana, €85 per person | **required** |
| 2.6 | Confirm the sample pop-up menu and cocktails | `popupPage.menu`, `popupPage.drinks` | Three courses plus amuse bouche and petit four, and two cocktails (“Maslina”, “Smokva”) | **required** |
| 2.7 | Confirm the workshop page stays truthful | `hr.json` / `en.json` → `workshopsPage` | “In planning”; no dates, prices, formats or capacity; the interest block links to the contact page | **required** |

Every private dining CTA — the home wall, the format stone, the private dining page hero, menu panel and closing CTA band, the thank-you page and the footer — reads `bookingUrl` and opens it in a new tab with an announced cue. Reservations go through Take a Chef; the contact page (see §9) takes questions and custom ideas. The home page does not repeat the form. If the profile URL is wrong, every booking button is wrong.

The pop-up page is the one exception to Take a Chef: its reservation buttons go to WhatsApp with a prefilled message, or to a prefilled email while `site.whatsapp.number` is empty. Enter the number in international format with no `+`, e.g. `'385911234567'`. The label and note derive from `hasWhatsapp()`, so the promise always matches the link. Set `popupPage.status` to `"soldOut"` to swap the reserve title, lead, both buttons and notes to the waiting-list copy.

The Take a Chef profile is a request form, not a live calendar: it has no dates. CTAs therefore say “Rezervirajte večeru” / “Book a dinner”, not “Check availability”. Keep that wording unless a real availability calendar is added.

Workshops are an interest page, not a shop: the page asks people to write in and promises only that they will hear when dates are set. Do not add dates, prices, formats or capacity until they are real.

## 3. Copy

| # | Item | Where | Notes | Status |
| --- | --- | --- | --- | --- |
| 3.1 | Croatian copy review | `src/data/site/hr.json` | Written as a first draft; have the chef read it aloud and adjust to their voice. The confirmed facts are recorded in the section below the table. | **required** |
| 3.2 | English copy review | `src/data/site/en.json` | Mirrors the Croatian structure key for key. If you add or remove a menu/item in one file, do the same in the other. | **required** |
| 3.3 | Service area wording | `src/config.ts` → `serviceArea`; both site JSON files (`hero.lead`, `faq`, `footer`) | Currently Istria / Istra. Decide whether nearby areas (Kvarner, Trieste, Ljubljana) should be mentioned. | recommended |
| 3.4 | Menu names, courses, and dishes | `hr.json` / `en.json` → `menus.items[].courses[].options` | Three confirmed menus, in page order: Svježe i lokalno (the default open menu) / Ljubitelji mesa / Plodovi Jadrana. The dishes are real; the copy adds provenance labels (Istrian goat cheese, Istrian pršut, wild mushrooms, Adriatic fish and squid). Each course holds one or two options: one option renders as a tasting course, two render as a choice. | **done** |
| 3.5 | "Included" list | `hr.json` / `en.json` → `included.rows` | Confirm each claim is true (travel, Pula market, central Croatia meat, service, wine pairing, cleanup, discretion). | **required** |
| 3.6 | FAQ answers | `hr.json` / `en.json` → `faq.items` | Eight questions: capacity, lead time, booking route, pricing, payment, kitchen equipment, allergies and dietary needs, and cleaning up. Travel, sourcing, wine pairing, and background are answered by the footer area line, the included list, and the story; dinner length is not listed. Current answers are plausible defaults, not confirmed policy. | **required** |
| 3.7 | Page titles and meta descriptions | `hr.json` / `en.json` → `meta`, `privateDiningPage.metaTitle` / `metaDescription`, `workshopsPage.metaTitle` / `metaDescription`, `galleryPage.metaTitle` / `metaDescription` | Include the location and the format ("private dining", "workshops") for search. | recommended |
| 3.8 | 404 page copy | `src/pages/404.astro`, `src/pages/en/404.astro` | Routed bilingual pair; the English page carries its own copy. `notFoundPage.detail` points to private dining for the menu. | optional |

### Confirmed copy facts (November 2026)

- Tin grew up in Fažana, a small fishing town, and has been in kitchens since high school.
- Kužina is the Istrian word for kitchen; the name means the pleasures of the kitchen.
- He shops the Pula market, including the fishmongers, for fish and vegetables. The meat comes from central Croatia.
- He has a fine-dining background in Croatia and Ireland. No restaurant names are published.
- Wine pairing is available on request.
- Tin replies to enquiries within 24 hours.
- The three menus are the real menus. The dish names now carry provenance: Istrian goat cheese, Istrian pršut, wild mushrooms, Adriatic fish and squid. Confirm the Istrian goat cheese, Istrian pršut, and wild mushroom labels if any is not accurate.

## 4. Prices

The menu section does not show prices by design. Take a Chef issues the real quote after the guest sends an enquiry. If an indicative "from" price is added later, keep the wording and the disclaimer explicit.

The pop-up page is the one place with a price: it is a fixed, dated dinner, so `popupPage.price` and `priceUnit` are shown directly. Confirm the amount and what it includes (`priceNote`) before launch.

The workshops page shows no price, because there is no workshop to price yet. Add one only with a confirmed date and format.

## 5. Reviews

The current design has no reviews section, so there is nothing to replace or publish here.

## 6. Photography

> **Development status (2026-11-17):** stock photography is intentional while the site is in development. Do not treat it as a launch defect or replace it until Tin says the real shoot is ready. The redesign has explicit slots for the home wall opening (`gallery-terrace`), the private dining hero (`hero-plated`), the action band (`chef-action`), the workshops hero (`gallery-plating`) and the story portrait (`chef-portrait`); the real shoot should fill those first. The `chef-portrait` / `gallery-plating` duplicate is deferred with it; resolve that with the real portrait, not another stock frame. Future critique runs should honour `.impeccable/critique/ignore.md`.
>
> **Decision (2026-11-07):** stock photography is labelled simply as a placeholder, without a shoot date. The teaser note reads “Photographs are placeholders for now.” and the gallery page lead carries the same short note. It is an intentional development disclosure, not a launch defect. The decision is also recorded in `.impeccable/critique/ignore.md` so future critiques drop it silently.

| # | Item | Where | Current placeholder | Status |
| --- | --- | --- | --- | --- |
| 6.1 | Replace all Unsplash photos with real work | `src/data/images.json` | Temporary hotlinked Unsplash images | **required** |
| 6.2 | Add local files | `public/images/` | Already holds the three Istrian photos | **required** |
| 6.3 | Set real dimensions | `src/data/images.json` → `width`, `height` | Unsplash dimensions | **required** |
| 6.4 | Rewrite alt text in both languages | `src/data/images.json` → `alt.hr`, `alt.en` | Descriptive, but describes stock photos | **required** |
| 6.5 | Update gallery descriptions | `src/data/gallery.json` → `caption` | Generic dish descriptions, now used as the lightbox caption and the image button's accessible name (not printed on the page) | recommended |
| 6.6 | Home wall opening | `images.json` → `gallery-terrace` | Set tables on a terrace with a sea view; 16:10 crop on the wall. Replace with Tin's own table or the villa terrace before the shoot. | **required** |
| 6.7 | Private dining hero | `images.json` → `hero-plated` | Plated dish; 4:5 portrait. Replace with a real plate from Tin's cooking. | **required** |
| 6.8 | Story portrait | `images.json` → `chef-portrait` | Hands-only stock placeholder; 4:5 portrait. Replace with a real portrait of Tin at work. Do not ship a stock face as Tin. | **required** |
| 6.9 | Action band | `images.json` → `chef-action` | Roast chicken on a platter; 3:2 landscape. Replace with hands, fire, plating, or the morning's catch; lead with fish and vegetables. | **required** |
| 6.10 | Workshops hero | `images.json` → `gallery-plating` | Plating hands; 3:2 crop. No invented workshop scene: use real hands and work when the shoot happens. | **required** |

How to swap an image (four steps) is in `docs/development.md` → "Replacing an Unsplash image with a real photo". Keep the aspect ratio close to the slot it fills: the home opening is 16:10, the private dining hero 4:5, the action band 3:2, the workshops hero 3:2, the story portrait 4:5, and gallery images vary.

**Photo quality bar:** natural light, real tables, real hands, no heavy filters. The design leans on whitespace and typography; overly styled stock imagery undercuts it.

## 7. Domain and deployment

| # | Item | Where | Current placeholder | Status |
| --- | --- | --- | --- | --- |
| 7.1 | Production URL | `astro.config.mjs` → `site`; `src/config.ts` → `url` | `https://gusti-iz-kuzine.vercel.app` | **required** |
| 7.2 | Connect the custom domain in Vercel | Vercel dashboard | — | **required** |
| 7.3 | Rebuild after changing the URL | `npm run build` | — | **required** |
| 7.4 | Check canonical + hreflang after deploy | View source on the home, gallery and privacy pages in both languages | They derive from `site.url` | recommended |
| 7.5 | Submit the sitemap or request indexing | Google Search Console | `@astrojs/sitemap` generates `/sitemap-index.xml`; thank-you pages and 404s are filtered out | optional |
| 7.6 | Add an OG image if social previews matter | `src/layouts/BaseLayout.astro` → `ogImage` | Uses the hero Unsplash image | optional |

Vercel settings: framework Astro, build command `npm run build`, output directory `dist`, Node 24.x (from `package.json` `engines`). No functions, rewrites, or `vercel.json` are required.

## 8. Legal and trust (Croatia / EU)

| # | Item | Where | Status |
| --- | --- | --- | --- |
| 8.1 | Privacy notice for the contact form | `src/components/ContactPanel.astro` → `.contact-form__privacy` | **done** — short note beside the form names Web3Forms as the processor and links to the privacy policy |
| 8.2 | Business/sole-trader details (name, address, VAT ID) if required for Croatian e-commerce/consumer law | Footer | not applicable while Tin operates as a private individual; revisit if a company or obrt is registered |
| 8.3 | Cookie banner and analytics consent | `src/components/ConsentBanner.astro`; footer **Cookie settings** | **done** — GA4 loads only after opt-in; rejecting leaves the site cookie-free |
| 8.4 | Privacy policy page | `/politika-privatnosti/` and `/en/privacy-policy/` | **done**: bilingual policy covering controller, data, purposes, recipients, transfers, retention, rights and AZOP; linked from the contact form and footer |
| 8.5 | Legal review of the privacy policy | `/politika-privatnosti/` and `/en/privacy-policy/` | **open**: Tin is arranging a review by a legal professional before launch |
| 8.6 | GA4 property privacy settings | GA4 Admin → Data settings → Data retention (14 months); Data collection (Google Signals off); Account details (all data sharing off) | **required** — set once in the GA4 dashboard |

The current build loads Google Analytics 4 only after the visitor opts in. Fonts are bundled from `@fontsource`, so the remaining third-party requests are the Unsplash images (until real photos replace them) and the GA4 tag after consent; the contact form contacts Web3Forms only when submitted.

## 9. Contact form

| # | Item | Where | Current placeholder | Status |
| --- | --- | --- | --- | --- |
| 9.1 | Contact email address | `src/config.ts` → `contactEmail` | `tin.lucic172@gmail.com` — real address supplied by Tin | **done** |
| 9.2 | Privacy notice | `src/components/ContactPanel.astro` → `.contact-form__privacy` | Short note near the form names the fields (topic, last name optional), states the data is sent through Web3Forms and delivered by email, and is not stored on this site (GDPR art. 5/6). It links to the privacy policy page | **done** |
| 9.3 | Form delivery | `src/components/ContactPanel.astro` | The form posts to Web3Forms via fetch and the message arrives by email. The public access key lives in `src/config.ts`; enable domain restriction in the Web3Forms dashboard. No server-side code or database on this site. A hidden redirect sends native fallback submissions to `/hvala/` or `/en/thank-you/`. | **done** |
| 9.4 | Form placement | `src/pages/kontakt.astro`, `src/pages/en/contact.astro` | One form, on the contact page only. The header and footer link to it; private dining and workshops close with a prompt instead of a second form. | **done** |
| 9.5 | Topic group | `hr.json` / `en.json` → `contact.topics` | Required radios: private dinner, pop-up, workshops, something else. The chosen label arrives in the email. | **done** |

The message is delivered through Web3Forms by email; the site itself stores nothing. If JavaScript fails, the native form posts to Web3Forms and the hidden redirect sends the visitor to the thank-you page.

## 10. Final pre-launch pass

- [ ] `npm install && npm run build` succeeds from a clean checkout and produces eighteen pages.
- [ ] All routes return 200: `/`, `/privatno/`, `/popup/`, `/radionice/`, `/galerija/`, `/kontakt/`, plus `/en/`, `/en/private-dining/`, `/en/popup/`, `/en/workshops/`, `/en/gallery/`, `/en/contact/`, `/politika-privatnosti/`, `/en/privacy-policy/`, `/hvala/`, and `/en/thank-you/`. The two 404s return 404.
- [ ] No "Dalmacija", "Dalmatia", "Split", or stock-photo credit remains.
- [ ] Every booking CTA opens the real Take a Chef profile in a new tab, and each one announces that with an outbound arrow and a screen-reader suffix.
- [ ] Language switch keeps you on the equivalent page (home ↔ home, private dining ↔ private dining, pop-up ↔ pop-up, workshops ↔ workshops, contact ↔ contact, gallery ↔ gallery, privacy ↔ privacy, thank-you ↔ thank-you).
- [ ] Home: the wall shows the name, the sun day stone, the opening photograph, the lead and one booking action; the three format stones link to private dining, the pop-up and workshops.
- [ ] Private dining: the funnel is complete on its own page — hero, story, menu tabs, included, process, action band, statement, FAQ, contact prompt, closing CTA.
- [ ] Workshops: the page says “in planning”, shows no date, price, format or capacity, and the interest block points to the contact page.
- [ ] Contact: `/kontakt/` and `/en/contact/` carry the only form; the topic group is required; a submission arrives with the topic, name, email and message.
- [ ] The header Contact link goes to the contact page and is marked current there; the footer carries the same link.
- [ ] Pop-up: the reservation label matches the link (WhatsApp when a number is set, otherwise “Reserve by email”); the email fallback works; `soldOut` shows the waiting-list title, lead, buttons and notes.
- [ ] Gallery: all photos load while scrolling; lightbox opens, arrows stay still between portrait and landscape photos, outside click and `Esc` close it.
- [ ] Mobile: navigation opens and closes; the home wall, format stones, menu tabs and pop-up action are readable and usable at 390px.
- [ ] Prices are either omitted or clearly marked as "from" (Take a Chef issues the real quote); the workshops page has none.
- [ ] Footer year and service area are correct.
- [ ] Consent: no GA request or `_ga` cookie before **Accept**; **Reject** leaves no cookies; **Cookie settings** reopens the bar.
- [ ] Contact form: a successful submission fires `contact_submit` in GA4.
- [ ] GA4 property: event data retention is 14 months, Google Signals is off, all data sharing is off, and `contact_submit` is marked as a key event.
- [ ] Privacy policy reflects GA4, the contact event, and the 7 November 2026 update date.
- [ ] Check the site with `prefers-reduced-motion` enabled — animations should disappear, not break.
- [ ] Check the site with JavaScript off — nav, menus, form and lightbox still work; the home wall and sun default state stand.
