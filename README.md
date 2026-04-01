# Grammar Atlas

> **A premium, self-study English grammar learning platform built as a progressively enhanced static web app.**

Grammar Atlas is a complete, structured English grammar learning system designed for self-learners, students, and professionals who want to build strong grammar foundations from beginner to advanced levels. Every lesson is premium-quality, story-based where relevant, and backed by comprehensive quizzes.

## ✨ Key Features

- **6 Structured Modules** covering foundations through mastery
- **21 Premium Lessons** with story-based instruction, especially for tenses
- **1000+ Quiz Questions** across 3 difficulty levels (Basic, Intermediate, Advanced)
- **Progress Tracking** — lessons completed, quiz scores saved in browser `localStorage`
- **Framework-Free Runtime** — static HTML, CSS, and JavaScript in production
- **Offline-Ready** — fully functional without internet after initial load
- **Responsive Design** — works on desktop, tablet, and mobile
- **GitHub Pages Ready** — one-click deployment included

## Quick Start

### Open in Browser
```bash
open index.html
```

### Run with Local Server
```bash
npm run serve
```
Then visit `http://127.0.0.1:8000`

This local server disables cache headers, so CSS and JavaScript changes show up more reliably during development.

### Deploy to GitHub Pages
1. Push to a GitHub repository
2. Go to **Settings** → **Pages**
3. Set **Source** to `GitHub Actions`
4. The site deploys automatically on push to `main`

## 📚 Curriculum Overview

Each module builds progressively on previous concepts:

### **Module 1: Foundations of Grammar** (Week 1-2)
- Parts of Speech
- Sentence Structure
- Articles, Determiners, and Nouns

### **Module 2: Tenses and Time** (Week 3-6)
- Present Simple and Present Continuous
- Past Simple and Present Perfect
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
