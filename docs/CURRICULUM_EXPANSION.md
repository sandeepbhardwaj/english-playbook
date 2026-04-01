# Curriculum Expansion Guide

Learn how to add new lessons, modules, and quiz questions to Grammar Atlas using the multi-agent system.

## Overview

The multi-agent system ensures every lesson meets premium quality standards. The workflow is:

**Plan → Write → Quiz → Review → Format → Deploy**

All agents are defined in the `../agents/` folder. Follow `../agents/shared-rules.md` for the complete content standard.

---

## Adding a New Lesson

### Step 1: Use the Planner Agent

**Goal:** Define the lesson scope, prerequisites, and learning objectives.

**Provide:**
- Topic name (e.g., "Present Perfect Continuous")
- Current learner level (beginner, intermediate, advanced)
- Prerequisites (e.g., "Present Perfect understanding")
- Key points to cover
- Common learner confusions for this topic
- Whether a story is recommended
- Any scope boundaries

**Output:** A brief that guides the Lesson Agent.

**Example brief:**
```
Topic: Present Perfect Continuous
Level: Intermediate
Prerequisites: Present Perfect, Present Continuous
Key concepts:
- Duration from past to present
- Contrast with Present Perfect
- Common errors (missing "have been", wrong form)
Common confusions:
- When to use vs Present Perfect simple
- Difference from Present Continuous
Story recommended: Yes, show duration emphasis
Scope: Focus on statement, question, negative forms
```

### Step 2: Use the Lesson Agent

**Goal:** Write the complete lesson following the 11-section structure.

**You provide:**
- The planner brief (from Step 1)
- Expected tone (instructional, conversational)

**The Lesson Agent generates:**
1. **Topic Name** — Clear, learner-friendly title
2. **Intuition** — Why this matters, when it's used
3. **Core Rules** — Precise explanations
4. **Sentence Structures** — Positive, negative, question forms
5. **Detailed Examples** — 12-20+ realistic uses
6. **Story-Based Learning** — Narrative context (required for tenses)
7. **Common Mistakes** — Wrong vs. correct with explanations
8. **Practice Exercises** — Multiple varied types
9. **Quick Revision Summary** — Fast recap
10. **Cheat Sheet** — Quick-reference patterns
11. **Quiz Coverage Notes** — Internal section for the Quiz Agent

**Raw output format:** Clean markdown with all sections.

### Step 3: Use the Quiz Agent

**Goal:** Generate 60-100 test questions from the lesson.

**You provide:**
- The completed lesson (from Step 2)
- The lesson's Quiz Coverage Notes section
- Desired question difficulty distribution

**The Quiz Agent generates:**
- **Basic Level** (20-30 questions): Identification, simple application
- **Intermediate Level** (20-30 questions): Mixed structures, editing, correction
- **Advanced Level** (20-40 questions): Context, nuance, real communication

**Each question includes:**
- Question number and difficulty indicator
- Question text
- 4 options (including correct answer and realistic distractors)
- Correct answer key
- Brief educational explanation

**Output format:** Markdown quiz section ready for integration.

### Step 4: Use the Reviewer Agent

**Goal:** Quality assurance — verify accuracy, completeness, and consistency.

**The Reviewer checks:**
- Grammar accuracy (no errors in explanations)
- Completeness (all 11 sections present)
- Clarity (explanations easy to understand)
- Example quality (realistic, varied, non-repetitive)
- Quiz coverage (60-100 questions with correct split)
- Answers correctness (all answers verified)
- Alignment (lesson and quiz coherent)
- Structure (consistent with other lessons)

**Output:** 
- **PASS** — Content is ready for formatting
- **FAIL** — Required fixes listed by section

**If FAIL:** Return to Lesson Agent or Quiz Agent with specific fixes.

### Step 5: Use the Formatter Agent

**Goal:** Polish content into website-ready markdown.

**The Formatter:**
- Merges lesson and quiz into one final topic file
- Standardizes heading hierarchy
- Removes internal-only sections (like Quiz Coverage Notes)
- Ensures consistent formatting
- Validates that it's ready for publication

**Output:** Final polished markdown file.

### Step 6: Deploy

**Add the lesson to `js/program-data.js`:**

```javascript
{
  id: "present-perfect-continuous",
  title: "Present Perfect Continuous",
  duration: "65 min",
  focus: "Understand duration from past to present.",
  summary: "The present perfect continuous shows actions that started in the past and are still happening now, emphasizing duration.",
  // ... other properties from formatted lesson
}
```

**Test locally:**
```bash
npm run serve
# Navigate to http://127.0.0.1:8000
# Check curriculum page lists new lesson
# Test lesson content loads
# Try quiz functionality
```

**Push to GitHub:**
```bash
git add -A
git commit -m "feat: Add Present Perfect Continuous lesson"
git push origin main
```

---

## Adding a New Module

**A module groups 3-4 related lessons.**

### Module Structure

```javascript
{
  id: "module-id",
  title: "Module N: Topic Family",
  level: "Beginner|Intermediate|Advanced",
  duration: "Week X-Y",
  description: "What learners will understand by end of module.",
  portfolioTask: "Practical assignment to apply the module.",
  lessons: [
    // 3-4 lesson objects
  ]
}
```

### Steps for Adding a Module

1. **Plan module scope**
   - 3-4 related lessons
   - Clear progression (foundational to advanced within module)
   - Identify dependencies

2. **Create lessons first** (follow lesson addition steps above)

3. **Add module object to curriculum** in `js/program-data.js`

4. **Create optional portfolio task**
   - Practical assignment using all module lessons
   - Should be completable in 1-2 hours

5. **Update 12-week roadmap** (if applicable)
   - Map lessons to specific weeks
   - Update `js/program-data.js` roadmap array

6. **Test and deploy**

---

## Content Standards (Critical)

Every lesson MUST follow these standards:

### Intuition Section
- Explains what the grammar does in real communication
- Why it matters and when people use it
- Accessible to learner level, not overly academic

### Examples
- **Realistic context** — from daily life, work, study, messaging
- **Natural English** — conversational, not textbook-like
- **Progressively complex** — simple to complex through examples
- **Varied contexts** — different situations, not repetitive
- **12-20+ examples minimum** — enough to cover usage patterns

```
✓ "I haven't finished my homework yet." (student explaining delay)
✓ "We've been working on this project for three weeks." (workplace)
✗ "The present perfect is used for..." (textbook language)
```

### Common Mistakes
- **Wrong vs. Correct pairs** — show both, then explain why wrong
- **Explain the confusion** — not just the rule
- **Match learner level** — mistakes realistic for that level

```
✗ "I'm living here for five years."
✓ "I've been living here for five years."
Explanation: For plus time duration always needs present perfect 
continuous, not present continuous.
```

### Practice Exercises
- **Multiple types** — fill-in, error correction, transformation, building
- **Varied difficulty** — some easier, some challenging
- **Sufficient volume** — 15-30 practice items minimum
- **Test understanding** — not just pattern matching

### Quiz Questions
- **Strong distractors** — based on real learner mistakes
- **One clear answer** — no ambiguous options
- **Consistent difficulty** — genuine progression across levels

---

## Quality Checklist for Every Lesson

Before submitting for review:

**Content:**
- [ ] All 11 sections present
- [ ] Story included (required for tenses)
- [ ] 12-20+ examples minimum
- [ ] 5+ practice exercise types
- [ ] 60-100 quiz questions (20-30 / 20-30 / 20-40 split)

**Writing Quality:**
- [ ] Intuition clearly explains purpose
- [ ] Rules are precise but accessible
- [ ] Examples are realistic and natural
- [ ] Common mistakes are authentic
- [ ] No repetitive examples
- [ ] No overly academic language

**Grammar & Accuracy:**
- [ ] No grammar errors in content
- [ ] All quiz answers verified correct
- [ ] Explanations are educational
- [ ] Terminology used consistently

**Structure & Consistency:**
- [ ] Headings match standard order
- [ ] Tone matches other lessons
- [ ] Examples follow established pattern
- [ ] Quiz difficulty genuinely increases

---

## Editing Existing Lessons

When improving an existing lesson:

1. **Identify specific issues**
   - Unclear explanation?
   - Repetitive or weak examples?
   - Quiz problems?

2. **Make targeted improvements**
   - Rewrite unclear sections
   - Replace weak examples with better ones
   - Fix quiz issues

3. **Get reviewed again**
   - Reviewer verifies fixes
   - Ensure no new issues introduced

4. **Update and deploy**

---

## Common Content Mistakes to Avoid

### ❌ Overly Academic Language
```
✗ "The present perfect denotes an action commenced in the past..."
✓ "Use the present perfect to show something that started in the past and is still true now."
```

### ❌ Too Many Rules Without Examples
```
✗ List 10 rules with no examples
✓ Introduce rule, then show 3-4 real examples
```

### ❌ Boring or Textbook Sentences
```
✗ "I go to the school." / "She eats the apple."
✓ "I'm going to the coffee shop to meet friends." / "She loves eating sushi."
```

### ❌ Weak Distractors in Quiz
```
✗ Correct answer: "She has been working here for 5 years."
   Wrong option: "She has been working here for 5 hours." (too obvious)
✓ Wrong option: "She is working here for 5 years." (common learner mistake)
```

### ❌ Not Addressing Learner Confusions
```
✗ Present Perfect: no mention of how it differs from Past Simple
✓ Include contrast section: "Why learners confuse Present Perfect with Past Simple"
```

---

## Scaling Tips

### For Large Content Additions

1. **Batch similar topics** — add multiple tense lessons together
2. **Create content templates** — reusable structure for similar topics
3. **Share examples library** — maintain a document of good examples
4. **Build style library** — consistent metaphors, analogies

### For Team Collaboration

1. **Assign modules** — one person per module for consistency
2. **Shared examples** — collect in shared document
3. **Review rotation** — different reviewers for different topics
4. **Version control** — use git branches for development

---

## Resources

- **Main README:** [README.md](../README.md)
- **Agent System:** See `../agents/` folder and `../agents/shared-rules.md`
- **API Reference:** [API.md](API.md)
- **Style Guide:** [STYLE_GUIDE.md](STYLE_GUIDE.md)
- **Code Example:** Check existing lessons in `js/program-data.js`

---

## Questions?

- Review agent documentation in `../agents/` folder
- Check existing lessons for patterns
- Consult `../agents/shared-rules.md` for content standards
- Open an issue on GitHub for clarification

---

**Happy creating!** Your contributions make Grammar Atlas stronger for learners worldwide.
