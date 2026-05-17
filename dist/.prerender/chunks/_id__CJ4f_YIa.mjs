import { c as createComponent, $ as $$Layout } from './Layout_Bg3NhFLQ.mjs';
import 'piccolore';
import { r as renderComponent, a as renderTemplate, m as maybeRenderHead, b as addAttribute } from './prerender_U-PYTyhn.mjs';
import { g as getCollection, r as renderEntry } from './_astro_content_DKu9nj99.mjs';
import { a as $$Es, b as $$En, $ as $$ImmersiveViewer, c as $$ArticleFallback } from './ArticleFallback_ATPZo6YQ.mjs';
import { u as useTranslations } from './i18n_BBL7H_sX.mjs';

async function getStaticPaths() {
  const geographyEntries = await getCollection("geography_en");
  return geographyEntries.map((entry) => ({
    params: { id: entry.id },
    props: { entry }
  }));
}
const $$id = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$id;
  const { entry } = Astro2.props;
  const t = useTranslations("en");
  let Content = null;
  let renderError = false;
  try {
    const rendered = await renderEntry(entry);
    Content = rendered.Content;
  } catch (e) {
    console.error(`[Astro] Error rendering ${entry.id}:`, e);
    renderError = true;
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": entry.data.title, "description": entry.data.description }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<article class="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 items-start relative mt-8"> <!-- Main Content Area --> <div class="col-span-1 md:col-span-8"> <header class="mb-12"> <h1 class="text-4xl md:text-5xl font-serif text-ink tracking-tight mb-4">${entry.data.title}</h1> ${entry.data.description && renderTemplate`<p class="text-xl text-ink-light font-serif italic mb-6">${entry.data.description}</p>`} <div class="flex gap-4 font-sans text-xs text-ink/60 uppercase tracking-widest border-b border-earth/20 pb-6"> <time${addAttribute(entry.data.date.toISOString(), "datetime")}> ${entry.data.date.toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })} </time> ${entry.data.location && renderTemplate`<span>&bull; ${entry.data.location}</span>`} </div> </header> <div class="prose prose-lg prose-headings:font-serif prose-headings:text-ink prose-p:text-ink-light prose-p:leading-relaxed prose-a:text-clay hover:prose-a:text-earth max-w-none"> ${!renderError && Content ? renderTemplate`${renderComponent($$result2, "Content", Content, { "components": { ImmersiveViewer: $$ImmersiveViewer, En: $$En, Es: $$Es } })}` : renderTemplate`${renderComponent($$result2, "ArticleFallback", $$ArticleFallback, { "lang": "en" })}`} </div> ${entry.data.tags && entry.data.tags.length > 0 && renderTemplate`<div class="mt-16 pt-8 border-t border-earth/20"> <h3 class="text-sm font-sans uppercase tracking-widest text-ink/60 mb-4">${t("ui", "tags")}</h3> <div class="flex flex-wrap gap-2"> ${entry.data.tags.map((tag) => renderTemplate`<span class="px-3 py-1 bg-paper border border-earth/30 rounded-full text-xs font-sans text-ink-light"> ${tag} </span>`)} </div> </div>`} </div> <!-- Marginalia Sidebar (Asymmetric Panel) --> <aside class="col-span-1 md:col-span-4 sticky top-12 space-y-8 mt-12 md:mt-0 font-sans border-l border-earth/20 pl-8"> <a href="/geography" class="text-xs uppercase tracking-widest text-earth hover:text-clay font-sans mb-12 hidden md:inline-block">
&larr; ${t("ui", "backToGeography")} </a> ${entry.data.marginalia?.emotional && renderTemplate`<div class="bg-paper p-6 border border-earth/10 rounded-sm relative group transition-all duration-300 hover:shadow-sm"> <div class="absolute -left-3 top-6 w-6 h-[1px] bg-clay/50"></div> <h4 class="text-xs uppercase tracking-widest text-clay mb-2 flex items-center gap-2"> <span class="w-1.5 h-1.5 rounded-full bg-clay"></span> ${t("ui", "emotional")} </h4> <p class="text-sm text-ink-light leading-relaxed">${entry.data.marginalia.emotional}</p> </div>`} ${entry.data.marginalia?.philosophical && renderTemplate`<div class="bg-paper p-6 border border-earth/10 rounded-sm relative group transition-all duration-300 hover:shadow-sm"> <div class="absolute -left-3 top-6 w-6 h-[1px] bg-ink/30"></div> <h4 class="text-xs uppercase tracking-widest text-ink/60 mb-2 flex items-center gap-2"> <span class="w-1.5 h-1.5 rounded-full bg-ink/60"></span> ${t("ui", "philosophical")} </h4> <p class="text-sm text-ink-light leading-relaxed">${entry.data.marginalia.philosophical}</p> </div>`} ${entry.data.marginalia?.pedagogical && renderTemplate`<div class="bg-paper p-6 border border-earth/10 rounded-sm relative group transition-all duration-300 hover:shadow-sm"> <div class="absolute -left-3 top-6 w-6 h-[1px] border-t border-dashed border-earth"></div> <h4 class="text-xs uppercase tracking-widest text-earth mb-2 flex items-center gap-2"> <span class="w-1.5 h-1.5 rounded-full bg-transparent border border-earth"></span> ${t("ui", "pedagogical")} </h4> <p class="text-sm text-ink-light leading-relaxed">${entry.data.marginalia.pedagogical}</p> </div>`} ${entry.data.relatedIdeas && entry.data.relatedIdeas.length > 0 && renderTemplate`<div class="pt-8"> <h4 class="text-xs uppercase tracking-widest text-ink/60 mb-4">${t("ui", "relatedIdeas")}</h4> <ul class="space-y-3"> ${entry.data.relatedIdeas.map((idea) => renderTemplate`<li> <a${addAttribute(`/geography/${idea.toLowerCase().replace(/ /g, "-")}`, "href")} class="text-sm text-clay hover:text-earth transition-colors flex items-center gap-2 group"> <span class="opacity-0 group-hover:opacity-100 transition-opacity text-xs">&rarr;</span> ${idea} </a> </li>`)} </ul> </div>`} </aside> </article> ` })}`;
}, "/Users/mac/Documents/01_ProyectoEspanol/SergioUribe.co/website/github/sergiouribeco/src/pages/geography/[id].astro", void 0);

const $$file = "/Users/mac/Documents/01_ProyectoEspanol/SergioUribe.co/website/github/sergiouribeco/src/pages/geography/[id].astro";
const $$url = "/geography/[id]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$id,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
