/**
 * Grammar & Usage Module
 * 20 questions across 8 specific topics.
 * 
 * TOPICS:
 * 1. Tenses (2 Qs)
 * 2. Subject-Verb Agreement (3 Qs)
 * 3. Articles (2 Qs)
 * 4. Prepositions (3 Qs)
 * 5. Active/Passive Voice (2 Qs)
 * 6. Direct/Indirect Speech (2 Qs)
 * 7. Spotting Errors (2 Qs)
 * 8. Sentence Rearrangement (4 Qs)
 */

export const grammarData = {
    subject: "English",
    chapter: "Grammar & Usage",
    examTags: ["MH-CET", "CUET"],
    studyGuide: {
        topics: [
            {
                id: "verb-tenses",
                title: "1. Tenses & Time Frames",
                content: {
                    coreConcept: "Tenses indicate the time of action. Three main categories: Present, Past, and Future, each divided into Simple, Continuous, Perfect, and Perfect Continuous.",
                    formulaBank: "- Present Perfect Continuous: Subject + has/have + been + Verb(-ing).\n- Future Perfect: Subject + will have + Past Participle.",
                    logic: "1. Identify 'Key Time Markers' (Since, For, by the time, yet, already).\n2. If 'Since' is used for a started action, use Perfect Continuous.",
                    traps: "The 'Since' vs 'For' trap: Since is for a point in time, For is for a duration.",
                    examples: [
                        { q: "By the time we arrive, they ______ (leave).", a: "will have left." },
                        { q: "She ______ (work) here since 2015.", a: "has been working." },
                        { q: "The quality of the products ______ (was/were) checked.", a: "was." },
                        { q: "Neither he nor I ______ (am/is) responsible.", a: "am (Proximity rule)." },
                        { q: "He is _____ (a/an) honest man.", a: "an." },
                        { q: "He is _____ (a/an) European.", a: "a (Starts with 'Y' sound)." },
                        { q: "One of the boys _____ (has/have) won.", a: "has." },
                        { q: "I have been waiting for you _____ (since/for) two hours.", a: "for." },
                        { q: "If it ______ (rain), we will cancel the match.", a: "rains (First conditional)." },
                        { q: "The news ______ (is/are) surprising.", a: "is (News is uncountable/singular)." },
                        { q: "I ______ (see) him yesterday.", a: "saw." },
                        { q: "They ______ (finish) the task by tomorrow.", a: "will have finished." },
                        { q: "She ______ (cook) while I was reading.", a: "was cooking." },
                        { q: "We ______ (go) to the park last Sunday.", a: "went." },
                        { q: "He ______ (not/know) the answer yet.", a: "does not know." },
                        { q: "Water ______ (boil) at 100 degrees Celsius.", a: "boils." },
                        { q: "I ______ (write) a letter now.", a: "am writing." },
                        { q: "They ______ (live) in Paris for ten years.", a: "have lived / have been living." },
                        { q: "He ______ (already/eat) when I arrived.", a: "had already eaten." },
                        { q: "If I ______ (be) you, I would go.", a: "were (Subjunctive)." },
                        { q: "The train ______ (leave) at 8 PM tonight.", a: "leaves (Scheduled event)." },
                        { q: "I ______ (meet) her in 2010.", a: "met." },
                        { q: "Look! The sun ______ (rise).", a: "is rising." },
                        { q: "He ______ (play) football every day.", a: "plays." },
                        { q: "The birds ______ (fly) to the south in winter.", a: "fly." }
                    ],
                    speedSummary: "Look for 'By the time' -> hint for Perfect Tense."
                }
            },
            {
                id: "sv-agreement",
                title: "2. Subject-Verb Agreement",
                content: {
                    coreConcept: "The verb must match the subject in number (Singular vs Plural).",
                    formulaBank: "- Neither/Nor & Either/Or: Verb agrees with the NEAREST subject.\n- One of the + Plural Noun + Singular Verb.",
                    logic: "Identify the REAL subject. Often buried in phrases like 'The quality of the chairs... (Quality is subject).'",
                    traps: "Subject separation: Phrases like 'as well as', 'along with', 'in addition to' DO NOT change the subject number.",
                    examples: [
                        { q: "The group of students _____ (is/are) coming.", a: "is ('group' is singular)." },
                        { q: "Either the teacher or the students _____ (is/are) responsible.", a: "are (Agrees with 'students')." },
                        { q: "The list of items _____ (is/are) on the desk.", a: "is." },
                        { q: "Economics _____ (is/are) my favorite subject.", a: "is." },
                        { q: "A pair of shoes _____ (was/were) stolen.", a: "was." },
                        { q: "Many a student _____ (has/have) failed.", a: "has." },
                        { q: "Mathematics _____ (is/are) difficult for some.", a: "is." },
                        { q: "The cattle _____ (is/are) grazing.", a: "are (Cattle is plural)." },
                        { q: "Politics _____ (is/are) a dirty game.", a: "is." },
                        { q: "Each of the participants _____ (receives/receive) a gift.", a: "receives." },
                        { q: "Everyone _____ (has/have) their own opinion.", a: "has." },
                        { q: "Bread and butter _____ (is/are) his daily breakfast.", a: "is (Single unit)." },
                        { q: "Two miles _____ (is/are) a long distance.", a: "is (Single measurement)." },
                        { q: "The news _____ (was/were) shocking.", a: "was." },
                        { q: "Someone _____ (is/are) knocking at the door.", a: "is." },
                        { q: "The scissors _____ (is/are) sharp.", a: "are (Always plural)." },
                        { q: "My family _____ (is/are) planning a trip.", a: "is / are (depending on context)." },
                        { q: "There _____ (is/are) many ways to solve this.", a: "are." },
                        { q: "Here _____ (is/are) the books you requested.", a: "are." },
                        { q: "None of the information _____ (is/are) correct.", a: "is (Information is uncountable)." },
                        { q: "Neither of us _____ (knows/know) the truth.", a: "knows." },
                        { q: "A large number of people _____ (has/have) gathered.", a: "have." },
                        { q: "The number of accidents _____ (is/are) decreasing.", a: "is." },
                        { q: "Ten dollars _____ (is/are) too much for this.", a: "is." },
                        { q: "Both of the girls _____ (has/have) passed.", a: "have." }
                    ],
                    speedSummary: "Ignore 'of...' phrases when picking the verb."
                }
            },
            {
                id: "articles-preps",
                title: "3. Articles & Prepositions",
                content: {
                    coreConcept: "Articles (A, An, The) define nouns. Prepositions show relationships.",
                    formulaBank: "- An: Before vowel SOUNDS (An honest man).\n- Committed to: Fixed preposition.",
                    logic: "For articles, focus on the sound, not the spelling. For prepositions, memorize fixed pairings (Accused of, Prohibited from).",
                    traps: "Silent letters in articles (An HR manager, An MVP).",
                    examples: [
                        { q: "He is _____ European.", a: "a (starts with 'Y' sound)." },
                        { q: "I have _____ one-rupee note.", a: "a (starts with 'W' sound)." },
                        { q: "She is _____ umbrella.", a: "an." },
                        { q: "The sun rises in _____ east.", a: "the." },
                        { q: "He is _____ MLA.", a: "an (starts with 'Em' sound)." },
                        { q: "_____ Himalayas are to the north of India.", a: "The." },
                        { q: "I go to _____ school by bus.", a: "no article." },
                        { q: "He is fond _____ music.", a: "of." },
                        { q: "She is afraid _____ spiders.", a: "of." },
                        { q: "He died _____ cancer.", a: "of." },
                        { q: "Wait _____ the bus stop.", a: "at." },
                        { q: "The book is _____ the table.", a: "on." },
                        { q: "He jump _____ the river.", a: "into (Movement)." },
                        { q: "I will meet you _____ Monday.", a: "on." },
                        { q: "He has been here _____ Monday.", a: "since." },
                        { q: "I am good _____ English.", a: "at." },
                        { q: "She is angry _____ me.", a: "with." },
                        { q: "I am proud _____ you.", a: "of." },
                        { q: "He is married _____ my cousin.", a: "to." },
                        { q: "Listen _____ me.", a: "to." },
                        { q: "Divide the cake _____ the four children.", a: "among." },
                        { q: "Distribute the sweets _____ the two brothers.", a: "between." },
                        { q: "He is standing _____ me.", a: "beside." },
                        { q: "I prefer tea _____ coffee.", a: "to." },
                        { q: "He is junior _____ me.", a: "to." }
                    ],
                    speedSummary: "Sound check for A/An; Logic check for The."
                }
            },
            {
                id: "active-passive-voice",
                title: "4. Active & Passive Voice",
                content: {
                    coreConcept: "Active Voice: The subject performs the action. Passive Voice: The subject receives the action.",
                    formulaBank: "- Simple Present: am/is/are + Past Participle.\n- Simple Past: was/were + Past Participle.\n- Future: will be + Past Participle.",
                    logic: "Only transitive verbs (verbs with objects) can be changed into passive voice. The object of the active sentence becomes the subject of the passive sentence.",
                    traps: "Intransitive verbs (e.g., 'He sleeps') cannot be changed to passive.",
                    examples: [
                        { q: "Active: He plays football.", a: "Passive: Football is played by him." },
                        { q: "Active: She wrote a letter.", a: "Passive: A letter was written by her." },
                        { q: "Active: They are eating cakes.", a: "Passive: Cakes are being eaten by them." },
                        { q: "Active: I will help you.", a: "Passive: You will be helped by me." },
                        { q: "Active: He had finished the work.", a: "Passive: The work had been finished by him." },
                        { q: "Active: Someone stole my pen.", a: "Passive: My pen was stolen." },
                        { q: "Active: People speak English.", a: "Passive: English is spoken." },
                        { q: "Active: She is cooking food.", a: "Passive: Food is being cooked by her." },
                        { q: "Active: We have won the match.", a: "Passive: The match has been won by us." },
                        { q: "Active: He was reading a book.", a: "Passive: A book was being read by him." },
                        { q: "Active: Close the door.", a: "Passive: Let the door be closed." },
                        { q: "Active: Post this letter.", a: "Passive: Let this letter be posted." },
                        { q: "Active: Who wrote this?", a: "Passive: By whom was this written?" },
                        { q: "Active: He can do it.", a: "Passive: It can be done by him." },
                        { q: "Active: They must sign it.", a: "Passive: It must be signed by them." },
                        { q: "Active: I know him.", a: "Passive: He is known to me." },
                        { q: "Active: The teacher is checking papers.", a: "Passive: Papers are being checked by the teacher." },
                        { q: "Active: My mother loves me.", a: "Passive: I am loved by my mother." },
                        { q: "Active: They were playing cards.", a: "Passive: Cards were being played by them." },
                        { q: "Active: She has completed the project.", a: "Passive: The project has been completed by her." },
                        { q: "Active: Invite them.", a: "Passive: Let them be invited." },
                        { q: "Active: He brought some apples.", a: "Passive: Some apples were brought by him." },
                        { q: "Active: I am drawing a map.", a: "Passive: A map is being drawn by me." },
                        { q: "Active: We will follow the rules.", a: "Passive: The rules will be followed by us." },
                        { q: "Active: She helps the poor.", a: "Passive: The poor are helped by her." }
                    ],
                    speedSummary: "Passive always uses the Past Participle (V3)."
                }
            },
            {
                id: "direct-indirect-speech",
                title: "5. Direct & Indirect Speech",
                content: {
                    coreConcept: "Direct Speech: Exact words of the speaker. Indirect Speech: Reporting what someone said without exact words.",
                    formulaBank: "- Now -> Then\n- Here -> There\n- Today -> That day\n- This -> That",
                    logic: "When reporting a past statement, move the tense one step back (Present -> Past, Past -> Past Perfect).",
                    traps: "Universal truths do not change tense (e.g., 'The sun rises in the east').",
                    examples: [
                        { q: "Direct: He said, 'I am busy.'", a: "Indirect: He said that he was busy." },
                        { q: "Direct: She said, 'I am writing.'", a: "Indirect: She said that she was writing." },
                        { q: "Direct: They said, 'We have won.'", a: "Indirect: They said that they had won." },
                        { q: "Direct: He said, 'I saw her.'", a: "Indirect: He said that he had seen her." },
                        { q: "Direct: She said, 'I will go.'", a: "Indirect: She said that she would go." },
                        { q: "Direct: He says, 'I am fine.'", a: "Indirect: He says that he is fine (Present reporting verb)." },
                        { q: "Direct: Teacher said, 'The Earth is round.'", a: "Indirect: Teacher said that the Earth is round (Universal truth)." },
                        { q: "Direct: He said to me, 'What are you doing?'", a: "Indirect: He asked me what I was doing." },
                        { q: "Direct: She said, 'Are you coming?'", a: "Indirect: She asked if I was coming." },
                        { q: "Direct: He said, 'Go away.'", a: "Indirect: He ordered me to go away." },
						{ q: "Direct: She said, 'Please help me.'", a: "Indirect: She requested me to help her." },
						{ q: "Direct: He said, 'Alas! I am undone.'", a: "Indirect: He exclaimed sadly that he was undone." },
						{ q: "Direct: My father said, 'Honesty is the best policy.'", a: "Indirect: My father said that honesty is the best policy." },
						{ q: "Direct: He said, 'I can lift this box.'", a: "Indirect: He said that he could lift that box." },
						{ q: "Direct: She said, 'I may come.'", a: "Indirect: She said that she might come." },
						{ q: "Direct: He said to me, 'Where do you live?'", a: "Indirect: He asked me where I lived." },
						{ q: "Direct: She said, 'Don't make a noise.'", a: "Indirect: She forbade us to make a noise." },
						{ q: "Direct: He said, 'May you live long!'", a: "Indirect: He prayed that I might live long." },
						{ q: "Direct: She said, 'I finished my work.'", a: "Indirect: She said that she had finished her work." },
						{ q: "Direct: They said, 'We were playing.'", a: "Indirect: They said that they had been playing." },
						{ q: "Direct: He said, 'I have been working.'", a: "Indirect: He said that he had been working." },
						{ q: "Direct: She said, 'I had gone there.'", a: "Indirect: She said that she had gone there (No change)." },
						{ q: "Direct: He said, 'I shell go.'", a: "Indirect: He said that he should go." },
						{ q: "Direct: She says, 'I will buy a pen.'", a: "Indirect: She says that she will buy a pen." },
						{ q: "Direct: He said, 'Hurrah! We won the match.'", a: "Indirect: He exclaimed with joy that they had won the match." }
                    ],
                    speedSummary: "Change the tense and the pronouns, but keep the sense."
                }
            }
        ]
    },
    flashcards: [
        {
            id: "gram-fc-001",
            term: "Subject-Verb Agreement",
            definition: "The verb must agree with its subject in number and person.",
            example: "The list of items is (not are) on the table."
        },
        {
            id: "gram-fc-002",
            term: "Active Voice",
            definition: "The subject performs the action.",
            example: "The CEO signed the contract."
        }
    ],
    questions: [
        // 1. TENSES (2 Qs)
        {
            id: "gram-q-001",
            type: "multiple-choice",
            difficulty: "easy",
            question: "Choose the correct form of the verb: By the time we reach the office, the meeting _______.",
            options: ["will start", "will have started", "started", "has started"],
            correct: 1,
            explanation: "Rule: Future Perfect Tense. We use 'will have + past participle' for an action that will be completed before a certain point in the future.",
            examTags: ["MH-CET"]
        },
        {
            id: "gram-q-002",
            type: "multiple-choice",
            difficulty: "easy",
            question: "Identify the tense: 'I have been working on this project since January.'",
            options: ["Present Perfect", "Present Continuous", "Present Perfect Continuous", "Past Perfect Continuous"],
            correct: 2,
            explanation: "Rule: Present Perfect Continuous. Used for an action that started in the past and is still continuing.",
            examTags: ["MH-CET"]
        },

        // 2. SUBJECT-VERB AGREEMENT (3 Qs)
        {
            id: "gram-q-003",
            type: "multiple-choice",
            difficulty: "easy",
            question: "Identify the error: The quality (A) of the products (B) were (C) exceptional (D).",
            options: ["A", "B", "C", "D"],
            correct: 2,
            explanation: "Rule: Subject-Verb Agreement. The subject is 'quality' (singular), so the verb should be 'was' instead of 'were'.",
            examTags: ["MH-CET"]
        },
        {
            id: "gram-q-004",
            type: "multiple-choice",
            difficulty: "easy",
            question: "The director and the producer _______ arrived.",
            options: ["has", "have", "is", "was"],
            correct: 1,
            explanation: "Rule: Compound Subjects. When two different nouns are joined by 'and' and have separate articles ('the'), they take a plural verb.",
            examTags: ["MH-CET"]
        },
        {
            id: "gram-q-005",
            type: "multiple-choice",
            difficulty: "easy",
            question: "Neither the manager nor his assistants _______ responsible for the error.",
            options: ["is", "are", "was", "has"],
            correct: 1,
            explanation: "Rule: Proximity Rule. When subjects are joined by 'neither...nor', the verb agrees with the nearest subject ('assistants' - plural).",
            examTags: ["MH-CET"]
        },

        // 3. ARTICLES (2 Qs)
        {
            id: "gram-q-006",
            type: "multiple-choice",
            difficulty: "easy",
            question: "Fill in the blank: He is _______ honest man.",
            options: ["a", "an", "the", "no article"],
            correct: 1,
            explanation: "Rule: Article Usage. Use 'an' before words beginning with a vowel sound, even if the letter is a consonant ('honest' has a silent 'h').",
            examTags: ["MH-CET"]
        },
        {
            id: "gram-q-007",
            type: "multiple-choice",
            difficulty: "easy",
            question: "Fill in the blank: _______ Amazon is the longest river in South America.",
            options: ["A", "An", "The", "No article"],
            correct: 2,
            explanation: "Rule: Definite Article. Use 'the' before the names of rivers.",
            examTags: ["MH-CET"]
        },

        // 4. PREPOSITIONS (3 Qs)
        {
            id: "gram-q-008",
            type: "multiple-choice",
            difficulty: "easy",
            question: "The company is committed _______ providing the best service.",
            options: ["to", "for", "with", "on"],
            correct: 0,
            explanation: "Rule: Fixed Prepositions. The verb 'committed' is always followed by the preposition 'to'.",
            examTags: ["MH-CET"]
        },
        {
            id: "gram-q-009",
            type: "multiple-choice",
            difficulty: "easy",
            question: "The cat jumped _______ the table.",
            options: ["in", "on", "into", "onto"],
            correct: 3,
            explanation: "Rule: Prepositions of Motion. 'Onto' is used to indicate movement to a position on a surface.",
            examTags: ["MH-CET"]
        },
        {
            id: "gram-q-010",
            type: "multiple-choice",
            difficulty: "medium",
            question: "He has been living here _______ ten years.",
            options: ["since", "for", "from", "during"],
            correct: 1,
            explanation: "Rule: Time Prepositions. Use 'for' to denote a duration of time and 'since' for a specific point in time.",
            examTags: ["MH-CET"]
        },

        // 5. ACTIVE/PASSIVE VOICE (2 Qs)
        {
            id: "gram-q-011",
            type: "multiple-choice",
            difficulty: "medium",
            question: "Change to Passive Voice: 'The marketing team launched the campaign.'",
            options: [
                "The campaign was launched by the marketing team.",
                "The campaign is launched by the marketing team.",
                "The campaign has been launched by the team.",
                "The marketing team was launching the campaign."
            ],
            correct: 0,
            explanation: "Rule: Simple Past Passive. 'Subject + was/were + past participle' is used to transform active simple past sentences.",
            examTags: ["MH-CET"]
        },
        {
            id: "gram-q-012",
            type: "multiple-choice",
            difficulty: "hard",
            question: "Change to Active Voice: 'The budget was being discussed by the committee.'",
            options: [
                "The committee discussed the budget.",
                "The committee has been discussing the budget.",
                "The committee was discussing the budget.",
                "The budget discussed by the committee."
            ],
            correct: 2,
            explanation: "Rule: Past Continuous Active. 'Subject + was/were + verb-ing' is the active form of 'was/were + being + past participle'.",
            examTags: ["MH-CET"]
        },

        // 6. DIRECT/INDIRECT SPEECH (2 Qs)
        {
            id: "gram-q-013",
            type: "multiple-choice",
            difficulty: "medium",
            question: "Change to Indirect Speech: She said, 'I am busy today.'",
            options: [
                "She said that she is busy today.",
                "She said that she was busy that day.",
                "She said that she was busy today.",
                "She told me she is busy."
            ],
            correct: 1,
            explanation: "Rule: Reported Speech. In indirect speech, 'am' changes to 'was', and 'today' changes to 'that day'.",
            examTags: ["MH-CET"]
        },
        {
            id: "gram-q-014",
            type: "multiple-choice",
            difficulty: "hard",
            question: "Change to Direct Speech: He asked if I had finished the report.",
            options: [
                "He said, 'Did you finish the report?'",
                "He said, 'Have you finished the report?'",
                "He said, 'Finish the report.'",
                "He asked, 'Do you finish the report?'"
            ],
            correct: 1,
            explanation: "Rule: Interrogative Reported Speech. 'Asked if' in indirect speech corresponds to a 'Yes/No' question in direct speech. Past perfect often reverts to present perfect.",
            examTags: ["MH-CET"]
        },

        // 7. SPOTTING ERRORS (2 Qs)
        {
            id: "gram-q-015",
            type: "multiple-choice",
            difficulty: "hard",
            question: "Spot the error: Despite of (A) the rain (B), we decided (C) to go for the walk (D).",
            options: ["A", "B", "C", "D"],
            correct: 0,
            explanation: "Rule: Prepositional Accuracy. 'Despite' should not be followed by 'of'. Either use 'Despite' or 'In spite of'.",
            examTags: ["MH-CET"]
        },
        {
            id: "gram-q-016",
            type: "multiple-choice",
            difficulty: "medium",
            question: "Spot the error: One of the (A) employee (B) was (C) promoted (D).",
            options: ["A", "B", "C", "D"],
            correct: 1,
            explanation: "Rule: Subject-Verb Agreement. After 'one of the', the noun must be plural ('employees'), even though the verb remains singular ('was').",
            examTags: ["MH-CET"]
        },

        // 8. SENTENCE REARRANGEMENT (4 Qs)
        {
            id: "gram-q-017",
            type: "multiple-choice",
            difficulty: "medium",
            question: "Rearrange the parts (P, Q, R, S) to form a coherent sentence:\n(P) for sustainable growth\n(Q) the new policy\n(R) aims to provide\n(S) a framework",
            options: ["QPSR", "QRSP", "QSPR", "RQSP"],
            correct: 1,
            explanation: "Coherent sequence: The subject (Q: the new policy) followed by verb (R: aims to provide) and object (S: a framework) and purpose (P: for sustainable growth).",
            examTags: ["MH-CET"]
        },
        {
            id: "gram-q-018",
            type: "multiple-choice",
            difficulty: "medium",
            question: "Rearrange: (P) in India\n(Q) rapid digitization\n(R) has transformed\n(S) the retail sector",
            options: ["QPRS", "QRSP", "PQRS", "RQPS"],
            correct: 1,
            explanation: "Coherent sequence: Subject (Q: rapid digitization) followed by verb (R: has transformed), object (S: the retail sector), and location (P: in India).",
            examTags: ["MH-CET"]
        },
        {
            id: "gram-q-019",
            type: "multiple-choice",
            difficulty: "medium",
            question: "Rearrange: (P) investors should\n(Q) their portfolio\n(R) diversify\n(S) to minimize risk",
            options: ["PQRS", "PRQS", "QPSR", "RPQS"],
            correct: 1,
            explanation: "Coherent sequence: Subject (P: investors should) followed by verb (R: diversify), object (Q: their portfolio), and purpose (S: to minimize risk).",
            examTags: ["MH-CET"]
        },
        {
            id: "gram-q-020",
            type: "multiple-choice",
            difficulty: "easy",
            question: "Rearrange: (P) successful\n(Q) hard work\n(R) is the key to\n(S) being",
            options: ["QRSP", "QPSR", "SQRP", "RSQP"],
            correct: 0,
            explanation: "Coherent sequence: Subject (Q) + Verb (R) + Object (S) + Adjective (P). 'Hard work is the key to being successful.'",
            examTags: ["MH-CET"]
        }
    ]
};
