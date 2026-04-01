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
  const framework = enhancements.lessonFrameworks?.[lesson.id] || {};
  const moduleRubric = enhancements.moduleRubrics?.[module.id] || [];
  const standardQuizCount = quizBank.getQuiz(lesson.id).length;
  const advancedQuizCount = quizBank.getQuiz(lesson.id, "advanced").length;
  const prerequisites = framework.prerequisites || [module.description];
  const structures = framework.structures || [];
  const revision = framework.revision || lesson.rules.slice(0, 3);
  const cheatSheet = framework.cheatSheet || lesson.rules.slice(0, 4);
  const storyTitle = lesson.story?.title || contextBlock?.title || "Story-Based Learning";
  const storyOverview =
    lesson.story?.overview ||
    contextBlock?.passage ||
    "Use this short context block to see the grammar working inside a realistic situation.";
  const storyPrompts = lesson.story?.analysis || contextBlock?.prompts || [];
  const sectionLinks = [
    { id: "lesson-intuition", label: "Intuition" },
    { id: "lesson-rules", label: "Core Rules" },
    { id: "lesson-structures", label: "Sentence Structures" },
    { id: "lesson-examples", label: "Detailed Examples" },
    { id: "lesson-story", label: "Story-Based Learning" },
    { id: "lesson-mistakes", label: "Common Mistakes" },
    { id: "lesson-practice", label: "Practice Exercises" },
    { id: "lesson-revision", label: "Quick Revision Summary" },
    { id: "lesson-cheat-sheet", label: "Cheat Sheet" },
  ];

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
      <span class="chip">${standardQuizCount} core questions</span>
      <span class="chip">${advancedQuizCount} challenge questions</span>
      <span class="chip">${lesson.story || contextBlock ? "Context-rich lesson" : "Rule-first lesson"}</span>
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
    <div class="portfolio-panel">
      <h3>Prerequisites</h3>
      <ul>
        ${prerequisites.map((item) => `<li>${item}</li>`).join("")}
      </ul>
    </div>
    <div class="portfolio-panel">
      <h3>Lesson Map</h3>
      <div class="chip-row">
        ${sectionLinks
          .map((section) => `<a class="chip-link" href="#${section.id}">${section.label}</a>`)
          .join("")}
      </div>
    </div>
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

  const structuresMarkup = structures.length
    ? `
      <div class="card-grid">
        ${structures
          .map(
            (item) => `
              <article class="summary-card">
                <div class="summary-topline">
                  <h3>${item.label}</h3>
                  <span class="chip">Pattern</span>
                </div>
                <p class="story-text">${item.pattern}</p>
                <p class="lesson-note">${item.note}</p>
              </article>
            `
          )
          .join("")}
      </div>
    `
    : `
      <p class="lesson-note">Review the example sentences and key rules together to identify the working sentence pattern for this topic.</p>
    `;

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
        <section class="story-card" id="lesson-story">
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
    : contextBlock
      ? `
          <section class="story-card" id="lesson-story">
            <div class="story-topline">
              <h3>${storyTitle}</h3>
              <span class="chip">Mini Scene</span>
            </div>
            <p class="story-note">${storyOverview}</p>
            <ul class="story-list context-prompts">
              ${storyPrompts.map((item) => `<li>${item}</li>`).join("")}
            </ul>
          </section>
        `
      : `
          <section class="story-card" id="lesson-story">
            <div class="story-topline">
              <h3>${storyTitle}</h3>
              <span class="chip">Context</span>
            </div>
            <p class="story-note">${storyOverview}</p>
          </section>
        `;

  document.getElementById("lesson-main").innerHTML = `
    <section class="summary-card" id="lesson-intuition">
      <div class="summary-topline">
        <h3>Intuition</h3>
        <span class="chip">${lesson.focus}</span>
      </div>
      <p class="lesson-summary">${lesson.summary}</p>
      <ul class="bullet-list context-prompts">
        <li>This topic matters because it changes how clearly your meaning lands in real conversation and writing.</li>
        <li>Use the focus line as the quick memory hook: ${lesson.focus}</li>
      </ul>
    </section>

    <section class="summary-card" id="lesson-rules">
      <h3>Key Rules</h3>
      <ul class="bullet-list">
        ${lesson.rules.map((item) => `<li>${item}</li>`).join("")}
      </ul>
    </section>

    <section class="summary-card" id="lesson-structures">
      <div class="summary-topline">
        <h3>Sentence Structures</h3>
        <span class="chip">${structures.length ? `${structures.length} patterns` : "Pattern overview"}</span>
      </div>
      ${structuresMarkup}
    </section>

    <section id="lesson-examples" class="card-grid">
      ${examplesMarkup}
    </section>

    ${contrastMarkup}

    ${storyMarkup}

    <section class="summary-card" id="lesson-mistakes">
      <div class="summary-topline">
        <h3>Common Mistakes</h3>
        <span class="chip">${lesson.pitfalls.length} watchouts</span>
      </div>
      <div class="pitfalls-grid">
        ${lesson.pitfalls
          .map(
            (item) => `
          <div class="pitfall-card">
            <div class="pitfall-wrong">
              <span class="pitfall-label">❌ Wrong:</span>
              <p>"${item.wrong}"</p>
            </div>
            <div class="pitfall-right">
              <span class="pitfall-label">✅ Right:</span>
              <p>"${item.right}"</p>
            </div>
            <div class="pitfall-note">
              <span class="pitfall-label">💡 Why:</span>
              <p>${item.note}</p>
            </div>
          </div>
        `
          )
          .join("")}
      </div>
    </section>

    <section class="summary-card" id="lesson-practice">
      <div class="summary-topline">
        <h3>Practice Exercises</h3>
        <span class="chip">Guided sequence</span>
      </div>
      <ul class="bullet-list">
        ${lesson.practicePlan.map((item) => `<li>${item}</li>`).join("")}
      </ul>
      ${
        contextBlock
          ? `
            <div class="portfolio-panel">
              <h3>Apply It In Context</h3>
              <p class="story-text">${contextBlock.passage}</p>
              <ul class="bullet-list context-prompts">
                ${contextBlock.prompts.map((item) => `<li>${item}</li>`).join("")}
              </ul>
            </div>
          `
          : ""
      }
    </section>

    <section class="summary-card" id="lesson-revision">
      <div class="summary-topline">
        <h3>Quick Revision Summary</h3>
        <span class="chip">Fast recall</span>
      </div>
      <ul class="bullet-list">
        ${revision.map((item) => `<li>${item}</li>`).join("")}
      </ul>
    </section>

    <section class="summary-card" id="lesson-cheat-sheet">
      <div class="summary-topline">
        <h3>Cheat Sheet</h3>
        <span class="chip">Keep handy</span>
      </div>
      <div class="chip-row">
        ${cheatSheet.map((item) => `<span class="chip">${item}</span>`).join("")}
      </div>
    </section>
  `;

  document.getElementById("toggle-lesson-complete").addEventListener("click", () => {
    app.toggleLessonComplete(lesson.id);
    window.location.reload();
  });
})();
