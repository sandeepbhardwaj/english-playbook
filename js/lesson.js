(function () {
  const app = window.GrammarAtlasApp;
  const quizBank = window.GrammarAtlasQuizBank;
  const enhancements = window.GrammarAtlasEnhancements || {};
  const lessonId = app.getQueryParam("lesson") || app.allLessons[0].id;
  const lesson = app.getLesson(lessonId);
  const module = app.getModule(lesson.moduleId);
  const completed = app.getCompletedLessons();
  const quizScore = app.getQuizScore(lesson.id);
  const advancedQuizScore = app.getQuizScore(lesson.id, "advanced");
  const contrastPairs = enhancements.contrastPairs?.[lesson.id] || [];
  const contextBlock = enhancements.contextBlocks?.[lesson.id];
  const moduleRubric = enhancements.moduleRubrics?.[module.id] || [];
  const standardQuizCount = quizBank.getQuiz(lesson.id).length;
  const advancedQuizCount = quizBank.getQuiz(lesson.id, "advanced").length;

  document.title = `Grammar Atlas | ${lesson.title}`;

  document.getElementById("lesson-breadcrumb").innerHTML = `
    <a href="curriculum.html">Curriculum</a>
    <span>/</span>
    <span>${module.title}</span>
    <span>/</span>
    <span>${lesson.title}</span>
  `;

  document.getElementById("lesson-hero").innerHTML = `
    <p class="eyebrow">${module.title}</p>
    <h1>${lesson.title}</h1>
    <p class="hero-text">${lesson.summary}</p>
    <div class="lesson-meta">
      <span class="chip">${module.level}</span>
      <span class="chip">${lesson.duration}</span>
      <span class="chip">${standardQuizCount} standard questions</span>
      <span class="chip">${advancedQuizCount} advanced questions</span>
      <span class="chip">${completed.has(lesson.id) ? "Completed" : "In progress"}</span>
      <span class="chip">${quizScore ? `Best score ${app.formatPercent(quizScore.percent)}` : "No score yet"}</span>
      <span class="chip">${advancedQuizScore ? `Advanced ${app.formatPercent(advancedQuizScore.percent)}` : "No advanced score yet"}</span>
    </div>
  `;

  document.getElementById("lesson-sidebar").innerHTML = `
    <h3>Lesson Goals</h3>
    <ul>
      ${lesson.objectives.map((item) => `<li>${item}</li>`).join("")}
    </ul>
    <div class="lesson-actions">
      <button class="button button-primary" type="button" id="toggle-lesson-complete">
        ${completed.has(lesson.id) ? "Mark as Not Completed" : "Mark Lesson as Completed"}
      </button>
      <a class="button button-secondary" href="quiz.html?lesson=${lesson.id}">Take Quiz</a>
      <a class="button button-secondary" href="quiz.html?lesson=${lesson.id}&mode=advanced">Advanced Quiz</a>
      <a class="button button-secondary" href="lesson.html?lesson=${app.previousLesson(lesson.id).id}">Previous Lesson</a>
      <a class="button button-secondary" href="lesson.html?lesson=${app.nextLesson(lesson.id).id}">Next Lesson</a>
    </div>
    <div class="portfolio-panel">
      <h3>Portfolio Connection</h3>
      <p class="lesson-note">${module.portfolioTask}</p>
      <ul>
        ${moduleRubric.map((item) => `<li>${item}</li>`).join("")}
      </ul>
    </div>
  `;

  const examplesMarkup = lesson.examples
    .map(
      (example) => `
        <article class="summary-card">
          <div class="summary-topline">
            <h3>Example</h3>
            <span class="chip">Model</span>
          </div>
          <p class="story-text">${example.sentence}</p>
          <p class="lesson-note">${example.note}</p>
        </article>
      `
    )
    .join("");

  const contrastMarkup = contrastPairs.length
    ? `
      <section class="summary-card">
        <div class="summary-topline">
          <h3>Watch the Contrast</h3>
          <span class="chip">${contrastPairs.length} focus pairs</span>
        </div>
        <div class="contrast-grid">
          ${contrastPairs
            .map(
              (pair) => `
                <article class="contrast-card">
                  <h4>${pair.title}</h4>
                  <div class="contrast-example contrast-example-good">
                    <strong>Use:</strong> ${pair.use}
                  </div>
                  <div class="contrast-example contrast-example-bad">
                    <strong>Avoid:</strong> ${pair.avoid}
                  </div>
                  <p class="lesson-note">${pair.note}</p>
                </article>
              `
            )
            .join("")}
        </div>
      </section>
    `
    : "";

  const storyMarkup = lesson.story
    ? `
      <section class="story-card">
        <div class="story-topline">
          <h3>${lesson.story.title}</h3>
          <span class="chip">Story Lab</span>
        </div>
        <p class="story-note">${lesson.story.overview}</p>
        <div class="story-block">
          ${lesson.story.passages
            .map(
              (paragraph, index) => `
                <div>
                  <p class="story-text">${paragraph}</p>
                  ${index < lesson.story.passages.length - 1 ? '<div class="story-divider"></div>' : ""}
                </div>
              `
            )
            .join("")}
        </div>
        <h3>How to read the story</h3>
        <ul class="story-list">
          ${lesson.story.analysis.map((item) => `<li>${item}</li>`).join("")}
        </ul>
      </section>
    `
    : "";

  const contextMarkup = contextBlock
    ? `
      <section class="summary-card">
        <div class="summary-topline">
          <h3>${contextBlock.title}</h3>
          <span class="chip">Guided Context</span>
        </div>
        <p class="story-text">${contextBlock.passage}</p>
        <ul class="bullet-list context-prompts">
          ${contextBlock.prompts.map((item) => `<li>${item}</li>`).join("")}
        </ul>
      </section>
    `
    : "";

  document.getElementById("lesson-main").innerHTML = `
    <section class="summary-card">
      <div class="summary-topline">
        <h3>Focus</h3>
        <span class="chip">${lesson.focus}</span>
      </div>
      <p class="lesson-summary">${lesson.summary}</p>
    </section>

    <section class="summary-card">
      <h3>Key Rules</h3>
      <ul class="bullet-list">
        ${lesson.rules.map((item) => `<li>${item}</li>`).join("")}
      </ul>
    </section>

    <section class="card-grid">
      ${examplesMarkup}
    </section>

    ${contrastMarkup}

    ${contextMarkup}

    ${storyMarkup}

    <section class="summary-card">
      <h3>Common Pitfalls</h3>
      <ul class="bullet-list">
        ${lesson.pitfalls.map((item) => `<li>${item}</li>`).join("")}
      </ul>
    </section>

    <section class="summary-card">
      <h3>Suggested Study Sequence</h3>
      <ul class="bullet-list">
        ${lesson.practicePlan.map((item) => `<li>${item}</li>`).join("")}
      </ul>
    </section>
  `;

  document.getElementById("toggle-lesson-complete").addEventListener("click", () => {
    app.toggleLessonComplete(lesson.id);
    window.location.reload();
  });
})();
