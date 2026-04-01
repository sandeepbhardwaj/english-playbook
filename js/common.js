/**
 * Grammar Atlas - Common Utilities and Data API
 * 
 * Provides centralized access to curriculum data, progress tracking,
 * quiz scores, bookmarks, study streak analytics, and data export/import.
 * 
 * All functionality exposed through window.GrammarAtlasApp global object.
 * Uses browser localStorage for persistence (browser-specific, not synced).
 * 
 * Key modules:
 * - Curriculum navigation and lesson lookups
 * - Lesson completion tracking
 * - Quiz score management
 * - Study streak monitoring
 * - Progress export/import
 * - Learning analytics
 */

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
        moduleDescription: module.description,
        modulePortfolioTask: module.portfolioTask,
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

  function getQuizScoreKey(lessonId, mode = "standard") {
    return mode === "advanced" ? `${lessonId}::advanced` : lessonId;
  }

  function getQuizScore(lessonId, mode = "standard") {
    return getQuizScores()[getQuizScoreKey(lessonId, mode)] || null;
  }

  function saveQuizScore(lessonId, payload, mode = "standard") {
    const current = getQuizScores();
    current[getQuizScoreKey(lessonId, mode)] = payload;
    saveJson(quizStorageKey, current);
  }

  function resetProgress() {
    try {
      localStorage.removeItem(lessonStorageKey);
      localStorage.removeItem(quizStorageKey);
      return true;
    } catch (error) {
      return false;
    }
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
      { label: "Core Quiz Bank", value: `${quizSize} Q` },
      { label: "Average Quiz", value: Object.values(quizScores).length ? formatPercent(averageQuiz) : "No scores yet" },
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

  function attachResetProgressModal() {
    if (document.getElementById("reset-progress-modal")) {
      return;
    }

    const modal = document.createElement("div");
    modal.id = "reset-progress-modal";
    modal.className = "app-modal";
    modal.setAttribute("aria-hidden", "true");
    modal.innerHTML = `
      <div class="app-modal-backdrop" data-modal-close="true"></div>
      <div class="app-modal-dialog" role="dialog" aria-modal="true" aria-labelledby="reset-progress-title">
        <div class="app-modal-content">
          <p class="eyebrow">Progress Reset</p>
          <h2 id="reset-progress-title">Reset your saved progress?</h2>
          <p class="app-modal-copy" id="reset-progress-message">
            This will clear all completed lessons and saved quiz scores in this browser.
          </p>
          <div class="app-modal-actions">
            <button class="button button-secondary" type="button" id="reset-progress-cancel">Cancel</button>
            <button class="button button-primary" type="button" id="reset-progress-confirm">Reset Progress</button>
          </div>
        </div>
      </div>
    `;

    document.body.appendChild(modal);

    const cancelButton = modal.querySelector("#reset-progress-cancel");
    const confirmButton = modal.querySelector("#reset-progress-confirm");
    const title = modal.querySelector("#reset-progress-title");
    const message = modal.querySelector("#reset-progress-message");
    let mode = "confirm";

    function closeModal() {
      modal.classList.remove("is-open");
      modal.setAttribute("aria-hidden", "true");
      document.body.classList.remove("has-modal-open");
    }

    function openModal() {
      mode = "confirm";
      title.textContent = "Reset your saved progress?";
      message.textContent = "This will clear all completed lessons and saved quiz scores in this browser.";
      confirmButton.textContent = "Reset Progress";
      cancelButton.textContent = "Cancel";
      cancelButton.hidden = false;

      modal.classList.add("is-open");
      modal.setAttribute("aria-hidden", "false");
      document.body.classList.add("has-modal-open");
      confirmButton.focus();
    }

    function showErrorState() {
      mode = "error";
      title.textContent = "Progress could not be reset";
      message.textContent = "This browser did not allow the saved progress to be cleared. Please try again.";
      confirmButton.textContent = "Close";
      cancelButton.hidden = true;
      confirmButton.focus();
    }

    modal.addEventListener("click", (event) => {
      if (event.target instanceof HTMLElement && event.target.dataset.modalClose === "true") {
        closeModal();
      }
    });

    cancelButton.addEventListener("click", closeModal);

    confirmButton.addEventListener("click", () => {
      if (mode === "error") {
        closeModal();
        return;
      }

      const didReset = resetProgress();
      if (!didReset) {
        showErrorState();
        return;
      }

      window.location.reload();
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && modal.classList.contains("is-open")) {
        closeModal();
      }
    });

    return {
      openModal,
    };
  }

  function attachResetProgressButton() {
    const siteNav = document.querySelector(".site-nav");
    if (!siteNav || document.getElementById("reset-progress-button")) {
      return;
    }

    const actionGroup = document.createElement("div");
    actionGroup.className = "nav-actions";

    const button = document.createElement("button");
    button.type = "button";
    button.id = "reset-progress-button";
    button.className = "button button-secondary nav-reset-button";
    button.textContent = "Reset Progress";

    const modalControls = attachResetProgressModal();

    button.addEventListener("click", () => {
      modalControls?.openModal();
    });

    actionGroup.appendChild(button);
    siteNav.appendChild(actionGroup);
  }

  // ===== STUDY STREAK TRACKING =====
  const streakStorageKey = "grammar-atlas-streak";

  function updateStudyStreak() {
    const today = new Date().toDateString();
    const streak = readJson(streakStorageKey, { lastDate: null, count: 0 });

    if (streak.lastDate === today) {
      return streak.count; // Already updated today
    }

    const lastDate = new Date(streak.lastDate || today);
    const daysDiff = Math.floor((new Date(today) - lastDate) / (1000 * 60 * 60 * 24));

    if (daysDiff === 1) {
      streak.count += 1;
    } else if (daysDiff > 1) {
      streak.count = 1; // Streak broken, restart
    }

    streak.lastDate = today;
    saveJson(streakStorageKey, streak);
    return streak.count;
  }

  function getStudyStreak() {
    const streak = readJson(streakStorageKey, { lastDate: null, count: 0 });
    return streak.count;
  }

  function resetStudyStreak() {
    saveJson(streakStorageKey, { lastDate: null, count: 0 });
  }

  // ===== BOOKMARKS/FAVORITES =====
  const bookmarksStorageKey = "grammar-atlas-bookmarks";

  function getBookmarks() {
    return new Set(readJson(bookmarksStorageKey, []));
  }

  function toggleBookmark(lessonId) {
    const bookmarks = getBookmarks();
    if (bookmarks.has(lessonId)) {
      bookmarks.delete(lessonId);
    } else {
      bookmarks.add(lessonId);
    }
    saveJson(bookmarksStorageKey, [...bookmarks]);
    return bookmarks.has(lessonId); // Return new state
  }

  function isBookmarked(lessonId) {
    return getBookmarks().has(lessonId);
  }

  // ===== PROGRESS EXPORT/IMPORT =====
  function exportProgress() {
    const export_data = {
      exportDate: new Date().toISOString(),
      version: "1.0",
      completedLessons: [...getCompletedLessons()],
      quizScores: getQuizScores(),
      bookmarks: [...getBookmarks()],
      studyStreak: getStudyStreak(),
    };
    return JSON.stringify(export_data, null, 2);
  }

  function importProgress(jsonData) {
    try {
      const data = JSON.parse(jsonData);
      if (!data.version || data.version !== "1.0") {
        throw new Error("Invalid export format");
      }

      saveJson(lessonStorageKey, data.completedLessons || []);
      saveJson(quizStorageKey, data.quizScores || {});
      saveJson(bookmarksStorageKey, data.bookmarks || []);

      return true;
    } catch (error) {
      console.error("Import failed:", error);
      return false;
    }
  }

  // ===== PERFORMANCE ANALYTICS =====
  function getQuizAnalytics() {
    const scores = getQuizScores();
    const attempts = Object.values(scores);

    if (attempts.length === 0) {
      return null;
    }

    const percents = attempts.map((a) => a.percent || 0);
    const average = percents.reduce((a, b) => a + b, 0) / percents.length;
    const highest = Math.max(...percents);
    const lowest = Math.min(...percents);

    return {
      totalAttempts: attempts.length,
      averageScore: Math.round(average),
      highestScore: highest,
      lowestScore: lowest,
      passRate: Math.round((attempts.filter((a) => a.percent >= 70).length / attempts.length) * 100),
    };
  }

  function getLessonProgress() {
    const completed = getCompletedLessons().size;
    const total = allLessons.length;
    return {
      completed,
      total,
      percent: Math.round((completed / total) * 100),
    };
  }

  attachResetProgressButton();

  window.GrammarAtlasApp = {
    // Core API
    curriculum,
    roadmap,
    quizSize,
    allLessons,
    getModule,
    getLesson,
    getLessonIndex,
    nextLesson,
    previousLesson,

    // Lesson tracking
    getCompletedLessons,
    toggleLessonComplete,

    // Quiz tracking
    getQuizScores,
    getQuizScore,
    saveQuizScore,

    // Study streak (NEW)
    updateStudyStreak,
    getStudyStreak,
    resetStudyStreak,

    // Bookmarks (NEW)
    getBookmarks,
    toggleBookmark,
    isBookmarked,

    // Import/Export (NEW)
    exportProgress,
    importProgress,

    // Analytics (NEW)
    getQuizAnalytics,
    getLessonProgress,

    // Utilities
    resetProgress,
    getQueryParam,
    renderStats,
    formatPercent,
    escapeHtml,
  };
})();
