(function () {
  const app = window.GrammarAtlasApp;
  const quizBank = window.GrammarAtlasQuizBank;
  const lessonId = app.getQueryParam("lesson") || app.allLessons[0].id;
  const mode = app.getQueryParam("mode") === "advanced" ? "advanced" : "standard";
  const isAdvanced = mode === "advanced";
  const lesson = app.getLesson(lessonId);
  const module = app.getModule(lesson.moduleId);
  const questions = quizBank.getQuiz(lesson.id, mode);
  const pageSize = isAdvanced ? 5 : 6;
  const difficultyCounts = questions.reduce((counts, question) => {
    const key = question.difficulty || (isAdvanced ? "Review Challenge" : "Mixed");
    counts[key] = (counts[key] || 0) + 1;
    return counts;
  }, {});
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
      ${
        isAdvanced
          ? `This review challenge contains ${questions.length} explanation-heavy questions designed to test transfer, contrast, and reasoning.`
          : `This core quiz contains ${questions.length} questions split into Basic, Intermediate, and Advanced bands so you can move from recognition to real control.`
      }
      Work in short batches, then submit to see your score and explanations.
    </p>
    <div class="quiz-metrics">
      <span class="chip">${module.level}</span>
      <span class="chip">${lesson.duration}</span>
      <span class="chip">${questions.length} questions</span>
      <span class="chip">${isAdvanced ? "Review Challenge" : "Core Quiz Bank"}</span>
    </div>
  `;

  document.getElementById("quiz-sidebar").innerHTML = `
    <h3>Quiz Notes</h3>
    <ul>
      <li>${isAdvanced ? "Advanced quizzes emphasize explanation, distinction, and transfer." : "Standard quizzes keep coverage broad and practice-focused."}</li>
      <li>Use the lesson page first if you want the full explanation and story context.</li>
      <li>Your best ${isAdvanced ? "advanced" : "standard"} score is saved in this browser after submission.</li>
    </ul>
    <div class="portfolio-panel">
      <h3>${isAdvanced ? "Challenge Layout" : "Difficulty Layout"}</h3>
      <ul>
        ${Object.entries(difficultyCounts)
          .map(([label, count]) => `<li>${label}: ${count} questions</li>`)
          .join("")}
      </ul>
    </div>
    <div class="portfolio-panel">
      <h3>Tutor Tools</h3>
      <p class="lesson-note">After submission, this quiz will recommend what to review next and help you move weak patterns into bookmarks or the error log.</p>
    </div>
    <div class="lesson-actions">
      <a class="button button-secondary" href="lesson.html?lesson=${lesson.id}">Back to Lesson</a>
      <a class="button button-secondary" href="quiz.html?lesson=${lesson.id}&mode=${isAdvanced ? "standard" : "advanced"}">
        ${isAdvanced ? "Switch to Standard Quiz" : "Try Advanced Quiz"}
      </a>
      <a class="button button-secondary" href="dashboard.html">Open Dashboard</a>
      <a class="button button-secondary" href="curriculum.html">Back to Curriculum</a>
    </div>
  `;

  function renderProgress() {
    const answered = answers.filter((answer) => answer !== null).length;
    const savedScore = app.getQuizScore(lesson.id, mode);
    const start = pageIndex * pageSize;
    const currentSlice = questions.slice(start, start + pageSize);
    const bandLabel = [...new Set(currentSlice.map((item) => item.difficulty || "Mixed"))].join(" / ");
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
        <strong>Current Band</strong>
        <p class="progress-copy">${bandLabel}</p>
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
              <div class="chip-row">
                <span class="chip">${question.difficulty || "Mixed"}</span>
                <span class="chip">${question.tag}</span>
              </div>
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

  function getScoreMessage(percent) {
    if (percent < 60) {
      return "Reopen the lesson and review the core rules before you retake this quiz.";
    }
    if (percent < 80) {
      return "You have partial control. A focused review plus one retake should move this topic into a stronger range.";
    }
    if (percent < 90) {
      return "This topic is mostly secure. Use the advanced quiz or move attention to another weak area.";
    }
    return "Strong result. Keep this lesson in light rotation and move your attention to the next weak area.";
  }

  function showResults() {
    const correct = questions.filter((question, index) => answers[index] === question.correctIndex).length;
    const percent = (correct / questions.length) * 100;
    const breakdown = Object.keys(difficultyCounts)
      .map((label) => {
        const scopedQuestions = questions.filter((question) => (question.difficulty || "Mixed") === label);
        const scopedCorrect = scopedQuestions.filter((question) => {
          const originalIndex = questions.indexOf(question);
          return answers[originalIndex] === question.correctIndex;
        }).length;

        return `<span class="chip">${label}: ${scopedCorrect}/${scopedQuestions.length}</span>`;
      })
      .join("");

    app.saveQuizScore(
      lesson.id,
      {
        correct,
        total: questions.length,
        percent,
        updatedAt: new Date().toISOString(),
      },
      mode
    );

    const reviewRecommendations = app
      .getReviewRecommendations(4)
      .filter((entry) => entry.lesson.id !== lesson.id)
      .slice(0, 3);
    document.getElementById("quiz-results").innerHTML = `
      <div class="results-card">
        <h3>${isAdvanced ? "Advanced Quiz Complete" : "Quiz Complete"}</h3>
        <p class="quiz-note">You answered ${correct} of ${questions.length} questions correctly.</p>
        <p class="quiz-note">Final score: <strong>${app.formatPercent(percent)}</strong></p>
        <div class="chip-row">${breakdown}</div>
        <p class="lesson-note results-helper">${getScoreMessage(percent)}</p>
        <div class="card-actions">
          <a class="button button-primary" href="lesson.html?lesson=${lesson.id}">Return to Lesson</a>
          <a class="button button-secondary" href="quiz.html?lesson=${lesson.id}&mode=${mode}">Retake ${isAdvanced ? "Advanced Quiz" : "Quiz"}</a>
          <a class="button button-secondary" href="dashboard.html#dashboard-error-log">Open Error Log</a>
          <a class="button button-secondary" href="dashboard.html">Open Dashboard</a>
        </div>
        <div class="portfolio-panel">
          <h3>What to study next</h3>
          ${
            reviewRecommendations.length
              ? `
                <div class="stack-list">
                  ${reviewRecommendations
                    .map(
                      (entry) => `
                        <article class="summary-card dashboard-mini-card">
                          <div class="summary-topline">
                            <h3>${entry.lesson.title}</h3>
                            <span class="chip">${entry.primaryPercent !== null ? `${Math.round(entry.primaryPercent)}%` : "Next up"}</span>
                          </div>
                          <p class="lesson-note">${entry.reason}</p>
                          <div class="card-actions">
                            <a class="button button-secondary" href="lesson.html?lesson=${entry.lesson.id}">Open Lesson</a>
                            <a class="button button-secondary" href="quiz.html?lesson=${entry.lesson.id}">Review Quiz</a>
                          </div>
                        </article>
                      `
                    )
                    .join("")}
                </div>
              `
              : '<p class="lesson-note">More personalized review suggestions will appear after you complete a few more quizzes.</p>'
          }
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
