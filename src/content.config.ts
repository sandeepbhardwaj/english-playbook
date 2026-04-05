import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const lessons = defineCollection({
  loader: glob({
    base: './src/content/lessons',
    pattern: '**/*.md',
  }),
  schema: z.object({
    slug: z.string(),
    title: z.string(),
    module: z.string(),
    moduleId: z.string(),
    duration: z.string(),
    focus: z.string(),
    level: z.string(),
  }),
});

export const collections = {
  lessons,
};
