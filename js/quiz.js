(function () {
  const app = window.GrammarAtlasApp;
  const quizBank = window.GrammarAtlasQuizBank;
  const lessonId = app.getQueryParam("lesson") || app.allLessons[0].id;
  const mode = app.getQueryParam("mode") === "advanced" ? "advanced" : "standard";
  const isAdvanced = mode === "advanced";
  const lesson = app.getLesson(lessonId);
  const module = app.getModule(lesson.moduleId);
  const questions = quizBank.getQuiz(lesson.id, mode);
  const pageSize = 8;
  let pageIndex = 0;
  const answers = new Array(questions.length).fill(null);
  let submitted = false;

  document.title = `Grammar Atlas | ${isAdvanced ? "Advanced Quiz" : "Quiz"} | ${lesson.title}`;

  document.getElementById("quiz-breadcrumb").innerHTML = `
    <a href="curriculum.html">Curriculum</a>
    <span>/</span>
    <a href="lesson.html?lesson=${lesson.id}">${lesson.title}</a>
    <span>/</span>
    <span>${isAdvanced ? "Advanced Quiz" : "Quiz"}</span>
  `;

  document.getElementById("quiz-hero").innerHTML = `
    <p class="eyebrow">${module.title}</p>
    <h1>${lesson.title} ${isAdvanced ? "Advanced Quiz" : "Quiz"}</h1>
    <p class="hero-text">
      This assessment contains ${questions.length} ${isAdvanced ? "advanced challenge" : "focused"} questions.
      Work in short batches, then submit to see your score and explanations.
    </p>
    <div class="quiz-metrics">
      <span class="chip">${module.level}</span>
      <span class="chip">${lesson.duration}</span>
      <span class="chip">${questions.length} questions</span>
      <span class="chip">${isAdvanced ? "Advanced" : "Standard"}</span>
    </div>
  `;

  document.getElementById("quiz-sidebar").innerHTML = `
    <h3>Quiz Notes</h3>
    <ul>
      <li>${isAdvanced ? "Advanced quizzes emphasize explanation, distinction, and transfer." : "Standard quizzes keep coverage broad and practice-focused."}</li>
      <li>Use the lesson page first if you want the full explanation and story context.</li>
      <li>Your best ${isAdvanced ? "advanced" : "standard"} score is saved in this browser after submission.</li>
    </ul>
    <div class="lesson-actions">
      <a class="button button-secondary" href="lesson.html?lesson=${lesson.id}">Back to Lesson</a>
      <a class="button button-secondary" href="quiz.html?lesson=${lesson.id}&mode=${isAdvanced ? "standard" : "advanced"}">
        ${isAdvanced ? "Switch to Standard Quiz" : "Try Advanced Quiz"}
      </a>
      <a class="button button-secondary" href="curriculum.html">Back to Curriculum</a>
    </div>
  `;

  function renderProgress() {
    const answered = answers.filter((answer) => answer !== null).length;
    const savedScore = app.getQuizScore(lesson.id, mode);
    document.getElementById("quiz-progress").innerHTML = `
      <article class="progress-card">
        <strong>Progress</strong>
        <p class="progress-copy">${answered} of ${questions.length} questions answered.</p>
      </article>
      <article class="progress-card">
        <strong>Page</strong>
        <p class="progress-copy">${pageIndex + 1} of ${Math.ceil(questions.length / pageSize)}</p>
      </article>
      <article class="progress-card">
        <strong>Best Saved ${isAdvanced ? "Advanced " : ""}Score</strong>
        <p class="progress-copy">${savedScore ? app.formatPercent(savedScore.percent) : "No saved score yet"}</p>
      </article>
    `;
  }

  function renderQuestions() {
    const start = pageIndex * pageSize;
    const slice = questions.slice(start, start + pageSize);
    const container = document.getElementById("quiz-questions");
    container.innerHTML = slice
      .map((question, localIndex) => {
        const questionIndex = start + localIndex;
        const selected = answers[questionIndex];
        const optionsMarkup = question.options
          .map((option, optionIndex) => {
            const classes = ["option-button"];
            if (selected === optionIndex) {
              classes.push("is-selected");
            }
            if (submitted && optionIndex === question.correctIndex) {
              classes.push("is-correct");
            }
            if (submitted && selected === optionIndex && optionIndex !== question.correctIndex) {
              classes.push("is-incorrect");
            }

            return `
              <button
                class="${classes.join(" ")}"
                type="button"
                data-question-index="${questionIndex}"
                data-option-index="${optionIndex}"
              >
                ${question.options[optionIndex]}
              </button>
            `;
          })
          .join("");

        return `
          <article class="question-card">
            <div class="question-topline">
              <h3>Question ${questionIndex + 1}</h3>
              <span class="chip">${question.tag}</span>
            </div>
            <p>${question.prompt}</p>
            <div class="option-list">${optionsMarkup}</div>
            ${
              submitted
                ? `<div class="question-explanation"><strong>${selected === question.correctIndex ? "Correct." : "Answer:"}</strong> ${question.explanation}</div>`
                : ""
            }
          </article>
        `;
      })
      .join("");

    container.querySelectorAll("[data-question-index]").forEach((button) => {
      button.addEventListener("click", () => {
        if (submitted) {
          return;
        }
        const qIndex = Number(button.dataset.questionIndex);
        const optionIndex = Number(button.dataset.optionIndex);
        answers[qIndex] = optionIndex;
        renderProgress();
        renderQuestions();
      });
    });
  }

  function showResults() {
    const correct = questions.filter((question, index) => answers[index] === question.correctIndex).length;
    const percent = (correct / questions.length) * 100;
    app.saveQuizScore(lesson.id, {
      correct,
      total: questions.length,
      percent,
      updatedAt: new Date().toISOString(),
    }, mode);

    document.getElementById("quiz-results").innerHTML = `
      <div class="results-card">
        <h3>${isAdvanced ? "Advanced Quiz Complete" : "Quiz Complete"}</h3>
        <p class="quiz-note">You answered ${correct} of ${questions.length} questions correctly.</p>
        <p class="quiz-note">Final score: <strong>${app.formatPercent(percent)}</strong></p>
        <div class="card-actions">
          <a class="button button-primary" href="lesson.html?lesson=${lesson.id}">Return to Lesson</a>
          <a class="button button-secondary" href="quiz.html?lesson=${lesson.id}&mode=${mode}">Retake ${isAdvanced ? "Advanced Quiz" : "Quiz"}</a>
        </div>
      </div>
    `;
  }

  document.getElementById("quiz-prev").addEventListener("click", () => {
    pageIndex = Math.max(0, pageIndex - 1);
    renderProgress();
    renderQuestions();
  });

  document.getElementById("quiz-next").addEventListener("click", () => {
    pageIndex = Math.min(Math.ceil(questions.length / pageSize) - 1, pageIndex + 1);
    renderProgress();
    renderQuestions();
  });

  document.getElementById("quiz-submit").addEventListener("click", () => {
    submitted = true;
    renderProgress();
    renderQuestions();
    showResults();
  });

  renderProgress();
  renderQuestions();
})();
