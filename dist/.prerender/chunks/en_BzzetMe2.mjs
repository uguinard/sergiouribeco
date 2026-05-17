import { c as createComponent } from './Layout_Bg3NhFLQ.mjs';
import 'piccolore';
import { m as maybeRenderHead, u as unescapeHTML, a as renderTemplate } from './prerender_U-PYTyhn.mjs';
import 'clsx';

const html = () => "<p>I cycle this route every morning before the heat descends. There is something about the quality of light at that hour — not golden yet, still gray and tentative — that reminds me of the moment before a student understands something. The almost-there.</p>\n<div class=\"callout callout-note\" data-callout=\"note\">\n  <div class=\"callout-title\">\n    <span class=\"callout-icon\">📝</span>\n    <span class=\"callout-title-text\">On light and language</span>\n  </div>\n  <div class=\"callout-content\">\n<p>The almost-there is what I look for when I teach: the precise moment when language stops being a code and starts being a felt experience.</p>\n</div></div>";

				const frontmatter = {};
				const file = "/Users/mac/Documents/01_ProyectoEspanol/SergioUribe.co/website/github/sergiouribeco/src/content/snapshots/2026/26-03-15-danang-dawn/en.md";
				const url = undefined;
				function rawContent() {
					return "   \n   \n\nI cycle this route every morning before the heat descends. There is something about the quality of light at that hour — not golden yet, still gray and tentative — that reminds me of the moment before a student understands something. The almost-there.\n\n> [!note] On light and language\n> The almost-there is what I look for when I teach: the precise moment when language stops being a code and starts being a felt experience.\n";
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
