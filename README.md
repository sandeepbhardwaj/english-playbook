# English Grammar Atlas

English Grammar Atlas is a static Astro site for structured English grammar study. It combines lesson content written in Markdown with lesson-based quizzes, a browser-saved learner dashboard, a curriculum view, a weekly roadmap, and printer-friendly lesson pages.

Production URL: `https://english.scalemind.dev/`

## What The App Includes

- 21 lesson pages grouped into 6 curriculum modules
- lesson-specific quizzes generated from lesson content
- a dashboard that tracks saved quiz scores, lesson completion, bookmarks, and an error log
- a curriculum map and 12-week roadmap
- browser-based progress persistence with import/export support
- printable lesson pages for offline review

## Tech Stack

- Astro 6
- `markdown-it` for lesson rendering
- `gray-matter` for Markdown frontmatter parsing
- `@astrojs/sitemap` for sitemap generation

## Project Structure

```text
src/
  assets/css/              Global, layout, and component styles
  content/lessons/         Lesson Markdown source files
  data/curriculum.json     Module ordering and lesson metadata
  layouts/                 Shared Astro layouts
  lib/                     Course, lesson, quiz, and content helpers
  pages/                   Static and dynamic routes
public/
  scripts/progress.js      Browser-only learner progress storage
  CNAME                    GitHub Pages custom domain
  site assets              Favicons, OG image, verification file
.github/workflows/
  deploy-pages.yml         Build and deploy workflow
```

## Main Routes

- `/`
- `/curriculum`
- `/roadmap`
- `/dashboard`
- `/quiz`
- `/modules/[moduleId]`
- `/lessons/[slug]`
- `/quiz/[slug]`

## Local Development

Requirements:

- Node.js `>=22.12.0`

Install dependencies:

```bash
npm install
```

Run the local dev server:

```bash
npm run dev
```

Create a production build:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

## Content Workflow

To add a new lesson:

1. Create a Markdown file in `src/content/lessons/`.
2. Add the lesson metadata and ordering entry in `src/data/curriculum.json`.
3. Run `npm run build` to verify the lesson is included correctly.

That single content update flows into:

- lesson pages
- module pages
- curriculum and roadmap views
- lesson quizzes
- sitemap output

## How Data Works

Learner progress is stored in the browser only. The app does not require a database or server-side user accounts.

Tracked data includes:

- lesson completion state
- lesson bookmarks
- saved quiz scores
- learner activity history
- error log entries

This browser state is managed by `public/scripts/progress.js` and consumed by lesson pages, quizzes, and the dashboard.

## Printing

Lesson pages include a print action and print-specific styling so learners can print a clean version of the lesson content without the main site chrome.

## Build And Deployment

The site is built as static output with Astro:

- `astro.config.mjs` sets `output: 'static'`
- the canonical site URL comes from `SITE_URL` and falls back to `https://english.scalemind.dev`
- sitemap files are generated automatically during build

GitHub Pages deployment is handled by `.github/workflows/deploy-pages.yml`.

Current workflow behavior:

- runs on pushes to `main`
- runs on pull requests targeting `main`
- also supports manual dispatch
- installs dependencies with `npm ci`
- builds with `SITE_URL=https://english.scalemind.dev`
- uploads `dist/` as the Pages artifact
- deploys only for pushes to `main`

## Maintenance Notes

- If the production domain changes, update both `public/CNAME` and the `SITE_URL` value used in the deployment workflow.
- `src/pages/robots.txt.ts` points crawlers to the generated sitemap index.
- Because progress is browser-local, clearing storage will remove saved learner state unless it has been exported first.
