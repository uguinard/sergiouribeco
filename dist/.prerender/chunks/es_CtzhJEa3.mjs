import { c as createComponent } from './Layout_Bg3NhFLQ.mjs';
import 'piccolore';
import { m as maybeRenderHead, u as unescapeHTML, a as renderTemplate } from './prerender_U-PYTyhn.mjs';
import 'clsx';

const html = () => "<p>Mi año en Sevilla fue el año en que entendí que la lengua no es neutral. Cada conversación que tuve estaba moldeada por el ritmo de la ciudad — almuerzos largos, tardes eternas, la plaza como sala de estar.</p>\n<p>Mi tesis creció de aquí: si la Cognición 4E tiene razón, el entorno no es el fondo sino el ingrediente. No se puede enseñar el español de una ciudad sin enseñar la ciudad.</p>";

				const frontmatter = {};
				const file = "/Users/mac/Documents/01_ProyectoEspanol/SergioUribe.co/website/github/sergiouribeco/src/content/snapshots/2024/24-11-12-sevilla-olivos/es.md";
				const url = undefined;
				function rawContent() {
					return "   \n   \n\nMi año en Sevilla fue el año en que entendí que la lengua no es neutral. Cada conversación que tuve estaba moldeada por el ritmo de la ciudad — almuerzos largos, tardes eternas, la plaza como sala de estar.\n\nMi tesis creció de aquí: si la Cognición 4E tiene razón, el entorno no es el fondo sino el ingrediente. No se puede enseñar el español de una ciudad sin enseñar la ciudad.\n";
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
