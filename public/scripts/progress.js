(function () {
  const lessonProgressKey = 'grammar-atlas.lesson-progress.v1';
  const errorLogKey = 'grammar-atlas.error-log.v1';
  const activityKey = 'grammar-atlas.activity.v1';
  const quizKeyPrefix = 'grammar-atlas.quiz.';

  function readJson(key, fallback) {
    try {
      const raw = window.localStorage.getItem(key);
      return raw ? JSON.parse(raw) : fallback;
    } catch {
      return fallback;
    }
  }

  function writeJson(key, value) {
    window.localStorage.setItem(key, JSON.stringify(value));
  }

  function todayStamp() {
    return new Date().toISOString().slice(0, 10);
  }

  function touchActivity() {
    const today = todayStamp();
    const activity = readJson(activityKey, []);

    if (!activity.includes(today)) {
      activity.push(today);
      writeJson(activityKey, activity.slice(-60));
    }
  }

  function getActivityLog() {
    return readJson(activityKey, []);
  }

  function getStudyStreak() {
    const activity = [...getActivityLog()].sort();

    if (!activity.length) {
      return 0;
    }

    let streak = 1;

    for (let index = activity.length - 1; index > 0; index -= 1) {
      const current = new Date(activity[index]);
      const previous = new Date(activity[index - 1]);
      const delta = Math.round((current - previous) / 86400000);

      if (delta === 1) {
        streak += 1;
      } else if (delta > 1) {
        break;
      }
    }

    return streak;
  }

  function getLessonProgressMap() {
    return readJson(lessonProgressKey, {});
  }

  function getLessonState(slug) {
    const progress = getLessonProgressMap();
    return {
      completed: false,
      bookmarked: false,
      ...progress[slug],
    };
  }

  function updateLessonState(slug, patch) {
    const progress = getLessonProgressMap();
    const nextState = {
      completed: false,
      bookmarked: false,
      ...progress[slug],
      ...patch,
      updatedAt: new Date().toISOString(),
    };

    progress[slug] = nextState;
    writeJson(lessonProgressKey, progress);
    touchActivity();
    return nextState;
  }

  function toggleLessonComplete(slug) {
    const current = getLessonState(slug);
    return updateLessonState(slug, { completed: !current.completed });
  }

  function toggleLessonBookmark(slug) {
    const current = getLessonState(slug);
    return updateLessonState(slug, { bookmarked: !current.bookmarked });
  }

  function getQuizScores() {
    const scores = {};

    for (let index = 0; index < window.localStorage.length; index += 1) {
      const key = window.localStorage.key(index);

      if (!key || !key.startsWith(quizKeyPrefix)) {
        continue;
      }

      try {
        scores[key.slice(quizKeyPrefix.length)] = JSON.parse(window.localStorage.getItem(key) || 'null');
      } catch {}
    }

    return scores;
  }

  function getQuizScore(slug) {
    return getQuizScores()[slug] || null;
  }

  function saveQuizScore(slug, payload) {
    window.localStorage.setItem(`${quizKeyPrefix}${slug}`, JSON.stringify(payload));
    touchActivity();
  }

  function getErrorLog() {
    return readJson(errorLogKey, []);
  }

  function addErrorLogEntry(entry) {
    const current = getErrorLog();
    const nextEntry = {
      id: `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
      createdAt: new Date().toISOString(),
      lessonSlug: entry.lessonSlug || '',
      title: entry.title || '',
      mistake: entry.mistake || '',
      correction: entry.correction || '',
      note: entry.note || '',
    };

    current.unshift(nextEntry);
    writeJson(errorLogKey, current.slice(0, 50));
    touchActivity();
    return nextEntry;
  }

  function removeErrorLogEntry(id) {
    const filtered = getErrorLog().filter((entry) => entry.id !== id);
    writeJson(errorLogKey, filtered);
    touchActivity();
  }

  function exportProgress() {
    return JSON.stringify(
      {
        version: 1,
        exportedAt: new Date().toISOString(),
        lessons: getLessonProgressMap(),
        quizzes: getQuizScores(),
        errorLog: getErrorLog(),
        activity: getActivityLog(),
      },
      null,
      2
    );
  }

  function importProgress(raw) {
    try {
      const parsed = JSON.parse(raw);

      if (!parsed || typeof parsed !== 'object') {
        return false;
      }

      writeJson(lessonProgressKey, parsed.lessons && typeof parsed.lessons === 'object' ? parsed.lessons : {});
      writeJson(errorLogKey, Array.isArray(parsed.errorLog) ? parsed.errorLog : []);
      writeJson(activityKey, Array.isArray(parsed.activity) ? parsed.activity : []);

      const quizzes = parsed.quizzes && typeof parsed.quizzes === 'object' ? parsed.quizzes : {};
      const existingQuizKeys = [];

      for (let index = 0; index < window.localStorage.length; index += 1) {
        const key = window.localStorage.key(index);
        if (key && key.startsWith(quizKeyPrefix)) {
          existingQuizKeys.push(key);
        }
      }

      existingQuizKeys.forEach((key) => window.localStorage.removeItem(key));

      Object.entries(quizzes).forEach(([slug, payload]) => {
        window.localStorage.setItem(`${quizKeyPrefix}${slug}`, JSON.stringify(payload));
      });

      touchActivity();
      return true;
    } catch {
      return false;
    }
  }

  window.GrammarAtlasProgress = {
    addErrorLogEntry,
    exportProgress,
    getActivityLog,
    getErrorLog,
    getLessonProgressMap,
    getLessonState,
    getQuizScore,
    getQuizScores,
    getStudyStreak,
    importProgress,
    removeErrorLogEntry,
    saveQuizScore,
    toggleLessonBookmark,
    toggleLessonComplete,
    updateLessonState,
  };
})();
