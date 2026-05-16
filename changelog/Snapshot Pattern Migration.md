Snapshot Pattern Migration — Audit & Fix Plan
✅ Already Done Correctly
Item	Status
Directory structure: pages/{philosophy,cv,home}/ with index.yaml + en.md + es.md	✅
Directory structure: geography/first-journey/ with index.yaml + en.md + es.md	✅
Directory structure: garden/{designing-core,limonysal}/ with index.yaml + en.md + es.md	✅
content.config.ts — collections split into _en/_es with pageLoader	✅
page-loader.ts — generic loader matching snapshot-loader pattern	✅
pages/philosophy.astro — uses getCollection('pages_en')	✅
pages/cv.astro — uses getCollection('pages_en')	✅
snapshots/ — unchanged (already correct)	✅
❌ Issues Found
1. Old .mdx files still present (will cause collection conflicts)
Astro will try to process these as entries in the same collection, causing duplicate IDs or schema errors.

src/content/pages/philosophy.mdx ← DELETE
src/content/pages/cv.mdx ← DELETE
src/content/geography/first-journey.mdx ← DELETE
src/content/garden/designing-core.mdx ← DELETE
src/content/garden/limonysal.mdx ← DELETE
2. pages/garden/[id].astro & garden/index.astro — still reference old 'garden' collection
Uses getCollection('garden') instead of getCollection('garden_en')
Accesses entry.data.title.en (old bilingual object) instead of flat entry.data.title (resolved by pageLoader)
Same problem in entry.data.tags?.en
3. pages/geography/[id].astro & geography/index.astro — still reference old 'geography' collection
Same pattern: getCollection('geography') → should be getCollection('geography_en')
Same .en/.es property accesses → should be flat strings
Same for entry.data.marginalia?.emotional?.en → entry.data.marginalia?.emotional
4. pages/es/garden/[id].astro & es/garden/index.astro — still reference old 'garden' collection
Uses getCollection('garden') → should be getCollection('garden_es')
Accesses entry.data.title.es → should be flat entry.data.title
5. pages/es/geography/[id].astro & es/geography/index.astro — still reference old 'geography' collection
Uses getCollection('geography') → should be getCollection('geography_es')
Accesses .es variants → should be flat strings
6. pages/es/philosophy.astro — hardcoded HTML, not using new collection
This file has all content hardcoded in HTML, not using getCollection('pages_es')
Should mirror pages/philosophy.astro but using pages_es collection
7. pages/es/cv.astro — hardcoded HTML, not using new collection
Same issue: all CV content hardcoded in HTML, not using getCollection('pages_es')
Should mirror pages/cv.astro but using pages_es collection
8. Empty garden/2025/ and garden/2026/ directories
These are empty directories that will be picked up by the glob and cause issues (or are just noise)
9. js-yaml not in explicit dependencies
Only present as transitive dep — should be explicit since loaders import it directly
10. pages/README-OBSIDIAN.md inside content directory
This could potentially be picked up by the glob pattern */{lang}.md
Not a directory-based entry, so likely fine, but worth noting
Fix Summary
Delete 5 old .mdx files
Update 4 EN Astro pages (garden/[id], garden/index, geography/[id], geography/index) to use _en collections + flat data
Update 4 ES Astro pages (same as above but _es collections)
Rewrite ES philosophy.astro to use pages_es collection + render
Rewrite ES cv.astro to use pages_es collection
Delete empty garden/2025/ and garden/2026/ directories
Add js-yaml to dependencies