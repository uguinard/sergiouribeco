export const languages = {
  en: 'English',
  es: 'Español',
};

export const defaultLang = 'en';

export const ui = {
  en: {
    'nav.name': 'Sergio Uribe',
    'nav.geography': 'Field Notes',
    'nav.garden': 'The Lab',
    'nav.philosophy': 'Philosophy',
    'nav.cv': 'CV',
    'nav.snapshots': 'Snapshots',
    'nav.posts': 'Posts',
    'footer.rights': `© ${new Date().getFullYear()} Sergio Uribe. All rights reserved.`,
    'footer.motto': 'Language. Community. Purpose.',
  },
  es: {
    'nav.name': 'Sergio Uribe',
    'nav.geography': 'Cuadernos de Campo',
    'nav.garden': 'El Laboratorio',
    'nav.philosophy': 'Filosofía',
    'nav.cv': 'CV',
    'nav.snapshots': 'Instantes',
    'nav.posts': 'Artículos',
    'footer.rights': `© ${new Date().getFullYear()} Sergio Uribe. Todos los derechos reservados.`,
    'footer.motto': 'Lenguaje. Comunidad. Propósito.',
  },
} as const;
