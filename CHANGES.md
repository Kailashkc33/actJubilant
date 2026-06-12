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
| 14 | Accessibility standards pass: WCAG 2.2 AA + W3C cognitive accessibility + real-user testing where possible | Owner + Cursor + Codex | Cursor + Codex | **Partial** — standards page, Codex audit, video keyboard fixes pushed `ac2641d`; broader technical pass optional |
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
9. Cursor/Codex → broader WCAG technical pass (#14) as needed
10. Owner → Hostinger transfer (#13) → SMTP forms; GA + Search Console IDs (#15)

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
