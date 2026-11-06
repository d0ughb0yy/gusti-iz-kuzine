# Hero copy, booking-first funnel, and the stable menu sheet

Date: 2026-11-06
Status: awaiting approval
Scope: top three items from the 2026-11-06 critique (`30/36`)

## Intent

The site's visual world is authored and holds up; the critique's P1 and two of its
P2s are not visual problems. They are one sentence at the top, one ordering
decision at the bottom, and one layout behaviour in the middle.

The chef's stated niche is **precise fine-dining technique brought into a guest's
home**. The current hero carries that idea, but arrives at it by disparaging other
chefs ("više od običnog privatnog kuhara") and by borrowing "ekskluzivni
restoran" — a phrase `DESIGN.md` explicitly names as an anti-reference. The
sentence argues against the page it sits on.

## Goals

- The first sentence a cold visitor reads states the offer and carries the
  fine-dining niche without a competitor put-down or a luxury cliché.
- The lowest-effort, highest-intent action (booking on Take a Chef) comes before
  the highest-effort optional action (writing a message).
- Switching menu tabs no longer moves every section below the menu.

## Non-goals

- Rewriting the rest of the copy, or touching the eight repeated "reply within 24
  hours" surfaces. That is the "distill" pass, not this one.
- Touching the visual system, type ramp, palette, or photography.
- The minor observation list (form-field contrast, 42px inputs, tab font family,
  active-language link, orphaned last words). Deferred deliberately.

## Anti-goals

- Making the page taller for no reason.
- Introducing a second button voice or a new surface.
- Hardcoding pixel heights that break when the copy or locale changes.

## Constraints

- Bilingual and key-for-key: `hr.json` and `en.json` move together.
- `hero__lead` is capped at `42ch` at `--lead`; Croatian runs longer than English.
- No build-time data fetching, no new dependencies.
- Must keep working with JavaScript disabled.

## Approaches

### Hero lead

1. **Plain promise, precision as the qualifier** — "Privatni kuhar u Istri. Kuham
   male večere… Restoranska preciznost, bez restoranske formalnosti…" States the
   service first, then earns the niche. Safest for a cold visitor; buries the
   differentiator.
2. **Lead with the craft, service as the frame** — chosen. Opens on the
   differentiator (restaurant technique, precise plating), then says where and
   for how many. Strongest for a guest already shopping for a private chef and
   choosing between them.
3. **First-person, intimate, portfolio voice** — warmest, closest to the rest of
   the copy, but drops "private chef" and "Istria" from the opening clause.

### Funnel order

1. **Swap the two sections** — chosen. `CtaBand` moves above `ContactPanel`;
   surfaces become ground (FAQ) → dark (CTA) → accent-soft (contact) → dark
   (footer).
2. **Keep the order, add a booking button inside the contact band** — smaller
   diff, but two competing primary actions side by side.
3. **Demote contact to a text link under the CTA** — cleanest funnel, largest
   rewrite of `ContactPanel`, and loses the form's discoverability.

### Menu sheet height

1. **Stack all panels in one grid cell; hide with `visibility`, not `display`** —
   chosen. The container takes the tallest panel's height at every breakpoint and
   in both languages, with no hardcoded pixels. JS-disabled fallback keeps
   stacking vertically.
2. **Fixed `min-height` per breakpoint** (1280 → 718, 768 → 608, 390 → 969,
   360 → 994) — simple, but brittle the moment copy or locale changes.
3. **Animate the height between panels** — no jump, but a 200–300px animated
   reflow mid-decision is worse than a static tall sheet, and it needs
   measurement JS.

## Decisions

**D1. Hero lead** — exact strings (final: variant V2):

```jsonc
// hr.json → hero.lead
"Privatni kuhar u Istri. Restoranska kuhinja seli se u vaš dom: ista preciznost, ista tehnika, bez formalnosti. Jelovnik nastaje tog jutra na tržnici."

// en.json → hero.lead
"A private chef in Istria. The restaurant kitchen moves into your home: the same precision, the same technique, without the formality. The menu comes together that morning at the market."
```

Three sentences: the offer, the craft, the sourcing. The middle sentence carries
the niche — restaurant technique moved into a guest's kitchen, with formality
explicitly dropped, which is also the sentence that retires the old
"više od običnog privatnog kuhara / ekskluzivni restoran" framing. "Privatni
kuhar u Istri" is restored for search; the guest count moves out of the lead and
is carried by the intro, `included` and the FAQ.

The chef will keep working on the wording by hand; this is the approved
scaffolding, not a locked final.

**D2. Funnel** — `src/components/HomePage.astro`: `CtaBand` renders before
`ContactPanel`. Nothing else in either component changes. The `#kontakt` anchor
and the header nav link keep working.

Consequence to accept: the contact lead still says "For dates and bookings, go to
my Take a Chef profile", now *after* the booking button. Redundant, not wrong;
the copy pass takes it.

**D3. Menu sheet** — `src/styles/global.css`:

- `.menu-panels` becomes `display: grid`.
- `.menu-panel` gets `grid-area: 1 / 1` so all panels occupy one cell.
- `.menu-panel[hidden]` gets `display: block; visibility: hidden;` so it keeps its
  space without being painted, focusable, or announced.
- The existing `<noscript>` block restores `display: block`, `grid-area: auto`
  and `visibility: visible` so the no-JS fallback still stacks every menu.

`min-height: 22rem` on `.menu-panel` stays as a floor.

**One removal was required:** a stray `.menu-panel[hidden]{display:none!important}`
sat at the end of `global.css`, left over from the first commit. It silently
defeated the stacking and had to go — with `hidden` panels now painted as
`display: block`, the `!important` was also redundant.

**Breakpoint split (added after review).** The fixed sheet is right on desktop,
where the panel is fully visible and a jump is felt. On a phone the tallest panel
(994px at 360, 969px at 390) is taller than the viewport, so reserving its height
buys almost no stability and leaves up to 339px of empty panel under the tasting
menu. Below 680px — the existing phone breakpoint — panels size to their content
again:

```css
@media (max-width: 680px) {
  .menu-panels { display: block; }
  .menu-panel { grid-area: auto; }
  .menu-panel[hidden] { display: none; }
}
```

Cost accepted on phones: the document height changes on tab switch again. It is
deliberate — the void was the worse of the two, and the change happens largely
below the fold. The `<noscript>` block still wins there, so no-JS keeps stacking
every menu.

**Void under the shorter menus, after the split** (measured below the last child,
before bottom padding): 0px at every breakpoint and menu except where the sheet
is active — 50px and 201px at 1280, 25px and 126px at 768, 50px and 202px at 681.
At 680 and below it is 0px everywhere.

## Verification (2026-11-06)

Run against the local dev server with headless Brave over CDP.

- `npm run build` — exit 0, 9 pages.
- Panel height and document height are identical across all three tabs on tablet
  and desktop — 1280×900 (718px), 960×900 (567px), 768×1024 (608px), 681×900
  (683px), and `/en/` at 1280 (668px). No scroll jump.
- Below the 680px breakpoint panels size to content and the sheet void is gone:
  390×844 → 994 / 919 / 655, 360×800 → 1020 / 969 / 706, all with 0px empty
  below the content. Document height changes on switch by design.
- The breakpoint lands cleanly: 681px still renders `display: grid` with a 683px
  sheet; 680px renders `display: block` with content-sized panels.
- Hero lead renders at 3 lines on 1280 and 4 lines on 768 / 390 / 360, both
  languages. No widow.
- `CtaBand` precedes `ContactPanel` in the DOM on both language home pages.
- No-JS at 390px: all three panels render `display: block; visibility: visible`
  and stack vertically (tops 4258 / 5253 / 6172).
- Links inside hidden panels are not focusable (forced `.focus()` does not take);
  `aria-pressed` toggles correctly; no console errors or exceptions.
- The entry animation is re-triggered in JS, because `visibility` hiding no longer
  restarts it the way `display: none` did. Below 680px `display: none` restarts it
  on its own; the nudge is redundant there but harmless.

## Second pass (2026-11-06)

### Menu tab announcement

`HomePage.astro` gains a polite live region next to the panels:
`<p class="sr-only" aria-live="polite" data-explorer-status data-label={t.menus.current}>`.
The tab script writes `"{label}: {menu name}"` into it, reading the name from the
panel's `h3`, and only when the index actually changes so re-clicking the active
tab stays silent. New copy key `menus.current` ("Prikazan jelovnik" / "Showing
menu"). The `aria-pressed` toggle-group semantics are unchanged.

Verified: region is empty on load; after tab 2 it reads "Prikazan jelovnik: Svježe
i lokalno"; after tab 3 "Prikazan jelovnik: Plodovi Jadrana"; re-clicking the same
tab leaves the text unchanged, so nothing is re-announced.

### Booking reassurance trimmed

Removed the duplicate promises rather than the reassurance itself:

| Surface | Change |
|---|---|
| Menu panel note | Removed entirely (key `menus.bookingNote` deleted from both files) |
| Contact lead | Now "Za sve ostalo — pitanje, ideju, povod — pišite mi ovdje." / "For everything else — a question, an idea, an occasion — write to me here." The Take a Chef pointer is gone because the CTA band sits directly above it |
| FAQ lead | Dropped the trailing "reply within 24 hours" sentence |
| Hero note, contact note, final CTA note, FAQ booking answer, footer link | Kept — each now has a distinct job |

On the built home page, "24 hours" appears twice as visible text (hero note and
contact note) and "Take a Chef" seven times, including link labels and the form's
fallback line. Dead `.menu-explorer__note` rule removed from `global.css`.

### Active language is no longer a link

`Header.astro` renders the current language as a `<span class="lang__item"
aria-current="page">` and the other as an `<a>`. Same class, same weight-600
`[aria-current]` rule, same flex row — so the header is visually identical, which
was the condition for doing it. Self-referencing `hreflang` in the header is
redundant anyway: `BaseLayout` already emits canonical plus `hreflang` alternates
for both languages and `x-default`.

Verified at 1280 in both languages: HR page → `SPAN HR` (600) + `A EN` (400);
EN page → `A HR` (400) + `SPAN EN` (600). `href` is null on the active item.

## What's left to the builder

Deferred deliberately, not forgotten:

- The chef is rewriting the hero lead by hand on top of V2.
- Minor list from the critique: form-field boundary contrast, 42px inputs, menu-tab
  font family, FAQ large-type face, orphaned last words, no-JS lightbox affordance,
  homepage lightbox grouping, hero image crop, no persistent mobile booking CTA.
- Content decisions: one real guest quote, a price signal, real photography.
