# 2026-07-14_0215_demo_instagram_grid.md

## Context
User asked to update the CSS grid layout on `src/pages/posts/demo-instagram.astro` using a provided snippet that switches the card list from a plain `<div class="grid">` + direct `<a>` children to a semantic `<ul>`/`<li>` structure (with `<li class="contents">` so the `<a>` still participates in the grid).

## Files affected
- `src/pages/posts/demo-instagram.astro`

## Before vs After
**Before:** `<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">` containing `{allPosts.map(post => (<a ...>...</a>))}`. Styling relied on a `<style>` block targeting `.ig-card`, `.ig-title`, `.ig-desc`, `.ig-badge`, `.ig-tag`.

**After:** `<ul class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-0 m-0 list-none">` with `{allPosts.map((post) => { const formattedDate=...; const isoDate=...; return (<li class="contents"><a ...>...</a></li>); })}`. Card redesigned with `aspect-[4/5] sm:aspect-square`, responsive `sizes`, lazy/async image, focus-visible ring, and hover-reveal description + tags. Dead `<style>` block removed.

## Reasoning / fix
The provided snippet contained `//` line comments placed **inside** JSX opening-tag attribute lists (e.g. between `href` and `class`, and inside `<Image>`). That is invalid in Astro/JSX and breaks the build (`Expected ")" but found "$$render"`). Those inline annotation comments were removed; valid HTML child comments (`<!-- -->`) were preserved.

## Verification
- `npm run build` completes successfully.
- Generated `dist/posts/demo-instagram/index.html` contains `<ul class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-0 m-0 list-none">` and three `<li class="contents">` wrappers.
- `dist/` was reverted afterward so only the source file remains modified in the working tree.
