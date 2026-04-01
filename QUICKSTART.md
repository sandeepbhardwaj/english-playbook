# Quick Start for Developers

Get Grammar Atlas running locally and understand the codebase in 5 minutes.

## Local Setup (1 min)

```bash
# Navigate to project
cd english-playbook

# Start local server
python3 -m http.server 8000

# Open in browser
open http://localhost:8000
```

Done! The site is now running. Any file changes auto-reflect in the browser.

---

## File Structure Overview (2 min)

| File/Folder | Purpose |
|---|---|
| `index.html` | Landing page |
| `curriculum.html` | Lesson directory |
| `lesson.html` | Lesson viewer (uses `?lesson=` param) |
| `quiz.html` | Quiz interface (uses `?lesson=` param) |
| `roadmap.html` | 12-week study plan |
| `styles.css` | All styling (mobile-first, responsive) |
| `js/program-data.js` | Curriculum data (modules, lessons) |
| `js/common.js` | Core API (progress, quizzes, analytics) |
| `js/lesson-enhancements.js` | Extended lesson content |
| `js/quiz-generators.js` | Quiz question builders |
| `js/home.js` | Home page logic |
| `js/curriculum.js` | Curriculum page logic |
| `js/lesson.js` | Lesson page logic |
| `js/quiz.js` | Quiz page logic |
| `agents/` | Multi-agent system documentation |

## API Access (1 min)

All functionality accessed through `window.GrammarAtlasApp` global object.

**Test in browser console:**

```javascript
// Get a lesson
const lesson = GrammarAtlasApp.getLesson('present-family');
console.log(lesson.title);

// Get completion stats
const progress = GrammarAtlasApp.getLessonProgress();
console.log(`${progress.completed}/${progress.total} lessons`);

// Get quiz analytics
const analytics = GrammarAtlasApp.getQuizAnalytics();
console.log(`Average: ${analytics?.averageScore}%`);

// Bookmark a lesson
GrammarAtlasApp.toggleBookmark('present-family');

// Export progress
const backup = GrammarAtlasApp.exportProgress();
console.log(backup.substring(0, 200)); // First 200 chars
```

See [API.md](API.md) for complete reference.

---

## Making Changes (1 min)

### Add a New Lesson

Edit `js/program-data.js`:

```javascript
// In the appropriate module's lessons array
{
  id: "conditional-zero",
  title: "Zero Conditional",
  duration: "50 min",
  focus: "Understand universal truths.",
  summary: "Zero conditionals express facts that are always true.",
  objectives: [
    "Recognize zero conditional structure",
    "Apply to scientific and universal truths"
  ],
  // ... other properties
}
```

**Reload browser** — new lesson appears immediately.

### Update Styles

Edit `styles.css` — uses responsive design:

```css
/* Mobile default */
.my-element {
  width: 100%;
}

/* Tablet and up */
@media (min-width: 768px) {
  .my-element {
    width: 50%;
  }
}
```

**Save** — changes reflect instantly in browser.

### Debug an Issue

**In browser DevTools:**

```javascript
// Check progress
GrammarAtlasApp.getCompletedLessons();

// Check quiz scores
GrammarAtlasApp.getQuizScores();

// Check localStorage
localStorage.getItem('grammar-atlas-lessons-v2');

// Reset progress if needed
GrammarAtlasApp.resetProgress();
```

---

## Testing Checklist

Before deploying changes:

- [ ] No console errors: Press `F12`, check Console tab
- [ ] Lesson loads: Open curriculum and click a lesson
- [ ] Quiz works: Click "Take Quiz" and answer questions
- [ ] Progress saves: Mark lesson complete, refresh page (should persist)
- [ ] Mobile works: Test on phone or use DevTools responsive mode
- [ ] Bookmarks work: Click star icon to bookmark

---

## Deployment (Quick)

```bash
# Stage changes
git add -A

# Commit
git commit -m "feat: Add description of your change"

# Push to GitHub
git push origin main

# On GitHub: Site deploys automatically to GitHub Pages
# Check https://[username].github.io/[repo-name] in a few minutes
```

---

## Next Steps

1. **Read** [API.md](API.md) — Full API reference with examples
2. **Review** [CONTRIBUTING.md](CONTRIBUTING.md) — Contribution guidelines
3. **Explore** [agents/](agents/) — Multi-agent system for new lessons
4. **Check** [STYLE_GUIDE.md](STYLE_GUIDE.md) — Code standards
5. **Learn** [CURRICULUM_EXPANSION.md](CURRICULUM_EXPANSION.md) — Add lessons using agents

---

## Common Tasks

### Add a practice exercise type
Edit `js/lesson-enhancements.js` to add new exercise formats used in lessons.

### Change styling
Edit sections in `styles.css` by searching for section comments (`/* ===== SECTION =====`).

### Add a new page
1. Create `my-page.html` with same header/nav structure
2. Add navigation link to page header
3. Create `js/my-page.js` with page logic
4. Include script tags in HTML

### Debug quiz scoring
Check `js/quiz.js` for scoring logic, test with `GrammarAtlasApp.saveQuizScore()`.

---

## Need Help?

- **API questions?** → See [API.md](API.md)
- **Deployment issues?** → See [DEPLOYMENT.md](DEPLOYMENT.md)
- **Content standards?** → See [agents/shared-rules.md](agents/shared-rules.md)
- **Code style?** → See [STYLE_GUIDE.md](STYLE_GUIDE.md)
- **Adding lessons?** → See [CURRICULUM_EXPANSION.md](CURRICULUM_EXPANSION.md)

---

## One-Liner Recipes

```bash
# Start local server
python3 -m http.server 8000

# Check all JS files for syntax
node -c js/*.js

# Quick status check
git status && git log --oneline -5

# Clean up .DS_Store files
find . -name .DS_Store -delete
```

---

**Happy coding!**
