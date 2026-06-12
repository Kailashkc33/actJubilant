# CHANGES.md

Shared change log for **Cursor** and **Codex** on this repo.

Both tools read and write the same local file. Production and the other tool only see updates after **commit + push**.

---

## Rules

1. **Update only when the owner asks** — e.g. "log the changes", "update CHANGES.md". Do not append after every edit automatically.
2. **One entry per requested log** — summarise the batch of work just completed or reviewed.
3. **Say which tool** — `Cursor` or `Codex`.
4. **Say deploy status** — `local only` · `committed` · `pushed` · `live`.
5. **Do not log drive-by edits** — only intentional task work the owner cares about.
6. **Do not duplicate git** — this is a human-readable handoff summary, not a replacement for `git log`.

---

## Entry template

```markdown
### YYYY-MM-DD — [Cursor | Codex] — short title

**Prompt:** What the owner asked for  
**Status:** local only | committed | pushed | live  
**Files:** `path/to/file.tsx`, …

**Summary:**
- Bullet of what changed and why

**Review notes:** (optional) What to check in browser  
**Next:** (optional) Follow-up for the other tool or owner
```

---

## Log

### 2026-06-12 — Cursor — About, Services, mobile UX, and site polish

**Prompt:** Complete Cursor batch and push — About page, Services/Canberra, mobile video, a11y toolbar, David clarification, leadership photos  
**Status:** pushed  
**Files:** `src/app/about/page.tsx`, `src/app/services/canberra/page.tsx`, `src/app/page.tsx`, `src/app/layout.tsx`, `src/components/SelfHostedVideo.tsx`, `src/components/AccessibilityToolbar.tsx`, `src/components/HashScroll.tsx`, `src/components/MobileNav.tsx`, `public/images/team/*`, `ACT_JUBILANT_BRAND_BIBLE.md`, `ACT_JUBILANT_MASTER_CONTEXT.md`, `CHANGES.md`

**Summary:**
- **About page:** 7 sections per Brand Bible — who we are, why we exist, founder-led + leadership photos (Nilima MD, Manish Founder & CSM), values, who we're best for (no David fiction), team group photo, final CTA; nav/footer About link
- **David clarification:** Internal avatar only; public fit criteria on About §5; homepage depth link updated
- **Services/Canberra:** Full Brand Bible rewrite (5 sections)
- **Homepage testimonial video:** Copy above frame; larger mobile play button; `SelfHostedVideo` caption above thumbnail when not `minimalChrome`
- **Accessibility toolbar:** Collapsed by default on mobile
- **HashScroll:** Anchor scroll fix for cross-page hash links (e.g. `/about#who-were-best-for`)

**Review notes:** `/about`, `/services/canberra`, homepage §6–7, mobile toolbar  
**Next:** Media/performance pass (#5), Referral content, Reviews placeholders, JSON-LD

---

### 2026-06-12 — Codex — Mobile fixes (audit items #1–3)

**Prompt:** Fix mobile menu overlay, carousel touch targets, and dyslexia debug outline  
**Status:** pushed  
**Files:** `src/components/MobileNav.tsx`, `src/components/ImageCarousel.tsx`, `src/app/globals.css`

**Summary:**
- **Mobile menu:** Drawer changed from 86% right panel to full-screen overlay so underlying page buttons are no longer visible or interactable
- **Carousel dots:** Touch targets enlarged to 44×44px (`h-11 w-11`); visual dot remains small inside button
- **Dyslexia mode:** Removed temporary debug dashed outline from `globals.css`

**Review notes:** On phone: open Menu (full screen, not side drawer), tap carousel dots on homepage hero, toggle Dyslexia-friendly mode (no blue outline)  
**Next:** Owner review → commit/push. Cursor: accessibility toolbar UX (#4), then media review (#5)

---

### 2026-06-12 — Codex — Mobile viewport audit

**Prompt:** Audit the website on mobile viewport and recommend what Cursor should handle  
**Status:** local only  
**Files:** `CHANGES.md`

**Summary:**
- Audited `/`, `/programs`, `/referral`, `/consultation`, `/faq`, `/accessibility`, `/reviews`, and `/services/canberra` at `390 × 844`
- Confirmed no horizontal overflow across the checked pages
- Confirmed mobile headings are not hidden by the sticky header
- Confirmed Large Text mode does not create horizontal overflow
- Found mobile menu overlay issue: underlying page buttons remain visible/interactable when menu is open
- Found hero carousel dot controls are too small for mobile touch targets
- Found dyslexia mode still has a temporary debug outline in `src/app/globals.css`
- Noted accessibility toolbar takes significant first-viewport space on mobile

**Review notes:** Codex can fix the mobile menu overlay, carousel touch targets, and dyslexia debug outline as scoped code fixes.
**Next:** Cursor should decide the mobile accessibility toolbar experience before implementation.

#### Work division (Cursor review, 2026-06-12)

| # | Issue | Owner | Tool | Why |
|---|-------|-------|------|-----|
| 1 | Mobile menu: page buttons still visible/interactable behind overlay | Codex | Codex | **Done** — full-screen menu overlay |
| 2 | Hero carousel dots too small for touch (`w-2 h-2`) | Codex | Codex | **Done** — 44px touch targets |
| 3 | Dyslexia mode debug outline still in CSS | Codex | Codex | **Done** — outline removed |
| 4 | Accessibility toolbar uses too much mobile viewport | Owner + Cursor | Cursor | **Done** — collapsed by default on mobile |
| 5 | Owner media review (new photos/videos) | Owner + Cursor | Cursor | Audit assets, compress videos/posters for performance |
| 6 | About page architecture + build | Cursor | Cursor | **Done** — pushed |
| 7 | Services/Canberra copy lock + build | Cursor | Cursor | **Done** — pushed |
| 8 | Commit `WORKFLOW.md` + `CHANGES.md` | Owner | Either | **Done** (pushed `bddd29a`) |

**Confirmed good (no action):** No horizontal overflow · headings clear sticky header · Large Text mode OK

**Suggested order:**
1. ~~Codex → fixes #1–3~~ ✓
2. ~~Cursor → About (#6) + Services (#7) + mobile UX (#4)~~ ✓ pushed
3. Owner → share new media files → media audit + compression (#5)
4. Cursor → Referral content, Reviews placeholders, JSON-LD

### 2026-06-11 — Cursor — Homepage, Programs, docs, and polish

**Prompt:** Full site rewrite per Brand Bible; doc sync; em dash cleanup; push to GitHub  
**Status:** pushed (`399f30b` on `main`)  
**Files:** `src/app/page.tsx`, `src/app/programs/page.tsx`, `src/app/layout.tsx`, `src/app/globals.css`, `src/app/actions.ts`, `src/app/reviews/page.tsx`, `ACT_JUBILANT_BRAND_BIBLE.md`, `ACT_JUBILANT_MASTER_CONTEXT.md`, `WORKFLOW.md`

**Summary:**
- Homepage rewritten (10 sections, locked copy)
- Programs page rewritten (9 sections, visual hierarchy pass)
- Brand Bible: homepage + programs guides locked; Services/Canberra architecture added
- Em dashes removed from visitor-facing copy
- Anchor scroll offset added (`--header-offset`) so `/#how-support-works` clears sticky header
- Strategy docs committed; site code pushed

**Review notes:** Check `/`, `/programs`, anchor link from homepage, mobile layout (Codex auditing)  
**Next:** Media review from owner → About page architecture

---

### 2026-06-11 — Cursor — Workflow setup

**Prompt:** Create shared Cursor + Codex workflow  
**Status:** pushed  
**Files:** `WORKFLOW.md`, `CHANGES.md`

**Summary:**
- Added `WORKFLOW.md` (roles, git loop, handoff templates)
- Added `CHANGES.md` (this file)

**Next:** Owner commits when ready; Codex logs mobile audit here when prompted
