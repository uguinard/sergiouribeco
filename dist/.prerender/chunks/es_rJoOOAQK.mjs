import { c as createComponent } from './Layout_Bg3NhFLQ.mjs';
import 'piccolore';
import { m as maybeRenderHead, u as unescapeHTML, a as renderTemplate } from './prerender_U-PYTyhn.mjs';
import 'clsx';

const html = () => "<p>Recorro esta ruta cada mañana antes de que el calor descienda. Hay algo en la calidad de la luz a esa hora — todavía no dorada, gris y tentativa — que me recuerda al momento justo antes de que un estudiante entienda algo. El casi-ya.</p>\n<div class=\"callout callout-note\" data-callout=\"note\">\n  <div class=\"callout-title\">\n    <span class=\"callout-icon\">📝</span>\n    <span class=\"callout-title-text\">Sobre la luz y el lenguaje</span>\n  </div>\n  <div class=\"callout-content\">\n<p>El casi-ya es lo que busco cuando enseño: el momento preciso en que el lenguaje deja de ser un código y empieza a ser una experiencia sentida.</p>\n</div></div>";

				const frontmatter = {};
				const file = "/Users/mac/Documents/01_ProyectoEspanol/SergioUribe.co/website/github/sergiouribeco/src/content/snapshots/2026/26-03-15-danang-dawn/es.md";
				const url = undefined;
				function rawContent() {
					return "   \n   \n\nRecorro esta ruta cada mañana antes de que el calor descienda. Hay algo en la calidad de la luz a esa hora — todavía no dorada, gris y tentativa — que me recuerda al momento justo antes de que un estudiante entienda algo. El casi-ya.\n\n> [!note] Sobre la luz y el lenguaje\n> El casi-ya es lo que busco cuando enseño: el momento preciso en que el lenguaje deja de ser un código y empieza a ser una experiencia sentida.\n";
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
