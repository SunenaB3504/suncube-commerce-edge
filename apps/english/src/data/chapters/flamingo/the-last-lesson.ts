import { ChapterForensics } from '../../../types';

export const theLastLesson: ChapterForensics = {
  id: 'flamingo-1',
  title: 'The Last Lesson',
  author: 'Alphonse Daudet',
  summary: 'The Last Lesson" is a poignant and evocative narrative set against the backdrop of the Franco-Prussian War in 1870, specifically in the French district of Alsace. The story begins with young Franz, a typical schoolboy who is more interested in the outdoor world—the birds\' eggs and the Prussian soldiers\' drilling—than his French grammar lessons on participles. Upon reaching school, he is met with an eerie, Sunday-like silence that replaces the usual hustle and bustle of opening and closing desks. The narrative takes a dramatic turn when M. Hamel, dressed in his finest Sunday clothes, announces that Berlin has ordered only German to be taught in the schools of Alsace and Lorraine. This "thunderclap" of news shifts Franz\'s entire world-view, turning his once-burdensome books into "old friends" he cannot bear to part with. M. Hamel delivers a moving tribute to the French language, describing it as the clearest and most logical in the world, and warns that language is the "key to their prison" for an enslaved people. The presence of the village elders on the back benches symbolizes a collective, though belated, repentance for neglecting their education. As the church clock strikes twelve and the Prussian trumpets sound, M. Hamel is overwhelmed by emotion, unable to speak further. In a final act of quiet defiance, he writes "Vive La France!" in giant letters on the chalkboard, signaling the end of an era. The story serves as a profound meditation on linguistic chauvinism and the irony of realizing the value of one\'s heritage only when it is on the verge of being lost. Ultimately, it captures the psychological transition of a boy maturing into a patriot in the span of a single hour.',
  narrativeVoice: 'First Person (Franz)',
  setting: 'Alsace, France; Franco-Prussian War (1870-71)',
  authorStyle: 'Patriotic, poignant, and reflective',
  themes: [
    'Linguistic Chauvinism (Imposition of German)',
    'Procrastination ("Putting off learning till tomorrow")',
    'Language as an Identity ("Key to their prison")',
    'The "Last Chance" Syndrome'
  ],
  milestones: [
    { time: 'The Dread', event: "Franz's dread of the participle test and attraction to the bright outdoors." },
    { time: 'The Bulletin', event: 'Encounter with the crowd at the bulletin board (Wachter the blacksmith).' },
    { time: 'The Silence', event: 'Unexpected quiet at school; villagers (Old Hauser) in the back benches.' },
    { time: 'The Decree', event: 'M. Hamel announces the Berlin order to teach only German.' },
    { time: 'The Awakening', event: "Franz's sudden awakening to the beauty of French and regret for past neglect." },
    { time: 'The Tribute', event: "M. Hamel's tribute to French as the clearest, most logical language." },
    { time: 'The Dismissal', event: 'The writing of "Vive La France!" and the silent dismissal.' }
  ],
  characters: [
    {
      name: 'Franz',
      traits: ['Procrastinator', 'Observant', 'Responsive', 'Patriotic'],
      conflict: 'Internal regret for neglecting studies vs. sudden love for his mother tongue.',
      growth: 'Matures in a single hour; shift from seeing books as a "nuisance" to "old friends".',
      evidence: "Franz realizing he can no longer learn what he previously avoided; the 'thunderclap' of the news."
    },
    {
      name: 'M. Hamel',
      traits: ['Dignified', 'Repentant', 'Patriotic', 'Strict yet sensitive'],
      conflict: 'Personal guilt for past complacency (sending kids to water flowers) vs. professional duty.',
      growth: 'Transforms from a "cranky" teacher to a symbol of national identity and resilience.',
      evidence: "Wearing his 'fine Sunday clothes' and writing 'Vive La France!' with all his might."
    }
  ],
  motifs: [
    { symbol: 'The Bulletin Board', meaning: 'Source of "all our bad news"; symbolizes external control and the weight of war.' },
    { symbol: "The Pigeons' Cooing", meaning: 'Symbolizes the absurdity of linguistic imperialism; "Will they make them sing in German?"' },
    { symbol: 'The Church Clock', meaning: 'The takeover of life, time, and language; the inevitability of the Prussians.' },
    { symbol: 'Vive La France!', meaning: 'Symbolizes cultural immortality and quiet defiance against political conquest.' }
  ],
  dictionary: [
    { word: 'Linguistic Chauvinism', context: 'The imposition of one language (German) over another (French).', synonym: 'Language Imperialism' },
    { word: 'Thunderclap', context: "The shocking announcement of the last lesson.", synonym: 'Stunner / Shock' },
    { word: 'Counting on the commotion', context: 'Franz hoping to enter unnoticed during the usual school din.', synonym: 'Relying on the din' },
    { word: 'In great dread of', context: 'Franz feeling intense fear of being scolded for not knowing participles.', synonym: 'Extremely fearful' }
  ],
  triggers: [
    {
      question: "Pick evidence from the extract that helps one infer that this was not the protagonist’s first time being late to school.\n\n(Reference: Usually, when school began...)",
      answerVerbatim: "The protagonist states: 'I had counted on the commotion to get to my desk without being seen,' which implies that they have been late before and have developed a strategy for avoiding punishment.",
      markingSchemePoints: [
        "Plan to sneak in without being noticed",
        "Relying on the usual classroom commotion",
        "Implies a previously developed strategy for avoiding punishment"
      ],
      year: "2023-24",
      type: "RTC",
      marks: 1,
      aiExplanation: "Most appropriate answer: Franz's statement that he 'counted on the commotion to get to my desk without being seen' implies a previously developed strategy to avoid punishment. Forensic Justification: The 1-mark award is based on this direct inference. Franz relies on the usual classroom 'din' (the 'commotion') to mask his arrival, which proves that being late was a familiar habit rather than an isolated incident."
    },
    {
      question: "What a thunderclap these words were to me! Oh, the wretches; that was what they had put up at the town-hall! My last French lesson! Why, I hardly knew how to write! I should never learn anymore! I must stop there, then! Oh, how sorry I was for not learning my lessons, for seeking birds’ eggs, or going sliding on the Saar! My books, that had seemed such a nuisance a while ago, so heavy to carry, my grammar, and my history of the saints, were old friends now that I couldn’t give up. And M. Hamel, too; the idea that he was going away, that I should never see him again, made me forget all about his ruler and how cranky he was.\n\nWhat was the writer’s purpose in using the metaphor of a ‘thunderclap’?",
      answerVerbatim: "I. To emphasise the suddenness and shock of Franz’s understanding about the importance of his education.\nII. To conveys the urgency and deep impact of this moment.\nIII. To dramatically highlight how unexpected and jarring the realisation was to him – like the startling and instant nature of a thunderclap.\nIV. To effectively capture the emotional intensity of the moment of deep regret and abrupt awakening experienced by Franz.",
      markingSchemePoints: [
        "Emphasise suddenness and shock",
        "Convey urgency and deep impact",
        "Highlight unexpected/jarring realization",
        "Capture emotional intensity of deep regret"
      ],
      year: "2024-25",
      type: "RTC",
      marks: 1,
      aiExplanation: "Most appropriate answer: The metaphor of a 'thunderclap' emphasizes the suddenness, shock, and deep impact of the realization that this is the last French lesson. Forensic Justification: This 1-mark explanation focuses on the sensory power of the metaphor. Like an actual thunderclap, the news is jarring and unexpected, instantly shattering Franz's carefree existence and pulling him into a state of intense regret."
    },
    {
      question: "Read the extract and answer the question:\n\nWhat a thunderclap these words were to me! Oh, the wretches; that was what they had put up at the town-hall! My last French lesson! ... My books, that had seemed such a nuisance a while ago ... were old friends now that I couldn’t give up. And M. Hamel, too; the idea that he was going away, that I should never see him again, made me forget all about his ruler and how cranky he was.\n\nSelect the correct option from those given in brackets to fill in the blank.\nThe use of exclamatory marks in the first five sentences of the extract serves to express the speaker’s _______ (hidden/ intense) emotions.",
      answerVerbatim: "intense",
      markingSchemePoints: [
        "intense"
      ],
      year: "2024-25",
      type: "RTC",
      marks: 1,
      aiExplanation: "Most appropriate answer: intense. Forensic Justification: For this 1-mark question, the exclamation marks (!) serve as a forensic indicator of high-energy, overwhelming emotion. In the context of M. Hamel's decree, they represent the peak of Franz's psychological distress and disbelief, justifying the choice of 'intense' over 'hidden'."
    },
    {
      question: "Read the extract and answer the question:\n\nWhat a thunderclap these words were to me! Oh, the wretches; that was what they had put up at the town-hall! My last French lesson! ... My books, that had seemed such a nuisance a while ago ... were old friends now that I couldn’t give up. And M. Hamel, too; the idea that he was going away, that I should never see him again, made me forget all about his ruler and how cranky he was.\n\nComplete the following suitably.\nThe activities of seeking birds' eggs and sliding on the Saar reveal two things about Franz's character before his change in perspective. First, his youthful carefree nature and second, his preference for _________________.",
      answerVerbatim: "…preference for play over study",
      markingSchemePoints: [
        "preference for play over study",
        "avoiding school/responsibilities",
        "enjoying the outdoors"
      ],
      year: "2024-25",
      type: "RTC",
      marks: 1,
      aiExplanation: "Most appropriate answer: …preference for play over study. Forensic Justification: This identifies the 'carefree nature' of childhood before the 'last chance' syndrome sets in. Seeking birds' eggs and sliding on the Saar are symbols of procrastination. The 1-mark answer accurately contrasts these outdoor activities against classroom discipline, proving a clear preference for play over academic responsibility."
    },
    {
      question: "Read the extract and answer the question:\nWhat a thunderclap these words were to me! Oh, the wretches; that was what they had put up at the town-hall! My last French lesson! ... My books, that had seemed such a nuisance a while ago ... were old friends now that I couldn’t give up. And M. Hamel, too; the idea that he was going away, that I should never see him again, made me forget all about his ruler and how cranky he was.\n\nWhat is reflected through the shift in the speaker’s perception of Mr. Hamel, conveyed through his readiness to forget the ruler?",
      answerVerbatim: "It reflects a newfound respect and appreciation, overshadowing past fears of discipline and strictness.",
      markingSchemePoints: [
        "Newfound respect and appreciation",
        "Overshadowing past fears",
        "Realizing the teacher's value"
      ],
      year: "2024-25",
      type: "RTC",
      marks: 1,
      aiExplanation: "Most appropriate answer: It reflects a newfound respect and appreciation that overshadows past fears of discipline. Forensic Justification: The 1-mark justification lies in the emotional shift from 'cranky' teacher to 'patriot'. By forgetting the 'ruler', Franz moves past fear toward a deeper appreciation for Hamel's 40 years of service, viewing him as a symbol of national identity."
    },
    {
      question: "Read the extract and answer the question:\nWhat a thunderclap these words were to me! Oh, the wretches; that was what they had put up at the town-hall! My last French lesson! Why, I hardly knew how to write! I should never learn anymore! I must stop there, then! Oh, how sorry I was for not learning my lessons, for seeking birds’ eggs, or going sliding on the Saar! My books, that had seemed such a nuisance a while ago, so heavy to carry, my grammar, and my history of the saints, were old friends now that I couldn’t give up. And M. Hamel, too; the idea that he was going away, that I should never see him again, made me forget all about his ruler and how cranky he was.\n\nSelect the textual option that is closest to indicating a sense of panic.\nA. Oh, how sorry I was for not learning my lessons…\nB. Why, I hardly knew how to write!\nC. Oh, the wretches; that was what they had put up at the town-hall!\nD. And M. Hamel, too;",
      answerVerbatim: "B. Why, I hardly knew how to write!",
      markingSchemePoints: [
        "B"
      ],
      year: "2024-25",
      type: "RTC",
      marks: 1,
      aiExplanation: "Most appropriate answer: B. Why, I hardly knew how to write!. Forensic Justification: The choice of 'panic' (1 mark) is justified by the sudden realization of 'lost time'. The exclamation captures the frantic desperation of a student discovering his own illiteracy at the exact moment his language is banned, representing the 'Last Lesson' syndrome of realizing value only upon loss."
    },
    {
      question: "Read the extract and answer the question:\nWhat a thunderclap these words were to me! Oh, the wretches; that was what they had put up at the town-hall! My last French lesson! ... My books, that had seemed such a nuisance a while ago, so heavy to carry, my grammar, and my history of the saints, were old friends now that I couldn’t give up.\n\nWhat does the following line from the extract, showcase?\nMy books, that had seemed such a nuisance a while ago, so heavy to carry, my grammar, and my history of the saints, were old friends now that I couldn’t give up.\nA. realization\nB. confusion\nC. expectation\nD. affirmation",
      answerVerbatim: "A. realization",
      markingSchemePoints: [
        "A"
      ],
      year: "2024-25",
      type: "RTC",
      marks: 1,
      aiExplanation: "Most appropriate answer: A. realization. Forensic Justification: The term 'realization' earns the 1 mark by identifying the 'Paradigm Shift' in the narrative. Franz's former burdens (heavy grammar/history books) are now viewed as 'old friends', highlighting the core theme that cultural identity (language) is often taken for granted until threatened."
    },
    {
      question: "What does the contrasting imagery of the church clock and the Prussian trumpets represent, in ‘The Last Lesson’?",
      answerVerbatim: "The contrasting imagery represents the tension between local traditions and foreign occupation.\n\nI. The church clock: Symbol of local, everyday life and continuity.\nII. Prussian trumpets: Symbolise disruption, military power, and the enforcement of foreign rule.\n\nThis highlights the theme of loss and the struggle to preserve one's cultural heritage against overwhelming odds.",
      markingSchemePoints: [
        "Tension between local traditions & foreign occupation",
        "Church clock = local everyday life / continuity",
        "Prussian trumpets = disruption / military power / foreign rule",
        "Theme of cultural loss against overwhelming odds"
      ],
      year: "2024-25",
      type: "Short",
      marks: 2,
      aiExplanation: "Most appropriate answer: The contrast represents the tension between local traditions (Church clock) and foreign occupation (Prussian trumpets). Forensic Justification: This 2-mark explanation identifies two symbolic layers. Point I (church clock) represents peaceful continuity, while Point II (trumpets) represents military disruption. Marks are awarded for identifying this 'acoustic' tension between tradition and conquest."
    },
    {
      question: "What role does the French language played in ‘The Last Lesson’, in the context of the narrator’s feelings towards it?",
      answerVerbatim: "I. Shift in Perspective: The narrator's feelings shift from indifference to deep appreciation and respect when it is no longer allowed to be taught.\nII. Symbolic Loss: French symbolises the loss of freedom and the imposition of foreign control over the region.\nIII. Emotional Impact: The narrator’s sense of loss and regret reflects the emotional impact of this change.",
      markingSchemePoints: [
        "Feelings shift from indifference to deep appreciation/respect",
        "Symbolises loss of freedom and imposition of foreign control",
        "Sense of loss and regret reflects emotional impact"
      ],
      year: "2025-26",
      type: "Short",
      marks: 2,
      aiExplanation: "Most appropriate answer: The language role shifts from indifference to deep appreciation as it symbolizes a lost freedom. Forensic Justification: The 2-mark award is justified by exploring both internal and external values. Point I (internal shift to appreciation) and Point II (external symbolic value as 'key to their prison') together explain how linguistic identity becomes a central anchor against political enslavement."
    }
  ],
  distinctions: [
    {
      title: "M. Hamel: Before vs. After the News",
      comparison: {
        labelA: "Regular Days",
        labelB: "The Last Lesson",
        points: [
          { a: "Complacent; sends kids to water flowers/go fishing", b: "Repentant; blames himself for past lack of focus" },
          { a: "Cranky and strict with his iron ruler", b: "Dignified, solemn, and wearings his best Sunday clothes" },
          { a: "A routine government servant", b: "A symbol of cultural defiance and patriotism" }
        ]
      }
    }
  ]
};
