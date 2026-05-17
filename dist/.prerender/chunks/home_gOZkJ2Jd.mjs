import { c as createComponent } from './Layout_Bg3NhFLQ.mjs';
import 'piccolore';
import { m as maybeRenderHead, b as addAttribute, a as renderTemplate } from './prerender_U-PYTyhn.mjs';
import 'clsx';

const $$MapGame = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$MapGame;
  const { lang = "en" } = Astro2.props;
  const content = {
    en: {
      intro: "Sergio Uribe / Language is a world to inhabit.",
      description: "Navigate his pedagogical cartography. A linguistic-behavioral ecosystem built on 4E Cognition and SENSUM scaffolding.",
      instruction: "Tap a territory to explore the architecture of his mind",
      territories: [
        {
          id: "stories",
          title: "Archipelago of Stories",
          philosophy: "Story before syntax",
          description: "Grammar should emerge from narrative. I immerse students in rich, contextualized Spanish from day one—without translation or isolated exercises. Story provides the emotional architecture that makes acquisition stick.",
          img: "/assets/game/stories.png",
          tagline: '"Everything is meaningful if it is inhabited."'
        },
        {
          id: "senses",
          title: "Highland of Senses",
          philosophy: "Body and Environment",
          description: "Following 4E Cognition, language is not stored in the brain alone. I design lessons that activate the body and the senses, turning acquisition into a lived event where the environment is an active participant.",
          img: "/assets/game/senses.png",
          tagline: '"The body knows the word before the mind does."'
        },
        {
          id: "connection",
          title: "Bridge of Connection",
          philosophy: "Connection first",
          description: "Meaningful interaction is the compass. Activities that feel meaningful get full attention; the destination is rarely the point. Genuine curiosity about people forms the core of my teaching.",
          img: "/assets/game/connection.png",
          tagline: '"A language is not learned — it is shared."'
        },
        {
          id: "research",
          title: "The SENSUM Lab",
          philosophy: "neuroSpanish Methodology",
          description: "A methodology built on applied psycholinguistics. I research how to build AI-generated Comprehensible Input pipelines and multisensory scaffolds that respect the cognitive architecture of the learner.",
          img: "/assets/game/lab.png",
          tagline: '"Acquisition happens at the edge of comfort."'
        }
      ]
    },
    es: {
      intro: "Sergio Uribe / El lenguaje es un mundo a habitar.",
      description: "Navega su cartografía pedagógica. Un ecosistema lingüístico-conductual basado en la Cognición 4E y el andamiaje SENSUM.",
      instruction: "Pulsa un territorio para explorar la arquitectura de su pensamiento",
      territories: [
        {
          id: "stories",
          title: "Archipiélago de Relatos",
          philosophy: "El relato antes que la sintaxis",
          description: "La gramática debe emerger de la narrativa. Sumerjo a los estudiantes en un español rico y contextualizado desde el primer día, sin traducciones ni ejercicios aislados. El relato es la arquitectura emocional que hace que la adquisición permanezca.",
          img: "/assets/game/stories.png",
          tagline: '"Todo es significativo si se habita."'
        },
        {
          id: "senses",
          title: "Tierras de los Sentidos",
          philosophy: "Cuerpo y Entorno",
          description: "Siguiendo la Cognición 4E, el lenguaje no se almacena solo en el cerebro. Diseño lecciones que activan el cuerpo y los sentidos, convirtiendo la adquisición en un evento vivo donde el entorno participa activamente.",
          img: "/assets/game/senses.png",
          tagline: '"El cuerpo conoce la palabra antes que la mente."'
        },
        {
          id: "connection",
          title: "Puente de Encuentro",
          philosophy: "La conexión es lo primero",
          description: "La interacción significativa es la brújula. Las actividades con sentido captan toda la atención; el destino rara vez es el punto. La curiosidad genuina por el otro es el núcleo de mi enseñanza.",
          img: "/assets/game/connection.png",
          tagline: '"Una lengua no se aprende — se comparte."'
        },
        {
          id: "research",
          title: "Laboratorio SENSUM",
          philosophy: "Metodología neuroSpanish",
          description: "Una metodología basada en la psicolingüística aplicada. Investigo cómo construir pipelines de Input Comprensible generados por IA y andamiajes multisensoriales que respeten la arquitectura cognitiva del aprendiz.",
          img: "/assets/game/lab.png",
          tagline: '"La adquisición ocurre al borde del confort."'
        }
      ]
    }
  };
  const t = content[lang] || content.en;
  const territoriesJson = JSON.stringify(t.territories);
  return renderTemplate`${maybeRenderHead()}<div class="game-world relative py-8 px-4"${addAttribute(`{
    selected: null,
    territories: ${territoriesJson},
    get current() {
      return this.territories.find(t => t.id === this.selected) || null;
    },
    open(id) { this.selected = id; },
    close() { this.selected = null; }
  }`, "x-data")} data-astro-cid-74bvc3j7> <!-- Intro Header --> <header class="max-w-4xl mx-auto mb-16 text-center animate-fade-in-up" data-astro-cid-74bvc3j7> <p class="font-sans font-bold text-[10px] tracking-[0.3em] uppercase text-clay mb-4" data-astro-cid-74bvc3j7>${t.intro}</p> <p class="font-serif text-lg md:text-xl text-ink-light leading-relaxed max-w-2xl mx-auto italic border-l-2 border-clay pl-6 py-2 text-left" data-astro-cid-74bvc3j7> ${t.description} </p> </header> <!-- Territory Cards Grid --> <div class="relative max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8" data-astro-cid-74bvc3j7> ${t.territories.map((territory) => renderTemplate`<div class="territory-node group relative cursor-pointer select-none"${addAttribute(`open('${territory.id}')`, "@click")} data-astro-cid-74bvc3j7> <!-- Illustration Frame --> <div class="aspect-square bg-paper border border-earth/10 rounded-2xl overflow-hidden shadow-sm group-hover:shadow-xl transition-all duration-500 transform group-hover:-translate-y-3 relative"${addAttribute(`selected === '${territory.id}' ? 'ring-2 ring-clay shadow-xl -translate-y-3' : ''`, ":class")} data-astro-cid-74bvc3j7> <img${addAttribute(territory.img, "src")}${addAttribute(territory.title, "alt")} class="w-full h-full object-cover transition-all duration-700 group-hover:scale-105" data-astro-cid-74bvc3j7> <!-- Hover overlay --> <div class="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-5" data-astro-cid-74bvc3j7> <p class="text-paper font-sans font-bold text-[9px] tracking-[0.25em] uppercase leading-tight" data-astro-cid-74bvc3j7>${territory.philosophy}</p> </div> <!-- Active ring indicator --> <div class="absolute top-4 right-4 w-3 h-3 rounded-full bg-clay opacity-0 transition-opacity"${addAttribute(`selected === '${territory.id}' ? 'opacity-100' : ''`, ":class")} data-astro-cid-74bvc3j7></div> </div> <!-- Title below card --> <div class="mt-5 text-center px-2" data-astro-cid-74bvc3j7> <h3 class="font-serif text-base text-ink transition-colors duration-300 group-hover:text-clay"${addAttribute(`selected === '${territory.id}' ? 'text-clay' : ''`, ":class")} data-astro-cid-74bvc3j7> ${territory.title} </h3> </div> </div>`)} </div> <!-- Instruction --> <div class="mt-10 text-center opacity-40 pointer-events-none" data-astro-cid-74bvc3j7> <span class="font-sans text-[9px] tracking-[0.4em] uppercase text-earth flex items-center justify-center gap-4" data-astro-cid-74bvc3j7> <span class="h-[1px] w-6 bg-earth inline-block" data-astro-cid-74bvc3j7></span> ${t.instruction} <span class="h-[1px] w-6 bg-earth inline-block" data-astro-cid-74bvc3j7></span> </span> </div> <!-- Fullscreen Modal Overlay — powered entirely by Alpine.js runtime data --> <div x-show="selected !== null" x-transition:enter="transition ease-out duration-300" x-transition:enter-start="opacity-0" x-transition:enter-end="opacity-100" x-transition:leave="transition ease-in duration-200" x-transition:leave-start="opacity-100" x-transition:leave-end="opacity-0" class="fixed inset-0 z-[200] flex items-center justify-center p-6" style="display: none;" @keydown.escape.window="close()" data-astro-cid-74bvc3j7> <!-- Backdrop --> <div class="absolute inset-0 bg-sand/90 backdrop-blur-md" @click="close()" data-astro-cid-74bvc3j7></div> <!-- Modal Card --> <div class="relative bg-paper max-w-2xl w-full p-8 md:p-12 border border-earth/20 shadow-2xl z-10" x-transition:enter="transition ease-out duration-300" x-transition:enter-start="opacity-0 transform scale-95 translate-y-4" x-transition:enter-end="opacity-100 transform scale-100 translate-y-0" data-astro-cid-74bvc3j7> <!-- Close button --> <button @click="close()" class="absolute top-5 right-6 text-earth hover:text-clay text-3xl font-light leading-none transition-colors" aria-label="Close" data-astro-cid-74bvc3j7>&times;</button> <!-- Territory Image in modal --> <div class="w-full aspect-[16/6] overflow-hidden rounded-lg mb-8" data-astro-cid-74bvc3j7> <img :src="current?.img" :alt="current?.title" class="w-full h-full object-cover" data-astro-cid-74bvc3j7> </div> <!-- Content --> <p class="font-sans font-bold text-[10px] tracking-[0.25em] uppercase text-clay mb-3" x-text="current?.philosophy" data-astro-cid-74bvc3j7></p> <h2 class="font-serif text-3xl md:text-4xl text-ink mb-5 leading-tight" x-text="current?.title" data-astro-cid-74bvc3j7></h2> <p class="font-serif text-ink/60 italic text-lg mb-6 border-l-2 border-clay/30 pl-4" x-text="current?.tagline" data-astro-cid-74bvc3j7></p> <p class="font-body text-ink-light leading-relaxed text-base" x-text="current?.description" data-astro-cid-74bvc3j7></p> <div class="mt-8 pt-6 border-t border-earth/10" data-astro-cid-74bvc3j7> <p class="font-sans text-[9px] tracking-[0.3em] text-earth uppercase" data-astro-cid-74bvc3j7>Dimension: 4E Cognition & SENSUM Scaffolding</p> </div> </div> </div> </div>`;
}, "/Users/mac/Documents/01_ProyectoEspanol/SergioUribe.co/website/github/sergiouribeco/src/components/MapGame.astro", void 0);

export { $$MapGame as $ };
