import { WritingSkeleton } from '../../types';

export const noticeWriting: WritingSkeleton = {
  id: 'notices',
  format: 'Borders (Required) | Organization Name | NOTICE | Date | Heading | Body | Signature | Name | Designation',
  blueprint: [
    {
      section: 'Heading',
      content: 'Must be catchy, relevant, and in the center. Avoid being too long.',
      keyPhrases: ['ANNUAL SPORTS MEET', 'FOUND PROPERTY', 'BLOOD DONATION CAMP']
    },
    {
      section: 'Opening',
      content: 'Standard formal opening stating the purpose of the notice.',
      keyPhrases: [
        'This is to inform all the students...',
        'The [Organization Name] is organizing...',
        'All members are hereby notified that...'
      ]
    },
    {
      section: 'Details (The 5 Ws)',
      content: 'Include Date, Time, Venue, and Who can participate.',
      keyPhrases: ['Date: 25th March 2026', 'Time: 10:00 AM', 'Venue: School Auditorium']
    },
    {
      section: 'Closing',
      content: 'Call to action or contact info for further details.',
      keyPhrases: [
        'For further information, contact the undersigned.',
        'Interested students may register their names with...',
        'Strict adherence to the schedule is expected.'
      ]
    },
    {
      section: 'Example: Cultural Fest Notice',
      content: `ST. THOMAS SCHOOL, NEW DELHI
NOTICE
15 October 2026

ANNUAL CULTURAL FESTIVAL

This is to inform all students from Classes IX to XII that our school is orchestrating its Annual Cultural Festival, 'Symphony 2026', on 10 November 2026, from 9:00 AM to 4:00 PM in the Main Auditorium. 

A variety of events including group dance, solo singing, and one-act plays will be convened. Interested students must enroll their names with their respective class teachers by 25 October 2026. For any clarifications, contact the undersigned.

Rohit Sharma
(Cultural Secretary)`,
      keyPhrases: []
    }
  ],
  vocabularyUpgrades: [
    { basic: 'organized', advanced: 'orchestrated / conceptualized' },
    { basic: 'held', advanced: 'convened / commemorated' },
    { basic: 'register', advanced: 'enroll / sign up / enlist' },
    { basic: 'ask for information', advanced: 'solicit clarifications / inquire' }
  ]
};
