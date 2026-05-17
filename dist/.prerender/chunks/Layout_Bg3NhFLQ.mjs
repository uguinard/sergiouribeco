import { A as AstroError, I as InvalidComponentArgs, h as createRenderInstruction, b as addAttribute, a as renderTemplate, r as renderComponent, i as renderHead, c as renderSlot } from './prerender_U-PYTyhn.mjs';
import 'piccolore';
import 'clsx';

function validateArgs(args) {
  if (args.length !== 3) return false;
  if (!args[0] || typeof args[0] !== "object") return false;
  return true;
}
function baseCreateComponent(cb, moduleId, propagation) {
  const name = moduleId?.split("/").pop()?.replace(".astro", "") ?? "";
  const fn = (...args) => {
    if (!validateArgs(args)) {
      throw new AstroError({
        ...InvalidComponentArgs,
        message: InvalidComponentArgs.message(name)
      });
    }
    return cb(...args);
  };
  Object.defineProperty(fn, "name", { value: name, writable: false });
  fn.isAstroComponentFactory = true;
  fn.moduleId = moduleId;
  fn.propagation = propagation;
  return fn;
}
function createComponentWithOptions(opts) {
  const cb = baseCreateComponent(opts.factory, opts.moduleId, opts.propagation);
  return cb;
}
function createComponent(arg1, moduleId, propagation) {
  if (typeof arg1 === "function") {
    return baseCreateComponent(arg1, moduleId, propagation);
  } else {
    return createComponentWithOptions(arg1);
  }
}

async function renderScript(result, id) {
  const inlined = result.inlinedScripts.get(id);
  let content = "";
  if (inlined != null) {
    if (inlined) {
      content = `<script type="module">${inlined}</script>`;
    }
  } else {
    const resolved = await result.resolve(id);
    content = `<script type="module" src="${result.userAssetsBase ? (result.base === "/" ? "" : result.base) + result.userAssetsBase : ""}${resolved}"></script>`;
  }
  return createRenderInstruction({ type: "script", id, content });
}

const ui = {
  en: {
    "nav.name": "Sergio Uribe",
    "nav.geography": "Field Notes",
    "nav.garden": "The Lab",
    "nav.philosophy": "Philosophy",
    "nav.cv": "CV",
    "nav.snapshots": "Snapshots",
    "footer.rights": `© ${(/* @__PURE__ */ new Date()).getFullYear()} Sergio Uribe. All rights reserved.`,
    "footer.motto": "A humanist digital ecosystem."
  },
  es: {
    "nav.name": "Sergio Uribe",
    "nav.geography": "Cuadernos de Campo",
    "nav.garden": "El Laboratorio",
    "nav.philosophy": "Filosofía",
    "nav.cv": "CV",
    "nav.snapshots": "Instantes",
    "footer.rights": `© ${(/* @__PURE__ */ new Date()).getFullYear()} Sergio Uribe. Todos los derechos reservados.`,
    "footer.motto": "Un ecosistema digital humanista."
  }
};

const $$ClientRouter = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$ClientRouter;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>${renderScript($$result, "/Users/mac/Documents/01_ProyectoEspanol/SergioUribe.co/website/github/sergiouribeco/node_modules/astro/components/ClientRouter.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/mac/Documents/01_ProyectoEspanol/SergioUribe.co/website/github/sergiouribeco/node_modules/astro/components/ClientRouter.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Layout;
  const {
    title,
    description = "Ecosistema Digital de Sergio Uribe",
    lang = "en",
    isDarkroom = false
  } = Astro2.props;
  const t = ui[lang];
  return renderTemplate`<html${addAttribute(lang, "lang")}> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>${title} | Sergio Uribe</title><meta name="description"${addAttribute(description, "content")}><link rel="icon" type="image/svg+xml" href="/favicon.svg"><!-- Fonts --><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Albert+Sans:wght@400;700&family=Lora:ital,wght@0,400;0,500;1,400&display=swap" rel="stylesheet">${renderComponent($$result, "ClientRouter", $$ClientRouter, {})}${renderHead()}</head> <body${addAttribute(`min-h-screen selection:bg-earth selection:text-paper antialiased ${isDarkroom ? "darkroom bg-neutral-950 text-neutral-100" : "text-ink bg-sand font-serif"}`, "class")}> ${!isDarkroom && renderTemplate`<!-- Sticky Header -->
      <header class="sticky top-0 z-50 bg-sand/80 backdrop-blur-md border-b border-earth/5 py-4 md:py-6 transition-all duration-300"> <nav class="max-w-5xl mx-auto px-4 md:px-6 flex justify-between items-center font-sans text-xs md:text-sm tracking-widest text-ink-light uppercase"> <a${addAttribute(`/${lang === "en" ? "" : lang}`, "href")} class="hover:text-clay transition-colors duration-300 font-medium tracking-[0.2em] text-ink"> ${t["nav.name"]} </a> <!-- Mobile Menu Toggle --> <button id="menu-toggle" class="md:hidden flex flex-col gap-1.5 p-2 focus:outline-none" aria-label="Toggle Menu"> <span class="w-5 h-[1px] bg-ink transition-all duration-300 origin-center"></span> <span class="w-5 h-[1px] bg-ink transition-all duration-300"></span> <span class="w-5 h-[1px] bg-ink transition-all duration-300 origin-center"></span> </button> <!-- Navigation Menu --> <div id="nav-menu" class="hidden md:flex gap-6 md:gap-8 items-center absolute md:static top-full left-0 w-full md:w-auto bg-sand/95 md:bg-transparent p-8 md:p-0 border-b md:border-none border-earth/10"> <a${addAttribute(`/${lang === "en" ? "" : lang + "/"}geography`, "href")} class="nav-item">${t["nav.geography"]}</a> <a${addAttribute(`/${lang === "en" ? "" : lang + "/"}garden`, "href")} class="nav-item">${t["nav.garden"]}</a> <a${addAttribute(`/${lang === "en" ? "" : lang + "/"}philosophy`, "href")} class="nav-item">${t["nav.philosophy"]}</a> <a${addAttribute(`/${lang === "en" ? "" : lang + "/"}snapshots`, "href")} class="nav-item">${t["nav.snapshots"]}</a> <a${addAttribute(`/${lang === "en" ? "" : lang + "/"}cv`, "href")} class="nav-item">${t["nav.cv"]}</a> <div class="h-3 w-[1px] bg-ink/10 mx-1 hidden md:block"></div> <a${addAttribute(lang === "en" ? `/es${Astro2.url.pathname}` : Astro2.url.pathname.replace(/^\/es/, "") || "/", "href")} class="hover:text-clay transition-colors duration-300 text-earth font-medium"> ${lang === "en" ? "ES" : "EN"} </a> </div> </nav> </header>`} <div${addAttribute(isDarkroom ? "w-full min-h-screen" : "page-content", "class")}> <main${addAttribute(isDarkroom ? "" : "animate-fade-in-up", "class")}> ${renderSlot($$result, $$slots["default"])} </main> </div> ${!isDarkroom && renderTemplate`<footer class="mt-32 pt-12 border-t border-earth/20 font-sans text-xs text-ink-light flex flex-col md:flex-row justify-between gap-4"> <p>${t["footer.rights"]}</p> <p>${t["footer.motto"]}</p> </footer>`} ${isDarkroom && renderTemplate(_a || (_a = __template(["<script>\n        (function() {\n          if (window.__snapshotKeyHandler) {\n            document.removeEventListener('keydown', window.__snapshotKeyHandler, true);\n          }\n\n          window.__snapshotKeyHandler = function(e) {\n            var main = document.querySelector('[data-next-slug]');\n            if (!main) return;\n            var next = main.getAttribute('data-next-slug');\n            var prev = main.getAttribute('data-prev-slug');\n            var lang = main.getAttribute('data-lang');\n            var prefix = lang === 'es' ? '/es' : '';\n\n            if (e.key === 'ArrowDown' && next) { e.preventDefault(); window.location.href = prefix + '/snapshots/' + next; return; }\n            if (e.key === 'ArrowUp'   && prev) { e.preventDefault(); window.location.href = prefix + '/snapshots/' + prev; return; }\n            if (e.key === 'Escape')            { e.preventDefault(); window.location.href = prefix + '/snapshots'; }\n          };\n\n          document.addEventListener('keydown', window.__snapshotKeyHandler, true);\n        })();\n      <\/script>"])))} ${renderScript($$result, "/Users/mac/Documents/01_ProyectoEspanol/SergioUribe.co/website/github/sergiouribeco/src/layouts/Layout.astro?astro&type=script&index=0&lang.ts")} </body> </html>`;
}, "/Users/mac/Documents/01_ProyectoEspanol/SergioUribe.co/website/github/sergiouribeco/src/layouts/Layout.astro", void 0);

export { $$Layout as $, createComponent as c, renderScript as r };
