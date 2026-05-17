import { c as createComponent, $ as $$Layout, r as renderScript } from './Layout_Bg3NhFLQ.mjs';
import 'piccolore';
import { r as renderComponent, a as renderTemplate, m as maybeRenderHead, b as addAttribute } from './prerender_U-PYTyhn.mjs';
import { g as getCollection } from './_astro_content_DKu9nj99.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const allSnapshotsRaw = await getCollection(
    "snapshots_es",
    ({ data }) => data.draft !== true 
  );
  const sortedSnapshots = allSnapshotsRaw.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
  const years = [...new Set(sortedSnapshots.map((entry) => entry.data.date.getFullYear().toString()))];
  const locations = [...new Set(sortedSnapshots.map((entry) => entry.data.location).filter(Boolean))];
  const allTags = [...new Set(sortedSnapshots.flatMap((entry) => entry.data.tags.map((t) => t.toLowerCase())))].sort();
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Instantes", "lang": "es", "description": "Un diario visual — momentos atrapados entre lugares, lenguas y reflexiones.", "data-astro-cid-a6ub2elc": true }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="max-w-6xl" data-astro-cid-a6ub2elc> <header class="mb-16 border-b border-earth/20 pb-8" data-astro-cid-a6ub2elc> <p class="eyebrow mb-4" data-astro-cid-a6ub2elc>Snapshots</p> <h1 class="text-4xl md:text-5xl font-serif text-ink tracking-tight mb-4" data-astro-cid-a6ub2elc>Instantes</h1> <p class="text-xl text-ink-light font-serif italic max-w-2xl" data-astro-cid-a6ub2elc>
Un diario visual. Momentos atrapados entre lugares, lenguas y reflexiones — cada imagen una frase en un lenguaje sin gramática.
</p> </header> <!-- Filtros --> <div class="mb-10 space-y-4" data-astro-cid-a6ub2elc> <!-- Búsqueda + dropdowns --> <div class="flex flex-col sm:flex-row gap-3" data-astro-cid-a6ub2elc> <input type="text" id="search-input" placeholder="Buscar instantes..." class="flex-1 px-4 py-2 border border-earth/20 bg-paper text-ink focus:outline-none focus:border-clay transition-colors font-sans text-sm" data-astro-cid-a6ub2elc> <select id="location-filter" class="px-4 py-2 border border-earth/20 bg-paper text-ink focus:outline-none focus:border-clay transition-colors font-sans text-sm" data-astro-cid-a6ub2elc> <option value="" data-astro-cid-a6ub2elc>Todas las ubicaciones</option> ${locations.map((loc) => renderTemplate`<option${addAttribute(loc.toLowerCase(), "value")} data-astro-cid-a6ub2elc>${loc}</option>`)} </select> <select id="year-filter" class="px-4 py-2 border border-earth/20 bg-paper text-ink focus:outline-none focus:border-clay transition-colors font-sans text-sm" data-astro-cid-a6ub2elc> <option value="" data-astro-cid-a6ub2elc>Todos los años</option> ${years.map((year) => renderTemplate`<option${addAttribute(year, "value")} data-astro-cid-a6ub2elc>${year}</option>`)} </select> </div> <!-- Pills de tags --> <div class="flex flex-wrap gap-2 items-center" data-astro-cid-a6ub2elc> <button class="tag-pill active font-sans text-[10px] uppercase tracking-widest px-3 py-1 border border-earth/30 transition-all duration-200" data-tag="" data-astro-cid-a6ub2elc>Todos</button> ${allTags.map((tag) => renderTemplate`<button class="tag-pill font-sans text-[10px] uppercase tracking-widest px-3 py-1 border border-earth/20 text-earth/50 transition-all duration-200 hover:border-clay hover:text-clay"${addAttribute(tag, "data-tag")} data-astro-cid-a6ub2elc>#${tag}</button>`)} </div> <!-- Resumen de filtros activos --> <p id="filter-summary" class="font-sans text-[10px] uppercase tracking-widest text-earth/40 hidden" data-astro-cid-a6ub2elc></p> </div> <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 snapshots-grid" data-astro-cid-a6ub2elc> ${sortedSnapshots.map((entry) => {
    const slug = entry.id.replace(/\/es$/, "");
    const year = entry.data.date.getFullYear();
    return renderTemplate`<a${addAttribute(`/es/snapshots/${slug}`, "href")} class="group flex flex-col bg-paper border border-earth/10 overflow-hidden hover:border-earth/40 transition-all duration-500 hover:shadow-lg snapshot-card"${addAttribute(year, "data-year")}${addAttribute(entry.data.title.toLowerCase(), "data-title")}${addAttribute((entry.data.location || "").toLowerCase(), "data-location")}${addAttribute(entry.data.tags.map((t) => t.toLowerCase()).join(","), "data-tags")} data-astro-cid-a6ub2elc> <div class="relative overflow-hidden aspect-[4/3] flex-shrink-0" data-astro-cid-a6ub2elc> <img${addAttribute(typeof entry.data.cover === "string" ? entry.data.cover : entry.data.cover.src, "src")}${addAttribute(entry.data.title, "alt")} class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"${addAttribute(`object-position:${entry.data.cover_position}`, "style")} data-astro-cid-a6ub2elc> ${entry.data.photos.length > 1 && renderTemplate`<div class="absolute top-3 right-3 bg-ink/60 text-paper font-sans text-[9px] tracking-widest uppercase px-2 py-1 backdrop-blur-sm" data-astro-cid-a6ub2elc> ${entry.data.photos.length} fotos
</div>`} </div> <div class="p-5 flex flex-col flex-1" data-astro-cid-a6ub2elc> <time class="font-sans text-[10px] uppercase tracking-widest text-earth/60 mb-2 block" data-astro-cid-a6ub2elc> ${entry.data.date.toLocaleDateString("es-ES", { month: "long", year: "numeric" })} ${entry.data.location && ` · ${entry.data.location}`} </time> <h2 class="font-serif text-lg text-ink group-hover:text-clay transition-colors leading-snug mb-2" data-astro-cid-a6ub2elc> ${entry.data.title} </h2> ${entry.data.description && renderTemplate`<p class="font-sans text-sm text-ink-light line-clamp-2 leading-relaxed" data-astro-cid-a6ub2elc> ${entry.data.description} </p>`} ${entry.data.tags.length > 0 && renderTemplate`<div class="flex flex-wrap gap-2 mt-3" data-astro-cid-a6ub2elc> ${entry.data.tags.map((tag) => renderTemplate`<span class="font-sans text-[9px] uppercase tracking-widest text-earth/50" data-astro-cid-a6ub2elc>#${tag}</span>`)} </div>`} </div> </a>`;
  })} </div> <div id="empty-state" class="text-center py-24 text-earth/40 font-serif italic hidden" data-astro-cid-a6ub2elc>
Ningún instante coincide con los filtros actuales.
</div> ${sortedSnapshots.length === 0 && renderTemplate`<div class="text-center py-24 text-earth/40 font-serif italic" data-astro-cid-a6ub2elc>
Aún no hay entradas. Crea una carpeta <code data-astro-cid-a6ub2elc>src/content/snapshots/aa-mm-dd-nombre/</code> con <code data-astro-cid-a6ub2elc>en.md</code>, <code data-astro-cid-a6ub2elc>es.md</code> y una carpeta <code data-astro-cid-a6ub2elc>media/</code> dentro.
</div>`} </div>  ${renderScript($$result2, "/Users/mac/Documents/01_ProyectoEspanol/SergioUribe.co/website/github/sergiouribeco/src/pages/es/snapshots/index.astro?astro&type=script&index=0&lang.ts")} ` })}`;
}, "/Users/mac/Documents/01_ProyectoEspanol/SergioUribe.co/website/github/sergiouribeco/src/pages/es/snapshots/index.astro", void 0);
const $$file = "/Users/mac/Documents/01_ProyectoEspanol/SergioUribe.co/website/github/sergiouribeco/src/pages/es/snapshots/index.astro";
const $$url = "/es/snapshots";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
