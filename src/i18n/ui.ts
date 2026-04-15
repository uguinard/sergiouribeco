export const languages = {
  en: 'English',
  es: 'Español',
};

export const defaultLang = 'en';

export const ui = {
  en: {
    'nav.name': 'Sergio Uribe',
    'nav.geography': 'Geography',
    'nav.garden': 'Garden',
    'nav.philosophy': 'Philosophy',
    'nav.cv': 'CV',
    'footer.rights': `© ${new Date().getFullYear()} Sergio Uribe. All rights reserved.`,
    'footer.motto': 'A humanist digital ecosystem.',
  },
  es: {
    'nav.name': 'Sergio Uribe',
    'nav.geography': 'Geografía',
    'nav.garden': 'Jardín',
    'nav.philosophy': 'Filosofía',
    'nav.cv': 'CV',
    'footer.rights': `© ${new Date().getFullYear()} Sergio Uribe. Todos los derechos reservados.`,
    'footer.motto': 'Un ecosistema digital humanista.',
  },
} as const;
