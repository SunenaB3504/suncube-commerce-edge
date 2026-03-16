/**
 * Reading Strategies Module
 * Covers Skimming, Scanning, Inference, Topic Sentences, Tone, and Purpose.
 */

export const readingStrategiesData = {
    subject: "English",
    chapter: "Reading Strategies",
    examTags: ["CUET", "MH-CET"],
    studyGuide: {
        topics: [
            {
                id: "skimming-scanning",
                title: "1. Skimming vs Scanning",
                content: {
                    coreConcept: "Skimming is reading quickly to get the general idea (gist). Scanning is searching for specific facts (names, dates, numbers).",
                    formulaBank: "- Skim: Read first and last lines of paragraphs.\n- Scan: Use keywords, ignore unrelated text.",
                    logic: "If a question asks 'What is the main idea?', skim. If it asks 'In what year did X happen?', scan.",
                    traps: "Reading every single word during scanning — this wastes time.",
                    examples: [
                        { q: "Look for the word 'Revenue' in a table — Skim or Scan?", a: "Scan." },
                        { q: "Read the first sentence of each paragraph to find the topic — Skim or Scan?", a: "Skim." },
                        { q: "Checking a flight schedule for your flight number?", a: "Scan." },
                        { q: "Deciding if a book is worth buying by looking at the back cover?", a: "Skim." },
                        { q: "Which is faster for finding a phone number?", a: "Scanning." }
                    ],
                    speedSummary: "Skim for the forest, scan for the trees."
                }
            },
            {
                id: "inference-tone",
                title: "2. Inference & Tone",
                content: {
                    coreConcept: "Inference is drawing a conclusion based on clues, not direct statements. Tone is the author's attitude (e.g., sarcastic, optimistic, critical).",
                    formulaBank: "- Tone words: Objective, Subjective, Nostalgic, Cynical, Didactic.",
                    logic: "Look at the adjectives the author uses. Positive adjectives = optimistic/approving tone.",
                    traps: "Confusing your own opinion with the author's implied tone.",
                    examples: [
                        { q: "Author says: 'The sunset was painted in shades of gold and fire.' Mood?", a: "Inspiring / Beautiful." },
                        { q: "Author says: 'The politician's promises were as hollow as a drum.' Tone?", a: "Critical / Cynical." },
                        { q: "Inference: 'John took his umbrella'. What is the weather?", a: "Likely rainy or starting to rain." },
                        { q: "If a passage uses 'statistically proven' and 'research shows', tone is?", a: "Objective / Informative." },
                        { q: "Meaning of 'Didactic' tone?", a: "Intended to teach or moralize." }
                    ],
                    speedSummary: "Tone = Author's Feeling. Inference = Reading between the lines."
                }
            }
        ]
    },
    flashcards: [
        {
            id: "read-fc-001",
            term: "Skimming",
            definition: "Reading rapidly to get a general overview of the material.",
            example: "Reading newspaper headlines."
        },
        {
            id: "read-fc-002",
            term: "Scanning",
            definition: "Reading rapidly to find specific facts or information.",
            example: "Looking for a name in a phone book."
        },
        {
            id: "read-fc-003",
            term: "Inference",
            definition: "An educated guess drawn from evidence or reasoning provided in the text.",
            example: "If someone wears a heavy coat, you infer it's cold outside."
        },
        {
            id: "read-fc-004",
            term: "Tone",
            definition: "The author's attitude toward the subject or audience.",
            example: "Sarcastic, humorous, serious, objective."
        },
        {
            id: "read-fc-005",
            term: "Didactic",
            definition: "Intended to teach, particularly in having moral instruction as an ulterior motive.",
            example: "A fable teaching a lesson."
        }
    ],
    questions: [
        {
            id: "read-q-001",
            type: "multiple-choice",
            difficulty: "easy",
            question: "Which reading technique is best used when looking for a specific date in a historical text?",
            options: ["Skimming", "Scanning", "Intensive Reading", "Inferencing"],
            correct: 1,
            explanation: "Scanning involves moving your eyes quickly down the page seeking specific words and phrases without reading the text as a whole.",
            examTags: ["CUET"]
        },
        {
            id: "read-q-002",
            type: "multiple-choice",
            difficulty: "easy",
            question: "What is the primary purpose of skimming a text?",
            options: ["To find specific vocab", "To understand every detail", "To get the main idea or gist", "To analyze the author's tone"],
            correct: 2,
            explanation: "Skimming is used to quickly identify the main ideas of a text. You read the first and last paragraphs and chapter summaries.",
            examTags: ["CUET"]
        },
        {
            id: "read-q-003",
            type: "multiple-choice",
            difficulty: "medium",
            question: "If an author writes: 'The so-called expert completely destroyed the fragile ecosystem,' what is the likely tone?",
            options: ["Objective", "Optimistic", "Critical", "Nostalgic"],
            correct: 2,
            explanation: "Words like 'so-called' and 'completely destroyed' show a strong disapproval, making the tone critical.",
            examTags: ["CUET", "MH-CET"]
        },
        {
            id: "read-q-004",
            type: "multiple-choice",
            difficulty: "medium",
            question: "An inference is best described as:",
            options: ["A direct quote from the text", "The author's biography", "A logical conclusion based on clues in the text", "A summary of the chapter"],
            correct: 2,
            explanation: "Inferences are 'reading between the lines' — drawing logical conclusions from evidence the author provides but doesn't explicitly state.",
            examTags: ["CUET"]
        },
        {
            id: "read-q-005",
            type: "multiple-choice",
            difficulty: "hard",
            question: "An author presents facts without letting their own opinions show. The tone of the passage is:",
            options: ["Subjective", "Objective", "Didactic", "Cynical"],
            correct: 1,
            explanation: "An objective tone is impartial. It does not show any feelings for or against a topic; therefore, it is unbiased or neutral.",
            examTags: ["CUET", "MH-CET"]
        },
        {
            id: "read-q-006",
            type: "multiple-choice",
            difficulty: "medium",
            question: "Which part of a paragraph usually contains the 'Topic Sentence'?",
            options: ["The very end", "The middle", "The beginning", "Topic sentences are optional and rare"],
            correct: 2,
            explanation: "Usually, the first sentence of a paragraph is the topic sentence, clearly stating the main idea of that paragraph.",
            examTags: ["CUET"]
        },
        {
            id: "read-q-007",
            type: "multiple-choice",
            difficulty: "easy",
            question: "What is 'context clue'?",
            options: ["A hidden message", "Hints found within a sentence to help understand an unknown word", "The index of a book", "A type of skimming"],
            correct: 1,
            explanation: "Context clues are hints that an author gives to help define a difficult or unusual word within a book.",
            examTags: ["CUET", "MH-CET"]
        },
        {
            id: "read-q-008",
            type: "multiple-choice",
            difficulty: "hard",
            question: "Read the excerpt: 'The old mansion loomed in the darkness, its windows resembling hollow eyes.' What is the mood?",
            options: ["Joyful", "Ominous", "Nostalgic", "Whimsical"],
            correct: 1,
            explanation: "Words like 'loomed', 'darkness', and 'hollow eyes' create a dark, threatening, or ominous mood.",
            examTags: ["CUET"]
        },
        {
            id: "read-q-009",
            type: "multiple-choice",
            difficulty: "medium",
            question: "A text written to convince the reader to recycle is an example of what purpose?",
            options: ["To inform", "To entertain", "To persuade", "To explain"],
            correct: 2,
            explanation: "Texts attempting to get the reader to agree with an opinion or take an action are persuasive.",
            examTags: ["CUET", "MH-CET"]
        },
        {
            id: "read-q-010",
            type: "multiple-choice",
            difficulty: "medium",
            question: "If a text is 'Didactic', what is its primary purpose?",
            options: ["To scare", "To confuse", "To teach a moral lesson", "To make someone laugh"],
            correct: 2,
            explanation: "Didactic writing is intended to teach, particularly in having moral instruction as an ulterior motive.",
            examTags: ["MH-CET"]
        },
        {
            id: "read-q-011",
            type: "multiple-choice",
            difficulty: "easy",
            question: "Which is the fastest reading speed?",
            options: ["Intensive reading", "Scanning", "Skimming", "Proofreading"],
            correct: 1,
            explanation: "Scanning is the fastest reading speed, as you are only looking for a specific target and ignoring completely all other text.",
            examTags: ["CUET"]
        },
        {
            id: "read-q-012",
            type: "multiple-choice",
            difficulty: "hard",
            question: "If an author's tone is 'Cynical', they are conveying:",
            options: ["Deep sadness", "Hope for the future", "Distrust of human sincerity or motives", "Joyful reminiscence"],
            correct: 2,
            explanation: "A cynical tone expresses doubt or disbelief in the professed motives of others; believing people are motivated purely by self-interest.",
            examTags: ["CUET", "MH-CET"]
        },
        {
            id: "read-q-013",
            type: "multiple-choice",
            difficulty: "medium",
            question: "What is typically found in the concluding paragraph of an essay?",
            options: ["New evidence", "A restatement of the thesis/main idea", "Detailed examples", "Citations"],
            correct: 1,
            explanation: "A conclusion usually summarizes the main points and restates the thesis in a new way, rather than introducing new information.",
            examTags: ["CUET"]
        },
        {
            id: "read-q-014",
            type: "multiple-choice",
            difficulty: "medium",
            question: "A paragraph lacks logical progression from one sentence to the next. The paragraph lacks:",
            options: ["Cohesion", "Grammar", "Vocabulary", "A title"],
            correct: 0,
            explanation: "Cohesion refers to the 'glue' that holds a paragraph together, ensuring sentences flow logically into one another.",
            examTags: ["CUET", "MH-CET"]
        },
        {
            id: "read-q-015",
            type: "multiple-choice",
            difficulty: "medium",
            question: "A passage that relies heavily on sensory details (sight, sound, smell) is primarily:",
            options: ["Argumentative", "Descriptive", "Expository", "Narrative"],
            correct: 1,
            explanation: "Descriptive writing uses detailed imagery and sensory words to create a picture in the reader's mind.",
            examTags: ["CUET"]
        }
    ]
};
