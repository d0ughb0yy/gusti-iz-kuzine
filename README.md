# Gušti iz Kužine

Privatne večere, pop-upovi i kuharske radionice u Istri. Jedan kuhar, jedan stol, tri načina da sjednete za njega.

---

Gušti iz Kužine is Tin Lučić's gastro project in Istria. It has three formats: a private dinner cooked in your home or villa for up to six guests, a dated pop-up dinner in Fažana, and small cooking workshops that are being planned.

## The three formats

- **Private dining.** The chef comes to you: to a home, a villa, or a terrace, cooks for up to six guests, and serves a dinner with the precision of a good restaurant and none of its formality. This is the main business.
- **Pop-up.** A fixed, dated dinner with one menu and one table. The current pop-up is Saturday 5 December 2026 in Fažana, €85 per person including two signature cocktails. Seats are requested on WhatsApp with a prefilled message.
- **Workshops.** Small cooking workshops are in planning. No dates, prices, formats or capacity are published; the page carries the planning status, a three-step outline of how it will work, and an interest prompt that leads to the contact page.

## How the chef cooks

- **Local and in season first.** The menu is decided by the market, not the other way round: what is best that morning, from fishmongers, local growers, and Croatian meat producers.
- **Modern techniques.** Ingredients are prepared with contemporary methods, from grill and pan to sous-vide, and plated with fine-dining care.
- **At your table.** The chef does the shopping, cooks in your kitchen, serves course by course, and leaves the kitchen clean.
- **Small and personal.** Up to six guests, one table, no crowd.

## Sample menus

Three menus are starting points for a conversation:

- **Meat lovers**: four courses, with two choices per course.
- **Fresh and local**: the chef's choice of local dishes.
- **Fresh from the Adriatic**: seafood in the leading role.

Every menu adapts to allergies, intolerances, and dietary needs.

## Booking

Private dining reservations go through the chef's profile on [Take a Chef](https://www.takeachef.com/en-hr/chef/tin-lu-i). The site has one contact form, on `/kontakt/` and `/en/contact/`; it submits directly to Web3Forms and arrives by email with a topic label. The access key and recipient address live in `src/config.ts`; the form needs no backend or database.

The pop-up page is the exception: seats for the dated dinner are requested on WhatsApp, with a prefilled message, using the number in `src/config.ts`. If the number is cleared, the same action falls back to a prefilled email and the label changes to match.

## The website

A small, bilingual site built as one chef's project, not a service listing:

- **Croatian**: home, private dining, pop-up, workshops, contact, gallery and privacy policy at `/`, `/privatno/`, `/popup/`, `/radionice/`, `/kontakt/`, `/galerija/` and `/politika-privatnosti/`
- **English**: the same pages at `/en/`, `/en/private-dining/`, `/en/popup/`, `/en/workshops/`, `/en/contact/`, `/en/gallery/` and `/en/privacy-policy/`
- **Thank-you pages**: `/hvala/` and `/en/thank-you/`, used only when the contact form falls back to a native submit
- **404**: one page in each language

The home page is a wall: the name, a sun day stone, a photographic opening, the lead and one booking action, then three format stones of unequal width for private dining, the pop-up and workshops. Private dining is sun-filled by default; the sun moves to whichever stone is active. Below the wall: the chef's story, a dated pop-up strip, the gallery teaser and a closing CTA.

The private dining page holds the full funnel: hero, tabbed menus with one or two dishes per course and no menu photography, what is included, the process, an action band, the statement, the FAQ, a contact prompt and the closing CTA. The chef's story stays on the home page; private dining does not repeat it.

The pop-up page is a single invitation for the current dated dinner: the date, place and price, a printed menu card, the two signature cocktails, how the evening runs, and one reservation action.

The workshops page says plainly that dates and prices are not set. It carries three process steps and an interest prompt, and nothing that implies a scheduled programme.

The contact page carries the site's only form. A required topic group labels each enquiry — private dinner, pop-up, workshop or something else — and the message arrives by email through Web3Forms.

## Project notes

The copy, photos, and chef name are being finalised; `CONTENT.md` is the checklist of what to replace before going live. The visual system of record is `DESIGN.md` at the project root.

For anything technical (running the site locally, deploying to Vercel, editing text, images, and the pop-up page), see `docs/development.md`.
