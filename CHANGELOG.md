# Changelog

## 2026-07-13 22:35 — Make post thumbnails clickable + fix build

- **Files affected:** `src/pages/es/posts/index.astro`, `src/pages/posts/index.astro`, `src/pages/posts/[slug].astro`
- **Changes:**
  - Wrapped the post-card thumbnail (`<Image>`) in an `<a href={...}>` on both the Spanish (`/es/posts/...`) and English (`/posts/...`) listing pages, so clicking the thumbnail navigates to the post. The link carries `class="block w-full h-full no-underline"` and the inner thumbnail div keeps `relative z-20` so it sits above the title-link overlay and stays clickable.
  - Fixed a missing closing brace `}` in the `{post.data.thumbnail && ( ... )}` expression on the Spanish listing page (lost during earlier editing) which was causing the production build to fail with a misleading `Expected ")" but found "{"` error attributed to line 73.
- **Rationale:** The user reported the card was clickable everywhere except the thumbnail. The thumbnail originally had no link; the title-link `::after` overlay (`after:absolute after:inset-0`) covered the rest of the card but the thumbnail sat above it without a target. Wrapping the thumbnail in its own anchor resolves it directly and robustly.
- **Verification:** `npm run build` passes; generated `dist/es/posts/index.html` and `dist/posts/index.html` contain `<a href=".../posts/..." class="block w-full h-full no-underline">` wrapping the thumbnail `<img>`.
- **Risks:** None expected. The whole-card overlay (user WIP) is preserved, so the entire card remains clickable in addition to the thumbnail.

## 2026-07-14 02:15 — Rewrite demo-instagram.astro grid layout

- **Files affected:** `src/pages/posts/demo-instagram.astro`
- **Changes:**
  - Replaced the `<div class="grid ...">` + direct `<a>` card markup with a semantic `<ul class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-0 m-0 list-none">` and `<li class="contents">` wrappers so each card `<a>` still participates in the CSS grid (via `display: contents`).
  - Updated the card design: responsive aspect ratio `aspect-[4/5] sm:aspect-square`, `alt=""` (decorative, with `aria-label` on the link), `will-change-transform` on image/card, `sizes` + `loading="lazy"` + `decoding="async"` on `<Image>`, focus-visible ring, and a hover-reveal description (`grid-rows-[0fr]` → `group-hover:grid-rows-[1fr]`) and tags (`opacity-0` → `group-hover:opacity-100`).
  - Removed the now-dead `<style>` block (only styled the old `.ig-*` classes, which no longer exist).
- **Rationale:** User requested the semantic `<ul>`/`<li>` grid rewrite for the Instagram demo page.
- **Note:** The provided snippet used `//` line comments inside JSX tag attribute lists (invalid in Astro/JSX). Those were dropped so the page compiles; valid HTML child comments (`<!-- -->`) were kept.
- **Verification:** `npm run build` passes; generated `dist/posts/demo-instagram/index.html` contains the `<ul class="grid ...">` and three `<li class="contents">` elements.
