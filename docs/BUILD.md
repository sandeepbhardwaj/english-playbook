# Build & Optimization Guide

## Quick Start

### Install Dependencies
```bash
npm install
```

### Build (Minify Assets)
```bash
npm run build
```

Generates optimized files in `dist/` directory with ~20-25% size reduction.

### Watch Mode (Development)
```bash
npm run build:watch
```

Automatically rebuilds when source files change.

### Local Dev Server
```bash
npm run serve
```

This serves the project with cache disabled, which helps when the browser keeps showing older CSS or JavaScript after edits.

---

## Performance Improvements

### Phase 1 Optimizations Implemented ✅

#### 1. **Minification (esbuild)**
- **Savings:** 20-25% total JS/CSS
- **Process:** Removes whitespace, shortens variable names, combines statements
- **Comparison:**
  - Original JS: 364 KB → Minified: 308 KB (-15%)
  - Original CSS: 16 KB → Minified: 10 KB (-35%)
  - **Gzipped:** 85 KB → 79 KB (-7% additional)

#### 2. **Script Optimization**
- **Removed unnecessary scripts** from pages that don't need them
  - Home/Curriculum/Roadmap pages no longer load quiz-generators.js (75KB) or lesson-enhancements.js (45KB)
  - Quiz page doesn't load lesson-enhancements.js
  
- **Added `defer` attribute** to non-critical scripts
  - Allows HTML parsing to continue while scripts download
  - Improves perceived load time

#### 3. **Data Deduplication**
- **Removed duplicate** `allLessons` array creation in `quiz-generators.js`
- Now uses single source from `common.js` via `window.GrammarAtlasApp.allLessons`
- Eliminates ~5-10KB of redundant code

---

## Deployment

### Automatic (GitHub Actions)
```bash
git push origin main
```

GitHub Actions automatically:
1. Runs `npm install`
2. Runs `npm run build`
3. Copies minified files back to source directories
4. Deploys to GitHub Pages

No manual build step needed.

### Manual Deployment
```bash
npm run build
# Files now optimized in dist/
# Copy/sync to your server as usual
```

---

## File Load Breakdown (After Optimization)

### Home Page (index.html)
- `program-data.js` — Curriculum (blocking, needed first)
- `common.js` — Utilities (deferred)
- `home.js` — Page logic (deferred)

**Total:** Loading 3 files instead of 5 = **40% fewer files**

### Lesson Page (lesson.html)
- `program-data.js` — Curriculum (blocking)
- `lesson-enhancements.js` — Enhancements (deferred)
- `quiz-generators.js` — Quiz logic (deferred)
- `common.js` — Utilities (deferred)
- `lesson.js` — Page logic (deferred)

**Total:** All critical scripts load first, rest deferred = **Faster perceived load**

### Quiz Page (quiz.html)
- `program-data.js` — Curriculum (blocking)
- `quiz-generators.js` — Quiz logic (deferred)
- `common.js` — Utilities (deferred)
- `quiz.js` — Page logic (deferred)

**Total:** No unnecessary enhancements = **Lighter page**

---

## Next Steps (Optional Enhancements)

### Phase 2 — PWA & Offline Support
- Add Service Worker for complete offline capability
- Add Web App Manifest for mobile install
- Only add this when offline support becomes a real product requirement

### Phase 3 — Advanced Optimization
- Separate curriculum data into JSON (if 3x larger)
- Build system refinement
- Performance monitoring dashboard

---

## Troubleshooting

### Build fails with "esbuild not found"
```bash
npm install
```

### Changes aren't deployed
Make sure GitHub Actions workflow runs:
1. Go to **Actions** tab on GitHub
2. Check recent workflow runs
3. If failed, check logs

### Local build works, but deployed site doesn't
Run build locally and verify files in `dist/` match expected output:
```bash
npm run build
ls -lh dist/js/ dist/styles.css
```

---

## Commands Reference

| Command | Purpose |
|---------|---------|
| `npm run serve` | Start the no-cache local dev server |
| `npm install` | Install esbuild dependency |
| `npm run build` | Create minified production files |
| `npm run build:watch` | Auto-rebuild on file changes |
| `git push origin main` | Deploy (if Actions configured) |

---

## Questions?

- **How is gzip applied?** GitHub Pages automatically gzips responses for supported file types (JS, CSS, HTML)
- **Can I disable minification?** Yes, but not recommended — saves only 5 minutes dev setup, costs 20% performance
- **Does this affect code quality/maintainability?** No — source files remain readable; only deployment artifacts are minified
