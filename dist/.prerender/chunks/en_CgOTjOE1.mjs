import { c as createComponent } from './Layout_Bg3NhFLQ.mjs';
import 'piccolore';
import { m as maybeRenderHead, u as unescapeHTML, a as renderTemplate } from './prerender_U-PYTyhn.mjs';
import 'clsx';

const html = () => "<p>What does a koala do on Naiyang Beach? This fluffy little friend has traveled from Australia to Colombia, and then to Thailand.</p>\n<p>It’s true, it’s not a real koala. It’s a stuffed animal that my niece gave me while we were in Colombia, and since she couldn’t travel with me, I thought the koala could accompany me on the trip. I would take pictures of him and then send them to my niece.</p>\n<p>I think this way she could have a closer connection to the trip and the landscapes.</p>\n<p>This idea reminded me of the story of a man who traveled the world taking pictures of stuffed animals. The photos conveyed the feeling that the toy was enjoying the journey. These stuffed animals belonged to people who couldn’t travel due to health reasons, and this was a way for them to connect with an adventure that they were part of.</p>";

				const frontmatter = {};
				const file = "/Users/mac/Documents/01_ProyectoEspanol/SergioUribe.co/website/github/sergiouribeco/src/content/snapshots/2025/25-06-29-un-koala-en-tailandia/en.md";
				const url = undefined;
				function rawContent() {
					return "   \n   \n\nWhat does a koala do on Naiyang Beach? This fluffy little friend has traveled from Australia to Colombia, and then to Thailand.\n\nIt's true, it's not a real koala. It's a stuffed animal that my niece gave me while we were in Colombia, and since she couldn't travel with me, I thought the koala could accompany me on the trip. I would take pictures of him and then send them to my niece.\n\nI think this way she could have a closer connection to the trip and the landscapes.\n\nThis idea reminded me of the story of a man who traveled the world taking pictures of stuffed animals. The photos conveyed the feeling that the toy was enjoying the journey. These stuffed animals belonged to people who couldn't travel due to health reasons, and this was a way for them to connect with an adventure that they were part of.\n";
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
