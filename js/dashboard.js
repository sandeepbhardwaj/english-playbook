(function () {
  const app = window.GrammarAtlasApp;
  const metricsTarget = document.getElementById("dashboard-metrics");
  const placementTarget = document.getElementById("dashboard-placement");
  const mainGrid = document.getElementById("dashboard-main-grid");
  const reviewPlanTarget = document.getElementById("dashboard-review-plan");
  const progressToolsTarget = document.getElementById("dashboard-progress-tools");
  const errorLogTarget = document.getElementById("dashboard-error-log");
  const lessonProgress = app.getLessonProgress();
  const quizAnalytics = app.getQuizAnalytics();
  const lessonLookup = new Map(app.allLessons.map((lesson) => [lesson.id, lesson]));
  const bookmarks = [...app.getBookmarks()].map((lessonId) => lessonLookup.get(lessonId)).filter(Boolean);
  const weakLessons = app.getWeakLessons(3);
  const recommendations = app.getReviewRecommendations(4);
  const diagnosticResult = app.getDiagnosticResult();
  const weeklyPlan = app.getWeeklyReviewPlan();
  const errorLogEntries = app.getErrorLogEntries();

  document.title = "Grammar Atlas | Dashboard";

  metricsTarget.innerHTML = [
    {
      label: "Study Streak",
      value: `${app.getStudyStreak()} day${app.getStudyStreak() === 1 ? "" : "s"}`,
    },
    {
      label: "Lessons Completed",
      value: `${lessonProgress.completed}/${lessonProgress.total}`,
    },
    {
      label: "Course Progress",
      value: `${lessonProgress.percent}%`,
    },
    {
      label: "Average Quiz",
      value: quizAnalytics ? `${quizAnalytics.averageScore}%` : "No scores yet",
    },
  ]
    .map(
      (metric) => `
        <article class="stat-card">
          <span class="stat-label">${metric.label}</span>
          <strong class="stat-value">${metric.value}</strong>
        </article>
      `
    )
    .join("");

  if (diagnosticResult) {
    const module = app.getModule(diagnosticResult.recommendedModuleId);
    const lessonLinks = (diagnosticResult.recommendedLessonIds || [])
      .map((lessonId) => lessonLookup.get(lessonId))
      .filter(Boolean)
      .slice(0, 3)
      .map((lesson) => `<a class="chip-link" href="lesson.html?lesson=${lesson.id}">${lesson.title}</a>`)
      .join("");

    placementTarget.innerHTML = `
      <div class="section-heading">
        <p class="eyebrow">Placement Snapshot</p>
        <h2>${module ? `Start from ${module.title}` : "Your diagnostic recommendation is ready"}</h2>
      </div>
      <p class="lesson-summary">
        Latest diagnostic score: <strong>${diagnosticResult.percent}%</strong>.
        ${
          module
            ? `The platform recommends beginning with ${module.title} to strengthen your current control before moving forward.`
            : "Use the linked lessons below as your best starting point."
        }
      </p>
      <div class="chip-row">
        ${lessonLinks || '<span class="chip">No lesson recommendations saved yet</span>'}
      </div>
      <div class="card-actions">
        <a class="button button-primary" href="${module ? `lesson.html?lesson=${module.lessons[0].id}` : "curriculum.html"}">Start Recommended Lesson</a>
        <a class="button button-secondary" href="diagnostic.html">Retake Diagnostic</a>
      </div>
    `;
  } else {
    placementTarget.innerHTML = `
      <div class="section-heading">
        <p class="eyebrow">Placement Snapshot</p>
        <h2>Take the 12-question diagnostic before you commit to a study path.</h2>
      </div>
      <p class="lesson-summary">
        The diagnostic gives you a static, browser-saved recommendation based on your answers across foundations, tense control,
        sentence accuracy, and style.
      </p>
      <div class="card-actions">
        <a class="button button-primary" href="diagnostic.html">Take Diagnostic Test</a>
      </div>
    `;
  }

  mainGrid.innerHTML = `
    <section class="panel">
      <div class="section-heading">
        <p class="eyebrow">Review Next</p>
        <h2>Recommended lessons</h2>
      </div>
      ${
        recommendations.length
          ? recommendations
              .map(
                (entry) => `
                  <article class="summary-card dashboard-mini-card">
                    <div class="summary-topline">
                      <h3>${entry.lesson.title}</h3>
                      <span class="chip">${entry.primaryPercent !== null ? `${Math.round(entry.primaryPercent)}%` : "Next up"}</span>
                    </div>
                    <p class="lesson-note">${entry.reason}</p>
                    <div class="card-actions">
                      <a class="button button-primary" href="lesson.html?lesson=${entry.lesson.id}">Open Lesson</a>
                      <a class="button button-secondary" href="quiz.html?lesson=${entry.lesson.id}">Review Quiz</a>
                    </div>
                  </article>
                `
              )
              .join("")
          : '<div class="empty-state"><h3>No recommendations yet</h3><p class="lesson-note">Take a few quizzes and this area will start guiding your review.</p></div>'
      }
    </section>
    <section class="panel">
      <div class="section-heading">
        <p class="eyebrow">Saved Focus</p>
        <h2>Bookmarks and weak areas</h2>
      </div>
      <div class="dashboard-split-list">
        <div>
          <h3>Bookmarked Lessons</h3>
          ${
            bookmarks.length
              ? `<div class="chip-row">${bookmarks
                  .map((lesson) => `<a class="chip-link" href="lesson.html?lesson=${lesson.id}">${lesson.title}</a>`)
                  .join("")}</div>`
              : '<p class="lesson-note">Bookmark lessons from the lesson or curriculum pages to keep them in one review list.</p>'
          }
        </div>
        <div class="portfolio-panel">
          <h3>Weakest Quiz Areas</h3>
          ${
            weakLessons.length
              ? `<ul class="bullet-list">${weakLessons
                  .map(
                    (entry) =>
                      `<li><strong>${entry.lesson.title}</strong> — ${Math.round(entry.primaryPercent)}%. ${entry.reason}</li>`
                  )
                  .join("")}</ul>`
              : '<p class="lesson-note">No weak-area data yet. Finish a few quizzes and this list will become personalized.</p>'
          }
        </div>
        <div class="portfolio-panel">
          <h3>Tutor Tools</h3>
          <div class="card-actions">
            <a class="button button-primary" href="dashboard.html#dashboard-error-log">Open Error Log</a>
            <a class="button button-secondary" href="curriculum.html">Browse Full Curriculum</a>
          </div>
        </div>
      </div>
    </section>
  `;

  reviewPlanTarget.innerHTML = `
    <div class="section-heading">
      <p class="eyebrow">Revision Planner</p>
      <h2>A static weekly plan generated from your saved progress</h2>
    </div>
    <div class="card-grid">
      ${weeklyPlan
        .map(
          (item) => `
            <article class="summary-card">
              <div class="summary-topline">
                <h3>${item.day}</h3>
                <span class="chip">Study block</span>
              </div>
              <p class="lesson-summary"><strong>${item.title}</strong></p>
              <p class="lesson-note">${item.detail}</p>
              <div class="card-actions">
                <a class="button button-secondary" href="${item.href}">Open Task</a>
              </div>
            </article>
          `
        )
        .join("")}
    </div>
  `;

  progressToolsTarget.innerHTML = `
    <div class="section-heading">
      <p class="eyebrow">Progress Tools</p>
      <h2>Back up or restore your browser-saved study data</h2>
    </div>
    <p class="lesson-note">
      Export progress if you want a manual backup. Import lets you restore quizzes, bookmarks, streaks, diagnostic results,
      and your error log on the same or another browser.
    </p>
    <textarea id="progress-transfer-box" class="app-textarea" rows="10" placeholder="Exported progress JSON will appear here, or paste saved JSON to import it."></textarea>
    <div class="card-actions">
      <button class="button button-primary" type="button" id="progress-export">Export Progress</button>
      <button class="button button-secondary" type="button" id="progress-import">Import Progress</button>
    </div>
    <p class="lesson-note" id="progress-transfer-status"></p>
  `;

  errorLogTarget.innerHTML = `
    <div class="section-heading">
      <p class="eyebrow">Error Log</p>
      <h2>Track the grammar mistakes you repeat most often</h2>
    </div>
    <form class="error-log-form" id="error-log-form">
      <div class="field-grid">
        <label class="field-block">
          <span>Lesson</span>
          <select id="error-log-lesson">
            <option value="">General grammar issue</option>
            ${app.allLessons.map((lesson) => `<option value="${lesson.id}">${lesson.title}</option>`).join("")}
          </select>
        </label>
        <label class="field-block">
          <span>Focus title</span>
          <input id="error-log-title" type="text" placeholder="Example: Article use in introductions" required />
        </label>
      </div>
      <label class="field-block">
        <span>Mistake pattern</span>
        <textarea id="error-log-mistake" rows="3" required placeholder="What do you usually write or say incorrectly?"></textarea>
      </label>
      <label class="field-block">
        <span>Better correction</span>
        <textarea id="error-log-correction" rows="3" placeholder="Write the corrected version or rule."></textarea>
      </label>
      <label class="field-block">
        <span>Review note</span>
        <textarea id="error-log-note" rows="2" placeholder="Add a memory tip, context, or reminder."></textarea>
      </label>
      <div class="card-actions">
        <button class="button button-primary" type="submit">Save Error Log Entry</button>
      </div>
    </form>
    <div class="stack-list">
      ${
        errorLogEntries.length
          ? errorLogEntries
              .map((entry) => {
                const lesson = entry.lessonId ? app.getLesson(entry.lessonId) : null;
                return `
                  <article class="summary-card error-log-card">
                    <div class="summary-topline">
                      <h3>${entry.title}</h3>
                      <span class="chip">${lesson ? lesson.title : "General"}</span>
                    </div>
                    <p class="lesson-note"><strong>Mistake:</strong> ${entry.mistake}</p>
                    <p class="lesson-note"><strong>Correction:</strong> ${entry.correction || "No correction saved yet."}</p>
                    <p class="lesson-note"><strong>Note:</strong> ${entry.note || "No note added yet."}</p>
                    <div class="card-actions">
                      ${lesson ? `<a class="button button-secondary" href="lesson.html?lesson=${lesson.id}">Review Lesson</a>` : ""}
                      <button class="button button-secondary" type="button" data-remove-error="${entry.id}">Delete</button>
                    </div>
                  </article>
                `;
              })
              .join("")
          : '<div class="empty-state"><h3>No error log entries yet</h3><p class="lesson-note">Add your recurring mistakes here so your review becomes specific instead of vague.</p></div>'
      }
    </div>
  `;

  const transferBox = document.getElementById("progress-transfer-box");
  const transferStatus = document.getElementById("progress-transfer-status");

  document.getElementById("progress-export").addEventListener("click", () => {
    transferBox.value = app.exportProgress();
    transferStatus.textContent = "Progress exported into the box. Save it anywhere you like.";
  });

  document.getElementById("progress-import").addEventListener("click", () => {
    const didImport = app.importProgress(transferBox.value);
    transferStatus.textContent = didImport
      ? "Progress imported successfully. Reloading now."
      : "Import failed. Check that the pasted JSON came from Grammar Atlas.";
    if (didImport) {
      window.setTimeout(() => window.location.reload(), 600);
    }
  });

  document.getElementById("error-log-form").addEventListener("submit", (event) => {
    event.preventDefault();
    app.addErrorLogEntry({
      lessonId: document.getElementById("error-log-lesson").value,
      title: document.getElementById("error-log-title").value.trim(),
      mistake: document.getElementById("error-log-mistake").value.trim(),
      correction: document.getElementById("error-log-correction").value.trim(),
      note: document.getElementById("error-log-note").value.trim(),
    });
    window.location.reload();
  });

  errorLogTarget.querySelectorAll("[data-remove-error]").forEach((button) => {
    button.addEventListener("click", () => {
      app.removeErrorLogEntry(button.dataset.removeError);
      window.location.reload();
    });
  });
})();
