import { getLessonMeta } from './course';
import {
  quizBank,
  type QuizBankModes,
  type QuizBankQuestion,
} from './quiz-bank';
import type { LessonRecord } from './lesson-files';

interface ExampleItem {
  sentence: string;
  note: string;
  section: string;
}

interface MistakeItem {
  wrong: string;
  right: string;
  note: string;
}

interface ParsedLessonSections {
  examples: ExampleItem[];
  mistakes: MistakeItem[];
  practicePlan: string[];
}

export interface QuizQuestion {
  id: string;
  prompt: string;
  options: string[];
  correctIndex: number;
  explanation: string;
  tag: string;
  difficulty?: string;
}

const TARGET_GENERATED_QUIZ_SIZE = 60;

function unique(items: string[]) {
  return [...new Set(items.map((item) => item.trim()).filter(Boolean))];
}

function uniqueByKey<T>(items: T[], keyFor: (item: T) => string) {
  const seen = new Set<string>();
  const result: T[] = [];

  items.forEach((item) => {
    const key = keyFor(item);

    if (!key || seen.has(key)) {
      return;
    }

    seen.add(key);
    result.push(item);
  });

  return result;
}

function cleanInlineMarkdown(text: string) {
  return text
    .replace(/\*\*/g, '')
    .replace(/`/g, '')
    .replace(/\[(.*?)\]\(.*?\)/g, '$1')
    .replace(/\s+/g, ' ')
    .trim();
}

function stripLeadingLabel(text: string) {
  return cleanInlineMarkdown(
    text.replace(
      /^(Sentence|Active|Passive|Weak passive|Stronger active|Clearer active|Useful|Unnecessary|Role|Why|Result|Wrong|Right|Better|Note|Meaning|Difference|Analysis)\s*:\s*/i,
      '',
    ),
  );
}

function getSection(body: string, headingPattern: string | RegExp) {
  const source =
    typeof headingPattern === 'string'
      ? headingPattern.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
      : headingPattern.source;
  const pattern = new RegExp(`## ${source}\\n\\n([\\s\\S]*?)(?=\\n## |$)`);

  return body.match(pattern)?.[1]?.trim() ?? '';
}

function parseLegacyExamples(body: string) {
  const examples: ExampleItem[] = [];
  const section = getSection(body, 'Examples');
  const pattern = /\*\*Example\s+\d+:\*\*\s*"([^"]+)"\s*\n\*([^*]+)\*/g;

  for (const match of section.matchAll(pattern)) {
    examples.push({
      sentence: cleanInlineMarkdown(match[1]),
      note: cleanInlineMarkdown(match[2]),
      section: 'Examples',
    });
  }

  return examples;
}

function parseModernExamples(body: string) {
  const examples: ExampleItem[] = [];
  const sectionPattern = /## ([^\n]+)\n\n([\s\S]*?)(?=\n## |$)/g;

  for (const sectionMatch of body.matchAll(sectionPattern)) {
    const sectionTitle = cleanInlineMarkdown(sectionMatch[1]);
    const sectionBody = sectionMatch[2];
    const examplePattern = /### Example\s+\d+[^\n]*\n\n([\s\S]*?)(?=\n### |\n## |$)/g;

    for (const exampleMatch of sectionBody.matchAll(examplePattern)) {
      const block = exampleMatch[1].trim();
      const lines = block
        .split('\n')
        .map((line) => line.trim())
        .filter(Boolean);
      const bulletLines = lines
        .filter((line) => line.startsWith('- '))
        .map((line) => stripLeadingLabel(line.slice(2)));
      const rawBulletLines = lines
        .filter((line) => line.startsWith('- '))
        .map((line) => cleanInlineMarkdown(line.slice(2)));
      const noteBullets = rawBulletLines
        .filter((line) => /^(Why|Role|Result|Note|Meaning|Difference|Analysis)\s*:/i.test(line) || /\s=\s/.test(line))
        .map(stripLeadingLabel);
      const sentenceBullets = rawBulletLines
        .filter((line) => !(/^(Why|Role|Result|Note|Meaning|Difference|Analysis)\s*:/i.test(line) || /\s=\s/.test(line)))
        .map(stripLeadingLabel);
      const sentenceLines = sentenceBullets.length ? sentenceBullets : bulletLines;
      const sentence = sentenceLines.join(' / ');
      const rawNote = cleanInlineMarkdown(
        [...noteBullets, ...lines.filter((line) => !line.startsWith('- '))].join(' '),
      );
      const note = rawNote && !/:$/.test(rawNote) ? rawNote : '';

      if (!sentence) {
        continue;
      }

      examples.push({
        sentence,
        note,
        section: sectionTitle,
      });
    }
  }

  return examples;
}

function parseExamples(body: string) {
  return uniqueByKey(
    [...parseLegacyExamples(body), ...parseModernExamples(body)],
    (example) => `${example.section}||${example.sentence}||${example.note}`,
  );
}

function parseLegacyMistakes(body: string) {
  const mistakes: MistakeItem[] = [];
  const section = getSection(body, /Common Mistakes(?: and Why They Happen)?/);
  const pattern =
    /\*\*Mistake\s+\d+:\*\*\s*\n- ❌ WRONG: "([^"]+)"\s*\n- ✅ RIGHT: "([^"]+)"\s*\n- Note: ([^\n]+)/g;

  for (const match of section.matchAll(pattern)) {
    mistakes.push({
      wrong: cleanInlineMarkdown(match[1]),
      right: cleanInlineMarkdown(match[2]),
      note: cleanInlineMarkdown(match[3]),
    });
  }

  return mistakes;
}

function parseModernMistakes(body: string) {
  const mistakes: MistakeItem[] = [];
  const section = getSection(body, /Common Mistakes(?: and Why They Happen)?/);
  const pattern =
    /\*\*Mistake\s+\d+\*\*\s*\n\n- WRONG:\s*([^\n]+)\n- (?:BETTER|RIGHT):\s*([^\n]+)\n\nWhy learners make it:\n\n- ([^\n]+)/g;

  for (const match of section.matchAll(pattern)) {
    mistakes.push({
      wrong: cleanInlineMarkdown(match[1]),
      right: cleanInlineMarkdown(match[2]),
      note: cleanInlineMarkdown(match[3]),
    });
  }

  return mistakes;
}

function parseMistakes(body: string) {
  return uniqueByKey(
    [...parseLegacyMistakes(body), ...parseModernMistakes(body)],
    (mistake) => `${mistake.wrong}||${mistake.right}||${mistake.note}`,
  );
}

function parsePracticePlan(body: string) {
  return unique(
    getSection(body, 'Practice Plan')
      .split('\n')
      .map((line) => line.trim())
      .filter((line) => /^\d+\./.test(line))
      .map((line) => cleanInlineMarkdown(line.replace(/^\d+\.\s*/, ''))),
  );
}

function parseLesson(entry: LessonRecord): ParsedLessonSections {
  return {
    examples: parseExamples(entry.body),
    mistakes: parseMistakes(entry.body),
    practicePlan: parsePracticePlan(entry.body),
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

function addDifficultyBands(questions: QuizQuestion[]) {
  const firstCut = Math.ceil(questions.length / 3);
  const secondCut = Math.ceil((questions.length * 2) / 3);

  return questions.map((question, index) => ({
    ...question,
    difficulty:
      question.difficulty
      || (index < firstCut
        ? 'Basic'
        : index < secondCut
          ? 'Intermediate'
          : 'Advanced'),
  }));
}

function quizQuestionKey(question: QuizBankQuestion | QuizQuestion) {
  return [
    question.prompt,
    question.options.join('||'),
    question.correctIndex,
    question.explanation,
    question.tag,
  ].join('||');
}

function coerceStoredValue(value: unknown) {
  if (typeof value === 'string') {
    return cleanInlineMarkdown(value);
  }

  if (value && typeof value === 'object') {
    if ('note' in value && typeof value.note === 'string') {
      return cleanInlineMarkdown(value.note);
    }

    if ('right' in value && typeof value.right === 'string') {
      return cleanInlineMarkdown(value.right);
    }

    if ('wrong' in value && typeof value.wrong === 'string') {
      return cleanInlineMarkdown(value.wrong);
    }
  }

  return '';
}

function normalizeBankQuestions(
  questions: QuizBankQuestion[],
  slug: string,
) {
  return questions
    .map((question, index) => {
      const correct = coerceStoredValue(question.options[question.correctIndex]);
      const options = unique(question.options.map((option) => coerceStoredValue(option)).filter(Boolean));

      if (!correct) {
        return undefined;
      }

      if (!options.includes(correct)) {
        options.unshift(correct);
      }

      if (options.length < 2) {
        return undefined;
      }

      return {
        id: `bank-${slug}-${index + 1}`,
        prompt: cleanInlineMarkdown(question.prompt),
        options,
        correctIndex: options.indexOf(correct),
        explanation: coerceStoredValue(question.explanation) || correct,
        tag: cleanInlineMarkdown(question.tag) || 'Practice',
        difficulty: question.difficulty,
      } satisfies QuizQuestion;
    })
    .filter((question): question is QuizQuestion => Boolean(question));
}

function mergeQuizBankModes(modes: QuizBankModes, slug: string) {
  const merged = uniqueByKey(
    [...modes.standard, ...modes.advanced],
    quizQuestionKey,
  );

  return normalizeBankQuestions(merged, slug);
}

function getQuizBankRecovery(slug: string) {
  const exactModes = quizBank[slug];

  if (exactModes) {
    return mergeQuizBankModes(exactModes, slug);
  }

  return undefined;
}

function buildGeneratedQuizForLesson(lesson: LessonRecord, lessons: LessonRecord[]) {
  const parsedLesson = parseLesson(lesson);
  const exampleNotes = unique(parsedLesson.examples.map((item) => item.note).filter(Boolean));
  const exampleSections = unique(parsedLesson.examples.map((item) => item.section).filter(Boolean));
  const corrections = unique(parsedLesson.mistakes.map((item) => item.right));
  const mistakeNotes = unique(parsedLesson.mistakes.map((item) => item.note).filter(Boolean));
  const practicePlanPool = unique(parsedLesson.practicePlan);
  const focusPool = unique(lessons.map((entry) => entry.data.focus));
  const moduleTitlePool = unique(
    lessons
      .map((entry) => getLessonMeta(entry.data.slug)?.moduleTitle)
      .filter((value): value is string => Boolean(value)),
  );

  const questions: QuizQuestion[] = [];

  parsedLesson.examples.forEach((example, index) => {
    const explanation =
      example.note
      || `This example belongs to the "${example.section}" section of "${lesson.data.title}".`;

    questions.push(
      makeQuestion(
        `generated-example-note-${index + 1}`,
        `Which explanation best matches this example from "${lesson.data.title}"? "${example.sentence}"`,
        explanation,
        pickDistractors(exampleNotes, explanation, index),
        explanation,
        'Example analysis',
        index,
      ),
    );

    questions.push(
      makeQuestion(
        `generated-example-section-${index + 1}`,
        `Which section of "${lesson.data.title}" best fits this example? "${example.sentence}"`,
        example.section,
        pickDistractors(exampleSections, example.section, index + 40),
        explanation,
        'Section placement',
        index + 40,
      ),
    );
  });

  parsedLesson.mistakes.forEach((mistake, index) => {
    questions.push(
      makeQuestion(
        `generated-mistake-correction-${index + 1}`,
        `Choose the best correction for this sentence from "${lesson.data.title}": "${mistake.wrong}"`,
        mistake.right,
        pickDistractors(corrections, mistake.right, index + 80),
        mistake.note,
        'Correction',
        index + 80,
      ),
    );

    questions.push(
      makeQuestion(
        `generated-mistake-reason-${index + 1}`,
        `Why is this revision the best choice in "${lesson.data.title}"? "${mistake.right}"`,
        mistake.note,
        pickDistractors(mistakeNotes, mistake.note, index + 120),
        mistake.note,
        'Reasoning',
        index + 120,
      ),
    );
  });

  parsedLesson.practicePlan.forEach((step, index) => {
    questions.push(
      makeQuestion(
        `generated-practice-${index + 1}`,
        `Which practice task appears in the "${lesson.data.title}" practice plan?`,
        step,
        pickDistractors(practicePlanPool, step, index + 160),
        step,
        'Practice plan',
        index + 160,
      ),
    );
  });

  questions.push(
    makeQuestion(
      'generated-focus-1',
      `Which focus best matches the goal of "${lesson.data.title}"?`,
      lesson.data.focus,
      pickDistractors(focusPool, lesson.data.focus, 220),
      lesson.data.focus,
      'Lesson focus',
      220,
    ),
  );

  const moduleTitle = getLessonMeta(lesson.data.slug)?.moduleTitle;

  if (moduleTitle) {
    questions.push(
      makeQuestion(
        'generated-module-1',
        `Which module contains the "${lesson.data.title}" lesson?`,
        moduleTitle,
        pickDistractors(moduleTitlePool, moduleTitle, 260),
        `"${lesson.data.title}" belongs to ${moduleTitle}.`,
        'Module',
        260,
      ),
    );
  }

  return addDifficultyBands(
    uniqueByKey(questions, quizQuestionKey).slice(0, TARGET_GENERATED_QUIZ_SIZE),
  );
}

export function buildQuizForLesson(lesson: LessonRecord, lessons: LessonRecord[]) {
  const recovered = getQuizBankRecovery(lesson.data.slug);

  if (recovered) {
    return recovered;
  }

  return buildGeneratedQuizForLesson(lesson, lessons);
}
