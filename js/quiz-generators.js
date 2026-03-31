(function () {
  const quizSize = window.GrammarAtlasData.quizSize;

  function rotateOptions(options, shift) {
    const offset = shift % options.length;
    return options.slice(offset).concat(options.slice(0, offset));
  }

  function question(prompt, correct, distractors, explanation, tag, seed) {
    const options = rotateOptions([correct, ...distractors.slice(0, 3)], seed);
    return {
      prompt,
      options,
      correctIndex: options.indexOf(correct),
      explanation,
      tag,
    };
  }

  function padToSize(questions) {
    return questions.slice(0, quizSize);
  }

  function buildPartsOfSpeech() {
    const items = [
      {
        sentence: "The curious student quickly opened the grammar book.",
        target: "quickly",
        correct: "adverb",
        distractors: ["adjective", "noun", "preposition"],
        note: "Quickly modifies the verb opened.",
      },
      {
        sentence: "These notebooks belong to our class.",
        target: "These",
        correct: "determiner",
        distractors: ["pronoun", "adverb", "verb"],
        note: "These introduces the noun notebooks.",
      },
      {
        sentence: "Although she was tired, Maya finished her homework.",
        target: "Although",
        correct: "conjunction",
        distractors: ["preposition", "noun", "adjective"],
        note: "Although joins a dependent clause to the main clause.",
      },
      {
        sentence: "Her final answer was surprisingly clear.",
        target: "final",
        correct: "adjective",
        distractors: ["adverb", "noun", "pronoun"],
        note: "Final describes the noun answer.",
      },
      {
        sentence: "We solved the puzzle after dinner.",
        target: "after",
        correct: "preposition",
        distractors: ["adverb", "verb", "determiner"],
        note: "After introduces the noun dinner.",
      },
      {
        sentence: "Book a table before the guests arrive.",
        target: "Book",
        correct: "verb",
        distractors: ["noun", "adjective", "conjunction"],
        note: "Here book means reserve, so it functions as a verb.",
      },
    ];

    const questions = [];
    items.forEach((item, index) => {
      questions.push(question(`In the sentence "${item.sentence}" what is the part of speech of "${item.target}"?`, item.correct, item.distractors, item.note, "Word class", index));
      questions.push(question(`Choose the best grammatical label for "${item.target}" in "${item.sentence}"`, item.correct, item.distractors, item.note, "Word class", index + 1));
      questions.push(question(`Which category does "${item.target}" belong to in this sentence: "${item.sentence}"?`, item.correct, item.distractors, item.note, "Word class", index + 2));
      questions.push(question(`What job does "${item.target}" perform in "${item.sentence}"?`, item.correct, item.distractors, item.note, "Function", index + 3));
      questions.push(question(`Which answer correctly identifies "${item.target}" in context? "${item.sentence}"`, item.correct, item.distractors, item.note, "Context", index + 4));
      questions.push(question(`If you were labeling the sentence "${item.sentence}", how would you classify "${item.target}"?`, item.correct, item.distractors, item.note, "Labeling", index + 5));
      questions.push(question(`Grammar check: "${item.target}" is acting as which part of speech in "${item.sentence}"?`, item.correct, item.distractors, item.note, "Grammar check", index + 6));
      questions.push(question(`Which role best matches "${item.target}" in the sentence "${item.sentence}"?`, item.correct, item.distractors, item.note, "Role", index + 7));
      questions.push(question(`A student labels "${item.target}" in "${item.sentence}". Which label is correct?`, item.correct, item.distractors, item.note, "Student view", index + 8));
      questions.push(question(`To analyze "${item.sentence}" accurately, what should "${item.target}" be called?`, item.correct, item.distractors, item.note, "Analysis", index + 9));
    });

    return padToSize(questions);
  }

  function buildSentenceStructure() {
    const items = [
      {
        text: "While the rain continued.",
        correct: "fragment",
        distractors: ["complete sentence", "run-on", "question"],
        note: "The clause begins with a subordinator and needs a main clause.",
        repair: "While the rain continued, the team stayed inside.",
      },
      {
        text: "The team presented the final draft.",
        correct: "complete sentence",
        distractors: ["fragment", "run-on", "dependent clause"],
        note: "The sentence has a subject and a finite verb and stands alone.",
        repair: "The sentence is already complete.",
      },
      {
        text: "I revised the essay I checked the citations.",
        correct: "run-on",
        distractors: ["complete sentence", "fragment", "phrase"],
        note: "Two independent clauses are joined without proper punctuation or conjunction.",
        repair: "I revised the essay, and I checked the citations.",
      },
      {
        text: "Because our notes were missing.",
        correct: "fragment",
        distractors: ["complete sentence", "run-on", "imperative sentence"],
        note: "Because creates a dependent clause, so the thought is incomplete alone.",
        repair: "Because our notes were missing, we borrowed copies.",
      },
      {
        text: "The meeting ended early.",
        correct: "complete sentence",
        distractors: ["fragment", "run-on", "prepositional phrase"],
        note: "This is a simple but complete clause.",
        repair: "The sentence is already complete.",
      },
      {
        text: "We were late, the doors had already closed.",
        correct: "run-on",
        distractors: ["fragment", "complete sentence", "noun phrase"],
        note: "The comma alone cannot join two independent clauses here.",
        repair: "We were late, so the doors had already closed. / We were late; the doors had already closed.",
      },
    ];

    const questions = [];
    items.forEach((item, index) => {
      questions.push(question(`How should "${item.text}" be classified?`, item.correct, item.distractors, item.note, "Classification", index));
      questions.push(question(`Which label best fits this string of words: "${item.text}"?`, item.correct, item.distractors, item.note, "Classification", index + 1));
      questions.push(question(`A grammar student sees "${item.text}". What kind of structure is it?`, item.correct, item.distractors, item.note, "Structure", index + 2));
      questions.push(question(`Which answer correctly describes "${item.text}"?`, item.correct, item.distractors, item.note, "Structure", index + 3));
      questions.push(question(`What is the main issue, if any, in "${item.text}"?`, item.correct, item.distractors, item.note, "Error type", index + 4));
      questions.push(question(`If you were checking sentence completeness, how would you mark "${item.text}"?`, item.correct, item.distractors, item.note, "Sentence check", index + 5));
      questions.push(question(`Which revision best handles "${item.text}"?`, item.repair, ["Leave it as it is", "Add another comma only", "Remove the verb"], item.note, "Revision", index + 6));
      questions.push(question(`Choose the best grammatical response to "${item.text}"`, item.repair, ["Delete the subject", "Use no verb at all", "Replace it with a list"], item.note, "Revision", index + 7));
      questions.push(question(`What would make "${item.text}" acceptable if it is not already?`, item.repair, ["A random adjective", "A second comma with no conjunction", "No change is ever possible"], item.note, "Repair", index + 8));
      questions.push(question(`Which explanation is accurate for "${item.text}"?`, item.note, ["It contains only a noun phrase.", "It is correct because it has a capital letter.", "It is acceptable because it sounds long."], item.note, "Reasoning", index + 9));
    });

    return padToSize(questions);
  }

  function buildArticles() {
    const items = [
      {
        prompt: "__ sun rises in the east.",
        correct: "The",
        distractors: ["A", "An", "No article"],
        note: "Sun is unique in normal context, so the is used.",
      },
      {
        prompt: "She gave me __ useful advice.",
        correct: "some",
        distractors: ["an", "a", "the"],
        note: "Advice is noncount, so some is acceptable and an is not.",
      },
      {
        prompt: "We bought __ notebook and __ pens.",
        correct: "a / some",
        distractors: ["an / a", "the / the", "no article / an"],
        note: "Notebook is singular count; pens is plural and indefinite.",
      },
      {
        prompt: "Children need __ patience and support.",
        correct: "no article",
        distractors: ["a", "an", "the"],
        note: "Generic plural subjects often take zero article.",
      },
      {
        prompt: "I saw __ movie yesterday. __ movie was inspiring.",
        correct: "a / The",
        distractors: ["the / A", "an / An", "no article / no article"],
        note: "First mention is indefinite; second mention is specific.",
      },
      {
        prompt: "The lab needs __ equipment before Monday.",
        correct: "some",
        distractors: ["an", "a", "many an"],
        note: "Equipment is a noncount noun.",
      },
    ];

    const questions = [];
    items.forEach((item, index) => {
      questions.push(question(`Choose the best article pattern: "${item.prompt}"`, item.correct, item.distractors, item.note, "Articles", index));
      questions.push(question(`Which answer completes this noun phrase correctly? "${item.prompt}"`, item.correct, item.distractors, item.note, "Noun phrase", index + 1));
      questions.push(question(`Select the most natural article or determiner choice: "${item.prompt}"`, item.correct, item.distractors, item.note, "Determiners", index + 2));
      questions.push(question(`What is the correct article usage in "${item.prompt}"`, item.correct, item.distractors, item.note, "Usage", index + 3));
      questions.push(question(`A learner is unsure about "${item.prompt}". Which answer is right?`, item.correct, item.distractors, item.note, "Learner check", index + 4));
      questions.push(question(`Which option matches the grammar rule for "${item.prompt}"`, item.correct, item.distractors, item.note, "Rule match", index + 5));
      questions.push(question(`Which sentence completion is standard English? "${item.prompt}"`, item.correct, item.distractors, item.note, "Standard use", index + 6));
      questions.push(question(`Choose the form that respects countability and reference: "${item.prompt}"`, item.correct, item.distractors, item.note, "Countability", index + 7));
      questions.push(question(`Which answer avoids an article error in "${item.prompt}"?`, item.correct, item.distractors, item.note, "Error check", index + 8));
      questions.push(question(`If you were editing this line, what would you choose? "${item.prompt}"`, item.correct, item.distractors, item.note, "Editing", index + 9));
    });

    return padToSize(questions);
  }

  function buildPresentFamily() {
    const items = [
      {
        subject: "Rhea",
        base: "serve",
        simple: "serves",
        continuous: "is serving",
        habitTime: "every morning",
        tempTime: "this week",
        note: "Use the simple for routine meaning and the continuous for temporary action.",
      },
      {
        subject: "The students",
        base: "work",
        simple: "work",
        continuous: "are working",
        habitTime: "after class",
        tempTime: "in the library right now",
        note: "Plural subjects still follow the same meaning contrast.",
      },
      {
        subject: "Mira",
        base: "stay",
        simple: "stays",
        continuous: "is staying",
        habitTime: "with her family",
        tempTime: "with her aunt this month",
        note: "Temporary living arrangements often use the continuous.",
      },
      {
        subject: "The train",
        base: "leave",
        simple: "leaves",
        continuous: "is leaving",
        habitTime: "at 7:10 every weekday",
        tempTime: "tomorrow at 7:10 on the schedule",
        note: "Timetables often use the simple present even for future meaning.",
      },
      {
        subject: "I",
        base: "know",
        simple: "know",
        continuous: "am knowing",
        habitTime: "the answer now",
        tempTime: "the answer now",
        note: "Know is normally stative, so the simple form is preferred.",
      },
      {
        subject: "Our team",
        base: "prepare",
        simple: "prepares",
        continuous: "is preparing",
        habitTime: "for debates every season",
        tempTime: "for the finals this month",
        note: "The continuous highlights a current temporary project.",
      },
    ];

    const questions = [];
    items.forEach((item, index) => {
      questions.push(question(`Choose the best routine form: "${item.subject} ___ ${item.habitTime}."`, item.simple, [item.continuous, item.base, `does ${item.base}`], item.note, "Routine meaning", index));
      questions.push(question(`Choose the best temporary form: "${item.subject} ___ ${item.tempTime}."`, item.continuous, [item.simple, item.base, `has ${item.base}`], item.note, "Current action", index + 1));
      questions.push(question(`Which sentence sounds right for a habit?`, `${item.subject} ${item.simple} ${item.habitTime}.`, [`${item.subject} ${item.continuous} ${item.habitTime}.`, `${item.subject} do ${item.base} ${item.habitTime}.`, `${item.subject} ${item.base}ing ${item.habitTime}.`], item.note, "Simple present", index + 2));
      questions.push(question(`Which sentence best describes something happening around now?`, `${item.subject} ${item.continuous} ${item.tempTime}.`, [`${item.subject} ${item.simple} ${item.tempTime}.`, `${item.subject} ${item.base} ${item.tempTime}.`, `${item.subject} have ${item.base} ${item.tempTime}.`], item.note, "Present continuous", index + 3));
      questions.push(question(`Which form matches the meaning in "${item.subject} ___ ${item.habitTime}"?`, item.simple, [item.continuous, item.base, "will " + item.base], item.note, "Meaning", index + 4));
      questions.push(question(`Which form matches the meaning in "${item.subject} ___ ${item.tempTime}"?`, item.continuous, [item.simple, item.base, "will " + item.base], item.note, "Meaning", index + 5));
      questions.push(question(`A learner writes "${item.subject} ${item.continuous} ${item.habitTime}" for a routine. What is the better form?`, `${item.subject} ${item.simple} ${item.habitTime}.`, [`${item.subject} ${item.continuous} ${item.habitTime}.`, `${item.subject} ${item.base} ${item.habitTime}.`, `${item.subject} has ${item.base} ${item.habitTime}.`], item.note, "Correction", index + 6));
      questions.push(question(`Which option best contrasts a stable pattern with a temporary situation for ${item.subject}?`, `${item.subject} ${item.simple} ${item.habitTime}, but ${item.subject} ${item.continuous} ${item.tempTime}.`, [`${item.subject} ${item.continuous} ${item.habitTime}, but ${item.subject} ${item.simple} ${item.tempTime}.`, `${item.subject} ${item.base} ${item.habitTime}, but ${item.subject} ${item.base} ${item.tempTime}.`, `${item.subject} will ${item.base} ${item.habitTime}, but ${item.subject} ${item.simple} ${item.tempTime}.`], item.note, "Contrast", index + 7));
      questions.push(question(`Which answer follows the lesson rule best for ${item.subject}?`, item.note, ["Always use the continuous with every time marker.", "The simple present cannot describe schedules.", "Stative verbs usually prefer the continuous."], item.note, "Rule", index + 8));
      questions.push(question(`In context, which choice is grammatical? "${item.subject} ___ ${item.tempTime}."`, item.continuous, [item.simple, item.base, `does ${item.base}`], item.note, "Context", index + 9));
    });

    return padToSize(questions);
  }

  function buildPastPresentPerfect() {
    const items = [
      {
        subject: "I",
        base: "visit",
        past: "visited",
        perfect: "have visited",
        finishedTime: "in January",
        ongoingContext: "twice in my life",
        note: "Finished time pushes you toward the past simple; life experience supports the present perfect.",
      },
      {
        subject: "She",
        base: "lose",
        past: "lost",
        perfect: "has lost",
        finishedTime: "yesterday afternoon",
        ongoingContext: "her notebook, so she cannot revise tonight",
        note: "Use the present perfect when the result matters now.",
      },
      {
        subject: "We",
        base: "meet",
        past: "met",
        perfect: "have met",
        finishedTime: "in 2022",
        ongoingContext: "before, so the introduction was easy",
        note: "In 2022 is a finished time marker, so the past simple is required.",
      },
      {
        subject: "My brother",
        base: "work",
        past: "worked",
        perfect: "has worked",
        finishedTime: "last summer",
        ongoingContext: "here since 2023",
        note: "Since often triggers the present perfect for continuing situations.",
      },
      {
        subject: "They",
        base: "finish",
        past: "finished",
        perfect: "have finished",
        finishedTime: "last night",
        ongoingContext: "already, so we can print the report",
        note: "Already often fits present relevance if the result matters now.",
      },
      {
        subject: "Rina",
        base: "travel",
        past: "traveled",
        perfect: "has traveled",
        finishedTime: "in 2021",
        ongoingContext: "to Japan three times",
        note: "Repeated life experience supports the present perfect.",
      },
    ];

    const questions = [];
    items.forEach((item, index) => {
      questions.push(question(`Choose the best form with a finished time: "${item.subject} ___ ${item.finishedTime}."`, item.past, [item.perfect, item.base, `was ${item.base}`], item.note, "Finished time", index));
      questions.push(question(`Choose the best form with present relevance: "${item.subject} ___ ${item.ongoingContext}."`, item.perfect, [item.past, item.base, `is ${item.base}ing`], item.note, "Present relevance", index + 1));
      questions.push(question(`Which sentence is correct for a life experience meaning?`, `${item.subject} ${item.perfect} ${item.ongoingContext}.`, [`${item.subject} ${item.past} ${item.ongoingContext}.`, `${item.subject} ${item.base} ${item.ongoingContext}.`, `${item.subject} had ${item.base} ${item.ongoingContext}.`], item.note, "Experience", index + 2));
      questions.push(question(`Which sentence is correct for a completed past event?`, `${item.subject} ${item.past} ${item.finishedTime}.`, [`${item.subject} ${item.perfect} ${item.finishedTime}.`, `${item.subject} ${item.base} ${item.finishedTime}.`, `${item.subject} has ${item.base}ed ${item.finishedTime}.`], item.note, "Past event", index + 3));
      questions.push(question(`A learner writes "${item.subject} ${item.perfect} ${item.finishedTime}". What is the better choice?`, `${item.subject} ${item.past} ${item.finishedTime}.`, [`${item.subject} ${item.perfect} ${item.finishedTime}.`, `${item.subject} ${item.base} ${item.finishedTime}.`, `${item.subject} is ${item.base}ing ${item.finishedTime}.`], item.note, "Correction", index + 4));
      questions.push(question(`Which option follows the lesson rule for "${item.subject} ___ ${item.ongoingContext}"?`, item.perfect, [item.past, item.base, `will ${item.base}`], item.note, "Rule", index + 5));
      questions.push(question(`Which form best matches an unfinished time period for ${item.subject}?`, item.perfect, [item.past, item.base, `did ${item.base}`], item.note, "Unfinished time", index + 6));
      questions.push(question(`Which explanation is correct for these two forms?`, item.note, ["The present perfect is always used with yesterday.", "The past simple is preferred for actions still affecting the present.", "Since is mainly used with the past simple for ongoing situations."], item.note, "Reasoning", index + 7));
      questions.push(question(`Choose the grammatical sentence.`, `${item.subject} ${item.past} ${item.finishedTime}.`, [`${item.subject} ${item.perfect} ${item.finishedTime}.`, `${item.subject} ${item.base} ${item.finishedTime}.`, `${item.subject} having ${item.base} ${item.finishedTime}.`], item.note, "Grammar", index + 8));
      questions.push(question(`Choose the grammatical sentence with current relevance.`, `${item.subject} ${item.perfect} ${item.ongoingContext}.`, [`${item.subject} ${item.past} ${item.ongoingContext}.`, `${item.subject} ${item.base} ${item.ongoingContext}.`, `${item.subject} were ${item.base}ing ${item.ongoingContext}.`], item.note, "Grammar", index + 9));
    });

    return padToSize(questions);
  }

  function buildFutureModals() {
    const items = [
      {
        subject: "I",
        base: "buy",
        willForm: "will buy",
        planForm: "am going to buy",
        arrangedForm: "am meeting",
        perfectForm: "will have finished",
        modal: "should",
        note: "Will often expresses a decision made now, while going to and the present continuous show prior plans or arrangements.",
      },
      {
        subject: "They",
        base: "test",
        willForm: "will test",
        planForm: "are going to test",
        arrangedForm: "are meeting",
        perfectForm: "will have tested",
        modal: "might",
        note: "Might expresses possibility rather than certainty.",
      },
      {
        subject: "Our class",
        base: "submit",
        willForm: "will submit",
        planForm: "is going to submit",
        arrangedForm: "is presenting",
        perfectForm: "will have submitted",
        modal: "must",
        note: "Must expresses strong obligation.",
      },
      {
        subject: "She",
        base: "finish",
        willForm: "will finish",
        planForm: "is going to finish",
        arrangedForm: "is meeting",
        perfectForm: "will have finished",
        modal: "can",
        note: "Can expresses ability or permission depending on context.",
      },
      {
        subject: "We",
        base: "leave",
        willForm: "will leave",
        planForm: "are going to leave",
        arrangedForm: "are traveling",
        perfectForm: "will have left",
        modal: "do not have to",
        note: "Do not have to means lack of necessity, not prohibition.",
      },
      {
        subject: "Mira",
        base: "arrive",
        willForm: "will arrive",
        planForm: "is going to arrive",
        arrangedForm: "is flying",
        perfectForm: "will have arrived",
        modal: "must not",
        note: "Must not expresses prohibition.",
      },
    ];

    const questions = [];
    items.forEach((item, index) => {
      questions.push(question(`Choose the best form for a decision made now: "${item.subject} ___ another copy now."`, item.willForm, [item.planForm, item.arrangedForm, item.base], item.note, "Decision now", index));
      questions.push(question(`Choose the best form for an evidence-based prediction: "${item.subject} ___ because the sky is dark."`, item.planForm, [item.willForm, item.arrangedForm, item.base], item.note, "Prediction", index + 1));
      questions.push(question(`Choose the best form for a fixed arrangement: "${item.subject} ___ the tutor on Friday."`, item.arrangedForm, [item.willForm, item.planForm, item.base], item.note, "Arrangement", index + 2));
      questions.push(question(`Choose the best future perfect form: "By 8 p.m., ${item.subject.toLowerCase()} ___ the task."`, item.perfectForm, [item.willForm, item.planForm, item.base], item.note, "Future perfect", index + 3));
      questions.push(question(`Which modal best expresses the meaning in this lesson set?`, item.modal, ["should to", "will maybe", "has to not"], item.note, "Modal meaning", index + 4));
      questions.push(question(`Which sentence sounds correct in standard English?`, `${item.subject} ${item.modal} revise the instructions.`, [`${item.subject} ${item.modal} to revise the instructions.`, `${item.subject} ${item.modal} revises the instructions.`, `${item.subject} ${item.modal} revising the instructions.`], item.note, "Modal structure", index + 5));
      questions.push(question(`Which answer follows the rule for future planning?`, item.planForm, [item.willForm, item.base, item.perfectForm], item.note, "Planning", index + 6));
      questions.push(question(`Which answer follows the rule for future arrangement?`, item.arrangedForm, [item.willForm, item.planForm, item.perfectForm], item.note, "Arrangement", index + 7));
      questions.push(question(`What does this note remind you?`, item.note, ["All future meaning should use will.", "Must not means lack of necessity.", "Present continuous cannot express arranged future events."], item.note, "Reasoning", index + 8));
      questions.push(question(`Which sentence best shows completion before a future moment?`, `${item.subject} ${item.perfectForm} the work by noon.`, [`${item.subject} ${item.willForm} the work by noon.`, `${item.subject} ${item.arrangedForm} the work by noon.`, `${item.subject} ${item.base} the work by noon.`], item.note, "Completion", index + 9));
    });

    return padToSize(questions);
  }

  function buildAgreement() {
    const items = [
      {
        subject: "The list of topics",
        singular: "is",
        plural: "are",
        note: "The head noun list is singular.",
      },
      {
        subject: "Each of the students",
        singular: "has",
        plural: "have",
        note: "Each is singular in formal standard English.",
      },
      {
        subject: "Neither of the answers",
        singular: "seems",
        plural: "seem",
        note: "Neither usually takes a singular verb in formal grammar.",
      },
      {
        subject: "The results of the survey",
        singular: "shows",
        plural: "show",
        note: "Results is the head noun and it is plural.",
      },
      {
        subject: "A number of students",
        singular: "is",
        plural: "are",
        note: "A number of takes a plural verb.",
      },
      {
        subject: "The quality of the essays",
        singular: "is",
        plural: "are",
        note: "Quality is singular even though essays is plural.",
      },
    ];

    const questions = [];
    items.forEach((item, index) => {
      questions.push(question(`Choose the correct verb: "${item.subject} ___ improving."`, item.singular, [item.plural, "be", "were"], item.note, "Agreement", index));
      questions.push(question(`Which sentence is correct?`, `${item.subject} ${item.singular} improving.`, [`${item.subject} ${item.plural} improving.`, `${item.subject} improve improving.`, `${item.subject} been improving.`], item.note, "Correct sentence", index + 1));
      questions.push(question(`Which explanation is correct for "${item.subject}"?`, item.note, ["The nearest noun decides the verb.", "All subjects with of are plural.", "Interrupting phrases become the true subject."], item.note, "Explanation", index + 2));
      questions.push(question(`If a learner writes "${item.subject} ${item.plural}", what is the better correction?`, `${item.subject} ${item.singular}`, [`${item.subject} ${item.plural}`, `${item.subject} be`, `${item.subject} were`], item.note, "Correction", index + 3));
      questions.push(question(`Which verb matches the head noun in "${item.subject}"?`, item.singular, [item.plural, "be", "being"], item.note, "Head noun", index + 4));
      questions.push(question(`Which answer follows standard formal agreement?`, item.singular, [item.plural, "be", "have been"], item.note, "Formal grammar", index + 5));
      questions.push(question(`Complete the sentence correctly: "${item.subject} ___ ready."`, item.singular, [item.plural, "be", "being"], item.note, "Completion", index + 6));
      questions.push(question(`Which rule applies to "${item.subject}"?`, item.note, ["The closest noun always controls agreement.", "Subjects with each are always plural.", "Agreement ignores the head noun."], item.note, "Rule", index + 7));
      questions.push(question(`Choose the grammatical verb form for "${item.subject}"`, item.singular, [item.plural, "were", "be"], item.note, "Grammar", index + 8));
      questions.push(question(`Which option would you keep in an edited sentence with "${item.subject}"?`, item.singular, [item.plural, "been", "having"], item.note, "Editing", index + 9));
    });

    return padToSize(questions);
  }

  function buildPronounsQuestionsNegatives() {
    const items = [
      {
        sentence: "Why ___ you leave early?",
        correct: "did",
        distractors: ["do", "does", "were"],
        note: "Past simple questions need did plus the base verb.",
      },
      {
        sentence: "Where ___ she work now?",
        correct: "does",
        distractors: ["do", "did", "is"],
        note: "Present simple questions with she use does.",
      },
      {
        sentence: "Ravi told Karan that ___ was late.",
        correct: "Karan",
        distractors: ["he", "himself", "they"],
        note: "Naming the person removes ambiguous pronoun reference.",
      },
      {
        sentence: "Sara hurt ___ while moving the desk.",
        correct: "herself",
        distractors: ["her", "she", "hers"],
        note: "A reflexive pronoun is used when the subject and object are the same.",
      },
      {
        sentence: "I ___ understand the question.",
        correct: "do not",
        distractors: ["am not", "does not", "did not"],
        note: "Simple present negatives use do not with I.",
      },
      {
        sentence: "When Mina called Asha, ___ sounded worried.",
        correct: "Asha sounded worried",
        distractors: ["she", "her", "herself"],
        note: "A clear rewrite removes ambiguity.",
      },
    ];

    const questions = [];
    items.forEach((item, index) => {
      questions.push(question(`Choose the best completion: "${item.sentence}"`, item.correct, item.distractors, item.note, "Completion", index));
      questions.push(question(`Which option creates standard English in "${item.sentence}"?`, item.correct, item.distractors, item.note, "Standard form", index + 1));
      questions.push(question(`Select the form that avoids a grammar or reference error: "${item.sentence}"`, item.correct, item.distractors, item.note, "Accuracy", index + 2));
      questions.push(question(`What should replace the blank in "${item.sentence}"?`, item.correct, item.distractors, item.note, "Blank", index + 3));
      questions.push(question(`Which answer matches the lesson rule for this sentence? "${item.sentence}"`, item.correct, item.distractors, item.note, "Rule match", index + 4));
      questions.push(question(`Which answer would you keep after editing "${item.sentence}"?`, item.correct, item.distractors, item.note, "Editing", index + 5));
      questions.push(question(`Which explanation is best here?`, item.note, ["Present simple questions never use auxiliaries.", "Reflexive pronouns replace all object pronouns.", "Ambiguous pronouns always improve style."], item.note, "Explanation", index + 6));
      questions.push(question(`Choose the grammatical option for "${item.sentence}"`, item.correct, item.distractors, item.note, "Grammar", index + 7));
      questions.push(question(`What is the clearest correction for "${item.sentence}"?`, item.correct, item.distractors, item.note, "Correction", index + 8));
      questions.push(question(`A learner hesitates over "${item.sentence}". Which answer is correct?`, item.correct, item.distractors, item.note, "Learner check", index + 9));
    });

    return padToSize(questions);
  }

  function buildPrepositionsModifiers() {
    const items = [
      {
        prompt: "The result depends ___ careful planning.",
        correct: "on",
        distractors: ["at", "for", "with"],
        note: "Depend is commonly followed by on.",
      },
      {
        prompt: "She is interested ___ linguistics.",
        correct: "in",
        distractors: ["on", "at", "with"],
        note: "Interested pairs with in.",
      },
      {
        prompt: "Driving to class, ___ started suddenly.",
        correct: "the rain started suddenly -> rewrite needed",
        distractors: ["the rain", "the car", "the road"],
        note: "The original sentence contains a dangling modifier and needs a human subject.",
      },
      {
        prompt: "He is responsible ___ the final report.",
        correct: "for",
        distractors: ["of", "on", "to"],
        note: "Responsible is followed by for in this meaning.",
      },
      {
        prompt: "Walking through the hallway, I noticed the posters.",
        correct: "correct modifier placement",
        distractors: ["dangling modifier", "comma splice", "article error"],
        note: "I is the logical subject of walking.",
      },
      {
        prompt: "The class arrived ___ time for the lecture.",
        correct: "on",
        distractors: ["in", "at", "for"],
        note: "On time is the standard phrase.",
      },
    ];

    const questions = [];
    items.forEach((item, index) => {
      questions.push(question(`Choose the best completion: "${item.prompt}"`, item.correct, item.distractors, item.note, "Pattern", index));
      questions.push(question(`Which option matches normal English usage here? "${item.prompt}"`, item.correct, item.distractors, item.note, "Pattern", index + 1));
      questions.push(question(`Select the grammatical answer for "${item.prompt}"`, item.correct, item.distractors, item.note, "Grammar", index + 2));
      questions.push(question(`Which answer fits the phrase pattern in "${item.prompt}"?`, item.correct, item.distractors, item.note, "Phrase", index + 3));
      questions.push(question(`A student writes "${item.prompt}". What should the missing part be?`, item.correct, item.distractors, item.note, "Completion", index + 4));
      questions.push(question(`Which lesson rule applies?`, item.note, ["Translate the preposition word for word.", "Modifiers can point to anything nearby.", "Prepositions never belong to patterns."], item.note, "Rule", index + 5));
      questions.push(question(`Which option avoids a modifier or preposition mistake? "${item.prompt}"`, item.correct, item.distractors, item.note, "Error check", index + 6));
      questions.push(question(`Which answer would you keep after editing "${item.prompt}"?`, item.correct, item.distractors, item.note, "Editing", index + 7));
      questions.push(question(`What is the most natural choice in standard English? "${item.prompt}"`, item.correct, item.distractors, item.note, "Standard use", index + 8));
      questions.push(question(`Choose the answer that matches the target structure. "${item.prompt}"`, item.correct, item.distractors, item.note, "Structure", index + 9));
    });

    return padToSize(questions);
  }

  function buildClausesRelatives() {
    const items = [
      {
        base: "The tutor helped me yesterday. She explained articles clearly.",
        correct: "The tutor who helped me yesterday explained articles clearly.",
        distractors: [
          "The tutor, who helped me yesterday explained articles clearly.",
          "The tutor who she helped me yesterday explained articles clearly.",
          "The tutor helped me yesterday, explained articles clearly.",
        ],
        note: "Use a restrictive relative clause without unnecessary pronouns or commas.",
      },
      {
        base: "The task was difficult. The class finished on time.",
        correct: "Although the task was difficult, the class finished on time.",
        distractors: [
          "Because the task was difficult, the class finished on time.",
          "The task although was difficult, the class finished on time.",
          "Although the task was difficult the class finished on time because.",
        ],
        note: "Although introduces contrast.",
      },
      {
        base: "My laptop is five years old. It still works well.",
        correct: "My laptop, which is five years old, still works well.",
        distractors: [
          "My laptop which is five years old still works well.",
          "My laptop, that is five years old still works well.",
          "My laptop, which is five years old still works well.",
        ],
        note: "The extra information is nonrestrictive, so commas are needed.",
      },
      {
        base: "The book is excellent. You recommended it.",
        correct: "The book that you recommended is excellent.",
        distractors: [
          "The book that you recommended it is excellent.",
          "The book, that you recommended is excellent.",
          "The book is excellent that you recommended.",
        ],
        note: "Do not repeat the object with an extra pronoun.",
      },
      {
        base: "The rain stopped. We went outside.",
        correct: "When the rain stopped, we went outside.",
        distractors: [
          "When the rain stopped we went outside because.",
          "Because the rain stopped, contrast we went outside.",
          "The rain stopped, while we went outside.",
        ],
        note: "When is a natural subordinator for time sequence.",
      },
      {
        base: "Students revise regularly. They improve faster.",
        correct: "Students who revise regularly improve faster.",
        distractors: [
          "Students, who revise regularly improve faster.",
          "Students who revise regularly, improve faster.",
          "Students who they revise regularly improve faster.",
        ],
        note: "This is a restrictive clause, so commas are not needed.",
      },
    ];

    const questions = [];
    items.forEach((item, index) => {
      questions.push(question(`Choose the best combined sentence for: "${item.base}"`, item.correct, item.distractors, item.note, "Combination", index));
      questions.push(question(`Which option uses clause grammar correctly? "${item.base}"`, item.correct, item.distractors, item.note, "Clause control", index + 1));
      questions.push(question(`Select the best revision of "${item.base}"`, item.correct, item.distractors, item.note, "Revision", index + 2));
      questions.push(question(`Which answer keeps the relationship between the ideas clear? "${item.base}"`, item.correct, item.distractors, item.note, "Meaning", index + 3));
      questions.push(question(`A learner tries to combine "${item.base}". Which version is correct?`, item.correct, item.distractors, item.note, "Learner check", index + 4));
      questions.push(question(`Which sentence follows the rule highlighted in this lesson?`, item.correct, item.distractors, item.note, "Rule", index + 5));
      questions.push(question(`Which option would you keep after editing for relative clauses or conjunctions?`, item.correct, item.distractors, item.note, "Editing", index + 6));
      questions.push(question(`Which answer avoids a comma or pronoun error?`, item.correct, item.distractors, item.note, "Error check", index + 7));
      questions.push(question(`Which sentence is standard written English?`, item.correct, item.distractors, item.note, "Standard form", index + 8));
      questions.push(question(`What is the best grammatical link between these ideas? "${item.base}"`, item.correct, item.distractors, item.note, "Linking", index + 9));
    });

    return padToSize(questions);
  }

  function buildConditionals() {
    const items = [
      {
        prompt: "If you heat ice, it ___.",
        correct: "melts",
        distractors: ["will melt", "would melt", "melted"],
        note: "This is a zero conditional showing a general truth.",
      },
      {
        prompt: "If she studies tonight, she ___ more confident tomorrow.",
        correct: "will feel",
        distractors: ["feels", "would feel", "felt"],
        note: "The first conditional uses present in the if-clause and will in the result clause.",
      },
      {
        prompt: "If I ___ you, I would ask for feedback.",
        correct: "were",
        distractors: ["am", "was", "have been"],
        note: "Formal second conditionals often use were for all subjects.",
      },
      {
        prompt: "If I had revised earlier, I ___ calmer.",
        correct: "would have felt",
        distractors: ["will feel", "would feel", "felt"],
        note: "The third conditional describes an unreal past result.",
      },
      {
        prompt: "I wish I ___ taller.",
        correct: "were",
        distractors: ["am", "will be", "have been"],
        note: "Wish uses a past form for unreal present meaning.",
      },
      {
        prompt: "If it rains tomorrow, we ___ inside.",
        correct: "will stay",
        distractors: ["stay", "would stay", "stayed"],
        note: "Do not use will in the if-clause of a standard first conditional.",
      },
    ];

    const questions = [];
    items.forEach((item, index) => {
      questions.push(question(`Choose the best completion: "${item.prompt}"`, item.correct, item.distractors, item.note, "Conditional form", index));
      questions.push(question(`Which option matches the meaning of "${item.prompt}"`, item.correct, item.distractors, item.note, "Meaning", index + 1));
      questions.push(question(`Select the correct grammar for this conditional or wish sentence: "${item.prompt}"`, item.correct, item.distractors, item.note, "Grammar", index + 2));
      questions.push(question(`Which answer follows the lesson rule in "${item.prompt}"`, item.correct, item.distractors, item.note, "Rule", index + 3));
      questions.push(question(`A learner hesitates over "${item.prompt}". Which answer is right?`, item.correct, item.distractors, item.note, "Learner check", index + 4));
      questions.push(question(`Which option would you keep after editing "${item.prompt}"`, item.correct, item.distractors, item.note, "Editing", index + 5));
      questions.push(question(`Which choice produces standard English? "${item.prompt}"`, item.correct, item.distractors, item.note, "Standard form", index + 6));
      questions.push(question(`What is the best verb pattern here? "${item.prompt}"`, item.correct, item.distractors, item.note, "Verb pattern", index + 7));
      questions.push(question(`Which explanation is best?`, item.note, ["All if-clauses should use will.", "Wish uses future forms for unreal present meaning.", "Third conditionals describe guaranteed future events."], item.note, "Explanation", index + 8));
      questions.push(question(`Choose the grammatical answer for "${item.prompt}"`, item.correct, item.distractors, item.note, "Selection", index + 9));
    });

    return padToSize(questions);
  }

  function buildReportedSpeech() {
    const items = [
      {
        direct: "I am tired.",
        correct: "She said that she was tired.",
        distractors: ["She said that she is tired yesterday.", "She told that she was tired.", "She asked that she was tired."],
        note: "Backshift and pronoun change are both needed.",
      },
      {
        direct: "Do you need help?",
        correct: "He asked whether I needed help.",
        distractors: ["He asked whether did I need help.", "He asked whether I need help?", "He asked where I needed help."],
        note: "Reported questions use statement word order.",
      },
      {
        direct: "We will finish tomorrow.",
        correct: "They said that they would finish the next day.",
        distractors: ["They said that they will finish tomorrow.", "They told that they would finish the next day.", "They said they would finish tomorrow yesterday."],
        note: "Will shifts to would, and tomorrow often shifts to the next day.",
      },
      {
        direct: "Please sit down.",
        correct: "The teacher told us to sit down.",
        distractors: ["The teacher said us to sit down.", "The teacher asked where sit down.", "The teacher told that sit down."],
        note: "Tell plus object plus infinitive works well for commands.",
      },
      {
        direct: "Let's review the introduction.",
        correct: "She suggested reviewing the introduction.",
        distractors: ["She suggested me to review the introduction.", "She told reviewing the introduction.", "She suggested that review the introduction."],
        note: "Suggest is not followed by object plus infinitive.",
      },
      {
        direct: "Where is the station?",
        correct: "He asked where the station was.",
        distractors: ["He asked where was the station.", "He asked where is the station.", "He said where the station was?"],
        note: "Reported questions keep statement order.",
      },
    ];

    const questions = [];
    items.forEach((item, index) => {
      questions.push(question(`Choose the best reported version of "${item.direct}"`, item.correct, item.distractors, item.note, "Reported speech", index));
      questions.push(question(`Which answer correctly reports this message: "${item.direct}"`, item.correct, item.distractors, item.note, "Reporting", index + 1));
      questions.push(question(`Select the standard reported form for "${item.direct}"`, item.correct, item.distractors, item.note, "Standard form", index + 2));
      questions.push(question(`A student tries to report "${item.direct}". Which version is right?`, item.correct, item.distractors, item.note, "Learner check", index + 3));
      questions.push(question(`Which option uses the reporting verb pattern correctly? "${item.direct}"`, item.correct, item.distractors, item.note, "Verb pattern", index + 4));
      questions.push(question(`Which option would you keep after editing this reported sentence task? "${item.direct}"`, item.correct, item.distractors, item.note, "Editing", index + 5));
      questions.push(question(`Which answer respects tense shift and word order? "${item.direct}"`, item.correct, item.distractors, item.note, "Tense shift", index + 6));
      questions.push(question(`Choose the best rewrite for indirect speech. "${item.direct}"`, item.correct, item.distractors, item.note, "Indirect speech", index + 7));
      questions.push(question(`Which explanation is correct?`, item.note, ["Reported questions keep question word order.", "Suggest normally takes object plus infinitive.", "Tell can be used without an object in the same way as say."], item.note, "Explanation", index + 8));
      questions.push(question(`Which sentence is grammatical?`, item.correct, item.distractors, item.note, "Grammar", index + 9));
    });

    return padToSize(questions);
  }

  function buildPunctuation() {
    const items = [
      {
        prompt: "The lesson was difficult, we asked extra questions.",
        correct: "The lesson was difficult, so we asked extra questions.",
        distractors: ["The lesson was difficult we asked extra questions.", "The lesson was difficult: we asked extra questions because.", "The lesson was difficult, and because."],
        note: "The original is a comma splice and needs a better link.",
      },
      {
        prompt: "My sisters friend is here.",
        correct: "My sister's friend is here.",
        distractors: ["My sisters' friend is here.", "My sisters friend is here.", "My sisters friend is here."],
        note: "Singular possession takes apostrophe plus s.",
      },
      {
        prompt: "After the workshop we compared our notes.",
        correct: "After the workshop, we compared our notes.",
        distractors: ["After, the workshop we compared our notes.", "After the workshop we, compared our notes.", "After the workshop; we compared our notes."],
        note: "An introductory phrase is followed by a comma here.",
      },
      {
        prompt: "My laptop which is five years old still works well.",
        correct: "My laptop, which is five years old, still works well.",
        distractors: ["My laptop which, is five years old still works well.", "My laptop, which is five years old still works well.", "My laptop which is five years old, still works well."],
        note: "The nonrestrictive clause needs commas on both sides.",
      },
      {
        prompt: "The speakers list included Asha a designer Ravi an editor and Mina a researcher.",
        correct: "The speakers list included Asha, a designer; Ravi, an editor; and Mina, a researcher.",
        distractors: ["The speakers list included Asha a designer, Ravi an editor, and Mina a researcher.", "The speakers list included: Asha, a designer, Ravi, an editor, and Mina, a researcher.", "The speakers list included Asha; a designer, Ravi; an editor, and Mina; a researcher."],
        note: "Semicolons help separate complex list items.",
      },
      {
        prompt: "Its clear that the teams strategy worked.",
        correct: "It's clear that the team's strategy worked.",
        distractors: ["Its clear that the teams' strategy worked.", "It's clear that the teams strategy worked.", "Its clear that the team's strategy worked."],
        note: "It's is a contraction, and team's shows singular possession.",
      },
    ];

    const questions = [];
    items.forEach((item, index) => {
      questions.push(question(`Choose the best punctuated version of this sentence: "${item.prompt}"`, item.correct, item.distractors, item.note, "Punctuation", index));
      questions.push(question(`Which sentence is punctuated correctly?`, item.correct, item.distractors, item.note, "Correct sentence", index + 1));
      questions.push(question(`A writer needs to revise "${item.prompt}". Which option is best?`, item.correct, item.distractors, item.note, "Revision", index + 2));
      questions.push(question(`Which option would you keep after punctuation editing?`, item.correct, item.distractors, item.note, "Editing", index + 3));
      questions.push(question(`Which answer respects clause boundaries and possession?`, item.correct, item.distractors, item.note, "Clause boundaries", index + 4));
      questions.push(question(`Select the standard written English version of "${item.prompt}"`, item.correct, item.distractors, item.note, "Standard form", index + 5));
      questions.push(question(`Which lesson rule applies best here?`, item.note, ["Apostrophes form all plurals.", "Semicolons can join clauses to fragments.", "Nonrestrictive clauses never need commas."], item.note, "Explanation", index + 6));
      questions.push(question(`Choose the version that avoids the original punctuation error.`, item.correct, item.distractors, item.note, "Error check", index + 7));
      questions.push(question(`Which answer would earn full marks in a punctuation quiz?`, item.correct, item.distractors, item.note, "Assessment", index + 8));
      questions.push(question(`What is the best corrected sentence?`, item.correct, item.distractors, item.note, "Correction", index + 9));
    });

    return padToSize(questions);
  }

  function buildParallelism() {
    const items = [
      {
        prompt: "He likes reading, to swim, and cycling.",
        correct: "He likes reading, swimming, and cycling.",
        distractors: ["He likes read, swimming, and cycling.", "He likes reading, swim, and cycling.", "He likes to reading, swimming, and cycle."],
        note: "Parallel items need matching grammatical form.",
      },
      {
        prompt: "The workshop focused on grammar, writing clearly, and revision.",
        correct: "The workshop focused on grammar, clear writing, and revision.",
        distractors: ["The workshop focused on grammar, writing clearly, and revising.", "The workshop focused on grammar, to write clearly, and revision.", "The workshop focused on grammar and writing clearly revision."],
        note: "The list items should be balanced.",
      },
      {
        prompt: "Riya's essays are stronger than the class.",
        correct: "Riya's essays are stronger than the class's essays.",
        distractors: ["Riya's essays are stronger than the class are.", "Riya's essays are stronger than the class writing.", "Riya's essays are stronger than of the class."],
        note: "Compare like with like: essays with essays.",
      },
      {
        prompt: "The report was concise, persuasive, and it was easy to follow.",
        correct: "The report was concise, persuasive, and easy to follow.",
        distractors: ["The report was concise, persuasion, and easy to follow.", "The report was concise and persuasive, and following easily.", "The report concise, persuasive, and it was easy to follow."],
        note: "The coordinated adjectives and phrase should align.",
      },
      {
        prompt: "Nobody in the team edits better than she.",
        correct: "Nobody in the team edits better than she does.",
        distractors: ["Nobody in the team edits better than her.", "Nobody in the team edits better than she editing.", "Nobody in the team edits better than she do."],
        note: "The comparison becomes clearer with the full verb.",
      },
      {
        prompt: "The course teaches students to analyze, revise, and careful editing.",
        correct: "The course teaches students to analyze, revise, and edit carefully.",
        distractors: ["The course teaches students analyzing, revise, and edit carefully.", "The course teaches students to analyze, revising, and careful editing.", "The course teaches students analysis, revise, and edit carefully."],
        note: "Keep the coordinated verbs in matching form.",
      },
    ];

    const questions = [];
    items.forEach((item, index) => {
      questions.push(question(`Choose the best parallel or logical revision of "${item.prompt}"`, item.correct, item.distractors, item.note, "Parallelism", index));
      questions.push(question(`Which version is balanced and grammatically sound?`, item.correct, item.distractors, item.note, "Balance", index + 1));
      questions.push(question(`A writer wants to fix "${item.prompt}". Which answer works best?`, item.correct, item.distractors, item.note, "Revision", index + 2));
      questions.push(question(`Which option keeps similar ideas in matching form?`, item.correct, item.distractors, item.note, "Matching form", index + 3));
      questions.push(question(`Which option would you keep after editing for parallel structure?`, item.correct, item.distractors, item.note, "Editing", index + 4));
      questions.push(question(`Choose the sentence with the clearest comparison or list structure.`, item.correct, item.distractors, item.note, "Clarity", index + 5));
      questions.push(question(`Which lesson rule applies?`, item.note, ["Comparisons should mix categories for variety.", "Parallelism is only about punctuation.", "Lists are clearer when the forms do not match."], item.note, "Explanation", index + 6));
      questions.push(question(`Select the standard English version of "${item.prompt}"`, item.correct, item.distractors, item.note, "Standard form", index + 7));
      questions.push(question(`Which answer avoids a faulty comparison or mixed structure?`, item.correct, item.distractors, item.note, "Error check", index + 8));
      questions.push(question(`Which sentence would score highest on an editing task?`, item.correct, item.distractors, item.note, "Assessment", index + 9));
    });

    return padToSize(questions);
  }

  function buildConcision() {
    const items = [
      {
        prompt: "We made a decision to postpone the event.",
        correct: "We decided to postpone the event.",
        distractors: ["We made the event postponed.", "There was a decision with regard to postponing the event.", "We did a postponement decision."],
        note: "A direct verb is usually more concise than a weak verb plus noun.",
      },
      {
        prompt: "The reason is because the schedule changed.",
        correct: "The reason is that the schedule changed.",
        distractors: ["The reason because the schedule changed is because.", "The reason is because of that the schedule changed.", "Because the reason is the schedule changed."],
        note: "Reason and because together create redundancy.",
      },
      {
        prompt: "The results were kind of bad.",
        correct: "The results were unsatisfactory.",
        distractors: ["The results were super bad.", "The results were not okay in a way.", "The results were bad kind of."],
        note: "Formal tone favors precise vocabulary over vague casual wording.",
      },
      {
        prompt: "There are many students who are in need of support.",
        correct: "Many students need support.",
        distractors: ["There are many students support need.", "Many students are being in need of support.", "Students support need many."],
        note: "Cut empty openers and choose stronger verbs.",
      },
      {
        prompt: "Basically, the report is actually really important.",
        correct: "The report is important.",
        distractors: ["Basically the report is really actually important.", "The report is basically actually of importance really.", "Actually the important report basically is."],
        note: "Remove stacked fillers unless they serve a real rhetorical purpose.",
      },
      {
        prompt: "In my opinion, I think the policy should change.",
        correct: "I think the policy should change.",
        distractors: ["In my opinion I think in my thought the policy should change.", "The policy should opinion change I think.", "I opinion think the policy should change."],
        note: "The sentence repeats the same stance marker twice.",
      },
    ];

    const questions = [];
    items.forEach((item, index) => {
      questions.push(question(`Choose the most concise or formal revision of "${item.prompt}"`, item.correct, item.distractors, item.note, "Concision", index));
      questions.push(question(`Which version is strongest for academic or professional writing?`, item.correct, item.distractors, item.note, "Formal tone", index + 1));
      questions.push(question(`A writer wants to cut clutter from "${item.prompt}". Which answer is best?`, item.correct, item.distractors, item.note, "Revision", index + 2));
      questions.push(question(`Select the clearest revision.`, item.correct, item.distractors, item.note, "Clarity", index + 3));
      questions.push(question(`Which option would you keep after editing for precision?`, item.correct, item.distractors, item.note, "Editing", index + 4));
      questions.push(question(`Which option removes redundancy or filler most effectively?`, item.correct, item.distractors, item.note, "Redundancy", index + 5));
      questions.push(question(`Which lesson rule applies?`, item.note, ["Formal style needs more filler words.", "Weak verb plus noun is always stronger than one clear verb.", "Repeating the same meaning makes formal writing clearer."], item.note, "Explanation", index + 6));
      questions.push(question(`Choose the sentence that sounds appropriately formal.`, item.correct, item.distractors, item.note, "Register", index + 7));
      questions.push(question(`Which revision keeps the meaning but improves the style?`, item.correct, item.distractors, item.note, "Style", index + 8));
      questions.push(question(`Which answer best fits the lesson on concision?`, item.correct, item.distractors, item.note, "Lesson focus", index + 9));
    });

    return padToSize(questions);
  }

  function buildEditingDrills() {
    const items = [
      {
        prompt: "She don't knows the answer.",
        correct: "She doesn't know the answer.",
        distractors: ["She don't know the answer.", "She doesn't knows the answer.", "She not know the answer."],
        note: "The auxiliary carries the tense and agreement; the main verb stays in base form.",
      },
      {
        prompt: "The students was revising in library.",
        correct: "The students were revising in the library.",
        distractors: ["The students was revising in the library.", "The students were revise in library.", "The student were revising in the library."],
        note: "Fix agreement and article use together.",
      },
      {
        prompt: "He suggested me to rewrite the introduction.",
        correct: "He suggested rewriting the introduction.",
        distractors: ["He suggested me rewrite the introduction.", "He suggested to rewrite the introduction me.", "He suggested that to rewrite the introduction."],
        note: "Suggest is not followed by object plus infinitive.",
      },
      {
        prompt: "There is many reasons to practice grammar.",
        correct: "There are many reasons to practice grammar.",
        distractors: ["There is many reason to practice grammar.", "There are many reason to practice grammar.", "There many reasons are to practice grammar."],
        note: "The verb agrees with the plural noun reasons.",
      },
      {
        prompt: "I have seen him yesterday.",
        correct: "I saw him yesterday.",
        distractors: ["I have saw him yesterday.", "I seen him yesterday.", "I have seeing him yesterday."],
        note: "Finished time expressions call for the past simple, not the present perfect.",
      },
      {
        prompt: "Why you left early?",
        correct: "Why did you leave early?",
        distractors: ["Why you did leave early?", "Why do you left early?", "Why did you left early?"],
        note: "Past simple questions require did plus the base verb.",
      },
    ];

    const questions = [];
    items.forEach((item, index) => {
      questions.push(question(`Choose the best correction for "${item.prompt}"`, item.correct, item.distractors, item.note, "Correction", index));
      questions.push(question(`Which edited sentence is right?`, item.correct, item.distractors, item.note, "Editing", index + 1));
      questions.push(question(`A teacher marks "${item.prompt}" as incorrect. Which revision should the student use?`, item.correct, item.distractors, item.note, "Teacher feedback", index + 2));
      questions.push(question(`Which answer fixes the grammar error?`, item.correct, item.distractors, item.note, "Error fix", index + 3));
      questions.push(question(`Choose the standard English version of "${item.prompt}"`, item.correct, item.distractors, item.note, "Standard form", index + 4));
      questions.push(question(`Which answer would earn full credit on an editing task?`, item.correct, item.distractors, item.note, "Assessment", index + 5));
      questions.push(question(`Which lesson note explains the edit?`, item.note, ["Errors should be corrected without checking the rule.", "Articles never matter in editing tasks.", "Questions in the past simple do not use auxiliaries."], item.note, "Explanation", index + 6));
      questions.push(question(`Which option best rewrites "${item.prompt}" for accuracy?`, item.correct, item.distractors, item.note, "Accuracy", index + 7));
      questions.push(question(`What is the strongest correction?`, item.correct, item.distractors, item.note, "Revision", index + 8));
      questions.push(question(`Which version should stay after proofreading?`, item.correct, item.distractors, item.note, "Proofreading", index + 9));
    });

    return padToSize(questions);
  }

  function buildTransformations() {
    const items = [
      {
        prompt: "It is not necessary to arrive early.",
        correct: "You do not have to arrive early.",
        distractors: ["You must not arrive early.", "You should not maybe arrive early.", "You are arriving not early."],
        note: "Do not have to expresses lack of necessity, not prohibition.",
      },
      {
        prompt: "Perhaps he forgot the deadline.",
        correct: "He might have forgotten the deadline.",
        distractors: ["He might forgot the deadline.", "He may forgetting the deadline.", "He has might forgotten the deadline."],
        note: "Use a modal of possibility with the perfect infinitive.",
      },
      {
        prompt: "She is the best editor in the team.",
        correct: "Nobody in the team edits better than she does.",
        distractors: ["Nobody in the team edits better than she.", "Nobody in the team is editing than her.", "She edits the best than nobody."],
        note: "The comparative transformation keeps the original meaning.",
      },
      {
        prompt: "If I had enough time, I would join the workshop.",
        correct: "This is a second conditional sentence.",
        distractors: ["This is a first conditional sentence.", "This is a zero conditional sentence.", "This is reported speech."],
        note: "Past form in the if-clause plus would marks second conditional meaning.",
      },
      {
        prompt: "You must not park here.",
        correct: "You are not allowed to park here.",
        distractors: ["You do not have to park here.", "You might not park here.", "You can not maybe park here."],
        note: "Must not expresses prohibition.",
      },
      {
        prompt: "Neither of the answers ___ correct.",
        correct: "is",
        distractors: ["are", "were", "be"],
        note: "Neither is singular in formal standard grammar.",
      },
    ];

    const questions = [];
    items.forEach((item, index) => {
      questions.push(question(`Choose the best transformation or completion for: "${item.prompt}"`, item.correct, item.distractors, item.note, "Transformation", index));
      questions.push(question(`Which answer keeps the meaning closest to the original?`, item.correct, item.distractors, item.note, "Meaning match", index + 1));
      questions.push(question(`Select the best grammar-based answer.`, item.correct, item.distractors, item.note, "Grammar", index + 2));
      questions.push(question(`A learner needs to rewrite "${item.prompt}". Which option works?`, item.correct, item.distractors, item.note, "Rewrite", index + 3));
      questions.push(question(`Which answer would score well in a transformation task?`, item.correct, item.distractors, item.note, "Assessment", index + 4));
      questions.push(question(`Which option should stay after checking meaning and form?`, item.correct, item.distractors, item.note, "Accuracy", index + 5));
      questions.push(question(`Which lesson note explains the correct answer?`, item.note, ["Transformation tasks allow a small meaning change.", "Must not means lack of necessity.", "Conditional types do not depend on verb form."], item.note, "Explanation", index + 6));
      questions.push(question(`Choose the strongest response to this cloze or transformation prompt: "${item.prompt}"`, item.correct, item.distractors, item.note, "Response", index + 7));
      questions.push(question(`Which answer fits the structure and the meaning?`, item.correct, item.distractors, item.note, "Structure", index + 8));
      questions.push(question(`Which option is best for exam-style grammar practice?`, item.correct, item.distractors, item.note, "Exam style", index + 9));
    });

    return padToSize(questions);
  }

  function buildMixedReview() {
    const lessonOrder = [
      "parts-of-speech",
      "sentence-structure",
      "articles-nouns",
      "present-family",
      "past-and-present-perfect",
      "future-perfect-modals",
      "subject-verb-agreement",
      "pronouns-questions-negatives",
      "prepositions-modifiers",
      "clauses-and-relatives",
      "conditionals",
      "reported-speech",
      "punctuation-clarity",
      "parallelism-comparison",
      "concision-formal-tone",
      "editing-drills",
      "transformations-and-cloze",
    ];

    const generators = builderMap;
    const mixed = [];
    lessonOrder.forEach((lessonId) => {
      mixed.push(...generators[lessonId]().slice(0, 4));
    });
    return padToSize(mixed);
  }

  const builderMap = {
    "parts-of-speech": buildPartsOfSpeech,
    "sentence-structure": buildSentenceStructure,
    "articles-nouns": buildArticles,
    "present-family": buildPresentFamily,
    "past-and-present-perfect": buildPastPresentPerfect,
    "future-perfect-modals": buildFutureModals,
    "subject-verb-agreement": buildAgreement,
    "pronouns-questions-negatives": buildPronounsQuestionsNegatives,
    "prepositions-modifiers": buildPrepositionsModifiers,
    "clauses-and-relatives": buildClausesRelatives,
    "conditionals": buildConditionals,
    "reported-speech": buildReportedSpeech,
    "punctuation-clarity": buildPunctuation,
    "parallelism-comparison": buildParallelism,
    "concision-formal-tone": buildConcision,
    "editing-drills": buildEditingDrills,
    "transformations-and-cloze": buildTransformations,
    "final-review": buildMixedReview,
  };

  window.GrammarAtlasQuizBank = {
    getQuiz(lessonId) {
      const builder = builderMap[lessonId];
      return builder ? builder() : buildMixedReview();
    },
  };
})();
