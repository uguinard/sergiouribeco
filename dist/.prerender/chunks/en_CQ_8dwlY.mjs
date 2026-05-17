import { c as createComponent } from './Layout_Bg3NhFLQ.mjs';
import 'piccolore';
import { m as maybeRenderHead, u as unescapeHTML, a as renderTemplate } from './prerender_U-PYTyhn.mjs';
import 'clsx';

const html = () => "<p>Today I started defining the core architecture for the new personal website. The goal is not just to build a portfolio, but a <strong>digital cognitive environment</strong>.</p>\n<p>I realized that keeping a separation between <em>Geography</em> (the ideas) and <em>Garden</em> (the process) mirrors the dichotomy of theory and practice.</p>\n<p>Next steps involve integrating a 360 photography viewer completely asynchronously to not block the main reading thread.</p>";

				const frontmatter = {};
				const file = "/Users/mac/Documents/01_ProyectoEspanol/SergioUribe.co/website/github/sergiouribeco/src/content/garden/designing-core/en.md";
				const url = undefined;
				function rawContent() {
					return "   \n   \n\nToday I started defining the core architecture for the new personal website. The goal is not just to build a portfolio, but a **digital cognitive environment**.\n\nI realized that keeping a separation between *Geography* (the ideas) and *Garden* (the process) mirrors the dichotomy of theory and practice.\n\nNext steps involve integrating a 360 photography viewer completely asynchronously to not block the main reading thread.\n";
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
