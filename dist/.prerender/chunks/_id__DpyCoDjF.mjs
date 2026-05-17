import { c as createComponent, $ as $$Layout } from './Layout_Bg3NhFLQ.mjs';
import 'piccolore';
import { r as renderComponent, a as renderTemplate, m as maybeRenderHead, b as addAttribute } from './prerender_U-PYTyhn.mjs';
import { g as getCollection, r as renderEntry } from './_astro_content_DKu9nj99.mjs';
import { $ as $$ImmersiveViewer, a as $$Es, b as $$En, c as $$ArticleFallback } from './ArticleFallback_ATPZo6YQ.mjs';
import { u as useTranslations } from './i18n_BBL7H_sX.mjs';

async function getStaticPaths() {
  const gardenEntries = await getCollection("garden_es");
  return gardenEntries.map((entry) => ({
    params: { id: entry.id },
    props: { entry }
  }));
}
const $$id = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$id;
  const { entry } = Astro2.props;
  const t = useTranslations("es");
  let Content = null;
  let renderError = false;
  try {
    const rendered = await renderEntry(entry);
    Content = rendered.Content;
  } catch (e) {
    console.error(`[Astro] Error rendering ${entry.id}:`, e);
    renderError = true;
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": entry.data.title, "lang": "es" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="max-w-3xl mx-auto mt-8"> <a href="/es/garden" class="text-xs uppercase tracking-widest text-earth hover:text-clay font-sans mb-12 inline-block"> ${t("ui", "backToGarden")} </a> <header class="mb-12"> <div class="flex items-center gap-4 mb-6"> <time class="text-sm font-sans uppercase tracking-widest text-ink/60"${addAttribute(entry.data.date.toISOString(), "datetime")}> ${entry.data.date.toLocaleDateString("es-ES", { month: "long", day: "numeric", year: "numeric" })} </time> <span${addAttribute(`text-[10px] font-sans uppercase tracking-wider px-2 py-1 rounded-sm ${entry.data.status === "completed" ? "bg-ink/5 text-ink/60" : entry.data.status === "in-progress" ? "bg-clay/10 text-clay" : "bg-earth/10 text-earth"}`, "class")}> ${t("status", entry.data.status)} </span> </div> <h1 class="text-4xl md:text-5xl font-serif text-ink tracking-tight">${entry.data.title}</h1> </header> <div class="prose prose-lg prose-headings:font-serif prose-headings:text-ink prose-p:text-ink-light prose-p:leading-relaxed prose-a:text-clay hover:prose-a:text-earth max-w-none"> ${!renderError && Content ? renderTemplate`${renderComponent($$result2, "Content", Content, { "components": { En: $$En, Es: $$Es, ImmersiveViewer: $$ImmersiveViewer } })}` : renderTemplate`${renderComponent($$result2, "ArticleFallback", $$ArticleFallback, { "lang": "es" })}`} </div> <footer class="mt-16 pt-8 border-t border-earth/20"> ${entry.data.relatedProjects && entry.data.relatedProjects.length > 0 && renderTemplate`<div class="mb-6"> <h3 class="text-xs font-sans uppercase tracking-widest text-ink/60 mb-3">${t("ui", "relatedProjects")}</h3> <ul class="flex flex-wrap gap-2"> ${entry.data.relatedProjects.map((project) => renderTemplate`<li class="px-3 py-1 bg-paper border border-earth/30 rounded-sm text-xs font-sans text-ink-light"> ${project} </li>`)} </ul> </div>`} </footer> </div> ` })}`;
}, "/Users/mac/Documents/01_ProyectoEspanol/SergioUribe.co/website/github/sergiouribeco/src/pages/es/garden/[id].astro", void 0);

const $$file = "/Users/mac/Documents/01_ProyectoEspanol/SergioUribe.co/website/github/sergiouribeco/src/pages/es/garden/[id].astro";
const $$url = "/es/garden/[id]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$id,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
