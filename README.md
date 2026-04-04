# English Grammar Atlas

English Grammar Atlas is an Astro-based grammar learning portal with markdown lessons, per-lesson quizzes, and a browser-saved learner dashboard.

Production URL: `https://english.scalemind.dev/`

## Portal Structure

- `src/content/lessons/`: markdown lesson source
- `src/data/curriculum.json`: module order and lesson metadata
- `src/lib/course.ts`: curriculum lookup and ordering helpers
- `src/lib/lesson-files.ts`: markdown loading and lesson rendering
- `src/lib/quiz.ts`: quiz generation from lesson content
- `src/layouts/`: shared page shells
- `src/pages/`: static and dynamic Astro routes
- `public/`: deployable static assets such as favicons, CNAME, and browser scripts

This is a clean structure for the current project size:

- content is separated from rendering
- route shells are thin
- shared logic lives in `src/lib`
- browser-only persistence stays out of Astro SSR code

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

Commands:

```bash
npm install
npm run dev
npm run build
npm run preview
```

## Content Workflow

To add a lesson:

1. Create a new markdown file in `src/content/lessons/`
2. Add its metadata and ordering entry in `src/data/curriculum.json`
3. Run `npm run build`

That update flows through lesson routes, module pages, quiz routes, and the sitemap.

## Sitemap Strategy

The project uses Astro's official sitemap integration.

- Sitemap files are generated automatically during build
- Dynamic lesson, module, and quiz routes are included
- `src/pages/robots.txt.ts` points crawlers to the generated sitemap index

This means new pages are picked up automatically when they become part of the Astro route graph.

## Deployment

GitHub Pages deployment is handled by `.github/workflows/deploy-pages.yml`.

Current workflow behavior:

- builds on pull requests and pushes to `main`
- deploys only on pushes to `main`
- uses Node 22 with `npm ci`
- builds with `SITE_URL=https://english.scalemind.dev`
- uploads `dist/` only

Custom-domain and verification assets are now served from `public/`:

- `public/CNAME`
- `public/googledaef87a4ec01a6aa.html`

## Notes

- Learner progress is stored in the browser only.
- If the production domain changes, update both `public/CNAME` and the `SITE_URL` value in the deploy workflow.
