# Agent Context

This file is a fast bootstrap for agents working in this repository.

## Project Purpose

Grammar Atlas is a framework-free English grammar learning site.
It is a static web app built with HTML, CSS, and vanilla JavaScript.
The repo contains the app, lesson data, quiz generation logic, progress tracking, and deployment workflow.

## Source Of Truth

Start here when ramping up:

- `README.md` for project overview
- `docs/QUICKSTART.md` for local workflow
- `docs/API.md` for browser-side helpers on `window.GrammarAtlasApp`
- `js/program-data.js` for curriculum, lessons, and roadmap

Primary edit targets:

- `js/program-data.js` for curriculum structure, lesson content, and roadmap entries
- `js/common.js` for shared app API, storage helpers, and flattened curriculum access
- `js/*.js` page scripts for runtime behavior
- `styles.css` for styling
- `*.html` files for page structure

Avoid treating generated output as canonical source:

- `dist/` is build output

## Current Product Shape

At the time this file was created, the app uses:

- 6 modules
- 21 lessons
- 14 roadmap weeks

If these counts change, update this file only if the change is intentional and stable.

## Lesson Data Shape

Lesson content is stored directly in `js/program-data.js`.
Each lesson object should stay structurally consistent with existing lessons.

Typical lesson fields:

- `id`
- `title`
- `duration`
- `focus`
- `summary`
- `objectives`
- `rules`
- `examples`
- `pitfalls`
- `practicePlan`
- `story`
- `revisionSummary`
- `cheatSheet`
- `quizCoverageNotes`

If you add or move lessons, also check:

- module `duration`, `description`, and `portfolioTask`
- roadmap entries in `js/program-data.js`
- any docs that describe module order or lesson counts

## Runtime Architecture

Important files:

- `js/program-data.js` exposes `window.GrammarAtlasData`
- `js/common.js` exposes `window.GrammarAtlasApp`
- `js/home.js`, `js/curriculum.js`, `js/lesson.js`, `js/quiz.js`, `js/roadmap.js`, and `js/dashboard.js` drive individual pages
- `js/quiz-generators.js` builds quiz content from lesson data
- `js/lesson-enhancements.js` adds supporting lesson metadata and presentation helpers

The app is data-driven. Many user-visible changes come from editing `js/program-data.js`, not from changing rendering logic.

## Commands

Common commands:

```bash
npm install
npm run serve
npm run build
npm run build:watch
```

Notes:

- `npm run serve` starts the no-cache local dev server
- `npm run build` uses `esbuild` to write optimized assets into `dist/`

## Working Rules

- Prefer editing source files, not generated files in `dist/`
- When changing lesson data, preserve the existing object shape unless there is a deliberate schema change
- When changing curriculum order, verify navigation and roadmap consistency
- Keep the runtime framework-free
- Prefer small, direct changes over introducing extra abstraction

## Quick Validation

After meaningful changes, use some mix of:

```bash
npm run serve
npm run build
node -e "const fs=require('fs'); const vm=require('vm'); const src=fs.readFileSync('js/program-data.js','utf8'); const sandbox={window:{}}; vm.runInNewContext(src,sandbox); console.log('ok')"
```

Manual browser checks are especially useful for:

- curriculum page
- lesson page
- quiz page
- roadmap page
- progress persistence in `localStorage`

## When In Doubt

If the change touches curriculum content, inspect `js/program-data.js` first.
If the change touches user progress or navigation, inspect `js/common.js` next.
If the change touches rendering, inspect the page-specific `js/*.js` file for that page.
