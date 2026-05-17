import { c as createComponent } from './Layout_Bg3NhFLQ.mjs';
import 'piccolore';
import { m as maybeRenderHead, u as unescapeHTML, a as renderTemplate } from './prerender_U-PYTyhn.mjs';
import 'clsx';

const html = () => "<p>¿Qué hace un koala en la playa de Naiyang? Este esponjoso amiguito ha viajado desde Australia a Colombia y de ahí hasta Tailandia. Es cierto, no se trata de un verdadero Koala. Es un peluche que me regaló mi sobrina estando en Colombia y como ella no podía ir de viaje conmigo, se me ocurrió que el koalita me podría acompañar en el viaje. Le sacaría fotos a él para luego enviárselas a mi sobrina. Pienso que de esta manera ella podría tener mayor cercanía y conexión con el viaje y los paisajes.</p>\n<p>Esta idea me recordó a la historia de un señor que viajaba por el mundo tomando fotos de peluches. Las fotos transmitían la sensación de que el muñeco estaba disfrutando de la travesía. Estos felpudos pertenecían a gente que no podía viajar por motivos de salud, y esta era una forma de conectar con una aventura de la que ellos eran partícipes.</p>\n<div class=\"callout callout-note\" data-callout=\"note\">\n  <div class=\"callout-title\">\n    <span class=\"callout-icon\">📝</span>\n    <span class=\"callout-title-text\">El Nui-dori</span>\n  </div>\n  <div class=\"callout-content\">\n<p>El <strong>Nui-dori</strong> (ぬい撮り) es la práctica fotográfica de retratar peluches en escenarios del mundo real, capturándolos como si fueran <strong>protagonistas vivos</strong> de una escena y no simples objetos. A diferencia de una foto casual, esta técnica utiliza ángulos creativos y accesorios a escala para que el juguete parezca estar interactuando con su entorno, ya sea comiendo en un restaurante, admirando un paisaje o viajando. Es una forma de <strong>narrativa visual</strong> donde el dueño actúa como documentalista de las aventuras de su acompañante inanimado, compartiendo los resultados en redes sociales como un diario de viaje alternativo y personal.</p>\n</div></div>";

				const frontmatter = {};
				const file = "/Users/mac/Documents/01_ProyectoEspanol/SergioUribe.co/website/github/sergiouribeco/src/content/snapshots/2025/25-06-29-un-koala-en-tailandia/es.md";
				const url = undefined;
				function rawContent() {
					return "¿Qué hace un koala en la playa de Naiyang? Este esponjoso amiguito ha viajado desde Australia a Colombia y de ahí hasta Tailandia. Es cierto, no se trata de un verdadero Koala. Es un peluche que me regaló mi sobrina estando en Colombia y como ella no podía ir de viaje conmigo, se me ocurrió que el koalita me podría acompañar en el viaje. Le sacaría fotos a él para luego enviárselas a mi sobrina. Pienso que de esta manera ella podría tener mayor cercanía y conexión con el viaje y los paisajes.\n\nEsta idea me recordó a la historia de un señor que viajaba por el mundo tomando fotos de peluches. Las fotos transmitían la sensación de que el muñeco estaba disfrutando de la travesía. Estos felpudos pertenecían a gente que no podía viajar por motivos de salud, y esta era una forma de conectar con una aventura de la que ellos eran partícipes.\n\n> [!note] El Nui-dori\n> El **Nui-dori** (ぬい撮り) es la práctica fotográfica de retratar peluches en escenarios del mundo real, capturándolos como si fueran **protagonistas vivos** de una escena y no simples objetos. A diferencia de una foto casual, esta técnica utiliza ángulos creativos y accesorios a escala para que el juguete parezca estar interactuando con su entorno, ya sea comiendo en un restaurante, admirando un paisaje o viajando. Es una forma de **narrativa visual** donde el dueño actúa como documentalista de las aventuras de su acompañante inanimado, compartiendo los resultados en redes sociales como un diario de viaje alternativo y personal.\n\n";
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
