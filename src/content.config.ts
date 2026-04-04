import { defineCollection, z } from 'astro:content';

const lessonsCollection = defineCollection({
  type: 'content',
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
  lessons: lessonsCollection,
};
