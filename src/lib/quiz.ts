import { getLessonMeta } from './course';
import type { LessonRecord } from './lesson-files';

interface ExampleItem {
  sentence: string;
  note: string;
}

interface MistakeItem {
  wrong: string;
  right: string;
  note: string;
}

interface ParsedLessonSections {
  examples: ExampleItem[];
  mistakes: MistakeItem[];
  rules: string[];
  quickReference: string[];
  practicePlan: string[];
}

export interface QuizQuestion {
  id: string;
  prompt: string;
  options: string[];
  correctIndex: number;
  explanation: string;
  tag: string;
}

function unique(items: string[]) {
  return [...new Set(items.map((item) => item.trim()).filter(Boolean))];
}

function getSection(body: string, heading: string) {
  const pattern = new RegExp(`## ${heading}\\n\\n([\\s\\S]*?)(?=\\n## |$)`);
  return body.match(pattern)?.[1]?.trim() ?? '';
}

function parseExamples(section: string) {
  const examples: ExampleItem[] = [];
  const pattern = /\*\*Example\s+\d+:\*\*\s*"([^"]+)"\s*\n\*([^*]+)\*/g;

  for (const match of section.matchAll(pattern)) {
    examples.push({
      sentence: match[1].trim(),
      note: match[2].trim(),
    });
  }

  return examples;
}

function parseMistakes(section: string) {
  const mistakes: MistakeItem[] = [];
  const pattern =
    /\*\*Mistake\s+\d+:\*\*\s*\n- ❌ WRONG: "([^"]+)"\s*\n- ✅ RIGHT: "([^"]+)"\s*\n- Note: ([^\n]+)/g;

  for (const match of section.matchAll(pattern)) {
    mistakes.push({
      wrong: match[1].trim(),
      right: match[2].trim(),
      note: match[3].trim(),
    });
  }

  return mistakes;
}

function parseBullets(section: string) {
  return unique(
    section
      .split('\n')
      .map((line) => line.trim())
      .filter((line) => line.startsWith('- '))
      .map((line) => line.slice(2)),
  );
}

function parseQuickReference(section: string) {
  return unique(
    section
      .split('\n')
      .map((line) => line.trim())
      .filter(Boolean),
  );
}

function parsePracticePlan(section: string) {
  return unique(
    section
      .split('\n')
      .map((line) => line.trim())
      .filter((line) => /^\d+\./.test(line))
      .map((line) => line.replace(/^\d+\.\s*/, '')),
  );
}

function parseLesson(entry: LessonRecord): ParsedLessonSections {
  return {
    examples: parseExamples(getSection(entry.body, 'Examples')),
    mistakes: parseMistakes(getSection(entry.body, 'Common Mistakes')),
    rules: parseBullets(getSection(entry.body, 'Key Rules')),
    quickReference: parseQuickReference(getSection(entry.body, 'Quick Reference')),
    practicePlan: parsePracticePlan(getSection(entry.body, 'Practice Plan')),
  };
}

function rotateOptions(options: string[], seed: number) {
  if (options.length <= 1) {
    return options;
  }

  const offset = seed % options.length;
  return options.slice(offset).concat(options.slice(0, offset));
}

function pickDistractors(pool: string[], correct: string, seed: number) {
  const filtered = unique(pool).filter((item) => item !== correct);
  if (filtered.length <= 3) {
    return filtered;
  }

  const offset = seed % filtered.length;
  const rotated = filtered.slice(offset).concat(filtered.slice(0, offset));
  return rotated.slice(0, 3);
}

function makeQuestion(
  id: string,
  prompt: string,
  correct: string,
  distractors: string[],
  explanation: string,
  tag: string,
  seed: number,
): QuizQuestion {
  const options = rotateOptions(unique([correct, ...distractors]).slice(0, 4), seed);

  return {
    id,
    prompt,
    options,
    correctIndex: options.indexOf(correct),
    explanation,
    tag,
  };
}

export function buildQuizForLesson(lesson: LessonRecord, lessons: LessonRecord[]) {
  const parsedLesson = parseLesson(lesson);
  const allParsed = lessons.map((entry) => ({
    entry,
    parsed: parseLesson(entry),
  }));

  const exampleNotes = unique(
    allParsed.flatMap(({ parsed }) => parsed.examples.map((item) => item.note)),
  );
  const correctionPool = unique(
    allParsed.flatMap(({ parsed }) => parsed.mistakes.map((item) => item.right)),
  );
  const rulePool = unique(allParsed.flatMap(({ parsed }) => parsed.rules));
  const quickReferencePool = unique(
    allParsed.flatMap(({ parsed }) => parsed.quickReference),
  );
  const practicePlanPool = unique(allParsed.flatMap(({ parsed }) => parsed.practicePlan));
  const focusPool = unique(lessons.map((entry) => entry.data.focus));
  const moduleTitlePool = unique(
    lessons
      .map((entry) => getLessonMeta(entry.data.slug)?.moduleTitle)
      .filter((value): value is string => Boolean(value)),
  );

  const questions: QuizQuestion[] = [];

  parsedLesson.examples.slice(0, 4).forEach((example, index) => {
    questions.push(
      makeQuestion(
        `example-${index + 1}`,
        `Which explanation best matches this example from "${lesson.data.title}"? "${example.sentence}"`,
        example.note,
        pickDistractors(exampleNotes, example.note, index),
        example.note,
        'Example',
        index,
      ),
    );
  });

  parsedLesson.mistakes.slice(0, 3).forEach((mistake, index) => {
    questions.push(
      makeQuestion(
        `mistake-${index + 1}`,
        `Choose the best revision of this sentence from "${lesson.data.title}": "${mistake.wrong}"`,
        mistake.right,
        pickDistractors(correctionPool, mistake.right, index + 5),
        mistake.note,
        'Correction',
        index + 5,
      ),
    );
  });

  parsedLesson.rules.slice(0, 2).forEach((rule, index) => {
    questions.push(
      makeQuestion(
        `rule-${index + 1}`,
        `Which rule is explicitly taught in the "${lesson.data.title}" lesson?`,
        rule,
        pickDistractors(rulePool, rule, index + 10),
        rule,
        'Rule',
        index + 10,
      ),
    );
  });

  if (parsedLesson.quickReference[0]) {
    questions.push(
      makeQuestion(
        'quick-reference-1',
        `Which quick-reference reminder belongs to "${lesson.data.title}"?`,
        parsedLesson.quickReference[0],
        pickDistractors(quickReferencePool, parsedLesson.quickReference[0], 20),
        parsedLesson.quickReference[0],
        'Quick Reference',
        20,
      ),
    );
  }

  if (parsedLesson.practicePlan[0]) {
    questions.push(
      makeQuestion(
        'practice-plan-1',
        `Which practice task appears in the "${lesson.data.title}" practice plan?`,
        parsedLesson.practicePlan[0],
        pickDistractors(practicePlanPool, parsedLesson.practicePlan[0], 25),
        parsedLesson.practicePlan[0],
        'Practice Plan',
        25,
      ),
    );
  }

  if (questions.length < 10) {
    questions.push(
      makeQuestion(
        'focus-1',
        `Which focus best matches the goal of "${lesson.data.title}"?`,
        lesson.data.focus,
        pickDistractors(focusPool, lesson.data.focus, 30),
        lesson.data.focus,
        'Lesson Focus',
        30,
      ),
    );
  }

  const moduleTitle = getLessonMeta(lesson.data.slug)?.moduleTitle;
  if (moduleTitle && questions.length < 10) {
    questions.push(
      makeQuestion(
        'module-1',
        `Which module contains the "${lesson.data.title}" lesson?`,
        moduleTitle,
        pickDistractors(moduleTitlePool, moduleTitle, 35),
        `"${lesson.data.title}" belongs to ${moduleTitle}.`,
        'Module',
        35,
      ),
    );
  }

  return questions.slice(0, 10);
}
