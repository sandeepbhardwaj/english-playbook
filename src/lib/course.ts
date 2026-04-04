import curriculumData from '../data/curriculum.json';
import type { LessonRecord } from './lesson-files';

export type CurriculumModule = (typeof curriculumData.modules)[number];
export type CurriculumLesson = CurriculumModule['lessons'][number];
export type LessonNavigationItem = ReturnType<typeof getLessonMeta> & {
  href: string;
};

export const curriculumModules = curriculumData.modules;
export const moduleOrder = curriculumModules.map((module) => module.id);
export const lessonOrder = curriculumModules.flatMap((module) =>
  module.lessons.map((lesson) => lesson.id),
);

const lessonOrderIndex = new Map(lessonOrder.map((slug, index) => [slug, index]));

export function getModule(moduleId: string) {
  return curriculumModules.find((module) => module.id === moduleId);
}

export function getLessonMeta(slug: string) {
  for (const module of curriculumModules) {
    const lesson = module.lessons.find((item) => item.id === slug);
    if (lesson) {
      return {
        ...lesson,
        moduleId: module.id,
        moduleTitle: module.title,
        moduleLevel: module.level,
        moduleDuration: module.duration,
      };
    }
  }

  return undefined;
}

export function compareLessonOrder(a: string, b: string) {
  const left = lessonOrderIndex.get(a) ?? Number.MAX_SAFE_INTEGER;
  const right = lessonOrderIndex.get(b) ?? Number.MAX_SAFE_INTEGER;

  return left - right;
}

export function sortLessonEntries(entries: LessonRecord[]) {
  return [...entries].sort((left, right) =>
    compareLessonOrder(left.data.slug, right.data.slug),
  );
}

export function getAdjacentLessons(slug: string): {
  previous: LessonNavigationItem | undefined;
  next: LessonNavigationItem | undefined;
} {
  const currentIndex = lessonOrderIndex.get(slug);

  if (currentIndex === undefined) {
    return {
      previous: undefined,
      next: undefined,
    };
  }

  const previousSlug = lessonOrder[currentIndex - 1];
  const nextSlug = lessonOrder[currentIndex + 1];

  const previousMeta = previousSlug ? getLessonMeta(previousSlug) : undefined;
  const nextMeta = nextSlug ? getLessonMeta(nextSlug) : undefined;

  return {
    previous: previousMeta
      ? {
          ...previousMeta,
          href: `/lessons/${previousMeta.id}`,
        }
      : undefined,
    next: nextMeta
      ? {
          ...nextMeta,
          href: `/lessons/${nextMeta.id}`,
        }
      : undefined,
  };
}
