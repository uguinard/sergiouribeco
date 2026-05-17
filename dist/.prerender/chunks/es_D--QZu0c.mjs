import { c as createComponent } from './Layout_Bg3NhFLQ.mjs';
import 'piccolore';
import { m as maybeRenderHead, u as unescapeHTML, a as renderTemplate } from './prerender_U-PYTyhn.mjs';
import 'clsx';

const html = () => "<p>Hoy comencé a definir la arquitectura central del nuevo sitio web personal. El objetivo no es solo construir un portafolio, sino un <strong>entorno cognitivo digital</strong>.</p>\n<p>Me he dado cuenta de que mantener una separación entre <em>Geografía</em> (las ideas) y <em>Jardín</em> (el ecosistema práctico) refleja perfectamente la dicotomía entre la teoría y la práctica pedagógica.</p>\n<p>Los próximos pasos involucran integrar un visor interactivo de fotografía 360 de forma completamente asíncrona para no bloquear el hilo principal de lectura.</p>";

				const frontmatter = {};
				const file = "/Users/mac/Documents/01_ProyectoEspanol/SergioUribe.co/website/github/sergiouribeco/src/content/garden/designing-core/es.md";
				const url = undefined;
				function rawContent() {
					return "   \n   \n\nHoy comencé a definir la arquitectura central del nuevo sitio web personal. El objetivo no es solo construir un portafolio, sino un **entorno cognitivo digital**.\n\nMe he dado cuenta de que mantener una separación entre *Geografía* (las ideas) y *Jardín* (el ecosistema práctico) refleja perfectamente la dicotomía entre la teoría y la práctica pedagógica.\n\nLos próximos pasos involucran integrar un visor interactivo de fotografía 360 de forma completamente asíncrona para no bloquear el hilo principal de lectura.\n";
				}
				async function compiledContent() {
					return await html();
				}
				function getHeadings() {
					return [];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html())}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
