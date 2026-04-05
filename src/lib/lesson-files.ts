import { getCollection, type CollectionEntry } from 'astro:content';

export interface LessonFrontmatter {
  slug: string;
  title: string;
  module: string;
  moduleId: string;
  duration: string;
  focus: string;
  level: string;
}

export type LessonRecord = CollectionEntry<'lessons'>;

let lessonCache: LessonRecord[] | null = null;

export async function loadLessons() {
  if (lessonCache) {
    return lessonCache;
  }

  lessonCache = await getCollection('lessons');

  return lessonCache;
}
