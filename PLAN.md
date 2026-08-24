# PLAN.md — cmmci.org

Website for **Envisioning the Future of Critical Minerals and Materials Cyberinfrastructure**
January 7–8, 2027 · Earth and Planets Laboratory, Carnegie Institution for Science, Washington, DC

Purpose: a central place to link the application form, publish the agenda and logistics,
and later host the workshop report.

---

## Decisions made

| Decision | Choice |
| --- | --- |
| Structure | Multi-page static site (one HTML file per section) |
| CSS | Bootstrap 5.3 via CDN + `css/styles.css` for brand layer |
| JS | Vanilla, progressive enhancement only (`js/main.js`) |
| Build step | None — plain files, deployable to any static host |
| Hero image | `img/DTMGL_SolarEclipse_IMG5105.jpg` |
| Application form | Placeholder; Google Form URL to be swapped in |
| Accessibility target | WCAG 2.1 Level AA |

---

## Status

### Phase 1 — Framework ✅ Complete (2026-08-24)

- [x] Brand palette, type scale, and component styles (`css/styles.css`)
- [x] Shared header/nav, footer, and skip link across all pages
- [x] `index.html` — hero, at-a-glance strip, synopsis, focus areas, co-leaders, CTA
- [x] `agenda.html` — two-day draft program scaffold
- [x] `logistics.html` — venue, travel, lodging, accessibility
- [x] `apply.html` — eligibility, application contents, key-dates timeline
- [x] `organizers.html` — co-leader cards, committee/sponsor placeholders
- [x] `report.html` — outputs and publication-timeline scaffold
- [x] `js/main.js` — year stamp, active nav fallback, external links, countdown

### Phase 2 — Content (blocked on information)

Everything below is marked with a `TODO` comment or a `TBA` badge in the source.

- [ ] **Application form URL** → `apply.html` (enable the disabled button)
- [ ] **Real contact email** → replace `info@cmmci.org` in all 6 page footers + `apply.html`, `logistics.html`, `organizers.html`
- [ ] **Key dates**: applications open, deadline, notification, travel booking → `apply.html`
- [ ] **Confirmed agenda**: keynote speakers, session titles, breakout topics → `agenda.html`
- [ ] **Lodging**: room block, hotel, rate, booking deadline → `logistics.html`
- [ ] **Local transit, parking, visa/invitation-letter process** → `logistics.html`
- [ ] **Co-leader bios and photos** → `organizers.html`
- [ ] **Funder acknowledgement and award number** → `organizers.html`
- [ ] **Sponsor / host logos** → `organizers.html`
- [ ] **Venue photo** (currently using a campus photo as stand-in) → `logistics.html`

### Phase 3 — Launch

- [ ] Point `cmmci.org` DNS at the static host (GitHub Pages, Netlify, or institutional hosting)
- [ ] Confirm HTTPS
- [ ] Add `favicon.ico` / `apple-touch-icon.png`
- [ ] Add `robots.txt` and `sitemap.xml`
- [ ] Optimize hero image (the JPEGs are camera-resolution; resize + compress for web)
- [ ] Cross-browser and mobile check
- [ ] Accessibility audit pass (axe / Lighthouse) before announcing
- [ ] Consider putting the project under git

### Phase 4 — Post-workshop

- [ ] Publish the report PDF + DOI → `report.html`
- [ ] Archive presentation slides
- [ ] Link the journal article
- [ ] Add a participant list or photo gallery if desired

---

## Open questions for the organizers

1. What is the real contact email for the workshop?
2. Is there a funder/award to acknowledge, and required acknowledgement language?
3. Should the site show a participant list once selections are made?
4. Where will the site be hosted?
5. Are there institutional branding requirements (Carnegie, U. Idaho, NSF) to follow?
