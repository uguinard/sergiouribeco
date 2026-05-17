import { c as createComponent, $ as $$Layout } from './Layout_Bg3NhFLQ.mjs';
import 'piccolore';
import { r as renderComponent, a as renderTemplate, m as maybeRenderHead } from './prerender_U-PYTyhn.mjs';
import { g as getCollection, r as renderEntry } from './_astro_content_DKu9nj99.mjs';

const $$Philosophy = createComponent(async ($$result, $$props, $$slots) => {
  const allPages = await getCollection("pages_en");
  const entry = allPages.find((p) => p.id === "philosophy");
  if (!entry) throw new Error(`philosophy not found. IDs: ${allPages.map((p) => p.id).join(", ")}`);
  const { Content } = await renderEntry(entry);
  const { title, description } = entry.data;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": title, "description": description, "data-astro-cid-stld6yrx": true }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="max-w-3xl mx-auto mt-8 relative" data-astro-cid-stld6yrx> <div class="absolute -left-12 top-0 bottom-0 w-[1px] bg-earth/20 hidden md:block" data-astro-cid-stld6yrx></div> <div class="absolute -left-[12.5px] top-0 bottom-0 w-[2px] hidden md:block" style="background: linear-gradient(to bottom, transparent 0%, var(--clay, #8B2020) 8%, var(--clay, #8B2020) 92%, transparent 100%); opacity: 0.15;" data-astro-cid-stld6yrx></div> <header class="mb-16" data-astro-cid-stld6yrx> <p class="eyebrow mb-4" data-astro-cid-stld6yrx>Educational Philosophy</p> <h1 class="text-4xl md:text-6xl font-serif text-ink tracking-tight mb-6" data-astro-cid-stld6yrx>${title}</h1> ${description && renderTemplate`<p class="text-xl text-ink-light font-serif italic border-l-2 border-clay pl-4" data-astro-cid-stld6yrx> ${description} </p>`} </header> <div class="philosophy-prose prose prose-lg max-w-none" data-astro-cid-stld6yrx> ${renderComponent($$result2, "Content", Content, { "data-astro-cid-stld6yrx": true })} </div> <div class="mt-16 pt-8 border-t border-earth/20 flex items-center justify-between print:hidden" data-astro-cid-stld6yrx> <a href="/cv" class="text-xs uppercase tracking-widest text-earth hover:text-clay font-sans transition-colors" data-astro-cid-stld6yrx>
&rarr; Curriculum Vitae
</a> <button onclick="window.print()" class="text-xs font-sans uppercase tracking-widest text-ink/50 hover:text-clay transition-colors flex items-center gap-2" aria-label="Print this page" data-astro-cid-stld6yrx> <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" stroke-width="1.5" data-astro-cid-stld6yrx> <rect x="2" y="1" width="8" height="6" rx="0.5" data-astro-cid-stld6yrx></rect> <path d="M2 7v3a.5.5 0 00.5.5h7a.5.5 0 00.5-.5V7" data-astro-cid-stld6yrx></path> <path d="M4 5h4M4 8h4M4 9.5h2" data-astro-cid-stld6yrx></path> </svg>
Print
</button> </div> </div> ` })}`;
}, "/Users/mac/Documents/01_ProyectoEspanol/SergioUribe.co/website/github/sergiouribeco/src/pages/philosophy.astro", void 0);

const $$file = "/Users/mac/Documents/01_ProyectoEspanol/SergioUribe.co/website/github/sergiouribeco/src/pages/philosophy.astro";
const $$url = "/philosophy";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Philosophy,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
