(function () {
  const app = window.GrammarAtlasApp;
  const quizBank = window.GrammarAtlasQuizBank;
  const completed = app.getCompletedLessons();

  app.renderStats("curriculum-stats");

  const stack = document.getElementById("curriculum-stack");
  stack.innerHTML = app.curriculum
    .map((module) => {
      const lessonTiles = module.lessons
        .map((lesson) => {
          const score = app.getQuizScore(lesson.id);
          const advancedScore = app.getQuizScore(lesson.id, "advanced");
          const questionCount = quizBank.getQuiz(lesson.id).length;
          const advancedQuestionCount = quizBank.getQuiz(lesson.id, "advanced").length;
          return `
            <article class="lesson-tile">
              <div class="lesson-topline">
                <h3>${lesson.title}</h3>
                <span class="chip">${lesson.duration}</span>
              </div>
              <p class="lesson-summary">${lesson.summary}</p>
              <div class="chip-row">
                <span class="chip">${questionCount} standard</span>
                <span class="chip">${advancedQuestionCount} advanced</span>
                <span class="chip">${completed.has(lesson.id) ? "Completed" : "To do"}</span>
                <span class="chip">${score ? `${app.formatPercent(score.percent)} best score` : "No score yet"}</span>
                <span class="chip">${advancedScore ? `${app.formatPercent(advancedScore.percent)} advanced` : "No advanced score yet"}</span>
              </div>
              <div class="card-actions">
                <a class="button button-primary" href="lesson.html?lesson=${lesson.id}">Start Lesson</a>
                <a class="button button-secondary" href="quiz.html?lesson=${lesson.id}">Take Quiz</a>
                <a class="button button-secondary" href="quiz.html?lesson=${lesson.id}&mode=advanced">Advanced Quiz</a>
              </div>
            </article>
          `;
        })
        .join("");

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
})();
