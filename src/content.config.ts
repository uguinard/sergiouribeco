import { z, defineCollection } from "astro:content";
import { glob } from "astro/loaders";

const geography = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/geography" }),
  schema: z.object({
    title: z.object({ en: z.string(), es: z.string() }),
    description: z.object({ en: z.string(), es: z.string() }).optional(),
    date: z.date(),
    tags: z.object({ en: z.array(z.string()).default([]), es: z.array(z.string()).default([]) }),
    relatedIdeas: z.array(z.string()).default([]),
    location: z.string().optional(),
    // Marginalia
    marginalia: z.object({
      emotional: z.object({ en: z.string().optional(), es: z.string().optional() }).optional(),
      philosophical: z.object({ en: z.string().optional(), es: z.string().optional() }).optional(),
      pedagogical: z.object({ en: z.string().optional(), es: z.string().optional() }).optional(),
    }).optional()
  })
});

const garden = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/garden" }),
  schema: z.object({
    title: z.object({ en: z.string(), es: z.string() }),
    date: z.date(),
    tags: z.object({ en: z.array(z.string()).default([]), es: z.array(z.string()).default([]) }),
    status: z.enum(['draft', 'in-progress', 'completed']).default('in-progress'),
    relatedProjects: z.array(z.string()).default([]),
  })
});

export const collections = {
  geography,
  garden,
};
