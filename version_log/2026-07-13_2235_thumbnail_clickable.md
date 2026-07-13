# 2026-07-13_2235_thumbnail_clickable.md

## Context
User reported that on the posts listing page, clicking anywhere on a card navigates to the post **except the thumbnail**, which was not clickable. Investigation showed the thumbnail `<Image>` was rendered inside a plain `<div>` with no anchor, while only the title `<a>` had the whole-card overlay (`after:absolute after:inset-0 after:content-['']`). The thumbnail's `relative` div sat above that overlay but had no link target.

## Files affected
- `src/pages/es/posts/index.astro`
- `src/pages/posts/index.astro`
- `src/pages/posts/[slug].astro`

## Before vs After
**Before (thumbnail block, both listing pages):**
```astro
{post.data.thumbnail && (
  <div class="w-full md:w-44 h-28 shrink-0 rounded-xl overflow-hidden border border-earth/10 relative">
    <Image src={post.data.thumbnail} alt={post.data.title} class="..." width={300} height={180} />
  </div>
)}
```

**After (Spanish page, `/es/posts/${post.id}`):**
```astro
{post.data.thumbnail && (
  <a href={`/es/posts/${post.id}`} class="block w-full h-full no-underline">
    <div class="w-full md:w-44 h-28 shrink-0 rounded-xl overflow-hidden border border-earth/10 relative z-20">
      <Image src={post.data.thumbnail} alt={post.data.title} class="..." width={300} height={180} />
    </div>
  </a>
)}
```
(English page uses `/posts/${post.id}`.)

## Reasoning
Wrapping the thumbnail itself in an `<a>` makes it independently clickable regardless of the overlay/z-index situation. The `relative z-20` on the inner div keeps it above the title-link overlay so the click hits the thumbnail link.

## Side effect fixed
An earlier edit had dropped the closing `}` of the `{post.data.thumbnail && ( … )}` JSX expression on the Spanish page, which broke `astro build` with a misleading parse error (`Expected ")" but found "{"` at line 73). The `}` was restored.

## Verification
- `npm run build` completes successfully.
- `dist/es/posts/index.html` and `dist/posts/index.html` contain the thumbnail `<img>` wrapped in `<a class="block w-full h-full no-underline">`.
