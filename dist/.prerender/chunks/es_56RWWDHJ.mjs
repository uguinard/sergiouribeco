import { c as createComponent } from './Layout_Bg3NhFLQ.mjs';
import 'piccolore';
import { m as maybeRenderHead, u as unescapeHTML, a as renderTemplate } from './prerender_U-PYTyhn.mjs';
import 'clsx';

const html = () => "<p>El viento arrastra historias antiguas aquí. Cuando te paras en medio de las dunas, el concepto de tiempo comienza a dilatarse. Te das cuenta de que tu ritmo acelerado es una ilusión creada por la sociedad moderna.</p>\n<immersiveviewer image=\"https://pannellum.org/images/alma.jpg\" alt=\"Un paisaje árido de gran altitud que representa la soledad\">\n<p>En este vasto vacío, la mente por fin tiene espacio para estirarse. Es aquí donde entendí que el diseño cognitivo debe incluir espacios vacíos. De la misma manera en que una composición musical depende de los silencios para darle significado a las notas, una experiencia de aprendizaje requiere de <strong>silencio</strong> para permitir la integración.</p>\n<p>Recordé haber leído sobre la <a class=\"internal new\" href=\"/soledad\">soledad</a> y en qué difiere del aislamiento. La soledad es la elección deliberada de estar a solas con los propios pensamientos. Aquí, la soledad se siente menos como una opción y más como un abrazo gentil que emana del paisaje mismo.</p>\n<blockquote>\n<p>“Para entender el mundo, a veces debes darle la espalda.”</p>\n</blockquote></immersiveviewer>";

				const frontmatter = {};
				const file = "/Users/mac/Documents/01_ProyectoEspanol/SergioUribe.co/website/github/sergiouribeco/src/content/geography/first-journey/es.md";
				const url = undefined;
				function rawContent() {
					return "   \n   \n\nEl viento arrastra historias antiguas aquí. Cuando te paras en medio de las dunas, el concepto de tiempo comienza a dilatarse. Te das cuenta de que tu ritmo acelerado es una ilusión creada por la sociedad moderna.\n\n<ImmersiveViewer image=\"https://pannellum.org/images/alma.jpg\" alt=\"Un paisaje árido de gran altitud que representa la soledad\" />\n\nEn este vasto vacío, la mente por fin tiene espacio para estirarse. Es aquí donde entendí que el diseño cognitivo debe incluir espacios vacíos. De la misma manera en que una composición musical depende de los silencios para darle significado a las notas, una experiencia de aprendizaje requiere de **silencio** para permitir la integración.\n\nRecordé haber leído sobre la [[soledad]] y en qué difiere del aislamiento. La soledad es la elección deliberada de estar a solas con los propios pensamientos. Aquí, la soledad se siente menos como una opción y más como un abrazo gentil que emana del paisaje mismo.\n\n> \"Para entender el mundo, a veces debes darle la espalda.\"\n";
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
