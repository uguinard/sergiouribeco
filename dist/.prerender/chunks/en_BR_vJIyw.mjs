import { c as createComponent } from './Layout_Bg3NhFLQ.mjs';
import 'piccolore';
import { m as maybeRenderHead, u as unescapeHTML, a as renderTemplate } from './prerender_U-PYTyhn.mjs';
import 'clsx';

const html = () => "<p>My year in Sevilla was the year I understood that language is not neutral. Every conversation I had was shaped by the rhythm of the city — slow lunches, long evenings, the plaza as a living room.</p>\n<p>My thesis grew out of this: if 4E Cognition is right, then the environment is not backdrop but ingredient. You cannot teach the Spanish of a city without teaching the city.</p>";

				const frontmatter = {};
				const file = "/Users/mac/Documents/01_ProyectoEspanol/SergioUribe.co/website/github/sergiouribeco/src/content/snapshots/2024/24-11-12-sevilla-olivos/en.md";
				const url = undefined;
				function rawContent() {
					return "   \n   \n\nMy year in Sevilla was the year I understood that language is not neutral. Every conversation I had was shaped by the rhythm of the city — slow lunches, long evenings, the plaza as a living room.\n\nMy thesis grew out of this: if 4E Cognition is right, then the environment is not backdrop but ingredient. You cannot teach the Spanish of a city without teaching the city.\n";
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
