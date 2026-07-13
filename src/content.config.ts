import { z, defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { snapshotLoader } from "./utils/snapshot-loader";
import { pageLoader } from "./utils/page-loader";

// ─────────────────────────────────────────────────────────────────────────────
// STANDARD STRUCTURE (all pages and collections):
//
//   src/content/[collection]/[slug]/
//     index.yaml   ← metadata, bilingual via .en / .es suffixes
//     en.md        ← English prose (editable from Obsidian)
//     es.md        ← Spanish prose
//     media/       ← images (optional)
//
// pageLoader(lang, base) resolves bilingual fields → flat strings for that lang.
// ─────────────────────────────────────────────────────────────────────────────

// ── pages ─────────────────────────────────────────────────────────────────────
// Single pages: philosophy, cv, home
// Base: src/content/pages/

const pageBase = z.object({
  title: z.string(),
  description: z.string().optional(),
  lastUpdated: z.coerce.date().optional(),
  printable: z.boolean().default(false),
});

// CV is a superset — safe to use for all pages
const pageSchema = pageBase.extend({
  // CV fields
  name: z.string().optional(),
  role: z.string().optional(),
  location: z.string().optional(),
  availableFrom: z.string().optional(),
  linkedin: z.string().url().optional(),
  website: z.string().url().optional(),
  profile: z.string().optional(),
  experience: z.array(z.object({
    role: z.string(),
    period: z.string(),
    location: z.string(),
    highlights: z.array(z.string()),
  })).optional(),
  education: z.array(z.object({
    degree: z.string(),
    institution: z.string(),
    year: z.string(),
    notes: z.string().optional(),
  })).optional(),
  languages: z.array(z.object({
    name: z.string(),
    level: z.string(),
  })).optional(),
  skills: z.array(z.string()).optional(),
});

const pages_en = defineCollection({
  loader: pageLoader('en', './src/content/pages'),
  schema: pageSchema,
});

const pages_es = defineCollection({
  loader: pageLoader('es', './src/content/pages'),
  schema: pageSchema,
});

// ── geography ─────────────────────────────────────────────────────────────────
// Conceptual essays. Base: src/content/geography/

const geographySchema = z.object({
  title: z.string(),
  description: z.string().optional(),
  date: z.coerce.date(),
  tags: z.array(z.string()).default([]),
  relatedIdeas: z.array(z.string()).default([]),
  location: z.string().optional(),
  marginalia: z.object({
    emotional: z.string().optional(),
    philosophical: z.string().optional(),
    pedagogical: z.string().optional(),
  }).optional(),
});

const geography_en = defineCollection({
  loader: pageLoader('en', './src/content/geography'),
  schema: geographySchema,
});

const geography_es = defineCollection({
  loader: pageLoader('es', './src/content/geography'),
  schema: geographySchema,
});

// ── garden ────────────────────────────────────────────────────────────────────
// Lab / process notes. Base: src/content/garden/

const gardenSchema = z.object({
  title: z.string(),
  date: z.coerce.date(),
  tags: z.array(z.string()).default([]),
  status: z.enum(['draft', 'in-progress', 'completed']).default('in-progress'),
  relatedProjects: z.array(z.string()).default([]),
});

const garden_en = defineCollection({
  loader: pageLoader('en', './src/content/garden'),
  schema: gardenSchema,
});

const garden_es = defineCollection({
  loader: pageLoader('es', './src/content/garden'),
  schema: gardenSchema,
});

// ── snapshots ─────────────────────────────────────────────────────────────────
// Photo essays. Year-nested: src/content/snapshots/YYYY/[slug]/
// Uses the existing snapshotLoader (unchanged).

const snapshotSchema = ({ image }: { image: () => z.ZodType<any> }) => z.object({
  title: z.string(),
  description: z.string().optional(),
  draft: z.boolean().default(false),
  date: z.coerce.date(),
  location: z.string().optional(),
  lat: z.number().optional(),
  lng: z.number().optional(),
  cover: image(),
  cover_position: z.string().default('center center'),
  photos: z.array(z.object({
    src: image(),
    caption: z.string().optional(),
    alt: z.string().optional(),
  })).default([]),
  tags: z.array(z.string()).default([]),
});

const snapshots_en = defineCollection({
  loader: snapshotLoader('en'),
  schema: snapshotSchema,
});

const snapshots_es = defineCollection({
  loader: snapshotLoader('es'),
  schema: snapshotSchema,
});

// ── posts ──────────────────────────────────────────────────────────────────────
const postsSchema = ({ image }: { image: () => z.ZodType<any> }) => z.object({
  title: z.string(),
  description: z.string().optional(),
  pubDate: z.coerce.date(),
  category: z.string().default('General'),
  tags: z.array(z.string()).default([]),
  thumbnail: image().optional(),
  draft: z.boolean().default(false),
});

const posts_en = defineCollection({
  loader: pageLoader('en', './src/content/posts'),
  schema: postsSchema,
});

const posts_es = defineCollection({
  loader: pageLoader('es', './src/content/posts'),
  schema: postsSchema,
});

// ── exports ───────────────────────────────────────────────────────────────────

export const collections = {
  pages_en,
  pages_es,
  geography_en,
  geography_es,
  garden_en,
  garden_es,
  snapshots_en,
  snapshots_es,
  posts_en,
  posts_es,
};
