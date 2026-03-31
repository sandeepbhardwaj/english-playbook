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
        "Write a 150-word self-introduction and label nouns, verbs, articles, and sentence types.",
      lessons: [
        {
          id: "parts-of-speech",
          title: "Parts of Speech",
          duration: "45 min",
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
          ],
          examples: [
            {
              sentence: "The curious student quickly opened the grammar book.",
              note: "student is a noun, curious is an adjective, quickly is an adverb, and opened is a verb.",
            },
            {
              sentence: "Although she was tired, Maya finished her homework.",
              note: "Although introduces a dependent clause, and her acts as a determiner before homework.",
            },
          ],
          pitfalls: [
            "Do not assume every word ending in -ly is an adverb; friendly is an adjective.",
            "A word can change class by use: book is a noun in one sentence and a verb in another.",
          ],
          practicePlan: [
            "Underline one target word in each sentence and name its role.",
            "Create pairs such as book/book and clean/clean to show category shifts.",
            "Read a short article and label at least twenty words by function.",
          ],
        },
        {
          id: "sentence-structure",
          title: "Sentence Structure",
          duration: "55 min",
          focus: "Build complete sentences with subjects, verbs, and clear complements.",
          summary:
            "A complete sentence expresses a full thought. Most English sentences need a subject and a finite verb, and many also need an object, complement, or adverbial phrase. Understanding basic sentence patterns helps you avoid fragments, run-ons, and awkward structures.",
          objectives: [
            "Distinguish complete clauses from fragments.",
            "Recognize core sentence patterns used in everyday English.",
            "Repair run-ons with punctuation and conjunctions.",
          ],
          rules: [
            "A clause becomes a sentence only when it can stand on its own as a complete thought.",
            "The most common patterns are subject-verb, subject-verb-object, and subject-linking verb-complement.",
            "Dependent clauses need a main clause unless they are part of a larger sentence.",
          ],
          examples: [
            {
              sentence: "The meeting ended early.",
              note: "This is a complete subject-verb sentence.",
            },
            {
              sentence: "Because the bus was late, we missed the introduction.",
              note: "The dependent clause is attached to a complete main clause.",
            },
          ],
          pitfalls: [
            "Because the bus was late is a fragment if it appears alone.",
            "Joining two independent clauses with only a comma creates a comma splice.",
          ],
          practicePlan: [
            "Sort ten sentences into complete, fragment, or run-on.",
            "Repair five fragments by adding a main clause.",
            "Rewrite a paragraph using a mix of simple and complex sentences.",
          ],
        },
        {
          id: "articles-nouns",
          title: "Articles, Determiners, and Nouns",
          duration: "50 min",
          focus: "Use a, an, the, some, and zero article correctly.",
          summary:
            "Articles and other determiners help the reader understand whether a noun is general, specific, countable, singular, or plural. This lesson focuses on reference and noun type so your noun phrases sound natural.",
          objectives: [
            "Choose articles based on countability and specificity.",
            "Explain why some nouns take no article in generic use.",
            "Correct common article errors with noncount nouns.",
          ],
          rules: [
            "Use a or an for singular count nouns mentioned generally for the first time.",
            "Use the when the noun is specific, already known, or unique in the context.",
            "Do not use a or an with noncount nouns such as information, advice, or furniture.",
          ],
          examples: [
            {
              sentence: "I saw a movie yesterday. The movie was inspiring.",
              note: "The second mention becomes specific, so the is needed.",
            },
            {
              sentence: "We need some advice before the interview.",
              note: "Advice is noncount, so some works better than an article.",
            },
          ],
          pitfalls: [
            "Do not say an advice, a furniture, or an information.",
            "Generic plural nouns often take no article: Students need feedback.",
          ],
          practicePlan: [
            "Rewrite noun phrases from your own writing with article corrections.",
            "Sort nouns into count, noncount, singular, and plural groups.",
            "Describe a room using at least ten accurate noun phrases.",
          ],
        },
      ],
    },
    {
      id: "tenses",
      title: "Module 2: Tenses and Time",
      level: "Beginner to Intermediate",
      duration: "Week 3-4",
      description:
        "Learn how English grammar maps routine, action-in-progress, experience, finished time, future plans, and modal meaning.",
      portfolioTask:
        "Write a three-part narrative using present, past, and future meaning accurately.",
      lessons: [
        {
          id: "present-family",
          title: "Present Simple and Present Continuous",
          duration: "60 min",
          focus: "Choose between routine meaning and action happening around now.",
          summary:
            "The present simple usually describes facts, routines, and repeated actions. The present continuous describes actions happening now or around the current period, and it can also show changing situations. Accuracy depends on the meaning, not just the time word.",
          objectives: [
            "Separate permanent facts from temporary or in-progress meaning.",
            "Notice when timetable language still uses the simple present.",
            "Avoid continuous forms with stative verbs in standard use.",
          ],
          rules: [
            "Use present simple for habits, general truths, and schedules.",
            "Use present continuous for actions in progress or temporary arrangements.",
            "Stative verbs such as know, believe, and belong usually do not take the continuous form.",
          ],
          examples: [
            {
              sentence: "She teaches biology, but this semester she is teaching grammar too.",
              note: "The first verb is habitual; the second is temporary.",
            },
            {
              sentence: "The train leaves at 7:10 tomorrow.",
              note: "Present simple can express timetable-based future events.",
            },
          ],
          pitfalls: [
            "Do not overuse the continuous with stative verbs: I know, not I am knowing.",
            "Every day usually points to the present simple, not the continuous.",
          ],
          practicePlan: [
            "Describe your weekly routine in the simple present.",
            "Describe what people are doing around you right now in the present continuous.",
            "Compare permanent facts and temporary changes in one short paragraph.",
          ],
          story: {
            title: "Story Lab: Morning at Cedar Cafe",
            overview:
              "This story contrasts routine actions with what is happening today so the tense choice becomes visible in context.",
            passages: [
              "Every weekday, Rhea opens Cedar Cafe at six o'clock. She checks the bread delivery, arranges the cups, and writes the lunch specials on the board before the first customers arrive.",
              "Today, however, the cafe is running differently. Rhea is training a new assistant, the espresso machine is making a strange noise, and two delivery drivers are waiting near the back door.",
              "Even while the line grows longer, the regular customers still know the routine. Mr. D'Souza always orders tea, the students usually share one large sandwich, and the baker arrives exactly at seven thirty.",
            ],
            analysis: [
              "Routine verbs such as opens, checks, arranges, and orders show what normally happens.",
              "Continuous forms such as is training and are waiting show temporary action around now.",
              "The story deliberately mixes stable routines and current disruption so the contrast is easy to feel.",
            ],
          },
        },
        {
          id: "past-and-present-perfect",
          title: "Past Simple and Present Perfect",
          duration: "60 min",
          focus: "Separate finished past time from present relevance.",
          summary:
            "The past simple places an action in a finished past time. The present perfect connects a past event to the present through result, experience, or duration. Learners often confuse them because both can refer to the past, but their time logic is different.",
          objectives: [
            "Use finished time markers with the past simple only.",
            "Use the present perfect for experience, result, and unfinished time.",
            "Control since and for accurately in ongoing situations.",
          ],
          rules: [
            "Use past simple with finished time markers such as yesterday, last year, or in 2024.",
            "Use present perfect for life experience, recent results, and unfinished time periods.",
            "Do not use the present perfect with a finished time expression.",
          ],
          examples: [
            {
              sentence: "I visited Delhi in January, and I have visited Jaipur twice in my life.",
              note: "The first action is tied to a finished time; the second describes experience.",
            },
            {
              sentence: "She has lost her notebook, so she cannot revise tonight.",
              note: "The result matters in the present.",
            },
          ],
          pitfalls: [
            "Avoid forms like I have seen him yesterday.",
            "Since points to a starting time; for points to a duration.",
          ],
          practicePlan: [
            "Write five sentences about last week using the past simple.",
            "Write five sentences about your life experience using the present perfect.",
            "Describe one action that started in the past and still matters now.",
          ],
          story: {
            title: "Story Lab: Nisha's Portfolio Night",
            overview:
              "This story shows how a finished event can be narrated with the past simple while present results and experience call for the present perfect.",
            passages: [
              "Last Friday, Nisha presented her design portfolio to a panel of mentors. She arrived early, arranged her sketches on a long table, and answered questions for almost an hour.",
              "Since that evening, she has felt much more confident about her work. Two mentors have emailed her, and one studio has invited her to a second meeting.",
              "Nisha has prepared portfolios before, but this one mattered more because it was her first professional review. The event ended on Friday, yet its effect is still shaping her choices this week.",
            ],
            analysis: [
              "Arrived, arranged, and answered belong to a finished past event.",
              "Has felt, have emailed, and has invited connect past action to the present result.",
              "The final paragraph combines life experience and current consequence in a natural way.",
            ],
          },
        },
        {
          id: "future-perfect-modals",
          title: "Future Forms, Perfect Forms, and Modals",
          duration: "65 min",
          focus: "Express plans, predictions, ability, obligation, and probability.",
          summary:
            "English future meaning is expressed through several patterns: will, be going to, present continuous for arrangements, and sometimes present simple for schedules. Perfect forms add a sense of completion or duration. Modals such as can, should, must, and might let you express attitude, obligation, or probability.",
          objectives: [
            "Choose between will, be going to, and present continuous for future meaning.",
            "Use future perfect to show completion before a future point.",
            "Use modal verbs to express advice, certainty, permission, and possibility.",
          ],
          rules: [
            "Use be going to for plans or predictions based on present evidence.",
            "Use will for decisions made now, predictions, and neutral future statements.",
            "Use modal verbs to show ability, advice, necessity, permission, or probability.",
          ],
          examples: [
            {
              sentence: "Look at those clouds. It is going to rain.",
              note: "The prediction comes from visible evidence.",
            },
            {
              sentence: "By next June, she will have completed the full program.",
              note: "Future perfect shows completion before a future point.",
            },
          ],
          pitfalls: [
            "Do not use to after most modal verbs: you should study, not should to study.",
            "Must not expresses prohibition, while do not have to expresses lack of necessity.",
          ],
          practicePlan: [
            "Write plans, predictions, and instant decisions in separate groups.",
            "Describe what you will have completed by the end of the month.",
            "Rewrite advice, obligation, and possibility statements using modals.",
          ],
          story: {
            title: "Story Lab: The Science Fair Countdown",
            overview:
              "The story moves forward in time and shows how future forms and modal choices express plans, predictions, and deadlines.",
            passages: [
              "The science fair opens next Thursday, and Mira is meeting her partner after school every day this week. They are going to test the final model tonight because the battery keeps overheating.",
              "Their teacher thinks the project will impress the judges if the data display stays clear. By the time the doors open, the team will have printed new labels, checked every wire, and practiced the final explanation twice.",
              "Mira knows they must arrive early, but they do not have to carry the heavy display alone because the school can send a helper. If the forecast changes, the judges might move the event indoors.",
            ],
            analysis: [
              "Present continuous marks arranged future plans such as is meeting.",
              "Will have printed and will have practiced show completion before the fair opens.",
              "Must, do not have to, can, and might each add a different shade of modal meaning.",
            ],
          },
        },
      ],
    },
    {
      id: "accuracy",
      title: "Module 3: Sentence Accuracy",
      level: "Intermediate",
      duration: "Week 5-6",
      description:
        "Strengthen agreement, pronoun reference, auxiliary use, prepositions, and modifier placement.",
      portfolioTask:
        "Edit an old paragraph only for sentence-level accuracy and annotate each correction.",
      lessons: [
        {
          id: "subject-verb-agreement",
          title: "Subject-Verb Agreement",
          duration: "45 min",
          focus: "Match the verb to the true head of the subject.",
          summary:
            "Agreement problems often happen when extra words appear between the subject and the verb. To choose the right verb form, find the grammatical head of the subject, then ignore interrupting phrases.",
          objectives: [
            "Find the true head of complex subjects.",
            "Use singular verbs with formal indefinite pronouns.",
            "Handle tricky agreement after prepositional phrases and collective nouns.",
          ],
          rules: [
            "A singular subject takes a singular verb; a plural subject takes a plural verb.",
            "Phrases between subject and verb do not change agreement.",
            "Everyone, each, and neither are singular in standard formal English.",
          ],
          examples: [
            {
              sentence: "The list of topics is on the table.",
              note: "List is singular even though topics is plural.",
            },
            {
              sentence: "Neither of the answers seems complete.",
              note: "Neither is treated as singular in formal usage.",
            },
          ],
          pitfalls: [
            "Do not let the nearest noun trick you into the wrong verb form.",
            "Compound subjects joined by and are usually plural, but set expressions may be singular.",
          ],
          practicePlan: [
            "Underline the head noun before choosing each verb.",
            "Rewrite ten agreement errors from an editing worksheet.",
            "Explain each correction aloud to make the rule stick.",
          ],
        },
        {
          id: "pronouns-questions-negatives",
          title: "Pronouns, Questions, and Negatives",
          duration: "55 min",
          focus: "Maintain clear reference and accurate auxiliary structure.",
          summary:
            "Pronouns should point clearly to the nouns they replace. English questions and negatives also depend heavily on auxiliary verbs such as do, be, and have. When learners miss the auxiliary, sentences sound incomplete or unnatural.",
          objectives: [
            "Avoid unclear pronoun reference in speech and writing.",
            "Form standard questions with the right auxiliary.",
            "Build negatives without dropping tense or agreement.",
          ],
          rules: [
            "A pronoun should agree with its antecedent in number and fit the meaning clearly.",
            "Most present and past simple questions and negatives need do, does, or did.",
            "Avoid ambiguous reference when more than one noun could match the pronoun.",
          ],
          examples: [
            {
              sentence: "When Sara called Mina, she sounded worried.",
              note: "She is ambiguous because it could refer to either person.",
            },
            {
              sentence: "Did you finish the worksheet, or didn't you have time?",
              note: "The auxiliary did supports both the question and the negative.",
            },
          ],
          pitfalls: [
            "Do not say Why you left early? in standard English; say Why did you leave early?",
            "Use reflexive pronouns only when the subject and object are the same person.",
          ],
          practicePlan: [
            "Rewrite ambiguous sentences to make the reference explicit.",
            "Transform statements into questions and negatives.",
            "Listen for missing auxiliaries in spoken English practice.",
          ],
        },
        {
          id: "prepositions-modifiers",
          title: "Prepositions and Modifiers",
          duration: "55 min",
          focus: "Choose natural word partnerships and place modifiers carefully.",
          summary:
            "Many grammar mistakes are really pattern mistakes. English relies on common combinations such as interested in, depend on, good at, and responsible for. Modifier placement is also important because a poorly placed phrase can produce confusion or unintended humor.",
          objectives: [
            "Learn phrase-level preposition patterns, not isolated words.",
            "Place modifiers close to the word they describe.",
            "Notice and repair dangling or misplaced modifiers.",
          ],
          rules: [
            "Learn prepositions as part of a phrase, not as isolated words.",
            "Place modifiers close to the word they describe.",
            "Fronted or final modifiers should still point clearly to the intended noun or verb.",
          ],
          examples: [
            {
              sentence: "She is interested in linguistics and good at analysis.",
              note: "The adjective determines the preposition that follows.",
            },
            {
              sentence: "Walking through the hallway, I noticed the posters.",
              note: "I is the logical subject of walking.",
            },
          ],
          pitfalls: [
            "A dangling modifier happens when the intended subject is missing.",
            "Do not translate prepositions word for word from another language.",
          ],
          practicePlan: [
            "Build a notebook of adjective-preposition and verb-preposition pairs.",
            "Repair modifier errors by naming the intended actor first.",
            "Shadow model sentences aloud so patterns become natural.",
          ],
        },
      ],
    },
    {
      id: "complex-grammar",
      title: "Module 4: Complex Grammar",
      level: "Intermediate to Upper Intermediate",
      duration: "Week 7-8",
      description:
        "Use clauses, relative structures, conditionals, and reported speech to communicate more complex relationships.",
      portfolioTask:
        "Write a multi-paragraph response using at least one relative clause, one conditional, and one reported statement.",
      lessons: [
        {
          id: "clauses-and-relatives",
          title: "Clauses, Conjunctions, and Relative Clauses",
          duration: "60 min",
          focus: "Connect ideas smoothly and add detail without repetition.",
          summary:
            "Complex sentences allow you to show cause, contrast, sequence, condition, and additional detail. Relative clauses are especially useful because they let you describe a noun inside the sentence itself.",
          objectives: [
            "Link unequal ideas with subordinators.",
            "Choose relative pronouns that fit the noun being described.",
            "Use commas correctly with nonrestrictive clauses.",
          ],
          rules: [
            "Use subordinating conjunctions such as because, although, and while to link unequal ideas.",
            "Use who for people, which for things, and that for restrictive clauses in many contexts.",
            "Nonrestrictive relative clauses need commas because they add extra information.",
          ],
          examples: [
            {
              sentence: "The tutor who helped me yesterday explained articles clearly.",
              note: "The relative clause identifies which tutor is meant.",
            },
            {
              sentence: "Although the task was difficult, the class finished on time.",
              note: "Although introduces a dependent clause of contrast.",
            },
          ],
          pitfalls: [
            "Do not use commas around a restrictive clause that is essential to the meaning.",
            "Avoid repeating the noun with an extra pronoun inside the relative clause.",
          ],
          practicePlan: [
            "Combine short clauses into richer complex sentences.",
            "Mark restrictive and nonrestrictive relative clauses differently.",
            "Write a paragraph that alternates reason, contrast, and added detail.",
          ],
        },
        {
          id: "conditionals",
          title: "Conditionals, Wishes, and Hypothetical Meaning",
          duration: "60 min",
          focus: "Express real possibilities, imagined situations, and regrets.",
          summary:
            "Conditional forms let you talk about consequences. The zero conditional states general truths, the first conditional covers real future possibilities, the second conditional imagines unreal present or future situations, and the third conditional reflects on unreal past situations.",
          objectives: [
            "Match each conditional form to its meaning.",
            "Use backshifted forms for hypothetical distance.",
            "Express wishes and regrets naturally.",
          ],
          rules: [
            "Use present plus present for general truths in the zero conditional.",
            "Use present plus will for likely future results in the first conditional.",
            "Use past forms to distance unreal meaning in second and third conditionals.",
          ],
          examples: [
            {
              sentence: "If you heat ice, it melts.",
              note: "This is a zero conditional because it states a fact.",
            },
            {
              sentence: "If I had revised earlier, I would have felt calmer.",
              note: "This third conditional describes an unreal past situation.",
            },
          ],
          pitfalls: [
            "Do not use will in the if-clause of a standard first conditional.",
            "In formal style, use were with I, he, she, and it for unreal second conditionals.",
          ],
          practicePlan: [
            "Sort model sentences by zero, first, second, and third conditional.",
            "Rewrite direct regrets using wish.",
            "Create consequence chains from real and unreal situations.",
          ],
        },
        {
          id: "reported-speech",
          title: "Reported Speech and Reporting Verbs",
          duration: "50 min",
          focus: "Report statements, questions, and requests accurately.",
          summary:
            "Reported speech allows you to communicate what someone said without quoting exact words. When the reporting verb is in the past, tense and time expressions often shift back. Reporting verbs such as say, tell, ask, advise, promise, and suggest also control the grammar that follows.",
          objectives: [
            "Backshift when the reporting context moves into the past.",
            "Change pronouns and time words to fit the new speaker and moment.",
            "Choose the reporting verb pattern that matches the message type.",
          ],
          rules: [
            "Backshift tense when the reporting context is past and the information is not still current.",
            "Change pronouns, time words, and place words to fit the new perspective.",
            "Use tell with an object, but say usually appears without one unless say to is used.",
          ],
          examples: [
            {
              sentence: "Direct: 'I am tired.' Reported: She said that she was tired.",
              note: "The tense and pronoun shift because the report is in the past.",
            },
            {
              sentence: "Direct: 'Do you need help?' Reported: He asked whether I needed help.",
              note: "Reported questions use statement word order.",
            },
          ],
          pitfalls: [
            "Do not keep question word order after asked: He asked where I was, not where was I.",
            "Suggest is followed by a noun, -ing form, or that-clause, not an object plus infinitive.",
          ],
          practicePlan: [
            "Convert direct speech to reported speech sentence by sentence.",
            "Practice say, tell, ask, suggest, and advise with the right pattern.",
            "Retell a conversation from memory using reporting verbs.",
          ],
        },
      ],
    },
    {
      id: "style",
      title: "Module 5: Style and Editing",
      level: "Upper Intermediate",
      duration: "Week 9-10",
      description:
        "Turn grammatical accuracy into polished writing through punctuation, balance, comparison, and concise style.",
      portfolioTask:
        "Revise a formal paragraph for punctuation, parallelism, and concise tone.",
      lessons: [
        {
          id: "punctuation-clarity",
          title: "Punctuation for Clarity",
          duration: "50 min",
          focus: "Use commas, semicolons, colons, and apostrophes with purpose.",
          summary:
            "Punctuation is not decoration. It shapes meaning, pace, and relationships between ideas. This lesson focuses on punctuation choices that most affect grammar: separating clauses, signaling explanation, marking possession, and avoiding comma splices or missing apostrophes.",
          objectives: [
            "Use punctuation to mark relationships between clauses.",
            "Separate extra information from essential information.",
            "Avoid punctuation errors that change meaning or break structure.",
          ],
          rules: [
            "Use commas after introductory elements and around nonrestrictive information.",
            "Use semicolons to join closely related independent clauses or separate complex items in a list.",
            "Use apostrophes for possession and contractions, not for regular plurals.",
          ],
          examples: [
            {
              sentence: "After the workshop, we compared our notes.",
              note: "The comma separates the introductory phrase from the main clause.",
            },
            {
              sentence: "The tutor's explanation was clear; the examples made it memorable.",
              note: "The semicolon joins two related complete clauses.",
            },
          ],
          pitfalls: [
            "Do not use an apostrophe to form a plural noun such as apples or videos.",
            "A semicolon cannot join a clause to a fragment.",
          ],
          practicePlan: [
            "Repair comma splices and apostrophe errors in an editing set.",
            "Read pairs of sentences aloud to hear punctuation-driven pauses.",
            "Rewrite a paragraph using at least one semicolon and one colon correctly.",
          ],
        },
        {
          id: "parallelism-comparison",
          title: "Parallelism and Comparison",
          duration: "55 min",
          focus: "Keep similar ideas in matching grammatical form.",
          summary:
            "Parallel structure makes language easier to process and more persuasive. When items are joined in a list, pair, or comparison, they should follow matching forms. Comparisons also require logic: compare like with like, and avoid incomplete or distorted structures.",
          objectives: [
            "Recognize unbalanced forms in coordination and lists.",
            "Repair faulty comparisons by comparing equivalent categories.",
            "Use parallel structure to strengthen clarity and rhythm.",
          ],
          rules: [
            "When two or more items are coordinated, keep them in the same grammatical form.",
            "Use than and as with structurally complete comparisons when needed for clarity.",
            "Compare equivalent categories, not mismatched things.",
          ],
          examples: [
            {
              sentence: "The course teaches students to analyze, to revise, and to edit.",
              note: "The infinitive pattern is kept parallel across the list.",
            },
            {
              sentence: "Her explanation was clearer than mine.",
              note: "The comparison is logically between two explanations.",
            },
          ],
          pitfalls: [
            "Avoid mixing forms like studying, to write, and analysis in one series.",
            "Do not compare a person to a group when you mean the person's work to the group's work.",
          ],
          practicePlan: [
            "Rewrite mixed lists into parallel structure.",
            "Expand short comparisons until the logic becomes explicit.",
            "Edit one paragraph only for balance and comparison accuracy.",
          ],
        },
        {
          id: "concision-formal-tone",
          title: "Concision and Formal Tone",
          duration: "50 min",
          focus: "Write with precision without sounding abrupt or repetitive.",
          summary:
            "Advanced grammar is not only about correctness. It also involves style choices that make writing efficient and appropriate for the situation. Concise writing removes repetition and filler. Formal tone avoids slang, vague wording, and overly conversational structures when the context calls for professionalism.",
          objectives: [
            "Replace weak noun-heavy phrasing with stronger verbs.",
            "Cut repeated meaning and filler from sentences.",
            "Match language choice to academic or professional context.",
          ],
          rules: [
            "Prefer specific verbs over weak verb plus noun combinations when possible.",
            "Remove repeated meaning, empty openers, and unnecessary intensifiers.",
            "Choose a consistent level of formality for the task and audience.",
          ],
          examples: [
            {
              sentence: "We analyzed the results carefully.",
              note: "This is more concise than We did an analysis of the results carefully.",
            },
            {
              sentence: "The findings indicate a need for further revision.",
              note: "The tone is formal and precise.",
            },
          ],
          pitfalls: [
            "Do not confuse concise with abrupt; you still need complete, clear information.",
            "Avoid stacking fillers such as basically, actually, really, and kind of in formal writing.",
          ],
          practicePlan: [
            "Cut 20 percent from a paragraph without losing meaning.",
            "Replace vague informal wording with precise vocabulary.",
            "Compare a casual and formal version of the same message.",
          ],
        },
      ],
    },
    {
      id: "mastery",
      title: "Module 6: Mastery and Review",
      level: "Upper Intermediate to Advanced",
      duration: "Week 11-12",
      description:
        "Turn all of the course content into active control through correction, transformation, and review strategy.",
      portfolioTask:
        "Complete a mixed review pack and write a reflection on your most persistent grammar errors.",
      lessons: [
        {
          id: "editing-drills",
          title: "Error Correction Drills",
          duration: "45 min",
          focus: "Spot grammar errors quickly and explain why they are wrong.",
          summary:
            "Editing is where grammar knowledge becomes active skill. Instead of producing language slowly from scratch, you scan for tense errors, agreement problems, article mistakes, punctuation faults, and unclear reference.",
          objectives: [
            "Edit by category instead of guessing randomly.",
            "Explain each correction with a rule or principle.",
            "Build speed without sacrificing accuracy.",
          ],
          rules: [
            "Read once for meaning, then scan again for one error type at a time.",
            "Check verbs first, then noun phrases, then clause structure, then punctuation.",
            "When you correct an error, state the rule so the learning sticks.",
          ],
          examples: [
            {
              sentence: "Incorrect: She don't knows the answer.",
              note: "Corrected: She doesn't know the answer. The auxiliary carries the tense and agreement.",
            },
            {
              sentence: "Incorrect: The students was revising in library.",
              note: "Corrected: The students were revising in the library. Fix agreement and article use.",
            },
          ],
          pitfalls: [
            "Do not change a sentence just because it sounds unusual; identify the actual rule.",
            "Editing too quickly can create new errors if you do not reread the full sentence.",
          ],
          practicePlan: [
            "Run timed editing rounds for different error categories.",
            "Keep a correction log with the rule beside each fix.",
            "Reread corrected sentences to confirm the final version still makes sense.",
          ],
        },
        {
          id: "transformations-and-cloze",
          title: "Transformations and Cloze Practice",
          duration: "55 min",
          focus: "Rephrase meaning accurately and complete grammar-based gaps.",
          summary:
            "Sentence transformation tasks prove that you understand grammar deeply enough to restate an idea without changing its meaning. Cloze tasks check your control of connectors, determiners, verb forms, and collocations.",
          objectives: [
            "Preserve meaning while changing the structure.",
            "Use grammatical clues rather than random guessing in gaps.",
            "Track how form changes while meaning stays constant.",
          ],
          rules: [
            "Keep the meaning constant even when the structure changes.",
            "Pay attention to tense, register, and the number of words allowed.",
            "In cloze tasks, use surrounding grammar clues before relying on vocabulary guesswork.",
          ],
          examples: [
            {
              sentence: "It is not necessary to arrive early. -> You do not have to arrive early.",
              note: "The meaning stays the same while the structure changes.",
            },
            {
              sentence: "She is the best editor in the team. -> Nobody in the team edits better than she does.",
              note: "The comparative structure preserves the superlative meaning.",
            },
          ],
          pitfalls: [
            "Changing meaning even slightly makes the answer wrong in transformation tasks.",
            "A single gap may require grammar rather than vocabulary, such as a determiner or auxiliary.",
          ],
          practicePlan: [
            "Underline the meaning you must preserve before rewriting.",
            "Use grammar clues on both sides of each gap in cloze tasks.",
            "Check whether your new sentence still matches the original register.",
          ],
        },
        {
          id: "final-review",
          title: "Final Review and Study Strategy",
          duration: "40 min",
          focus: "Turn the curriculum into a sustainable long-term review system.",
          summary:
            "A comprehensive grammar program works best when it ends with a review strategy, not just a final lesson. Use spaced repetition, targeted correction, and regular timed practice to keep improving. The goal is fluency with accuracy, not one-time memorization.",
          objectives: [
            "Create a review cycle based on weak points, not random revision.",
            "Mix recognition, correction, and production in the same week.",
            "Use error logging to make improvement visible over time.",
          ],
          rules: [
            "Review weak areas more often than strong areas using your completed lesson record.",
            "Mix recognition tasks, editing tasks, and production tasks each week.",
            "Keep a personal error log and revisit the same pattern until it becomes automatic.",
          ],
          examples: [
            {
              sentence: "Monday: review tense drills; Wednesday: edit a paragraph; Saturday: write and self-correct.",
              note: "A varied cycle improves retention more than repeating one task type.",
            },
            {
              sentence: "Error log entry: article use before singular count nouns in introductions.",
              note: "Focused review beats vague goals such as improve grammar.",
            },
          ],
          pitfalls: [
            "Do not spend all your time rereading rules without practicing output.",
            "Avoid treating every error as equally urgent; prioritize high-frequency patterns.",
          ],
          practicePlan: [
            "Create a weekly mix of recall, editing, and writing tasks.",
            "Use quiz results to choose the next review target.",
            "Revisit your error log before each new writing task.",
          ],
        },
      ],
    },
  ];

  const roadmap = [
    {
      week: "Week 1",
      theme: "Word jobs",
      summary: "Learn the core word classes and how they build sentence meaning.",
      tasks: [
        "Study Parts of Speech.",
        "Label words in ten original sentences.",
        "Take the lesson quiz and review your explanations.",
      ],
    },
    {
      week: "Week 2",
      theme: "Sentence core",
      summary: "Stabilize sentence structure and noun phrase control before moving into tense work.",
      tasks: [
        "Study Sentence Structure and Articles, Determiners, and Nouns.",
        "Repair fragments and article mistakes in a paragraph.",
        "Write one short descriptive text and self-edit it.",
      ],
    },
    {
      week: "Week 3",
      theme: "Present meaning",
      summary: "Learn how present forms separate routine from what is happening now.",
      tasks: [
        "Study Present Simple and Present Continuous.",
        "Read the Cedar Cafe story lab and identify each tense choice.",
        "Complete the lesson quiz and review wrong answers.",
      ],
    },
    {
      week: "Week 4",
      theme: "Past and future meaning",
      summary: "Add finished time, present relevance, future planning, and modal control.",
      tasks: [
        "Study Past Simple and Present Perfect.",
        "Study Future Forms, Perfect Forms, and Modals.",
        "Write a narrative about last week and next week in separate sections.",
      ],
    },
    {
      week: "Week 5",
      theme: "Agreement and reference",
      summary: "Tighten sentence accuracy by focusing on heads, auxiliaries, and pronoun clarity.",
      tasks: [
        "Study Subject-Verb Agreement.",
        "Study Pronouns, Questions, and Negatives.",
        "Edit older writing only for these two targets.",
      ],
    },
    {
      week: "Week 6",
      theme: "Pattern awareness",
      summary: "Train yourself to notice natural preposition choices and modifier placement.",
      tasks: [
        "Study Prepositions and Modifiers.",
        "Build a phrase notebook from your reading.",
        "Complete one timed editing drill.",
      ],
    },
    {
      week: "Week 7",
      theme: "Complex links",
      summary: "Connect ideas with better clause control and more precise noun description.",
      tasks: [
        "Study Clauses, Conjunctions, and Relative Clauses.",
        "Combine simple sentences into complex ones.",
        "Review comma use with clause boundaries.",
      ],
    },
    {
      week: "Week 8",
      theme: "Hypothetical and reported meaning",
      summary: "Use conditional logic and reported speech accurately in longer responses.",
      tasks: [
        "Study Conditionals, Wishes, and Hypothetical Meaning.",
        "Study Reported Speech and Reporting Verbs.",
        "Retell a conversation indirectly in writing.",
      ],
    },
    {
      week: "Week 9",
      theme: "Clarity in editing",
      summary: "Turn grammar knowledge into stronger reader guidance through punctuation and balance.",
      tasks: [
        "Study Punctuation for Clarity.",
        "Study Parallelism and Comparison.",
        "Revise a formal paragraph for logic and flow.",
      ],
    },
    {
      week: "Week 10",
      theme: "Tone",
      summary: "Practice concise and formal language choices that improve academic and professional writing.",
      tasks: [
        "Study Concision and Formal Tone.",
        "Rewrite casual sentences in report style.",
        "Retake one weak lesson quiz.",
      ],
    },
    {
      week: "Week 11",
      theme: "Performance practice",
      summary: "Move into mixed correction, transformation, and test-style control.",
      tasks: [
        "Study Error Correction Drills.",
        "Study Transformations and Cloze Practice.",
        "Complete two focused lesson quizzes under time pressure.",
      ],
    },
    {
      week: "Week 12",
      theme: "Retention",
      summary: "Lock in the full program by planning spaced review beyond the course.",
      tasks: [
        "Study Final Review and Study Strategy.",
        "Create an error log and weak-area checklist.",
        "Write one final timed response and self-edit it.",
      ],
    },
  ];

  window.GrammarAtlasData = {
    curriculum,
    roadmap,
    quizSize: 24,
  };
})();
