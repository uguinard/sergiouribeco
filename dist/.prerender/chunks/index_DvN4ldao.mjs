import { c as createComponent, $ as $$Layout } from './Layout_Bg3NhFLQ.mjs';
import 'piccolore';
import { r as renderComponent, a as renderTemplate, m as maybeRenderHead, b as addAttribute } from './prerender_U-PYTyhn.mjs';
import { g as getCollection } from './_astro_content_DKu9nj99.mjs';
import { u as useTranslations } from './i18n_BBL7H_sX.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const t = useTranslations("es");
  const allGarden = await getCollection("garden_es");
  allGarden.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "El Jardín Pedagógico", "description": "Ingeniería pedagógica para la adquisición del español.", "lang": "es" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="max-w-4xl"> <header class="mb-16 border-b border-earth/20 pb-8"> <h1 class="text-4xl md:text-5xl font-serif text-ink tracking-tight mb-4">El Jardín Pedagógico</h1> <p class="text-xl text-ink-light font-serif italic">
Una mirada detrás de escena a mis experimentos en la adquisición del español, cognición 4E y diseño de input comprensible.
</p> </header> <div class="grid grid-cols-1 md:grid-cols-2 gap-8"> ${allGarden.map((entry) => renderTemplate`<article class="bg-paper border border-earth/20 p-8 hover:border-earth/60 transition-colors duration-300 relative group"> <div class="absolute top-0 left-0 w-full h-[2px] bg-earth opacity-0 group-hover:opacity-100 transition-opacity"></div> <div class="flex justify-between items-start mb-4"> <time class="text-xs font-sans uppercase tracking-widest text-ink/50"${addAttribute(entry.data.date.toISOString(), "datetime")}> ${entry.data.date.toLocaleDateString("es-ES", { month: "short", day: "numeric", year: "numeric" })} </time> <span${addAttribute(`text-[10px] font-sans uppercase tracking-wider px-2 py-1 rounded-sm ${entry.data.status === "completed" ? "bg-ink/5 text-ink/60" : entry.data.status === "in-progress" ? "bg-clay/10 text-clay" : "bg-earth/10 text-earth"}`, "class")}> ${t("status", entry.data.status)} </span> </div> <a${addAttribute(`/es/garden/${entry.id}`, "href")} class="block mb-4"> <h2 class="text-xl font-serif text-ink group-hover:text-clay transition-colors duration-300 leading-tight"> ${entry.data.title} </h2> </a> ${entry.data.tags && entry.data.tags.length > 0 && renderTemplate`<div class="flex flex-wrap gap-2 mt-auto"> ${entry.data.tags.map((tag) => renderTemplate`<span class="text-[10px] font-sans text-ink/40">
#${tag} </span>`)} </div>`} </article>`)} </div> </div> ` })}`;
}, "/Users/mac/Documents/01_ProyectoEspanol/SergioUribe.co/website/github/sergiouribeco/src/pages/es/garden/index.astro", void 0);

const $$file = "/Users/mac/Documents/01_ProyectoEspanol/SergioUribe.co/website/github/sergiouribeco/src/pages/es/garden/index.astro";
const $$url = "/es/garden";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
