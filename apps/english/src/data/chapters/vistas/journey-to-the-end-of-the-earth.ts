import { ChapterForensics } from '../../../types';

export const journeyToTheEndOfTheEarth: ChapterForensics = {
  id: 'journey-to-the-end-of-the-earth',
  title: 'Journey to the End of the Earth',
  author: 'Tishani Doshi',
  summary: 'A factual and philosophical account of the "Students on Ice" program, which takes high school students to Antarctica. Doshi explores the continent’s role as a geological time capsule, preserving the history of Gondwana—the ancient supercontinent. The narrative warns of the catastrophic impact of climate change (melting ice shelves, global warming) and emphasizes that small human actions can lead to massive environmental consequences. Antarctica is presented as the "perfect" place to study the Earth’s past, present, and future.',
  narrativeVoice: 'First-person (Doshi). Informative, urgent, and awe-struck.',
  setting: 'Antarctica (The coldest, driest, and windiest continent).',
  authorStyle: 'Travelogue/Journalistic essay. Uses scientific terminology mixed with poetic descriptions of the landscape.',
  themes: [
    'Environmental conservation and Global Warming',
    'Geological history (Gondwana)',
    'Interconnectedness of the Earth\'s systems',
    'Human impact on the "pristine" environment'
  ],
  milestones: [
    { time: 'Departure', event: 'Travels 100 hours crossing nine time zones and three bodies of water to reach Antarctica.' },
    { time: 'History', event: 'Reflection on Gondwana (650 million years ago) and the separation of India and Antarctica.' },
    { time: 'Observation', event: 'Witnessing the lack of human markers (trees, billboards) and the 24-hour austral summer light.' },
    { time: 'Science', event: 'Studying phytoplankton and their role in the global carbon cycle.' },
    { time: 'Walking on Water', event: 'The students walk on a meter-thick ice sheet above 180 meters of salt water.' }
  ],
  characters: [
    {
      name: 'Tishani Doshi',
      traits: ['Environmentally conscious', 'Observant', 'Philosophical'],
      conflict: 'Human progress vs. Planetary health.',
      growth: 'Deepens her understanding of the fragility of the Earth and the urgency of action.',
      evidence: 'Her reflection on how "small things" (phytoplankton) affect the "big things" (global climate).'
    },
    {
      name: 'Geoff Green',
      traits: ['Visionary', 'Educator', 'Canadian adventure-seeker'],
      conflict: 'Traditional tourism vs. Educational expeditions.',
      growth: 'Shifts from taking celebrities to taking students—future policy makers—to witness the cliimate crisis.',
      evidence: 'Leading the Students on Ice program for over six years.'
    }
  ],
  motifs: [
    { symbol: 'Gondwana', meaning: 'The ancient unity of Earth\'s landmasses before human interference.' },
    { symbol: 'Phytoplankton', meaning: 'The "small things" that sustain the entire food chain/Earth\'s life support.' },
    { symbol: 'Ice Shelves', meaning: 'The "canary in the coal mine" for global warming; their collapse signals disaster.' },
    { symbol: 'Students on Ice', meaning: 'Hope for the future and the power of educational epiphany.' }
  ],
  dictionary: [
    { word: 'Austral', context: 'The 24-hour austral summer light', synonym: 'Southern' },
    { word: 'Gondwana', context: 'Giant amalgamated southern supercontinent', synonym: 'Ancient landmass' },
    { word: 'Phytoplankton', context: 'Microscopic grasses of the sea', synonym: 'Micro-algae' },
    { word: 'Ephemeral', context: 'Ephemeral blue-green algae', synonym: 'Short-lived' }
  ],
  triggers: [
    {
      question: "Read the extract and answer:\nClimate change is one of the most hotly contested environmental debates... Either way, Antarctica is a crucial element in this debate—not just because it’s the only place in the world, which has never sustained a human population and therefore remains relatively ‘pristine’ in this respect; but more importantly, because it holds in its ice-cores half-million-year-old carbon records...\n\nHow does the absence of a human population in Antarctica make it significant in the climate change debate, and why is the analogy of a 'time machine' appropriate for its carbon records?",
      answerVerbatim: "I. Pristine Control: Antarctica acts as a 'control group' for measuring human impact precisely because it has no permanent residential population.\nII. Time Machine Analogy: The half-million-year-old carbon records in ice cores offer a literal window into past atmospheric conditions.\nIII. Scientific Reference: It provides an unaltered history of global climate changes.",
      markingSchemePoints: [
        "Pristine environment without human impact serves as a vital reference",
        "Carbon records allow observation of past climates",
        "Acts exactly like a time machine for atmospheric conditions"
      ],
      year: "2023-24",
      type: "RTC",
      marks: 2,
      aiExplanation: "Most appropriate answer: Antarctica's lack of a human population makes it a 'pristine' control group for measuring climate change, while its ancient ice-core carbon records act as a 'time machine' into past atmospheric conditions. Forensic Justification: The 2-mark justification identifies 'Scientific Controls' and 'Temporal Analysis'. Point I identifies the forensic baseline. Point II explains how ice-cores preserve 'half-million-year-old carbon records'."
    },
    {
      question: "To visit Antarctica now is to be a part of that history... When you think about all that can happen in a million years, it can get pretty mind-boggling. How does the author imply the role of geological knowledge in understanding the Earth's past and potential future changes?",
      answerVerbatim: "I. Essential Context: Geological knowledge of Gondwana and tectonic plate movement explains current climate shifts.\nII. Predictions: Understanding past shifts (like the Himalayan collision) is vital for predicting future environmental change.\nIII. Historic Unity: Antarctica reveals the ancient separation of continents and the resulting cooling of the Earth.",
      markingSchemePoints: [
        "Geological knowledge is essential for grasping the Earth's past",
        "Tectonic shifts (Himalayas, South America) altered climate",
        "Understanding past helps predict future environmental changes"
      ],
      year: "2024-25",
      type: "RTC",
      marks: 1,
      aiExplanation: "Most appropriate answer: Geological knowledge of past tectonic shifts, like the separation of Gondwana and the collision of India, is essential for predicting potential future environmental and climate changes. Forensic Justification: The 1-mark award is justified by 'Temporal Connectivity'. It earns the mark by explaining how studying past tectonic shifts is a forensic tool for predicting future changes, bridging millions of years of history."
    },
    {
      question: 'Why is Antarctica the place to go to understand the Earth’s past?',
      answerVerbatim: "I. Time Capsule: Preserves ancient carbon records trapped in deep layers of ice.\nII. Absence of Humans: Remains relatively ‘pristine’ and provides a clear measurement of industrial impact.\nIII. Gondwana Legacy: Effectively documents the history of the ancient supercontinent.",
      markingSchemePoints: [
        'Geological time capsule',
        'Pristine environment (unaffected by humans)',
        'Evidence of Gondwana'
      ],
      year: '2024-25 | Short',
      type: 'Short',
      marks: 2,
      aiExplanation: "Most appropriate answer: Antarctica is a geological time capsule that preserves ancient carbon records in its ice and remains 'pristine' due to a lack of human population, providing clear evidence of the Earth's past. Forensic Justification: This 2-mark justification identifies 'Geological Archive'. Point I (Time Capsule) marks the preservation of carbon records. Point II (Industrial impact) explains how its pristine state contrasts with human-altered regions."
    },
    {
      question: 'What is the significance of "Students on Ice"?',
      answerVerbatim: "I. Future Policymakers: Targets high school students who have the capacity to change global environmental laws.\nII. Experiential Epiphany: First-hand witness to collapsing glaciers is far more impactful than textbook theory.\nIII. Planet Stewardship: Aimed at developing a deep respect and care for the Earth's delicate balance.",
      markingSchemePoints: [
        'Developing future policy makers',
        'First-hand witness to climate change',
        'Epiphany at a young age'
      ],
      year: '2025-26 | Short',
      type: 'Short',
      marks: 2,
      aiExplanation: "Most appropriate answer: 'Students on Ice' targets future policymakers, giving them a first-hand experience of the climate crisis—like witnessing collapsing glaciers—that creates a more profound epiphany than textbook learning. Forensic Justification: The 2-mark reward is based on 'Educational Epiphany'. Point I (Future Policymakers) targets the most malleable generation. Point II (First-hand witness) explains how direct exposure creates a replicating emotional impact."
    },
    {
      question: "Imagine you are Tishani Doshi, the narrator of ‘Journey to the End of the Earth.’ Write a blog post about your experience in Antarctica, focusing on the profound impact of the environment on your understanding of the Earth’s past and future.\nYou may begin like this:\nStanding on the icy expanse of Antarctica, I was struck by...",
      answerVerbatim: "I. Sensory Shock: Awe at the sheer scale of the landscape and the profound silence.\nII. Educational Insight: Direct comprehension of Gondwana's legacy and Earth's history beyond books.\nIII. Urgent Warning: First-hand experience of melting glaciers creates a terrifying, personal understanding of climate change.\nIV. Responsibility: Realization of the human duty to protect this 'end of the world' to save our future.",
      markingSchemePoints: [
        "Awe at the sheer scale/profound silence of Antarctica",
        "Comprehension of Earth's history beyond books",
        "Observation of delicate ecosystem / rapid melting",
        "Stark warning about climate change / call for responsibility"
      ],
      year: "2025-26",
      type: "Long",
      marks: 5,
      aiExplanation: "Most appropriate answer: Tishani Doshi's blog post would reflect the total 'sensory shock' of Antarctica—from its blinding whiteness to its profound silence—which forced an immediate educational epiphany about the Earth's fragility. Standing on a meter-thick ice sheet, she realized that Gondwana's legacy isn't just ancient history; it is the foundation of our current climate crisis. The experience transformed intellectual theory into a terrifyingly personal understanding of global warming, especially when witnessing ice shelves collapsing in real-time. This journey underscores our urgent moral responsibility to mind the 'small things' like phytoplankton to save the 'big things' like our planet's life-support systems, highlighting the need for immediate environmental stewardship. Forensic Justification: This 5-mark blog post justification reflects an 'Environmental Awakening'. Marks are awarded for identifying: 1) 'Sensory Shock', 2) 'Educational Insight', 3) 'First-hand awareness' of climate change, and 4) 'Moral Responsibility' of humanity."
    }
  ],
  distinctions: [
    {
      title: 'Human Impact vs. Natural Resilience',
      comparison: {
        labelA: 'Human Civilization',
        labelB: 'Antarctica',
        points: [
          { a: 'Exists for only 12,000 years; created "ruckus" and dominance.', b: 'Exists for millions of years; maintains ancient records.' },
          { a: 'Increases CO2 levels and burns fossil fuels.', b: 'Suffers through melting ice shelves and ozone depletion.' }
        ]
      }
    }
  ]
};
