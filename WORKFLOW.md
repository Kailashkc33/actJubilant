# ACT Jubilant — Cursor + Codex Workflow

Shared workflow for working across **Cursor** and **OpenAI Codex** on this repo.

**Source of truth for copy and page architecture:** `ACT_JUBILANT_BRAND_BIBLE.md`  
**Strategic context:** `ACT_JUBILANT_MASTER_CONTEXT.md`  
**Shared change log (both tools):** `CHANGES.md` — update **only when the owner asks**

---

## One rule above all

**Git is the handoff layer.**  
If a change is not committed and pushed, the other tool (and production) cannot see it.

Local-only edits are how fixes get lost.

---

## Default loop (every task)

```
1. Decide scope (which page, which section)
2. Check WORKFLOW.md + Brand Bible for locked copy
3. Make changes locally
4. Review in browser (npm run dev)
5. Commit with a clear message
6. Push to origin/main
7. Confirm Vercel deploy
```

---

## Role split

| Use **Cursor** for | Use **Codex** for |
|--------------------|-------------------|
| Page architecture and copy lock | Quick fixes (CSS, layout, bugs) |
| Multi-section rewrites (homepage, programs, about) | Anchor scroll, spacing, mobile tweaks |
| Brand bible updates | Running tests, lint, build checks |
| Cross-file refactors | Isolated experiments in a worktree |
| "Should we?" strategy decisions | "Fix this specific thing" execution |

**Cursor** = thinking + structure + locked copy.  
**Codex** = fast execution + polish + validation.

---

## Site map (do not mix page jobs)

| Page | Route | Question it answers | Status |
|------|-------|---------------------|--------|
| Homepage | `/` | Why ACT Jubilant? | **Live** |
| Programs | `/programs` | What does support look like in real life? | **Live** |
| Services / Canberra | `/services/canberra` | What NDIS supports do you provide? | **Live** (footer + depth links only; not main nav) |
| About | `/about` | Who is behind ACT Jubilant? | **Live** |
| Referral | `/referral` | How do coordinators refer? | **Live** |
| Reviews | `/reviews` | Stories and testimonials | **Live** (exemplar quotes until real reviews) |
| Consultation | `/consultation` | Book a consultation | **Live** (form) |
| FAQ | `/faq` | Common questions | **Live** |

**Architecture rules:**
- Do not put NDIS category grids on Homepage or Programs.
- Do not put persuasion copy on Services/Canberra.
- Programs ≠ Services: Programs = what support looks like; Services = NDIS categories and logistics.

---

## Change log (`CHANGES.md`)

When the owner says **"log the changes"** or **"update CHANGES.md"**:

1. Append one entry using the template in `CHANGES.md`
2. Tag the tool (`Cursor` or `Codex`)
3. List files touched and deploy status (`local only` / `committed` / `pushed` / `live`)
4. Do **not** update this file automatically after every edit

The other tool should read `CHANGES.md` at session start if the owner mentions parallel work.

---

## Handoff between tools

When switching from Cursor → Codex (or back), start the new session with:

```
Repo: act-jubilant (main)
Task: [one sentence]
Files: [paths if known]
Recent changes: see CHANGES.md
Brand rule: [quote from Brand Bible if relevant]
Do not: [explicit exclusions]
```

**Example (Codex):**
```
Repo: act-jubilant (main)
Task: Fix mobile spacing on Programs Section 5 photo cards
Files: src/app/programs/page.tsx
Brand rule: Photo cards primary, text tiles secondary. No em dashes.
Do not: Change locked copy. Do not add CTAs mid-page.
```

**Example (Cursor):**
```
Task: Draft About page architecture per Brand Bible
Read: ACT_JUBILANT_BRAND_BIBLE.md, homepage + programs guides
Do not: Implement yet. Architecture + copy direction only.
```

---

## Codex app settings (recommended)

- **Mode:** Local (same folder) for small fixes; **Worktree** for experiments
- **Same repo path:** `/Users/kailashkc/Developer/act-jubilant`
- **After Codex finishes:** Review diff → commit → push (do not leave local-only)
- **Before starting Codex:** `git pull` so you have latest Cursor changes

---

## Cursor settings (recommended)

- Open repo at project root (not parent folder)
- Keep `ACT_JUBILANT_BRAND_BIBLE.md` open or pinned for copy tasks
- After Cursor finishes: same commit → push loop

---

## Copy rules (both tools)

- No em dashes in visitor-facing copy (use commas, colons, periods, or pipes in titles)
- No 24/7, comprehensive, caring, flexible as differentiators
- Engagement before tasks (personal care never leads)
- Locked copy in Brand Bible overrides casual rewrites

---

## Commit message style

```
Fix anchor scroll offset and remove em dashes from site copy.

Adds header scroll padding so anchored sections clear the sticky nav.
```

Short subject line. Body explains why, not just what.

---

## Remaining backlog (June 2026)

See `CHANGES.md` work division table for full list. Current priorities:

| # | Task | Owner | Status |
|---|------|-------|--------|
| 5 | Media audit + compression | Owner + Cursor | In progress — compress in-use assets; owner to approve removing unused legacy files |
| 13 | Hostinger domain transfer → SMTP forms | Owner | Blocked on DNS/email stability |
| 14 | Accessibility standards pass (WCAG 2.2 AA) | Owner + Cursor + Codex | Backlog |
| 15 | GA + Search Console placeholders in `layout.tsx` | Owner | `GA_MEASUREMENT_ID`, `your-google-verification-code` |

**Done (pushed):** Homepage · Programs · About · Services/Canberra · Referral · Reviews · footer + JSON-LD · media compression · mobile UX fixes

---

## Media performance notes

**In use on site (keep):** Owner gallery photos (`art-workshop`, `birthday-celebration`, `community-cafe-outing`, `wheelchair-outdoor-outing`, `restaurant-group-meal`, `participant-home-flowers`), team photos (`Nilima.jpeg`, `DSC_MANISHW-42.jpg`, `event-group-photo-dec-2025.jpg`), `testimonial2.mp4`, `community-dance-class-event-sep-2025-portrait.mp4`, `thumbnail.jpg`, dance class posters.

**Removed (June 2026):** All `pexels-*` stock images (10 files across gallery, team, services, facilities).

**Likely unused legacy (owner confirm before delete):**
- `public/videos/community-dance-class-event-sep-2025.mp4` (~31 MB; portrait version used instead)
- `public/videos/community-dance-class-event-sep-2025-web.mp4` (~2.6 MB)
- `public/videos/testimonial1.mp4` (~20 MB)
- Duplicate testimonial thumbnails: `testimonialtn.png`, `video-thumbnail.jpg`

Target max width for gallery JPEGs: **1920px** (sufficient for retina at site layout widths).

---

## Parallel work safety

| Safe in parallel | Not safe in parallel |
|------------------|----------------------|
| Codex: CSS fix while Cursor: copy draft in chat | Both editing `page.tsx` at once |
| Codex: worktree experiment | Both pushing to main without pulling |
| Cursor: brand bible while Codex: `globals.css` | Two agents rewriting the same page |

**One page, one agent at a time** unless using Codex worktrees.

---

## Quick commands

```bash
git pull origin main
npm run dev
npm run build
git status
git add <files>
git commit -m "message"
git push origin main
```

If dev server breaks with `.next` errors:
```bash
rm -rf .next && npm run dev
```

Compress a large JPEG in place (max width 1920):
```bash
ffmpeg -y -i "public/images/gallery/FILE.jpg" -vf "scale='min(1920,iw)':-2" -q:v 4 -map_metadata -1 "/tmp/out.jpg" && mv "/tmp/out.jpg" "public/images/gallery/FILE.jpg"
```
