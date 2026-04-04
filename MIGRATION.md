# English Grammar Atlas - Astro Migration Guide

## Migration Status

### ✅ Completed

1. **Astro Project Setup**
   - Created new Astro project at `/Users/sandeepbhardwaj/Work/GitHub/english-playbook-astro`
   - Installed all dependencies
   - Configured astro.config.mjs

2. **Fresh CSS Structure**
   - `global.css` - CSS variables, typography, resets
   - `layout.css` - Grid system, spacing, responsive utilities
   - `components.css` - Buttons, cards, badges, alerts, forms
   - `lessons.css` - Lesson-specific styling, cards, examples

3. **Astro Core Setup**
   - Created `src/content/config.ts` for content collections
   - Set up content collection schema for lessons
   - Created BaseLayout.astro with header, footer, navigation
   - Created LessonLayout.astro for lesson pages
   - Created homepage (index.astro) with hero, features, curriculum preview

4. **Sample Content**
   - Created `src/content/lessons/module-1-foundations/parts-of-speech.md` as template

### 🔄 In Progress

- [ ] Extract all 21 lessons to markdown files
- [ ] Extract quiz data to JSON format
- [ ] Create remaining page routes

### ⏳ To Do

- [ ] Create dynamic lesson route (`lessons/[...slug].astro`)
- [ ] Create curriculum view page
- [ ] Create quiz page component
- [ ] Create roadmap page
- [ ] Extract and import quiz data
- [ ] Set up GitHub Pages deployment
- [ ] Add progress tracking JavaScript
- [ ] Migrate offline functionality

## Directory Structure

```
english-playbook-astro/
├── src/
│   ├── assets/
│   │   └── css/
│   │       ├── global.css          ✅
│   │       ├── layout.css          ✅
│   │       ├── components.css      ✅
│   │       └── lessons.css         ✅
│   ├── components/
│   │   └── (reusable components)
│   ├── content/
│   │   ├── lessons/               (1 sample ✅)
│   │   │   ├── module-1-foundations/
│   │   │   │   ├── parts-of-speech.md           ✅
│   │   │   │   ├── sentence-structure.md        ⏳
│   │   │   │   ├── articles-nouns.md            ⏳
│   │   │   │   └── ...
│   │   │   └── module-{2-6}/...
│   │   └── config.ts              ✅
│   ├── data/
│   │   ├── curriculum.json        ⏳
│   │   └── quiz-data.json         ⏳
│   ├── layouts/
│   │   ├── BaseLayout.astro       ✅
│   │   └── LessonLayout.astro     ✅
│   └── pages/
│       ├── index.astro            ✅
│       ├── curriculum.astro       ⏳
│       ├── roadmap.astro          ⏳
│       ├── quiz.astro             ⏳
│       └── lessons/
│           └── [...slug].astro    ⏳
└── public/
    └── (static assets)
```

## Key Design Decisions

1. **Content Collections** - Using Astro's content collections (src/content/) for lessons instead of API
2. **CSS Variables** - Complete CSS variable system for easy theming and customization
3. **No Framework** - Pure Astro components with vanilla CSS (no React, Vue, etc.)
4. **Static Generation** - All pages generated as static HTML at build time
5. **Content-First** - Markdown files with YAML frontmatter for lesson content

## CSS Architecture

### Global Design Tokens
- **Colors**: Primary, secondary, accent, status colors
- **Typography**: Font families, sizes, weights, line heights
- **Spacing**: Consistent spacing scale
- **Shadows** & **Radius**: For depth and consistency
- **Transitions**: Smooth interactions

### Utility Classes
- Flexbox and grid utilities
- Spacing utilities (margin, padding)
- Responsive utilities (hidden-mobile, hidden-desktop)
- Text utilities

### Component Styles
- Buttons (primary, secondary, outline, sizes)
- Cards with hover states
- Badges with status variants
- Alerts with color coding
- Form elements
- Progress bars
- Breadcrumbs

### Lesson Styling
- Hero sections with gradients
- Content sections with visual hierarchy
- Examples with syntax highlighting
- Common mistakes highlighting
- Quick reference cards
- Story lab sections
- Practice plan styling

## Next Steps

### Phase 1: Content Extraction (High Priority)
1. Create Python script to batch extract all lessons to markdown
2. Convert quiz data to JSON format
3. Generate curriculum.json with navigation data

### Phase 2: Page Routes (High Priority)
1. Create dynamic lesson route with breadcrumbs
2. Create curriculum index page with module cards
3. Create roadmap timeline view
4. Create quiz page with question display

### Phase 3: Interactivity (Medium Priority)
1. Add quiz functionality (load questions, track scores, save progress)
2. Add progress tracking (localStorage integration)
3. Add filtering/search for lessons
4. Add stats dashboard

### Phase 4: Enhancement (Lower Priority)
1. Add offline service worker support
2. Add print-friendly styles
3. Add dark mode option
4. Add lesson bookmarking

## Layout Patterns

### Homepage
- Hero section with CTA buttons
- Feature showcase grid  
- Curriculum preview
- Final CTA section

### Lesson Page
- Hero section with module info
- Sidebar navigation (sticky)
- Main content with structured sections
- Next/Previous navigation
- Related lessons section

### Curriculum Page
- Module overview cards
- Lesson listings within modules
- Progress indicators
- Quick filters

### Quiz Page
- Question display area
- Answer options
- Progress tracking
- Score calculation
- Result summary

## Building & Deployment

### Local Development
```bash
npm run dev   # Start dev server on http://localhost:3000
```

### Building
```bash
npm run build  # Generate static site in dist/
npm run preview # Preview production build locally
```

### GitHub Pages Deployment
Configure with `site` in astro.config.mjs and output: 'static'

##  Notes for Completion

- Total lessons to extract: 21
- Markdown template established and working
- CSS framework fully designed and ready
- Astro configuration complete
- Base layouts and homepage ready
- CSS is modular and easy to customize
- All design decisions documented

The foundation is solid and ready for content extraction and page route creation!
