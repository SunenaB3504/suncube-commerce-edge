/**
 * Writing Skills Module
 * Covers formal letters, essay writing patterns, notice writing, and sentence structures.
 */

export const writingSkillsData = {
    subject: "English",
    chapter: "Writing Skills",
    examTags: ["CUET", "MH-CET"],
    studyGuide: {
        topics: [
            {
                id: "formal-letters",
                title: "1. Formal Letters format",
                content: {
                    coreConcept: "A formal letter follows a strict format: Sender's Address, Date, Receiver's Address, Subject, Salutation, Body, Subscription, Signature.",
                    formulaBank: "- Salutation: Sir/Madam or Dear Sir.\n- Subscription: Yours faithfully (if Dear Sir) or Yours sincerely (if name used).",
                    logic: "Always keep the tone polite, objective, and straight to the point. No slang.",
                    traps: "Using 'Yours affectionately' in a formal letter.",
                    examples: [
                        { q: "Where does the sender's address go?", a: "At the top of the letter." },
                        { q: "Subscription for 'Dear Sir'?", a: "Yours faithfully." },
                        { q: "Subscription for 'Dear Mr. Verma'?", a: "Yours sincerely." },
                        { q: "Is 'Hey' a valid salutation for a formal letter?", a: "No, use 'Sir/Madam' or 'Dear [Name]'." },
                        { q: "Should a formal letter have a 'Subject' line?", a: "Yes, it must be concise and clear." }
                    ],
                    speedSummary: "Formal = Objective, concise, structured."
                }
            },
            {
                id: "notices",
                title: "2. Notice Writing",
                content: {
                    coreConcept: "A notice is a brief formal announcement, usually pinned on a board.",
                    formulaBank: "- Must be enclosed in a BOX.\n- Word limit: usually 50 words.\n- Structure: Name of issuing agency, Word 'NOTICE', Date, Heading, Body, Signatory.",
                    logic: "Answer the 5 Ws: What is happening, Where, When, Who is invited, Who to contact.",
                    traps: "Writing a long paragraph. Notices must be extremely direct.",
                    examples: [
                        { q: "Word limit for a school notice?", a: "Usually 50 words." },
                        { q: "Is a box mandatory for a notice?", a: "Yes, it is a standard presentation rule." },
                        { q: "Where is the word 'NOTICE' placed?", a: "Centrally, below the issuing agency's name." },
                        { q: "Should you sign at the bottom of a notice?", a: "Yes, followed by your name and designation." },
                        { q: "True or False: A notice should be in the first person ('I').", a: "False (Use third person: 'Students are informed that...')." }
                    ],
                    speedSummary: "Box it. 50 words. Fact-heavy."
                }
            }
        ]
    },
    flashcards: [
        {
            id: "writ-fc-001",
            term: "Salutation",
            definition: "The greeting in a letter (e.g., Dear Sir, Respected Madam).",
            example: "Dear Mr. Smith,"
        },
        {
            id: "writ-fc-002",
            term: "Subscription",
            definition: "The complimentary close of a letter.",
            example: "Yours faithfully, Yours sincerely."
        },
        {
            id: "writ-fc-003",
            term: "Persuasive Essay",
            definition: "An essay designed to convince the reader of a specific viewpoint.",
            example: "An essay arguing for the reduction of plastic usage."
        },
        {
            id: "writ-fc-004",
            term: "Notice",
            definition: "A formal printed or written announcement.",
            example: "A school notice about an upcoming debate competition."
        },
        {
            id: "writ-fc-005",
            term: "Thesis Statement",
            definition: "A single sentence that summarizes the main point or claim of an essay.",
            example: "Capital punishment should be abolished because it is inhumane and ineffective."
        }
    ],
    questions: [
        {
            id: "writ-q-001",
            type: "multiple-choice",
            difficulty: "easy",
            question: "In a formal letter, where is the receiver's address placed?",
            options: ["Above the date", "Below the date", "At the very bottom", "Below the subject"],
            correct: 1,
            explanation: "The standard format is: Sender's Address -> Date -> Receiver's Address.",
            examTags: ["CUET"]
        },
        {
            id: "writ-q-002",
            type: "multiple-choice",
            difficulty: "easy",
            question: "What is the correct complementary close for a letter starting with 'Dear Sir/Madam'?",
            options: ["Yours sincerely", "Yours faithfully", "Yours affectionately", "Yours truly"],
            correct: 1,
            explanation: "When you don't know the receiver's name (Sir/Madam), you close with 'Yours faithfully'. If you know the name, you use 'Yours sincerely'.",
            examTags: ["CUET", "MH-CET"]
        },
        {
            id: "writ-q-003",
            type: "multiple-choice",
            difficulty: "medium",
            question: "Which of these is NOT a required feature of a Notice?",
            options: ["The date of issue", "The word 'NOTICE'", "A salutation like 'Dear Students'", "The name of the issuing authority"],
            correct: 2,
            explanation: "A Notice is an open announcement. It does not use personalized salutations like 'Dear Student'.",
            examTags: ["CUET"]
        },
        {
            id: "writ-q-004",
            type: "multiple-choice",
            difficulty: "easy",
            question: "A Notice should ideally be enclosed within a:",
            options: ["Circle", "Box", "Quotation marks", "Bracket"],
            correct: 1,
            explanation: "It is a standard presentation rule that a Notice must be drawn inside a rectangular box.",
            examTags: ["CUET"]
        },
        {
            id: "writ-q-005",
            type: "multiple-choice",
            difficulty: "medium",
            question: "In essay writing, what is a 'Thesis Statement'?",
            options: ["The concluding thought", "The main argument or claim of the essay", "The title of the essay", "A hook to grab attention"],
            correct: 1,
            explanation: "The thesis statement concisely outlines the main argument or point that the entire essay will support.",
            examTags: ["CUET", "MH-CET"]
        },
        {
            id: "writ-q-006",
            type: "multiple-choice",
            difficulty: "medium",
            question: "Which of the following phrases is most suitable for a formal business letter?",
            options: ["I'm getting in touch 'cause...", "I am writing to inquire about...", "Just wanted to ask about...", "Hit me up regarding..."],
            correct: 1,
            explanation: "'I am writing to inquire about...' is professional, direct, and avoids colloquialisms.",
            examTags: ["CUET", "MH-CET"]
        },
        {
            id: "writ-q-007",
            type: "multiple-choice",
            difficulty: "hard",
            question: "In an official letter to the Editor, the 'Subject' line should be placed:",
            options: ["Before the Salutation", "After the Salutation", "Above the Date", "In the concluding paragraph"],
            correct: 0,
            explanation: "In modern block format (CBSE standard), the Subject is typically placed just before the Salutation (Sir/Madam).",
            examTags: ["CUET"]
        },
        {
            id: "writ-q-008",
            type: "multiple-choice",
            difficulty: "medium",
            question: "An essay comparing the pros and cons of online classes is an example of:",
            options: ["A narrative essay", "A descriptive essay", "An analytical/expository essay", "A persuasive essay"],
            correct: 2,
            explanation: "Expository essays explain or analyze a topic objectively, often comparing different aspects without taking a heavy bias.",
            examTags: ["CUET"]
        },
        {
            id: "writ-q-009",
            type: "multiple-choice",
            difficulty: "medium",
            question: "What is the typical word limit for drafting a Notice in board examinations?",
            options: ["20 words", "50 words", "100 words", "200 words"],
            correct: 1,
            explanation: "The standard word limit for a Notice is 50 words to ensure briefness and clarity.",
            examTags: ["CUET"]
        },
        {
            id: "writ-q-010",
            type: "multiple-choice",
            difficulty: "hard",
            question: "When writing an article for a school magazine, which element is mandatory at the top?",
            options: ["The Date", "The Receiver's Address", "Title/Heading and Author's Name", "Salutation"],
            correct: 2,
            explanation: "Articles require a catchy Heading/Title immediately followed by a 'By-line' (the author's name).",
            examTags: ["CUET", "MH-CET"]
        },
        {
            id: "writ-q-011",
            type: "multiple-choice",
            difficulty: "easy",
            question: "Which tense is predominantly used in writing a 'Report' of an event that has already occurred?",
            options: ["Present Continuous", "Future Perfect", "Past Tense", "Present Perfect"],
            correct: 2,
            explanation: "Reports narrate events that have already taken place, hence they are written heavily in the Past Tense.",
            examTags: ["CUET"]
        },
        {
            id: "writ-q-012",
            type: "multiple-choice",
            difficulty: "medium",
            question: "In formal emails or letters, what does 'Encl:' stand for at the bottom?",
            options: ["Encourage", "Enclosed", "End conclusion", "English class"],
            correct: 1,
            explanation: "'Encl.' is an abbreviation for 'Enclosed', indicating that additional documents are attached with the letter.",
            examTags: ["MH-CET"]
        },
        {
            id: "writ-q-013",
            type: "multiple-choice",
            difficulty: "medium",
            question: "A transition word like 'Furthermore' is best used to:",
            options: ["Show contrast", "Show a result", "Add information to an existing point", "Conclude an essay"],
            correct: 2,
            explanation: "'Furthermore', 'Moreover', and 'In addition' are transitional devices used to add supplementary information.",
            examTags: ["CUET", "MH-CET"]
        },
        {
            id: "writ-q-014",
            type: "multiple-choice",
            difficulty: "hard",
            question: "The tone of a 'Letter of Complaint' to a municipal commissioner should be:",
            options: ["Aggressive and insulting", "Firm but polite and formal", "Humorous and sarcastic", "Apologetic"],
            correct: 1,
            explanation: "A formal complaint must firmly state the issue and demand action but remain respectful and strictly formal.",
            examTags: ["CUET"]
        },
        {
            id: "writ-q-015",
            type: "multiple-choice",
            difficulty: "medium",
            question: "Which of the following is an INCORRECT way to write the date in a formal letter?",
            options: ["15 March 2024", "March 15, 2024", "15th March 2024", "15/03/2024"],
            correct: 3,
            explanation: "Numeric formats with slashes (15/03/24) are considered too informal for official letters. The month name should be spelled out.",
            examTags: ["CUET"]
        }
    ]
};
