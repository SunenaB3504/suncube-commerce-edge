import { WritingSkeleton } from '../../types';

export const formalLetters: WritingSkeleton = {
  id: 'formal-letters',
  format: 'Sender\'s Address | Date | Receiver\'s Address | Subject | Salutation | Body | Subscription | Name',
  blueprint: [
    {
      section: 'Letter to Editor (Standard Intro)',
      content: 'Immediately state the issue through the newspaper columns.',
      keyPhrases: [
        'Through the esteemed columns of your newspaper...',
        'I wish to draw the attention of the authorities to...',
        'I am writing to express my deep concern regarding...'
      ]
    },
    {
      section: 'Job Application (Cover Letter)',
      content: 'Reference the advertisement, express interest, and state suitability.',
      keyPhrases: [
        'In response to your advertisement in...',
        'I wish to offer my candidature for the post of...',
        'I possess the requisite qualifications and experience...'
      ]
    },
    {
      section: 'Bio-Data (Job Application)',
      content: 'Detailed list of personal particulars, education, and references.',
      keyPhrases: [
        'Educational Qualifications: CBSE (First Div)',
        'Experience: 5 years at...',
        'References: Dr. A.P. Singh (Principal)'
      ]
    },
    {
      section: 'Example: Job Application & Bio-Data',
      content: `12, Station Road
New Delhi

20 March 2026

The Principal
Sunrise Public School
New Delhi

Subject: Application for the post of PGT English

Respected Sir/Madam,
In response to your advertisement in 'The Daily Times' dated 18 March 2026 for the post of PGT English, I wish to offer my candidature for the same. I possess the requisite qualifications and a teaching experience of 5 years. I am a dedicated professional with a passion for literature. My detailed bio-data is enclosed herewith for your kind perusal.

Yours faithfully,
Anita Sharma

Enclosure: Bio-Data

BIO-DATA
Name: Anita Sharma
Father's Name: Mr. R.K. Sharma
Date of Birth: 15 July 1995
Address: 12, Station Road, New Delhi
Contact: 9876543210
Education: B.A. (Hons) English, M.A. English (Delhi Univ), B.Ed.
Experience: PGT English at Modern School (2021-Present)
Languages Known: English, Hindi
References: 1. Dr. S. K. Gupta (Prof, DU) 2. Mr. Anil Verma (Principal, Modern School)`,
      keyPhrases: []
    }
  ],
  vocabularyUpgrades: [
    { basic: 'problem', advanced: 'grievance / predicament / menace' },
    { basic: 'want to say', advanced: 'wish to highlight / emphasize' },
    { basic: 'good for the job', advanced: 'suitable candidate / fit for the role' },
    { basic: 'solve', advanced: 'mitigate / address / rectify' }
  ]
};
