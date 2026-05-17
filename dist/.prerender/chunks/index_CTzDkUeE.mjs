import { c as createComponent, $ as $$Layout, r as renderScript } from './Layout_Bg3NhFLQ.mjs';
import 'piccolore';
import { r as renderComponent, a as renderTemplate, m as maybeRenderHead, b as addAttribute } from './prerender_U-PYTyhn.mjs';
import { g as getCollection } from './_astro_content_DKu9nj99.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const allSnapshotsRaw = await getCollection(
    "snapshots_en",
    ({ data }) => data.draft !== true 
  );
  const sortedSnapshots = allSnapshotsRaw.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
  const years = [...new Set(sortedSnapshots.map((entry) => entry.data.date.getFullYear().toString()))];
  const locations = [...new Set(sortedSnapshots.map((entry) => entry.data.location).filter(Boolean))];
  const allTags = [...new Set(sortedSnapshots.flatMap((entry) => entry.data.tags.map((t) => t.toLowerCase())))].sort();
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Snapshots", "description": "A visual diary — moments caught between places, languages, and reflections.", "data-astro-cid-cbf3opo2": true }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="max-w-6xl" data-astro-cid-cbf3opo2> <header class="mb-16 border-b border-earth/20 pb-8" data-astro-cid-cbf3opo2> <p class="eyebrow mb-4" data-astro-cid-cbf3opo2>Instantes</p> <h1 class="text-4xl md:text-5xl font-serif text-ink tracking-tight mb-4" data-astro-cid-cbf3opo2>Snapshots</h1> <p class="text-xl text-ink-light font-serif italic max-w-2xl" data-astro-cid-cbf3opo2>
A visual diary. Moments caught between places, languages, and reflections — each image a sentence in a language without grammar.
</p> </header> <!-- Filters --> <div class="mb-10 space-y-4" data-astro-cid-cbf3opo2> <!-- Search + dropdowns --> <div class="flex flex-col sm:flex-row gap-3" data-astro-cid-cbf3opo2> <input type="text" id="search-input" placeholder="Search snapshots..." class="flex-1 px-4 py-2 border border-earth/20 bg-paper text-ink focus:outline-none focus:border-clay transition-colors font-sans text-sm" data-astro-cid-cbf3opo2> <select id="location-filter" class="px-4 py-2 border border-earth/20 bg-paper text-ink focus:outline-none focus:border-clay transition-colors font-sans text-sm" data-astro-cid-cbf3opo2> <option value="" data-astro-cid-cbf3opo2>All locations</option> ${locations.map((loc) => renderTemplate`<option${addAttribute(loc.toLowerCase(), "value")} data-astro-cid-cbf3opo2>${loc}</option>`)} </select> <select id="year-filter" class="px-4 py-2 border border-earth/20 bg-paper text-ink focus:outline-none focus:border-clay transition-colors font-sans text-sm" data-astro-cid-cbf3opo2> <option value="" data-astro-cid-cbf3opo2>All years</option> ${years.map((year) => renderTemplate`<option${addAttribute(year, "value")} data-astro-cid-cbf3opo2>${year}</option>`)} </select> </div> <!-- Tag pills --> <div class="flex flex-wrap gap-2 items-center" data-astro-cid-cbf3opo2> <button class="tag-pill active font-sans text-[10px] uppercase tracking-widest px-3 py-1 border border-earth/30 transition-all duration-200" data-tag="" data-astro-cid-cbf3opo2>All</button> ${allTags.map((tag) => renderTemplate`<button class="tag-pill font-sans text-[10px] uppercase tracking-widest px-3 py-1 border border-earth/20 text-earth/50 transition-all duration-200 hover:border-clay hover:text-clay"${addAttribute(tag, "data-tag")} data-astro-cid-cbf3opo2>#${tag}</button>`)} </div> <!-- Active filters summary --> <p id="filter-summary" class="font-sans text-[10px] uppercase tracking-widest text-earth/40 hidden" data-astro-cid-cbf3opo2></p> </div> <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 snapshots-grid" data-astro-cid-cbf3opo2> ${sortedSnapshots.map((entry) => {
    const slug = entry.id.replace(/\/en$/, "");
    const year = entry.data.date.getFullYear();
    return renderTemplate`<a${addAttribute(`/snapshots/${slug}`, "href")} class="group flex flex-col bg-paper border border-earth/10 overflow-hidden hover:border-earth/40 transition-all duration-500 hover:shadow-lg snapshot-card"${addAttribute(year, "data-year")}${addAttribute(entry.data.title.toLowerCase(), "data-title")}${addAttribute((entry.data.location || "").toLowerCase(), "data-location")}${addAttribute(entry.data.tags.map((t) => t.toLowerCase()).join(","), "data-tags")} data-astro-cid-cbf3opo2> <div class="relative overflow-hidden aspect-[4/3] flex-shrink-0" data-astro-cid-cbf3opo2> <img${addAttribute(typeof entry.data.cover === "string" ? entry.data.cover : entry.data.cover.src, "src")}${addAttribute(entry.data.title, "alt")} class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"${addAttribute(`object-position:${entry.data.cover_position}`, "style")} data-astro-cid-cbf3opo2> ${entry.data.photos.length > 1 && renderTemplate`<div class="absolute top-3 right-3 bg-ink/60 text-paper font-sans text-[9px] tracking-widest uppercase px-2 py-1 backdrop-blur-sm" data-astro-cid-cbf3opo2> ${entry.data.photos.length} photos
</div>`} </div> <div class="p-5 flex flex-col flex-1" data-astro-cid-cbf3opo2> <time class="font-sans text-[10px] uppercase tracking-widest text-earth/60 mb-2 block" data-astro-cid-cbf3opo2> ${entry.data.date.toLocaleDateString("en-US", { month: "long", year: "numeric" })} ${entry.data.location && ` · ${entry.data.location}`} </time> <h2 class="font-serif text-lg text-ink group-hover:text-clay transition-colors leading-snug mb-2" data-astro-cid-cbf3opo2> ${entry.data.title} </h2> ${entry.data.description && renderTemplate`<p class="font-sans text-sm text-ink-light line-clamp-2 leading-relaxed" data-astro-cid-cbf3opo2> ${entry.data.description} </p>`} ${entry.data.tags.length > 0 && renderTemplate`<div class="flex flex-wrap gap-2 mt-3" data-astro-cid-cbf3opo2> ${entry.data.tags.map((tag) => renderTemplate`<span class="font-sans text-[9px] uppercase tracking-widest text-earth/50" data-astro-cid-cbf3opo2>#${tag}</span>`)} </div>`} </div> </a>`;
  })} </div> <div id="empty-state" class="text-center py-24 text-earth/40 font-serif italic hidden" data-astro-cid-cbf3opo2>
No snapshots match the current filters.
</div> ${sortedSnapshots.length === 0 && renderTemplate`<div class="text-center py-24 text-earth/40 font-serif italic" data-astro-cid-cbf3opo2>
No entries yet. Create a folder <code data-astro-cid-cbf3opo2>src/content/snapshots/yy-mm-dd-name/</code> with <code data-astro-cid-cbf3opo2>en.md</code>, <code data-astro-cid-cbf3opo2>es.md</code> and a <code data-astro-cid-cbf3opo2>media/</code> folder inside.
</div>`} </div>  ${renderScript($$result2, "/Users/mac/Documents/01_ProyectoEspanol/SergioUribe.co/website/github/sergiouribeco/src/pages/snapshots/index.astro?astro&type=script&index=0&lang.ts")} ` })}`;
}, "/Users/mac/Documents/01_ProyectoEspanol/SergioUribe.co/website/github/sergiouribeco/src/pages/snapshots/index.astro", void 0);
const $$file = "/Users/mac/Documents/01_ProyectoEspanol/SergioUribe.co/website/github/sergiouribeco/src/pages/snapshots/index.astro";
const $$url = "/snapshots";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
