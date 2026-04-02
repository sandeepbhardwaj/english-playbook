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
  const reviewEntry = app.getReviewRecommendations(12).find((entry) => entry.lesson.id === lesson.id);
  const isBookmarked = app.isBookmarked(lesson.id);
  const sectionLinks = [
    { id: "lesson-before-you-begin", label: "Start" },
    { id: "lesson-intuition", label: "Intuition" },
    { id: "lesson-rules", label: "Core Rules" },
    { id: "lesson-structures", label: "Sentence Structures" },
    { id: "lesson-examples", label: "Detailed Examples" },
    { id: "lesson-story", label: "Story-Based Learning" },
    { id: "lesson-mistakes", label: "Common Mistakes" },
    { id: "lesson-practice", label: "Practice Exercises" },
    { id: "lesson-revision", label: "Quick Revision Summary" },
    { id: "lesson-cheat-sheet", label: "Cheat Sheet" },
    { id: "lesson-next-steps", label: "Next Steps" },
  ];
  const lessonStateLabel = completed.has(lesson.id) ? "Completed" : "In progress";
  const lessonModeLabel = lesson.story || contextBlock ? "Context-rich lesson" : "Rule-first lesson";
  const coreScoreLabel = quizScore ? app.formatPercent(quizScore.percent) : "No saved score";
  const advancedScoreLabel = advancedQuizScore ? app.formatPercent(advancedQuizScore.percent) : "No advanced score";

  if (!app.getQueryParam("lesson")) {
    window.history.replaceState({}, "", `lesson.html?lesson=${lesson.id}`);
  }

  app.updateSeo({
    title: `Grammar Atlas | ${lesson.title}`,
    description: lesson.summary,
    canonicalUrl: `/lesson.html?lesson=${lesson.id}`,
    robots: "index,follow",
    ogType: "article",
  });

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
      <span class="signal-pill">${module.level}</span>
      <span class="signal-pill">${lesson.duration}</span>
      <span class="signal-pill">${lessonStateLabel}</span>
    </div>
    <div class="hero-meta-list hero-meta-grid">
      <div class="hero-meta-item"><strong>Coverage:</strong> ${standardQuizCount} core questions and ${advancedQuizCount} challenge questions.</div>
      <div class="hero-meta-item"><strong>Mode:</strong> ${lessonModeLabel}. ${isBookmarked ? "Saved for review." : "Not bookmarked yet."}</div>
      <div class="hero-meta-item"><strong>Scores:</strong> Core ${coreScoreLabel}. Advanced ${advancedScoreLabel}.</div>
    </div>
  `;

  document.getElementById("lesson-sidebar").innerHTML = `
    <div class="lesson-sidebar-block">
      <h3>Start Here</h3>
      <p class="lesson-note">Read the lesson first, then take the core quiz, then use the dashboard to decide what stays in review.</p>
      <div class="lesson-actions lesson-actions-stack">
        <a class="button button-primary" href="quiz.html?lesson=${lesson.id}">Take Core Quiz</a>
        <a class="button button-secondary" href="quiz.html?lesson=${lesson.id}&mode=advanced">Advanced Quiz</a>
        <button class="button button-secondary" type="button" id="toggle-lesson-complete">
          ${completed.has(lesson.id) ? "Mark as Not Completed" : "Mark Lesson as Completed"}
        </button>
        <button class="button button-utility ${isBookmarked ? "is-active-control" : ""}" type="button" id="toggle-lesson-bookmark">
          ${isBookmarked ? "Remove Bookmark" : "Bookmark Lesson"}
        </button>
        <a class="button button-utility" href="dashboard.html">Open Dashboard</a>
      </div>
    </div>
    <div class="portfolio-panel lesson-sidebar-block">
      <h3>Lesson Snapshot</h3>
      <div class="info-points">
        <p class="info-point"><strong>Track:</strong> ${module.level}</p>
        <p class="info-point"><strong>Study time:</strong> ${lesson.duration}</p>
        <p class="info-point"><strong>Best core quiz:</strong> ${quizScore ? app.formatPercent(quizScore.percent) : "Not attempted yet"}</p>
      </div>
    </div>
    <div class="portfolio-panel lesson-sidebar-block">
      <h3>Lesson Map</h3>
      <div class="section-nav" id="lesson-section-nav">
        ${sectionLinks
          .map((section) => `<a class="section-link" data-section-link href="#${section.id}">${section.label}</a>`)
          .join("")}
      </div>
    </div>
    <div class="portfolio-panel lesson-sidebar-block">
      <h3>Move Through The Course</h3>
      <div class="card-actions">
        <a class="button button-secondary" href="lesson.html?lesson=${app.nextLesson(lesson.id).id}">Next Lesson</a>
        <a class="button button-utility" href="lesson.html?lesson=${app.previousLesson(lesson.id).id}">Previous Lesson</a>
      </div>
    </div>
  `;

  const beforeYouBeginMarkup = `
    <section class="summary-card lesson-anchor-card" id="lesson-before-you-begin">
      <div class="summary-topline">
        <h3>Before You Begin</h3>
        <span class="section-kicker">Orientation</span>
      </div>
      <div class="card-grid lesson-prep-grid">
        <article class="summary-card summary-card-nested">
          <h3>Goals</h3>
          <ul class="bullet-list">
            ${lesson.objectives.map((item) => `<li>${item}</li>`).join("")}
          </ul>
        </article>
        <article class="summary-card summary-card-nested">
          <h3>Prerequisites</h3>
          <ul class="bullet-list">
            ${prerequisites.map((item) => `<li>${item}</li>`).join("")}
          </ul>
        </article>
      </div>
      <div class="portfolio-panel">
        <h3>Portfolio Connection</h3>
        <p class="lesson-note">${module.portfolioTask}</p>
        <ul class="bullet-list">
          ${moduleRubric.map((item) => `<li>${item}</li>`).join("")}
        </ul>
      </div>
    </section>
  `;

  const reviewGuidanceMarkup = `
    <section class="summary-card" id="lesson-next-steps">
      <div class="summary-topline">
        <h3>What To Do Next</h3>
        <span class="section-kicker">Tutor guidance</span>
      </div>
      <p class="lesson-note">
        ${
          reviewEntry
            ? reviewEntry.reason
            : "After this lesson, take the core quiz first. If your score is stable, move to the advanced quiz and then bookmark or log the topic if it still feels weak."
        }
      </p>
      <div class="card-actions">
        <a class="button button-primary" href="quiz.html?lesson=${lesson.id}">Take Core Quiz</a>
        <a class="button button-secondary" href="dashboard.html">Open Dashboard</a>
        <a class="button button-utility" href="dashboard.html#dashboard-error-log">Open Error Log</a>
      </div>
    </section>
  `;

  const examplesMarkup = lesson.examples
    .map(
      (example) => `
        <article class="summary-card">
          <div class="summary-topline">
            <h3>Example</h3>
            <span class="section-kicker">Model</span>
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
                  <span class="section-kicker">Pattern</span>
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
          <span class="section-kicker">${contrastPairs.length} focus pairs</span>
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
              <span class="section-kicker">Story Lab</span>
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
              <span class="section-kicker">Mini Scene</span>
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
              <span class="section-kicker">Context</span>
            </div>
            <p class="story-note">${storyOverview}</p>
          </section>
        `;

  document.getElementById("lesson-main").innerHTML = `
    ${beforeYouBeginMarkup}

    <section class="summary-card" id="lesson-intuition">
      <div class="summary-topline">
        <h3>Intuition</h3>
        <span class="section-kicker">${lesson.focus}</span>
      </div>
      <p class="lesson-summary">${lesson.summary}</p>
      <ul class="bullet-list context-prompts">
        <li>This topic matters because it changes how clearly your meaning lands in real conversation and writing.</li>
        <li>Use the focus line as the quick memory hook: ${lesson.focus}</li>
      </ul>
    </section>

    <section class="summary-card" id="lesson-rules">
      <h3>Core Rules</h3>
      <ul class="bullet-list">
        ${lesson.rules.map((item) => `<li>${item}</li>`).join("")}
      </ul>
    </section>

    <section class="summary-card" id="lesson-structures">
      <div class="summary-topline">
        <h3>Sentence Structures</h3>
        <span class="section-kicker">${structures.length ? `${structures.length} patterns` : "Pattern overview"}</span>
      </div>
      ${structuresMarkup}
    </section>

    <section id="lesson-examples" class="lesson-section-stack">
      <article class="summary-card">
        <div class="summary-topline">
          <h3>Detailed Examples</h3>
          <span class="section-kicker">${lesson.examples.length} worked examples</span>
        </div>
        <p class="lesson-note">Use these examples to see the rule shift from definition into sentence-level control.</p>
      </article>
      <div class="card-grid">
        ${examplesMarkup}
      </div>
    </section>

    ${contrastMarkup}

    ${storyMarkup}

    <section class="summary-card" id="lesson-mistakes">
      <div class="summary-topline">
        <h3>Common Mistakes</h3>
        <span class="section-kicker">${lesson.pitfalls.length} watchouts</span>
      </div>
      <div class="pitfalls-grid">
        ${lesson.pitfalls
          .map(
            (item) => `
          <div class="pitfall-card">
            <div class="pitfall-wrong">
              <span class="pitfall-label">Wrong</span>
              <p>"${item.wrong}"</p>
            </div>
            <div class="pitfall-right">
              <span class="pitfall-label">Right</span>
              <p>"${item.right}"</p>
            </div>
            <div class="pitfall-note">
              <span class="pitfall-label">Why</span>
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
        <span class="section-kicker">Guided sequence</span>
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
        <span class="section-kicker">Fast recall</span>
      </div>
      <ul class="bullet-list">
        ${revision.map((item) => `<li>${item}</li>`).join("")}
      </ul>
    </section>

    <section class="summary-card" id="lesson-cheat-sheet">
      <div class="summary-topline">
        <h3>Cheat Sheet</h3>
        <span class="section-kicker">Keep handy</span>
      </div>
      <div class="chip-row">
        ${cheatSheet.map((item) => `<span class="chip">${item}</span>`).join("")}
      </div>
    </section>

    ${reviewGuidanceMarkup}
  `;

  document.getElementById("toggle-lesson-complete").addEventListener("click", () => {
    app.toggleLessonComplete(lesson.id);
    window.location.reload();
  });

  document.getElementById("toggle-lesson-bookmark").addEventListener("click", () => {
    app.toggleBookmark(lesson.id);
    window.location.reload();
  });

  const sectionLinkElements = [...document.querySelectorAll("[data-section-link]")];
  const sectionTargets = sectionLinkElements
    .map((link) => document.getElementById(link.getAttribute("href").slice(1)))
    .filter(Boolean);

  function setActiveSection(sectionId) {
    sectionLinkElements.forEach((link) => {
      const isActive = link.getAttribute("href") === `#${sectionId}`;
      link.classList.toggle("is-active", isActive);
      if (isActive) {
        link.setAttribute("aria-current", "location");
      } else {
        link.removeAttribute("aria-current");
      }
    });
  }

  sectionLinkElements.forEach((link) => {
    link.addEventListener("click", () => {
      const targetId = link.getAttribute("href").slice(1);
      window.requestAnimationFrame(() => setActiveSection(targetId));
    });
  });

  const initialSectionId = sectionTargets.some((section) => section.id === window.location.hash.slice(1))
    ? window.location.hash.slice(1)
    : sectionTargets[0]?.id;

  if (initialSectionId) {
    setActiveSection(initialSectionId);
  }

  if (sectionTargets.length) {
    const observer = new window.IntersectionObserver(
      (entries) => {
        const visibleEntries = entries
          .filter((entry) => entry.isIntersecting)
          .sort((first, second) => second.intersectionRatio - first.intersectionRatio || first.boundingClientRect.top - second.boundingClientRect.top);

        if (visibleEntries[0]) {
          setActiveSection(visibleEntries[0].target.id);
        }
      },
      {
        rootMargin: "-18% 0px -55% 0px",
        threshold: [0.2, 0.45, 0.7],
      }
    );

    sectionTargets.forEach((section) => observer.observe(section));
  }
})();
