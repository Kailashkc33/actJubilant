# ACT Jubilant — Website

Production site for [ACT Jubilant](https://actjubilant.com.au) — a boutique, relationship-led NDIS disability support provider in Canberra and the ACT.

Built with **Next.js 15** (App Router), **React 19**, and **Tailwind CSS v4**.

---

## Docs (read before editing copy or layout)

| File | Purpose |
|------|---------|
| [`ACT_JUBILANT_BRAND_BIBLE.md`](ACT_JUBILANT_BRAND_BIBLE.md) | Locked copy, page architecture, homepage/programs guides |
| [`ACT_JUBILANT_MASTER_CONTEXT.md`](ACT_JUBILANT_MASTER_CONTEXT.md) | Strategic positioning and narrative |
| [`WORKFLOW.md`](WORKFLOW.md) | Cursor + Codex workflow, site map, layout system, branches |
| [`CHANGES.md`](CHANGES.md) | Human-readable change log (update when owner asks) |
| [`VIDEO_SETUP_GUIDE.md`](VIDEO_SETUP_GUIDE.md) | Video assets and `SelfHostedVideo` usage |

---

## Development

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
```

---

## Branches (June 2026)

| Branch | Status |
|--------|--------|
| `main` | **Live** — Settled Ground theme, 10-section homepage |
| `homepage-hybrid-refresh` | **Pushed for owner review** — 7-section scannable homepage + layout shells; Codex layout/source QA passed 2026-06-16 |

```bash
git checkout homepage-hybrid-refresh
npm run dev
```

Merge to `main` only after owner approves preview.

Current `homepage-hybrid-refresh` QA status:
- `npm run build` passes.
- Checked desktop `1440x900` and mobile `390x844`.
- No horizontal overflow, sub-14px visible text, sub-44px clickable targets, or mismatched grid rows detected.
- Latest source audit confirms the homepage process section is simplified and Programs media cards no longer use text overlays over photos.
- Remaining owner decision: Homepage and Programs are still long on mobile, but that is content strategy rather than a layout bug.

---

## Layout system

Full-width section backgrounds; inner content constrained in `src/app/globals.css`:

| Token | Width | Used for |
|-------|-------|----------|
| `--content-home` | 1160px | Homepage, About, Programs, Reviews, Canberra, header/footer |
| `--content-reading` | 1000px | FAQ, Privacy, Accessibility, forms |
| `--content-prose` | 720px | Long text blocks |

Classes: `.content-shell`, `.content-shell--home`, `.content-shell--reading`, `.content-measure`.

---

## Key paths

```
src/app/page.tsx              Homepage
src/app/layout.tsx            Header, footer, JSON-LD
src/app/globals.css           Theme tokens + layout shells
src/components/ImageCarousel.tsx
src/components/SelfHostedVideo.tsx
public/images/gallery/        Real activity photos
public/videos/                Testimonial + dance class videos
```

---

## Deploy

Pushes to `main` deploy via **Vercel**. Preview URLs are generated per branch.

Contact: admin@actjubilant.com.au · +61 424 488 439
