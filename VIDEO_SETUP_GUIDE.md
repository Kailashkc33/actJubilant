# Video setup — ACT Jubilant

## Videos in use (June 2026)

| File | Page | Component | Notes |
|------|------|-----------|-------|
| `public/videos/testimonial2.mp4` | Homepage §5 (hybrid) · `/reviews` | `SelfHostedVideo` | Poster: `public/images/testimonials/thumbnail.jpg` |
| `public/videos/community-dance-class-event-sep-2025-portrait.mp4` | Homepage §3 (hybrid) · `/programs` | `SelfHostedVideo` | Poster: `public/images/gallery/dance-class-event-poster-portrait.jpg`; source is portrait 9:16; Programs media grid displays it in a 4:3 cover frame for card consistency |

**Component:** `src/components/SelfHostedVideo.tsx` — native play button, keyboard focus management, `aria` labels, optional `minimalChrome` for homepage.

**Removed / do not re-add:** `testimonial1.mp4`, `community-dance-class-event-sep-2025.mp4`, `community-dance-class-event-sep-2025-web.mp4`, `testimonialtn.png`, `video-thumbnail.jpg` (unused duplicates).

---

## File structure

```
public/
├── videos/
│   ├── testimonial2.mp4
│   └── community-dance-class-event-sep-2025-portrait.mp4
└── images/
    ├── testimonials/
    │   └── thumbnail.jpg          # Testimonial poster
    └── gallery/
        └── dance-class-event-poster-portrait.jpg
```

---

## Adding or replacing a video

1. **Compress** target under ~10 MB for web (portrait dance class is acceptable larger if needed; testimonial should stay lean).
2. **Place** MP4 in `public/videos/`.
3. **Add poster** JPEG in `public/images/` (gallery or testimonials).
4. **Wire** in page via `<SelfHostedVideo srcMp4="..." poster="..." title="..." description="..." />`.
5. **Test** keyboard: Tab to play → Enter/Space → native controls → focus returns on end.
6. Run `npm run build`.

### FFmpeg compression (example)

```bash
ffmpeg -i input.mp4 -vcodec libx264 -crf 28 -preset fast -acodec aac -b:a 128k output.mp4
```

### Poster from video frame

```bash
ffmpeg -i input.mp4 -ss 00:00:02 -vframes 1 -q:v 2 poster.jpg
```

---

## Performance tips

- Prefer MP4 (H.264 + AAC) for broad compatibility.
- Use `minimalChrome` on homepage when caption copy lives above the player.
- On Programs media grids, keep the video card the same visual aspect ratio as neighbouring image cards unless the section is intentionally featuring the video.
- Do not duplicate the same video/photo immediately in adjacent Programs sections; keep each media block doing a distinct job.
- Posters should be JPEG, max ~1920px wide, under ~300 KB where possible.
- Videos lazy-load via `SelfHostedVideo` (poster shown until play).

---

## Accessibility

- Every instance needs unique `title` and `description` (screen readers).
- Do not use `div role="button"` for play — use the shared component.
- Homepage dance blurb (Brand Bible): *"An example of the kind of community group activity we can help arrange or support when it suits a participant's interests and goals."* — not a claim that ACT Jubilant runs the class.
