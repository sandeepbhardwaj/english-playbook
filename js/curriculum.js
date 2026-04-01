(function () {
  const app = window.GrammarAtlasApp;
  const quizBank = window.GrammarAtlasQuizBank;
  const enhancements = window.GrammarAtlasEnhancements || {};
  const stack = document.getElementById("curriculum-stack");
  const toolsPanel = document.getElementById("curriculum-tools");
  const blueprint = enhancements.portalBlueprint;
  const blueprintPanel = document.getElementById("curriculum-blueprint");
  const state = {
    search: "",
    status: "all",
    moduleId: "all",
  };

  app.renderStats("curriculum-stats");

  if (blueprintPanel && blueprint) {
    blueprintPanel.innerHTML = `
      <div class="section-heading">
        <p class="eyebrow">Portal Blueprint</p>
        <h2>${blueprint.title}</h2>
      </div>
      <div class="card-grid">
        ${blueprint.pillars
          .map(
            (item) => `
              <article class="summary-card">
                <div class="summary-topline">
                  <h3>${item.title}</h3>
                  <span class="chip">Design</span>
                </div>
                <p class="lesson-summary">${item.detail}</p>
              </article>
            `
          )
          .join("")}
      </div>
    `;
  }

  function getNeedsReviewSet() {
    return new Set(app.getReviewRecommendations(12).map((entry) => entry.lesson.id));
  }

  function getLessonStatus(lesson) {
    const completed = app.getCompletedLessons();
    const standard = app.getQuizScore(lesson.id);
    const advanced = app.getQuizScore(lesson.id, "advanced");
    const attempted = Boolean(standard || advanced);

    if (completed.has(lesson.id)) {
      return "completed";
    }
    if (attempted) {
      return "in-progress";
    }
    return "not-started";
  }

  function matchesStatus(lesson, needsReview) {
    const status = getLessonStatus(lesson);
    if (state.status === "all") {
      return true;
    }
    if (state.status === "bookmarked") {
      return app.isBookmarked(lesson.id);
    }
    if (state.status === "needs-review") {
      return needsReview.has(lesson.id);
    }
    return status === state.status;
  }

  function renderTools() {
    toolsPanel.innerHTML = `
      <div class="section-heading">
        <p class="eyebrow">Search and Filter</p>
        <h2>Find lessons by topic, status, bookmark, or review need</h2>
      </div>
      <div class="filter-row">
        <label class="field-block">
          <span>Search lessons</span>
          <input class="filter-input" id="curriculum-search" type="search" placeholder="Search by lesson, summary, focus, or module" value="${app.escapeHtml(state.search)}" />
        </label>
        <label class="field-block">
          <span>Status</span>
          <select class="filter-select" id="curriculum-status">
            <option value="all"${state.status === "all" ? " selected" : ""}>All lessons</option>
            <option value="needs-review"${state.status === "needs-review" ? " selected" : ""}>Needs review</option>
            <option value="bookmarked"${state.status === "bookmarked" ? " selected" : ""}>Bookmarked</option>
            <option value="completed"${state.status === "completed" ? " selected" : ""}>Completed</option>
            <option value="in-progress"${state.status === "in-progress" ? " selected" : ""}>In progress</option>
            <option value="not-started"${state.status === "not-started" ? " selected" : ""}>Not started</option>
          </select>
        </label>
        <label class="field-block">
          <span>Module</span>
          <select class="filter-select" id="curriculum-module">
            <option value="all">All modules</option>
            ${app.curriculum
              .map(
                (module) =>
                  `<option value="${module.id}"${state.moduleId === module.id ? " selected" : ""}>${module.title}</option>`
              )
              .join("")}
          </select>
        </label>
      </div>
      <p class="lesson-note">Tip: use “Needs review” after quizzes to get a static recommendation-driven revision queue.</p>
    `;

    document.getElementById("curriculum-search").addEventListener("input", (event) => {
      state.search = event.target.value;
      renderCurriculum();
    });

    document.getElementById("curriculum-status").addEventListener("change", (event) => {
      state.status = event.target.value;
      renderCurriculum();
    });

    document.getElementById("curriculum-module").addEventListener("change", (event) => {
      state.moduleId = event.target.value;
      renderCurriculum();
    });
  }

  function renderCurriculum() {
    const searchValue = state.search.trim().toLowerCase();
    const completed = app.getCompletedLessons();
    const needsReview = getNeedsReviewSet();

    const moduleMarkup = app.curriculum
      .map((module) => {
        if (state.moduleId !== "all" && state.moduleId !== module.id) {
          return "";
        }

        const lessonTiles = module.lessons
          .filter((lesson) => {
            const searchBlob = [
              module.title,
              lesson.title,
              lesson.summary,
              lesson.focus,
              ...(lesson.rules || []),
            ]
              .join(" ")
              .toLowerCase();

            return searchValue ? searchBlob.includes(searchValue) : true;
          })
          .filter((lesson) => matchesStatus(lesson, needsReview))
          .map((lesson) => {
            const score = app.getQuizScore(lesson.id);
            const advancedScore = app.getQuizScore(lesson.id, "advanced");
            const questionCount = quizBank.getQuiz(lesson.id).length;
            const advancedQuestionCount = quizBank.getQuiz(lesson.id, "advanced").length;
            const status = getLessonStatus(lesson);
            const statusLabel =
              status === "completed"
                ? "Completed"
                : status === "in-progress"
                  ? "In progress"
                  : "To do";
            const bookmarked = app.isBookmarked(lesson.id);
            const scoreLabel = score ? `${app.formatPercent(score.percent)} core` : "No core score";
            const reviewLabel = needsReview.has(lesson.id) ? "Needs review" : "On track";
            const secondaryAction = completed.has(lesson.id) || score ? "Review Quiz" : "Preview Lesson";
            const secondaryHref = completed.has(lesson.id) || score ? `quiz.html?lesson=${lesson.id}` : `lesson.html?lesson=${lesson.id}`;

            return `
              <article class="lesson-tile lesson-tile-compact">
                <div class="lesson-topline">
                  <h3>${lesson.title}</h3>
                  <button
                    class="bookmark-button ${bookmarked ? "is-active" : ""}"
                    type="button"
                    data-bookmark-lesson="${lesson.id}"
                    aria-pressed="${bookmarked ? "true" : "false"}"
                  >
                    ${bookmarked ? "Bookmarked" : "Bookmark"}
                  </button>
                </div>
                <p class="lesson-summary">${lesson.summary}</p>
                <div class="lesson-signal-row">
                  <span class="signal-pill">${statusLabel}</span>
                  <span class="signal-pill">${reviewLabel}</span>
                  <span class="signal-pill">${scoreLabel}</span>
                </div>
                <p class="lesson-meta-note">
                  ${questionCount} core questions · ${advancedQuestionCount} advanced questions
                  ${advancedScore ? ` · ${app.formatPercent(advancedScore.percent)} advanced best` : ""}
                </p>
                <div class="card-actions">
                  <a class="button button-primary" href="lesson.html?lesson=${lesson.id}">Start Lesson</a>
                  <a class="button button-secondary" href="${secondaryHref}">${secondaryAction}</a>
                </div>
                <div class="text-link-row">
                  <a class="text-link" href="quiz.html?lesson=${lesson.id}">Core Quiz</a>
                  <a class="text-link" href="quiz.html?lesson=${lesson.id}&mode=advanced">Advanced Quiz</a>
                </div>
              </article>
            `;
          })
          .join("");

        if (!lessonTiles) {
          return "";
        }

        return `
          <section class="module-card">
            <div class="module-topline">
              <span class="chip">${module.level}</span>
              <span class="chip">${module.duration}</span>
            </div>
            <h2>${module.title}</h2>
            <p class="module-description">${module.description}</p>
            <p class="lesson-note"><strong>Portfolio task:</strong> ${module.portfolioTask}</p>
            <div class="card-grid">${lessonTiles}</div>
          </section>
        `;
      })
      .join("");

    stack.innerHTML =
      moduleMarkup ||
      `
        <section class="panel empty-state">
          <h2>No lessons match this filter</h2>
          <p class="lesson-note">Try a broader search, another status filter, or switch back to all modules.</p>
        </section>
      `;

    stack.querySelectorAll("[data-bookmark-lesson]").forEach((button) => {
      button.addEventListener("click", () => {
        app.toggleBookmark(button.dataset.bookmarkLesson);
        renderCurriculum();
      });
    });
  }

  renderTools();
  renderCurriculum();
})();
