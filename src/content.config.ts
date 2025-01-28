import { glob } from 'astro/loaders';
import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string().max(65),
    date: z.date(),
    description: z.string().max(154),
    tags: z.array(z.string()),
  }),
});

export const collections = { blog };
