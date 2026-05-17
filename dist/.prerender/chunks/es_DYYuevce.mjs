import { c as createComponent } from './Layout_Bg3NhFLQ.mjs';
import 'piccolore';
import { m as maybeRenderHead, u as unescapeHTML, a as renderTemplate } from './prerender_U-PYTyhn.mjs';
import 'clsx';

const html = () => "<!-- La página del CV se nutre de index.yaml. Este archivo no tiene cuerpo de texto. Si quieres añadir una nota personal que aparezca solo en la versión web, escríbela aquí. -->";

				const frontmatter = {};
				const file = "/Users/mac/Documents/01_ProyectoEspanol/SergioUribe.co/website/github/sergiouribeco/src/content/pages/cv/es.md";
				const url = "/cv/es";
				function rawContent() {
					return "   \n   \n\n<!-- La página del CV se nutre de index.yaml. Este archivo no tiene cuerpo de texto. Si quieres añadir una nota personal que aparezca solo en la versión web, escríbela aquí. -->\n";
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
