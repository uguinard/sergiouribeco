import { c as createComponent } from './Layout_Bg3NhFLQ.mjs';
import 'piccolore';
import { m as maybeRenderHead, u as unescapeHTML, a as renderTemplate } from './prerender_U-PYTyhn.mjs';
import 'clsx';

const html = () => "<p>It seems difficult that two elements complement each other so well.</p>\n<immersiveviewer image=\"https://pannellum.org/images/alma.jpg\" alt=\"A barren, high-altitude landscape representing solitude\">\n<p>In this vast emptiness, the mind finally has room to stretch. This is where I understood that cognitive design must include empty spaces. Just as a musical composition relies on rests to give notes their meaning, a learning experience requires <strong>silence</strong> to allow integration.</p>\n<p>I remembered reading about <a class=\"internal new\" href=\"/solitude\">solitude</a> and how it differs from loneliness. Solitude is the deliberate choice to be alone with one’s thoughts. Here, solitude feels less like a choice and more like a gentle embrace from the landscape itself.</p>\n<blockquote>\n<p>“To understand the world, you must sometimes turn your back on it.”</p>\n</blockquote></immersiveviewer>";

				const frontmatter = {};
				const file = "/Users/mac/Documents/01_ProyectoEspanol/SergioUribe.co/website/github/sergiouribeco/src/content/garden/limonysal/en.md";
				const url = undefined;
				function rawContent() {
					return "   \n   \n\nIt seems difficult that two elements complement each other so well.\n\n<ImmersiveViewer image=\"https://pannellum.org/images/alma.jpg\" alt=\"A barren, high-altitude landscape representing solitude\" />\n\nIn this vast emptiness, the mind finally has room to stretch. This is where I understood that cognitive design must include empty spaces. Just as a musical composition relies on rests to give notes their meaning, a learning experience requires **silence** to allow integration.\n\nI remembered reading about [[solitude]] and how it differs from loneliness. Solitude is the deliberate choice to be alone with one's thoughts. Here, solitude feels less like a choice and more like a gentle embrace from the landscape itself.\n\n> \"To understand the world, you must sometimes turn your back on it.\"\n";
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
