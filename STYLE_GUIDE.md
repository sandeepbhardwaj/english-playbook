# Code Style Guide for Grammar Atlas

This guide ensures consistent, maintainable code across the Grammar Atlas project.

## JavaScript Standards

### General Principles
- **Vanilla ES6+** — No frameworks or heavy dependencies
- **DRY** — Don't Repeat Yourself
- **Single Responsibility** — One function, one clear purpose
- **Readable First** — Code clarity over clever tricks

### Naming Conventions

#### Variables & Functions
- Use `camelCase` for variables and functions
- Use descriptive names that indicate purpose

```javascript
✓ const completedLessons = getCompletedLessons();
✓ function calculateQuizScore(answers, total) { ... }
✗ const completed = getComp();
✗ function calc(a, b) { ... }
```

#### Constants
- Use `UPPER_SNAKE_CASE` for constants
- Define at module/file level

```javascript
✓ const STORAGE_KEY = "grammar-atlas-lessons";
✓ const PASS_THRESHOLD = 70;
✗ const storageKey = "grammar-atlas-lessons";
```

#### Classes & Constructors
- Use `PascalCase`

```javascript
✓ class LessonCard { ... }
✓ class QuizEngine { ... }
```

### Function Structure

```javascript
/**
 * Brief description of what function does.
 * 
 * @param {type} paramName - Description of parameter
 * @returns {type} Description of return value
 */
function calculateProgress(completed, total) {
  if (total === 0) return 0;
  return Math.round((completed / total) * 100);
}
```

### Data Storage Pattern

Use consistent `localStorage` patterns:

```javascript
const STORAGE_KEY = "grammar-atlas-data";

function readData(fallback = {}) {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : fallback;
  } catch (error) {
    console.error("Failed to read data:", error);
    return fallback;
  }
}

function saveData(value) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(value));
    return true;
  } catch (error) {
    console.error("Failed to save data:", error);
    return false;
  }
}
```

### Module Pattern

Use IIFE (Immediately Invoked Function Expression) to avoid global scope pollution:

```javascript
(function () {
  // Private data and functions (not exposed globally)
  const privateData = {};

  function privateFunction() { ... }

  // Public API exposed via window
  window.MyModule = {
    publicMethod: function() { ... },
    publicData: privateData,
  };
})();
```

### Event Handling

Always remove listeners to prevent memory leaks:

```javascript
function attachListener() {
  const handler = (event) => { /* ... */ };
  element.addEventListener('click', handler);
  
  // Store reference so we can remove it later
  return () => element.removeEventListener('click', handler);
}
```

### Error Handling

Always handle JSON parsing and storage with try/catch:

```javascript
function safeJsonParse(jsonString, fallback = null) {
  try {
    return JSON.parse(jsonString);
  } catch (error) {
    console.error("JSON parse error:", error);
    return fallback;
  }
}
```

---

## HTML Standards

### Structure
- Use semantic HTML5 elements (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<aside>`, `<footer>`)
- Proper heading hierarchy (h1, h2, h3...)
- Meaningful `id` and `data-*` attributes

```html
✓ <section class="lesson-hero" id="lesson-hero"></section>
✓ <button data-modal-close="true">Close</button>
✗ <div class="container"></div>
```

### Accessibility (a11y)
- Use `aria-label` for icon-only buttons
- Use `aria-hidden="true"` for decorative elements
- Proper `aria-modal` and `role` on modals
- Descriptive link text (avoid "click here")

```html
✓ <a href="/lesson">Learn Present Tense</a>
✓ <button aria-label="Close dialog">✕</button>
✗ <a href="/lesson">click here</a>
```

### Attributes
- Use lowercase attribute names
- Use double quotes
- Self-closing tags for void elements

```html
✓ <input type="text" placeholder="Enter text" />
✗ <input type='text' placeholder='Enter text'>
```

---

## CSS Standards

### File Organization
- One stylesheet: `styles.css`
- Organize by component/page
- Responsive design: mobile-first approach

### Naming (BEM-inspired)
- Use hyphenated class names
- Use descriptive, purpose-driven names

```css
✓ .button-primary
✓ .lesson-sidebar
✓ .quiz-progress
✗ .btn-blue
✗ .sidebar-right
```

### Responsive Design
```css
/* Mobile first */
.element {
  display: block;
  width: 100%;
}

/* Tablet and up */
@media (min-width: 768px) {
  .element {
    display: grid;
    width: auto;
  }
}

/* Desktop */
@media (min-width: 1024px) {
  .element {
    width: 1000px;
  }
}
```

### Variables & Colors
Use CSS custom properties:

```css
:root {
  --color-primary: #0066cc;
  --color-text: #333;
  --spacing-sm: 8px;
  --spacing-md: 16px;
}

.button-primary {
  background: var(--color-primary);
  color: white;
  padding: var(--spacing-md);
}
```

---

## Comments & Documentation

### When to Comment
- **Why** not What — code should be self-explanatory
- Complex algorithms or non-obvious logic
- Important gotchas or browser compatibility notes
- JSDoc for public APIs

### Comment Style

```javascript
// Single line comment for brief notes
const result = calculate(input); // result is in percentage

/**
 * Block comment for detailed explanations.
 * Use for functions, classes, complex logic.
 * 
 * @param {Type} param - Description
 * @returns {Type} - Description
 */
function myFunction(param) {
  // Implementation
}

// TODO: Implement search functionality
// FIXME: Quiz scoring fails when answer count is 0
```

---

## File Organization

```
english-playbook/
├── index.html                 # Landing page
├── *.html                     # Static pages
├── styles.css                 # Single stylesheet
├── js/
│   ├── program-data.js       # 📊 Curriculum data structure
│   ├── lesson-enhancements.js # 📚 Extended lesson content
│   ├── quiz-generators.js    # ❓ Quiz question builders
│   ├── common.js             # 🔧 Shared utilities and API
│   └── [page].js             # 📄 Page-specific logic
├── agents/                    # Multi-agent system documentation
├── .github/workflows/         # GitHub Actions
└── .vscode/                   # Editor settings
```

### File Size Guidelines
- Keep JS files under 500 lines (split if needed)
- Keep CSS under 1000 lines (organize with clear sections)
- Add break comments for major sections

```javascript
// ===== SECTION NAME =====
// Related functions and data for this section
```

---

## Testing & Validation

### Browser Testing
- Test on Chrome, Firefox, Safari
- Test on mobile (iOS Safari, Chrome Mobile)
- Use DevTools console for errors
- Check localStorage in DevTools Application tab

### Code Review Checklist
- [ ] Follows naming conventions
- [ ] No console errors or warnings
- [ ] Functions have clear purpose and names
- [ ] Error handling present (try/catch for parsing)
- [ ] localStorage operations wrapped safely
- [ ] Responsive design tested
- [ ] Accessibility checks (keyboard nav, screen readers)
- [ ] Comments added for complex logic
- [ ] No unused variables or dead code

---

## Performance Considerations

### JavaScript
- Avoid large loops in the main thread
- Use Set/Map instead of Array for frequent lookups
- Cache DOM queries

```javascript
✓ const element = document.getElementById('id');
✓ const bookmarks = new Set([1, 2, 3]);
✗ for (let i = 0; i < items.length; i++) { 
    document.getElementById('id').innerHTML += items[i]; 
  }
```

### CSS
- Minimize reflows (batch DOM changes)
- Use class toggles instead of inline style changes
- Prefer CSS over JavaScript animations for performance

### localStorage
- Compress data if storing large JSON structures
- Don't store frequently-accessed data in localStorage (cache in memory)

---

## Git Commit Messages

Follow this format:

```
[type]: Brief description (50 chars or less)

Detailed explanation if needed.
- Point 1
- Point 2

Fixes #123
```

Types:
- `feat:` New feature
- `fix:` Bug fix
- `docs:` Documentation update
- `style:` Code style (formatting, no behavior change)
- `refactor:` Code restructuring
- `enhance:` Improvement to existing code

Example:
```
feat: Add study streak tracking to common.js

- Track consecutive days of learning activity
- Auto-update on lesson/quiz completion
- Export/import streakdata with progress backup
```

---

## Common Issues & Solutions

### localStorage Quota Exceeded
**Problem:** Too much data stored
**Solution:** Compress JSON, implement data cleanup, export old progress

### Memory Leaks from Event Listeners
**Problem:** Listeners never removed
**Solution:** Always store handler reference, implement cleanup

### Async JSON Parsing Blocking UI
**Problem:** Large JSON parse freezes page
**Solution:** Use Web Workers for heavy parsing, or paginate data

---

## Resources

- [MDN JavaScript Guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [MDN Web APIs](https://developer.mozilla.org/en-US/docs/Web/API)
- [Web Accessibility Guidelines](https://www.w3.org/WAI/WCAG21/quickref)
- [Can I Use](https://caniuse.com/) — Browser compatibility

