import { c as createComponent, $ as $$Layout, r as renderScript } from './Layout_Bg3NhFLQ.mjs';
import 'piccolore';
import { r as renderComponent, a as renderTemplate, m as maybeRenderHead, b as addAttribute } from './prerender_U-PYTyhn.mjs';
import { g as getCollection, r as renderEntry } from './_astro_content_DKu9nj99.mjs';

async function getStaticPaths() {
  const allEntries = await getCollection(
    "snapshots_es",
    ({ data }) => data.draft !== true 
  );
  allEntries.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
  const paths = allEntries.map((entry, index) => {
    const slug = entry.id.replace(/\/es$/, "");
    const prev = index > 0 ? allEntries[index - 1] : null;
    const next = index < allEntries.length - 1 ? allEntries[index + 1] : null;
    return {
      params: { id: slug },
      props: {
        entry,
        prevSlug: prev ? prev.id.replace(/\/es$/, "") : null,
        nextSlug: next ? next.id.replace(/\/es$/, "") : null
      }
    };
  });
  return paths;
}
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$;
  const { entry, prevSlug, nextSlug } = Astro2.props;
  const { data } = entry;
  const { Content } = await renderEntry(entry);
  const allPhotos = data.photos.length > 0 ? data.photos : [{ src: data.cover, alt: data.title, caption: void 0 }];
  const photosJson = JSON.stringify(
    allPhotos.map((p) => ({
      src: typeof p.src === "string" ? p.src : p.src.src,
      caption: p.caption ?? "",
      alt: p.alt ?? "",
      position: p.position ?? "center center"
    }))
  );
  const hasMap = data.lat != null && data.lng != null;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": data.title, "description": data.description, "lang": "es", "isDarkroom": true, "data-astro-cid-hsvgsf6j": true }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="fixed inset-0 z-[60] bg-neutral-950 flex flex-col md:flex-row overflow-hidden text-neutral-100 font-sans"${addAttribute(nextSlug, "data-next-slug")}${addAttribute(prevSlug, "data-prev-slug")}${addAttribute(photosJson, "data-photos")} data-lang="es" data-astro-cid-hsvgsf6j> <!-- Botón Cerrar --> <a href="/es/snapshots" class="fixed top-6 right-6 z-[100] w-12 h-12 flex items-center justify-center bg-black/20 hover:bg-black/40 backdrop-blur-sm text-white/50 hover:text-white transition-all duration-300 rounded-full group" aria-label="Cerrar" data-astro-cid-hsvgsf6j> <span class="text-2xl font-light transform group-hover:rotate-90 transition-transform duration-300" data-astro-cid-hsvgsf6j>&times;</span> </a> <!-- Izquierda: Visor de Fotos --> <div id="photo-viewer" class="relative flex-1 bg-neutral-950 overflow-hidden min-h-[50vh] md:h-full" data-astro-cid-hsvgsf6j> <div data-photo-strip class="flex transition-transform duration-500 ease-in-out h-full" style="transform: translateX(0%)" data-astro-cid-hsvgsf6j> ${allPhotos.map((photo) => renderTemplate`<div class="w-full h-full flex-shrink-0 flex items-center justify-center" data-astro-cid-hsvgsf6j> <img${addAttribute(typeof photo.src === "string" ? photo.src : photo.src.src, "src")}${addAttribute(photo.alt || data.title, "alt")} class="max-w-full max-h-full w-auto h-auto object-contain block" loading="eager"${addAttribute(false, "draggable")} data-astro-cid-hsvgsf6j> </div>`)} </div> ${allPhotos.length > 1 && renderTemplate`<div class="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10" data-astro-cid-hsvgsf6j> ${allPhotos.map((_, i) => renderTemplate`<button data-dot class="h-1.5 rounded-full transition-all duration-300 cursor-pointer"${addAttribute(i === 0 ? "width:1rem;background-color:white" : "width:0.375rem;background-color:rgba(255,255,255,0.3)", "style")} data-astro-cid-hsvgsf6j></button>`)} </div>`} <div class="hidden md:flex absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-black/20 to-transparent pointer-events-none items-center justify-end px-4" data-astro-cid-hsvgsf6j> <span class="text-white/20 text-[9px] uppercase tracking-[0.3em] vertical-text select-none" data-astro-cid-hsvgsf6j>Siguiente Abajo</span> </div> </div> <!-- Derecha: Panel de Información --> <aside class="w-full md:w-[400px] lg:w-[450px] bg-neutral-950 border-t md:border-t-0 md:border-l border-white/10 flex flex-col h-[50vh] md:h-full overflow-y-auto custom-scrollbar relative" data-astro-cid-hsvgsf6j> <div class="p-8 md:p-12 flex-1" data-astro-cid-hsvgsf6j> ${prevSlug && renderTemplate`<div class="md:hidden text-center py-4 text-neutral-700 animate-pulse" data-astro-cid-hsvgsf6j> <p class="text-[8px] uppercase tracking-widest" data-astro-cid-hsvgsf6j>↑ Desliza para Recientes</p> </div>`} <!-- Meta --> <div class="mb-10" data-astro-cid-hsvgsf6j> <div class="flex items-center gap-3 text-[10px] uppercase tracking-[0.2em] text-clay font-bold mb-4" data-astro-cid-hsvgsf6j> <span class="w-8 h-[1px] bg-clay" data-astro-cid-hsvgsf6j></span> <span data-astro-cid-hsvgsf6j>${data.location || "Observación"}</span> </div> <h1 class="text-3xl md:text-4xl font-serif text-white tracking-tight leading-tight mb-2" data-astro-cid-hsvgsf6j> ${data.title} </h1> <time class="text-[10px] uppercase tracking-[0.2em] text-neutral-500" data-astro-cid-hsvgsf6j> ${data.date.toLocaleDateString("es-ES", { month: "long", day: "numeric", year: "numeric" })} </time> </div> <!-- Mini Mapa --> ${hasMap && renderTemplate`<div class="mb-10" data-astro-cid-hsvgsf6j> <div id="snapshot-map" class="w-full h-40 rounded overflow-hidden border border-white/10"${addAttribute(data.lat, "data-lat")}${addAttribute(data.lng, "data-lng")}${addAttribute(data.location, "data-location")} data-astro-cid-hsvgsf6j></div> </div>`} <!-- Cuerpo --> <div class="darkroom prose prose-invert prose-neutral prose-sm max-w-none
          prose-p:font-sans prose-p:text-base prose-p:text-neutral-300 prose-p:leading-relaxed
          prose-headings:font-serif prose-headings:text-white
          prose-img:rounded prose-img:my-6 prose-img:w-full
          prose-strong:text-neutral-200 prose-a:text-clay hover:prose-a:text-white
          mb-12" data-astro-cid-hsvgsf6j> ${renderComponent($$result2, "Content", Content, { "data-astro-cid-hsvgsf6j": true })} </div> <!-- Pie de foto --> <div id="photo-caption-wrap" class="mt-8 pt-8 border-t border-white/5" style="display:none" data-astro-cid-hsvgsf6j> <p class="text-[11px] uppercase tracking-widest text-neutral-500 mb-2" data-astro-cid-hsvgsf6j>Anotación</p> <p id="photo-caption" class="text-sm text-neutral-400 font-sans leading-relaxed" data-astro-cid-hsvgsf6j></p> </div> <!-- Etiquetas --> ${data.tags.length > 0 && renderTemplate`<div class="mt-12 flex flex-wrap gap-2" data-astro-cid-hsvgsf6j> ${data.tags.map((tag) => renderTemplate`<span class="text-[9px] uppercase tracking-widest text-neutral-600 bg-white/5 px-2 py-1 border border-white/5" data-astro-cid-hsvgsf6j>#${tag}</span>`)} </div>`} <!-- EN link --> <div class="mt-8 pt-8 border-t border-white/5" data-astro-cid-hsvgsf6j> <a${addAttribute(`/snapshots/${entry.id.replace(/\/es$/, "")}`, "href")} class="text-[10px] uppercase tracking-widest text-neutral-600 hover:text-clay transition-colors" data-astro-cid-hsvgsf6j>
Read in English →
</a> </div> ${nextSlug && renderTemplate`<div class="md:hidden text-center py-8 text-neutral-700 animate-pulse border-t border-white/5 mt-8" data-astro-cid-hsvgsf6j> <p class="text-[8px] uppercase tracking-widest" data-astro-cid-hsvgsf6j>↓ Desliza para Antiguas</p> </div>`} </div> <!-- Navegación Footer --> <nav class="p-6 border-t border-white/10 grid grid-cols-2 gap-px bg-neutral-950 sticky bottom-0 z-20 shadow-[0_-10px_30px_rgba(0,0,0,0.5)]" data-astro-cid-hsvgsf6j> <a${addAttribute(prevSlug ? "/es/snapshots/" + prevSlug : "#", "href")}${addAttribute(`bg-neutral-900 p-4 text-center group transition-colors ${!prevSlug ? "opacity-20 cursor-not-allowed pointer-events-none" : "hover:bg-neutral-800"}`, "class")} data-astro-cid-hsvgsf6j> <span class="block text-[8px] uppercase tracking-widest text-neutral-500 group-hover:text-clay transition-colors mb-1" data-astro-cid-hsvgsf6j>Reciente</span> <span class="block text-[10px] text-neutral-300 truncate" data-astro-cid-hsvgsf6j>← Anterior</span> </a> <a${addAttribute(nextSlug ? "/es/snapshots/" + nextSlug : "#", "href")}${addAttribute(`bg-neutral-900 p-4 text-center group transition-colors ${!nextSlug ? "opacity-20 cursor-not-allowed pointer-events-none" : "hover:bg-neutral-800"}`, "class")} data-astro-cid-hsvgsf6j> <span class="block text-[8px] uppercase tracking-widest text-neutral-500 group-hover:text-clay transition-colors mb-1" data-astro-cid-hsvgsf6j>Antigua</span> <span class="block text-[10px] text-neutral-300 truncate" data-astro-cid-hsvgsf6j>Siguiente →</span> </a> </nav> </aside> </div> ` })}  ${renderScript($$result, "/Users/mac/Documents/01_ProyectoEspanol/SergioUribe.co/website/github/sergiouribeco/src/pages/es/snapshots/[...id].astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/mac/Documents/01_ProyectoEspanol/SergioUribe.co/website/github/sergiouribeco/src/pages/es/snapshots/[...id].astro", void 0);
const $$file = "/Users/mac/Documents/01_ProyectoEspanol/SergioUribe.co/website/github/sergiouribeco/src/pages/es/snapshots/[...id].astro";
const $$url = "/es/snapshots/[...id]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
