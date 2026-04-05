import { getGrammarAtlasProgress, type QuizScore } from '../lib/browser/grammar-atlas-progress';

interface QuizQuestion {
  prompt: string;
  options: string[];
  correctIndex: number;
  explanation: string;
  difficulty?: string;
  tag: string;
}

function readStoredQuizScore(storageKey: string) {
  try {
    const raw = window.localStorage.getItem(storageKey);
    return raw ? (JSON.parse(raw) as QuizScore) : null;
  } catch {
    return null;
  }
}

export function initLessonQuizPage() {
  const root = document.getElementById('quiz-app');
  const dataElement = document.getElementById('quiz-data');

  if (!(root instanceof HTMLElement) || !dataElement?.textContent) {
    return;
  }

  const questions = JSON.parse(dataElement.textContent) as QuizQuestion[];
  const storageKey = root.dataset.storageKey || '';
  const lessonSlug = storageKey.replace('grammar-atlas.quiz.', '');
  const progressApi = getGrammarAtlasProgress();

  const progressCopy = document.getElementById('progress-copy');
  const progressBar = document.getElementById('progress-bar');
  const bestScoreValue = document.getElementById('best-score-value');
  const resultsPanel = document.getElementById('quiz-results');
  const resultsSummary = document.getElementById('results-summary');
  const submitButton = document.getElementById('submit-quiz');
  const resetButton = document.getElementById('reset-quiz');
  const optionButtons = Array.from(root.querySelectorAll<HTMLButtonElement>('.option-button'));
  const questionCards = Array.from(root.querySelectorAll<HTMLElement>('[data-question-card]'));

  const answers = new Array<number | null>(questions.length).fill(null);
  let submitted = false;

  const renderBestScore = () => {
    if (!(bestScoreValue instanceof HTMLElement)) {
      return;
    }

    const storedScore = progressApi?.getQuizScore(lessonSlug) || readStoredQuizScore(storageKey);

    if (!storedScore || typeof storedScore.percent !== 'number') {
      bestScoreValue.textContent = 'No score yet';
      return;
    }

    bestScoreValue.textContent = `${Math.round(storedScore.percent)}%`;
  };

  const updateProgress = () => {
    const answeredCount = answers.filter((answer) => answer !== null).length;

    if (progressCopy instanceof HTMLElement) {
      progressCopy.textContent = `${answeredCount} of ${questions.length} answered`;
    }

    if (progressBar instanceof HTMLElement) {
      progressBar.style.width = `${(answeredCount / questions.length) * 100}%`;
    }
  };

  const renderSelections = () => {
    optionButtons.forEach((button) => {
      const questionIndex = Number(button.dataset.questionIndex);
      const optionIndex = Number(button.dataset.optionIndex);
      const question = questions[questionIndex];
      const questionCard = questionCards[questionIndex];
      const feedback = questionCard?.querySelector<HTMLElement>('[data-feedback]');
      const isSelected = answers[questionIndex] === optionIndex;
      const isCorrect = question.correctIndex === optionIndex;

      button.classList.toggle('is-selected', isSelected);
      button.classList.toggle('is-correct', submitted && isCorrect);
      button.classList.toggle('is-incorrect', submitted && isSelected && !isCorrect);

      if (submitted) {
        button.setAttribute('aria-disabled', 'true');
      } else {
        button.removeAttribute('aria-disabled');
      }

      if (!feedback) {
        return;
      }

      if (!submitted) {
        feedback.hidden = true;
        feedback.textContent = '';
        return;
      }

      feedback.hidden = false;

      if (answers[questionIndex] === null) {
        feedback.textContent = `No answer selected. Correct answer: ${question.options[question.correctIndex]}. ${question.explanation}`;
        return;
      }

      const prefix =
        answers[questionIndex] === question.correctIndex
          ? 'Correct.'
          : `Correct answer: ${question.options[question.correctIndex]}.`;

      feedback.textContent = `${prefix} ${question.explanation}`;
    });
  };

  const saveScore = (percent: number, correct: number) => {
    if (!storageKey || !lessonSlug) {
      return;
    }

    const existingScore = progressApi?.getQuizScore(lessonSlug) || readStoredQuizScore(storageKey);

    if (existingScore && percent < existingScore.percent) {
      return;
    }

    const payload: QuizScore = {
      percent,
      correct,
      total: questions.length,
      updatedAt: new Date().toISOString(),
    };

    if (progressApi) {
      progressApi.saveQuizScore(lessonSlug, payload);
      progressApi.updateLessonState(lessonSlug, { lastQuizPercent: percent });
      return;
    }

    window.localStorage.setItem(storageKey, JSON.stringify(payload));
  };

  const submitQuiz = () => {
    if (submitted) {
      return;
    }

    submitted = true;

    const correctCount = questions.filter(
      (question, index) => answers[index] === question.correctIndex,
    ).length;
    const percent = (correctCount / questions.length) * 100;

    renderSelections();
    saveScore(percent, correctCount);
    renderBestScore();

    if (resultsPanel instanceof HTMLElement) {
      resultsPanel.hidden = false;
    }

    if (resultsSummary instanceof HTMLElement) {
      resultsSummary.textContent = `You answered ${correctCount} of ${questions.length} correctly (${Math.round(percent)}%).`;
    }
  };

  const resetQuiz = () => {
    submitted = false;
    answers.fill(null);

    if (resultsPanel instanceof HTMLElement) {
      resultsPanel.hidden = true;
    }

    if (resultsSummary instanceof HTMLElement) {
      resultsSummary.textContent = '';
    }

    renderSelections();
    updateProgress();
  };

  optionButtons.forEach((button) => {
    button.addEventListener('click', () => {
      if (submitted) {
        return;
      }

      const questionIndex = Number(button.dataset.questionIndex);
      const optionIndex = Number(button.dataset.optionIndex);

      answers[questionIndex] = optionIndex;
      renderSelections();
      updateProgress();
    });
  });

  submitButton?.addEventListener('click', submitQuiz);
  resetButton?.addEventListener('click', resetQuiz);

  renderBestScore();
  renderSelections();
  updateProgress();
}
