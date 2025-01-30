import { glob } from 'astro/loaders';
import { defineCollection, z } from 'astro:content';
import { author } from './lib/utils';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: ({ image }) =>
    z.object({
      title: z.string().max(65),
      date: z.date(),
      description: z.string().max(154),
      published: z.boolean().default(false),
      cover: image().optional(),
      tags: z.array(z.string()),
      author: z.string().default('dai').optional(),
    }),
});

export const collections = { blog };
