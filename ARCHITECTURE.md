# Sergio Uribe Website Architecture

## Overview
This is a multilingual personal website built with Astro 6.1.3, featuring content organized by type (pages, geography, garden, snapshots) with bilingual support (English/Spanish) using YAML frontmatter and Markdown/MDX files.

## Technology Stack
- **Framework**: Astro 6.1.3
- **Styling**: Tailwind CSS 4.2.2 with Typography plugin
- **Interactivity**: Alpine.js 3.15.11
- **Content Processing**: 
  - MDX support via `@astrojs/mdx`
  - YAML parsing via `js-yaml`
  - Wiki-link processing via `remark-wiki-link`
- **Build Tools**: Vite (built into Astro), TypeScript

## Content Structure

### Core Principle
All content follows a standardized structure:
```
src/content/[collection]/[slug]/
  index.yaml   ← metadata, bilingual via .en / .es suffixes
  en.md        ← English prose (editable from Obsidian)
  es.md        ← Spanish prose
  media/       ← images (optional)
```

### Collection Types

#### 1. Pages (`src/content/pages/`)
Static pages like philosophy, CV, home.
- **Schema**: Extends base page with CV-specific fields
- **Languages**: English (`pages_en`), Spanish (`pages_es`)
- **Example**: `src/content/pages/philosophy/`
  - `index.yaml`: Contains title, description, metadata
  - `en.md`: English content
  - `es.md`: Spanish content

#### 2. Geography (`src/content/geography/`)
Conceptual essays about places and journeys.
- **Schema**: Includes date, location, tags, related ideas, marginalia
- **Languages**: English (`geography_en`), Spanish (`geography_es`)
- **Example**: `src/content/geography/first-journey/`

#### 3. Garden (`src/content/garden/`)
Lab/process notes and documentation.
- **Schema**: Includes date, tags, status (draft/in-progress/completed), related projects
- **Languages**: English (`garden_en`), Spanish (`garden_es`)
- **Example**: `src/content/garden/limonysal/`, `src/content/garden/designing-core/`

#### 4. Snapshots (`src/content/snapshots/`)
Photo essays organized by year.
- **Structure**: Year-nested: `src/content/snapshots/YYYY/[slug]/`
- **Schema**: Includes title, description, date, location, coordinates, cover image, photos array (with src, caption, alt), tags
- **Languages**: English (`snapshots_en`), Spanish (`snapshots_es`)
- **Example**: `src/content/snapshots/2025/25-06-29-un-koala-en-tailandia/`

### Bilingual Field Convention
In `index.yaml` files:
- Language-specific fields: `title.en`, `title.es`, `description.en`, `description.es`
- Plain fields (shared): `date`, `location`, `lat`, `lng`, `cover`, `cover_position`, `tags`
- For arrays like `tags`: Language-specific arrays (`tags.en`, `tags.es`)
- For nested objects like `photos[]`: Language-specific fields on nested properties (`photos[].alt.en`, `photos[].caption.en`)

## Content Loaders

### Page Loader (`src/utils/page-loader.ts`)
Loads content for pages, geography, and garden collections.
- Reads `.md` files for content
- Merges with `index.yaml` metadata
- Handles bilingual field resolution
- Supports frontmatter in `.md` files that can override `index.yaml`

### Snapshot Loader (`src/utils/snapshot-loader.ts`)
Specialized loader for snapshots collection.
- Follows pattern: `*/*/${lang}.md` to find content files
- Reads sibling `index.yaml` for metadata
- Resolves bilingual fields from YAML
- Merges photos: `index.yaml` provides `src`, `.md` files can override `alt`/`caption`
- Validates through Astro's schema system
- Renders markdown content

## Key Features

### Media Handling
- Images stored in `media/` subdirectories within content folders
- Referenced via relative paths like `./media/IMG_20250629_103738.webp`
- Custom sync-photos.py script helps manage photo references in content

### Internationalization
- Built-in support for English (`en`) and Spanish (`es`)
- Language detection via URL prefix: `/en/`, `/es/` or root (defaults to Spanish?)
- Content language determined by loader context

### Development Workflow
- Content editable in Obsidian (note the `.obsidian` plugin configuration)
- Local development: `npm run dev` (runs `astro dev`)
- Preview: `npm run preview` (runs `astro preview`)
- Build: `npm run build` (runs `astro build`)

## Custom Scripts

### sync-photos.py
Python utility for managing photo references in snapshot content:
- Scans media directory for images matching date patterns
- Updates YAML frontmatter in markdown files with photo references
- Preserves existing photos and their metadata (alt, caption)
- Removes references to photos that no longer exist in media folder
- Handles both old markdown frontmatter format and new index.yaml format

## Design Decisions

### Why This Structure?
1. **Separation of Concerns**: Metadata (YAML) vs Content (Markdown)
2. **Bilingual First**: Language variants treated as first-class citizens
3. **Obsidian Friendly**: Standard Markdown/YAML format works natively in Obsidian
4. **Scalable**: Easy to add new content types or languages
5. **Astro Native**: Leverages Astro's content collection system effectively

### Frontmatter vs index.yaml Migration
The site is transitioning from storing frontmatter directly in `.md` files to using centralized `index.yaml` files:
- **Old format**: Frontmatter in `.md` files (still supported for backward compatibility)
- **New format**: Metadata in `index.yaml`, prose in `.md` files
- Loaders handle both formats gracefully

## File Examples

### index.yaml (philosophy)
```yaml
title.en: "Educational Philosophy"
title.es: "Filosofía Educativa"
description.en: "Language is not a different set of labels for the same reality — it is a different vision of reality altogether."
description.es: "La lengua no es un conjunto diferente de etiquetas para la misma realidad — es una visión diferente de la realidad en su totalidad."
lastUpdated: 2026-04-01
printable: true
```

### en.md (philosophy)
```markdown
## Core Belief

The medium is the message...

[Rest of English content]
```

### es.md (philosophy)
```markdown
## Creencia Fundamental

El medio es el mensaje...

[Rest of Spanish content]
```

### index.yaml (snapshot)
```yaml
date: 2025-06-29
location: "Phuket, Thailand"
lat: 8.095945
lng: 98.298512
cover: ./media/IMG_20250629_103738.webp
cover_position: right
title.en: "A Koala in Thailand"
title.es: "Un Koala en Tailandia"
description.en: "Are there any koalas in Thailand?"
description.es: "¿Acaso hay koalas en Tailandia?"
tags.en: [thailand, animals, koala]
tags.es: [tailandia, animales, koala]
photos:
  - src: ./media/IMG_20250629_103738.webp
  - src: ./media/IMG_20250629_110030.webp
  # ... more photos
```

## Future Considerations
1. **More Languages**: Structure supports adding additional language variants
2. **Content Types**: Easy to add new collections following the same pattern
3. **Media Management**: Potential for automated image optimization/resizing
4. **Caching**: Could integrate with Astro's content caching for larger sites
5. **Accessibility**: Ensure all images have proper alt text in both languages

---
*Document generated based on codebase inspection as of 2026-04-24*