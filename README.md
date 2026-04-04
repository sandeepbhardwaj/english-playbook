# English Grammar Atlas - Astro Edition

A premium, self-study English grammar learning platform built with **Astro** — fast, modern, content-first.

## ✨ Key Features

- **6 Structured Modules** covering foundations through mastery  
- **21 Premium Lessons** with story-based instruction
- **1000+ Quiz Questions** across 3 difficulty levels
- **Content-First Design** — Markdown-based lessons, no JavaScript bloat
- **Fresh CSS System** — 70+ design variables, modular architecture
- **Mobile-Responsive** — Perfect on desktop, tablet, and mobile
- **Fast & Modern** — Built with Astro for instant performance
- **Offline Support** — Works without internet after first visit
- **GitHub Pages Ready** — Deploy directly from your repo

## Quick Start

### Local Development

```bash
npm install
npm run dev
# Visit http://localhost:3000
```

### Build & Deploy

```bash
npm run build
# Static site generated in dist/
# Deploy to GitHub Pages, Netlify, or any static host
```

## Architecture

### Framework
- **Astro** — Static site generator (no JavaScript runtime)
- **Markdown** — All lesson content in .md files
- **CSS Variables** — Complete design system (70+ tokens)

### Directory Structure

```
├── src/
│   ├── assets/css/           # Fresh CSS system
│   │   ├── global.css        # Typography, colors, resets
│   │   ├── layout.css        # Grid, flexbox, spacing
│   │   ├── components.css    # Buttons, cards, forms
│   │   └── lessons.css       # Lesson-specific styling
│   ├── content/              # Content collections
│   │   ├── lessons/          # 21 markdown lesson files
│   │   └── config.ts         # Content schema
│   ├── data/
│   │   └── curriculum.json   # Navigation data
│   ├── layouts/              # Page templates
│   │   ├── BaseLayout.astro
│   │   └── LessonLayout.astro
│   └── pages/                # Route pages
│       ├── index.astro       # Homepage
│       ├── curriculum.astro
│       ├── roadmap.astro
│       ├── quiz.astro
│       └── lessons/[...slug].astro
└── public/                   # Static assets
```

## CSS System

### Design Tokens
- **Colors** — Primary (#2563eb), Secondary (#7c3aed), Status colors
- **Typography** — 8 font sizes, 4 weights, proper line heights
- **Spacing** — 7-point scale (xs to 4xl)
- **Radius** — 4 border radius values
- **Shadows** — 4 shadow depths
- **Transitions** — 3 speed options

### Component Library
- Buttons (primary, secondary, outline, sizes)
- Cards with hover effects
- Badges with status variants
- Alerts (info, success, warning, error)
- Form inputs with focus states
- Lesson example cards
- Common mistake highlighting
- Cheat sheet sections

## Lessons Content

Each lesson is a Markdown file with YAML frontmatter:

```yaml
---
slug: parts-of-speech
title: Parts of Speech
module: Module 1: Foundations of Grammar
moduleId: foundations
duration: 50 min
focus: Identify the job each word does inside a sentence.
level: Beginner
---

## Overview
[Content here]

## Learning Objectives
- Objective 1
- Objective 2

## Key Rules
- Rule 1
- Rule 2

## Examples
- Example with explanation

## Common Mistakes
- Wrong vs. Right analysis

## Quick Reference
- Quick tips

## Practice Plan
1. Exercise
2. Exercise

## Summary
Final takeaways
```

## Customization

### Change Colors
Edit `/src/assets/css/global.css` `:root` section:

```css
:root {
  --color-primary: #your-color;
  --color-secondary: #your-color;
  /* All changes apply everywhere */
}
```

### Add New Lesson
1. Create `src/content/lessons/module-X/lesson-id.md`
2. Use the frontmatter structure above
3. Lesson automatically appears in navigation

### Modify Layouts  
Edit `/src/layouts/` files — they're standard Astro components

## Deployment

### GitHub Pages
```bash
npm run build
# Push dist/ contents to gh-pages branch
# Or configure GitHub Actions for auto-deploy
```

### Netlify
```bash
npm run build
# Drag dist/ folder to Netlify
# Or connect GitHub repo for auto-deploy
```

### Vercel
```bash
npm run build
# Connect GitHub repo in Vercel dashboard
# Auto-deploys on every push
```

## Performance

- **Zero JavaScript** in production by default
- **Instant page loads** — static HTML served
- **Gzipped assets** — ~60KB total initial load
- **Offline support** — Service worker included
- **Optimized images** — Automatic compression

## File Structure

Every lesson includes:
- Overview & summary
- 3-5 Learning objectives
- Core grammar rules
- 8-12 Real examples
- 3-5 Common mistake highlights
- Quick reference cheat sheet
- 5-step practice plan

## Git History

All previous git commits are preserved. This is a clean migration that:
- ✅ Keeps all git history intact
- ✅ Preserves CNAME for custom domain
- ✅ Maintains Google verification files
- ✅ Uses the same git repository

## Next Steps

1. Add remaining 19 lessons to `/src/content/lessons/`
2. Create dynamic lesson routes
3. Deploy to GitHub Pages
4. Set up GitHub Actions for auto-build

See `MIGRATION.md` for detailed implementation guide.
- Future Forms and Future Time Reference
- Modals in Depth

### **Module 3: Sentence Accuracy** (Week 7-9)
- Subject-Verb Agreement
- Pronouns, Questions, and Negatives
- Prepositions and Modifiers
- Active and Passive Voice

### **Module 4: Complex Grammar** (Week 10-12)
- Clauses, Conjunctions, and Relative Clauses
- Conditionals, Wishes, and Hypothetical Meaning
- Reported Speech and Reporting Verbs
- Gerunds, Infinitives, and Verb Patterns

### **Module 5: Style and Editing** (Week 13-14)
- Punctuation for Clarity
- Parallelism and Comparison
- Concision and Formal Tone

### **Module 6: Mastery and Review** (Week 14)
- Error Correction Drills
- Transformations and Cloze Practice
- Final Review and Study Strategy

## 🏗️ Project Structure

```
english-playbook/
├── AGENT_CONTEXT.md          # Fast bootstrap for agent sessions
├── README.md                 # Main project overview
├── package.json              # Local dev scripts
├── package-lock.json         # Locked dev dependencies
├── CNAME                     # Custom domain for GitHub Pages
├── .nojekyll                 # GitHub Pages static-site hint
│
├── index.html                 # Landing page
├── curriculum.html            # Module and lesson directory
├── diagnostic.html            # Diagnostic assessment page
├── dashboard.html             # Learner dashboard
├── lesson.html                # Single lesson renderer
├── quiz.html                  # Quiz engine
├── roadmap.html               # 14-week study plan
├── 404.html                   # Error page (for GitHub Pages)
├── styles.css                 # Responsive design system
│
├── docs/                      # All repo/process docs
│   ├── API.md
│   ├── QUICKSTART.md
│   ├── BUILD.md
│   ├── DEPLOYMENT.md
│   ├── CONTRIBUTING.md
│   └── README.md             # Docs index
│
├── js/                        # Runtime data and page logic
│   ├── program-data.js        # Curriculum, modules, lessons, roadmap
│   ├── lesson-enhancements.js # Extended lesson content & support
│   ├── quiz-generators.js     # Quiz bank builder
│   ├── common.js              # Utilities and localStorage helpers
│   ├── home.js                # Home page logic
│   ├── curriculum.js          # Curriculum page logic
│   ├── diagnostic.js          # Diagnostic logic
│   ├── dashboard.js           # Dashboard logic
│   ├── lesson.js              # Lesson page logic
│   ├── quiz.js                # Quiz page logic
│   └── roadmap.js             # Roadmap page logic
│
├── scripts/
│   └── dev-server.js          # No-cache local dev server
│
├── dist/                      # Generated build output (not source of truth)
│
└── .github/workflows/
    └── deploy-pages.yml       # GitHub Actions for auto-deployment
```

## 🎯 Learning Philosophy

Grammar Atlas follows these core principles:

- **Intuition First** — Start with meaning and real-life use before formal rules
- **Story-Based Learning** — Complex topics taught through memorable stories (especially tenses)
- **Practical Examples** — Every rule illustrated with natural, conversational English
- **Progressive Difficulty** — Foundation concepts before advanced control
- **Mistake Analysis** — Explain not just what is correct, but why learners often get it wrong
- **Active Practice** — Multiple exercise types to reinforce understanding
- **Strong Quizzes** — 60-100 questions per lesson testing real comprehension

## 🔧 Development

### Adding New Content

Add or revise lesson data directly in `js/program-data.js`.
Use an existing lesson object as the template and keep the lesson content, quiz coverage notes, module metadata, and roadmap entries aligned when you change the curriculum.

Additional reference docs are grouped under [`docs/`](docs/README.md).
Use [`docs/QUICKSTART.md`](docs/QUICKSTART.md) for onboarding, [`docs/BUILD.md`](docs/BUILD.md) for build details, [`docs/DEPLOYMENT.md`](docs/DEPLOYMENT.md) for hosting notes, and [`docs/CONTRIBUTING.md`](docs/CONTRIBUTING.md) for contribution workflow.

### Local Development Workflow

```bash
# Start local dev server
npm run serve

# Edit content in program-data.js
# Changes auto-reflect in the browser
# Use browser DevTools console for debugging

# Test on multiple devices
# Check localStorage for progress tracking
```

### Code Quality Standards

- All JavaScript is vanilla ES6+ (no frameworks)
- CSS uses responsive design with mobile-first approach
- HTML is semantic and accessible
- Runtime stays framework-free; npm/esbuild are used only for local tooling and build tasks
- localStorage used for cross-session persistence

## 📊 Data Structure

### Lesson Format
Each lesson includes:
- Topic Name
- Intuition (why this matters)
- Core Rules (precise explanations)
- Sentence Structures (forms and patterns)
- Detailed Examples (12-20+ realistic uses)
- Story-Based Learning (narrative context)
- Common Mistakes (wrong vs. correct)
- Practice Exercises (varied types)
- Quiz Sets (60-100 questions)
- Quick Revision Summary
- Cheat Sheet

### Quiz Format
- 60-100 questions per lesson
- 3 difficulty levels:
  - Basic: 20-30 (identification, simple application)
  - Intermediate: 20-30 (editing, mixed structures)
  - Advanced: 20-40 (context, nuance, real communication)
- Each question has 4 options, explanations, and difficulty indicators

### Progress Storage
Using browser `localStorage`:
- Completed lessons tracked per user
- Quiz scores and performance metrics
- Study streak information
- Bookmarked lessons
- *Note: data is browser-specific, not synced across devices*

## 🚀 Deployment

### Deploy To GitHub Pages (Recommended)

This repository includes a GitHub Actions workflow for automatic deployment.

**Steps:**
1. Push this project to a GitHub repository
2. In GitHub, open `Settings` → `Pages`
3. Under `Build and deployment`, set `Source` to `GitHub Actions`
4. Push to the `main` branch
5. GitHub Actions installs dependencies, builds assets, and deploys automatically, so no manual build step is needed

**Result:** Your grammar learning platform is live at your deployment URL (GitHub Pages, custom domain, or other host)

> **Note:** Grammar Atlas is already deployed and live at **[https://english.scalemind.dev](https://english.scalemind.dev)** using GitHub Actions with a custom domain.

### Deploy to Other Services

- **Netlify:** Push the repo and connect — it works with no configuration
- **Vercel:** Similar to Netlify — connect and deploy
- **Traditional Server:** Copy all files to your web server's public directory

## 🤝 Contributing

To help improve Grammar Atlas:

1. Report issues or suggest improvements via GitHub Issues
2. Keep lesson data consistent with the existing structure in `js/program-data.js`
3. Test content on multiple devices before submitting
4. Ensure quiz questions have clear correct answers and realistic distractors
5. Review lesson and quiz flows in the browser before contributing

## 📝 License

No `LICENSE` file is included yet. Add one before public reuse or redistribution.

## 📧 Support

For questions or feedback:
- Open an issue on GitHub
- Review [`docs/README.md`](docs/README.md) for the documentation index
- Review [`AGENT_CONTEXT.md`](AGENT_CONTEXT.md) for the repo bootstrap summary
- Review `roadmap.html` for study guidance
