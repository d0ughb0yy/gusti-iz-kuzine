---
name: Gušti iz Kužine
description: One chef's gastro project in Istria, built like a dry-stone wall — limestone ground, bleached paper, iron ink, one sun-yellow surface, Young Serif display over Archivo text, square corners and 1px mortar joints.
colors:
  ground: "#e6dfd2"
  ground-raised: "#f4efe3"
  paper: "#f4efe3"
  ink: "#201c16"
  ink-soft: "#5f574a"
  line: "#bdb09a"
  line-strong: "#201c16"
  sun: "#e5b33e"
  sun-deep: "#c9972a"
  field: "#262820"
  on-field: "#f4efe3"
  on-field-soft: "#c9c3b4"
typography:
  display:
    fontFamily: "Young Serif, Georgia, Times New Roman, serif"
    fontWeight: 400
    fontSize: "clamp(3.25rem, 7.6vw, 7rem)"
    lineHeight: 0.92
    letterSpacing: "-0.03em"
  headline:
    fontFamily: "Young Serif, Georgia, Times New Roman, serif"
    fontWeight: 400
    fontSize: "clamp(2rem, 3.6vw, 3.25rem)"
    lineHeight: 1.02
    letterSpacing: "-0.015em"
  title:
    fontFamily: "Young Serif, Georgia, Times New Roman, serif"
    fontWeight: 400
    fontSize: "clamp(1.5rem, 2.4vw, 2.125rem)"
    lineHeight: 1.15
  lead:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontWeight: 400
    fontSize: "clamp(1.125rem, 1.4vw, 1.375rem)"
    lineHeight: 1.5
  body:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontWeight: 400
    fontSize: "1.0625rem"
    lineHeight: 1.65
  small:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontWeight: 400
    fontSize: "0.875rem"
  micro:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontWeight: 600
    fontSize: "0.75rem"
    letterSpacing: "0.14em"
  page-title:
    fontFamily: "Young Serif, Georgia, Times New Roman, serif"
    fontWeight: 400
    fontSize: "clamp(2.75rem, 6vw, 5rem)"
    lineHeight: 0.98
  statement:
    fontFamily: "Young Serif, Georgia, Times New Roman, serif"
    fontWeight: 400
    fontSize: "clamp(2rem, 4.5vw, 4rem)"
    lineHeight: 1.08
spacing:
  gutter: "clamp(1.25rem, 4vw, 4rem)"
  section-y: "clamp(4.5rem, 8vw, 8rem)"
  max: "1440px"
  header: "76px"
components: {}
---

# Design System: Gušti iz Kužine

## Overview

**Creative North Star: "The Dry-Stone Wall."**

The site is one chef's project built like an Istrian kažun: no filler, every
part held by fit. Limestone ground, bleached paper, iron ink, one sun-yellow
surface, one olive-black field. Unequal courses are separated by 1px mortar
joints. Rectangular photographic openings sit in the wall rather than on it.

The world refuses two templates: the ivory tasting-menu page this site used to
be, and the equal-card services grid that every multi-service business reaches
for. Three formats are not three cards. They are three stones in one wall, and
the sun rests on the one that is the main business: private dining.

**Key characteristics:**

- Limestone ground, bleached paper for raised surfaces, iron ink, one sun
  surface, one olive-black field.
- Young Serif for display and headings; Archivo for body, labels, buttons and UI.
- 1px mortar joints, square corners, hard edges, no shadows.
- The home first screen is a wall: name, day stone, photographic opening, lead
  and booking, then three format stones.
- The funnel is load-bearing: bilingual keys, Take a Chef, Web3Forms, the menu
  tabs, the gallery lightbox, the FAQ, the contact form, and no-JS behaviour.

## Colors

A single theme in `src/styles/theme.css`. No palette switcher, no `data-palette`.
Use the token, never the literal hex.

### Surfaces

- **Ground** (`#e6dfd2`): limestone. The page.
- **Paper** (`#f4efe3`): bleached paper. Menu sheet, format stones, raised
  panels and the quiet side of the wall.
- **Sun** (`#e5b33e`): the one coloured surface. The day stone, the leading
  format stone, step numbers, status tags.
- **Field** (`#262820`): olive-black. Statement, closing CTA, pop-up strip,
  footer, consent.

### Ink

- **Ink** (`#201c16`): body text, outlines, focus rings. 12.79:1 on ground.
- **Ink Soft** (`#5f574a`): secondary text. 5.38:1 on ground, 6.21:1 on paper.
- **On Field** (`#f4efe3`): 13.01:1 on the field.
- **On Field Soft** (`#c9c3b4`): 8.49:1 on the field.

### Line

- **Line** (`#bdb09a`): 1px mortar joints and table rules. Decorative only.
- **Line Strong** (`#201c16`): the only edge of a form field, and the invalid
  underline. Never use it as decoration.

### Named rules

**The One-Sun Rule.** Sun-yellow is a surface, never body text. It appears on
the day stone, the leading format stone, step numbers and status tags. If it
starts appearing as a second accent line, remove it.

**The Mortar Rule.** Structural separators are 1px and read as joints between
stones. The only 2px line is the active menu tab, because it must carry state.

## Typography

**Display / serif:** Young Serif 400, bundled via `@fontsource/young-serif`.
**Working text / sans:** Archivo 400 / 500 / 600, bundled via
`@fontsource/archivo`.

Both are local; there is no Google Fonts request. EB Garamond and Inter Tight
are retired.

**Character:** Young Serif is carved and a little heavy, like lettering cut for
a stone. Archivo is the working voice: compact and neutral. The serif sets the
table; the sans explains it. Do not set UI in the serif or a dish name in the
sans.

### Hierarchy

- **Display** (Young Serif 400, `clamp(3.25rem, 7.6vw, 7rem)`, line-height 0.92):
  the home wall name.
- **Headline** (Young Serif 400, `clamp(2rem, 3.6vw, 3.25rem)`, line-height 1.02):
  section titles and the formats heading.
- **Page title** (Young Serif 400, `clamp(2.75rem, 6vw, 5rem)`, line-height 0.98):
  every interior page hero.
- **Title** (Young Serif 400, `clamp(1.5rem, 2.4vw, 2.125rem)`, line-height 1.15):
  `h3`, steps, menu panels, format stones, FAQ questions.
- **Lead** (Archivo 400, `clamp(1.125rem, 1.4vw, 1.375rem)`, line-height 1.5):
  section intros.
- **Wall lead** (Young Serif 400, `clamp(1.375rem, 2.1vw, 1.875rem)`,
  line-height 1.25): the sentence on the home wall's paper stone. It is set in
  the serif on purpose — it is the project's one spoken line, not a section
  intro — and is the only Lead-role text that breaks the Archivo rule.
- **Body** (Archivo 400, `1.0625rem`, line-height 1.65, `text-wrap: pretty`).
- **Small** (Archivo 400, `0.875rem`): notes and footer meta.
- **Micro** (Archivo 600, `0.75rem`, `0.14em`, uppercase): buttons, nav, labels,
  eyebrows, counters.

**Eyebrow:** a micro uppercase label opens the home wall name and the formats
block. Interior page heroes no longer carry one: the h1 already names the page.
It is a label, not decoration, and it never repeats the heading.

## Layout

- **Content width:** `min(1440px, 100% − 2×gutter)`, gutter
  `clamp(1.25rem, 4vw, 4rem)`.
- **Section rhythm:** `--section-y` is `clamp(4.5rem, 8vw, 8rem)`.
- **Header:** 76px desktop, solid limestone always. No transparent overlay.
- **Wall grid:** 12 columns, 1px gap over `--line`. Name spans 8, the sun day
  stone 4; the photographic opening spans 7, the lead stone 5. The two rows are
  deliberately unequal. Below 960px every course is full width.
- **Section joints:** interior sections carry a 1px top border; page heroes a
  1px bottom border. The pop-up strip is bounded by joints on both sides.
- **Home sequence:** wall hero → three format stones → story → dated pop-up
  strip → gallery teaser → closing CTA. No contact form on home.
- **Private dining sequence:** page hero → story → menu explorer → included →
  process → action band → statement → FAQ → contact prompt → closing CTA.
- **Workshops sequence:** page hero with planning status → three process steps →
  interest prompt. No formats, dates or prices.
- **Contact page:** one centred form page, `/kontakt/` and `/en/contact/`. It is
  the only place the form lives; the header and footer link to it.
- **Full-bleed moments:** the action band, the statement, the closing CTA, the
  pop-up strip and the footer.

Responsive behaviour:

- **≤960px:** the wall stacks; the day list becomes three columns; the formats
  head and pop-up strip become one column.
- **≤760px:** format stones stack; page heroes stack with the text and booking action first, the figure after.
- **≤680px:** the header becomes a two-row disclosure; the pop-up action moves
  above the facts; the gallery teaser becomes one column.
- **≤560px:** the day list becomes one column, and the wall puts the lead and
  booking action above the photograph.

## Elevation & Depth

Flat. No shadows, no floating cards, no glass. Depth comes from tone only: the
paper stone on limestone, the olive field, and the sun surface.

**The Flat-By-Default Rule.** If a surface must feel lifted, change its tone or
its joint. Never add a drop shadow.

## Shapes

Square corners everywhere: buttons, inputs, panels, images, lightbox controls.
The only curve is the circular icon inside the lightbox buttons.

## Components

### Header

- Solid limestone, 1px bottom joint. Serif wordmark left; micro uppercase nav
  (Private dining, Pop-up, Workshops, Contact, Gallery) and the HR/EN pair right.
- The active route carries `aria-current="page"`, including the two new pages.
- Contact goes to the current page's form on private dining and workshops, and
  to the private dining form everywhere else.
- 48px hit areas. Mobile disclosure behaves as before; without JavaScript the
  panel is visible and the toggle hidden.

### Buttons and links

- `.btn` is a transparent rectangle with a 1px ink border, micro uppercase
  label, 48px minimum height, inline arrow. Hover fills ink and flips to ground.
- `.btn--light` is the on-field variant.
- `.link-arrow` is underlined text with an inline arrow, 44px minimum height.
- Only one filled surface exists: the sun stone, and it is not a button.

### Wall hero

- A 12-column grid with 1px joints: name (8) and sun day stone (4), then the
  photographic opening (7) and the lead stone (5).
- The day stone prints 07:00 market, 12:00 prep, 19:30 table.
- The lead stone carries the lead, one booking button, one programme link and
  the booking note.
- The hero image is the rectangular opening in the wall and is decorative
  (`alt=""`); the name and lead carry the meaning.

### Format stones

- Three equal stone widths, unequal content. The whole stone is the link.
- Private dining is sun-filled by default. On hover or keyboard focus of another
  stone, the sun moves to it and private dining returns to paper (`:has`). When
  `:has` is unsupported the default state stands; nothing breaks.
- Each stone prints an index, a serif title, a short text and an arrow label.

### Story

- 4:5 portrait left, heading and paragraphs right, hairline byline, then a link
  into private dining. The portrait is a lightbox trigger.

### Process

- Three numbered steps on hairline rows. The number sits in a sun square; it is
  information, not decoration.

### Menu explorer

- `aria-pressed` toggle group, not a WAI-APG tabs widget. A polite live region
  announces the active menu. The fresh/local menu is the default.
- The sheet is `--paper` inside a 1px joint. Course labels in micro uppercase;
  dish names in serif; `ili` / `or` between two options.
- Desktop panels share a grid cell so the sheet holds its height. No JS reveals
  every panel, stacked.
- No menu photography.

### Included

- A `<dl>` of item / detail rows with hairline joints. The text column explains
  the offer; the list is the receipt.

### FAQ

- Heading and lead left, always-open `<dl>` right. Eight booking-critical
  questions. No accordion.
- The block is the last content section before the closing CTA on private dining.

### Pop-up strip

- The one olive-black field on the home page: live date, place, price, and the
  link to the pop-up page.
- The date uses a `<time datetime>` element.
- On phone the grid stacks: text, facts, action.

### Contact

- Text left, underline fields right. Labels in micro uppercase, fields 48px tall
  with a `--line-strong` bottom edge. Focus uses the ink ring; invalid fields use
  a 2px ink underline.
- `ContactPanel` accepts optional `title`, `lead`, `note` and `subject` so the
  workshops page can reuse it without inventing a second form.

### Footer

- Olive field, serif wordmark, micro nav (Home, Private dining, Pop-up,
  Workshops, Contact, Gallery, Privacy), centred area line, right-aligned
  copyright and Cookie settings. Booking link under the area line.

### Consent banner

- Fixed to the bottom on the olive field, equal Reject and Accept buttons, no
  shadow, a 1px ink top joint. Non-blocking; hides without JavaScript.

### Gallery page

- Page hero with title, lead, count and a 4:5 opening image; 3-column masonry
  (2 at ≤960px, 1 at ≤680px); lightbox with group count; closing CTA.

### Pop-up page

- One page for the current dated dinner. Invitation hero, printed menu card,
  cocktail rail, Istria band, evening details, reserve band.
- The reservation label and note derive from `hasWhatsapp()`: WhatsApp when a
  number is set, "Reserve by email" when it is not. The promise always matches
  the link.
- `status: "soldOut"` swaps the reserve title, lead, button and note.
- On phones the action sits above the facts block.

### Workshops page

- Planning status is a sun tag; the lead says dates and prices are not set.
- Three process steps only: write, set a date, cook and eat.
- The interest block points to `/kontakt/`; the page carries no form.
- No formats, dates, prices or invented capacity.

### Contact page

- Page title, lead and reply note on the left, the form on the right; one column
  at ≤760px.
- The form opens with a required topic group (private dinner, pop-up, workshop,
  something else) so the enquiry arrives labelled.
- It is the only form on the site. Private dining and workshops close with a
  prompt that links here.

### Lightbox, legal, thank-you, 404

- Behaviour unchanged: native dialog, square 1px controls, keyboard and swipe.
- Legal keeps one readable column, now on limestone; thank-you and 404 inherit
  the new tokens and type.

## Motion

- The only authored movement is the sun moving between format stones on hover or
  focus. It is a 240ms background transition.
- Hover on buttons, links, images and menu tabs keeps the existing 220–420ms
  easing.
- `prefers-reduced-motion` removes the transition and the menu fade.

## Accessibility

- **Contrast:** ink on ground 12.79:1; ink-soft on ground 5.38:1; ink on paper
  14.77:1; ink on sun 8.76:1; on-field on field 13.01:1; on-field-soft on field
  8.49:1.
- **Focus:** 2px ink ring with 3px offset on light surfaces; on-field ring on the
  dark field. Format stones use an inset ring so the stone edge stays clean.
- **Targets:** primary controls, header links, language links, form fields and
  format stones are at least 48px. Arrow and footer links are at least 44px.
- **No JS:** the header toggle hides, nav stays visible, menus stack, the form
  still posts, the wall and sun default state stand.
- **Forms:** labels, `required` on name, email and message, optional surname,
  `autocomplete`, native validation, status region and mailto fallback.
- **Consent:** labelled region, equal choices, no focus steal, Cookie settings
  reopens it.
- **Images:** intrinsic `width`/`height`; localised `alt` where content;
  decorative images `alt=""`.
- **Language:** `lang` on `<html>`; HR/EN keys identical; `aria-current` on the
  active language.
- **New windows:** Take a Chef links open in a new tab with an outbound glyph and
  an `sr-only` suffix.

## Photography

Real photography is still coming; the stock placeholders are labelled.

| Slot | Where | Ratio | Notes |
| --- | --- | --- | --- |
| `gallery-terrace` | Home wall opening | 16:10 | The first rectangular opening: a set table with the sea behind it. |
| `chef-portrait` | Story | 4:5 portrait | Tin at work. Do not ship a stock face. |
| `hero-plated` | Private dining hero | 4:5 | A plated dish. |
| `chef-action` | Private dining action band | 3:2 | Hands, fire, plating or the morning's catch. |
| `gallery-plating` | Workshops hero | 3:2 | Hands and work; no invented workshop scene. |
| Gallery | Gallery page and teaser | mixed | Food, table and Istria. |
| Pop-up | Pop-up page | 4:3, 2.4:1, 4:5 | Three real Istria photographs. |

**Named rules**

- **The Real-Face Rule.** Never ship a stock person as the chef.
- **The No-Mask Rule.** Photography is rectangular. No circles or masks.
- **The No-Caption Rule.** No visible captions; the control's accessible name or
  the `alt` carries the description.
- **The Honest-Placeholder Rule.** Stock stays labelled until the real shoot.

## Do's and Don'ts

### Do

- Do use Young Serif for display and headings; Archivo for body, labels, buttons,
  navigation and forms.
- Do keep one sun surface and let it rest on private dining.
- Do use 1px joints and square corners; let tone and type carry the change.
- Do keep the booking funnel, bilingual keys, menu tabs, lightbox, FAQ, one
  contact form and no-JS fallback intact.
- Do keep every image rectangular with intrinsic dimensions and honest alt text.
- Do keep Accept and Reject visually equal.

### Don't

- Don't add a second accent, gold, a script face, gradients, or dark-luxury
  styling.
- Don't add rounded cards, shadows, glass or a second button shape.
- Don't put private dining content on both home and the private dining page.
- Don't promise workshop dates, prices, formats or capacity that do not exist.
- Don't let a reservation label promise WhatsApp when the link is email.
- Don't load analytics before consent.
