# Grammar Atlas

> **A premium, self-study English grammar learning platform built as a progressively enhanced static web app.**

Grammar Atlas is a complete, structured English grammar learning system designed for self-learners, students, and professionals who want to build strong grammar foundations from beginner to advanced levels. Every lesson is premium-quality, story-based where relevant, and backed by comprehensive quizzes.

## ✨ Key Features

- **6 Structured Modules** covering foundations through mastery
- **18 Premium Lessons** with story-based instruction, especially for tenses
- **1000+ Quiz Questions** across 3 difficulty levels (Basic, Intermediate, Advanced)
- **Progress Tracking** — lessons completed, quiz scores saved in browser `localStorage`
- **No External Dependencies** — pure HTML, CSS, and JavaScript
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

### **Module 2: Tenses and Time** (Week 3-4)
- Present Simple and Present Continuous
- Past Simple and Present Perfect
- Future Forms, Perfect Forms, and Modals

### **Module 3: Sentence Accuracy** (Week 5-6)
- Subject-Verb Agreement
- Pronouns, Questions, and Negatives
- Prepositions and Modifiers

### **Module 4: Complex Grammar** (Week 7-8)
- Clauses, Conjunctions, and Relative Clauses
- Conditionals, Wishes, and Hypothetical Meaning
- Reported Speech and Reporting Verbs

### **Module 5: Style and Editing** (Week 9-10)
- Punctuation for Clarity
- Parallelism and Comparison
- Concision and Formal Tone

### **Module 6: Mastery and Review** (Week 11-12)
- Error Correction Drills
- Transformations and Cloze Practice
- Final Review and Study Strategy

## 🏗️ Project Structure

```
english-playbook/
├── index.html                 # Landing page
├── curriculum.html            # Module and lesson directory
├── lesson.html                # Single lesson renderer
├── quiz.html                  # Quiz engine
├── roadmap.html               # 12-week study plan
├── 404.html                   # Error page (for GitHub Pages)
├── styles.css                 # Responsive design system
│
├── docs/                      # Additional developer/reference docs
│   ├── API.md
│   ├── QUICKSTART.md
│   ├── STYLE_GUIDE.md
│   ├── CURRICULUM_EXPANSION.md
│   └── archive/master-prompt.md
│
├── js/
│   ├── program-data.js        # Curriculum, modules, lessons, roadmap
│   ├── lesson-enhancements.js # Extended lesson content & support
│   ├── quiz-generators.js     # Quiz bank builder
│   ├── common.js              # Utilities and localStorage helpers
│   ├── home.js                # Home page logic
│   ├── curriculum.js          # Curriculum page logic
│   ├── lesson.js              # Lesson page logic
│   ├── quiz.js                # Quiz page logic
│   └── roadmap.js             # Roadmap page logic
│
├── agents/                    # Multi-agent system prompts
│   ├── shared-rules.md        # Core principles
│   ├── planner-agent.md       # Curriculum design
│   ├── lesson-agent.md        # Content authoring
│   ├── quiz-agent.md          # Question generation
│   ├── reviewer-agent.md      # Quality assurance
│   ├── formatter-agent.md     # Output formatting
│   └── orchestrator.md        # Workflow coordination
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

Use the multi-agent system in `agents/` to create premium lessons:

1. **Planner Agent** → Design curriculum structure and topics
2. **Lesson Agent** → Write the complete lesson with all required sections
3. **Quiz Agent** → Generate 60-100 test questions
4. **Reviewer Agent** → Quality assurance and approval
5. **Formatter Agent** → Polish to publication-ready markdown
6. **Orchestrator** → Coordinate the workflow

See `agents/shared-rules.md` for the complete content standard.

Additional reference docs are grouped under [`docs/`](docs/README.md).

### Local Development Workflow

```bash
# Start local server
python3 -m http.server 8000

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
- No external dependencies (fully self-contained)
- localStorage used for cross-session persistence

## 📊 Data Structure

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
5. The site deploys automatically from the repository root (no build step needed)

**Result:** Your grammar learning platform is live at your deployment URL (GitHub Pages, custom domain, or other host)

> **Note:** Grammar Atlas is already deployed and live at **[https://english.scalemind.dev](https://english.scalemind.dev)** using GitHub Actions with a custom domain.

### Deploy to Other Services

- **Netlify:** Push the repo and connect — it works with no configuration
- **Vercel:** Similar to Netlify — connect and deploy
- **Traditional Server:** Copy all files to your web server's public directory

## 🤝 Contributing

To help improve Grammar Atlas:

1. Report issues or suggest improvements via GitHub Issues
2. Follow the multi-agent system guidelines in `agents/shared-rules.md`
3. Test content on multiple devices before submitting
4. Ensure quiz questions have clear correct answers and realistic distractors
5. Use the Reviewer Agent to quality-check work before contributing

## 📝 License

[Add your license here]

## 📧 Support

For questions or feedback:
- Open an issue on GitHub
- Check the FAQ section (coming soon)
- Review `roadmap.html` for study guidance

---

**Last Updated:** April 2026  
**Maintained by:** [Your Name/Team]
