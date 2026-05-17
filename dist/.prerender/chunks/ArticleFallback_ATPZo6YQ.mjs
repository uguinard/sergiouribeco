import { c as createComponent } from './Layout_Bg3NhFLQ.mjs';
import 'piccolore';
import { c as renderSlot, a as renderTemplate, d as defineScriptVars, b as addAttribute, m as maybeRenderHead } from './prerender_U-PYTyhn.mjs';
import 'clsx';

const $$En = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$En;
  const isEn = !Astro2.url.pathname.startsWith("/es");
  return renderTemplate`${isEn && renderTemplate`${renderSlot($$result, $$slots["default"])}`}`;
}, "/Users/mac/Documents/01_ProyectoEspanol/SergioUribe.co/website/github/sergiouribeco/src/components/En.astro", void 0);

const $$Es = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Es;
  const isEs = Astro2.url.pathname.startsWith("/es");
  return renderTemplate`${isEs && renderTemplate`${renderSlot($$result, $$slots["default"])}`}`;
}, "/Users/mac/Documents/01_ProyectoEspanol/SergioUribe.co/website/github/sergiouribeco/src/components/Es.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$ImmersiveViewer = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$ImmersiveViewer;
  const { image, alt = "360 Immersive Panorama", height = "400px" } = Astro2.props;
  const containerId = `panorama-${Math.random().toString(36).substring(2, 9)}`;
  return renderTemplate(_a || (_a = __template(["", '<div class="immersive-viewer my-12 relative border border-earth/20 rounded-sm overflow-hidden shadow-sm group"> <div', "", ' class="bg-ink/5 relative z-10"></div> <div class="absolute inset-x-0 bottom-0 py-2 px-4 bg-ink/80 backdrop-blur-sm text-sand text-xs font-sans z-20 flex justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300"> <span>Comprehensible Input Environment</span> <span>Drag to look around</span> </div> </div> <script src="https://cdn.jsdelivr.net/npm/pannellum@2.5.6/build/pannellum.js"><\/script> <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/pannellum@2.5.6/build/pannellum.css"> <script>(function(){', '\n  // Initialize on load to avoid blocking render\n  document.addEventListener("DOMContentLoaded", () => {\n    if (window.pannellum) {\n      window.pannellum.viewer(containerId, {\n        "type": "equirectangular",\n        "panorama": image,\n        "autoLoad": true,\n        "title": alt,\n        "compass": false,\n        "showControls": true,\n        "mouseZoom": false,\n        "keyboardZoom": false,\n      });\n    }\n  });\n})();<\/script>'])), maybeRenderHead(), addAttribute(containerId, "id"), addAttribute(`height: ${height}; width: 100%;`, "style"), defineScriptVars({ containerId, image, alt }));
}, "/Users/mac/Documents/01_ProyectoEspanol/SergioUribe.co/website/github/sergiouribeco/src/components/ImmersiveViewer.astro", void 0);

const $$ArticleFallback = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$ArticleFallback;
  const { lang = "en" } = Astro2.props;
  const text = {
    en: {
      emoji: "🌱",
      title: "Under botanical review",
      description: "We are cultivating this space to improve your experience. An issue prevented this article from loading properly."
    },
    es: {
      emoji: "🌱",
      title: "Bajo revisión botánica",
      description: "Estamos cultivando este espacio para mejorar tu experiencia. Un problema impidió que este artículo cargara correctamente."
    }
  };
  const currentText = text[lang];
  return renderTemplate`${maybeRenderHead()}<div class="my-12 p-8 md:p-12 border border-earth/20 bg-earth/5 rounded-sm flex flex-col items-center justify-center text-center animate-fade-in-up"> <span class="text-4xl mb-6 block">${currentText.emoji}</span> <h3 class="text-2xl font-serif text-ink tracking-tight mb-3"> ${currentText.title} </h3> <p class="text-ink-light font-sans text-sm max-w-md leading-relaxed"> ${currentText.description} </p> </div>`;
}, "/Users/mac/Documents/01_ProyectoEspanol/SergioUribe.co/website/github/sergiouribeco/src/components/ArticleFallback.astro", void 0);

export { $$ImmersiveViewer as $, $$Es as a, $$En as b, $$ArticleFallback as c };
