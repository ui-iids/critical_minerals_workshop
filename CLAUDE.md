# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

The public website for **cmmci.org** — a national workshop, "Envisioning the Future of
Critical Minerals and Materials Cyberinfrastructure," January 7–8, 2027, at the Earth and
Planets Laboratory, Carnegie Institution for Science, Washington, DC.

It exists to do three jobs: link the participant application form, publish agenda and
logistics, and later host the workshop report. Read `PLAN.md` first — it tracks which
content is real and which is still placeholder.

## Running it

No build step, no dependencies to install. Bootstrap comes from a CDN; everything else is
local. Serve over HTTP rather than opening files directly so relative paths behave:

```bash
python3 -m http.server 8765
```

There is a preview config at `.claude/launch.json` (`cmmci-site`, port 8765).

## Architecture

Six static pages — `index`, `agenda`, `logistics`, `apply`, `organizers`, `report` — plus
`css/styles.css`, `js/main.js`, and `img/`. Deployable by copying the directory to any
static host.

**The header and footer are duplicated verbatim in every page.** This is deliberate: no
build step and no JS-injected partials means the site works from any host and degrades
gracefully. The cost is that *any nav or footer change must be applied to all six files*.
When editing either block, change all six or the site drifts. The only per-page difference
is which nav link carries `aria-current="page"`.

`js/main.js` is enhancement-only — every page is fully usable with JavaScript disabled. It
handles the footer year, an active-nav fallback, `rel="noopener"` on external links, and
the `[data-countdown]` elements. Bootstrap's bundle (loaded first) owns the mobile nav
toggle. Don't move content rendering into JS.

## Styling

`css/styles.css` layers a brand system on top of Bootstrap; Bootstrap keeps the grid,
navbar, and utilities. Brand colors live in `:root` custom properties (`--cm-ink`,
`--cm-navy`, `--cm-copper`, `--cm-teal`, `--cm-muted`, …). Custom buttons (`.btn-cm`,
`.btn-cm-accent`, `.btn-cm-onDark`) are built on Bootstrap's `--bs-btn-*` variable API
rather than overriding its selectors — keep new components on that pattern.

Each token in `:root` has its measured contrast ratio in a comment. **Re-verify the ratio
before changing any color value** — the palette was chosen to clear WCAG 2.1 AA, and the
hero's dark scrim (`.hero__scrim`) is what guarantees hero text stays legible over any
photo. Don't lighten it past `.70` alpha.

## Accessibility (WCAG 2.1 AA — required, not aspirational)

Preserve these when editing:

- Skip link as the first element in `<body>`, targeting `#main`
- The global `:focus-visible` ring — never remove it without an equivalent replacement
- `aria-current="page"` on the active nav link (the copper underline is decorative only)
- Decorative images and inline SVG icons carry `aria-hidden="true"` and empty `alt`;
  content images need real `alt` text
- Section headings are wired to their sections via `aria-labelledby`
- The `.badge-tbd` marker conveys "unconfirmed" in text, not by color
- `prefers-reduced-motion` block at the bottom of the stylesheet

## Placeholder content

Unconfirmed information is marked two ways, and both are searchable:

- `<!-- TODO: ... -->` comments in the HTML, at the exact spot needing an edit
- `<span class="badge-tbd">TBA</span>` where a visitor should see that something is pending

`info@cmmci.org` is a placeholder address repeated across all six pages. The application
and report CTAs are `<button disabled>` rather than links, because there is genuinely no
destination yet — an `<a href="#">` would announce itself to assistive tech as a working
link. Activating one means replacing the whole `<button>` with an `<a href="…">`, not
just flipping an attribute.

Grep for `TODO` and `badge-tbd` before assuming a section is finished.

## Content facts

Treat these as authoritative; they come from the organizers:

- Title: Envisioning the Future of Critical Minerals and Materials Cyberinfrastructure
- Dates: January 7–8, 2027
- Venue: Earth and Planets Laboratory, Carnegie Institution for Science,
  5241 Broad Branch Road NW, Washington, DC 20015
- Co-leaders: Dr. Xiaogang Ma (University of Idaho), Dr. Shaunna Morrison (Rutgers
  University), Dr. Anirudh Prabhu (Carnegie Science), Dr. Tao Wen (Syracuse University)
- ~80 participants, travel supported; applications collected via Google Sheets/Forms
- Outputs: a public report and a peer-reviewed journal publication

`Key_workshop_information.docx` in the project root is the organizers' source document.
