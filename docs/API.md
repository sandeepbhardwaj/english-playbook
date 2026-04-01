# Grammar Atlas API Documentation

The `GrammarAtlasApp` object provides a comprehensive API for managing the learning platform. All functions are accessed through `window.GrammarAtlasApp`.

## Core Data Access

### `curriculum`
Returns the full curriculum structure with all modules and lessons.

```javascript
const allModules = GrammarAtlasApp.curriculum;
```

### `allLessons`
Flattened array of all lessons across all modules for easy iteration.

```javascript
const lessons = GrammarAtlasApp.allLessons;
GrammarAtlasApp.allLessons.forEach(lesson => {
  console.log(lesson.title, lesson.moduleId);
});
```

### `roadmap`
14-week study plan structure.

```javascript
const weeks = GrammarAtlasApp.roadmap;
```

---

## Navigation

### `getModule(moduleId)`
Get a specific module by ID.

```javascript
const module = GrammarAtlasApp.getModule('tenses');
console.log(module.title); // "Module 2: Tenses and Time"
```

### `getLesson(lessonId)`
Get a specific lesson by ID.

```javascript
const lesson = GrammarAtlasApp.getLesson('present-family');
console.log(lesson.title); // "Present Simple and Present Continuous"
```

### `nextLesson(lessonId)` | `previousLesson(lessonId)`
Navigate through lessons sequentially.

```javascript
const next = GrammarAtlasApp.nextLesson('present-family');
const prev = GrammarAtlasApp.previousLesson('present-family');
```

### `getLessonIndex(lessonId)`
Get the position of a lesson in the full lesson list.

```javascript
const index = GrammarAtlasApp.getLessonIndex('present-family');
console.log(index); // e.g., 3 (4th lesson overall)
```

---

## Lesson Completion Tracking

### `getCompletedLessons()`
Returns a Set of completed lesson IDs.

```javascript
const completed = GrammarAtlasApp.getCompletedLessons();
console.log(completed.has('present-family')); // true/false
```

### `toggleLessonComplete(lessonId)`
Mark a lesson as complete or uncomplete.

```javascript
GrammarAtlasApp.toggleLessonComplete('present-family');
```

---

## Quiz Score Management

### `getQuizScores()`
Get all saved quiz scores as an object.

```javascript
const allScores = GrammarAtlasApp.getQuizScores();
console.log(allScores);
// Output: { 'present-family': { percent: 85, correct: 51, total: 60 }, ... }
```

### `getQuizScore(lessonId, mode = 'standard')`
Get the score for a specific lesson quiz.

```javascript
const score = GrammarAtlasApp.getQuizScore('present-family');
if (score) {
  console.log(score.percent); // e.g., 85
  console.log(score.correct); // e.g., 51
  console.log(score.total);   // e.g., 60
}
```

### `saveQuizScore(lessonId, payload, mode = 'standard')`
Save a quiz score. The payload should have `percent`, `correct`, and `total`.

```javascript
GrammarAtlasApp.saveQuizScore('present-family', {
  percent: 85,
  correct: 51,
  total: 60
});
```

---

## Study Streak Tracking (NEW)

Track consecutive days of learning activity.

### `updateStudyStreak()`
Call whenever a user completes a lesson or quiz. Updates automatically based on date.

```javascript
GrammarAtlasApp.updateStudyStreak();
```

### `getStudyStreak()`
Get the current streak count (days).

```javascript
const streak = GrammarAtlasApp.getStudyStreak();
console.log(`Current streak: ${streak} days`);
```

### `resetStudyStreak()`
Clear the study streak.

```javascript
GrammarAtlasApp.resetStudyStreak();
```

---

## Bookmarks/Favorites (NEW)

Bookmark lessons for quick access.

### `getBookmarks()`
Get all bookmarked lesson IDs as a Set.

```javascript
const bookmarks = GrammarAtlasApp.getBookmarks();
console.log(bookmarks.has('present-family')); // true/false
```

### `toggleBookmark(lessonId)`
Add or remove a bookmark. Returns the new bookmark state.

```javascript
const isNowBookmarked = GrammarAtlasApp.toggleBookmark('present-family');
console.log(isNowBookmarked); // true or false
```

### `isBookmarked(lessonId)`
Check if a lesson is bookmarked.

```javascript
if (GrammarAtlasApp.isBookmarked('present-family')) {
  console.log('This lesson is bookmarked');
}
```

---

## Progress Export/Import (NEW)

Backup and restore learning progress.

### `exportProgress()`
Export all progress to JSON string (suitable for download or backup).

```javascript
const json = GrammarAtlasApp.exportProgress();
console.log(json);
// Includes: completed lessons, quiz scores, bookmarks, study streak
```

### `importProgress(jsonData)`
Import previously exported progress. Returns `true` if successful.

```javascript
const success = GrammarAtlasApp.importProgress(jsonString);
if (success) {
  console.log('Progress restored');
} else {
  console.log('Import failed');
}
```

**Example workflow:**
```javascript
// Export progress to download
const backup = GrammarAtlasApp.exportProgress();
const blob = new Blob([backup], { type: 'application/json' });
const url = URL.createObjectURL(blob);
// User downloads file...

// Later, import from file
const fileContent = await file.text();
GrammarAtlasApp.importProgress(fileContent);
```

---

## Analytics (NEW)

### `getQuizAnalytics()`
Get comprehensive quiz performance statistics.

```javascript
const analytics = GrammarAtlasApp.getQuizAnalytics();
if (analytics) {
  console.log(analytics.totalAttempts);  // e.g., 5
  console.log(analytics.averageScore);   // e.g., 78
  console.log(analytics.highestScore);   // e.g., 95
  console.log(analytics.lowestScore);    // e.g., 65
  console.log(analytics.passRate);       // e.g., 100 (% of scores >= 70)
}
```

### `getLessonProgress()`
Get overall lesson completion statistics.

```javascript
const progress = GrammarAtlasApp.getLessonProgress();
console.log(progress.completed); // e.g., 5 lessons
console.log(progress.total);     // e.g., 21 lessons
console.log(progress.percent);   // e.g., 28%
```

---

## Utilities

### `getQueryParam(name)`
Get URL query parameter value.

```javascript
const lessonId = GrammarAtlasApp.getQueryParam('lesson');
// From URL: ?lesson=present-family
// Returns: 'present-family'
```

### `formatPercent(value)`
Format a number as a percentage string.

```javascript
const formatted = GrammarAtlasApp.formatPercent(84.6);
console.log(formatted); // "85%"
```

### `escapeHtml(text)`
Safely escape HTML special characters.

```javascript
const safe = GrammarAtlasApp.escapeHtml('<script>alert("xss")</script>');
// Returns: escaped version safe for DOM insertion
```

### `resetProgress()`
Clear all learning progress (all lessons, quizzes, bookmarks).

```javascript
const success = GrammarAtlasApp.resetProgress();
if (success) {
  window.location.reload();
}
```

---

## Common Usage Examples

### Display a learner dashboard:
```javascript
const progress = GrammarAtlasApp.getLessonProgress();
const analytics = GrammarAtlasApp.getQuizAnalytics();
const streak = GrammarAtlasApp.getStudyStreak();

console.log(`Lessons: ${progress.completed}/${progress.total}`);
console.log(`Quiz Average: ${analytics?.averageScore || 'N/A'}%`);
console.log(`Study Streak: ${streak} days`);
```

### Build a custom lesson list with bookmarks:
```javascript
GrammarAtlasApp.allLessons.forEach(lesson => {
  const isBookmarked = GrammarAtlasApp.isBookmarked(lesson.id);
  const isComplete = GrammarAtlasApp.getCompletedLessons().has(lesson.id);
  
  console.log(`${isBookmarked ? '★' : '☆'} ${lesson.title} ${isComplete ? '✓' : ''}`);
});
```

### Auto-track study activity:
```javascript
// Call after completing a lesson or quiz
document.addEventListener('lessonComplete', () => {
  GrammarAtlasApp.updateStudyStreak();
  GrammarAtlasApp.toggleLessonComplete(lessonId);
});
```

---

## Storage Keys (Advanced)

Don't access directly unless necessary:

- `grammar-atlas-lessons-v2` → Array of completed lesson IDs
- `grammar-atlas-quizzes-v2` → Object of quiz scores
- `grammar-atlas-bookmarks` → Array of bookmarked lesson IDs
- `grammar-atlas-streak` → Object with streak count and last date

All storage uses browser `localStorage` and is browser-specific.
