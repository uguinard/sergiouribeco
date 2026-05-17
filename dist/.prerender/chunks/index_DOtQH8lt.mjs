import { c as createComponent, $ as $$Layout } from './Layout_Bg3NhFLQ.mjs';
import 'piccolore';
import { r as renderComponent, a as renderTemplate, m as maybeRenderHead } from './prerender_U-PYTyhn.mjs';
import { $ as $$MapGame } from './home_gOZkJ2Jd.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Home", "data-astro-cid-j7pv25f6": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="screen-fill" data-astro-cid-j7pv25f6> ${renderComponent($$result2, "MapGame", $$MapGame, { "data-astro-cid-j7pv25f6": true })} </div> ` })}`;
}, "/Users/mac/Documents/01_ProyectoEspanol/SergioUribe.co/website/github/sergiouribeco/src/pages/index.astro", void 0);

const $$file = "/Users/mac/Documents/01_ProyectoEspanol/SergioUribe.co/website/github/sergiouribeco/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
