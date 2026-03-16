import { WritingSkeleton } from '../../types';

export const longWriting: WritingSkeleton = {
  id: 'long-writing',
  format: 'Article: Title | Byline | Body (3 Paragraphs). Report: Headline | Byline | Place, Date | Body (Past Tense).',
  blueprint: [
    {
      section: 'Article: Body Paragraph 1 (Intro)',
      content: 'Define the topic, provide a hook or a quote.',
      keyPhrases: [
        'The issue of [Topic] has become a global concern...',
        'It is often said that...',
        'In the contemporary world, the relevance of...'
      ]
    },
    {
      section: 'Article: Body Paragraph 2 (Analysis)',
      content: 'Cause, effect, and detailed discussion.',
      keyPhrases: [
        'The primary reason behind this is...',
        'Furthermore, the consequences are multifaceted...',
        'On the flip side, we must also consider...'
      ]
    },
    {
      section: 'Report: Objective Data',
      content: 'Facts, figures, and actual events in the past tense.',
      keyPhrases: [
        'The event was held on...',
        'The Chief Guest, Mr. X, inaugurated the...',
        'A total of 500 students participated in...'
      ]
    },
    {
      section: 'Conclusion',
      content: 'Final thoughts, suggestions, or a call to action.',
      keyPhrases: [
        'To conclude, it is imperative that...',
        'The need of the hour is...',
        'The event left a lasting impression on everyone.'
      ]
    },
    {
      section: 'Example: Article Writing',
      content: `THE IMPACT OF SOCIAL MEDIA ON YOUTH
By Rahul, Class XII

In the contemporary world, the relevance of social media is undeniable. It has seamlessly woven itself into the fabric of our daily lives, particularly for the youth. While it serves as an incredible tool for global connectivity, its pervasive influence brings forth a myriad of psychological and social challenges.

The primary reason behind its immense popularity is the instant gratification it offers. However, the consequences are multifaceted. The youth often find themselves trapped in a vicious cycle of virtual validation, leading to severe anxiety, sleep deprivation, and a distorted sense of reality. The constant comparison with curated online personas drastically diminishes their real-world self-esteem.

To conclude, it is imperative that we strike a healthy balance. The need of the hour is digital literacy and mindful consumption. Technology should empower the youth, not enslave them.`,
      keyPhrases: []
    }
  ],
  vocabularyUpgrades: [
    { basic: 'increase', advanced: 'proliferate / escalate / surge' },
    { basic: 'bad', advanced: 'detrimental / pernicious / disastrous' },
    { basic: 'think', advanced: 'perceive / envision' },
    { basic: 'started', advanced: 'commenced / embarked upon' }
  ]
};
