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

### 2026-06-17 — Cursor — Golden Sand theme, site-wide refresh, Programs IA redesign

**Prompt:** Owner wanted stronger modern/premium direction (Wattle-inspired, not copied); UI audit of Programs page; implement all recommended fixes; commit local work
**Status:** committed
**Build:** `npm run build` passes

**Chosen direction:** **Golden Sand** — sand canvas, deep green ink, gold CTAs. Fonts: Sora (display), Inter (body), IBM Plex Mono (labels). Wattle-inspired palette adapted for ACT Jubilant.

**Palette / tokens (summary):**
- Canvas: `--sand` #F7F1E6, `--card` #FFFDF8, bands `--bg-band-dawn/cream/eucalyptus/sky`
- Primary: `--green` #243B2C, gold CTAs `--gold` #CC9A3E
- Text: `--ink` #211E18, `--text-muted` via `--ink-soft`

**Files:**
- `src/app/globals.css` — Golden Sand tokens, distinct section bands, media/jump-nav/referrer patterns
- `src/app/layout.tsx` — Sora/Inter/IBM Plex Mono font stack
- `src/app/page.tsx` — trust strip, hybrid 7-section homepage, dark referrer panel
- `src/app/programs/page.tsx` — 5-section IA (was 9): hero split + jump nav, timeline, small groups, unified interests, fit + dark CTA
- All inner pages: `about`, `referral`, `consultation`, `reviews`, `services/canberra`, `accessibility`, `faq`, `feedback`, `privacy`
- `src/components/ConsultationForm.tsx` (new), `ImageCarousel`, `AccessibilityToolbar`, `MobileNav`, `SelfHostedVideo`
- `src/app/referral/ReferralForm.tsx`, `src/app/reviews/ReviewForm.tsx`
- `CHANGES.md`, `WORKFLOW.md`

**Summary:**
- Site-wide Golden Sand refresh: shadow-over-borders, caption-below photos, shared `.site-section` / `.media-card` rhythm.
- Homepage: lean hybrid IA, trust strip, proof grid, how-it-works timeline, dark green referrer close.
- Programs: cut duplicate pillars/homepage content; 3-step timeline; unified 9-card interest grid; portrait dance video 3:4 contain; NDIS callout inline; homepage-style referrer CTA.
- Consultation form extracted to shared component. Codex `.form-choice` and Programs grid polish retained.

**Owner review notes:**
- Preview homepage + Programs on mobile and desktop; check band tint alternation and jump nav anchors.
- Programs dance video should show full frame (contain), not cropped portrait.
- High-contrast mode via accessibility toolbar still supported.

**Next:** Owner approval before merge to `main`; push branch when ready for remote preview.

---

### 2026-06-16 — Codex — Owner-review homepage and Programs audit

**Prompt:** Audit the latest homepage/Programs changes, update docs, and push the branch for owner review
**Status:** committed · pushed to `origin/homepage-hybrid-refresh` · not merged to `main`, not live
**Build:** `npm run build` passes. Existing ESLint flat-config warning remains: `plugins` is in eslintrc array format, but build completes.

**Files:**
- `src/app/page.tsx`
- `src/app/programs/page.tsx`
- `CHANGES.md`, `WORKFLOW.md`, `README.md`, `ACT_JUBILANT_BRAND_BIBLE.md`, `ACT_JUBILANT_MASTER_CONTEXT.md`, `VIDEO_SETUP_GUIDE.md`

**Summary:**
- Homepage "How it works" now reads as a simple 3-step process: Meet → Match → Build routine.
- Removed the confusing second row of proof cards from the homepage process section so it no longer looks like unrelated ideas are stacked into one workflow.
- Programs "Built around interests" now uses four clean media cards with captions below the images, so text no longer covers the photos.
- Added Transport & community access into that Programs interest-card set.
- Removed the duplicate one-on-one media row from Programs after owner feedback.
- Corrected the responsive image `sizes` hint for the new 4-column Programs card grid.

**Audit result:**
- Source audit clean: no remaining `PROOF_GROUPS` or `ONE_ON_ONE_MEDIA` references.
- `npm run build` passes after the final Programs image-sizing cleanup.
- Browser automation could not directly verify `localhost:3003` because that URL is currently blocked by the browser automation policy in this session; owner/Cursor should still do a manual visual pass on the running preview.

**Owner review notes:**
- Check homepage section flow: Hero → proof points → support examples → How it works → fit guide.
- Check Programs: interest cards should feel organised, with no text overlay covering photos.
- Main open question remains content density: the site is technically cleaner, but Homepage/Programs may still feel long on mobile if the owner wants a lighter experience.

**Next:**
- Send `homepage-hybrid-refresh` preview to owner.
- If approved, merge `homepage-hybrid-refresh` into `main`.
- If owner still feels it is too much, reduce content priority on Homepage/Programs before merge.

---

### 2026-06-16 — Codex — Layout QA polish + final desktop/mobile audit

**Prompt:** Implement audit fixes for gaps, font sizes, mismatched boxes, and touch targets; rerun page-by-page audit
**Status:** committed · pushed · branch `homepage-hybrid-refresh` (not merged to `main`, not live)
**Build:** `npm run build` passes. Existing ESLint flat-config warning remains: `plugins` is in eslintrc array format, but build completes.

**Files:**
- `src/app/globals.css`
- `src/components/AccessibilityToolbar.tsx`
- `src/app/programs/page.tsx`
- `src/app/reviews/page.tsx`
- `src/app/referral/ReferralForm.tsx`
- `src/app/feedback/page.tsx`
- `src/app/reviews/ReviewForm.tsx`
- `CHANGES.md`, `WORKFLOW.md`, `README.md`, `ACT_JUBILANT_BRAND_BIBLE.md`, `ACT_JUBILANT_MASTER_CONTEXT.md`, `VIDEO_SETUP_GUIDE.md`

**Summary:**
- Accessibility toolbar buttons now meet the 44px touch target on desktop and mobile.
- Mobile "Show tools" control now meets the 44px touch target.
- Visible checkbox/radio controls on Referral, Feedback, and Reviews are larger and easier to see (`.form-choice`), while hidden star-rating inputs remain screen-reader-only as intended.
- Programs "Small group programs" media grid is balanced as equal cards; video now uses the same visual frame as the image cards in that grid.
- Programs "Built around interests" text outcomes are larger and styled as readable chips/cards instead of tiny footnotes.
- Reviews outcome/theme labels increased from tiny uppercase text to readable small labels.
- Homepage carousel captions, identity strip, chips, and section kickers were bumped up for readability.

**Audit result:**
- Checked desktop `1440x900` and mobile `390x844`.
- Routes checked: `/`, `/programs`, `/about`, `/services/canberra`, `/referral`, `/consultation`, `/reviews`, `/accessibility`, `/faq`, `/feedback`, `/privacy`.
- No horizontal overflow found.
- No visible text under 14px after fixes.
- No clickable targets under 44px after fixes.
- No mismatched/uneven grid rows detected.

**Review notes:**
- Homepage and Programs are still long on mobile, but this is now a content/strategy issue rather than a spacing, font, or box bug.
- Owner should review whether further content reduction is needed before merging `homepage-hybrid-refresh` to `main`.

**Next:**
- Owner/Cursor: decide whether to reduce Homepage/Programs content further or merge current `homepage-hybrid-refresh`.

---

### 2026-06-16 — Cursor — Homepage hybrid refresh + site layout shells

**Prompt:** Owner feedback: homepage too text-heavy; hybrid pass (same Settled Ground theme, ~35–40% less repetition); restore videos; depth links at bottom; layout system with full-width bands + constrained content; update all MDs
**Status:** committed · pushed · branch `homepage-hybrid-refresh` (not merged to `main`, not live)
**Build:** `npm run build` passes

**Files:**
- `src/app/page.tsx` — 7-section homepage IA + §8 depth links
- `src/app/globals.css` — content shells, homepage utilities, pillar overlay contrast, pull-quote spacing
- `src/app/layout.tsx` — full-width `main`; header/footer use `content-shell--home`
- `src/components/ImageCarousel.tsx` — pause on hover/focus; `prefers-reduced-motion`; `aria-live` slide announcements
- `src/components/AccessibilityToolbar.tsx` — aligned to content shell
- All inner `page.tsx` routes — reading vs home shell assignment
- `ACT_JUBILANT_BRAND_BIBLE.md`, `ACT_JUBILANT_MASTER_CONTEXT.md`, `WORKFLOW.md`, `README.md`, `VIDEO_SETUP_GUIDE.md`, `CHANGES.md`

**Homepage IA (hybrid — replaces live 10-section scroll on `main`):**

| # | Section | Notes |
|---|---------|--------|
| 1 | Hero | Locked H1 + subhead; 3 identity chips; CTAs + phone; carousel |
| 2 | Three proof points | Familiar workers · Interest-led days · Small groups; pull-quote intro |
| 3 | What support looks like | Image-led cards; dance-class video retained |
| 4 | How it works | Meet → Match → Build routine |
| 5 | Who we're best for | Full locked checklist; testimonial video retained |
| 6 | Referrer CTA + service area chips | No duplicate final CTA |
| 7 | Explore in more detail | Depth links only (About, Programs, Reviews, Canberra) |
| — | Footer | Unchanged in `layout.tsx` |

**Removed from homepage scroll:** standalone Problem, Approach, 7-row proof grid, duplicate final CTA, inline depth links mid-page. **Depth preserved** on `/about`, `/programs`, `/reviews`, `/services/canberra`.

**Layout system (site-wide):**
- Full-width section backgrounds; inner content constrained via `.content-shell`
- **Home / grids:** `1160px` (`--content-home`) — homepage, About, Programs, Reviews, Canberra, header/footer
- **Reading / forms:** `1000px` (`--content-reading`) — FAQ, Privacy, Accessibility, Consultation, Referral, Feedback
- **Prose measure:** `720px` (`--content-prose`) — intro paragraphs and long text blocks

**A11y / polish:**
- Pillar card overlay: explicit white text + stronger scrim (fixes dark `.h3` on images)
- Pull-quote spacing above proof cards (CSS specificity fix)
- Carousel autoplay pauses on interaction; disabled when `prefers-reduced-motion`

**Review notes:** Compare `homepage-hybrid-refresh` preview vs live `main`; owner sign-off before merge
**Next:** Push branch → owner review → merge to `main` when approved

---

### 2026-06-13 — Cursor — ui-redesign merged to main; stock images; Phase 3 pages; phone fix

**Prompt:** Stock images on inner pages; Codex pre-merge fixes; merge `ui-redesign` → `main`; Settled Ground on Consultation/Reviews/FAQ; consultation form above fold; correct owner phone number; end-of-day handoff
**Status:** committed · pushed · **live** (`main` @ `cab9cff`)
**Build:** `npm run build` passes · Vercel production deploy succeeded after push

**Commits on `main` (since `ffc931d`):**
- `73376ff`–`8687cd9` — Phase 1 homepage UI (Settled Ground), inner-page stock images, team group photo `.png` rename, Brand Bible path fixes
- `cab9cff` — Consultation/Reviews/FAQ polish, Programs one-on-one photo grid, phone number site-wide

**Stock images (`public/images/stock/`):**
- Optimized assets for About, Programs, Referral, Accessibility, Canberra services
- Owner community-run photo on Programs opener (`programs-community-run.jpg`)
- Illustrative alt text on stock; “ACT Jubilant …” on real gallery/team photos
- Raw `stock images/` upload folder removed before commit; do not commit screenshots or `.DS_Store`

**Codex pre-merge fixes (included in `8687cd9`):**
- `event-group-photo-dec-2025.jpg` → `.png` (was PNG data); references updated in Brand Bible + WORKFLOW
- Programs/About/Referral/Accessibility/Canberra page image wiring

**Phase 3 content pages (`cab9cff`):**
- `consultation/page.tsx` — Settled Ground sections; **form directly under short intro** (no hero image); depth links below form
- `reviews/page.tsx` — `home-pill` outcomes, `card--warm` quotes, video in muted card, final CTA
- `faq/page.tsx` — 2-col FAQ grid, depth links, final CTA; metadata on page

**UX fixes (`cab9cff`):**
- Programs one-on-one photos: equal 3-column `aspect-[4/3]` grid (was awkward 6+3+3 layout)
- Phone **+61 424 488 439** (`tel:+61424488439`) — was +61 434 740 745; updated in layout, footer, mobile nav, all CTAs, `actions.ts` fallbacks, Brand Bible

**Review notes (owner, live site):**
- Hard-refresh and tap **Call** on mobile — confirm new number dials correctly
- `/consultation` — form visible without scrolling on phone + desktop
- `/programs` — one-on-one photo row; community-run hero
- `/reviews`, `/faq` — section rhythm matches About/Referral

**Supersedes:** Phase 1 handoff entry below still documents homepage design intent but its **Status** line (“not on `main`”) is **out of date** — that work is now live.

**Next (owner):** See owner todo list in latest session wrap-up · Hostinger transfer (#13) · GA/Search Console IDs (#15) · live form smoke-test when SMTP ready

---

### 2026-06-12 — Cursor — Phase 1 homepage UI redesign batch (handoff for Codex audit)

**Prompt:** Owner approved Phase 1 homepage UI; pause further redesign; log full batch for Codex homepage audit before About/Programs
**Status:** pushed · **worktree branch only** (`ui-redesign` @ `c1b20ba`) — **not on `main`**, not live
**Worktree:** `../act-jubilant-ui-redesign` · baseline tag `ui-baseline-2026-06-12` · commits `73376ff` + `c1b20ba`
**Build:** `npm run build` passes (Next.js 15.5.19, Turbopack)

**Design-system reference used:**
- Owner file: `act_jubilant_design_system.html` (“**Settled Ground**”)
- Applied selectively: stone off-white bg, sage support tones, one deep slate grounded band, warm clay/terracotta as **accent only** (borders, checks, carousel progress)
- **Preserved:** ACT Jubilant teal-blue brand anchor (`#2B6CB0`); no serif headings; no negative letter-spacing; no viewport `clamp()` on headings; no corporate-blue palette; distinct from Amazing Cleaner
- **Not copied:** mockup layout verbatim, fake trust badges, gradient text backgrounds, playful styling

**Files changed (`ffc931d` → `c1b20ba`):**
- `src/app/globals.css` — theme tokens, homepage section utilities, problem insight cards, approach/support-model rows, carousel caption/scrim, compact header, slate footer
- `src/app/page.tsx` — homepage layout, density restructure, section rhythm, copy restructuring (see below)
- `src/app/layout.tsx` — compact sticky header, dark slate footer
- `src/components/ImageCarousel.tsx` — caption panel, contrast scrim, a11y carousel labels
- `src/components/MobileNav.tsx` — subtler icon menu trigger (44px target)
- `ACT_JUBILANT_BRAND_BIBLE.md`, `ACT_JUBILANT_MASTER_CONTEXT.md`, `src/app/referral/page.tsx` — age range 12–65 (owner/Codex update)
- `CHANGES.md` — this entry

**Homepage visual theme:**
- Page bg stone `#F7F5F2`; sage-light hero/CTA bands; white alternating surfaces; one **slate intro strip** for “How support works” (proof rows on white below)
- Softer cards (`0 2px 12px` shadow, subtle borders); teal primary buttons/links; terracotta accent borders only
- Footer: deep slate `#3B4F5C`, light text hierarchy, dedicated footer link styles

**Hero / mobile image-first:**
- Mobile: carousel **above** copy (`order-1` / `order-2`)
- Desktop: copy left, carousel right
- Factual **identity strip** under hero lead (Canberra & ACT; boutique relationship-led; engagement/routine/familiar workers) — from locked positioning, not new claims

**Carousel captions:**
- Bottom-left compact chip panel + lighter bottom scrim (not full-width overlay)
- Stronger contrast for all 5 slides; overlay titles as `<p>` not `<h2>`
- Terracotta progress bar; 44px dot/arrow targets

**“Support alone…” problem section:**
- Three **insight cards** with short lede + native `<details><summary>Read more</summary>` for extra detail (not repeating lede)
- Concepts unchanged: Passive routines · Changing workers · Feeling managed, not seen

**“Our approach” content-density restructure:**
- Pull quote + callout **verbatim**
- Two former paragraphs + closing line → **three compact ✓ rows** (`APPROACH_POINTS`) before callout
- Warm light sage band; terracotta **left border only** on quote/callout (no heavy clay blocks)

**“How support works” row/checklist restructure:**
- Three groups unchanged: Participant experience · Supporting long-term goals · Support that stays personal
- Seven claims as **compact rows** (number + title + one line) — not stacked paragraph cards
- **Mobile:** open divider rows, no outer card box
- **Desktop:** 3-column cells for triple groups; single-item group in one contained panel; larger type/padding inside cells

**Desktop polish (support model only):**
- Group titles `1.25rem`; horizontal row layout inside grid cells; card shadow on desktop cells only — mobile unchanged

**Age range 12–65 (owner-approved, Codex):**
- `ACT_JUBILANT_BRAND_BIBLE.md` (ideal participant + homepage strong-fit mirror)
- `ACT_JUBILANT_MASTER_CONTEXT.md`
- `src/app/page.tsx` (`STRONG_FIT`)
- `src/app/referral/page.tsx` (`STRONG_FIT`)

**Dance video wording correction (`page.tsx` § meaningful support):**
- **Was:** “A community dance class with participants and support workers in ACT Jubilant shirts, staying engaged together.”
- **Now:** “An example of the kind of community group activity we can help arrange or support when it suits a participant's interests and goals.”
- Video asset, title (“Staying engaged together”), and description unchanged

**Explicitly not changed:**
- Nav structure/copy (header compactness only); accessibility toolbar; forms/validation/SMTP; locked hero H1 and core section claims; About, Programs, Referral, Consultation, Reviews page layouts

**Review notes for Codex (full homepage audit):**
- Mobile scan path: hero image-first → problem details → approach rows → slate intro + support checklist → remaining sections
- Keyboard: problem `<details>`, carousel controls, menu trigger, skip link, focus rings
- Contrast: carousel captions on all 5 images; slate intro strip; footer links
- Copy: confirm 12–65 and dance blurb align with Brand Bible; no accidental claim changes in restructured lines
- Compare live `main` vs `ui-redesign` preview — **do not merge** until audit + owner sign-off

**Next:** **Pause redesign work.** Codex full homepage audit on `ui-redesign` preview. **Do not** apply this skin to About or Programs until audit complete and owner approves.

---

### 2026-06-12 — Cursor — WCAG follow-ups + UI redesign worktree setup

**Prompt:** WCAG form `aria-describedby` fixes; footer tap targets; set up worktree + `ui-redesign` branch for phased UI work
**Status:** pushed (`1b51499` on `main`; `ui-redesign` synced)
**Files:** `ReferralForm.tsx`, `ReviewForm.tsx`, `layout.tsx`, plus WCAG batch files; `WORKFLOW.md`

**Summary:**
- **Form a11y:** Referral + Review `Field`/`TextArea` link hint + error in `aria-describedby` (`${id}-hint` `${id}-error`)
- **Footer mobile:** Phone/email `tel:`/`mailto:` use `nav-link` + `min-h-11` touch targets
- **UI redesign plan:** Worktree at `../act-jubilant-ui-redesign` on branch `ui-redesign`; tag `ui-baseline-2026-06-12` on `main`; phased scope documented in `WORKFLOW.md`

**Next:** Phase 1 in worktree only (global theme + homepage); do not merge until owner approves preview

---

### 2026-06-12 — Cursor — WCAG 2.2 AA technical pass (#14)

**Prompt:** Broader WCAG technical pass across forms, focus, metadata, and contact accuracy
**Status:** pushed (`1b51499` on `main`)
**Files:** `src/app/globals.css`, `src/app/consultation/page.tsx`, `src/app/consultation/layout.tsx`, `src/app/feedback/page.tsx`, `src/app/feedback/layout.tsx`, `src/app/faq/layout.tsx`, `src/app/privacy/page.tsx`, `src/app/privacy/layout.tsx`, `src/app/referral/ReferralForm.tsx`, `src/app/reviews/ReviewForm.tsx`, `src/components/MobileNav.tsx`, `src/app/layout.tsx`, `CHANGES.md`

**Summary:**
- **Focus visible (2.4.7):** Added shared `.form-control` class; removed `focus:outline-none` from form inputs so global `:focus-visible` ring applies site-wide
- **Forms (1.3.1, 3.3.1, 4.1.2):** Consultation fields link errors via `aria-describedby`; feedback consent checkbox matches referral/reviews pattern; reviews rating uses `fieldset`/`legend`, radiogroup labels, and visible keyboard focus per star
- **Reduced motion (2.3.3):** `scroll-behavior: auto` when `prefers-reduced-motion: reduce`
- **Page titles (2.4.2):** Added route metadata layouts for `/consultation`, `/feedback`, `/faq`, `/privacy`
- **Contact accuracy:** Corrected outdated phone numbers on `/feedback` and `/privacy`; clickable `tel:`/`mailto:` links
- **Mobile nav:** Removed blue focus-ring overrides; call button uses `btn-primary` + `aria-label`
- **Logo alt (1.1.1):** Shortened to "ACT Jubilant" (header/footer)

**Review notes:** Automated axe run blocked by local ChromeDriver version mismatch; manual/code audit applied. Codex to browser-check forms (Tab focus, error states) on `/referral`, `/consultation`, `/feedback`, `/reviews`
**Next:** Codex audit; owner commit/push when ready; real-user usability testing remains owner-led per `/accessibility`

---

### 2026-06-12 — Codex — Quick cleanups audit (`/referral`)

**Prompt:** Browser-check quick cleanups diff after Cursor batch
**Status:** pushed (`2143032` on `main`)
**Files:** `CHANGES.md`

**Summary:**
- Confirmed updated supports hint lists all 8 Services/Canberra categories correctly
- Hint connected to textarea via `aria-describedby="supports-hint"`
- Supports field remains required
- No horizontal overflow on `/referral`
- No broken images on the page

**Verdict:** Quick cleanups good to commit/push
**Next:** Optional broader WCAG pass (#14); owner Hostinger (#13) and GA IDs (#15)

---

### 2026-06-12 — Cursor — Quick cleanups (media + Referral hint + WORKFLOW sync)

**Prompt:** Quick cleanups (B): delete unused testimonial thumbnails if confirmed unused; align Referral form support hint with Services categories; sync `WORKFLOW.md` with `CHANGES.md`
**Status:** pushed (`2143032` on `main`)
**Files:** `public/images/testimonials/testimonialtn.png`, `public/images/testimonials/video-thumbnail.jpg`, `src/app/referral/ReferralForm.tsx`, `WORKFLOW.md`, `CHANGES.md`

**Summary:**
- **Deleted unused assets:** `testimonialtn.png` and `video-thumbnail.jpg` (not referenced in `src/`; site uses `thumbnail.jpg`)
- **Referral form hint:** Updated "What supports are you looking for?" to list all 8 Services/Canberra categories (added skill development and high intensity personal activities; aligned naming)
- **WORKFLOW.md:** Backlog, done list, suggested order, and media notes synced with current `CHANGES.md` state

**Review notes:** Codex rendered audit passed (see entry above)
**Next:** Optional broader WCAG pass (#14); owner Hostinger (#13) and GA IDs (#15)

---

### 2026-06-12 — Cursor — Video keyboard accessibility audit + fixes

**Prompt:** Verify keyboard operability across every `SelfHostedVideo` instance (technical audit follow-up from accessibility page)
**Status:** pushed (`ac2641d` on `main`)
**Files:** `src/components/SelfHostedVideo.tsx`, `CHANGES.md`

**Summary:**
- **Instances audited (4):** Homepage dance class + testimonial (`src/app/page.tsx`), Programs gallery video (`src/app/programs/page.tsx`), Reviews testimonial (`src/app/reviews/page.tsx`)
- **Issues found:** Poster used `div role="button"` with `tabIndex={-1}` until IntersectionObserver fired (could skip videos in tab order); focus was not moved to `<video>` on play or back to play control on end
- **Fixes in `SelfHostedVideo.tsx`:** Native `<button>` for poster play; always in tab order; visible `focus-visible` ring; focus moves to video controls on play; focus returns to play button when video ends; loading state uses `role="status"`; poster image marked decorative (`alt=""`)

**Review notes:** Manual check: Tab to each video on `/`, `/programs`, `/reviews` → Enter/Space starts play → Tab through native video controls → after video ends, focus returns to play button
**Next:** Broader WCAG technical pass (#14) as needed

---

### 2026-06-12 — Codex — Accessibility page audit (standards framing + mobile)

**Prompt:** Audit `/accessibility` against WCAG/cognitive accessibility framing and mobile layout after Cursor rewrite
**Status:** pushed (`ac2641d` on `main`)
**Files:** `CHANGES.md`

**Summary:**
- Confirmed `/accessibility` loads correctly and meets the intended standards framing
- **WCAG 2.2 Level AA** named as technical baseline; **W3C cognitive accessibility** guidance included
- No overclaiming: no certified, fully compliant, or guaranteed language
- **"Technical compliance is not enough"** section present (David's real-user usability point)
- Barrier-reporting path: phone, email, and `/feedback` link
- Toolbar documentation matches current `AccessibilityToolbar.tsx` implementation
- **Mobile QA at 390 × 844:** no horizontal overflow; cards, footer/contact links, and collapsed toolbar all fit

**Review notes:** Video keyboard follow-up addressed in `ac2641d` (native play button + focus management on all 4 instances).

**Sources checked:** W3C WCAG overview; W3C cognitive accessibility guidance
**Next:** Broader site-wide WCAG technical pass (#14) as needed

---

### 2026-06-12 — Cursor — Accessibility standards page

**Prompt:** Create accessibility standards pass: state WCAG 2.2 AA baseline, W3C cognitive accessibility commitments, and real-user testing framing on `/accessibility`
**Status:** pushed (`ac2641d` on `main`) — Codex standards audit passed (see entry above)
**Files:** `src/app/accessibility/page.tsx`, `CHANGES.md`

**Summary:**
- **Rewrote `/accessibility`:** Replaced generic statement with explicit working standard (WCAG 2.2 Level AA as review baseline; no certification or compliance-complete claims)
- **Cognitive accessibility:** Eight commitments in plain language (clear wording, predictable navigation, reduced overwhelm, spacing, form errors, no time pressure, accessible media, comprehension-friendly content)
- **Real-user testing:** Plain-language section that technical checks alone are not enough; usability with participants, families, and advocates matters
- **Website tools:** Documents existing toolbar features without redesigning `AccessibilityToolbar.tsx`
- **Ongoing review:** Lists audit and fix work in progress, including sessions with people who reflect ACT Jubilant's audience
- **Service accessibility:** Reworded without banned differentiators; corrected contact phone to match site footer
- **Feedback path:** Link to `/feedback` plus phone and email

**Review notes:** Codex audit passed for framing and mobile layout
**Next:** Owner commit/push; technical WCAG pass including video keyboard verification on all video components

---

### 2026-06-12 — Cursor — Reviews, footer, JSON-LD, media pass, and push

**Prompt:** Reviews rewrite; footer + JSON-LD; form a11y; media compression; remove pexels stock images; commit and push
**Status:** pushed (`a51f2e4` on `main`)
**Files:** `src/app/reviews/page.tsx`, `src/app/reviews/ReviewForm.tsx`, `src/app/layout.tsx`, `src/app/page.tsx`, `src/app/referral/ReferralForm.tsx`, `public/images/gallery/*`, `public/images/testimonials/thumbnail.jpg`, `WORKFLOW.md`, `ACT_JUBILANT_BRAND_BIBLE.md`, `CHANGES.md`

**Summary:**
- **Reviews page:** Rebuilt per Brand Bible — opener, video (homepage §7 copy), outcome themes, five outcome-led exemplar quotes; removed nine generic cards; form split to `ReviewForm.tsx`
- **Exemplar attributions:** Jonnathan, Robbin, Priya (participants); Ishika (Advocate); Rajesh (Support Worker); em dashes removed from quote copy
- **Form a11y (Codex finding):** Native `required` on consent checkboxes; `id`/`htmlFor`, `aria-invalid`, `aria-describedby`
- **Footer blurb + JSON-LD:** Boutique positioning in footer; `ORGANIZATION_JSON_LD` with Manish Gupta as founder and all 8 Services categories; footer link to `/services/canberra`
- **Media compression:** `community-cafe-outing` 7.4 MB → 785 KB; `wheelchair-outdoor-outing` 7.4 MB → 542 KB; testimonial poster PNG → 210 KB JPEG (`thumbnail.jpg`)
- **Stock cleanup:** Removed 10 unused `pexels-*` images from gallery, team, services, and facilities folders
- **WORKFLOW.md:** Site map and backlog synced with current implementation state

**Review notes:** `/reviews`, footer, homepage + reviews video poster, referral/reviews form consent validation
**Remaining:** `GA_MEASUREMENT_ID` and `your-google-verification-code` still placeholders
**Next:** Accessibility standards pass (#14); Hostinger transfer (#13) before SMTP forms; GA + Search Console IDs (#15)

---

### 2026-06-12 — Cursor — Referral page + Services scope confirmation

**Prompt:** Complete step one — push Referral page; fix Nilima leadership photo path
**Status:** pushed (`0f493c0` on `main`)
**Files:** `src/app/referral/page.tsx`, `src/app/referral/ReferralForm.tsx`, `src/app/about/page.tsx`, `public/images/team/Nilima.jpeg`, `ACT_JUBILANT_BRAND_BIBLE.md`

**Summary:**
- **Referral page:** Referrer-facing content above form — opener, who we're looking for, why referrers work with us, what happens after you refer, depth links; form split to `ReferralForm.tsx`
- **Context band:** Café outing image + factual "Support in practice" panel (not salesy)
- **Nilima photo:** Asset renamed `dd-2.jpeg` → `Nilima.jpeg`; About leadership card path fixed
- **Services scope (prior commit `a290df7`):** Owner confirmed Support coordination + High intensity daily personal activities; both added to `/services/canberra`

**Review notes:** `/referral`, `/about` (Nilima photo), `/services/canberra` (8 categories)
**Next:** Reviews page rewrite; footer + JSON-LD; footer link to Services (discussed, not yet added)
- Add accessibility standards pass to backlog: verify the site against WCAG 2.2 AA, W3C cognitive accessibility guidance, and real-user usability testing where possible with people who reflect ACT Jubilant's audience.

---

### 2026-06-12 — Codex — Referral audit and remaining Brand Bible backlog

**Prompt:** Review the Referral page against the Brand Bible, then list what build requirements remain
**Status:** pushed (referral content live `0f493c0`)
**Files:** `CHANGES.md`

**Summary:**
- Audited `/referral` against `ACT_JUBILANT_BRAND_BIBLE.md` and confirmed the page now meets the required referral architecture: opener, who we're looking for, why referrers work with us, what happens after you refer, depth links, and referral form.
- Verified the current rendered `/referral` page in browser after the "Support in practice" image/context band was added.
- Confirmed mobile QA at `390 x 844`: no horizontal overflow, image band contained, form stacks correctly, six expected sections present.
- Confirmed the Referral page is ready from a Brand Bible and layout perspective.
- Reviewed remaining Brand Bible/backlog requirements across the repo.

**Review notes:**
- `/referral` is ready; only minor later cleanup is the form support hint wording in `src/app/referral/ReferralForm.tsx`.
- `WORKFLOW.md` is stale in places: it still says Services is architecture-only and About is not started, but both are now implemented.

**Next:**
1. Rewrite `/reviews` so it no longer uses generic/sample testimonials or banned proof language like caring, professional, flexible, and highly recommend.
2. Update JSON-LD/schema in `src/app/layout.tsx` to match the new positioning, About founder context, and Services scope.
3. Run media/performance pass: compress owner photos/videos/posters, including large page assets.
4. After Hostinger domain/email transfer is stable, replace Resend form delivery in `src/app/actions.ts` with Hostinger SMTP env-based sending.
5. Align Referral form support hint with final Services category wording.
6. Replace tracking placeholders: `GA_MEASUREMENT_ID` and `your-google-verification-code`.
7. Clean up stale `WORKFLOW.md` status table.
8. Add a dedicated accessibility compliance pass: WCAG 2.2 AA baseline, W3C cognitive accessibility guidance, and real-user usability testing where possible.

### 2026-06-12 — Owner + Codex — Domain transfer before SMTP forms

**Prompt:** Plan working Referral and Consultation form submissions using Hostinger SMTP, but transfer domain from VentraIP to Hostinger first
**Status:** local only
**Files:** `CHANGES.md`

**Summary:**
- Owner wants `/referral` Submit Referral and `/consultation` Request Consultation buttons to send email notifications.
- Preferred email approach is Hostinger SMTP because Hostinger email is included with hosting.
- Do not implement SMTP form submission yet.
- First step is transferring `actjubilant.com.au` from VentraIP to Hostinger safely.
- Current VentraIP DNS records were captured from VIPcontrol before transfer, including website A records, VentraIP email MX records, Amazon SES `send` MX/SPF, Resend DKIM, Axigen DKIM, SPF, DMARC, and nameservers.
- During transfer, preserve existing nameservers/DNS where possible to avoid website/email downtime.

**Review notes:** Current DNS includes `ns1.nameserver.net.au`, `ns2.nameserver.net.au`, `ns3.nameserver.net.au`; website points to `110.232.143.105`; email MX points to `mx1-4.email-hosting.net.au`.
**Next:** Complete Hostinger domain transfer first. After domain/email is stable, implement Hostinger SMTP form notifications with env vars and no committed secrets.

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
| 5 | Owner media review (new photos/videos) | Owner + Cursor | Cursor | **Done** — compressed in-use images; pexels, unused videos, and duplicate thumbnails removed |
| 6 | About page architecture + build | Cursor | Cursor | **Done** — pushed |
| 7 | Services/Canberra copy lock + build | Cursor | Cursor | **Done** — pushed (8 categories after owner scope confirm) |
| 8 | Commit `WORKFLOW.md` + `CHANGES.md` | Owner | Either | **Done** (pushed `bddd29a`) |
| 9 | Referral page content above form | Cursor | Cursor | **Done** — pushed `0f493c0` |
| 10 | Reviews page rewrite | Cursor | Cursor | **Done** — pushed |
| 11 | Footer blurb + JSON-LD alignment | Cursor | Cursor | **Done** — pushed |
| 12 | Footer link to `/services/canberra` | Owner + Cursor | Cursor | **Done** — pushed |
| 13 | Hostinger domain transfer → SMTP forms | Owner | Owner | Blocked on DNS/email stability |
| 14 | Accessibility standards pass: WCAG 2.2 AA + W3C cognitive accessibility + real-user testing where possible | Owner + Cursor + Codex | Cursor + Codex | **Partial** — technical pass pushed `1b51499`; real-user testing remains owner-led |
| 15 | GA + Search Console placeholders in `layout.tsx` | Owner | Owner | `GA_MEASUREMENT_ID` and `your-google-verification-code` still placeholders |

**Confirmed good (no action):** No horizontal overflow · headings clear sticky header · Large Text mode OK · `/referral` Brand Bible structure (Codex audit)

**Suggested order:**
1. ~~Codex → fixes #1–3~~ ✓
2. ~~Cursor → About (#6) + Services (#7) + mobile UX (#4)~~ ✓
3. ~~Cursor → Referral (#9)~~ ✓ pushed
4. ~~Cursor → Reviews (#10)~~ ✓ pushed
5. ~~Cursor → footer blurb + JSON-LD (#11) + footer Services link (#12)~~ ✓ pushed
6. ~~Cursor → media compression + pexels removal (#5 partial)~~ ✓ pushed
7. ~~Cursor → accessibility standards page (#14 partial)~~ ✓ pushed `ac2641d`
8. ~~Video keyboard audit (all `SelfHostedVideo` instances)~~ ✓ pushed `ac2641d`
9. ~~Cursor → WCAG technical pass (#14 partial)~~ ✓ pushed `1b51499`
10. **Next:** Phase 1 UI redesign in worktree (`ui-redesign`) — global theme + homepage only
11. Owner → Hostinger transfer (#13) → SMTP forms; GA + Search Console IDs (#15)

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
