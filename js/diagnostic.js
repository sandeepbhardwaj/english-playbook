(function () {
  const app = window.GrammarAtlasApp;
  const quizBank = window.GrammarAtlasQuizBank;
  const lessonIds = [
    "parts-of-speech",
    "sentence-structure",
    "articles-nouns",
    "present-family",
    "past-and-present-perfect",
    "subject-verb-agreement",
    "pronouns-questions-negatives",
    "clauses-and-relatives",
    "conditionals",
    "reported-speech",
    "punctuation-clarity",
    "concision-formal-tone",
  ];

  const questions = lessonIds.map((lessonId, index) => {
    const lesson = app.getLesson(lessonId);
    const pool = quizBank.getQuiz(lessonId);
    const source = pool[Math.min(index % 3, pool.length - 1)];
    return {
      ...source,
      lessonId,
      lessonTitle: lesson.title,
      moduleId: lesson.moduleId,
    };
  });

  const pageSize = 4;
  let pageIndex = 0;
  const answers = new Array(questions.length).fill(null);
  let submitted = false;

  document.title = "Grammar Atlas | Diagnostic";

  document.getElementById("diagnostic-hero").innerHTML = `
    <p class="eyebrow">Placement Check</p>
    <h1>Take a quick diagnostic before you choose your study path.</h1>
    <p class="hero-text">
      This static diagnostic samples key ideas from foundations, tense control, sentence accuracy, complex grammar, and style.
      Your result is saved in this browser and used to guide the dashboard.
    </p>
    <div class="quiz-metrics">
      <span class="chip">${questions.length} questions</span>
      <span class="chip">Static placement test</span>
      <span class="chip">Saved in browser</span>
    </div>
  `;

  const moduleCounts = questions.reduce((counts, question) => {
    counts[question.moduleId] = (counts[question.moduleId] || 0) + 1;
    return counts;
  }, {});

  document.getElementById("diagnostic-sidebar").innerHTML = `
    <h3>Diagnostic Notes</h3>
    <ul>
      <li>This test is designed to suggest a starting point, not to certify mastery.</li>
      <li>If a question feels hard, answer anyway. The value comes from the pattern, not perfection.</li>
      <li>Your result will feed the tutor dashboard automatically.</li>
    </ul>
    <div class="portfolio-panel">
      <h3>Coverage</h3>
      <ul>
        ${app.curriculum
          .filter((module) => moduleCounts[module.id])
          .map((module) => `<li>${module.title}: ${moduleCounts[module.id]} questions</li>`)
          .join("")}
      </ul>
    </div>
    <div class="lesson-actions">
      <a class="button button-secondary" href="dashboard.html">Back to Dashboard</a>
    </div>
  `;

  function renderProgress() {
    const answered = answers.filter((answer) => answer !== null).length;
    document.getElementById("diagnostic-progress").innerHTML = `
      <article class="progress-card">
        <strong>Answered</strong>
        <p class="progress-copy">${answered} of ${questions.length}</p>
      </article>
      <article class="progress-card">
        <strong>Page</strong>
        <p class="progress-copy">${pageIndex + 1} of ${Math.ceil(questions.length / pageSize)}</p>
      </article>
      <article class="progress-card">
        <strong>Current Focus</strong>
        <p class="progress-copy">${questions[pageIndex * pageSize].lessonTitle}</p>
      </article>
    `;
  }

  function renderQuestions() {
    const start = pageIndex * pageSize;
    const slice = questions.slice(start, start + pageSize);
    const container = document.getElementById("diagnostic-questions");

    container.innerHTML = slice
      .map((question, localIndex) => {
        const questionIndex = start + localIndex;
        const selected = answers[questionIndex];
        return `
          <article class="question-card">
            <div class="question-topline">
              <h3>Question ${questionIndex + 1}</h3>
              <div class="chip-row">
                <span class="chip">${question.lessonTitle}</span>
                <span class="chip">${question.tag}</span>
              </div>
            </div>
            <p>${question.prompt}</p>
            <div class="option-list">
              ${question.options
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
                      ${option}
                    </button>
                  `;
                })
                .join("")}
            </div>
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
        answers[Number(button.dataset.questionIndex)] = Number(button.dataset.optionIndex);
        renderProgress();
        renderQuestions();
      });
    });
  }

  function buildResult() {
    const correct = questions.filter((question, index) => answers[index] === question.correctIndex).length;
    const percent = Math.round((correct / questions.length) * 100);
    const moduleScores = app.curriculum
      .map((module) => {
        const moduleQuestions = questions.filter((question) => question.moduleId === module.id);
        const moduleCorrect = moduleQuestions.filter((question) => {
          const originalIndex = questions.indexOf(question);
          return answers[originalIndex] === question.correctIndex;
        }).length;
        return {
          moduleId: module.id,
          title: module.title,
          questionCount: moduleQuestions.length,
          percent: moduleQuestions.length ? Math.round((moduleCorrect / moduleQuestions.length) * 100) : 0,
        };
      })
      .filter((module) => module.questionCount > 0);
    const recommendedModule = moduleScores.find((module) => module.percent < 70) || moduleScores[0];
    const recommendedLessonIds = [
      ...new Set(
        questions
          .filter((question, index) => answers[index] !== question.correctIndex)
          .map((question) => question.lessonId)
      ),
    ];
    const fallbackLessonIds = app
      .getModule(recommendedModule.moduleId)
      .lessons.map((lesson) => lesson.id);
    const result = {
      correct,
      total: questions.length,
      percent,
      moduleScores,
      recommendedModuleId: recommendedModule.moduleId,
      recommendedLessonIds: (recommendedLessonIds.length ? recommendedLessonIds : fallbackLessonIds).slice(0, 4),
      updatedAt: new Date().toISOString(),
    };

    app.saveDiagnosticResult(result);
    return result;
  }

  function showResults() {
    const result = buildResult();
    const recommendedModule = app.getModule(result.recommendedModuleId);
    const recommendedLessons = result.recommendedLessonIds.map((lessonId) => app.getLesson(lessonId));

    document.getElementById("diagnostic-results").innerHTML = `
      <div class="results-card">
        <h3>Your placement recommendation is ready</h3>
        <p class="quiz-note">You answered ${result.correct} of ${result.total} questions correctly.</p>
        <p class="quiz-note">Overall diagnostic score: <strong>${result.percent}%</strong></p>
        <div class="chip-row">
          ${result.moduleScores
            .map((module) => `<span class="chip">${module.title.replace("Module ", "M")} - ${module.percent}%</span>`)
            .join("")}
        </div>
        <p class="lesson-note">
          Recommended starting point: <strong>${recommendedModule.title}</strong>.
          Start there, then use the dashboard to follow your review plan.
        </p>
        <div class="chip-row">
          ${recommendedLessons
            .map((lesson) => `<a class="chip-link" href="lesson.html?lesson=${lesson.id}">${lesson.title}</a>`)
            .join("")}
        </div>
        <div class="card-actions">
          <a class="button button-primary" href="dashboard.html">Open Dashboard</a>
          <a class="button button-secondary" href="lesson.html?lesson=${recommendedLessons[0].id}">Start Recommended Lesson</a>
        </div>
      </div>
    `;
  }

  document.getElementById("diagnostic-prev").addEventListener("click", () => {
    pageIndex = Math.max(0, pageIndex - 1);
    renderProgress();
    renderQuestions();
  });

  document.getElementById("diagnostic-next").addEventListener("click", () => {
    pageIndex = Math.min(Math.ceil(questions.length / pageSize) - 1, pageIndex + 1);
    renderProgress();
    renderQuestions();
  });

  document.getElementById("diagnostic-submit").addEventListener("click", () => {
    submitted = true;
    renderProgress();
    renderQuestions();
    showResults();
  });

  renderProgress();
  renderQuestions();
})();
