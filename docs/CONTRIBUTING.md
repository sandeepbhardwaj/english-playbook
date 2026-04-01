# Contributing to Grammar Atlas

Thank you for wanting to improve Grammar Atlas! This document explains how to contribute high-quality lessons, quizzes, and features.

## Reporting Issues

Found a bug or have a suggestion? Open an issue with:
- Clear description of the problem
- Steps to reproduce (if applicable)
- Expected vs. actual behavior
- Browser/device information

## Contributing Content

Lesson and quiz content lives directly in `js/program-data.js`.
When adding or revising content, copy the structure of an existing lesson and keep the curriculum metadata and roadmap aligned.

### Minimum Content Requirements

Every lesson must include:
1. Topic Name
2. Intuition (why it matters)
3. Core Rules
4. Sentence Structures
5. Detailed Examples (12-20+)
6. Story-Based Learning
7. Common Mistakes (wrong vs. correct)
8. Practice Exercises (multiple types)
9. Quiz Sets (60-100 questions)
10. Quick Revision Summary
11. Cheat Sheet

### Quality Checklist

- [ ] Lesson follows the 11-section structure
- [ ] Examples are realistic and conversational
- [ ] Story section is included (required for tenses)
- [ ] Common mistakes with explanations
- [ ] At least 5 varied practice exercise types
- [ ] Quiz has exactly 60-100 questions
- [ ] Quiz split: Basic (20-30), Intermediate (20-30), Advanced (20-40)
- [ ] All quiz answers are correct and explanations are clear
- [ ] No duplicate questions
- [ ] Lesson and quiz pages still render correctly in the browser

## Contributing Code

### Setup

```bash
# Clone the repository
git clone https://github.com/[username]/english-playbook
cd english-playbook

# Run locally
npm run serve
```

### Code Standards

- **JavaScript:** Vanilla ES6+, no frameworks
- **CSS:** Mobile-first responsive design
- **HTML:** Semantic and accessible
- **Runtime:** Framework-free HTML, CSS, and JavaScript
- **Tooling:** npm and esbuild for local serving/build tasks
- **localStorage** for persistent data
- **Comments:** Explain complex logic
- **DRY:** Don't repeat code patterns

### Testing Your Changes

1. Test on desktop browsers (Chrome, Firefox, Safari)
2. Test on mobile devices (responsive)
3. Check browser console for errors
4. Verify localStorage data saves/loads
5. Test quiz scoring and progress tracking

### File Organization

```
js/
├── program-data.js         # Core curriculum data
├── lesson-enhancements.js  # Extended lesson content
├── quiz-generators.js      # Question generation
├── common.js               # Utilities & storage
├── [page].js               # Page-specific logic
```

## Submission Process

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/your-feature`
3. Make your changes and test thoroughly
4. Commit with clear messages: `git commit -m "Add [feature]: description"`
5. Push to your fork: `git push origin feature/your-feature`
6. Create a Pull Request with:
   - Description of changes
   - Reviewer feedback if applicable
   - Testing performed

## Code Review

All submissions will be reviewed for:
- Content accuracy and completeness
- Code quality and standards
- Testing coverage
- Documentation clarity
- Alignment with the project vision

## Questions?

- Check existing issues and discussions
- Review [README.md](README.md) for the current documentation index
- Ask in the PR discussion

Thank you for making Grammar Atlas better!
