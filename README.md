# Grammar Atlas

Grammar Atlas is a multi-page English grammar learning program built as a static web app. It now includes:

- 6 structured modules
- 18 lesson pages
- Story-based tense instruction
- 60-question quiz banks for every lesson
- Curriculum, lesson, quiz, and roadmap pages
- Browser-based lesson completion and quiz score tracking with `localStorage`

## Run locally

Open `index.html` in a browser.

If you prefer a local server, run:

```bash
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.

## Structure

- `index.html` is the landing page.
- `curriculum.html` lists all modules and lessons.
- `lesson.html` renders a single lesson based on the `lesson` query parameter.
- `quiz.html` renders the lesson quiz based on the `lesson` query parameter.
- `roadmap.html` contains the 12-week study plan.
- `styles.css` contains the shared responsive design.
- `js/program-data.js` stores modules, lessons, and roadmap content.
- `js/quiz-generators.js` builds the 60-question banks for each lesson.
- `js/common.js` contains shared utilities and local storage helpers.
- `js/home.js`, `js/curriculum.js`, `js/lesson.js`, `js/quiz.js`, and `js/roadmap.js` power each page.

## Notes

- Progress is saved only in the current browser.
- No build step or external dependency is required.

## Deploy To GitHub Pages

This repository now includes a GitHub Actions workflow for GitHub Pages in
`.github/workflows/deploy-pages.yml`.

To publish:

1. Push this project to a GitHub repository.
2. In GitHub, open `Settings` -> `Pages`.
3. Under `Build and deployment`, set `Source` to `GitHub Actions`.
4. Push to the `main` branch, or run the workflow manually from the `Actions` tab.

The site is deployed directly from the repository root, so no build step is
needed.
