(function () {
  window.GrammarAtlasEnhancements = {
    contrastPairs: {
      "parts-of-speech": [
        {
          title: "Meaning Changes the Category",
          use: "We need to book the tickets tonight.",
          avoid: "Book is always only a noun.",
          note: "The same word can change class by function, so always judge it in context.",
        },
        {
          title: "Function Beats Memorization",
          use: "These notebooks belong to our class.",
          avoid: "These is always a pronoun.",
          note: "Before a noun, these works as a determiner rather than an independent pronoun.",
        },
      ],
      "sentence-structure": [
        {
          title: "Clause or Fragment",
          use: "Because the bus was late, we missed the introduction.",
          avoid: "Because the bus was late.",
          note: "A dependent clause needs a main clause unless it is attached to a larger sentence.",
        },
        {
          title: "Join Ideas Properly",
          use: "I revised the essay, and I checked the citations.",
          avoid: "I revised the essay I checked the citations.",
          note: "Two complete clauses need a clear connector or stronger punctuation.",
        },
      ],
      "articles-nouns": [
        {
          title: "First Mention vs Known Reference",
          use: "I saw a movie yesterday. The movie was inspiring.",
          avoid: "I saw the movie yesterday. A movie was inspiring.",
          note: "Move from indefinite to definite once the noun becomes specific in context.",
        },
        {
          title: "Count vs Noncount",
          use: "We need some advice before the interview.",
          avoid: "We need an advice before the interview.",
          note: "Noncount nouns usually do not take a or an.",
        },
      ],
      "present-family": [
        {
          title: "Routine vs Temporary Action",
          use: "She teaches biology, but this semester she is teaching grammar too.",
          avoid: "She is teaching biology every semester.",
          note: "Use the simple for stable routine and the continuous for temporary change or action around now.",
        },
        {
          title: "Stative Verbs",
          use: "I know the answer.",
          avoid: "I am knowing the answer.",
          note: "Many stative verbs usually stay in the simple form in standard English.",
        },
      ],
      "past-and-present-perfect": [
        {
          title: "Finished Time vs Present Relevance",
          use: "I visited Delhi in January.",
          avoid: "I have visited Delhi in January.",
          note: "Finished time expressions push you toward the past simple.",
        },
        {
          title: "Result That Still Matters",
          use: "She has lost her notebook, so she cannot revise tonight.",
          avoid: "She lost her notebook, so she cannot revise tonight.",
          note: "Use the present perfect when the present result is the real point.",
        },
      ],
      "future-perfect-modals": [
        {
          title: "Plan, Decision, or Arrangement",
          use: "Look at those clouds. It is going to rain.",
          avoid: "Look at those clouds. It will maybe rain.",
          note: "Evidence-based prediction often uses be going to, while will is better for instant decisions or neutral predictions.",
        },
        {
          title: "Prohibition vs No Necessity",
          use: "You must not park here, but you do not have to arrive early.",
          avoid: "You must not arrive early if it is optional.",
          note: "Must not means prohibited; do not have to means unnecessary.",
        },
      ],
      "subject-verb-agreement": [
        {
          title: "Find the Head Noun",
          use: "The list of topics is on the table.",
          avoid: "The list of topics are on the table.",
          note: "Ignore interrupting phrases and match the verb to the real subject head.",
        },
        {
          title: "Formal Singular Pronouns",
          use: "Neither of the answers seems complete.",
          avoid: "Neither of the answers seem complete.",
          note: "In standard formal grammar, each, everyone, and neither are usually singular.",
        },
      ],
      "pronouns-questions-negatives": [
        {
          title: "Use the Auxiliary",
          use: "Why did you leave early?",
          avoid: "Why you left early?",
          note: "Past simple questions need did plus the base verb.",
        },
        {
          title: "Make Reference Clear",
          use: "When Sara called Mina, Sara sounded worried.",
          avoid: "When Sara called Mina, she sounded worried.",
          note: "If more than one noun could match the pronoun, rewrite for clarity.",
        },
      ],
      "prepositions-modifiers": [
        {
          title: "Learn the Whole Pattern",
          use: "She is interested in linguistics and responsible for the report.",
          avoid: "She is interested on linguistics and responsible of the report.",
          note: "Prepositions often belong to phrase patterns, not to isolated word-by-word translation.",
        },
        {
          title: "Keep the Modifier Logical",
          use: "Walking through the hallway, I noticed the posters.",
          avoid: "Walking through the hallway, the posters caught my attention.",
          note: "The subject after the comma should be the one doing the action in the modifier.",
        },
      ],
      "clauses-and-relatives": [
        {
          title: "Restrictive vs Extra Information",
          use: "Students who revise regularly improve faster.",
          avoid: "Students, who revise regularly, improve faster.",
          note: "If the clause identifies which noun you mean, do not use commas.",
        },
        {
          title: "No Extra Pronoun Inside the Clause",
          use: "The book that you recommended is excellent.",
          avoid: "The book that you recommended it is excellent.",
          note: "A relative clause already contains the noun relationship, so do not repeat the object.",
        },
      ],
      conditionals: [
        {
          title: "First Conditional Pattern",
          use: "If it rains tomorrow, we will stay inside.",
          avoid: "If it will rain tomorrow, we will stay inside.",
          note: "Standard first conditionals use the present in the if-clause and will in the result clause.",
        },
        {
          title: "Hypothetical Distance",
          use: "If I were you, I would ask for feedback.",
          avoid: "If I am you, I would ask for feedback.",
          note: "Second conditionals create unreal present or future meaning through backshifted forms.",
        },
      ],
      "reported-speech": [
        {
          title: "Question Meaning, Statement Order",
          use: "He asked where the station was.",
          avoid: "He asked where was the station.",
          note: "Reported questions keep the question meaning but switch to statement word order.",
        },
        {
          title: "Choose the Right Reporting Pattern",
          use: "The teacher told us to sit down. She suggested reviewing the introduction.",
          avoid: "The teacher said us to sit down. She suggested us to review the introduction.",
          note: "Tell normally needs an object; suggest does not usually take object plus infinitive.",
        },
      ],
      "punctuation-clarity": [
        {
          title: "Fix the Comma Splice",
          use: "The lesson was difficult, so we asked extra questions.",
          avoid: "The lesson was difficult, we asked extra questions.",
          note: "Two independent clauses need coordination, stronger punctuation, or restructuring.",
        },
        {
          title: "Plural vs Possession",
          use: "My sister's friend is here.",
          avoid: "My sisters friend is here.",
          note: "Use apostrophes for possession, not as a general plural marker.",
        },
      ],
      "parallelism-comparison": [
        {
          title: "Keep the Form Balanced",
          use: "He likes reading, swimming, and cycling.",
          avoid: "He likes reading, to swim, and cycling.",
          note: "Items in a list or pair should match grammatically.",
        },
        {
          title: "Compare Like with Like",
          use: "Riya's essays are stronger than the class's essays.",
          avoid: "Riya's essays are stronger than the class.",
          note: "Make sure both sides of the comparison belong to the same category.",
        },
      ],
      "concision-formal-tone": [
        {
          title: "Prefer a Strong Verb",
          use: "We decided to postpone the event.",
          avoid: "We made a decision to postpone the event.",
          note: "A direct verb is often shorter, cleaner, and more natural.",
        },
        {
          title: "Cut Filler and Repetition",
          use: "The report is important.",
          avoid: "Basically, the report is actually really important.",
          note: "Formal tone usually improves when you remove stacked fillers and vague intensifiers.",
        },
      ],
      "editing-drills": [
        {
          title: "Correct the Whole Pattern",
          use: "She doesn't know the answer.",
          avoid: "She doesn't knows the answer.",
          note: "Once the auxiliary carries tense and agreement, the main verb returns to base form.",
        },
        {
          title: "Edit by Category",
          use: "The students were revising in the library.",
          avoid: "The students was revising in library.",
          note: "One sentence may contain more than one error, so scan for agreement, articles, and wording together.",
        },
      ],
      "transformations-and-cloze": [
        {
          title: "Keep the Meaning Constant",
          use: "It is not necessary to arrive early. -> You do not have to arrive early.",
          avoid: "It is not necessary to arrive early. -> You must not arrive early.",
          note: "Transformation tasks test equivalent meaning, not just similar grammar.",
        },
        {
          title: "Use Grammar Clues Around the Gap",
          use: "Neither of the answers is correct.",
          avoid: "Neither of the answers are correct.",
          note: "Small function words and agreement clues often matter more than vocabulary in cloze work.",
        },
      ],
      "final-review": [
        {
          title: "Review Actively, Not Passively",
          use: "Mix recall, correction, and writing practice in one week.",
          avoid: "Reread the rules only and hope they stay.",
          note: "Retention improves when you combine recognition, editing, and production.",
        },
        {
          title: "Prioritize Your Weak Spots",
          use: "Review articles and verb forms more often if those are your recurring mistakes.",
          avoid: "Spend equal time on every topic even if some are already strong.",
          note: "A good review system is selective, not just repetitive.",
        },
      ],
    },
    contextBlocks: {
      "parts-of-speech": {
        title: "Applied Context: Club Poster Review",
        passage:
          "Your school club is designing a poster for a weekend reading event. One student labels key words in the draft so the team can understand how the sentence works: creative describes workshop, quickly modifies reply, and after introduces the time phrase.",
        prompts: [
          "Which words in the passage act as adjective, adverb, and preposition?",
          "Find one word whose category depends on the job it does in the sentence.",
        ],
      },
      "sentence-structure": {
        title: "Applied Context: Repair the Update",
        passage:
          "A student writes to the class group: Because the projector failed. We changed rooms, the session started late. The message contains both a fragment and a run-on, so it needs repair before it is clear.",
        prompts: [
          "Rewrite the fragment as a complete sentence.",
          "Fix the run-on in a way that keeps the timeline clear.",
        ],
      },
      "articles-nouns": {
        title: "Applied Context: Room Description",
        passage:
          "Imagine you are describing a study room to a new student. There is a large desk near the window, some equipment for recording practice, and advice pinned to the wall about revision habits.",
        prompts: [
          "Explain why desk takes an article but equipment and advice do not use a or an.",
          "Rewrite the passage by adding one more accurate noun phrase with the correct article choice.",
        ],
      },
      "subject-verb-agreement": {
        title: "Applied Context: Survey Summary",
        passage:
          "A report says: The list of common errors are on the next page. Each of the students have improved since last month. The information is useful, but the agreement needs attention.",
        prompts: [
          "Correct the verbs and explain which noun actually controls each one.",
          "Identify the phrase that might distract a learner from the real subject head.",
        ],
      },
      "pronouns-questions-negatives": {
        title: "Applied Context: Phone Follow-Up",
        passage:
          "After a missed call, a learner writes: Why you did not answer? When Riya called Meera, she sounded upset. The message is understandable, but both sentences need more accurate grammar.",
        prompts: [
          "Rewrite the question in standard English.",
          "Resolve the ambiguous pronoun by making the reference explicit.",
        ],
      },
      "prepositions-modifiers": {
        title: "Applied Context: Internship Email",
        passage:
          "A student writes: I am interested on content design and responsible of the weekly summary. Walking into the office, the welcome poster made me feel calm. The ideas are useful, but the phrasing needs revision.",
        prompts: [
          "Correct the preposition patterns so they sound natural.",
          "Repair the dangling modifier so the logical subject is clear.",
        ],
      },
      "clauses-and-relatives": {
        title: "Applied Context: Student Profile",
        passage:
          "You are combining notes about a classmate: Asha leads the debate team. She won the interschool round last month. Her speech was persuasive, although the topic was difficult. The goal is to create one smooth profile paragraph.",
        prompts: [
          "Combine the first two ideas with a relative clause.",
          "Keep the contrast in the final sentence without making the structure awkward.",
        ],
      },
      conditionals: {
        title: "Applied Context: Advice and Regret",
        passage:
          "A learner says, If I will start earlier, I would feel calmer. Later she adds, I wish I study harder last week. The meanings are clear, but the forms need adjustment.",
        prompts: [
          "Rewrite the future possibility sentence as a correct first conditional.",
          "Rewrite the regret sentence so it expresses an unreal past situation naturally.",
        ],
      },
      "reported-speech": {
        title: "Applied Context: Meeting Notes",
        passage:
          "After a workshop, a student reports: The tutor asked where were we struggling. She told that we should revise articles first. The notes capture the message, but the reporting grammar is off.",
        prompts: [
          "Correct the reported question so the word order is standard.",
          "Revise the second sentence using the right reporting verb pattern.",
        ],
      },
      "punctuation-clarity": {
        title: "Applied Context: Event Announcement",
        passage:
          "A draft announcement reads: After the workshop we will share notes, the tutor's checklist is attached. The organizers' aim is clarity, so punctuation needs to guide the reader properly.",
        prompts: [
          "Add punctuation that clearly separates the introductory phrase and the two clauses.",
          "Explain why the apostrophe is used in tutor's and organizers'.",
        ],
      },
      "parallelism-comparison": {
        title: "Applied Context: Course Review",
        passage:
          "A learner writes: The course helped me understanding articles, to edit clauses, and clearer comparison. My final reflection is stronger than the class. The message has good ideas but weak balance.",
        prompts: [
          "Rewrite the list so the three items match grammatically.",
          "Repair the comparison so like is compared with like.",
        ],
      },
      "concision-formal-tone": {
        title: "Applied Context: Report Draft",
        passage:
          "A report says: Basically, there are many students who are in need of more support. The team made a decision to revise the schedule. The writing is understandable, but it can be sharper and more professional.",
        prompts: [
          "Make the first sentence more concise and formal.",
          "Replace the weak verb-plus-noun phrase in the second sentence.",
        ],
      },
      "editing-drills": {
        title: "Applied Context: Mixed Error Scan",
        passage:
          "In a practice paragraph, a learner writes: She don't knows the rule, and the students was waiting outside library. They have arrived yesterday, so the teacher asked why they left late. This short paragraph is ideal for category-by-category editing.",
        prompts: [
          "Correct the paragraph by checking verbs first, then noun phrases.",
          "Name the rule behind at least two of your corrections.",
        ],
      },
      "transformations-and-cloze": {
        title: "Applied Context: Exam Transfer",
        passage:
          "A practice book asks you to keep meaning constant while changing the grammar. One item says, It is not necessary to arrive early. Another asks you to complete a gap: Neither of the options ___ available. Both tasks reward careful attention to structure.",
        prompts: [
          "Transform the first sentence without changing the meaning.",
          "Explain which grammar clue helps you choose the correct verb in the gap.",
        ],
      },
      "final-review": {
        title: "Applied Context: Build a Review Cycle",
        passage:
          "A learner wants to improve fast, so she rereads every lesson once and then moves on. Her quiz history, however, shows repeated errors with articles, agreement, and reported speech. The smarter move is to build a review plan around those recurring weaknesses.",
        prompts: [
          "Choose two high-priority review targets from the passage and justify them.",
          "Design a short weekly cycle that mixes recognition, correction, and production.",
        ],
      },
    },
    moduleRubrics: {
      foundations: [
        "Use the target grammar accurately in short original sentences.",
        "Label or explain forms clearly instead of guessing the rule name.",
        "Show that you can self-correct basic sentence-level mistakes.",
      ],
      tenses: [
        "Make time meaning clear, not just the verb form.",
        "Use context clues such as schedules, duration, result, or evidence.",
        "Keep shifts between present, past, and future logically consistent.",
      ],
      accuracy: [
        "Edit for one target at a time before combining categories.",
        "Explain why the corrected form is more accurate.",
        "Avoid ambiguity, missing auxiliaries, and broken phrase patterns.",
      ],
      "complex-grammar": [
        "Link ideas without losing clarity or control.",
        "Use clause grammar that matches the intended meaning relationship.",
        "Keep pronouns, reporting patterns, and punctuation aligned with the structure.",
      ],
      style: [
        "Improve readability as well as grammar.",
        "Balance lists and comparisons in parallel form.",
        "Choose concise, audience-appropriate language.",
      ],
      mastery: [
        "Preserve meaning while changing the structure.",
        "Track recurring errors and respond with a focused study plan.",
        "Combine recognition, editing, and production in your review routine.",
      ],
    },
    startHere: [
      {
        title: "Starting From Foundations",
        path: "Start with Module 1, then move to Module 2.",
        detail:
          "Best if you want a clean base in sentence structure, articles, and tense control before anything more advanced.",
        action: "Begin with Parts of Speech and Sentence Structure.",
      },
      {
        title: "Need Accuracy Fast",
        path: "Jump to Modules 3 and 4 after a quick Module 1 review.",
        detail:
          "Best if your main goal is fixing agreement, questions, pronouns, clauses, and reported speech in writing or speaking.",
        action: "Start with Subject-Verb Agreement, then Pronouns, Questions, and Negatives.",
      },
      {
        title: "Writing And Editing Focus",
        path: "Work through Modules 5 and 6 after checking weak grammar areas.",
        detail:
          "Best if your grammar is mostly stable and you want clearer punctuation, stronger style, and better self-editing.",
        action: "Start with Punctuation for Clarity, then Concision and Formal Tone.",
      },
    ],
    roadmapGuide: {
      title: "How To Use This Roadmap",
      points: [
        "Treat each week as a focus area, not a strict deadline.",
        "Do the lesson first, then the quiz, then a short writing or editing task.",
        "Repeat weak quizzes after a gap instead of retaking them immediately.",
        "Keep a small error log so the roadmap stays tied to your real mistakes.",
      ],
    },
  };
})();
