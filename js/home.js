(function () {
  const app = window.GrammarAtlasApp;
  const quizBank = window.GrammarAtlasQuizBank;

  app.renderStats("home-stats");

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
          <a class="button button-primary" href="lesson.html?lesson=${tenseLesson.id}">Open Story Lesson</a>
          <a class="button button-secondary" href="quiz.html?lesson=${tenseLesson.id}">
            Take ${quizBank.getQuiz(tenseLesson.id).length}-Question Quiz
          </a>
        </div>
      </article>
    </div>
  `;
})();
