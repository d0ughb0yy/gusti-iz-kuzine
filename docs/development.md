# Development guide

Technical notes for maintaining and deploying the site. For the business description, see `README.md`, for the pre-launch checklist, see `CONTENT.md`, and for the visual system of record — colors, type, components, guardrails — see `DESIGN.md` at the project root.

## Stack

- Astro static output, no client framework, no adapter, no CMS.
- Hand-written CSS with semantic theme tokens (`src/styles/theme.css`), one global stylesheet (`src/styles/global.css`) and the dry-stone layer (`src/styles/wall.css`).
- Fonts bundled locally via `@fontsource` (Young Serif display, Archivo working text).
- Copy lives in plain JSON files; templates read from `src/config.ts`.

## Run it locally

Requires **Node.js 24.x** (`.nvmrc` and `package.json` `engines` both pin it).

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # production build into dist/
npm run preview   # preview the production build
```

## What to edit

| File | What lives there |
| --- | --- |
| `src/config.ts` | Brand name, Take a Chef URL, contact email, WhatsApp number, site URL, service area, GA4 measurement ID |
| `src/data/site/hr.json` | All Croatian copy: home wall and formats, private dining, workshops, contact, process, included, menus, statement, FAQ, CTA, footer, gallery |
| `src/data/site/en.json` | All English copy |
| `src/data/images.json` | Every image URL, dimensions, and bilingual alt text |
| `src/data/gallery.json` | Gallery order and bilingual captions |
| `src/styles/theme.css` | The single theme: limestone, paper, iron ink, sun, olive field, type and spacing tokens |
| `src/styles/global.css` | Layout, type and components inherited from the first build |
| `src/styles/wall.css` | The dry-stone layer: home wall, format stones, pop-up strip and page-level overrides; loaded after `global.css` |

`CONTENT.md` lists every placeholder that must be replaced before launch. `DESIGN.md` holds the visual system of record — colors, type, components, and guardrails.

### Editing the menus

Menus live in `src/data/site/hr.json` and `en.json` under `menus.items`. Each menu has a `name`, a `description`, and `courses`. Each course has a `name` and an `options` array:

- **One option** renders as a set tasting course.
- **Two options** render side by side with the `menus.or` separator.

The private dining page picks `choiceNote` or `tastingNote` automatically: a menu with at least one two-option course gets the choice note, otherwise it gets the tasting note. The surrounding `menus` object also supplies the bilingual labels `selectLabel`, `or`, and `cta`. Add or remove menus freely — the tabs and panels follow the array length. Keep `hr.json` and `en.json` structurally identical.

#### Menu tabs

`src/components/PrivateDiningPage.astro` renders one `.menu-tab` button and one `.menu-panel` per menu. The first panel is visible; the rest carry the `hidden` attribute. An inline script in the same component:

- sets `aria-pressed` on the active tab;
- toggles `hidden` on the panels.

A `<noscript>` rule reveals every panel when JavaScript is unavailable.

#### Menu typography

- Headings: **Young Serif**, weight 400.
- Dish names (`.course__option`) and body copy: **Archivo**, weight 400.
- Course labels and the choice/tasting note: micro uppercase labels in `--ink-soft`.

### Editing the home wall and format stones

`src/components/HomePage.astro` renders the home wall from `hero` (project label, name, lead, booking note, day entries) and `formats` (`title`, `lead`, and three `items` with `key`, `title`, `text`, `cta`, `meta`). The three keys are `private`, `popup` and `workshops`; they map to `routes.privateDining`, `routes.popup` and `routes.workshops` in `src/config.ts`. Keep all three.

The pop-up stone's `text` may contain a `{date}` token; the page fills it from `popupPage.dates[0].label` so the stone and the pop-up page cannot disagree. Do not hardcode a date there.

The private dining stone is sun-filled by default (`format-stone--lead`). `wall.css` moves the sun to another stone on hover or keyboard focus with `:has`; when `:has` is unsupported the default state stands. Do not add a fourth format without also adding a route and a stone.

The home wall deliberately has no contact form. The only form on the site is the one on `/kontakt/`; private dining and workshops link to it.

### Editing the workshops page

`workshopsPage` carries only planning copy: `title`, `lead`, `statusLabel`, `statusNote`, `image`, three `steps`, and the interest prompt (`interestTitle`, `interestLead`, `interestNote`, `interestCta`). The page (`src/components/WorkshopsPage.astro`) must never print a date, price, format or capacity until those are confirmed. It carries no form; the interest block links to `/kontakt/`. When dates are real, add them to both JSON files and update this guide and `CONTENT.md`.

### Editing the contact page

`/kontakt/` and `/en/contact/` render `src/components/ContactPanel.astro` with `page`, which turns its heading into the page h1. The form is the only one on the site: it posts to Web3Forms with the key from `src/config.ts`, keeps `id="kontakt"` (so `/kontakt/#kontakt` lands on it), and offers the email and Take a Chef fallbacks.

Opening the form is a required topic group, `contact.topics.label` plus `contact.topics.options` (four labels). The chosen label is submitted as `topic` and arrives in the email, which is how the chef knows whether an enquiry is about a dinner, a pop-up or a workshop. Keep exactly four options and keep them identical in shape across both languages; the labels double as the submitted values.

The page copy lives in `contact.title`, `contact.lead`, `contact.note` and `contact.privacy`; `contactPage.metaTitle` and `contactPage.metaDescription` carry the metadata. Do not add a second form to private dining or workshops: both close with a `contact-prompt` block that links to `/kontakt/#kontakt`.

### Editing the pop-up page

The pop-up is one page, not a list: `/popup/` and `/en/popup/`, both rendered by `src/components/PopupPage.astro`. Everything the chef changes lives in `popupPage` in `src/data/site/hr.json` and `src/data/site/en.json`. Keep the two objects structurally identical.

- **Dates** — `popupPage.dates` is an array of `{ label, time, iso }`. The page prints the label and time; `iso` is kept for structured data. Add more entries only if the same pop-up runs on several dates; the page stays one page.
- **Place and price** — `place`, `placeNote`, `price`, `priceUnit`, `priceNote`. The exact address is intentionally not printed; the note says it arrives with the confirmation.
- **Status** — `popupPage.status` is `"open"` or `"soldOut"`. `"soldOut"` swaps the reserve title, lead, every reservation button and note to the waiting-list copy.
- **Menu** — `menu.amuse`, `menu.courses` (three entries), and `menu.petitFour`. The amuse and petit four render as smaller “bite” rows around the three courses, so the menu still reads as 3 + 2.
- **Drinks** — `drinks.items` holds the two signature cocktails as `{ name, ingredients }`. The design expects exactly two; they stack in the rail beside the menu card. Keep both filled.
- **Text** — `booking`, `evening`, and `reserve` hold the button labels, notes, WhatsApp message templates (`{date}` is replaced with the date labels), and the email subject used in the fallback.
- **Reservations** — the number lives in `site.whatsapp.number` in `src/config.ts`, in international format with no `+`. The current number is set; if you clear it, every reservation link falls back to a prefilled email to `contactEmail`. `hasWhatsapp()` in `src/lib/content.ts` picks the link, the label, the note, the external-link cue, and the screen-reader “new window” text. Change the number and the copy follows.

### Replacing an Unsplash image with a real photo

1. Put the optimized photo in `public/images/`, e.g. `public/images/plated-fish.jpg`.
2. In `src/data/images.json`, change that entry's `src` (and `full`, if it is a gallery image) to `/images/plated-fish.jpg`.
3. Set `width` and `height` to the real pixel dimensions. These prevent layout shift; use the image's true aspect ratio.
4. Update both `alt.hr` and `alt.en`.

Gallery entries reference image keys, so you only edit `images.json` — not the gallery order.

**Responsive images note:** remote (Unsplash) entries automatically get a `srcset` derived from their URL crop parameters (see `srcsetFor` in `src/lib/content.ts`); local single-resolution files intentionally do not. If you want local photos to stay responsive, either keep them remote until launch or commit a small width series (e.g. `-480`, `-800`, `-1200` variants) and extend `images.json` accordingly — the layout and markup do not change either way.

### Theme tokens

There is one theme. Edit `src/styles/theme.css`:

- surfaces: `--ground`, `--ground-raised`, `--paper`, `--sun`, `--sun-deep`, `--field`
- ink: `--ink`, `--ink-soft`, `--on-field`, `--on-field-soft`
- accent: `--accent`, `--accent-deep` (iron states, not a second colour)
- rule: `--line`, `--line-strong`
- type: `--serif`, `--sans`, and the `--display` / `--heading` / `--lead` / `--body` / `--small` / `--micro` ramp
- layout: `--max`, `--gutter`, `--section-y`, `--header-h`

Components consume semantic tokens, never literal hexes. There is no palette switcher, no `data-palette`, and no `src/config.ts` palette entry. If the theme changes permanently, update the favicon (`public/favicon.svg`) and the front matter in `DESIGN.md` at the same time. See `DESIGN.md` for the contrast notes and the role of each color.

### Analytics and consent

The site loads Google Analytics 4 only after a visitor accepts. The measurement ID lives in `src/config.ts` → `site.analytics.measurementId`.

- The consent bar is `src/components/ConsentBanner.astro`, rendered by `src/layouts/BaseLayout.astro`. The **Cookie settings** button in the footer reopens it. The bar's close control is a refusal: it stores `denied`, loads nothing, and returns focus. On a phone the title is hidden so the bar stays short and does not cover the bottom of the page.
- The choice is stored in `localStorage` under `gusti-consent-v1` (`granted` or `denied`). If the policy or the scope of analytics changes, bump the key so visitors are asked again.
- Before consent there is no `googletagmanager.com` request and no `_ga` cookie. Rejecting stores `denied` and keeps the site cookie-free. Withdrawing after accepting deletes the `_ga*` cookies, sets `ga-disable-<id>`, and stops further hits.
- The tag is disabled in `astro dev` and on Vercel preview deployments. To test the real request, run `npm run build && npm run preview`; a local production preview counts as enabled. Clear the choice in DevTools with `localStorage.removeItem('gusti-consent-v1')`.
- The contact form fires a `contact_submit` event after a successful Web3Forms response. It sends `form_name` and `language`; it never sends the name, email, or message. Mark `contact_submit` as a key event in GA4 (Admin → Events → Key events).
- GA4 property settings: event data retention **14 months**, Google Signals **off**, and all data-sharing settings **off**. The code also sets `allow_google_signals: false` and `allow_ad_personalization_signals: false`.
- There is no GTM container and no marketing tag. Keep the consent gate in front of any future tag.

## Deploy to Vercel

The site is a plain static build — no server runtime, functions, or server-side rendering. `vercel.json` is required for `trailingSlash` and the bilingual 404 routes; it contains no functions or rewrites.

1. Push the repository to GitHub.
2. In Vercel: **Add New → Project → Import** the Git repository.
3. Framework preset: Astro (or "Other"). Build command: `npm run build`
4. Output directory: `dist`
5. Node version: `engines` in `package.json` pins `24.x`, which matches Vercel's current default. If the project was created with a different Node version, set it under Settings → General → Node.js Version.
6. Deploy. Every branch and pull request gets a preview deployment.
7. The production URL is `https://gusti-iz-kuzine.vercel.app`, which is already the value in `astro.config.mjs` (`site:`) and `src/config.ts` (`url:`).

After connecting a custom domain, update the URL in `astro.config.mjs` (`site:`) and `src/config.ts` (`url`), then redeploy.

**Bandwidth note:** the prototype hotlinks Unsplash, so image traffic is served by Unsplash. When you switch to local photos, compress them first (roughly 1600px on the long edge, WebP or quality-80 JPEG) because the current setup does not run them through an image pipeline.

## Structure

```
src/
  components/        Header, Footer, HomePage, PrivateDiningPage, WorkshopsPage, PopupPage, GalleryPage, GalleryGrid, ContactPanel, LegalPage, ThankYouPage, NotFoundPage, CtaBand, Icon, Lightbox, ConsentBanner
  data/              Bilingual copy, image registry, gallery order
  layouts/           BaseLayout (head, fonts, SEO)
  lib/content.ts     Typed access to copy and images (incl. srcset derivation, hasWhatsapp, reservationHref)
  pages/             HR and EN home, private dining, pop-up, workshops, contact, gallery, privacy policy and thank-you, plus 404
  styles/            Theme tokens (`theme.css`), the inherited stylesheet (`global.css`) and the dry-stone layer (`wall.css`)
public/              Favicon, robots.txt, local images
docs/                Development guide
DESIGN.md            Visual system of record (colors, type, components, rules)
CONTENT.md           Launch checklist of every placeholder
```

## Notes

- Booking is intentionally external. The contact form submits to Web3Forms; there is no database or CMS to maintain.
- Pop-up reservations go to WhatsApp when `site.whatsapp.number` is set (it is), otherwise to a prefilled email. The privacy policy names WhatsApp as a separate controller. Nothing is stored on the site either way.
- The gallery lightbox is keyboard accessible (`Esc`, arrow keys) and closes on outside click.
- The menu fade and lightbox transitions are disabled automatically under `prefers-reduced-motion`; the sun's 240ms move between format stones is disabled too.
- Copy and photos are still being finalised; the chef's name is confirmed. See `CONTENT.md`; private dining pricing is quoted by Take a Chef, and the workshops page carries no price because there is no workshop to price yet.
