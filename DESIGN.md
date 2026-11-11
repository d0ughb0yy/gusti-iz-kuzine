---
name: Gušti iz Kužine
description: A quiet fine-dining site for a private chef in Istria — EB Garamond display over Inter Tight working text, warm ivory ground, near-black ink, one oxblood accent, one dark field.
colors:
  ground: "#f4f0e7"
  ground-raised: "#ede7da"
  ink: "#1a1815"
  ink-soft: "#5b554a"
  line: "#d6cfc0"
  line-strong: "#8a8272"
  accent: "#5a1e23"
  accent-deep: "#411519"
  field: "#151310"
  on-field: "#f4f0e7"
  on-field-soft: "#c6bfb2"
typography:
  display:
    fontFamily: "EB Garamond, Georgia, Times New Roman, serif"
    fontWeight: 400
    fontSize: "clamp(2.75rem, 6vw, 5.5rem)"
    lineHeight: 0.95
    letterSpacing: "-0.01em"
  headline:
    fontFamily: "EB Garamond, Georgia, Times New Roman, serif"
    fontWeight: 400
    fontSize: "clamp(2.25rem, 4.6vw, 3.75rem)"
    lineHeight: 1.05
    letterSpacing: "-0.01em"
  title:
    fontFamily: "EB Garamond, Georgia, Times New Roman, serif"
    fontWeight: 400
    fontSize: "clamp(1.5rem, 2.4vw, 2.125rem)"
    lineHeight: 1.15
    letterSpacing: "-0.01em"
  lead:
    fontFamily: "Inter Tight, Helvetica Neue, Arial, sans-serif"
    fontWeight: 400
    fontSize: "clamp(1.125rem, 1.4vw, 1.375rem)"
    lineHeight: 1.5
  body:
    fontFamily: "Inter Tight, Helvetica Neue, Arial, sans-serif"
    fontWeight: 400
    fontSize: "1.0625rem"
    lineHeight: 1.65
  small:
    fontFamily: "Inter Tight, Helvetica Neue, Arial, sans-serif"
    fontWeight: 400
    fontSize: "0.875rem"
  micro:
    fontFamily: "Inter Tight, Helvetica Neue, Arial, sans-serif"
    fontWeight: 600
    fontSize: "0.75rem"
    letterSpacing: "0.14em"
  page-title:
    fontFamily: "EB Garamond, Georgia, Times New Roman, serif"
    fontWeight: 400
    fontSize: "clamp(2.75rem, 6vw, 5rem)"
    lineHeight: 0.98
    letterSpacing: "-0.01em"
  legal-title:
    fontFamily: "EB Garamond, Georgia, Times New Roman, serif"
    fontWeight: 400
    fontSize: "clamp(2.5rem, 5vw, 4rem)"
    lineHeight: 1.05
    letterSpacing: "-0.01em"
  statement:
    fontFamily: "EB Garamond, Georgia, Times New Roman, serif"
    fontWeight: 400
    fontSize: "clamp(2rem, 4.5vw, 4rem)"
    lineHeight: 1.08
    letterSpacing: "-0.01em"
  statement-phone:
    fontFamily: "EB Garamond, Georgia, Times New Roman, serif"
    fontWeight: 400
    fontSize: "1.75rem"
    lineHeight: 1.15
  footer-brand:
    fontFamily: "EB Garamond, Georgia, Times New Roman, serif"
    fontWeight: 400
    fontSize: "clamp(2rem, 4vw, 3rem)"
    lineHeight: 1
  section-subhead:
    fontFamily: "EB Garamond, Georgia, Times New Roman, serif"
    fontWeight: 400
    fontSize: "1.75rem"
    lineHeight: 1.15
  subhead:
    fontFamily: "EB Garamond, Georgia, Times New Roman, serif"
    fontWeight: 400
    fontSize: "1.25rem"
    lineHeight: 1.25
  menu-tab:
    fontFamily: "EB Garamond, Georgia, Times New Roman, serif"
    fontWeight: 400
    fontSize: "1.25rem"
    lineHeight: 1.15
  action-link:
    fontFamily: "Inter Tight, Helvetica Neue, Arial, sans-serif"
    fontWeight: 600
    fontSize: "0.8125rem"
    letterSpacing: "0.06em"
  nav-phone:
    fontFamily: "Inter Tight, Helvetica Neue, Arial, sans-serif"
    fontWeight: 600
    fontSize: "0.9375rem"
    letterSpacing: "0.1em"
  hero-phone:
    fontFamily: "EB Garamond, Georgia, Times New Roman, serif"
    fontWeight: 400
    fontSize: "clamp(2.75rem, 13vw, 4rem)"
    lineHeight: 0.95
  hero-phone-small:
    fontFamily: "EB Garamond, Georgia, Times New Roman, serif"
    fontWeight: 400
    fontSize: "clamp(2.5rem, 14vw, 3.25rem)"
    lineHeight: 0.95
spacing:
  gutter: "clamp(1.25rem, 4vw, 4rem)"
  section-y: "clamp(5rem, 9vw, 9rem)"
  max: "1360px"
  header: "76px"
components: {}
---

# Design System: Gušti iz Kužine

## Overview

**Creative North Star: "The Tasting Menu."**

The site is the printed menu of a private dinner: a warm paper ground, a serif that behaves like type set for a restaurant, one oxblood mark, and photographs given the room to be the event. It borrows the visual calm of Eleven Madison Park and Minamishima without copying either. The chef's own story is the spine; the food is the first thing a guest sees.

This is not a fresh-market site. The old chartreuse, olive, and Barlow world is gone. The new world is quieter, older, and more expensive: ivory paper, near-black ink, oxblood, and a single near-black field. Square corners, hairlines, and whitespace do the composition. Nothing is decorated for its own sake.

**Key characteristics:**
- One warm ivory ground, one raised ivory for the menu sheet, one near-black ink, one oxblood accent, one dark field.
- EB Garamond for display, headings, menu names, and quotes; Inter Tight for body, labels, buttons, and UI.
- Photography is rectangular and full-bleed where it matters. No masks, no cards, no shadows, no rounded corners.
- One authored entrance on the home hero. Nothing else moves on scroll.
- The booking funnel, bilingual content, menu tabs, gallery lightbox, FAQ, contact form, and no-JS behaviour are load-bearing and must survive any visual change.

## Colors

The palette is a single theme, defined in `src/styles/theme.css`. There is no palette switcher and no `data-palette` attribute. Colors are semantic roles; use the token, never the literal hex.

### Surfaces
- **Ground** (`#f4f0e7`): the page. Warm ivory, slightly paper-like, never pure white.
- **Ground Raised** (`#ede7da`): the printed menu sheet only. One step darker than the page, so the menu reads as a sheet laid on the table.
- **Field** (`#151310`): the inverted field for the statement, closing CTA, and footer. It is warm near-black, not blue-black.

### Ink
- **Ink** (`#1a1815`): body text and primary outlines. Contrast on ground: 15.6:1.
- **Ink Soft** (`#5b554a`): secondary text, captions, labels, menu descriptions. Contrast on ground: 6.5:1.
- **On Field** (`#f4f0e7`): text and controls on the dark field. Contrast on field: 16.3:1.
- **On Field Soft** (`#c6bfb2`): secondary text on the dark field. Contrast on field: 10.2:1.

### Accent
- **Oxblood** (`#5a1e23`): the single accent. Active menu tab, focus ring on light surfaces, selection, links in legal copy, hover on arrow links. Contrast on ground: 11.2:1; on raised: 10.4:1.
- **Oxblood Deep** (`#411519`): invalid-field underline and error text. Contrast on ground: 13.7:1.

### Line
- **Line** (`#d6cfc0`): 1px hairlines for table-like rows, menu tabs, section edges, and the form's top rule. It is a rule, not a border costume.
- **Line Strong** (`#8a8272`): the form-field underline only. Contrast on ground: 3.35:1, which clears the 3:1 non-text bar because the underline is a field's only boundary.

### Named rules
**The One-Accent Rule.** Oxblood appears in small doses: the active menu tab, a focus ring, a selected string, an error, a hover. It never fills a large surface and never becomes a second brand color.

**The Hairline Rule.** Structural separators are 1px. The only 2px line is the invalid-field underline, because it must survive native validation messaging.

**The Form-Boundary Rule.** A hairline that is merely decorative stays `--line`. The moment a line is the only edge of an interactive field, it becomes `--line-strong` so it clears 3:1.

## Typography

**Display / serif:** EB Garamond (400, 400 italic, 500), bundled locally via `@fontsource/eb-garamond`.
**Working text / sans:** Inter Tight (400, 500, 600), bundled locally via `@fontsource/inter-tight`.

Both are local packages. There is no Google Fonts request and no third-party font host. The old Barlow / Barlow Condensed pairing is retired.

**Character:** EB Garamond carries the restaurant voice: old, quiet, confident, slightly literary. Inter Tight is the working voice: compact, neutral, and highly readable at small sizes. The serif sets the table; the sans explains it. Neither is decorative.

### Hierarchy
- **Display** (EB Garamond 400, `clamp(2.75rem, 6vw, 5.5rem)`, line-height 0.95, `-0.01em`): the home hero name and the largest page titles.
- **Headline** (EB Garamond 400, `clamp(2.25rem, 4.6vw, 3.75rem)`, line-height 1.05): section titles and the statement quote at smaller viewports.
- **Title** (EB Garamond 400, `clamp(1.5rem, 2.4vw, 2.125rem)`, line-height 1.15): `h3`, process step titles, menu panel titles, FAQ questions, and menu tabs.
- **Lead** (Inter Tight 400, `clamp(1.125rem, 1.4vw, 1.375rem)`, line-height 1.5): section intros and the hero lead.
- **Body** (Inter Tight 400, `1.0625rem`, line-height 1.65, `text-wrap: pretty`): paragraphs and menu descriptions.
- **Small** (Inter Tight 400, `0.875rem`): captions, notes, form fallback, footer meta.
- **Micro** (Inter Tight 600, `0.75rem`, `0.14em` tracking, uppercase): buttons, nav links, labels, the `ili` / `or` separator, counters, and micro-attributions.

**Breakpoints.** The ramp is fluid, but the hero name is explicitly capped on phones: `clamp(2.75rem, 13vw, 4rem)` at ≤680px and `clamp(2.5rem, 14vw, 3.25rem)` at ≤399px. The statement quote drops to `1.75rem` at ≤680px. Menu tabs drop to `1.25rem` at ≤960px. On phones the menu sheet tightens too: the panel title is `1.375rem` and dish names are `1.0625rem` at ≤680px, keeping the title at roughly 1.3× the dish size. These are the only intentional size exceptions; they live in `src/styles/global.css`.

### Named rules
**The Two-Voice Rule.** EB Garamond is for things a guest would read on a menu or a letter: names, titles, dishes, quotes. Inter Tight is for things a guest needs to use: body copy, labels, buttons, navigation, form fields. Do not set UI in the serif and do not set a dish name in the sans.

**The No-Eyebrow Rule.** No small uppercase kicker above a heading. The heading is the first thing in the block. Micro type is reserved for labels, navigation, buttons, and metadata, not for decorating a section title.

## Layout

- **Content width:** `min(1360px, 100% − 2×gutter)`, gutter `clamp(1.25rem, 4vw, 4rem)`.
- **Section rhythm:** `--section-y` is `clamp(5rem, 9vw, 9rem)` block padding. The rhythm is generous; the page should feel paced, not packed.
- **Header:** 76px on desktop, 64px minimum on phone. Solid ivory by default. Transparent only over the home hero, where it sits on the dark scrim; opening the mobile menu returns it to solid ivory.
- **Grid language:** editorial splits, not cards. The story is portrait / text; the process is three numbered columns; the included list and FAQ are definition lists; the menus are a tab rail beside a printed sheet; the gallery teaser is an asymmetric 12-column grid.
- **Home sequence:** hero, story, menu explorer, process, action band, included, gallery teaser, statement, FAQ, closing CTA, contact. The chef comes before the menus: a guest meets the person cooking, then sees what he cooks, before the practical details.
- **Full-bleed moments:** the hero, the action band, the statement, the closing CTA, and the footer. They are the only places the page breaks the wrap.

Responsive behaviour:
- **≤960px:** the story, process head, included, FAQ, contact, gallery page hero, and 404 stack to one column. Figures cap at 44rem. The menu explorer becomes one column with a three-column tab row. The gallery page drops to two masonry columns.
- **≤680px:** the header becomes a two-row disclosure header; the hero shortens; the hero actions stack; menu tabs become a vertical list; the menu sheet sizes to content; the gallery teaser and gallery page become one column; the footer centres.
- **≤399px:** the hero name is capped tighter and the action band has a shorter minimum height.

## Elevation & Depth

The system is flat. There are no shadows, no floating cards, and no glass. Depth comes from two devices only:

1. **Tonal bands:** ivory → dark field → ivory → dark field. The alternation paces the scroll.
2. **The printed sheet:** the menu panel is the one raised surface. It is raised by a single step in ground tone plus a 1px border, not by a shadow.

### Named rule
**The Flat-By-Default Rule.** If a surface needs to feel lifted, change its tone or its border. Never add a drop shadow.

## Shapes

Corners are square everywhere: buttons, inputs, panels, images, lightbox controls. The only curved geometry is the circular icon inside the lightbox buttons, not the button itself.

### Named rule
**The Square-Voice Rule.** Square corners and hairlines read as hand-set print. Rounded cards are an anti-reference for this system.

## Components

### Header
- **Desktop:** serif wordmark left; micro uppercase nav (Menu, Contact, Gallery) and the HR/EN pair right. The active language is marked with `aria-current`, not linked. Links have 48px-tall hit areas.
- **Home hero:** the header is absolutely positioned over the hero with no background or bottom border. Brand, nav, and language switch to `--on-field`. On every other page the header is solid ivory with a hairline bottom border.
- **Mobile (≤680px):** brand left, language pair outside the disclosure panel, 48px menu toggle right. The panel opens below the first row as a full-width ivory sheet, with centered labels and 55px link rows. Opening it returns the overlay header to its solid ivory state: `--ground` background, `--ink` text, and a `--line` bottom rule. It closes on link click, `Esc` (focus returns to the toggle), outside click, and resize. Without JavaScript the toggle is hidden, the header is solid ivory, and the panel is visible.
- **The overlay rule:** the transparent header is allowed only on the two home routes. A 404 or a secondary page that shares the `home` route key must not inherit it.

### Buttons
- **One voice:** `.btn` is a transparent rectangle with a 1px ink border, micro uppercase label, 48px minimum height, and an inline arrow. Hover fills ink and flips the label to ground.
- **On dark:** `.btn--light` uses an on-field border and label; hover fills on-field and flips to field.
- **No filled primary button, no second button shape.** The booking CTA is the only button; every other action is a text link or an arrow link.

### Arrow links
- `.link-arrow` is an underlined text link with an inline arrow, 44px minimum height. The underline is text-decoration, not a border, so the arrow sits outside it. Hover moves to oxblood.
- Used for "how it works", "reserve the evening", "see the full gallery", and the menu CTA.

### Hero
- Full-bleed food photograph, a warm near-black scrim, centred serif name, lead, one outline booking CTA, one underlined secondary link, and a booking note.
- The scrim is a four-stop vertical gradient. Its minimum opacity over the text area is 0.55, which keeps ivory type at or above 4.5:1 even over a white plate.
- One authored entrance: the photograph settles from a 1.04 scale over 1.6s, the content rises 12px over 800ms with a 160ms delay. `prefers-reduced-motion` removes both.
- The hero image is decorative (`alt=""`) because the name and lead carry the meaning.

### Story
- 4:5 portrait slot left, heading and two paragraphs right, a hairline byline with the chef's name and one humanising fact, then the process link.
- The portrait is a lightbox trigger. Its `alt` is empty; the button label names the chef.
- On phone the image comes first, then the text.

### Process
- Three numbered steps (`01`, `02`, `03`), each with a hairline top, a micro number, a serif title, and a short paragraph. The numbers are information, not decoration.
- The head is a two-column split: heading left, lead right. It stacks at ≤960px.

### Action band
- One full-bleed photograph with a dark bottom gradient and a single small caption. It is a cinematic pause between the process and the included list, not a gallery.

### Included
- A `<dl>` of item / detail rows with hairline tops and a final hairline bottom. No table, no card. The text column explains the offer; the list is the receipt.

### Menu explorer
- **Tabs:** serif name plus a small sans description. They are an `aria-pressed` toggle group, deliberately not a WAI-APG tabs widget: three tabs, click to switch, no roving tabindex or arrow keys. A polite live region announces the menu now on screen.
- **Sheet:** the active menu sits on `--ground-raised` inside a 1px border. Course name in micro uppercase; one or two dish options in serif; two options sit side by side around an uppercase `ili` / `or` separator with hairline edges.
- **Height:** on desktop and tablet, all panels share one grid cell, so the sheet keeps the tallest panel's height and switching tabs never moves the page. On phone, panels size to their content so the shorter menu leaves no empty sheet.
- **No JS:** every panel is visible and stacked; the tabs remain visible but are not the only way to read the menus.
- **No menu photography.** The menu is a printed sheet, not a gallery.

### Gallery teaser
- A 12-column asymmetric grid of four images: 4:3, 3:4, 1:1, 16:9, with captions. The images are offset vertically so the section reads as prints dropped on the page, not a uniform card grid.
- Each image is a lightbox trigger. The section ends with a small stock-photography note and the full-gallery link.

### Statement
- A dark field with one large EB Garamond italic quote and a micro attribution. It is the emotional peak and the only place italic serif is used at scale.

### FAQ
- Heading and lead left; a `<dl>` of questions and answers right, separated by hairlines. Answers are always open. No accordion.

### Closing CTA
- A dark field split: serif headline and lead left, outline booking button right. On phone the action moves below the text and aligns left.
- The Take a Chef handoff is explained once, in the hero booking note. The CTA band does not repeat it.

### Contact
- Text left, form right. The form is not a card: a hairline top, labels in micro uppercase, and fields that are transparent with a 1px `--line-strong` bottom edge, 48px tall.
- Focus uses the global ring; invalid fields use a 2px oxblood-deep underline and a visible hint. The Web3Forms markup and script are preserved.
- Name and surname share a row on desktop; everything stacks on phone. The form has a visible privacy note and a mailto fallback.

### Footer
- Dark field, serif wordmark, micro uppercase nav, a centred area line, and a right-aligned copyright. The booking link is underlined. Links have 44px-tall hit areas.

### Consent banner
- Fixed to the bottom on the dark field: a short serif title, one line of explanation with a privacy link, and two equal outline buttons — Reject and Accept. No close icon and no pre-selected choice.
- It is non-blocking. The page behind stays usable, and the bar adds matching bottom padding while visible so it never covers the footer.
- On phone the buttons form two equal columns. **Cookie settings** in the footer reopens the bar. Without JavaScript the bar stays hidden, because there is no tracking then.

### Gallery page
- Page hero: serif title, lead, photo count, and a large 4:5 image (the bread photograph). The hero image is not repeated in the grid.
- Grid: 3-column CSS masonry on desktop, 2 at ≤960px, 1 at ≤680px. Varied aspect ratios and small captions. Every item opens the lightbox with the group's count.
- The page closes with the same dark CTA band.

### Lightbox
- Native `<dialog>` with `showModal`, near-black field, square 1px-bordered controls, serif caption, micro counter.
- Keyboard (`←`/`→`/`Esc`), outside-click close, touch swipe, and focus return to the trigger. Rapid arrow presses use a token counter so the wrong photo cannot render.

### Legal, thank-you, 404
- **Legal:** one 44rem column, serif `h1`/`h2`, sans body, hairline sections, oxblood links.
- **Thank-you:** centred serif headline, lead, one outline home button, two text actions.
- **404:** serif headline, Croatian and English paths back, one outline home button, two text links, and a 2×2 image grid of Istria and the table.

## Motion

- **Hero:** the only authored entrance. Image settles; content rises once. No scroll-triggered reveals anywhere on the site.
- **Menu:** a 300ms fade/8px rise when a panel becomes active. The panel height is stable on desktop.
- **Hover:** buttons, arrow links, header nav underlines, gallery images, and menu tabs use 220–420ms transitions. Image hover is a 1.02 scale and 0.9 opacity, never a colour wash.
- **Reduced motion:** all animation and transition durations collapse to 0.01ms; the hero entrance and menu fade are removed; smooth scrolling is disabled.

## Accessibility

- **Contrast:** ink on ground 15.6:1; ink-soft on ground 6.5:1; oxblood on ground 11.2:1; on-field on field 16.3:1; on-field-soft on field 10.2:1. The hero scrim keeps the lead at or above 4.5:1.
- **Focus:** 2px oxblood ring with 3px offset on light surfaces; 2px on-field ring on the hero, dark bands, footer, and lightbox.
- **Targets:** primary controls, header links, language links, and form fields are at least 48px tall; arrow links and footer links are at least 44px. Inline links inside paragraphs are the only exception.
- **No JS:** the header toggle hides, the nav stays visible, all three menus stack, and the form still posts. The site never depends on JavaScript for content.
- **Forms:** labels, `required`, `autocomplete`, native validation, `:user-invalid` hints, a visible status region, and a mailto fallback.
- **Consent:** the bar is a labelled region; both choices are 48px buttons; it does not steal focus on first load, and focus returns to the footer trigger when it is opened from there.
- **Images:** every image keeps intrinsic `width`/`height`; localised `alt` where the image is content; decorative images use `alt=""` and are labelled by the surrounding button or heading.
- **Language:** `lang` is set on `<html>`; the HR/EN pair uses `aria-current`; all copy exists key-for-key in both languages.

## Photography

The site is designed around real photographs that are still being shot. The slots are fixed; the placeholder stock is temporary.

| Slot | Where | Ratio | Notes |
| --- | --- | --- | --- |
| `hero-plated` | Home hero | 3:2 landscape | A plated dish, dark or moody enough to survive the scrim. The current salmon is a placeholder. |
| `chef-portrait` | Story | 4:5 portrait | Tin, ideally at work or in the kitchen. The current hands-only image is a placeholder; do not present a stock face as Tin. |
| `chef-action` | Action band | 3:2 landscape | Hands, fire, plating, or a finished roast. The current roast chicken is a placeholder. |
| Gallery | Gallery page and teaser | mixed | Food, table, and Istria. The gallery page currently carries temporary food and preparation images plus real Istria photographs. |

**Named rules**
- **The Food-First Rule.** The first screen is food, not a portrait. The portrait belongs in the story section.
- **The Real-Face Rule.** Do not ship a stock person as the chef. Until the real portrait exists, use a hands-only or detail image and keep the caption honest.
- **The No-Mask Rule.** Photography is rectangular. No circles, blobs, or decorative masks.

## Do's and Don'ts

### Do
- Do use EB Garamond for display, headings, menu names, and quotes; Inter Tight for body, labels, buttons, navigation, and forms.
- Do keep one oxblood accent and let it stay rare: active tab, focus ring, selection, error, hover.
- Do use 1px hairlines and square corners; let whitespace and type carry the section change.
- Do alternate the ivory ground and the dark field to pace the scroll.
- Do keep the booking funnel, the bilingual keys, the menu tabs, the gallery lightbox, the FAQ, the contact form, and the no-JS fallback intact.
- Do keep every image rectangular with intrinsic `width`/`height` and localised `alt` where it carries meaning.
- Do keep the hero scrim dark enough that ivory type clears 4.5:1 over a bright plate.
- Do keep **Accept** and **Reject** visually equal in the consent banner.

### Don't
- Don't add a second accent, a script face, gold, or dark-luxury styling. Restraint is the brand.
- Don't add rounded cards, shadows, glass, or a second button shape.
- Don't put a kicker or eyebrow above a heading.
- Don't use a stock face as the chef.
- Don't use `--line` as a decorative section divider; it exists for table rows, menu tabs, form underlines, and section edges.
- Don't load analytics before consent, and don't hide rejection behind a smaller or close-only control.
- Don't reintroduce a palette switcher, `data-palette`, the Barlow fonts, chartreuse, or the old scroll-reveal observer.
