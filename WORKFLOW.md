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
| Homepage | `/` | Why ACT Jubilant? | **Preview** on `homepage-hybrid-refresh` · Codex layout QA passed · live `main` still has 10-section homepage |
| Programs | `/programs` | What does support look like in real life? | **Live** |
| Services / Canberra | `/services/canberra` | What NDIS supports do you provide? | **Live** (footer + depth links only; not main nav) |
| About | `/about` | Who is behind ACT Jubilant? | **Live** |
| Referral | `/referral` | How do coordinators refer? | **Live** |
| Reviews | `/reviews` | Stories and testimonials | **Live** (exemplar quotes until real reviews) |
| Consultation | `/consultation` | Book a consultation | **Live** (form) |
| FAQ | `/faq` | Common questions | **Live** |
| Accessibility | `/accessibility` | Accessibility standards and toolbar | **Live** |
| Feedback | `/feedback` | Feedback and complaints form | **Live** (functional; older page layout) |
| Privacy | `/privacy` | Privacy policy | **Live** (functional; older page layout) |

**Architecture rules:**
- Do not put NDIS category grids on Homepage or Programs.
- Do not put persuasion copy on Services/Canberra.
- Programs ≠ Services: Programs = what support looks like; Services = NDIS categories and logistics.

---

## Layout system (June 2026)

**Visual direction (preview branch):** **Canberra Morning** — dawn cream grounds, eucalyptus primary (#2D5A4E), terracotta accent (#C46842), ink footer (#243032). Alternating colour bands replace stacked bordered cards.

**Pattern:** Full-width section backgrounds; inner content constrained. Do not cap the entire page in `main` — bands go edge-to-edge; shells hold readable width.

| Token / class | Max width / use |
|---------------|-----------------|
| `--content-home` / `.content-shell--home` | 1160px — Homepage grids, About, Programs, Reviews, Canberra, header, footer |
| `--content-reading` / `.content-shell--reading` | 1000px — FAQ, Privacy, Accessibility, Consultation, Referral, Feedback |
| `--content-prose` / `.content-measure` | 720px — Long text blocks and intros |
| `.site-band` + `.site-section` | Full-width section rhythm; variants `--dawn`, `--eucalyptus`, `--stone`, `--sky`, `--surface`, `--cream` |
| `.media-card` / `.media-figure` | Image-first blocks with caption below (no text overlay on photos) |
| `.cta-panel` | End-of-page conversion band |

**Component classes:** `.btn-primary`, `.btn-secondary`, `.btn-ghost`, `.card`, `.section-kicker`, `.text-link`, `.check-list`, `.step-list`, `.form-control`, `.form-success`

**Do not:** Put text overlays on participant photos. Do not revert to sage/beige-only or healthcare-blue primary without owner sign-off.

**Homepage:** Each `.home-band` section is full width; children wrapped in `.content-shell.content-shell--home`.

**Reading pages:** Use `.site-band` + `.site-section` bands; inner `.content-shell--reading`; apply `.content-measure` to intro copy.

Defined in `src/app/globals.css`. Header/footer/toolbar aligned to `--content-home`.

### Layout QA baseline (2026-06-16)

Codex audited the current `homepage-hybrid-refresh` branch at desktop `1440x900` and mobile `390x844`.

Routes checked: `/`, `/programs`, `/about`, `/services/canberra`, `/referral`, `/consultation`, `/reviews`, `/accessibility`, `/faq`, `/feedback`, `/privacy`.

Current result:
- No horizontal overflow.
- No visible text under 14px.
- No clickable targets under 44px.
- No mismatched/uneven grid rows detected.
- `npm run build` passes.

Latest owner-review cleanup:
- Homepage "How it works" is now a true 3-step process only: Meet → Match → Build routine.
- Programs "Built around interests" uses four equal image cards with captions below images, not text overlays.
- Programs duplicate one-on-one media row was removed.

Remaining note: Homepage and Programs may still feel long on mobile. Treat this as a content/strategy decision, not a spacing/font/box bug.

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
| 16 | Homepage hybrid refresh — merge `homepage-hybrid-refresh` → `main` | Owner + Cursor | **Pushed for owner review** — Codex layout/source QA passed; owner content-length review remains |
| 13 | Hostinger domain transfer → SMTP forms | Owner | Blocked on DNS/email stability |
| 14 | Accessibility standards pass (WCAG 2.2 AA) | Owner + Cursor + Codex | **Partial** — standards + video keyboard + form/focus pushed |
| 15 | GA + Search Console placeholders in `layout.tsx` | Owner | `GA_MEASUREMENT_ID`, `your-google-verification-code` |

**Done (pushed to `main`):** Phase 1 UI (Settled Ground) · Programs · About · Services/Canberra · Referral · Reviews · footer + JSON-LD · media cleanup · accessibility standards page · video keyboard fixes · mobile UX fixes · Consultation/Reviews/FAQ polish · stock images on inner pages

**Suggested order:**
1. **Owner review** homepage hybrid on `homepage-hybrid-refresh` → decide whether to reduce content further or merge to `main` (#16)
2. Owner: Hostinger transfer (#13) → SMTP forms; GA + Search Console IDs (#15)
3. Optional: reskin `/feedback` and `/privacy` to match Settled Ground (functional, older layout)

---

## Media performance notes

**In use on site (keep):** Owner gallery photos (`art-workshop`, `birthday-celebration`, `community-cafe-outing`, `wheelchair-outdoor-outing`, `restaurant-group-meal`, `participant-home-flowers`), team photos (`Nilima.jpeg`, `DSC_MANISHW-42.jpg`, `event-group-photo-dec-2025.png`), `testimonial2.mp4`, `community-dance-class-event-sep-2025-portrait.mp4`, `thumbnail.jpg`, dance class posters.

**Removed (June 2026):** All `pexels-*` stock images (10 files); unused videos `testimonial1.mp4`, `community-dance-class-event-sep-2025.mp4`, `community-dance-class-event-sep-2025-web.mp4` (~54 MB); duplicate testimonial thumbnails `testimonialtn.png`, `video-thumbnail.jpg` (~5 MB). In-use gallery JPEGs compressed to max 1920px width.

**Videos in use:** `testimonial2.mp4`, `community-dance-class-event-sep-2025-portrait.mp4`

**Testimonial poster in use:** `thumbnail.jpg` only

Target max width for gallery JPEGs: **1920px** (sufficient for retina at site layout widths).

---

## UI redesign (worktree + branches)

**Live site:** `main` at [actjubilant.com.au](https://actjubilant.com.au) — Settled Ground theme, 10-section homepage.

**In review (not on `main`):** branch `homepage-hybrid-refresh` — scannable 7-section homepage + layout shells; Codex layout QA passed on 2026-06-16 (see `CHANGES.md`).

| Folder | Branch | Role |
|--------|--------|------|
| `/Users/kailashkc/Developer/act-jubilant` | `main` | Production; bugfixes unless merging a feature branch |
| `/Users/kailashkc/Developer/act-jubilant` | `homepage-hybrid-refresh` | Homepage density + layout system (current work) |
| `/Users/kailashkc/Developer/act-jubilant-ui-redesign` | `ui-redesign` | Optional; merged to `main` June 2026 — can delete worktree when no longer needed |

**Rollback tag:** `ui-baseline-2026-06-12` (snapshot of `main` before first redesign work)

**Branch workflow:**

```bash
# Preview hybrid homepage locally
cd /Users/kailashkc/Developer/act-jubilant
git checkout homepage-hybrid-refresh
npm run dev

# After owner approval — merge to production
git checkout main && git pull
git merge homepage-hybrid-refresh
git push origin main
```

**Rules:**
- Locked Brand Bible claims stay unless owner approves wording changes
- No merge to `main` until owner signs off on preview
- Full-width bands + content shells apply site-wide once hybrid branch merges

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
