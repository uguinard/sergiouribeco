export const t = {
  en: {
    status: {
      'draft': 'Draft',
      'in-progress': 'In Progress',
      'completed': 'Completed'
    },
    ui: {
      'emotional': 'Emotional Impact',
      'philosophical': 'Philosophical Note',
      'pedagogical': 'Pedagogy',
      'relatedIdeas': 'Related Ideas',
      'relatedProjects': 'Related Projects',
      'tags': 'Tags',
      'backToGarden': '← Back to Garden',
      'backToGeography': '← Back to Geography'
    }
  },
  es: {
    status: {
      'draft': 'Borrador',
      'in-progress': 'En progreso',
      'completed': 'Completado'
    },
    ui: {
      'emotional': 'Impacto Emocional',
      'philosophical': 'Nota Filosófica',
      'pedagogical': 'Pedagogía',
      'relatedIdeas': 'Ideas Relacionadas',
      'relatedProjects': 'Proyectos Relacionados',
      'tags': 'Etiquetas',
      'backToGarden': '← Volver al Jardín',
      'backToGeography': '← Volver a Geografía',
    }
  }
};

export function useTranslations(lang: 'en' | 'es') {
  return function translate(dict: keyof typeof t.en, key: string) {
    return (t[lang][dict] as any)[key] || key;
  }
}
