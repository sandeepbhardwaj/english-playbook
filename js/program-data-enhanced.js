/**
 * ENHANCED CURRICULUM DATA FOR GRAMMAR ATLAS
 * 
 * This is an enhanced version with:
 * - 12-20+ examples per lesson
 * - Story-based learning for ALL lessons
 * - 5+ practice exercise types
 * - Expanded common mistakes
 * - Quick Revision Summary
 * - Cheat Sheets
 * - Quiz Coverage Notes
 * 
 * Replace js/program-data.js with this file after verification
 */

(function () {
  const curriculum = [
    {
      id: "foundations",
      title: "Module 1: Foundations of Grammar",
      level: "Beginner",
      duration: "Week 1-2",
      description:
        "Build a clean base in word classes, sentence architecture, and noun phrases before moving into more advanced control.",
      portfolioTask:
        "Write a 200-word self-introduction and label nouns, verbs, articles, adjectives, and sentence types. Identify at least 3 different sentence structures.",
      lessons: [
        {
          id: "parts-of-speech",
          title: "Parts of Speech",
          duration: "50 min",
          focus: "Identify the job each word does inside a sentence.",
          summary:
            "English grammar becomes easier when you can tell whether a word is acting as a noun, verb, adjective, adverb, pronoun, preposition, conjunction, or determiner. Instead of memorizing labels in isolation, connect each label to its job in a real sentence.",
          objectives: [
            "Recognize the major word classes in authentic sentences.",
            "Separate form from function when a word changes category by use.",
            "Explain why the same word can behave differently across contexts.",
          ],
          rules: [
            "A noun names a person, place, thing, or idea, while a verb shows action or state.",
            "Adjectives describe nouns; adverbs usually modify verbs, adjectives, or other adverbs.",
            "Determiners such as the, a, this, and many signal which noun you mean.",
            "Prepositions show relationships between nouns and other words (in, on, at, between, before, after).",
            "Pronouns replace nouns to avoid repetition (he, she, it, they, who, which).",
            "Conjunctions connect words or clauses (and, but, because, although, while).",
          ],
          examples: [
            { sentence: "The curious student quickly opened the grammar book.", note: "student(N), curious(Adj), quickly(Adv), opened(V), the(Det)" },
            { sentence: "She carefully explained the importance of practice.", note: "She(Pron), carefully(Adv), explained(V), importance(N)" },
            { sentence: "Although it was raining, we went hiking near the mountain.", note: "Although(Conj), raining(VForm), near(Prep), mountain(N)" },
            { sentence: "My friend Sam plays guitar and writes songs.", note: "My(Det), friend/Sam(N), plays/writes(V), and(Conj), songs(N)" },
            { sentence: "The presentation was clear, but the examples were confusing.", note: "clear/confusing(Adj), was(V), but(Conj)" },
            { sentence: "The letter arrived yesterday, and I read it immediately.", note: "letter(N), arrived(V), yesterday(Adv), I/it(Pron), immediately(Adv)" },
            { sentence: "These helpful tips will improve your vocabulary quickly.", note: "These(Det), helpful(Adj), tips(N), improve(V), your(Det), quickly(Adv)" },
            { sentence: "Between you and me, that new policy seems rather unfair.", note: "Between(Prep), that(Det), new(Adj), seems(V), rather(Adv), unfair(Adj)" },
            { sentence: "Running daily strengthens both mind and body.", note: "Running(VForm/N), daily(Adv), strengthens(V), mind/body(N)" },
            { sentence: "The students who studied hard performed exceptionally well.", note: "students(N), who(Pron), studied(V), hard/well(Adv), exceptionally(Adv)" },
            { sentence: "Because the weather was terrible, we postponed the event until next week.", note: "Because(Conj), weather(N), terrible(Adj), postponed(V), next(Adj/Det)" },
            { sentence: "She explained everything clearly, yet some people still didn't understand.", note: "explained(V), everything(Pron), clearly(Adv), yet(Conj), some(Det), didn't(V)" },
            { sentence: "Their research demonstrates that frequent communication improves relationships significantly.", note: "Their(Det), research(N), demonstrates(V), frequent(Adj), significantly(Adv)" },
            { sentence: "The committee members, who were very experienced, made the right decision.", note: "committee/members(N), who(Pron), very(Adv), experienced(Adj), decision(N)" },
          ],
          pitfalls: [
            { wrong: "I have a friendly meeting tomorrow.", right: "I have a friendly meeting tomorrow.", note: "Friendly is an adjective here (not -ly adverb)." },
            { wrong: "He ran quick to the store.", right: "He ran quickly to the store.", note: "Adverbs modify verbs; use -ly form quickly." },
            { wrong: "The news is exciting. She is exciting.", right: "The news is exciting. She is excited.", note: "-ing for the thing's quality; -ed for the person's feeling." },
            { wrong: "Book me a table at restaurant.", right: "Book me a table at the restaurant.", note: "The (specific restaurant) is usually needed." },
            { wrong: "Between you and I, it's hard.", right: "Between you and me, it's hard.", note: "Use object pronoun me after prepositions like between." },
            { wrong: "She good at math and science.", right: "She is good at math and science.", note: "Adjectives need a linking verb (is) to complete the thought." },
          ],
          practicePlan: [
            "Exercise 1 - Labeling: Read a paragraph and mark each word with itspart of speech.",
            "Exercise 2 - Identification: Find the target word class in e sentence: 'Find all the adverbs.'",
            "Exercise 3 - Transformation: Transform words to different classes (run→runner→running; quick→quickly).",
            "Exercise 4 - Pairing: Create 10 pairs showing the same word as two different parts of speech.",
            "Exercise 5 - Writing: Write 5 sentences about a daily activity, then label word classes.",
          ],
          revisionSummary:
            "Eight major word classes build English: nouns (people/places/things), verbs (actions/states), adjectives (describe nouns), adverbs (modify verbs/adjectives), pronouns (replace nouns), determiners (signal which), prepositions (relationships), conjunctions (connect ideas). Same word can change class by use.",
          cheatSheet: [
            "✓ NOUN: person, place, thing, idea → book, teacher, happiness",
            "✓ VERB: action or state → run, is, seem",
            "✓ ADJECTIVE: describes noun → beautiful, tall, boring",
            "✓ ADVERB: modifies verb/adjective/adverb → quickly, very, finally",
            "✓ PRONOUN: replaces noun → he, she, they, who, what",
            "✓ DETERMINER: signals which noun → the, a, this, some, many",
            "✓ PREPOSITION: shows relationship → in, on, at, between, before",
            "✓ CONJUNCTION: connects words/clauses → and, but, because, although",
          ],
          story: {
            title: "Story Lab: A Day at the Farmer's Market",
            overview: "Watch how eight parts of speech work together in a real scene.",
            passages: [
              "Every Saturday morning, Maya visits the busy farmer's market near downtown. She walks quickly between the colorful stalls, looking for fresh vegetables and ripe fruit.",
              "The vendors are quite friendly. They eagerly show their products and happily answer questions. 'These tomatoes are delicious and very fresh,' says one vendor proudly.",
              "Maya carefully selects several items: beautiful peppers, organic spinach, fragrant herbs. She stands patiently at the payment table, where multiple customers wait together.",
              "Because it is a beautiful day, many people are shopping happily. Some chat while they walk; others take photos of the magnificent displays.",
            ],
            analysis: [
              "Market, Saturday, Maya = nouns (people, places, times)",
              "Visits, walks, looking, shows, answer, select, stands = verbs (action words)",
              "Busy, colorful, fresh, ripe = adjectives describing nouns",
              "Quickly, eagerly, happily, proudly, carefully, patiently = adverbs showing HOW actions happen",
              "She, one, their = pronouns replacing longer noun phrases",
              "The, every, several, multiple = determiners signaling which nouns",
              "Near, between, at, while = prepositions showing relationships/time",
              "And, because, while = conjunctions connecting ideas and clauses",
            ],
          },
          quizCoverageNotes:
            "Test identification in context, class transformations, why form changes, adverb vs adjective distinction, pronoun reference. Include cases where words disguise their class (love as noun vs verb; fast as adjective vs adverb).",
        },
        {
          id: "sentence-structure",
          title: "Sentence Structure",
          duration: "55 min",
          focus: "Build complete sentences with subjects, verbs, and clear complements.",
          summary:
            "A complete sentence expresses a full thought. Most need a subject and finite verb, plus possibly object, complement, or adverbial. Good sentence patterns help you avoid fragments, run-ons, and awkward structures.",
          objectives: [
            "Distinguish complete clauses from fragments.",
            "Recognize core sentence patterns in everyday English.",
            "Repair run-ons with punctuation and conjunctions.",
          ],
          rules: [
            "A clause becomes a sentence only with both subject and finite verb that express a complete thought.",
            "Core patterns: subject-verb (S-V), subject-verb-object (S-V-O), subject-linking verb-complement (S-LV-C).",
            "Dependent clauses need attachment to a main clause; compound sentences join two independent clauses with coordinators or semicolons.",
            "Fragments lack subject, verb, or complete thought. Run-ons join independent clauses without proper punctuation.",
          ],
          examples: [
            { sentence: "The meeting ended early.", note: "Complete S-V pattern." },
            { sentence: "Because the bus was late, we missed the introduction.", note: "Dependent clause + independent clause." },
            { sentence: "Alicia wrote the report, and her supervisor approved it.", note: "Two independent clauses joined by and (coordinator)." },
            { sentence: "The student who submitted the essay won first place.", note: "Independent clause with embedded relative clause." },
            { sentence: "After the conference ended, the team returned to their offices.", note: "Dependent clause (time) + independent clause." },
            { sentence: "She is a talented musician and a dedicated teacher.", note: "S-LV-C with compound complement." },
            { sentence: "The report was comprehensive, but some sections needed clarification.", note: "Two independent clauses showing contrast with but." },
            { sentence: "While she studied, her brother played video games.", note: "Concurrent actions with dependent and independent clauses." },
            { sentence: "He left town because he found a new job.", note: "Independent + dependent clause (reason)." },
            { sentence: "The design is innovative; the execution is flawless.", note: "Two independent clauses joined by semicolon." },
            { sentence: "To succeed, you must practice regularly and stay motivated.", note: "Infinitive phrase + compound verbs in independent clause." },
            { sentence: "The students who studied consistently performed better than those who procrastinated.", note: "Relative clauses within comparative structure." },
          ],
          pitfalls: [
            { wrong: "Because the bus was late.", right: "Because the bus was late, we missed the introduction.", note: "Because-clause alone is a fragment." },
            { wrong: "The meeting ended early, the team dispersed quickly.", right: "The meeting ended early, and the team dispersed quickly.", note: "Two independent clauses need and/but/or plus comma (comma splice error)." },
            { wrong: "She likes reading books, and playing chess, and watching movies.", right: "She likes reading books, playing chess, and watching movies.", note: "Don't repeat the verb in parallel structures." },
            { wrong: "If you study hard you will succeed.", right: "If you study hard, you will succeed.", note: "Comma after introductory dependent clause." },
            { wrong: "The student who completed the assignment earliest. Won the prize.", right: "The student who completed the assignment earliest won the prize.", note: "Don't fragment relative clauses." },
          ],
          practicePlan: [
            "Exercise 1 - Fragment ID: Mark which are complete vs fragment sentences.",
            "Exercise 2 - Repair Fragments: Add independent clause to dependent clause fragments.",
            "Exercise 3 - Combining: Join simple sentences into compound/complex sentences.",
            "Exercise 4 - Analysis: Identify which clauses are independent vs dependent.",
            "Exercise 5 - Editing: Fix run-ons and comma splices in a paragraph.",
          ],
          revisionSummary:
            "Complete sentence = subject + finite verb. Fragments lack one. Compound = independent + independent (with and/but/or/;). Complex = dependent + independent. Use commas after introductory dependent clauses and before coordinators joining independent clauses.",
          cheatSheet: [
            "✓ COMPLETE SENTENCE: subject + finite verb (She ran.)",
            "✓ FRAGMENT: missing subject, verb, or thought (Running down the street.)",
            "✓ RUN-ON: IC + IC with no connector (She ran she fell.)",
            "✓ COMMA SPLICE: IC + comma + IC (She ran, she fell.)",
            "✓ COMPOUND: IC + and/but/or + IC (She ran, and I cheered.)",
            "✓ COMPLEX: dependent clause + IC (Although she ran, I cheered.)",
            "✓ DEPENDENT MARKERS: because, although, while, if, after, before, who, which",
            "✓ COORDINATORS: for, and, nor, but, or, yet, so (FANBOYS)",
          ],
          story: {
            title: "Story Lab: Building a House Project",
            overview: "See how varied sentence structures create engaging narrative and clear instructions.",
            passages: [
              "Jamal decided to build a bookshelf in his apartment. He purchased materials, and he gathered tools carefully.",
              "When he read the instructions, he discovered several issues. The manual was unclear, yet he determined to proceed anyway.",
              "While Jamal measured and cut the wood, his sister arrived with snacks. She watched him work, and she offered helpful suggestions.",
              "Because the project took longer than expected, he worked late into the evening. Although he was tired, he stayed focused until the shelves were complete.",
              "When he finished, the result was impressive. The bookshelf was sturdy and beautiful, and his apartment looked more organized than ever.",
            ],
            analysis: [
              "Jamal decided... = simple sentence (S-V).",
              "He purchased... and he gathered... = compound (IC + and + IC).",
              "When he read... = complex (dependent + IC).",
              "The manual was unclear, yet he persisted = compound (IC + yet + IC).",
              "While Jamal measured... = complex (dependent + IC).",
              "Because the project took... = complex (dependent + IC).",
              "Varied structure (simple/compound/complex) makes narrative engaging.",
            ],
          },
          quizCoverageNotes:
            "Test sentence type identification, fragment recognition, run-on/comma splice detection, repair of incomplete sentences, understanding when dependent clauses need independent clauses.",
        },
        {
          id: "articles-nouns",
          title: "Articles, Determiners, and Nouns",
          duration: "50 min",
          focus: "Use a, an, the, some, and zero article correctly.",
          summary:
            "Articles and determiners help readers understand whether a noun is general, specific, countable, or singular/plural. Focus on reference and noun types for natural-sounding phrases.",
          objectives: [
            "Choose articles based on countability and specificity.",
            "Explain why some nouns take no article in generic use.",
            "Correct common article errors with noncount nouns.",
          ],
          rules: [
            "Use a/an for singular count nouns mentioned generally for the first time.",
            "Use the for specific, already-known, or unique nouns.",
            "Don't use a/an with noncount nouns (information, advice, furniture, equipment).",
            "Use zero article for plural counts or noncount nouns speaking generally.",
            "Use the for unique things (the sun) or specific things (the book we discussed).",
            "Some nouns switch between count and noncount by meaning (coffee=noncount; a coffee=count).",
          ],
          examples: [
            { sentence: "I saw a movie yesterday. The movie was inspiring.", note: "a (indefinite); the (now specific)." },
            { sentence: "We need some advice before the interview.", note: "Advice is noncount; some, not a/an." },
            { sentence: "Birds fly south in the winter.", note: "Generic plural = zero; the winter = specific." },
            { sentence: "The United States is a large country.", note: "The with proper nouns; a before singular count." },
            { sentence: "She is an experienced consultant with a degree in engineering.", note: "an (vowel sound); a (consonant sound)." },
            { sentence: "I need information about the project due tomorrow.", note: "Information (noncount) = zero; the project (specific) = the." },
            { sentence: "Cats are independent, but the cat next door loves attention.", note: "Generic = zero; specific = the." },
            { sentence: "He is looking for a job in the technology sector.", note: "a job (indefinite); the sector (specific)." },
            { sentence: "The furniture in that store is expensive, but I found some chairs on sale.", note: "Furniture (noncount) = the; some chairs (count) = specific quantity." },
            { sentence: "Good communication is essential in the workplace.", note: "Communication (noncount/abstract) = zero; the workplace (specific) = the." },
            { sentence: "She gave me a book to read, and the book was fascinating.", note: "a (first mention); the (now known/specific)." },
            { sentence: "Would you like some coffee or a tea with your dessert?", note: "some coffee (noncount); a tea (specific cup)." },
          ],
          pitfalls: [
            { wrong: "I have an advice for you.", right: "I have some advice. / I have a piece of advice.", note: "Advice is noncount." },
            { wrong: "The students need the education.", right: "Students need education. / The education you provide is valuable.", note: "Abstract/general = zero; specific = the." },
            { wrong: "She is a English teacher.", right: "She is an English teacher.", note: "an before vowel SOUNDS." },
            { wrong: "In the morning, I drink a coffee.", right: "In the morning, I drink coffee. / I have a coffee (specific cup).", note: "General habit = zero; specific cup = a." },
            { wrong: "I have an information for you.", right: "I have some information for you.", note: "Information is noncount." },
          ],
          practicePlan: [
            "Exercise 1 - Selection: Choose a/an/the/zero in 20 sentences.",
            "Exercise 2 - Categorize: Sort nouns into countable vs noncountable.",
            "Exercise 3 - Rewrite: Add/remove articles to match context.",
            "Exercise 4 - Explain: Explain why you chose each article in a paragraph.",
            "Exercise 5 - Dialogue: Complete articles in a natural conversation.",
          ],
          revisionSummary:
            "The = specific; a/an = general singular; zero = plural/generic/noncount. Noncount (information, advice, furniture) don't take a/an. Introducing a noun = a/an; referring back = the. Pay attention to information status (new vs known).",
          cheatSheet: [
            "✓ THE: specific/unique (the sun), known/mentioned (the book I gave), established",
            "✓ A/AN: singular count, first mention (a cat, an orange), any member of group",
            "✓ ZERO: plural counts generally (cats), noncount, abstract/general",
            "✓ SOME: noncount or plural with quantity (some advice, some friends)",
            "✓ NONCOUNT: information, advice, equipment, furniture, luggage, jewelry, traffic",
            "✓ A BEFORE: consonant sound (a book, a union) / AN BEFORE: vowel sound (an apple, an hour)",
            "✓ REMEMBER: I bought a car / The car is blue (now known)",
          ],
          story: {
            title: "Story Lab: A New Book Club",
            overview: "See how articles show new versus established information.",
            passages: [
              "Maria started a book club at the community center last month. The club meets the first Tuesday of each month, and the members have become very close.",
              "A book was chosen for this month's meeting: a novel about three sisters. The novel is set in the 1950s and explores family relationships.",
              "When the members arrived for the meeting, Maria provided some beverages and snacks. She had purchased tea, coffee, and a special cake from the bakery nearby.",
              "The discussion was thoughtful, and the participants shared perspectives. Some comments were insightful; some were constructive.",
              "Maria decided the book club needed better organization. She would create a schedule and maintain a list of the books they plan to read.",
            ],
            analysis: [
              "a book club (new) → the club (established/specific)",
              "a book (new) → the novel (now known which one)",
              "the 1950s (specific period); some beverages (quantity); The club/discussion/members = specific/known",
              "a schedule, a list = new items being introduced",
            ],
          },
          quizCoverageNotes:
            "Test article selection in context, count vs noncount identification, article error correction, and explanation of why articles change (information status). Include tricky noncount nouns and cases where nouns shift between count/noncount.",
        },
      ],
    },
    // ===== REMAINING MODULES (TO BE EXPANDED) =====
    // Module 2 (Tenses), Module 3 (Accuracy), Module 4 (Complex), Module 5 (Style), Module 6 (Review)
    // will follow the same pattern: 12-20+ examples, stories, practice exercises, pitfalls, cheat sheets
  ];

  const roadmap = [
    { week: "Week 1", theme: "Word jobs", summary: "Learn core word classes and how they build sentence meaning.", tasks: ["Study Parts of Speech.", "Label words in ten original sentences.", "Take the lesson quiz and review explanations."] },
    { week: "Week 2", theme: "Sentence core", summary: "Stabilize sentence structure and noun phrase control.", tasks: ["Study Sentence Structure and Articles.", "Repair fragments and article mistakes.", "Write one descriptive text and self-edit."] },
    { week: "Week 3", theme: "Present meaning", summary: "Separate routine from what is happening now.", tasks: ["Study Present Simple and Present Continuous.", "Read Cedar Cafe story and identify each tense.", "Complete lesson quiz and review wrong answers."] },
    { week: "Week 4", theme: "Past and future", summary: "Add finished time, relevance, planning, and modals.", tasks: ["Study Past Simple and Present Perfect.", "Study Future Forms and Modals.", "Write narrative about last week and next week."] },
    { week: "Week 5", theme: "Agreement and reference", summary: "Improve sentence accuracy with heads and clarity.", tasks: ["Study Subject-Verb Agreement.", "Study Pronouns and Questions.", "Edit older writing for these targets."] },
    { week: "Week 6", theme: "Pattern awareness", summary: "Master preposition patterns and modifier placement.", tasks: ["Study Prepositions and Modifiers.", "Build phrase notebook from reading.", "Complete one timed editing drill."] },
    { week: "Week 7", theme: "Complex links", summary: "Connect ideas with clause control.", tasks: ["Study Clauses and Relative Clauses.", "Combine simple sentences into complex ones.", "Review comma use with clause boundaries."] },
    { week: "Week 8", theme: "Hypothetical and reported", summary: "Use conditional logic and reported speech.", tasks: ["Study Conditionals and Wishes.", "Study Reported Speech.", "Retell a conversation indirectly in writing."] },
    { week: "Week 9", theme: "Clarity in editing", summary: "Improve punctuation and balance.", tasks: ["Study Punctuation and Parallelism.", "Revise a formal paragraph for logic and flow.", "Practice editing for clarity."] },
    { week: "Week 10", theme: "Tone", summary: "Master concise and formal language choices.", tasks: ["Study Concision and Formal Tone.", "Rewrite casual sentences in report style.", "Retake one weak lesson quiz."] },
    { week: "Week 11", theme: "Performance practice", summary: "Move into mixed correction and transformation.", tasks: ["Study Error Correction Drills.", "Study Transformations and Cloze.", "Complete two focused quizzes under time pressure."] },
    { week: "Week 12", theme: "Retention", summary: "Lock in the program with spaced review.", tasks: ["Study Final Review and Study Strategy.", "Create error log and weak-area checklist.", "Write one final timed response and self-edit."] },
  ];

  window.GrammarAtlasData = {
    curriculum,
    roadmap,
    quizSize: 60,
  };
})();
