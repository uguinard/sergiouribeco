import { c as createComponent, $ as $$Layout } from './Layout_Bg3NhFLQ.mjs';
import 'piccolore';
import { r as renderComponent, a as renderTemplate, m as maybeRenderHead, F as Fragment, b as addAttribute } from './prerender_U-PYTyhn.mjs';
import { g as getCollection } from './_astro_content_DKu9nj99.mjs';

const $$Cv = createComponent(async ($$result, $$props, $$slots) => {
  const allPages = await getCollection("pages_es");
  const entry = allPages.find((p) => p.id === "cv");
  if (!entry) throw new Error(`cv not found. IDs: ${allPages.map((p) => p.id).join(", ")}`);
  const {
    title,
    name,
    role,
    location,
    availableFrom,
    linkedin,
    website,
    profile,
    experience,
    education,
    languages,
    skills
  } = entry.data;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": title, "lang": "es", "data-astro-cid-zer3vjcp": true }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="max-w-3xl mx-auto mt-8" data-astro-cid-zer3vjcp> <header class="mb-16 border-b border-earth/20 pb-12" data-astro-cid-zer3vjcp> <h1 class="text-4xl md:text-5xl font-serif text-ink tracking-tight mb-2" data-astro-cid-zer3vjcp>${name}</h1> ${role && renderTemplate`<p class="text-xl text-ink-light font-sans tracking-wide uppercase mb-6 text-sm" data-astro-cid-zer3vjcp>${role}</p>`} <div class="flex flex-wrap gap-4 font-sans text-xs text-ink/70" data-astro-cid-zer3vjcp> ${linkedin && renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "data-astro-cid-zer3vjcp": true }, { "default": async ($$result3) => renderTemplate`<a${addAttribute(linkedin, "href")} target="_blank" rel="noopener" class="hover:text-clay transition-colors" data-astro-cid-zer3vjcp>LinkedIn</a><span data-astro-cid-zer3vjcp>&bull;</span>` })}`} ${location && renderTemplate`<span data-astro-cid-zer3vjcp>${location}</span>`} ${website && renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "data-astro-cid-zer3vjcp": true }, { "default": async ($$result3) => renderTemplate`<span data-astro-cid-zer3vjcp>&bull;</span><a${addAttribute(website, "href")} class="hover:text-clay transition-colors" data-astro-cid-zer3vjcp>${website.replace("https://", "")}</a>` })}`} </div> ${availableFrom && renderTemplate`<p class="font-sans text-sm text-earth mt-4 italic" data-astro-cid-zer3vjcp>
&#9679; Disponible ${availableFrom} &mdash; pasaporte, títulos y certificados de antecedentes disponibles bajo solicitud
</p>`} </header> <div class="space-y-16" data-astro-cid-zer3vjcp> ${profile && renderTemplate`<section data-astro-cid-zer3vjcp> <h2 class="cv-section-head" data-astro-cid-zer3vjcp>Perfil Profesional</h2> <p class="font-serif text-ink-light leading-relaxed" data-astro-cid-zer3vjcp>${profile}</p> </section>`} ${experience && experience.length > 0 && renderTemplate`<section data-astro-cid-zer3vjcp> <h2 class="cv-section-head" data-astro-cid-zer3vjcp>Experiencia Profesional</h2> <div class="space-y-12" data-astro-cid-zer3vjcp> ${experience.map((job, i) => renderTemplate`<div${addAttribute(`relative pl-6 border-l transition-colors duration-300 ${i === 0 ? "border-clay/40 hover:border-clay" : "border-ink/10 hover:border-earth"}`, "class")} data-astro-cid-zer3vjcp> <div${addAttribute(`absolute -left-[5px] top-1.5 w-2 h-2 rounded-full border-2 ${i === 0 ? "bg-sand border-clay" : "bg-sand border-ink/20"}`, "class")} data-astro-cid-zer3vjcp></div> <div class="flex justify-between items-start mb-2 flex-wrap gap-2" data-astro-cid-zer3vjcp> <h3 class="font-serif text-xl text-ink" data-astro-cid-zer3vjcp>${job.role}</h3> <span class="text-xs font-sans text-ink/50 uppercase tracking-wider" data-astro-cid-zer3vjcp>${job.period}</span> </div> <p class="text-sm font-sans text-ink-light mb-3" data-astro-cid-zer3vjcp>${job.location}</p> <ul class="font-serif text-ink-light leading-relaxed space-y-1 list-none" data-astro-cid-zer3vjcp> ${job.highlights.map((hl) => renderTemplate`<li class="pl-4 relative before:content-['–'] before:absolute before:left-0 before:text-earth" data-astro-cid-zer3vjcp>${hl}</li>`)} </ul> </div>`)} </div> </section>`} ${education && education.length > 0 && renderTemplate`<section data-astro-cid-zer3vjcp> <h2 class="cv-section-head" data-astro-cid-zer3vjcp>Formación Académica</h2> <div class="space-y-8" data-astro-cid-zer3vjcp> ${education.map((edu) => renderTemplate`<div class="flex justify-between items-start gap-4 flex-wrap" data-astro-cid-zer3vjcp> <div data-astro-cid-zer3vjcp> <h3 class="font-serif text-lg text-ink" data-astro-cid-zer3vjcp>${edu.degree}</h3> <p class="text-sm font-sans text-ink-light" data-astro-cid-zer3vjcp>${edu.institution}</p> ${edu.notes && renderTemplate`<p class="text-sm font-sans text-ink-light italic" data-astro-cid-zer3vjcp>${edu.notes}</p>`} </div> <span class="text-xs font-sans text-ink/50 uppercase tracking-wider shrink-0" data-astro-cid-zer3vjcp>${edu.year}</span> </div>`)} </div> </section>`} ${languages && languages.length > 0 && renderTemplate`<section data-astro-cid-zer3vjcp> <h2 class="cv-section-head" data-astro-cid-zer3vjcp>Idiomas</h2> <div class="space-y-3" data-astro-cid-zer3vjcp> ${languages.map((l) => renderTemplate`<div class="flex justify-between items-baseline border-b border-ink/10 pb-2 gap-4 flex-wrap" data-astro-cid-zer3vjcp> <span class="font-serif text-ink font-medium shrink-0" data-astro-cid-zer3vjcp>${l.name}</span> <span class="font-sans text-sm text-ink-light italic" data-astro-cid-zer3vjcp>${l.level}</span> </div>`)} </div> </section>`} ${skills && skills.length > 0 && renderTemplate`<section data-astro-cid-zer3vjcp> <h2 class="cv-section-head" data-astro-cid-zer3vjcp>Competencias Docentes y Tecnología</h2> <div class="grid grid-cols-1 md:grid-cols-2 gap-6" data-astro-cid-zer3vjcp> ${[
    skills.slice(0, Math.ceil(skills.length / 2)),
    skills.slice(Math.ceil(skills.length / 2))
  ].map((col) => renderTemplate`<ul class="font-serif text-ink-light leading-relaxed space-y-2 list-none" data-astro-cid-zer3vjcp> ${col.map((skill) => renderTemplate`<li class="pl-4 relative before:content-['–'] before:absolute before:left-0 before:text-earth" data-astro-cid-zer3vjcp>${skill}</li>`)} </ul>`)} </div> </section>`} <section data-astro-cid-zer3vjcp> <h2 class="cv-section-head" data-astro-cid-zer3vjcp>Referencias Profesionales</h2> <p class="font-serif text-ink-light italic" data-astro-cid-zer3vjcp>Disponibles bajo solicitud.</p> </section> </div> <div class="mt-16 pt-8 border-t border-earth/20 flex items-center justify-between print:hidden" data-astro-cid-zer3vjcp> <a href="/es/philosophy" class="text-xs uppercase tracking-widest text-earth hover:text-clay font-sans transition-colors" data-astro-cid-zer3vjcp>
&rarr; Filosofía Educativa
</a> <button onclick="window.print()" class="text-xs font-sans uppercase tracking-widest text-ink/50 hover:text-clay transition-colors flex items-center gap-2" aria-label="Imprimir CV" data-astro-cid-zer3vjcp> <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" stroke-width="1.5" data-astro-cid-zer3vjcp> <rect x="2" y="1" width="8" height="6" rx="0.5" data-astro-cid-zer3vjcp></rect> <path d="M2 7v3a.5.5 0 00.5.5h7a.5.5 0 00.5-.5V7" data-astro-cid-zer3vjcp></path> <path d="M4 5h4M4 8h4M4 9.5h2" data-astro-cid-zer3vjcp></path> </svg>
Imprimir / PDF
</button> </div> </div> ` })}`;
}, "/Users/mac/Documents/01_ProyectoEspanol/SergioUribe.co/website/github/sergiouribeco/src/pages/es/cv.astro", void 0);

const $$file = "/Users/mac/Documents/01_ProyectoEspanol/SergioUribe.co/website/github/sergiouribeco/src/pages/es/cv.astro";
const $$url = "/es/cv";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Cv,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
