import { c as createComponent } from './Layout_Bg3NhFLQ.mjs';
import 'piccolore';
import { m as maybeRenderHead, u as unescapeHTML, a as renderTemplate } from './prerender_U-PYTyhn.mjs';
import 'clsx';

const html = () => "<!-- The CV page is data-driven from index.yaml. This file intentionally has no body prose. To add a personal note or cover statement that appears only in the web version, write it here. -->";

				const frontmatter = {};
				const file = "/Users/mac/Documents/01_ProyectoEspanol/SergioUribe.co/website/github/sergiouribeco/src/content/pages/cv/en.md";
				const url = "/cv/en";
				function rawContent() {
					return "   \n   \n\n<!-- The CV page is data-driven from index.yaml. This file intentionally has no body prose. To add a personal note or cover statement that appears only in the web version, write it here. -->\n";
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
