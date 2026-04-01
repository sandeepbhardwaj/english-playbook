(function () {
  const app = window.GrammarAtlasApp;
  const quizBank = window.GrammarAtlasQuizBank;
  const enhancements = window.GrammarAtlasEnhancements || {};
  const lessonProgress = app.getLessonProgress();
  const quizAnalytics = app.getQuizAnalytics();
  const diagnosticResult = app.getDiagnosticResult();
  const recommendedLessons = app.getRecommendedNextLessons(3);
  const streakCount = app.getStudyStreak();
  const bookmarkCount = app.getBookmarks().size;

  app.renderStats("home-stats");

  const startHerePanel = document.getElementById("start-here-panel");
  const startHere = enhancements.startHere || [];
  startHerePanel.innerHTML = `
    <div class="section-heading">
      <p class="eyebrow">Start Here</p>
      <h2>Choose the path that fits your goal</h2>
    </div>
    <div class="card-grid">
      ${startHere
        .map(
          (item) => `
            <article class="summary-card">
              <div class="summary-topline">
                <h3>${item.title}</h3>
                <span class="chip">Path</span>
              </div>
              <p class="lesson-note"><strong>${item.path}</strong></p>
              <p class="lesson-summary">${item.detail}</p>
              <p class="lesson-note">${item.action}</p>
            </article>
          `
        )
        .join("")}
    </div>
  `;

  const moduleGrid = document.getElementById("home-module-grid");
  moduleGrid.innerHTML = app.curriculum
    .map((module) => {
      const lessonLinks = module.lessons
        .map(
          (lesson) => `
            <a class="chip-link" href="lesson.html?lesson=${lesson.id}">
              ${lesson.title}
            </a>
          `
        )
        .join("");

      return `
        <article class="module-card">
          <div class="module-topline">
            <span class="chip">${module.level}</span>
            <span class="chip">${module.duration}</span>
          </div>
          <h3>${module.title}</h3>
          <p class="module-description">${module.description}</p>
          <p class="lesson-note"><strong>Portfolio task:</strong> ${module.portfolioTask}</p>
          <div class="chip-row">${lessonLinks}</div>
        </article>
      `;
    })
    .join("");

  const tenseLesson = app.getLesson("present-family");
  const spotlight = document.getElementById("story-spotlight");
  spotlight.innerHTML = `
    <div class="section-heading">
      <p class="eyebrow">Story-Based Teaching</p>
      <h2>${tenseLesson.story.title}</h2>
    </div>
    <div class="card-grid">
      <article class="story-card">
        <p class="story-note">${tenseLesson.story.overview}</p>
        <p class="story-text">${tenseLesson.story.passages[0]}</p>
      </article>
      <article class="story-card">
        <h3>Why it works</h3>
        <ul class="story-list">
          ${tenseLesson.story.analysis.map((item) => `<li>${item}</li>`).join("")}
        </ul>
        <div class="card-actions">
          <a class="button button-primary" href="lesson.html?lesson=${tenseLesson.id}">Explore Story Lesson</a>
          <a class="button button-secondary" href="quiz.html?lesson=${tenseLesson.id}">
            Take ${quizBank.getQuiz(tenseLesson.id).length}-Question Quiz
          </a>
          <a class="button button-secondary" href="quiz.html?lesson=${tenseLesson.id}&mode=advanced">
            Try ${quizBank.getQuiz(tenseLesson.id, "advanced").length}-Question Advanced Quiz
          </a>
        </div>
      </article>
    </div>
  `;

  const homeTutorTools = document.getElementById("home-tutor-tools");
  const placementModule = diagnosticResult ? app.getModule(diagnosticResult.recommendedModuleId) : null;
  const recommendationLinks = recommendedLessons.length
    ? recommendedLessons
        .map((lesson) => `<a class="chip-link" href="lesson.html?lesson=${lesson.id}">${lesson.title}</a>`)
        .join("")
    : '<span class="chip">Take a few quizzes to unlock review suggestions</span>';

  homeTutorTools.innerHTML = `
    <div class="section-heading">
      <p class="eyebrow">Tutor Tools</p>
      <h2>Use the platform like a personal study coach</h2>
    </div>
    <div class="card-grid">
      <article class="summary-card">
        <div class="summary-topline">
          <h3>Diagnostic Placement</h3>
          <span class="chip">${diagnosticResult ? `${diagnosticResult.percent}% saved` : "Not started"}</span>
        </div>
        <p class="lesson-note">
          ${
            placementModule
              ? `Your latest placement suggests starting with ${placementModule.title}.`
              : "Take the 12-question diagnostic to get a static placement recommendation."
          }
        </p>
        <div class="card-actions">
          <a class="button button-primary" href="diagnostic.html">${diagnosticResult ? "Retake Diagnostic" : "Take Diagnostic"}</a>
          <a class="button button-secondary" href="dashboard.html">Open Dashboard</a>
        </div>
      </article>
      <article class="summary-card">
        <div class="summary-topline">
          <h3>Progress Snapshot</h3>
          <span class="chip">${lessonProgress.percent}% complete</span>
        </div>
        <ul class="bullet-list">
          <li><strong>Study streak:</strong> ${streakCount} day${streakCount === 1 ? "" : "s"}</li>
          <li><strong>Bookmarked lessons:</strong> ${bookmarkCount}</li>
          <li><strong>Average quiz:</strong> ${quizAnalytics ? `${quizAnalytics.averageScore}%` : "No scores yet"}</li>
        </ul>
        <div class="card-actions">
          <a class="button button-primary" href="dashboard.html">See Review Plan</a>
          <a class="button button-secondary" href="curriculum.html">Continue Lessons</a>
        </div>
      </article>
      <article class="summary-card">
        <div class="summary-topline">
          <h3>Recommended Next Lessons</h3>
          <span class="chip">${recommendedLessons.length ? "Personalized" : "Waiting for data"}</span>
        </div>
        <p class="lesson-note">
          The static recommendation engine uses quiz scores, completion state, and bookmarks to decide what deserves review next.
        </p>
        <div class="chip-row">${recommendationLinks}</div>
      </article>
      <article class="summary-card">
        <div class="summary-topline">
          <h3>Error Review</h3>
          <span class="chip">Feedback loop</span>
        </div>
        <p class="lesson-note">
          Save repeated grammar mistakes in the error log so your review stays specific and tied to real weak areas.
        </p>
        <div class="card-actions">
          <a class="button button-primary" href="dashboard.html#dashboard-error-log">Open Error Log</a>
          <a class="button button-secondary" href="dashboard.html">Open Dashboard</a>
        </div>
      </article>
    </div>
  `;
})();
