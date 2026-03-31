(function () {
  const { curriculum, roadmap, quizSize } = window.GrammarAtlasData;
  const lessonStorageKey = "grammar-atlas-lessons-v2";
  const quizStorageKey = "grammar-atlas-quizzes-v2";

  function flattenLessons() {
    return curriculum.flatMap((module) =>
      module.lessons.map((lesson) => ({
        ...lesson,
        moduleId: module.id,
        moduleTitle: module.title,
        moduleLevel: module.level,
      }))
    );
  }

  const allLessons = flattenLessons();

  function getModule(moduleId) {
    return curriculum.find((module) => module.id === moduleId);
  }

  function getLesson(lessonId) {
    return allLessons.find((lesson) => lesson.id === lessonId) || allLessons[0];
  }

  function getLessonIndex(lessonId) {
    return allLessons.findIndex((lesson) => lesson.id === lessonId);
  }

  function nextLesson(lessonId) {
    const currentIndex = getLessonIndex(lessonId);
    return allLessons[(currentIndex + 1) % allLessons.length];
  }

  function previousLesson(lessonId) {
    const currentIndex = getLessonIndex(lessonId);
    return allLessons[(currentIndex - 1 + allLessons.length) % allLessons.length];
  }

  function readJson(key, fallback) {
    try {
      const raw = localStorage.getItem(key);
      return raw ? JSON.parse(raw) : fallback;
    } catch (error) {
      return fallback;
    }
  }

  function saveJson(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  function getCompletedLessons() {
    return new Set(readJson(lessonStorageKey, []));
  }

  function toggleLessonComplete(lessonId) {
    const completed = getCompletedLessons();
    if (completed.has(lessonId)) {
      completed.delete(lessonId);
    } else {
      completed.add(lessonId);
    }
    saveJson(lessonStorageKey, [...completed]);
  }

  function getQuizScores() {
    return readJson(quizStorageKey, {});
  }

  function saveQuizScore(lessonId, payload) {
    const current = getQuizScores();
    current[lessonId] = payload;
    saveJson(quizStorageKey, current);
  }

  function getQueryParam(name) {
    const params = new URLSearchParams(window.location.search);
    return params.get(name);
  }

  function formatPercent(value) {
    return `${Math.round(value)}%`;
  }

  function escapeHtml(text) {
    return String(text)
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#39;");
  }

  function renderStats(targetId) {
    const completed = getCompletedLessons();
    const quizScores = getQuizScores();
    const averageQuiz =
      Object.values(quizScores).length === 0
        ? 0
        : Object.values(quizScores).reduce((sum, item) => sum + item.percent, 0) / Object.values(quizScores).length;

    const stats = [
      { label: "Modules", value: curriculum.length },
      { label: "Lessons", value: allLessons.length },
      { label: "Quiz Size", value: `${quizSize} Q` },
      { label: "Average Quiz", value: Object.values(quizScores).length ? formatPercent(averageQuiz) : "New" },
      { label: "Completed Lessons", value: completed.size },
      { label: "Roadmap Weeks", value: roadmap.length },
    ];

    const target = document.getElementById(targetId);
    if (!target) {
      return;
    }

    target.innerHTML = stats
      .map(
        (stat) => `
          <article class="stat-card">
            <span class="stat-label">${stat.label}</span>
            <strong class="stat-value">${stat.value}</strong>
          </article>
        `
      )
      .join("");
  }

  window.GrammarAtlasApp = {
    curriculum,
    roadmap,
    quizSize,
    allLessons,
    getModule,
    getLesson,
    getLessonIndex,
    nextLesson,
    previousLesson,
    getCompletedLessons,
    toggleLessonComplete,
    getQuizScores,
    saveQuizScore,
    getQueryParam,
    renderStats,
    formatPercent,
    escapeHtml,
  };
})();
