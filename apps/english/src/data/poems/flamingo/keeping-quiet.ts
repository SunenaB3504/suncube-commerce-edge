import { PoetryForensics } from '../../../types';

export const keepingQuiet: PoetryForensics = {
  id: 'poem-2',
  title: 'Keeping Quiet',
  author: 'Pablo Neruda',
  summary: '"Keeping Quiet" is a profound philosophical poem that advocates for the transformative power of silence and introspection in a world plagued by chaos and conflict. Pablo Neruda begins with an invitation for everyone to count to twelve and remain still, using the number twelve to represent the hours of the day or the months of the year, suggesting a universal pause. This moment of silence is envisioned as an "exotic" experience because it would be free from the rush of engines and the noise of modern existence, bringing all of humanity into a "sudden strangeness" of unity. The poet argues that if we were to stop our mindless activities, even for a moment, the environmental destruction (fishermen hurting whales) and human suffering (the salt gatherer\'s hurt hands) would cease. He critiques those who prepare "green wars" or wars with gas and fire, pointing out that such victories are hollow because there are "no survivors" to celebrate them. Instead, he proposes that enemies should walk together like brothers, idling in the shade without any destructive purpose. Neruda clarifies that his request for stillness should not be mistaken for "total inactivity" or death, as he wants nothing to do with death; rather, he seeks a pause that can break the "sadness" of never understanding ourselves. He uses the metaphor of the Earth to show that what seems dead in winter actually possesses the potential for rebirth and life. The poem concludes by returning to the initial count of twelve, leaving the reader with the responsibility to internalize this silence. Ultimately, "Keeping Quiet" is a plea for brotherhood, environmental consciousness, and the rediscovery of our common human essence through the simple act of being still.',
  narrativeVoice: 'First Person (Persuasive / Reflective)',
  setting: 'Universal / Global (A moment of collective silence)',
  authorStyle: 'Symbolic, humanitarian, and meditative',
  themes: [
    'The Necessity of Self-introspection',
    'Universal Brotherhood and Peace',
    'Environmental Protection and Non-violence',
    'The Difference between Stillness and Inactivity'
  ],
  characters: [
    {
      name: 'The Speaker (Poet)',
      traits: ['Peace-loving', 'Reflective', 'Humanitarian'],
      conflict: 'External: The global obsession with "move" and "wars" that leads to self-destruction.',
      growth: 'Static; he acts as a guide or a mirror for humanity.',
      evidence: "I want no truck with death."
    },
    {
      name: 'Humanity (General)',
      traits: ['Rushed', 'Destructive', 'Unhappy'],
      conflict: 'Internal: The "sadness" of not understanding oneself despite being busy.',
      growth: 'Potential for growth through the proposed silence.',
      evidence: "Victories with no survivors."
    }
  ],
  motifs: [
    { symbol: 'Twelve', meaning: 'Represents the cycle of time (hours/months) and the need for a total pause.' },
    { symbol: 'Exotic Moment', meaning: 'Silence as a rare, otherworldly experience in a noisy world.' },
    { symbol: 'Clean Clothes', meaning: 'The change in perspective and the shedding of violent intentions.' },
    { symbol: 'The Earth', meaning: 'The ultimate teacher of how life exists within apparent stillness.' }
  ],
  dictionary: [
    { word: 'Introspection', context: 'The process of looking into one\'s own thoughts and feelings.', synonym: 'Self-examination' },
    { word: 'Idling', context: 'Spending time doing nothing; here it means a peaceful pause.', synonym: 'Inactivity / Lazing' },
    { word: 'Strangeness', context: 'The feeling of unity that would arise from sudden collective silence.', synonym: 'Unfamiliarity / Oddity' },
    { word: 'Survivors', context: 'Used to highlight the futility of wars.', synonym: 'Remnants / Endurers' }
  ],
  triggers: [
    {
      question: "Imagine you are Pablo Neruda, the poet of Keeping Quiet. What advice might you offer to Robert Frost, the poet of A Roadside Stand, in the context of his conflicted emotions, as displayed in the given lines:\nThe requisite lift of spirit has never been found,\nOr so the voice of the country seems to complain,\nI can’t help owning the great relief it would be\nTo put these people at one stroke out of their pain.\n\nPen down your advice, in a letter to Frost.",
      answerVerbatim: "Dear Robert, I understand it can be difficult to make decisions when overwhelmed by emotions. I advise you to take a moment to be still and contemplative.\n\nI. Objective Understanding: By quieting your mind, you may objectively understand their struggles.\nII. Perspective: Reflection helps you see beyond conflicting emotions and connect with shared humanity.\nIII. Balance: This silence allows you to act from a place of calm rather than rash impulse.\n\nWarmly, Pablo Neruda.",
      markingSchemePoints: [
        "Take a moment of stillness and reflection before reacting",
        "Quiet the mind to objectively understand their struggles",
        "Disconnect from overwhelming emotions to connect with humanity"
      ],
      year: "2023-24",
      type: "Long",
      marks: 5,
      aiExplanation: "Most appropriate answer: Neruda would advise Frost to practice deep stillness and collective reflection to disconnect from overwhelming emotions and connect with shared humanity. In a letter, he might say: 'Dear Robert, I see you are struggling with the painful urge to put these people 'at one stroke out of their pain.' My advice is to embrace a moment of total stillness together. By quieting the mind, we achieve an 'exotic moment' of objective understanding that allows us to connect beyond our conflicting emotions. This silence is not about death, but about a 'sudden strangeness' that allows us to see that their plight requires not a 'rash stroke,' but a thoughtful, collective awakening.' Forensic Justification: This 5-mark justification reflects a 'Philosophical Synthesis'. Full marks are awarded for identifying: 1) The need for 'Objective Understanding' through stillness, 2) Disconnecting from destructive impulses, and 3) Connecting to shared humanity."
    },
    {
      question: "Read the extract and answer the question:\nThose who prepare green wars, wars with gas, wars with fire, victory with no survivors, would put on clean clothes and walk about with their brothers in the shade, doing nothing.\n\nHow can the message in the excerpt, about the outcome of wars, be applied to promote peace?",
      answerVerbatim: "I. Sustainable Solutions: Communities can work toward peaceful resolutions rather than mutual destruction.\nII. Non-violence: The imagery advocates for negotiations and dialogue in contemporary conflicts.\nIII. Humanity over Aggression: Encourages understanding and brotherhood over warfare.",
      markingSchemePoints: [
        "Work toward sustainable and peaceful solutions",
        "Advocate for non-violent resolutions/peace negotiations",
        "Promote dialogue and understanding over aggression"
      ],
      year: "2024-25",
      type: "RTC",
      marks: 1,
      aiExplanation: "Most appropriate answer: The message suggests that war's outcomes are mutually destructive, promoting peace by advocating for non-violent negotiations and dialogue over aggression. Forensic Justification: The 1-mark award is based on the 'Nihilism of War'. Describing 'victory with no survivors' is a forensic indicator of mutual annihilation, forcing a shift from aggression to sustainable solutions like dialogue."
    },
    {
      question: "What is the 'exotic moment' the poet refers to?",
      answerVerbatim: "I. Universal Silence: A rare moment free from the 'rush' of modern life and engines.\nII. Sudden Strangeness: A feeling of unprecedented togetherness and spiritual unity.\nIII. Departure: A break from the mundane, chaotic routine of existence.",
      markingSchemePoints: [
        "Absence of noise and mechanical rush (engines)",
        "Feeling of 'sudden strangeness' or collective unity",
        "Departure from the mundane, chaotic routine of life"
      ],
      year: "2024-25 | Short",
      type: "Short",
      marks: 2,
      aiExplanation: "Most appropriate answer: The 'exotic moment' refers to a rare instance of universal silence and togetherness, free from the mechanical rush and noise of modern life. Forensic Justification: This 2-mark justification identifies 'Acoustic' and 'Spiritual' layers. Point I (absence of noise/engines) identifies the physical break from routine. Point II (sudden strangeness) identifies the resulting collective unity that transcends modern chaos."
    },
    {
      question: "How does the Earth teach us that there is life under apparent stillness?",
      answerVerbatim: "I. Seasonal Metaphor: The Earth in winter appears dead but is preparing for rebirth in spring.\nII. Latent Life: Real life exists within apparent stillness.\nIII. Preparation: Silence is not 'stagnation' (death) but a vital preparation for a better life.",
      markingSchemePoints: [
        "Metaphor of seasonal change (Winter to Spring)",
        "Life existing in a state of 'apparent' dormancy",
        "Distinction between 'total inactivity' and productive stillness"
      ],
      year: "2025-26 | SQP",
      type: "RTC",
      marks: 1,
      aiExplanation: "Most appropriate answer: The Earth teaches that life exists under apparent stillness through the metaphor of winter, which seems dormant but prepares for rebirth in spring. Forensic Justification: The 1-mark justification uses the 'Seasonal Metaphor'. It earns the mark by distinguishing 'total inactivity' (death) from 'apparent stillness' (winter), proving that dormancy is vital internal preparation for rebirth."
    },
    {
      question: "What does the reference to fishermen not harming whales and the man gathering salt looking at his hurt hands signify in the poem?",
      answerVerbatim: "I. Cessation of Exploitation: Signifies a pause in external destruction (whales) and internal self-harm (hurt hands).\nII. Introspection: The poet calls for humans to recognize the harm they cause to nature and themselves.\nIII. Reconnection: By pausing, individuals can reconnect with their humanity and reflect on their impact.",
      markingSchemePoints: [
        "Signifies a pause in exploitative/destructive human activities",
        "Reflects poet's call for introspection and awareness",
        "Harm humans cause to nature (whales) and themselves (hurt hands)",
        "Reconnecting with humanity by pausing and reflecting"
      ],
      year: "2025-26",
      type: "Short",
      marks: 2,
      aiExplanation: "Most appropriate answer: These images signify a pause in the exploitation of nature and the self-harm caused by mindless labor, allowing for introspection and reconnection with humanity. Forensic Justification: This 2-mark justification focuses on 'External vs. Internal' harm. Point I (fishermen/whales) identifies the end of environmental exploitation. Point II (salt gatherer/hurt hands) identifies the end of self-inflicted labor pain."
    }
  ],
  rhymeScheme: 'Free Verse',
  poeticDevices: [
    { line: "Victory with no survivors", device: "Paradox", explanation: "Shows the futility of wars where winning means losing everything." },
    { line: "clean clothes", device: "Alliteration / Symbolism", explanation: "Represents a new perspective and change in heart." },
    { line: "Fishermen in the cold sea would not harm whales", device: "Imagery", explanation: "Represents the end of environmental exploitation." },
    { line: "hurt hands", device: "Alliteration / Synecdoche", explanation: "Represents the suffering of the laboring classes." }
  ],
  stanzaBreakdown: [
    { stanza: 1, summary: "Proposal to count to twelve and stop all movement/speech for a second.", tone: "Commanding / Quiet" },
    { stanza: 2, summary: "Imaging the exotic moment of global silence and unity.", tone: "Aspirational" },
    { stanza: 3, summary: "The suspension of violence against nature and the cessation of human labor/pain.", tone: "Empathetic" },
    { stanza: 4, summary: "Critique of war-mongers and the call for brotherhood.", tone: "Anti-war / Satirical" },
    { stanza: 5, summary: "Clarification on 'inactivity' vs 'death'; the problem of not understanding oneself.", tone: "Philosophical" },
    { stanza: 6, summary: "The lesson from the Earth and the final count to twelve.", tone: "Instructive / Hopeful" }
  ],
  distinctions: [
    {
      title: "Total Inactivity vs. Stillness",
      comparison: {
        labelA: "Total Inactivity",
        labelB: "Stillness (Silence)",
        points: [
          { a: "Associated with death; nothingness", b: "Associated with life; realization and introspection" },
          { a: "A state of stagnation", b: "A state of profound psychological activity" },
          { a: "What the poet wants nothing to do with", b: "What the poet proposes to heal humanity" }
        ]
      }
    }
  ]
};
