import fs from 'fs';
import path from 'path';

import matter from 'gray-matter';
import MarkdownIt from 'markdown-it';

export interface LessonFrontmatter {
  slug: string;
  title: string;
  module: string;
  moduleId: string;
  duration: string;
  focus: string;
  level: string;
}

export interface LessonRecord {
  data: LessonFrontmatter;
  body: string;
}

const lessonsDir = path.join(process.cwd(), 'src/content/lessons');
const markdown = new MarkdownIt({
  html: true,
  linkify: true,
  typographer: true,
});

let lessonCache: LessonRecord[] | null = null;

export function loadLessons() {
  if (lessonCache) {
    return lessonCache;
  }

  lessonCache = fs
    .readdirSync(lessonsDir)
    .filter((file) => file.endsWith('.md'))
    .map((file) => {
      const filePath = path.join(lessonsDir, file);
      const source = fs.readFileSync(filePath, 'utf-8');
      const { data, content } = matter(source);

      return {
        data: data as LessonFrontmatter,
        body: content,
      } satisfies LessonRecord;
    });

  return lessonCache;
}

export function renderLessonBody(body: string) {
  return markdown.render(body);
}
