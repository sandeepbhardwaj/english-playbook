// Recovered quiz data from the pre-migration portal.
// Source commit: 15503d0

export interface QuizBankQuestion {
  prompt: string;
  options: string[];
  correctIndex: number;
  explanation: string;
  tag: string;
  difficulty?: string;
  sequence?: number;
}

export interface QuizBankModes {
  standard: QuizBankQuestion[];
  advanced: QuizBankQuestion[];
}

const historicQuizBank: Record<string, QuizBankModes> = {
  "parts-of-speech": {
    "standard": [
      {
        "prompt": "In the sentence \"The curious student quickly opened the grammar book.\" what is the part of speech of \"quickly\"?",
        "options": [
          "adverb",
          "adjective",
          "noun",
          "preposition"
        ],
        "correctIndex": 0,
        "explanation": "Quickly modifies the verb opened.",
        "tag": "Word class",
        "difficulty": "Basic",
        "sequence": 1
      },
      {
        "prompt": "Choose the best grammatical label for \"quickly\" in \"The curious student quickly opened the grammar book.\"",
        "options": [
          "adjective",
          "noun",
          "preposition",
          "adverb"
        ],
        "correctIndex": 3,
        "explanation": "Quickly modifies the verb opened.",
        "tag": "Word class",
        "difficulty": "Basic",
        "sequence": 2
      },
      {
        "prompt": "Which category does \"quickly\" belong to in this sentence: \"The curious student quickly opened the grammar book.\"?",
        "options": [
          "noun",
          "preposition",
          "adverb",
          "adjective"
        ],
        "correctIndex": 2,
        "explanation": "Quickly modifies the verb opened.",
        "tag": "Word class",
        "difficulty": "Basic",
        "sequence": 3
      },
      {
        "prompt": "What job does \"quickly\" perform in \"The curious student quickly opened the grammar book.\"?",
        "options": [
          "preposition",
          "adverb",
          "adjective",
          "noun"
        ],
        "correctIndex": 1,
        "explanation": "Quickly modifies the verb opened.",
        "tag": "Function",
        "difficulty": "Basic",
        "sequence": 4
      },
      {
        "prompt": "Which answer correctly identifies \"quickly\" in context? \"The curious student quickly opened the grammar book.\"",
        "options": [
          "adverb",
          "adjective",
          "noun",
          "preposition"
        ],
        "correctIndex": 0,
        "explanation": "Quickly modifies the verb opened.",
        "tag": "Context",
        "difficulty": "Basic",
        "sequence": 5
      },
      {
        "prompt": "If you were labeling the sentence \"The curious student quickly opened the grammar book.\", how would you classify \"quickly\"?",
        "options": [
          "adjective",
          "noun",
          "preposition",
          "adverb"
        ],
        "correctIndex": 3,
        "explanation": "Quickly modifies the verb opened.",
        "tag": "Labeling",
        "difficulty": "Basic",
        "sequence": 6
      },
      {
        "prompt": "Grammar check: \"quickly\" is acting as which part of speech in \"The curious student quickly opened the grammar book.\"?",
        "options": [
          "noun",
          "preposition",
          "adverb",
          "adjective"
        ],
        "correctIndex": 2,
        "explanation": "Quickly modifies the verb opened.",
        "tag": "Grammar check",
        "difficulty": "Basic",
        "sequence": 7
      },
      {
        "prompt": "Which role best matches \"quickly\" in the sentence \"The curious student quickly opened the grammar book.\"?",
        "options": [
          "preposition",
          "adverb",
          "adjective",
          "noun"
        ],
        "correctIndex": 1,
        "explanation": "Quickly modifies the verb opened.",
        "tag": "Role",
        "difficulty": "Basic",
        "sequence": 8
      },
      {
        "prompt": "A student labels \"quickly\" in \"The curious student quickly opened the grammar book.\". Which label is correct?",
        "options": [
          "adverb",
          "adjective",
          "noun",
          "preposition"
        ],
        "correctIndex": 0,
        "explanation": "Quickly modifies the verb opened.",
        "tag": "Student view",
        "difficulty": "Basic",
        "sequence": 9
      },
      {
        "prompt": "To analyze \"The curious student quickly opened the grammar book.\" accurately, what should \"quickly\" be called?",
        "options": [
          "adjective",
          "noun",
          "preposition",
          "adverb"
        ],
        "correctIndex": 3,
        "explanation": "Quickly modifies the verb opened.",
        "tag": "Analysis",
        "difficulty": "Basic",
        "sequence": 10
      },
      {
        "prompt": "In the sentence \"These notebooks belong to our class.\" what is the part of speech of \"These\"?",
        "options": [
          "pronoun",
          "adverb",
          "verb",
          "determiner"
        ],
        "correctIndex": 3,
        "explanation": "These introduces the noun notebooks.",
        "tag": "Word class",
        "difficulty": "Basic",
        "sequence": 11
      },
      {
        "prompt": "Choose the best grammatical label for \"These\" in \"These notebooks belong to our class.\"",
        "options": [
          "adverb",
          "verb",
          "determiner",
          "pronoun"
        ],
        "correctIndex": 2,
        "explanation": "These introduces the noun notebooks.",
        "tag": "Word class",
        "difficulty": "Basic",
        "sequence": 12
      },
      {
        "prompt": "Which category does \"These\" belong to in this sentence: \"These notebooks belong to our class.\"?",
        "options": [
          "verb",
          "determiner",
          "pronoun",
          "adverb"
        ],
        "correctIndex": 1,
        "explanation": "These introduces the noun notebooks.",
        "tag": "Word class",
        "difficulty": "Basic",
        "sequence": 13
      },
      {
        "prompt": "What job does \"These\" perform in \"These notebooks belong to our class.\"?",
        "options": [
          "determiner",
          "pronoun",
          "adverb",
          "verb"
        ],
        "correctIndex": 0,
        "explanation": "These introduces the noun notebooks.",
        "tag": "Function",
        "difficulty": "Basic",
        "sequence": 14
      },
      {
        "prompt": "Which answer correctly identifies \"These\" in context? \"These notebooks belong to our class.\"",
        "options": [
          "pronoun",
          "adverb",
          "verb",
          "determiner"
        ],
        "correctIndex": 3,
        "explanation": "These introduces the noun notebooks.",
        "tag": "Context",
        "difficulty": "Basic",
        "sequence": 15
      },
      {
        "prompt": "If you were labeling the sentence \"These notebooks belong to our class.\", how would you classify \"These\"?",
        "options": [
          "adverb",
          "verb",
          "determiner",
          "pronoun"
        ],
        "correctIndex": 2,
        "explanation": "These introduces the noun notebooks.",
        "tag": "Labeling",
        "difficulty": "Basic",
        "sequence": 16
      },
      {
        "prompt": "Grammar check: \"These\" is acting as which part of speech in \"These notebooks belong to our class.\"?",
        "options": [
          "verb",
          "determiner",
          "pronoun",
          "adverb"
        ],
        "correctIndex": 1,
        "explanation": "These introduces the noun notebooks.",
        "tag": "Grammar check",
        "difficulty": "Basic",
        "sequence": 17
      },
      {
        "prompt": "Which role best matches \"These\" in the sentence \"These notebooks belong to our class.\"?",
        "options": [
          "determiner",
          "pronoun",
          "adverb",
          "verb"
        ],
        "correctIndex": 0,
        "explanation": "These introduces the noun notebooks.",
        "tag": "Role",
        "difficulty": "Basic",
        "sequence": 18
      },
      {
        "prompt": "A student labels \"These\" in \"These notebooks belong to our class.\". Which label is correct?",
        "options": [
          "pronoun",
          "adverb",
          "verb",
          "determiner"
        ],
        "correctIndex": 3,
        "explanation": "These introduces the noun notebooks.",
        "tag": "Student view",
        "difficulty": "Basic",
        "sequence": 19
      },
      {
        "prompt": "To analyze \"These notebooks belong to our class.\" accurately, what should \"These\" be called?",
        "options": [
          "adverb",
          "verb",
          "determiner",
          "pronoun"
        ],
        "correctIndex": 2,
        "explanation": "These introduces the noun notebooks.",
        "tag": "Analysis",
        "difficulty": "Basic",
        "sequence": 20
      },
      {
        "prompt": "In the sentence \"Although she was tired, Maya finished her homework.\" what is the part of speech of \"Although\"?",
        "options": [
          "noun",
          "adjective",
          "conjunction",
          "preposition"
        ],
        "correctIndex": 2,
        "explanation": "Although joins a dependent clause to the main clause.",
        "tag": "Word class",
        "difficulty": "Intermediate",
        "sequence": 21
      },
      {
        "prompt": "Choose the best grammatical label for \"Although\" in \"Although she was tired, Maya finished her homework.\"",
        "options": [
          "adjective",
          "conjunction",
          "preposition",
          "noun"
        ],
        "correctIndex": 1,
        "explanation": "Although joins a dependent clause to the main clause.",
        "tag": "Word class",
        "difficulty": "Intermediate",
        "sequence": 22
      },
      {
        "prompt": "Which category does \"Although\" belong to in this sentence: \"Although she was tired, Maya finished her homework.\"?",
        "options": [
          "conjunction",
          "preposition",
          "noun",
          "adjective"
        ],
        "correctIndex": 0,
        "explanation": "Although joins a dependent clause to the main clause.",
        "tag": "Word class",
        "difficulty": "Intermediate",
        "sequence": 23
      },
      {
        "prompt": "What job does \"Although\" perform in \"Although she was tired, Maya finished her homework.\"?",
        "options": [
          "preposition",
          "noun",
          "adjective",
          "conjunction"
        ],
        "correctIndex": 3,
        "explanation": "Although joins a dependent clause to the main clause.",
        "tag": "Function",
        "difficulty": "Intermediate",
        "sequence": 24
      },
      {
        "prompt": "Which answer correctly identifies \"Although\" in context? \"Although she was tired, Maya finished her homework.\"",
        "options": [
          "noun",
          "adjective",
          "conjunction",
          "preposition"
        ],
        "correctIndex": 2,
        "explanation": "Although joins a dependent clause to the main clause.",
        "tag": "Context",
        "difficulty": "Intermediate",
        "sequence": 25
      },
      {
        "prompt": "If you were labeling the sentence \"Although she was tired, Maya finished her homework.\", how would you classify \"Although\"?",
        "options": [
          "adjective",
          "conjunction",
          "preposition",
          "noun"
        ],
        "correctIndex": 1,
        "explanation": "Although joins a dependent clause to the main clause.",
        "tag": "Labeling",
        "difficulty": "Intermediate",
        "sequence": 26
      },
      {
        "prompt": "Grammar check: \"Although\" is acting as which part of speech in \"Although she was tired, Maya finished her homework.\"?",
        "options": [
          "conjunction",
          "preposition",
          "noun",
          "adjective"
        ],
        "correctIndex": 0,
        "explanation": "Although joins a dependent clause to the main clause.",
        "tag": "Grammar check",
        "difficulty": "Intermediate",
        "sequence": 27
      },
      {
        "prompt": "Which role best matches \"Although\" in the sentence \"Although she was tired, Maya finished her homework.\"?",
        "options": [
          "preposition",
          "noun",
          "adjective",
          "conjunction"
        ],
        "correctIndex": 3,
        "explanation": "Although joins a dependent clause to the main clause.",
        "tag": "Role",
        "difficulty": "Intermediate",
        "sequence": 28
      },
      {
        "prompt": "A student labels \"Although\" in \"Although she was tired, Maya finished her homework.\". Which label is correct?",
        "options": [
          "noun",
          "adjective",
          "conjunction",
          "preposition"
        ],
        "correctIndex": 2,
        "explanation": "Although joins a dependent clause to the main clause.",
        "tag": "Student view",
        "difficulty": "Intermediate",
        "sequence": 29
      },
      {
        "prompt": "To analyze \"Although she was tired, Maya finished her homework.\" accurately, what should \"Although\" be called?",
        "options": [
          "adjective",
          "conjunction",
          "preposition",
          "noun"
        ],
        "correctIndex": 1,
        "explanation": "Although joins a dependent clause to the main clause.",
        "tag": "Analysis",
        "difficulty": "Intermediate",
        "sequence": 30
      },
      {
        "prompt": "In the sentence \"Her final answer was surprisingly clear.\" what is the part of speech of \"final\"?",
        "options": [
          "pronoun",
          "adjective",
          "adverb",
          "noun"
        ],
        "correctIndex": 1,
        "explanation": "Final describes the noun answer.",
        "tag": "Word class",
        "difficulty": "Intermediate",
        "sequence": 31
      },
      {
        "prompt": "Choose the best grammatical label for \"final\" in \"Her final answer was surprisingly clear.\"",
        "options": [
          "adjective",
          "adverb",
          "noun",
          "pronoun"
        ],
        "correctIndex": 0,
        "explanation": "Final describes the noun answer.",
        "tag": "Word class",
        "difficulty": "Intermediate",
        "sequence": 32
      },
      {
        "prompt": "Which category does \"final\" belong to in this sentence: \"Her final answer was surprisingly clear.\"?",
        "options": [
          "adverb",
          "noun",
          "pronoun",
          "adjective"
        ],
        "correctIndex": 3,
        "explanation": "Final describes the noun answer.",
        "tag": "Word class",
        "difficulty": "Intermediate",
        "sequence": 33
      },
      {
        "prompt": "What job does \"final\" perform in \"Her final answer was surprisingly clear.\"?",
        "options": [
          "noun",
          "pronoun",
          "adjective",
          "adverb"
        ],
        "correctIndex": 2,
        "explanation": "Final describes the noun answer.",
        "tag": "Function",
        "difficulty": "Intermediate",
        "sequence": 34
      },
      {
        "prompt": "Which answer correctly identifies \"final\" in context? \"Her final answer was surprisingly clear.\"",
        "options": [
          "pronoun",
          "adjective",
          "adverb",
          "noun"
        ],
        "correctIndex": 1,
        "explanation": "Final describes the noun answer.",
        "tag": "Context",
        "difficulty": "Intermediate",
        "sequence": 35
      },
      {
        "prompt": "If you were labeling the sentence \"Her final answer was surprisingly clear.\", how would you classify \"final\"?",
        "options": [
          "adjective",
          "adverb",
          "noun",
          "pronoun"
        ],
        "correctIndex": 0,
        "explanation": "Final describes the noun answer.",
        "tag": "Labeling",
        "difficulty": "Intermediate",
        "sequence": 36
      },
      {
        "prompt": "Grammar check: \"final\" is acting as which part of speech in \"Her final answer was surprisingly clear.\"?",
        "options": [
          "adverb",
          "noun",
          "pronoun",
          "adjective"
        ],
        "correctIndex": 3,
        "explanation": "Final describes the noun answer.",
        "tag": "Grammar check",
        "difficulty": "Intermediate",
        "sequence": 37
      },
      {
        "prompt": "Which role best matches \"final\" in the sentence \"Her final answer was surprisingly clear.\"?",
        "options": [
          "noun",
          "pronoun",
          "adjective",
          "adverb"
        ],
        "correctIndex": 2,
        "explanation": "Final describes the noun answer.",
        "tag": "Role",
        "difficulty": "Intermediate",
        "sequence": 38
      },
      {
        "prompt": "A student labels \"final\" in \"Her final answer was surprisingly clear.\". Which label is correct?",
        "options": [
          "pronoun",
          "adjective",
          "adverb",
          "noun"
        ],
        "correctIndex": 1,
        "explanation": "Final describes the noun answer.",
        "tag": "Student view",
        "difficulty": "Intermediate",
        "sequence": 39
      },
      {
        "prompt": "To analyze \"Her final answer was surprisingly clear.\" accurately, what should \"final\" be called?",
        "options": [
          "adjective",
          "adverb",
          "noun",
          "pronoun"
        ],
        "correctIndex": 0,
        "explanation": "Final describes the noun answer.",
        "tag": "Analysis",
        "difficulty": "Intermediate",
        "sequence": 40
      },
      {
        "prompt": "In the sentence \"We solved the puzzle after dinner.\" what is the part of speech of \"after\"?",
        "options": [
          "preposition",
          "adverb",
          "verb",
          "determiner"
        ],
        "correctIndex": 0,
        "explanation": "After introduces the noun dinner.",
        "tag": "Word class",
        "difficulty": "Advanced",
        "sequence": 41
      },
      {
        "prompt": "Choose the best grammatical label for \"after\" in \"We solved the puzzle after dinner.\"",
        "options": [
          "adverb",
          "verb",
          "determiner",
          "preposition"
        ],
        "correctIndex": 3,
        "explanation": "After introduces the noun dinner.",
        "tag": "Word class",
        "difficulty": "Advanced",
        "sequence": 42
      },
      {
        "prompt": "Which category does \"after\" belong to in this sentence: \"We solved the puzzle after dinner.\"?",
        "options": [
          "verb",
          "determiner",
          "preposition",
          "adverb"
        ],
        "correctIndex": 2,
        "explanation": "After introduces the noun dinner.",
        "tag": "Word class",
        "difficulty": "Advanced",
        "sequence": 43
      },
      {
        "prompt": "What job does \"after\" perform in \"We solved the puzzle after dinner.\"?",
        "options": [
          "determiner",
          "preposition",
          "adverb",
          "verb"
        ],
        "correctIndex": 1,
        "explanation": "After introduces the noun dinner.",
        "tag": "Function",
        "difficulty": "Advanced",
        "sequence": 44
      },
      {
        "prompt": "Which answer correctly identifies \"after\" in context? \"We solved the puzzle after dinner.\"",
        "options": [
          "preposition",
          "adverb",
          "verb",
          "determiner"
        ],
        "correctIndex": 0,
        "explanation": "After introduces the noun dinner.",
        "tag": "Context",
        "difficulty": "Advanced",
        "sequence": 45
      },
      {
        "prompt": "If you were labeling the sentence \"We solved the puzzle after dinner.\", how would you classify \"after\"?",
        "options": [
          "adverb",
          "verb",
          "determiner",
          "preposition"
        ],
        "correctIndex": 3,
        "explanation": "After introduces the noun dinner.",
        "tag": "Labeling",
        "difficulty": "Advanced",
        "sequence": 46
      },
      {
        "prompt": "Grammar check: \"after\" is acting as which part of speech in \"We solved the puzzle after dinner.\"?",
        "options": [
          "verb",
          "determiner",
          "preposition",
          "adverb"
        ],
        "correctIndex": 2,
        "explanation": "After introduces the noun dinner.",
        "tag": "Grammar check",
        "difficulty": "Advanced",
        "sequence": 47
      },
      {
        "prompt": "Which role best matches \"after\" in the sentence \"We solved the puzzle after dinner.\"?",
        "options": [
          "determiner",
          "preposition",
          "adverb",
          "verb"
        ],
        "correctIndex": 1,
        "explanation": "After introduces the noun dinner.",
        "tag": "Role",
        "difficulty": "Advanced",
        "sequence": 48
      },
      {
        "prompt": "A student labels \"after\" in \"We solved the puzzle after dinner.\". Which label is correct?",
        "options": [
          "preposition",
          "adverb",
          "verb",
          "determiner"
        ],
        "correctIndex": 0,
        "explanation": "After introduces the noun dinner.",
        "tag": "Student view",
        "difficulty": "Advanced",
        "sequence": 49
      },
      {
        "prompt": "To analyze \"We solved the puzzle after dinner.\" accurately, what should \"after\" be called?",
        "options": [
          "adverb",
          "verb",
          "determiner",
          "preposition"
        ],
        "correctIndex": 3,
        "explanation": "After introduces the noun dinner.",
        "tag": "Analysis",
        "difficulty": "Advanced",
        "sequence": 50
      },
      {
        "prompt": "In the sentence \"Book a table before the guests arrive.\" what is the part of speech of \"Book\"?",
        "options": [
          "noun",
          "adjective",
          "conjunction",
          "verb"
        ],
        "correctIndex": 3,
        "explanation": "Here book means reserve, so it functions as a verb.",
        "tag": "Word class",
        "difficulty": "Advanced",
        "sequence": 51
      },
      {
        "prompt": "Choose the best grammatical label for \"Book\" in \"Book a table before the guests arrive.\"",
        "options": [
          "adjective",
          "conjunction",
          "verb",
          "noun"
        ],
        "correctIndex": 2,
        "explanation": "Here book means reserve, so it functions as a verb.",
        "tag": "Word class",
        "difficulty": "Advanced",
        "sequence": 52
      },
      {
        "prompt": "Which category does \"Book\" belong to in this sentence: \"Book a table before the guests arrive.\"?",
        "options": [
          "conjunction",
          "verb",
          "noun",
          "adjective"
        ],
        "correctIndex": 1,
        "explanation": "Here book means reserve, so it functions as a verb.",
        "tag": "Word class",
        "difficulty": "Advanced",
        "sequence": 53
      },
      {
        "prompt": "What job does \"Book\" perform in \"Book a table before the guests arrive.\"?",
        "options": [
          "verb",
          "noun",
          "adjective",
          "conjunction"
        ],
        "correctIndex": 0,
        "explanation": "Here book means reserve, so it functions as a verb.",
        "tag": "Function",
        "difficulty": "Advanced",
        "sequence": 54
      },
      {
        "prompt": "Which answer correctly identifies \"Book\" in context? \"Book a table before the guests arrive.\"",
        "options": [
          "noun",
          "adjective",
          "conjunction",
          "verb"
        ],
        "correctIndex": 3,
        "explanation": "Here book means reserve, so it functions as a verb.",
        "tag": "Context",
        "difficulty": "Advanced",
        "sequence": 55
      },
      {
        "prompt": "If you were labeling the sentence \"Book a table before the guests arrive.\", how would you classify \"Book\"?",
        "options": [
          "adjective",
          "conjunction",
          "verb",
          "noun"
        ],
        "correctIndex": 2,
        "explanation": "Here book means reserve, so it functions as a verb.",
        "tag": "Labeling",
        "difficulty": "Advanced",
        "sequence": 56
      },
      {
        "prompt": "Grammar check: \"Book\" is acting as which part of speech in \"Book a table before the guests arrive.\"?",
        "options": [
          "conjunction",
          "verb",
          "noun",
          "adjective"
        ],
        "correctIndex": 1,
        "explanation": "Here book means reserve, so it functions as a verb.",
        "tag": "Grammar check",
        "difficulty": "Advanced",
        "sequence": 57
      },
      {
        "prompt": "Which role best matches \"Book\" in the sentence \"Book a table before the guests arrive.\"?",
        "options": [
          "verb",
          "noun",
          "adjective",
          "conjunction"
        ],
        "correctIndex": 0,
        "explanation": "Here book means reserve, so it functions as a verb.",
        "tag": "Role",
        "difficulty": "Advanced",
        "sequence": 58
      },
      {
        "prompt": "A student labels \"Book\" in \"Book a table before the guests arrive.\". Which label is correct?",
        "options": [
          "noun",
          "adjective",
          "conjunction",
          "verb"
        ],
        "correctIndex": 3,
        "explanation": "Here book means reserve, so it functions as a verb.",
        "tag": "Student view",
        "difficulty": "Advanced",
        "sequence": 59
      },
      {
        "prompt": "To analyze \"Book a table before the guests arrive.\" accurately, what should \"Book\" be called?",
        "options": [
          "adjective",
          "conjunction",
          "verb",
          "noun"
        ],
        "correctIndex": 2,
        "explanation": "Here book means reserve, so it functions as a verb.",
        "tag": "Analysis",
        "difficulty": "Advanced",
        "sequence": 60
      }
    ],
    "advanced": [
      {
        "prompt": "Choose the best grammatical label for \"quickly\" in \"The curious student quickly opened the grammar book.\"",
        "options": [
          "adjective",
          "noun",
          "preposition",
          "adverb"
        ],
        "correctIndex": 3,
        "explanation": "Quickly modifies the verb opened.",
        "tag": "Word class",
        "difficulty": "Review Challenge",
        "sequence": 1
      },
      {
        "prompt": "Which answer correctly identifies \"quickly\" in context? \"The curious student quickly opened the grammar book.\"",
        "options": [
          "adverb",
          "adjective",
          "noun",
          "preposition"
        ],
        "correctIndex": 0,
        "explanation": "Quickly modifies the verb opened.",
        "tag": "Context",
        "difficulty": "Review Challenge",
        "sequence": 2
      },
      {
        "prompt": "Which role best matches \"quickly\" in the sentence \"The curious student quickly opened the grammar book.\"?",
        "options": [
          "preposition",
          "adverb",
          "adjective",
          "noun"
        ],
        "correctIndex": 1,
        "explanation": "Quickly modifies the verb opened.",
        "tag": "Role",
        "difficulty": "Review Challenge",
        "sequence": 3
      },
      {
        "prompt": "A student labels \"quickly\" in \"The curious student quickly opened the grammar book.\". Which label is correct?",
        "options": [
          "adverb",
          "adjective",
          "noun",
          "preposition"
        ],
        "correctIndex": 0,
        "explanation": "Quickly modifies the verb opened.",
        "tag": "Student view",
        "difficulty": "Review Challenge",
        "sequence": 4
      },
      {
        "prompt": "To analyze \"The curious student quickly opened the grammar book.\" accurately, what should \"quickly\" be called?",
        "options": [
          "adjective",
          "noun",
          "preposition",
          "adverb"
        ],
        "correctIndex": 3,
        "explanation": "Quickly modifies the verb opened.",
        "tag": "Analysis",
        "difficulty": "Review Challenge",
        "sequence": 5
      },
      {
        "prompt": "Choose the best grammatical label for \"These\" in \"These notebooks belong to our class.\"",
        "options": [
          "adverb",
          "verb",
          "determiner",
          "pronoun"
        ],
        "correctIndex": 2,
        "explanation": "These introduces the noun notebooks.",
        "tag": "Word class",
        "difficulty": "Review Challenge",
        "sequence": 6
      },
      {
        "prompt": "Which focus best matches the main learning challenge in \"Parts of Speech\"?",
        "options": [
          "Build complete sentences with subjects, verbs, and clear complements.",
          "Use a, an, the, some, and zero article correctly.",
          "Choose between routine meaning and action happening around now.",
          "Identify the job each word does inside a sentence."
        ],
        "correctIndex": 3,
        "explanation": "The focus of this lesson is: Identify the job each word does inside a sentence.",
        "tag": "Advanced focus",
        "difficulty": "Review Challenge",
        "sequence": 7
      },
      {
        "prompt": "Which rule belongs most directly to \"Parts of Speech\"?",
        "options": [
          "Determiners such as the, a, this, and many signal which noun you mean.",
          "Prepositions show relationships between nouns and other words (in, on, at, before, after).",
          "A noun names a person, place, thing, or idea, while a verb shows action or state.",
          "Adjectives describe nouns; adverbs usually modify verbs, adjectives, or other adverbs."
        ],
        "correctIndex": 2,
        "explanation": "A noun names a person, place, thing, or idea, while a verb shows action or state.",
        "tag": "Rule distinction",
        "difficulty": "Review Challenge",
        "sequence": 8
      },
      {
        "prompt": "Which editing warning is most important to remember in \"Parts of Speech\"?",
        "options": [
          {
            "wrong": "Book me a table at restaurant.",
            "right": "Book me a table at the restaurant.",
            "note": "The definite article the is often needed before nouns."
          },
          {
            "wrong": "I have a friendly meeting tomorrow.",
            "right": "I have a friendly meeting tomorrow.",
            "note": "Friendly is an adjective here, not an adverb, so no -ly suffix needed."
          },
          {
            "wrong": "He ran quick to the store.",
            "right": "He ran quickly to the store.",
            "note": "Adverbs modify verbs; use quickly, not quick."
          },
          {
            "wrong": "The news is exciting. She is exciting.",
            "right": "The news is exciting. She is excited.",
            "note": "Use the -ed adjective for the person's feeling, -ing for the thing's quality."
          }
        ],
        "correctIndex": 1,
        "explanation": {
          "wrong": "I have a friendly meeting tomorrow.",
          "right": "I have a friendly meeting tomorrow.",
          "note": "Friendly is an adjective here, not an adverb, so no -ly suffix needed."
        },
        "tag": "Pitfall check",
        "difficulty": "Review Challenge",
        "sequence": 9
      },
      {
        "prompt": "Which practice move best extends the lesson after you finish the core explanation?",
        "options": [
          "Exercise 1 - Labeling: Read a paragraph and mark each word with its part of speech (noun, verb, adj, adv, etc.)",
          "Exercise 2 - Identification: Identify the target word class in each sentence: 'Find the adverb that modifies ran.'",
          "Exercise 3 - Word Transformation: Transform words to different classes (run→runner→running; quick→quickly)",
          "Exercise 4 - Pairing: Create 10 pairs showing the same word used as two different parts of speech"
        ],
        "correctIndex": 0,
        "explanation": "Exercise 1 - Labeling: Read a paragraph and mark each word with its part of speech (noun, verb, adj, adv, etc.)",
        "tag": "Practice transfer",
        "difficulty": "Review Challenge",
        "sequence": 10
      },
      {
        "prompt": "Which explanation best matches this model sentence from \"Parts of Speech\"? \"The curious student quickly opened the grammar book.\"",
        "options": [
          "She (pronoun), carefully (adverb), explained (verb), importance (noun)",
          "Although (conjunction), raining (verb form), we (pronoun), near (preposition), mountain (noun)",
          "My (determiner), friend (noun), plays and writes (verbs), and (conjunction), songs (noun)",
          "student (noun), curious (adjective), quickly (adverb), opened (verb)"
        ],
        "correctIndex": 3,
        "explanation": "student (noun), curious (adjective), quickly (adverb), opened (verb)",
        "tag": "Example analysis",
        "difficulty": "Review Challenge",
        "sequence": 11
      },
      {
        "prompt": "Which objective belongs to \"Parts of Speech\"?",
        "options": [
          "Explain why the same word can behave differently across contexts.",
          "Distinguish complete clauses from fragments.",
          "Recognize the major word classes in authentic sentences.",
          "Separate form from function when a word changes category by use."
        ],
        "correctIndex": 2,
        "explanation": "Recognize the major word classes in authentic sentences.",
        "tag": "Objective check",
        "difficulty": "Review Challenge",
        "sequence": 12
      },
      {
        "prompt": "Which portfolio task best fits the module that contains \"Parts of Speech\"?",
        "options": [
          "Write a multi-paragraph response using at least one relative clause, one conditional, one reported statement, and one verb-pattern contrast.",
          "Write a 150-word self-introduction and label nouns, verbs, articles, and sentence types.",
          "Write a three-part narrative using present, past, and future meaning accurately.",
          "Edit an old paragraph only for sentence-level accuracy and annotate each correction."
        ],
        "correctIndex": 1,
        "explanation": "Write a 150-word self-introduction and label nouns, verbs, articles, and sentence types.",
        "tag": "Portfolio transfer",
        "difficulty": "Review Challenge",
        "sequence": 13
      },
      {
        "prompt": "Which module description best fits the context of \"Parts of Speech\"?",
        "options": [
          "Build a clean base in word classes, sentence architecture, and noun phrases before moving into more advanced control.",
          "Learn how English grammar maps routine, action-in-progress, experience, finished time, future reference, and modal meaning.",
          "Strengthen agreement, pronoun reference, auxiliary use, pattern control, and active-passive choices.",
          "Use clauses, relative structures, conditionals, reported speech, and verb patterns to communicate more complex relationships."
        ],
        "correctIndex": 0,
        "explanation": "Build a clean base in word classes, sentence architecture, and noun phrases before moving into more advanced control.",
        "tag": "Module alignment",
        "difficulty": "Review Challenge",
        "sequence": 14
      },
      {
        "prompt": "Which reading insight best matches the story work in \"Parts of Speech\"?",
        "options": [
          "Visits, walks, looking, shows, answer, select, stands are action verbs showing what people do.",
          "Busy, colorful, fresh, ripe describe nouns (busy market, colorful stalls).",
          "Quickly, eagerly, happily, proudly, carefully, patiently modify verbs, showing HOW actions happen.",
          "Market (noun), Saturday (noun), Maya (noun) are the main subjects and objects."
        ],
        "correctIndex": 3,
        "explanation": "Market (noun), Saturday (noun), Maya (noun) are the main subjects and objects.",
        "tag": "Story analysis",
        "difficulty": "Review Challenge",
        "sequence": 15
      },
      {
        "prompt": "In the sentence \"The curious student quickly opened the grammar book.\" what is the part of speech of \"quickly\"?",
        "options": [
          "adverb",
          "adjective",
          "noun",
          "preposition"
        ],
        "correctIndex": 0,
        "explanation": "Quickly modifies the verb opened.",
        "tag": "Word class",
        "difficulty": "Review Challenge",
        "sequence": 16
      },
      {
        "prompt": "Which category does \"quickly\" belong to in this sentence: \"The curious student quickly opened the grammar book.\"?",
        "options": [
          "noun",
          "preposition",
          "adverb",
          "adjective"
        ],
        "correctIndex": 2,
        "explanation": "Quickly modifies the verb opened.",
        "tag": "Word class",
        "difficulty": "Review Challenge",
        "sequence": 17
      },
      {
        "prompt": "What job does \"quickly\" perform in \"The curious student quickly opened the grammar book.\"?",
        "options": [
          "preposition",
          "adverb",
          "adjective",
          "noun"
        ],
        "correctIndex": 1,
        "explanation": "Quickly modifies the verb opened.",
        "tag": "Function",
        "difficulty": "Review Challenge",
        "sequence": 18
      },
      {
        "prompt": "If you were labeling the sentence \"The curious student quickly opened the grammar book.\", how would you classify \"quickly\"?",
        "options": [
          "adjective",
          "noun",
          "preposition",
          "adverb"
        ],
        "correctIndex": 3,
        "explanation": "Quickly modifies the verb opened.",
        "tag": "Labeling",
        "difficulty": "Review Challenge",
        "sequence": 19
      },
      {
        "prompt": "Grammar check: \"quickly\" is acting as which part of speech in \"The curious student quickly opened the grammar book.\"?",
        "options": [
          "noun",
          "preposition",
          "adverb",
          "adjective"
        ],
        "correctIndex": 2,
        "explanation": "Quickly modifies the verb opened.",
        "tag": "Grammar check",
        "difficulty": "Review Challenge",
        "sequence": 20
      }
    ]
  },
  "sentence-structure": {
    "standard": [
      {
        "prompt": "How should \"While the rain continued.\" be classified?",
        "options": [
          "fragment",
          "complete sentence",
          "run-on",
          "question"
        ],
        "correctIndex": 0,
        "explanation": "The clause begins with a subordinator and needs a main clause.",
        "tag": "Classification",
        "difficulty": "Basic",
        "sequence": 1
      },
      {
        "prompt": "Which label best fits this string of words: \"While the rain continued.\"?",
        "options": [
          "complete sentence",
          "run-on",
          "question",
          "fragment"
        ],
        "correctIndex": 3,
        "explanation": "The clause begins with a subordinator and needs a main clause.",
        "tag": "Classification",
        "difficulty": "Basic",
        "sequence": 2
      },
      {
        "prompt": "A grammar student sees \"While the rain continued.\". What kind of structure is it?",
        "options": [
          "run-on",
          "question",
          "fragment",
          "complete sentence"
        ],
        "correctIndex": 2,
        "explanation": "The clause begins with a subordinator and needs a main clause.",
        "tag": "Structure",
        "difficulty": "Basic",
        "sequence": 3
      },
      {
        "prompt": "Which answer correctly describes \"While the rain continued.\"?",
        "options": [
          "question",
          "fragment",
          "complete sentence",
          "run-on"
        ],
        "correctIndex": 1,
        "explanation": "The clause begins with a subordinator and needs a main clause.",
        "tag": "Structure",
        "difficulty": "Basic",
        "sequence": 4
      },
      {
        "prompt": "What is the main issue, if any, in \"While the rain continued.\"?",
        "options": [
          "fragment",
          "complete sentence",
          "run-on",
          "question"
        ],
        "correctIndex": 0,
        "explanation": "The clause begins with a subordinator and needs a main clause.",
        "tag": "Error type",
        "difficulty": "Basic",
        "sequence": 5
      },
      {
        "prompt": "If you were checking sentence completeness, how would you mark \"While the rain continued.\"?",
        "options": [
          "complete sentence",
          "run-on",
          "question",
          "fragment"
        ],
        "correctIndex": 3,
        "explanation": "The clause begins with a subordinator and needs a main clause.",
        "tag": "Sentence check",
        "difficulty": "Basic",
        "sequence": 6
      },
      {
        "prompt": "Which revision best handles \"While the rain continued.\"?",
        "options": [
          "Add another comma only",
          "Remove the verb",
          "While the rain continued, the team stayed inside.",
          "Leave it as it is"
        ],
        "correctIndex": 2,
        "explanation": "The clause begins with a subordinator and needs a main clause.",
        "tag": "Revision",
        "difficulty": "Basic",
        "sequence": 7
      },
      {
        "prompt": "Choose the best grammatical response to \"While the rain continued.\"",
        "options": [
          "Remove the main verb entirely",
          "While the rain continued, the team stayed inside.",
          "Leave a dependent clause on its own",
          "Join ideas with only a comma"
        ],
        "correctIndex": 1,
        "explanation": "The clause begins with a subordinator and needs a main clause.",
        "tag": "Revision",
        "difficulty": "Basic",
        "sequence": 8
      },
      {
        "prompt": "What would make \"While the rain continued.\" acceptable if it is not already?",
        "options": [
          "While the rain continued, the team stayed inside.",
          "Add only another comma",
          "Keep the clause incomplete",
          "Change one word but keep the structure broken"
        ],
        "correctIndex": 0,
        "explanation": "The clause begins with a subordinator and needs a main clause.",
        "tag": "Repair",
        "difficulty": "Basic",
        "sequence": 9
      },
      {
        "prompt": "Which explanation is accurate for \"While the rain continued.\"?",
        "options": [
          "Length alone makes a sentence complete.",
          "A capital letter and period are enough to make it correct.",
          "Any clause beginning with because can stand alone.",
          "The clause begins with a subordinator and needs a main clause."
        ],
        "correctIndex": 3,
        "explanation": "The clause begins with a subordinator and needs a main clause.",
        "tag": "Reasoning",
        "difficulty": "Basic",
        "sequence": 10
      },
      {
        "prompt": "How should \"The team presented the final draft.\" be classified?",
        "options": [
          "fragment",
          "run-on",
          "dependent clause",
          "complete sentence"
        ],
        "correctIndex": 3,
        "explanation": "The sentence has a subject and a finite verb and stands alone.",
        "tag": "Classification",
        "difficulty": "Basic",
        "sequence": 11
      },
      {
        "prompt": "Which label best fits this string of words: \"The team presented the final draft.\"?",
        "options": [
          "run-on",
          "dependent clause",
          "complete sentence",
          "fragment"
        ],
        "correctIndex": 2,
        "explanation": "The sentence has a subject and a finite verb and stands alone.",
        "tag": "Classification",
        "difficulty": "Basic",
        "sequence": 12
      },
      {
        "prompt": "A grammar student sees \"The team presented the final draft.\". What kind of structure is it?",
        "options": [
          "dependent clause",
          "complete sentence",
          "fragment",
          "run-on"
        ],
        "correctIndex": 1,
        "explanation": "The sentence has a subject and a finite verb and stands alone.",
        "tag": "Structure",
        "difficulty": "Basic",
        "sequence": 13
      },
      {
        "prompt": "Which answer correctly describes \"The team presented the final draft.\"?",
        "options": [
          "complete sentence",
          "fragment",
          "run-on",
          "dependent clause"
        ],
        "correctIndex": 0,
        "explanation": "The sentence has a subject and a finite verb and stands alone.",
        "tag": "Structure",
        "difficulty": "Basic",
        "sequence": 14
      },
      {
        "prompt": "What is the main issue, if any, in \"The team presented the final draft.\"?",
        "options": [
          "fragment",
          "run-on",
          "dependent clause",
          "complete sentence"
        ],
        "correctIndex": 3,
        "explanation": "The sentence has a subject and a finite verb and stands alone.",
        "tag": "Error type",
        "difficulty": "Basic",
        "sequence": 15
      },
      {
        "prompt": "If you were checking sentence completeness, how would you mark \"The team presented the final draft.\"?",
        "options": [
          "run-on",
          "dependent clause",
          "complete sentence",
          "fragment"
        ],
        "correctIndex": 2,
        "explanation": "The sentence has a subject and a finite verb and stands alone.",
        "tag": "Sentence check",
        "difficulty": "Basic",
        "sequence": 16
      },
      {
        "prompt": "Which revision best handles \"The team presented the final draft.\"?",
        "options": [
          "Remove the verb",
          "The sentence is already complete.",
          "Leave it as it is",
          "Add another comma only"
        ],
        "correctIndex": 1,
        "explanation": "The sentence has a subject and a finite verb and stands alone.",
        "tag": "Revision",
        "difficulty": "Basic",
        "sequence": 17
      },
      {
        "prompt": "Choose the best grammatical response to \"The team presented the final draft.\"",
        "options": [
          "The sentence is already complete.",
          "Leave a dependent clause on its own",
          "Join ideas with only a comma",
          "Remove the main verb entirely"
        ],
        "correctIndex": 0,
        "explanation": "The sentence has a subject and a finite verb and stands alone.",
        "tag": "Revision",
        "difficulty": "Basic",
        "sequence": 18
      },
      {
        "prompt": "What would make \"The team presented the final draft.\" acceptable if it is not already?",
        "options": [
          "Add only another comma",
          "Keep the clause incomplete",
          "Change one word but keep the structure broken",
          "The sentence is already complete."
        ],
        "correctIndex": 3,
        "explanation": "The sentence has a subject and a finite verb and stands alone.",
        "tag": "Repair",
        "difficulty": "Basic",
        "sequence": 19
      },
      {
        "prompt": "Which explanation is accurate for \"The team presented the final draft.\"?",
        "options": [
          "A capital letter and period are enough to make it correct.",
          "Any clause beginning with because can stand alone.",
          "The sentence has a subject and a finite verb and stands alone.",
          "Length alone makes a sentence complete."
        ],
        "correctIndex": 2,
        "explanation": "The sentence has a subject and a finite verb and stands alone.",
        "tag": "Reasoning",
        "difficulty": "Basic",
        "sequence": 20
      },
      {
        "prompt": "How should \"I revised the essay I checked the citations.\" be classified?",
        "options": [
          "fragment",
          "phrase",
          "run-on",
          "complete sentence"
        ],
        "correctIndex": 2,
        "explanation": "Two independent clauses are joined without proper punctuation or conjunction.",
        "tag": "Classification",
        "difficulty": "Intermediate",
        "sequence": 21
      },
      {
        "prompt": "Which label best fits this string of words: \"I revised the essay I checked the citations.\"?",
        "options": [
          "phrase",
          "run-on",
          "complete sentence",
          "fragment"
        ],
        "correctIndex": 1,
        "explanation": "Two independent clauses are joined without proper punctuation or conjunction.",
        "tag": "Classification",
        "difficulty": "Intermediate",
        "sequence": 22
      },
      {
        "prompt": "A grammar student sees \"I revised the essay I checked the citations.\". What kind of structure is it?",
        "options": [
          "run-on",
          "complete sentence",
          "fragment",
          "phrase"
        ],
        "correctIndex": 0,
        "explanation": "Two independent clauses are joined without proper punctuation or conjunction.",
        "tag": "Structure",
        "difficulty": "Intermediate",
        "sequence": 23
      },
      {
        "prompt": "Which answer correctly describes \"I revised the essay I checked the citations.\"?",
        "options": [
          "complete sentence",
          "fragment",
          "phrase",
          "run-on"
        ],
        "correctIndex": 3,
        "explanation": "Two independent clauses are joined without proper punctuation or conjunction.",
        "tag": "Structure",
        "difficulty": "Intermediate",
        "sequence": 24
      },
      {
        "prompt": "What is the main issue, if any, in \"I revised the essay I checked the citations.\"?",
        "options": [
          "fragment",
          "phrase",
          "run-on",
          "complete sentence"
        ],
        "correctIndex": 2,
        "explanation": "Two independent clauses are joined without proper punctuation or conjunction.",
        "tag": "Error type",
        "difficulty": "Intermediate",
        "sequence": 25
      },
      {
        "prompt": "If you were checking sentence completeness, how would you mark \"I revised the essay I checked the citations.\"?",
        "options": [
          "phrase",
          "run-on",
          "complete sentence",
          "fragment"
        ],
        "correctIndex": 1,
        "explanation": "Two independent clauses are joined without proper punctuation or conjunction.",
        "tag": "Sentence check",
        "difficulty": "Intermediate",
        "sequence": 26
      },
      {
        "prompt": "Which revision best handles \"I revised the essay I checked the citations.\"?",
        "options": [
          "I revised the essay, and I checked the citations.",
          "Leave it as it is",
          "Add another comma only",
          "Remove the verb"
        ],
        "correctIndex": 0,
        "explanation": "Two independent clauses are joined without proper punctuation or conjunction.",
        "tag": "Revision",
        "difficulty": "Intermediate",
        "sequence": 27
      },
      {
        "prompt": "Choose the best grammatical response to \"I revised the essay I checked the citations.\"",
        "options": [
          "Leave a dependent clause on its own",
          "Join ideas with only a comma",
          "Remove the main verb entirely",
          "I revised the essay, and I checked the citations."
        ],
        "correctIndex": 3,
        "explanation": "Two independent clauses are joined without proper punctuation or conjunction.",
        "tag": "Revision",
        "difficulty": "Intermediate",
        "sequence": 28
      },
      {
        "prompt": "What would make \"I revised the essay I checked the citations.\" acceptable if it is not already?",
        "options": [
          "Keep the clause incomplete",
          "Change one word but keep the structure broken",
          "I revised the essay, and I checked the citations.",
          "Add only another comma"
        ],
        "correctIndex": 2,
        "explanation": "Two independent clauses are joined without proper punctuation or conjunction.",
        "tag": "Repair",
        "difficulty": "Intermediate",
        "sequence": 29
      },
      {
        "prompt": "Which explanation is accurate for \"I revised the essay I checked the citations.\"?",
        "options": [
          "Any clause beginning with because can stand alone.",
          "Two independent clauses are joined without proper punctuation or conjunction.",
          "Length alone makes a sentence complete.",
          "A capital letter and period are enough to make it correct."
        ],
        "correctIndex": 1,
        "explanation": "Two independent clauses are joined without proper punctuation or conjunction.",
        "tag": "Reasoning",
        "difficulty": "Intermediate",
        "sequence": 30
      },
      {
        "prompt": "How should \"Because our notes were missing.\" be classified?",
        "options": [
          "imperative sentence",
          "fragment",
          "complete sentence",
          "run-on"
        ],
        "correctIndex": 1,
        "explanation": "Because creates a dependent clause, so the thought is incomplete alone.",
        "tag": "Classification",
        "difficulty": "Intermediate",
        "sequence": 31
      },
      {
        "prompt": "Which label best fits this string of words: \"Because our notes were missing.\"?",
        "options": [
          "fragment",
          "complete sentence",
          "run-on",
          "imperative sentence"
        ],
        "correctIndex": 0,
        "explanation": "Because creates a dependent clause, so the thought is incomplete alone.",
        "tag": "Classification",
        "difficulty": "Intermediate",
        "sequence": 32
      },
      {
        "prompt": "A grammar student sees \"Because our notes were missing.\". What kind of structure is it?",
        "options": [
          "complete sentence",
          "run-on",
          "imperative sentence",
          "fragment"
        ],
        "correctIndex": 3,
        "explanation": "Because creates a dependent clause, so the thought is incomplete alone.",
        "tag": "Structure",
        "difficulty": "Intermediate",
        "sequence": 33
      },
      {
        "prompt": "Which answer correctly describes \"Because our notes were missing.\"?",
        "options": [
          "run-on",
          "imperative sentence",
          "fragment",
          "complete sentence"
        ],
        "correctIndex": 2,
        "explanation": "Because creates a dependent clause, so the thought is incomplete alone.",
        "tag": "Structure",
        "difficulty": "Intermediate",
        "sequence": 34
      },
      {
        "prompt": "What is the main issue, if any, in \"Because our notes were missing.\"?",
        "options": [
          "imperative sentence",
          "fragment",
          "complete sentence",
          "run-on"
        ],
        "correctIndex": 1,
        "explanation": "Because creates a dependent clause, so the thought is incomplete alone.",
        "tag": "Error type",
        "difficulty": "Intermediate",
        "sequence": 35
      },
      {
        "prompt": "If you were checking sentence completeness, how would you mark \"Because our notes were missing.\"?",
        "options": [
          "fragment",
          "complete sentence",
          "run-on",
          "imperative sentence"
        ],
        "correctIndex": 0,
        "explanation": "Because creates a dependent clause, so the thought is incomplete alone.",
        "tag": "Sentence check",
        "difficulty": "Intermediate",
        "sequence": 36
      },
      {
        "prompt": "Which revision best handles \"Because our notes were missing.\"?",
        "options": [
          "Leave it as it is",
          "Add another comma only",
          "Remove the verb",
          "Because our notes were missing, we borrowed copies."
        ],
        "correctIndex": 3,
        "explanation": "Because creates a dependent clause, so the thought is incomplete alone.",
        "tag": "Revision",
        "difficulty": "Intermediate",
        "sequence": 37
      },
      {
        "prompt": "Choose the best grammatical response to \"Because our notes were missing.\"",
        "options": [
          "Join ideas with only a comma",
          "Remove the main verb entirely",
          "Because our notes were missing, we borrowed copies.",
          "Leave a dependent clause on its own"
        ],
        "correctIndex": 2,
        "explanation": "Because creates a dependent clause, so the thought is incomplete alone.",
        "tag": "Revision",
        "difficulty": "Intermediate",
        "sequence": 38
      },
      {
        "prompt": "What would make \"Because our notes were missing.\" acceptable if it is not already?",
        "options": [
          "Change one word but keep the structure broken",
          "Because our notes were missing, we borrowed copies.",
          "Add only another comma",
          "Keep the clause incomplete"
        ],
        "correctIndex": 1,
        "explanation": "Because creates a dependent clause, so the thought is incomplete alone.",
        "tag": "Repair",
        "difficulty": "Intermediate",
        "sequence": 39
      },
      {
        "prompt": "Which explanation is accurate for \"Because our notes were missing.\"?",
        "options": [
          "Because creates a dependent clause, so the thought is incomplete alone.",
          "Length alone makes a sentence complete.",
          "A capital letter and period are enough to make it correct.",
          "Any clause beginning with because can stand alone."
        ],
        "correctIndex": 0,
        "explanation": "Because creates a dependent clause, so the thought is incomplete alone.",
        "tag": "Reasoning",
        "difficulty": "Intermediate",
        "sequence": 40
      },
      {
        "prompt": "How should \"The meeting ended early.\" be classified?",
        "options": [
          "complete sentence",
          "fragment",
          "run-on",
          "prepositional phrase"
        ],
        "correctIndex": 0,
        "explanation": "This is a simple but complete clause.",
        "tag": "Classification",
        "difficulty": "Advanced",
        "sequence": 41
      },
      {
        "prompt": "Which label best fits this string of words: \"The meeting ended early.\"?",
        "options": [
          "fragment",
          "run-on",
          "prepositional phrase",
          "complete sentence"
        ],
        "correctIndex": 3,
        "explanation": "This is a simple but complete clause.",
        "tag": "Classification",
        "difficulty": "Advanced",
        "sequence": 42
      },
      {
        "prompt": "A grammar student sees \"The meeting ended early.\". What kind of structure is it?",
        "options": [
          "run-on",
          "prepositional phrase",
          "complete sentence",
          "fragment"
        ],
        "correctIndex": 2,
        "explanation": "This is a simple but complete clause.",
        "tag": "Structure",
        "difficulty": "Advanced",
        "sequence": 43
      },
      {
        "prompt": "Which answer correctly describes \"The meeting ended early.\"?",
        "options": [
          "prepositional phrase",
          "complete sentence",
          "fragment",
          "run-on"
        ],
        "correctIndex": 1,
        "explanation": "This is a simple but complete clause.",
        "tag": "Structure",
        "difficulty": "Advanced",
        "sequence": 44
      },
      {
        "prompt": "What is the main issue, if any, in \"The meeting ended early.\"?",
        "options": [
          "complete sentence",
          "fragment",
          "run-on",
          "prepositional phrase"
        ],
        "correctIndex": 0,
        "explanation": "This is a simple but complete clause.",
        "tag": "Error type",
        "difficulty": "Advanced",
        "sequence": 45
      },
      {
        "prompt": "If you were checking sentence completeness, how would you mark \"The meeting ended early.\"?",
        "options": [
          "fragment",
          "run-on",
          "prepositional phrase",
          "complete sentence"
        ],
        "correctIndex": 3,
        "explanation": "This is a simple but complete clause.",
        "tag": "Sentence check",
        "difficulty": "Advanced",
        "sequence": 46
      },
      {
        "prompt": "Which revision best handles \"The meeting ended early.\"?",
        "options": [
          "Add another comma only",
          "Remove the verb",
          "The sentence is already complete.",
          "Leave it as it is"
        ],
        "correctIndex": 2,
        "explanation": "This is a simple but complete clause.",
        "tag": "Revision",
        "difficulty": "Advanced",
        "sequence": 47
      },
      {
        "prompt": "Choose the best grammatical response to \"The meeting ended early.\"",
        "options": [
          "Remove the main verb entirely",
          "The sentence is already complete.",
          "Leave a dependent clause on its own",
          "Join ideas with only a comma"
        ],
        "correctIndex": 1,
        "explanation": "This is a simple but complete clause.",
        "tag": "Revision",
        "difficulty": "Advanced",
        "sequence": 48
      },
      {
        "prompt": "What would make \"The meeting ended early.\" acceptable if it is not already?",
        "options": [
          "The sentence is already complete.",
          "Add only another comma",
          "Keep the clause incomplete",
          "Change one word but keep the structure broken"
        ],
        "correctIndex": 0,
        "explanation": "This is a simple but complete clause.",
        "tag": "Repair",
        "difficulty": "Advanced",
        "sequence": 49
      },
      {
        "prompt": "Which explanation is accurate for \"The meeting ended early.\"?",
        "options": [
          "Length alone makes a sentence complete.",
          "A capital letter and period are enough to make it correct.",
          "Any clause beginning with because can stand alone.",
          "This is a simple but complete clause."
        ],
        "correctIndex": 3,
        "explanation": "This is a simple but complete clause.",
        "tag": "Reasoning",
        "difficulty": "Advanced",
        "sequence": 50
      },
      {
        "prompt": "How should \"We were late, the doors had already closed.\" be classified?",
        "options": [
          "fragment",
          "complete sentence",
          "noun phrase",
          "run-on"
        ],
        "correctIndex": 3,
        "explanation": "The comma alone cannot join two independent clauses here.",
        "tag": "Classification",
        "difficulty": "Advanced",
        "sequence": 51
      },
      {
        "prompt": "Which label best fits this string of words: \"We were late, the doors had already closed.\"?",
        "options": [
          "complete sentence",
          "noun phrase",
          "run-on",
          "fragment"
        ],
        "correctIndex": 2,
        "explanation": "The comma alone cannot join two independent clauses here.",
        "tag": "Classification",
        "difficulty": "Advanced",
        "sequence": 52
      },
      {
        "prompt": "A grammar student sees \"We were late, the doors had already closed.\". What kind of structure is it?",
        "options": [
          "noun phrase",
          "run-on",
          "fragment",
          "complete sentence"
        ],
        "correctIndex": 1,
        "explanation": "The comma alone cannot join two independent clauses here.",
        "tag": "Structure",
        "difficulty": "Advanced",
        "sequence": 53
      },
      {
        "prompt": "Which answer correctly describes \"We were late, the doors had already closed.\"?",
        "options": [
          "run-on",
          "fragment",
          "complete sentence",
          "noun phrase"
        ],
        "correctIndex": 0,
        "explanation": "The comma alone cannot join two independent clauses here.",
        "tag": "Structure",
        "difficulty": "Advanced",
        "sequence": 54
      },
      {
        "prompt": "What is the main issue, if any, in \"We were late, the doors had already closed.\"?",
        "options": [
          "fragment",
          "complete sentence",
          "noun phrase",
          "run-on"
        ],
        "correctIndex": 3,
        "explanation": "The comma alone cannot join two independent clauses here.",
        "tag": "Error type",
        "difficulty": "Advanced",
        "sequence": 55
      },
      {
        "prompt": "If you were checking sentence completeness, how would you mark \"We were late, the doors had already closed.\"?",
        "options": [
          "complete sentence",
          "noun phrase",
          "run-on",
          "fragment"
        ],
        "correctIndex": 2,
        "explanation": "The comma alone cannot join two independent clauses here.",
        "tag": "Sentence check",
        "difficulty": "Advanced",
        "sequence": 56
      },
      {
        "prompt": "Which revision best handles \"We were late, the doors had already closed.\"?",
        "options": [
          "Remove the verb",
          "We were late, so the doors had already closed. / We were late; the doors had already closed.",
          "Leave it as it is",
          "Add another comma only"
        ],
        "correctIndex": 1,
        "explanation": "The comma alone cannot join two independent clauses here.",
        "tag": "Revision",
        "difficulty": "Advanced",
        "sequence": 57
      },
      {
        "prompt": "Choose the best grammatical response to \"We were late, the doors had already closed.\"",
        "options": [
          "We were late, so the doors had already closed. / We were late; the doors had already closed.",
          "Leave a dependent clause on its own",
          "Join ideas with only a comma",
          "Remove the main verb entirely"
        ],
        "correctIndex": 0,
        "explanation": "The comma alone cannot join two independent clauses here.",
        "tag": "Revision",
        "difficulty": "Advanced",
        "sequence": 58
      },
      {
        "prompt": "What would make \"We were late, the doors had already closed.\" acceptable if it is not already?",
        "options": [
          "Add only another comma",
          "Keep the clause incomplete",
          "Change one word but keep the structure broken",
          "We were late, so the doors had already closed. / We were late; the doors had already closed."
        ],
        "correctIndex": 3,
        "explanation": "The comma alone cannot join two independent clauses here.",
        "tag": "Repair",
        "difficulty": "Advanced",
        "sequence": 59
      },
      {
        "prompt": "Which explanation is accurate for \"We were late, the doors had already closed.\"?",
        "options": [
          "A capital letter and period are enough to make it correct.",
          "Any clause beginning with because can stand alone.",
          "The comma alone cannot join two independent clauses here.",
          "Length alone makes a sentence complete."
        ],
        "correctIndex": 2,
        "explanation": "The comma alone cannot join two independent clauses here.",
        "tag": "Reasoning",
        "difficulty": "Advanced",
        "sequence": 60
      }
    ],
    "advanced": [
      {
        "prompt": "Which label best fits this string of words: \"While the rain continued.\"?",
        "options": [
          "complete sentence",
          "run-on",
          "question",
          "fragment"
        ],
        "correctIndex": 3,
        "explanation": "The clause begins with a subordinator and needs a main clause.",
        "tag": "Classification",
        "difficulty": "Review Challenge",
        "sequence": 1
      },
      {
        "prompt": "Which answer correctly describes \"While the rain continued.\"?",
        "options": [
          "question",
          "fragment",
          "complete sentence",
          "run-on"
        ],
        "correctIndex": 1,
        "explanation": "The clause begins with a subordinator and needs a main clause.",
        "tag": "Structure",
        "difficulty": "Review Challenge",
        "sequence": 2
      },
      {
        "prompt": "Which revision best handles \"While the rain continued.\"?",
        "options": [
          "Add another comma only",
          "Remove the verb",
          "While the rain continued, the team stayed inside.",
          "Leave it as it is"
        ],
        "correctIndex": 2,
        "explanation": "The clause begins with a subordinator and needs a main clause.",
        "tag": "Revision",
        "difficulty": "Review Challenge",
        "sequence": 3
      },
      {
        "prompt": "Choose the best grammatical response to \"While the rain continued.\"",
        "options": [
          "Remove the main verb entirely",
          "While the rain continued, the team stayed inside.",
          "Leave a dependent clause on its own",
          "Join ideas with only a comma"
        ],
        "correctIndex": 1,
        "explanation": "The clause begins with a subordinator and needs a main clause.",
        "tag": "Revision",
        "difficulty": "Review Challenge",
        "sequence": 4
      },
      {
        "prompt": "Which explanation is accurate for \"While the rain continued.\"?",
        "options": [
          "Length alone makes a sentence complete.",
          "A capital letter and period are enough to make it correct.",
          "Any clause beginning with because can stand alone.",
          "The clause begins with a subordinator and needs a main clause."
        ],
        "correctIndex": 3,
        "explanation": "The clause begins with a subordinator and needs a main clause.",
        "tag": "Reasoning",
        "difficulty": "Review Challenge",
        "sequence": 5
      },
      {
        "prompt": "Which label best fits this string of words: \"The team presented the final draft.\"?",
        "options": [
          "run-on",
          "dependent clause",
          "complete sentence",
          "fragment"
        ],
        "correctIndex": 2,
        "explanation": "The sentence has a subject and a finite verb and stands alone.",
        "tag": "Classification",
        "difficulty": "Review Challenge",
        "sequence": 6
      },
      {
        "prompt": "Which focus best matches the main learning challenge in \"Sentence Structure\"?",
        "options": [
          "Identify the job each word does inside a sentence.",
          "Use a, an, the, some, and zero article correctly.",
          "Choose between routine meaning and action happening around now.",
          "Build complete sentences with subjects, verbs, and clear complements."
        ],
        "correctIndex": 3,
        "explanation": "The focus of this lesson is: Build complete sentences with subjects, verbs, and clear complements.",
        "tag": "Advanced focus",
        "difficulty": "Review Challenge",
        "sequence": 7
      },
      {
        "prompt": "Which rule belongs most directly to \"Sentence Structure\"?",
        "options": [
          "Adjectives describe nouns; adverbs usually modify verbs, adjectives, or other adverbs.",
          "Determiners such as the, a, this, and many signal which noun you mean.",
          "A clause becomes a sentence only when it can stand on its own as a complete thought.",
          "A noun names a person, place, thing, or idea, while a verb shows action or state."
        ],
        "correctIndex": 2,
        "explanation": "A clause becomes a sentence only when it can stand on its own as a complete thought.",
        "tag": "Rule distinction",
        "difficulty": "Review Challenge",
        "sequence": 8
      },
      {
        "prompt": "Which editing warning is most important to remember in \"Sentence Structure\"?",
        "options": [
          {
            "wrong": "The news is exciting. She is exciting.",
            "right": "The news is exciting. She is excited.",
            "note": "Use the -ed adjective for the person's feeling, -ing for the thing's quality."
          },
          {
            "wrong": "Because the bus was late.",
            "right": "Because the bus was late, we missed the introduction.",
            "note": "Because... is a fragment. Add an independent clause."
          },
          {
            "wrong": "I have a friendly meeting tomorrow.",
            "right": "I have a friendly meeting tomorrow.",
            "note": "Friendly is an adjective here, not an adverb, so no -ly suffix needed."
          },
          {
            "wrong": "He ran quick to the store.",
            "right": "He ran quickly to the store.",
            "note": "Adverbs modify verbs; use quickly, not quick."
          }
        ],
        "correctIndex": 1,
        "explanation": {
          "wrong": "Because the bus was late.",
          "right": "Because the bus was late, we missed the introduction.",
          "note": "Because... is a fragment. Add an independent clause."
        },
        "tag": "Pitfall check",
        "difficulty": "Review Challenge",
        "sequence": 9
      },
      {
        "prompt": "Which practice move best extends the lesson after you finish the core explanation?",
        "options": [
          "Exercise 1 - Fragment Identification: Mark which sentences are complete and which are fragments.",
          "Exercise 1 - Labeling: Read a paragraph and mark each word with its part of speech (noun, verb, adj, adv, etc.)",
          "Exercise 2 - Identification: Identify the target word class in each sentence: 'Find the adverb that modifies ran.'",
          "Exercise 3 - Word Transformation: Transform words to different classes (run→runner→running; quick→quickly)"
        ],
        "correctIndex": 0,
        "explanation": "Exercise 1 - Fragment Identification: Mark which sentences are complete and which are fragments.",
        "tag": "Practice transfer",
        "difficulty": "Review Challenge",
        "sequence": 10
      },
      {
        "prompt": "Which explanation best matches this model sentence from \"Sentence Structure\"? \"The meeting ended early.\"",
        "options": [
          "student (noun), curious (adjective), quickly (adverb), opened (verb)",
          "She (pronoun), carefully (adverb), explained (verb), importance (noun)",
          "Although (conjunction), raining (verb form), we (pronoun), near (preposition), mountain (noun)",
          "Complete SV pattern: subject (meeting), verb (ended)."
        ],
        "correctIndex": 3,
        "explanation": "Complete SV pattern: subject (meeting), verb (ended).",
        "tag": "Example analysis",
        "difficulty": "Review Challenge",
        "sequence": 11
      },
      {
        "prompt": "Which objective belongs to \"Sentence Structure\"?",
        "options": [
          "Separate form from function when a word changes category by use.",
          "Explain why the same word can behave differently across contexts.",
          "Distinguish complete clauses from fragments.",
          "Recognize the major word classes in authentic sentences."
        ],
        "correctIndex": 2,
        "explanation": "Distinguish complete clauses from fragments.",
        "tag": "Objective check",
        "difficulty": "Review Challenge",
        "sequence": 12
      },
      {
        "prompt": "Which portfolio task best fits the module that contains \"Sentence Structure\"?",
        "options": [
          "Write a multi-paragraph response using at least one relative clause, one conditional, one reported statement, and one verb-pattern contrast.",
          "Write a 150-word self-introduction and label nouns, verbs, articles, and sentence types.",
          "Write a three-part narrative using present, past, and future meaning accurately.",
          "Edit an old paragraph only for sentence-level accuracy and annotate each correction."
        ],
        "correctIndex": 1,
        "explanation": "Write a 150-word self-introduction and label nouns, verbs, articles, and sentence types.",
        "tag": "Portfolio transfer",
        "difficulty": "Review Challenge",
        "sequence": 13
      },
      {
        "prompt": "Which module description best fits the context of \"Sentence Structure\"?",
        "options": [
          "Build a clean base in word classes, sentence architecture, and noun phrases before moving into more advanced control.",
          "Learn how English grammar maps routine, action-in-progress, experience, finished time, future reference, and modal meaning.",
          "Strengthen agreement, pronoun reference, auxiliary use, pattern control, and active-passive choices.",
          "Use clauses, relative structures, conditionals, reported speech, and verb patterns to communicate more complex relationships."
        ],
        "correctIndex": 0,
        "explanation": "Build a clean base in word classes, sentence architecture, and noun phrases before moving into more advanced control.",
        "tag": "Module alignment",
        "difficulty": "Review Challenge",
        "sequence": 14
      },
      {
        "prompt": "Which reading insight best matches the story work in \"Sentence Structure\"?",
        "options": [
          "Market (noun), Saturday (noun), Maya (noun) are the main subjects and objects.",
          "Visits, walks, looking, shows, answer, select, stands are action verbs showing what people do.",
          "Busy, colorful, fresh, ripe describe nouns (busy market, colorful stalls).",
          "Jamal decided is a simple sentence (subject + verb)."
        ],
        "correctIndex": 3,
        "explanation": "Jamal decided is a simple sentence (subject + verb).",
        "tag": "Story analysis",
        "difficulty": "Review Challenge",
        "sequence": 15
      },
      {
        "prompt": "How should \"While the rain continued.\" be classified?",
        "options": [
          "fragment",
          "complete sentence",
          "run-on",
          "question"
        ],
        "correctIndex": 0,
        "explanation": "The clause begins with a subordinator and needs a main clause.",
        "tag": "Classification",
        "difficulty": "Review Challenge",
        "sequence": 16
      },
      {
        "prompt": "A grammar student sees \"While the rain continued.\". What kind of structure is it?",
        "options": [
          "run-on",
          "question",
          "fragment",
          "complete sentence"
        ],
        "correctIndex": 2,
        "explanation": "The clause begins with a subordinator and needs a main clause.",
        "tag": "Structure",
        "difficulty": "Review Challenge",
        "sequence": 17
      },
      {
        "prompt": "What is the main issue, if any, in \"While the rain continued.\"?",
        "options": [
          "fragment",
          "complete sentence",
          "run-on",
          "question"
        ],
        "correctIndex": 0,
        "explanation": "The clause begins with a subordinator and needs a main clause.",
        "tag": "Error type",
        "difficulty": "Review Challenge",
        "sequence": 18
      },
      {
        "prompt": "If you were checking sentence completeness, how would you mark \"While the rain continued.\"?",
        "options": [
          "complete sentence",
          "run-on",
          "question",
          "fragment"
        ],
        "correctIndex": 3,
        "explanation": "The clause begins with a subordinator and needs a main clause.",
        "tag": "Sentence check",
        "difficulty": "Review Challenge",
        "sequence": 19
      },
      {
        "prompt": "What would make \"While the rain continued.\" acceptable if it is not already?",
        "options": [
          "While the rain continued, the team stayed inside.",
          "Add only another comma",
          "Keep the clause incomplete",
          "Change one word but keep the structure broken"
        ],
        "correctIndex": 0,
        "explanation": "The clause begins with a subordinator and needs a main clause.",
        "tag": "Repair",
        "difficulty": "Review Challenge",
        "sequence": 20
      }
    ]
  },
  "articles-nouns": {
    "standard": [
      {
        "prompt": "Choose the best article pattern: \"__ sun rises in the east.\"",
        "options": [
          "The",
          "A",
          "An",
          "No article"
        ],
        "correctIndex": 0,
        "explanation": "Sun is unique in normal context, so the is used.",
        "tag": "Articles",
        "difficulty": "Basic",
        "sequence": 1
      },
      {
        "prompt": "Which answer completes this noun phrase correctly? \"__ sun rises in the east.\"",
        "options": [
          "A",
          "An",
          "No article",
          "The"
        ],
        "correctIndex": 3,
        "explanation": "Sun is unique in normal context, so the is used.",
        "tag": "Noun phrase",
        "difficulty": "Basic",
        "sequence": 2
      },
      {
        "prompt": "Select the most natural article or determiner choice: \"__ sun rises in the east.\"",
        "options": [
          "An",
          "No article",
          "The",
          "A"
        ],
        "correctIndex": 2,
        "explanation": "Sun is unique in normal context, so the is used.",
        "tag": "Determiners",
        "difficulty": "Basic",
        "sequence": 3
      },
      {
        "prompt": "What is the correct article usage in \"__ sun rises in the east.\"",
        "options": [
          "No article",
          "The",
          "A",
          "An"
        ],
        "correctIndex": 1,
        "explanation": "Sun is unique in normal context, so the is used.",
        "tag": "Usage",
        "difficulty": "Basic",
        "sequence": 4
      },
      {
        "prompt": "A learner is unsure about \"__ sun rises in the east.\". Which answer is right?",
        "options": [
          "The",
          "A",
          "An",
          "No article"
        ],
        "correctIndex": 0,
        "explanation": "Sun is unique in normal context, so the is used.",
        "tag": "Learner check",
        "difficulty": "Basic",
        "sequence": 5
      },
      {
        "prompt": "Which option matches the grammar rule for \"__ sun rises in the east.\"",
        "options": [
          "A",
          "An",
          "No article",
          "The"
        ],
        "correctIndex": 3,
        "explanation": "Sun is unique in normal context, so the is used.",
        "tag": "Rule match",
        "difficulty": "Basic",
        "sequence": 6
      },
      {
        "prompt": "Which sentence completion is standard English? \"__ sun rises in the east.\"",
        "options": [
          "An",
          "No article",
          "The",
          "A"
        ],
        "correctIndex": 2,
        "explanation": "Sun is unique in normal context, so the is used.",
        "tag": "Standard use",
        "difficulty": "Basic",
        "sequence": 7
      },
      {
        "prompt": "Choose the form that respects countability and reference: \"__ sun rises in the east.\"",
        "options": [
          "No article",
          "The",
          "A",
          "An"
        ],
        "correctIndex": 1,
        "explanation": "Sun is unique in normal context, so the is used.",
        "tag": "Countability",
        "difficulty": "Basic",
        "sequence": 8
      },
      {
        "prompt": "Which answer avoids an article error in \"__ sun rises in the east.\"?",
        "options": [
          "The",
          "A",
          "An",
          "No article"
        ],
        "correctIndex": 0,
        "explanation": "Sun is unique in normal context, so the is used.",
        "tag": "Error check",
        "difficulty": "Basic",
        "sequence": 9
      },
      {
        "prompt": "If you were editing this line, what would you choose? \"__ sun rises in the east.\"",
        "options": [
          "A",
          "An",
          "No article",
          "The"
        ],
        "correctIndex": 3,
        "explanation": "Sun is unique in normal context, so the is used.",
        "tag": "Editing",
        "difficulty": "Basic",
        "sequence": 10
      },
      {
        "prompt": "Choose the best article pattern: \"She gave me __ useful advice.\"",
        "options": [
          "an",
          "a",
          "the",
          "some"
        ],
        "correctIndex": 3,
        "explanation": "Advice is noncount, so some is acceptable and an is not.",
        "tag": "Articles",
        "difficulty": "Basic",
        "sequence": 11
      },
      {
        "prompt": "Which answer completes this noun phrase correctly? \"She gave me __ useful advice.\"",
        "options": [
          "a",
          "the",
          "some",
          "an"
        ],
        "correctIndex": 2,
        "explanation": "Advice is noncount, so some is acceptable and an is not.",
        "tag": "Noun phrase",
        "difficulty": "Basic",
        "sequence": 12
      },
      {
        "prompt": "Select the most natural article or determiner choice: \"She gave me __ useful advice.\"",
        "options": [
          "the",
          "some",
          "an",
          "a"
        ],
        "correctIndex": 1,
        "explanation": "Advice is noncount, so some is acceptable and an is not.",
        "tag": "Determiners",
        "difficulty": "Basic",
        "sequence": 13
      },
      {
        "prompt": "What is the correct article usage in \"She gave me __ useful advice.\"",
        "options": [
          "some",
          "an",
          "a",
          "the"
        ],
        "correctIndex": 0,
        "explanation": "Advice is noncount, so some is acceptable and an is not.",
        "tag": "Usage",
        "difficulty": "Basic",
        "sequence": 14
      },
      {
        "prompt": "A learner is unsure about \"She gave me __ useful advice.\". Which answer is right?",
        "options": [
          "an",
          "a",
          "the",
          "some"
        ],
        "correctIndex": 3,
        "explanation": "Advice is noncount, so some is acceptable and an is not.",
        "tag": "Learner check",
        "difficulty": "Basic",
        "sequence": 15
      },
      {
        "prompt": "Which option matches the grammar rule for \"She gave me __ useful advice.\"",
        "options": [
          "a",
          "the",
          "some",
          "an"
        ],
        "correctIndex": 2,
        "explanation": "Advice is noncount, so some is acceptable and an is not.",
        "tag": "Rule match",
        "difficulty": "Basic",
        "sequence": 16
      },
      {
        "prompt": "Which sentence completion is standard English? \"She gave me __ useful advice.\"",
        "options": [
          "the",
          "some",
          "an",
          "a"
        ],
        "correctIndex": 1,
        "explanation": "Advice is noncount, so some is acceptable and an is not.",
        "tag": "Standard use",
        "difficulty": "Basic",
        "sequence": 17
      },
      {
        "prompt": "Choose the form that respects countability and reference: \"She gave me __ useful advice.\"",
        "options": [
          "some",
          "an",
          "a",
          "the"
        ],
        "correctIndex": 0,
        "explanation": "Advice is noncount, so some is acceptable and an is not.",
        "tag": "Countability",
        "difficulty": "Basic",
        "sequence": 18
      },
      {
        "prompt": "Which answer avoids an article error in \"She gave me __ useful advice.\"?",
        "options": [
          "an",
          "a",
          "the",
          "some"
        ],
        "correctIndex": 3,
        "explanation": "Advice is noncount, so some is acceptable and an is not.",
        "tag": "Error check",
        "difficulty": "Basic",
        "sequence": 19
      },
      {
        "prompt": "If you were editing this line, what would you choose? \"She gave me __ useful advice.\"",
        "options": [
          "a",
          "the",
          "some",
          "an"
        ],
        "correctIndex": 2,
        "explanation": "Advice is noncount, so some is acceptable and an is not.",
        "tag": "Editing",
        "difficulty": "Basic",
        "sequence": 20
      },
      {
        "prompt": "Choose the best article pattern: \"We bought __ notebook and __ pens.\"",
        "options": [
          "the / the",
          "no article / an",
          "a / some",
          "an / a"
        ],
        "correctIndex": 2,
        "explanation": "Notebook is singular count; pens is plural and indefinite.",
        "tag": "Articles",
        "difficulty": "Intermediate",
        "sequence": 21
      },
      {
        "prompt": "Which answer completes this noun phrase correctly? \"We bought __ notebook and __ pens.\"",
        "options": [
          "no article / an",
          "a / some",
          "an / a",
          "the / the"
        ],
        "correctIndex": 1,
        "explanation": "Notebook is singular count; pens is plural and indefinite.",
        "tag": "Noun phrase",
        "difficulty": "Intermediate",
        "sequence": 22
      },
      {
        "prompt": "Select the most natural article or determiner choice: \"We bought __ notebook and __ pens.\"",
        "options": [
          "a / some",
          "an / a",
          "the / the",
          "no article / an"
        ],
        "correctIndex": 0,
        "explanation": "Notebook is singular count; pens is plural and indefinite.",
        "tag": "Determiners",
        "difficulty": "Intermediate",
        "sequence": 23
      },
      {
        "prompt": "What is the correct article usage in \"We bought __ notebook and __ pens.\"",
        "options": [
          "an / a",
          "the / the",
          "no article / an",
          "a / some"
        ],
        "correctIndex": 3,
        "explanation": "Notebook is singular count; pens is plural and indefinite.",
        "tag": "Usage",
        "difficulty": "Intermediate",
        "sequence": 24
      },
      {
        "prompt": "A learner is unsure about \"We bought __ notebook and __ pens.\". Which answer is right?",
        "options": [
          "the / the",
          "no article / an",
          "a / some",
          "an / a"
        ],
        "correctIndex": 2,
        "explanation": "Notebook is singular count; pens is plural and indefinite.",
        "tag": "Learner check",
        "difficulty": "Intermediate",
        "sequence": 25
      },
      {
        "prompt": "Which option matches the grammar rule for \"We bought __ notebook and __ pens.\"",
        "options": [
          "no article / an",
          "a / some",
          "an / a",
          "the / the"
        ],
        "correctIndex": 1,
        "explanation": "Notebook is singular count; pens is plural and indefinite.",
        "tag": "Rule match",
        "difficulty": "Intermediate",
        "sequence": 26
      },
      {
        "prompt": "Which sentence completion is standard English? \"We bought __ notebook and __ pens.\"",
        "options": [
          "a / some",
          "an / a",
          "the / the",
          "no article / an"
        ],
        "correctIndex": 0,
        "explanation": "Notebook is singular count; pens is plural and indefinite.",
        "tag": "Standard use",
        "difficulty": "Intermediate",
        "sequence": 27
      },
      {
        "prompt": "Choose the form that respects countability and reference: \"We bought __ notebook and __ pens.\"",
        "options": [
          "an / a",
          "the / the",
          "no article / an",
          "a / some"
        ],
        "correctIndex": 3,
        "explanation": "Notebook is singular count; pens is plural and indefinite.",
        "tag": "Countability",
        "difficulty": "Intermediate",
        "sequence": 28
      },
      {
        "prompt": "Which answer avoids an article error in \"We bought __ notebook and __ pens.\"?",
        "options": [
          "the / the",
          "no article / an",
          "a / some",
          "an / a"
        ],
        "correctIndex": 2,
        "explanation": "Notebook is singular count; pens is plural and indefinite.",
        "tag": "Error check",
        "difficulty": "Intermediate",
        "sequence": 29
      },
      {
        "prompt": "If you were editing this line, what would you choose? \"We bought __ notebook and __ pens.\"",
        "options": [
          "no article / an",
          "a / some",
          "an / a",
          "the / the"
        ],
        "correctIndex": 1,
        "explanation": "Notebook is singular count; pens is plural and indefinite.",
        "tag": "Editing",
        "difficulty": "Intermediate",
        "sequence": 30
      },
      {
        "prompt": "Choose the best article pattern: \"Children need __ patience and support.\"",
        "options": [
          "the",
          "no article",
          "a",
          "an"
        ],
        "correctIndex": 1,
        "explanation": "Generic plural subjects often take zero article.",
        "tag": "Articles",
        "difficulty": "Intermediate",
        "sequence": 31
      },
      {
        "prompt": "Which answer completes this noun phrase correctly? \"Children need __ patience and support.\"",
        "options": [
          "no article",
          "a",
          "an",
          "the"
        ],
        "correctIndex": 0,
        "explanation": "Generic plural subjects often take zero article.",
        "tag": "Noun phrase",
        "difficulty": "Intermediate",
        "sequence": 32
      },
      {
        "prompt": "Select the most natural article or determiner choice: \"Children need __ patience and support.\"",
        "options": [
          "a",
          "an",
          "the",
          "no article"
        ],
        "correctIndex": 3,
        "explanation": "Generic plural subjects often take zero article.",
        "tag": "Determiners",
        "difficulty": "Intermediate",
        "sequence": 33
      },
      {
        "prompt": "What is the correct article usage in \"Children need __ patience and support.\"",
        "options": [
          "an",
          "the",
          "no article",
          "a"
        ],
        "correctIndex": 2,
        "explanation": "Generic plural subjects often take zero article.",
        "tag": "Usage",
        "difficulty": "Intermediate",
        "sequence": 34
      },
      {
        "prompt": "A learner is unsure about \"Children need __ patience and support.\". Which answer is right?",
        "options": [
          "the",
          "no article",
          "a",
          "an"
        ],
        "correctIndex": 1,
        "explanation": "Generic plural subjects often take zero article.",
        "tag": "Learner check",
        "difficulty": "Intermediate",
        "sequence": 35
      },
      {
        "prompt": "Which option matches the grammar rule for \"Children need __ patience and support.\"",
        "options": [
          "no article",
          "a",
          "an",
          "the"
        ],
        "correctIndex": 0,
        "explanation": "Generic plural subjects often take zero article.",
        "tag": "Rule match",
        "difficulty": "Intermediate",
        "sequence": 36
      },
      {
        "prompt": "Which sentence completion is standard English? \"Children need __ patience and support.\"",
        "options": [
          "a",
          "an",
          "the",
          "no article"
        ],
        "correctIndex": 3,
        "explanation": "Generic plural subjects often take zero article.",
        "tag": "Standard use",
        "difficulty": "Intermediate",
        "sequence": 37
      },
      {
        "prompt": "Choose the form that respects countability and reference: \"Children need __ patience and support.\"",
        "options": [
          "an",
          "the",
          "no article",
          "a"
        ],
        "correctIndex": 2,
        "explanation": "Generic plural subjects often take zero article.",
        "tag": "Countability",
        "difficulty": "Intermediate",
        "sequence": 38
      },
      {
        "prompt": "Which answer avoids an article error in \"Children need __ patience and support.\"?",
        "options": [
          "the",
          "no article",
          "a",
          "an"
        ],
        "correctIndex": 1,
        "explanation": "Generic plural subjects often take zero article.",
        "tag": "Error check",
        "difficulty": "Intermediate",
        "sequence": 39
      },
      {
        "prompt": "If you were editing this line, what would you choose? \"Children need __ patience and support.\"",
        "options": [
          "no article",
          "a",
          "an",
          "the"
        ],
        "correctIndex": 0,
        "explanation": "Generic plural subjects often take zero article.",
        "tag": "Editing",
        "difficulty": "Intermediate",
        "sequence": 40
      },
      {
        "prompt": "Choose the best article pattern: \"I saw __ movie yesterday. __ movie was inspiring.\"",
        "options": [
          "a / The",
          "the / A",
          "an / An",
          "no article / no article"
        ],
        "correctIndex": 0,
        "explanation": "First mention is indefinite; second mention is specific.",
        "tag": "Articles",
        "difficulty": "Advanced",
        "sequence": 41
      },
      {
        "prompt": "Which answer completes this noun phrase correctly? \"I saw __ movie yesterday. __ movie was inspiring.\"",
        "options": [
          "the / A",
          "an / An",
          "no article / no article",
          "a / The"
        ],
        "correctIndex": 3,
        "explanation": "First mention is indefinite; second mention is specific.",
        "tag": "Noun phrase",
        "difficulty": "Advanced",
        "sequence": 42
      },
      {
        "prompt": "Select the most natural article or determiner choice: \"I saw __ movie yesterday. __ movie was inspiring.\"",
        "options": [
          "an / An",
          "no article / no article",
          "a / The",
          "the / A"
        ],
        "correctIndex": 2,
        "explanation": "First mention is indefinite; second mention is specific.",
        "tag": "Determiners",
        "difficulty": "Advanced",
        "sequence": 43
      },
      {
        "prompt": "What is the correct article usage in \"I saw __ movie yesterday. __ movie was inspiring.\"",
        "options": [
          "no article / no article",
          "a / The",
          "the / A",
          "an / An"
        ],
        "correctIndex": 1,
        "explanation": "First mention is indefinite; second mention is specific.",
        "tag": "Usage",
        "difficulty": "Advanced",
        "sequence": 44
      },
      {
        "prompt": "A learner is unsure about \"I saw __ movie yesterday. __ movie was inspiring.\". Which answer is right?",
        "options": [
          "a / The",
          "the / A",
          "an / An",
          "no article / no article"
        ],
        "correctIndex": 0,
        "explanation": "First mention is indefinite; second mention is specific.",
        "tag": "Learner check",
        "difficulty": "Advanced",
        "sequence": 45
      },
      {
        "prompt": "Which option matches the grammar rule for \"I saw __ movie yesterday. __ movie was inspiring.\"",
        "options": [
          "the / A",
          "an / An",
          "no article / no article",
          "a / The"
        ],
        "correctIndex": 3,
        "explanation": "First mention is indefinite; second mention is specific.",
        "tag": "Rule match",
        "difficulty": "Advanced",
        "sequence": 46
      },
      {
        "prompt": "Which sentence completion is standard English? \"I saw __ movie yesterday. __ movie was inspiring.\"",
        "options": [
          "an / An",
          "no article / no article",
          "a / The",
          "the / A"
        ],
        "correctIndex": 2,
        "explanation": "First mention is indefinite; second mention is specific.",
        "tag": "Standard use",
        "difficulty": "Advanced",
        "sequence": 47
      },
      {
        "prompt": "Choose the form that respects countability and reference: \"I saw __ movie yesterday. __ movie was inspiring.\"",
        "options": [
          "no article / no article",
          "a / The",
          "the / A",
          "an / An"
        ],
        "correctIndex": 1,
        "explanation": "First mention is indefinite; second mention is specific.",
        "tag": "Countability",
        "difficulty": "Advanced",
        "sequence": 48
      },
      {
        "prompt": "Which answer avoids an article error in \"I saw __ movie yesterday. __ movie was inspiring.\"?",
        "options": [
          "a / The",
          "the / A",
          "an / An",
          "no article / no article"
        ],
        "correctIndex": 0,
        "explanation": "First mention is indefinite; second mention is specific.",
        "tag": "Error check",
        "difficulty": "Advanced",
        "sequence": 49
      },
      {
        "prompt": "If you were editing this line, what would you choose? \"I saw __ movie yesterday. __ movie was inspiring.\"",
        "options": [
          "the / A",
          "an / An",
          "no article / no article",
          "a / The"
        ],
        "correctIndex": 3,
        "explanation": "First mention is indefinite; second mention is specific.",
        "tag": "Editing",
        "difficulty": "Advanced",
        "sequence": 50
      },
      {
        "prompt": "Choose the best article pattern: \"The lab needs __ equipment before Monday.\"",
        "options": [
          "an",
          "a",
          "many",
          "some"
        ],
        "correctIndex": 3,
        "explanation": "Equipment is a noncount noun.",
        "tag": "Articles",
        "difficulty": "Advanced",
        "sequence": 51
      },
      {
        "prompt": "Which answer completes this noun phrase correctly? \"The lab needs __ equipment before Monday.\"",
        "options": [
          "a",
          "many",
          "some",
          "an"
        ],
        "correctIndex": 2,
        "explanation": "Equipment is a noncount noun.",
        "tag": "Noun phrase",
        "difficulty": "Advanced",
        "sequence": 52
      },
      {
        "prompt": "Select the most natural article or determiner choice: \"The lab needs __ equipment before Monday.\"",
        "options": [
          "many",
          "some",
          "an",
          "a"
        ],
        "correctIndex": 1,
        "explanation": "Equipment is a noncount noun.",
        "tag": "Determiners",
        "difficulty": "Advanced",
        "sequence": 53
      },
      {
        "prompt": "What is the correct article usage in \"The lab needs __ equipment before Monday.\"",
        "options": [
          "some",
          "an",
          "a",
          "many"
        ],
        "correctIndex": 0,
        "explanation": "Equipment is a noncount noun.",
        "tag": "Usage",
        "difficulty": "Advanced",
        "sequence": 54
      },
      {
        "prompt": "A learner is unsure about \"The lab needs __ equipment before Monday.\". Which answer is right?",
        "options": [
          "an",
          "a",
          "many",
          "some"
        ],
        "correctIndex": 3,
        "explanation": "Equipment is a noncount noun.",
        "tag": "Learner check",
        "difficulty": "Advanced",
        "sequence": 55
      },
      {
        "prompt": "Which option matches the grammar rule for \"The lab needs __ equipment before Monday.\"",
        "options": [
          "a",
          "many",
          "some",
          "an"
        ],
        "correctIndex": 2,
        "explanation": "Equipment is a noncount noun.",
        "tag": "Rule match",
        "difficulty": "Advanced",
        "sequence": 56
      },
      {
        "prompt": "Which sentence completion is standard English? \"The lab needs __ equipment before Monday.\"",
        "options": [
          "many",
          "some",
          "an",
          "a"
        ],
        "correctIndex": 1,
        "explanation": "Equipment is a noncount noun.",
        "tag": "Standard use",
        "difficulty": "Advanced",
        "sequence": 57
      },
      {
        "prompt": "Choose the form that respects countability and reference: \"The lab needs __ equipment before Monday.\"",
        "options": [
          "some",
          "an",
          "a",
          "many"
        ],
        "correctIndex": 0,
        "explanation": "Equipment is a noncount noun.",
        "tag": "Countability",
        "difficulty": "Advanced",
        "sequence": 58
      },
      {
        "prompt": "Which answer avoids an article error in \"The lab needs __ equipment before Monday.\"?",
        "options": [
          "an",
          "a",
          "many",
          "some"
        ],
        "correctIndex": 3,
        "explanation": "Equipment is a noncount noun.",
        "tag": "Error check",
        "difficulty": "Advanced",
        "sequence": 59
      },
      {
        "prompt": "If you were editing this line, what would you choose? \"The lab needs __ equipment before Monday.\"",
        "options": [
          "a",
          "many",
          "some",
          "an"
        ],
        "correctIndex": 2,
        "explanation": "Equipment is a noncount noun.",
        "tag": "Editing",
        "difficulty": "Advanced",
        "sequence": 60
      }
    ],
    "advanced": [
      {
        "prompt": "Choose the best article pattern: \"__ sun rises in the east.\"",
        "options": [
          "The",
          "A",
          "An",
          "No article"
        ],
        "correctIndex": 0,
        "explanation": "Sun is unique in normal context, so the is used.",
        "tag": "Articles",
        "difficulty": "Review Challenge",
        "sequence": 1
      },
      {
        "prompt": "Which answer completes this noun phrase correctly? \"__ sun rises in the east.\"",
        "options": [
          "A",
          "An",
          "No article",
          "The"
        ],
        "correctIndex": 3,
        "explanation": "Sun is unique in normal context, so the is used.",
        "tag": "Noun phrase",
        "difficulty": "Review Challenge",
        "sequence": 2
      },
      {
        "prompt": "What is the correct article usage in \"__ sun rises in the east.\"",
        "options": [
          "No article",
          "The",
          "A",
          "An"
        ],
        "correctIndex": 1,
        "explanation": "Sun is unique in normal context, so the is used.",
        "tag": "Usage",
        "difficulty": "Review Challenge",
        "sequence": 3
      },
      {
        "prompt": "Which sentence completion is standard English? \"__ sun rises in the east.\"",
        "options": [
          "An",
          "No article",
          "The",
          "A"
        ],
        "correctIndex": 2,
        "explanation": "Sun is unique in normal context, so the is used.",
        "tag": "Standard use",
        "difficulty": "Review Challenge",
        "sequence": 4
      },
      {
        "prompt": "If you were editing this line, what would you choose? \"__ sun rises in the east.\"",
        "options": [
          "A",
          "An",
          "No article",
          "The"
        ],
        "correctIndex": 3,
        "explanation": "Sun is unique in normal context, so the is used.",
        "tag": "Editing",
        "difficulty": "Review Challenge",
        "sequence": 5
      },
      {
        "prompt": "Choose the best article pattern: \"She gave me __ useful advice.\"",
        "options": [
          "an",
          "a",
          "the",
          "some"
        ],
        "correctIndex": 3,
        "explanation": "Advice is noncount, so some is acceptable and an is not.",
        "tag": "Articles",
        "difficulty": "Review Challenge",
        "sequence": 6
      },
      {
        "prompt": "Which focus best matches the main learning challenge in \"Articles, Determiners, and Nouns\"?",
        "options": [
          "Identify the job each word does inside a sentence.",
          "Build complete sentences with subjects, verbs, and clear complements.",
          "Choose between routine meaning and action happening around now.",
          "Use a, an, the, some, and zero article correctly."
        ],
        "correctIndex": 3,
        "explanation": "The focus of this lesson is: Use a, an, the, some, and zero article correctly.",
        "tag": "Advanced focus",
        "difficulty": "Review Challenge",
        "sequence": 7
      },
      {
        "prompt": "Which rule belongs most directly to \"Articles, Determiners, and Nouns\"?",
        "options": [
          "Adjectives describe nouns; adverbs usually modify verbs, adjectives, or other adverbs.",
          "Determiners such as the, a, this, and many signal which noun you mean.",
          "Use a or an for singular count nouns mentioned generally for the first time.",
          "A noun names a person, place, thing, or idea, while a verb shows action or state."
        ],
        "correctIndex": 2,
        "explanation": "Use a or an for singular count nouns mentioned generally for the first time.",
        "tag": "Rule distinction",
        "difficulty": "Review Challenge",
        "sequence": 8
      },
      {
        "prompt": "Which editing warning is most important to remember in \"Articles, Determiners, and Nouns\"?",
        "options": [
          {
            "wrong": "The news is exciting. She is exciting.",
            "right": "The news is exciting. She is excited.",
            "note": "Use the -ed adjective for the person's feeling, -ing for the thing's quality."
          },
          {
            "wrong": "I have an advice for you.",
            "right": "I have some advice for you. OR I have a piece of advice for you.",
            "note": "Advice is noncount; use some or a piece of."
          },
          {
            "wrong": "I have a friendly meeting tomorrow.",
            "right": "I have a friendly meeting tomorrow.",
            "note": "Friendly is an adjective here, not an adverb, so no -ly suffix needed."
          },
          {
            "wrong": "He ran quick to the store.",
            "right": "He ran quickly to the store.",
            "note": "Adverbs modify verbs; use quickly, not quick."
          }
        ],
        "correctIndex": 1,
        "explanation": {
          "wrong": "I have an advice for you.",
          "right": "I have some advice for you. OR I have a piece of advice for you.",
          "note": "Advice is noncount; use some or a piece of."
        },
        "tag": "Pitfall check",
        "difficulty": "Review Challenge",
        "sequence": 9
      },
      {
        "prompt": "Which practice move best extends the lesson after you finish the core explanation?",
        "options": [
          "Exercise 1 - Article Selection: Choose a/an/the/zero in 20 sentences.",
          "Exercise 1 - Labeling: Read a paragraph and mark each word with its part of speech (noun, verb, adj, adv, etc.)",
          "Exercise 2 - Identification: Identify the target word class in each sentence: 'Find the adverb that modifies ran.'",
          "Exercise 3 - Word Transformation: Transform words to different classes (run→runner→running; quick→quickly)"
        ],
        "correctIndex": 0,
        "explanation": "Exercise 1 - Article Selection: Choose a/an/the/zero in 20 sentences.",
        "tag": "Practice transfer",
        "difficulty": "Review Challenge",
        "sequence": 10
      },
      {
        "prompt": "Which explanation best matches this model sentence from \"Articles, Determiners, and Nouns\"? \"I saw a movie yesterday. The movie was inspiring.\"",
        "options": [
          "student (noun), curious (adjective), quickly (adverb), opened (verb)",
          "She (pronoun), carefully (adverb), explained (verb), importance (noun)",
          "Although (conjunction), raining (verb form), we (pronoun), near (preposition), mountain (noun)",
          "First mention: a (indefinite); second mention: the (now specific)."
        ],
        "correctIndex": 3,
        "explanation": "First mention: a (indefinite); second mention: the (now specific).",
        "tag": "Example analysis",
        "difficulty": "Review Challenge",
        "sequence": 11
      },
      {
        "prompt": "Which objective belongs to \"Articles, Determiners, and Nouns\"?",
        "options": [
          "Separate form from function when a word changes category by use.",
          "Explain why the same word can behave differently across contexts.",
          "Choose articles based on countability and specificity.",
          "Recognize the major word classes in authentic sentences."
        ],
        "correctIndex": 2,
        "explanation": "Choose articles based on countability and specificity.",
        "tag": "Objective check",
        "difficulty": "Review Challenge",
        "sequence": 12
      },
      {
        "prompt": "Which portfolio task best fits the module that contains \"Articles, Determiners, and Nouns\"?",
        "options": [
          "Write a multi-paragraph response using at least one relative clause, one conditional, one reported statement, and one verb-pattern contrast.",
          "Write a 150-word self-introduction and label nouns, verbs, articles, and sentence types.",
          "Write a three-part narrative using present, past, and future meaning accurately.",
          "Edit an old paragraph only for sentence-level accuracy and annotate each correction."
        ],
        "correctIndex": 1,
        "explanation": "Write a 150-word self-introduction and label nouns, verbs, articles, and sentence types.",
        "tag": "Portfolio transfer",
        "difficulty": "Review Challenge",
        "sequence": 13
      },
      {
        "prompt": "Which module description best fits the context of \"Articles, Determiners, and Nouns\"?",
        "options": [
          "Build a clean base in word classes, sentence architecture, and noun phrases before moving into more advanced control.",
          "Learn how English grammar maps routine, action-in-progress, experience, finished time, future reference, and modal meaning.",
          "Strengthen agreement, pronoun reference, auxiliary use, pattern control, and active-passive choices.",
          "Use clauses, relative structures, conditionals, reported speech, and verb patterns to communicate more complex relationships."
        ],
        "correctIndex": 0,
        "explanation": "Build a clean base in word classes, sentence architecture, and noun phrases before moving into more advanced control.",
        "tag": "Module alignment",
        "difficulty": "Review Challenge",
        "sequence": 14
      },
      {
        "prompt": "Which reading insight best matches the story work in \"Articles, Determiners, and Nouns\"?",
        "options": [
          "Market (noun), Saturday (noun), Maya (noun) are the main subjects and objects.",
          "Visits, walks, looking, shows, answer, select, stands are action verbs showing what people do.",
          "Busy, colorful, fresh, ripe describe nouns (busy market, colorful stalls).",
          "A book club (new, singular); the club (now established, specific)"
        ],
        "correctIndex": 3,
        "explanation": "A book club (new, singular); the club (now established, specific)",
        "tag": "Story analysis",
        "difficulty": "Review Challenge",
        "sequence": 15
      },
      {
        "prompt": "Select the most natural article or determiner choice: \"__ sun rises in the east.\"",
        "options": [
          "An",
          "No article",
          "The",
          "A"
        ],
        "correctIndex": 2,
        "explanation": "Sun is unique in normal context, so the is used.",
        "tag": "Determiners",
        "difficulty": "Review Challenge",
        "sequence": 16
      },
      {
        "prompt": "A learner is unsure about \"__ sun rises in the east.\". Which answer is right?",
        "options": [
          "The",
          "A",
          "An",
          "No article"
        ],
        "correctIndex": 0,
        "explanation": "Sun is unique in normal context, so the is used.",
        "tag": "Learner check",
        "difficulty": "Review Challenge",
        "sequence": 17
      },
      {
        "prompt": "Which option matches the grammar rule for \"__ sun rises in the east.\"",
        "options": [
          "A",
          "An",
          "No article",
          "The"
        ],
        "correctIndex": 3,
        "explanation": "Sun is unique in normal context, so the is used.",
        "tag": "Rule match",
        "difficulty": "Review Challenge",
        "sequence": 18
      },
      {
        "prompt": "Choose the form that respects countability and reference: \"__ sun rises in the east.\"",
        "options": [
          "No article",
          "The",
          "A",
          "An"
        ],
        "correctIndex": 1,
        "explanation": "Sun is unique in normal context, so the is used.",
        "tag": "Countability",
        "difficulty": "Review Challenge",
        "sequence": 19
      },
      {
        "prompt": "Which answer avoids an article error in \"__ sun rises in the east.\"?",
        "options": [
          "The",
          "A",
          "An",
          "No article"
        ],
        "correctIndex": 0,
        "explanation": "Sun is unique in normal context, so the is used.",
        "tag": "Error check",
        "difficulty": "Review Challenge",
        "sequence": 20
      }
    ]
  },
  "present-family": {
    "standard": [
      {
        "prompt": "Choose the best routine form: \"Rhea ___ every morning.\"",
        "options": [
          "serves",
          "is serving",
          "serve",
          "does serve"
        ],
        "correctIndex": 0,
        "explanation": "Use the simple for routine meaning and the continuous for temporary action.",
        "tag": "Routine meaning",
        "difficulty": "Basic",
        "sequence": 1
      },
      {
        "prompt": "Choose the best temporary form: \"Rhea ___ this week.\"",
        "options": [
          "serves",
          "serve",
          "has serve",
          "is serving"
        ],
        "correctIndex": 3,
        "explanation": "Use the simple for routine meaning and the continuous for temporary action.",
        "tag": "Current action",
        "difficulty": "Basic",
        "sequence": 2
      },
      {
        "prompt": "Which sentence sounds right for a habit?",
        "options": [
          "Rhea do serve every morning.",
          "Rhea serveing every morning.",
          "Rhea serves every morning.",
          "Rhea is serving every morning."
        ],
        "correctIndex": 2,
        "explanation": "Use the simple for routine meaning and the continuous for temporary action.",
        "tag": "Simple present",
        "difficulty": "Basic",
        "sequence": 3
      },
      {
        "prompt": "Which sentence best describes something happening around now?",
        "options": [
          "Rhea have serve this week.",
          "Rhea is serving this week.",
          "Rhea serves this week.",
          "Rhea serve this week."
        ],
        "correctIndex": 1,
        "explanation": "Use the simple for routine meaning and the continuous for temporary action.",
        "tag": "Present continuous",
        "difficulty": "Basic",
        "sequence": 4
      },
      {
        "prompt": "Which form matches the meaning in \"Rhea ___ every morning\"?",
        "options": [
          "serves",
          "is serving",
          "serve",
          "will serve"
        ],
        "correctIndex": 0,
        "explanation": "Use the simple for routine meaning and the continuous for temporary action.",
        "tag": "Meaning",
        "difficulty": "Basic",
        "sequence": 5
      },
      {
        "prompt": "Which form matches the meaning in \"Rhea ___ this week\"?",
        "options": [
          "serves",
          "serve",
          "will serve",
          "is serving"
        ],
        "correctIndex": 3,
        "explanation": "Use the simple for routine meaning and the continuous for temporary action.",
        "tag": "Meaning",
        "difficulty": "Basic",
        "sequence": 6
      },
      {
        "prompt": "A learner writes \"Rhea is serving every morning\" for a routine. What is the better form?",
        "options": [
          "Rhea serve every morning.",
          "Rhea has serve every morning.",
          "Rhea serves every morning.",
          "Rhea is serving every morning."
        ],
        "correctIndex": 2,
        "explanation": "Use the simple for routine meaning and the continuous for temporary action.",
        "tag": "Correction",
        "difficulty": "Basic",
        "sequence": 7
      },
      {
        "prompt": "Which option best contrasts a stable pattern with a temporary situation for Rhea?",
        "options": [
          "Rhea will serve every morning, but Rhea serves this week.",
          "Rhea serves every morning, but Rhea is serving this week.",
          "Rhea is serving every morning, but Rhea serves this week.",
          "Rhea serve every morning, but Rhea serve this week."
        ],
        "correctIndex": 1,
        "explanation": "Use the simple for routine meaning and the continuous for temporary action.",
        "tag": "Contrast",
        "difficulty": "Basic",
        "sequence": 8
      },
      {
        "prompt": "Which answer follows the lesson rule best for Rhea?",
        "options": [
          "Use the simple for routine meaning and the continuous for temporary action.",
          "Always use the continuous with every time marker.",
          "The simple present cannot describe schedules.",
          "Stative verbs usually prefer the continuous."
        ],
        "correctIndex": 0,
        "explanation": "Use the simple for routine meaning and the continuous for temporary action.",
        "tag": "Rule",
        "difficulty": "Basic",
        "sequence": 9
      },
      {
        "prompt": "In context, which choice is grammatical? \"Rhea ___ this week.\"",
        "options": [
          "serves",
          "serve",
          "does serve",
          "is serving"
        ],
        "correctIndex": 3,
        "explanation": "Use the simple for routine meaning and the continuous for temporary action.",
        "tag": "Context",
        "difficulty": "Basic",
        "sequence": 10
      },
      {
        "prompt": "Choose the best routine form: \"The students ___ after class.\"",
        "options": [
          "are working",
          "work",
          "does work",
          "work"
        ],
        "correctIndex": 1,
        "explanation": "Plural subjects still follow the same meaning contrast.",
        "tag": "Routine meaning",
        "difficulty": "Basic",
        "sequence": 11
      },
      {
        "prompt": "Choose the best temporary form: \"The students ___ in the library right now.\"",
        "options": [
          "work",
          "has work",
          "are working",
          "work"
        ],
        "correctIndex": 2,
        "explanation": "Plural subjects still follow the same meaning contrast.",
        "tag": "Current action",
        "difficulty": "Basic",
        "sequence": 12
      },
      {
        "prompt": "Which sentence sounds right for a habit?",
        "options": [
          "The students working after class.",
          "The students work after class.",
          "The students are working after class.",
          "The students do work after class."
        ],
        "correctIndex": 1,
        "explanation": "Plural subjects still follow the same meaning contrast.",
        "tag": "Simple present",
        "difficulty": "Basic",
        "sequence": 13
      },
      {
        "prompt": "Which sentence best describes something happening around now?",
        "options": [
          "The students are working in the library right now.",
          "The students work in the library right now.",
          "The students work in the library right now.",
          "The students have work in the library right now."
        ],
        "correctIndex": 0,
        "explanation": "Plural subjects still follow the same meaning contrast.",
        "tag": "Present continuous",
        "difficulty": "Basic",
        "sequence": 14
      },
      {
        "prompt": "Which form matches the meaning in \"The students ___ after class\"?",
        "options": [
          "are working",
          "work",
          "will work",
          "work"
        ],
        "correctIndex": 1,
        "explanation": "Plural subjects still follow the same meaning contrast.",
        "tag": "Meaning",
        "difficulty": "Basic",
        "sequence": 15
      },
      {
        "prompt": "Which form matches the meaning in \"The students ___ in the library right now\"?",
        "options": [
          "work",
          "will work",
          "are working",
          "work"
        ],
        "correctIndex": 2,
        "explanation": "Plural subjects still follow the same meaning contrast.",
        "tag": "Meaning",
        "difficulty": "Basic",
        "sequence": 16
      },
      {
        "prompt": "A learner writes \"The students are working after class\" for a routine. What is the better form?",
        "options": [
          "The students has work after class.",
          "The students work after class.",
          "The students are working after class.",
          "The students work after class."
        ],
        "correctIndex": 1,
        "explanation": "Plural subjects still follow the same meaning contrast.",
        "tag": "Correction",
        "difficulty": "Basic",
        "sequence": 17
      },
      {
        "prompt": "Which option best contrasts a stable pattern with a temporary situation for The students?",
        "options": [
          "The students work after class, but The students are working in the library right now.",
          "The students are working after class, but The students work in the library right now.",
          "The students work after class, but The students work in the library right now.",
          "The students will work after class, but The students work in the library right now."
        ],
        "correctIndex": 0,
        "explanation": "Plural subjects still follow the same meaning contrast.",
        "tag": "Contrast",
        "difficulty": "Basic",
        "sequence": 18
      },
      {
        "prompt": "Which answer follows the lesson rule best for The students?",
        "options": [
          "Always use the continuous with every time marker.",
          "The simple present cannot describe schedules.",
          "Stative verbs usually prefer the continuous.",
          "Plural subjects still follow the same meaning contrast."
        ],
        "correctIndex": 3,
        "explanation": "Plural subjects still follow the same meaning contrast.",
        "tag": "Rule",
        "difficulty": "Basic",
        "sequence": 19
      },
      {
        "prompt": "In context, which choice is grammatical? \"The students ___ in the library right now.\"",
        "options": [
          "work",
          "does work",
          "are working",
          "work"
        ],
        "correctIndex": 2,
        "explanation": "Plural subjects still follow the same meaning contrast.",
        "tag": "Context",
        "difficulty": "Basic",
        "sequence": 20
      },
      {
        "prompt": "Choose the best routine form: \"Mira ___ with her family.\"",
        "options": [
          "stay",
          "does stay",
          "stays",
          "is staying"
        ],
        "correctIndex": 2,
        "explanation": "Temporary living arrangements often use the continuous.",
        "tag": "Routine meaning",
        "difficulty": "Intermediate",
        "sequence": 21
      },
      {
        "prompt": "Choose the best temporary form: \"Mira ___ with her aunt this month.\"",
        "options": [
          "has stay",
          "is staying",
          "stays",
          "stay"
        ],
        "correctIndex": 1,
        "explanation": "Temporary living arrangements often use the continuous.",
        "tag": "Current action",
        "difficulty": "Intermediate",
        "sequence": 22
      },
      {
        "prompt": "Which sentence sounds right for a habit?",
        "options": [
          "Mira stays with her family.",
          "Mira is staying with her family.",
          "Mira do stay with her family.",
          "Mira staying with her family."
        ],
        "correctIndex": 0,
        "explanation": "Temporary living arrangements often use the continuous.",
        "tag": "Simple present",
        "difficulty": "Intermediate",
        "sequence": 23
      },
      {
        "prompt": "Which sentence best describes something happening around now?",
        "options": [
          "Mira stays with her aunt this month.",
          "Mira stay with her aunt this month.",
          "Mira have stay with her aunt this month.",
          "Mira is staying with her aunt this month."
        ],
        "correctIndex": 3,
        "explanation": "Temporary living arrangements often use the continuous.",
        "tag": "Present continuous",
        "difficulty": "Intermediate",
        "sequence": 24
      },
      {
        "prompt": "Which form matches the meaning in \"Mira ___ with her family\"?",
        "options": [
          "stay",
          "will stay",
          "stays",
          "is staying"
        ],
        "correctIndex": 2,
        "explanation": "Temporary living arrangements often use the continuous.",
        "tag": "Meaning",
        "difficulty": "Intermediate",
        "sequence": 25
      },
      {
        "prompt": "Which form matches the meaning in \"Mira ___ with her aunt this month\"?",
        "options": [
          "will stay",
          "is staying",
          "stays",
          "stay"
        ],
        "correctIndex": 1,
        "explanation": "Temporary living arrangements often use the continuous.",
        "tag": "Meaning",
        "difficulty": "Intermediate",
        "sequence": 26
      },
      {
        "prompt": "A learner writes \"Mira is staying with her family\" for a routine. What is the better form?",
        "options": [
          "Mira stays with her family.",
          "Mira is staying with her family.",
          "Mira stay with her family.",
          "Mira has stay with her family."
        ],
        "correctIndex": 0,
        "explanation": "Temporary living arrangements often use the continuous.",
        "tag": "Correction",
        "difficulty": "Intermediate",
        "sequence": 27
      },
      {
        "prompt": "Which option best contrasts a stable pattern with a temporary situation for Mira?",
        "options": [
          "Mira is staying with her family, but Mira stays with her aunt this month.",
          "Mira stay with her family, but Mira stay with her aunt this month.",
          "Mira will stay with her family, but Mira stays with her aunt this month.",
          "Mira stays with her family, but Mira is staying with her aunt this month."
        ],
        "correctIndex": 3,
        "explanation": "Temporary living arrangements often use the continuous.",
        "tag": "Contrast",
        "difficulty": "Intermediate",
        "sequence": 28
      },
      {
        "prompt": "Which answer follows the lesson rule best for Mira?",
        "options": [
          "The simple present cannot describe schedules.",
          "Stative verbs usually prefer the continuous.",
          "Temporary living arrangements often use the continuous.",
          "Always use the continuous with every time marker."
        ],
        "correctIndex": 2,
        "explanation": "Temporary living arrangements often use the continuous.",
        "tag": "Rule",
        "difficulty": "Intermediate",
        "sequence": 29
      },
      {
        "prompt": "In context, which choice is grammatical? \"Mira ___ with her aunt this month.\"",
        "options": [
          "does stay",
          "is staying",
          "stays",
          "stay"
        ],
        "correctIndex": 1,
        "explanation": "Temporary living arrangements often use the continuous.",
        "tag": "Context",
        "difficulty": "Intermediate",
        "sequence": 30
      },
      {
        "prompt": "Choose the best routine form: \"The train ___ at 7:10 every weekday.\"",
        "options": [
          "does leave",
          "leaves",
          "is leaving",
          "leave"
        ],
        "correctIndex": 1,
        "explanation": "Timetables often use the simple present even for future meaning.",
        "tag": "Routine meaning",
        "difficulty": "Intermediate",
        "sequence": 31
      },
      {
        "prompt": "Choose the best temporary form: \"The train ___ tomorrow at 7:10 on the schedule.\"",
        "options": [
          "is leaving",
          "leaves",
          "leave",
          "has leave"
        ],
        "correctIndex": 0,
        "explanation": "Timetables often use the simple present even for future meaning.",
        "tag": "Current action",
        "difficulty": "Intermediate",
        "sequence": 32
      },
      {
        "prompt": "Which sentence sounds right for a habit?",
        "options": [
          "The train is leaving at 7:10 every weekday.",
          "The train do leave at 7:10 every weekday.",
          "The train leaveing at 7:10 every weekday.",
          "The train leaves at 7:10 every weekday."
        ],
        "correctIndex": 3,
        "explanation": "Timetables often use the simple present even for future meaning.",
        "tag": "Simple present",
        "difficulty": "Intermediate",
        "sequence": 33
      },
      {
        "prompt": "Which sentence best describes something happening around now?",
        "options": [
          "The train leave tomorrow at 7:10 on the schedule.",
          "The train have leave tomorrow at 7:10 on the schedule.",
          "The train is leaving tomorrow at 7:10 on the schedule.",
          "The train leaves tomorrow at 7:10 on the schedule."
        ],
        "correctIndex": 2,
        "explanation": "Timetables often use the simple present even for future meaning.",
        "tag": "Present continuous",
        "difficulty": "Intermediate",
        "sequence": 34
      },
      {
        "prompt": "Which form matches the meaning in \"The train ___ at 7:10 every weekday\"?",
        "options": [
          "will leave",
          "leaves",
          "is leaving",
          "leave"
        ],
        "correctIndex": 1,
        "explanation": "Timetables often use the simple present even for future meaning.",
        "tag": "Meaning",
        "difficulty": "Intermediate",
        "sequence": 35
      },
      {
        "prompt": "Which form matches the meaning in \"The train ___ tomorrow at 7:10 on the schedule\"?",
        "options": [
          "is leaving",
          "leaves",
          "leave",
          "will leave"
        ],
        "correctIndex": 0,
        "explanation": "Timetables often use the simple present even for future meaning.",
        "tag": "Meaning",
        "difficulty": "Intermediate",
        "sequence": 36
      },
      {
        "prompt": "A learner writes \"The train is leaving at 7:10 every weekday\" for a routine. What is the better form?",
        "options": [
          "The train is leaving at 7:10 every weekday.",
          "The train leave at 7:10 every weekday.",
          "The train has leave at 7:10 every weekday.",
          "The train leaves at 7:10 every weekday."
        ],
        "correctIndex": 3,
        "explanation": "Timetables often use the simple present even for future meaning.",
        "tag": "Correction",
        "difficulty": "Intermediate",
        "sequence": 37
      },
      {
        "prompt": "Which option best contrasts a stable pattern with a temporary situation for The train?",
        "options": [
          "The train leave at 7:10 every weekday, but The train leave tomorrow at 7:10 on the schedule.",
          "The train will leave at 7:10 every weekday, but The train leaves tomorrow at 7:10 on the schedule.",
          "The train leaves at 7:10 every weekday, but The train is leaving tomorrow at 7:10 on the schedule.",
          "The train is leaving at 7:10 every weekday, but The train leaves tomorrow at 7:10 on the schedule."
        ],
        "correctIndex": 2,
        "explanation": "Timetables often use the simple present even for future meaning.",
        "tag": "Contrast",
        "difficulty": "Intermediate",
        "sequence": 38
      },
      {
        "prompt": "Which answer follows the lesson rule best for The train?",
        "options": [
          "Stative verbs usually prefer the continuous.",
          "Timetables often use the simple present even for future meaning.",
          "Always use the continuous with every time marker.",
          "The simple present cannot describe schedules."
        ],
        "correctIndex": 1,
        "explanation": "Timetables often use the simple present even for future meaning.",
        "tag": "Rule",
        "difficulty": "Intermediate",
        "sequence": 39
      },
      {
        "prompt": "In context, which choice is grammatical? \"The train ___ tomorrow at 7:10 on the schedule.\"",
        "options": [
          "is leaving",
          "leaves",
          "leave",
          "does leave"
        ],
        "correctIndex": 0,
        "explanation": "Timetables often use the simple present even for future meaning.",
        "tag": "Context",
        "difficulty": "Intermediate",
        "sequence": 40
      },
      {
        "prompt": "Choose the best routine form: \"I ___ the answer now.\"",
        "options": [
          "know",
          "am knowing",
          "know",
          "does know"
        ],
        "correctIndex": 0,
        "explanation": "Know is normally stative, so the simple form is preferred.",
        "tag": "Routine meaning",
        "difficulty": "Advanced",
        "sequence": 41
      },
      {
        "prompt": "Choose the best temporary form: \"I ___ the answer now.\"",
        "options": [
          "know",
          "know",
          "has know",
          "am knowing"
        ],
        "correctIndex": 3,
        "explanation": "Know is normally stative, so the simple form is preferred.",
        "tag": "Current action",
        "difficulty": "Advanced",
        "sequence": 42
      },
      {
        "prompt": "Which sentence sounds right for a habit?",
        "options": [
          "I do know the answer now.",
          "I knowing the answer now.",
          "I know the answer now.",
          "I am knowing the answer now."
        ],
        "correctIndex": 2,
        "explanation": "Know is normally stative, so the simple form is preferred.",
        "tag": "Simple present",
        "difficulty": "Advanced",
        "sequence": 43
      },
      {
        "prompt": "Which sentence best describes something happening around now?",
        "options": [
          "I have know the answer now.",
          "I am knowing the answer now.",
          "I know the answer now.",
          "I know the answer now."
        ],
        "correctIndex": 1,
        "explanation": "Know is normally stative, so the simple form is preferred.",
        "tag": "Present continuous",
        "difficulty": "Advanced",
        "sequence": 44
      },
      {
        "prompt": "Which form matches the meaning in \"I ___ the answer now\"?",
        "options": [
          "know",
          "am knowing",
          "know",
          "will know"
        ],
        "correctIndex": 0,
        "explanation": "Know is normally stative, so the simple form is preferred.",
        "tag": "Meaning",
        "difficulty": "Advanced",
        "sequence": 45
      },
      {
        "prompt": "Which form matches the meaning in \"I ___ the answer now\"?",
        "options": [
          "know",
          "know",
          "will know",
          "am knowing"
        ],
        "correctIndex": 3,
        "explanation": "Know is normally stative, so the simple form is preferred.",
        "tag": "Meaning",
        "difficulty": "Advanced",
        "sequence": 46
      },
      {
        "prompt": "A learner writes \"I am knowing the answer now\" for a routine. What is the better form?",
        "options": [
          "I know the answer now.",
          "I has know the answer now.",
          "I know the answer now.",
          "I am knowing the answer now."
        ],
        "correctIndex": 0,
        "explanation": "Know is normally stative, so the simple form is preferred.",
        "tag": "Correction",
        "difficulty": "Advanced",
        "sequence": 47
      },
      {
        "prompt": "Which option best contrasts a stable pattern with a temporary situation for I?",
        "options": [
          "I will know the answer now, but I know the answer now.",
          "I know the answer now, but I am knowing the answer now.",
          "I am knowing the answer now, but I know the answer now.",
          "I know the answer now, but I know the answer now."
        ],
        "correctIndex": 1,
        "explanation": "Know is normally stative, so the simple form is preferred.",
        "tag": "Contrast",
        "difficulty": "Advanced",
        "sequence": 48
      },
      {
        "prompt": "Which answer follows the lesson rule best for I?",
        "options": [
          "Know is normally stative, so the simple form is preferred.",
          "Always use the continuous with every time marker.",
          "The simple present cannot describe schedules.",
          "Stative verbs usually prefer the continuous."
        ],
        "correctIndex": 0,
        "explanation": "Know is normally stative, so the simple form is preferred.",
        "tag": "Rule",
        "difficulty": "Advanced",
        "sequence": 49
      },
      {
        "prompt": "In context, which choice is grammatical? \"I ___ the answer now.\"",
        "options": [
          "know",
          "know",
          "does know",
          "am knowing"
        ],
        "correctIndex": 3,
        "explanation": "Know is normally stative, so the simple form is preferred.",
        "tag": "Context",
        "difficulty": "Advanced",
        "sequence": 50
      },
      {
        "prompt": "Choose the best routine form: \"Our team ___ for debates every season.\"",
        "options": [
          "is preparing",
          "prepare",
          "does prepare",
          "prepares"
        ],
        "correctIndex": 3,
        "explanation": "The continuous highlights a current temporary project.",
        "tag": "Routine meaning",
        "difficulty": "Advanced",
        "sequence": 51
      },
      {
        "prompt": "Choose the best temporary form: \"Our team ___ for the finals this month.\"",
        "options": [
          "prepare",
          "has prepare",
          "is preparing",
          "prepares"
        ],
        "correctIndex": 2,
        "explanation": "The continuous highlights a current temporary project.",
        "tag": "Current action",
        "difficulty": "Advanced",
        "sequence": 52
      },
      {
        "prompt": "Which sentence sounds right for a habit?",
        "options": [
          "Our team prepareing for debates every season.",
          "Our team prepares for debates every season.",
          "Our team is preparing for debates every season.",
          "Our team do prepare for debates every season."
        ],
        "correctIndex": 1,
        "explanation": "The continuous highlights a current temporary project.",
        "tag": "Simple present",
        "difficulty": "Advanced",
        "sequence": 53
      },
      {
        "prompt": "Which sentence best describes something happening around now?",
        "options": [
          "Our team is preparing for the finals this month.",
          "Our team prepares for the finals this month.",
          "Our team prepare for the finals this month.",
          "Our team have prepare for the finals this month."
        ],
        "correctIndex": 0,
        "explanation": "The continuous highlights a current temporary project.",
        "tag": "Present continuous",
        "difficulty": "Advanced",
        "sequence": 54
      },
      {
        "prompt": "Which form matches the meaning in \"Our team ___ for debates every season\"?",
        "options": [
          "is preparing",
          "prepare",
          "will prepare",
          "prepares"
        ],
        "correctIndex": 3,
        "explanation": "The continuous highlights a current temporary project.",
        "tag": "Meaning",
        "difficulty": "Advanced",
        "sequence": 55
      },
      {
        "prompt": "Which form matches the meaning in \"Our team ___ for the finals this month\"?",
        "options": [
          "prepare",
          "will prepare",
          "is preparing",
          "prepares"
        ],
        "correctIndex": 2,
        "explanation": "The continuous highlights a current temporary project.",
        "tag": "Meaning",
        "difficulty": "Advanced",
        "sequence": 56
      },
      {
        "prompt": "A learner writes \"Our team is preparing for debates every season\" for a routine. What is the better form?",
        "options": [
          "Our team has prepare for debates every season.",
          "Our team prepares for debates every season.",
          "Our team is preparing for debates every season.",
          "Our team prepare for debates every season."
        ],
        "correctIndex": 1,
        "explanation": "The continuous highlights a current temporary project.",
        "tag": "Correction",
        "difficulty": "Advanced",
        "sequence": 57
      },
      {
        "prompt": "Which option best contrasts a stable pattern with a temporary situation for Our team?",
        "options": [
          "Our team prepares for debates every season, but Our team is preparing for the finals this month.",
          "Our team is preparing for debates every season, but Our team prepares for the finals this month.",
          "Our team prepare for debates every season, but Our team prepare for the finals this month.",
          "Our team will prepare for debates every season, but Our team prepares for the finals this month."
        ],
        "correctIndex": 0,
        "explanation": "The continuous highlights a current temporary project.",
        "tag": "Contrast",
        "difficulty": "Advanced",
        "sequence": 58
      },
      {
        "prompt": "Which answer follows the lesson rule best for Our team?",
        "options": [
          "Always use the continuous with every time marker.",
          "The simple present cannot describe schedules.",
          "Stative verbs usually prefer the continuous.",
          "The continuous highlights a current temporary project."
        ],
        "correctIndex": 3,
        "explanation": "The continuous highlights a current temporary project.",
        "tag": "Rule",
        "difficulty": "Advanced",
        "sequence": 59
      },
      {
        "prompt": "In context, which choice is grammatical? \"Our team ___ for the finals this month.\"",
        "options": [
          "prepare",
          "does prepare",
          "is preparing",
          "prepares"
        ],
        "correctIndex": 2,
        "explanation": "The continuous highlights a current temporary project.",
        "tag": "Context",
        "difficulty": "Advanced",
        "sequence": 60
      }
    ],
    "advanced": [
      {
        "prompt": "Choose the best routine form: \"Rhea ___ every morning.\"",
        "options": [
          "serves",
          "is serving",
          "serve",
          "does serve"
        ],
        "correctIndex": 0,
        "explanation": "Use the simple for routine meaning and the continuous for temporary action.",
        "tag": "Routine meaning",
        "difficulty": "Review Challenge",
        "sequence": 1
      },
      {
        "prompt": "Choose the best temporary form: \"Rhea ___ this week.\"",
        "options": [
          "serves",
          "serve",
          "has serve",
          "is serving"
        ],
        "correctIndex": 3,
        "explanation": "Use the simple for routine meaning and the continuous for temporary action.",
        "tag": "Current action",
        "difficulty": "Review Challenge",
        "sequence": 2
      },
      {
        "prompt": "Which sentence best describes something happening around now?",
        "options": [
          "Rhea have serve this week.",
          "Rhea is serving this week.",
          "Rhea serves this week.",
          "Rhea serve this week."
        ],
        "correctIndex": 1,
        "explanation": "Use the simple for routine meaning and the continuous for temporary action.",
        "tag": "Present continuous",
        "difficulty": "Review Challenge",
        "sequence": 3
      },
      {
        "prompt": "Which form matches the meaning in \"Rhea ___ every morning\"?",
        "options": [
          "serves",
          "is serving",
          "serve",
          "will serve"
        ],
        "correctIndex": 0,
        "explanation": "Use the simple for routine meaning and the continuous for temporary action.",
        "tag": "Meaning",
        "difficulty": "Review Challenge",
        "sequence": 4
      },
      {
        "prompt": "Which form matches the meaning in \"Rhea ___ this week\"?",
        "options": [
          "serves",
          "serve",
          "will serve",
          "is serving"
        ],
        "correctIndex": 3,
        "explanation": "Use the simple for routine meaning and the continuous for temporary action.",
        "tag": "Meaning",
        "difficulty": "Review Challenge",
        "sequence": 5
      },
      {
        "prompt": "A learner writes \"Rhea is serving every morning\" for a routine. What is the better form?",
        "options": [
          "Rhea serve every morning.",
          "Rhea has serve every morning.",
          "Rhea serves every morning.",
          "Rhea is serving every morning."
        ],
        "correctIndex": 2,
        "explanation": "Use the simple for routine meaning and the continuous for temporary action.",
        "tag": "Correction",
        "difficulty": "Review Challenge",
        "sequence": 6
      },
      {
        "prompt": "Which focus best matches the main learning challenge in \"Present Simple and Present Continuous\"?",
        "options": [
          "Identify the job each word does inside a sentence.",
          "Build complete sentences with subjects, verbs, and clear complements.",
          "Use a, an, the, some, and zero article correctly.",
          "Choose between routine meaning and action happening around now."
        ],
        "correctIndex": 3,
        "explanation": "The focus of this lesson is: Choose between routine meaning and action happening around now.",
        "tag": "Advanced focus",
        "difficulty": "Review Challenge",
        "sequence": 7
      },
      {
        "prompt": "Which rule belongs most directly to \"Present Simple and Present Continuous\"?",
        "options": [
          "Adjectives describe nouns; adverbs usually modify verbs, adjectives, or other adverbs.",
          "Determiners such as the, a, this, and many signal which noun you mean.",
          "Use present simple for habits, general truths, and schedules.",
          "A noun names a person, place, thing, or idea, while a verb shows action or state."
        ],
        "correctIndex": 2,
        "explanation": "Use present simple for habits, general truths, and schedules.",
        "tag": "Rule distinction",
        "difficulty": "Review Challenge",
        "sequence": 8
      },
      {
        "prompt": "Which editing warning is most important to remember in \"Present Simple and Present Continuous\"?",
        "options": [
          {
            "wrong": "The news is exciting. She is exciting.",
            "right": "The news is exciting. She is excited.",
            "note": "Use the -ed adjective for the person's feeling, -ing for the thing's quality."
          },
          {
            "wrong": "I am knowing the answer.",
            "right": "I know the answer.",
            "note": "Know is stative (mental state), not action. Use simple present."
          },
          {
            "wrong": "I have a friendly meeting tomorrow.",
            "right": "I have a friendly meeting tomorrow.",
            "note": "Friendly is an adjective here, not an adverb, so no -ly suffix needed."
          },
          {
            "wrong": "He ran quick to the store.",
            "right": "He ran quickly to the store.",
            "note": "Adverbs modify verbs; use quickly, not quick."
          }
        ],
        "correctIndex": 1,
        "explanation": {
          "wrong": "I am knowing the answer.",
          "right": "I know the answer.",
          "note": "Know is stative (mental state), not action. Use simple present."
        },
        "tag": "Pitfall check",
        "difficulty": "Review Challenge",
        "sequence": 9
      },
      {
        "prompt": "Which practice move best extends the lesson after you finish the core explanation?",
        "options": [
          "Exercise 1 - Tense Selection: Choose simple or continuous for 15 sentences based on meaning.",
          "Exercise 1 - Labeling: Read a paragraph and mark each word with its part of speech (noun, verb, adj, adv, etc.)",
          "Exercise 2 - Identification: Identify the target word class in each sentence: 'Find the adverb that modifies ran.'",
          "Exercise 3 - Word Transformation: Transform words to different classes (run→runner→running; quick→quickly)"
        ],
        "correctIndex": 0,
        "explanation": "Exercise 1 - Tense Selection: Choose simple or continuous for 15 sentences based on meaning.",
        "tag": "Practice transfer",
        "difficulty": "Review Challenge",
        "sequence": 10
      },
      {
        "prompt": "Which explanation best matches this model sentence from \"Present Simple and Present Continuous\"? \"She teaches biology, but this semester she is teaching grammar too.\"",
        "options": [
          "student (noun), curious (adjective), quickly (adverb), opened (verb)",
          "She (pronoun), carefully (adverb), explained (verb), importance (noun)",
          "Although (conjunction), raining (verb form), we (pronoun), near (preposition), mountain (noun)",
          "Habitual (teaches) vs temporary (is teaching)."
        ],
        "correctIndex": 3,
        "explanation": "Habitual (teaches) vs temporary (is teaching).",
        "tag": "Example analysis",
        "difficulty": "Review Challenge",
        "sequence": 11
      },
      {
        "prompt": "Which objective belongs to \"Present Simple and Present Continuous\"?",
        "options": [
          "Separate form from function when a word changes category by use.",
          "Explain why the same word can behave differently across contexts.",
          "Separate permanent facts from temporary or in-progress meaning.",
          "Recognize the major word classes in authentic sentences."
        ],
        "correctIndex": 2,
        "explanation": "Separate permanent facts from temporary or in-progress meaning.",
        "tag": "Objective check",
        "difficulty": "Review Challenge",
        "sequence": 12
      },
      {
        "prompt": "Which portfolio task best fits the module that contains \"Present Simple and Present Continuous\"?",
        "options": [
          "Write a multi-paragraph response using at least one relative clause, one conditional, one reported statement, and one verb-pattern contrast.",
          "Write a three-part narrative using present, past, and future meaning accurately.",
          "Write a 150-word self-introduction and label nouns, verbs, articles, and sentence types.",
          "Edit an old paragraph only for sentence-level accuracy and annotate each correction."
        ],
        "correctIndex": 1,
        "explanation": "Write a three-part narrative using present, past, and future meaning accurately.",
        "tag": "Portfolio transfer",
        "difficulty": "Review Challenge",
        "sequence": 13
      },
      {
        "prompt": "Which module description best fits the context of \"Present Simple and Present Continuous\"?",
        "options": [
          "Learn how English grammar maps routine, action-in-progress, experience, finished time, future reference, and modal meaning.",
          "Build a clean base in word classes, sentence architecture, and noun phrases before moving into more advanced control.",
          "Strengthen agreement, pronoun reference, auxiliary use, pattern control, and active-passive choices.",
          "Use clauses, relative structures, conditionals, reported speech, and verb patterns to communicate more complex relationships."
        ],
        "correctIndex": 0,
        "explanation": "Learn how English grammar maps routine, action-in-progress, experience, finished time, future reference, and modal meaning.",
        "tag": "Module alignment",
        "difficulty": "Review Challenge",
        "sequence": 14
      },
      {
        "prompt": "Which reading insight best matches the story work in \"Present Simple and Present Continuous\"?",
        "options": [
          "Market (noun), Saturday (noun), Maya (noun) are the main subjects and objects.",
          "Visits, walks, looking, shows, answer, select, stands are action verbs showing what people do.",
          "Busy, colorful, fresh, ripe describe nouns (busy market, colorful stalls).",
          "Routine verbs such as opens, checks, arranges, and orders show what normally happens."
        ],
        "correctIndex": 3,
        "explanation": "Routine verbs such as opens, checks, arranges, and orders show what normally happens.",
        "tag": "Story analysis",
        "difficulty": "Review Challenge",
        "sequence": 15
      },
      {
        "prompt": "Which sentence sounds right for a habit?",
        "options": [
          "Rhea do serve every morning.",
          "Rhea serveing every morning.",
          "Rhea serves every morning.",
          "Rhea is serving every morning."
        ],
        "correctIndex": 2,
        "explanation": "Use the simple for routine meaning and the continuous for temporary action.",
        "tag": "Simple present",
        "difficulty": "Review Challenge",
        "sequence": 16
      },
      {
        "prompt": "Which option best contrasts a stable pattern with a temporary situation for Rhea?",
        "options": [
          "Rhea will serve every morning, but Rhea serves this week.",
          "Rhea serves every morning, but Rhea is serving this week.",
          "Rhea is serving every morning, but Rhea serves this week.",
          "Rhea serve every morning, but Rhea serve this week."
        ],
        "correctIndex": 1,
        "explanation": "Use the simple for routine meaning and the continuous for temporary action.",
        "tag": "Contrast",
        "difficulty": "Review Challenge",
        "sequence": 17
      },
      {
        "prompt": "Which answer follows the lesson rule best for Rhea?",
        "options": [
          "Use the simple for routine meaning and the continuous for temporary action.",
          "Always use the continuous with every time marker.",
          "The simple present cannot describe schedules.",
          "Stative verbs usually prefer the continuous."
        ],
        "correctIndex": 0,
        "explanation": "Use the simple for routine meaning and the continuous for temporary action.",
        "tag": "Rule",
        "difficulty": "Review Challenge",
        "sequence": 18
      },
      {
        "prompt": "In context, which choice is grammatical? \"Rhea ___ this week.\"",
        "options": [
          "serves",
          "serve",
          "does serve",
          "is serving"
        ],
        "correctIndex": 3,
        "explanation": "Use the simple for routine meaning and the continuous for temporary action.",
        "tag": "Context",
        "difficulty": "Review Challenge",
        "sequence": 19
      },
      {
        "prompt": "Choose the best routine form: \"The students ___ after class.\"",
        "options": [
          "are working",
          "work",
          "does work",
          "work"
        ],
        "correctIndex": 1,
        "explanation": "Plural subjects still follow the same meaning contrast.",
        "tag": "Routine meaning",
        "difficulty": "Review Challenge",
        "sequence": 20
      }
    ]
  },
  "past-and-present-perfect": {
    "standard": [
      {
        "prompt": "Choose the best form with a finished time: \"I ___ in January.\"",
        "options": [
          "visited",
          "have visited",
          "visit",
          "was visit"
        ],
        "correctIndex": 0,
        "explanation": "Finished time pushes you toward the past simple; life experience supports the present perfect.",
        "tag": "Finished time",
        "difficulty": "Basic",
        "sequence": 1
      },
      {
        "prompt": "Choose the best form with present relevance: \"I ___ twice in my life.\"",
        "options": [
          "visited",
          "visit",
          "is visiting",
          "have visited"
        ],
        "correctIndex": 3,
        "explanation": "Finished time pushes you toward the past simple; life experience supports the present perfect.",
        "tag": "Present relevance",
        "difficulty": "Basic",
        "sequence": 2
      },
      {
        "prompt": "Which sentence is correct for a life experience meaning?",
        "options": [
          "I visit twice in my life.",
          "I had visit twice in my life.",
          "I have visited twice in my life.",
          "I visited twice in my life."
        ],
        "correctIndex": 2,
        "explanation": "Finished time pushes you toward the past simple; life experience supports the present perfect.",
        "tag": "Experience",
        "difficulty": "Basic",
        "sequence": 3
      },
      {
        "prompt": "Which sentence is correct for a completed past event?",
        "options": [
          "I has visited in January.",
          "I visited in January.",
          "I have visited in January.",
          "I visit in January."
        ],
        "correctIndex": 1,
        "explanation": "Finished time pushes you toward the past simple; life experience supports the present perfect.",
        "tag": "Past event",
        "difficulty": "Basic",
        "sequence": 4
      },
      {
        "prompt": "A learner writes \"I have visited in January\". What is the better choice?",
        "options": [
          "I visited in January.",
          "I have visited in January.",
          "I visit in January.",
          "I is visiting in January."
        ],
        "correctIndex": 0,
        "explanation": "Finished time pushes you toward the past simple; life experience supports the present perfect.",
        "tag": "Correction",
        "difficulty": "Basic",
        "sequence": 5
      },
      {
        "prompt": "Which option follows the lesson rule for \"I ___ twice in my life\"?",
        "options": [
          "visited",
          "visit",
          "will visit",
          "have visited"
        ],
        "correctIndex": 3,
        "explanation": "Finished time pushes you toward the past simple; life experience supports the present perfect.",
        "tag": "Rule",
        "difficulty": "Basic",
        "sequence": 6
      },
      {
        "prompt": "Which form best matches an unfinished time period for I?",
        "options": [
          "visit",
          "did visit",
          "have visited",
          "visited"
        ],
        "correctIndex": 2,
        "explanation": "Finished time pushes you toward the past simple; life experience supports the present perfect.",
        "tag": "Unfinished time",
        "difficulty": "Basic",
        "sequence": 7
      },
      {
        "prompt": "Which explanation is correct for these two forms?",
        "options": [
          "Since is mainly used with the past simple for ongoing situations.",
          "Finished time pushes you toward the past simple; life experience supports the present perfect.",
          "The present perfect is always used with yesterday.",
          "The past simple is preferred for actions still affecting the present."
        ],
        "correctIndex": 1,
        "explanation": "Finished time pushes you toward the past simple; life experience supports the present perfect.",
        "tag": "Reasoning",
        "difficulty": "Basic",
        "sequence": 8
      },
      {
        "prompt": "Choose the grammatical sentence.",
        "options": [
          "I visited in January.",
          "I have visited in January.",
          "I visit in January.",
          "I having visit in January."
        ],
        "correctIndex": 0,
        "explanation": "Finished time pushes you toward the past simple; life experience supports the present perfect.",
        "tag": "Grammar",
        "difficulty": "Basic",
        "sequence": 9
      },
      {
        "prompt": "Choose the grammatical sentence with current relevance.",
        "options": [
          "I visited twice in my life.",
          "I visit twice in my life.",
          "I were visiting twice in my life.",
          "I have visited twice in my life."
        ],
        "correctIndex": 3,
        "explanation": "Finished time pushes you toward the past simple; life experience supports the present perfect.",
        "tag": "Grammar",
        "difficulty": "Basic",
        "sequence": 10
      },
      {
        "prompt": "Choose the best form with a finished time: \"She ___ yesterday afternoon.\"",
        "options": [
          "has lost",
          "lose",
          "was lose",
          "lost"
        ],
        "correctIndex": 3,
        "explanation": "Use the present perfect when the result matters now.",
        "tag": "Finished time",
        "difficulty": "Basic",
        "sequence": 11
      },
      {
        "prompt": "Choose the best form with present relevance: \"She ___ her notebook, so she cannot revise tonight.\"",
        "options": [
          "lose",
          "is loseing",
          "has lost",
          "lost"
        ],
        "correctIndex": 2,
        "explanation": "Use the present perfect when the result matters now.",
        "tag": "Present relevance",
        "difficulty": "Basic",
        "sequence": 12
      },
      {
        "prompt": "Which sentence is correct for a life experience meaning?",
        "options": [
          "She had lose her notebook, so she cannot revise tonight.",
          "She has lost her notebook, so she cannot revise tonight.",
          "She lost her notebook, so she cannot revise tonight.",
          "She lose her notebook, so she cannot revise tonight."
        ],
        "correctIndex": 1,
        "explanation": "Use the present perfect when the result matters now.",
        "tag": "Experience",
        "difficulty": "Basic",
        "sequence": 13
      },
      {
        "prompt": "Which sentence is correct for a completed past event?",
        "options": [
          "She lost yesterday afternoon.",
          "She has lost yesterday afternoon.",
          "She lose yesterday afternoon.",
          "She has loseed yesterday afternoon."
        ],
        "correctIndex": 0,
        "explanation": "Use the present perfect when the result matters now.",
        "tag": "Past event",
        "difficulty": "Basic",
        "sequence": 14
      },
      {
        "prompt": "A learner writes \"She has lost yesterday afternoon\". What is the better choice?",
        "options": [
          "She has lost yesterday afternoon.",
          "She lose yesterday afternoon.",
          "She is loseing yesterday afternoon.",
          "She lost yesterday afternoon."
        ],
        "correctIndex": 3,
        "explanation": "Use the present perfect when the result matters now.",
        "tag": "Correction",
        "difficulty": "Basic",
        "sequence": 15
      },
      {
        "prompt": "Which option follows the lesson rule for \"She ___ her notebook, so she cannot revise tonight\"?",
        "options": [
          "lose",
          "will lose",
          "has lost",
          "lost"
        ],
        "correctIndex": 2,
        "explanation": "Use the present perfect when the result matters now.",
        "tag": "Rule",
        "difficulty": "Basic",
        "sequence": 16
      },
      {
        "prompt": "Which form best matches an unfinished time period for She?",
        "options": [
          "did lose",
          "has lost",
          "lost",
          "lose"
        ],
        "correctIndex": 1,
        "explanation": "Use the present perfect when the result matters now.",
        "tag": "Unfinished time",
        "difficulty": "Basic",
        "sequence": 17
      },
      {
        "prompt": "Which explanation is correct for these two forms?",
        "options": [
          "Use the present perfect when the result matters now.",
          "The present perfect is always used with yesterday.",
          "The past simple is preferred for actions still affecting the present.",
          "Since is mainly used with the past simple for ongoing situations."
        ],
        "correctIndex": 0,
        "explanation": "Use the present perfect when the result matters now.",
        "tag": "Reasoning",
        "difficulty": "Basic",
        "sequence": 18
      },
      {
        "prompt": "Choose the grammatical sentence.",
        "options": [
          "She has lost yesterday afternoon.",
          "She lose yesterday afternoon.",
          "She having lose yesterday afternoon.",
          "She lost yesterday afternoon."
        ],
        "correctIndex": 3,
        "explanation": "Use the present perfect when the result matters now.",
        "tag": "Grammar",
        "difficulty": "Basic",
        "sequence": 19
      },
      {
        "prompt": "Choose the grammatical sentence with current relevance.",
        "options": [
          "She lose her notebook, so she cannot revise tonight.",
          "She were loseing her notebook, so she cannot revise tonight.",
          "She has lost her notebook, so she cannot revise tonight.",
          "She lost her notebook, so she cannot revise tonight."
        ],
        "correctIndex": 2,
        "explanation": "Use the present perfect when the result matters now.",
        "tag": "Grammar",
        "difficulty": "Basic",
        "sequence": 20
      },
      {
        "prompt": "Choose the best form with a finished time: \"We ___ in 2022.\"",
        "options": [
          "meet",
          "was meet",
          "met",
          "have met"
        ],
        "correctIndex": 2,
        "explanation": "In 2022 is a finished time marker, so the past simple is required.",
        "tag": "Finished time",
        "difficulty": "Intermediate",
        "sequence": 21
      },
      {
        "prompt": "Choose the best form with present relevance: \"We ___ before, so the introduction was easy.\"",
        "options": [
          "is meeting",
          "have met",
          "met",
          "meet"
        ],
        "correctIndex": 1,
        "explanation": "In 2022 is a finished time marker, so the past simple is required.",
        "tag": "Present relevance",
        "difficulty": "Intermediate",
        "sequence": 22
      },
      {
        "prompt": "Which sentence is correct for a life experience meaning?",
        "options": [
          "We have met before, so the introduction was easy.",
          "We met before, so the introduction was easy.",
          "We meet before, so the introduction was easy.",
          "We had meet before, so the introduction was easy."
        ],
        "correctIndex": 0,
        "explanation": "In 2022 is a finished time marker, so the past simple is required.",
        "tag": "Experience",
        "difficulty": "Intermediate",
        "sequence": 23
      },
      {
        "prompt": "Which sentence is correct for a completed past event?",
        "options": [
          "We have met in 2022.",
          "We meet in 2022.",
          "We has meeted in 2022.",
          "We met in 2022."
        ],
        "correctIndex": 3,
        "explanation": "In 2022 is a finished time marker, so the past simple is required.",
        "tag": "Past event",
        "difficulty": "Intermediate",
        "sequence": 24
      },
      {
        "prompt": "A learner writes \"We have met in 2022\". What is the better choice?",
        "options": [
          "We meet in 2022.",
          "We is meeting in 2022.",
          "We met in 2022.",
          "We have met in 2022."
        ],
        "correctIndex": 2,
        "explanation": "In 2022 is a finished time marker, so the past simple is required.",
        "tag": "Correction",
        "difficulty": "Intermediate",
        "sequence": 25
      },
      {
        "prompt": "Which option follows the lesson rule for \"We ___ before, so the introduction was easy\"?",
        "options": [
          "will meet",
          "have met",
          "met",
          "meet"
        ],
        "correctIndex": 1,
        "explanation": "In 2022 is a finished time marker, so the past simple is required.",
        "tag": "Rule",
        "difficulty": "Intermediate",
        "sequence": 26
      },
      {
        "prompt": "Which form best matches an unfinished time period for We?",
        "options": [
          "have met",
          "met",
          "meet",
          "did meet"
        ],
        "correctIndex": 0,
        "explanation": "In 2022 is a finished time marker, so the past simple is required.",
        "tag": "Unfinished time",
        "difficulty": "Intermediate",
        "sequence": 27
      },
      {
        "prompt": "Which explanation is correct for these two forms?",
        "options": [
          "The present perfect is always used with yesterday.",
          "The past simple is preferred for actions still affecting the present.",
          "Since is mainly used with the past simple for ongoing situations.",
          "In 2022 is a finished time marker, so the past simple is required."
        ],
        "correctIndex": 3,
        "explanation": "In 2022 is a finished time marker, so the past simple is required.",
        "tag": "Reasoning",
        "difficulty": "Intermediate",
        "sequence": 28
      },
      {
        "prompt": "Choose the grammatical sentence.",
        "options": [
          "We meet in 2022.",
          "We having meet in 2022.",
          "We met in 2022.",
          "We have met in 2022."
        ],
        "correctIndex": 2,
        "explanation": "In 2022 is a finished time marker, so the past simple is required.",
        "tag": "Grammar",
        "difficulty": "Intermediate",
        "sequence": 29
      },
      {
        "prompt": "Choose the grammatical sentence with current relevance.",
        "options": [
          "We were meeting before, so the introduction was easy.",
          "We have met before, so the introduction was easy.",
          "We met before, so the introduction was easy.",
          "We meet before, so the introduction was easy."
        ],
        "correctIndex": 1,
        "explanation": "In 2022 is a finished time marker, so the past simple is required.",
        "tag": "Grammar",
        "difficulty": "Intermediate",
        "sequence": 30
      },
      {
        "prompt": "Choose the best form with a finished time: \"My brother ___ last summer.\"",
        "options": [
          "was work",
          "worked",
          "has worked",
          "work"
        ],
        "correctIndex": 1,
        "explanation": "Since often triggers the present perfect for continuing situations.",
        "tag": "Finished time",
        "difficulty": "Intermediate",
        "sequence": 31
      },
      {
        "prompt": "Choose the best form with present relevance: \"My brother ___ here since 2023.\"",
        "options": [
          "has worked",
          "worked",
          "work",
          "is working"
        ],
        "correctIndex": 0,
        "explanation": "Since often triggers the present perfect for continuing situations.",
        "tag": "Present relevance",
        "difficulty": "Intermediate",
        "sequence": 32
      },
      {
        "prompt": "Which sentence is correct for a life experience meaning?",
        "options": [
          "My brother worked here since 2023.",
          "My brother work here since 2023.",
          "My brother had work here since 2023.",
          "My brother has worked here since 2023."
        ],
        "correctIndex": 3,
        "explanation": "Since often triggers the present perfect for continuing situations.",
        "tag": "Experience",
        "difficulty": "Intermediate",
        "sequence": 33
      },
      {
        "prompt": "Which sentence is correct for a completed past event?",
        "options": [
          "My brother work last summer.",
          "My brother has worked last summer.",
          "My brother worked last summer.",
          "My brother has worked last summer."
        ],
        "correctIndex": 2,
        "explanation": "Since often triggers the present perfect for continuing situations.",
        "tag": "Past event",
        "difficulty": "Intermediate",
        "sequence": 34
      },
      {
        "prompt": "A learner writes \"My brother has worked last summer\". What is the better choice?",
        "options": [
          "My brother is working last summer.",
          "My brother worked last summer.",
          "My brother has worked last summer.",
          "My brother work last summer."
        ],
        "correctIndex": 1,
        "explanation": "Since often triggers the present perfect for continuing situations.",
        "tag": "Correction",
        "difficulty": "Intermediate",
        "sequence": 35
      },
      {
        "prompt": "Which option follows the lesson rule for \"My brother ___ here since 2023\"?",
        "options": [
          "has worked",
          "worked",
          "work",
          "will work"
        ],
        "correctIndex": 0,
        "explanation": "Since often triggers the present perfect for continuing situations.",
        "tag": "Rule",
        "difficulty": "Intermediate",
        "sequence": 36
      },
      {
        "prompt": "Which form best matches an unfinished time period for My brother?",
        "options": [
          "worked",
          "work",
          "did work",
          "has worked"
        ],
        "correctIndex": 3,
        "explanation": "Since often triggers the present perfect for continuing situations.",
        "tag": "Unfinished time",
        "difficulty": "Intermediate",
        "sequence": 37
      },
      {
        "prompt": "Which explanation is correct for these two forms?",
        "options": [
          "The past simple is preferred for actions still affecting the present.",
          "Since is mainly used with the past simple for ongoing situations.",
          "Since often triggers the present perfect for continuing situations.",
          "The present perfect is always used with yesterday."
        ],
        "correctIndex": 2,
        "explanation": "Since often triggers the present perfect for continuing situations.",
        "tag": "Reasoning",
        "difficulty": "Intermediate",
        "sequence": 38
      },
      {
        "prompt": "Choose the grammatical sentence.",
        "options": [
          "My brother having work last summer.",
          "My brother worked last summer.",
          "My brother has worked last summer.",
          "My brother work last summer."
        ],
        "correctIndex": 1,
        "explanation": "Since often triggers the present perfect for continuing situations.",
        "tag": "Grammar",
        "difficulty": "Intermediate",
        "sequence": 39
      },
      {
        "prompt": "Choose the grammatical sentence with current relevance.",
        "options": [
          "My brother has worked here since 2023.",
          "My brother worked here since 2023.",
          "My brother work here since 2023.",
          "My brother were working here since 2023."
        ],
        "correctIndex": 0,
        "explanation": "Since often triggers the present perfect for continuing situations.",
        "tag": "Grammar",
        "difficulty": "Intermediate",
        "sequence": 40
      },
      {
        "prompt": "Choose the best form with a finished time: \"They ___ last night.\"",
        "options": [
          "finished",
          "have finished",
          "finish",
          "was finish"
        ],
        "correctIndex": 0,
        "explanation": "Already often fits present relevance if the result matters now.",
        "tag": "Finished time",
        "difficulty": "Advanced",
        "sequence": 41
      },
      {
        "prompt": "Choose the best form with present relevance: \"They ___ already, so we can print the report.\"",
        "options": [
          "finished",
          "finish",
          "is finishing",
          "have finished"
        ],
        "correctIndex": 3,
        "explanation": "Already often fits present relevance if the result matters now.",
        "tag": "Present relevance",
        "difficulty": "Advanced",
        "sequence": 42
      },
      {
        "prompt": "Which sentence is correct for a life experience meaning?",
        "options": [
          "They finish already, so we can print the report.",
          "They had finish already, so we can print the report.",
          "They have finished already, so we can print the report.",
          "They finished already, so we can print the report."
        ],
        "correctIndex": 2,
        "explanation": "Already often fits present relevance if the result matters now.",
        "tag": "Experience",
        "difficulty": "Advanced",
        "sequence": 43
      },
      {
        "prompt": "Which sentence is correct for a completed past event?",
        "options": [
          "They has finished last night.",
          "They finished last night.",
          "They have finished last night.",
          "They finish last night."
        ],
        "correctIndex": 1,
        "explanation": "Already often fits present relevance if the result matters now.",
        "tag": "Past event",
        "difficulty": "Advanced",
        "sequence": 44
      },
      {
        "prompt": "A learner writes \"They have finished last night\". What is the better choice?",
        "options": [
          "They finished last night.",
          "They have finished last night.",
          "They finish last night.",
          "They is finishing last night."
        ],
        "correctIndex": 0,
        "explanation": "Already often fits present relevance if the result matters now.",
        "tag": "Correction",
        "difficulty": "Advanced",
        "sequence": 45
      },
      {
        "prompt": "Which option follows the lesson rule for \"They ___ already, so we can print the report\"?",
        "options": [
          "finished",
          "finish",
          "will finish",
          "have finished"
        ],
        "correctIndex": 3,
        "explanation": "Already often fits present relevance if the result matters now.",
        "tag": "Rule",
        "difficulty": "Advanced",
        "sequence": 46
      },
      {
        "prompt": "Which form best matches an unfinished time period for They?",
        "options": [
          "finish",
          "did finish",
          "have finished",
          "finished"
        ],
        "correctIndex": 2,
        "explanation": "Already often fits present relevance if the result matters now.",
        "tag": "Unfinished time",
        "difficulty": "Advanced",
        "sequence": 47
      },
      {
        "prompt": "Which explanation is correct for these two forms?",
        "options": [
          "Since is mainly used with the past simple for ongoing situations.",
          "Already often fits present relevance if the result matters now.",
          "The present perfect is always used with yesterday.",
          "The past simple is preferred for actions still affecting the present."
        ],
        "correctIndex": 1,
        "explanation": "Already often fits present relevance if the result matters now.",
        "tag": "Reasoning",
        "difficulty": "Advanced",
        "sequence": 48
      },
      {
        "prompt": "Choose the grammatical sentence.",
        "options": [
          "They finished last night.",
          "They have finished last night.",
          "They finish last night.",
          "They having finish last night."
        ],
        "correctIndex": 0,
        "explanation": "Already often fits present relevance if the result matters now.",
        "tag": "Grammar",
        "difficulty": "Advanced",
        "sequence": 49
      },
      {
        "prompt": "Choose the grammatical sentence with current relevance.",
        "options": [
          "They finished already, so we can print the report.",
          "They finish already, so we can print the report.",
          "They were finishing already, so we can print the report.",
          "They have finished already, so we can print the report."
        ],
        "correctIndex": 3,
        "explanation": "Already often fits present relevance if the result matters now.",
        "tag": "Grammar",
        "difficulty": "Advanced",
        "sequence": 50
      },
      {
        "prompt": "Choose the best form with a finished time: \"Rina ___ in 2021.\"",
        "options": [
          "has traveled",
          "travel",
          "was travel",
          "traveled"
        ],
        "correctIndex": 3,
        "explanation": "Repeated life experience supports the present perfect.",
        "tag": "Finished time",
        "difficulty": "Advanced",
        "sequence": 51
      },
      {
        "prompt": "Choose the best form with present relevance: \"Rina ___ to Japan three times.\"",
        "options": [
          "travel",
          "is traveling",
          "has traveled",
          "traveled"
        ],
        "correctIndex": 2,
        "explanation": "Repeated life experience supports the present perfect.",
        "tag": "Present relevance",
        "difficulty": "Advanced",
        "sequence": 52
      },
      {
        "prompt": "Which sentence is correct for a life experience meaning?",
        "options": [
          "Rina had travel to Japan three times.",
          "Rina has traveled to Japan three times.",
          "Rina traveled to Japan three times.",
          "Rina travel to Japan three times."
        ],
        "correctIndex": 1,
        "explanation": "Repeated life experience supports the present perfect.",
        "tag": "Experience",
        "difficulty": "Advanced",
        "sequence": 53
      },
      {
        "prompt": "Which sentence is correct for a completed past event?",
        "options": [
          "Rina traveled in 2021.",
          "Rina has traveled in 2021.",
          "Rina travel in 2021.",
          "Rina has traveled in 2021."
        ],
        "correctIndex": 0,
        "explanation": "Repeated life experience supports the present perfect.",
        "tag": "Past event",
        "difficulty": "Advanced",
        "sequence": 54
      },
      {
        "prompt": "A learner writes \"Rina has traveled in 2021\". What is the better choice?",
        "options": [
          "Rina has traveled in 2021.",
          "Rina travel in 2021.",
          "Rina is traveling in 2021.",
          "Rina traveled in 2021."
        ],
        "correctIndex": 3,
        "explanation": "Repeated life experience supports the present perfect.",
        "tag": "Correction",
        "difficulty": "Advanced",
        "sequence": 55
      },
      {
        "prompt": "Which option follows the lesson rule for \"Rina ___ to Japan three times\"?",
        "options": [
          "travel",
          "will travel",
          "has traveled",
          "traveled"
        ],
        "correctIndex": 2,
        "explanation": "Repeated life experience supports the present perfect.",
        "tag": "Rule",
        "difficulty": "Advanced",
        "sequence": 56
      },
      {
        "prompt": "Which form best matches an unfinished time period for Rina?",
        "options": [
          "did travel",
          "has traveled",
          "traveled",
          "travel"
        ],
        "correctIndex": 1,
        "explanation": "Repeated life experience supports the present perfect.",
        "tag": "Unfinished time",
        "difficulty": "Advanced",
        "sequence": 57
      },
      {
        "prompt": "Which explanation is correct for these two forms?",
        "options": [
          "Repeated life experience supports the present perfect.",
          "The present perfect is always used with yesterday.",
          "The past simple is preferred for actions still affecting the present.",
          "Since is mainly used with the past simple for ongoing situations."
        ],
        "correctIndex": 0,
        "explanation": "Repeated life experience supports the present perfect.",
        "tag": "Reasoning",
        "difficulty": "Advanced",
        "sequence": 58
      },
      {
        "prompt": "Choose the grammatical sentence.",
        "options": [
          "Rina has traveled in 2021.",
          "Rina travel in 2021.",
          "Rina having travel in 2021.",
          "Rina traveled in 2021."
        ],
        "correctIndex": 3,
        "explanation": "Repeated life experience supports the present perfect.",
        "tag": "Grammar",
        "difficulty": "Advanced",
        "sequence": 59
      },
      {
        "prompt": "Choose the grammatical sentence with current relevance.",
        "options": [
          "Rina travel to Japan three times.",
          "Rina were traveling to Japan three times.",
          "Rina has traveled to Japan three times.",
          "Rina traveled to Japan three times."
        ],
        "correctIndex": 2,
        "explanation": "Repeated life experience supports the present perfect.",
        "tag": "Grammar",
        "difficulty": "Advanced",
        "sequence": 60
      }
    ],
    "advanced": [
      {
        "prompt": "Choose the best form with a finished time: \"I ___ in January.\"",
        "options": [
          "visited",
          "have visited",
          "visit",
          "was visit"
        ],
        "correctIndex": 0,
        "explanation": "Finished time pushes you toward the past simple; life experience supports the present perfect.",
        "tag": "Finished time",
        "difficulty": "Review Challenge",
        "sequence": 1
      },
      {
        "prompt": "Choose the best form with present relevance: \"I ___ twice in my life.\"",
        "options": [
          "visited",
          "visit",
          "is visiting",
          "have visited"
        ],
        "correctIndex": 3,
        "explanation": "Finished time pushes you toward the past simple; life experience supports the present perfect.",
        "tag": "Present relevance",
        "difficulty": "Review Challenge",
        "sequence": 2
      },
      {
        "prompt": "Which sentence is correct for a life experience meaning?",
        "options": [
          "I visit twice in my life.",
          "I had visit twice in my life.",
          "I have visited twice in my life.",
          "I visited twice in my life."
        ],
        "correctIndex": 2,
        "explanation": "Finished time pushes you toward the past simple; life experience supports the present perfect.",
        "tag": "Experience",
        "difficulty": "Review Challenge",
        "sequence": 3
      },
      {
        "prompt": "Which sentence is correct for a completed past event?",
        "options": [
          "I has visited in January.",
          "I visited in January.",
          "I have visited in January.",
          "I visit in January."
        ],
        "correctIndex": 1,
        "explanation": "Finished time pushes you toward the past simple; life experience supports the present perfect.",
        "tag": "Past event",
        "difficulty": "Review Challenge",
        "sequence": 4
      },
      {
        "prompt": "A learner writes \"I have visited in January\". What is the better choice?",
        "options": [
          "I visited in January.",
          "I have visited in January.",
          "I visit in January.",
          "I is visiting in January."
        ],
        "correctIndex": 0,
        "explanation": "Finished time pushes you toward the past simple; life experience supports the present perfect.",
        "tag": "Correction",
        "difficulty": "Review Challenge",
        "sequence": 5
      },
      {
        "prompt": "Which form best matches an unfinished time period for I?",
        "options": [
          "visit",
          "did visit",
          "have visited",
          "visited"
        ],
        "correctIndex": 2,
        "explanation": "Finished time pushes you toward the past simple; life experience supports the present perfect.",
        "tag": "Unfinished time",
        "difficulty": "Review Challenge",
        "sequence": 6
      },
      {
        "prompt": "Which focus best matches the main learning challenge in \"Past Simple and Present Perfect\"?",
        "options": [
          "Identify the job each word does inside a sentence.",
          "Build complete sentences with subjects, verbs, and clear complements.",
          "Use a, an, the, some, and zero article correctly.",
          "Separate finished past time from present relevance."
        ],
        "correctIndex": 3,
        "explanation": "The focus of this lesson is: Separate finished past time from present relevance.",
        "tag": "Advanced focus",
        "difficulty": "Review Challenge",
        "sequence": 7
      },
      {
        "prompt": "Which rule belongs most directly to \"Past Simple and Present Perfect\"?",
        "options": [
          "Adjectives describe nouns; adverbs usually modify verbs, adjectives, or other adverbs.",
          "Determiners such as the, a, this, and many signal which noun you mean.",
          "Use past simple with finished time markers such as yesterday, last year, or in 2024.",
          "A noun names a person, place, thing, or idea, while a verb shows action or state."
        ],
        "correctIndex": 2,
        "explanation": "Use past simple with finished time markers such as yesterday, last year, or in 2024.",
        "tag": "Rule distinction",
        "difficulty": "Review Challenge",
        "sequence": 8
      },
      {
        "prompt": "Which editing warning is most important to remember in \"Past Simple and Present Perfect\"?",
        "options": [
          {
            "wrong": "The news is exciting. She is exciting.",
            "right": "The news is exciting. She is excited.",
            "note": "Use the -ed adjective for the person's feeling, -ing for the thing's quality."
          },
          {
            "wrong": "I have seen him yesterday.",
            "right": "I saw him yesterday.",
            "note": "Finished time markers (yesterday, last week, in 2020) require past simple, never present perfect."
          },
          {
            "wrong": "I have a friendly meeting tomorrow.",
            "right": "I have a friendly meeting tomorrow.",
            "note": "Friendly is an adjective here, not an adverb, so no -ly suffix needed."
          },
          {
            "wrong": "He ran quick to the store.",
            "right": "He ran quickly to the store.",
            "note": "Adverbs modify verbs; use quickly, not quick."
          }
        ],
        "correctIndex": 1,
        "explanation": {
          "wrong": "I have seen him yesterday.",
          "right": "I saw him yesterday.",
          "note": "Finished time markers (yesterday, last week, in 2020) require past simple, never present perfect."
        },
        "tag": "Pitfall check",
        "difficulty": "Review Challenge",
        "sequence": 9
      },
      {
        "prompt": "Which practice move best extends the lesson after you finish the core explanation?",
        "options": [
          "Exercise 1 - Selection: Read pairs of sentences and choose the correct past simple or present perfect form.",
          "Exercise 1 - Labeling: Read a paragraph and mark each word with its part of speech (noun, verb, adj, adv, etc.)",
          "Exercise 2 - Identification: Identify the target word class in each sentence: 'Find the adverb that modifies ran.'",
          "Exercise 3 - Word Transformation: Transform words to different classes (run→runner→running; quick→quickly)"
        ],
        "correctIndex": 0,
        "explanation": "Exercise 1 - Selection: Read pairs of sentences and choose the correct past simple or present perfect form.",
        "tag": "Practice transfer",
        "difficulty": "Review Challenge",
        "sequence": 10
      },
      {
        "prompt": "Which explanation best matches this model sentence from \"Past Simple and Present Perfect\"? \"I visited Delhi in January, and I have visited Jaipur twice in my life.\"",
        "options": [
          "student (noun), curious (adjective), quickly (adverb), opened (verb)",
          "She (pronoun), carefully (adverb), explained (verb), importance (noun)",
          "Although (conjunction), raining (verb form), we (pronoun), near (preposition), mountain (noun)",
          "Visited (finished time) vs. have visited (experience)."
        ],
        "correctIndex": 3,
        "explanation": "Visited (finished time) vs. have visited (experience).",
        "tag": "Example analysis",
        "difficulty": "Review Challenge",
        "sequence": 11
      },
      {
        "prompt": "Which objective belongs to \"Past Simple and Present Perfect\"?",
        "options": [
          "Separate form from function when a word changes category by use.",
          "Explain why the same word can behave differently across contexts.",
          "Use finished time markers with the past simple only.",
          "Recognize the major word classes in authentic sentences."
        ],
        "correctIndex": 2,
        "explanation": "Use finished time markers with the past simple only.",
        "tag": "Objective check",
        "difficulty": "Review Challenge",
        "sequence": 12
      },
      {
        "prompt": "Which portfolio task best fits the module that contains \"Past Simple and Present Perfect\"?",
        "options": [
          "Write a multi-paragraph response using at least one relative clause, one conditional, one reported statement, and one verb-pattern contrast.",
          "Write a three-part narrative using present, past, and future meaning accurately.",
          "Write a 150-word self-introduction and label nouns, verbs, articles, and sentence types.",
          "Edit an old paragraph only for sentence-level accuracy and annotate each correction."
        ],
        "correctIndex": 1,
        "explanation": "Write a three-part narrative using present, past, and future meaning accurately.",
        "tag": "Portfolio transfer",
        "difficulty": "Review Challenge",
        "sequence": 13
      },
      {
        "prompt": "Which module description best fits the context of \"Past Simple and Present Perfect\"?",
        "options": [
          "Learn how English grammar maps routine, action-in-progress, experience, finished time, future reference, and modal meaning.",
          "Build a clean base in word classes, sentence architecture, and noun phrases before moving into more advanced control.",
          "Strengthen agreement, pronoun reference, auxiliary use, pattern control, and active-passive choices.",
          "Use clauses, relative structures, conditionals, reported speech, and verb patterns to communicate more complex relationships."
        ],
        "correctIndex": 0,
        "explanation": "Learn how English grammar maps routine, action-in-progress, experience, finished time, future reference, and modal meaning.",
        "tag": "Module alignment",
        "difficulty": "Review Challenge",
        "sequence": 14
      },
      {
        "prompt": "Which reading insight best matches the story work in \"Past Simple and Present Perfect\"?",
        "options": [
          "Market (noun), Saturday (noun), Maya (noun) are the main subjects and objects.",
          "Visits, walks, looking, shows, answer, select, stands are action verbs showing what people do.",
          "Busy, colorful, fresh, ripe describe nouns (busy market, colorful stalls).",
          "Arrived, arranged, and answered belong to a finished past event."
        ],
        "correctIndex": 3,
        "explanation": "Arrived, arranged, and answered belong to a finished past event.",
        "tag": "Story analysis",
        "difficulty": "Review Challenge",
        "sequence": 15
      },
      {
        "prompt": "Which option follows the lesson rule for \"I ___ twice in my life\"?",
        "options": [
          "visited",
          "visit",
          "will visit",
          "have visited"
        ],
        "correctIndex": 3,
        "explanation": "Finished time pushes you toward the past simple; life experience supports the present perfect.",
        "tag": "Rule",
        "difficulty": "Review Challenge",
        "sequence": 16
      },
      {
        "prompt": "Which explanation is correct for these two forms?",
        "options": [
          "Since is mainly used with the past simple for ongoing situations.",
          "Finished time pushes you toward the past simple; life experience supports the present perfect.",
          "The present perfect is always used with yesterday.",
          "The past simple is preferred for actions still affecting the present."
        ],
        "correctIndex": 1,
        "explanation": "Finished time pushes you toward the past simple; life experience supports the present perfect.",
        "tag": "Reasoning",
        "difficulty": "Review Challenge",
        "sequence": 17
      },
      {
        "prompt": "Choose the grammatical sentence.",
        "options": [
          "I visited in January.",
          "I have visited in January.",
          "I visit in January.",
          "I having visit in January."
        ],
        "correctIndex": 0,
        "explanation": "Finished time pushes you toward the past simple; life experience supports the present perfect.",
        "tag": "Grammar",
        "difficulty": "Review Challenge",
        "sequence": 18
      },
      {
        "prompt": "Choose the grammatical sentence with current relevance.",
        "options": [
          "I visited twice in my life.",
          "I visit twice in my life.",
          "I were visiting twice in my life.",
          "I have visited twice in my life."
        ],
        "correctIndex": 3,
        "explanation": "Finished time pushes you toward the past simple; life experience supports the present perfect.",
        "tag": "Grammar",
        "difficulty": "Review Challenge",
        "sequence": 19
      },
      {
        "prompt": "Choose the best form with a finished time: \"She ___ yesterday afternoon.\"",
        "options": [
          "has lost",
          "lose",
          "was lose",
          "lost"
        ],
        "correctIndex": 3,
        "explanation": "Use the present perfect when the result matters now.",
        "tag": "Finished time",
        "difficulty": "Review Challenge",
        "sequence": 20
      }
    ]
  },
  "future-perfect-modals": {
    "standard": [
      {
        "prompt": "Choose the best form for a decision made now: \"I ___ another copy now.\"",
        "options": [
          "will buy",
          "am going to buy",
          "am meeting",
          "buy"
        ],
        "correctIndex": 0,
        "explanation": "Will often expresses a decision made now, while going to and the present continuous show prior plans or arrangements.",
        "tag": "Decision now",
        "difficulty": "Basic",
        "sequence": 1
      },
      {
        "prompt": "Choose the best form for an evidence-based prediction: \"I ___ because the sky is dark.\"",
        "options": [
          "will buy",
          "am meeting",
          "buy",
          "am going to buy"
        ],
        "correctIndex": 3,
        "explanation": "Will often expresses a decision made now, while going to and the present continuous show prior plans or arrangements.",
        "tag": "Prediction",
        "difficulty": "Basic",
        "sequence": 2
      },
      {
        "prompt": "Choose the best form for a fixed arrangement: \"I ___ the tutor on Friday.\"",
        "options": [
          "am going to buy",
          "buy",
          "am meeting",
          "will buy"
        ],
        "correctIndex": 2,
        "explanation": "Will often expresses a decision made now, while going to and the present continuous show prior plans or arrangements.",
        "tag": "Arrangement",
        "difficulty": "Basic",
        "sequence": 3
      },
      {
        "prompt": "Choose the best future perfect form: \"By 8 p.m., i ___ the task.\"",
        "options": [
          "buy",
          "will have finished",
          "will buy",
          "am going to buy"
        ],
        "correctIndex": 1,
        "explanation": "Will often expresses a decision made now, while going to and the present continuous show prior plans or arrangements.",
        "tag": "Future perfect",
        "difficulty": "Basic",
        "sequence": 4
      },
      {
        "prompt": "Which modal best expresses the meaning in this lesson set?",
        "options": [
          "should",
          "can",
          "must",
          "might"
        ],
        "correctIndex": 0,
        "explanation": "Will often expresses a decision made now, while going to and the present continuous show prior plans or arrangements.",
        "tag": "Modal meaning",
        "difficulty": "Basic",
        "sequence": 5
      },
      {
        "prompt": "Which sentence sounds correct in standard English?",
        "options": [
          "I should to revise the instructions.",
          "I should revises the instructions.",
          "I should revising the instructions.",
          "I should revise the instructions."
        ],
        "correctIndex": 3,
        "explanation": "Will often expresses a decision made now, while going to and the present continuous show prior plans or arrangements.",
        "tag": "Modal structure",
        "difficulty": "Basic",
        "sequence": 6
      },
      {
        "prompt": "Which answer follows the rule for future planning?",
        "options": [
          "buy",
          "will have finished",
          "am going to buy",
          "will buy"
        ],
        "correctIndex": 2,
        "explanation": "Will often expresses a decision made now, while going to and the present continuous show prior plans or arrangements.",
        "tag": "Planning",
        "difficulty": "Basic",
        "sequence": 7
      },
      {
        "prompt": "Which answer follows the rule for future arrangement?",
        "options": [
          "will have finished",
          "am meeting",
          "will buy",
          "am going to buy"
        ],
        "correctIndex": 1,
        "explanation": "Will often expresses a decision made now, while going to and the present continuous show prior plans or arrangements.",
        "tag": "Arrangement",
        "difficulty": "Basic",
        "sequence": 8
      },
      {
        "prompt": "What does this note remind you?",
        "options": [
          "Will often expresses a decision made now, while going to and the present continuous show prior plans or arrangements.",
          "All future meaning should use will.",
          "Must not means lack of necessity.",
          "Present continuous cannot express arranged future events."
        ],
        "correctIndex": 0,
        "explanation": "Will often expresses a decision made now, while going to and the present continuous show prior plans or arrangements.",
        "tag": "Reasoning",
        "difficulty": "Basic",
        "sequence": 9
      },
      {
        "prompt": "Which sentence best shows completion before a future moment?",
        "options": [
          "I will buy the work by noon.",
          "I am meeting the work by noon.",
          "I buy the work by noon.",
          "I will have finished the work by noon."
        ],
        "correctIndex": 3,
        "explanation": "Will often expresses a decision made now, while going to and the present continuous show prior plans or arrangements.",
        "tag": "Completion",
        "difficulty": "Basic",
        "sequence": 10
      },
      {
        "prompt": "Choose the best form for a decision made now: \"They ___ another copy now.\"",
        "options": [
          "are going to test",
          "are meeting",
          "test",
          "will test"
        ],
        "correctIndex": 3,
        "explanation": "Might expresses possibility rather than certainty.",
        "tag": "Decision now",
        "difficulty": "Basic",
        "sequence": 11
      },
      {
        "prompt": "Choose the best form for an evidence-based prediction: \"They ___ because the sky is dark.\"",
        "options": [
          "are meeting",
          "test",
          "are going to test",
          "will test"
        ],
        "correctIndex": 2,
        "explanation": "Might expresses possibility rather than certainty.",
        "tag": "Prediction",
        "difficulty": "Basic",
        "sequence": 12
      },
      {
        "prompt": "Choose the best form for a fixed arrangement: \"They ___ the tutor on Friday.\"",
        "options": [
          "test",
          "are meeting",
          "will test",
          "are going to test"
        ],
        "correctIndex": 1,
        "explanation": "Might expresses possibility rather than certainty.",
        "tag": "Arrangement",
        "difficulty": "Basic",
        "sequence": 13
      },
      {
        "prompt": "Choose the best future perfect form: \"By 8 p.m., they ___ the task.\"",
        "options": [
          "will have tested",
          "will test",
          "are going to test",
          "test"
        ],
        "correctIndex": 0,
        "explanation": "Might expresses possibility rather than certainty.",
        "tag": "Future perfect",
        "difficulty": "Basic",
        "sequence": 14
      },
      {
        "prompt": "Which modal best expresses the meaning in this lesson set?",
        "options": [
          "can",
          "should",
          "must",
          "might"
        ],
        "correctIndex": 3,
        "explanation": "Might expresses possibility rather than certainty.",
        "tag": "Modal meaning",
        "difficulty": "Basic",
        "sequence": 15
      },
      {
        "prompt": "Which sentence sounds correct in standard English?",
        "options": [
          "They might revises the instructions.",
          "They might revising the instructions.",
          "They might revise the instructions.",
          "They might to revise the instructions."
        ],
        "correctIndex": 2,
        "explanation": "Might expresses possibility rather than certainty.",
        "tag": "Modal structure",
        "difficulty": "Basic",
        "sequence": 16
      },
      {
        "prompt": "Which answer follows the rule for future planning?",
        "options": [
          "will have tested",
          "are going to test",
          "will test",
          "test"
        ],
        "correctIndex": 1,
        "explanation": "Might expresses possibility rather than certainty.",
        "tag": "Planning",
        "difficulty": "Basic",
        "sequence": 17
      },
      {
        "prompt": "Which answer follows the rule for future arrangement?",
        "options": [
          "are meeting",
          "will test",
          "are going to test",
          "will have tested"
        ],
        "correctIndex": 0,
        "explanation": "Might expresses possibility rather than certainty.",
        "tag": "Arrangement",
        "difficulty": "Basic",
        "sequence": 18
      },
      {
        "prompt": "What does this note remind you?",
        "options": [
          "All future meaning should use will.",
          "Must not means lack of necessity.",
          "Present continuous cannot express arranged future events.",
          "Might expresses possibility rather than certainty."
        ],
        "correctIndex": 3,
        "explanation": "Might expresses possibility rather than certainty.",
        "tag": "Reasoning",
        "difficulty": "Basic",
        "sequence": 19
      },
      {
        "prompt": "Which sentence best shows completion before a future moment?",
        "options": [
          "They are meeting the work by noon.",
          "They test the work by noon.",
          "They will have tested the work by noon.",
          "They will test the work by noon."
        ],
        "correctIndex": 2,
        "explanation": "Might expresses possibility rather than certainty.",
        "tag": "Completion",
        "difficulty": "Basic",
        "sequence": 20
      },
      {
        "prompt": "Choose the best form for a decision made now: \"Our class ___ another copy now.\"",
        "options": [
          "is presenting",
          "submit",
          "will submit",
          "is going to submit"
        ],
        "correctIndex": 2,
        "explanation": "Must expresses strong obligation.",
        "tag": "Decision now",
        "difficulty": "Intermediate",
        "sequence": 21
      },
      {
        "prompt": "Choose the best form for an evidence-based prediction: \"Our class ___ because the sky is dark.\"",
        "options": [
          "submit",
          "is going to submit",
          "will submit",
          "is presenting"
        ],
        "correctIndex": 1,
        "explanation": "Must expresses strong obligation.",
        "tag": "Prediction",
        "difficulty": "Intermediate",
        "sequence": 22
      },
      {
        "prompt": "Choose the best form for a fixed arrangement: \"Our class ___ the tutor on Friday.\"",
        "options": [
          "is presenting",
          "will submit",
          "is going to submit",
          "submit"
        ],
        "correctIndex": 0,
        "explanation": "Must expresses strong obligation.",
        "tag": "Arrangement",
        "difficulty": "Intermediate",
        "sequence": 23
      },
      {
        "prompt": "Choose the best future perfect form: \"By 8 p.m., our class ___ the task.\"",
        "options": [
          "will submit",
          "is going to submit",
          "submit",
          "will have submitted"
        ],
        "correctIndex": 3,
        "explanation": "Must expresses strong obligation.",
        "tag": "Future perfect",
        "difficulty": "Intermediate",
        "sequence": 24
      },
      {
        "prompt": "Which modal best expresses the meaning in this lesson set?",
        "options": [
          "should",
          "might",
          "must",
          "can"
        ],
        "correctIndex": 2,
        "explanation": "Must expresses strong obligation.",
        "tag": "Modal meaning",
        "difficulty": "Intermediate",
        "sequence": 25
      },
      {
        "prompt": "Which sentence sounds correct in standard English?",
        "options": [
          "Our class must revising the instructions.",
          "Our class must revise the instructions.",
          "Our class must to revise the instructions.",
          "Our class must revises the instructions."
        ],
        "correctIndex": 1,
        "explanation": "Must expresses strong obligation.",
        "tag": "Modal structure",
        "difficulty": "Intermediate",
        "sequence": 26
      },
      {
        "prompt": "Which answer follows the rule for future planning?",
        "options": [
          "is going to submit",
          "will submit",
          "submit",
          "will have submitted"
        ],
        "correctIndex": 0,
        "explanation": "Must expresses strong obligation.",
        "tag": "Planning",
        "difficulty": "Intermediate",
        "sequence": 27
      },
      {
        "prompt": "Which answer follows the rule for future arrangement?",
        "options": [
          "will submit",
          "is going to submit",
          "will have submitted",
          "is presenting"
        ],
        "correctIndex": 3,
        "explanation": "Must expresses strong obligation.",
        "tag": "Arrangement",
        "difficulty": "Intermediate",
        "sequence": 28
      },
      {
        "prompt": "What does this note remind you?",
        "options": [
          "Must not means lack of necessity.",
          "Present continuous cannot express arranged future events.",
          "Must expresses strong obligation.",
          "All future meaning should use will."
        ],
        "correctIndex": 2,
        "explanation": "Must expresses strong obligation.",
        "tag": "Reasoning",
        "difficulty": "Intermediate",
        "sequence": 29
      },
      {
        "prompt": "Which sentence best shows completion before a future moment?",
        "options": [
          "Our class submit the work by noon.",
          "Our class will have submitted the work by noon.",
          "Our class will submit the work by noon.",
          "Our class is presenting the work by noon."
        ],
        "correctIndex": 1,
        "explanation": "Must expresses strong obligation.",
        "tag": "Completion",
        "difficulty": "Intermediate",
        "sequence": 30
      },
      {
        "prompt": "Choose the best form for a decision made now: \"She ___ another copy now.\"",
        "options": [
          "finish",
          "will finish",
          "is going to finish",
          "is meeting"
        ],
        "correctIndex": 1,
        "explanation": "Can expresses ability or permission depending on context.",
        "tag": "Decision now",
        "difficulty": "Intermediate",
        "sequence": 31
      },
      {
        "prompt": "Choose the best form for an evidence-based prediction: \"She ___ because the sky is dark.\"",
        "options": [
          "is going to finish",
          "will finish",
          "is meeting",
          "finish"
        ],
        "correctIndex": 0,
        "explanation": "Can expresses ability or permission depending on context.",
        "tag": "Prediction",
        "difficulty": "Intermediate",
        "sequence": 32
      },
      {
        "prompt": "Choose the best form for a fixed arrangement: \"She ___ the tutor on Friday.\"",
        "options": [
          "will finish",
          "is going to finish",
          "finish",
          "is meeting"
        ],
        "correctIndex": 3,
        "explanation": "Can expresses ability or permission depending on context.",
        "tag": "Arrangement",
        "difficulty": "Intermediate",
        "sequence": 33
      },
      {
        "prompt": "Choose the best future perfect form: \"By 8 p.m., she ___ the task.\"",
        "options": [
          "is going to finish",
          "finish",
          "will have finished",
          "will finish"
        ],
        "correctIndex": 2,
        "explanation": "Can expresses ability or permission depending on context.",
        "tag": "Future perfect",
        "difficulty": "Intermediate",
        "sequence": 34
      },
      {
        "prompt": "Which modal best expresses the meaning in this lesson set?",
        "options": [
          "might",
          "can",
          "should",
          "must"
        ],
        "correctIndex": 1,
        "explanation": "Can expresses ability or permission depending on context.",
        "tag": "Modal meaning",
        "difficulty": "Intermediate",
        "sequence": 35
      },
      {
        "prompt": "Which sentence sounds correct in standard English?",
        "options": [
          "She can revise the instructions.",
          "She can to revise the instructions.",
          "She can revises the instructions.",
          "She can revising the instructions."
        ],
        "correctIndex": 0,
        "explanation": "Can expresses ability or permission depending on context.",
        "tag": "Modal structure",
        "difficulty": "Intermediate",
        "sequence": 36
      },
      {
        "prompt": "Which answer follows the rule for future planning?",
        "options": [
          "will finish",
          "finish",
          "will have finished",
          "is going to finish"
        ],
        "correctIndex": 3,
        "explanation": "Can expresses ability or permission depending on context.",
        "tag": "Planning",
        "difficulty": "Intermediate",
        "sequence": 37
      },
      {
        "prompt": "Which answer follows the rule for future arrangement?",
        "options": [
          "is going to finish",
          "will have finished",
          "is meeting",
          "will finish"
        ],
        "correctIndex": 2,
        "explanation": "Can expresses ability or permission depending on context.",
        "tag": "Arrangement",
        "difficulty": "Intermediate",
        "sequence": 38
      },
      {
        "prompt": "What does this note remind you?",
        "options": [
          "Present continuous cannot express arranged future events.",
          "Can expresses ability or permission depending on context.",
          "All future meaning should use will.",
          "Must not means lack of necessity."
        ],
        "correctIndex": 1,
        "explanation": "Can expresses ability or permission depending on context.",
        "tag": "Reasoning",
        "difficulty": "Intermediate",
        "sequence": 39
      },
      {
        "prompt": "Which sentence best shows completion before a future moment?",
        "options": [
          "She will have finished the work by noon.",
          "She will finish the work by noon.",
          "She is meeting the work by noon.",
          "She finish the work by noon."
        ],
        "correctIndex": 0,
        "explanation": "Can expresses ability or permission depending on context.",
        "tag": "Completion",
        "difficulty": "Intermediate",
        "sequence": 40
      },
      {
        "prompt": "Choose the best form for a decision made now: \"We ___ another copy now.\"",
        "options": [
          "will leave",
          "are going to leave",
          "are traveling",
          "leave"
        ],
        "correctIndex": 0,
        "explanation": "Do not have to means lack of necessity, not prohibition.",
        "tag": "Decision now",
        "difficulty": "Advanced",
        "sequence": 41
      },
      {
        "prompt": "Choose the best form for an evidence-based prediction: \"We ___ because the sky is dark.\"",
        "options": [
          "will leave",
          "are traveling",
          "leave",
          "are going to leave"
        ],
        "correctIndex": 3,
        "explanation": "Do not have to means lack of necessity, not prohibition.",
        "tag": "Prediction",
        "difficulty": "Advanced",
        "sequence": 42
      },
      {
        "prompt": "Choose the best form for a fixed arrangement: \"We ___ the tutor on Friday.\"",
        "options": [
          "are going to leave",
          "leave",
          "are traveling",
          "will leave"
        ],
        "correctIndex": 2,
        "explanation": "Do not have to means lack of necessity, not prohibition.",
        "tag": "Arrangement",
        "difficulty": "Advanced",
        "sequence": 43
      },
      {
        "prompt": "Choose the best future perfect form: \"By 8 p.m., we ___ the task.\"",
        "options": [
          "leave",
          "will have left",
          "will leave",
          "are going to leave"
        ],
        "correctIndex": 1,
        "explanation": "Do not have to means lack of necessity, not prohibition.",
        "tag": "Future perfect",
        "difficulty": "Advanced",
        "sequence": 44
      },
      {
        "prompt": "Which modal best expresses the meaning in this lesson set?",
        "options": [
          "do not have to",
          "can",
          "should",
          "must"
        ],
        "correctIndex": 0,
        "explanation": "Do not have to means lack of necessity, not prohibition.",
        "tag": "Modal meaning",
        "difficulty": "Advanced",
        "sequence": 45
      },
      {
        "prompt": "Which sentence sounds correct in standard English?",
        "options": [
          "We do not have to to revise the instructions.",
          "We do not have to revises the instructions.",
          "We do not have to revising the instructions.",
          "We do not have to revise the instructions."
        ],
        "correctIndex": 3,
        "explanation": "Do not have to means lack of necessity, not prohibition.",
        "tag": "Modal structure",
        "difficulty": "Advanced",
        "sequence": 46
      },
      {
        "prompt": "Which answer follows the rule for future planning?",
        "options": [
          "leave",
          "will have left",
          "are going to leave",
          "will leave"
        ],
        "correctIndex": 2,
        "explanation": "Do not have to means lack of necessity, not prohibition.",
        "tag": "Planning",
        "difficulty": "Advanced",
        "sequence": 47
      },
      {
        "prompt": "Which answer follows the rule for future arrangement?",
        "options": [
          "will have left",
          "are traveling",
          "will leave",
          "are going to leave"
        ],
        "correctIndex": 1,
        "explanation": "Do not have to means lack of necessity, not prohibition.",
        "tag": "Arrangement",
        "difficulty": "Advanced",
        "sequence": 48
      },
      {
        "prompt": "What does this note remind you?",
        "options": [
          "Do not have to means lack of necessity, not prohibition.",
          "All future meaning should use will.",
          "Must not means lack of necessity.",
          "Present continuous cannot express arranged future events."
        ],
        "correctIndex": 0,
        "explanation": "Do not have to means lack of necessity, not prohibition.",
        "tag": "Reasoning",
        "difficulty": "Advanced",
        "sequence": 49
      },
      {
        "prompt": "Which sentence best shows completion before a future moment?",
        "options": [
          "We will leave the work by noon.",
          "We are traveling the work by noon.",
          "We leave the work by noon.",
          "We will have left the work by noon."
        ],
        "correctIndex": 3,
        "explanation": "Do not have to means lack of necessity, not prohibition.",
        "tag": "Completion",
        "difficulty": "Advanced",
        "sequence": 50
      },
      {
        "prompt": "Choose the best form for a decision made now: \"Mira ___ another copy now.\"",
        "options": [
          "is going to arrive",
          "is flying",
          "arrive",
          "will arrive"
        ],
        "correctIndex": 3,
        "explanation": "Must not expresses prohibition.",
        "tag": "Decision now",
        "difficulty": "Advanced",
        "sequence": 51
      },
      {
        "prompt": "Choose the best form for an evidence-based prediction: \"Mira ___ because the sky is dark.\"",
        "options": [
          "is flying",
          "arrive",
          "is going to arrive",
          "will arrive"
        ],
        "correctIndex": 2,
        "explanation": "Must not expresses prohibition.",
        "tag": "Prediction",
        "difficulty": "Advanced",
        "sequence": 52
      },
      {
        "prompt": "Choose the best form for a fixed arrangement: \"Mira ___ the tutor on Friday.\"",
        "options": [
          "arrive",
          "is flying",
          "will arrive",
          "is going to arrive"
        ],
        "correctIndex": 1,
        "explanation": "Must not expresses prohibition.",
        "tag": "Arrangement",
        "difficulty": "Advanced",
        "sequence": 53
      },
      {
        "prompt": "Choose the best future perfect form: \"By 8 p.m., mira ___ the task.\"",
        "options": [
          "will have arrived",
          "will arrive",
          "is going to arrive",
          "arrive"
        ],
        "correctIndex": 0,
        "explanation": "Must not expresses prohibition.",
        "tag": "Future perfect",
        "difficulty": "Advanced",
        "sequence": 54
      },
      {
        "prompt": "Which modal best expresses the meaning in this lesson set?",
        "options": [
          "can",
          "should",
          "must",
          "must not"
        ],
        "correctIndex": 3,
        "explanation": "Must not expresses prohibition.",
        "tag": "Modal meaning",
        "difficulty": "Advanced",
        "sequence": 55
      },
      {
        "prompt": "Which sentence sounds correct in standard English?",
        "options": [
          "Mira must not revises the instructions.",
          "Mira must not revising the instructions.",
          "Mira must not revise the instructions.",
          "Mira must not to revise the instructions."
        ],
        "correctIndex": 2,
        "explanation": "Must not expresses prohibition.",
        "tag": "Modal structure",
        "difficulty": "Advanced",
        "sequence": 56
      },
      {
        "prompt": "Which answer follows the rule for future planning?",
        "options": [
          "will have arrived",
          "is going to arrive",
          "will arrive",
          "arrive"
        ],
        "correctIndex": 1,
        "explanation": "Must not expresses prohibition.",
        "tag": "Planning",
        "difficulty": "Advanced",
        "sequence": 57
      },
      {
        "prompt": "Which answer follows the rule for future arrangement?",
        "options": [
          "is flying",
          "will arrive",
          "is going to arrive",
          "will have arrived"
        ],
        "correctIndex": 0,
        "explanation": "Must not expresses prohibition.",
        "tag": "Arrangement",
        "difficulty": "Advanced",
        "sequence": 58
      },
      {
        "prompt": "What does this note remind you?",
        "options": [
          "All future meaning should use will.",
          "Must not means lack of necessity.",
          "Present continuous cannot express arranged future events.",
          "Must not expresses prohibition."
        ],
        "correctIndex": 3,
        "explanation": "Must not expresses prohibition.",
        "tag": "Reasoning",
        "difficulty": "Advanced",
        "sequence": 59
      },
      {
        "prompt": "Which sentence best shows completion before a future moment?",
        "options": [
          "Mira is flying the work by noon.",
          "Mira arrive the work by noon.",
          "Mira will have arrived the work by noon.",
          "Mira will arrive the work by noon."
        ],
        "correctIndex": 2,
        "explanation": "Must not expresses prohibition.",
        "tag": "Completion",
        "difficulty": "Advanced",
        "sequence": 60
      }
    ],
    "advanced": [
      {
        "prompt": "Choose the best form for a decision made now: \"I ___ another copy now.\"",
        "options": [
          "will buy",
          "am going to buy",
          "am meeting",
          "buy"
        ],
        "correctIndex": 0,
        "explanation": "Will often expresses a decision made now, while going to and the present continuous show prior plans or arrangements.",
        "tag": "Decision now",
        "difficulty": "Review Challenge",
        "sequence": 1
      },
      {
        "prompt": "Choose the best form for an evidence-based prediction: \"I ___ because the sky is dark.\"",
        "options": [
          "will buy",
          "am meeting",
          "buy",
          "am going to buy"
        ],
        "correctIndex": 3,
        "explanation": "Will often expresses a decision made now, while going to and the present continuous show prior plans or arrangements.",
        "tag": "Prediction",
        "difficulty": "Review Challenge",
        "sequence": 2
      },
      {
        "prompt": "Choose the best form for a fixed arrangement: \"I ___ the tutor on Friday.\"",
        "options": [
          "am going to buy",
          "buy",
          "am meeting",
          "will buy"
        ],
        "correctIndex": 2,
        "explanation": "Will often expresses a decision made now, while going to and the present continuous show prior plans or arrangements.",
        "tag": "Arrangement",
        "difficulty": "Review Challenge",
        "sequence": 3
      },
      {
        "prompt": "Choose the best future perfect form: \"By 8 p.m., i ___ the task.\"",
        "options": [
          "buy",
          "will have finished",
          "will buy",
          "am going to buy"
        ],
        "correctIndex": 1,
        "explanation": "Will often expresses a decision made now, while going to and the present continuous show prior plans or arrangements.",
        "tag": "Future perfect",
        "difficulty": "Review Challenge",
        "sequence": 4
      },
      {
        "prompt": "Which modal best expresses the meaning in this lesson set?",
        "options": [
          "should",
          "can",
          "must",
          "might"
        ],
        "correctIndex": 0,
        "explanation": "Will often expresses a decision made now, while going to and the present continuous show prior plans or arrangements.",
        "tag": "Modal meaning",
        "difficulty": "Review Challenge",
        "sequence": 5
      },
      {
        "prompt": "Which sentence sounds correct in standard English?",
        "options": [
          "I should to revise the instructions.",
          "I should revises the instructions.",
          "I should revising the instructions.",
          "I should revise the instructions."
        ],
        "correctIndex": 3,
        "explanation": "Will often expresses a decision made now, while going to and the present continuous show prior plans or arrangements.",
        "tag": "Modal structure",
        "difficulty": "Review Challenge",
        "sequence": 6
      },
      {
        "prompt": "Which focus best matches the main learning challenge in \"Parts of Speech\"?",
        "options": [
          "Build complete sentences with subjects, verbs, and clear complements.",
          "Use a, an, the, some, and zero article correctly.",
          "Choose between routine meaning and action happening around now.",
          "Identify the job each word does inside a sentence."
        ],
        "correctIndex": 3,
        "explanation": "The focus of this lesson is: Identify the job each word does inside a sentence.",
        "tag": "Advanced focus",
        "difficulty": "Review Challenge",
        "sequence": 7
      },
      {
        "prompt": "Which rule belongs most directly to \"Parts of Speech\"?",
        "options": [
          "Determiners such as the, a, this, and many signal which noun you mean.",
          "Prepositions show relationships between nouns and other words (in, on, at, before, after).",
          "A noun names a person, place, thing, or idea, while a verb shows action or state.",
          "Adjectives describe nouns; adverbs usually modify verbs, adjectives, or other adverbs."
        ],
        "correctIndex": 2,
        "explanation": "A noun names a person, place, thing, or idea, while a verb shows action or state.",
        "tag": "Rule distinction",
        "difficulty": "Review Challenge",
        "sequence": 8
      },
      {
        "prompt": "Which editing warning is most important to remember in \"Parts of Speech\"?",
        "options": [
          {
            "wrong": "Book me a table at restaurant.",
            "right": "Book me a table at the restaurant.",
            "note": "The definite article the is often needed before nouns."
          },
          {
            "wrong": "I have a friendly meeting tomorrow.",
            "right": "I have a friendly meeting tomorrow.",
            "note": "Friendly is an adjective here, not an adverb, so no -ly suffix needed."
          },
          {
            "wrong": "He ran quick to the store.",
            "right": "He ran quickly to the store.",
            "note": "Adverbs modify verbs; use quickly, not quick."
          },
          {
            "wrong": "The news is exciting. She is exciting.",
            "right": "The news is exciting. She is excited.",
            "note": "Use the -ed adjective for the person's feeling, -ing for the thing's quality."
          }
        ],
        "correctIndex": 1,
        "explanation": {
          "wrong": "I have a friendly meeting tomorrow.",
          "right": "I have a friendly meeting tomorrow.",
          "note": "Friendly is an adjective here, not an adverb, so no -ly suffix needed."
        },
        "tag": "Pitfall check",
        "difficulty": "Review Challenge",
        "sequence": 9
      },
      {
        "prompt": "Which practice move best extends the lesson after you finish the core explanation?",
        "options": [
          "Exercise 1 - Labeling: Read a paragraph and mark each word with its part of speech (noun, verb, adj, adv, etc.)",
          "Exercise 2 - Identification: Identify the target word class in each sentence: 'Find the adverb that modifies ran.'",
          "Exercise 3 - Word Transformation: Transform words to different classes (run→runner→running; quick→quickly)",
          "Exercise 4 - Pairing: Create 10 pairs showing the same word used as two different parts of speech"
        ],
        "correctIndex": 0,
        "explanation": "Exercise 1 - Labeling: Read a paragraph and mark each word with its part of speech (noun, verb, adj, adv, etc.)",
        "tag": "Practice transfer",
        "difficulty": "Review Challenge",
        "sequence": 10
      },
      {
        "prompt": "Which explanation best matches this model sentence from \"Parts of Speech\"? \"The curious student quickly opened the grammar book.\"",
        "options": [
          "She (pronoun), carefully (adverb), explained (verb), importance (noun)",
          "Although (conjunction), raining (verb form), we (pronoun), near (preposition), mountain (noun)",
          "My (determiner), friend (noun), plays and writes (verbs), and (conjunction), songs (noun)",
          "student (noun), curious (adjective), quickly (adverb), opened (verb)"
        ],
        "correctIndex": 3,
        "explanation": "student (noun), curious (adjective), quickly (adverb), opened (verb)",
        "tag": "Example analysis",
        "difficulty": "Review Challenge",
        "sequence": 11
      },
      {
        "prompt": "Which objective belongs to \"Parts of Speech\"?",
        "options": [
          "Explain why the same word can behave differently across contexts.",
          "Distinguish complete clauses from fragments.",
          "Recognize the major word classes in authentic sentences.",
          "Separate form from function when a word changes category by use."
        ],
        "correctIndex": 2,
        "explanation": "Recognize the major word classes in authentic sentences.",
        "tag": "Objective check",
        "difficulty": "Review Challenge",
        "sequence": 12
      },
      {
        "prompt": "Which portfolio task best fits the module that contains \"Parts of Speech\"?",
        "options": [
          "Write a multi-paragraph response using at least one relative clause, one conditional, one reported statement, and one verb-pattern contrast.",
          "Write a 150-word self-introduction and label nouns, verbs, articles, and sentence types.",
          "Write a three-part narrative using present, past, and future meaning accurately.",
          "Edit an old paragraph only for sentence-level accuracy and annotate each correction."
        ],
        "correctIndex": 1,
        "explanation": "Write a 150-word self-introduction and label nouns, verbs, articles, and sentence types.",
        "tag": "Portfolio transfer",
        "difficulty": "Review Challenge",
        "sequence": 13
      },
      {
        "prompt": "Which module description best fits the context of \"Parts of Speech\"?",
        "options": [
          "Build a clean base in word classes, sentence architecture, and noun phrases before moving into more advanced control.",
          "Learn how English grammar maps routine, action-in-progress, experience, finished time, future reference, and modal meaning.",
          "Strengthen agreement, pronoun reference, auxiliary use, pattern control, and active-passive choices.",
          "Use clauses, relative structures, conditionals, reported speech, and verb patterns to communicate more complex relationships."
        ],
        "correctIndex": 0,
        "explanation": "Build a clean base in word classes, sentence architecture, and noun phrases before moving into more advanced control.",
        "tag": "Module alignment",
        "difficulty": "Review Challenge",
        "sequence": 14
      },
      {
        "prompt": "Which reading insight best matches the story work in \"Parts of Speech\"?",
        "options": [
          "Visits, walks, looking, shows, answer, select, stands are action verbs showing what people do.",
          "Busy, colorful, fresh, ripe describe nouns (busy market, colorful stalls).",
          "Quickly, eagerly, happily, proudly, carefully, patiently modify verbs, showing HOW actions happen.",
          "Market (noun), Saturday (noun), Maya (noun) are the main subjects and objects."
        ],
        "correctIndex": 3,
        "explanation": "Market (noun), Saturday (noun), Maya (noun) are the main subjects and objects.",
        "tag": "Story analysis",
        "difficulty": "Review Challenge",
        "sequence": 15
      },
      {
        "prompt": "Which answer follows the rule for future planning?",
        "options": [
          "buy",
          "will have finished",
          "am going to buy",
          "will buy"
        ],
        "correctIndex": 2,
        "explanation": "Will often expresses a decision made now, while going to and the present continuous show prior plans or arrangements.",
        "tag": "Planning",
        "difficulty": "Review Challenge",
        "sequence": 16
      },
      {
        "prompt": "Which answer follows the rule for future arrangement?",
        "options": [
          "will have finished",
          "am meeting",
          "will buy",
          "am going to buy"
        ],
        "correctIndex": 1,
        "explanation": "Will often expresses a decision made now, while going to and the present continuous show prior plans or arrangements.",
        "tag": "Arrangement",
        "difficulty": "Review Challenge",
        "sequence": 17
      },
      {
        "prompt": "What does this note remind you?",
        "options": [
          "Will often expresses a decision made now, while going to and the present continuous show prior plans or arrangements.",
          "All future meaning should use will.",
          "Must not means lack of necessity.",
          "Present continuous cannot express arranged future events."
        ],
        "correctIndex": 0,
        "explanation": "Will often expresses a decision made now, while going to and the present continuous show prior plans or arrangements.",
        "tag": "Reasoning",
        "difficulty": "Review Challenge",
        "sequence": 18
      },
      {
        "prompt": "Which sentence best shows completion before a future moment?",
        "options": [
          "I will buy the work by noon.",
          "I am meeting the work by noon.",
          "I buy the work by noon.",
          "I will have finished the work by noon."
        ],
        "correctIndex": 3,
        "explanation": "Will often expresses a decision made now, while going to and the present continuous show prior plans or arrangements.",
        "tag": "Completion",
        "difficulty": "Review Challenge",
        "sequence": 19
      },
      {
        "prompt": "Choose the best form for a decision made now: \"They ___ another copy now.\"",
        "options": [
          "are going to test",
          "are meeting",
          "test",
          "will test"
        ],
        "correctIndex": 3,
        "explanation": "Might expresses possibility rather than certainty.",
        "tag": "Decision now",
        "difficulty": "Review Challenge",
        "sequence": 20
      }
    ]
  },
  "subject-verb-agreement": {
    "standard": [
      {
        "prompt": "Choose the correct verb: \"The list of topics ___ improving.\"",
        "options": [
          "is",
          "are",
          "be",
          "were"
        ],
        "correctIndex": 0,
        "explanation": "The head noun list is singular.",
        "tag": "Agreement",
        "difficulty": "Basic",
        "sequence": 1
      },
      {
        "prompt": "Which sentence is correct?",
        "options": [
          "The list of topics are improving.",
          "The list of topics improve improving.",
          "The list of topics been improving.",
          "The list of topics is improving."
        ],
        "correctIndex": 3,
        "explanation": "The head noun list is singular.",
        "tag": "Correct sentence",
        "difficulty": "Basic",
        "sequence": 2
      },
      {
        "prompt": "Which explanation is correct for \"The list of topics\"?",
        "options": [
          "All subjects with of are plural.",
          "Interrupting phrases become the true subject.",
          "The head noun list is singular.",
          "The nearest noun decides the verb."
        ],
        "correctIndex": 2,
        "explanation": "The head noun list is singular.",
        "tag": "Explanation",
        "difficulty": "Basic",
        "sequence": 3
      },
      {
        "prompt": "If a learner writes \"The list of topics are\", what is the better correction?",
        "options": [
          "The list of topics were",
          "The list of topics is",
          "The list of topics are",
          "The list of topics be"
        ],
        "correctIndex": 1,
        "explanation": "The head noun list is singular.",
        "tag": "Correction",
        "difficulty": "Basic",
        "sequence": 4
      },
      {
        "prompt": "Which verb matches the head noun in \"The list of topics\"?",
        "options": [
          "is",
          "are",
          "be",
          "being"
        ],
        "correctIndex": 0,
        "explanation": "The head noun list is singular.",
        "tag": "Head noun",
        "difficulty": "Basic",
        "sequence": 5
      },
      {
        "prompt": "Which answer follows standard formal agreement?",
        "options": [
          "are",
          "be",
          "have been",
          "is"
        ],
        "correctIndex": 3,
        "explanation": "The head noun list is singular.",
        "tag": "Formal grammar",
        "difficulty": "Basic",
        "sequence": 6
      },
      {
        "prompt": "Complete the sentence correctly: \"The list of topics ___ ready.\"",
        "options": [
          "be",
          "being",
          "is",
          "are"
        ],
        "correctIndex": 2,
        "explanation": "The head noun list is singular.",
        "tag": "Completion",
        "difficulty": "Basic",
        "sequence": 7
      },
      {
        "prompt": "Which rule applies to \"The list of topics\"?",
        "options": [
          "Agreement ignores the head noun.",
          "The head noun list is singular.",
          "The closest noun always controls agreement.",
          "Subjects with each are always plural."
        ],
        "correctIndex": 1,
        "explanation": "The head noun list is singular.",
        "tag": "Rule",
        "difficulty": "Basic",
        "sequence": 8
      },
      {
        "prompt": "Choose the grammatical verb form for \"The list of topics\"",
        "options": [
          "is",
          "are",
          "were",
          "be"
        ],
        "correctIndex": 0,
        "explanation": "The head noun list is singular.",
        "tag": "Grammar",
        "difficulty": "Basic",
        "sequence": 9
      },
      {
        "prompt": "Which option would you keep in an edited sentence with \"The list of topics\"?",
        "options": [
          "are",
          "been",
          "having",
          "is"
        ],
        "correctIndex": 3,
        "explanation": "The head noun list is singular.",
        "tag": "Editing",
        "difficulty": "Basic",
        "sequence": 10
      },
      {
        "prompt": "Choose the correct verb: \"Each of the students ___ improving.\"",
        "options": [
          "have",
          "be",
          "were",
          "has"
        ],
        "correctIndex": 3,
        "explanation": "Each is singular in formal standard English.",
        "tag": "Agreement",
        "difficulty": "Basic",
        "sequence": 11
      },
      {
        "prompt": "Which sentence is correct?",
        "options": [
          "Each of the students improve improving.",
          "Each of the students been improving.",
          "Each of the students has improving.",
          "Each of the students have improving."
        ],
        "correctIndex": 2,
        "explanation": "Each is singular in formal standard English.",
        "tag": "Correct sentence",
        "difficulty": "Basic",
        "sequence": 12
      },
      {
        "prompt": "Which explanation is correct for \"Each of the students\"?",
        "options": [
          "Interrupting phrases become the true subject.",
          "Each is singular in formal standard English.",
          "The nearest noun decides the verb.",
          "All subjects with of are plural."
        ],
        "correctIndex": 1,
        "explanation": "Each is singular in formal standard English.",
        "tag": "Explanation",
        "difficulty": "Basic",
        "sequence": 13
      },
      {
        "prompt": "If a learner writes \"Each of the students have\", what is the better correction?",
        "options": [
          "Each of the students has",
          "Each of the students have",
          "Each of the students be",
          "Each of the students were"
        ],
        "correctIndex": 0,
        "explanation": "Each is singular in formal standard English.",
        "tag": "Correction",
        "difficulty": "Basic",
        "sequence": 14
      },
      {
        "prompt": "Which verb matches the head noun in \"Each of the students\"?",
        "options": [
          "have",
          "be",
          "being",
          "has"
        ],
        "correctIndex": 3,
        "explanation": "Each is singular in formal standard English.",
        "tag": "Head noun",
        "difficulty": "Basic",
        "sequence": 15
      },
      {
        "prompt": "Which answer follows standard formal agreement?",
        "options": [
          "be",
          "have been",
          "has",
          "have"
        ],
        "correctIndex": 2,
        "explanation": "Each is singular in formal standard English.",
        "tag": "Formal grammar",
        "difficulty": "Basic",
        "sequence": 16
      },
      {
        "prompt": "Complete the sentence correctly: \"Each of the students ___ ready.\"",
        "options": [
          "being",
          "has",
          "have",
          "be"
        ],
        "correctIndex": 1,
        "explanation": "Each is singular in formal standard English.",
        "tag": "Completion",
        "difficulty": "Basic",
        "sequence": 17
      },
      {
        "prompt": "Which rule applies to \"Each of the students\"?",
        "options": [
          "Each is singular in formal standard English.",
          "The closest noun always controls agreement.",
          "Subjects with each are always plural.",
          "Agreement ignores the head noun."
        ],
        "correctIndex": 0,
        "explanation": "Each is singular in formal standard English.",
        "tag": "Rule",
        "difficulty": "Basic",
        "sequence": 18
      },
      {
        "prompt": "Choose the grammatical verb form for \"Each of the students\"",
        "options": [
          "have",
          "were",
          "be",
          "has"
        ],
        "correctIndex": 3,
        "explanation": "Each is singular in formal standard English.",
        "tag": "Grammar",
        "difficulty": "Basic",
        "sequence": 19
      },
      {
        "prompt": "Which option would you keep in an edited sentence with \"Each of the students\"?",
        "options": [
          "been",
          "having",
          "has",
          "have"
        ],
        "correctIndex": 2,
        "explanation": "Each is singular in formal standard English.",
        "tag": "Editing",
        "difficulty": "Basic",
        "sequence": 20
      },
      {
        "prompt": "Choose the correct verb: \"Neither of the answers ___ improving.\"",
        "options": [
          "be",
          "were",
          "seems",
          "seem"
        ],
        "correctIndex": 2,
        "explanation": "Neither usually takes a singular verb in formal grammar.",
        "tag": "Agreement",
        "difficulty": "Intermediate",
        "sequence": 21
      },
      {
        "prompt": "Which sentence is correct?",
        "options": [
          "Neither of the answers been improving.",
          "Neither of the answers seems improving.",
          "Neither of the answers seem improving.",
          "Neither of the answers improve improving."
        ],
        "correctIndex": 1,
        "explanation": "Neither usually takes a singular verb in formal grammar.",
        "tag": "Correct sentence",
        "difficulty": "Intermediate",
        "sequence": 22
      },
      {
        "prompt": "Which explanation is correct for \"Neither of the answers\"?",
        "options": [
          "Neither usually takes a singular verb in formal grammar.",
          "The nearest noun decides the verb.",
          "All subjects with of are plural.",
          "Interrupting phrases become the true subject."
        ],
        "correctIndex": 0,
        "explanation": "Neither usually takes a singular verb in formal grammar.",
        "tag": "Explanation",
        "difficulty": "Intermediate",
        "sequence": 23
      },
      {
        "prompt": "If a learner writes \"Neither of the answers seem\", what is the better correction?",
        "options": [
          "Neither of the answers seem",
          "Neither of the answers be",
          "Neither of the answers were",
          "Neither of the answers seems"
        ],
        "correctIndex": 3,
        "explanation": "Neither usually takes a singular verb in formal grammar.",
        "tag": "Correction",
        "difficulty": "Intermediate",
        "sequence": 24
      },
      {
        "prompt": "Which verb matches the head noun in \"Neither of the answers\"?",
        "options": [
          "be",
          "being",
          "seems",
          "seem"
        ],
        "correctIndex": 2,
        "explanation": "Neither usually takes a singular verb in formal grammar.",
        "tag": "Head noun",
        "difficulty": "Intermediate",
        "sequence": 25
      },
      {
        "prompt": "Which answer follows standard formal agreement?",
        "options": [
          "have been",
          "seems",
          "seem",
          "be"
        ],
        "correctIndex": 1,
        "explanation": "Neither usually takes a singular verb in formal grammar.",
        "tag": "Formal grammar",
        "difficulty": "Intermediate",
        "sequence": 26
      },
      {
        "prompt": "Complete the sentence correctly: \"Neither of the answers ___ ready.\"",
        "options": [
          "seems",
          "seem",
          "be",
          "being"
        ],
        "correctIndex": 0,
        "explanation": "Neither usually takes a singular verb in formal grammar.",
        "tag": "Completion",
        "difficulty": "Intermediate",
        "sequence": 27
      },
      {
        "prompt": "Which rule applies to \"Neither of the answers\"?",
        "options": [
          "The closest noun always controls agreement.",
          "Subjects with each are always plural.",
          "Agreement ignores the head noun.",
          "Neither usually takes a singular verb in formal grammar."
        ],
        "correctIndex": 3,
        "explanation": "Neither usually takes a singular verb in formal grammar.",
        "tag": "Rule",
        "difficulty": "Intermediate",
        "sequence": 28
      },
      {
        "prompt": "Choose the grammatical verb form for \"Neither of the answers\"",
        "options": [
          "were",
          "be",
          "seems",
          "seem"
        ],
        "correctIndex": 2,
        "explanation": "Neither usually takes a singular verb in formal grammar.",
        "tag": "Grammar",
        "difficulty": "Intermediate",
        "sequence": 29
      },
      {
        "prompt": "Which option would you keep in an edited sentence with \"Neither of the answers\"?",
        "options": [
          "having",
          "seems",
          "seem",
          "been"
        ],
        "correctIndex": 1,
        "explanation": "Neither usually takes a singular verb in formal grammar.",
        "tag": "Editing",
        "difficulty": "Intermediate",
        "sequence": 30
      },
      {
        "prompt": "Choose the correct verb: \"The results of the survey ___ improving.\"",
        "options": [
          "were",
          "shows",
          "show",
          "be"
        ],
        "correctIndex": 1,
        "explanation": "Results is the head noun and it is plural.",
        "tag": "Agreement",
        "difficulty": "Intermediate",
        "sequence": 31
      },
      {
        "prompt": "Which sentence is correct?",
        "options": [
          "The results of the survey shows improving.",
          "The results of the survey show improving.",
          "The results of the survey improve improving.",
          "The results of the survey been improving."
        ],
        "correctIndex": 0,
        "explanation": "Results is the head noun and it is plural.",
        "tag": "Correct sentence",
        "difficulty": "Intermediate",
        "sequence": 32
      },
      {
        "prompt": "Which explanation is correct for \"The results of the survey\"?",
        "options": [
          "The nearest noun decides the verb.",
          "All subjects with of are plural.",
          "Interrupting phrases become the true subject.",
          "Results is the head noun and it is plural."
        ],
        "correctIndex": 3,
        "explanation": "Results is the head noun and it is plural.",
        "tag": "Explanation",
        "difficulty": "Intermediate",
        "sequence": 33
      },
      {
        "prompt": "If a learner writes \"The results of the survey show\", what is the better correction?",
        "options": [
          "The results of the survey be",
          "The results of the survey were",
          "The results of the survey shows",
          "The results of the survey show"
        ],
        "correctIndex": 2,
        "explanation": "Results is the head noun and it is plural.",
        "tag": "Correction",
        "difficulty": "Intermediate",
        "sequence": 34
      },
      {
        "prompt": "Which verb matches the head noun in \"The results of the survey\"?",
        "options": [
          "being",
          "shows",
          "show",
          "be"
        ],
        "correctIndex": 1,
        "explanation": "Results is the head noun and it is plural.",
        "tag": "Head noun",
        "difficulty": "Intermediate",
        "sequence": 35
      },
      {
        "prompt": "Which answer follows standard formal agreement?",
        "options": [
          "shows",
          "show",
          "be",
          "have been"
        ],
        "correctIndex": 0,
        "explanation": "Results is the head noun and it is plural.",
        "tag": "Formal grammar",
        "difficulty": "Intermediate",
        "sequence": 36
      },
      {
        "prompt": "Complete the sentence correctly: \"The results of the survey ___ ready.\"",
        "options": [
          "show",
          "be",
          "being",
          "shows"
        ],
        "correctIndex": 3,
        "explanation": "Results is the head noun and it is plural.",
        "tag": "Completion",
        "difficulty": "Intermediate",
        "sequence": 37
      },
      {
        "prompt": "Which rule applies to \"The results of the survey\"?",
        "options": [
          "Subjects with each are always plural.",
          "Agreement ignores the head noun.",
          "Results is the head noun and it is plural.",
          "The closest noun always controls agreement."
        ],
        "correctIndex": 2,
        "explanation": "Results is the head noun and it is plural.",
        "tag": "Rule",
        "difficulty": "Intermediate",
        "sequence": 38
      },
      {
        "prompt": "Choose the grammatical verb form for \"The results of the survey\"",
        "options": [
          "be",
          "shows",
          "show",
          "were"
        ],
        "correctIndex": 1,
        "explanation": "Results is the head noun and it is plural.",
        "tag": "Grammar",
        "difficulty": "Intermediate",
        "sequence": 39
      },
      {
        "prompt": "Which option would you keep in an edited sentence with \"The results of the survey\"?",
        "options": [
          "shows",
          "show",
          "been",
          "having"
        ],
        "correctIndex": 0,
        "explanation": "Results is the head noun and it is plural.",
        "tag": "Editing",
        "difficulty": "Intermediate",
        "sequence": 40
      },
      {
        "prompt": "Choose the correct verb: \"A number of students ___ improving.\"",
        "options": [
          "is",
          "are",
          "be",
          "were"
        ],
        "correctIndex": 0,
        "explanation": "A number of takes a plural verb.",
        "tag": "Agreement",
        "difficulty": "Advanced",
        "sequence": 41
      },
      {
        "prompt": "Which sentence is correct?",
        "options": [
          "A number of students are improving.",
          "A number of students improve improving.",
          "A number of students been improving.",
          "A number of students is improving."
        ],
        "correctIndex": 3,
        "explanation": "A number of takes a plural verb.",
        "tag": "Correct sentence",
        "difficulty": "Advanced",
        "sequence": 42
      },
      {
        "prompt": "Which explanation is correct for \"A number of students\"?",
        "options": [
          "All subjects with of are plural.",
          "Interrupting phrases become the true subject.",
          "A number of takes a plural verb.",
          "The nearest noun decides the verb."
        ],
        "correctIndex": 2,
        "explanation": "A number of takes a plural verb.",
        "tag": "Explanation",
        "difficulty": "Advanced",
        "sequence": 43
      },
      {
        "prompt": "If a learner writes \"A number of students are\", what is the better correction?",
        "options": [
          "A number of students were",
          "A number of students is",
          "A number of students are",
          "A number of students be"
        ],
        "correctIndex": 1,
        "explanation": "A number of takes a plural verb.",
        "tag": "Correction",
        "difficulty": "Advanced",
        "sequence": 44
      },
      {
        "prompt": "Which verb matches the head noun in \"A number of students\"?",
        "options": [
          "is",
          "are",
          "be",
          "being"
        ],
        "correctIndex": 0,
        "explanation": "A number of takes a plural verb.",
        "tag": "Head noun",
        "difficulty": "Advanced",
        "sequence": 45
      },
      {
        "prompt": "Which answer follows standard formal agreement?",
        "options": [
          "are",
          "be",
          "have been",
          "is"
        ],
        "correctIndex": 3,
        "explanation": "A number of takes a plural verb.",
        "tag": "Formal grammar",
        "difficulty": "Advanced",
        "sequence": 46
      },
      {
        "prompt": "Complete the sentence correctly: \"A number of students ___ ready.\"",
        "options": [
          "be",
          "being",
          "is",
          "are"
        ],
        "correctIndex": 2,
        "explanation": "A number of takes a plural verb.",
        "tag": "Completion",
        "difficulty": "Advanced",
        "sequence": 47
      },
      {
        "prompt": "Which rule applies to \"A number of students\"?",
        "options": [
          "Agreement ignores the head noun.",
          "A number of takes a plural verb.",
          "The closest noun always controls agreement.",
          "Subjects with each are always plural."
        ],
        "correctIndex": 1,
        "explanation": "A number of takes a plural verb.",
        "tag": "Rule",
        "difficulty": "Advanced",
        "sequence": 48
      },
      {
        "prompt": "Choose the grammatical verb form for \"A number of students\"",
        "options": [
          "is",
          "are",
          "were",
          "be"
        ],
        "correctIndex": 0,
        "explanation": "A number of takes a plural verb.",
        "tag": "Grammar",
        "difficulty": "Advanced",
        "sequence": 49
      },
      {
        "prompt": "Which option would you keep in an edited sentence with \"A number of students\"?",
        "options": [
          "are",
          "been",
          "having",
          "is"
        ],
        "correctIndex": 3,
        "explanation": "A number of takes a plural verb.",
        "tag": "Editing",
        "difficulty": "Advanced",
        "sequence": 50
      },
      {
        "prompt": "Choose the correct verb: \"The quality of the essays ___ improving.\"",
        "options": [
          "are",
          "be",
          "were",
          "is"
        ],
        "correctIndex": 3,
        "explanation": "Quality is singular even though essays is plural.",
        "tag": "Agreement",
        "difficulty": "Advanced",
        "sequence": 51
      },
      {
        "prompt": "Which sentence is correct?",
        "options": [
          "The quality of the essays improve improving.",
          "The quality of the essays been improving.",
          "The quality of the essays is improving.",
          "The quality of the essays are improving."
        ],
        "correctIndex": 2,
        "explanation": "Quality is singular even though essays is plural.",
        "tag": "Correct sentence",
        "difficulty": "Advanced",
        "sequence": 52
      },
      {
        "prompt": "Which explanation is correct for \"The quality of the essays\"?",
        "options": [
          "Interrupting phrases become the true subject.",
          "Quality is singular even though essays is plural.",
          "The nearest noun decides the verb.",
          "All subjects with of are plural."
        ],
        "correctIndex": 1,
        "explanation": "Quality is singular even though essays is plural.",
        "tag": "Explanation",
        "difficulty": "Advanced",
        "sequence": 53
      },
      {
        "prompt": "If a learner writes \"The quality of the essays are\", what is the better correction?",
        "options": [
          "The quality of the essays is",
          "The quality of the essays are",
          "The quality of the essays be",
          "The quality of the essays were"
        ],
        "correctIndex": 0,
        "explanation": "Quality is singular even though essays is plural.",
        "tag": "Correction",
        "difficulty": "Advanced",
        "sequence": 54
      },
      {
        "prompt": "Which verb matches the head noun in \"The quality of the essays\"?",
        "options": [
          "are",
          "be",
          "being",
          "is"
        ],
        "correctIndex": 3,
        "explanation": "Quality is singular even though essays is plural.",
        "tag": "Head noun",
        "difficulty": "Advanced",
        "sequence": 55
      },
      {
        "prompt": "Which answer follows standard formal agreement?",
        "options": [
          "be",
          "have been",
          "is",
          "are"
        ],
        "correctIndex": 2,
        "explanation": "Quality is singular even though essays is plural.",
        "tag": "Formal grammar",
        "difficulty": "Advanced",
        "sequence": 56
      },
      {
        "prompt": "Complete the sentence correctly: \"The quality of the essays ___ ready.\"",
        "options": [
          "being",
          "is",
          "are",
          "be"
        ],
        "correctIndex": 1,
        "explanation": "Quality is singular even though essays is plural.",
        "tag": "Completion",
        "difficulty": "Advanced",
        "sequence": 57
      },
      {
        "prompt": "Which rule applies to \"The quality of the essays\"?",
        "options": [
          "Quality is singular even though essays is plural.",
          "The closest noun always controls agreement.",
          "Subjects with each are always plural.",
          "Agreement ignores the head noun."
        ],
        "correctIndex": 0,
        "explanation": "Quality is singular even though essays is plural.",
        "tag": "Rule",
        "difficulty": "Advanced",
        "sequence": 58
      },
      {
        "prompt": "Choose the grammatical verb form for \"The quality of the essays\"",
        "options": [
          "are",
          "were",
          "be",
          "is"
        ],
        "correctIndex": 3,
        "explanation": "Quality is singular even though essays is plural.",
        "tag": "Grammar",
        "difficulty": "Advanced",
        "sequence": 59
      },
      {
        "prompt": "Which option would you keep in an edited sentence with \"The quality of the essays\"?",
        "options": [
          "been",
          "having",
          "is",
          "are"
        ],
        "correctIndex": 2,
        "explanation": "Quality is singular even though essays is plural.",
        "tag": "Editing",
        "difficulty": "Advanced",
        "sequence": 60
      }
    ],
    "advanced": [
      {
        "prompt": "Choose the correct verb: \"The list of topics ___ improving.\"",
        "options": [
          "is",
          "are",
          "be",
          "were"
        ],
        "correctIndex": 0,
        "explanation": "The head noun list is singular.",
        "tag": "Agreement",
        "difficulty": "Review Challenge",
        "sequence": 1
      },
      {
        "prompt": "Which sentence is correct?",
        "options": [
          "The list of topics are improving.",
          "The list of topics improve improving.",
          "The list of topics been improving.",
          "The list of topics is improving."
        ],
        "correctIndex": 3,
        "explanation": "The head noun list is singular.",
        "tag": "Correct sentence",
        "difficulty": "Review Challenge",
        "sequence": 2
      },
      {
        "prompt": "Which explanation is correct for \"The list of topics\"?",
        "options": [
          "All subjects with of are plural.",
          "Interrupting phrases become the true subject.",
          "The head noun list is singular.",
          "The nearest noun decides the verb."
        ],
        "correctIndex": 2,
        "explanation": "The head noun list is singular.",
        "tag": "Explanation",
        "difficulty": "Review Challenge",
        "sequence": 3
      },
      {
        "prompt": "If a learner writes \"The list of topics are\", what is the better correction?",
        "options": [
          "The list of topics were",
          "The list of topics is",
          "The list of topics are",
          "The list of topics be"
        ],
        "correctIndex": 1,
        "explanation": "The head noun list is singular.",
        "tag": "Correction",
        "difficulty": "Review Challenge",
        "sequence": 4
      },
      {
        "prompt": "Which answer follows standard formal agreement?",
        "options": [
          "are",
          "be",
          "have been",
          "is"
        ],
        "correctIndex": 3,
        "explanation": "The head noun list is singular.",
        "tag": "Formal grammar",
        "difficulty": "Review Challenge",
        "sequence": 5
      },
      {
        "prompt": "Complete the sentence correctly: \"The list of topics ___ ready.\"",
        "options": [
          "be",
          "being",
          "is",
          "are"
        ],
        "correctIndex": 2,
        "explanation": "The head noun list is singular.",
        "tag": "Completion",
        "difficulty": "Review Challenge",
        "sequence": 6
      },
      {
        "prompt": "Which focus best matches the main learning challenge in \"Subject-Verb Agreement\"?",
        "options": [
          "Identify the job each word does inside a sentence.",
          "Build complete sentences with subjects, verbs, and clear complements.",
          "Use a, an, the, some, and zero article correctly.",
          "Match the verb to the true head of the subject."
        ],
        "correctIndex": 3,
        "explanation": "The focus of this lesson is: Match the verb to the true head of the subject.",
        "tag": "Advanced focus",
        "difficulty": "Review Challenge",
        "sequence": 7
      },
      {
        "prompt": "Which rule belongs most directly to \"Subject-Verb Agreement\"?",
        "options": [
          "Adjectives describe nouns; adverbs usually modify verbs, adjectives, or other adverbs.",
          "Determiners such as the, a, this, and many signal which noun you mean.",
          "A singular subject takes a singular verb; a plural subject takes a plural verb.",
          "A noun names a person, place, thing, or idea, while a verb shows action or state."
        ],
        "correctIndex": 2,
        "explanation": "A singular subject takes a singular verb; a plural subject takes a plural verb.",
        "tag": "Rule distinction",
        "difficulty": "Review Challenge",
        "sequence": 8
      },
      {
        "prompt": "Which editing warning is most important to remember in \"Subject-Verb Agreement\"?",
        "options": [
          {
            "wrong": "The news is exciting. She is exciting.",
            "right": "The news is exciting. She is excited.",
            "note": "Use the -ed adjective for the person's feeling, -ing for the thing's quality."
          },
          {
            "wrong": "The group of friends are going to the beach.",
            "right": "The group of friends is going to the beach.",
            "note": "Group is singular; prepositional phrases don't change agreement."
          },
          {
            "wrong": "I have a friendly meeting tomorrow.",
            "right": "I have a friendly meeting tomorrow.",
            "note": "Friendly is an adjective here, not an adverb, so no -ly suffix needed."
          },
          {
            "wrong": "He ran quick to the store.",
            "right": "He ran quickly to the store.",
            "note": "Adverbs modify verbs; use quickly, not quick."
          }
        ],
        "correctIndex": 1,
        "explanation": {
          "wrong": "The group of friends are going to the beach.",
          "right": "The group of friends is going to the beach.",
          "note": "Group is singular; prepositional phrases don't change agreement."
        },
        "tag": "Pitfall check",
        "difficulty": "Review Challenge",
        "sequence": 9
      },
      {
        "prompt": "Which practice move best extends the lesson after you finish the core explanation?",
        "options": [
          "Exercise 1 - Identification: Read a paragraph and underline the true subject and the correct verb form in each sentence.",
          "Exercise 1 - Labeling: Read a paragraph and mark each word with its part of speech (noun, verb, adj, adv, etc.)",
          "Exercise 2 - Identification: Identify the target word class in each sentence: 'Find the adverb that modifies ran.'",
          "Exercise 3 - Word Transformation: Transform words to different classes (run→runner→running; quick→quickly)"
        ],
        "correctIndex": 0,
        "explanation": "Exercise 1 - Identification: Read a paragraph and underline the true subject and the correct verb form in each sentence.",
        "tag": "Practice transfer",
        "difficulty": "Review Challenge",
        "sequence": 10
      },
      {
        "prompt": "Which explanation best matches this model sentence from \"Subject-Verb Agreement\"? \"The list of topics is on the table.\"",
        "options": [
          "student (noun), curious (adjective), quickly (adverb), opened (verb)",
          "She (pronoun), carefully (adverb), explained (verb), importance (noun)",
          "Although (conjunction), raining (verb form), we (pronoun), near (preposition), mountain (noun)",
          "List is the head noun (singular); topics is in a prepositional phrase."
        ],
        "correctIndex": 3,
        "explanation": "List is the head noun (singular); topics is in a prepositional phrase.",
        "tag": "Example analysis",
        "difficulty": "Review Challenge",
        "sequence": 11
      },
      {
        "prompt": "Which objective belongs to \"Subject-Verb Agreement\"?",
        "options": [
          "Separate form from function when a word changes category by use.",
          "Explain why the same word can behave differently across contexts.",
          "Find the true head of complex subjects.",
          "Recognize the major word classes in authentic sentences."
        ],
        "correctIndex": 2,
        "explanation": "Find the true head of complex subjects.",
        "tag": "Objective check",
        "difficulty": "Review Challenge",
        "sequence": 12
      },
      {
        "prompt": "Which portfolio task best fits the module that contains \"Subject-Verb Agreement\"?",
        "options": [
          "Write a multi-paragraph response using at least one relative clause, one conditional, one reported statement, and one verb-pattern contrast.",
          "Edit an old paragraph only for sentence-level accuracy and annotate each correction.",
          "Write a 150-word self-introduction and label nouns, verbs, articles, and sentence types.",
          "Write a three-part narrative using present, past, and future meaning accurately."
        ],
        "correctIndex": 1,
        "explanation": "Edit an old paragraph only for sentence-level accuracy and annotate each correction.",
        "tag": "Portfolio transfer",
        "difficulty": "Review Challenge",
        "sequence": 13
      },
      {
        "prompt": "Which module description best fits the context of \"Subject-Verb Agreement\"?",
        "options": [
          "Strengthen agreement, pronoun reference, auxiliary use, pattern control, and active-passive choices.",
          "Build a clean base in word classes, sentence architecture, and noun phrases before moving into more advanced control.",
          "Learn how English grammar maps routine, action-in-progress, experience, finished time, future reference, and modal meaning.",
          "Use clauses, relative structures, conditionals, reported speech, and verb patterns to communicate more complex relationships."
        ],
        "correctIndex": 0,
        "explanation": "Strengthen agreement, pronoun reference, auxiliary use, pattern control, and active-passive choices.",
        "tag": "Module alignment",
        "difficulty": "Review Challenge",
        "sequence": 14
      },
      {
        "prompt": "Which reading insight best matches the story work in \"Subject-Verb Agreement\"?",
        "options": [
          "Market (noun), Saturday (noun), Maya (noun) are the main subjects and objects.",
          "Visits, walks, looking, shows, answer, select, stands are action verbs showing what people do.",
          "Busy, colorful, fresh, ripe describe nouns (busy market, colorful stalls).",
          "Committee, despite having many members internally, is singular and takes is."
        ],
        "correctIndex": 3,
        "explanation": "Committee, despite having many members internally, is singular and takes is.",
        "tag": "Story analysis",
        "difficulty": "Review Challenge",
        "sequence": 15
      },
      {
        "prompt": "Which verb matches the head noun in \"The list of topics\"?",
        "options": [
          "is",
          "are",
          "be",
          "being"
        ],
        "correctIndex": 0,
        "explanation": "The head noun list is singular.",
        "tag": "Head noun",
        "difficulty": "Review Challenge",
        "sequence": 16
      },
      {
        "prompt": "Which rule applies to \"The list of topics\"?",
        "options": [
          "Agreement ignores the head noun.",
          "The head noun list is singular.",
          "The closest noun always controls agreement.",
          "Subjects with each are always plural."
        ],
        "correctIndex": 1,
        "explanation": "The head noun list is singular.",
        "tag": "Rule",
        "difficulty": "Review Challenge",
        "sequence": 17
      },
      {
        "prompt": "Choose the grammatical verb form for \"The list of topics\"",
        "options": [
          "is",
          "are",
          "were",
          "be"
        ],
        "correctIndex": 0,
        "explanation": "The head noun list is singular.",
        "tag": "Grammar",
        "difficulty": "Review Challenge",
        "sequence": 18
      },
      {
        "prompt": "Which option would you keep in an edited sentence with \"The list of topics\"?",
        "options": [
          "are",
          "been",
          "having",
          "is"
        ],
        "correctIndex": 3,
        "explanation": "The head noun list is singular.",
        "tag": "Editing",
        "difficulty": "Review Challenge",
        "sequence": 19
      },
      {
        "prompt": "Choose the correct verb: \"Each of the students ___ improving.\"",
        "options": [
          "have",
          "be",
          "were",
          "has"
        ],
        "correctIndex": 3,
        "explanation": "Each is singular in formal standard English.",
        "tag": "Agreement",
        "difficulty": "Review Challenge",
        "sequence": 20
      }
    ]
  },
  "pronouns-questions-negatives": {
    "standard": [
      {
        "prompt": "Choose the best completion: \"Why ___ you leave early?\"",
        "options": [
          "did",
          "do",
          "does",
          "were"
        ],
        "correctIndex": 0,
        "explanation": "Past simple questions need did plus the base verb.",
        "tag": "Completion",
        "difficulty": "Basic",
        "sequence": 1
      },
      {
        "prompt": "Which option creates standard English in \"Why ___ you leave early?\"?",
        "options": [
          "do",
          "does",
          "were",
          "did"
        ],
        "correctIndex": 3,
        "explanation": "Past simple questions need did plus the base verb.",
        "tag": "Standard form",
        "difficulty": "Basic",
        "sequence": 2
      },
      {
        "prompt": "Select the form that avoids a grammar or reference error: \"Why ___ you leave early?\"",
        "options": [
          "does",
          "were",
          "did",
          "do"
        ],
        "correctIndex": 2,
        "explanation": "Past simple questions need did plus the base verb.",
        "tag": "Accuracy",
        "difficulty": "Basic",
        "sequence": 3
      },
      {
        "prompt": "What should replace the blank in \"Why ___ you leave early?\"?",
        "options": [
          "were",
          "did",
          "do",
          "does"
        ],
        "correctIndex": 1,
        "explanation": "Past simple questions need did plus the base verb.",
        "tag": "Blank",
        "difficulty": "Basic",
        "sequence": 4
      },
      {
        "prompt": "Which answer matches the lesson rule for this sentence? \"Why ___ you leave early?\"",
        "options": [
          "did",
          "do",
          "does",
          "were"
        ],
        "correctIndex": 0,
        "explanation": "Past simple questions need did plus the base verb.",
        "tag": "Rule match",
        "difficulty": "Basic",
        "sequence": 5
      },
      {
        "prompt": "Which answer would you keep after editing \"Why ___ you leave early?\"?",
        "options": [
          "do",
          "does",
          "were",
          "did"
        ],
        "correctIndex": 3,
        "explanation": "Past simple questions need did plus the base verb.",
        "tag": "Editing",
        "difficulty": "Basic",
        "sequence": 6
      },
      {
        "prompt": "Which explanation is best here?",
        "options": [
          "Reflexive pronouns replace all object pronouns.",
          "Ambiguous pronouns always improve style.",
          "Past simple questions need did plus the base verb.",
          "Present simple questions never use auxiliaries."
        ],
        "correctIndex": 2,
        "explanation": "Past simple questions need did plus the base verb.",
        "tag": "Explanation",
        "difficulty": "Basic",
        "sequence": 7
      },
      {
        "prompt": "Choose the grammatical option for \"Why ___ you leave early?\"",
        "options": [
          "were",
          "did",
          "do",
          "does"
        ],
        "correctIndex": 1,
        "explanation": "Past simple questions need did plus the base verb.",
        "tag": "Grammar",
        "difficulty": "Basic",
        "sequence": 8
      },
      {
        "prompt": "What is the clearest correction for \"Why ___ you leave early?\"?",
        "options": [
          "did",
          "do",
          "does",
          "were"
        ],
        "correctIndex": 0,
        "explanation": "Past simple questions need did plus the base verb.",
        "tag": "Correction",
        "difficulty": "Basic",
        "sequence": 9
      },
      {
        "prompt": "A learner hesitates over \"Why ___ you leave early?\". Which answer is correct?",
        "options": [
          "do",
          "does",
          "were",
          "did"
        ],
        "correctIndex": 3,
        "explanation": "Past simple questions need did plus the base verb.",
        "tag": "Learner check",
        "difficulty": "Basic",
        "sequence": 10
      },
      {
        "prompt": "Choose the best completion: \"Where ___ she work now?\"",
        "options": [
          "do",
          "did",
          "is",
          "does"
        ],
        "correctIndex": 3,
        "explanation": "Present simple questions with she use does.",
        "tag": "Completion",
        "difficulty": "Basic",
        "sequence": 11
      },
      {
        "prompt": "Which option creates standard English in \"Where ___ she work now?\"?",
        "options": [
          "did",
          "is",
          "does",
          "do"
        ],
        "correctIndex": 2,
        "explanation": "Present simple questions with she use does.",
        "tag": "Standard form",
        "difficulty": "Basic",
        "sequence": 12
      },
      {
        "prompt": "Select the form that avoids a grammar or reference error: \"Where ___ she work now?\"",
        "options": [
          "is",
          "does",
          "do",
          "did"
        ],
        "correctIndex": 1,
        "explanation": "Present simple questions with she use does.",
        "tag": "Accuracy",
        "difficulty": "Basic",
        "sequence": 13
      },
      {
        "prompt": "What should replace the blank in \"Where ___ she work now?\"?",
        "options": [
          "does",
          "do",
          "did",
          "is"
        ],
        "correctIndex": 0,
        "explanation": "Present simple questions with she use does.",
        "tag": "Blank",
        "difficulty": "Basic",
        "sequence": 14
      },
      {
        "prompt": "Which answer matches the lesson rule for this sentence? \"Where ___ she work now?\"",
        "options": [
          "do",
          "did",
          "is",
          "does"
        ],
        "correctIndex": 3,
        "explanation": "Present simple questions with she use does.",
        "tag": "Rule match",
        "difficulty": "Basic",
        "sequence": 15
      },
      {
        "prompt": "Which answer would you keep after editing \"Where ___ she work now?\"?",
        "options": [
          "did",
          "is",
          "does",
          "do"
        ],
        "correctIndex": 2,
        "explanation": "Present simple questions with she use does.",
        "tag": "Editing",
        "difficulty": "Basic",
        "sequence": 16
      },
      {
        "prompt": "Which explanation is best here?",
        "options": [
          "Ambiguous pronouns always improve style.",
          "Present simple questions with she use does.",
          "Present simple questions never use auxiliaries.",
          "Reflexive pronouns replace all object pronouns."
        ],
        "correctIndex": 1,
        "explanation": "Present simple questions with she use does.",
        "tag": "Explanation",
        "difficulty": "Basic",
        "sequence": 17
      },
      {
        "prompt": "Choose the grammatical option for \"Where ___ she work now?\"",
        "options": [
          "does",
          "do",
          "did",
          "is"
        ],
        "correctIndex": 0,
        "explanation": "Present simple questions with she use does.",
        "tag": "Grammar",
        "difficulty": "Basic",
        "sequence": 18
      },
      {
        "prompt": "What is the clearest correction for \"Where ___ she work now?\"?",
        "options": [
          "do",
          "did",
          "is",
          "does"
        ],
        "correctIndex": 3,
        "explanation": "Present simple questions with she use does.",
        "tag": "Correction",
        "difficulty": "Basic",
        "sequence": 19
      },
      {
        "prompt": "A learner hesitates over \"Where ___ she work now?\". Which answer is correct?",
        "options": [
          "did",
          "is",
          "does",
          "do"
        ],
        "correctIndex": 2,
        "explanation": "Present simple questions with she use does.",
        "tag": "Learner check",
        "difficulty": "Basic",
        "sequence": 20
      },
      {
        "prompt": "Choose the best completion: \"Ravi told Karan that ___ was late.\"",
        "options": [
          "himself",
          "they",
          "Karan",
          "he"
        ],
        "correctIndex": 2,
        "explanation": "Naming the person removes ambiguous pronoun reference.",
        "tag": "Completion",
        "difficulty": "Intermediate",
        "sequence": 21
      },
      {
        "prompt": "Which option creates standard English in \"Ravi told Karan that ___ was late.\"?",
        "options": [
          "they",
          "Karan",
          "he",
          "himself"
        ],
        "correctIndex": 1,
        "explanation": "Naming the person removes ambiguous pronoun reference.",
        "tag": "Standard form",
        "difficulty": "Intermediate",
        "sequence": 22
      },
      {
        "prompt": "Select the form that avoids a grammar or reference error: \"Ravi told Karan that ___ was late.\"",
        "options": [
          "Karan",
          "he",
          "himself",
          "they"
        ],
        "correctIndex": 0,
        "explanation": "Naming the person removes ambiguous pronoun reference.",
        "tag": "Accuracy",
        "difficulty": "Intermediate",
        "sequence": 23
      },
      {
        "prompt": "What should replace the blank in \"Ravi told Karan that ___ was late.\"?",
        "options": [
          "he",
          "himself",
          "they",
          "Karan"
        ],
        "correctIndex": 3,
        "explanation": "Naming the person removes ambiguous pronoun reference.",
        "tag": "Blank",
        "difficulty": "Intermediate",
        "sequence": 24
      },
      {
        "prompt": "Which answer matches the lesson rule for this sentence? \"Ravi told Karan that ___ was late.\"",
        "options": [
          "himself",
          "they",
          "Karan",
          "he"
        ],
        "correctIndex": 2,
        "explanation": "Naming the person removes ambiguous pronoun reference.",
        "tag": "Rule match",
        "difficulty": "Intermediate",
        "sequence": 25
      },
      {
        "prompt": "Which answer would you keep after editing \"Ravi told Karan that ___ was late.\"?",
        "options": [
          "they",
          "Karan",
          "he",
          "himself"
        ],
        "correctIndex": 1,
        "explanation": "Naming the person removes ambiguous pronoun reference.",
        "tag": "Editing",
        "difficulty": "Intermediate",
        "sequence": 26
      },
      {
        "prompt": "Which explanation is best here?",
        "options": [
          "Naming the person removes ambiguous pronoun reference.",
          "Present simple questions never use auxiliaries.",
          "Reflexive pronouns replace all object pronouns.",
          "Ambiguous pronouns always improve style."
        ],
        "correctIndex": 0,
        "explanation": "Naming the person removes ambiguous pronoun reference.",
        "tag": "Explanation",
        "difficulty": "Intermediate",
        "sequence": 27
      },
      {
        "prompt": "Choose the grammatical option for \"Ravi told Karan that ___ was late.\"",
        "options": [
          "he",
          "himself",
          "they",
          "Karan"
        ],
        "correctIndex": 3,
        "explanation": "Naming the person removes ambiguous pronoun reference.",
        "tag": "Grammar",
        "difficulty": "Intermediate",
        "sequence": 28
      },
      {
        "prompt": "What is the clearest correction for \"Ravi told Karan that ___ was late.\"?",
        "options": [
          "himself",
          "they",
          "Karan",
          "he"
        ],
        "correctIndex": 2,
        "explanation": "Naming the person removes ambiguous pronoun reference.",
        "tag": "Correction",
        "difficulty": "Intermediate",
        "sequence": 29
      },
      {
        "prompt": "A learner hesitates over \"Ravi told Karan that ___ was late.\". Which answer is correct?",
        "options": [
          "they",
          "Karan",
          "he",
          "himself"
        ],
        "correctIndex": 1,
        "explanation": "Naming the person removes ambiguous pronoun reference.",
        "tag": "Learner check",
        "difficulty": "Intermediate",
        "sequence": 30
      },
      {
        "prompt": "Choose the best completion: \"Sara hurt ___ while moving the desk.\"",
        "options": [
          "hers",
          "herself",
          "her",
          "she"
        ],
        "correctIndex": 1,
        "explanation": "A reflexive pronoun is used when the subject and object are the same.",
        "tag": "Completion",
        "difficulty": "Intermediate",
        "sequence": 31
      },
      {
        "prompt": "Which option creates standard English in \"Sara hurt ___ while moving the desk.\"?",
        "options": [
          "herself",
          "her",
          "she",
          "hers"
        ],
        "correctIndex": 0,
        "explanation": "A reflexive pronoun is used when the subject and object are the same.",
        "tag": "Standard form",
        "difficulty": "Intermediate",
        "sequence": 32
      },
      {
        "prompt": "Select the form that avoids a grammar or reference error: \"Sara hurt ___ while moving the desk.\"",
        "options": [
          "her",
          "she",
          "hers",
          "herself"
        ],
        "correctIndex": 3,
        "explanation": "A reflexive pronoun is used when the subject and object are the same.",
        "tag": "Accuracy",
        "difficulty": "Intermediate",
        "sequence": 33
      },
      {
        "prompt": "What should replace the blank in \"Sara hurt ___ while moving the desk.\"?",
        "options": [
          "she",
          "hers",
          "herself",
          "her"
        ],
        "correctIndex": 2,
        "explanation": "A reflexive pronoun is used when the subject and object are the same.",
        "tag": "Blank",
        "difficulty": "Intermediate",
        "sequence": 34
      },
      {
        "prompt": "Which answer matches the lesson rule for this sentence? \"Sara hurt ___ while moving the desk.\"",
        "options": [
          "hers",
          "herself",
          "her",
          "she"
        ],
        "correctIndex": 1,
        "explanation": "A reflexive pronoun is used when the subject and object are the same.",
        "tag": "Rule match",
        "difficulty": "Intermediate",
        "sequence": 35
      },
      {
        "prompt": "Which answer would you keep after editing \"Sara hurt ___ while moving the desk.\"?",
        "options": [
          "herself",
          "her",
          "she",
          "hers"
        ],
        "correctIndex": 0,
        "explanation": "A reflexive pronoun is used when the subject and object are the same.",
        "tag": "Editing",
        "difficulty": "Intermediate",
        "sequence": 36
      },
      {
        "prompt": "Which explanation is best here?",
        "options": [
          "Present simple questions never use auxiliaries.",
          "Reflexive pronouns replace all object pronouns.",
          "Ambiguous pronouns always improve style.",
          "A reflexive pronoun is used when the subject and object are the same."
        ],
        "correctIndex": 3,
        "explanation": "A reflexive pronoun is used when the subject and object are the same.",
        "tag": "Explanation",
        "difficulty": "Intermediate",
        "sequence": 37
      },
      {
        "prompt": "Choose the grammatical option for \"Sara hurt ___ while moving the desk.\"",
        "options": [
          "she",
          "hers",
          "herself",
          "her"
        ],
        "correctIndex": 2,
        "explanation": "A reflexive pronoun is used when the subject and object are the same.",
        "tag": "Grammar",
        "difficulty": "Intermediate",
        "sequence": 38
      },
      {
        "prompt": "What is the clearest correction for \"Sara hurt ___ while moving the desk.\"?",
        "options": [
          "hers",
          "herself",
          "her",
          "she"
        ],
        "correctIndex": 1,
        "explanation": "A reflexive pronoun is used when the subject and object are the same.",
        "tag": "Correction",
        "difficulty": "Intermediate",
        "sequence": 39
      },
      {
        "prompt": "A learner hesitates over \"Sara hurt ___ while moving the desk.\". Which answer is correct?",
        "options": [
          "herself",
          "her",
          "she",
          "hers"
        ],
        "correctIndex": 0,
        "explanation": "A reflexive pronoun is used when the subject and object are the same.",
        "tag": "Learner check",
        "difficulty": "Intermediate",
        "sequence": 40
      },
      {
        "prompt": "Choose the best completion: \"I ___ understand the question.\"",
        "options": [
          "do not",
          "am not",
          "does not",
          "did not"
        ],
        "correctIndex": 0,
        "explanation": "Simple present negatives use do not with I.",
        "tag": "Completion",
        "difficulty": "Advanced",
        "sequence": 41
      },
      {
        "prompt": "Which option creates standard English in \"I ___ understand the question.\"?",
        "options": [
          "am not",
          "does not",
          "did not",
          "do not"
        ],
        "correctIndex": 3,
        "explanation": "Simple present negatives use do not with I.",
        "tag": "Standard form",
        "difficulty": "Advanced",
        "sequence": 42
      },
      {
        "prompt": "Select the form that avoids a grammar or reference error: \"I ___ understand the question.\"",
        "options": [
          "does not",
          "did not",
          "do not",
          "am not"
        ],
        "correctIndex": 2,
        "explanation": "Simple present negatives use do not with I.",
        "tag": "Accuracy",
        "difficulty": "Advanced",
        "sequence": 43
      },
      {
        "prompt": "What should replace the blank in \"I ___ understand the question.\"?",
        "options": [
          "did not",
          "do not",
          "am not",
          "does not"
        ],
        "correctIndex": 1,
        "explanation": "Simple present negatives use do not with I.",
        "tag": "Blank",
        "difficulty": "Advanced",
        "sequence": 44
      },
      {
        "prompt": "Which answer matches the lesson rule for this sentence? \"I ___ understand the question.\"",
        "options": [
          "do not",
          "am not",
          "does not",
          "did not"
        ],
        "correctIndex": 0,
        "explanation": "Simple present negatives use do not with I.",
        "tag": "Rule match",
        "difficulty": "Advanced",
        "sequence": 45
      },
      {
        "prompt": "Which answer would you keep after editing \"I ___ understand the question.\"?",
        "options": [
          "am not",
          "does not",
          "did not",
          "do not"
        ],
        "correctIndex": 3,
        "explanation": "Simple present negatives use do not with I.",
        "tag": "Editing",
        "difficulty": "Advanced",
        "sequence": 46
      },
      {
        "prompt": "Which explanation is best here?",
        "options": [
          "Reflexive pronouns replace all object pronouns.",
          "Ambiguous pronouns always improve style.",
          "Simple present negatives use do not with I.",
          "Present simple questions never use auxiliaries."
        ],
        "correctIndex": 2,
        "explanation": "Simple present negatives use do not with I.",
        "tag": "Explanation",
        "difficulty": "Advanced",
        "sequence": 47
      },
      {
        "prompt": "Choose the grammatical option for \"I ___ understand the question.\"",
        "options": [
          "did not",
          "do not",
          "am not",
          "does not"
        ],
        "correctIndex": 1,
        "explanation": "Simple present negatives use do not with I.",
        "tag": "Grammar",
        "difficulty": "Advanced",
        "sequence": 48
      },
      {
        "prompt": "What is the clearest correction for \"I ___ understand the question.\"?",
        "options": [
          "do not",
          "am not",
          "does not",
          "did not"
        ],
        "correctIndex": 0,
        "explanation": "Simple present negatives use do not with I.",
        "tag": "Correction",
        "difficulty": "Advanced",
        "sequence": 49
      },
      {
        "prompt": "A learner hesitates over \"I ___ understand the question.\". Which answer is correct?",
        "options": [
          "am not",
          "does not",
          "did not",
          "do not"
        ],
        "correctIndex": 3,
        "explanation": "Simple present negatives use do not with I.",
        "tag": "Learner check",
        "difficulty": "Advanced",
        "sequence": 50
      },
      {
        "prompt": "Choose the best completion: \"When Mina called Asha, ___ sounded worried.\"",
        "options": [
          "she",
          "her",
          "herself",
          "Asha sounded worried"
        ],
        "correctIndex": 3,
        "explanation": "A clear rewrite removes ambiguity.",
        "tag": "Completion",
        "difficulty": "Advanced",
        "sequence": 51
      },
      {
        "prompt": "Which option creates standard English in \"When Mina called Asha, ___ sounded worried.\"?",
        "options": [
          "her",
          "herself",
          "Asha sounded worried",
          "she"
        ],
        "correctIndex": 2,
        "explanation": "A clear rewrite removes ambiguity.",
        "tag": "Standard form",
        "difficulty": "Advanced",
        "sequence": 52
      },
      {
        "prompt": "Select the form that avoids a grammar or reference error: \"When Mina called Asha, ___ sounded worried.\"",
        "options": [
          "herself",
          "Asha sounded worried",
          "she",
          "her"
        ],
        "correctIndex": 1,
        "explanation": "A clear rewrite removes ambiguity.",
        "tag": "Accuracy",
        "difficulty": "Advanced",
        "sequence": 53
      },
      {
        "prompt": "What should replace the blank in \"When Mina called Asha, ___ sounded worried.\"?",
        "options": [
          "Asha sounded worried",
          "she",
          "her",
          "herself"
        ],
        "correctIndex": 0,
        "explanation": "A clear rewrite removes ambiguity.",
        "tag": "Blank",
        "difficulty": "Advanced",
        "sequence": 54
      },
      {
        "prompt": "Which answer matches the lesson rule for this sentence? \"When Mina called Asha, ___ sounded worried.\"",
        "options": [
          "she",
          "her",
          "herself",
          "Asha sounded worried"
        ],
        "correctIndex": 3,
        "explanation": "A clear rewrite removes ambiguity.",
        "tag": "Rule match",
        "difficulty": "Advanced",
        "sequence": 55
      },
      {
        "prompt": "Which answer would you keep after editing \"When Mina called Asha, ___ sounded worried.\"?",
        "options": [
          "her",
          "herself",
          "Asha sounded worried",
          "she"
        ],
        "correctIndex": 2,
        "explanation": "A clear rewrite removes ambiguity.",
        "tag": "Editing",
        "difficulty": "Advanced",
        "sequence": 56
      },
      {
        "prompt": "Which explanation is best here?",
        "options": [
          "Ambiguous pronouns always improve style.",
          "A clear rewrite removes ambiguity.",
          "Present simple questions never use auxiliaries.",
          "Reflexive pronouns replace all object pronouns."
        ],
        "correctIndex": 1,
        "explanation": "A clear rewrite removes ambiguity.",
        "tag": "Explanation",
        "difficulty": "Advanced",
        "sequence": 57
      },
      {
        "prompt": "Choose the grammatical option for \"When Mina called Asha, ___ sounded worried.\"",
        "options": [
          "Asha sounded worried",
          "she",
          "her",
          "herself"
        ],
        "correctIndex": 0,
        "explanation": "A clear rewrite removes ambiguity.",
        "tag": "Grammar",
        "difficulty": "Advanced",
        "sequence": 58
      },
      {
        "prompt": "What is the clearest correction for \"When Mina called Asha, ___ sounded worried.\"?",
        "options": [
          "she",
          "her",
          "herself",
          "Asha sounded worried"
        ],
        "correctIndex": 3,
        "explanation": "A clear rewrite removes ambiguity.",
        "tag": "Correction",
        "difficulty": "Advanced",
        "sequence": 59
      },
      {
        "prompt": "A learner hesitates over \"When Mina called Asha, ___ sounded worried.\". Which answer is correct?",
        "options": [
          "her",
          "herself",
          "Asha sounded worried",
          "she"
        ],
        "correctIndex": 2,
        "explanation": "A clear rewrite removes ambiguity.",
        "tag": "Learner check",
        "difficulty": "Advanced",
        "sequence": 60
      }
    ],
    "advanced": [
      {
        "prompt": "Choose the best completion: \"Why ___ you leave early?\"",
        "options": [
          "did",
          "do",
          "does",
          "were"
        ],
        "correctIndex": 0,
        "explanation": "Past simple questions need did plus the base verb.",
        "tag": "Completion",
        "difficulty": "Review Challenge",
        "sequence": 1
      },
      {
        "prompt": "Which option creates standard English in \"Why ___ you leave early?\"?",
        "options": [
          "do",
          "does",
          "were",
          "did"
        ],
        "correctIndex": 3,
        "explanation": "Past simple questions need did plus the base verb.",
        "tag": "Standard form",
        "difficulty": "Review Challenge",
        "sequence": 2
      },
      {
        "prompt": "Which answer would you keep after editing \"Why ___ you leave early?\"?",
        "options": [
          "do",
          "does",
          "were",
          "did"
        ],
        "correctIndex": 3,
        "explanation": "Past simple questions need did plus the base verb.",
        "tag": "Editing",
        "difficulty": "Review Challenge",
        "sequence": 3
      },
      {
        "prompt": "Which explanation is best here?",
        "options": [
          "Reflexive pronouns replace all object pronouns.",
          "Ambiguous pronouns always improve style.",
          "Past simple questions need did plus the base verb.",
          "Present simple questions never use auxiliaries."
        ],
        "correctIndex": 2,
        "explanation": "Past simple questions need did plus the base verb.",
        "tag": "Explanation",
        "difficulty": "Review Challenge",
        "sequence": 4
      },
      {
        "prompt": "Choose the grammatical option for \"Why ___ you leave early?\"",
        "options": [
          "were",
          "did",
          "do",
          "does"
        ],
        "correctIndex": 1,
        "explanation": "Past simple questions need did plus the base verb.",
        "tag": "Grammar",
        "difficulty": "Review Challenge",
        "sequence": 5
      },
      {
        "prompt": "What is the clearest correction for \"Why ___ you leave early?\"?",
        "options": [
          "did",
          "do",
          "does",
          "were"
        ],
        "correctIndex": 0,
        "explanation": "Past simple questions need did plus the base verb.",
        "tag": "Correction",
        "difficulty": "Review Challenge",
        "sequence": 6
      },
      {
        "prompt": "Which focus best matches the main learning challenge in \"Pronouns, Questions, and Negatives\"?",
        "options": [
          "Identify the job each word does inside a sentence.",
          "Build complete sentences with subjects, verbs, and clear complements.",
          "Use a, an, the, some, and zero article correctly.",
          "Maintain clear reference and accurate auxiliary structure."
        ],
        "correctIndex": 3,
        "explanation": "The focus of this lesson is: Maintain clear reference and accurate auxiliary structure.",
        "tag": "Advanced focus",
        "difficulty": "Review Challenge",
        "sequence": 7
      },
      {
        "prompt": "Which rule belongs most directly to \"Pronouns, Questions, and Negatives\"?",
        "options": [
          "Adjectives describe nouns; adverbs usually modify verbs, adjectives, or other adverbs.",
          "Determiners such as the, a, this, and many signal which noun you mean.",
          "A pronoun should agree with its antecedent in number and fit the meaning clearly.",
          "A noun names a person, place, thing, or idea, while a verb shows action or state."
        ],
        "correctIndex": 2,
        "explanation": "A pronoun should agree with its antecedent in number and fit the meaning clearly.",
        "tag": "Rule distinction",
        "difficulty": "Review Challenge",
        "sequence": 8
      },
      {
        "prompt": "Which editing warning is most important to remember in \"Pronouns, Questions, and Negatives\"?",
        "options": [
          {
            "wrong": "The news is exciting. She is exciting.",
            "right": "The news is exciting. She is excited.",
            "note": "Use the -ed adjective for the person's feeling, -ing for the thing's quality."
          },
          {
            "wrong": "Why you left early?",
            "right": "Why did you leave early?",
            "note": "English questions in statement form need do/does/did."
          },
          {
            "wrong": "I have a friendly meeting tomorrow.",
            "right": "I have a friendly meeting tomorrow.",
            "note": "Friendly is an adjective here, not an adverb, so no -ly suffix needed."
          },
          {
            "wrong": "He ran quick to the store.",
            "right": "He ran quickly to the store.",
            "note": "Adverbs modify verbs; use quickly, not quick."
          }
        ],
        "correctIndex": 1,
        "explanation": {
          "wrong": "Why you left early?",
          "right": "Why did you leave early?",
          "note": "English questions in statement form need do/does/did."
        },
        "tag": "Pitfall check",
        "difficulty": "Review Challenge",
        "sequence": 9
      },
      {
        "prompt": "Which practice move best extends the lesson after you finish the core explanation?",
        "options": [
          "Exercise 1 - Rewriting: Rewrite ten ambiguous sentences to make the pronoun reference explicit.",
          "Exercise 1 - Labeling: Read a paragraph and mark each word with its part of speech (noun, verb, adj, adv, etc.)",
          "Exercise 2 - Identification: Identify the target word class in each sentence: 'Find the adverb that modifies ran.'",
          "Exercise 3 - Word Transformation: Transform words to different classes (run→runner→running; quick→quickly)"
        ],
        "correctIndex": 0,
        "explanation": "Exercise 1 - Rewriting: Rewrite ten ambiguous sentences to make the pronoun reference explicit.",
        "tag": "Practice transfer",
        "difficulty": "Review Challenge",
        "sequence": 10
      },
      {
        "prompt": "Which explanation best matches this model sentence from \"Pronouns, Questions, and Negatives\"? \"When Sara called Mina, she sounded worried. (Unclear: who sounded worried?)\"",
        "options": [
          "student (noun), curious (adjective), quickly (adverb), opened (verb)",
          "She (pronoun), carefully (adverb), explained (verb), importance (noun)",
          "Although (conjunction), raining (verb form), we (pronoun), near (preposition), mountain (noun)",
          "This is ambiguous; add clarity: When Sara called Mina, Mina sounded worried."
        ],
        "correctIndex": 3,
        "explanation": "This is ambiguous; add clarity: When Sara called Mina, Mina sounded worried.",
        "tag": "Example analysis",
        "difficulty": "Review Challenge",
        "sequence": 11
      },
      {
        "prompt": "Which objective belongs to \"Pronouns, Questions, and Negatives\"?",
        "options": [
          "Separate form from function when a word changes category by use.",
          "Explain why the same word can behave differently across contexts.",
          "Avoid unclear pronoun reference in speech and writing.",
          "Recognize the major word classes in authentic sentences."
        ],
        "correctIndex": 2,
        "explanation": "Avoid unclear pronoun reference in speech and writing.",
        "tag": "Objective check",
        "difficulty": "Review Challenge",
        "sequence": 12
      },
      {
        "prompt": "Which portfolio task best fits the module that contains \"Pronouns, Questions, and Negatives\"?",
        "options": [
          "Write a multi-paragraph response using at least one relative clause, one conditional, one reported statement, and one verb-pattern contrast.",
          "Edit an old paragraph only for sentence-level accuracy and annotate each correction.",
          "Write a 150-word self-introduction and label nouns, verbs, articles, and sentence types.",
          "Write a three-part narrative using present, past, and future meaning accurately."
        ],
        "correctIndex": 1,
        "explanation": "Edit an old paragraph only for sentence-level accuracy and annotate each correction.",
        "tag": "Portfolio transfer",
        "difficulty": "Review Challenge",
        "sequence": 13
      },
      {
        "prompt": "Which module description best fits the context of \"Pronouns, Questions, and Negatives\"?",
        "options": [
          "Strengthen agreement, pronoun reference, auxiliary use, pattern control, and active-passive choices.",
          "Build a clean base in word classes, sentence architecture, and noun phrases before moving into more advanced control.",
          "Learn how English grammar maps routine, action-in-progress, experience, finished time, future reference, and modal meaning.",
          "Use clauses, relative structures, conditionals, reported speech, and verb patterns to communicate more complex relationships."
        ],
        "correctIndex": 0,
        "explanation": "Strengthen agreement, pronoun reference, auxiliary use, pattern control, and active-passive choices.",
        "tag": "Module alignment",
        "difficulty": "Review Challenge",
        "sequence": 14
      },
      {
        "prompt": "Which reading insight best matches the story work in \"Pronouns, Questions, and Negatives\"?",
        "options": [
          "Market (noun), Saturday (noun), Maya (noun) are the main subjects and objects.",
          "Visits, walks, looking, shows, answer, select, stands are action verbs showing what people do.",
          "Busy, colorful, fresh, ripe describe nouns (busy market, colorful stalls).",
          "Use auxiliary verbs (did, does, didn't) in questions and negatives; they support the main verb."
        ],
        "correctIndex": 3,
        "explanation": "Use auxiliary verbs (did, does, didn't) in questions and negatives; they support the main verb.",
        "tag": "Story analysis",
        "difficulty": "Review Challenge",
        "sequence": 15
      },
      {
        "prompt": "Select the form that avoids a grammar or reference error: \"Why ___ you leave early?\"",
        "options": [
          "does",
          "were",
          "did",
          "do"
        ],
        "correctIndex": 2,
        "explanation": "Past simple questions need did plus the base verb.",
        "tag": "Accuracy",
        "difficulty": "Review Challenge",
        "sequence": 16
      },
      {
        "prompt": "What should replace the blank in \"Why ___ you leave early?\"?",
        "options": [
          "were",
          "did",
          "do",
          "does"
        ],
        "correctIndex": 1,
        "explanation": "Past simple questions need did plus the base verb.",
        "tag": "Blank",
        "difficulty": "Review Challenge",
        "sequence": 17
      },
      {
        "prompt": "Which answer matches the lesson rule for this sentence? \"Why ___ you leave early?\"",
        "options": [
          "did",
          "do",
          "does",
          "were"
        ],
        "correctIndex": 0,
        "explanation": "Past simple questions need did plus the base verb.",
        "tag": "Rule match",
        "difficulty": "Review Challenge",
        "sequence": 18
      },
      {
        "prompt": "A learner hesitates over \"Why ___ you leave early?\". Which answer is correct?",
        "options": [
          "do",
          "does",
          "were",
          "did"
        ],
        "correctIndex": 3,
        "explanation": "Past simple questions need did plus the base verb.",
        "tag": "Learner check",
        "difficulty": "Review Challenge",
        "sequence": 19
      },
      {
        "prompt": "Choose the best completion: \"Where ___ she work now?\"",
        "options": [
          "do",
          "did",
          "is",
          "does"
        ],
        "correctIndex": 3,
        "explanation": "Present simple questions with she use does.",
        "tag": "Completion",
        "difficulty": "Review Challenge",
        "sequence": 20
      }
    ]
  },
  "prepositions-modifiers": {
    "standard": [
      {
        "prompt": "Choose the best completion: \"The result depends ___ careful planning.\"",
        "options": [
          "on",
          "at",
          "for",
          "with"
        ],
        "correctIndex": 0,
        "explanation": "Depend is commonly followed by on.",
        "tag": "Pattern",
        "difficulty": "Basic",
        "sequence": 1
      },
      {
        "prompt": "Which option matches normal English usage here? \"The result depends ___ careful planning.\"",
        "options": [
          "at",
          "for",
          "with",
          "on"
        ],
        "correctIndex": 3,
        "explanation": "Depend is commonly followed by on.",
        "tag": "Pattern",
        "difficulty": "Basic",
        "sequence": 2
      },
      {
        "prompt": "Select the grammatical answer for \"The result depends ___ careful planning.\"",
        "options": [
          "for",
          "with",
          "on",
          "at"
        ],
        "correctIndex": 2,
        "explanation": "Depend is commonly followed by on.",
        "tag": "Grammar",
        "difficulty": "Basic",
        "sequence": 3
      },
      {
        "prompt": "Which answer fits the phrase pattern in \"The result depends ___ careful planning.\"?",
        "options": [
          "with",
          "on",
          "at",
          "for"
        ],
        "correctIndex": 1,
        "explanation": "Depend is commonly followed by on.",
        "tag": "Phrase",
        "difficulty": "Basic",
        "sequence": 4
      },
      {
        "prompt": "A student writes \"The result depends ___ careful planning.\". What should the missing part be?",
        "options": [
          "on",
          "at",
          "for",
          "with"
        ],
        "correctIndex": 0,
        "explanation": "Depend is commonly followed by on.",
        "tag": "Completion",
        "difficulty": "Basic",
        "sequence": 5
      },
      {
        "prompt": "Which lesson rule applies?",
        "options": [
          "Translate the preposition word for word.",
          "Modifiers can point to anything nearby.",
          "Prepositions never belong to patterns.",
          "Depend is commonly followed by on."
        ],
        "correctIndex": 3,
        "explanation": "Depend is commonly followed by on.",
        "tag": "Rule",
        "difficulty": "Basic",
        "sequence": 6
      },
      {
        "prompt": "Which option avoids a modifier or preposition mistake? \"The result depends ___ careful planning.\"",
        "options": [
          "for",
          "with",
          "on",
          "at"
        ],
        "correctIndex": 2,
        "explanation": "Depend is commonly followed by on.",
        "tag": "Error check",
        "difficulty": "Basic",
        "sequence": 7
      },
      {
        "prompt": "Which answer would you keep after editing \"The result depends ___ careful planning.\"?",
        "options": [
          "with",
          "on",
          "at",
          "for"
        ],
        "correctIndex": 1,
        "explanation": "Depend is commonly followed by on.",
        "tag": "Editing",
        "difficulty": "Basic",
        "sequence": 8
      },
      {
        "prompt": "What is the most natural choice in standard English? \"The result depends ___ careful planning.\"",
        "options": [
          "on",
          "at",
          "for",
          "with"
        ],
        "correctIndex": 0,
        "explanation": "Depend is commonly followed by on.",
        "tag": "Standard use",
        "difficulty": "Basic",
        "sequence": 9
      },
      {
        "prompt": "Choose the answer that matches the target structure. \"The result depends ___ careful planning.\"",
        "options": [
          "at",
          "for",
          "with",
          "on"
        ],
        "correctIndex": 3,
        "explanation": "Depend is commonly followed by on.",
        "tag": "Structure",
        "difficulty": "Basic",
        "sequence": 10
      },
      {
        "prompt": "Choose the best completion: \"She is interested ___ linguistics.\"",
        "options": [
          "on",
          "at",
          "with",
          "in"
        ],
        "correctIndex": 3,
        "explanation": "Interested pairs with in.",
        "tag": "Pattern",
        "difficulty": "Basic",
        "sequence": 11
      },
      {
        "prompt": "Which option matches normal English usage here? \"She is interested ___ linguistics.\"",
        "options": [
          "at",
          "with",
          "in",
          "on"
        ],
        "correctIndex": 2,
        "explanation": "Interested pairs with in.",
        "tag": "Pattern",
        "difficulty": "Basic",
        "sequence": 12
      },
      {
        "prompt": "Select the grammatical answer for \"She is interested ___ linguistics.\"",
        "options": [
          "with",
          "in",
          "on",
          "at"
        ],
        "correctIndex": 1,
        "explanation": "Interested pairs with in.",
        "tag": "Grammar",
        "difficulty": "Basic",
        "sequence": 13
      },
      {
        "prompt": "Which answer fits the phrase pattern in \"She is interested ___ linguistics.\"?",
        "options": [
          "in",
          "on",
          "at",
          "with"
        ],
        "correctIndex": 0,
        "explanation": "Interested pairs with in.",
        "tag": "Phrase",
        "difficulty": "Basic",
        "sequence": 14
      },
      {
        "prompt": "A student writes \"She is interested ___ linguistics.\". What should the missing part be?",
        "options": [
          "on",
          "at",
          "with",
          "in"
        ],
        "correctIndex": 3,
        "explanation": "Interested pairs with in.",
        "tag": "Completion",
        "difficulty": "Basic",
        "sequence": 15
      },
      {
        "prompt": "Which lesson rule applies?",
        "options": [
          "Modifiers can point to anything nearby.",
          "Prepositions never belong to patterns.",
          "Interested pairs with in.",
          "Translate the preposition word for word."
        ],
        "correctIndex": 2,
        "explanation": "Interested pairs with in.",
        "tag": "Rule",
        "difficulty": "Basic",
        "sequence": 16
      },
      {
        "prompt": "Which option avoids a modifier or preposition mistake? \"She is interested ___ linguistics.\"",
        "options": [
          "with",
          "in",
          "on",
          "at"
        ],
        "correctIndex": 1,
        "explanation": "Interested pairs with in.",
        "tag": "Error check",
        "difficulty": "Basic",
        "sequence": 17
      },
      {
        "prompt": "Which answer would you keep after editing \"She is interested ___ linguistics.\"?",
        "options": [
          "in",
          "on",
          "at",
          "with"
        ],
        "correctIndex": 0,
        "explanation": "Interested pairs with in.",
        "tag": "Editing",
        "difficulty": "Basic",
        "sequence": 18
      },
      {
        "prompt": "What is the most natural choice in standard English? \"She is interested ___ linguistics.\"",
        "options": [
          "on",
          "at",
          "with",
          "in"
        ],
        "correctIndex": 3,
        "explanation": "Interested pairs with in.",
        "tag": "Standard use",
        "difficulty": "Basic",
        "sequence": 19
      },
      {
        "prompt": "Choose the answer that matches the target structure. \"She is interested ___ linguistics.\"",
        "options": [
          "at",
          "with",
          "in",
          "on"
        ],
        "correctIndex": 2,
        "explanation": "Interested pairs with in.",
        "tag": "Structure",
        "difficulty": "Basic",
        "sequence": 20
      },
      {
        "prompt": "Choose the best completion: \"Driving to class, ___ noticed the rain starting suddenly.\"",
        "options": [
          "the car",
          "the road",
          "I",
          "the rain"
        ],
        "correctIndex": 2,
        "explanation": "The subject after the comma should be the one doing the driving.",
        "tag": "Pattern",
        "difficulty": "Intermediate",
        "sequence": 21
      },
      {
        "prompt": "Which option matches normal English usage here? \"Driving to class, ___ noticed the rain starting suddenly.\"",
        "options": [
          "the road",
          "I",
          "the rain",
          "the car"
        ],
        "correctIndex": 1,
        "explanation": "The subject after the comma should be the one doing the driving.",
        "tag": "Pattern",
        "difficulty": "Intermediate",
        "sequence": 22
      },
      {
        "prompt": "Select the grammatical answer for \"Driving to class, ___ noticed the rain starting suddenly.\"",
        "options": [
          "I",
          "the rain",
          "the car",
          "the road"
        ],
        "correctIndex": 0,
        "explanation": "The subject after the comma should be the one doing the driving.",
        "tag": "Grammar",
        "difficulty": "Intermediate",
        "sequence": 23
      },
      {
        "prompt": "Which answer fits the phrase pattern in \"Driving to class, ___ noticed the rain starting suddenly.\"?",
        "options": [
          "the rain",
          "the car",
          "the road",
          "I"
        ],
        "correctIndex": 3,
        "explanation": "The subject after the comma should be the one doing the driving.",
        "tag": "Phrase",
        "difficulty": "Intermediate",
        "sequence": 24
      },
      {
        "prompt": "A student writes \"Driving to class, ___ noticed the rain starting suddenly.\". What should the missing part be?",
        "options": [
          "the car",
          "the road",
          "I",
          "the rain"
        ],
        "correctIndex": 2,
        "explanation": "The subject after the comma should be the one doing the driving.",
        "tag": "Completion",
        "difficulty": "Intermediate",
        "sequence": 25
      },
      {
        "prompt": "Which lesson rule applies?",
        "options": [
          "Prepositions never belong to patterns.",
          "The subject after the comma should be the one doing the driving.",
          "Translate the preposition word for word.",
          "Modifiers can point to anything nearby."
        ],
        "correctIndex": 1,
        "explanation": "The subject after the comma should be the one doing the driving.",
        "tag": "Rule",
        "difficulty": "Intermediate",
        "sequence": 26
      },
      {
        "prompt": "Which option avoids a modifier or preposition mistake? \"Driving to class, ___ noticed the rain starting suddenly.\"",
        "options": [
          "I",
          "the rain",
          "the car",
          "the road"
        ],
        "correctIndex": 0,
        "explanation": "The subject after the comma should be the one doing the driving.",
        "tag": "Error check",
        "difficulty": "Intermediate",
        "sequence": 27
      },
      {
        "prompt": "Which answer would you keep after editing \"Driving to class, ___ noticed the rain starting suddenly.\"?",
        "options": [
          "the rain",
          "the car",
          "the road",
          "I"
        ],
        "correctIndex": 3,
        "explanation": "The subject after the comma should be the one doing the driving.",
        "tag": "Editing",
        "difficulty": "Intermediate",
        "sequence": 28
      },
      {
        "prompt": "What is the most natural choice in standard English? \"Driving to class, ___ noticed the rain starting suddenly.\"",
        "options": [
          "the car",
          "the road",
          "I",
          "the rain"
        ],
        "correctIndex": 2,
        "explanation": "The subject after the comma should be the one doing the driving.",
        "tag": "Standard use",
        "difficulty": "Intermediate",
        "sequence": 29
      },
      {
        "prompt": "Choose the answer that matches the target structure. \"Driving to class, ___ noticed the rain starting suddenly.\"",
        "options": [
          "the road",
          "I",
          "the rain",
          "the car"
        ],
        "correctIndex": 1,
        "explanation": "The subject after the comma should be the one doing the driving.",
        "tag": "Structure",
        "difficulty": "Intermediate",
        "sequence": 30
      },
      {
        "prompt": "Choose the best completion: \"He is responsible ___ the final report.\"",
        "options": [
          "to",
          "for",
          "of",
          "on"
        ],
        "correctIndex": 1,
        "explanation": "Responsible is followed by for in this meaning.",
        "tag": "Pattern",
        "difficulty": "Intermediate",
        "sequence": 31
      },
      {
        "prompt": "Which option matches normal English usage here? \"He is responsible ___ the final report.\"",
        "options": [
          "for",
          "of",
          "on",
          "to"
        ],
        "correctIndex": 0,
        "explanation": "Responsible is followed by for in this meaning.",
        "tag": "Pattern",
        "difficulty": "Intermediate",
        "sequence": 32
      },
      {
        "prompt": "Select the grammatical answer for \"He is responsible ___ the final report.\"",
        "options": [
          "of",
          "on",
          "to",
          "for"
        ],
        "correctIndex": 3,
        "explanation": "Responsible is followed by for in this meaning.",
        "tag": "Grammar",
        "difficulty": "Intermediate",
        "sequence": 33
      },
      {
        "prompt": "Which answer fits the phrase pattern in \"He is responsible ___ the final report.\"?",
        "options": [
          "on",
          "to",
          "for",
          "of"
        ],
        "correctIndex": 2,
        "explanation": "Responsible is followed by for in this meaning.",
        "tag": "Phrase",
        "difficulty": "Intermediate",
        "sequence": 34
      },
      {
        "prompt": "A student writes \"He is responsible ___ the final report.\". What should the missing part be?",
        "options": [
          "to",
          "for",
          "of",
          "on"
        ],
        "correctIndex": 1,
        "explanation": "Responsible is followed by for in this meaning.",
        "tag": "Completion",
        "difficulty": "Intermediate",
        "sequence": 35
      },
      {
        "prompt": "Which lesson rule applies?",
        "options": [
          "Responsible is followed by for in this meaning.",
          "Translate the preposition word for word.",
          "Modifiers can point to anything nearby.",
          "Prepositions never belong to patterns."
        ],
        "correctIndex": 0,
        "explanation": "Responsible is followed by for in this meaning.",
        "tag": "Rule",
        "difficulty": "Intermediate",
        "sequence": 36
      },
      {
        "prompt": "Which option avoids a modifier or preposition mistake? \"He is responsible ___ the final report.\"",
        "options": [
          "of",
          "on",
          "to",
          "for"
        ],
        "correctIndex": 3,
        "explanation": "Responsible is followed by for in this meaning.",
        "tag": "Error check",
        "difficulty": "Intermediate",
        "sequence": 37
      },
      {
        "prompt": "Which answer would you keep after editing \"He is responsible ___ the final report.\"?",
        "options": [
          "on",
          "to",
          "for",
          "of"
        ],
        "correctIndex": 2,
        "explanation": "Responsible is followed by for in this meaning.",
        "tag": "Editing",
        "difficulty": "Intermediate",
        "sequence": 38
      },
      {
        "prompt": "What is the most natural choice in standard English? \"He is responsible ___ the final report.\"",
        "options": [
          "to",
          "for",
          "of",
          "on"
        ],
        "correctIndex": 1,
        "explanation": "Responsible is followed by for in this meaning.",
        "tag": "Standard use",
        "difficulty": "Intermediate",
        "sequence": 39
      },
      {
        "prompt": "Choose the answer that matches the target structure. \"He is responsible ___ the final report.\"",
        "options": [
          "for",
          "of",
          "on",
          "to"
        ],
        "correctIndex": 0,
        "explanation": "Responsible is followed by for in this meaning.",
        "tag": "Structure",
        "difficulty": "Intermediate",
        "sequence": 40
      },
      {
        "prompt": "Choose the best completion: \"Walking through the hallway, I noticed the posters.\"",
        "options": [
          "correct modifier placement",
          "dangling modifier",
          "comma splice",
          "article error"
        ],
        "correctIndex": 0,
        "explanation": "I is the logical subject of walking.",
        "tag": "Pattern",
        "difficulty": "Advanced",
        "sequence": 41
      },
      {
        "prompt": "Which option matches normal English usage here? \"Walking through the hallway, I noticed the posters.\"",
        "options": [
          "dangling modifier",
          "comma splice",
          "article error",
          "correct modifier placement"
        ],
        "correctIndex": 3,
        "explanation": "I is the logical subject of walking.",
        "tag": "Pattern",
        "difficulty": "Advanced",
        "sequence": 42
      },
      {
        "prompt": "Select the grammatical answer for \"Walking through the hallway, I noticed the posters.\"",
        "options": [
          "comma splice",
          "article error",
          "correct modifier placement",
          "dangling modifier"
        ],
        "correctIndex": 2,
        "explanation": "I is the logical subject of walking.",
        "tag": "Grammar",
        "difficulty": "Advanced",
        "sequence": 43
      },
      {
        "prompt": "Which answer fits the phrase pattern in \"Walking through the hallway, I noticed the posters.\"?",
        "options": [
          "article error",
          "correct modifier placement",
          "dangling modifier",
          "comma splice"
        ],
        "correctIndex": 1,
        "explanation": "I is the logical subject of walking.",
        "tag": "Phrase",
        "difficulty": "Advanced",
        "sequence": 44
      },
      {
        "prompt": "A student writes \"Walking through the hallway, I noticed the posters.\". What should the missing part be?",
        "options": [
          "correct modifier placement",
          "dangling modifier",
          "comma splice",
          "article error"
        ],
        "correctIndex": 0,
        "explanation": "I is the logical subject of walking.",
        "tag": "Completion",
        "difficulty": "Advanced",
        "sequence": 45
      },
      {
        "prompt": "Which lesson rule applies?",
        "options": [
          "Translate the preposition word for word.",
          "Modifiers can point to anything nearby.",
          "Prepositions never belong to patterns.",
          "I is the logical subject of walking."
        ],
        "correctIndex": 3,
        "explanation": "I is the logical subject of walking.",
        "tag": "Rule",
        "difficulty": "Advanced",
        "sequence": 46
      },
      {
        "prompt": "Which option avoids a modifier or preposition mistake? \"Walking through the hallway, I noticed the posters.\"",
        "options": [
          "comma splice",
          "article error",
          "correct modifier placement",
          "dangling modifier"
        ],
        "correctIndex": 2,
        "explanation": "I is the logical subject of walking.",
        "tag": "Error check",
        "difficulty": "Advanced",
        "sequence": 47
      },
      {
        "prompt": "Which answer would you keep after editing \"Walking through the hallway, I noticed the posters.\"?",
        "options": [
          "article error",
          "correct modifier placement",
          "dangling modifier",
          "comma splice"
        ],
        "correctIndex": 1,
        "explanation": "I is the logical subject of walking.",
        "tag": "Editing",
        "difficulty": "Advanced",
        "sequence": 48
      },
      {
        "prompt": "What is the most natural choice in standard English? \"Walking through the hallway, I noticed the posters.\"",
        "options": [
          "correct modifier placement",
          "dangling modifier",
          "comma splice",
          "article error"
        ],
        "correctIndex": 0,
        "explanation": "I is the logical subject of walking.",
        "tag": "Standard use",
        "difficulty": "Advanced",
        "sequence": 49
      },
      {
        "prompt": "Choose the answer that matches the target structure. \"Walking through the hallway, I noticed the posters.\"",
        "options": [
          "dangling modifier",
          "comma splice",
          "article error",
          "correct modifier placement"
        ],
        "correctIndex": 3,
        "explanation": "I is the logical subject of walking.",
        "tag": "Structure",
        "difficulty": "Advanced",
        "sequence": 50
      },
      {
        "prompt": "Choose the best completion: \"The class arrived ___ time for the lecture.\"",
        "options": [
          "in",
          "at",
          "for",
          "on"
        ],
        "correctIndex": 3,
        "explanation": "On time is the standard phrase.",
        "tag": "Pattern",
        "difficulty": "Advanced",
        "sequence": 51
      },
      {
        "prompt": "Which option matches normal English usage here? \"The class arrived ___ time for the lecture.\"",
        "options": [
          "at",
          "for",
          "on",
          "in"
        ],
        "correctIndex": 2,
        "explanation": "On time is the standard phrase.",
        "tag": "Pattern",
        "difficulty": "Advanced",
        "sequence": 52
      },
      {
        "prompt": "Select the grammatical answer for \"The class arrived ___ time for the lecture.\"",
        "options": [
          "for",
          "on",
          "in",
          "at"
        ],
        "correctIndex": 1,
        "explanation": "On time is the standard phrase.",
        "tag": "Grammar",
        "difficulty": "Advanced",
        "sequence": 53
      },
      {
        "prompt": "Which answer fits the phrase pattern in \"The class arrived ___ time for the lecture.\"?",
        "options": [
          "on",
          "in",
          "at",
          "for"
        ],
        "correctIndex": 0,
        "explanation": "On time is the standard phrase.",
        "tag": "Phrase",
        "difficulty": "Advanced",
        "sequence": 54
      },
      {
        "prompt": "A student writes \"The class arrived ___ time for the lecture.\". What should the missing part be?",
        "options": [
          "in",
          "at",
          "for",
          "on"
        ],
        "correctIndex": 3,
        "explanation": "On time is the standard phrase.",
        "tag": "Completion",
        "difficulty": "Advanced",
        "sequence": 55
      },
      {
        "prompt": "Which lesson rule applies?",
        "options": [
          "Modifiers can point to anything nearby.",
          "Prepositions never belong to patterns.",
          "On time is the standard phrase.",
          "Translate the preposition word for word."
        ],
        "correctIndex": 2,
        "explanation": "On time is the standard phrase.",
        "tag": "Rule",
        "difficulty": "Advanced",
        "sequence": 56
      },
      {
        "prompt": "Which option avoids a modifier or preposition mistake? \"The class arrived ___ time for the lecture.\"",
        "options": [
          "for",
          "on",
          "in",
          "at"
        ],
        "correctIndex": 1,
        "explanation": "On time is the standard phrase.",
        "tag": "Error check",
        "difficulty": "Advanced",
        "sequence": 57
      },
      {
        "prompt": "Which answer would you keep after editing \"The class arrived ___ time for the lecture.\"?",
        "options": [
          "on",
          "in",
          "at",
          "for"
        ],
        "correctIndex": 0,
        "explanation": "On time is the standard phrase.",
        "tag": "Editing",
        "difficulty": "Advanced",
        "sequence": 58
      },
      {
        "prompt": "What is the most natural choice in standard English? \"The class arrived ___ time for the lecture.\"",
        "options": [
          "in",
          "at",
          "for",
          "on"
        ],
        "correctIndex": 3,
        "explanation": "On time is the standard phrase.",
        "tag": "Standard use",
        "difficulty": "Advanced",
        "sequence": 59
      },
      {
        "prompt": "Choose the answer that matches the target structure. \"The class arrived ___ time for the lecture.\"",
        "options": [
          "at",
          "for",
          "on",
          "in"
        ],
        "correctIndex": 2,
        "explanation": "On time is the standard phrase.",
        "tag": "Structure",
        "difficulty": "Advanced",
        "sequence": 60
      }
    ],
    "advanced": [
      {
        "prompt": "Choose the best completion: \"The result depends ___ careful planning.\"",
        "options": [
          "on",
          "at",
          "for",
          "with"
        ],
        "correctIndex": 0,
        "explanation": "Depend is commonly followed by on.",
        "tag": "Pattern",
        "difficulty": "Review Challenge",
        "sequence": 1
      },
      {
        "prompt": "Select the grammatical answer for \"The result depends ___ careful planning.\"",
        "options": [
          "for",
          "with",
          "on",
          "at"
        ],
        "correctIndex": 2,
        "explanation": "Depend is commonly followed by on.",
        "tag": "Grammar",
        "difficulty": "Review Challenge",
        "sequence": 2
      },
      {
        "prompt": "Which answer would you keep after editing \"The result depends ___ careful planning.\"?",
        "options": [
          "with",
          "on",
          "at",
          "for"
        ],
        "correctIndex": 1,
        "explanation": "Depend is commonly followed by on.",
        "tag": "Editing",
        "difficulty": "Review Challenge",
        "sequence": 3
      },
      {
        "prompt": "What is the most natural choice in standard English? \"The result depends ___ careful planning.\"",
        "options": [
          "on",
          "at",
          "for",
          "with"
        ],
        "correctIndex": 0,
        "explanation": "Depend is commonly followed by on.",
        "tag": "Standard use",
        "difficulty": "Review Challenge",
        "sequence": 4
      },
      {
        "prompt": "Choose the best completion: \"She is interested ___ linguistics.\"",
        "options": [
          "on",
          "at",
          "with",
          "in"
        ],
        "correctIndex": 3,
        "explanation": "Interested pairs with in.",
        "tag": "Pattern",
        "difficulty": "Review Challenge",
        "sequence": 5
      },
      {
        "prompt": "Select the grammatical answer for \"She is interested ___ linguistics.\"",
        "options": [
          "with",
          "in",
          "on",
          "at"
        ],
        "correctIndex": 1,
        "explanation": "Interested pairs with in.",
        "tag": "Grammar",
        "difficulty": "Review Challenge",
        "sequence": 6
      },
      {
        "prompt": "Which focus best matches the main learning challenge in \"Prepositions and Modifiers\"?",
        "options": [
          "Identify the job each word does inside a sentence.",
          "Build complete sentences with subjects, verbs, and clear complements.",
          "Use a, an, the, some, and zero article correctly.",
          "Choose natural word partnerships and place modifiers carefully."
        ],
        "correctIndex": 3,
        "explanation": "The focus of this lesson is: Choose natural word partnerships and place modifiers carefully.",
        "tag": "Advanced focus",
        "difficulty": "Review Challenge",
        "sequence": 7
      },
      {
        "prompt": "Which rule belongs most directly to \"Prepositions and Modifiers\"?",
        "options": [
          "Adjectives describe nouns; adverbs usually modify verbs, adjectives, or other adverbs.",
          "Determiners such as the, a, this, and many signal which noun you mean.",
          "Learn prepositions as part of a phrase, not as isolated words.",
          "A noun names a person, place, thing, or idea, while a verb shows action or state."
        ],
        "correctIndex": 2,
        "explanation": "Learn prepositions as part of a phrase, not as isolated words.",
        "tag": "Rule distinction",
        "difficulty": "Review Challenge",
        "sequence": 8
      },
      {
        "prompt": "Which editing warning is most important to remember in \"Prepositions and Modifiers\"?",
        "options": [
          {
            "wrong": "The news is exciting. She is exciting.",
            "right": "The news is exciting. She is excited.",
            "note": "Use the -ed adjective for the person's feeling, -ing for the thing's quality."
          },
          {
            "wrong": "Walking through the park, the birds seemed beautiful to me.",
            "right": "Walking through the park, I thought the birds were beautiful.",
            "note": "Dangling modifier: birds aren't walking; I am. Put the doer first."
          },
          {
            "wrong": "I have a friendly meeting tomorrow.",
            "right": "I have a friendly meeting tomorrow.",
            "note": "Friendly is an adjective here, not an adverb, so no -ly suffix needed."
          },
          {
            "wrong": "He ran quick to the store.",
            "right": "He ran quickly to the store.",
            "note": "Adverbs modify verbs; use quickly, not quick."
          }
        ],
        "correctIndex": 1,
        "explanation": {
          "wrong": "Walking through the park, the birds seemed beautiful to me.",
          "right": "Walking through the park, I thought the birds were beautiful.",
          "note": "Dangling modifier: birds aren't walking; I am. Put the doer first."
        },
        "tag": "Pitfall check",
        "difficulty": "Review Challenge",
        "sequence": 9
      },
      {
        "prompt": "Which practice move best extends the lesson after you finish the core explanation?",
        "options": [
          "Exercise 1 - Phrase Building: Create ten sentences using adjective-preposition combinations (interested in, responsible for, afraid of, etc.).",
          "Exercise 1 - Labeling: Read a paragraph and mark each word with its part of speech (noun, verb, adj, adv, etc.)",
          "Exercise 2 - Identification: Identify the target word class in each sentence: 'Find the adverb that modifies ran.'",
          "Exercise 3 - Word Transformation: Transform words to different classes (run→runner→running; quick→quickly)"
        ],
        "correctIndex": 0,
        "explanation": "Exercise 1 - Phrase Building: Create ten sentences using adjective-preposition combinations (interested in, responsible for, afraid of, etc.).",
        "tag": "Practice transfer",
        "difficulty": "Review Challenge",
        "sequence": 10
      },
      {
        "prompt": "Which explanation best matches this model sentence from \"Prepositions and Modifiers\"? \"She is interested in linguistics and good at analysis.\"",
        "options": [
          "student (noun), curious (adjective), quickly (adverb), opened (verb)",
          "She (pronoun), carefully (adverb), explained (verb), importance (noun)",
          "Although (conjunction), raining (verb form), we (pronoun), near (preposition), mountain (noun)",
          "Adjectives + prepositions: interested in, good at (learn patterns, not isolated prepositions)."
        ],
        "correctIndex": 3,
        "explanation": "Adjectives + prepositions: interested in, good at (learn patterns, not isolated prepositions).",
        "tag": "Example analysis",
        "difficulty": "Review Challenge",
        "sequence": 11
      },
      {
        "prompt": "Which objective belongs to \"Prepositions and Modifiers\"?",
        "options": [
          "Separate form from function when a word changes category by use.",
          "Explain why the same word can behave differently across contexts.",
          "Learn phrase-level preposition patterns, not isolated words.",
          "Recognize the major word classes in authentic sentences."
        ],
        "correctIndex": 2,
        "explanation": "Learn phrase-level preposition patterns, not isolated words.",
        "tag": "Objective check",
        "difficulty": "Review Challenge",
        "sequence": 12
      },
      {
        "prompt": "Which portfolio task best fits the module that contains \"Prepositions and Modifiers\"?",
        "options": [
          "Write a multi-paragraph response using at least one relative clause, one conditional, one reported statement, and one verb-pattern contrast.",
          "Edit an old paragraph only for sentence-level accuracy and annotate each correction.",
          "Write a 150-word self-introduction and label nouns, verbs, articles, and sentence types.",
          "Write a three-part narrative using present, past, and future meaning accurately."
        ],
        "correctIndex": 1,
        "explanation": "Edit an old paragraph only for sentence-level accuracy and annotate each correction.",
        "tag": "Portfolio transfer",
        "difficulty": "Review Challenge",
        "sequence": 13
      },
      {
        "prompt": "Which module description best fits the context of \"Prepositions and Modifiers\"?",
        "options": [
          "Strengthen agreement, pronoun reference, auxiliary use, pattern control, and active-passive choices.",
          "Build a clean base in word classes, sentence architecture, and noun phrases before moving into more advanced control.",
          "Learn how English grammar maps routine, action-in-progress, experience, finished time, future reference, and modal meaning.",
          "Use clauses, relative structures, conditionals, reported speech, and verb patterns to communicate more complex relationships."
        ],
        "correctIndex": 0,
        "explanation": "Strengthen agreement, pronoun reference, auxiliary use, pattern control, and active-passive choices.",
        "tag": "Module alignment",
        "difficulty": "Review Challenge",
        "sequence": 14
      },
      {
        "prompt": "Which reading insight best matches the story work in \"Prepositions and Modifiers\"?",
        "options": [
          "Market (noun), Saturday (noun), Maya (noun) are the main subjects and objects.",
          "Visits, walks, looking, shows, answer, select, stands are action verbs showing what people do.",
          "Busy, colorful, fresh, ripe describe nouns (busy market, colorful stalls).",
          "Participial phrases (Having secured, Impressed by) begin sentences with the sentence subject implied."
        ],
        "correctIndex": 3,
        "explanation": "Participial phrases (Having secured, Impressed by) begin sentences with the sentence subject implied.",
        "tag": "Story analysis",
        "difficulty": "Review Challenge",
        "sequence": 15
      },
      {
        "prompt": "Which option matches normal English usage here? \"The result depends ___ careful planning.\"",
        "options": [
          "at",
          "for",
          "with",
          "on"
        ],
        "correctIndex": 3,
        "explanation": "Depend is commonly followed by on.",
        "tag": "Pattern",
        "difficulty": "Review Challenge",
        "sequence": 16
      },
      {
        "prompt": "Which answer fits the phrase pattern in \"The result depends ___ careful planning.\"?",
        "options": [
          "with",
          "on",
          "at",
          "for"
        ],
        "correctIndex": 1,
        "explanation": "Depend is commonly followed by on.",
        "tag": "Phrase",
        "difficulty": "Review Challenge",
        "sequence": 17
      },
      {
        "prompt": "A student writes \"The result depends ___ careful planning.\". What should the missing part be?",
        "options": [
          "on",
          "at",
          "for",
          "with"
        ],
        "correctIndex": 0,
        "explanation": "Depend is commonly followed by on.",
        "tag": "Completion",
        "difficulty": "Review Challenge",
        "sequence": 18
      },
      {
        "prompt": "Which lesson rule applies?",
        "options": [
          "Translate the preposition word for word.",
          "Modifiers can point to anything nearby.",
          "Prepositions never belong to patterns.",
          "Depend is commonly followed by on."
        ],
        "correctIndex": 3,
        "explanation": "Depend is commonly followed by on.",
        "tag": "Rule",
        "difficulty": "Review Challenge",
        "sequence": 19
      },
      {
        "prompt": "Which option avoids a modifier or preposition mistake? \"The result depends ___ careful planning.\"",
        "options": [
          "for",
          "with",
          "on",
          "at"
        ],
        "correctIndex": 2,
        "explanation": "Depend is commonly followed by on.",
        "tag": "Error check",
        "difficulty": "Review Challenge",
        "sequence": 20
      }
    ]
  },
  "clauses-and-relatives": {
    "standard": [
      {
        "prompt": "Choose the best combined sentence for: \"The tutor helped me yesterday. She explained articles clearly.\"",
        "options": [
          "The tutor who helped me yesterday explained articles clearly.",
          "The tutor, who helped me yesterday explained articles clearly.",
          "The tutor who she helped me yesterday explained articles clearly.",
          "The tutor helped me yesterday, explained articles clearly."
        ],
        "correctIndex": 0,
        "explanation": "Use a restrictive relative clause without unnecessary pronouns or commas.",
        "tag": "Combination",
        "difficulty": "Basic",
        "sequence": 1
      },
      {
        "prompt": "Which option uses clause grammar correctly? \"The tutor helped me yesterday. She explained articles clearly.\"",
        "options": [
          "The tutor, who helped me yesterday explained articles clearly.",
          "The tutor who she helped me yesterday explained articles clearly.",
          "The tutor helped me yesterday, explained articles clearly.",
          "The tutor who helped me yesterday explained articles clearly."
        ],
        "correctIndex": 3,
        "explanation": "Use a restrictive relative clause without unnecessary pronouns or commas.",
        "tag": "Clause control",
        "difficulty": "Basic",
        "sequence": 2
      },
      {
        "prompt": "Select the best revision of \"The tutor helped me yesterday. She explained articles clearly.\"",
        "options": [
          "The tutor who she helped me yesterday explained articles clearly.",
          "The tutor helped me yesterday, explained articles clearly.",
          "The tutor who helped me yesterday explained articles clearly.",
          "The tutor, who helped me yesterday explained articles clearly."
        ],
        "correctIndex": 2,
        "explanation": "Use a restrictive relative clause without unnecessary pronouns or commas.",
        "tag": "Revision",
        "difficulty": "Basic",
        "sequence": 3
      },
      {
        "prompt": "Which answer keeps the relationship between the ideas clear? \"The tutor helped me yesterday. She explained articles clearly.\"",
        "options": [
          "The tutor helped me yesterday, explained articles clearly.",
          "The tutor who helped me yesterday explained articles clearly.",
          "The tutor, who helped me yesterday explained articles clearly.",
          "The tutor who she helped me yesterday explained articles clearly."
        ],
        "correctIndex": 1,
        "explanation": "Use a restrictive relative clause without unnecessary pronouns or commas.",
        "tag": "Meaning",
        "difficulty": "Basic",
        "sequence": 4
      },
      {
        "prompt": "A learner tries to combine \"The tutor helped me yesterday. She explained articles clearly.\". Which version is correct?",
        "options": [
          "The tutor who helped me yesterday explained articles clearly.",
          "The tutor, who helped me yesterday explained articles clearly.",
          "The tutor who she helped me yesterday explained articles clearly.",
          "The tutor helped me yesterday, explained articles clearly."
        ],
        "correctIndex": 0,
        "explanation": "Use a restrictive relative clause without unnecessary pronouns or commas.",
        "tag": "Learner check",
        "difficulty": "Basic",
        "sequence": 5
      },
      {
        "prompt": "Which sentence follows the rule highlighted in this lesson?",
        "options": [
          "The tutor, who helped me yesterday explained articles clearly.",
          "The tutor who she helped me yesterday explained articles clearly.",
          "The tutor helped me yesterday, explained articles clearly.",
          "The tutor who helped me yesterday explained articles clearly."
        ],
        "correctIndex": 3,
        "explanation": "Use a restrictive relative clause without unnecessary pronouns or commas.",
        "tag": "Rule",
        "difficulty": "Basic",
        "sequence": 6
      },
      {
        "prompt": "Which option would you keep after editing for relative clauses or conjunctions?",
        "options": [
          "The tutor who she helped me yesterday explained articles clearly.",
          "The tutor helped me yesterday, explained articles clearly.",
          "The tutor who helped me yesterday explained articles clearly.",
          "The tutor, who helped me yesterday explained articles clearly."
        ],
        "correctIndex": 2,
        "explanation": "Use a restrictive relative clause without unnecessary pronouns or commas.",
        "tag": "Editing",
        "difficulty": "Basic",
        "sequence": 7
      },
      {
        "prompt": "Which answer avoids a comma or pronoun error?",
        "options": [
          "The tutor helped me yesterday, explained articles clearly.",
          "The tutor who helped me yesterday explained articles clearly.",
          "The tutor, who helped me yesterday explained articles clearly.",
          "The tutor who she helped me yesterday explained articles clearly."
        ],
        "correctIndex": 1,
        "explanation": "Use a restrictive relative clause without unnecessary pronouns or commas.",
        "tag": "Error check",
        "difficulty": "Basic",
        "sequence": 8
      },
      {
        "prompt": "Which sentence is standard written English?",
        "options": [
          "The tutor who helped me yesterday explained articles clearly.",
          "The tutor, who helped me yesterday explained articles clearly.",
          "The tutor who she helped me yesterday explained articles clearly.",
          "The tutor helped me yesterday, explained articles clearly."
        ],
        "correctIndex": 0,
        "explanation": "Use a restrictive relative clause without unnecessary pronouns or commas.",
        "tag": "Standard form",
        "difficulty": "Basic",
        "sequence": 9
      },
      {
        "prompt": "What is the best grammatical link between these ideas? \"The tutor helped me yesterday. She explained articles clearly.\"",
        "options": [
          "The tutor, who helped me yesterday explained articles clearly.",
          "The tutor who she helped me yesterday explained articles clearly.",
          "The tutor helped me yesterday, explained articles clearly.",
          "The tutor who helped me yesterday explained articles clearly."
        ],
        "correctIndex": 3,
        "explanation": "Use a restrictive relative clause without unnecessary pronouns or commas.",
        "tag": "Linking",
        "difficulty": "Basic",
        "sequence": 10
      },
      {
        "prompt": "Choose the best combined sentence for: \"The task was difficult. The class finished on time.\"",
        "options": [
          "Because the task was difficult, the class finished on time.",
          "Although the task was difficult, but the class finished on time.",
          "Although was the task difficult, the class finished on time.",
          "Although the task was difficult, the class finished on time."
        ],
        "correctIndex": 3,
        "explanation": "Although introduces contrast.",
        "tag": "Combination",
        "difficulty": "Basic",
        "sequence": 11
      },
      {
        "prompt": "Which option uses clause grammar correctly? \"The task was difficult. The class finished on time.\"",
        "options": [
          "Although the task was difficult, but the class finished on time.",
          "Although was the task difficult, the class finished on time.",
          "Although the task was difficult, the class finished on time.",
          "Because the task was difficult, the class finished on time."
        ],
        "correctIndex": 2,
        "explanation": "Although introduces contrast.",
        "tag": "Clause control",
        "difficulty": "Basic",
        "sequence": 12
      },
      {
        "prompt": "Select the best revision of \"The task was difficult. The class finished on time.\"",
        "options": [
          "Although was the task difficult, the class finished on time.",
          "Although the task was difficult, the class finished on time.",
          "Because the task was difficult, the class finished on time.",
          "Although the task was difficult, but the class finished on time."
        ],
        "correctIndex": 1,
        "explanation": "Although introduces contrast.",
        "tag": "Revision",
        "difficulty": "Basic",
        "sequence": 13
      },
      {
        "prompt": "Which answer keeps the relationship between the ideas clear? \"The task was difficult. The class finished on time.\"",
        "options": [
          "Although the task was difficult, the class finished on time.",
          "Because the task was difficult, the class finished on time.",
          "Although the task was difficult, but the class finished on time.",
          "Although was the task difficult, the class finished on time."
        ],
        "correctIndex": 0,
        "explanation": "Although introduces contrast.",
        "tag": "Meaning",
        "difficulty": "Basic",
        "sequence": 14
      },
      {
        "prompt": "A learner tries to combine \"The task was difficult. The class finished on time.\". Which version is correct?",
        "options": [
          "Because the task was difficult, the class finished on time.",
          "Although the task was difficult, but the class finished on time.",
          "Although was the task difficult, the class finished on time.",
          "Although the task was difficult, the class finished on time."
        ],
        "correctIndex": 3,
        "explanation": "Although introduces contrast.",
        "tag": "Learner check",
        "difficulty": "Basic",
        "sequence": 15
      },
      {
        "prompt": "Which sentence follows the rule highlighted in this lesson?",
        "options": [
          "Although the task was difficult, but the class finished on time.",
          "Although was the task difficult, the class finished on time.",
          "Although the task was difficult, the class finished on time.",
          "Because the task was difficult, the class finished on time."
        ],
        "correctIndex": 2,
        "explanation": "Although introduces contrast.",
        "tag": "Rule",
        "difficulty": "Basic",
        "sequence": 16
      },
      {
        "prompt": "Which option would you keep after editing for relative clauses or conjunctions?",
        "options": [
          "Although was the task difficult, the class finished on time.",
          "Although the task was difficult, the class finished on time.",
          "Because the task was difficult, the class finished on time.",
          "Although the task was difficult, but the class finished on time."
        ],
        "correctIndex": 1,
        "explanation": "Although introduces contrast.",
        "tag": "Editing",
        "difficulty": "Basic",
        "sequence": 17
      },
      {
        "prompt": "Which answer avoids a comma or pronoun error?",
        "options": [
          "Although the task was difficult, the class finished on time.",
          "Because the task was difficult, the class finished on time.",
          "Although the task was difficult, but the class finished on time.",
          "Although was the task difficult, the class finished on time."
        ],
        "correctIndex": 0,
        "explanation": "Although introduces contrast.",
        "tag": "Error check",
        "difficulty": "Basic",
        "sequence": 18
      },
      {
        "prompt": "Which sentence is standard written English?",
        "options": [
          "Because the task was difficult, the class finished on time.",
          "Although the task was difficult, but the class finished on time.",
          "Although was the task difficult, the class finished on time.",
          "Although the task was difficult, the class finished on time."
        ],
        "correctIndex": 3,
        "explanation": "Although introduces contrast.",
        "tag": "Standard form",
        "difficulty": "Basic",
        "sequence": 19
      },
      {
        "prompt": "What is the best grammatical link between these ideas? \"The task was difficult. The class finished on time.\"",
        "options": [
          "Although the task was difficult, but the class finished on time.",
          "Although was the task difficult, the class finished on time.",
          "Although the task was difficult, the class finished on time.",
          "Because the task was difficult, the class finished on time."
        ],
        "correctIndex": 2,
        "explanation": "Although introduces contrast.",
        "tag": "Linking",
        "difficulty": "Basic",
        "sequence": 20
      },
      {
        "prompt": "Choose the best combined sentence for: \"My laptop is five years old. It still works well.\"",
        "options": [
          "My laptop, that is five years old still works well.",
          "My laptop, which is five years old still works well.",
          "My laptop, which is five years old, still works well.",
          "My laptop which is five years old still works well."
        ],
        "correctIndex": 2,
        "explanation": "The extra information is nonrestrictive, so commas are needed.",
        "tag": "Combination",
        "difficulty": "Intermediate",
        "sequence": 21
      },
      {
        "prompt": "Which option uses clause grammar correctly? \"My laptop is five years old. It still works well.\"",
        "options": [
          "My laptop, which is five years old still works well.",
          "My laptop, which is five years old, still works well.",
          "My laptop which is five years old still works well.",
          "My laptop, that is five years old still works well."
        ],
        "correctIndex": 1,
        "explanation": "The extra information is nonrestrictive, so commas are needed.",
        "tag": "Clause control",
        "difficulty": "Intermediate",
        "sequence": 22
      },
      {
        "prompt": "Select the best revision of \"My laptop is five years old. It still works well.\"",
        "options": [
          "My laptop, which is five years old, still works well.",
          "My laptop which is five years old still works well.",
          "My laptop, that is five years old still works well.",
          "My laptop, which is five years old still works well."
        ],
        "correctIndex": 0,
        "explanation": "The extra information is nonrestrictive, so commas are needed.",
        "tag": "Revision",
        "difficulty": "Intermediate",
        "sequence": 23
      },
      {
        "prompt": "Which answer keeps the relationship between the ideas clear? \"My laptop is five years old. It still works well.\"",
        "options": [
          "My laptop which is five years old still works well.",
          "My laptop, that is five years old still works well.",
          "My laptop, which is five years old still works well.",
          "My laptop, which is five years old, still works well."
        ],
        "correctIndex": 3,
        "explanation": "The extra information is nonrestrictive, so commas are needed.",
        "tag": "Meaning",
        "difficulty": "Intermediate",
        "sequence": 24
      },
      {
        "prompt": "A learner tries to combine \"My laptop is five years old. It still works well.\". Which version is correct?",
        "options": [
          "My laptop, that is five years old still works well.",
          "My laptop, which is five years old still works well.",
          "My laptop, which is five years old, still works well.",
          "My laptop which is five years old still works well."
        ],
        "correctIndex": 2,
        "explanation": "The extra information is nonrestrictive, so commas are needed.",
        "tag": "Learner check",
        "difficulty": "Intermediate",
        "sequence": 25
      },
      {
        "prompt": "Which sentence follows the rule highlighted in this lesson?",
        "options": [
          "My laptop, which is five years old still works well.",
          "My laptop, which is five years old, still works well.",
          "My laptop which is five years old still works well.",
          "My laptop, that is five years old still works well."
        ],
        "correctIndex": 1,
        "explanation": "The extra information is nonrestrictive, so commas are needed.",
        "tag": "Rule",
        "difficulty": "Intermediate",
        "sequence": 26
      },
      {
        "prompt": "Which option would you keep after editing for relative clauses or conjunctions?",
        "options": [
          "My laptop, which is five years old, still works well.",
          "My laptop which is five years old still works well.",
          "My laptop, that is five years old still works well.",
          "My laptop, which is five years old still works well."
        ],
        "correctIndex": 0,
        "explanation": "The extra information is nonrestrictive, so commas are needed.",
        "tag": "Editing",
        "difficulty": "Intermediate",
        "sequence": 27
      },
      {
        "prompt": "Which answer avoids a comma or pronoun error?",
        "options": [
          "My laptop which is five years old still works well.",
          "My laptop, that is five years old still works well.",
          "My laptop, which is five years old still works well.",
          "My laptop, which is five years old, still works well."
        ],
        "correctIndex": 3,
        "explanation": "The extra information is nonrestrictive, so commas are needed.",
        "tag": "Error check",
        "difficulty": "Intermediate",
        "sequence": 28
      },
      {
        "prompt": "Which sentence is standard written English?",
        "options": [
          "My laptop, that is five years old still works well.",
          "My laptop, which is five years old still works well.",
          "My laptop, which is five years old, still works well.",
          "My laptop which is five years old still works well."
        ],
        "correctIndex": 2,
        "explanation": "The extra information is nonrestrictive, so commas are needed.",
        "tag": "Standard form",
        "difficulty": "Intermediate",
        "sequence": 29
      },
      {
        "prompt": "What is the best grammatical link between these ideas? \"My laptop is five years old. It still works well.\"",
        "options": [
          "My laptop, which is five years old still works well.",
          "My laptop, which is five years old, still works well.",
          "My laptop which is five years old still works well.",
          "My laptop, that is five years old still works well."
        ],
        "correctIndex": 1,
        "explanation": "The extra information is nonrestrictive, so commas are needed.",
        "tag": "Linking",
        "difficulty": "Intermediate",
        "sequence": 30
      },
      {
        "prompt": "Choose the best combined sentence for: \"The book is excellent. You recommended it.\"",
        "options": [
          "The book is excellent that you recommended.",
          "The book that you recommended is excellent.",
          "The book that you recommended it is excellent.",
          "The book, that you recommended is excellent."
        ],
        "correctIndex": 1,
        "explanation": "Do not repeat the object with an extra pronoun.",
        "tag": "Combination",
        "difficulty": "Intermediate",
        "sequence": 31
      },
      {
        "prompt": "Which option uses clause grammar correctly? \"The book is excellent. You recommended it.\"",
        "options": [
          "The book that you recommended is excellent.",
          "The book that you recommended it is excellent.",
          "The book, that you recommended is excellent.",
          "The book is excellent that you recommended."
        ],
        "correctIndex": 0,
        "explanation": "Do not repeat the object with an extra pronoun.",
        "tag": "Clause control",
        "difficulty": "Intermediate",
        "sequence": 32
      },
      {
        "prompt": "Select the best revision of \"The book is excellent. You recommended it.\"",
        "options": [
          "The book that you recommended it is excellent.",
          "The book, that you recommended is excellent.",
          "The book is excellent that you recommended.",
          "The book that you recommended is excellent."
        ],
        "correctIndex": 3,
        "explanation": "Do not repeat the object with an extra pronoun.",
        "tag": "Revision",
        "difficulty": "Intermediate",
        "sequence": 33
      },
      {
        "prompt": "Which answer keeps the relationship between the ideas clear? \"The book is excellent. You recommended it.\"",
        "options": [
          "The book, that you recommended is excellent.",
          "The book is excellent that you recommended.",
          "The book that you recommended is excellent.",
          "The book that you recommended it is excellent."
        ],
        "correctIndex": 2,
        "explanation": "Do not repeat the object with an extra pronoun.",
        "tag": "Meaning",
        "difficulty": "Intermediate",
        "sequence": 34
      },
      {
        "prompt": "A learner tries to combine \"The book is excellent. You recommended it.\". Which version is correct?",
        "options": [
          "The book is excellent that you recommended.",
          "The book that you recommended is excellent.",
          "The book that you recommended it is excellent.",
          "The book, that you recommended is excellent."
        ],
        "correctIndex": 1,
        "explanation": "Do not repeat the object with an extra pronoun.",
        "tag": "Learner check",
        "difficulty": "Intermediate",
        "sequence": 35
      },
      {
        "prompt": "Which sentence follows the rule highlighted in this lesson?",
        "options": [
          "The book that you recommended is excellent.",
          "The book that you recommended it is excellent.",
          "The book, that you recommended is excellent.",
          "The book is excellent that you recommended."
        ],
        "correctIndex": 0,
        "explanation": "Do not repeat the object with an extra pronoun.",
        "tag": "Rule",
        "difficulty": "Intermediate",
        "sequence": 36
      },
      {
        "prompt": "Which option would you keep after editing for relative clauses or conjunctions?",
        "options": [
          "The book that you recommended it is excellent.",
          "The book, that you recommended is excellent.",
          "The book is excellent that you recommended.",
          "The book that you recommended is excellent."
        ],
        "correctIndex": 3,
        "explanation": "Do not repeat the object with an extra pronoun.",
        "tag": "Editing",
        "difficulty": "Intermediate",
        "sequence": 37
      },
      {
        "prompt": "Which answer avoids a comma or pronoun error?",
        "options": [
          "The book, that you recommended is excellent.",
          "The book is excellent that you recommended.",
          "The book that you recommended is excellent.",
          "The book that you recommended it is excellent."
        ],
        "correctIndex": 2,
        "explanation": "Do not repeat the object with an extra pronoun.",
        "tag": "Error check",
        "difficulty": "Intermediate",
        "sequence": 38
      },
      {
        "prompt": "Which sentence is standard written English?",
        "options": [
          "The book is excellent that you recommended.",
          "The book that you recommended is excellent.",
          "The book that you recommended it is excellent.",
          "The book, that you recommended is excellent."
        ],
        "correctIndex": 1,
        "explanation": "Do not repeat the object with an extra pronoun.",
        "tag": "Standard form",
        "difficulty": "Intermediate",
        "sequence": 39
      },
      {
        "prompt": "What is the best grammatical link between these ideas? \"The book is excellent. You recommended it.\"",
        "options": [
          "The book that you recommended is excellent.",
          "The book that you recommended it is excellent.",
          "The book, that you recommended is excellent.",
          "The book is excellent that you recommended."
        ],
        "correctIndex": 0,
        "explanation": "Do not repeat the object with an extra pronoun.",
        "tag": "Linking",
        "difficulty": "Intermediate",
        "sequence": 40
      },
      {
        "prompt": "Choose the best combined sentence for: \"The rain stopped. We went outside.\"",
        "options": [
          "When the rain stopped, we went outside.",
          "When the rain stopped we went outside.",
          "Because the rain stopped, we went outside when.",
          "The rain stopped, when we went outside."
        ],
        "correctIndex": 0,
        "explanation": "When is a natural subordinator for time sequence.",
        "tag": "Combination",
        "difficulty": "Advanced",
        "sequence": 41
      },
      {
        "prompt": "Which option uses clause grammar correctly? \"The rain stopped. We went outside.\"",
        "options": [
          "When the rain stopped we went outside.",
          "Because the rain stopped, we went outside when.",
          "The rain stopped, when we went outside.",
          "When the rain stopped, we went outside."
        ],
        "correctIndex": 3,
        "explanation": "When is a natural subordinator for time sequence.",
        "tag": "Clause control",
        "difficulty": "Advanced",
        "sequence": 42
      },
      {
        "prompt": "Select the best revision of \"The rain stopped. We went outside.\"",
        "options": [
          "Because the rain stopped, we went outside when.",
          "The rain stopped, when we went outside.",
          "When the rain stopped, we went outside.",
          "When the rain stopped we went outside."
        ],
        "correctIndex": 2,
        "explanation": "When is a natural subordinator for time sequence.",
        "tag": "Revision",
        "difficulty": "Advanced",
        "sequence": 43
      },
      {
        "prompt": "Which answer keeps the relationship between the ideas clear? \"The rain stopped. We went outside.\"",
        "options": [
          "The rain stopped, when we went outside.",
          "When the rain stopped, we went outside.",
          "When the rain stopped we went outside.",
          "Because the rain stopped, we went outside when."
        ],
        "correctIndex": 1,
        "explanation": "When is a natural subordinator for time sequence.",
        "tag": "Meaning",
        "difficulty": "Advanced",
        "sequence": 44
      },
      {
        "prompt": "A learner tries to combine \"The rain stopped. We went outside.\". Which version is correct?",
        "options": [
          "When the rain stopped, we went outside.",
          "When the rain stopped we went outside.",
          "Because the rain stopped, we went outside when.",
          "The rain stopped, when we went outside."
        ],
        "correctIndex": 0,
        "explanation": "When is a natural subordinator for time sequence.",
        "tag": "Learner check",
        "difficulty": "Advanced",
        "sequence": 45
      },
      {
        "prompt": "Which sentence follows the rule highlighted in this lesson?",
        "options": [
          "When the rain stopped we went outside.",
          "Because the rain stopped, we went outside when.",
          "The rain stopped, when we went outside.",
          "When the rain stopped, we went outside."
        ],
        "correctIndex": 3,
        "explanation": "When is a natural subordinator for time sequence.",
        "tag": "Rule",
        "difficulty": "Advanced",
        "sequence": 46
      },
      {
        "prompt": "Which option would you keep after editing for relative clauses or conjunctions?",
        "options": [
          "Because the rain stopped, we went outside when.",
          "The rain stopped, when we went outside.",
          "When the rain stopped, we went outside.",
          "When the rain stopped we went outside."
        ],
        "correctIndex": 2,
        "explanation": "When is a natural subordinator for time sequence.",
        "tag": "Editing",
        "difficulty": "Advanced",
        "sequence": 47
      },
      {
        "prompt": "Which answer avoids a comma or pronoun error?",
        "options": [
          "The rain stopped, when we went outside.",
          "When the rain stopped, we went outside.",
          "When the rain stopped we went outside.",
          "Because the rain stopped, we went outside when."
        ],
        "correctIndex": 1,
        "explanation": "When is a natural subordinator for time sequence.",
        "tag": "Error check",
        "difficulty": "Advanced",
        "sequence": 48
      },
      {
        "prompt": "Which sentence is standard written English?",
        "options": [
          "When the rain stopped, we went outside.",
          "When the rain stopped we went outside.",
          "Because the rain stopped, we went outside when.",
          "The rain stopped, when we went outside."
        ],
        "correctIndex": 0,
        "explanation": "When is a natural subordinator for time sequence.",
        "tag": "Standard form",
        "difficulty": "Advanced",
        "sequence": 49
      },
      {
        "prompt": "What is the best grammatical link between these ideas? \"The rain stopped. We went outside.\"",
        "options": [
          "When the rain stopped we went outside.",
          "Because the rain stopped, we went outside when.",
          "The rain stopped, when we went outside.",
          "When the rain stopped, we went outside."
        ],
        "correctIndex": 3,
        "explanation": "When is a natural subordinator for time sequence.",
        "tag": "Linking",
        "difficulty": "Advanced",
        "sequence": 50
      },
      {
        "prompt": "Choose the best combined sentence for: \"Students revise regularly. They improve faster.\"",
        "options": [
          "Students, who revise regularly improve faster.",
          "Students who revise regularly, improve faster.",
          "Students who they revise regularly improve faster.",
          "Students who revise regularly improve faster."
        ],
        "correctIndex": 3,
        "explanation": "This is a restrictive clause, so commas are not needed.",
        "tag": "Combination",
        "difficulty": "Advanced",
        "sequence": 51
      },
      {
        "prompt": "Which option uses clause grammar correctly? \"Students revise regularly. They improve faster.\"",
        "options": [
          "Students who revise regularly, improve faster.",
          "Students who they revise regularly improve faster.",
          "Students who revise regularly improve faster.",
          "Students, who revise regularly improve faster."
        ],
        "correctIndex": 2,
        "explanation": "This is a restrictive clause, so commas are not needed.",
        "tag": "Clause control",
        "difficulty": "Advanced",
        "sequence": 52
      },
      {
        "prompt": "Select the best revision of \"Students revise regularly. They improve faster.\"",
        "options": [
          "Students who they revise regularly improve faster.",
          "Students who revise regularly improve faster.",
          "Students, who revise regularly improve faster.",
          "Students who revise regularly, improve faster."
        ],
        "correctIndex": 1,
        "explanation": "This is a restrictive clause, so commas are not needed.",
        "tag": "Revision",
        "difficulty": "Advanced",
        "sequence": 53
      },
      {
        "prompt": "Which answer keeps the relationship between the ideas clear? \"Students revise regularly. They improve faster.\"",
        "options": [
          "Students who revise regularly improve faster.",
          "Students, who revise regularly improve faster.",
          "Students who revise regularly, improve faster.",
          "Students who they revise regularly improve faster."
        ],
        "correctIndex": 0,
        "explanation": "This is a restrictive clause, so commas are not needed.",
        "tag": "Meaning",
        "difficulty": "Advanced",
        "sequence": 54
      },
      {
        "prompt": "A learner tries to combine \"Students revise regularly. They improve faster.\". Which version is correct?",
        "options": [
          "Students, who revise regularly improve faster.",
          "Students who revise regularly, improve faster.",
          "Students who they revise regularly improve faster.",
          "Students who revise regularly improve faster."
        ],
        "correctIndex": 3,
        "explanation": "This is a restrictive clause, so commas are not needed.",
        "tag": "Learner check",
        "difficulty": "Advanced",
        "sequence": 55
      },
      {
        "prompt": "Which sentence follows the rule highlighted in this lesson?",
        "options": [
          "Students who revise regularly, improve faster.",
          "Students who they revise regularly improve faster.",
          "Students who revise regularly improve faster.",
          "Students, who revise regularly improve faster."
        ],
        "correctIndex": 2,
        "explanation": "This is a restrictive clause, so commas are not needed.",
        "tag": "Rule",
        "difficulty": "Advanced",
        "sequence": 56
      },
      {
        "prompt": "Which option would you keep after editing for relative clauses or conjunctions?",
        "options": [
          "Students who they revise regularly improve faster.",
          "Students who revise regularly improve faster.",
          "Students, who revise regularly improve faster.",
          "Students who revise regularly, improve faster."
        ],
        "correctIndex": 1,
        "explanation": "This is a restrictive clause, so commas are not needed.",
        "tag": "Editing",
        "difficulty": "Advanced",
        "sequence": 57
      },
      {
        "prompt": "Which answer avoids a comma or pronoun error?",
        "options": [
          "Students who revise regularly improve faster.",
          "Students, who revise regularly improve faster.",
          "Students who revise regularly, improve faster.",
          "Students who they revise regularly improve faster."
        ],
        "correctIndex": 0,
        "explanation": "This is a restrictive clause, so commas are not needed.",
        "tag": "Error check",
        "difficulty": "Advanced",
        "sequence": 58
      },
      {
        "prompt": "Which sentence is standard written English?",
        "options": [
          "Students, who revise regularly improve faster.",
          "Students who revise regularly, improve faster.",
          "Students who they revise regularly improve faster.",
          "Students who revise regularly improve faster."
        ],
        "correctIndex": 3,
        "explanation": "This is a restrictive clause, so commas are not needed.",
        "tag": "Standard form",
        "difficulty": "Advanced",
        "sequence": 59
      },
      {
        "prompt": "What is the best grammatical link between these ideas? \"Students revise regularly. They improve faster.\"",
        "options": [
          "Students who revise regularly, improve faster.",
          "Students who they revise regularly improve faster.",
          "Students who revise regularly improve faster.",
          "Students, who revise regularly improve faster."
        ],
        "correctIndex": 2,
        "explanation": "This is a restrictive clause, so commas are not needed.",
        "tag": "Linking",
        "difficulty": "Advanced",
        "sequence": 60
      }
    ],
    "advanced": [
      {
        "prompt": "Choose the best combined sentence for: \"The tutor helped me yesterday. She explained articles clearly.\"",
        "options": [
          "The tutor who helped me yesterday explained articles clearly.",
          "The tutor, who helped me yesterday explained articles clearly.",
          "The tutor who she helped me yesterday explained articles clearly.",
          "The tutor helped me yesterday, explained articles clearly."
        ],
        "correctIndex": 0,
        "explanation": "Use a restrictive relative clause without unnecessary pronouns or commas.",
        "tag": "Combination",
        "difficulty": "Review Challenge",
        "sequence": 1
      },
      {
        "prompt": "Which option uses clause grammar correctly? \"The tutor helped me yesterday. She explained articles clearly.\"",
        "options": [
          "The tutor, who helped me yesterday explained articles clearly.",
          "The tutor who she helped me yesterday explained articles clearly.",
          "The tutor helped me yesterday, explained articles clearly.",
          "The tutor who helped me yesterday explained articles clearly."
        ],
        "correctIndex": 3,
        "explanation": "Use a restrictive relative clause without unnecessary pronouns or commas.",
        "tag": "Clause control",
        "difficulty": "Review Challenge",
        "sequence": 2
      },
      {
        "prompt": "Select the best revision of \"The tutor helped me yesterday. She explained articles clearly.\"",
        "options": [
          "The tutor who she helped me yesterday explained articles clearly.",
          "The tutor helped me yesterday, explained articles clearly.",
          "The tutor who helped me yesterday explained articles clearly.",
          "The tutor, who helped me yesterday explained articles clearly."
        ],
        "correctIndex": 2,
        "explanation": "Use a restrictive relative clause without unnecessary pronouns or commas.",
        "tag": "Revision",
        "difficulty": "Review Challenge",
        "sequence": 3
      },
      {
        "prompt": "Which answer keeps the relationship between the ideas clear? \"The tutor helped me yesterday. She explained articles clearly.\"",
        "options": [
          "The tutor helped me yesterday, explained articles clearly.",
          "The tutor who helped me yesterday explained articles clearly.",
          "The tutor, who helped me yesterday explained articles clearly.",
          "The tutor who she helped me yesterday explained articles clearly."
        ],
        "correctIndex": 1,
        "explanation": "Use a restrictive relative clause without unnecessary pronouns or commas.",
        "tag": "Meaning",
        "difficulty": "Review Challenge",
        "sequence": 4
      },
      {
        "prompt": "A learner tries to combine \"The tutor helped me yesterday. She explained articles clearly.\". Which version is correct?",
        "options": [
          "The tutor who helped me yesterday explained articles clearly.",
          "The tutor, who helped me yesterday explained articles clearly.",
          "The tutor who she helped me yesterday explained articles clearly.",
          "The tutor helped me yesterday, explained articles clearly."
        ],
        "correctIndex": 0,
        "explanation": "Use a restrictive relative clause without unnecessary pronouns or commas.",
        "tag": "Learner check",
        "difficulty": "Review Challenge",
        "sequence": 5
      },
      {
        "prompt": "Which option would you keep after editing for relative clauses or conjunctions?",
        "options": [
          "The tutor who she helped me yesterday explained articles clearly.",
          "The tutor helped me yesterday, explained articles clearly.",
          "The tutor who helped me yesterday explained articles clearly.",
          "The tutor, who helped me yesterday explained articles clearly."
        ],
        "correctIndex": 2,
        "explanation": "Use a restrictive relative clause without unnecessary pronouns or commas.",
        "tag": "Editing",
        "difficulty": "Review Challenge",
        "sequence": 6
      },
      {
        "prompt": "Which focus best matches the main learning challenge in \"Clauses, Conjunctions, and Relative Clauses\"?",
        "options": [
          "Identify the job each word does inside a sentence.",
          "Build complete sentences with subjects, verbs, and clear complements.",
          "Use a, an, the, some, and zero article correctly.",
          "Connect ideas smoothly and add detail without repetition."
        ],
        "correctIndex": 3,
        "explanation": "The focus of this lesson is: Connect ideas smoothly and add detail without repetition.",
        "tag": "Advanced focus",
        "difficulty": "Review Challenge",
        "sequence": 7
      },
      {
        "prompt": "Which rule belongs most directly to \"Clauses, Conjunctions, and Relative Clauses\"?",
        "options": [
          "Adjectives describe nouns; adverbs usually modify verbs, adjectives, or other adverbs.",
          "Determiners such as the, a, this, and many signal which noun you mean.",
          "Use subordinating conjunctions such as because, although, if, while, after, and before to link unequal ideas.",
          "A noun names a person, place, thing, or idea, while a verb shows action or state."
        ],
        "correctIndex": 2,
        "explanation": "Use subordinating conjunctions such as because, although, if, while, after, and before to link unequal ideas.",
        "tag": "Rule distinction",
        "difficulty": "Review Challenge",
        "sequence": 8
      },
      {
        "prompt": "Which editing warning is most important to remember in \"Clauses, Conjunctions, and Relative Clauses\"?",
        "options": [
          {
            "wrong": "The news is exciting. She is exciting.",
            "right": "The news is exciting. She is excited.",
            "note": "Use the -ed adjective for the person's feeling, -ing for the thing's quality."
          },
          {
            "wrong": "The tutor who helped me, explained articles clearly.",
            "right": "The tutor who helped me explained articles clearly.",
            "note": "Don't use commas around a restrictive clause; it's essential to the meaning."
          },
          {
            "wrong": "I have a friendly meeting tomorrow.",
            "right": "I have a friendly meeting tomorrow.",
            "note": "Friendly is an adjective here, not an adverb, so no -ly suffix needed."
          },
          {
            "wrong": "He ran quick to the store.",
            "right": "He ran quickly to the store.",
            "note": "Adverbs modify verbs; use quickly, not quick."
          }
        ],
        "correctIndex": 1,
        "explanation": {
          "wrong": "The tutor who helped me, explained articles clearly.",
          "right": "The tutor who helped me explained articles clearly.",
          "note": "Don't use commas around a restrictive clause; it's essential to the meaning."
        },
        "tag": "Pitfall check",
        "difficulty": "Review Challenge",
        "sequence": 9
      },
      {
        "prompt": "Which practice move best extends the lesson after you finish the core explanation?",
        "options": [
          "Exercise 1 - Clause Identification: Read a paragraph and underline dependent clauses, labeling each by type (reason, time, contrast, etc.).",
          "Exercise 1 - Labeling: Read a paragraph and mark each word with its part of speech (noun, verb, adj, adv, etc.)",
          "Exercise 2 - Identification: Identify the target word class in each sentence: 'Find the adverb that modifies ran.'",
          "Exercise 3 - Word Transformation: Transform words to different classes (run→runner→running; quick→quickly)"
        ],
        "correctIndex": 0,
        "explanation": "Exercise 1 - Clause Identification: Read a paragraph and underline dependent clauses, labeling each by type (reason, time, contrast, etc.).",
        "tag": "Practice transfer",
        "difficulty": "Review Challenge",
        "sequence": 10
      },
      {
        "prompt": "Which explanation best matches this model sentence from \"Clauses, Conjunctions, and Relative Clauses\"? \"The tutor who helped me yesterday explained articles clearly.\"",
        "options": [
          "student (noun), curious (adjective), quickly (adverb), opened (verb)",
          "She (pronoun), carefully (adverb), explained (verb), importance (noun)",
          "Although (conjunction), raining (verb form), we (pronoun), near (preposition), mountain (noun)",
          "Restrictive: which tutor? Answer: the one who helped me."
        ],
        "correctIndex": 3,
        "explanation": "Restrictive: which tutor? Answer: the one who helped me.",
        "tag": "Example analysis",
        "difficulty": "Review Challenge",
        "sequence": 11
      },
      {
        "prompt": "Which objective belongs to \"Clauses, Conjunctions, and Relative Clauses\"?",
        "options": [
          "Separate form from function when a word changes category by use.",
          "Explain why the same word can behave differently across contexts.",
          "Link unequal ideas with subordinators.",
          "Recognize the major word classes in authentic sentences."
        ],
        "correctIndex": 2,
        "explanation": "Link unequal ideas with subordinators.",
        "tag": "Objective check",
        "difficulty": "Review Challenge",
        "sequence": 12
      },
      {
        "prompt": "Which portfolio task best fits the module that contains \"Clauses, Conjunctions, and Relative Clauses\"?",
        "options": [
          "Edit an old paragraph only for sentence-level accuracy and annotate each correction.",
          "Write a multi-paragraph response using at least one relative clause, one conditional, one reported statement, and one verb-pattern contrast.",
          "Write a 150-word self-introduction and label nouns, verbs, articles, and sentence types.",
          "Write a three-part narrative using present, past, and future meaning accurately."
        ],
        "correctIndex": 1,
        "explanation": "Write a multi-paragraph response using at least one relative clause, one conditional, one reported statement, and one verb-pattern contrast.",
        "tag": "Portfolio transfer",
        "difficulty": "Review Challenge",
        "sequence": 13
      },
      {
        "prompt": "Which module description best fits the context of \"Clauses, Conjunctions, and Relative Clauses\"?",
        "options": [
          "Use clauses, relative structures, conditionals, reported speech, and verb patterns to communicate more complex relationships.",
          "Build a clean base in word classes, sentence architecture, and noun phrases before moving into more advanced control.",
          "Learn how English grammar maps routine, action-in-progress, experience, finished time, future reference, and modal meaning.",
          "Strengthen agreement, pronoun reference, auxiliary use, pattern control, and active-passive choices."
        ],
        "correctIndex": 0,
        "explanation": "Use clauses, relative structures, conditionals, reported speech, and verb patterns to communicate more complex relationships.",
        "tag": "Module alignment",
        "difficulty": "Review Challenge",
        "sequence": 14
      },
      {
        "prompt": "Which reading insight best matches the story work in \"Clauses, Conjunctions, and Relative Clauses\"?",
        "options": [
          "Market (noun), Saturday (noun), Maya (noun) are the main subjects and objects.",
          "Visits, walks, looking, shows, answer, select, stands are action verbs showing what people do.",
          "Busy, colorful, fresh, ripe describe nouns (busy market, colorful stalls).",
          "Because clauses and relative clauses both explain: because tells why, who/which tells what/which person."
        ],
        "correctIndex": 3,
        "explanation": "Because clauses and relative clauses both explain: because tells why, who/which tells what/which person.",
        "tag": "Story analysis",
        "difficulty": "Review Challenge",
        "sequence": 15
      },
      {
        "prompt": "Which sentence follows the rule highlighted in this lesson?",
        "options": [
          "The tutor, who helped me yesterday explained articles clearly.",
          "The tutor who she helped me yesterday explained articles clearly.",
          "The tutor helped me yesterday, explained articles clearly.",
          "The tutor who helped me yesterday explained articles clearly."
        ],
        "correctIndex": 3,
        "explanation": "Use a restrictive relative clause without unnecessary pronouns or commas.",
        "tag": "Rule",
        "difficulty": "Review Challenge",
        "sequence": 16
      },
      {
        "prompt": "Which answer avoids a comma or pronoun error?",
        "options": [
          "The tutor helped me yesterday, explained articles clearly.",
          "The tutor who helped me yesterday explained articles clearly.",
          "The tutor, who helped me yesterday explained articles clearly.",
          "The tutor who she helped me yesterday explained articles clearly."
        ],
        "correctIndex": 1,
        "explanation": "Use a restrictive relative clause without unnecessary pronouns or commas.",
        "tag": "Error check",
        "difficulty": "Review Challenge",
        "sequence": 17
      },
      {
        "prompt": "Which sentence is standard written English?",
        "options": [
          "The tutor who helped me yesterday explained articles clearly.",
          "The tutor, who helped me yesterday explained articles clearly.",
          "The tutor who she helped me yesterday explained articles clearly.",
          "The tutor helped me yesterday, explained articles clearly."
        ],
        "correctIndex": 0,
        "explanation": "Use a restrictive relative clause without unnecessary pronouns or commas.",
        "tag": "Standard form",
        "difficulty": "Review Challenge",
        "sequence": 18
      },
      {
        "prompt": "What is the best grammatical link between these ideas? \"The tutor helped me yesterday. She explained articles clearly.\"",
        "options": [
          "The tutor, who helped me yesterday explained articles clearly.",
          "The tutor who she helped me yesterday explained articles clearly.",
          "The tutor helped me yesterday, explained articles clearly.",
          "The tutor who helped me yesterday explained articles clearly."
        ],
        "correctIndex": 3,
        "explanation": "Use a restrictive relative clause without unnecessary pronouns or commas.",
        "tag": "Linking",
        "difficulty": "Review Challenge",
        "sequence": 19
      },
      {
        "prompt": "Choose the best combined sentence for: \"The task was difficult. The class finished on time.\"",
        "options": [
          "Because the task was difficult, the class finished on time.",
          "Although the task was difficult, but the class finished on time.",
          "Although was the task difficult, the class finished on time.",
          "Although the task was difficult, the class finished on time."
        ],
        "correctIndex": 3,
        "explanation": "Although introduces contrast.",
        "tag": "Combination",
        "difficulty": "Review Challenge",
        "sequence": 20
      }
    ]
  },
  "conditionals": {
    "standard": [
      {
        "prompt": "Choose the best completion: \"If you heat ice, it ___.\"",
        "options": [
          "melts",
          "will melt",
          "would melt",
          "melted"
        ],
        "correctIndex": 0,
        "explanation": "This is a zero conditional showing a general truth.",
        "tag": "Conditional form",
        "difficulty": "Basic",
        "sequence": 1
      },
      {
        "prompt": "Which option matches the meaning of \"If you heat ice, it ___.\"",
        "options": [
          "will melt",
          "would melt",
          "melted",
          "melts"
        ],
        "correctIndex": 3,
        "explanation": "This is a zero conditional showing a general truth.",
        "tag": "Meaning",
        "difficulty": "Basic",
        "sequence": 2
      },
      {
        "prompt": "Select the correct grammar for this conditional or wish sentence: \"If you heat ice, it ___.\"",
        "options": [
          "would melt",
          "melted",
          "melts",
          "will melt"
        ],
        "correctIndex": 2,
        "explanation": "This is a zero conditional showing a general truth.",
        "tag": "Grammar",
        "difficulty": "Basic",
        "sequence": 3
      },
      {
        "prompt": "Which answer follows the lesson rule in \"If you heat ice, it ___.\"",
        "options": [
          "melted",
          "melts",
          "will melt",
          "would melt"
        ],
        "correctIndex": 1,
        "explanation": "This is a zero conditional showing a general truth.",
        "tag": "Rule",
        "difficulty": "Basic",
        "sequence": 4
      },
      {
        "prompt": "A learner hesitates over \"If you heat ice, it ___.\". Which answer is right?",
        "options": [
          "melts",
          "will melt",
          "would melt",
          "melted"
        ],
        "correctIndex": 0,
        "explanation": "This is a zero conditional showing a general truth.",
        "tag": "Learner check",
        "difficulty": "Basic",
        "sequence": 5
      },
      {
        "prompt": "Which option would you keep after editing \"If you heat ice, it ___.\"",
        "options": [
          "will melt",
          "would melt",
          "melted",
          "melts"
        ],
        "correctIndex": 3,
        "explanation": "This is a zero conditional showing a general truth.",
        "tag": "Editing",
        "difficulty": "Basic",
        "sequence": 6
      },
      {
        "prompt": "Which choice produces standard English? \"If you heat ice, it ___.\"",
        "options": [
          "would melt",
          "melted",
          "melts",
          "will melt"
        ],
        "correctIndex": 2,
        "explanation": "This is a zero conditional showing a general truth.",
        "tag": "Standard form",
        "difficulty": "Basic",
        "sequence": 7
      },
      {
        "prompt": "What is the best verb pattern here? \"If you heat ice, it ___.\"",
        "options": [
          "melted",
          "melts",
          "will melt",
          "would melt"
        ],
        "correctIndex": 1,
        "explanation": "This is a zero conditional showing a general truth.",
        "tag": "Verb pattern",
        "difficulty": "Basic",
        "sequence": 8
      },
      {
        "prompt": "Which explanation is best?",
        "options": [
          "This is a zero conditional showing a general truth.",
          "All if-clauses should use will.",
          "Wish uses future forms for unreal present meaning.",
          "Third conditionals describe guaranteed future events."
        ],
        "correctIndex": 0,
        "explanation": "This is a zero conditional showing a general truth.",
        "tag": "Explanation",
        "difficulty": "Basic",
        "sequence": 9
      },
      {
        "prompt": "Choose the grammatical answer for \"If you heat ice, it ___.\"",
        "options": [
          "will melt",
          "would melt",
          "melted",
          "melts"
        ],
        "correctIndex": 3,
        "explanation": "This is a zero conditional showing a general truth.",
        "tag": "Selection",
        "difficulty": "Basic",
        "sequence": 10
      },
      {
        "prompt": "Choose the best completion: \"If she studies tonight, she ___ more confident tomorrow.\"",
        "options": [
          "feels",
          "would feel",
          "felt",
          "will feel"
        ],
        "correctIndex": 3,
        "explanation": "The first conditional uses present in the if-clause and will in the result clause.",
        "tag": "Conditional form",
        "difficulty": "Basic",
        "sequence": 11
      },
      {
        "prompt": "Which option matches the meaning of \"If she studies tonight, she ___ more confident tomorrow.\"",
        "options": [
          "would feel",
          "felt",
          "will feel",
          "feels"
        ],
        "correctIndex": 2,
        "explanation": "The first conditional uses present in the if-clause and will in the result clause.",
        "tag": "Meaning",
        "difficulty": "Basic",
        "sequence": 12
      },
      {
        "prompt": "Select the correct grammar for this conditional or wish sentence: \"If she studies tonight, she ___ more confident tomorrow.\"",
        "options": [
          "felt",
          "will feel",
          "feels",
          "would feel"
        ],
        "correctIndex": 1,
        "explanation": "The first conditional uses present in the if-clause and will in the result clause.",
        "tag": "Grammar",
        "difficulty": "Basic",
        "sequence": 13
      },
      {
        "prompt": "Which answer follows the lesson rule in \"If she studies tonight, she ___ more confident tomorrow.\"",
        "options": [
          "will feel",
          "feels",
          "would feel",
          "felt"
        ],
        "correctIndex": 0,
        "explanation": "The first conditional uses present in the if-clause and will in the result clause.",
        "tag": "Rule",
        "difficulty": "Basic",
        "sequence": 14
      },
      {
        "prompt": "A learner hesitates over \"If she studies tonight, she ___ more confident tomorrow.\". Which answer is right?",
        "options": [
          "feels",
          "would feel",
          "felt",
          "will feel"
        ],
        "correctIndex": 3,
        "explanation": "The first conditional uses present in the if-clause and will in the result clause.",
        "tag": "Learner check",
        "difficulty": "Basic",
        "sequence": 15
      },
      {
        "prompt": "Which option would you keep after editing \"If she studies tonight, she ___ more confident tomorrow.\"",
        "options": [
          "would feel",
          "felt",
          "will feel",
          "feels"
        ],
        "correctIndex": 2,
        "explanation": "The first conditional uses present in the if-clause and will in the result clause.",
        "tag": "Editing",
        "difficulty": "Basic",
        "sequence": 16
      },
      {
        "prompt": "Which choice produces standard English? \"If she studies tonight, she ___ more confident tomorrow.\"",
        "options": [
          "felt",
          "will feel",
          "feels",
          "would feel"
        ],
        "correctIndex": 1,
        "explanation": "The first conditional uses present in the if-clause and will in the result clause.",
        "tag": "Standard form",
        "difficulty": "Basic",
        "sequence": 17
      },
      {
        "prompt": "What is the best verb pattern here? \"If she studies tonight, she ___ more confident tomorrow.\"",
        "options": [
          "will feel",
          "feels",
          "would feel",
          "felt"
        ],
        "correctIndex": 0,
        "explanation": "The first conditional uses present in the if-clause and will in the result clause.",
        "tag": "Verb pattern",
        "difficulty": "Basic",
        "sequence": 18
      },
      {
        "prompt": "Which explanation is best?",
        "options": [
          "All if-clauses should use will.",
          "Wish uses future forms for unreal present meaning.",
          "Third conditionals describe guaranteed future events.",
          "The first conditional uses present in the if-clause and will in the result clause."
        ],
        "correctIndex": 3,
        "explanation": "The first conditional uses present in the if-clause and will in the result clause.",
        "tag": "Explanation",
        "difficulty": "Basic",
        "sequence": 19
      },
      {
        "prompt": "Choose the grammatical answer for \"If she studies tonight, she ___ more confident tomorrow.\"",
        "options": [
          "would feel",
          "felt",
          "will feel",
          "feels"
        ],
        "correctIndex": 2,
        "explanation": "The first conditional uses present in the if-clause and will in the result clause.",
        "tag": "Selection",
        "difficulty": "Basic",
        "sequence": 20
      },
      {
        "prompt": "Choose the best completion: \"If I ___ you, I would ask for feedback.\"",
        "options": [
          "was",
          "have been",
          "were",
          "am"
        ],
        "correctIndex": 2,
        "explanation": "Formal second conditionals often use were for all subjects.",
        "tag": "Conditional form",
        "difficulty": "Intermediate",
        "sequence": 21
      },
      {
        "prompt": "Which option matches the meaning of \"If I ___ you, I would ask for feedback.\"",
        "options": [
          "have been",
          "were",
          "am",
          "was"
        ],
        "correctIndex": 1,
        "explanation": "Formal second conditionals often use were for all subjects.",
        "tag": "Meaning",
        "difficulty": "Intermediate",
        "sequence": 22
      },
      {
        "prompt": "Select the correct grammar for this conditional or wish sentence: \"If I ___ you, I would ask for feedback.\"",
        "options": [
          "were",
          "am",
          "was",
          "have been"
        ],
        "correctIndex": 0,
        "explanation": "Formal second conditionals often use were for all subjects.",
        "tag": "Grammar",
        "difficulty": "Intermediate",
        "sequence": 23
      },
      {
        "prompt": "Which answer follows the lesson rule in \"If I ___ you, I would ask for feedback.\"",
        "options": [
          "am",
          "was",
          "have been",
          "were"
        ],
        "correctIndex": 3,
        "explanation": "Formal second conditionals often use were for all subjects.",
        "tag": "Rule",
        "difficulty": "Intermediate",
        "sequence": 24
      },
      {
        "prompt": "A learner hesitates over \"If I ___ you, I would ask for feedback.\". Which answer is right?",
        "options": [
          "was",
          "have been",
          "were",
          "am"
        ],
        "correctIndex": 2,
        "explanation": "Formal second conditionals often use were for all subjects.",
        "tag": "Learner check",
        "difficulty": "Intermediate",
        "sequence": 25
      },
      {
        "prompt": "Which option would you keep after editing \"If I ___ you, I would ask for feedback.\"",
        "options": [
          "have been",
          "were",
          "am",
          "was"
        ],
        "correctIndex": 1,
        "explanation": "Formal second conditionals often use were for all subjects.",
        "tag": "Editing",
        "difficulty": "Intermediate",
        "sequence": 26
      },
      {
        "prompt": "Which choice produces standard English? \"If I ___ you, I would ask for feedback.\"",
        "options": [
          "were",
          "am",
          "was",
          "have been"
        ],
        "correctIndex": 0,
        "explanation": "Formal second conditionals often use were for all subjects.",
        "tag": "Standard form",
        "difficulty": "Intermediate",
        "sequence": 27
      },
      {
        "prompt": "What is the best verb pattern here? \"If I ___ you, I would ask for feedback.\"",
        "options": [
          "am",
          "was",
          "have been",
          "were"
        ],
        "correctIndex": 3,
        "explanation": "Formal second conditionals often use were for all subjects.",
        "tag": "Verb pattern",
        "difficulty": "Intermediate",
        "sequence": 28
      },
      {
        "prompt": "Which explanation is best?",
        "options": [
          "Wish uses future forms for unreal present meaning.",
          "Third conditionals describe guaranteed future events.",
          "Formal second conditionals often use were for all subjects.",
          "All if-clauses should use will."
        ],
        "correctIndex": 2,
        "explanation": "Formal second conditionals often use were for all subjects.",
        "tag": "Explanation",
        "difficulty": "Intermediate",
        "sequence": 29
      },
      {
        "prompt": "Choose the grammatical answer for \"If I ___ you, I would ask for feedback.\"",
        "options": [
          "have been",
          "were",
          "am",
          "was"
        ],
        "correctIndex": 1,
        "explanation": "Formal second conditionals often use were for all subjects.",
        "tag": "Selection",
        "difficulty": "Intermediate",
        "sequence": 30
      },
      {
        "prompt": "Choose the best completion: \"If I had revised earlier, I ___ calmer.\"",
        "options": [
          "felt",
          "would have felt",
          "will feel",
          "would feel"
        ],
        "correctIndex": 1,
        "explanation": "The third conditional describes an unreal past result.",
        "tag": "Conditional form",
        "difficulty": "Intermediate",
        "sequence": 31
      },
      {
        "prompt": "Which option matches the meaning of \"If I had revised earlier, I ___ calmer.\"",
        "options": [
          "would have felt",
          "will feel",
          "would feel",
          "felt"
        ],
        "correctIndex": 0,
        "explanation": "The third conditional describes an unreal past result.",
        "tag": "Meaning",
        "difficulty": "Intermediate",
        "sequence": 32
      },
      {
        "prompt": "Select the correct grammar for this conditional or wish sentence: \"If I had revised earlier, I ___ calmer.\"",
        "options": [
          "will feel",
          "would feel",
          "felt",
          "would have felt"
        ],
        "correctIndex": 3,
        "explanation": "The third conditional describes an unreal past result.",
        "tag": "Grammar",
        "difficulty": "Intermediate",
        "sequence": 33
      },
      {
        "prompt": "Which answer follows the lesson rule in \"If I had revised earlier, I ___ calmer.\"",
        "options": [
          "would feel",
          "felt",
          "would have felt",
          "will feel"
        ],
        "correctIndex": 2,
        "explanation": "The third conditional describes an unreal past result.",
        "tag": "Rule",
        "difficulty": "Intermediate",
        "sequence": 34
      },
      {
        "prompt": "A learner hesitates over \"If I had revised earlier, I ___ calmer.\". Which answer is right?",
        "options": [
          "felt",
          "would have felt",
          "will feel",
          "would feel"
        ],
        "correctIndex": 1,
        "explanation": "The third conditional describes an unreal past result.",
        "tag": "Learner check",
        "difficulty": "Intermediate",
        "sequence": 35
      },
      {
        "prompt": "Which option would you keep after editing \"If I had revised earlier, I ___ calmer.\"",
        "options": [
          "would have felt",
          "will feel",
          "would feel",
          "felt"
        ],
        "correctIndex": 0,
        "explanation": "The third conditional describes an unreal past result.",
        "tag": "Editing",
        "difficulty": "Intermediate",
        "sequence": 36
      },
      {
        "prompt": "Which choice produces standard English? \"If I had revised earlier, I ___ calmer.\"",
        "options": [
          "will feel",
          "would feel",
          "felt",
          "would have felt"
        ],
        "correctIndex": 3,
        "explanation": "The third conditional describes an unreal past result.",
        "tag": "Standard form",
        "difficulty": "Intermediate",
        "sequence": 37
      },
      {
        "prompt": "What is the best verb pattern here? \"If I had revised earlier, I ___ calmer.\"",
        "options": [
          "would feel",
          "felt",
          "would have felt",
          "will feel"
        ],
        "correctIndex": 2,
        "explanation": "The third conditional describes an unreal past result.",
        "tag": "Verb pattern",
        "difficulty": "Intermediate",
        "sequence": 38
      },
      {
        "prompt": "Which explanation is best?",
        "options": [
          "Third conditionals describe guaranteed future events.",
          "The third conditional describes an unreal past result.",
          "All if-clauses should use will.",
          "Wish uses future forms for unreal present meaning."
        ],
        "correctIndex": 1,
        "explanation": "The third conditional describes an unreal past result.",
        "tag": "Explanation",
        "difficulty": "Intermediate",
        "sequence": 39
      },
      {
        "prompt": "Choose the grammatical answer for \"If I had revised earlier, I ___ calmer.\"",
        "options": [
          "would have felt",
          "will feel",
          "would feel",
          "felt"
        ],
        "correctIndex": 0,
        "explanation": "The third conditional describes an unreal past result.",
        "tag": "Selection",
        "difficulty": "Intermediate",
        "sequence": 40
      },
      {
        "prompt": "Choose the best completion: \"I wish I ___ taller.\"",
        "options": [
          "were",
          "am",
          "will be",
          "have been"
        ],
        "correctIndex": 0,
        "explanation": "Wish uses a past form for unreal present meaning.",
        "tag": "Conditional form",
        "difficulty": "Advanced",
        "sequence": 41
      },
      {
        "prompt": "Which option matches the meaning of \"I wish I ___ taller.\"",
        "options": [
          "am",
          "will be",
          "have been",
          "were"
        ],
        "correctIndex": 3,
        "explanation": "Wish uses a past form for unreal present meaning.",
        "tag": "Meaning",
        "difficulty": "Advanced",
        "sequence": 42
      },
      {
        "prompt": "Select the correct grammar for this conditional or wish sentence: \"I wish I ___ taller.\"",
        "options": [
          "will be",
          "have been",
          "were",
          "am"
        ],
        "correctIndex": 2,
        "explanation": "Wish uses a past form for unreal present meaning.",
        "tag": "Grammar",
        "difficulty": "Advanced",
        "sequence": 43
      },
      {
        "prompt": "Which answer follows the lesson rule in \"I wish I ___ taller.\"",
        "options": [
          "have been",
          "were",
          "am",
          "will be"
        ],
        "correctIndex": 1,
        "explanation": "Wish uses a past form for unreal present meaning.",
        "tag": "Rule",
        "difficulty": "Advanced",
        "sequence": 44
      },
      {
        "prompt": "A learner hesitates over \"I wish I ___ taller.\". Which answer is right?",
        "options": [
          "were",
          "am",
          "will be",
          "have been"
        ],
        "correctIndex": 0,
        "explanation": "Wish uses a past form for unreal present meaning.",
        "tag": "Learner check",
        "difficulty": "Advanced",
        "sequence": 45
      },
      {
        "prompt": "Which option would you keep after editing \"I wish I ___ taller.\"",
        "options": [
          "am",
          "will be",
          "have been",
          "were"
        ],
        "correctIndex": 3,
        "explanation": "Wish uses a past form for unreal present meaning.",
        "tag": "Editing",
        "difficulty": "Advanced",
        "sequence": 46
      },
      {
        "prompt": "Which choice produces standard English? \"I wish I ___ taller.\"",
        "options": [
          "will be",
          "have been",
          "were",
          "am"
        ],
        "correctIndex": 2,
        "explanation": "Wish uses a past form for unreal present meaning.",
        "tag": "Standard form",
        "difficulty": "Advanced",
        "sequence": 47
      },
      {
        "prompt": "What is the best verb pattern here? \"I wish I ___ taller.\"",
        "options": [
          "have been",
          "were",
          "am",
          "will be"
        ],
        "correctIndex": 1,
        "explanation": "Wish uses a past form for unreal present meaning.",
        "tag": "Verb pattern",
        "difficulty": "Advanced",
        "sequence": 48
      },
      {
        "prompt": "Which explanation is best?",
        "options": [
          "Wish uses a past form for unreal present meaning.",
          "All if-clauses should use will.",
          "Wish uses future forms for unreal present meaning.",
          "Third conditionals describe guaranteed future events."
        ],
        "correctIndex": 0,
        "explanation": "Wish uses a past form for unreal present meaning.",
        "tag": "Explanation",
        "difficulty": "Advanced",
        "sequence": 49
      },
      {
        "prompt": "Choose the grammatical answer for \"I wish I ___ taller.\"",
        "options": [
          "am",
          "will be",
          "have been",
          "were"
        ],
        "correctIndex": 3,
        "explanation": "Wish uses a past form for unreal present meaning.",
        "tag": "Selection",
        "difficulty": "Advanced",
        "sequence": 50
      },
      {
        "prompt": "Choose the best completion: \"If it rains tomorrow, we ___ inside.\"",
        "options": [
          "stay",
          "would stay",
          "stayed",
          "will stay"
        ],
        "correctIndex": 3,
        "explanation": "Do not use will in the if-clause of a standard first conditional.",
        "tag": "Conditional form",
        "difficulty": "Advanced",
        "sequence": 51
      },
      {
        "prompt": "Which option matches the meaning of \"If it rains tomorrow, we ___ inside.\"",
        "options": [
          "would stay",
          "stayed",
          "will stay",
          "stay"
        ],
        "correctIndex": 2,
        "explanation": "Do not use will in the if-clause of a standard first conditional.",
        "tag": "Meaning",
        "difficulty": "Advanced",
        "sequence": 52
      },
      {
        "prompt": "Select the correct grammar for this conditional or wish sentence: \"If it rains tomorrow, we ___ inside.\"",
        "options": [
          "stayed",
          "will stay",
          "stay",
          "would stay"
        ],
        "correctIndex": 1,
        "explanation": "Do not use will in the if-clause of a standard first conditional.",
        "tag": "Grammar",
        "difficulty": "Advanced",
        "sequence": 53
      },
      {
        "prompt": "Which answer follows the lesson rule in \"If it rains tomorrow, we ___ inside.\"",
        "options": [
          "will stay",
          "stay",
          "would stay",
          "stayed"
        ],
        "correctIndex": 0,
        "explanation": "Do not use will in the if-clause of a standard first conditional.",
        "tag": "Rule",
        "difficulty": "Advanced",
        "sequence": 54
      },
      {
        "prompt": "A learner hesitates over \"If it rains tomorrow, we ___ inside.\". Which answer is right?",
        "options": [
          "stay",
          "would stay",
          "stayed",
          "will stay"
        ],
        "correctIndex": 3,
        "explanation": "Do not use will in the if-clause of a standard first conditional.",
        "tag": "Learner check",
        "difficulty": "Advanced",
        "sequence": 55
      },
      {
        "prompt": "Which option would you keep after editing \"If it rains tomorrow, we ___ inside.\"",
        "options": [
          "would stay",
          "stayed",
          "will stay",
          "stay"
        ],
        "correctIndex": 2,
        "explanation": "Do not use will in the if-clause of a standard first conditional.",
        "tag": "Editing",
        "difficulty": "Advanced",
        "sequence": 56
      },
      {
        "prompt": "Which choice produces standard English? \"If it rains tomorrow, we ___ inside.\"",
        "options": [
          "stayed",
          "will stay",
          "stay",
          "would stay"
        ],
        "correctIndex": 1,
        "explanation": "Do not use will in the if-clause of a standard first conditional.",
        "tag": "Standard form",
        "difficulty": "Advanced",
        "sequence": 57
      },
      {
        "prompt": "What is the best verb pattern here? \"If it rains tomorrow, we ___ inside.\"",
        "options": [
          "will stay",
          "stay",
          "would stay",
          "stayed"
        ],
        "correctIndex": 0,
        "explanation": "Do not use will in the if-clause of a standard first conditional.",
        "tag": "Verb pattern",
        "difficulty": "Advanced",
        "sequence": 58
      },
      {
        "prompt": "Which explanation is best?",
        "options": [
          "All if-clauses should use will.",
          "Wish uses future forms for unreal present meaning.",
          "Third conditionals describe guaranteed future events.",
          "Do not use will in the if-clause of a standard first conditional."
        ],
        "correctIndex": 3,
        "explanation": "Do not use will in the if-clause of a standard first conditional.",
        "tag": "Explanation",
        "difficulty": "Advanced",
        "sequence": 59
      },
      {
        "prompt": "Choose the grammatical answer for \"If it rains tomorrow, we ___ inside.\"",
        "options": [
          "would stay",
          "stayed",
          "will stay",
          "stay"
        ],
        "correctIndex": 2,
        "explanation": "Do not use will in the if-clause of a standard first conditional.",
        "tag": "Selection",
        "difficulty": "Advanced",
        "sequence": 60
      }
    ],
    "advanced": [
      {
        "prompt": "Choose the best completion: \"If you heat ice, it ___.\"",
        "options": [
          "melts",
          "will melt",
          "would melt",
          "melted"
        ],
        "correctIndex": 0,
        "explanation": "This is a zero conditional showing a general truth.",
        "tag": "Conditional form",
        "difficulty": "Review Challenge",
        "sequence": 1
      },
      {
        "prompt": "Which option matches the meaning of \"If you heat ice, it ___.\"",
        "options": [
          "will melt",
          "would melt",
          "melted",
          "melts"
        ],
        "correctIndex": 3,
        "explanation": "This is a zero conditional showing a general truth.",
        "tag": "Meaning",
        "difficulty": "Review Challenge",
        "sequence": 2
      },
      {
        "prompt": "Select the correct grammar for this conditional or wish sentence: \"If you heat ice, it ___.\"",
        "options": [
          "would melt",
          "melted",
          "melts",
          "will melt"
        ],
        "correctIndex": 2,
        "explanation": "This is a zero conditional showing a general truth.",
        "tag": "Grammar",
        "difficulty": "Review Challenge",
        "sequence": 3
      },
      {
        "prompt": "Which option would you keep after editing \"If you heat ice, it ___.\"",
        "options": [
          "will melt",
          "would melt",
          "melted",
          "melts"
        ],
        "correctIndex": 3,
        "explanation": "This is a zero conditional showing a general truth.",
        "tag": "Editing",
        "difficulty": "Review Challenge",
        "sequence": 4
      },
      {
        "prompt": "Which choice produces standard English? \"If you heat ice, it ___.\"",
        "options": [
          "would melt",
          "melted",
          "melts",
          "will melt"
        ],
        "correctIndex": 2,
        "explanation": "This is a zero conditional showing a general truth.",
        "tag": "Standard form",
        "difficulty": "Review Challenge",
        "sequence": 5
      },
      {
        "prompt": "What is the best verb pattern here? \"If you heat ice, it ___.\"",
        "options": [
          "melted",
          "melts",
          "will melt",
          "would melt"
        ],
        "correctIndex": 1,
        "explanation": "This is a zero conditional showing a general truth.",
        "tag": "Verb pattern",
        "difficulty": "Review Challenge",
        "sequence": 6
      },
      {
        "prompt": "Which focus best matches the main learning challenge in \"Conditionals, Wishes, and Hypothetical Meaning\"?",
        "options": [
          "Identify the job each word does inside a sentence.",
          "Build complete sentences with subjects, verbs, and clear complements.",
          "Use a, an, the, some, and zero article correctly.",
          "Express real possibilities, imagined situations, and regrets."
        ],
        "correctIndex": 3,
        "explanation": "The focus of this lesson is: Express real possibilities, imagined situations, and regrets.",
        "tag": "Advanced focus",
        "difficulty": "Review Challenge",
        "sequence": 7
      },
      {
        "prompt": "Which rule belongs most directly to \"Conditionals, Wishes, and Hypothetical Meaning\"?",
        "options": [
          "Adjectives describe nouns; adverbs usually modify verbs, adjectives, or other adverbs.",
          "Determiners such as the, a, this, and many signal which noun you mean.",
          "Use present plus present for general truths in the zero conditional.",
          "A noun names a person, place, thing, or idea, while a verb shows action or state."
        ],
        "correctIndex": 2,
        "explanation": "Use present plus present for general truths in the zero conditional.",
        "tag": "Rule distinction",
        "difficulty": "Review Challenge",
        "sequence": 8
      },
      {
        "prompt": "Which editing warning is most important to remember in \"Conditionals, Wishes, and Hypothetical Meaning\"?",
        "options": [
          {
            "wrong": "The news is exciting. She is exciting.",
            "right": "The news is exciting. She is excited.",
            "note": "Use the -ed adjective for the person's feeling, -ing for the thing's quality."
          },
          {
            "wrong": "If you will study hard, you will pass.",
            "right": "If you study hard, you will pass.",
            "note": "Don't use will in first conditional if-clauses (unless it means willingness)."
          },
          {
            "wrong": "I have a friendly meeting tomorrow.",
            "right": "I have a friendly meeting tomorrow.",
            "note": "Friendly is an adjective here, not an adverb, so no -ly suffix needed."
          },
          {
            "wrong": "He ran quick to the store.",
            "right": "He ran quickly to the store.",
            "note": "Adverbs modify verbs; use quickly, not quick."
          }
        ],
        "correctIndex": 1,
        "explanation": {
          "wrong": "If you will study hard, you will pass.",
          "right": "If you study hard, you will pass.",
          "note": "Don't use will in first conditional if-clauses (unless it means willingness)."
        },
        "tag": "Pitfall check",
        "difficulty": "Review Challenge",
        "sequence": 9
      },
      {
        "prompt": "Which practice move best extends the lesson after you finish the core explanation?",
        "options": [
          "Exercise 1 - Classification: Identify each sentence as zero, first, second, or third conditional and explain why.",
          "Exercise 1 - Labeling: Read a paragraph and mark each word with its part of speech (noun, verb, adj, adv, etc.)",
          "Exercise 2 - Identification: Identify the target word class in each sentence: 'Find the adverb that modifies ran.'",
          "Exercise 3 - Word Transformation: Transform words to different classes (run→runner→running; quick→quickly)"
        ],
        "correctIndex": 0,
        "explanation": "Exercise 1 - Classification: Identify each sentence as zero, first, second, or third conditional and explain why.",
        "tag": "Practice transfer",
        "difficulty": "Review Challenge",
        "sequence": 10
      },
      {
        "prompt": "Which explanation best matches this model sentence from \"Conditionals, Wishes, and Hypothetical Meaning\"? \"If you heat ice, it melts.\"",
        "options": [
          "student (noun), curious (adjective), quickly (adverb), opened (verb)",
          "She (pronoun), carefully (adverb), explained (verb), importance (noun)",
          "Although (conjunction), raining (verb form), we (pronoun), near (preposition), mountain (noun)",
          "Zero conditional: a general fact or always-true situation."
        ],
        "correctIndex": 3,
        "explanation": "Zero conditional: a general fact or always-true situation.",
        "tag": "Example analysis",
        "difficulty": "Review Challenge",
        "sequence": 11
      },
      {
        "prompt": "Which objective belongs to \"Conditionals, Wishes, and Hypothetical Meaning\"?",
        "options": [
          "Separate form from function when a word changes category by use.",
          "Explain why the same word can behave differently across contexts.",
          "Match each conditional form to its meaning.",
          "Recognize the major word classes in authentic sentences."
        ],
        "correctIndex": 2,
        "explanation": "Match each conditional form to its meaning.",
        "tag": "Objective check",
        "difficulty": "Review Challenge",
        "sequence": 12
      },
      {
        "prompt": "Which portfolio task best fits the module that contains \"Conditionals, Wishes, and Hypothetical Meaning\"?",
        "options": [
          "Edit an old paragraph only for sentence-level accuracy and annotate each correction.",
          "Write a multi-paragraph response using at least one relative clause, one conditional, one reported statement, and one verb-pattern contrast.",
          "Write a 150-word self-introduction and label nouns, verbs, articles, and sentence types.",
          "Write a three-part narrative using present, past, and future meaning accurately."
        ],
        "correctIndex": 1,
        "explanation": "Write a multi-paragraph response using at least one relative clause, one conditional, one reported statement, and one verb-pattern contrast.",
        "tag": "Portfolio transfer",
        "difficulty": "Review Challenge",
        "sequence": 13
      },
      {
        "prompt": "Which module description best fits the context of \"Conditionals, Wishes, and Hypothetical Meaning\"?",
        "options": [
          "Use clauses, relative structures, conditionals, reported speech, and verb patterns to communicate more complex relationships.",
          "Build a clean base in word classes, sentence architecture, and noun phrases before moving into more advanced control.",
          "Learn how English grammar maps routine, action-in-progress, experience, finished time, future reference, and modal meaning.",
          "Strengthen agreement, pronoun reference, auxiliary use, pattern control, and active-passive choices."
        ],
        "correctIndex": 0,
        "explanation": "Use clauses, relative structures, conditionals, reported speech, and verb patterns to communicate more complex relationships.",
        "tag": "Module alignment",
        "difficulty": "Review Challenge",
        "sequence": 14
      },
      {
        "prompt": "Which reading insight best matches the story work in \"Conditionals, Wishes, and Hypothetical Meaning\"?",
        "options": [
          "Market (noun), Saturday (noun), Maya (noun) are the main subjects and objects.",
          "Visits, walks, looking, shows, answer, select, stands are action verbs showing what people do.",
          "Busy, colorful, fresh, ripe describe nouns (busy market, colorful stalls).",
          "Third conditionals (would have + had) show regret: things that didn't happen but could have."
        ],
        "correctIndex": 3,
        "explanation": "Third conditionals (would have + had) show regret: things that didn't happen but could have.",
        "tag": "Story analysis",
        "difficulty": "Review Challenge",
        "sequence": 15
      },
      {
        "prompt": "Which answer follows the lesson rule in \"If you heat ice, it ___.\"",
        "options": [
          "melted",
          "melts",
          "will melt",
          "would melt"
        ],
        "correctIndex": 1,
        "explanation": "This is a zero conditional showing a general truth.",
        "tag": "Rule",
        "difficulty": "Review Challenge",
        "sequence": 16
      },
      {
        "prompt": "A learner hesitates over \"If you heat ice, it ___.\". Which answer is right?",
        "options": [
          "melts",
          "will melt",
          "would melt",
          "melted"
        ],
        "correctIndex": 0,
        "explanation": "This is a zero conditional showing a general truth.",
        "tag": "Learner check",
        "difficulty": "Review Challenge",
        "sequence": 17
      },
      {
        "prompt": "Which explanation is best?",
        "options": [
          "This is a zero conditional showing a general truth.",
          "All if-clauses should use will.",
          "Wish uses future forms for unreal present meaning.",
          "Third conditionals describe guaranteed future events."
        ],
        "correctIndex": 0,
        "explanation": "This is a zero conditional showing a general truth.",
        "tag": "Explanation",
        "difficulty": "Review Challenge",
        "sequence": 18
      },
      {
        "prompt": "Choose the grammatical answer for \"If you heat ice, it ___.\"",
        "options": [
          "will melt",
          "would melt",
          "melted",
          "melts"
        ],
        "correctIndex": 3,
        "explanation": "This is a zero conditional showing a general truth.",
        "tag": "Selection",
        "difficulty": "Review Challenge",
        "sequence": 19
      },
      {
        "prompt": "Choose the best completion: \"If she studies tonight, she ___ more confident tomorrow.\"",
        "options": [
          "feels",
          "would feel",
          "felt",
          "will feel"
        ],
        "correctIndex": 3,
        "explanation": "The first conditional uses present in the if-clause and will in the result clause.",
        "tag": "Conditional form",
        "difficulty": "Review Challenge",
        "sequence": 20
      }
    ]
  },
  "reported-speech": {
    "standard": [
      {
        "prompt": "Choose the best reported version of \"I am tired.\"",
        "options": [
          "She said that she was tired.",
          "She said that she is tired yesterday.",
          "She told that she was tired.",
          "She asked that she was tired."
        ],
        "correctIndex": 0,
        "explanation": "Backshift and pronoun change are both needed.",
        "tag": "Reported speech",
        "difficulty": "Basic",
        "sequence": 1
      },
      {
        "prompt": "Which answer correctly reports this message: \"I am tired.\"",
        "options": [
          "She said that she is tired yesterday.",
          "She told that she was tired.",
          "She asked that she was tired.",
          "She said that she was tired."
        ],
        "correctIndex": 3,
        "explanation": "Backshift and pronoun change are both needed.",
        "tag": "Reporting",
        "difficulty": "Basic",
        "sequence": 2
      },
      {
        "prompt": "Select the standard reported form for \"I am tired.\"",
        "options": [
          "She told that she was tired.",
          "She asked that she was tired.",
          "She said that she was tired.",
          "She said that she is tired yesterday."
        ],
        "correctIndex": 2,
        "explanation": "Backshift and pronoun change are both needed.",
        "tag": "Standard form",
        "difficulty": "Basic",
        "sequence": 3
      },
      {
        "prompt": "A student tries to report \"I am tired.\". Which version is right?",
        "options": [
          "She asked that she was tired.",
          "She said that she was tired.",
          "She said that she is tired yesterday.",
          "She told that she was tired."
        ],
        "correctIndex": 1,
        "explanation": "Backshift and pronoun change are both needed.",
        "tag": "Learner check",
        "difficulty": "Basic",
        "sequence": 4
      },
      {
        "prompt": "Which option uses the reporting verb pattern correctly? \"I am tired.\"",
        "options": [
          "She said that she was tired.",
          "She said that she is tired yesterday.",
          "She told that she was tired.",
          "She asked that she was tired."
        ],
        "correctIndex": 0,
        "explanation": "Backshift and pronoun change are both needed.",
        "tag": "Verb pattern",
        "difficulty": "Basic",
        "sequence": 5
      },
      {
        "prompt": "Which option would you keep after editing this reported sentence task? \"I am tired.\"",
        "options": [
          "She said that she is tired yesterday.",
          "She told that she was tired.",
          "She asked that she was tired.",
          "She said that she was tired."
        ],
        "correctIndex": 3,
        "explanation": "Backshift and pronoun change are both needed.",
        "tag": "Editing",
        "difficulty": "Basic",
        "sequence": 6
      },
      {
        "prompt": "Which answer respects tense shift and word order? \"I am tired.\"",
        "options": [
          "She told that she was tired.",
          "She asked that she was tired.",
          "She said that she was tired.",
          "She said that she is tired yesterday."
        ],
        "correctIndex": 2,
        "explanation": "Backshift and pronoun change are both needed.",
        "tag": "Tense shift",
        "difficulty": "Basic",
        "sequence": 7
      },
      {
        "prompt": "Choose the best rewrite for indirect speech. \"I am tired.\"",
        "options": [
          "She asked that she was tired.",
          "She said that she was tired.",
          "She said that she is tired yesterday.",
          "She told that she was tired."
        ],
        "correctIndex": 1,
        "explanation": "Backshift and pronoun change are both needed.",
        "tag": "Indirect speech",
        "difficulty": "Basic",
        "sequence": 8
      },
      {
        "prompt": "Which explanation is correct?",
        "options": [
          "Backshift and pronoun change are both needed.",
          "Reported questions keep question word order.",
          "Suggest normally takes object plus infinitive.",
          "Tell can be used without an object in the same way as say."
        ],
        "correctIndex": 0,
        "explanation": "Backshift and pronoun change are both needed.",
        "tag": "Explanation",
        "difficulty": "Basic",
        "sequence": 9
      },
      {
        "prompt": "Which sentence is grammatical?",
        "options": [
          "She said that she is tired yesterday.",
          "She told that she was tired.",
          "She asked that she was tired.",
          "She said that she was tired."
        ],
        "correctIndex": 3,
        "explanation": "Backshift and pronoun change are both needed.",
        "tag": "Grammar",
        "difficulty": "Basic",
        "sequence": 10
      },
      {
        "prompt": "Choose the best reported version of \"Do you need help?\"",
        "options": [
          "He asked whether did I need help.",
          "He asked whether I need help?",
          "He asked where I needed help.",
          "He asked whether I needed help."
        ],
        "correctIndex": 3,
        "explanation": "Reported questions use statement word order.",
        "tag": "Reported speech",
        "difficulty": "Basic",
        "sequence": 11
      },
      {
        "prompt": "Which answer correctly reports this message: \"Do you need help?\"",
        "options": [
          "He asked whether I need help?",
          "He asked where I needed help.",
          "He asked whether I needed help.",
          "He asked whether did I need help."
        ],
        "correctIndex": 2,
        "explanation": "Reported questions use statement word order.",
        "tag": "Reporting",
        "difficulty": "Basic",
        "sequence": 12
      },
      {
        "prompt": "Select the standard reported form for \"Do you need help?\"",
        "options": [
          "He asked where I needed help.",
          "He asked whether I needed help.",
          "He asked whether did I need help.",
          "He asked whether I need help?"
        ],
        "correctIndex": 1,
        "explanation": "Reported questions use statement word order.",
        "tag": "Standard form",
        "difficulty": "Basic",
        "sequence": 13
      },
      {
        "prompt": "A student tries to report \"Do you need help?\". Which version is right?",
        "options": [
          "He asked whether I needed help.",
          "He asked whether did I need help.",
          "He asked whether I need help?",
          "He asked where I needed help."
        ],
        "correctIndex": 0,
        "explanation": "Reported questions use statement word order.",
        "tag": "Learner check",
        "difficulty": "Basic",
        "sequence": 14
      },
      {
        "prompt": "Which option uses the reporting verb pattern correctly? \"Do you need help?\"",
        "options": [
          "He asked whether did I need help.",
          "He asked whether I need help?",
          "He asked where I needed help.",
          "He asked whether I needed help."
        ],
        "correctIndex": 3,
        "explanation": "Reported questions use statement word order.",
        "tag": "Verb pattern",
        "difficulty": "Basic",
        "sequence": 15
      },
      {
        "prompt": "Which option would you keep after editing this reported sentence task? \"Do you need help?\"",
        "options": [
          "He asked whether I need help?",
          "He asked where I needed help.",
          "He asked whether I needed help.",
          "He asked whether did I need help."
        ],
        "correctIndex": 2,
        "explanation": "Reported questions use statement word order.",
        "tag": "Editing",
        "difficulty": "Basic",
        "sequence": 16
      },
      {
        "prompt": "Which answer respects tense shift and word order? \"Do you need help?\"",
        "options": [
          "He asked where I needed help.",
          "He asked whether I needed help.",
          "He asked whether did I need help.",
          "He asked whether I need help?"
        ],
        "correctIndex": 1,
        "explanation": "Reported questions use statement word order.",
        "tag": "Tense shift",
        "difficulty": "Basic",
        "sequence": 17
      },
      {
        "prompt": "Choose the best rewrite for indirect speech. \"Do you need help?\"",
        "options": [
          "He asked whether I needed help.",
          "He asked whether did I need help.",
          "He asked whether I need help?",
          "He asked where I needed help."
        ],
        "correctIndex": 0,
        "explanation": "Reported questions use statement word order.",
        "tag": "Indirect speech",
        "difficulty": "Basic",
        "sequence": 18
      },
      {
        "prompt": "Which explanation is correct?",
        "options": [
          "Reported questions keep question word order.",
          "Suggest normally takes object plus infinitive.",
          "Tell can be used without an object in the same way as say.",
          "Reported questions use statement word order."
        ],
        "correctIndex": 3,
        "explanation": "Reported questions use statement word order.",
        "tag": "Explanation",
        "difficulty": "Basic",
        "sequence": 19
      },
      {
        "prompt": "Which sentence is grammatical?",
        "options": [
          "He asked whether I need help?",
          "He asked where I needed help.",
          "He asked whether I needed help.",
          "He asked whether did I need help."
        ],
        "correctIndex": 2,
        "explanation": "Reported questions use statement word order.",
        "tag": "Grammar",
        "difficulty": "Basic",
        "sequence": 20
      },
      {
        "prompt": "Choose the best reported version of \"We will finish tomorrow.\"",
        "options": [
          "They told that they would finish the next day.",
          "They said that would they finish the next day.",
          "They said that they would finish the next day.",
          "They said that they will finish tomorrow."
        ],
        "correctIndex": 2,
        "explanation": "Will shifts to would, and tomorrow often shifts to the next day.",
        "tag": "Reported speech",
        "difficulty": "Intermediate",
        "sequence": 21
      },
      {
        "prompt": "Which answer correctly reports this message: \"We will finish tomorrow.\"",
        "options": [
          "They said that would they finish the next day.",
          "They said that they would finish the next day.",
          "They said that they will finish tomorrow.",
          "They told that they would finish the next day."
        ],
        "correctIndex": 1,
        "explanation": "Will shifts to would, and tomorrow often shifts to the next day.",
        "tag": "Reporting",
        "difficulty": "Intermediate",
        "sequence": 22
      },
      {
        "prompt": "Select the standard reported form for \"We will finish tomorrow.\"",
        "options": [
          "They said that they would finish the next day.",
          "They said that they will finish tomorrow.",
          "They told that they would finish the next day.",
          "They said that would they finish the next day."
        ],
        "correctIndex": 0,
        "explanation": "Will shifts to would, and tomorrow often shifts to the next day.",
        "tag": "Standard form",
        "difficulty": "Intermediate",
        "sequence": 23
      },
      {
        "prompt": "A student tries to report \"We will finish tomorrow.\". Which version is right?",
        "options": [
          "They said that they will finish tomorrow.",
          "They told that they would finish the next day.",
          "They said that would they finish the next day.",
          "They said that they would finish the next day."
        ],
        "correctIndex": 3,
        "explanation": "Will shifts to would, and tomorrow often shifts to the next day.",
        "tag": "Learner check",
        "difficulty": "Intermediate",
        "sequence": 24
      },
      {
        "prompt": "Which option uses the reporting verb pattern correctly? \"We will finish tomorrow.\"",
        "options": [
          "They told that they would finish the next day.",
          "They said that would they finish the next day.",
          "They said that they would finish the next day.",
          "They said that they will finish tomorrow."
        ],
        "correctIndex": 2,
        "explanation": "Will shifts to would, and tomorrow often shifts to the next day.",
        "tag": "Verb pattern",
        "difficulty": "Intermediate",
        "sequence": 25
      },
      {
        "prompt": "Which option would you keep after editing this reported sentence task? \"We will finish tomorrow.\"",
        "options": [
          "They said that would they finish the next day.",
          "They said that they would finish the next day.",
          "They said that they will finish tomorrow.",
          "They told that they would finish the next day."
        ],
        "correctIndex": 1,
        "explanation": "Will shifts to would, and tomorrow often shifts to the next day.",
        "tag": "Editing",
        "difficulty": "Intermediate",
        "sequence": 26
      },
      {
        "prompt": "Which answer respects tense shift and word order? \"We will finish tomorrow.\"",
        "options": [
          "They said that they would finish the next day.",
          "They said that they will finish tomorrow.",
          "They told that they would finish the next day.",
          "They said that would they finish the next day."
        ],
        "correctIndex": 0,
        "explanation": "Will shifts to would, and tomorrow often shifts to the next day.",
        "tag": "Tense shift",
        "difficulty": "Intermediate",
        "sequence": 27
      },
      {
        "prompt": "Choose the best rewrite for indirect speech. \"We will finish tomorrow.\"",
        "options": [
          "They said that they will finish tomorrow.",
          "They told that they would finish the next day.",
          "They said that would they finish the next day.",
          "They said that they would finish the next day."
        ],
        "correctIndex": 3,
        "explanation": "Will shifts to would, and tomorrow often shifts to the next day.",
        "tag": "Indirect speech",
        "difficulty": "Intermediate",
        "sequence": 28
      },
      {
        "prompt": "Which explanation is correct?",
        "options": [
          "Suggest normally takes object plus infinitive.",
          "Tell can be used without an object in the same way as say.",
          "Will shifts to would, and tomorrow often shifts to the next day.",
          "Reported questions keep question word order."
        ],
        "correctIndex": 2,
        "explanation": "Will shifts to would, and tomorrow often shifts to the next day.",
        "tag": "Explanation",
        "difficulty": "Intermediate",
        "sequence": 29
      },
      {
        "prompt": "Which sentence is grammatical?",
        "options": [
          "They said that would they finish the next day.",
          "They said that they would finish the next day.",
          "They said that they will finish tomorrow.",
          "They told that they would finish the next day."
        ],
        "correctIndex": 1,
        "explanation": "Will shifts to would, and tomorrow often shifts to the next day.",
        "tag": "Grammar",
        "difficulty": "Intermediate",
        "sequence": 30
      },
      {
        "prompt": "Choose the best reported version of \"Please sit down.\"",
        "options": [
          "The teacher told us sit down.",
          "The teacher told us to sit down.",
          "The teacher said us to sit down.",
          "The teacher asked us sit down."
        ],
        "correctIndex": 1,
        "explanation": "Tell plus object plus infinitive works well for commands.",
        "tag": "Reported speech",
        "difficulty": "Intermediate",
        "sequence": 31
      },
      {
        "prompt": "Which answer correctly reports this message: \"Please sit down.\"",
        "options": [
          "The teacher told us to sit down.",
          "The teacher said us to sit down.",
          "The teacher asked us sit down.",
          "The teacher told us sit down."
        ],
        "correctIndex": 0,
        "explanation": "Tell plus object plus infinitive works well for commands.",
        "tag": "Reporting",
        "difficulty": "Intermediate",
        "sequence": 32
      },
      {
        "prompt": "Select the standard reported form for \"Please sit down.\"",
        "options": [
          "The teacher said us to sit down.",
          "The teacher asked us sit down.",
          "The teacher told us sit down.",
          "The teacher told us to sit down."
        ],
        "correctIndex": 3,
        "explanation": "Tell plus object plus infinitive works well for commands.",
        "tag": "Standard form",
        "difficulty": "Intermediate",
        "sequence": 33
      },
      {
        "prompt": "A student tries to report \"Please sit down.\". Which version is right?",
        "options": [
          "The teacher asked us sit down.",
          "The teacher told us sit down.",
          "The teacher told us to sit down.",
          "The teacher said us to sit down."
        ],
        "correctIndex": 2,
        "explanation": "Tell plus object plus infinitive works well for commands.",
        "tag": "Learner check",
        "difficulty": "Intermediate",
        "sequence": 34
      },
      {
        "prompt": "Which option uses the reporting verb pattern correctly? \"Please sit down.\"",
        "options": [
          "The teacher told us sit down.",
          "The teacher told us to sit down.",
          "The teacher said us to sit down.",
          "The teacher asked us sit down."
        ],
        "correctIndex": 1,
        "explanation": "Tell plus object plus infinitive works well for commands.",
        "tag": "Verb pattern",
        "difficulty": "Intermediate",
        "sequence": 35
      },
      {
        "prompt": "Which option would you keep after editing this reported sentence task? \"Please sit down.\"",
        "options": [
          "The teacher told us to sit down.",
          "The teacher said us to sit down.",
          "The teacher asked us sit down.",
          "The teacher told us sit down."
        ],
        "correctIndex": 0,
        "explanation": "Tell plus object plus infinitive works well for commands.",
        "tag": "Editing",
        "difficulty": "Intermediate",
        "sequence": 36
      },
      {
        "prompt": "Which answer respects tense shift and word order? \"Please sit down.\"",
        "options": [
          "The teacher said us to sit down.",
          "The teacher asked us sit down.",
          "The teacher told us sit down.",
          "The teacher told us to sit down."
        ],
        "correctIndex": 3,
        "explanation": "Tell plus object plus infinitive works well for commands.",
        "tag": "Tense shift",
        "difficulty": "Intermediate",
        "sequence": 37
      },
      {
        "prompt": "Choose the best rewrite for indirect speech. \"Please sit down.\"",
        "options": [
          "The teacher asked us sit down.",
          "The teacher told us sit down.",
          "The teacher told us to sit down.",
          "The teacher said us to sit down."
        ],
        "correctIndex": 2,
        "explanation": "Tell plus object plus infinitive works well for commands.",
        "tag": "Indirect speech",
        "difficulty": "Intermediate",
        "sequence": 38
      },
      {
        "prompt": "Which explanation is correct?",
        "options": [
          "Tell can be used without an object in the same way as say.",
          "Tell plus object plus infinitive works well for commands.",
          "Reported questions keep question word order.",
          "Suggest normally takes object plus infinitive."
        ],
        "correctIndex": 1,
        "explanation": "Tell plus object plus infinitive works well for commands.",
        "tag": "Explanation",
        "difficulty": "Intermediate",
        "sequence": 39
      },
      {
        "prompt": "Which sentence is grammatical?",
        "options": [
          "The teacher told us to sit down.",
          "The teacher said us to sit down.",
          "The teacher asked us sit down.",
          "The teacher told us sit down."
        ],
        "correctIndex": 0,
        "explanation": "Tell plus object plus infinitive works well for commands.",
        "tag": "Grammar",
        "difficulty": "Intermediate",
        "sequence": 40
      },
      {
        "prompt": "Choose the best reported version of \"Let's review the introduction.\"",
        "options": [
          "She suggested reviewing the introduction.",
          "She suggested me to review the introduction.",
          "She told reviewing the introduction.",
          "She suggested that review the introduction."
        ],
        "correctIndex": 0,
        "explanation": "Suggest is not followed by object plus infinitive.",
        "tag": "Reported speech",
        "difficulty": "Advanced",
        "sequence": 41
      },
      {
        "prompt": "Which answer correctly reports this message: \"Let's review the introduction.\"",
        "options": [
          "She suggested me to review the introduction.",
          "She told reviewing the introduction.",
          "She suggested that review the introduction.",
          "She suggested reviewing the introduction."
        ],
        "correctIndex": 3,
        "explanation": "Suggest is not followed by object plus infinitive.",
        "tag": "Reporting",
        "difficulty": "Advanced",
        "sequence": 42
      },
      {
        "prompt": "Select the standard reported form for \"Let's review the introduction.\"",
        "options": [
          "She told reviewing the introduction.",
          "She suggested that review the introduction.",
          "She suggested reviewing the introduction.",
          "She suggested me to review the introduction."
        ],
        "correctIndex": 2,
        "explanation": "Suggest is not followed by object plus infinitive.",
        "tag": "Standard form",
        "difficulty": "Advanced",
        "sequence": 43
      },
      {
        "prompt": "A student tries to report \"Let's review the introduction.\". Which version is right?",
        "options": [
          "She suggested that review the introduction.",
          "She suggested reviewing the introduction.",
          "She suggested me to review the introduction.",
          "She told reviewing the introduction."
        ],
        "correctIndex": 1,
        "explanation": "Suggest is not followed by object plus infinitive.",
        "tag": "Learner check",
        "difficulty": "Advanced",
        "sequence": 44
      },
      {
        "prompt": "Which option uses the reporting verb pattern correctly? \"Let's review the introduction.\"",
        "options": [
          "She suggested reviewing the introduction.",
          "She suggested me to review the introduction.",
          "She told reviewing the introduction.",
          "She suggested that review the introduction."
        ],
        "correctIndex": 0,
        "explanation": "Suggest is not followed by object plus infinitive.",
        "tag": "Verb pattern",
        "difficulty": "Advanced",
        "sequence": 45
      },
      {
        "prompt": "Which option would you keep after editing this reported sentence task? \"Let's review the introduction.\"",
        "options": [
          "She suggested me to review the introduction.",
          "She told reviewing the introduction.",
          "She suggested that review the introduction.",
          "She suggested reviewing the introduction."
        ],
        "correctIndex": 3,
        "explanation": "Suggest is not followed by object plus infinitive.",
        "tag": "Editing",
        "difficulty": "Advanced",
        "sequence": 46
      },
      {
        "prompt": "Which answer respects tense shift and word order? \"Let's review the introduction.\"",
        "options": [
          "She told reviewing the introduction.",
          "She suggested that review the introduction.",
          "She suggested reviewing the introduction.",
          "She suggested me to review the introduction."
        ],
        "correctIndex": 2,
        "explanation": "Suggest is not followed by object plus infinitive.",
        "tag": "Tense shift",
        "difficulty": "Advanced",
        "sequence": 47
      },
      {
        "prompt": "Choose the best rewrite for indirect speech. \"Let's review the introduction.\"",
        "options": [
          "She suggested that review the introduction.",
          "She suggested reviewing the introduction.",
          "She suggested me to review the introduction.",
          "She told reviewing the introduction."
        ],
        "correctIndex": 1,
        "explanation": "Suggest is not followed by object plus infinitive.",
        "tag": "Indirect speech",
        "difficulty": "Advanced",
        "sequence": 48
      },
      {
        "prompt": "Which explanation is correct?",
        "options": [
          "Suggest is not followed by object plus infinitive.",
          "Reported questions keep question word order.",
          "Suggest normally takes object plus infinitive.",
          "Tell can be used without an object in the same way as say."
        ],
        "correctIndex": 0,
        "explanation": "Suggest is not followed by object plus infinitive.",
        "tag": "Explanation",
        "difficulty": "Advanced",
        "sequence": 49
      },
      {
        "prompt": "Which sentence is grammatical?",
        "options": [
          "She suggested me to review the introduction.",
          "She told reviewing the introduction.",
          "She suggested that review the introduction.",
          "She suggested reviewing the introduction."
        ],
        "correctIndex": 3,
        "explanation": "Suggest is not followed by object plus infinitive.",
        "tag": "Grammar",
        "difficulty": "Advanced",
        "sequence": 50
      },
      {
        "prompt": "Choose the best reported version of \"Where is the station?\"",
        "options": [
          "He asked where was the station.",
          "He asked where is the station.",
          "He said where the station was?",
          "He asked where the station was."
        ],
        "correctIndex": 3,
        "explanation": "Reported questions keep statement order.",
        "tag": "Reported speech",
        "difficulty": "Advanced",
        "sequence": 51
      },
      {
        "prompt": "Which answer correctly reports this message: \"Where is the station?\"",
        "options": [
          "He asked where is the station.",
          "He said where the station was?",
          "He asked where the station was.",
          "He asked where was the station."
        ],
        "correctIndex": 2,
        "explanation": "Reported questions keep statement order.",
        "tag": "Reporting",
        "difficulty": "Advanced",
        "sequence": 52
      },
      {
        "prompt": "Select the standard reported form for \"Where is the station?\"",
        "options": [
          "He said where the station was?",
          "He asked where the station was.",
          "He asked where was the station.",
          "He asked where is the station."
        ],
        "correctIndex": 1,
        "explanation": "Reported questions keep statement order.",
        "tag": "Standard form",
        "difficulty": "Advanced",
        "sequence": 53
      },
      {
        "prompt": "A student tries to report \"Where is the station?\". Which version is right?",
        "options": [
          "He asked where the station was.",
          "He asked where was the station.",
          "He asked where is the station.",
          "He said where the station was?"
        ],
        "correctIndex": 0,
        "explanation": "Reported questions keep statement order.",
        "tag": "Learner check",
        "difficulty": "Advanced",
        "sequence": 54
      },
      {
        "prompt": "Which option uses the reporting verb pattern correctly? \"Where is the station?\"",
        "options": [
          "He asked where was the station.",
          "He asked where is the station.",
          "He said where the station was?",
          "He asked where the station was."
        ],
        "correctIndex": 3,
        "explanation": "Reported questions keep statement order.",
        "tag": "Verb pattern",
        "difficulty": "Advanced",
        "sequence": 55
      },
      {
        "prompt": "Which option would you keep after editing this reported sentence task? \"Where is the station?\"",
        "options": [
          "He asked where is the station.",
          "He said where the station was?",
          "He asked where the station was.",
          "He asked where was the station."
        ],
        "correctIndex": 2,
        "explanation": "Reported questions keep statement order.",
        "tag": "Editing",
        "difficulty": "Advanced",
        "sequence": 56
      },
      {
        "prompt": "Which answer respects tense shift and word order? \"Where is the station?\"",
        "options": [
          "He said where the station was?",
          "He asked where the station was.",
          "He asked where was the station.",
          "He asked where is the station."
        ],
        "correctIndex": 1,
        "explanation": "Reported questions keep statement order.",
        "tag": "Tense shift",
        "difficulty": "Advanced",
        "sequence": 57
      },
      {
        "prompt": "Choose the best rewrite for indirect speech. \"Where is the station?\"",
        "options": [
          "He asked where the station was.",
          "He asked where was the station.",
          "He asked where is the station.",
          "He said where the station was?"
        ],
        "correctIndex": 0,
        "explanation": "Reported questions keep statement order.",
        "tag": "Indirect speech",
        "difficulty": "Advanced",
        "sequence": 58
      },
      {
        "prompt": "Which explanation is correct?",
        "options": [
          "Reported questions keep question word order.",
          "Suggest normally takes object plus infinitive.",
          "Tell can be used without an object in the same way as say.",
          "Reported questions keep statement order."
        ],
        "correctIndex": 3,
        "explanation": "Reported questions keep statement order.",
        "tag": "Explanation",
        "difficulty": "Advanced",
        "sequence": 59
      },
      {
        "prompt": "Which sentence is grammatical?",
        "options": [
          "He asked where is the station.",
          "He said where the station was?",
          "He asked where the station was.",
          "He asked where was the station."
        ],
        "correctIndex": 2,
        "explanation": "Reported questions keep statement order.",
        "tag": "Grammar",
        "difficulty": "Advanced",
        "sequence": 60
      }
    ],
    "advanced": [
      {
        "prompt": "Choose the best reported version of \"I am tired.\"",
        "options": [
          "She said that she was tired.",
          "She said that she is tired yesterday.",
          "She told that she was tired.",
          "She asked that she was tired."
        ],
        "correctIndex": 0,
        "explanation": "Backshift and pronoun change are both needed.",
        "tag": "Reported speech",
        "difficulty": "Review Challenge",
        "sequence": 1
      },
      {
        "prompt": "Which answer correctly reports this message: \"I am tired.\"",
        "options": [
          "She said that she is tired yesterday.",
          "She told that she was tired.",
          "She asked that she was tired.",
          "She said that she was tired."
        ],
        "correctIndex": 3,
        "explanation": "Backshift and pronoun change are both needed.",
        "tag": "Reporting",
        "difficulty": "Review Challenge",
        "sequence": 2
      },
      {
        "prompt": "Select the standard reported form for \"I am tired.\"",
        "options": [
          "She told that she was tired.",
          "She asked that she was tired.",
          "She said that she was tired.",
          "She said that she is tired yesterday."
        ],
        "correctIndex": 2,
        "explanation": "Backshift and pronoun change are both needed.",
        "tag": "Standard form",
        "difficulty": "Review Challenge",
        "sequence": 3
      },
      {
        "prompt": "Which option uses the reporting verb pattern correctly? \"I am tired.\"",
        "options": [
          "She said that she was tired.",
          "She said that she is tired yesterday.",
          "She told that she was tired.",
          "She asked that she was tired."
        ],
        "correctIndex": 0,
        "explanation": "Backshift and pronoun change are both needed.",
        "tag": "Verb pattern",
        "difficulty": "Review Challenge",
        "sequence": 4
      },
      {
        "prompt": "Which option would you keep after editing this reported sentence task? \"I am tired.\"",
        "options": [
          "She said that she is tired yesterday.",
          "She told that she was tired.",
          "She asked that she was tired.",
          "She said that she was tired."
        ],
        "correctIndex": 3,
        "explanation": "Backshift and pronoun change are both needed.",
        "tag": "Editing",
        "difficulty": "Review Challenge",
        "sequence": 5
      },
      {
        "prompt": "Choose the best rewrite for indirect speech. \"I am tired.\"",
        "options": [
          "She asked that she was tired.",
          "She said that she was tired.",
          "She said that she is tired yesterday.",
          "She told that she was tired."
        ],
        "correctIndex": 1,
        "explanation": "Backshift and pronoun change are both needed.",
        "tag": "Indirect speech",
        "difficulty": "Review Challenge",
        "sequence": 6
      },
      {
        "prompt": "Which focus best matches the main learning challenge in \"Reported Speech and Reporting Verbs\"?",
        "options": [
          "Identify the job each word does inside a sentence.",
          "Build complete sentences with subjects, verbs, and clear complements.",
          "Use a, an, the, some, and zero article correctly.",
          "Report statements, questions, and requests accurately."
        ],
        "correctIndex": 3,
        "explanation": "The focus of this lesson is: Report statements, questions, and requests accurately.",
        "tag": "Advanced focus",
        "difficulty": "Review Challenge",
        "sequence": 7
      },
      {
        "prompt": "Which rule belongs most directly to \"Reported Speech and Reporting Verbs\"?",
        "options": [
          "Adjectives describe nouns; adverbs usually modify verbs, adjectives, or other adverbs.",
          "Determiners such as the, a, this, and many signal which noun you mean.",
          "Backshift tense when the reporting context is past and the information is not still current.",
          "A noun names a person, place, thing, or idea, while a verb shows action or state."
        ],
        "correctIndex": 2,
        "explanation": "Backshift tense when the reporting context is past and the information is not still current.",
        "tag": "Rule distinction",
        "difficulty": "Review Challenge",
        "sequence": 8
      },
      {
        "prompt": "Which editing warning is most important to remember in \"Reported Speech and Reporting Verbs\"?",
        "options": [
          {
            "wrong": "The news is exciting. She is exciting.",
            "right": "The news is exciting. She is excited.",
            "note": "Use the -ed adjective for the person's feeling, -ing for the thing's quality."
          },
          {
            "wrong": "He asked where was I.",
            "right": "He asked where I was.",
            "note": "Reported questions use statement word order, not question order."
          },
          {
            "wrong": "I have a friendly meeting tomorrow.",
            "right": "I have a friendly meeting tomorrow.",
            "note": "Friendly is an adjective here, not an adverb, so no -ly suffix needed."
          },
          {
            "wrong": "He ran quick to the store.",
            "right": "He ran quickly to the store.",
            "note": "Adverbs modify verbs; use quickly, not quick."
          }
        ],
        "correctIndex": 1,
        "explanation": {
          "wrong": "He asked where was I.",
          "right": "He asked where I was.",
          "note": "Reported questions use statement word order, not question order."
        },
        "tag": "Pitfall check",
        "difficulty": "Review Challenge",
        "sequence": 9
      },
      {
        "prompt": "Which practice move best extends the lesson after you finish the core explanation?",
        "options": [
          "Exercise 1 - Conversion: Change ten direct statements into reported speech with proper backshift.",
          "Exercise 1 - Labeling: Read a paragraph and mark each word with its part of speech (noun, verb, adj, adv, etc.)",
          "Exercise 2 - Identification: Identify the target word class in each sentence: 'Find the adverb that modifies ran.'",
          "Exercise 3 - Word Transformation: Transform words to different classes (run→runner→running; quick→quickly)"
        ],
        "correctIndex": 0,
        "explanation": "Exercise 1 - Conversion: Change ten direct statements into reported speech with proper backshift.",
        "tag": "Practice transfer",
        "difficulty": "Review Challenge",
        "sequence": 10
      },
      {
        "prompt": "Which explanation best matches this model sentence from \"Reported Speech and Reporting Verbs\"? \"Direct: 'I am tired.' / Reported: She said that she was tired.\"",
        "options": [
          "student (noun), curious (adjective), quickly (adverb), opened (verb)",
          "She (pronoun), carefully (adverb), explained (verb), importance (noun)",
          "Although (conjunction), raining (verb form), we (pronoun), near (preposition), mountain (noun)",
          "Backshift present to past when reporting context is past."
        ],
        "correctIndex": 3,
        "explanation": "Backshift present to past when reporting context is past.",
        "tag": "Example analysis",
        "difficulty": "Review Challenge",
        "sequence": 11
      },
      {
        "prompt": "Which objective belongs to \"Reported Speech and Reporting Verbs\"?",
        "options": [
          "Separate form from function when a word changes category by use.",
          "Explain why the same word can behave differently across contexts.",
          "Backshift when the reporting context moves into the past.",
          "Recognize the major word classes in authentic sentences."
        ],
        "correctIndex": 2,
        "explanation": "Backshift when the reporting context moves into the past.",
        "tag": "Objective check",
        "difficulty": "Review Challenge",
        "sequence": 12
      },
      {
        "prompt": "Which portfolio task best fits the module that contains \"Reported Speech and Reporting Verbs\"?",
        "options": [
          "Edit an old paragraph only for sentence-level accuracy and annotate each correction.",
          "Write a multi-paragraph response using at least one relative clause, one conditional, one reported statement, and one verb-pattern contrast.",
          "Write a 150-word self-introduction and label nouns, verbs, articles, and sentence types.",
          "Write a three-part narrative using present, past, and future meaning accurately."
        ],
        "correctIndex": 1,
        "explanation": "Write a multi-paragraph response using at least one relative clause, one conditional, one reported statement, and one verb-pattern contrast.",
        "tag": "Portfolio transfer",
        "difficulty": "Review Challenge",
        "sequence": 13
      },
      {
        "prompt": "Which module description best fits the context of \"Reported Speech and Reporting Verbs\"?",
        "options": [
          "Use clauses, relative structures, conditionals, reported speech, and verb patterns to communicate more complex relationships.",
          "Build a clean base in word classes, sentence architecture, and noun phrases before moving into more advanced control.",
          "Learn how English grammar maps routine, action-in-progress, experience, finished time, future reference, and modal meaning.",
          "Strengthen agreement, pronoun reference, auxiliary use, pattern control, and active-passive choices."
        ],
        "correctIndex": 0,
        "explanation": "Use clauses, relative structures, conditionals, reported speech, and verb patterns to communicate more complex relationships.",
        "tag": "Module alignment",
        "difficulty": "Review Challenge",
        "sequence": 14
      },
      {
        "prompt": "Which reading insight best matches the story work in \"Reported Speech and Reporting Verbs\"?",
        "options": [
          "Market (noun), Saturday (noun), Maya (noun) are the main subjects and objects.",
          "Visits, walks, looking, shows, answer, select, stands are action verbs showing what people do.",
          "Busy, colorful, fresh, ripe describe nouns (busy market, colorful stalls).",
          "Said + that-clause for statements; backshift happens because the reporting verb is in the past."
        ],
        "correctIndex": 3,
        "explanation": "Said + that-clause for statements; backshift happens because the reporting verb is in the past.",
        "tag": "Story analysis",
        "difficulty": "Review Challenge",
        "sequence": 15
      },
      {
        "prompt": "A student tries to report \"I am tired.\". Which version is right?",
        "options": [
          "She asked that she was tired.",
          "She said that she was tired.",
          "She said that she is tired yesterday.",
          "She told that she was tired."
        ],
        "correctIndex": 1,
        "explanation": "Backshift and pronoun change are both needed.",
        "tag": "Learner check",
        "difficulty": "Review Challenge",
        "sequence": 16
      },
      {
        "prompt": "Which answer respects tense shift and word order? \"I am tired.\"",
        "options": [
          "She told that she was tired.",
          "She asked that she was tired.",
          "She said that she was tired.",
          "She said that she is tired yesterday."
        ],
        "correctIndex": 2,
        "explanation": "Backshift and pronoun change are both needed.",
        "tag": "Tense shift",
        "difficulty": "Review Challenge",
        "sequence": 17
      },
      {
        "prompt": "Which explanation is correct?",
        "options": [
          "Backshift and pronoun change are both needed.",
          "Reported questions keep question word order.",
          "Suggest normally takes object plus infinitive.",
          "Tell can be used without an object in the same way as say."
        ],
        "correctIndex": 0,
        "explanation": "Backshift and pronoun change are both needed.",
        "tag": "Explanation",
        "difficulty": "Review Challenge",
        "sequence": 18
      },
      {
        "prompt": "Which sentence is grammatical?",
        "options": [
          "She said that she is tired yesterday.",
          "She told that she was tired.",
          "She asked that she was tired.",
          "She said that she was tired."
        ],
        "correctIndex": 3,
        "explanation": "Backshift and pronoun change are both needed.",
        "tag": "Grammar",
        "difficulty": "Review Challenge",
        "sequence": 19
      },
      {
        "prompt": "Choose the best reported version of \"Do you need help?\"",
        "options": [
          "He asked whether did I need help.",
          "He asked whether I need help?",
          "He asked where I needed help.",
          "He asked whether I needed help."
        ],
        "correctIndex": 3,
        "explanation": "Reported questions use statement word order.",
        "tag": "Reported speech",
        "difficulty": "Review Challenge",
        "sequence": 20
      }
    ]
  },
  "punctuation-clarity": {
    "standard": [
      {
        "prompt": "Choose the best punctuated version of this sentence: \"The lesson was difficult, we asked extra questions.\"",
        "options": [
          "The lesson was difficult, so we asked extra questions.",
          "The lesson was difficult we asked extra questions.",
          "The lesson was difficult; because we asked extra questions.",
          "The lesson was difficult, because we asked extra questions."
        ],
        "correctIndex": 0,
        "explanation": "The original is a comma splice and needs a better link.",
        "tag": "Punctuation",
        "difficulty": "Basic",
        "sequence": 1
      },
      {
        "prompt": "Which sentence is punctuated correctly?",
        "options": [
          "The lesson was difficult we asked extra questions.",
          "The lesson was difficult; because we asked extra questions.",
          "The lesson was difficult, because we asked extra questions.",
          "The lesson was difficult, so we asked extra questions."
        ],
        "correctIndex": 3,
        "explanation": "The original is a comma splice and needs a better link.",
        "tag": "Correct sentence",
        "difficulty": "Basic",
        "sequence": 2
      },
      {
        "prompt": "A writer needs to revise \"The lesson was difficult, we asked extra questions.\". Which option is best?",
        "options": [
          "The lesson was difficult; because we asked extra questions.",
          "The lesson was difficult, because we asked extra questions.",
          "The lesson was difficult, so we asked extra questions.",
          "The lesson was difficult we asked extra questions."
        ],
        "correctIndex": 2,
        "explanation": "The original is a comma splice and needs a better link.",
        "tag": "Revision",
        "difficulty": "Basic",
        "sequence": 3
      },
      {
        "prompt": "Which option would you keep after punctuation editing?",
        "options": [
          "The lesson was difficult, because we asked extra questions.",
          "The lesson was difficult, so we asked extra questions.",
          "The lesson was difficult we asked extra questions.",
          "The lesson was difficult; because we asked extra questions."
        ],
        "correctIndex": 1,
        "explanation": "The original is a comma splice and needs a better link.",
        "tag": "Editing",
        "difficulty": "Basic",
        "sequence": 4
      },
      {
        "prompt": "Which answer respects clause boundaries and possession?",
        "options": [
          "The lesson was difficult, so we asked extra questions.",
          "The lesson was difficult we asked extra questions.",
          "The lesson was difficult; because we asked extra questions.",
          "The lesson was difficult, because we asked extra questions."
        ],
        "correctIndex": 0,
        "explanation": "The original is a comma splice and needs a better link.",
        "tag": "Clause boundaries",
        "difficulty": "Basic",
        "sequence": 5
      },
      {
        "prompt": "Select the standard written English version of \"The lesson was difficult, we asked extra questions.\"",
        "options": [
          "The lesson was difficult we asked extra questions.",
          "The lesson was difficult; because we asked extra questions.",
          "The lesson was difficult, because we asked extra questions.",
          "The lesson was difficult, so we asked extra questions."
        ],
        "correctIndex": 3,
        "explanation": "The original is a comma splice and needs a better link.",
        "tag": "Standard form",
        "difficulty": "Basic",
        "sequence": 6
      },
      {
        "prompt": "Which lesson rule applies best here?",
        "options": [
          "Semicolons can join clauses to fragments.",
          "Nonrestrictive clauses never need commas.",
          "The original is a comma splice and needs a better link.",
          "Apostrophes form all plurals."
        ],
        "correctIndex": 2,
        "explanation": "The original is a comma splice and needs a better link.",
        "tag": "Explanation",
        "difficulty": "Basic",
        "sequence": 7
      },
      {
        "prompt": "Choose the version that avoids the original punctuation error.",
        "options": [
          "The lesson was difficult, because we asked extra questions.",
          "The lesson was difficult, so we asked extra questions.",
          "The lesson was difficult we asked extra questions.",
          "The lesson was difficult; because we asked extra questions."
        ],
        "correctIndex": 1,
        "explanation": "The original is a comma splice and needs a better link.",
        "tag": "Error check",
        "difficulty": "Basic",
        "sequence": 8
      },
      {
        "prompt": "Which answer would earn full marks in a punctuation quiz?",
        "options": [
          "The lesson was difficult, so we asked extra questions.",
          "The lesson was difficult we asked extra questions.",
          "The lesson was difficult; because we asked extra questions.",
          "The lesson was difficult, because we asked extra questions."
        ],
        "correctIndex": 0,
        "explanation": "The original is a comma splice and needs a better link.",
        "tag": "Assessment",
        "difficulty": "Basic",
        "sequence": 9
      },
      {
        "prompt": "What is the best corrected sentence?",
        "options": [
          "The lesson was difficult we asked extra questions.",
          "The lesson was difficult; because we asked extra questions.",
          "The lesson was difficult, because we asked extra questions.",
          "The lesson was difficult, so we asked extra questions."
        ],
        "correctIndex": 3,
        "explanation": "The original is a comma splice and needs a better link.",
        "tag": "Correction",
        "difficulty": "Basic",
        "sequence": 10
      },
      {
        "prompt": "Choose the best punctuated version of this sentence: \"My sisters friend is here.\"",
        "options": [
          "My sisters' friend is here.",
          "My sisters friend is here.",
          "My sisters friend is here.",
          "My sister's friend is here."
        ],
        "correctIndex": 3,
        "explanation": "Singular possession takes apostrophe plus s.",
        "tag": "Punctuation",
        "difficulty": "Basic",
        "sequence": 11
      },
      {
        "prompt": "Which sentence is punctuated correctly?",
        "options": [
          "My sisters friend is here.",
          "My sisters friend is here.",
          "My sister's friend is here.",
          "My sisters' friend is here."
        ],
        "correctIndex": 2,
        "explanation": "Singular possession takes apostrophe plus s.",
        "tag": "Correct sentence",
        "difficulty": "Basic",
        "sequence": 12
      },
      {
        "prompt": "A writer needs to revise \"My sisters friend is here.\". Which option is best?",
        "options": [
          "My sisters friend is here.",
          "My sister's friend is here.",
          "My sisters' friend is here.",
          "My sisters friend is here."
        ],
        "correctIndex": 1,
        "explanation": "Singular possession takes apostrophe plus s.",
        "tag": "Revision",
        "difficulty": "Basic",
        "sequence": 13
      },
      {
        "prompt": "Which option would you keep after punctuation editing?",
        "options": [
          "My sister's friend is here.",
          "My sisters' friend is here.",
          "My sisters friend is here.",
          "My sisters friend is here."
        ],
        "correctIndex": 0,
        "explanation": "Singular possession takes apostrophe plus s.",
        "tag": "Editing",
        "difficulty": "Basic",
        "sequence": 14
      },
      {
        "prompt": "Which answer respects clause boundaries and possession?",
        "options": [
          "My sisters' friend is here.",
          "My sisters friend is here.",
          "My sisters friend is here.",
          "My sister's friend is here."
        ],
        "correctIndex": 3,
        "explanation": "Singular possession takes apostrophe plus s.",
        "tag": "Clause boundaries",
        "difficulty": "Basic",
        "sequence": 15
      },
      {
        "prompt": "Select the standard written English version of \"My sisters friend is here.\"",
        "options": [
          "My sisters friend is here.",
          "My sisters friend is here.",
          "My sister's friend is here.",
          "My sisters' friend is here."
        ],
        "correctIndex": 2,
        "explanation": "Singular possession takes apostrophe plus s.",
        "tag": "Standard form",
        "difficulty": "Basic",
        "sequence": 16
      },
      {
        "prompt": "Which lesson rule applies best here?",
        "options": [
          "Nonrestrictive clauses never need commas.",
          "Singular possession takes apostrophe plus s.",
          "Apostrophes form all plurals.",
          "Semicolons can join clauses to fragments."
        ],
        "correctIndex": 1,
        "explanation": "Singular possession takes apostrophe plus s.",
        "tag": "Explanation",
        "difficulty": "Basic",
        "sequence": 17
      },
      {
        "prompt": "Choose the version that avoids the original punctuation error.",
        "options": [
          "My sister's friend is here.",
          "My sisters' friend is here.",
          "My sisters friend is here.",
          "My sisters friend is here."
        ],
        "correctIndex": 0,
        "explanation": "Singular possession takes apostrophe plus s.",
        "tag": "Error check",
        "difficulty": "Basic",
        "sequence": 18
      },
      {
        "prompt": "Which answer would earn full marks in a punctuation quiz?",
        "options": [
          "My sisters' friend is here.",
          "My sisters friend is here.",
          "My sisters friend is here.",
          "My sister's friend is here."
        ],
        "correctIndex": 3,
        "explanation": "Singular possession takes apostrophe plus s.",
        "tag": "Assessment",
        "difficulty": "Basic",
        "sequence": 19
      },
      {
        "prompt": "What is the best corrected sentence?",
        "options": [
          "My sisters friend is here.",
          "My sisters friend is here.",
          "My sister's friend is here.",
          "My sisters' friend is here."
        ],
        "correctIndex": 2,
        "explanation": "Singular possession takes apostrophe plus s.",
        "tag": "Correction",
        "difficulty": "Basic",
        "sequence": 20
      },
      {
        "prompt": "Choose the best punctuated version of this sentence: \"After the workshop we compared our notes.\"",
        "options": [
          "After the workshop we, compared our notes.",
          "After the workshop; we compared our notes.",
          "After the workshop, we compared our notes.",
          "After, the workshop we compared our notes."
        ],
        "correctIndex": 2,
        "explanation": "An introductory phrase is followed by a comma here.",
        "tag": "Punctuation",
        "difficulty": "Intermediate",
        "sequence": 21
      },
      {
        "prompt": "Which sentence is punctuated correctly?",
        "options": [
          "After the workshop; we compared our notes.",
          "After the workshop, we compared our notes.",
          "After, the workshop we compared our notes.",
          "After the workshop we, compared our notes."
        ],
        "correctIndex": 1,
        "explanation": "An introductory phrase is followed by a comma here.",
        "tag": "Correct sentence",
        "difficulty": "Intermediate",
        "sequence": 22
      },
      {
        "prompt": "A writer needs to revise \"After the workshop we compared our notes.\". Which option is best?",
        "options": [
          "After the workshop, we compared our notes.",
          "After, the workshop we compared our notes.",
          "After the workshop we, compared our notes.",
          "After the workshop; we compared our notes."
        ],
        "correctIndex": 0,
        "explanation": "An introductory phrase is followed by a comma here.",
        "tag": "Revision",
        "difficulty": "Intermediate",
        "sequence": 23
      },
      {
        "prompt": "Which option would you keep after punctuation editing?",
        "options": [
          "After, the workshop we compared our notes.",
          "After the workshop we, compared our notes.",
          "After the workshop; we compared our notes.",
          "After the workshop, we compared our notes."
        ],
        "correctIndex": 3,
        "explanation": "An introductory phrase is followed by a comma here.",
        "tag": "Editing",
        "difficulty": "Intermediate",
        "sequence": 24
      },
      {
        "prompt": "Which answer respects clause boundaries and possession?",
        "options": [
          "After the workshop we, compared our notes.",
          "After the workshop; we compared our notes.",
          "After the workshop, we compared our notes.",
          "After, the workshop we compared our notes."
        ],
        "correctIndex": 2,
        "explanation": "An introductory phrase is followed by a comma here.",
        "tag": "Clause boundaries",
        "difficulty": "Intermediate",
        "sequence": 25
      },
      {
        "prompt": "Select the standard written English version of \"After the workshop we compared our notes.\"",
        "options": [
          "After the workshop; we compared our notes.",
          "After the workshop, we compared our notes.",
          "After, the workshop we compared our notes.",
          "After the workshop we, compared our notes."
        ],
        "correctIndex": 1,
        "explanation": "An introductory phrase is followed by a comma here.",
        "tag": "Standard form",
        "difficulty": "Intermediate",
        "sequence": 26
      },
      {
        "prompt": "Which lesson rule applies best here?",
        "options": [
          "An introductory phrase is followed by a comma here.",
          "Apostrophes form all plurals.",
          "Semicolons can join clauses to fragments.",
          "Nonrestrictive clauses never need commas."
        ],
        "correctIndex": 0,
        "explanation": "An introductory phrase is followed by a comma here.",
        "tag": "Explanation",
        "difficulty": "Intermediate",
        "sequence": 27
      },
      {
        "prompt": "Choose the version that avoids the original punctuation error.",
        "options": [
          "After, the workshop we compared our notes.",
          "After the workshop we, compared our notes.",
          "After the workshop; we compared our notes.",
          "After the workshop, we compared our notes."
        ],
        "correctIndex": 3,
        "explanation": "An introductory phrase is followed by a comma here.",
        "tag": "Error check",
        "difficulty": "Intermediate",
        "sequence": 28
      },
      {
        "prompt": "Which answer would earn full marks in a punctuation quiz?",
        "options": [
          "After the workshop we, compared our notes.",
          "After the workshop; we compared our notes.",
          "After the workshop, we compared our notes.",
          "After, the workshop we compared our notes."
        ],
        "correctIndex": 2,
        "explanation": "An introductory phrase is followed by a comma here.",
        "tag": "Assessment",
        "difficulty": "Intermediate",
        "sequence": 29
      },
      {
        "prompt": "What is the best corrected sentence?",
        "options": [
          "After the workshop; we compared our notes.",
          "After the workshop, we compared our notes.",
          "After, the workshop we compared our notes.",
          "After the workshop we, compared our notes."
        ],
        "correctIndex": 1,
        "explanation": "An introductory phrase is followed by a comma here.",
        "tag": "Correction",
        "difficulty": "Intermediate",
        "sequence": 30
      },
      {
        "prompt": "Choose the best punctuated version of this sentence: \"My laptop which is five years old still works well.\"",
        "options": [
          "My laptop which is five years old, still works well.",
          "My laptop, which is five years old, still works well.",
          "My laptop which, is five years old still works well.",
          "My laptop, which is five years old still works well."
        ],
        "correctIndex": 1,
        "explanation": "The nonrestrictive clause needs commas on both sides.",
        "tag": "Punctuation",
        "difficulty": "Intermediate",
        "sequence": 31
      },
      {
        "prompt": "Which sentence is punctuated correctly?",
        "options": [
          "My laptop, which is five years old, still works well.",
          "My laptop which, is five years old still works well.",
          "My laptop, which is five years old still works well.",
          "My laptop which is five years old, still works well."
        ],
        "correctIndex": 0,
        "explanation": "The nonrestrictive clause needs commas on both sides.",
        "tag": "Correct sentence",
        "difficulty": "Intermediate",
        "sequence": 32
      },
      {
        "prompt": "A writer needs to revise \"My laptop which is five years old still works well.\". Which option is best?",
        "options": [
          "My laptop which, is five years old still works well.",
          "My laptop, which is five years old still works well.",
          "My laptop which is five years old, still works well.",
          "My laptop, which is five years old, still works well."
        ],
        "correctIndex": 3,
        "explanation": "The nonrestrictive clause needs commas on both sides.",
        "tag": "Revision",
        "difficulty": "Intermediate",
        "sequence": 33
      },
      {
        "prompt": "Which option would you keep after punctuation editing?",
        "options": [
          "My laptop, which is five years old still works well.",
          "My laptop which is five years old, still works well.",
          "My laptop, which is five years old, still works well.",
          "My laptop which, is five years old still works well."
        ],
        "correctIndex": 2,
        "explanation": "The nonrestrictive clause needs commas on both sides.",
        "tag": "Editing",
        "difficulty": "Intermediate",
        "sequence": 34
      },
      {
        "prompt": "Which answer respects clause boundaries and possession?",
        "options": [
          "My laptop which is five years old, still works well.",
          "My laptop, which is five years old, still works well.",
          "My laptop which, is five years old still works well.",
          "My laptop, which is five years old still works well."
        ],
        "correctIndex": 1,
        "explanation": "The nonrestrictive clause needs commas on both sides.",
        "tag": "Clause boundaries",
        "difficulty": "Intermediate",
        "sequence": 35
      },
      {
        "prompt": "Select the standard written English version of \"My laptop which is five years old still works well.\"",
        "options": [
          "My laptop, which is five years old, still works well.",
          "My laptop which, is five years old still works well.",
          "My laptop, which is five years old still works well.",
          "My laptop which is five years old, still works well."
        ],
        "correctIndex": 0,
        "explanation": "The nonrestrictive clause needs commas on both sides.",
        "tag": "Standard form",
        "difficulty": "Intermediate",
        "sequence": 36
      },
      {
        "prompt": "Which lesson rule applies best here?",
        "options": [
          "Apostrophes form all plurals.",
          "Semicolons can join clauses to fragments.",
          "Nonrestrictive clauses never need commas.",
          "The nonrestrictive clause needs commas on both sides."
        ],
        "correctIndex": 3,
        "explanation": "The nonrestrictive clause needs commas on both sides.",
        "tag": "Explanation",
        "difficulty": "Intermediate",
        "sequence": 37
      },
      {
        "prompt": "Choose the version that avoids the original punctuation error.",
        "options": [
          "My laptop, which is five years old still works well.",
          "My laptop which is five years old, still works well.",
          "My laptop, which is five years old, still works well.",
          "My laptop which, is five years old still works well."
        ],
        "correctIndex": 2,
        "explanation": "The nonrestrictive clause needs commas on both sides.",
        "tag": "Error check",
        "difficulty": "Intermediate",
        "sequence": 38
      },
      {
        "prompt": "Which answer would earn full marks in a punctuation quiz?",
        "options": [
          "My laptop which is five years old, still works well.",
          "My laptop, which is five years old, still works well.",
          "My laptop which, is five years old still works well.",
          "My laptop, which is five years old still works well."
        ],
        "correctIndex": 1,
        "explanation": "The nonrestrictive clause needs commas on both sides.",
        "tag": "Assessment",
        "difficulty": "Intermediate",
        "sequence": 39
      },
      {
        "prompt": "What is the best corrected sentence?",
        "options": [
          "My laptop, which is five years old, still works well.",
          "My laptop which, is five years old still works well.",
          "My laptop, which is five years old still works well.",
          "My laptop which is five years old, still works well."
        ],
        "correctIndex": 0,
        "explanation": "The nonrestrictive clause needs commas on both sides.",
        "tag": "Correction",
        "difficulty": "Intermediate",
        "sequence": 40
      },
      {
        "prompt": "Choose the best punctuated version of this sentence: \"The speakers list included Asha a designer Ravi an editor and Mina a researcher.\"",
        "options": [
          "The speakers list included Asha, a designer; Ravi, an editor; and Mina, a researcher.",
          "The speakers list included Asha a designer, Ravi an editor, and Mina a researcher.",
          "The speakers list included: Asha, a designer, Ravi, an editor, and Mina, a researcher.",
          "The speakers list included Asha; a designer, Ravi; an editor, and Mina; a researcher."
        ],
        "correctIndex": 0,
        "explanation": "Semicolons help separate complex list items.",
        "tag": "Punctuation",
        "difficulty": "Advanced",
        "sequence": 41
      },
      {
        "prompt": "Which sentence is punctuated correctly?",
        "options": [
          "The speakers list included Asha a designer, Ravi an editor, and Mina a researcher.",
          "The speakers list included: Asha, a designer, Ravi, an editor, and Mina, a researcher.",
          "The speakers list included Asha; a designer, Ravi; an editor, and Mina; a researcher.",
          "The speakers list included Asha, a designer; Ravi, an editor; and Mina, a researcher."
        ],
        "correctIndex": 3,
        "explanation": "Semicolons help separate complex list items.",
        "tag": "Correct sentence",
        "difficulty": "Advanced",
        "sequence": 42
      },
      {
        "prompt": "A writer needs to revise \"The speakers list included Asha a designer Ravi an editor and Mina a researcher.\". Which option is best?",
        "options": [
          "The speakers list included: Asha, a designer, Ravi, an editor, and Mina, a researcher.",
          "The speakers list included Asha; a designer, Ravi; an editor, and Mina; a researcher.",
          "The speakers list included Asha, a designer; Ravi, an editor; and Mina, a researcher.",
          "The speakers list included Asha a designer, Ravi an editor, and Mina a researcher."
        ],
        "correctIndex": 2,
        "explanation": "Semicolons help separate complex list items.",
        "tag": "Revision",
        "difficulty": "Advanced",
        "sequence": 43
      },
      {
        "prompt": "Which option would you keep after punctuation editing?",
        "options": [
          "The speakers list included Asha; a designer, Ravi; an editor, and Mina; a researcher.",
          "The speakers list included Asha, a designer; Ravi, an editor; and Mina, a researcher.",
          "The speakers list included Asha a designer, Ravi an editor, and Mina a researcher.",
          "The speakers list included: Asha, a designer, Ravi, an editor, and Mina, a researcher."
        ],
        "correctIndex": 1,
        "explanation": "Semicolons help separate complex list items.",
        "tag": "Editing",
        "difficulty": "Advanced",
        "sequence": 44
      },
      {
        "prompt": "Which answer respects clause boundaries and possession?",
        "options": [
          "The speakers list included Asha, a designer; Ravi, an editor; and Mina, a researcher.",
          "The speakers list included Asha a designer, Ravi an editor, and Mina a researcher.",
          "The speakers list included: Asha, a designer, Ravi, an editor, and Mina, a researcher.",
          "The speakers list included Asha; a designer, Ravi; an editor, and Mina; a researcher."
        ],
        "correctIndex": 0,
        "explanation": "Semicolons help separate complex list items.",
        "tag": "Clause boundaries",
        "difficulty": "Advanced",
        "sequence": 45
      },
      {
        "prompt": "Select the standard written English version of \"The speakers list included Asha a designer Ravi an editor and Mina a researcher.\"",
        "options": [
          "The speakers list included Asha a designer, Ravi an editor, and Mina a researcher.",
          "The speakers list included: Asha, a designer, Ravi, an editor, and Mina, a researcher.",
          "The speakers list included Asha; a designer, Ravi; an editor, and Mina; a researcher.",
          "The speakers list included Asha, a designer; Ravi, an editor; and Mina, a researcher."
        ],
        "correctIndex": 3,
        "explanation": "Semicolons help separate complex list items.",
        "tag": "Standard form",
        "difficulty": "Advanced",
        "sequence": 46
      },
      {
        "prompt": "Which lesson rule applies best here?",
        "options": [
          "Semicolons can join clauses to fragments.",
          "Nonrestrictive clauses never need commas.",
          "Semicolons help separate complex list items.",
          "Apostrophes form all plurals."
        ],
        "correctIndex": 2,
        "explanation": "Semicolons help separate complex list items.",
        "tag": "Explanation",
        "difficulty": "Advanced",
        "sequence": 47
      },
      {
        "prompt": "Choose the version that avoids the original punctuation error.",
        "options": [
          "The speakers list included Asha; a designer, Ravi; an editor, and Mina; a researcher.",
          "The speakers list included Asha, a designer; Ravi, an editor; and Mina, a researcher.",
          "The speakers list included Asha a designer, Ravi an editor, and Mina a researcher.",
          "The speakers list included: Asha, a designer, Ravi, an editor, and Mina, a researcher."
        ],
        "correctIndex": 1,
        "explanation": "Semicolons help separate complex list items.",
        "tag": "Error check",
        "difficulty": "Advanced",
        "sequence": 48
      },
      {
        "prompt": "Which answer would earn full marks in a punctuation quiz?",
        "options": [
          "The speakers list included Asha, a designer; Ravi, an editor; and Mina, a researcher.",
          "The speakers list included Asha a designer, Ravi an editor, and Mina a researcher.",
          "The speakers list included: Asha, a designer, Ravi, an editor, and Mina, a researcher.",
          "The speakers list included Asha; a designer, Ravi; an editor, and Mina; a researcher."
        ],
        "correctIndex": 0,
        "explanation": "Semicolons help separate complex list items.",
        "tag": "Assessment",
        "difficulty": "Advanced",
        "sequence": 49
      },
      {
        "prompt": "What is the best corrected sentence?",
        "options": [
          "The speakers list included Asha a designer, Ravi an editor, and Mina a researcher.",
          "The speakers list included: Asha, a designer, Ravi, an editor, and Mina, a researcher.",
          "The speakers list included Asha; a designer, Ravi; an editor, and Mina; a researcher.",
          "The speakers list included Asha, a designer; Ravi, an editor; and Mina, a researcher."
        ],
        "correctIndex": 3,
        "explanation": "Semicolons help separate complex list items.",
        "tag": "Correction",
        "difficulty": "Advanced",
        "sequence": 50
      },
      {
        "prompt": "Choose the best punctuated version of this sentence: \"Its clear that the teams strategy worked.\"",
        "options": [
          "Its clear that the teams' strategy worked.",
          "It's clear that the teams strategy worked.",
          "Its clear that the team's strategy worked.",
          "It's clear that the team's strategy worked."
        ],
        "correctIndex": 3,
        "explanation": "It's is a contraction, and team's shows singular possession.",
        "tag": "Punctuation",
        "difficulty": "Advanced",
        "sequence": 51
      },
      {
        "prompt": "Which sentence is punctuated correctly?",
        "options": [
          "It's clear that the teams strategy worked.",
          "Its clear that the team's strategy worked.",
          "It's clear that the team's strategy worked.",
          "Its clear that the teams' strategy worked."
        ],
        "correctIndex": 2,
        "explanation": "It's is a contraction, and team's shows singular possession.",
        "tag": "Correct sentence",
        "difficulty": "Advanced",
        "sequence": 52
      },
      {
        "prompt": "A writer needs to revise \"Its clear that the teams strategy worked.\". Which option is best?",
        "options": [
          "Its clear that the team's strategy worked.",
          "It's clear that the team's strategy worked.",
          "Its clear that the teams' strategy worked.",
          "It's clear that the teams strategy worked."
        ],
        "correctIndex": 1,
        "explanation": "It's is a contraction, and team's shows singular possession.",
        "tag": "Revision",
        "difficulty": "Advanced",
        "sequence": 53
      },
      {
        "prompt": "Which option would you keep after punctuation editing?",
        "options": [
          "It's clear that the team's strategy worked.",
          "Its clear that the teams' strategy worked.",
          "It's clear that the teams strategy worked.",
          "Its clear that the team's strategy worked."
        ],
        "correctIndex": 0,
        "explanation": "It's is a contraction, and team's shows singular possession.",
        "tag": "Editing",
        "difficulty": "Advanced",
        "sequence": 54
      },
      {
        "prompt": "Which answer respects clause boundaries and possession?",
        "options": [
          "Its clear that the teams' strategy worked.",
          "It's clear that the teams strategy worked.",
          "Its clear that the team's strategy worked.",
          "It's clear that the team's strategy worked."
        ],
        "correctIndex": 3,
        "explanation": "It's is a contraction, and team's shows singular possession.",
        "tag": "Clause boundaries",
        "difficulty": "Advanced",
        "sequence": 55
      },
      {
        "prompt": "Select the standard written English version of \"Its clear that the teams strategy worked.\"",
        "options": [
          "It's clear that the teams strategy worked.",
          "Its clear that the team's strategy worked.",
          "It's clear that the team's strategy worked.",
          "Its clear that the teams' strategy worked."
        ],
        "correctIndex": 2,
        "explanation": "It's is a contraction, and team's shows singular possession.",
        "tag": "Standard form",
        "difficulty": "Advanced",
        "sequence": 56
      },
      {
        "prompt": "Which lesson rule applies best here?",
        "options": [
          "Nonrestrictive clauses never need commas.",
          "It's is a contraction, and team's shows singular possession.",
          "Apostrophes form all plurals.",
          "Semicolons can join clauses to fragments."
        ],
        "correctIndex": 1,
        "explanation": "It's is a contraction, and team's shows singular possession.",
        "tag": "Explanation",
        "difficulty": "Advanced",
        "sequence": 57
      },
      {
        "prompt": "Choose the version that avoids the original punctuation error.",
        "options": [
          "It's clear that the team's strategy worked.",
          "Its clear that the teams' strategy worked.",
          "It's clear that the teams strategy worked.",
          "Its clear that the team's strategy worked."
        ],
        "correctIndex": 0,
        "explanation": "It's is a contraction, and team's shows singular possession.",
        "tag": "Error check",
        "difficulty": "Advanced",
        "sequence": 58
      },
      {
        "prompt": "Which answer would earn full marks in a punctuation quiz?",
        "options": [
          "Its clear that the teams' strategy worked.",
          "It's clear that the teams strategy worked.",
          "Its clear that the team's strategy worked.",
          "It's clear that the team's strategy worked."
        ],
        "correctIndex": 3,
        "explanation": "It's is a contraction, and team's shows singular possession.",
        "tag": "Assessment",
        "difficulty": "Advanced",
        "sequence": 59
      },
      {
        "prompt": "What is the best corrected sentence?",
        "options": [
          "It's clear that the teams strategy worked.",
          "Its clear that the team's strategy worked.",
          "It's clear that the team's strategy worked.",
          "Its clear that the teams' strategy worked."
        ],
        "correctIndex": 2,
        "explanation": "It's is a contraction, and team's shows singular possession.",
        "tag": "Correction",
        "difficulty": "Advanced",
        "sequence": 60
      }
    ],
    "advanced": [
      {
        "prompt": "Choose the best punctuated version of this sentence: \"The lesson was difficult, we asked extra questions.\"",
        "options": [
          "The lesson was difficult, so we asked extra questions.",
          "The lesson was difficult we asked extra questions.",
          "The lesson was difficult; because we asked extra questions.",
          "The lesson was difficult, because we asked extra questions."
        ],
        "correctIndex": 0,
        "explanation": "The original is a comma splice and needs a better link.",
        "tag": "Punctuation",
        "difficulty": "Review Challenge",
        "sequence": 1
      },
      {
        "prompt": "Which sentence is punctuated correctly?",
        "options": [
          "The lesson was difficult we asked extra questions.",
          "The lesson was difficult; because we asked extra questions.",
          "The lesson was difficult, because we asked extra questions.",
          "The lesson was difficult, so we asked extra questions."
        ],
        "correctIndex": 3,
        "explanation": "The original is a comma splice and needs a better link.",
        "tag": "Correct sentence",
        "difficulty": "Review Challenge",
        "sequence": 2
      },
      {
        "prompt": "A writer needs to revise \"The lesson was difficult, we asked extra questions.\". Which option is best?",
        "options": [
          "The lesson was difficult; because we asked extra questions.",
          "The lesson was difficult, because we asked extra questions.",
          "The lesson was difficult, so we asked extra questions.",
          "The lesson was difficult we asked extra questions."
        ],
        "correctIndex": 2,
        "explanation": "The original is a comma splice and needs a better link.",
        "tag": "Revision",
        "difficulty": "Review Challenge",
        "sequence": 3
      },
      {
        "prompt": "Which option would you keep after punctuation editing?",
        "options": [
          "The lesson was difficult, because we asked extra questions.",
          "The lesson was difficult, so we asked extra questions.",
          "The lesson was difficult we asked extra questions.",
          "The lesson was difficult; because we asked extra questions."
        ],
        "correctIndex": 1,
        "explanation": "The original is a comma splice and needs a better link.",
        "tag": "Editing",
        "difficulty": "Review Challenge",
        "sequence": 4
      },
      {
        "prompt": "Select the standard written English version of \"The lesson was difficult, we asked extra questions.\"",
        "options": [
          "The lesson was difficult we asked extra questions.",
          "The lesson was difficult; because we asked extra questions.",
          "The lesson was difficult, because we asked extra questions.",
          "The lesson was difficult, so we asked extra questions."
        ],
        "correctIndex": 3,
        "explanation": "The original is a comma splice and needs a better link.",
        "tag": "Standard form",
        "difficulty": "Review Challenge",
        "sequence": 5
      },
      {
        "prompt": "Which lesson rule applies best here?",
        "options": [
          "Semicolons can join clauses to fragments.",
          "Nonrestrictive clauses never need commas.",
          "The original is a comma splice and needs a better link.",
          "Apostrophes form all plurals."
        ],
        "correctIndex": 2,
        "explanation": "The original is a comma splice and needs a better link.",
        "tag": "Explanation",
        "difficulty": "Review Challenge",
        "sequence": 6
      },
      {
        "prompt": "Which focus best matches the main learning challenge in \"Punctuation for Clarity\"?",
        "options": [
          "Identify the job each word does inside a sentence.",
          "Build complete sentences with subjects, verbs, and clear complements.",
          "Use a, an, the, some, and zero article correctly.",
          "Use commas, semicolons, colons, and apostrophes with purpose."
        ],
        "correctIndex": 3,
        "explanation": "The focus of this lesson is: Use commas, semicolons, colons, and apostrophes with purpose.",
        "tag": "Advanced focus",
        "difficulty": "Review Challenge",
        "sequence": 7
      },
      {
        "prompt": "Which rule belongs most directly to \"Punctuation for Clarity\"?",
        "options": [
          "Adjectives describe nouns; adverbs usually modify verbs, adjectives, or other adverbs.",
          "Determiners such as the, a, this, and many signal which noun you mean.",
          "Use commas after introductory elements and around nonrestrictive information.",
          "A noun names a person, place, thing, or idea, while a verb shows action or state."
        ],
        "correctIndex": 2,
        "explanation": "Use commas after introductory elements and around nonrestrictive information.",
        "tag": "Rule distinction",
        "difficulty": "Review Challenge",
        "sequence": 8
      },
      {
        "prompt": "Which editing warning is most important to remember in \"Punctuation for Clarity\"?",
        "options": [
          {
            "wrong": "The news is exciting. She is exciting.",
            "right": "The news is exciting. She is excited.",
            "note": "Use the -ed adjective for the person's feeling, -ing for the thing's quality."
          },
          {
            "wrong": "The students homework was hard.",
            "right": "The students' homework was hard.",
            "note": "Plural possessive needs apostrophe (students'); never use apostrophe for regular plurals."
          },
          {
            "wrong": "I have a friendly meeting tomorrow.",
            "right": "I have a friendly meeting tomorrow.",
            "note": "Friendly is an adjective here, not an adverb, so no -ly suffix needed."
          },
          {
            "wrong": "He ran quick to the store.",
            "right": "He ran quickly to the store.",
            "note": "Adverbs modify verbs; use quickly, not quick."
          }
        ],
        "correctIndex": 1,
        "explanation": {
          "wrong": "The students homework was hard.",
          "right": "The students' homework was hard.",
          "note": "Plural possessive needs apostrophe (students'); never use apostrophe for regular plurals."
        },
        "tag": "Pitfall check",
        "difficulty": "Review Challenge",
        "sequence": 9
      },
      {
        "prompt": "Which practice move best extends the lesson after you finish the core explanation?",
        "options": [
          "Exercise 1 - Comma Splices: Fix ten sentences joining independent clauses incorrectly.",
          "Exercise 1 - Labeling: Read a paragraph and mark each word with its part of speech (noun, verb, adj, adv, etc.)",
          "Exercise 2 - Identification: Identify the target word class in each sentence: 'Find the adverb that modifies ran.'",
          "Exercise 3 - Word Transformation: Transform words to different classes (run→runner→running; quick→quickly)"
        ],
        "correctIndex": 0,
        "explanation": "Exercise 1 - Comma Splices: Fix ten sentences joining independent clauses incorrectly.",
        "tag": "Practice transfer",
        "difficulty": "Review Challenge",
        "sequence": 10
      },
      {
        "prompt": "Which explanation best matches this model sentence from \"Punctuation for Clarity\"? \"After the workshop, we compared our notes.\"",
        "options": [
          "student (noun), curious (adjective), quickly (adverb), opened (verb)",
          "She (pronoun), carefully (adverb), explained (verb), importance (noun)",
          "Although (conjunction), raining (verb form), we (pronoun), near (preposition), mountain (noun)",
          "Comma after introductory phrase."
        ],
        "correctIndex": 3,
        "explanation": "Comma after introductory phrase.",
        "tag": "Example analysis",
        "difficulty": "Review Challenge",
        "sequence": 11
      },
      {
        "prompt": "Which objective belongs to \"Punctuation for Clarity\"?",
        "options": [
          "Separate form from function when a word changes category by use.",
          "Explain why the same word can behave differently across contexts.",
          "Use punctuation to mark relationships between clauses.",
          "Recognize the major word classes in authentic sentences."
        ],
        "correctIndex": 2,
        "explanation": "Use punctuation to mark relationships between clauses.",
        "tag": "Objective check",
        "difficulty": "Review Challenge",
        "sequence": 12
      },
      {
        "prompt": "Which portfolio task best fits the module that contains \"Punctuation for Clarity\"?",
        "options": [
          "Edit an old paragraph only for sentence-level accuracy and annotate each correction.",
          "Revise a formal paragraph for punctuation, parallelism, and concise tone.",
          "Write a 150-word self-introduction and label nouns, verbs, articles, and sentence types.",
          "Write a three-part narrative using present, past, and future meaning accurately."
        ],
        "correctIndex": 1,
        "explanation": "Revise a formal paragraph for punctuation, parallelism, and concise tone.",
        "tag": "Portfolio transfer",
        "difficulty": "Review Challenge",
        "sequence": 13
      },
      {
        "prompt": "Which module description best fits the context of \"Punctuation for Clarity\"?",
        "options": [
          "Turn grammatical accuracy into polished writing through punctuation, balance, comparison, and concise style.",
          "Build a clean base in word classes, sentence architecture, and noun phrases before moving into more advanced control.",
          "Learn how English grammar maps routine, action-in-progress, experience, finished time, future reference, and modal meaning.",
          "Strengthen agreement, pronoun reference, auxiliary use, pattern control, and active-passive choices."
        ],
        "correctIndex": 0,
        "explanation": "Turn grammatical accuracy into polished writing through punctuation, balance, comparison, and concise style.",
        "tag": "Module alignment",
        "difficulty": "Review Challenge",
        "sequence": 14
      },
      {
        "prompt": "Which reading insight best matches the story work in \"Punctuation for Clarity\"?",
        "options": [
          "Market (noun), Saturday (noun), Maya (noun) are the main subjects and objects.",
          "Visits, walks, looking, shows, answer, select, stands are action verbs showing what people do.",
          "Busy, colorful, fresh, ripe describe nouns (busy market, colorful stalls).",
          "Colons introduce explanations (crisis: the manuscript) and lists (three: comma splices, apostrophes, semicolons)."
        ],
        "correctIndex": 3,
        "explanation": "Colons introduce explanations (crisis: the manuscript) and lists (three: comma splices, apostrophes, semicolons).",
        "tag": "Story analysis",
        "difficulty": "Review Challenge",
        "sequence": 15
      },
      {
        "prompt": "Which answer respects clause boundaries and possession?",
        "options": [
          "The lesson was difficult, so we asked extra questions.",
          "The lesson was difficult we asked extra questions.",
          "The lesson was difficult; because we asked extra questions.",
          "The lesson was difficult, because we asked extra questions."
        ],
        "correctIndex": 0,
        "explanation": "The original is a comma splice and needs a better link.",
        "tag": "Clause boundaries",
        "difficulty": "Review Challenge",
        "sequence": 16
      },
      {
        "prompt": "Choose the version that avoids the original punctuation error.",
        "options": [
          "The lesson was difficult, because we asked extra questions.",
          "The lesson was difficult, so we asked extra questions.",
          "The lesson was difficult we asked extra questions.",
          "The lesson was difficult; because we asked extra questions."
        ],
        "correctIndex": 1,
        "explanation": "The original is a comma splice and needs a better link.",
        "tag": "Error check",
        "difficulty": "Review Challenge",
        "sequence": 17
      },
      {
        "prompt": "Which answer would earn full marks in a punctuation quiz?",
        "options": [
          "The lesson was difficult, so we asked extra questions.",
          "The lesson was difficult we asked extra questions.",
          "The lesson was difficult; because we asked extra questions.",
          "The lesson was difficult, because we asked extra questions."
        ],
        "correctIndex": 0,
        "explanation": "The original is a comma splice and needs a better link.",
        "tag": "Assessment",
        "difficulty": "Review Challenge",
        "sequence": 18
      },
      {
        "prompt": "What is the best corrected sentence?",
        "options": [
          "The lesson was difficult we asked extra questions.",
          "The lesson was difficult; because we asked extra questions.",
          "The lesson was difficult, because we asked extra questions.",
          "The lesson was difficult, so we asked extra questions."
        ],
        "correctIndex": 3,
        "explanation": "The original is a comma splice and needs a better link.",
        "tag": "Correction",
        "difficulty": "Review Challenge",
        "sequence": 19
      },
      {
        "prompt": "Choose the best punctuated version of this sentence: \"My sisters friend is here.\"",
        "options": [
          "My sisters' friend is here.",
          "My sisters friend is here.",
          "My sisters friend is here.",
          "My sister's friend is here."
        ],
        "correctIndex": 3,
        "explanation": "Singular possession takes apostrophe plus s.",
        "tag": "Punctuation",
        "difficulty": "Review Challenge",
        "sequence": 20
      }
    ]
  },
  "parallelism-comparison": {
    "standard": [
      {
        "prompt": "Choose the best parallel or logical revision of \"He likes reading, to swim, and cycling.\"",
        "options": [
          "He likes reading, swimming, and cycling.",
          "He likes read, swimming, and cycling.",
          "He likes reading, swim, and cycling.",
          "He likes to reading, swimming, and cycle."
        ],
        "correctIndex": 0,
        "explanation": "Parallel items need matching grammatical form.",
        "tag": "Parallelism",
        "difficulty": "Basic",
        "sequence": 1
      },
      {
        "prompt": "Which version is balanced and grammatically sound?",
        "options": [
          "He likes read, swimming, and cycling.",
          "He likes reading, swim, and cycling.",
          "He likes to reading, swimming, and cycle.",
          "He likes reading, swimming, and cycling."
        ],
        "correctIndex": 3,
        "explanation": "Parallel items need matching grammatical form.",
        "tag": "Balance",
        "difficulty": "Basic",
        "sequence": 2
      },
      {
        "prompt": "A writer wants to fix \"He likes reading, to swim, and cycling.\". Which answer works best?",
        "options": [
          "He likes reading, swim, and cycling.",
          "He likes to reading, swimming, and cycle.",
          "He likes reading, swimming, and cycling.",
          "He likes read, swimming, and cycling."
        ],
        "correctIndex": 2,
        "explanation": "Parallel items need matching grammatical form.",
        "tag": "Revision",
        "difficulty": "Basic",
        "sequence": 3
      },
      {
        "prompt": "Which option keeps similar ideas in matching form?",
        "options": [
          "He likes to reading, swimming, and cycle.",
          "He likes reading, swimming, and cycling.",
          "He likes read, swimming, and cycling.",
          "He likes reading, swim, and cycling."
        ],
        "correctIndex": 1,
        "explanation": "Parallel items need matching grammatical form.",
        "tag": "Matching form",
        "difficulty": "Basic",
        "sequence": 4
      },
      {
        "prompt": "Which option would you keep after editing for parallel structure?",
        "options": [
          "He likes reading, swimming, and cycling.",
          "He likes read, swimming, and cycling.",
          "He likes reading, swim, and cycling.",
          "He likes to reading, swimming, and cycle."
        ],
        "correctIndex": 0,
        "explanation": "Parallel items need matching grammatical form.",
        "tag": "Editing",
        "difficulty": "Basic",
        "sequence": 5
      },
      {
        "prompt": "Choose the sentence with the clearest comparison or list structure.",
        "options": [
          "He likes read, swimming, and cycling.",
          "He likes reading, swim, and cycling.",
          "He likes to reading, swimming, and cycle.",
          "He likes reading, swimming, and cycling."
        ],
        "correctIndex": 3,
        "explanation": "Parallel items need matching grammatical form.",
        "tag": "Clarity",
        "difficulty": "Basic",
        "sequence": 6
      },
      {
        "prompt": "Which lesson rule applies?",
        "options": [
          "Parallelism is only about punctuation.",
          "Lists are clearer when the forms do not match.",
          "Parallel items need matching grammatical form.",
          "Comparisons should mix categories for variety."
        ],
        "correctIndex": 2,
        "explanation": "Parallel items need matching grammatical form.",
        "tag": "Explanation",
        "difficulty": "Basic",
        "sequence": 7
      },
      {
        "prompt": "Select the standard English version of \"He likes reading, to swim, and cycling.\"",
        "options": [
          "He likes to reading, swimming, and cycle.",
          "He likes reading, swimming, and cycling.",
          "He likes read, swimming, and cycling.",
          "He likes reading, swim, and cycling."
        ],
        "correctIndex": 1,
        "explanation": "Parallel items need matching grammatical form.",
        "tag": "Standard form",
        "difficulty": "Basic",
        "sequence": 8
      },
      {
        "prompt": "Which answer avoids a faulty comparison or mixed structure?",
        "options": [
          "He likes reading, swimming, and cycling.",
          "He likes read, swimming, and cycling.",
          "He likes reading, swim, and cycling.",
          "He likes to reading, swimming, and cycle."
        ],
        "correctIndex": 0,
        "explanation": "Parallel items need matching grammatical form.",
        "tag": "Error check",
        "difficulty": "Basic",
        "sequence": 9
      },
      {
        "prompt": "Which sentence would score highest on an editing task?",
        "options": [
          "He likes read, swimming, and cycling.",
          "He likes reading, swim, and cycling.",
          "He likes to reading, swimming, and cycle.",
          "He likes reading, swimming, and cycling."
        ],
        "correctIndex": 3,
        "explanation": "Parallel items need matching grammatical form.",
        "tag": "Assessment",
        "difficulty": "Basic",
        "sequence": 10
      },
      {
        "prompt": "Choose the best parallel or logical revision of \"The workshop focused on grammar, writing clearly, and revision.\"",
        "options": [
          "The workshop focused on grammar, writing clearly, and revising.",
          "The workshop focused on grammar, to write clearly, and revision.",
          "The workshop focused on grammar and writing clearly revision.",
          "The workshop focused on grammar, clear writing, and revision."
        ],
        "correctIndex": 3,
        "explanation": "The list items should be balanced.",
        "tag": "Parallelism",
        "difficulty": "Basic",
        "sequence": 11
      },
      {
        "prompt": "Which version is balanced and grammatically sound?",
        "options": [
          "The workshop focused on grammar, to write clearly, and revision.",
          "The workshop focused on grammar and writing clearly revision.",
          "The workshop focused on grammar, clear writing, and revision.",
          "The workshop focused on grammar, writing clearly, and revising."
        ],
        "correctIndex": 2,
        "explanation": "The list items should be balanced.",
        "tag": "Balance",
        "difficulty": "Basic",
        "sequence": 12
      },
      {
        "prompt": "A writer wants to fix \"The workshop focused on grammar, writing clearly, and revision.\". Which answer works best?",
        "options": [
          "The workshop focused on grammar and writing clearly revision.",
          "The workshop focused on grammar, clear writing, and revision.",
          "The workshop focused on grammar, writing clearly, and revising.",
          "The workshop focused on grammar, to write clearly, and revision."
        ],
        "correctIndex": 1,
        "explanation": "The list items should be balanced.",
        "tag": "Revision",
        "difficulty": "Basic",
        "sequence": 13
      },
      {
        "prompt": "Which option keeps similar ideas in matching form?",
        "options": [
          "The workshop focused on grammar, clear writing, and revision.",
          "The workshop focused on grammar, writing clearly, and revising.",
          "The workshop focused on grammar, to write clearly, and revision.",
          "The workshop focused on grammar and writing clearly revision."
        ],
        "correctIndex": 0,
        "explanation": "The list items should be balanced.",
        "tag": "Matching form",
        "difficulty": "Basic",
        "sequence": 14
      },
      {
        "prompt": "Which option would you keep after editing for parallel structure?",
        "options": [
          "The workshop focused on grammar, writing clearly, and revising.",
          "The workshop focused on grammar, to write clearly, and revision.",
          "The workshop focused on grammar and writing clearly revision.",
          "The workshop focused on grammar, clear writing, and revision."
        ],
        "correctIndex": 3,
        "explanation": "The list items should be balanced.",
        "tag": "Editing",
        "difficulty": "Basic",
        "sequence": 15
      },
      {
        "prompt": "Choose the sentence with the clearest comparison or list structure.",
        "options": [
          "The workshop focused on grammar, to write clearly, and revision.",
          "The workshop focused on grammar and writing clearly revision.",
          "The workshop focused on grammar, clear writing, and revision.",
          "The workshop focused on grammar, writing clearly, and revising."
        ],
        "correctIndex": 2,
        "explanation": "The list items should be balanced.",
        "tag": "Clarity",
        "difficulty": "Basic",
        "sequence": 16
      },
      {
        "prompt": "Which lesson rule applies?",
        "options": [
          "Lists are clearer when the forms do not match.",
          "The list items should be balanced.",
          "Comparisons should mix categories for variety.",
          "Parallelism is only about punctuation."
        ],
        "correctIndex": 1,
        "explanation": "The list items should be balanced.",
        "tag": "Explanation",
        "difficulty": "Basic",
        "sequence": 17
      },
      {
        "prompt": "Select the standard English version of \"The workshop focused on grammar, writing clearly, and revision.\"",
        "options": [
          "The workshop focused on grammar, clear writing, and revision.",
          "The workshop focused on grammar, writing clearly, and revising.",
          "The workshop focused on grammar, to write clearly, and revision.",
          "The workshop focused on grammar and writing clearly revision."
        ],
        "correctIndex": 0,
        "explanation": "The list items should be balanced.",
        "tag": "Standard form",
        "difficulty": "Basic",
        "sequence": 18
      },
      {
        "prompt": "Which answer avoids a faulty comparison or mixed structure?",
        "options": [
          "The workshop focused on grammar, writing clearly, and revising.",
          "The workshop focused on grammar, to write clearly, and revision.",
          "The workshop focused on grammar and writing clearly revision.",
          "The workshop focused on grammar, clear writing, and revision."
        ],
        "correctIndex": 3,
        "explanation": "The list items should be balanced.",
        "tag": "Error check",
        "difficulty": "Basic",
        "sequence": 19
      },
      {
        "prompt": "Which sentence would score highest on an editing task?",
        "options": [
          "The workshop focused on grammar, to write clearly, and revision.",
          "The workshop focused on grammar and writing clearly revision.",
          "The workshop focused on grammar, clear writing, and revision.",
          "The workshop focused on grammar, writing clearly, and revising."
        ],
        "correctIndex": 2,
        "explanation": "The list items should be balanced.",
        "tag": "Assessment",
        "difficulty": "Basic",
        "sequence": 20
      },
      {
        "prompt": "Choose the best parallel or logical revision of \"Riya's essays are stronger than the class.\"",
        "options": [
          "Riya's essays are stronger than the class.",
          "Riya's essays are stronger than the essays of class.",
          "Riya's essays are stronger than the class's essays.",
          "Riya's essays are stronger than the class are."
        ],
        "correctIndex": 2,
        "explanation": "Compare like with like: essays with essays.",
        "tag": "Parallelism",
        "difficulty": "Intermediate",
        "sequence": 21
      },
      {
        "prompt": "Which version is balanced and grammatically sound?",
        "options": [
          "Riya's essays are stronger than the essays of class.",
          "Riya's essays are stronger than the class's essays.",
          "Riya's essays are stronger than the class are.",
          "Riya's essays are stronger than the class."
        ],
        "correctIndex": 1,
        "explanation": "Compare like with like: essays with essays.",
        "tag": "Balance",
        "difficulty": "Intermediate",
        "sequence": 22
      },
      {
        "prompt": "A writer wants to fix \"Riya's essays are stronger than the class.\". Which answer works best?",
        "options": [
          "Riya's essays are stronger than the class's essays.",
          "Riya's essays are stronger than the class are.",
          "Riya's essays are stronger than the class.",
          "Riya's essays are stronger than the essays of class."
        ],
        "correctIndex": 0,
        "explanation": "Compare like with like: essays with essays.",
        "tag": "Revision",
        "difficulty": "Intermediate",
        "sequence": 23
      },
      {
        "prompt": "Which option keeps similar ideas in matching form?",
        "options": [
          "Riya's essays are stronger than the class are.",
          "Riya's essays are stronger than the class.",
          "Riya's essays are stronger than the essays of class.",
          "Riya's essays are stronger than the class's essays."
        ],
        "correctIndex": 3,
        "explanation": "Compare like with like: essays with essays.",
        "tag": "Matching form",
        "difficulty": "Intermediate",
        "sequence": 24
      },
      {
        "prompt": "Which option would you keep after editing for parallel structure?",
        "options": [
          "Riya's essays are stronger than the class.",
          "Riya's essays are stronger than the essays of class.",
          "Riya's essays are stronger than the class's essays.",
          "Riya's essays are stronger than the class are."
        ],
        "correctIndex": 2,
        "explanation": "Compare like with like: essays with essays.",
        "tag": "Editing",
        "difficulty": "Intermediate",
        "sequence": 25
      },
      {
        "prompt": "Choose the sentence with the clearest comparison or list structure.",
        "options": [
          "Riya's essays are stronger than the essays of class.",
          "Riya's essays are stronger than the class's essays.",
          "Riya's essays are stronger than the class are.",
          "Riya's essays are stronger than the class."
        ],
        "correctIndex": 1,
        "explanation": "Compare like with like: essays with essays.",
        "tag": "Clarity",
        "difficulty": "Intermediate",
        "sequence": 26
      },
      {
        "prompt": "Which lesson rule applies?",
        "options": [
          "Compare like with like: essays with essays.",
          "Comparisons should mix categories for variety.",
          "Parallelism is only about punctuation.",
          "Lists are clearer when the forms do not match."
        ],
        "correctIndex": 0,
        "explanation": "Compare like with like: essays with essays.",
        "tag": "Explanation",
        "difficulty": "Intermediate",
        "sequence": 27
      },
      {
        "prompt": "Select the standard English version of \"Riya's essays are stronger than the class.\"",
        "options": [
          "Riya's essays are stronger than the class are.",
          "Riya's essays are stronger than the class.",
          "Riya's essays are stronger than the essays of class.",
          "Riya's essays are stronger than the class's essays."
        ],
        "correctIndex": 3,
        "explanation": "Compare like with like: essays with essays.",
        "tag": "Standard form",
        "difficulty": "Intermediate",
        "sequence": 28
      },
      {
        "prompt": "Which answer avoids a faulty comparison or mixed structure?",
        "options": [
          "Riya's essays are stronger than the class.",
          "Riya's essays are stronger than the essays of class.",
          "Riya's essays are stronger than the class's essays.",
          "Riya's essays are stronger than the class are."
        ],
        "correctIndex": 2,
        "explanation": "Compare like with like: essays with essays.",
        "tag": "Error check",
        "difficulty": "Intermediate",
        "sequence": 29
      },
      {
        "prompt": "Which sentence would score highest on an editing task?",
        "options": [
          "Riya's essays are stronger than the essays of class.",
          "Riya's essays are stronger than the class's essays.",
          "Riya's essays are stronger than the class are.",
          "Riya's essays are stronger than the class."
        ],
        "correctIndex": 1,
        "explanation": "Compare like with like: essays with essays.",
        "tag": "Assessment",
        "difficulty": "Intermediate",
        "sequence": 30
      },
      {
        "prompt": "Choose the best parallel or logical revision of \"The report was concise, persuasive, and it was easy to follow.\"",
        "options": [
          "The report concise, persuasive, and it was easy to follow.",
          "The report was concise, persuasive, and easy to follow.",
          "The report was concise, persuasion, and easy to follow.",
          "The report was concise and persuasive, and following easily."
        ],
        "correctIndex": 1,
        "explanation": "The coordinated adjectives and phrase should align.",
        "tag": "Parallelism",
        "difficulty": "Intermediate",
        "sequence": 31
      },
      {
        "prompt": "Which version is balanced and grammatically sound?",
        "options": [
          "The report was concise, persuasive, and easy to follow.",
          "The report was concise, persuasion, and easy to follow.",
          "The report was concise and persuasive, and following easily.",
          "The report concise, persuasive, and it was easy to follow."
        ],
        "correctIndex": 0,
        "explanation": "The coordinated adjectives and phrase should align.",
        "tag": "Balance",
        "difficulty": "Intermediate",
        "sequence": 32
      },
      {
        "prompt": "A writer wants to fix \"The report was concise, persuasive, and it was easy to follow.\". Which answer works best?",
        "options": [
          "The report was concise, persuasion, and easy to follow.",
          "The report was concise and persuasive, and following easily.",
          "The report concise, persuasive, and it was easy to follow.",
          "The report was concise, persuasive, and easy to follow."
        ],
        "correctIndex": 3,
        "explanation": "The coordinated adjectives and phrase should align.",
        "tag": "Revision",
        "difficulty": "Intermediate",
        "sequence": 33
      },
      {
        "prompt": "Which option keeps similar ideas in matching form?",
        "options": [
          "The report was concise and persuasive, and following easily.",
          "The report concise, persuasive, and it was easy to follow.",
          "The report was concise, persuasive, and easy to follow.",
          "The report was concise, persuasion, and easy to follow."
        ],
        "correctIndex": 2,
        "explanation": "The coordinated adjectives and phrase should align.",
        "tag": "Matching form",
        "difficulty": "Intermediate",
        "sequence": 34
      },
      {
        "prompt": "Which option would you keep after editing for parallel structure?",
        "options": [
          "The report concise, persuasive, and it was easy to follow.",
          "The report was concise, persuasive, and easy to follow.",
          "The report was concise, persuasion, and easy to follow.",
          "The report was concise and persuasive, and following easily."
        ],
        "correctIndex": 1,
        "explanation": "The coordinated adjectives and phrase should align.",
        "tag": "Editing",
        "difficulty": "Intermediate",
        "sequence": 35
      },
      {
        "prompt": "Choose the sentence with the clearest comparison or list structure.",
        "options": [
          "The report was concise, persuasive, and easy to follow.",
          "The report was concise, persuasion, and easy to follow.",
          "The report was concise and persuasive, and following easily.",
          "The report concise, persuasive, and it was easy to follow."
        ],
        "correctIndex": 0,
        "explanation": "The coordinated adjectives and phrase should align.",
        "tag": "Clarity",
        "difficulty": "Intermediate",
        "sequence": 36
      },
      {
        "prompt": "Which lesson rule applies?",
        "options": [
          "Comparisons should mix categories for variety.",
          "Parallelism is only about punctuation.",
          "Lists are clearer when the forms do not match.",
          "The coordinated adjectives and phrase should align."
        ],
        "correctIndex": 3,
        "explanation": "The coordinated adjectives and phrase should align.",
        "tag": "Explanation",
        "difficulty": "Intermediate",
        "sequence": 37
      },
      {
        "prompt": "Select the standard English version of \"The report was concise, persuasive, and it was easy to follow.\"",
        "options": [
          "The report was concise and persuasive, and following easily.",
          "The report concise, persuasive, and it was easy to follow.",
          "The report was concise, persuasive, and easy to follow.",
          "The report was concise, persuasion, and easy to follow."
        ],
        "correctIndex": 2,
        "explanation": "The coordinated adjectives and phrase should align.",
        "tag": "Standard form",
        "difficulty": "Intermediate",
        "sequence": 38
      },
      {
        "prompt": "Which answer avoids a faulty comparison or mixed structure?",
        "options": [
          "The report concise, persuasive, and it was easy to follow.",
          "The report was concise, persuasive, and easy to follow.",
          "The report was concise, persuasion, and easy to follow.",
          "The report was concise and persuasive, and following easily."
        ],
        "correctIndex": 1,
        "explanation": "The coordinated adjectives and phrase should align.",
        "tag": "Error check",
        "difficulty": "Intermediate",
        "sequence": 39
      },
      {
        "prompt": "Which sentence would score highest on an editing task?",
        "options": [
          "The report was concise, persuasive, and easy to follow.",
          "The report was concise, persuasion, and easy to follow.",
          "The report was concise and persuasive, and following easily.",
          "The report concise, persuasive, and it was easy to follow."
        ],
        "correctIndex": 0,
        "explanation": "The coordinated adjectives and phrase should align.",
        "tag": "Assessment",
        "difficulty": "Intermediate",
        "sequence": 40
      },
      {
        "prompt": "Choose the best parallel or logical revision of \"Nobody in the team edits better than she.\"",
        "options": [
          "Nobody in the team edits better than she does.",
          "Nobody in the team edits better than her.",
          "Nobody in the team edits better than she editing.",
          "Nobody in the team edits better than she do."
        ],
        "correctIndex": 0,
        "explanation": "The comparison becomes clearer with the full verb.",
        "tag": "Parallelism",
        "difficulty": "Advanced",
        "sequence": 41
      },
      {
        "prompt": "Which version is balanced and grammatically sound?",
        "options": [
          "Nobody in the team edits better than her.",
          "Nobody in the team edits better than she editing.",
          "Nobody in the team edits better than she do.",
          "Nobody in the team edits better than she does."
        ],
        "correctIndex": 3,
        "explanation": "The comparison becomes clearer with the full verb.",
        "tag": "Balance",
        "difficulty": "Advanced",
        "sequence": 42
      },
      {
        "prompt": "A writer wants to fix \"Nobody in the team edits better than she.\". Which answer works best?",
        "options": [
          "Nobody in the team edits better than she editing.",
          "Nobody in the team edits better than she do.",
          "Nobody in the team edits better than she does.",
          "Nobody in the team edits better than her."
        ],
        "correctIndex": 2,
        "explanation": "The comparison becomes clearer with the full verb.",
        "tag": "Revision",
        "difficulty": "Advanced",
        "sequence": 43
      },
      {
        "prompt": "Which option keeps similar ideas in matching form?",
        "options": [
          "Nobody in the team edits better than she do.",
          "Nobody in the team edits better than she does.",
          "Nobody in the team edits better than her.",
          "Nobody in the team edits better than she editing."
        ],
        "correctIndex": 1,
        "explanation": "The comparison becomes clearer with the full verb.",
        "tag": "Matching form",
        "difficulty": "Advanced",
        "sequence": 44
      },
      {
        "prompt": "Which option would you keep after editing for parallel structure?",
        "options": [
          "Nobody in the team edits better than she does.",
          "Nobody in the team edits better than her.",
          "Nobody in the team edits better than she editing.",
          "Nobody in the team edits better than she do."
        ],
        "correctIndex": 0,
        "explanation": "The comparison becomes clearer with the full verb.",
        "tag": "Editing",
        "difficulty": "Advanced",
        "sequence": 45
      },
      {
        "prompt": "Choose the sentence with the clearest comparison or list structure.",
        "options": [
          "Nobody in the team edits better than her.",
          "Nobody in the team edits better than she editing.",
          "Nobody in the team edits better than she do.",
          "Nobody in the team edits better than she does."
        ],
        "correctIndex": 3,
        "explanation": "The comparison becomes clearer with the full verb.",
        "tag": "Clarity",
        "difficulty": "Advanced",
        "sequence": 46
      },
      {
        "prompt": "Which lesson rule applies?",
        "options": [
          "Parallelism is only about punctuation.",
          "Lists are clearer when the forms do not match.",
          "The comparison becomes clearer with the full verb.",
          "Comparisons should mix categories for variety."
        ],
        "correctIndex": 2,
        "explanation": "The comparison becomes clearer with the full verb.",
        "tag": "Explanation",
        "difficulty": "Advanced",
        "sequence": 47
      },
      {
        "prompt": "Select the standard English version of \"Nobody in the team edits better than she.\"",
        "options": [
          "Nobody in the team edits better than she do.",
          "Nobody in the team edits better than she does.",
          "Nobody in the team edits better than her.",
          "Nobody in the team edits better than she editing."
        ],
        "correctIndex": 1,
        "explanation": "The comparison becomes clearer with the full verb.",
        "tag": "Standard form",
        "difficulty": "Advanced",
        "sequence": 48
      },
      {
        "prompt": "Which answer avoids a faulty comparison or mixed structure?",
        "options": [
          "Nobody in the team edits better than she does.",
          "Nobody in the team edits better than her.",
          "Nobody in the team edits better than she editing.",
          "Nobody in the team edits better than she do."
        ],
        "correctIndex": 0,
        "explanation": "The comparison becomes clearer with the full verb.",
        "tag": "Error check",
        "difficulty": "Advanced",
        "sequence": 49
      },
      {
        "prompt": "Which sentence would score highest on an editing task?",
        "options": [
          "Nobody in the team edits better than her.",
          "Nobody in the team edits better than she editing.",
          "Nobody in the team edits better than she do.",
          "Nobody in the team edits better than she does."
        ],
        "correctIndex": 3,
        "explanation": "The comparison becomes clearer with the full verb.",
        "tag": "Assessment",
        "difficulty": "Advanced",
        "sequence": 50
      },
      {
        "prompt": "Choose the best parallel or logical revision of \"The course teaches students to analyze, revise, and careful editing.\"",
        "options": [
          "The course teaches students analyzing, revise, and edit carefully.",
          "The course teaches students to analyze, revising, and careful editing.",
          "The course teaches students analysis, revise, and edit carefully.",
          "The course teaches students to analyze, revise, and edit carefully."
        ],
        "correctIndex": 3,
        "explanation": "Keep the coordinated verbs in matching form.",
        "tag": "Parallelism",
        "difficulty": "Advanced",
        "sequence": 51
      },
      {
        "prompt": "Which version is balanced and grammatically sound?",
        "options": [
          "The course teaches students to analyze, revising, and careful editing.",
          "The course teaches students analysis, revise, and edit carefully.",
          "The course teaches students to analyze, revise, and edit carefully.",
          "The course teaches students analyzing, revise, and edit carefully."
        ],
        "correctIndex": 2,
        "explanation": "Keep the coordinated verbs in matching form.",
        "tag": "Balance",
        "difficulty": "Advanced",
        "sequence": 52
      },
      {
        "prompt": "A writer wants to fix \"The course teaches students to analyze, revise, and careful editing.\". Which answer works best?",
        "options": [
          "The course teaches students analysis, revise, and edit carefully.",
          "The course teaches students to analyze, revise, and edit carefully.",
          "The course teaches students analyzing, revise, and edit carefully.",
          "The course teaches students to analyze, revising, and careful editing."
        ],
        "correctIndex": 1,
        "explanation": "Keep the coordinated verbs in matching form.",
        "tag": "Revision",
        "difficulty": "Advanced",
        "sequence": 53
      },
      {
        "prompt": "Which option keeps similar ideas in matching form?",
        "options": [
          "The course teaches students to analyze, revise, and edit carefully.",
          "The course teaches students analyzing, revise, and edit carefully.",
          "The course teaches students to analyze, revising, and careful editing.",
          "The course teaches students analysis, revise, and edit carefully."
        ],
        "correctIndex": 0,
        "explanation": "Keep the coordinated verbs in matching form.",
        "tag": "Matching form",
        "difficulty": "Advanced",
        "sequence": 54
      },
      {
        "prompt": "Which option would you keep after editing for parallel structure?",
        "options": [
          "The course teaches students analyzing, revise, and edit carefully.",
          "The course teaches students to analyze, revising, and careful editing.",
          "The course teaches students analysis, revise, and edit carefully.",
          "The course teaches students to analyze, revise, and edit carefully."
        ],
        "correctIndex": 3,
        "explanation": "Keep the coordinated verbs in matching form.",
        "tag": "Editing",
        "difficulty": "Advanced",
        "sequence": 55
      },
      {
        "prompt": "Choose the sentence with the clearest comparison or list structure.",
        "options": [
          "The course teaches students to analyze, revising, and careful editing.",
          "The course teaches students analysis, revise, and edit carefully.",
          "The course teaches students to analyze, revise, and edit carefully.",
          "The course teaches students analyzing, revise, and edit carefully."
        ],
        "correctIndex": 2,
        "explanation": "Keep the coordinated verbs in matching form.",
        "tag": "Clarity",
        "difficulty": "Advanced",
        "sequence": 56
      },
      {
        "prompt": "Which lesson rule applies?",
        "options": [
          "Lists are clearer when the forms do not match.",
          "Keep the coordinated verbs in matching form.",
          "Comparisons should mix categories for variety.",
          "Parallelism is only about punctuation."
        ],
        "correctIndex": 1,
        "explanation": "Keep the coordinated verbs in matching form.",
        "tag": "Explanation",
        "difficulty": "Advanced",
        "sequence": 57
      },
      {
        "prompt": "Select the standard English version of \"The course teaches students to analyze, revise, and careful editing.\"",
        "options": [
          "The course teaches students to analyze, revise, and edit carefully.",
          "The course teaches students analyzing, revise, and edit carefully.",
          "The course teaches students to analyze, revising, and careful editing.",
          "The course teaches students analysis, revise, and edit carefully."
        ],
        "correctIndex": 0,
        "explanation": "Keep the coordinated verbs in matching form.",
        "tag": "Standard form",
        "difficulty": "Advanced",
        "sequence": 58
      },
      {
        "prompt": "Which answer avoids a faulty comparison or mixed structure?",
        "options": [
          "The course teaches students analyzing, revise, and edit carefully.",
          "The course teaches students to analyze, revising, and careful editing.",
          "The course teaches students analysis, revise, and edit carefully.",
          "The course teaches students to analyze, revise, and edit carefully."
        ],
        "correctIndex": 3,
        "explanation": "Keep the coordinated verbs in matching form.",
        "tag": "Error check",
        "difficulty": "Advanced",
        "sequence": 59
      },
      {
        "prompt": "Which sentence would score highest on an editing task?",
        "options": [
          "The course teaches students to analyze, revising, and careful editing.",
          "The course teaches students analysis, revise, and edit carefully.",
          "The course teaches students to analyze, revise, and edit carefully.",
          "The course teaches students analyzing, revise, and edit carefully."
        ],
        "correctIndex": 2,
        "explanation": "Keep the coordinated verbs in matching form.",
        "tag": "Assessment",
        "difficulty": "Advanced",
        "sequence": 60
      }
    ],
    "advanced": [
      {
        "prompt": "Choose the best parallel or logical revision of \"He likes reading, to swim, and cycling.\"",
        "options": [
          "He likes reading, swimming, and cycling.",
          "He likes read, swimming, and cycling.",
          "He likes reading, swim, and cycling.",
          "He likes to reading, swimming, and cycle."
        ],
        "correctIndex": 0,
        "explanation": "Parallel items need matching grammatical form.",
        "tag": "Parallelism",
        "difficulty": "Review Challenge",
        "sequence": 1
      },
      {
        "prompt": "Which version is balanced and grammatically sound?",
        "options": [
          "He likes read, swimming, and cycling.",
          "He likes reading, swim, and cycling.",
          "He likes to reading, swimming, and cycle.",
          "He likes reading, swimming, and cycling."
        ],
        "correctIndex": 3,
        "explanation": "Parallel items need matching grammatical form.",
        "tag": "Balance",
        "difficulty": "Review Challenge",
        "sequence": 2
      },
      {
        "prompt": "A writer wants to fix \"He likes reading, to swim, and cycling.\". Which answer works best?",
        "options": [
          "He likes reading, swim, and cycling.",
          "He likes to reading, swimming, and cycle.",
          "He likes reading, swimming, and cycling.",
          "He likes read, swimming, and cycling."
        ],
        "correctIndex": 2,
        "explanation": "Parallel items need matching grammatical form.",
        "tag": "Revision",
        "difficulty": "Review Challenge",
        "sequence": 3
      },
      {
        "prompt": "Which option would you keep after editing for parallel structure?",
        "options": [
          "He likes reading, swimming, and cycling.",
          "He likes read, swimming, and cycling.",
          "He likes reading, swim, and cycling.",
          "He likes to reading, swimming, and cycle."
        ],
        "correctIndex": 0,
        "explanation": "Parallel items need matching grammatical form.",
        "tag": "Editing",
        "difficulty": "Review Challenge",
        "sequence": 4
      },
      {
        "prompt": "Which lesson rule applies?",
        "options": [
          "Parallelism is only about punctuation.",
          "Lists are clearer when the forms do not match.",
          "Parallel items need matching grammatical form.",
          "Comparisons should mix categories for variety."
        ],
        "correctIndex": 2,
        "explanation": "Parallel items need matching grammatical form.",
        "tag": "Explanation",
        "difficulty": "Review Challenge",
        "sequence": 5
      },
      {
        "prompt": "Select the standard English version of \"He likes reading, to swim, and cycling.\"",
        "options": [
          "He likes to reading, swimming, and cycle.",
          "He likes reading, swimming, and cycling.",
          "He likes read, swimming, and cycling.",
          "He likes reading, swim, and cycling."
        ],
        "correctIndex": 1,
        "explanation": "Parallel items need matching grammatical form.",
        "tag": "Standard form",
        "difficulty": "Review Challenge",
        "sequence": 6
      },
      {
        "prompt": "Which focus best matches the main learning challenge in \"Parallelism and Comparison\"?",
        "options": [
          "Identify the job each word does inside a sentence.",
          "Build complete sentences with subjects, verbs, and clear complements.",
          "Use a, an, the, some, and zero article correctly.",
          "Keep similar ideas in matching grammatical form."
        ],
        "correctIndex": 3,
        "explanation": "The focus of this lesson is: Keep similar ideas in matching grammatical form.",
        "tag": "Advanced focus",
        "difficulty": "Review Challenge",
        "sequence": 7
      },
      {
        "prompt": "Which rule belongs most directly to \"Parallelism and Comparison\"?",
        "options": [
          "Adjectives describe nouns; adverbs usually modify verbs, adjectives, or other adverbs.",
          "Determiners such as the, a, this, and many signal which noun you mean.",
          "When two or more items are coordinated, keep them in the same grammatical form.",
          "A noun names a person, place, thing, or idea, while a verb shows action or state."
        ],
        "correctIndex": 2,
        "explanation": "When two or more items are coordinated, keep them in the same grammatical form.",
        "tag": "Rule distinction",
        "difficulty": "Review Challenge",
        "sequence": 8
      },
      {
        "prompt": "Which editing warning is most important to remember in \"Parallelism and Comparison\"?",
        "options": [
          {
            "wrong": "The news is exciting. She is exciting.",
            "right": "The news is exciting. She is excited.",
            "note": "Use the -ed adjective for the person's feeling, -ing for the thing's quality."
          },
          {
            "wrong": "She loves reading, writing, and to teach.",
            "right": "She loves reading, writing, and teaching.",
            "note": "Don't mix -ing with infinitives; keep all three forms the same."
          },
          {
            "wrong": "I have a friendly meeting tomorrow.",
            "right": "I have a friendly meeting tomorrow.",
            "note": "Friendly is an adjective here, not an adverb, so no -ly suffix needed."
          },
          {
            "wrong": "He ran quick to the store.",
            "right": "He ran quickly to the store.",
            "note": "Adverbs modify verbs; use quickly, not quick."
          }
        ],
        "correctIndex": 1,
        "explanation": {
          "wrong": "She loves reading, writing, and to teach.",
          "right": "She loves reading, writing, and teaching.",
          "note": "Don't mix -ing with infinitives; keep all three forms the same."
        },
        "tag": "Pitfall check",
        "difficulty": "Review Challenge",
        "sequence": 9
      },
      {
        "prompt": "Which practice move best extends the lesson after you finish the core explanation?",
        "options": [
          "Exercise 1 - Lists: Identify the pattern in ten lists and fix non-parallel items.",
          "Exercise 1 - Labeling: Read a paragraph and mark each word with its part of speech (noun, verb, adj, adv, etc.)",
          "Exercise 2 - Identification: Identify the target word class in each sentence: 'Find the adverb that modifies ran.'",
          "Exercise 3 - Word Transformation: Transform words to different classes (run→runner→running; quick→quickly)"
        ],
        "correctIndex": 0,
        "explanation": "Exercise 1 - Lists: Identify the pattern in ten lists and fix non-parallel items.",
        "tag": "Practice transfer",
        "difficulty": "Review Challenge",
        "sequence": 10
      },
      {
        "prompt": "Which explanation best matches this model sentence from \"Parallelism and Comparison\"? \"The course teaches students to analyze, to revise, and to edit.\"",
        "options": [
          "student (noun), curious (adjective), quickly (adverb), opened (verb)",
          "She (pronoun), carefully (adverb), explained (verb), importance (noun)",
          "Although (conjunction), raining (verb form), we (pronoun), near (preposition), mountain (noun)",
          "All three use infinitive form (to + base verb)."
        ],
        "correctIndex": 3,
        "explanation": "All three use infinitive form (to + base verb).",
        "tag": "Example analysis",
        "difficulty": "Review Challenge",
        "sequence": 11
      },
      {
        "prompt": "Which objective belongs to \"Parallelism and Comparison\"?",
        "options": [
          "Separate form from function when a word changes category by use.",
          "Explain why the same word can behave differently across contexts.",
          "Recognize unbalanced forms in coordination and lists.",
          "Recognize the major word classes in authentic sentences."
        ],
        "correctIndex": 2,
        "explanation": "Recognize unbalanced forms in coordination and lists.",
        "tag": "Objective check",
        "difficulty": "Review Challenge",
        "sequence": 12
      },
      {
        "prompt": "Which portfolio task best fits the module that contains \"Parallelism and Comparison\"?",
        "options": [
          "Edit an old paragraph only for sentence-level accuracy and annotate each correction.",
          "Revise a formal paragraph for punctuation, parallelism, and concise tone.",
          "Write a 150-word self-introduction and label nouns, verbs, articles, and sentence types.",
          "Write a three-part narrative using present, past, and future meaning accurately."
        ],
        "correctIndex": 1,
        "explanation": "Revise a formal paragraph for punctuation, parallelism, and concise tone.",
        "tag": "Portfolio transfer",
        "difficulty": "Review Challenge",
        "sequence": 13
      },
      {
        "prompt": "Which module description best fits the context of \"Parallelism and Comparison\"?",
        "options": [
          "Turn grammatical accuracy into polished writing through punctuation, balance, comparison, and concise style.",
          "Build a clean base in word classes, sentence architecture, and noun phrases before moving into more advanced control.",
          "Learn how English grammar maps routine, action-in-progress, experience, finished time, future reference, and modal meaning.",
          "Strengthen agreement, pronoun reference, auxiliary use, pattern control, and active-passive choices."
        ],
        "correctIndex": 0,
        "explanation": "Turn grammatical accuracy into polished writing through punctuation, balance, comparison, and concise style.",
        "tag": "Module alignment",
        "difficulty": "Review Challenge",
        "sequence": 14
      },
      {
        "prompt": "Which reading insight best matches the story work in \"Parallelism and Comparison\"?",
        "options": [
          "Market (noun), Saturday (noun), Maya (noun) are the main subjects and objects.",
          "Visits, walks, looking, shows, answer, select, stands are action verbs showing what people do.",
          "Busy, colorful, fresh, ripe describe nouns (busy market, colorful stalls).",
          "Lists with parallel structure are easier to scan and remember (three -ing forms)."
        ],
        "correctIndex": 3,
        "explanation": "Lists with parallel structure are easier to scan and remember (three -ing forms).",
        "tag": "Story analysis",
        "difficulty": "Review Challenge",
        "sequence": 15
      },
      {
        "prompt": "Which option keeps similar ideas in matching form?",
        "options": [
          "He likes to reading, swimming, and cycle.",
          "He likes reading, swimming, and cycling.",
          "He likes read, swimming, and cycling.",
          "He likes reading, swim, and cycling."
        ],
        "correctIndex": 1,
        "explanation": "Parallel items need matching grammatical form.",
        "tag": "Matching form",
        "difficulty": "Review Challenge",
        "sequence": 16
      },
      {
        "prompt": "Choose the sentence with the clearest comparison or list structure.",
        "options": [
          "He likes read, swimming, and cycling.",
          "He likes reading, swim, and cycling.",
          "He likes to reading, swimming, and cycle.",
          "He likes reading, swimming, and cycling."
        ],
        "correctIndex": 3,
        "explanation": "Parallel items need matching grammatical form.",
        "tag": "Clarity",
        "difficulty": "Review Challenge",
        "sequence": 17
      },
      {
        "prompt": "Which answer avoids a faulty comparison or mixed structure?",
        "options": [
          "He likes reading, swimming, and cycling.",
          "He likes read, swimming, and cycling.",
          "He likes reading, swim, and cycling.",
          "He likes to reading, swimming, and cycle."
        ],
        "correctIndex": 0,
        "explanation": "Parallel items need matching grammatical form.",
        "tag": "Error check",
        "difficulty": "Review Challenge",
        "sequence": 18
      },
      {
        "prompt": "Which sentence would score highest on an editing task?",
        "options": [
          "He likes read, swimming, and cycling.",
          "He likes reading, swim, and cycling.",
          "He likes to reading, swimming, and cycle.",
          "He likes reading, swimming, and cycling."
        ],
        "correctIndex": 3,
        "explanation": "Parallel items need matching grammatical form.",
        "tag": "Assessment",
        "difficulty": "Review Challenge",
        "sequence": 19
      },
      {
        "prompt": "Choose the best parallel or logical revision of \"The workshop focused on grammar, writing clearly, and revision.\"",
        "options": [
          "The workshop focused on grammar, writing clearly, and revising.",
          "The workshop focused on grammar, to write clearly, and revision.",
          "The workshop focused on grammar and writing clearly revision.",
          "The workshop focused on grammar, clear writing, and revision."
        ],
        "correctIndex": 3,
        "explanation": "The list items should be balanced.",
        "tag": "Parallelism",
        "difficulty": "Review Challenge",
        "sequence": 20
      }
    ]
  },
  "concision-formal-tone": {
    "standard": [
      {
        "prompt": "Choose the most concise or formal revision of \"We made a decision to postpone the event.\"",
        "options": [
          "We decided to postpone the event.",
          "We made the event postponed.",
          "There was a decision with regard to postponing the event.",
          "We did a postponement decision."
        ],
        "correctIndex": 0,
        "explanation": "A direct verb is usually more concise than a weak verb plus noun.",
        "tag": "Concision",
        "difficulty": "Basic",
        "sequence": 1
      },
      {
        "prompt": "Which version is strongest for academic or professional writing?",
        "options": [
          "We made the event postponed.",
          "There was a decision with regard to postponing the event.",
          "We did a postponement decision.",
          "We decided to postpone the event."
        ],
        "correctIndex": 3,
        "explanation": "A direct verb is usually more concise than a weak verb plus noun.",
        "tag": "Formal tone",
        "difficulty": "Basic",
        "sequence": 2
      },
      {
        "prompt": "A writer wants to cut clutter from \"We made a decision to postpone the event.\". Which answer is best?",
        "options": [
          "There was a decision with regard to postponing the event.",
          "We did a postponement decision.",
          "We decided to postpone the event.",
          "We made the event postponed."
        ],
        "correctIndex": 2,
        "explanation": "A direct verb is usually more concise than a weak verb plus noun.",
        "tag": "Revision",
        "difficulty": "Basic",
        "sequence": 3
      },
      {
        "prompt": "Select the clearest revision.",
        "options": [
          "We did a postponement decision.",
          "We decided to postpone the event.",
          "We made the event postponed.",
          "There was a decision with regard to postponing the event."
        ],
        "correctIndex": 1,
        "explanation": "A direct verb is usually more concise than a weak verb plus noun.",
        "tag": "Clarity",
        "difficulty": "Basic",
        "sequence": 4
      },
      {
        "prompt": "Which option would you keep after editing for precision?",
        "options": [
          "We decided to postpone the event.",
          "We made the event postponed.",
          "There was a decision with regard to postponing the event.",
          "We did a postponement decision."
        ],
        "correctIndex": 0,
        "explanation": "A direct verb is usually more concise than a weak verb plus noun.",
        "tag": "Editing",
        "difficulty": "Basic",
        "sequence": 5
      },
      {
        "prompt": "Which option removes redundancy or filler most effectively?",
        "options": [
          "We made the event postponed.",
          "There was a decision with regard to postponing the event.",
          "We did a postponement decision.",
          "We decided to postpone the event."
        ],
        "correctIndex": 3,
        "explanation": "A direct verb is usually more concise than a weak verb plus noun.",
        "tag": "Redundancy",
        "difficulty": "Basic",
        "sequence": 6
      },
      {
        "prompt": "Which lesson rule applies?",
        "options": [
          "Weak verb plus noun is always stronger than one clear verb.",
          "Repeating the same meaning makes formal writing clearer.",
          "A direct verb is usually more concise than a weak verb plus noun.",
          "Formal style needs more filler words."
        ],
        "correctIndex": 2,
        "explanation": "A direct verb is usually more concise than a weak verb plus noun.",
        "tag": "Explanation",
        "difficulty": "Basic",
        "sequence": 7
      },
      {
        "prompt": "Choose the sentence that sounds appropriately formal.",
        "options": [
          "We did a postponement decision.",
          "We decided to postpone the event.",
          "We made the event postponed.",
          "There was a decision with regard to postponing the event."
        ],
        "correctIndex": 1,
        "explanation": "A direct verb is usually more concise than a weak verb plus noun.",
        "tag": "Register",
        "difficulty": "Basic",
        "sequence": 8
      },
      {
        "prompt": "Which revision keeps the meaning but improves the style?",
        "options": [
          "We decided to postpone the event.",
          "We made the event postponed.",
          "There was a decision with regard to postponing the event.",
          "We did a postponement decision."
        ],
        "correctIndex": 0,
        "explanation": "A direct verb is usually more concise than a weak verb plus noun.",
        "tag": "Style",
        "difficulty": "Basic",
        "sequence": 9
      },
      {
        "prompt": "Which answer best fits the lesson on concision?",
        "options": [
          "We made the event postponed.",
          "There was a decision with regard to postponing the event.",
          "We did a postponement decision.",
          "We decided to postpone the event."
        ],
        "correctIndex": 3,
        "explanation": "A direct verb is usually more concise than a weak verb plus noun.",
        "tag": "Lesson focus",
        "difficulty": "Basic",
        "sequence": 10
      },
      {
        "prompt": "Choose the most concise or formal revision of \"The reason is because the schedule changed.\"",
        "options": [
          "The reason is because the schedule changed.",
          "The reason for the schedule changed is that.",
          "Because the schedule changed is the reason.",
          "The reason is that the schedule changed."
        ],
        "correctIndex": 3,
        "explanation": "Reason and because together create redundancy.",
        "tag": "Concision",
        "difficulty": "Basic",
        "sequence": 11
      },
      {
        "prompt": "Which version is strongest for academic or professional writing?",
        "options": [
          "The reason for the schedule changed is that.",
          "Because the schedule changed is the reason.",
          "The reason is that the schedule changed.",
          "The reason is because the schedule changed."
        ],
        "correctIndex": 2,
        "explanation": "Reason and because together create redundancy.",
        "tag": "Formal tone",
        "difficulty": "Basic",
        "sequence": 12
      },
      {
        "prompt": "A writer wants to cut clutter from \"The reason is because the schedule changed.\". Which answer is best?",
        "options": [
          "Because the schedule changed is the reason.",
          "The reason is that the schedule changed.",
          "The reason is because the schedule changed.",
          "The reason for the schedule changed is that."
        ],
        "correctIndex": 1,
        "explanation": "Reason and because together create redundancy.",
        "tag": "Revision",
        "difficulty": "Basic",
        "sequence": 13
      },
      {
        "prompt": "Select the clearest revision.",
        "options": [
          "The reason is that the schedule changed.",
          "The reason is because the schedule changed.",
          "The reason for the schedule changed is that.",
          "Because the schedule changed is the reason."
        ],
        "correctIndex": 0,
        "explanation": "Reason and because together create redundancy.",
        "tag": "Clarity",
        "difficulty": "Basic",
        "sequence": 14
      },
      {
        "prompt": "Which option would you keep after editing for precision?",
        "options": [
          "The reason is because the schedule changed.",
          "The reason for the schedule changed is that.",
          "Because the schedule changed is the reason.",
          "The reason is that the schedule changed."
        ],
        "correctIndex": 3,
        "explanation": "Reason and because together create redundancy.",
        "tag": "Editing",
        "difficulty": "Basic",
        "sequence": 15
      },
      {
        "prompt": "Which option removes redundancy or filler most effectively?",
        "options": [
          "The reason for the schedule changed is that.",
          "Because the schedule changed is the reason.",
          "The reason is that the schedule changed.",
          "The reason is because the schedule changed."
        ],
        "correctIndex": 2,
        "explanation": "Reason and because together create redundancy.",
        "tag": "Redundancy",
        "difficulty": "Basic",
        "sequence": 16
      },
      {
        "prompt": "Which lesson rule applies?",
        "options": [
          "Repeating the same meaning makes formal writing clearer.",
          "Reason and because together create redundancy.",
          "Formal style needs more filler words.",
          "Weak verb plus noun is always stronger than one clear verb."
        ],
        "correctIndex": 1,
        "explanation": "Reason and because together create redundancy.",
        "tag": "Explanation",
        "difficulty": "Basic",
        "sequence": 17
      },
      {
        "prompt": "Choose the sentence that sounds appropriately formal.",
        "options": [
          "The reason is that the schedule changed.",
          "The reason is because the schedule changed.",
          "The reason for the schedule changed is that.",
          "Because the schedule changed is the reason."
        ],
        "correctIndex": 0,
        "explanation": "Reason and because together create redundancy.",
        "tag": "Register",
        "difficulty": "Basic",
        "sequence": 18
      },
      {
        "prompt": "Which revision keeps the meaning but improves the style?",
        "options": [
          "The reason is because the schedule changed.",
          "The reason for the schedule changed is that.",
          "Because the schedule changed is the reason.",
          "The reason is that the schedule changed."
        ],
        "correctIndex": 3,
        "explanation": "Reason and because together create redundancy.",
        "tag": "Style",
        "difficulty": "Basic",
        "sequence": 19
      },
      {
        "prompt": "Which answer best fits the lesson on concision?",
        "options": [
          "The reason for the schedule changed is that.",
          "Because the schedule changed is the reason.",
          "The reason is that the schedule changed.",
          "The reason is because the schedule changed."
        ],
        "correctIndex": 2,
        "explanation": "Reason and because together create redundancy.",
        "tag": "Lesson focus",
        "difficulty": "Basic",
        "sequence": 20
      },
      {
        "prompt": "Choose the most concise or formal revision of \"The results were kind of bad.\"",
        "options": [
          "The results were not okay in a way.",
          "The results were bad kind of.",
          "The results were unsatisfactory.",
          "The results were super bad."
        ],
        "correctIndex": 2,
        "explanation": "Formal tone favors precise vocabulary over vague casual wording.",
        "tag": "Concision",
        "difficulty": "Intermediate",
        "sequence": 21
      },
      {
        "prompt": "Which version is strongest for academic or professional writing?",
        "options": [
          "The results were bad kind of.",
          "The results were unsatisfactory.",
          "The results were super bad.",
          "The results were not okay in a way."
        ],
        "correctIndex": 1,
        "explanation": "Formal tone favors precise vocabulary over vague casual wording.",
        "tag": "Formal tone",
        "difficulty": "Intermediate",
        "sequence": 22
      },
      {
        "prompt": "A writer wants to cut clutter from \"The results were kind of bad.\". Which answer is best?",
        "options": [
          "The results were unsatisfactory.",
          "The results were super bad.",
          "The results were not okay in a way.",
          "The results were bad kind of."
        ],
        "correctIndex": 0,
        "explanation": "Formal tone favors precise vocabulary over vague casual wording.",
        "tag": "Revision",
        "difficulty": "Intermediate",
        "sequence": 23
      },
      {
        "prompt": "Select the clearest revision.",
        "options": [
          "The results were super bad.",
          "The results were not okay in a way.",
          "The results were bad kind of.",
          "The results were unsatisfactory."
        ],
        "correctIndex": 3,
        "explanation": "Formal tone favors precise vocabulary over vague casual wording.",
        "tag": "Clarity",
        "difficulty": "Intermediate",
        "sequence": 24
      },
      {
        "prompt": "Which option would you keep after editing for precision?",
        "options": [
          "The results were not okay in a way.",
          "The results were bad kind of.",
          "The results were unsatisfactory.",
          "The results were super bad."
        ],
        "correctIndex": 2,
        "explanation": "Formal tone favors precise vocabulary over vague casual wording.",
        "tag": "Editing",
        "difficulty": "Intermediate",
        "sequence": 25
      },
      {
        "prompt": "Which option removes redundancy or filler most effectively?",
        "options": [
          "The results were bad kind of.",
          "The results were unsatisfactory.",
          "The results were super bad.",
          "The results were not okay in a way."
        ],
        "correctIndex": 1,
        "explanation": "Formal tone favors precise vocabulary over vague casual wording.",
        "tag": "Redundancy",
        "difficulty": "Intermediate",
        "sequence": 26
      },
      {
        "prompt": "Which lesson rule applies?",
        "options": [
          "Formal tone favors precise vocabulary over vague casual wording.",
          "Formal style needs more filler words.",
          "Weak verb plus noun is always stronger than one clear verb.",
          "Repeating the same meaning makes formal writing clearer."
        ],
        "correctIndex": 0,
        "explanation": "Formal tone favors precise vocabulary over vague casual wording.",
        "tag": "Explanation",
        "difficulty": "Intermediate",
        "sequence": 27
      },
      {
        "prompt": "Choose the sentence that sounds appropriately formal.",
        "options": [
          "The results were super bad.",
          "The results were not okay in a way.",
          "The results were bad kind of.",
          "The results were unsatisfactory."
        ],
        "correctIndex": 3,
        "explanation": "Formal tone favors precise vocabulary over vague casual wording.",
        "tag": "Register",
        "difficulty": "Intermediate",
        "sequence": 28
      },
      {
        "prompt": "Which revision keeps the meaning but improves the style?",
        "options": [
          "The results were not okay in a way.",
          "The results were bad kind of.",
          "The results were unsatisfactory.",
          "The results were super bad."
        ],
        "correctIndex": 2,
        "explanation": "Formal tone favors precise vocabulary over vague casual wording.",
        "tag": "Style",
        "difficulty": "Intermediate",
        "sequence": 29
      },
      {
        "prompt": "Which answer best fits the lesson on concision?",
        "options": [
          "The results were bad kind of.",
          "The results were unsatisfactory.",
          "The results were super bad.",
          "The results were not okay in a way."
        ],
        "correctIndex": 1,
        "explanation": "Formal tone favors precise vocabulary over vague casual wording.",
        "tag": "Lesson focus",
        "difficulty": "Intermediate",
        "sequence": 30
      },
      {
        "prompt": "Choose the most concise or formal revision of \"There are many students who are in need of support.\"",
        "options": [
          "There are many students who need support.",
          "Many students need support.",
          "There are many students in need of support.",
          "Many students are in need of support."
        ],
        "correctIndex": 1,
        "explanation": "Cut empty openers and choose stronger verbs.",
        "tag": "Concision",
        "difficulty": "Intermediate",
        "sequence": 31
      },
      {
        "prompt": "Which version is strongest for academic or professional writing?",
        "options": [
          "Many students need support.",
          "There are many students in need of support.",
          "Many students are in need of support.",
          "There are many students who need support."
        ],
        "correctIndex": 0,
        "explanation": "Cut empty openers and choose stronger verbs.",
        "tag": "Formal tone",
        "difficulty": "Intermediate",
        "sequence": 32
      },
      {
        "prompt": "A writer wants to cut clutter from \"There are many students who are in need of support.\". Which answer is best?",
        "options": [
          "There are many students in need of support.",
          "Many students are in need of support.",
          "There are many students who need support.",
          "Many students need support."
        ],
        "correctIndex": 3,
        "explanation": "Cut empty openers and choose stronger verbs.",
        "tag": "Revision",
        "difficulty": "Intermediate",
        "sequence": 33
      },
      {
        "prompt": "Select the clearest revision.",
        "options": [
          "Many students are in need of support.",
          "There are many students who need support.",
          "Many students need support.",
          "There are many students in need of support."
        ],
        "correctIndex": 2,
        "explanation": "Cut empty openers and choose stronger verbs.",
        "tag": "Clarity",
        "difficulty": "Intermediate",
        "sequence": 34
      },
      {
        "prompt": "Which option would you keep after editing for precision?",
        "options": [
          "There are many students who need support.",
          "Many students need support.",
          "There are many students in need of support.",
          "Many students are in need of support."
        ],
        "correctIndex": 1,
        "explanation": "Cut empty openers and choose stronger verbs.",
        "tag": "Editing",
        "difficulty": "Intermediate",
        "sequence": 35
      },
      {
        "prompt": "Which option removes redundancy or filler most effectively?",
        "options": [
          "Many students need support.",
          "There are many students in need of support.",
          "Many students are in need of support.",
          "There are many students who need support."
        ],
        "correctIndex": 0,
        "explanation": "Cut empty openers and choose stronger verbs.",
        "tag": "Redundancy",
        "difficulty": "Intermediate",
        "sequence": 36
      },
      {
        "prompt": "Which lesson rule applies?",
        "options": [
          "Formal style needs more filler words.",
          "Weak verb plus noun is always stronger than one clear verb.",
          "Repeating the same meaning makes formal writing clearer.",
          "Cut empty openers and choose stronger verbs."
        ],
        "correctIndex": 3,
        "explanation": "Cut empty openers and choose stronger verbs.",
        "tag": "Explanation",
        "difficulty": "Intermediate",
        "sequence": 37
      },
      {
        "prompt": "Choose the sentence that sounds appropriately formal.",
        "options": [
          "Many students are in need of support.",
          "There are many students who need support.",
          "Many students need support.",
          "There are many students in need of support."
        ],
        "correctIndex": 2,
        "explanation": "Cut empty openers and choose stronger verbs.",
        "tag": "Register",
        "difficulty": "Intermediate",
        "sequence": 38
      },
      {
        "prompt": "Which revision keeps the meaning but improves the style?",
        "options": [
          "There are many students who need support.",
          "Many students need support.",
          "There are many students in need of support.",
          "Many students are in need of support."
        ],
        "correctIndex": 1,
        "explanation": "Cut empty openers and choose stronger verbs.",
        "tag": "Style",
        "difficulty": "Intermediate",
        "sequence": 39
      },
      {
        "prompt": "Which answer best fits the lesson on concision?",
        "options": [
          "Many students need support.",
          "There are many students in need of support.",
          "Many students are in need of support.",
          "There are many students who need support."
        ],
        "correctIndex": 0,
        "explanation": "Cut empty openers and choose stronger verbs.",
        "tag": "Lesson focus",
        "difficulty": "Intermediate",
        "sequence": 40
      },
      {
        "prompt": "Choose the most concise or formal revision of \"Basically, the report is actually really important.\"",
        "options": [
          "The report is important.",
          "The report is really important.",
          "Basically, the report is important.",
          "The report is actually very important."
        ],
        "correctIndex": 0,
        "explanation": "Remove stacked fillers unless they serve a real rhetorical purpose.",
        "tag": "Concision",
        "difficulty": "Advanced",
        "sequence": 41
      },
      {
        "prompt": "Which version is strongest for academic or professional writing?",
        "options": [
          "The report is really important.",
          "Basically, the report is important.",
          "The report is actually very important.",
          "The report is important."
        ],
        "correctIndex": 3,
        "explanation": "Remove stacked fillers unless they serve a real rhetorical purpose.",
        "tag": "Formal tone",
        "difficulty": "Advanced",
        "sequence": 42
      },
      {
        "prompt": "A writer wants to cut clutter from \"Basically, the report is actually really important.\". Which answer is best?",
        "options": [
          "Basically, the report is important.",
          "The report is actually very important.",
          "The report is important.",
          "The report is really important."
        ],
        "correctIndex": 2,
        "explanation": "Remove stacked fillers unless they serve a real rhetorical purpose.",
        "tag": "Revision",
        "difficulty": "Advanced",
        "sequence": 43
      },
      {
        "prompt": "Select the clearest revision.",
        "options": [
          "The report is actually very important.",
          "The report is important.",
          "The report is really important.",
          "Basically, the report is important."
        ],
        "correctIndex": 1,
        "explanation": "Remove stacked fillers unless they serve a real rhetorical purpose.",
        "tag": "Clarity",
        "difficulty": "Advanced",
        "sequence": 44
      },
      {
        "prompt": "Which option would you keep after editing for precision?",
        "options": [
          "The report is important.",
          "The report is really important.",
          "Basically, the report is important.",
          "The report is actually very important."
        ],
        "correctIndex": 0,
        "explanation": "Remove stacked fillers unless they serve a real rhetorical purpose.",
        "tag": "Editing",
        "difficulty": "Advanced",
        "sequence": 45
      },
      {
        "prompt": "Which option removes redundancy or filler most effectively?",
        "options": [
          "The report is really important.",
          "Basically, the report is important.",
          "The report is actually very important.",
          "The report is important."
        ],
        "correctIndex": 3,
        "explanation": "Remove stacked fillers unless they serve a real rhetorical purpose.",
        "tag": "Redundancy",
        "difficulty": "Advanced",
        "sequence": 46
      },
      {
        "prompt": "Which lesson rule applies?",
        "options": [
          "Weak verb plus noun is always stronger than one clear verb.",
          "Repeating the same meaning makes formal writing clearer.",
          "Remove stacked fillers unless they serve a real rhetorical purpose.",
          "Formal style needs more filler words."
        ],
        "correctIndex": 2,
        "explanation": "Remove stacked fillers unless they serve a real rhetorical purpose.",
        "tag": "Explanation",
        "difficulty": "Advanced",
        "sequence": 47
      },
      {
        "prompt": "Choose the sentence that sounds appropriately formal.",
        "options": [
          "The report is actually very important.",
          "The report is important.",
          "The report is really important.",
          "Basically, the report is important."
        ],
        "correctIndex": 1,
        "explanation": "Remove stacked fillers unless they serve a real rhetorical purpose.",
        "tag": "Register",
        "difficulty": "Advanced",
        "sequence": 48
      },
      {
        "prompt": "Which revision keeps the meaning but improves the style?",
        "options": [
          "The report is important.",
          "The report is really important.",
          "Basically, the report is important.",
          "The report is actually very important."
        ],
        "correctIndex": 0,
        "explanation": "Remove stacked fillers unless they serve a real rhetorical purpose.",
        "tag": "Style",
        "difficulty": "Advanced",
        "sequence": 49
      },
      {
        "prompt": "Which answer best fits the lesson on concision?",
        "options": [
          "The report is really important.",
          "Basically, the report is important.",
          "The report is actually very important.",
          "The report is important."
        ],
        "correctIndex": 3,
        "explanation": "Remove stacked fillers unless they serve a real rhetorical purpose.",
        "tag": "Lesson focus",
        "difficulty": "Advanced",
        "sequence": 50
      },
      {
        "prompt": "Choose the most concise or formal revision of \"In my opinion, I think the policy should change.\"",
        "options": [
          "In my opinion, I believe the policy should change.",
          "It is my opinion that the policy should change.",
          "I think, in my opinion, the policy should change.",
          "I think the policy should change."
        ],
        "correctIndex": 3,
        "explanation": "The sentence repeats the same stance marker twice.",
        "tag": "Concision",
        "difficulty": "Advanced",
        "sequence": 51
      },
      {
        "prompt": "Which version is strongest for academic or professional writing?",
        "options": [
          "It is my opinion that the policy should change.",
          "I think, in my opinion, the policy should change.",
          "I think the policy should change.",
          "In my opinion, I believe the policy should change."
        ],
        "correctIndex": 2,
        "explanation": "The sentence repeats the same stance marker twice.",
        "tag": "Formal tone",
        "difficulty": "Advanced",
        "sequence": 52
      },
      {
        "prompt": "A writer wants to cut clutter from \"In my opinion, I think the policy should change.\". Which answer is best?",
        "options": [
          "I think, in my opinion, the policy should change.",
          "I think the policy should change.",
          "In my opinion, I believe the policy should change.",
          "It is my opinion that the policy should change."
        ],
        "correctIndex": 1,
        "explanation": "The sentence repeats the same stance marker twice.",
        "tag": "Revision",
        "difficulty": "Advanced",
        "sequence": 53
      },
      {
        "prompt": "Select the clearest revision.",
        "options": [
          "I think the policy should change.",
          "In my opinion, I believe the policy should change.",
          "It is my opinion that the policy should change.",
          "I think, in my opinion, the policy should change."
        ],
        "correctIndex": 0,
        "explanation": "The sentence repeats the same stance marker twice.",
        "tag": "Clarity",
        "difficulty": "Advanced",
        "sequence": 54
      },
      {
        "prompt": "Which option would you keep after editing for precision?",
        "options": [
          "In my opinion, I believe the policy should change.",
          "It is my opinion that the policy should change.",
          "I think, in my opinion, the policy should change.",
          "I think the policy should change."
        ],
        "correctIndex": 3,
        "explanation": "The sentence repeats the same stance marker twice.",
        "tag": "Editing",
        "difficulty": "Advanced",
        "sequence": 55
      },
      {
        "prompt": "Which option removes redundancy or filler most effectively?",
        "options": [
          "It is my opinion that the policy should change.",
          "I think, in my opinion, the policy should change.",
          "I think the policy should change.",
          "In my opinion, I believe the policy should change."
        ],
        "correctIndex": 2,
        "explanation": "The sentence repeats the same stance marker twice.",
        "tag": "Redundancy",
        "difficulty": "Advanced",
        "sequence": 56
      },
      {
        "prompt": "Which lesson rule applies?",
        "options": [
          "Repeating the same meaning makes formal writing clearer.",
          "The sentence repeats the same stance marker twice.",
          "Formal style needs more filler words.",
          "Weak verb plus noun is always stronger than one clear verb."
        ],
        "correctIndex": 1,
        "explanation": "The sentence repeats the same stance marker twice.",
        "tag": "Explanation",
        "difficulty": "Advanced",
        "sequence": 57
      },
      {
        "prompt": "Choose the sentence that sounds appropriately formal.",
        "options": [
          "I think the policy should change.",
          "In my opinion, I believe the policy should change.",
          "It is my opinion that the policy should change.",
          "I think, in my opinion, the policy should change."
        ],
        "correctIndex": 0,
        "explanation": "The sentence repeats the same stance marker twice.",
        "tag": "Register",
        "difficulty": "Advanced",
        "sequence": 58
      },
      {
        "prompt": "Which revision keeps the meaning but improves the style?",
        "options": [
          "In my opinion, I believe the policy should change.",
          "It is my opinion that the policy should change.",
          "I think, in my opinion, the policy should change.",
          "I think the policy should change."
        ],
        "correctIndex": 3,
        "explanation": "The sentence repeats the same stance marker twice.",
        "tag": "Style",
        "difficulty": "Advanced",
        "sequence": 59
      },
      {
        "prompt": "Which answer best fits the lesson on concision?",
        "options": [
          "It is my opinion that the policy should change.",
          "I think, in my opinion, the policy should change.",
          "I think the policy should change.",
          "In my opinion, I believe the policy should change."
        ],
        "correctIndex": 2,
        "explanation": "The sentence repeats the same stance marker twice.",
        "tag": "Lesson focus",
        "difficulty": "Advanced",
        "sequence": 60
      }
    ],
    "advanced": [
      {
        "prompt": "Choose the most concise or formal revision of \"We made a decision to postpone the event.\"",
        "options": [
          "We decided to postpone the event.",
          "We made the event postponed.",
          "There was a decision with regard to postponing the event.",
          "We did a postponement decision."
        ],
        "correctIndex": 0,
        "explanation": "A direct verb is usually more concise than a weak verb plus noun.",
        "tag": "Concision",
        "difficulty": "Review Challenge",
        "sequence": 1
      },
      {
        "prompt": "A writer wants to cut clutter from \"We made a decision to postpone the event.\". Which answer is best?",
        "options": [
          "There was a decision with regard to postponing the event.",
          "We did a postponement decision.",
          "We decided to postpone the event.",
          "We made the event postponed."
        ],
        "correctIndex": 2,
        "explanation": "A direct verb is usually more concise than a weak verb plus noun.",
        "tag": "Revision",
        "difficulty": "Review Challenge",
        "sequence": 2
      },
      {
        "prompt": "Select the clearest revision.",
        "options": [
          "We did a postponement decision.",
          "We decided to postpone the event.",
          "We made the event postponed.",
          "There was a decision with regard to postponing the event."
        ],
        "correctIndex": 1,
        "explanation": "A direct verb is usually more concise than a weak verb plus noun.",
        "tag": "Clarity",
        "difficulty": "Review Challenge",
        "sequence": 3
      },
      {
        "prompt": "Which option would you keep after editing for precision?",
        "options": [
          "We decided to postpone the event.",
          "We made the event postponed.",
          "There was a decision with regard to postponing the event.",
          "We did a postponement decision."
        ],
        "correctIndex": 0,
        "explanation": "A direct verb is usually more concise than a weak verb plus noun.",
        "tag": "Editing",
        "difficulty": "Review Challenge",
        "sequence": 4
      },
      {
        "prompt": "Which lesson rule applies?",
        "options": [
          "Weak verb plus noun is always stronger than one clear verb.",
          "Repeating the same meaning makes formal writing clearer.",
          "A direct verb is usually more concise than a weak verb plus noun.",
          "Formal style needs more filler words."
        ],
        "correctIndex": 2,
        "explanation": "A direct verb is usually more concise than a weak verb plus noun.",
        "tag": "Explanation",
        "difficulty": "Review Challenge",
        "sequence": 5
      },
      {
        "prompt": "Which revision keeps the meaning but improves the style?",
        "options": [
          "We decided to postpone the event.",
          "We made the event postponed.",
          "There was a decision with regard to postponing the event.",
          "We did a postponement decision."
        ],
        "correctIndex": 0,
        "explanation": "A direct verb is usually more concise than a weak verb plus noun.",
        "tag": "Style",
        "difficulty": "Review Challenge",
        "sequence": 6
      },
      {
        "prompt": "Which focus best matches the main learning challenge in \"Concision and Formal Tone\"?",
        "options": [
          "Identify the job each word does inside a sentence.",
          "Build complete sentences with subjects, verbs, and clear complements.",
          "Use a, an, the, some, and zero article correctly.",
          "Write with precision without sounding abrupt or repetitive."
        ],
        "correctIndex": 3,
        "explanation": "The focus of this lesson is: Write with precision without sounding abrupt or repetitive.",
        "tag": "Advanced focus",
        "difficulty": "Review Challenge",
        "sequence": 7
      },
      {
        "prompt": "Which rule belongs most directly to \"Concision and Formal Tone\"?",
        "options": [
          "Adjectives describe nouns; adverbs usually modify verbs, adjectives, or other adverbs.",
          "Determiners such as the, a, this, and many signal which noun you mean.",
          "Prefer specific verbs over weak verb plus noun combinations when possible.",
          "A noun names a person, place, thing, or idea, while a verb shows action or state."
        ],
        "correctIndex": 2,
        "explanation": "Prefer specific verbs over weak verb plus noun combinations when possible.",
        "tag": "Rule distinction",
        "difficulty": "Review Challenge",
        "sequence": 8
      },
      {
        "prompt": "Which editing warning is most important to remember in \"Concision and Formal Tone\"?",
        "options": [
          {
            "wrong": "The news is exciting. She is exciting.",
            "right": "The news is exciting. She is excited.",
            "note": "Use the -ed adjective for the person's feeling, -ing for the thing's quality."
          },
          {
            "wrong": "It is important to note that the results are significant.",
            "right": "The results are significant.",
            "note": "'It is important to note that' adds no meaning; cut it."
          },
          {
            "wrong": "I have a friendly meeting tomorrow.",
            "right": "I have a friendly meeting tomorrow.",
            "note": "Friendly is an adjective here, not an adverb, so no -ly suffix needed."
          },
          {
            "wrong": "He ran quick to the store.",
            "right": "He ran quickly to the store.",
            "note": "Adverbs modify verbs; use quickly, not quick."
          }
        ],
        "correctIndex": 1,
        "explanation": {
          "wrong": "It is important to note that the results are significant.",
          "right": "The results are significant.",
          "note": "'It is important to note that' adds no meaning; cut it."
        },
        "tag": "Pitfall check",
        "difficulty": "Review Challenge",
        "sequence": 9
      },
      {
        "prompt": "Which practice move best extends the lesson after you finish the core explanation?",
        "options": [
          "Exercise 1 - Verb Replacement: Replace weak verb + noun combinations with single strong verbs in ten sentences.",
          "Exercise 1 - Labeling: Read a paragraph and mark each word with its part of speech (noun, verb, adj, adv, etc.)",
          "Exercise 2 - Identification: Identify the target word class in each sentence: 'Find the adverb that modifies ran.'",
          "Exercise 3 - Word Transformation: Transform words to different classes (run→runner→running; quick→quickly)"
        ],
        "correctIndex": 0,
        "explanation": "Exercise 1 - Verb Replacement: Replace weak verb + noun combinations with single strong verbs in ten sentences.",
        "tag": "Practice transfer",
        "difficulty": "Review Challenge",
        "sequence": 10
      },
      {
        "prompt": "Which explanation best matches this model sentence from \"Concision and Formal Tone\"? \"We analyzed the results carefully.\"",
        "options": [
          "student (noun), curious (adjective), quickly (adverb), opened (verb)",
          "She (pronoun), carefully (adverb), explained (verb), importance (noun)",
          "Although (conjunction), raining (verb form), we (pronoun), near (preposition), mountain (noun)",
          "Concise: analyzed is better than did an analysis."
        ],
        "correctIndex": 3,
        "explanation": "Concise: analyzed is better than did an analysis.",
        "tag": "Example analysis",
        "difficulty": "Review Challenge",
        "sequence": 11
      },
      {
        "prompt": "Which objective belongs to \"Concision and Formal Tone\"?",
        "options": [
          "Separate form from function when a word changes category by use.",
          "Explain why the same word can behave differently across contexts.",
          "Replace weak noun-heavy phrasing with stronger verbs.",
          "Recognize the major word classes in authentic sentences."
        ],
        "correctIndex": 2,
        "explanation": "Replace weak noun-heavy phrasing with stronger verbs.",
        "tag": "Objective check",
        "difficulty": "Review Challenge",
        "sequence": 12
      },
      {
        "prompt": "Which portfolio task best fits the module that contains \"Concision and Formal Tone\"?",
        "options": [
          "Edit an old paragraph only for sentence-level accuracy and annotate each correction.",
          "Revise a formal paragraph for punctuation, parallelism, and concise tone.",
          "Write a 150-word self-introduction and label nouns, verbs, articles, and sentence types.",
          "Write a three-part narrative using present, past, and future meaning accurately."
        ],
        "correctIndex": 1,
        "explanation": "Revise a formal paragraph for punctuation, parallelism, and concise tone.",
        "tag": "Portfolio transfer",
        "difficulty": "Review Challenge",
        "sequence": 13
      },
      {
        "prompt": "Which module description best fits the context of \"Concision and Formal Tone\"?",
        "options": [
          "Turn grammatical accuracy into polished writing through punctuation, balance, comparison, and concise style.",
          "Build a clean base in word classes, sentence architecture, and noun phrases before moving into more advanced control.",
          "Learn how English grammar maps routine, action-in-progress, experience, finished time, future reference, and modal meaning.",
          "Strengthen agreement, pronoun reference, auxiliary use, pattern control, and active-passive choices."
        ],
        "correctIndex": 0,
        "explanation": "Turn grammatical accuracy into polished writing through punctuation, balance, comparison, and concise style.",
        "tag": "Module alignment",
        "difficulty": "Review Challenge",
        "sequence": 14
      },
      {
        "prompt": "Which reading insight best matches the story work in \"Concision and Formal Tone\"?",
        "options": [
          "Market (noun), Saturday (noun), Maya (noun) are the main subjects and objects.",
          "Visits, walks, looking, shows, answer, select, stands are action verbs showing what people do.",
          "Busy, colorful, fresh, ripe describe nouns (busy market, colorful stalls).",
          "Removing fillers and intensifiers makes writing clearer and more powerful."
        ],
        "correctIndex": 3,
        "explanation": "Removing fillers and intensifiers makes writing clearer and more powerful.",
        "tag": "Story analysis",
        "difficulty": "Review Challenge",
        "sequence": 15
      },
      {
        "prompt": "Which version is strongest for academic or professional writing?",
        "options": [
          "We made the event postponed.",
          "There was a decision with regard to postponing the event.",
          "We did a postponement decision.",
          "We decided to postpone the event."
        ],
        "correctIndex": 3,
        "explanation": "A direct verb is usually more concise than a weak verb plus noun.",
        "tag": "Formal tone",
        "difficulty": "Review Challenge",
        "sequence": 16
      },
      {
        "prompt": "Which option removes redundancy or filler most effectively?",
        "options": [
          "We made the event postponed.",
          "There was a decision with regard to postponing the event.",
          "We did a postponement decision.",
          "We decided to postpone the event."
        ],
        "correctIndex": 3,
        "explanation": "A direct verb is usually more concise than a weak verb plus noun.",
        "tag": "Redundancy",
        "difficulty": "Review Challenge",
        "sequence": 17
      },
      {
        "prompt": "Choose the sentence that sounds appropriately formal.",
        "options": [
          "We did a postponement decision.",
          "We decided to postpone the event.",
          "We made the event postponed.",
          "There was a decision with regard to postponing the event."
        ],
        "correctIndex": 1,
        "explanation": "A direct verb is usually more concise than a weak verb plus noun.",
        "tag": "Register",
        "difficulty": "Review Challenge",
        "sequence": 18
      },
      {
        "prompt": "Which answer best fits the lesson on concision?",
        "options": [
          "We made the event postponed.",
          "There was a decision with regard to postponing the event.",
          "We did a postponement decision.",
          "We decided to postpone the event."
        ],
        "correctIndex": 3,
        "explanation": "A direct verb is usually more concise than a weak verb plus noun.",
        "tag": "Lesson focus",
        "difficulty": "Review Challenge",
        "sequence": 19
      },
      {
        "prompt": "Choose the most concise or formal revision of \"The reason is because the schedule changed.\"",
        "options": [
          "The reason is because the schedule changed.",
          "The reason for the schedule changed is that.",
          "Because the schedule changed is the reason.",
          "The reason is that the schedule changed."
        ],
        "correctIndex": 3,
        "explanation": "Reason and because together create redundancy.",
        "tag": "Concision",
        "difficulty": "Review Challenge",
        "sequence": 20
      }
    ]
  },
  "editing-drills": {
    "standard": [
      {
        "prompt": "Choose the best correction for \"She don't knows the answer.\"",
        "options": [
          "She doesn't know the answer.",
          "She don't know the answer.",
          "She doesn't knows the answer.",
          "She not know the answer."
        ],
        "correctIndex": 0,
        "explanation": "The auxiliary carries the tense and agreement; the main verb stays in base form.",
        "tag": "Correction",
        "difficulty": "Basic",
        "sequence": 1
      },
      {
        "prompt": "Which edited sentence is right?",
        "options": [
          "She don't know the answer.",
          "She doesn't knows the answer.",
          "She not know the answer.",
          "She doesn't know the answer."
        ],
        "correctIndex": 3,
        "explanation": "The auxiliary carries the tense and agreement; the main verb stays in base form.",
        "tag": "Editing",
        "difficulty": "Basic",
        "sequence": 2
      },
      {
        "prompt": "A teacher marks \"She don't knows the answer.\" as incorrect. Which revision should the student use?",
        "options": [
          "She doesn't knows the answer.",
          "She not know the answer.",
          "She doesn't know the answer.",
          "She don't know the answer."
        ],
        "correctIndex": 2,
        "explanation": "The auxiliary carries the tense and agreement; the main verb stays in base form.",
        "tag": "Teacher feedback",
        "difficulty": "Basic",
        "sequence": 3
      },
      {
        "prompt": "Which answer fixes the grammar error?",
        "options": [
          "She not know the answer.",
          "She doesn't know the answer.",
          "She don't know the answer.",
          "She doesn't knows the answer."
        ],
        "correctIndex": 1,
        "explanation": "The auxiliary carries the tense and agreement; the main verb stays in base form.",
        "tag": "Error fix",
        "difficulty": "Basic",
        "sequence": 4
      },
      {
        "prompt": "Choose the standard English version of \"She don't knows the answer.\"",
        "options": [
          "She doesn't know the answer.",
          "She don't know the answer.",
          "She doesn't knows the answer.",
          "She not know the answer."
        ],
        "correctIndex": 0,
        "explanation": "The auxiliary carries the tense and agreement; the main verb stays in base form.",
        "tag": "Standard form",
        "difficulty": "Basic",
        "sequence": 5
      },
      {
        "prompt": "Which answer would earn full credit on an editing task?",
        "options": [
          "She don't know the answer.",
          "She doesn't knows the answer.",
          "She not know the answer.",
          "She doesn't know the answer."
        ],
        "correctIndex": 3,
        "explanation": "The auxiliary carries the tense and agreement; the main verb stays in base form.",
        "tag": "Assessment",
        "difficulty": "Basic",
        "sequence": 6
      },
      {
        "prompt": "Which lesson note explains the edit?",
        "options": [
          "Articles never matter in editing tasks.",
          "Questions in the past simple do not use auxiliaries.",
          "The auxiliary carries the tense and agreement; the main verb stays in base form.",
          "Errors should be corrected without checking the rule."
        ],
        "correctIndex": 2,
        "explanation": "The auxiliary carries the tense and agreement; the main verb stays in base form.",
        "tag": "Explanation",
        "difficulty": "Basic",
        "sequence": 7
      },
      {
        "prompt": "Which option best rewrites \"She don't knows the answer.\" for accuracy?",
        "options": [
          "She not know the answer.",
          "She doesn't know the answer.",
          "She don't know the answer.",
          "She doesn't knows the answer."
        ],
        "correctIndex": 1,
        "explanation": "The auxiliary carries the tense and agreement; the main verb stays in base form.",
        "tag": "Accuracy",
        "difficulty": "Basic",
        "sequence": 8
      },
      {
        "prompt": "What is the strongest correction?",
        "options": [
          "She doesn't know the answer.",
          "She don't know the answer.",
          "She doesn't knows the answer.",
          "She not know the answer."
        ],
        "correctIndex": 0,
        "explanation": "The auxiliary carries the tense and agreement; the main verb stays in base form.",
        "tag": "Revision",
        "difficulty": "Basic",
        "sequence": 9
      },
      {
        "prompt": "Which version should stay after proofreading?",
        "options": [
          "She don't know the answer.",
          "She doesn't knows the answer.",
          "She not know the answer.",
          "She doesn't know the answer."
        ],
        "correctIndex": 3,
        "explanation": "The auxiliary carries the tense and agreement; the main verb stays in base form.",
        "tag": "Proofreading",
        "difficulty": "Basic",
        "sequence": 10
      },
      {
        "prompt": "Choose the best correction for \"The students was revising in library.\"",
        "options": [
          "The students was revising in the library.",
          "The students were revise in library.",
          "The student were revising in the library.",
          "The students were revising in the library."
        ],
        "correctIndex": 3,
        "explanation": "Fix agreement and article use together.",
        "tag": "Correction",
        "difficulty": "Basic",
        "sequence": 11
      },
      {
        "prompt": "Which edited sentence is right?",
        "options": [
          "The students were revise in library.",
          "The student were revising in the library.",
          "The students were revising in the library.",
          "The students was revising in the library."
        ],
        "correctIndex": 2,
        "explanation": "Fix agreement and article use together.",
        "tag": "Editing",
        "difficulty": "Basic",
        "sequence": 12
      },
      {
        "prompt": "A teacher marks \"The students was revising in library.\" as incorrect. Which revision should the student use?",
        "options": [
          "The student were revising in the library.",
          "The students were revising in the library.",
          "The students was revising in the library.",
          "The students were revise in library."
        ],
        "correctIndex": 1,
        "explanation": "Fix agreement and article use together.",
        "tag": "Teacher feedback",
        "difficulty": "Basic",
        "sequence": 13
      },
      {
        "prompt": "Which answer fixes the grammar error?",
        "options": [
          "The students were revising in the library.",
          "The students was revising in the library.",
          "The students were revise in library.",
          "The student were revising in the library."
        ],
        "correctIndex": 0,
        "explanation": "Fix agreement and article use together.",
        "tag": "Error fix",
        "difficulty": "Basic",
        "sequence": 14
      },
      {
        "prompt": "Choose the standard English version of \"The students was revising in library.\"",
        "options": [
          "The students was revising in the library.",
          "The students were revise in library.",
          "The student were revising in the library.",
          "The students were revising in the library."
        ],
        "correctIndex": 3,
        "explanation": "Fix agreement and article use together.",
        "tag": "Standard form",
        "difficulty": "Basic",
        "sequence": 15
      },
      {
        "prompt": "Which answer would earn full credit on an editing task?",
        "options": [
          "The students were revise in library.",
          "The student were revising in the library.",
          "The students were revising in the library.",
          "The students was revising in the library."
        ],
        "correctIndex": 2,
        "explanation": "Fix agreement and article use together.",
        "tag": "Assessment",
        "difficulty": "Basic",
        "sequence": 16
      },
      {
        "prompt": "Which lesson note explains the edit?",
        "options": [
          "Questions in the past simple do not use auxiliaries.",
          "Fix agreement and article use together.",
          "Errors should be corrected without checking the rule.",
          "Articles never matter in editing tasks."
        ],
        "correctIndex": 1,
        "explanation": "Fix agreement and article use together.",
        "tag": "Explanation",
        "difficulty": "Basic",
        "sequence": 17
      },
      {
        "prompt": "Which option best rewrites \"The students was revising in library.\" for accuracy?",
        "options": [
          "The students were revising in the library.",
          "The students was revising in the library.",
          "The students were revise in library.",
          "The student were revising in the library."
        ],
        "correctIndex": 0,
        "explanation": "Fix agreement and article use together.",
        "tag": "Accuracy",
        "difficulty": "Basic",
        "sequence": 18
      },
      {
        "prompt": "What is the strongest correction?",
        "options": [
          "The students was revising in the library.",
          "The students were revise in library.",
          "The student were revising in the library.",
          "The students were revising in the library."
        ],
        "correctIndex": 3,
        "explanation": "Fix agreement and article use together.",
        "tag": "Revision",
        "difficulty": "Basic",
        "sequence": 19
      },
      {
        "prompt": "Which version should stay after proofreading?",
        "options": [
          "The students were revise in library.",
          "The student were revising in the library.",
          "The students were revising in the library.",
          "The students was revising in the library."
        ],
        "correctIndex": 2,
        "explanation": "Fix agreement and article use together.",
        "tag": "Proofreading",
        "difficulty": "Basic",
        "sequence": 20
      },
      {
        "prompt": "Choose the best correction for \"He suggested me to rewrite the introduction.\"",
        "options": [
          "He suggested to rewrite the introduction.",
          "He suggested that rewrite the introduction.",
          "He suggested rewriting the introduction.",
          "He suggested me rewrite the introduction."
        ],
        "correctIndex": 2,
        "explanation": "Suggest is not followed by object plus infinitive.",
        "tag": "Correction",
        "difficulty": "Intermediate",
        "sequence": 21
      },
      {
        "prompt": "Which edited sentence is right?",
        "options": [
          "He suggested that rewrite the introduction.",
          "He suggested rewriting the introduction.",
          "He suggested me rewrite the introduction.",
          "He suggested to rewrite the introduction."
        ],
        "correctIndex": 1,
        "explanation": "Suggest is not followed by object plus infinitive.",
        "tag": "Editing",
        "difficulty": "Intermediate",
        "sequence": 22
      },
      {
        "prompt": "A teacher marks \"He suggested me to rewrite the introduction.\" as incorrect. Which revision should the student use?",
        "options": [
          "He suggested rewriting the introduction.",
          "He suggested me rewrite the introduction.",
          "He suggested to rewrite the introduction.",
          "He suggested that rewrite the introduction."
        ],
        "correctIndex": 0,
        "explanation": "Suggest is not followed by object plus infinitive.",
        "tag": "Teacher feedback",
        "difficulty": "Intermediate",
        "sequence": 23
      },
      {
        "prompt": "Which answer fixes the grammar error?",
        "options": [
          "He suggested me rewrite the introduction.",
          "He suggested to rewrite the introduction.",
          "He suggested that rewrite the introduction.",
          "He suggested rewriting the introduction."
        ],
        "correctIndex": 3,
        "explanation": "Suggest is not followed by object plus infinitive.",
        "tag": "Error fix",
        "difficulty": "Intermediate",
        "sequence": 24
      },
      {
        "prompt": "Choose the standard English version of \"He suggested me to rewrite the introduction.\"",
        "options": [
          "He suggested to rewrite the introduction.",
          "He suggested that rewrite the introduction.",
          "He suggested rewriting the introduction.",
          "He suggested me rewrite the introduction."
        ],
        "correctIndex": 2,
        "explanation": "Suggest is not followed by object plus infinitive.",
        "tag": "Standard form",
        "difficulty": "Intermediate",
        "sequence": 25
      },
      {
        "prompt": "Which answer would earn full credit on an editing task?",
        "options": [
          "He suggested that rewrite the introduction.",
          "He suggested rewriting the introduction.",
          "He suggested me rewrite the introduction.",
          "He suggested to rewrite the introduction."
        ],
        "correctIndex": 1,
        "explanation": "Suggest is not followed by object plus infinitive.",
        "tag": "Assessment",
        "difficulty": "Intermediate",
        "sequence": 26
      },
      {
        "prompt": "Which lesson note explains the edit?",
        "options": [
          "Suggest is not followed by object plus infinitive.",
          "Errors should be corrected without checking the rule.",
          "Articles never matter in editing tasks.",
          "Questions in the past simple do not use auxiliaries."
        ],
        "correctIndex": 0,
        "explanation": "Suggest is not followed by object plus infinitive.",
        "tag": "Explanation",
        "difficulty": "Intermediate",
        "sequence": 27
      },
      {
        "prompt": "Which option best rewrites \"He suggested me to rewrite the introduction.\" for accuracy?",
        "options": [
          "He suggested me rewrite the introduction.",
          "He suggested to rewrite the introduction.",
          "He suggested that rewrite the introduction.",
          "He suggested rewriting the introduction."
        ],
        "correctIndex": 3,
        "explanation": "Suggest is not followed by object plus infinitive.",
        "tag": "Accuracy",
        "difficulty": "Intermediate",
        "sequence": 28
      },
      {
        "prompt": "What is the strongest correction?",
        "options": [
          "He suggested to rewrite the introduction.",
          "He suggested that rewrite the introduction.",
          "He suggested rewriting the introduction.",
          "He suggested me rewrite the introduction."
        ],
        "correctIndex": 2,
        "explanation": "Suggest is not followed by object plus infinitive.",
        "tag": "Revision",
        "difficulty": "Intermediate",
        "sequence": 29
      },
      {
        "prompt": "Which version should stay after proofreading?",
        "options": [
          "He suggested that rewrite the introduction.",
          "He suggested rewriting the introduction.",
          "He suggested me rewrite the introduction.",
          "He suggested to rewrite the introduction."
        ],
        "correctIndex": 1,
        "explanation": "Suggest is not followed by object plus infinitive.",
        "tag": "Proofreading",
        "difficulty": "Intermediate",
        "sequence": 30
      },
      {
        "prompt": "Choose the best correction for \"There is many reasons to practice grammar.\"",
        "options": [
          "There many reasons are to practice grammar.",
          "There are many reasons to practice grammar.",
          "There is many reason to practice grammar.",
          "There are many reason to practice grammar."
        ],
        "correctIndex": 1,
        "explanation": "The verb agrees with the plural noun reasons.",
        "tag": "Correction",
        "difficulty": "Intermediate",
        "sequence": 31
      },
      {
        "prompt": "Which edited sentence is right?",
        "options": [
          "There are many reasons to practice grammar.",
          "There is many reason to practice grammar.",
          "There are many reason to practice grammar.",
          "There many reasons are to practice grammar."
        ],
        "correctIndex": 0,
        "explanation": "The verb agrees with the plural noun reasons.",
        "tag": "Editing",
        "difficulty": "Intermediate",
        "sequence": 32
      },
      {
        "prompt": "A teacher marks \"There is many reasons to practice grammar.\" as incorrect. Which revision should the student use?",
        "options": [
          "There is many reason to practice grammar.",
          "There are many reason to practice grammar.",
          "There many reasons are to practice grammar.",
          "There are many reasons to practice grammar."
        ],
        "correctIndex": 3,
        "explanation": "The verb agrees with the plural noun reasons.",
        "tag": "Teacher feedback",
        "difficulty": "Intermediate",
        "sequence": 33
      },
      {
        "prompt": "Which answer fixes the grammar error?",
        "options": [
          "There are many reason to practice grammar.",
          "There many reasons are to practice grammar.",
          "There are many reasons to practice grammar.",
          "There is many reason to practice grammar."
        ],
        "correctIndex": 2,
        "explanation": "The verb agrees with the plural noun reasons.",
        "tag": "Error fix",
        "difficulty": "Intermediate",
        "sequence": 34
      },
      {
        "prompt": "Choose the standard English version of \"There is many reasons to practice grammar.\"",
        "options": [
          "There many reasons are to practice grammar.",
          "There are many reasons to practice grammar.",
          "There is many reason to practice grammar.",
          "There are many reason to practice grammar."
        ],
        "correctIndex": 1,
        "explanation": "The verb agrees with the plural noun reasons.",
        "tag": "Standard form",
        "difficulty": "Intermediate",
        "sequence": 35
      },
      {
        "prompt": "Which answer would earn full credit on an editing task?",
        "options": [
          "There are many reasons to practice grammar.",
          "There is many reason to practice grammar.",
          "There are many reason to practice grammar.",
          "There many reasons are to practice grammar."
        ],
        "correctIndex": 0,
        "explanation": "The verb agrees with the plural noun reasons.",
        "tag": "Assessment",
        "difficulty": "Intermediate",
        "sequence": 36
      },
      {
        "prompt": "Which lesson note explains the edit?",
        "options": [
          "Errors should be corrected without checking the rule.",
          "Articles never matter in editing tasks.",
          "Questions in the past simple do not use auxiliaries.",
          "The verb agrees with the plural noun reasons."
        ],
        "correctIndex": 3,
        "explanation": "The verb agrees with the plural noun reasons.",
        "tag": "Explanation",
        "difficulty": "Intermediate",
        "sequence": 37
      },
      {
        "prompt": "Which option best rewrites \"There is many reasons to practice grammar.\" for accuracy?",
        "options": [
          "There are many reason to practice grammar.",
          "There many reasons are to practice grammar.",
          "There are many reasons to practice grammar.",
          "There is many reason to practice grammar."
        ],
        "correctIndex": 2,
        "explanation": "The verb agrees with the plural noun reasons.",
        "tag": "Accuracy",
        "difficulty": "Intermediate",
        "sequence": 38
      },
      {
        "prompt": "What is the strongest correction?",
        "options": [
          "There many reasons are to practice grammar.",
          "There are many reasons to practice grammar.",
          "There is many reason to practice grammar.",
          "There are many reason to practice grammar."
        ],
        "correctIndex": 1,
        "explanation": "The verb agrees with the plural noun reasons.",
        "tag": "Revision",
        "difficulty": "Intermediate",
        "sequence": 39
      },
      {
        "prompt": "Which version should stay after proofreading?",
        "options": [
          "There are many reasons to practice grammar.",
          "There is many reason to practice grammar.",
          "There are many reason to practice grammar.",
          "There many reasons are to practice grammar."
        ],
        "correctIndex": 0,
        "explanation": "The verb agrees with the plural noun reasons.",
        "tag": "Proofreading",
        "difficulty": "Intermediate",
        "sequence": 40
      },
      {
        "prompt": "Choose the best correction for \"I have seen him yesterday.\"",
        "options": [
          "I saw him yesterday.",
          "I have saw him yesterday.",
          "I seen him yesterday.",
          "I have seeing him yesterday."
        ],
        "correctIndex": 0,
        "explanation": "Finished time expressions call for the past simple, not the present perfect.",
        "tag": "Correction",
        "difficulty": "Advanced",
        "sequence": 41
      },
      {
        "prompt": "Which edited sentence is right?",
        "options": [
          "I have saw him yesterday.",
          "I seen him yesterday.",
          "I have seeing him yesterday.",
          "I saw him yesterday."
        ],
        "correctIndex": 3,
        "explanation": "Finished time expressions call for the past simple, not the present perfect.",
        "tag": "Editing",
        "difficulty": "Advanced",
        "sequence": 42
      },
      {
        "prompt": "A teacher marks \"I have seen him yesterday.\" as incorrect. Which revision should the student use?",
        "options": [
          "I seen him yesterday.",
          "I have seeing him yesterday.",
          "I saw him yesterday.",
          "I have saw him yesterday."
        ],
        "correctIndex": 2,
        "explanation": "Finished time expressions call for the past simple, not the present perfect.",
        "tag": "Teacher feedback",
        "difficulty": "Advanced",
        "sequence": 43
      },
      {
        "prompt": "Which answer fixes the grammar error?",
        "options": [
          "I have seeing him yesterday.",
          "I saw him yesterday.",
          "I have saw him yesterday.",
          "I seen him yesterday."
        ],
        "correctIndex": 1,
        "explanation": "Finished time expressions call for the past simple, not the present perfect.",
        "tag": "Error fix",
        "difficulty": "Advanced",
        "sequence": 44
      },
      {
        "prompt": "Choose the standard English version of \"I have seen him yesterday.\"",
        "options": [
          "I saw him yesterday.",
          "I have saw him yesterday.",
          "I seen him yesterday.",
          "I have seeing him yesterday."
        ],
        "correctIndex": 0,
        "explanation": "Finished time expressions call for the past simple, not the present perfect.",
        "tag": "Standard form",
        "difficulty": "Advanced",
        "sequence": 45
      },
      {
        "prompt": "Which answer would earn full credit on an editing task?",
        "options": [
          "I have saw him yesterday.",
          "I seen him yesterday.",
          "I have seeing him yesterday.",
          "I saw him yesterday."
        ],
        "correctIndex": 3,
        "explanation": "Finished time expressions call for the past simple, not the present perfect.",
        "tag": "Assessment",
        "difficulty": "Advanced",
        "sequence": 46
      },
      {
        "prompt": "Which lesson note explains the edit?",
        "options": [
          "Articles never matter in editing tasks.",
          "Questions in the past simple do not use auxiliaries.",
          "Finished time expressions call for the past simple, not the present perfect.",
          "Errors should be corrected without checking the rule."
        ],
        "correctIndex": 2,
        "explanation": "Finished time expressions call for the past simple, not the present perfect.",
        "tag": "Explanation",
        "difficulty": "Advanced",
        "sequence": 47
      },
      {
        "prompt": "Which option best rewrites \"I have seen him yesterday.\" for accuracy?",
        "options": [
          "I have seeing him yesterday.",
          "I saw him yesterday.",
          "I have saw him yesterday.",
          "I seen him yesterday."
        ],
        "correctIndex": 1,
        "explanation": "Finished time expressions call for the past simple, not the present perfect.",
        "tag": "Accuracy",
        "difficulty": "Advanced",
        "sequence": 48
      },
      {
        "prompt": "What is the strongest correction?",
        "options": [
          "I saw him yesterday.",
          "I have saw him yesterday.",
          "I seen him yesterday.",
          "I have seeing him yesterday."
        ],
        "correctIndex": 0,
        "explanation": "Finished time expressions call for the past simple, not the present perfect.",
        "tag": "Revision",
        "difficulty": "Advanced",
        "sequence": 49
      },
      {
        "prompt": "Which version should stay after proofreading?",
        "options": [
          "I have saw him yesterday.",
          "I seen him yesterday.",
          "I have seeing him yesterday.",
          "I saw him yesterday."
        ],
        "correctIndex": 3,
        "explanation": "Finished time expressions call for the past simple, not the present perfect.",
        "tag": "Proofreading",
        "difficulty": "Advanced",
        "sequence": 50
      },
      {
        "prompt": "Choose the best correction for \"Why you left early?\"",
        "options": [
          "Why you did leave early?",
          "Why do you left early?",
          "Why did you left early?",
          "Why did you leave early?"
        ],
        "correctIndex": 3,
        "explanation": "Past simple questions require did plus the base verb.",
        "tag": "Correction",
        "difficulty": "Advanced",
        "sequence": 51
      },
      {
        "prompt": "Which edited sentence is right?",
        "options": [
          "Why do you left early?",
          "Why did you left early?",
          "Why did you leave early?",
          "Why you did leave early?"
        ],
        "correctIndex": 2,
        "explanation": "Past simple questions require did plus the base verb.",
        "tag": "Editing",
        "difficulty": "Advanced",
        "sequence": 52
      },
      {
        "prompt": "A teacher marks \"Why you left early?\" as incorrect. Which revision should the student use?",
        "options": [
          "Why did you left early?",
          "Why did you leave early?",
          "Why you did leave early?",
          "Why do you left early?"
        ],
        "correctIndex": 1,
        "explanation": "Past simple questions require did plus the base verb.",
        "tag": "Teacher feedback",
        "difficulty": "Advanced",
        "sequence": 53
      },
      {
        "prompt": "Which answer fixes the grammar error?",
        "options": [
          "Why did you leave early?",
          "Why you did leave early?",
          "Why do you left early?",
          "Why did you left early?"
        ],
        "correctIndex": 0,
        "explanation": "Past simple questions require did plus the base verb.",
        "tag": "Error fix",
        "difficulty": "Advanced",
        "sequence": 54
      },
      {
        "prompt": "Choose the standard English version of \"Why you left early?\"",
        "options": [
          "Why you did leave early?",
          "Why do you left early?",
          "Why did you left early?",
          "Why did you leave early?"
        ],
        "correctIndex": 3,
        "explanation": "Past simple questions require did plus the base verb.",
        "tag": "Standard form",
        "difficulty": "Advanced",
        "sequence": 55
      },
      {
        "prompt": "Which answer would earn full credit on an editing task?",
        "options": [
          "Why do you left early?",
          "Why did you left early?",
          "Why did you leave early?",
          "Why you did leave early?"
        ],
        "correctIndex": 2,
        "explanation": "Past simple questions require did plus the base verb.",
        "tag": "Assessment",
        "difficulty": "Advanced",
        "sequence": 56
      },
      {
        "prompt": "Which lesson note explains the edit?",
        "options": [
          "Questions in the past simple do not use auxiliaries.",
          "Past simple questions require did plus the base verb.",
          "Errors should be corrected without checking the rule.",
          "Articles never matter in editing tasks."
        ],
        "correctIndex": 1,
        "explanation": "Past simple questions require did plus the base verb.",
        "tag": "Explanation",
        "difficulty": "Advanced",
        "sequence": 57
      },
      {
        "prompt": "Which option best rewrites \"Why you left early?\" for accuracy?",
        "options": [
          "Why did you leave early?",
          "Why you did leave early?",
          "Why do you left early?",
          "Why did you left early?"
        ],
        "correctIndex": 0,
        "explanation": "Past simple questions require did plus the base verb.",
        "tag": "Accuracy",
        "difficulty": "Advanced",
        "sequence": 58
      },
      {
        "prompt": "What is the strongest correction?",
        "options": [
          "Why you did leave early?",
          "Why do you left early?",
          "Why did you left early?",
          "Why did you leave early?"
        ],
        "correctIndex": 3,
        "explanation": "Past simple questions require did plus the base verb.",
        "tag": "Revision",
        "difficulty": "Advanced",
        "sequence": 59
      },
      {
        "prompt": "Which version should stay after proofreading?",
        "options": [
          "Why do you left early?",
          "Why did you left early?",
          "Why did you leave early?",
          "Why you did leave early?"
        ],
        "correctIndex": 2,
        "explanation": "Past simple questions require did plus the base verb.",
        "tag": "Proofreading",
        "difficulty": "Advanced",
        "sequence": 60
      }
    ],
    "advanced": [
      {
        "prompt": "Choose the best correction for \"She don't knows the answer.\"",
        "options": [
          "She doesn't know the answer.",
          "She don't know the answer.",
          "She doesn't knows the answer.",
          "She not know the answer."
        ],
        "correctIndex": 0,
        "explanation": "The auxiliary carries the tense and agreement; the main verb stays in base form.",
        "tag": "Correction",
        "difficulty": "Review Challenge",
        "sequence": 1
      },
      {
        "prompt": "Which edited sentence is right?",
        "options": [
          "She don't know the answer.",
          "She doesn't knows the answer.",
          "She not know the answer.",
          "She doesn't know the answer."
        ],
        "correctIndex": 3,
        "explanation": "The auxiliary carries the tense and agreement; the main verb stays in base form.",
        "tag": "Editing",
        "difficulty": "Review Challenge",
        "sequence": 2
      },
      {
        "prompt": "A teacher marks \"She don't knows the answer.\" as incorrect. Which revision should the student use?",
        "options": [
          "She doesn't knows the answer.",
          "She not know the answer.",
          "She doesn't know the answer.",
          "She don't know the answer."
        ],
        "correctIndex": 2,
        "explanation": "The auxiliary carries the tense and agreement; the main verb stays in base form.",
        "tag": "Teacher feedback",
        "difficulty": "Review Challenge",
        "sequence": 3
      },
      {
        "prompt": "Choose the standard English version of \"She don't knows the answer.\"",
        "options": [
          "She doesn't know the answer.",
          "She don't know the answer.",
          "She doesn't knows the answer.",
          "She not know the answer."
        ],
        "correctIndex": 0,
        "explanation": "The auxiliary carries the tense and agreement; the main verb stays in base form.",
        "tag": "Standard form",
        "difficulty": "Review Challenge",
        "sequence": 4
      },
      {
        "prompt": "Which answer would earn full credit on an editing task?",
        "options": [
          "She don't know the answer.",
          "She doesn't knows the answer.",
          "She not know the answer.",
          "She doesn't know the answer."
        ],
        "correctIndex": 3,
        "explanation": "The auxiliary carries the tense and agreement; the main verb stays in base form.",
        "tag": "Assessment",
        "difficulty": "Review Challenge",
        "sequence": 5
      },
      {
        "prompt": "Which lesson note explains the edit?",
        "options": [
          "Articles never matter in editing tasks.",
          "Questions in the past simple do not use auxiliaries.",
          "The auxiliary carries the tense and agreement; the main verb stays in base form.",
          "Errors should be corrected without checking the rule."
        ],
        "correctIndex": 2,
        "explanation": "The auxiliary carries the tense and agreement; the main verb stays in base form.",
        "tag": "Explanation",
        "difficulty": "Review Challenge",
        "sequence": 6
      },
      {
        "prompt": "Which focus best matches the main learning challenge in \"Error Correction Drills\"?",
        "options": [
          "Identify the job each word does inside a sentence.",
          "Build complete sentences with subjects, verbs, and clear complements.",
          "Use a, an, the, some, and zero article correctly.",
          "Spot grammar errors quickly and explain why they are wrong."
        ],
        "correctIndex": 3,
        "explanation": "The focus of this lesson is: Spot grammar errors quickly and explain why they are wrong.",
        "tag": "Advanced focus",
        "difficulty": "Review Challenge",
        "sequence": 7
      },
      {
        "prompt": "Which rule belongs most directly to \"Error Correction Drills\"?",
        "options": [
          "Adjectives describe nouns; adverbs usually modify verbs, adjectives, or other adverbs.",
          "Determiners such as the, a, this, and many signal which noun you mean.",
          "Read once for meaning, then scan again for one error type at a time.",
          "A noun names a person, place, thing, or idea, while a verb shows action or state."
        ],
        "correctIndex": 2,
        "explanation": "Read once for meaning, then scan again for one error type at a time.",
        "tag": "Rule distinction",
        "difficulty": "Review Challenge",
        "sequence": 8
      },
      {
        "prompt": "Which editing warning is most important to remember in \"Error Correction Drills\"?",
        "options": [
          {
            "wrong": "The news is exciting. She is exciting.",
            "right": "The news is exciting. She is excited.",
            "note": "Use the -ed adjective for the person's feeling, -ing for the thing's quality."
          },
          {
            "wrong": "It was really a good presentation that was gave yesterday.",
            "right": "It was an excellent presentation yesterday.",
            "note": "Don't just fix grammar; cut redundancy (was...that was; really good → excellent)."
          },
          {
            "wrong": "I have a friendly meeting tomorrow.",
            "right": "I have a friendly meeting tomorrow.",
            "note": "Friendly is an adjective here, not an adverb, so no -ly suffix needed."
          },
          {
            "wrong": "He ran quick to the store.",
            "right": "He ran quickly to the store.",
            "note": "Adverbs modify verbs; use quickly, not quick."
          }
        ],
        "correctIndex": 1,
        "explanation": {
          "wrong": "It was really a good presentation that was gave yesterday.",
          "right": "It was an excellent presentation yesterday.",
          "note": "Don't just fix grammar; cut redundancy (was...that was; really good → excellent)."
        },
        "tag": "Pitfall check",
        "difficulty": "Review Challenge",
        "sequence": 9
      },
      {
        "prompt": "Which practice move best extends the lesson after you finish the core explanation?",
        "options": [
          "Exercise 1 - Verb Agreement: Correct ten sentences with subject-verb disagreement.",
          "Exercise 1 - Labeling: Read a paragraph and mark each word with its part of speech (noun, verb, adj, adv, etc.)",
          "Exercise 2 - Identification: Identify the target word class in each sentence: 'Find the adverb that modifies ran.'",
          "Exercise 3 - Word Transformation: Transform words to different classes (run→runner→running; quick→quickly)"
        ],
        "correctIndex": 0,
        "explanation": "Exercise 1 - Verb Agreement: Correct ten sentences with subject-verb disagreement.",
        "tag": "Practice transfer",
        "difficulty": "Review Challenge",
        "sequence": 10
      },
      {
        "prompt": "Which explanation best matches this model sentence from \"Error Correction Drills\"? \"Incorrect: She don't knows the answer. → Corrected: She doesn't know the answer.\"",
        "options": [
          "student (noun), curious (adjective), quickly (adverb), opened (verb)",
          "She (pronoun), carefully (adverb), explained (verb), importance (noun)",
          "Although (conjunction), raining (verb form), we (pronoun), near (preposition), mountain (noun)",
          "Auxiliary carries the tense and agreement; she + doesn't (3rd person singular)."
        ],
        "correctIndex": 3,
        "explanation": "Auxiliary carries the tense and agreement; she + doesn't (3rd person singular).",
        "tag": "Example analysis",
        "difficulty": "Review Challenge",
        "sequence": 11
      },
      {
        "prompt": "Which objective belongs to \"Error Correction Drills\"?",
        "options": [
          "Separate form from function when a word changes category by use.",
          "Explain why the same word can behave differently across contexts.",
          "Edit by category instead of guessing randomly.",
          "Recognize the major word classes in authentic sentences."
        ],
        "correctIndex": 2,
        "explanation": "Edit by category instead of guessing randomly.",
        "tag": "Objective check",
        "difficulty": "Review Challenge",
        "sequence": 12
      },
      {
        "prompt": "Which portfolio task best fits the module that contains \"Error Correction Drills\"?",
        "options": [
          "Edit an old paragraph only for sentence-level accuracy and annotate each correction.",
          "Complete a mixed review pack and write a reflection on your most persistent grammar errors.",
          "Write a 150-word self-introduction and label nouns, verbs, articles, and sentence types.",
          "Write a three-part narrative using present, past, and future meaning accurately."
        ],
        "correctIndex": 1,
        "explanation": "Complete a mixed review pack and write a reflection on your most persistent grammar errors.",
        "tag": "Portfolio transfer",
        "difficulty": "Review Challenge",
        "sequence": 13
      },
      {
        "prompt": "Which module description best fits the context of \"Error Correction Drills\"?",
        "options": [
          "Turn all of the course content into active control through correction, transformation, and review strategy.",
          "Build a clean base in word classes, sentence architecture, and noun phrases before moving into more advanced control.",
          "Learn how English grammar maps routine, action-in-progress, experience, finished time, future reference, and modal meaning.",
          "Strengthen agreement, pronoun reference, auxiliary use, pattern control, and active-passive choices."
        ],
        "correctIndex": 0,
        "explanation": "Turn all of the course content into active control through correction, transformation, and review strategy.",
        "tag": "Module alignment",
        "difficulty": "Review Challenge",
        "sequence": 14
      },
      {
        "prompt": "Which reading insight best matches the story work in \"Error Correction Drills\"?",
        "options": [
          "Market (noun), Saturday (noun), Maya (noun) are the main subjects and objects.",
          "Visits, walks, looking, shows, answer, select, stands are action verbs showing what people do.",
          "Busy, colorful, fresh, ripe describe nouns (busy market, colorful stalls).",
          "Editing by category (verbs, then tenses, then clauses) is faster and more effective than random proofreading."
        ],
        "correctIndex": 3,
        "explanation": "Editing by category (verbs, then tenses, then clauses) is faster and more effective than random proofreading.",
        "tag": "Story analysis",
        "difficulty": "Review Challenge",
        "sequence": 15
      },
      {
        "prompt": "Which answer fixes the grammar error?",
        "options": [
          "She not know the answer.",
          "She doesn't know the answer.",
          "She don't know the answer.",
          "She doesn't knows the answer."
        ],
        "correctIndex": 1,
        "explanation": "The auxiliary carries the tense and agreement; the main verb stays in base form.",
        "tag": "Error fix",
        "difficulty": "Review Challenge",
        "sequence": 16
      },
      {
        "prompt": "Which option best rewrites \"She don't knows the answer.\" for accuracy?",
        "options": [
          "She not know the answer.",
          "She doesn't know the answer.",
          "She don't know the answer.",
          "She doesn't knows the answer."
        ],
        "correctIndex": 1,
        "explanation": "The auxiliary carries the tense and agreement; the main verb stays in base form.",
        "tag": "Accuracy",
        "difficulty": "Review Challenge",
        "sequence": 17
      },
      {
        "prompt": "What is the strongest correction?",
        "options": [
          "She doesn't know the answer.",
          "She don't know the answer.",
          "She doesn't knows the answer.",
          "She not know the answer."
        ],
        "correctIndex": 0,
        "explanation": "The auxiliary carries the tense and agreement; the main verb stays in base form.",
        "tag": "Revision",
        "difficulty": "Review Challenge",
        "sequence": 18
      },
      {
        "prompt": "Which version should stay after proofreading?",
        "options": [
          "She don't know the answer.",
          "She doesn't knows the answer.",
          "She not know the answer.",
          "She doesn't know the answer."
        ],
        "correctIndex": 3,
        "explanation": "The auxiliary carries the tense and agreement; the main verb stays in base form.",
        "tag": "Proofreading",
        "difficulty": "Review Challenge",
        "sequence": 19
      },
      {
        "prompt": "Choose the best correction for \"The students was revising in library.\"",
        "options": [
          "The students was revising in the library.",
          "The students were revise in library.",
          "The student were revising in the library.",
          "The students were revising in the library."
        ],
        "correctIndex": 3,
        "explanation": "Fix agreement and article use together.",
        "tag": "Correction",
        "difficulty": "Review Challenge",
        "sequence": 20
      }
    ]
  },
  "transformations-and-cloze": {
    "standard": [
      {
        "prompt": "Choose the best transformation or completion for: \"It is not necessary to arrive early.\"",
        "options": [
          "You do not have to arrive early.",
          "You must not arrive early.",
          "You should not arrive early.",
          "You are not arriving early."
        ],
        "correctIndex": 0,
        "explanation": "Do not have to expresses lack of necessity, not prohibition.",
        "tag": "Transformation",
        "difficulty": "Basic",
        "sequence": 1
      },
      {
        "prompt": "Which answer keeps the meaning closest to the original?",
        "options": [
          "You must not arrive early.",
          "You should not arrive early.",
          "You are not arriving early.",
          "You do not have to arrive early."
        ],
        "correctIndex": 3,
        "explanation": "Do not have to expresses lack of necessity, not prohibition.",
        "tag": "Meaning match",
        "difficulty": "Basic",
        "sequence": 2
      },
      {
        "prompt": "Select the best grammar-based answer.",
        "options": [
          "You should not arrive early.",
          "You are not arriving early.",
          "You do not have to arrive early.",
          "You must not arrive early."
        ],
        "correctIndex": 2,
        "explanation": "Do not have to expresses lack of necessity, not prohibition.",
        "tag": "Grammar",
        "difficulty": "Basic",
        "sequence": 3
      },
      {
        "prompt": "A learner needs to rewrite \"It is not necessary to arrive early.\". Which option works?",
        "options": [
          "You are not arriving early.",
          "You do not have to arrive early.",
          "You must not arrive early.",
          "You should not arrive early."
        ],
        "correctIndex": 1,
        "explanation": "Do not have to expresses lack of necessity, not prohibition.",
        "tag": "Rewrite",
        "difficulty": "Basic",
        "sequence": 4
      },
      {
        "prompt": "Which answer would score well in a transformation task?",
        "options": [
          "You do not have to arrive early.",
          "You must not arrive early.",
          "You should not arrive early.",
          "You are not arriving early."
        ],
        "correctIndex": 0,
        "explanation": "Do not have to expresses lack of necessity, not prohibition.",
        "tag": "Assessment",
        "difficulty": "Basic",
        "sequence": 5
      },
      {
        "prompt": "Which option should stay after checking meaning and form?",
        "options": [
          "You must not arrive early.",
          "You should not arrive early.",
          "You are not arriving early.",
          "You do not have to arrive early."
        ],
        "correctIndex": 3,
        "explanation": "Do not have to expresses lack of necessity, not prohibition.",
        "tag": "Accuracy",
        "difficulty": "Basic",
        "sequence": 6
      },
      {
        "prompt": "Which lesson note explains the correct answer?",
        "options": [
          "Must not means lack of necessity.",
          "Conditional types do not depend on verb form.",
          "Do not have to expresses lack of necessity, not prohibition.",
          "Transformation tasks allow a small meaning change."
        ],
        "correctIndex": 2,
        "explanation": "Do not have to expresses lack of necessity, not prohibition.",
        "tag": "Explanation",
        "difficulty": "Basic",
        "sequence": 7
      },
      {
        "prompt": "Choose the strongest response to this cloze or transformation prompt: \"It is not necessary to arrive early.\"",
        "options": [
          "You are not arriving early.",
          "You do not have to arrive early.",
          "You must not arrive early.",
          "You should not arrive early."
        ],
        "correctIndex": 1,
        "explanation": "Do not have to expresses lack of necessity, not prohibition.",
        "tag": "Response",
        "difficulty": "Basic",
        "sequence": 8
      },
      {
        "prompt": "Which answer fits the structure and the meaning?",
        "options": [
          "You do not have to arrive early.",
          "You must not arrive early.",
          "You should not arrive early.",
          "You are not arriving early."
        ],
        "correctIndex": 0,
        "explanation": "Do not have to expresses lack of necessity, not prohibition.",
        "tag": "Structure",
        "difficulty": "Basic",
        "sequence": 9
      },
      {
        "prompt": "Which option is best for exam-style grammar practice?",
        "options": [
          "You must not arrive early.",
          "You should not arrive early.",
          "You are not arriving early.",
          "You do not have to arrive early."
        ],
        "correctIndex": 3,
        "explanation": "Do not have to expresses lack of necessity, not prohibition.",
        "tag": "Exam style",
        "difficulty": "Basic",
        "sequence": 10
      },
      {
        "prompt": "Choose the best transformation or completion for: \"Perhaps he forgot the deadline.\"",
        "options": [
          "He might forgot the deadline.",
          "He may forgetting the deadline.",
          "He has might forgotten the deadline.",
          "He might have forgotten the deadline."
        ],
        "correctIndex": 3,
        "explanation": "Use a modal of possibility with the perfect infinitive.",
        "tag": "Transformation",
        "difficulty": "Basic",
        "sequence": 11
      },
      {
        "prompt": "Which answer keeps the meaning closest to the original?",
        "options": [
          "He may forgetting the deadline.",
          "He has might forgotten the deadline.",
          "He might have forgotten the deadline.",
          "He might forgot the deadline."
        ],
        "correctIndex": 2,
        "explanation": "Use a modal of possibility with the perfect infinitive.",
        "tag": "Meaning match",
        "difficulty": "Basic",
        "sequence": 12
      },
      {
        "prompt": "Select the best grammar-based answer.",
        "options": [
          "He has might forgotten the deadline.",
          "He might have forgotten the deadline.",
          "He might forgot the deadline.",
          "He may forgetting the deadline."
        ],
        "correctIndex": 1,
        "explanation": "Use a modal of possibility with the perfect infinitive.",
        "tag": "Grammar",
        "difficulty": "Basic",
        "sequence": 13
      },
      {
        "prompt": "A learner needs to rewrite \"Perhaps he forgot the deadline.\". Which option works?",
        "options": [
          "He might have forgotten the deadline.",
          "He might forgot the deadline.",
          "He may forgetting the deadline.",
          "He has might forgotten the deadline."
        ],
        "correctIndex": 0,
        "explanation": "Use a modal of possibility with the perfect infinitive.",
        "tag": "Rewrite",
        "difficulty": "Basic",
        "sequence": 14
      },
      {
        "prompt": "Which answer would score well in a transformation task?",
        "options": [
          "He might forgot the deadline.",
          "He may forgetting the deadline.",
          "He has might forgotten the deadline.",
          "He might have forgotten the deadline."
        ],
        "correctIndex": 3,
        "explanation": "Use a modal of possibility with the perfect infinitive.",
        "tag": "Assessment",
        "difficulty": "Basic",
        "sequence": 15
      },
      {
        "prompt": "Which option should stay after checking meaning and form?",
        "options": [
          "He may forgetting the deadline.",
          "He has might forgotten the deadline.",
          "He might have forgotten the deadline.",
          "He might forgot the deadline."
        ],
        "correctIndex": 2,
        "explanation": "Use a modal of possibility with the perfect infinitive.",
        "tag": "Accuracy",
        "difficulty": "Basic",
        "sequence": 16
      },
      {
        "prompt": "Which lesson note explains the correct answer?",
        "options": [
          "Conditional types do not depend on verb form.",
          "Use a modal of possibility with the perfect infinitive.",
          "Transformation tasks allow a small meaning change.",
          "Must not means lack of necessity."
        ],
        "correctIndex": 1,
        "explanation": "Use a modal of possibility with the perfect infinitive.",
        "tag": "Explanation",
        "difficulty": "Basic",
        "sequence": 17
      },
      {
        "prompt": "Choose the strongest response to this cloze or transformation prompt: \"Perhaps he forgot the deadline.\"",
        "options": [
          "He might have forgotten the deadline.",
          "He might forgot the deadline.",
          "He may forgetting the deadline.",
          "He has might forgotten the deadline."
        ],
        "correctIndex": 0,
        "explanation": "Use a modal of possibility with the perfect infinitive.",
        "tag": "Response",
        "difficulty": "Basic",
        "sequence": 18
      },
      {
        "prompt": "Which answer fits the structure and the meaning?",
        "options": [
          "He might forgot the deadline.",
          "He may forgetting the deadline.",
          "He has might forgotten the deadline.",
          "He might have forgotten the deadline."
        ],
        "correctIndex": 3,
        "explanation": "Use a modal of possibility with the perfect infinitive.",
        "tag": "Structure",
        "difficulty": "Basic",
        "sequence": 19
      },
      {
        "prompt": "Which option is best for exam-style grammar practice?",
        "options": [
          "He may forgetting the deadline.",
          "He has might forgotten the deadline.",
          "He might have forgotten the deadline.",
          "He might forgot the deadline."
        ],
        "correctIndex": 2,
        "explanation": "Use a modal of possibility with the perfect infinitive.",
        "tag": "Exam style",
        "difficulty": "Basic",
        "sequence": 20
      },
      {
        "prompt": "Choose the best transformation or completion for: \"She is the best editor in the team.\"",
        "options": [
          "Nobody in the team is editing than her.",
          "She edits the best than nobody.",
          "Nobody in the team edits better than she does.",
          "Nobody in the team edits better than she."
        ],
        "correctIndex": 2,
        "explanation": "The comparative transformation keeps the original meaning.",
        "tag": "Transformation",
        "difficulty": "Intermediate",
        "sequence": 21
      },
      {
        "prompt": "Which answer keeps the meaning closest to the original?",
        "options": [
          "She edits the best than nobody.",
          "Nobody in the team edits better than she does.",
          "Nobody in the team edits better than she.",
          "Nobody in the team is editing than her."
        ],
        "correctIndex": 1,
        "explanation": "The comparative transformation keeps the original meaning.",
        "tag": "Meaning match",
        "difficulty": "Intermediate",
        "sequence": 22
      },
      {
        "prompt": "Select the best grammar-based answer.",
        "options": [
          "Nobody in the team edits better than she does.",
          "Nobody in the team edits better than she.",
          "Nobody in the team is editing than her.",
          "She edits the best than nobody."
        ],
        "correctIndex": 0,
        "explanation": "The comparative transformation keeps the original meaning.",
        "tag": "Grammar",
        "difficulty": "Intermediate",
        "sequence": 23
      },
      {
        "prompt": "A learner needs to rewrite \"She is the best editor in the team.\". Which option works?",
        "options": [
          "Nobody in the team edits better than she.",
          "Nobody in the team is editing than her.",
          "She edits the best than nobody.",
          "Nobody in the team edits better than she does."
        ],
        "correctIndex": 3,
        "explanation": "The comparative transformation keeps the original meaning.",
        "tag": "Rewrite",
        "difficulty": "Intermediate",
        "sequence": 24
      },
      {
        "prompt": "Which answer would score well in a transformation task?",
        "options": [
          "Nobody in the team is editing than her.",
          "She edits the best than nobody.",
          "Nobody in the team edits better than she does.",
          "Nobody in the team edits better than she."
        ],
        "correctIndex": 2,
        "explanation": "The comparative transformation keeps the original meaning.",
        "tag": "Assessment",
        "difficulty": "Intermediate",
        "sequence": 25
      },
      {
        "prompt": "Which option should stay after checking meaning and form?",
        "options": [
          "She edits the best than nobody.",
          "Nobody in the team edits better than she does.",
          "Nobody in the team edits better than she.",
          "Nobody in the team is editing than her."
        ],
        "correctIndex": 1,
        "explanation": "The comparative transformation keeps the original meaning.",
        "tag": "Accuracy",
        "difficulty": "Intermediate",
        "sequence": 26
      },
      {
        "prompt": "Which lesson note explains the correct answer?",
        "options": [
          "The comparative transformation keeps the original meaning.",
          "Transformation tasks allow a small meaning change.",
          "Must not means lack of necessity.",
          "Conditional types do not depend on verb form."
        ],
        "correctIndex": 0,
        "explanation": "The comparative transformation keeps the original meaning.",
        "tag": "Explanation",
        "difficulty": "Intermediate",
        "sequence": 27
      },
      {
        "prompt": "Choose the strongest response to this cloze or transformation prompt: \"She is the best editor in the team.\"",
        "options": [
          "Nobody in the team edits better than she.",
          "Nobody in the team is editing than her.",
          "She edits the best than nobody.",
          "Nobody in the team edits better than she does."
        ],
        "correctIndex": 3,
        "explanation": "The comparative transformation keeps the original meaning.",
        "tag": "Response",
        "difficulty": "Intermediate",
        "sequence": 28
      },
      {
        "prompt": "Which answer fits the structure and the meaning?",
        "options": [
          "Nobody in the team is editing than her.",
          "She edits the best than nobody.",
          "Nobody in the team edits better than she does.",
          "Nobody in the team edits better than she."
        ],
        "correctIndex": 2,
        "explanation": "The comparative transformation keeps the original meaning.",
        "tag": "Structure",
        "difficulty": "Intermediate",
        "sequence": 29
      },
      {
        "prompt": "Which option is best for exam-style grammar practice?",
        "options": [
          "She edits the best than nobody.",
          "Nobody in the team edits better than she does.",
          "Nobody in the team edits better than she.",
          "Nobody in the team is editing than her."
        ],
        "correctIndex": 1,
        "explanation": "The comparative transformation keeps the original meaning.",
        "tag": "Exam style",
        "difficulty": "Intermediate",
        "sequence": 30
      },
      {
        "prompt": "Choose the best transformation or completion for: \"I do not have enough time, so I cannot join the workshop.\"",
        "options": [
          "If I would have enough time, I joined the workshop.",
          "If I had enough time, I would join the workshop.",
          "If I have enough time, I would join the workshop.",
          "If I had enough time, I will join the workshop."
        ],
        "correctIndex": 1,
        "explanation": "Use the second conditional for unreal present situations.",
        "tag": "Transformation",
        "difficulty": "Intermediate",
        "sequence": 31
      },
      {
        "prompt": "Which answer keeps the meaning closest to the original?",
        "options": [
          "If I had enough time, I would join the workshop.",
          "If I have enough time, I would join the workshop.",
          "If I had enough time, I will join the workshop.",
          "If I would have enough time, I joined the workshop."
        ],
        "correctIndex": 0,
        "explanation": "Use the second conditional for unreal present situations.",
        "tag": "Meaning match",
        "difficulty": "Intermediate",
        "sequence": 32
      },
      {
        "prompt": "Select the best grammar-based answer.",
        "options": [
          "If I have enough time, I would join the workshop.",
          "If I had enough time, I will join the workshop.",
          "If I would have enough time, I joined the workshop.",
          "If I had enough time, I would join the workshop."
        ],
        "correctIndex": 3,
        "explanation": "Use the second conditional for unreal present situations.",
        "tag": "Grammar",
        "difficulty": "Intermediate",
        "sequence": 33
      },
      {
        "prompt": "A learner needs to rewrite \"I do not have enough time, so I cannot join the workshop.\". Which option works?",
        "options": [
          "If I had enough time, I will join the workshop.",
          "If I would have enough time, I joined the workshop.",
          "If I had enough time, I would join the workshop.",
          "If I have enough time, I would join the workshop."
        ],
        "correctIndex": 2,
        "explanation": "Use the second conditional for unreal present situations.",
        "tag": "Rewrite",
        "difficulty": "Intermediate",
        "sequence": 34
      },
      {
        "prompt": "Which answer would score well in a transformation task?",
        "options": [
          "If I would have enough time, I joined the workshop.",
          "If I had enough time, I would join the workshop.",
          "If I have enough time, I would join the workshop.",
          "If I had enough time, I will join the workshop."
        ],
        "correctIndex": 1,
        "explanation": "Use the second conditional for unreal present situations.",
        "tag": "Assessment",
        "difficulty": "Intermediate",
        "sequence": 35
      },
      {
        "prompt": "Which option should stay after checking meaning and form?",
        "options": [
          "If I had enough time, I would join the workshop.",
          "If I have enough time, I would join the workshop.",
          "If I had enough time, I will join the workshop.",
          "If I would have enough time, I joined the workshop."
        ],
        "correctIndex": 0,
        "explanation": "Use the second conditional for unreal present situations.",
        "tag": "Accuracy",
        "difficulty": "Intermediate",
        "sequence": 36
      },
      {
        "prompt": "Which lesson note explains the correct answer?",
        "options": [
          "Transformation tasks allow a small meaning change.",
          "Must not means lack of necessity.",
          "Conditional types do not depend on verb form.",
          "Use the second conditional for unreal present situations."
        ],
        "correctIndex": 3,
        "explanation": "Use the second conditional for unreal present situations.",
        "tag": "Explanation",
        "difficulty": "Intermediate",
        "sequence": 37
      },
      {
        "prompt": "Choose the strongest response to this cloze or transformation prompt: \"I do not have enough time, so I cannot join the workshop.\"",
        "options": [
          "If I had enough time, I will join the workshop.",
          "If I would have enough time, I joined the workshop.",
          "If I had enough time, I would join the workshop.",
          "If I have enough time, I would join the workshop."
        ],
        "correctIndex": 2,
        "explanation": "Use the second conditional for unreal present situations.",
        "tag": "Response",
        "difficulty": "Intermediate",
        "sequence": 38
      },
      {
        "prompt": "Which answer fits the structure and the meaning?",
        "options": [
          "If I would have enough time, I joined the workshop.",
          "If I had enough time, I would join the workshop.",
          "If I have enough time, I would join the workshop.",
          "If I had enough time, I will join the workshop."
        ],
        "correctIndex": 1,
        "explanation": "Use the second conditional for unreal present situations.",
        "tag": "Structure",
        "difficulty": "Intermediate",
        "sequence": 39
      },
      {
        "prompt": "Which option is best for exam-style grammar practice?",
        "options": [
          "If I had enough time, I would join the workshop.",
          "If I have enough time, I would join the workshop.",
          "If I had enough time, I will join the workshop.",
          "If I would have enough time, I joined the workshop."
        ],
        "correctIndex": 0,
        "explanation": "Use the second conditional for unreal present situations.",
        "tag": "Exam style",
        "difficulty": "Intermediate",
        "sequence": 40
      },
      {
        "prompt": "Choose the best transformation or completion for: \"You must not park here.\"",
        "options": [
          "You are not allowed to park here.",
          "You do not have to park here.",
          "You might not park here.",
          "Parking here is not necessary."
        ],
        "correctIndex": 0,
        "explanation": "Must not expresses prohibition.",
        "tag": "Transformation",
        "difficulty": "Advanced",
        "sequence": 41
      },
      {
        "prompt": "Which answer keeps the meaning closest to the original?",
        "options": [
          "You do not have to park here.",
          "You might not park here.",
          "Parking here is not necessary.",
          "You are not allowed to park here."
        ],
        "correctIndex": 3,
        "explanation": "Must not expresses prohibition.",
        "tag": "Meaning match",
        "difficulty": "Advanced",
        "sequence": 42
      },
      {
        "prompt": "Select the best grammar-based answer.",
        "options": [
          "You might not park here.",
          "Parking here is not necessary.",
          "You are not allowed to park here.",
          "You do not have to park here."
        ],
        "correctIndex": 2,
        "explanation": "Must not expresses prohibition.",
        "tag": "Grammar",
        "difficulty": "Advanced",
        "sequence": 43
      },
      {
        "prompt": "A learner needs to rewrite \"You must not park here.\". Which option works?",
        "options": [
          "Parking here is not necessary.",
          "You are not allowed to park here.",
          "You do not have to park here.",
          "You might not park here."
        ],
        "correctIndex": 1,
        "explanation": "Must not expresses prohibition.",
        "tag": "Rewrite",
        "difficulty": "Advanced",
        "sequence": 44
      },
      {
        "prompt": "Which answer would score well in a transformation task?",
        "options": [
          "You are not allowed to park here.",
          "You do not have to park here.",
          "You might not park here.",
          "Parking here is not necessary."
        ],
        "correctIndex": 0,
        "explanation": "Must not expresses prohibition.",
        "tag": "Assessment",
        "difficulty": "Advanced",
        "sequence": 45
      },
      {
        "prompt": "Which option should stay after checking meaning and form?",
        "options": [
          "You do not have to park here.",
          "You might not park here.",
          "Parking here is not necessary.",
          "You are not allowed to park here."
        ],
        "correctIndex": 3,
        "explanation": "Must not expresses prohibition.",
        "tag": "Accuracy",
        "difficulty": "Advanced",
        "sequence": 46
      },
      {
        "prompt": "Which lesson note explains the correct answer?",
        "options": [
          "Must not means lack of necessity.",
          "Conditional types do not depend on verb form.",
          "Must not expresses prohibition.",
          "Transformation tasks allow a small meaning change."
        ],
        "correctIndex": 2,
        "explanation": "Must not expresses prohibition.",
        "tag": "Explanation",
        "difficulty": "Advanced",
        "sequence": 47
      },
      {
        "prompt": "Choose the strongest response to this cloze or transformation prompt: \"You must not park here.\"",
        "options": [
          "Parking here is not necessary.",
          "You are not allowed to park here.",
          "You do not have to park here.",
          "You might not park here."
        ],
        "correctIndex": 1,
        "explanation": "Must not expresses prohibition.",
        "tag": "Response",
        "difficulty": "Advanced",
        "sequence": 48
      },
      {
        "prompt": "Which answer fits the structure and the meaning?",
        "options": [
          "You are not allowed to park here.",
          "You do not have to park here.",
          "You might not park here.",
          "Parking here is not necessary."
        ],
        "correctIndex": 0,
        "explanation": "Must not expresses prohibition.",
        "tag": "Structure",
        "difficulty": "Advanced",
        "sequence": 49
      },
      {
        "prompt": "Which option is best for exam-style grammar practice?",
        "options": [
          "You do not have to park here.",
          "You might not park here.",
          "Parking here is not necessary.",
          "You are not allowed to park here."
        ],
        "correctIndex": 3,
        "explanation": "Must not expresses prohibition.",
        "tag": "Exam style",
        "difficulty": "Advanced",
        "sequence": 50
      },
      {
        "prompt": "Choose the best transformation or completion for: \"Neither of the answers ___ correct.\"",
        "options": [
          "are",
          "were",
          "be",
          "is"
        ],
        "correctIndex": 3,
        "explanation": "Neither is singular in formal standard grammar.",
        "tag": "Transformation",
        "difficulty": "Advanced",
        "sequence": 51
      },
      {
        "prompt": "Which answer keeps the meaning closest to the original?",
        "options": [
          "were",
          "be",
          "is",
          "are"
        ],
        "correctIndex": 2,
        "explanation": "Neither is singular in formal standard grammar.",
        "tag": "Meaning match",
        "difficulty": "Advanced",
        "sequence": 52
      },
      {
        "prompt": "Select the best grammar-based answer.",
        "options": [
          "be",
          "is",
          "are",
          "were"
        ],
        "correctIndex": 1,
        "explanation": "Neither is singular in formal standard grammar.",
        "tag": "Grammar",
        "difficulty": "Advanced",
        "sequence": 53
      },
      {
        "prompt": "A learner needs to rewrite \"Neither of the answers ___ correct.\". Which option works?",
        "options": [
          "is",
          "are",
          "were",
          "be"
        ],
        "correctIndex": 0,
        "explanation": "Neither is singular in formal standard grammar.",
        "tag": "Rewrite",
        "difficulty": "Advanced",
        "sequence": 54
      },
      {
        "prompt": "Which answer would score well in a transformation task?",
        "options": [
          "are",
          "were",
          "be",
          "is"
        ],
        "correctIndex": 3,
        "explanation": "Neither is singular in formal standard grammar.",
        "tag": "Assessment",
        "difficulty": "Advanced",
        "sequence": 55
      },
      {
        "prompt": "Which option should stay after checking meaning and form?",
        "options": [
          "were",
          "be",
          "is",
          "are"
        ],
        "correctIndex": 2,
        "explanation": "Neither is singular in formal standard grammar.",
        "tag": "Accuracy",
        "difficulty": "Advanced",
        "sequence": 56
      },
      {
        "prompt": "Which lesson note explains the correct answer?",
        "options": [
          "Conditional types do not depend on verb form.",
          "Neither is singular in formal standard grammar.",
          "Transformation tasks allow a small meaning change.",
          "Must not means lack of necessity."
        ],
        "correctIndex": 1,
        "explanation": "Neither is singular in formal standard grammar.",
        "tag": "Explanation",
        "difficulty": "Advanced",
        "sequence": 57
      },
      {
        "prompt": "Choose the strongest response to this cloze or transformation prompt: \"Neither of the answers ___ correct.\"",
        "options": [
          "is",
          "are",
          "were",
          "be"
        ],
        "correctIndex": 0,
        "explanation": "Neither is singular in formal standard grammar.",
        "tag": "Response",
        "difficulty": "Advanced",
        "sequence": 58
      },
      {
        "prompt": "Which answer fits the structure and the meaning?",
        "options": [
          "are",
          "were",
          "be",
          "is"
        ],
        "correctIndex": 3,
        "explanation": "Neither is singular in formal standard grammar.",
        "tag": "Structure",
        "difficulty": "Advanced",
        "sequence": 59
      },
      {
        "prompt": "Which option is best for exam-style grammar practice?",
        "options": [
          "were",
          "be",
          "is",
          "are"
        ],
        "correctIndex": 2,
        "explanation": "Neither is singular in formal standard grammar.",
        "tag": "Exam style",
        "difficulty": "Advanced",
        "sequence": 60
      }
    ],
    "advanced": [
      {
        "prompt": "Choose the best transformation or completion for: \"It is not necessary to arrive early.\"",
        "options": [
          "You do not have to arrive early.",
          "You must not arrive early.",
          "You should not arrive early.",
          "You are not arriving early."
        ],
        "correctIndex": 0,
        "explanation": "Do not have to expresses lack of necessity, not prohibition.",
        "tag": "Transformation",
        "difficulty": "Review Challenge",
        "sequence": 1
      },
      {
        "prompt": "Which answer keeps the meaning closest to the original?",
        "options": [
          "You must not arrive early.",
          "You should not arrive early.",
          "You are not arriving early.",
          "You do not have to arrive early."
        ],
        "correctIndex": 3,
        "explanation": "Do not have to expresses lack of necessity, not prohibition.",
        "tag": "Meaning match",
        "difficulty": "Review Challenge",
        "sequence": 2
      },
      {
        "prompt": "Select the best grammar-based answer.",
        "options": [
          "You should not arrive early.",
          "You are not arriving early.",
          "You do not have to arrive early.",
          "You must not arrive early."
        ],
        "correctIndex": 2,
        "explanation": "Do not have to expresses lack of necessity, not prohibition.",
        "tag": "Grammar",
        "difficulty": "Review Challenge",
        "sequence": 3
      },
      {
        "prompt": "A learner needs to rewrite \"It is not necessary to arrive early.\". Which option works?",
        "options": [
          "You are not arriving early.",
          "You do not have to arrive early.",
          "You must not arrive early.",
          "You should not arrive early."
        ],
        "correctIndex": 1,
        "explanation": "Do not have to expresses lack of necessity, not prohibition.",
        "tag": "Rewrite",
        "difficulty": "Review Challenge",
        "sequence": 4
      },
      {
        "prompt": "Which answer would score well in a transformation task?",
        "options": [
          "You do not have to arrive early.",
          "You must not arrive early.",
          "You should not arrive early.",
          "You are not arriving early."
        ],
        "correctIndex": 0,
        "explanation": "Do not have to expresses lack of necessity, not prohibition.",
        "tag": "Assessment",
        "difficulty": "Review Challenge",
        "sequence": 5
      },
      {
        "prompt": "Which option should stay after checking meaning and form?",
        "options": [
          "You must not arrive early.",
          "You should not arrive early.",
          "You are not arriving early.",
          "You do not have to arrive early."
        ],
        "correctIndex": 3,
        "explanation": "Do not have to expresses lack of necessity, not prohibition.",
        "tag": "Accuracy",
        "difficulty": "Review Challenge",
        "sequence": 6
      },
      {
        "prompt": "Which focus best matches the main learning challenge in \"Transformations and Cloze Practice\"?",
        "options": [
          "Identify the job each word does inside a sentence.",
          "Build complete sentences with subjects, verbs, and clear complements.",
          "Use a, an, the, some, and zero article correctly.",
          "Rephrase meaning accurately and complete grammar-based gaps."
        ],
        "correctIndex": 3,
        "explanation": "The focus of this lesson is: Rephrase meaning accurately and complete grammar-based gaps.",
        "tag": "Advanced focus",
        "difficulty": "Review Challenge",
        "sequence": 7
      },
      {
        "prompt": "Which rule belongs most directly to \"Transformations and Cloze Practice\"?",
        "options": [
          "Adjectives describe nouns; adverbs usually modify verbs, adjectives, or other adverbs.",
          "Determiners such as the, a, this, and many signal which noun you mean.",
          "Keep the meaning constant even when the structure changes.",
          "A noun names a person, place, thing, or idea, while a verb shows action or state."
        ],
        "correctIndex": 2,
        "explanation": "Keep the meaning constant even when the structure changes.",
        "tag": "Rule distinction",
        "difficulty": "Review Challenge",
        "sequence": 8
      },
      {
        "prompt": "Which editing warning is most important to remember in \"Transformations and Cloze Practice\"?",
        "options": [
          {
            "wrong": "The news is exciting. She is exciting.",
            "right": "The news is exciting. She is excited.",
            "note": "Use the -ed adjective for the person's feeling, -ing for the thing's quality."
          },
          {
            "wrong": "Original: She is the most intelligent. Transformation: Nobody is as intelligent as her. Note: correct answer is 'as her' (object pronoun), not 'as she'.",
            "right": "Nobody is as intelligent as she is. Or: Nobody is as intelligent as her.",
            "note": "Comparison can use object pronoun (her) or subject pronoun + verb (she is); both are correct."
          },
          {
            "wrong": "I have a friendly meeting tomorrow.",
            "right": "I have a friendly meeting tomorrow.",
            "note": "Friendly is an adjective here, not an adverb, so no -ly suffix needed."
          },
          {
            "wrong": "He ran quick to the store.",
            "right": "He ran quickly to the store.",
            "note": "Adverbs modify verbs; use quickly, not quick."
          }
        ],
        "correctIndex": 1,
        "explanation": {
          "wrong": "Original: She is the most intelligent. Transformation: Nobody is as intelligent as her. Note: correct answer is 'as her' (object pronoun), not 'as she'.",
          "right": "Nobody is as intelligent as she is. Or: Nobody is as intelligent as her.",
          "note": "Comparison can use object pronoun (her) or subject pronoun + verb (she is); both are correct."
        },
        "tag": "Pitfall check",
        "difficulty": "Review Challenge",
        "sequence": 9
      },
      {
        "prompt": "Which practice move best extends the lesson after you finish the core explanation?",
        "options": [
          "Exercise 1 - Modal Transformations: Rewrite ten sentences using different modal forms without changing meaning.",
          "Exercise 1 - Labeling: Read a paragraph and mark each word with its part of speech (noun, verb, adj, adv, etc.)",
          "Exercise 2 - Identification: Identify the target word class in each sentence: 'Find the adverb that modifies ran.'",
          "Exercise 3 - Word Transformation: Transform words to different classes (run→runner→running; quick→quickly)"
        ],
        "correctIndex": 0,
        "explanation": "Exercise 1 - Modal Transformations: Rewrite ten sentences using different modal forms without changing meaning.",
        "tag": "Practice transfer",
        "difficulty": "Review Challenge",
        "sequence": 10
      },
      {
        "prompt": "Which explanation best matches this model sentence from \"Transformations and Cloze Practice\"? \"It is not necessary to arrive early. → You do not have to arrive early.\"",
        "options": [
          "student (noun), curious (adjective), quickly (adverb), opened (verb)",
          "She (pronoun), carefully (adverb), explained (verb), importance (noun)",
          "Although (conjunction), raining (verb form), we (pronoun), near (preposition), mountain (noun)",
          "Modal structure change: not necessary → do not have to (meaning preserved)."
        ],
        "correctIndex": 3,
        "explanation": "Modal structure change: not necessary → do not have to (meaning preserved).",
        "tag": "Example analysis",
        "difficulty": "Review Challenge",
        "sequence": 11
      },
      {
        "prompt": "Which objective belongs to \"Transformations and Cloze Practice\"?",
        "options": [
          "Separate form from function when a word changes category by use.",
          "Explain why the same word can behave differently across contexts.",
          "Preserve meaning while changing the structure.",
          "Recognize the major word classes in authentic sentences."
        ],
        "correctIndex": 2,
        "explanation": "Preserve meaning while changing the structure.",
        "tag": "Objective check",
        "difficulty": "Review Challenge",
        "sequence": 12
      },
      {
        "prompt": "Which portfolio task best fits the module that contains \"Transformations and Cloze Practice\"?",
        "options": [
          "Edit an old paragraph only for sentence-level accuracy and annotate each correction.",
          "Complete a mixed review pack and write a reflection on your most persistent grammar errors.",
          "Write a 150-word self-introduction and label nouns, verbs, articles, and sentence types.",
          "Write a three-part narrative using present, past, and future meaning accurately."
        ],
        "correctIndex": 1,
        "explanation": "Complete a mixed review pack and write a reflection on your most persistent grammar errors.",
        "tag": "Portfolio transfer",
        "difficulty": "Review Challenge",
        "sequence": 13
      },
      {
        "prompt": "Which module description best fits the context of \"Transformations and Cloze Practice\"?",
        "options": [
          "Turn all of the course content into active control through correction, transformation, and review strategy.",
          "Build a clean base in word classes, sentence architecture, and noun phrases before moving into more advanced control.",
          "Learn how English grammar maps routine, action-in-progress, experience, finished time, future reference, and modal meaning.",
          "Strengthen agreement, pronoun reference, auxiliary use, pattern control, and active-passive choices."
        ],
        "correctIndex": 0,
        "explanation": "Turn all of the course content into active control through correction, transformation, and review strategy.",
        "tag": "Module alignment",
        "difficulty": "Review Challenge",
        "sequence": 14
      },
      {
        "prompt": "Which reading insight best matches the story work in \"Transformations and Cloze Practice\"?",
        "options": [
          "Market (noun), Saturday (noun), Maya (noun) are the main subjects and objects.",
          "Visits, walks, looking, shows, answer, select, stands are action verbs showing what people do.",
          "Busy, colorful, fresh, ripe describe nouns (busy market, colorful stalls).",
          "Transformation and cloze tasks test deep understanding, not just recognition; they require you to apply rules productively."
        ],
        "correctIndex": 3,
        "explanation": "Transformation and cloze tasks test deep understanding, not just recognition; they require you to apply rules productively.",
        "tag": "Story analysis",
        "difficulty": "Review Challenge",
        "sequence": 15
      },
      {
        "prompt": "Which lesson note explains the correct answer?",
        "options": [
          "Must not means lack of necessity.",
          "Conditional types do not depend on verb form.",
          "Do not have to expresses lack of necessity, not prohibition.",
          "Transformation tasks allow a small meaning change."
        ],
        "correctIndex": 2,
        "explanation": "Do not have to expresses lack of necessity, not prohibition.",
        "tag": "Explanation",
        "difficulty": "Review Challenge",
        "sequence": 16
      },
      {
        "prompt": "Choose the strongest response to this cloze or transformation prompt: \"It is not necessary to arrive early.\"",
        "options": [
          "You are not arriving early.",
          "You do not have to arrive early.",
          "You must not arrive early.",
          "You should not arrive early."
        ],
        "correctIndex": 1,
        "explanation": "Do not have to expresses lack of necessity, not prohibition.",
        "tag": "Response",
        "difficulty": "Review Challenge",
        "sequence": 17
      },
      {
        "prompt": "Which answer fits the structure and the meaning?",
        "options": [
          "You do not have to arrive early.",
          "You must not arrive early.",
          "You should not arrive early.",
          "You are not arriving early."
        ],
        "correctIndex": 0,
        "explanation": "Do not have to expresses lack of necessity, not prohibition.",
        "tag": "Structure",
        "difficulty": "Review Challenge",
        "sequence": 18
      },
      {
        "prompt": "Which option is best for exam-style grammar practice?",
        "options": [
          "You must not arrive early.",
          "You should not arrive early.",
          "You are not arriving early.",
          "You do not have to arrive early."
        ],
        "correctIndex": 3,
        "explanation": "Do not have to expresses lack of necessity, not prohibition.",
        "tag": "Exam style",
        "difficulty": "Review Challenge",
        "sequence": 19
      },
      {
        "prompt": "Choose the best transformation or completion for: \"Perhaps he forgot the deadline.\"",
        "options": [
          "He might forgot the deadline.",
          "He may forgetting the deadline.",
          "He has might forgotten the deadline.",
          "He might have forgotten the deadline."
        ],
        "correctIndex": 3,
        "explanation": "Use a modal of possibility with the perfect infinitive.",
        "tag": "Transformation",
        "difficulty": "Review Challenge",
        "sequence": 20
      }
    ]
  },
  "final-review": {
    "standard": [
      {
        "prompt": "In the sentence \"The curious student quickly opened the grammar book.\" what is the part of speech of \"quickly\"?",
        "options": [
          "adverb",
          "adjective",
          "noun",
          "preposition"
        ],
        "correctIndex": 0,
        "explanation": "Quickly modifies the verb opened.",
        "tag": "Word class",
        "difficulty": "Basic",
        "sequence": 1
      },
      {
        "prompt": "How should \"While the rain continued.\" be classified?",
        "options": [
          "fragment",
          "complete sentence",
          "run-on",
          "question"
        ],
        "correctIndex": 0,
        "explanation": "The clause begins with a subordinator and needs a main clause.",
        "tag": "Classification",
        "difficulty": "Basic",
        "sequence": 2
      },
      {
        "prompt": "Choose the best article pattern: \"__ sun rises in the east.\"",
        "options": [
          "The",
          "A",
          "An",
          "No article"
        ],
        "correctIndex": 0,
        "explanation": "Sun is unique in normal context, so the is used.",
        "tag": "Articles",
        "difficulty": "Basic",
        "sequence": 3
      },
      {
        "prompt": "Choose the best routine form: \"Rhea ___ every morning.\"",
        "options": [
          "serves",
          "is serving",
          "serve",
          "does serve"
        ],
        "correctIndex": 0,
        "explanation": "Use the simple for routine meaning and the continuous for temporary action.",
        "tag": "Routine meaning",
        "difficulty": "Basic",
        "sequence": 4
      },
      {
        "prompt": "Choose the best form with a finished time: \"I ___ in January.\"",
        "options": [
          "visited",
          "have visited",
          "visit",
          "was visit"
        ],
        "correctIndex": 0,
        "explanation": "Finished time pushes you toward the past simple; life experience supports the present perfect.",
        "tag": "Finished time",
        "difficulty": "Basic",
        "sequence": 5
      },
      {
        "prompt": "Choose the best form for a decision made now: \"I ___ another copy now.\"",
        "options": [
          "will buy",
          "am going to buy",
          "am meeting",
          "buy"
        ],
        "correctIndex": 0,
        "explanation": "Will often expresses a decision made now, while going to and the present continuous show prior plans or arrangements.",
        "tag": "Decision now",
        "difficulty": "Basic",
        "sequence": 6
      },
      {
        "prompt": "Choose the correct verb: \"The list of topics ___ improving.\"",
        "options": [
          "is",
          "are",
          "be",
          "were"
        ],
        "correctIndex": 0,
        "explanation": "The head noun list is singular.",
        "tag": "Agreement",
        "difficulty": "Basic",
        "sequence": 7
      },
      {
        "prompt": "Choose the best completion: \"Why ___ you leave early?\"",
        "options": [
          "did",
          "do",
          "does",
          "were"
        ],
        "correctIndex": 0,
        "explanation": "Past simple questions need did plus the base verb.",
        "tag": "Completion",
        "difficulty": "Basic",
        "sequence": 8
      },
      {
        "prompt": "Choose the best completion: \"The result depends ___ careful planning.\"",
        "options": [
          "on",
          "at",
          "for",
          "with"
        ],
        "correctIndex": 0,
        "explanation": "Depend is commonly followed by on.",
        "tag": "Pattern",
        "difficulty": "Basic",
        "sequence": 9
      },
      {
        "prompt": "Choose the best combined sentence for: \"The tutor helped me yesterday. She explained articles clearly.\"",
        "options": [
          "The tutor who helped me yesterday explained articles clearly.",
          "The tutor, who helped me yesterday explained articles clearly.",
          "The tutor who she helped me yesterday explained articles clearly.",
          "The tutor helped me yesterday, explained articles clearly."
        ],
        "correctIndex": 0,
        "explanation": "Use a restrictive relative clause without unnecessary pronouns or commas.",
        "tag": "Combination",
        "difficulty": "Basic",
        "sequence": 10
      },
      {
        "prompt": "Choose the best completion: \"If you heat ice, it ___.\"",
        "options": [
          "melts",
          "will melt",
          "would melt",
          "melted"
        ],
        "correctIndex": 0,
        "explanation": "This is a zero conditional showing a general truth.",
        "tag": "Conditional form",
        "difficulty": "Basic",
        "sequence": 11
      },
      {
        "prompt": "Choose the best reported version of \"I am tired.\"",
        "options": [
          "She said that she was tired.",
          "She said that she is tired yesterday.",
          "She told that she was tired.",
          "She asked that she was tired."
        ],
        "correctIndex": 0,
        "explanation": "Backshift and pronoun change are both needed.",
        "tag": "Reported speech",
        "difficulty": "Basic",
        "sequence": 12
      },
      {
        "prompt": "Choose the best punctuated version of this sentence: \"The lesson was difficult, we asked extra questions.\"",
        "options": [
          "The lesson was difficult, so we asked extra questions.",
          "The lesson was difficult we asked extra questions.",
          "The lesson was difficult; because we asked extra questions.",
          "The lesson was difficult, because we asked extra questions."
        ],
        "correctIndex": 0,
        "explanation": "The original is a comma splice and needs a better link.",
        "tag": "Punctuation",
        "difficulty": "Basic",
        "sequence": 13
      },
      {
        "prompt": "Choose the best parallel or logical revision of \"He likes reading, to swim, and cycling.\"",
        "options": [
          "He likes reading, swimming, and cycling.",
          "He likes read, swimming, and cycling.",
          "He likes reading, swim, and cycling.",
          "He likes to reading, swimming, and cycle."
        ],
        "correctIndex": 0,
        "explanation": "Parallel items need matching grammatical form.",
        "tag": "Parallelism",
        "difficulty": "Basic",
        "sequence": 14
      },
      {
        "prompt": "Choose the most concise or formal revision of \"We made a decision to postpone the event.\"",
        "options": [
          "We decided to postpone the event.",
          "We made the event postponed.",
          "There was a decision with regard to postponing the event.",
          "We did a postponement decision."
        ],
        "correctIndex": 0,
        "explanation": "A direct verb is usually more concise than a weak verb plus noun.",
        "tag": "Concision",
        "difficulty": "Basic",
        "sequence": 15
      },
      {
        "prompt": "Choose the best correction for \"She don't knows the answer.\"",
        "options": [
          "She doesn't know the answer.",
          "She don't know the answer.",
          "She doesn't knows the answer.",
          "She not know the answer."
        ],
        "correctIndex": 0,
        "explanation": "The auxiliary carries the tense and agreement; the main verb stays in base form.",
        "tag": "Correction",
        "difficulty": "Basic",
        "sequence": 16
      },
      {
        "prompt": "Choose the best transformation or completion for: \"It is not necessary to arrive early.\"",
        "options": [
          "You do not have to arrive early.",
          "You must not arrive early.",
          "You should not arrive early.",
          "You are not arriving early."
        ],
        "correctIndex": 0,
        "explanation": "Do not have to expresses lack of necessity, not prohibition.",
        "tag": "Transformation",
        "difficulty": "Basic",
        "sequence": 17
      },
      {
        "prompt": "Choose the best grammatical label for \"quickly\" in \"The curious student quickly opened the grammar book.\"",
        "options": [
          "adjective",
          "noun",
          "preposition",
          "adverb"
        ],
        "correctIndex": 3,
        "explanation": "Quickly modifies the verb opened.",
        "tag": "Word class",
        "difficulty": "Basic",
        "sequence": 18
      },
      {
        "prompt": "Which label best fits this string of words: \"While the rain continued.\"?",
        "options": [
          "complete sentence",
          "run-on",
          "question",
          "fragment"
        ],
        "correctIndex": 3,
        "explanation": "The clause begins with a subordinator and needs a main clause.",
        "tag": "Classification",
        "difficulty": "Basic",
        "sequence": 19
      },
      {
        "prompt": "Which answer completes this noun phrase correctly? \"__ sun rises in the east.\"",
        "options": [
          "A",
          "An",
          "No article",
          "The"
        ],
        "correctIndex": 3,
        "explanation": "Sun is unique in normal context, so the is used.",
        "tag": "Noun phrase",
        "difficulty": "Basic",
        "sequence": 20
      },
      {
        "prompt": "Choose the best temporary form: \"Rhea ___ this week.\"",
        "options": [
          "serves",
          "serve",
          "has serve",
          "is serving"
        ],
        "correctIndex": 3,
        "explanation": "Use the simple for routine meaning and the continuous for temporary action.",
        "tag": "Current action",
        "difficulty": "Intermediate",
        "sequence": 21
      },
      {
        "prompt": "Choose the best form with present relevance: \"I ___ twice in my life.\"",
        "options": [
          "visited",
          "visit",
          "is visiting",
          "have visited"
        ],
        "correctIndex": 3,
        "explanation": "Finished time pushes you toward the past simple; life experience supports the present perfect.",
        "tag": "Present relevance",
        "difficulty": "Intermediate",
        "sequence": 22
      },
      {
        "prompt": "Choose the best form for an evidence-based prediction: \"I ___ because the sky is dark.\"",
        "options": [
          "will buy",
          "am meeting",
          "buy",
          "am going to buy"
        ],
        "correctIndex": 3,
        "explanation": "Will often expresses a decision made now, while going to and the present continuous show prior plans or arrangements.",
        "tag": "Prediction",
        "difficulty": "Intermediate",
        "sequence": 23
      },
      {
        "prompt": "Which sentence is correct?",
        "options": [
          "The list of topics are improving.",
          "The list of topics improve improving.",
          "The list of topics been improving.",
          "The list of topics is improving."
        ],
        "correctIndex": 3,
        "explanation": "The head noun list is singular.",
        "tag": "Correct sentence",
        "difficulty": "Intermediate",
        "sequence": 24
      },
      {
        "prompt": "Which option creates standard English in \"Why ___ you leave early?\"?",
        "options": [
          "do",
          "does",
          "were",
          "did"
        ],
        "correctIndex": 3,
        "explanation": "Past simple questions need did plus the base verb.",
        "tag": "Standard form",
        "difficulty": "Intermediate",
        "sequence": 25
      },
      {
        "prompt": "Which option matches normal English usage here? \"The result depends ___ careful planning.\"",
        "options": [
          "at",
          "for",
          "with",
          "on"
        ],
        "correctIndex": 3,
        "explanation": "Depend is commonly followed by on.",
        "tag": "Pattern",
        "difficulty": "Intermediate",
        "sequence": 26
      },
      {
        "prompt": "Which option uses clause grammar correctly? \"The tutor helped me yesterday. She explained articles clearly.\"",
        "options": [
          "The tutor, who helped me yesterday explained articles clearly.",
          "The tutor who she helped me yesterday explained articles clearly.",
          "The tutor helped me yesterday, explained articles clearly.",
          "The tutor who helped me yesterday explained articles clearly."
        ],
        "correctIndex": 3,
        "explanation": "Use a restrictive relative clause without unnecessary pronouns or commas.",
        "tag": "Clause control",
        "difficulty": "Intermediate",
        "sequence": 27
      },
      {
        "prompt": "Which option matches the meaning of \"If you heat ice, it ___.\"",
        "options": [
          "will melt",
          "would melt",
          "melted",
          "melts"
        ],
        "correctIndex": 3,
        "explanation": "This is a zero conditional showing a general truth.",
        "tag": "Meaning",
        "difficulty": "Intermediate",
        "sequence": 28
      },
      {
        "prompt": "Which answer correctly reports this message: \"I am tired.\"",
        "options": [
          "She said that she is tired yesterday.",
          "She told that she was tired.",
          "She asked that she was tired.",
          "She said that she was tired."
        ],
        "correctIndex": 3,
        "explanation": "Backshift and pronoun change are both needed.",
        "tag": "Reporting",
        "difficulty": "Intermediate",
        "sequence": 29
      },
      {
        "prompt": "Which sentence is punctuated correctly?",
        "options": [
          "The lesson was difficult we asked extra questions.",
          "The lesson was difficult; because we asked extra questions.",
          "The lesson was difficult, because we asked extra questions.",
          "The lesson was difficult, so we asked extra questions."
        ],
        "correctIndex": 3,
        "explanation": "The original is a comma splice and needs a better link.",
        "tag": "Correct sentence",
        "difficulty": "Intermediate",
        "sequence": 30
      },
      {
        "prompt": "Which version is balanced and grammatically sound?",
        "options": [
          "He likes read, swimming, and cycling.",
          "He likes reading, swim, and cycling.",
          "He likes to reading, swimming, and cycle.",
          "He likes reading, swimming, and cycling."
        ],
        "correctIndex": 3,
        "explanation": "Parallel items need matching grammatical form.",
        "tag": "Balance",
        "difficulty": "Intermediate",
        "sequence": 31
      },
      {
        "prompt": "Which version is strongest for academic or professional writing?",
        "options": [
          "We made the event postponed.",
          "There was a decision with regard to postponing the event.",
          "We did a postponement decision.",
          "We decided to postpone the event."
        ],
        "correctIndex": 3,
        "explanation": "A direct verb is usually more concise than a weak verb plus noun.",
        "tag": "Formal tone",
        "difficulty": "Intermediate",
        "sequence": 32
      },
      {
        "prompt": "Which edited sentence is right?",
        "options": [
          "She don't know the answer.",
          "She doesn't knows the answer.",
          "She not know the answer.",
          "She doesn't know the answer."
        ],
        "correctIndex": 3,
        "explanation": "The auxiliary carries the tense and agreement; the main verb stays in base form.",
        "tag": "Editing",
        "difficulty": "Intermediate",
        "sequence": 33
      },
      {
        "prompt": "Which answer keeps the meaning closest to the original?",
        "options": [
          "You must not arrive early.",
          "You should not arrive early.",
          "You are not arriving early.",
          "You do not have to arrive early."
        ],
        "correctIndex": 3,
        "explanation": "Do not have to expresses lack of necessity, not prohibition.",
        "tag": "Meaning match",
        "difficulty": "Intermediate",
        "sequence": 34
      },
      {
        "prompt": "Which category does \"quickly\" belong to in this sentence: \"The curious student quickly opened the grammar book.\"?",
        "options": [
          "noun",
          "preposition",
          "adverb",
          "adjective"
        ],
        "correctIndex": 2,
        "explanation": "Quickly modifies the verb opened.",
        "tag": "Word class",
        "difficulty": "Intermediate",
        "sequence": 35
      },
      {
        "prompt": "A grammar student sees \"While the rain continued.\". What kind of structure is it?",
        "options": [
          "run-on",
          "question",
          "fragment",
          "complete sentence"
        ],
        "correctIndex": 2,
        "explanation": "The clause begins with a subordinator and needs a main clause.",
        "tag": "Structure",
        "difficulty": "Intermediate",
        "sequence": 36
      },
      {
        "prompt": "Select the most natural article or determiner choice: \"__ sun rises in the east.\"",
        "options": [
          "An",
          "No article",
          "The",
          "A"
        ],
        "correctIndex": 2,
        "explanation": "Sun is unique in normal context, so the is used.",
        "tag": "Determiners",
        "difficulty": "Intermediate",
        "sequence": 37
      },
      {
        "prompt": "Which sentence sounds right for a habit?",
        "options": [
          "Rhea do serve every morning.",
          "Rhea serveing every morning.",
          "Rhea serves every morning.",
          "Rhea is serving every morning."
        ],
        "correctIndex": 2,
        "explanation": "Use the simple for routine meaning and the continuous for temporary action.",
        "tag": "Simple present",
        "difficulty": "Intermediate",
        "sequence": 38
      },
      {
        "prompt": "Which sentence is correct for a life experience meaning?",
        "options": [
          "I visit twice in my life.",
          "I had visit twice in my life.",
          "I have visited twice in my life.",
          "I visited twice in my life."
        ],
        "correctIndex": 2,
        "explanation": "Finished time pushes you toward the past simple; life experience supports the present perfect.",
        "tag": "Experience",
        "difficulty": "Intermediate",
        "sequence": 39
      },
      {
        "prompt": "Choose the best form for a fixed arrangement: \"I ___ the tutor on Friday.\"",
        "options": [
          "am going to buy",
          "buy",
          "am meeting",
          "will buy"
        ],
        "correctIndex": 2,
        "explanation": "Will often expresses a decision made now, while going to and the present continuous show prior plans or arrangements.",
        "tag": "Arrangement",
        "difficulty": "Intermediate",
        "sequence": 40
      },
      {
        "prompt": "Which explanation is correct for \"The list of topics\"?",
        "options": [
          "All subjects with of are plural.",
          "Interrupting phrases become the true subject.",
          "The head noun list is singular.",
          "The nearest noun decides the verb."
        ],
        "correctIndex": 2,
        "explanation": "The head noun list is singular.",
        "tag": "Explanation",
        "difficulty": "Advanced",
        "sequence": 41
      },
      {
        "prompt": "Select the form that avoids a grammar or reference error: \"Why ___ you leave early?\"",
        "options": [
          "does",
          "were",
          "did",
          "do"
        ],
        "correctIndex": 2,
        "explanation": "Past simple questions need did plus the base verb.",
        "tag": "Accuracy",
        "difficulty": "Advanced",
        "sequence": 42
      },
      {
        "prompt": "Select the grammatical answer for \"The result depends ___ careful planning.\"",
        "options": [
          "for",
          "with",
          "on",
          "at"
        ],
        "correctIndex": 2,
        "explanation": "Depend is commonly followed by on.",
        "tag": "Grammar",
        "difficulty": "Advanced",
        "sequence": 43
      },
      {
        "prompt": "Select the best revision of \"The tutor helped me yesterday. She explained articles clearly.\"",
        "options": [
          "The tutor who she helped me yesterday explained articles clearly.",
          "The tutor helped me yesterday, explained articles clearly.",
          "The tutor who helped me yesterday explained articles clearly.",
          "The tutor, who helped me yesterday explained articles clearly."
        ],
        "correctIndex": 2,
        "explanation": "Use a restrictive relative clause without unnecessary pronouns or commas.",
        "tag": "Revision",
        "difficulty": "Advanced",
        "sequence": 44
      },
      {
        "prompt": "Select the correct grammar for this conditional or wish sentence: \"If you heat ice, it ___.\"",
        "options": [
          "would melt",
          "melted",
          "melts",
          "will melt"
        ],
        "correctIndex": 2,
        "explanation": "This is a zero conditional showing a general truth.",
        "tag": "Grammar",
        "difficulty": "Advanced",
        "sequence": 45
      },
      {
        "prompt": "Select the standard reported form for \"I am tired.\"",
        "options": [
          "She told that she was tired.",
          "She asked that she was tired.",
          "She said that she was tired.",
          "She said that she is tired yesterday."
        ],
        "correctIndex": 2,
        "explanation": "Backshift and pronoun change are both needed.",
        "tag": "Standard form",
        "difficulty": "Advanced",
        "sequence": 46
      },
      {
        "prompt": "A writer needs to revise \"The lesson was difficult, we asked extra questions.\". Which option is best?",
        "options": [
          "The lesson was difficult; because we asked extra questions.",
          "The lesson was difficult, because we asked extra questions.",
          "The lesson was difficult, so we asked extra questions.",
          "The lesson was difficult we asked extra questions."
        ],
        "correctIndex": 2,
        "explanation": "The original is a comma splice and needs a better link.",
        "tag": "Revision",
        "difficulty": "Advanced",
        "sequence": 47
      },
      {
        "prompt": "A writer wants to fix \"He likes reading, to swim, and cycling.\". Which answer works best?",
        "options": [
          "He likes reading, swim, and cycling.",
          "He likes to reading, swimming, and cycle.",
          "He likes reading, swimming, and cycling.",
          "He likes read, swimming, and cycling."
        ],
        "correctIndex": 2,
        "explanation": "Parallel items need matching grammatical form.",
        "tag": "Revision",
        "difficulty": "Advanced",
        "sequence": 48
      },
      {
        "prompt": "A writer wants to cut clutter from \"We made a decision to postpone the event.\". Which answer is best?",
        "options": [
          "There was a decision with regard to postponing the event.",
          "We did a postponement decision.",
          "We decided to postpone the event.",
          "We made the event postponed."
        ],
        "correctIndex": 2,
        "explanation": "A direct verb is usually more concise than a weak verb plus noun.",
        "tag": "Revision",
        "difficulty": "Advanced",
        "sequence": 49
      },
      {
        "prompt": "A teacher marks \"She don't knows the answer.\" as incorrect. Which revision should the student use?",
        "options": [
          "She doesn't knows the answer.",
          "She not know the answer.",
          "She doesn't know the answer.",
          "She don't know the answer."
        ],
        "correctIndex": 2,
        "explanation": "The auxiliary carries the tense and agreement; the main verb stays in base form.",
        "tag": "Teacher feedback",
        "difficulty": "Advanced",
        "sequence": 50
      },
      {
        "prompt": "Select the best grammar-based answer.",
        "options": [
          "You should not arrive early.",
          "You are not arriving early.",
          "You do not have to arrive early.",
          "You must not arrive early."
        ],
        "correctIndex": 2,
        "explanation": "Do not have to expresses lack of necessity, not prohibition.",
        "tag": "Grammar",
        "difficulty": "Advanced",
        "sequence": 51
      },
      {
        "prompt": "What job does \"quickly\" perform in \"The curious student quickly opened the grammar book.\"?",
        "options": [
          "preposition",
          "adverb",
          "adjective",
          "noun"
        ],
        "correctIndex": 1,
        "explanation": "Quickly modifies the verb opened.",
        "tag": "Function",
        "difficulty": "Advanced",
        "sequence": 52
      },
      {
        "prompt": "Which answer correctly describes \"While the rain continued.\"?",
        "options": [
          "question",
          "fragment",
          "complete sentence",
          "run-on"
        ],
        "correctIndex": 1,
        "explanation": "The clause begins with a subordinator and needs a main clause.",
        "tag": "Structure",
        "difficulty": "Advanced",
        "sequence": 53
      },
      {
        "prompt": "What is the correct article usage in \"__ sun rises in the east.\"",
        "options": [
          "No article",
          "The",
          "A",
          "An"
        ],
        "correctIndex": 1,
        "explanation": "Sun is unique in normal context, so the is used.",
        "tag": "Usage",
        "difficulty": "Advanced",
        "sequence": 54
      },
      {
        "prompt": "Which sentence best describes something happening around now?",
        "options": [
          "Rhea have serve this week.",
          "Rhea is serving this week.",
          "Rhea serves this week.",
          "Rhea serve this week."
        ],
        "correctIndex": 1,
        "explanation": "Use the simple for routine meaning and the continuous for temporary action.",
        "tag": "Present continuous",
        "difficulty": "Advanced",
        "sequence": 55
      },
      {
        "prompt": "Which sentence is correct for a completed past event?",
        "options": [
          "I has visited in January.",
          "I visited in January.",
          "I have visited in January.",
          "I visit in January."
        ],
        "correctIndex": 1,
        "explanation": "Finished time pushes you toward the past simple; life experience supports the present perfect.",
        "tag": "Past event",
        "difficulty": "Advanced",
        "sequence": 56
      },
      {
        "prompt": "Choose the best future perfect form: \"By 8 p.m., i ___ the task.\"",
        "options": [
          "buy",
          "will have finished",
          "will buy",
          "am going to buy"
        ],
        "correctIndex": 1,
        "explanation": "Will often expresses a decision made now, while going to and the present continuous show prior plans or arrangements.",
        "tag": "Future perfect",
        "difficulty": "Advanced",
        "sequence": 57
      },
      {
        "prompt": "If a learner writes \"The list of topics are\", what is the better correction?",
        "options": [
          "The list of topics were",
          "The list of topics is",
          "The list of topics are",
          "The list of topics be"
        ],
        "correctIndex": 1,
        "explanation": "The head noun list is singular.",
        "tag": "Correction",
        "difficulty": "Advanced",
        "sequence": 58
      },
      {
        "prompt": "What should replace the blank in \"Why ___ you leave early?\"?",
        "options": [
          "were",
          "did",
          "do",
          "does"
        ],
        "correctIndex": 1,
        "explanation": "Past simple questions need did plus the base verb.",
        "tag": "Blank",
        "difficulty": "Advanced",
        "sequence": 59
      },
      {
        "prompt": "Which answer fits the phrase pattern in \"The result depends ___ careful planning.\"?",
        "options": [
          "with",
          "on",
          "at",
          "for"
        ],
        "correctIndex": 1,
        "explanation": "Depend is commonly followed by on.",
        "tag": "Phrase",
        "difficulty": "Advanced",
        "sequence": 60
      }
    ],
    "advanced": [
      {
        "prompt": "Choose the best grammatical label for \"quickly\" in \"The curious student quickly opened the grammar book.\"",
        "options": [
          "adjective",
          "noun",
          "preposition",
          "adverb"
        ],
        "correctIndex": 3,
        "explanation": "Quickly modifies the verb opened.",
        "tag": "Word class",
        "difficulty": "Review Challenge",
        "sequence": 1
      },
      {
        "prompt": "Which answer correctly identifies \"quickly\" in context? \"The curious student quickly opened the grammar book.\"",
        "options": [
          "adverb",
          "adjective",
          "noun",
          "preposition"
        ],
        "correctIndex": 0,
        "explanation": "Quickly modifies the verb opened.",
        "tag": "Context",
        "difficulty": "Review Challenge",
        "sequence": 2
      },
      {
        "prompt": "Which label best fits this string of words: \"While the rain continued.\"?",
        "options": [
          "complete sentence",
          "run-on",
          "question",
          "fragment"
        ],
        "correctIndex": 3,
        "explanation": "The clause begins with a subordinator and needs a main clause.",
        "tag": "Classification",
        "difficulty": "Review Challenge",
        "sequence": 3
      },
      {
        "prompt": "Which answer correctly describes \"While the rain continued.\"?",
        "options": [
          "question",
          "fragment",
          "complete sentence",
          "run-on"
        ],
        "correctIndex": 1,
        "explanation": "The clause begins with a subordinator and needs a main clause.",
        "tag": "Structure",
        "difficulty": "Review Challenge",
        "sequence": 4
      },
      {
        "prompt": "Choose the best article pattern: \"__ sun rises in the east.\"",
        "options": [
          "The",
          "A",
          "An",
          "No article"
        ],
        "correctIndex": 0,
        "explanation": "Sun is unique in normal context, so the is used.",
        "tag": "Articles",
        "difficulty": "Review Challenge",
        "sequence": 5
      },
      {
        "prompt": "Which answer completes this noun phrase correctly? \"__ sun rises in the east.\"",
        "options": [
          "A",
          "An",
          "No article",
          "The"
        ],
        "correctIndex": 3,
        "explanation": "Sun is unique in normal context, so the is used.",
        "tag": "Noun phrase",
        "difficulty": "Review Challenge",
        "sequence": 6
      },
      {
        "prompt": "Choose the best routine form: \"Rhea ___ every morning.\"",
        "options": [
          "serves",
          "is serving",
          "serve",
          "does serve"
        ],
        "correctIndex": 0,
        "explanation": "Use the simple for routine meaning and the continuous for temporary action.",
        "tag": "Routine meaning",
        "difficulty": "Review Challenge",
        "sequence": 7
      },
      {
        "prompt": "Choose the best temporary form: \"Rhea ___ this week.\"",
        "options": [
          "serves",
          "serve",
          "has serve",
          "is serving"
        ],
        "correctIndex": 3,
        "explanation": "Use the simple for routine meaning and the continuous for temporary action.",
        "tag": "Current action",
        "difficulty": "Review Challenge",
        "sequence": 8
      },
      {
        "prompt": "Choose the best form with a finished time: \"I ___ in January.\"",
        "options": [
          "visited",
          "have visited",
          "visit",
          "was visit"
        ],
        "correctIndex": 0,
        "explanation": "Finished time pushes you toward the past simple; life experience supports the present perfect.",
        "tag": "Finished time",
        "difficulty": "Review Challenge",
        "sequence": 9
      },
      {
        "prompt": "Choose the best form with present relevance: \"I ___ twice in my life.\"",
        "options": [
          "visited",
          "visit",
          "is visiting",
          "have visited"
        ],
        "correctIndex": 3,
        "explanation": "Finished time pushes you toward the past simple; life experience supports the present perfect.",
        "tag": "Present relevance",
        "difficulty": "Review Challenge",
        "sequence": 10
      },
      {
        "prompt": "Choose the best form for a decision made now: \"I ___ another copy now.\"",
        "options": [
          "will buy",
          "am going to buy",
          "am meeting",
          "buy"
        ],
        "correctIndex": 0,
        "explanation": "Will often expresses a decision made now, while going to and the present continuous show prior plans or arrangements.",
        "tag": "Decision now",
        "difficulty": "Review Challenge",
        "sequence": 11
      },
      {
        "prompt": "Choose the best form for an evidence-based prediction: \"I ___ because the sky is dark.\"",
        "options": [
          "will buy",
          "am meeting",
          "buy",
          "am going to buy"
        ],
        "correctIndex": 3,
        "explanation": "Will often expresses a decision made now, while going to and the present continuous show prior plans or arrangements.",
        "tag": "Prediction",
        "difficulty": "Review Challenge",
        "sequence": 12
      },
      {
        "prompt": "Choose the correct verb: \"The list of topics ___ improving.\"",
        "options": [
          "is",
          "are",
          "be",
          "were"
        ],
        "correctIndex": 0,
        "explanation": "The head noun list is singular.",
        "tag": "Agreement",
        "difficulty": "Review Challenge",
        "sequence": 13
      },
      {
        "prompt": "Which sentence is correct?",
        "options": [
          "The list of topics are improving.",
          "The list of topics improve improving.",
          "The list of topics been improving.",
          "The list of topics is improving."
        ],
        "correctIndex": 3,
        "explanation": "The head noun list is singular.",
        "tag": "Correct sentence",
        "difficulty": "Review Challenge",
        "sequence": 14
      },
      {
        "prompt": "Choose the best completion: \"Why ___ you leave early?\"",
        "options": [
          "did",
          "do",
          "does",
          "were"
        ],
        "correctIndex": 0,
        "explanation": "Past simple questions need did plus the base verb.",
        "tag": "Completion",
        "difficulty": "Review Challenge",
        "sequence": 15
      },
      {
        "prompt": "Which option creates standard English in \"Why ___ you leave early?\"?",
        "options": [
          "do",
          "does",
          "were",
          "did"
        ],
        "correctIndex": 3,
        "explanation": "Past simple questions need did plus the base verb.",
        "tag": "Standard form",
        "difficulty": "Review Challenge",
        "sequence": 16
      },
      {
        "prompt": "Choose the best completion: \"The result depends ___ careful planning.\"",
        "options": [
          "on",
          "at",
          "for",
          "with"
        ],
        "correctIndex": 0,
        "explanation": "Depend is commonly followed by on.",
        "tag": "Pattern",
        "difficulty": "Review Challenge",
        "sequence": 17
      },
      {
        "prompt": "Select the grammatical answer for \"The result depends ___ careful planning.\"",
        "options": [
          "for",
          "with",
          "on",
          "at"
        ],
        "correctIndex": 2,
        "explanation": "Depend is commonly followed by on.",
        "tag": "Grammar",
        "difficulty": "Review Challenge",
        "sequence": 18
      },
      {
        "prompt": "Choose the best combined sentence for: \"The tutor helped me yesterday. She explained articles clearly.\"",
        "options": [
          "The tutor who helped me yesterday explained articles clearly.",
          "The tutor, who helped me yesterday explained articles clearly.",
          "The tutor who she helped me yesterday explained articles clearly.",
          "The tutor helped me yesterday, explained articles clearly."
        ],
        "correctIndex": 0,
        "explanation": "Use a restrictive relative clause without unnecessary pronouns or commas.",
        "tag": "Combination",
        "difficulty": "Review Challenge",
        "sequence": 19
      },
      {
        "prompt": "Which option uses clause grammar correctly? \"The tutor helped me yesterday. She explained articles clearly.\"",
        "options": [
          "The tutor, who helped me yesterday explained articles clearly.",
          "The tutor who she helped me yesterday explained articles clearly.",
          "The tutor helped me yesterday, explained articles clearly.",
          "The tutor who helped me yesterday explained articles clearly."
        ],
        "correctIndex": 3,
        "explanation": "Use a restrictive relative clause without unnecessary pronouns or commas.",
        "tag": "Clause control",
        "difficulty": "Review Challenge",
        "sequence": 20
      }
    ]
  }
};

function hashText(value: string) {
  let hash = 0;

  for (const char of value) {
    hash = (hash * 31 + char.charCodeAt(0)) % 1000000007;
  }

  return hash;
}

function createQuestion(
  prompt: string,
  correct: string,
  distractors: string[],
  explanation: string,
  tag: string,
  difficulty: NonNullable<QuizBankQuestion['difficulty']>,
): QuizBankQuestion {
  const options = [correct, ...distractors];

  if (options.length !== 4) {
    throw new Error(`Expected 4 options for "${prompt}" but received ${options.length}.`);
  }

  if (new Set(options).size !== options.length) {
    throw new Error(`Duplicate options found for "${prompt}".`);
  }

  const rotation = hashText(`${prompt}::${tag}`) % options.length;
  const rotatedOptions = options.slice(rotation).concat(options.slice(0, rotation));

  return {
    prompt,
    options: rotatedOptions,
    correctIndex: rotatedOptions.indexOf(correct),
    explanation,
    tag,
    difficulty,
  };
}

function ensureQuestionCount(slug: string, questions: QuizBankQuestion[], expected: number) {
  if (questions.length !== expected) {
    throw new Error(`Expected ${expected} questions for ${slug}, received ${questions.length}.`);
  }

  return questions;
}

const voiceLabels = ['Active voice', 'Passive voice', 'Get passive', 'Impossible to tell from the sentence alone'];
const futureFormLabels = [
  'Will',
  'Be going to',
  'Present continuous for arrangement',
  'Present simple for schedule',
  'Future continuous',
  'Future perfect',
];
const modalMeaningLabels = [
  'Ability',
  'Permission',
  'Obligation',
  'No necessity',
  'Prohibition',
  'Advice',
  'Possibility',
  'Present deduction',
  'Past deduction',
  'Missed obligation or regret',
  'Missed opportunity or unrealized possibility',
  'Polite request or offer',
];

const activePassiveVoiceQuestions = [
  ...[
    ['The committee approved the proposal.', 'Active voice', 'The subject performs the action directly.'],
    ['The proposal was approved by the committee.', 'Passive voice', 'The subject receives the action, and the agent appears in a by-phrase.'],
    ['The window got broken during the storm.', 'Get passive', 'This is a get-passive, which sounds more informal and event-focused than a be-passive.'],
    ['Visitors are requested to remain seated.', 'Passive voice', 'The sentence focuses on the instruction, not on the person giving it.'],
    ['The technician repaired the server.', 'Active voice', 'The technician is the doer of the action.'],
    ['The report has been completed.', 'Passive voice', 'The present perfect passive uses has been + past participle.'],
    ['He got promoted last month.', 'Get passive', 'Get + past participle creates a more dynamic, informal passive.'],
    ['Someone stole my bicycle.', 'Active voice', 'Even though the subject is vague, the clause is still active because the subject performs the action.'],
    ['My bicycle was stolen.', 'Passive voice', 'The subject receives the action and the agent is omitted.'],
    ['The school offered students extra guidance.', 'Active voice', 'The school is the doer, so the clause is active.'],
    ['Students were offered extra guidance.', 'Passive voice', 'The receiver of the action becomes the subject.'],
    ['The samples were analyzed under controlled conditions.', 'Passive voice', 'The sentence highlights process and result rather than naming the analyst.'],
  ].map(([sentence, correct, explanation], index) =>
    createQuestion(
      `Which label best fits this sentence? "${sentence}"`,
      correct,
      voiceLabels.filter((label) => label !== correct),
      explanation,
      'Voice identification',
      index < 8 ? 'Basic' : 'Intermediate',
    ),
  ),
  ...[
    {
      prompt: 'Choose the best passive version of "People speak English around the world."',
      correct: 'English is spoken around the world.',
      distractors: [
        'English is speaking around the world.',
        'English was spoken around the world.',
        'English has spoken around the world.',
      ],
      explanation: 'The present simple passive is formed with is/are + past participle.',
    },
    {
      prompt: 'Choose the best passive version of "The team is testing the software."',
      correct: 'The software is being tested by the team.',
      distractors: [
        'The software is tested by the team.',
        'The software was being tested by the team.',
        'The software has been tested by the team.',
      ],
      explanation: 'A present continuous passive needs is/are being + past participle.',
    },
    {
      prompt: 'Choose the best passive version of "Someone has stolen my bag."',
      correct: 'My bag has been stolen.',
      distractors: [
        'My bag has stolen.',
        'My bag was stolen.',
        'My bag is stolen.',
      ],
      explanation: 'The present perfect passive uses has/have been + past participle.',
    },
    {
      prompt: 'Choose the best passive version of "The lab will examine the samples tomorrow."',
      correct: 'The samples will be examined tomorrow.',
      distractors: [
        'The samples will examined tomorrow.',
        'The samples are examined tomorrow.',
        'The samples will been examined tomorrow.',
      ],
      explanation: 'A future passive uses will be + past participle.',
    },
    {
      prompt: 'Choose the best passive version of "The coach should review the plan."',
      correct: 'The plan should be reviewed by the coach.',
      distractors: [
        'The plan should reviewed by the coach.',
        'The plan should being reviewed by the coach.',
        'The plan should have review by the coach.',
      ],
      explanation: 'A modal passive uses modal + be + past participle.',
    },
    {
      prompt: 'Choose the best passive version of "They gave me a certificate."',
      correct: 'I was given a certificate.',
      distractors: [
        'I given a certificate.',
        'I was give a certificate.',
        'I was given to a certificate.',
      ],
      explanation: 'Some two-object verbs allow the indirect object to become the passive subject.',
    },
    {
      prompt: 'Choose the best passive version of "The school offered students extra guidance."',
      correct: 'Students were offered extra guidance.',
      distractors: [
        'Students offered extra guidance.',
        'Students were offer extra guidance.',
        'Students were offering extra guidance.',
      ],
      explanation: 'The receiver can become the subject in a passive built from a two-object verb.',
    },
    {
      prompt: 'Choose the best passive version of "The editor corrected the article."',
      correct: 'The article was corrected by the editor.',
      distractors: [
        'The article corrected by the editor.',
        'The article was correct by the editor.',
        'The article had corrected by the editor.',
      ],
      explanation: 'The past simple passive uses was/were + past participle.',
    },
    {
      prompt: 'Choose the best passive version of "They are repairing the road this week."',
      correct: 'The road is being repaired this week.',
      distractors: [
        'The road is repaired this week.',
        'The road was being repaired this week.',
        'The road has been repaired this week.',
      ],
      explanation: 'Ongoing present actions require is/are being + past participle.',
    },
    {
      prompt: 'Choose the best passive version of "They had completed the design before noon."',
      correct: 'The design had been completed before noon.',
      distractors: [
        'The design had completed before noon.',
        'The design was completed before noon.',
        'The design had being completed before noon.',
      ],
      explanation: 'The past perfect passive uses had been + past participle.',
    },
    {
      prompt: 'Choose the best passive version of "The manager must sign the contract."',
      correct: 'The contract must be signed by the manager.',
      distractors: [
        'The contract must signed by the manager.',
        'The contract must being signed by the manager.',
        'The contract must been signed by the manager.',
      ],
      explanation: 'Modal passives require be after the modal.',
    },
    {
      prompt: 'Choose the best passive version of "They built the bridge in 2015."',
      correct: 'The bridge was built in 2015.',
      distractors: [
        'The bridge is built in 2015.',
        'The bridge has built in 2015.',
        'The bridge was build in 2015.',
      ],
      explanation: 'A finished past event takes the past simple passive: was/were + built.',
    },
  ].map((item, index) =>
    createQuestion(
      item.prompt,
      item.correct,
      item.distractors,
      item.explanation,
      'Transformation',
      index < 6 ? 'Basic' : 'Intermediate',
    ),
  ),
  ...[
    {
      prompt: 'A thief took your bicycle, but you do not know who it was. Which sentence is the best choice?',
      correct: 'My bicycle was stolen.',
      distractors: [
        'Someone was stealing my bicycle.',
        'A bicycle stole me.',
        'My bicycle stole someone.',
      ],
      explanation: 'When the agent is unknown or unimportant, the passive is often the best choice.',
    },
    {
      prompt: 'You are writing about a budgeting mistake and want clear accountability. Which sentence is strongest?',
      correct: 'The finance team made mistakes in the budget report.',
      distractors: [
        'Mistakes were made in the budget report.',
        'The budget report was mistaken.',
        'Mistakes had been making in the budget report.',
      ],
      explanation: 'The active voice is stronger when responsibility matters.',
    },
    {
      prompt: 'Which sentence best fits a formal notice on a museum wall?',
      correct: 'Visitors are requested to remain seated.',
      distractors: [
        'We request the visitors to remaining seated.',
        'Visitors requested remain seated.',
        'The visitors are seating on request.',
      ],
      explanation: 'Formal notices often use the passive because the instruction matters more than the source.',
    },
    {
      prompt: 'Which sentence best fits a scientific method section?',
      correct: 'The samples were analyzed under controlled conditions.',
      distractors: [
        'The scientists analyzed the samples, and that sounds more scientific.',
        'The samples analyzed under controlled conditions.',
        'The samples were analyzing under controlled conditions.',
      ],
      explanation: 'Scientific and process-focused writing often uses the passive to foreground procedure.',
    },
    {
      prompt: 'Which sentence is best when the agent is important information?',
      correct: 'The novel was written by Toni Morrison.',
      distractors: [
        'The novel was written.',
        'Someone wrote the novel, probably a famous author.',
        'The novel wrote Toni Morrison.',
      ],
      explanation: 'Keep the by-phrase when it adds meaningful information.',
    },
    {
      prompt: 'Which version avoids an unnecessary by-phrase?',
      correct: 'The floor was cleaned.',
      distractors: [
        'The floor was cleaned by the cleaner.',
        'The cleaner was cleaned by the floor.',
        'The floor cleaned by the cleaner was.',
      ],
      explanation: 'If the agent is obvious or adds nothing, it is better to omit it.',
    },
    {
      prompt: 'A news report wants to focus on the victims rather than the driver. Which sentence is best?',
      correct: 'Three people were injured in the accident.',
      distractors: [
        'The accident injured three people by someone.',
        'Someone injured three people in the accident, and the driver is not the point.',
        'Three people injured in the accident.',
      ],
      explanation: 'News writing often uses the passive when the result deserves foregrounding.',
    },
    {
      prompt: 'You want a direct sentence about a company decision. Which choice is best?',
      correct: 'The board decided to postpone the launch.',
      distractors: [
        'The decision was taken to postpone the launch.',
        'The launch was postponed decisionally by the board.',
        'A decision was being to postpone the launch.',
      ],
      explanation: 'The active voice is clearer and more direct when the doer matters.',
    },
    {
      prompt: 'Which sentence best emphasizes result rather than doer?',
      correct: 'The report has been completed.',
      distractors: [
        'Someone has completed the report, but I do not care who.',
        'The report has completed.',
        'The report completed has been.',
      ],
      explanation: 'The passive works well when the completed result matters more than the agent.',
    },
    {
      prompt: 'Which sentence sounds natural in an informal conversation about career progress?',
      correct: 'He got promoted last month.',
      distractors: [
        'He was promoting last month.',
        'He got promote last month.',
        'Promotion happened him last month.',
      ],
      explanation: 'The get-passive is common in informal, event-focused speech.',
    },
    {
      prompt: 'Which sentence best fits a safety sign on a construction site?',
      correct: 'Helmets must be worn on site.',
      distractors: [
        'Workers must wear helmets on site by all people.',
        'Helmets must worn on site.',
        'Helmets are must be worn on site.',
      ],
      explanation: 'Signs and instructions often use the passive to emphasize the rule itself.',
    },
    {
      prompt: 'Which sentence best fits a process-focused report about the exhibition repair?',
      correct: 'A replacement frame was found, and the surface was repaired.',
      distractors: [
        'The organizers found a replacement frame, and they repaired the surface, so list every doer.',
        'A replacement frame found, and the surface repaired.',
        'A replacement frame was finding, and the surface was repairing.',
      ],
      explanation: 'When the process and outcome matter more than the agents, the passive is natural.',
    },
  ].map((item, index) =>
    createQuestion(
      item.prompt,
      item.correct,
      item.distractors,
      item.explanation,
      'Usage',
      index < 4 ? 'Basic' : index < 9 ? 'Intermediate' : 'Advanced',
    ),
  ),
  ...[
    {
      prompt: 'Which verb usually cannot form a normal passive?',
      correct: 'arrive',
      distractors: ['solve', 'offer', 'build'],
      explanation: 'Intransitive verbs such as arrive do not take an object, so they do not form a normal passive.',
    },
    {
      prompt: 'Why is the agent omitted in "My bag has been stolen"?',
      correct: 'Because the thief is unknown or unimportant.',
      distractors: [
        'Because passive clauses can never include an agent.',
        'Because stolen is not a past participle.',
        'Because the object cannot become the subject.',
      ],
      explanation: 'The passive often omits the agent when it is unknown, obvious, or unimportant.',
    },
    {
      prompt: 'Why is the by-phrase useful in "The novel was written by Toni Morrison"?',
      correct: 'Because the agent adds important information.',
      distractors: [
        'Because every passive sentence must end with by + agent.',
        'Because written cannot stand without a by-phrase.',
        'Because passive voice only works in literature.',
      ],
      explanation: 'Keep the agent when it genuinely helps the reader.',
    },
    {
      prompt: 'Which passive version of "They gave me a certificate" is correct and natural?',
      correct: 'I was given a certificate.',
      distractors: [
        'I was gave a certificate.',
        'I given was a certificate.',
        'I was given to a certificate.',
      ],
      explanation: 'With some two-object verbs, the indirect object can become the passive subject.',
    },
    {
      prompt: 'Which passive version of "The school offered students extra guidance" is correct and natural?',
      correct: 'Extra guidance was offered to students.',
      distractors: [
        'Extra guidance offered to students.',
        'Extra guidance was offer to students.',
        'Extra guidance was offering to students.',
      ],
      explanation: 'The direct object can also become the passive subject, often with to before the indirect object.',
    },
    {
      prompt: 'Which sentence contains an unnecessary by-phrase?',
      correct: 'The floor was cleaned by the cleaner.',
      distractors: [
        'The novel was written by Toni Morrison.',
        'The bridge was opened by the mayor.',
        'The proposal was approved by the committee.',
      ],
      explanation: 'By the cleaner adds no useful information because the agent is obvious.',
    },
    {
      prompt: 'Which sentence hides responsibility in a way that may sound too vague?',
      correct: 'Mistakes were made in the budget report.',
      distractors: [
        'The finance team made mistakes in the budget report.',
        'The report was corrected yesterday.',
        'The forms are checked every morning.',
      ],
      explanation: 'The passive can be weaker when the writer should state who is responsible.',
    },
    {
      prompt: 'In active-to-passive transformation, what happens after you identify the object?',
      correct: 'You move the object into subject position.',
      distractors: [
        'You delete the object completely.',
        'You change the object into a preposition.',
        'You turn the verb into a noun.',
      ],
      explanation: 'The old object becomes the new subject in the passive clause.',
    },
    {
      prompt: 'What is a common effect of the get-passive?',
      correct: 'It often sounds more informal or event-focused.',
      distractors: [
        'It is always more formal than the be-passive.',
        'It cannot describe real events.',
        'It is only used with future meaning.',
      ],
      explanation: 'Get-passives are common when speakers want a dynamic, informal tone.',
    },
    {
      prompt: 'Which sentence contains a verb that normally cannot be passivized?',
      correct: 'She arrived late.',
      distractors: [
        'They solved the puzzle.',
        'The coach advised us to rest.',
        'Someone stole my bicycle.',
      ],
      explanation: 'Arrive is intransitive, so it does not form a normal passive.',
    },
    {
      prompt: 'Which pair best shows that the active voice is stronger for accountability?',
      correct: 'The finance team made mistakes in the budget report.',
      distractors: [
        'Mistakes were made in the budget report.',
        'The budget report was made of mistakes.',
        'Mistakes had making the budget report.',
      ],
      explanation: 'Naming the doer creates a clearer, more responsible sentence.',
    },
    {
      prompt: 'Why does "The suspect was arrested" often work without a by-phrase?',
      correct: 'Because the agent is usually obvious from context.',
      distractors: [
        'Because arrest is not transitive.',
        'Because passive clauses never allow agents.',
        'Because suspects cannot be subjects.',
      ],
      explanation: 'Some agents are understood from context, so a by-phrase is unnecessary.',
    },
  ].map((item, index) =>
    createQuestion(
      item.prompt,
      item.correct,
      item.distractors,
      item.explanation,
      'Rule and logic',
      index < 6 ? 'Intermediate' : 'Advanced',
    ),
  ),
  ...[
    {
      prompt: 'Choose the best correction: "The work was finished by yesterday."',
      correct: 'The work was finished yesterday.',
      distractors: [
        'The work was being finished by yesterday.',
        'The work had finishing by yesterday.',
        'The work finished was by yesterday.',
      ],
      explanation: 'Use the past simple passive with a finished past-time reference such as yesterday.',
    },
    {
      prompt: 'Choose the best correction: "The problem was happened yesterday."',
      correct: 'The problem happened yesterday.',
      distractors: [
        'The problem was happening yesterday.',
        'The problem had been happened yesterday.',
        'The problem was happen yesterday.',
      ],
      explanation: 'Happen is intransitive and does not form a normal passive.',
    },
    {
      prompt: 'Choose the best correction: "The report has completed."',
      correct: 'The report has been completed.',
      distractors: [
        'The report has completed by someone.',
        'The report is been completed.',
        'The report has being completed.',
      ],
      explanation: 'The present perfect passive must include been.',
    },
    {
      prompt: 'Choose the best correction: "English is spoken by many people in the world by them."',
      correct: 'English is spoken by many people around the world.',
      distractors: [
        'English is speaking by many people around the world.',
        'English spoken by many people around the world by them.',
        'English is spoken around world by them people.',
      ],
      explanation: 'Remove the repeated, unnecessary agent phrase and use a natural location phrase.',
    },
    {
      prompt: 'Choose the best correction: "The forms are check every morning."',
      correct: 'The forms are checked every morning.',
      distractors: [
        'The forms are checking every morning.',
        'The forms checked every morning are.',
        'The forms have check every morning.',
      ],
      explanation: 'The present simple passive requires are + past participle.',
    },
    {
      prompt: 'Choose the best correction: "The road is repairing this week."',
      correct: 'The road is being repaired this week.',
      distractors: [
        'The road is repaired this week by now.',
        'The road has repaired this week.',
        'The road is been repaired this week.',
      ],
      explanation: 'An ongoing present passive action needs is/are being + past participle.',
    },
    {
      prompt: 'Choose the best correction: "My laptop was stole on the train."',
      correct: 'My laptop was stolen on the train.',
      distractors: [
        'My laptop was stealing on the train.',
        'My laptop stolen was on the train.',
        'My laptop had stole on the train.',
      ],
      explanation: 'The passive needs the past participle stolen, not the base or past form.',
    },
    {
      prompt: 'Choose the best correction: "The accident was occurred at midnight."',
      correct: 'The accident occurred at midnight.',
      distractors: [
        'The accident was occurring at midnight.',
        'The accident had been occurred at midnight.',
        'The accident was occur at midnight.',
      ],
      explanation: 'Occur is intransitive, so it does not make a normal passive.',
    },
    {
      prompt: 'Choose the best correction: "The visitors requested to remain seated."',
      correct: 'Visitors are requested to remain seated.',
      distractors: [
        'Visitors request to remain seated.',
        'Visitors are request to remain seated.',
        'The visitors are requesting to remained seated.',
      ],
      explanation: 'This formal notice needs the passive form are requested.',
    },
    {
      prompt: 'Choose the best correction: "The bag has been stole."',
      correct: 'The bag has been stolen.',
      distractors: [
        'The bag has stolen.',
        'The bag has been stealing.',
        'The bag has stole.',
      ],
      explanation: 'The present perfect passive uses been + past participle.',
    },
    {
      prompt: 'Choose the best correction: "Extra guidance offered students."',
      correct: 'Extra guidance was offered to students.',
      distractors: [
        'Extra guidance was offering to students.',
        'Extra guidance offered to students was.',
        'Extra guidance is offer to students.',
      ],
      explanation: 'A passive clause needs be + past participle, and the receiver is often introduced with to.',
    },
    {
      prompt: 'Choose the best correction: "The decision was took by the board."',
      correct: 'The decision was taken by the board.',
      distractors: [
        'The decision was taking by the board.',
        'The decision taken by the board was.',
        'The decision had took by the board.',
      ],
      explanation: 'Taken is the past participle; took is the past simple form and cannot be used here.',
    },
  ].map((item) =>
    createQuestion(
      item.prompt,
      item.correct,
      item.distractors,
      item.explanation,
      'Editing',
      'Advanced',
    ),
  ),
];

const futureTimeReferenceQuestions = [
  ...[
    ['I think it will rain later.', 'Will', 'Will is used here for a prediction based on judgment or opinion.'],
    ['Look at those clouds. It is going to rain.', 'Be going to', 'Going to is used here because the prediction is based on visible evidence.'],
    ['I am meeting the dean tomorrow.', 'Present continuous for arrangement', 'The present continuous shows an organized personal arrangement.'],
    ['The workshop starts at 9 a.m. tomorrow.', 'Present simple for schedule', 'The present simple is common for official schedules and timetables.'],
    ['At 8 p.m., I will be studying.', 'Future continuous', 'The future continuous describes an action in progress at a future time.'],
    ['By Friday, I will have finished the report.', 'Future perfect', 'The future perfect shows completion before a future point.'],
    ['The phone is ringing. I will answer it.', 'Will', 'Will often expresses a spontaneous decision made at the moment of speaking.'],
    ['They are flying to Kochi on Friday.', 'Present continuous for arrangement', 'The sentence refers to a fixed travel arrangement.'],
    ['The flight arrives at midnight.', 'Present simple for schedule', 'Arrival time belongs to a timetable, so the present simple is natural.'],
    ['This time next week, they will be traveling across Spain.', 'Future continuous', 'The speaker views the action as a process in progress at a future time.'],
    ['The builders will have completed the bridge by next summer.', 'Future perfect', 'The sentence focuses on future completion before a later point.'],
    ['I am going to apply for the fellowship next month.', 'Be going to', 'Going to expresses an intention already formed in the speaker’s mind.'],
  ].map(([sentence, correct, explanation], index) =>
    createQuestion(
      `Which future form label best fits this sentence? "${sentence}"`,
      correct,
      futureFormLabels.filter((label) => label !== correct).slice(index % 3, (index % 3) + 3).length === 3
        ? futureFormLabels.filter((label) => label !== correct).slice(index % 3, (index % 3) + 3)
        : futureFormLabels.filter((label) => label !== correct).slice(0, 3),
      explanation,
      'Form identification',
      index < 8 ? 'Basic' : 'Intermediate',
    ),
  ),
  ...[
    {
      prompt: 'Complete the sentence correctly: "The phone is ringing. I ___ it."',
      correct: 'will answer',
      distractors: ['am going to answer', 'answer', 'am answering'],
      explanation: 'A decision made at the moment of speaking is commonly expressed with will.',
    },
    {
      prompt: 'Complete the sentence correctly: "Look at those clouds. It ___ soon."',
      correct: 'is going to rain',
      distractors: ['will raining', 'rains', 'is raining to'],
      explanation: 'Visible present evidence often leads to going to rather than will.',
    },
    {
      prompt: 'Complete the sentence correctly: "I ___ the dentist at 4 p.m."',
      correct: 'am seeing',
      distractors: ['will see necessarily', 'see', 'am going seeing'],
      explanation: 'The present continuous fits an arranged appointment.',
    },
    {
      prompt: 'Complete the sentence correctly: "The train ___ at 6:20 tomorrow."',
      correct: 'leaves',
      distractors: ['will leave always', 'is leaving because I think so', 'leave will'],
      explanation: 'Timetables and official schedules normally use the present simple.',
    },
    {
      prompt: 'Complete the sentence correctly: "By next week, I ___ the essay."',
      correct: 'will have finished',
      distractors: ['finish', 'am finishing', 'will be finishing'],
      explanation: 'Completion before a future point requires the future perfect.',
    },
    {
      prompt: 'Complete the sentence correctly: "This time tomorrow, we ___ to Jaipur."',
      correct: 'will be driving',
      distractors: ['drive', 'will have driven', 'are driving right now'],
      explanation: 'The future continuous is used for an action in progress at a future time.',
    },
    {
      prompt: 'Complete the sentence correctly: "We bought the tickets yesterday. We ___ on Friday."',
      correct: 'are leaving',
      distractors: ['will leave now', 'leave will', 'have left'],
      explanation: 'A fixed travel arrangement is often expressed with the present continuous.',
    },
    {
      prompt: 'Complete the sentence correctly: "Don’t worry. I ___ you with the form."',
      correct: 'will help',
      distractors: ['am going helping', 'helping', 'am helped'],
      explanation: 'Will commonly expresses a promise or immediate offer.',
    },
    {
      prompt: 'Complete the sentence correctly: "They saved for months. They ___ the office this summer."',
      correct: 'are going to renovate',
      distractors: ['will renovating', 'renovate', 'are renovating right this second'],
      explanation: 'Going to expresses a prior intention already formed before the moment of speaking.',
    },
    {
      prompt: 'Complete the sentence correctly: "By the time the meeting starts, we ___ the slides."',
      correct: 'will have tested',
      distractors: ['test', 'will be testing', 'are testing tomorrow'],
      explanation: 'The action will be complete before another future moment, so the future perfect is needed.',
    },
    {
      prompt: 'Complete the sentence correctly: "If he needs help, I ___."',
      correct: 'will stay',
      distractors: ['stay', 'am staying because of timetable', 'will have stayed'],
      explanation: 'The main clause can take will after an if-clause in the present simple.',
    },
    {
      prompt: 'Complete the sentence correctly: "During the afternoon sessions, I ___ the registration desk."',
      correct: 'will be assisting',
      distractors: ['assist', 'will have assisted', 'am going assist'],
      explanation: 'The future continuous shows an action in progress during a future period.',
    },
  ].map((item, index) =>
    createQuestion(
      item.prompt,
      item.correct,
      item.distractors,
      item.explanation,
      'Future choice',
      index < 6 ? 'Basic' : 'Intermediate',
    ),
  ),
  ...[
    {
      prompt: 'Which sentence best shows a decision made at the moment of speaking?',
      correct: 'I will call her now.',
      distractors: [
        'I am going to call her after lunch.',
        'I am calling her next Tuesday.',
        'Her appointment starts at noon.',
      ],
      explanation: 'Will is the natural choice for a spontaneous decision made now.',
    },
    {
      prompt: 'Which sentence best shows a prediction based on present evidence?',
      correct: 'The team is going to win. They are already three goals ahead.',
      distractors: [
        'I think the team will win someday.',
        'The team wins at 6 p.m.',
        'The team is winning next Thursday.',
      ],
      explanation: 'Going to often signals an evidence-based prediction.',
    },
    {
      prompt: 'Which sentence best expresses a timetable or official schedule?',
      correct: 'The exam begins on Monday.',
      distractors: [
        'The exam will begin if I think so.',
        'The exam is beginning because we planned it casually.',
        'The exam will be beginning for no schedule reason.',
      ],
      explanation: 'The present simple is used for fixed schedules such as exams and transport times.',
    },
    {
      prompt: 'Which sentence best expresses an arranged personal plan?',
      correct: 'We are staying with cousins during the conference.',
      distractors: [
        'We will stay with cousins because I just decided.',
        'We are going to staying with cousins.',
        'We stay with cousins at 9 a.m. every conference.',
      ],
      explanation: 'The present continuous is common for personal arrangements that are already organized.',
    },
    {
      prompt: 'Which sentence best expresses completion before a future point?',
      correct: 'By Friday, I will have finished the report.',
      distractors: [
        'By Friday, I will be finishing the report.',
        'By Friday, I finish the report.',
        'By Friday, I am finishing the report after it is done.',
      ],
      explanation: 'The future perfect highlights a completed result before a later future time.',
    },
    {
      prompt: 'Which sentence best expresses an action that will be in progress at a future time?',
      correct: 'At 8 p.m., I will be studying.',
      distractors: [
        'At 8 p.m., I will have studied.',
        'At 8 p.m., I study.',
        'At 8 p.m., I am going to studied.',
      ],
      explanation: 'The future continuous shows an action in progress at a specific future moment.',
    },
    {
      prompt: 'Which sentence is correct after "when" in a future time clause?',
      correct: 'When she arrives, we will start.',
      distractors: [
        'When she will arrive, we will start.',
        'When she is arriving, we will start always.',
        'When she arrive, we will starting.',
      ],
      explanation: 'Future time clauses usually take the present simple, not will.',
    },
    {
      prompt: 'Which explanation best fits the pair "I will call her now" vs "I am going to call her after lunch"?',
      correct: 'The first is a decision now; the second is a prior intention.',
      distractors: [
        'The first is a timetable; the second is a future perfect.',
        'Both mean exactly the same thing in all contexts.',
        'The first is evidence-based; the second is only about willingness.',
      ],
      explanation: 'Will often marks an immediate decision, while going to usually reflects an earlier plan.',
    },
    {
      prompt: 'Which sentence best expresses a promise or willingness?',
      correct: 'I will help you with the form.',
      distractors: [
        'I help you with the form tomorrow at 9.',
        'I am going to helping you with the form.',
        'I have helped you with the form next week.',
      ],
      explanation: 'Will is commonly used for promises, offers, and willingness.',
    },
    {
      prompt: 'Which sentence best expresses simple intention rather than a fixed arrangement?',
      correct: 'I am going to meet the director sometime next week.',
      distractors: [
        'I am meeting the director at 3 p.m. on Tuesday.',
        'The director meets me at 3 p.m. according to the timetable.',
        'I will have met the director by lunchtime tomorrow.',
      ],
      explanation: 'Going to often presents an intention without implying that every detail is fixed.',
    },
    {
      prompt: 'Which sentence best fits a scheduled event in the conference story?',
      correct: 'The opening session begins at 9 a.m.',
      distractors: [
        'The opening session is going to begin because maybe it wants to.',
        'The opening session will have begun if we imagine it.',
        'The opening session is beginning because I just decided it.',
      ],
      explanation: 'Scheduled events often use the present simple.',
    },
    {
      prompt: 'Which sentence best uses the future continuous as a polite practical question?',
      correct: 'Will you be using the car this evening?',
      distractors: [
        'Will you use the car this evening, and I demand an answer now?',
        'Are you using the car this evening because it is a timetable?',
        'Will you have used the car this evening?',
      ],
      explanation: 'The future continuous can soften a question about someone’s plans.',
    },
  ].map((item, index) =>
    createQuestion(
      item.prompt,
      item.correct,
      item.distractors,
      item.explanation,
      'Meaning and contrast',
      index < 6 ? 'Intermediate' : 'Advanced',
    ),
  ),
  ...[
    {
      prompt: 'Choose the best correction: "I am going to help you, the phone is ringing."',
      correct: 'The phone is ringing. I will help you.',
      distractors: [
        'The phone is ringing. I am helping you will.',
        'The phone is ringing. I go to help you.',
        'The phone is ringing. I will helping you.',
      ],
      explanation: 'A decision made at the moment of speaking is better expressed with will.',
    },
    {
      prompt: 'Choose the best correction: "The train will leave at 8 tomorrow."',
      correct: 'The train leaves at 8 tomorrow.',
      distractors: [
        'The train is leave at 8 tomorrow.',
        'The train leaving at 8 tomorrow.',
        'The train will have leaves at 8 tomorrow.',
      ],
      explanation: 'Timetable meaning usually takes the present simple.',
    },
    {
      prompt: 'Choose the best correction: "When he will come, we will start."',
      correct: 'When he comes, we will start.',
      distractors: [
        'When he coming, we will start.',
        'When he will comes, we will start.',
        'When he come, we starting.',
      ],
      explanation: 'Future time clauses after when usually use the present simple, not will.',
    },
    {
      prompt: 'Choose the best correction: "By next week I finish the essay."',
      correct: 'By next week I will have finished the essay.',
      distractors: [
        'By next week I will finishing the essay.',
        'By next week I am finish the essay.',
        'By next week I have finish the essay.',
      ],
      explanation: 'Completion before a future point requires the future perfect.',
    },
    {
      prompt: 'Choose the best correction if the meeting is already arranged: "I will meet the dean tomorrow at 4 p.m."',
      correct: 'I am meeting the dean tomorrow at 4 p.m.',
      distractors: [
        'I meet the dean tomorrow at 4 p.m. because it is my opinion.',
        'I am going meet the dean tomorrow at 4 p.m.',
        'I will have met the dean tomorrow at 4 p.m.',
      ],
      explanation: 'The present continuous is more natural for a personal arrangement that is already fixed.',
    },
    {
      prompt: 'Choose the best correction: "Look at those black clouds. It will rain."',
      correct: 'Look at those black clouds. It is going to rain.',
      distractors: [
        'Look at those black clouds. It rains.',
        'Look at those black clouds. It is rain.',
        'Look at those black clouds. It will be rain.',
      ],
      explanation: 'Present evidence strongly favors going to.',
    },
    {
      prompt: 'Choose the best correction: "If it will rain, we will stay inside."',
      correct: 'If it rains, we will stay inside.',
      distractors: [
        'If it raining, we will stay inside.',
        'If it will rains, we will stay inside.',
        'If it rain, we will staying inside.',
      ],
      explanation: 'If-clauses referring to the future normally use the present simple.',
    },
    {
      prompt: 'Choose the best correction: "By this evening, the team will finish the setup."',
      correct: 'By this evening, the team will have finished the setup.',
      distractors: [
        'By this evening, the team will be finish the setup.',
        'By this evening, the team finishes the setup.',
        'By this evening, the team is finishing the setup before already done.',
      ],
      explanation: 'By this evening suggests completion before a future point, so the future perfect fits.',
    },
    {
      prompt: 'Choose the best correction: "At 8 tonight I study in the library."',
      correct: 'At 8 tonight I will be studying in the library.',
      distractors: [
        'At 8 tonight I will have studied in the library.',
        'At 8 tonight I am study in the library.',
        'At 8 tonight I studying in the library.',
      ],
      explanation: 'An action in progress at a future time calls for the future continuous.',
    },
    {
      prompt: 'Choose the best correction: "The flight will arrive at midnight according to the schedule."',
      correct: 'The flight arrives at midnight according to the schedule.',
      distractors: [
        'The flight arriving at midnight according to the schedule.',
        'The flight will have arrive at midnight according to the schedule.',
        'The flight is arrive at midnight according to the schedule.',
      ],
      explanation: 'Schedules and official timetables usually take the present simple.',
    },
    {
      prompt: 'Choose the best correction if the visit is already organized: "I go to visit my aunt this weekend."',
      correct: 'I am visiting my aunt this weekend.',
      distractors: [
        'I will visiting my aunt this weekend.',
        'I am go to visit my aunt this weekend.',
        'I visit my aunt this weekend because it is a timetable.',
      ],
      explanation: 'An organized personal plan is commonly expressed with the present continuous.',
    },
    {
      prompt: 'Choose the best correction: "Before she will leave, I will message her."',
      correct: 'Before she leaves, I will message her.',
      distractors: [
        'Before she leaving, I will message her.',
        'Before she will leaves, I will message her.',
        'Before she leave, I will messaging her.',
      ],
      explanation: 'Future time clauses after before usually take the present simple.',
    },
  ].map((item, index) =>
    createQuestion(
      item.prompt,
      item.correct,
      item.distractors,
      item.explanation,
      'Editing',
      index < 6 ? 'Intermediate' : 'Advanced',
    ),
  ),
  ...[
    {
      prompt: 'Why is the present simple used in "The workshop starts at 9 a.m. tomorrow"?',
      correct: 'Because the sentence refers to a fixed schedule or timetable.',
      distractors: [
        'Because English never uses future meaning with other forms.',
        'Because starts is secretly a future perfect form.',
        'Because the event is happening right now, not in the future.',
      ],
      explanation: 'Scheduled events often use the present simple even when the meaning is future.',
    },
    {
      prompt: 'Why is will natural in "The phone is ringing. I will answer it"?',
      correct: 'Because the speaker decides to act at the moment of speaking.',
      distractors: [
        'Because will is only used for timetables.',
        'Because answer is always followed by will.',
        'Because the sentence describes a completed action before another future point.',
      ],
      explanation: 'Will often marks an instant decision made now.',
    },
    {
      prompt: 'Why is going to natural in "Look at those clouds. It is going to rain"?',
      correct: 'Because the prediction is based on visible evidence now.',
      distractors: [
        'Because going to is required after every weather verb.',
        'Because rain can never follow will.',
        'Because the sentence describes a fixed schedule.',
      ],
      explanation: 'Going to often signals a prediction supported by present evidence.',
    },
    {
      prompt: 'In "By the time the conference starts, we will have tested every microphone," what does the future perfect emphasize?',
      correct: 'Completion before another future point.',
      distractors: [
        'An action in progress during a future period.',
        'A spontaneous decision made now.',
        'A fixed timetable event.',
      ],
      explanation: 'The future perfect looks ahead to a finished result before a later moment.',
    },
    {
      prompt: 'In "During the afternoon sessions, I will be assisting the registration desk," what does the future continuous emphasize?',
      correct: 'An action that will be in progress during a future time window.',
      distractors: [
        'A timetable event that repeats every day.',
        'A result that will already be completed before another time.',
        'A visible-evidence prediction.',
      ],
      explanation: 'The future continuous presents the event as ongoing at a future time.',
    },
    {
      prompt: 'Which pair best contrasts arrangement with simple intention?',
      correct: 'I am meeting the director tomorrow. / I am going to meet the director sometime next week.',
      distractors: [
        'The director arrives at noon. / The director will have arrived at noon.',
        'I will call her now. / I will answer the phone now.',
        'The train leaves at 6. / The exam begins on Monday.',
      ],
      explanation: 'The first sentence shows an arrangement; the second shows intention without a clearly fixed arrangement.',
    },
    {
      prompt: 'Which sentence best fits a personal arrangement rather than a schedule or an instant decision?',
      correct: 'We are flying to Kochi on Friday.',
      distractors: [
        'The workshop starts at 9 a.m.',
        'I will open the door.',
        'By next month, we will have finished.',
      ],
      explanation: 'Travel and appointments arranged in advance commonly use the present continuous.',
    },
    {
      prompt: 'Which sentence best fits a general prediction without present evidence?',
      correct: 'I think prices will rise next year.',
      distractors: [
        'Prices are going to rise. The suppliers have already increased costs.',
        'Prices rise at 6 p.m.',
        'Prices are rising next year because I arranged them.',
      ],
      explanation: 'Will is natural for a prediction based on opinion rather than visible evidence.',
    },
    {
      prompt: 'Which sentence best fits an evidence-based prediction?',
      correct: 'Prices are going to rise. Several suppliers have already increased costs.',
      distractors: [
        'I think prices will rise someday, but I have no evidence.',
        'Prices rise at 6 p.m.',
        'Prices are rising next year because it is a schedule.',
      ],
      explanation: 'Present evidence strongly supports going to.',
    },
    {
      prompt: 'Which statement about future time clauses is correct?',
      correct: 'English usually uses the present simple in clauses after words like when, if, before, and after.',
      distractors: [
        'English must use will in both clauses whenever the meaning is future.',
        'English avoids the present simple completely in future clauses.',
        'Future time clauses always use the future continuous.',
      ],
      explanation: 'Future time clauses usually take the present simple, even when the meaning is future.',
    },
    {
      prompt: 'Which sentence best uses the future continuous for a polite practical inquiry?',
      correct: 'Will you be using the car this evening?',
      distractors: [
        'Will you use the car this evening, yes or no now?',
        'Are you use the car this evening?',
        'Will you have used the car this evening by 6?',
      ],
      explanation: 'The future continuous can sound more tactful when asking about someone’s plans.',
    },
    {
      prompt: 'Why does English often need several future forms instead of one future tense?',
      correct: 'Because future meaning depends on perspective such as prediction, intention, arrangement, schedule, process, and completion.',
      distractors: [
        'Because English has no way to talk about the future clearly.',
        'Because all future forms are interchangeable decoration.',
        'Because only the future perfect is truly grammatical.',
      ],
      explanation: 'English future reference is a system of viewpoints, not one single future tense.',
    },
  ].map((item, index) =>
    createQuestion(
      item.prompt,
      item.correct,
      item.distractors,
      item.explanation,
      'Rule and logic',
      index < 6 ? 'Intermediate' : 'Advanced',
    ),
  ),
];

const gerundsInfinitivesQuestions = [
  ...[
    {
      prompt: 'Complete the sentence correctly: "I enjoy ___ before bed."',
      correct: 'reading',
      distractors: ['to read', 'read', 'to reading'],
      explanation: 'Enjoy is normally followed by a gerund.',
    },
    {
      prompt: 'Complete the sentence correctly: "She decided ___ tomorrow."',
      correct: 'to go',
      distractors: ['going', 'go', 'to going'],
      explanation: 'Decide normally takes a to-infinitive.',
    },
    {
      prompt: 'Complete the sentence correctly: "He avoided ___ the question directly."',
      correct: 'answering',
      distractors: ['to answer', 'answer', 'to answering'],
      explanation: 'Avoid is followed by a gerund.',
    },
    {
      prompt: 'Complete the sentence correctly: "We hope ___ by Friday."',
      correct: 'to finish',
      distractors: ['finishing', 'finish', 'to finishing'],
      explanation: 'Hope usually takes a to-infinitive.',
    },
    {
      prompt: 'Complete the sentence correctly: "He suggested ___ a shorter route."',
      correct: 'taking',
      distractors: ['to take', 'take', 'to taking'],
      explanation: 'Suggest is usually followed by a gerund or a clause, not a to-infinitive.',
    },
    {
      prompt: 'Complete the sentence correctly: "She refused ___ the document."',
      correct: 'to sign',
      distractors: ['signing', 'sign', 'to signing'],
      explanation: 'Refuse takes a to-infinitive.',
    },
    {
      prompt: 'Complete the sentence correctly: "I plan ___ this weekend."',
      correct: 'to revise',
      distractors: ['revising', 'revise', 'to revising'],
      explanation: 'Plan normally takes a to-infinitive.',
    },
    {
      prompt: 'Complete the sentence correctly: "They finished ___ the report at midnight."',
      correct: 'writing',
      distractors: ['to write', 'write', 'to writing'],
      explanation: 'Finish is followed by a gerund.',
    },
    {
      prompt: 'Complete the sentence correctly: "Do you mind ___ a few minutes?"',
      correct: 'waiting',
      distractors: ['to wait', 'wait', 'to waiting'],
      explanation: 'Mind takes a gerund.',
    },
    {
      prompt: 'Complete the sentence correctly: "She agreed ___ us after the meeting."',
      correct: 'to help',
      distractors: ['helping', 'help', 'to helping'],
      explanation: 'Agree normally takes a to-infinitive.',
    },
    {
      prompt: 'Complete the sentence correctly: "He admitted ___ the email."',
      correct: 'forgetting',
      distractors: ['to forget', 'forget', 'to forgetting'],
      explanation: 'Admit is followed by a gerund.',
    },
    {
      prompt: 'Complete the sentence correctly: "The guide recommended ___ the old quarter on foot."',
      correct: 'exploring',
      distractors: ['to explore', 'explore', 'to exploring'],
      explanation: 'Recommend often takes a gerund or clause, not a simple to-infinitive.',
    },
    {
      prompt: 'Complete the sentence correctly: "She is learning ___ in heavy traffic."',
      correct: 'to drive',
      distractors: ['driving', 'drive', 'to driving'],
      explanation: 'Learn commonly takes a to-infinitive when it means acquire a skill.',
    },
    {
      prompt: 'Complete the sentence correctly: "He kept ___ even when the task became difficult."',
      correct: 'working',
      distractors: ['to work', 'work', 'to working'],
      explanation: 'Keep is followed by a gerund in this pattern.',
    },
    {
      prompt: 'Complete the sentence correctly: "We expect ___ by noon."',
      correct: 'to arrive',
      distractors: ['arriving', 'arrive', 'to arriving'],
      explanation: 'Expect commonly takes a to-infinitive when no object follows.',
    },
  ].map((item, index) =>
    createQuestion(
      item.prompt,
      item.correct,
      item.distractors,
      item.explanation,
      'Pattern choice',
      index < 10 ? 'Basic' : 'Intermediate',
    ),
  ),
  ...[
    {
      prompt: 'Complete the sentence correctly: "I remember ___ her at a career fair in 2022."',
      correct: 'meeting',
      distractors: ['to meet', 'meet', 'to meeting'],
      explanation: 'Remember + gerund refers to a memory of a past experience.',
    },
    {
      prompt: 'Complete the sentence correctly: "Please remember ___ the door before you leave."',
      correct: 'to lock',
      distractors: ['locking', 'lock', 'to locking'],
      explanation: 'Remember + to-infinitive refers to a duty that must be done.',
    },
    {
      prompt: 'Complete the sentence correctly: "I will never forget ___ the Himalayas for the first time."',
      correct: 'seeing',
      distractors: ['to see', 'see', 'to seeing'],
      explanation: 'Forget/remember + gerund refer to past experiences.',
    },
    {
      prompt: 'Complete the sentence correctly: "She forgot ___ the file to the message."',
      correct: 'to attach',
      distractors: ['attaching', 'attach', 'to attaching'],
      explanation: 'Forget + to-infinitive means fail to do an intended action.',
    },
    {
      prompt: 'Complete the sentence correctly: "He stopped ___ last year."',
      correct: 'smoking',
      distractors: ['to smoke', 'smoke', 'to smoking'],
      explanation: 'Stop + gerund means end an activity.',
    },
    {
      prompt: 'Complete the sentence correctly: "He stopped ___ outside the station."',
      correct: 'to smoke',
      distractors: ['smoking', 'smoke', 'to smoking'],
      explanation: 'Stop + to-infinitive means pause one action in order to do another.',
    },
    {
      prompt: 'Complete the sentence correctly: "Try ___ the router before calling support."',
      correct: 'restarting',
      distractors: ['to restart', 'restart', 'to restarting'],
      explanation: 'Try + gerund suggests experimenting with a possible solution.',
    },
    {
      prompt: 'Complete the sentence correctly: "I tried ___, but nobody listened."',
      correct: 'to explain',
      distractors: ['explaining', 'explain', 'to explaining'],
      explanation: 'Try + to-infinitive means make an effort.',
    },
    {
      prompt: 'Complete the sentence correctly: "She regrets ___ the company so suddenly."',
      correct: 'leaving',
      distractors: ['to leave', 'leave', 'to leaving'],
      explanation: 'Regret + gerund expresses sorrow about a past action.',
    },
    {
      prompt: 'Complete the sentence correctly: "We regret ___ you that your application was unsuccessful."',
      correct: 'to inform',
      distractors: ['informing', 'inform', 'to informing'],
      explanation: 'Regret + to-infinitive is a formal way to announce bad news.',
    },
    {
      prompt: 'Which sentence shows remembered past experience, not future duty?',
      correct: 'I remember meeting her in Delhi.',
      distractors: [
        'I remember to meet her in Delhi.',
        'I remember meet her in Delhi.',
        'I remember to meeting her in Delhi.',
      ],
      explanation: 'Remember + gerund points back to a past experience.',
    },
    {
      prompt: 'Which sentence means "Do not forget this task"?',
      correct: 'Remember to send the invoice.',
      distractors: [
        'Remember sending the invoice.',
        'Remember send the invoice.',
        'Remember to sending the invoice.',
      ],
      explanation: 'Remember + to-infinitive refers to a duty that still needs to happen.',
    },
    {
      prompt: 'Which sentence means "Experiment with this possible solution"?',
      correct: 'Try restarting the router.',
      distractors: [
        'Try to restart the router.',
        'Try restart the router.',
        'Try to restarting the router.',
      ],
      explanation: 'Try + gerund often means test a possible remedy or method.',
    },
    {
      prompt: 'Which sentence means "Make an effort to explain"?',
      correct: 'I tried to explain the delay.',
      distractors: [
        'I tried explaining the delay.',
        'I tried explain the delay.',
        'I tried to explaining the delay.',
      ],
      explanation: 'Try + to-infinitive means attempt or make an effort.',
    },
    {
      prompt: 'Which statement is most accurate about "start raining" and "start to rain"?',
      correct: 'Both are usually acceptable, with little change in meaning.',
      distractors: [
        'Only the gerund form is grammatical.',
        'Only the infinitive form is grammatical.',
        'The two forms always express opposite meanings.',
      ],
      explanation: 'With verbs like start and begin, either pattern often works with little change in meaning.',
    },
  ].map((item, index) =>
    createQuestion(
      item.prompt,
      item.correct,
      item.distractors,
      item.explanation,
      'Meaning change',
      index < 10 ? 'Intermediate' : 'Advanced',
    ),
  ),
  ...[
    {
      prompt: 'Complete the sentence correctly: "The coach advised us ___ before the exam."',
      correct: 'to rest',
      distractors: ['resting', 'rest', 'to resting'],
      explanation: 'Advise often takes object + to-infinitive.',
    },
    {
      prompt: 'Complete the sentence correctly: "She reminded me ___ the form."',
      correct: 'to submit',
      distractors: ['submitting', 'submit', 'to submitting'],
      explanation: 'Remind can take object + to-infinitive.',
    },
    {
      prompt: 'Complete the sentence correctly: "They encouraged him ___ for the scholarship."',
      correct: 'to apply',
      distractors: ['applying', 'apply', 'to applying'],
      explanation: 'Encourage usually takes object + to-infinitive.',
    },
    {
      prompt: 'Complete the sentence correctly: "The mentor asked everyone ___ three universities."',
      correct: 'to list',
      distractors: ['listing', 'list', 'to listing'],
      explanation: 'Ask often takes object + to-infinitive.',
    },
    {
      prompt: 'Complete the sentence correctly: "She warned them not ___ until the last minute."',
      correct: 'to wait',
      distractors: ['waiting', 'wait', 'to waiting'],
      explanation: 'Warn can take object + to-infinitive, including negative forms.',
    },
    {
      prompt: 'Complete the sentence correctly: "Let her ___."',
      correct: 'speak',
      distractors: ['to speak', 'speaking', 'to speaking'],
      explanation: 'Let is followed by a bare infinitive.',
    },
    {
      prompt: 'Complete the sentence correctly: "They made us ___ outside."',
      correct: 'wait',
      distractors: ['to wait', 'waiting', 'to waiting'],
      explanation: 'Make is followed by a bare infinitive in the active.',
    },
    {
      prompt: 'Complete the sentence correctly: "We watched the children ___ in the yard."',
      correct: 'play',
      distractors: ['to play', 'playing', 'to playing'],
      explanation: 'Some perception verbs are followed by a bare infinitive.',
    },
    {
      prompt: 'Choose the correct passive sentence.',
      correct: 'He was made to wait.',
      distractors: [
        'He was made wait.',
        'He was made waiting.',
        'He was made to waiting.',
      ],
      explanation: 'With the passive of make, to returns: was made to wait.',
    },
    {
      prompt: 'Which sentence correctly uses object + to-infinitive?',
      correct: 'The volunteer showed us how to organize the files.',
      distractors: [
        'The volunteer showed us organize the files.',
        'The volunteer showed us organizing the files.',
        'The volunteer showed us to organizing the files.',
      ],
      explanation: 'Show can lead into an object + infinitive-style instructional structure.',
    },
  ].map((item, index) =>
    createQuestion(
      item.prompt,
      item.correct,
      item.distractors,
      item.explanation,
      'Object and bare infinitive',
      index < 5 ? 'Intermediate' : 'Advanced',
    ),
  ),
  ...[
    {
      prompt: 'Complete the sentence correctly: "She is interested in ___ data analysis."',
      correct: 'learning',
      distractors: ['to learn', 'learn', 'to learning'],
      explanation: 'After a preposition such as in, English normally uses a gerund.',
    },
    {
      prompt: 'Complete the sentence correctly: "They left without ___ goodbye."',
      correct: 'saying',
      distractors: ['to say', 'say', 'to saying'],
      explanation: 'Without is a preposition, so it is followed by a gerund.',
    },
    {
      prompt: 'Complete the sentence correctly: "He succeeded by ___ consistently."',
      correct: 'working',
      distractors: ['to work', 'work', 'to working'],
      explanation: 'By is a preposition and must be followed by a gerund.',
    },
    {
      prompt: 'Complete the sentence correctly: "I look forward to ___ you."',
      correct: 'meeting',
      distractors: ['to meet', 'meet', 'to meeting'],
      explanation: 'In look forward to, to is a preposition, not part of an infinitive.',
    },
    {
      prompt: 'Complete the sentence correctly: "Before ___, he reminded us to review every attachment."',
      correct: 'leaving',
      distractors: ['to leave', 'leave', 'to leaving'],
      explanation: 'Before is a preposition in this structure, so a gerund follows it.',
    },
    {
      prompt: 'Complete the sentence correctly: "She stayed late ___ the proposal."',
      correct: 'to finish',
      distractors: ['finishing', 'finish', 'to finishing'],
      explanation: 'A to-infinitive often expresses purpose.',
    },
    {
      prompt: 'Complete the sentence correctly: "He opened the window ___ in fresh air."',
      correct: 'to let',
      distractors: ['letting', 'let', 'to letting'],
      explanation: 'The infinitive expresses purpose here: why he opened the window.',
    },
    {
      prompt: 'Complete the sentence correctly: "She came early ___ the room."',
      correct: 'to prepare',
      distractors: ['preparing', 'prepare', 'to preparing'],
      explanation: 'This infinitive tells us the purpose of coming early.',
    },
    {
      prompt: 'Which sentence correctly uses a gerund after a preposition?',
      correct: 'He improved by practicing every day.',
      distractors: [
        'He improved by to practice every day.',
        'He improved by practice every day.',
        'He improved to practicing every day.',
      ],
      explanation: 'After prepositions, English normally uses a gerund.',
    },
    {
      prompt: 'Which sentence correctly expresses purpose?',
      correct: 'They met early to review the final draft.',
      distractors: [
        'They met early reviewing the final draft.',
        'They met early review the final draft.',
        'They met early to reviewing the final draft.',
      ],
      explanation: 'A to-infinitive can explain why an action happened.',
    },
  ].map((item, index) =>
    createQuestion(
      item.prompt,
      item.correct,
      item.distractors,
      item.explanation,
      'Prepositions and purpose',
      index < 5 ? 'Intermediate' : 'Advanced',
    ),
  ),
  ...[
    {
      prompt: 'Choose the best correction: "I enjoy to read."',
      correct: 'I enjoy reading.',
      distractors: [
        'I enjoy read.',
        'I enjoy to reading.',
        'I am enjoy reading.',
      ],
      explanation: 'Enjoy is followed by a gerund, not a to-infinitive.',
    },
    {
      prompt: 'Choose the best correction: "She decided going."',
      correct: 'She decided to go.',
      distractors: [
        'She decided go.',
        'She decided to going.',
        'She deciding to go.',
      ],
      explanation: 'Decide takes a to-infinitive.',
    },
    {
      prompt: 'Choose the best correction: "He suggested to leave early."',
      correct: 'He suggested leaving early.',
      distractors: [
        'He suggested leave early.',
        'He suggested to leaving early.',
        'He was suggested to leave early.',
      ],
      explanation: 'Suggest is normally followed by a gerund or a clause, not a to-infinitive.',
    },
    {
      prompt: 'Choose the best correction: "I look forward to meet you."',
      correct: 'I look forward to meeting you.',
      distractors: [
        'I look forward to meet you soonly.',
        'I look forward meeting you.',
        'I am look forward to meeting you.',
      ],
      explanation: 'Here to is a preposition, so it must be followed by a gerund.',
    },
    {
      prompt: 'Choose the best correction: "They made us to wait."',
      correct: 'They made us wait.',
      distractors: [
        'They made us waiting.',
        'They made us to waiting.',
        'They were made us wait.',
      ],
      explanation: 'Make takes a bare infinitive in the active voice.',
    },
    {
      prompt: 'Choose the best correction: "We discussed to change the plan."',
      correct: 'We discussed changing the plan.',
      distractors: [
        'We discussed change the plan.',
        'We discussed to changing the plan.',
        'We were discussed changing the plan.',
      ],
      explanation: 'Discuss is followed by a noun phrase or gerund-style phrase, not a to-infinitive.',
    },
    {
      prompt: 'Choose the best correction: "She wants that I attend the workshop."',
      correct: 'She wants me to attend the workshop.',
      distractors: [
        'She wants me attending the workshop.',
        'She wants me attend the workshop.',
        'She wants that me to attend the workshop.',
      ],
      explanation: 'Want often takes object + to-infinitive.',
    },
    {
      prompt: 'Choose the best correction: "He was made wait outside."',
      correct: 'He was made to wait outside.',
      distractors: [
        'He was made waiting outside.',
        'He was made waits outside.',
        'He was made to waiting outside.',
      ],
      explanation: 'In the passive of make, the to-infinitive returns.',
    },
    {
      prompt: 'Choose the best correction if the meaning is "He quit the habit last year": "He stopped to smoke last year."',
      correct: 'He stopped smoking last year.',
      distractors: [
        'He stopped smoke last year.',
        'He stopped to smoking last year.',
        'He was stopped smoking last year.',
      ],
      explanation: 'Stop + gerund means end the activity.',
    },
    {
      prompt: 'Choose the best correction if the meaning is "I have a memory of the event": "I remembered to meet her at a career fair last year."',
      correct: 'I remembered meeting her at a career fair last year.',
      distractors: [
        'I remembered meet her at a career fair last year.',
        'I remembered to meeting her at a career fair last year.',
        'I was remembered meeting her at a career fair last year.',
      ],
      explanation: 'Remember + gerund refers to a past memory, not a future duty.',
    },
  ].map((item, index) =>
    createQuestion(
      item.prompt,
      item.correct,
      item.distractors,
      item.explanation,
      'Editing',
      index < 5 ? 'Advanced' : 'Advanced',
    ),
  ),
];

const modalsInDepthQuestions = [
  ...[
    ['He can drive.', 'Ability', 'Can expresses present ability here.'],
    ['May I ask a question?', 'Permission', 'May is used here for polite permission.'],
    ['Visitors must sign in.', 'Obligation', 'Must marks a strong rule or requirement in this context.'],
    ['You do not have to bring food.', 'No necessity', 'Do not have to means there is no obligation.'],
    ['You must not touch this wire.', 'Prohibition', 'Must not means something is forbidden.'],
    ['You should revise the summary before sending it.', 'Advice', 'Should expresses advice rather than strict obligation.'],
    ['The manager may call this evening.', 'Possibility', 'May marks a possible future event.'],
    ['You must be tired after the flight.', 'Present deduction', 'Must expresses a strong logical conclusion, not obligation, in this sentence.'],
    ['They must have left already.', 'Past deduction', 'Must have + past participle shows a strong deduction about a past event.'],
    ['I should have checked the figures more carefully.', 'Missed obligation or regret', 'Should have + past participle expresses regret or criticism about what did not happen.'],
    ['We could have won the match.', 'Missed opportunity or unrealized possibility', 'Could have + past participle shows an unrealized possibility.'],
    ['Could you send me the link?', 'Polite request or offer', 'Could softens the request and makes it more polite.'],
  ].map(([sentence, correct, explanation], index) =>
    createQuestion(
      `Which modal meaning label best fits this sentence? "${sentence}"`,
      correct,
      modalMeaningLabels.filter((label) => label !== correct).slice(index % 3, (index % 3) + 3).length === 3
        ? modalMeaningLabels.filter((label) => label !== correct).slice(index % 3, (index % 3) + 3)
        : modalMeaningLabels.filter((label) => label !== correct).slice(0, 3),
      explanation,
      'Meaning identification',
      index < 8 ? 'Basic' : 'Intermediate',
    ),
  ),
  ...[
    {
      prompt: 'Complete the sentence correctly: "He ___ speak French."',
      correct: 'can',
      distractors: ['can to', 'is can', 'caning'],
      explanation: 'A true modal is followed directly by the base form of the verb.',
    },
    {
      prompt: 'Complete the sentence correctly: "She ___ leave now; the rule is strict."',
      correct: 'must',
      distractors: ['must to', 'musting', 'is must'],
      explanation: 'Must expresses strong obligation and is followed by the base verb.',
    },
    {
      prompt: 'Complete the sentence correctly: "Students ___ use calculators during the exam."',
      correct: 'were not allowed to',
      distractors: ['could not to', 'must not to', 'were not allowed'],
      explanation: 'For an official past rule, English often uses were allowed to / were not allowed to.',
    },
    {
      prompt: 'Complete the sentence correctly: "You ___ bring food if you do not want to."',
      correct: "don't have to",
      distractors: ["mustn't", "can't to", 'should not necessarily'],
      explanation: 'Do not have to expresses no necessity, not prohibition.',
    },
    {
      prompt: 'Complete the sentence correctly: "You ___ park here."',
      correct: "mustn't",
      distractors: ["don't have to", "may to not", 'are must not'],
      explanation: 'Mustn’t expresses prohibition.',
    },
    {
      prompt: 'Complete the sentence correctly: "You ___ revise the summary before sending it."',
      correct: 'should',
      distractors: ['should to', 'musting', 'are should'],
      explanation: 'Should is commonly used for advice.',
    },
    {
      prompt: 'Complete the sentence correctly: "The answer ___ be in the appendix."',
      correct: 'could',
      distractors: ['could to', 'is could', 'could have to'],
      explanation: 'Could can express possibility in the present or future.',
    },
    {
      prompt: 'Complete the sentence correctly: "That ___ be the final version; it has no title page."',
      correct: "can't",
      distractors: ['must to', "don't have to", 'should to'],
      explanation: 'Can’t expresses a strong negative deduction.',
    },
    {
      prompt: 'Complete the sentence correctly: "They ___ left already."',
      correct: 'must have',
      distractors: ['must to have', 'must having', 'must'],
      explanation: 'Must have + past participle expresses a strong deduction about the past.',
    },
    {
      prompt: 'Complete the sentence correctly: "I ___ told you earlier."',
      correct: 'should have',
      distractors: ['should', 'should to have', 'should having'],
      explanation: 'Should have + past participle often expresses regret or criticism.',
    },
    {
      prompt: 'Complete the sentence correctly: "We ___ won the match."',
      correct: 'could have',
      distractors: ['could', 'could to have', 'could having'],
      explanation: 'Could have + past participle expresses unrealized possibility or a missed chance.',
    },
    {
      prompt: 'Complete the sentence correctly: "___ you send me the link?"',
      correct: 'Could',
      distractors: ['Do', 'Are', 'Will have'],
      explanation: 'Could is a polite way to ask for something.',
    },
  ].map((item, index) =>
    createQuestion(
      item.prompt,
      item.correct,
      item.distractors,
      item.explanation,
      'Modal choice',
      index < 6 ? 'Basic' : 'Intermediate',
    ),
  ),
  ...[
    {
      prompt: 'Which sentence means prohibition, not absence of obligation?',
      correct: 'You must not smoke here.',
      distractors: [
        "You don't have to smoke here.",
        'You may smoke here.',
        'You should smoke here.',
      ],
      explanation: 'Must not means something is forbidden.',
    },
    {
      prompt: 'Which sentence means there is no necessity?',
      correct: "You don't have to stay.",
      distractors: [
        "You mustn't stay.",
        'You cannot stay.',
        'You should not stay.',
      ],
      explanation: 'Do not have to means there is no obligation to do it.',
    },
    {
      prompt: 'Which sentence best expresses future ability?',
      correct: 'She will be able to join us after 6 p.m.',
      distractors: [
        'She will can join us after 6 p.m.',
        'She can to join us after 6 p.m.',
        'She must join us after 6 p.m.',
      ],
      explanation: 'Be able to is useful when English needs a future form that can cannot provide directly.',
    },
    {
      prompt: 'Which sentence gives advice rather than strong obligation?',
      correct: 'You should apologize.',
      distractors: [
        'You must apologize.',
        "You don't have to apologize.",
        'You can apologize if you want as permission.',
      ],
      explanation: 'Should is weaker than must and usually expresses advice.',
    },
    {
      prompt: 'Which sentence expresses present deduction rather than obligation?',
      correct: 'You must be hungry.',
      distractors: [
        'You must submit the form.',
        'You should be hungry.',
        'You may be hungry as permission.',
      ],
      explanation: 'Here must shows a logical conclusion, not a rule.',
    },
    {
      prompt: 'Which sentence best asks for formal permission?',
      correct: 'May I come in?',
      distractors: [
        'Must I come in?',
        'Should I come in as advice?',
        'I may come in.',
      ],
      explanation: 'May is often used for polite, formal permission.',
    },
    {
      prompt: 'Which sentence uses may for possibility, not permission?',
      correct: 'The manager may call this evening.',
      distractors: [
        'May I ask a question?',
        'You may leave now.',
        'May the door open itself?',
      ],
      explanation: 'May can express either permission or possibility depending on context.',
    },
    {
      prompt: 'Which sentence best shows one successful past achievement?',
      correct: 'After several attempts, he was able to unlock the file.',
      distractors: [
        'After several attempts, he could unlock the file once and that is always better.',
        'After several attempts, he can unlock the file yesterday.',
        'After several attempts, he must unlock the file.',
      ],
      explanation: 'For one successful completed action in the past, was able to is often better than could.',
    },
    {
      prompt: 'Which sentence best shows general past ability?',
      correct: 'When I was younger, I could run for hours.',
      distractors: [
        'When I was younger, I was able to run once yesterday.',
        'When I was younger, I can run for hours.',
        'When I was younger, I must run for hours.',
      ],
      explanation: 'Could is natural for general past ability.',
    },
    {
      prompt: 'Which sentence best expresses a missed opportunity?',
      correct: 'We could have won the match.',
      distractors: [
        'We must have won the match.',
        'We should win the match yesterday.',
        'We can have won the match.',
      ],
      explanation: 'Could have + past participle shows unrealized possibility.',
    },
    {
      prompt: 'Which sentence best makes a polite request?',
      correct: 'Could you send me the link?',
      distractors: [
        'Send me the link now.',
        'Must you send me the link?',
        'You could send me the link as a past possibility.',
      ],
      explanation: 'Could softens the request and sounds more polite.',
    },
    {
      prompt: 'Which sentence best expresses a strong negative deduction about the past?',
      correct: "She can't have written this alone.",
      distractors: [
        'She must not write this alone.',
        'She could write this alone yesterday.',
        'She should have writing this alone.',
      ],
      explanation: 'Can’t have + past participle expresses a strong belief that something was not true in the past.',
    },
  ].map((item, index) =>
    createQuestion(
      item.prompt,
      item.correct,
      item.distractors,
      item.explanation,
      'Important contrasts',
      index < 6 ? 'Intermediate' : 'Advanced',
    ),
  ),
  ...[
    {
      prompt: 'Which sentence best shows strong deduction about a past event?',
      correct: 'They must have left already.',
      distractors: [
        'They must leave already.',
        'They should leave already.',
        'They can to have left already.',
      ],
      explanation: 'Must have + past participle expresses strong deduction about the past.',
    },
    {
      prompt: 'Which sentence best shows strong negative deduction about the past?',
      correct: "He can't have seen the message.",
      distractors: [
        "He can't see the message yesterday.",
        'He must not see the message.',
        'He could seen the message.',
      ],
      explanation: 'Can’t have + past participle expresses a strong negative conclusion about the past.',
    },
    {
      prompt: 'Which sentence best shows regret or criticism about what did not happen?',
      correct: 'You should have told me earlier.',
      distractors: [
        'You should tell me earlier yesterday.',
        'You must have told me earlier.',
        'You could to have told me earlier.',
      ],
      explanation: 'Should have + past participle often expresses regret or criticism.',
    },
    {
      prompt: 'Which sentence best shows unrealized possibility?',
      correct: 'We could have won the match.',
      distractors: [
        'We can won the match.',
        'We must have won the match.',
        'We should win the match yesterday.',
      ],
      explanation: 'Could have + past participle refers to a possible past result that did not happen.',
    },
    {
      prompt: 'Which sentence best shows a possible explanation about the past?',
      correct: 'He might have misunderstood the email.',
      distractors: [
        'He might misunderstand the email yesterday for sure.',
        'He must misunderstand the email.',
        'He could to misunderstand the email.',
      ],
      explanation: 'Might have + past participle expresses uncertain past possibility.',
    },
    {
      prompt: 'After several attempts, which form best completes the sentence? "He ___ unlock the file."',
      correct: 'was able to',
      distractors: ['could to', 'must have', 'should have'],
      explanation: 'Was able to is often preferred for one successful completed achievement in the past.',
    },
    {
      prompt: 'Which sentence best shows general past ability?',
      correct: 'When she was five, she could swim.',
      distractors: [
        'When she was five, she was able to swim exactly once yesterday.',
        'When she was five, she can swim.',
        'When she was five, she must swim.',
      ],
      explanation: 'Could is natural for general past ability over a period of time.',
    },
    {
      prompt: 'Which sentence best completes a likely deduction from evidence: "The lights are off and his car is gone. He ___ at home."',
      correct: "can't be",
      distractors: ['must have', 'should to be', 'can to be'],
      explanation: 'Can’t be expresses a strong negative deduction in the present.',
    },
    {
      prompt: 'Which sentence best completes a strong logical conclusion: "You ___ tired after the flight."',
      correct: 'must be',
      distractors: ['must to be', 'should have be', 'can being'],
      explanation: 'Must be expresses a strong present deduction.',
    },
    {
      prompt: 'Which sentence best completes a regret about checking data? "I ___ the figures more carefully."',
      correct: 'should have checked',
      distractors: ['should checked', 'must check', 'could checking'],
      explanation: 'Should have + past participle expresses regret or criticism.',
    },
    {
      prompt: 'Which sentence best completes a past possibility? "She ___ forgotten the meeting."',
      correct: 'might have',
      distractors: ['might to have', 'must to', 'can have to'],
      explanation: 'Might have + past participle expresses possible explanation about the past.',
    },
    {
      prompt: 'Which sentence best completes a missed chance? "We ___ if we had defended better."',
      correct: 'could have won',
      distractors: ['must have won', 'should win', 'can to win'],
      explanation: 'Could have won shows a possible result that did not happen.',
    },
  ].map((item, index) =>
    createQuestion(
      item.prompt,
      item.correct,
      item.distractors,
      item.explanation,
      'Past modals',
      index < 6 ? 'Intermediate' : 'Advanced',
    ),
  ),
  ...[
    {
      prompt: 'Choose the best correction: "He can to speak French."',
      correct: 'He can speak French.',
      distractors: [
        'He can speaks French.',
        'He is can speak French.',
        'He can speaking French.',
      ],
      explanation: 'True modals are followed directly by the base verb.',
    },
    {
      prompt: 'Choose the best correction: "She must to leave now."',
      correct: 'She must leave now.',
      distractors: [
        'She must leaving now.',
        'She is must leave now.',
        'She must leaves now.',
      ],
      explanation: 'Must takes the base form without to.',
    },
    {
      prompt: 'Choose the best correction if the meaning is "There is no obligation": "You mustn’t come if you are busy."',
      correct: "You don't have to come if you are busy.",
      distractors: [
        "You mustn't come if you are busy, and that means the same thing.",
        'You may not have to come if you are busy to permission.',
        'You can not to come if you are busy.',
      ],
      explanation: 'Mustn’t means prohibition, while don’t have to means no necessity.',
    },
    {
      prompt: 'Choose the best correction: "He could finished it yesterday."',
      correct: 'He could have finished it yesterday.',
      distractors: [
        'He could finishing it yesterday.',
        'He could to finish it yesterday.',
        'He could has finished it yesterday.',
      ],
      explanation: 'Past modal meaning needs could have + past participle.',
    },
    {
      prompt: 'Choose the best correction: "She should to apologize."',
      correct: 'She should apologize.',
      distractors: [
        'She should apologizes.',
        'She is should apologize.',
        'She should apologizing.',
      ],
      explanation: 'Should is followed directly by the base verb.',
    },
    {
      prompt: 'Choose the best correction: "They may to arrive late."',
      correct: 'They may arrive late.',
      distractors: [
        'They may arrives late.',
        'They are may arrive late.',
        'They may arriving late.',
      ],
      explanation: 'May takes the base form without to.',
    },
    {
      prompt: 'Choose the best correction: "Must I to sign here?"',
      correct: 'Must I sign here?',
      distractors: [
        'Must do I sign here?',
        'I must sign here?',
        'Must I signing here?',
      ],
      explanation: 'Questions with modals are formed by inversion, without do-support or to.',
    },
    {
      prompt: 'Choose the best correction: "He can drives."',
      correct: 'He can drive.',
      distractors: [
        'He can driving.',
        'He cans drive.',
        'He is can drive.',
      ],
      explanation: 'After a modal, the verb stays in the base form.',
    },
    {
      prompt: 'Choose the best correction: "She doesn’t can swim."',
      correct: "She can't swim.",
      distractors: [
        "She doesn't can to swim.",
        'She not can swim.',
        'She cannot swimming.',
      ],
      explanation: 'Negatives with modals are formed directly on the modal, not with do-support.',
    },
    {
      prompt: 'Choose the best correction: "You don’t must bring food."',
      correct: "You don't have to bring food.",
      distractors: [
        "You mustn't bring food.",
        'You may not to bring food.',
        'You are not must bring food.',
      ],
      explanation: 'English usually expresses lack of necessity with do not have to, not do not must.',
    },
    {
      prompt: 'Choose the best correction: "He was able unlock the file."',
      correct: 'He was able to unlock the file.',
      distractors: [
        'He was able unlocks the file.',
        'He was able unlocking the file.',
        'He was able for unlock the file.',
      ],
      explanation: 'Be able to is followed by the to-infinitive.',
    },
    {
      prompt: 'Choose the best correction: "They should have went earlier."',
      correct: 'They should have gone earlier.',
      distractors: [
        'They should have go earlier.',
        'They should gone earlier.',
        'They should have going earlier.',
      ],
      explanation: 'Past modal structures use have + past participle.',
    },
  ].map((item, index) =>
    createQuestion(
      item.prompt,
      item.correct,
      item.distractors,
      item.explanation,
      'Editing',
      index < 6 ? 'Intermediate' : 'Advanced',
    ),
  ),
];

const manualQuizBank: Record<string, QuizBankModes> = {
  'active-passive-voice': {
    standard: ensureQuestionCount('active-passive-voice', activePassiveVoiceQuestions, 60),
    advanced: [],
  },
  'future-time-reference': {
    standard: ensureQuestionCount('future-time-reference', futureTimeReferenceQuestions, 60),
    advanced: [],
  },
  'gerunds-infinitives-verb-patterns': {
    standard: ensureQuestionCount('gerunds-infinitives-verb-patterns', gerundsInfinitivesQuestions, 60),
    advanced: [],
  },
  'modals-in-depth': {
    standard: ensureQuestionCount('modals-in-depth', modalsInDepthQuestions, 60),
    advanced: [],
  },
};

export const quizBank: Record<string, QuizBankModes> = {
  ...historicQuizBank,
  ...manualQuizBank,
};
