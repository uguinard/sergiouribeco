import { defineCollection, z } from 'astro:content';

const articles = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.date(),
    tags: z.array(z.string()),
    status: z.enum(['draft', 'published', 'in-progress']).default('published'),
    readTime: z.string().optional(),
    featured: z.boolean().default(false),
  }),
});

const portfolio = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    role: z.string(),
    organization: z.string(),
    period: z.string(),
    category: z.enum(['experience', 'curriculum', 'accreditation']),
    summary: z.string(),
    highlights: z.array(z.string()).optional(),
    tags: z.array(z.string()),
    featured: z.boolean().default(true),
    order: z.number().default(0),
  }),
});

export const collections = {
  articles,
  portfolio,
};
