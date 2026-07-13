# Changelog

## 2026-07-13 22:35 — Make post thumbnails clickable + fix build

- **Files affected:** `src/pages/es/posts/index.astro`, `src/pages/posts/index.astro`, `src/pages/posts/[slug].astro`
- **Changes:**
  - Wrapped the post-card thumbnail (`<Image>`) in an `<a href={...}>` on both the Spanish (`/es/posts/...`) and English (`/posts/...`) listing pages, so clicking the thumbnail navigates to the post. The link carries `class="block w-full h-full no-underline"` and the inner thumbnail div keeps `relative z-20` so it sits above the title-link overlay and stays clickable.
  - Fixed a missing closing brace `}` in the `{post.data.thumbnail && ( ... )}` expression on the Spanish listing page (lost during earlier editing) which was causing the production build to fail with a misleading `Expected ")" but found "{"` error attributed to line 73.
- **Rationale:** The user reported the card was clickable everywhere except the thumbnail. The thumbnail originally had no link; the title-link `::after` overlay (`after:absolute after:inset-0`) covered the rest of the card but the thumbnail sat above it without a target. Wrapping the thumbnail in its own anchor resolves it directly and robustly.
- **Verification:** `npm run build` passes; generated `dist/es/posts/index.html` and `dist/posts/index.html` contain `<a href=".../posts/..." class="block w-full h-full no-underline">` wrapping the thumbnail `<img>`.
- **Risks:** None expected. The whole-card overlay (user WIP) is preserved, so the entire card remains clickable in addition to the thumbnail.
