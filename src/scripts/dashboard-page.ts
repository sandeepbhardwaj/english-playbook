import {
  getGrammarAtlasProgress,
  type ErrorLogEntry,
  type GrammarAtlasProgressApi,
  type LessonProgressState,
  type QuizScore,
} from '../lib/browser/grammar-atlas-progress';

interface DashboardLesson {
  slug: string;
  title: string;
  module: string;
  moduleId: string;
  duration: string;
  focus: string;
}

interface DashboardModule {
  id: string;
  title: string;
  description: string;
  lessonSlugs: string[];
}

interface DashboardPayload {
  lessons: DashboardLesson[];
  modules: DashboardModule[];
}

interface AttemptedLesson {
  lesson: DashboardLesson;
  score: QuizScore;
}

interface ModuleStat extends DashboardModule {
  lessonCount: number;
  completedCount: number;
  attemptedCount: number;
  averageScore: number | null;
}

interface ReviewItem {
  slug: string;
  title: string;
  note: string;
}

interface DashboardState {
  averageQuizScore: number | null;
  attemptedLessons: AttemptedLesson[];
  bookmarkedLessons: DashboardLesson[];
  bookmarkedQueue: DashboardLesson[];
  completedLessons: DashboardLesson[];
  errorLog: ErrorLogEntry[];
  lessonStateMap: Record<string, LessonProgressState>;
  moduleStats: ModuleStat[];
  nextLesson: DashboardLesson;
  strongestModule: ModuleStat;
  weakestLessons: AttemptedLesson[];
}

function createElement<K extends keyof HTMLElementTagNameMap>(
  tagName: K,
  options: {
    className?: string;
    text?: string;
    attrs?: Record<string, string>;
  } = {},
) {
  const element = document.createElement(tagName);

  if (options.className) {
    element.className = options.className;
  }

  if (typeof options.text === 'string') {
    element.textContent = options.text;
  }

  if (options.attrs) {
    Object.entries(options.attrs).forEach(([name, value]) => {
      element.setAttribute(name, value);
    });
  }

  return element;
}

function createSectionHeading(eyebrow: string, title: string) {
  const wrapper = createElement('div', { className: 'dashboard-section-heading' });
  wrapper.append(
    createElement('p', { className: 'dashboard-eyebrow', text: eyebrow }),
    createElement('h2', { text: title }),
  );
  return wrapper;
}

function createActionRow(items: Array<HTMLAnchorElement | HTMLButtonElement>) {
  const row = createElement('div', { className: 'dashboard-card-actions' });
  row.append(...items);
  return row;
}

function createLinkButton(href: string, label: string, variant: 'primary' | 'secondary') {
  return createElement('a', {
    className: `btn btn-${variant}`,
    text: label,
    attrs: { href },
  });
}

function createTextButton(label: string, variant: 'primary' | 'secondary') {
  return createElement('button', {
    className: `btn btn-${variant}`,
    text: label,
    attrs: { type: 'button' },
  });
}

function createEmptyState(title: string, copy: string) {
  const emptyState = createElement('div', { className: 'dashboard-empty-state' });
  emptyState.append(
    createElement('h3', { text: title }),
    createElement('p', { text: copy }),
  );
  return emptyState;
}

function formatPercent(value: number) {
  return `${Math.round(value)}%`;
}

function isQuizScore(value: QuizScore | null | undefined): value is QuizScore {
  return Boolean(value && typeof value.percent === 'number');
}

function buildState(
  progressApi: GrammarAtlasProgressApi,
  lessons: DashboardLesson[],
  modules: DashboardModule[],
  lessonMap: Map<string, DashboardLesson>,
): DashboardState {
  const lessonStateMap = progressApi.getLessonProgressMap();
  const quizScores = progressApi.getQuizScores();
  const errorLog = progressApi.getErrorLog();
  const completedLessons = lessons.filter((lesson) => lessonStateMap[lesson.slug]?.completed);
  const bookmarkedLessons = lessons.filter((lesson) => lessonStateMap[lesson.slug]?.bookmarked);
  const attemptedLessons = lessons
    .map((lesson) => ({
      lesson,
      score: quizScores[lesson.slug],
    }))
    .filter((entry): entry is AttemptedLesson => isQuizScore(entry.score));
  const averageQuizScore = attemptedLessons.length
    ? attemptedLessons.reduce((sum, entry) => sum + entry.score.percent, 0) / attemptedLessons.length
    : null;
  const nextLesson = lessons.find((lesson) => !lessonStateMap[lesson.slug]?.completed) || lessons[0];
  const weakestLessons = [...attemptedLessons]
    .sort((left, right) => left.score.percent - right.score.percent)
    .slice(0, 4);
  const bookmarkedQueue = bookmarkedLessons
    .filter((lesson) => !lessonStateMap[lesson.slug]?.completed)
    .slice(0, 4);
  const moduleStats = modules.map((module) => {
    const moduleLessons = module.lessonSlugs
      .map((slug) => lessonMap.get(slug))
      .filter((lesson): lesson is DashboardLesson => Boolean(lesson));
    const moduleAttempts = moduleLessons
      .map((lesson) => quizScores[lesson.slug])
      .filter(isQuizScore);

    return {
      ...module,
      lessonCount: moduleLessons.length,
      completedCount: moduleLessons.filter((lesson) => lessonStateMap[lesson.slug]?.completed).length,
      attemptedCount: moduleAttempts.length,
      averageScore: moduleAttempts.length
        ? moduleAttempts.reduce((sum, score) => sum + score.percent, 0) / moduleAttempts.length
        : null,
    };
  });
  const strongestModule =
    [...moduleStats]
      .filter((module) => module.averageScore !== null)
      .sort((left, right) => (right.averageScore ?? 0) - (left.averageScore ?? 0))[0] || moduleStats[0];

  return {
    averageQuizScore,
    attemptedLessons,
    bookmarkedLessons,
    bookmarkedQueue,
    completedLessons,
    errorLog,
    lessonStateMap,
    moduleStats,
    nextLesson,
    strongestModule,
    weakestLessons,
  };
}

function renderMetrics(
  target: HTMLElement,
  progressApi: GrammarAtlasProgressApi,
  state: DashboardState,
  lessons: DashboardLesson[],
) {
  const metrics = [
    {
      label: 'Study streak',
      value: `${progressApi.getStudyStreak()} day${progressApi.getStudyStreak() === 1 ? '' : 's'}`,
    },
    {
      label: 'Lessons completed',
      value: `${state.completedLessons.length}/${lessons.length}`,
    },
    {
      label: 'Quiz average',
      value: state.averageQuizScore === null ? 'No scores yet' : formatPercent(state.averageQuizScore),
    },
    {
      label: 'Saved bookmarks',
      value: `${state.bookmarkedLessons.length}`,
    },
  ];

  target.replaceChildren(
    ...metrics.map((metric) => {
      const card = createElement('article', { className: 'metric-card' });
      card.append(
        createElement('span', { className: 'metric-label', text: metric.label }),
        createElement('strong', { className: 'metric-value', text: metric.value }),
      );
      return card;
    }),
  );
}

function renderCommand(target: HTMLElement, state: DashboardState) {
  const weakest = state.weakestLessons[0];
  const commandGrid = createElement('div', { className: 'command-grid' });

  const continueCard = createElement('article', { className: 'command-card command-card-primary' });
  continueCard.append(
    createElement('span', { className: 'command-chip', text: 'Continue' }),
    createElement('h3', { text: state.nextLesson.title }),
    createElement('p', { text: state.nextLesson.focus }),
    createActionRow([
      createLinkButton(`/lessons/${state.nextLesson.slug}`, 'Open Lesson', 'primary'),
      createLinkButton(`/quiz/${state.nextLesson.slug}`, 'Take Quiz', 'secondary'),
    ]),
  );

  const weakestCard = createElement('article', { className: 'command-card' });
  weakestCard.append(
    createElement('span', { className: 'command-chip', text: 'Weakest Area' }),
    createElement('h3', { text: weakest ? weakest.lesson.title : 'No weak area yet' }),
    createElement('p', {
      text: weakest
        ? `Best score so far: ${formatPercent(weakest.score.percent)}. Revisit the lesson, then retake the quiz.`
        : 'Take a few quizzes and this card will start pointing to the topics that need review.',
    }),
    createActionRow([
      createLinkButton(weakest ? `/quiz/${weakest.lesson.slug}` : '/quiz', weakest ? 'Review Quiz' : 'Open Quiz Center', 'secondary'),
    ]),
  );

  const strongestCard = createElement('article', { className: 'command-card' });
  strongestCard.append(
    createElement('span', { className: 'command-chip', text: 'Strongest Module' }),
    createElement('h3', { text: state.strongestModule.title }),
    createElement('p', {
      text:
        state.strongestModule.averageScore !== null
          ? `Average quiz score: ${formatPercent(state.strongestModule.averageScore)} across ${state.strongestModule.attemptedCount} lesson quiz${state.strongestModule.attemptedCount === 1 ? '' : 'zes'}.`
          : 'No module performance data yet, but this will fill in as soon as you start taking quizzes.',
    }),
    createActionRow([
      createLinkButton(`/modules/${state.strongestModule.id}`, 'Open Module', 'secondary'),
    ]),
  );

  commandGrid.append(continueCard, weakestCard, strongestCard);

  target.replaceChildren(
    createSectionHeading('Next Best Actions', 'Use saved progress to decide what to study next'),
    commandGrid,
  );
}

function buildReviewQueue(state: DashboardState) {
  const queue: ReviewItem[] = [];

  state.weakestLessons.forEach((entry) => {
    if (!queue.find((item) => item.slug === entry.lesson.slug)) {
      queue.push({
        slug: entry.lesson.slug,
        title: entry.lesson.title,
        note: `Retake the quiz after revisiting the lesson. Current best score: ${formatPercent(entry.score.percent)}.`,
      });
    }
  });

  state.bookmarkedQueue.forEach((lesson) => {
    if (!queue.find((item) => item.slug === lesson.slug)) {
      queue.push({
        slug: lesson.slug,
        title: lesson.title,
        note: 'Saved in your bookmark list. Good candidate for a short review session.',
      });
    }
  });

  if (!queue.length) {
    queue.push({
      slug: state.nextLesson.slug,
      title: state.nextLesson.title,
      note: 'Start here to build the first layer of progress data for the dashboard.',
    });
  }

  return queue.slice(0, 4);
}

function renderReview(target: HTMLElement, state: DashboardState) {
  const stackList = createElement('div', { className: 'stack-list' });

  buildReviewQueue(state).forEach((item) => {
    const card = createElement('article', { className: 'stack-card' });
    card.append(
      createElement('h3', { text: item.title }),
      createElement('p', { text: item.note }),
      createActionRow([
        createLinkButton(`/lessons/${item.slug}`, 'Open Lesson', 'secondary'),
        createLinkButton(`/quiz/${item.slug}`, 'Open Quiz', 'primary'),
      ]),
    );
    stackList.append(card);
  });

  target.replaceChildren(
    createSectionHeading('Review Queue', 'Your saved study list'),
    stackList,
  );
}

function renderModules(target: HTMLElement, state: DashboardState) {
  const moduleGrid = createElement('div', { className: 'module-grid' });

  state.moduleStats.forEach((module) => {
    const card = createElement('article', { className: 'module-card' });
    const meta = createElement('div', { className: 'module-meta' });
    meta.append(
      createElement('span', { text: `${module.completedCount}/${module.lessonCount} completed` }),
      createElement('span', {
        text: module.averageScore === null ? 'No quiz average yet' : formatPercent(module.averageScore),
      }),
    );

    card.append(
      createElement('h3', { text: module.title }),
      createElement('p', { text: module.description }),
      meta,
      createLinkButton(`/modules/${module.id}`, 'Open Module', 'secondary'),
    );
    moduleGrid.append(card);
  });

  target.replaceChildren(
    createSectionHeading('Module Performance', 'See progress across the whole course'),
    moduleGrid,
  );
}

function renderSaved(target: HTMLElement, state: DashboardState) {
  const savedLessons = [...state.bookmarkedLessons]
    .sort((left, right) => left.title.localeCompare(right.title))
    .slice(0, 6);

  const content = savedLessons.length
    ? (() => {
        const list = createElement('div', { className: 'bookmark-list' });

        savedLessons.forEach((lesson) => {
          const link = createElement('a', {
            className: 'bookmark-link',
            attrs: { href: `/lessons/${lesson.slug}` },
          });
          link.append(
            createElement('strong', { text: lesson.title }),
            createElement('span', { text: lesson.module }),
          );
          list.append(link);
        });

        return list;
      })()
    : createEmptyState(
        'No bookmarks yet',
        'Use the bookmark button on lesson pages to build a reusable review list here.',
      );

  target.replaceChildren(
    createSectionHeading('Bookmarks', 'Lessons you saved for review'),
    content,
  );
}

function renderTools(target: HTMLElement, progressApi: GrammarAtlasProgressApi) {
  const textarea = createElement('textarea', {
    className: 'progress-transfer-box',
    attrs: {
      id: 'progress-transfer-box',
      rows: '9',
      placeholder: 'Exported progress JSON appears here, or paste saved JSON to import it.',
    },
  }) as HTMLTextAreaElement;
  const status = createElement('p', {
    className: 'tools-status',
    attrs: { id: 'progress-transfer-status' },
  });
  const exportButton = createTextButton('Export Progress', 'primary');
  exportButton.id = 'progress-export';
  const importButton = createTextButton('Import Progress', 'secondary');
  importButton.id = 'progress-import';

  exportButton.addEventListener('click', () => {
    textarea.value = progressApi.exportProgress();
    status.textContent = 'Progress exported into the box. Save it anywhere you like.';
  });

  importButton.addEventListener('click', () => {
    const didImport = progressApi.importProgress(textarea.value);
    status.textContent = didImport
      ? 'Progress imported successfully. Reloading now.'
      : 'Import failed. Check that the JSON came from this site.';

    if (didImport) {
      window.setTimeout(() => window.location.reload(), 600);
    }
  });

  target.replaceChildren(
    createSectionHeading('Backup Tools', 'Export or restore your browser-saved progress'),
    createElement('p', {
      className: 'tools-copy',
      text: 'This includes lesson completion, bookmarks, quiz scores, activity history, and your error log.',
    }),
    textarea,
    createActionRow([exportButton, importButton]),
    status,
  );
}

function createLabelWithControl(labelText: string, control: HTMLElement) {
  const label = createElement('label');
  label.append(createElement('span', { text: labelText }), control);
  return label;
}

function renderErrors(
  target: HTMLElement,
  progressApi: GrammarAtlasProgressApi,
  state: DashboardState,
  lessons: DashboardLesson[],
  lessonMap: Map<string, DashboardLesson>,
  rerender: () => void,
) {
  const form = createElement('form', {
    className: 'error-form',
    attrs: { id: 'error-log-form' },
  });
  const formGrid = createElement('div', { className: 'error-form-grid' });

  const lessonSelect = createElement('select', { attrs: { id: 'error-log-lesson' } }) as HTMLSelectElement;
  lessonSelect.append(createElement('option', { text: 'General grammar issue', attrs: { value: '' } }));
  lessons.forEach((lesson) => {
    lessonSelect.append(
      createElement('option', {
        text: lesson.title,
        attrs: { value: lesson.slug },
      }),
    );
  });

  const titleInput = createElement('input', {
    attrs: {
      id: 'error-log-title',
      type: 'text',
      placeholder: 'Example: Article use in introductions',
      required: 'true',
    },
  }) as HTMLInputElement;

  const mistakeInput = createElement('textarea', {
    attrs: {
      id: 'error-log-mistake',
      rows: '3',
      placeholder: 'What do you usually write or say incorrectly?',
      required: 'true',
    },
  }) as HTMLTextAreaElement;

  const correctionInput = createElement('textarea', {
    attrs: {
      id: 'error-log-correction',
      rows: '2',
      placeholder: 'Write the corrected version or the rule.',
    },
  }) as HTMLTextAreaElement;

  const noteInput = createElement('textarea', {
    attrs: {
      id: 'error-log-note',
      rows: '2',
      placeholder: 'Add a memory tip or reminder.',
    },
  }) as HTMLTextAreaElement;

  formGrid.append(
    createLabelWithControl('Lesson', lessonSelect),
    createLabelWithControl('Focus title', titleInput),
  );

  const submitButton = createElement('button', {
    className: 'btn btn-primary',
    text: 'Save Error Log Entry',
    attrs: { type: 'submit' },
  });

  form.append(
    formGrid,
    createLabelWithControl('Mistake pattern', mistakeInput),
    createLabelWithControl('Better correction', correctionInput),
    createLabelWithControl('Review note', noteInput),
    createActionRow([submitButton]),
  );

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    progressApi.addErrorLogEntry({
      lessonSlug: lessonSelect.value,
      title: titleInput.value.trim(),
      mistake: mistakeInput.value.trim(),
      correction: correctionInput.value.trim(),
      note: noteInput.value.trim(),
    });
    rerender();
  });

  const errorList = createElement('div', { className: 'error-list' });

  if (!state.errorLog.length) {
    errorList.append(
      createEmptyState(
        'No error log entries yet',
        'Add recurring grammar mistakes here so your review becomes specific instead of vague.',
      ),
    );
  } else {
    state.errorLog.forEach((entry) => {
      const lesson = entry.lessonSlug ? lessonMap.get(entry.lessonSlug) : null;
      const card = createElement('article', { className: 'error-card' });
      const top = createElement('div', { className: 'error-card-top' });
      top.append(
        createElement('h3', { text: entry.title }),
        createElement('span', { text: lesson ? lesson.title : 'General' }),
      );

      const deleteButton = createTextButton('Delete', 'secondary');
      deleteButton.addEventListener('click', () => {
        progressApi.removeErrorLogEntry(entry.id);
        rerender();
      });

      const actions: Array<HTMLAnchorElement | HTMLButtonElement> = [];
      if (lesson) {
        actions.push(createLinkButton(`/lessons/${lesson.slug}`, 'Review Lesson', 'secondary'));
      }
      actions.push(deleteButton);

      card.append(
        top,
        createElement('p', { text: `Mistake: ${entry.mistake}` }),
        createElement('p', { text: `Correction: ${entry.correction || 'No correction added yet.'}` }),
        createElement('p', { text: `Note: ${entry.note || 'No note added yet.'}` }),
        createActionRow(actions),
      );
      errorList.append(card);
    });
  }

  target.replaceChildren(
    createSectionHeading('Error Log', 'Keep track of the mistakes you repeat'),
    form,
    errorList,
  );
}

export function initDashboardPage() {
  const payloadElement = document.getElementById('dashboard-data');
  const progressApi = getGrammarAtlasProgress();

  if (!payloadElement?.textContent || !progressApi) {
    return;
  }

  const payload = JSON.parse(payloadElement.textContent) as DashboardPayload;
  const metricsTarget = document.getElementById('dashboard-metrics');
  const commandTarget = document.getElementById('dashboard-command');
  const reviewTarget = document.getElementById('dashboard-review');
  const modulesTarget = document.getElementById('dashboard-modules');
  const savedTarget = document.getElementById('dashboard-saved');
  const toolsTarget = document.getElementById('dashboard-tools');
  const errorsTarget = document.getElementById('dashboard-errors');

  if (
    !(metricsTarget instanceof HTMLElement)
    || !(commandTarget instanceof HTMLElement)
    || !(reviewTarget instanceof HTMLElement)
    || !(modulesTarget instanceof HTMLElement)
    || !(savedTarget instanceof HTMLElement)
    || !(toolsTarget instanceof HTMLElement)
    || !(errorsTarget instanceof HTMLElement)
  ) {
    return;
  }

  const lessonMap = new Map(payload.lessons.map((lesson) => [lesson.slug, lesson]));

  const renderAll = () => {
    const state = buildState(progressApi, payload.lessons, payload.modules, lessonMap);
    renderMetrics(metricsTarget, progressApi, state, payload.lessons);
    renderCommand(commandTarget, state);
    renderReview(reviewTarget, state);
    renderModules(modulesTarget, state);
    renderSaved(savedTarget, state);
    renderTools(toolsTarget, progressApi);
    renderErrors(errorsTarget, progressApi, state, payload.lessons, lessonMap, renderAll);
  };

  renderAll();
}
