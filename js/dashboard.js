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
  const nextRecommendation = recommendations[0] || null;
  const continueLesson = app.getLessonPerformanceEntries().find((entry) => !entry.completed)?.lesson || app.allLessons[0];
  const primaryWeakLesson = weakLessons[0]?.lesson || nextRecommendation?.lesson || continueLesson;
  const hasStudyHistory =
    lessonProgress.completed > 0 || Boolean(quizAnalytics) || bookmarks.length > 0 || errorLogEntries.length > 0;
  const needsOnboarding = !diagnosticResult && !hasStudyHistory;

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
      .map((lesson) => `<a class="text-link" href="lesson.html?lesson=${lesson.id}">${lesson.title}</a>`)
      .join("");

    placementTarget.innerHTML = `
      <div class="section-heading">
        <p class="eyebrow">Study Command Center</p>
        <h2>Pick the next best action instead of browsing everything at once.</h2>
      </div>
      <div class="command-grid">
        <article class="summary-card command-card command-card-primary">
          <div class="summary-topline">
            <h3>Continue Learning</h3>
            <span class="chip">${continueLesson.moduleTitle}</span>
          </div>
          <p class="lesson-summary"><strong>${continueLesson.title}</strong></p>
          <p class="lesson-note">Use this as your main forward-moving lesson in the course flow.</p>
          <div class="card-actions">
            <a class="button button-primary" href="lesson.html?lesson=${continueLesson.id}">Open Next Lesson</a>
          </div>
        </article>
        <article class="summary-card command-card">
          <div class="summary-topline">
            <h3>Review Weakest Area</h3>
            <span class="chip">${weakLessons.length ? `${Math.round(weakLessons[0].primaryPercent)}%` : "Suggested"}</span>
          </div>
          <p class="lesson-summary"><strong>${primaryWeakLesson.title}</strong></p>
          <p class="lesson-note">
            ${weakLessons.length ? weakLessons[0].reason : "Build quiz history and this area will become more personalized."}
          </p>
          <div class="card-actions">
            <a class="button button-secondary" href="quiz.html?lesson=${primaryWeakLesson.id}">Review Quiz</a>
            <a class="button button-utility" href="lesson.html?lesson=${primaryWeakLesson.id}">Open Lesson</a>
          </div>
        </article>
        <article class="summary-card command-card">
          <div class="summary-topline">
            <h3>Placement Anchor</h3>
            <span class="chip">${diagnosticResult.percent}%</span>
          </div>
          <p class="lesson-summary"><strong>${module ? module.title : "Diagnostic recommendation ready"}</strong></p>
          <p class="lesson-note">
            ${
              module
                ? `Latest diagnostic suggests strengthening ${module.title} before pushing ahead too quickly.`
                : "Use the saved recommendations below as your best starting point."
            }
          </p>
          <div class="text-link-row">
            ${lessonLinks || '<span class="section-kicker">No lesson recommendations saved yet</span>'}
          </div>
          <div class="card-actions">
            <a class="button button-secondary" href="${module ? `lesson.html?lesson=${module.lessons[0].id}` : "curriculum.html"}">Start Placement Path</a>
            <a class="button button-utility" href="diagnostic.html">Retake Diagnostic</a>
          </div>
        </article>
      </div>
    `;
  } else {
    placementTarget.innerHTML = `
      <div class="section-heading">
        <p class="eyebrow">Study Command Center</p>
        <h2>Start with one focused action instead of deciding from the whole curriculum.</h2>
      </div>
      <div class="command-grid">
        <article class="summary-card command-card command-card-primary">
          <div class="summary-topline">
            <h3>${needsOnboarding ? "Start Course" : "Continue Learning"}</h3>
            <span class="chip">${continueLesson.moduleTitle}</span>
          </div>
          <p class="lesson-summary"><strong>${continueLesson.title}</strong></p>
          <p class="lesson-note">
            ${
              needsOnboarding
                ? "If you want the fastest clean start, begin here and build your first layer of progress data."
                : "If you want to start immediately, this is the cleanest next lesson in the course flow."
            }
          </p>
          <div class="card-actions">
            <a class="button button-primary" href="lesson.html?lesson=${continueLesson.id}">${needsOnboarding ? "Start First Lesson" : "Open Next Lesson"}</a>
          </div>
        </article>
        <article class="summary-card command-card">
          <div class="summary-topline">
            <h3>Get Placement Help</h3>
            <span class="chip">12 questions</span>
          </div>
          <p class="lesson-note">
            The diagnostic gives you a browser-saved recommendation based on foundations, tense control, sentence accuracy, complex grammar, and style.
          </p>
          <div class="card-actions">
            <a class="button button-secondary" href="diagnostic.html">Take Diagnostic Test</a>
          </div>
        </article>
        <article class="summary-card command-card">
          <div class="summary-topline">
            <h3>${needsOnboarding ? "Build Your Review Loop" : "Review Strategy"}</h3>
            <span class="chip">${recommendations.length ? "Active" : needsOnboarding ? "Starter mode" : "Waiting for data"}</span>
          </div>
          <p class="lesson-note">
            ${
              nextRecommendation
                ? nextRecommendation.reason
                : needsOnboarding
                  ? "Complete one lesson, one core quiz, and one bookmark, and this dashboard will start feeling much more personalized."
                  : "Finish a few quizzes and this dashboard will start giving you stronger review guidance."
            }
          </p>
          <div class="card-actions">
            <a class="button button-secondary" href="curriculum.html">Browse Curriculum</a>
            <a class="button button-utility" href="dashboard.html#dashboard-error-log">Open Error Log</a>
          </div>
        </article>
      </div>
    `;
  }

  mainGrid.innerHTML = `
    <section class="panel">
      <div class="section-heading">
        <p class="eyebrow">Review Queue</p>
        <h2>Your next focused study moves</h2>
      </div>
      ${
        recommendations.length
          ? recommendations
              .map(
                (entry) => `
                  <article class="summary-card dashboard-mini-card">
                    <div class="summary-topline">
                      <h3>${entry.lesson.title}</h3>
                      <span class="section-kicker">${entry.primaryPercent !== null ? `${Math.round(entry.primaryPercent)}%` : "Next up"}</span>
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
          : needsOnboarding
            ? `
                <div class="empty-state empty-state-guided">
                  <h3>Build your review engine</h3>
                  <p class="lesson-note">This area fills itself in after a small amount of study activity. Use these first steps to unlock personalized review.</p>
                  <div class="guided-steps">
                    <div class="guided-step">
                      <span class="guided-step-index">1</span>
                      <p class="lesson-note"><strong>Start one lesson.</strong> Open the first foundation lesson and read through the main sections.</p>
                    </div>
                    <div class="guided-step">
                      <span class="guided-step-index">2</span>
                      <p class="lesson-note"><strong>Take one core quiz.</strong> The dashboard uses quiz scores to find weak areas and next-review candidates.</p>
                    </div>
                    <div class="guided-step">
                      <span class="guided-step-index">3</span>
                      <p class="lesson-note"><strong>Bookmark one topic.</strong> Saved lessons help the review loop feel more intentional.</p>
                    </div>
                  </div>
                  <div class="card-actions">
                    <a class="button button-primary" href="lesson.html?lesson=${continueLesson.id}">Start First Lesson</a>
                    <a class="button button-secondary" href="diagnostic.html">Take Diagnostic Test</a>
                    <a class="button button-utility" href="curriculum.html">Browse Curriculum</a>
                  </div>
                </div>
              `
            : '<div class="empty-state"><h3>No recommendations yet</h3><p class="lesson-note">Take a few quizzes and this area will start guiding your review.</p></div>'
      }
    </section>
    <section class="panel">
      <div class="section-heading">
        <p class="eyebrow">Study Signals</p>
        <h2>What to revisit, save, and monitor</h2>
      </div>
      <div class="dashboard-split-list">
        <div>
          <h3>Bookmarked Lessons</h3>
          ${
            bookmarks.length
              ? `<div class="text-link-row">${bookmarks
                  .map((lesson) => `<a class="text-link" href="lesson.html?lesson=${lesson.id}">${lesson.title}</a>`)
                  .join("")}</div>`
              : `
                  <p class="lesson-note">Bookmark lessons from the lesson or curriculum pages to keep them in one review list.</p>
                  <div class="card-actions">
                    <a class="button button-secondary" href="curriculum.html">Browse Lessons</a>
                  </div>
                `
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
              : `
                  <p class="lesson-note">No weak-area data yet. Finish a few quizzes and this list will become personalized.</p>
                  <div class="card-actions">
                    <a class="button button-secondary" href="lesson.html?lesson=${continueLesson.id}">Open Suggested Lesson</a>
                    <a class="button button-utility" href="diagnostic.html">Take Diagnostic</a>
                  </div>
                `
          }
        </div>
        <div class="portfolio-panel">
          <h3>Tutor Tools</h3>
          <div class="card-actions">
            <a class="button button-secondary" href="dashboard.html#dashboard-error-log">Open Error Log</a>
            <a class="button button-utility" href="curriculum.html">Browse Full Curriculum</a>
          </div>
        </div>
      </div>
    </section>
  `;

  reviewPlanTarget.innerHTML = `
    <div class="section-heading">
      <p class="eyebrow">Revision Planner</p>
      <h2>A weekly plan generated from your saved progress</h2>
    </div>
    <div class="card-grid">
      ${weeklyPlan
        .map(
          (item) => `
            <article class="summary-card">
              <div class="summary-topline">
                <h3>${item.day}</h3>
                <span class="section-kicker">Study block</span>
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
      <p class="eyebrow">Admin Tools</p>
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
                      <span class="section-kicker">${lesson ? lesson.title : "General"}</span>
                    </div>
                    <p class="lesson-note"><strong>Mistake:</strong> ${entry.mistake}</p>
                    <p class="lesson-note"><strong>Correction:</strong> ${entry.correction || "No correction saved yet."}</p>
                    <p class="lesson-note"><strong>Note:</strong> ${entry.note || "No note added yet."}</p>
                    <div class="card-actions">
                      ${lesson ? `<a class="button button-secondary" href="lesson.html?lesson=${lesson.id}">Review Lesson</a>` : ""}
                      <button class="button button-utility" type="button" data-remove-error="${entry.id}">Delete</button>
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
