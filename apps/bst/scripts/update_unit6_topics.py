
import os

content = """import { TheoryTopic } from '../../types';

export const topics: TheoryTopic[] = [
  {
    id: 'staffing-concept',
    title: 'Concept & Importance of Staffing',
    description: 'Staffing as a managerial function and its significance.',
    content: [
      'Meaning: Staffing is the managerial function of filling and keeping filled the positions in the organisation structure. It is "putting people to jobs".',
      'It involves obtaining, utilising, and maintaining a satisfactory and satisfied workforce.',
      'Importance:',
      '1. Competent Personnel: Helps in discovering and obtaining competent personnel for various jobs.',
      '2. Higher Performance: Ensures higher performance by putting the right person on the right job.',
      '3. Growth: Ensures continuous survival and growth through succession planning.',
      '4. Optimum Utilisation: Avoids overmanning (saving costs) and understaffing (avoiding work disruption).',
      '5. Job Satisfaction: Improves morale through objective assessment and fair rewards.'
    ],
    visualizations: []
  },
  {
    id: 'staffing-process',
    title: 'Staffing Process',
    description: 'Steps involved in the staffing function.',
    content: [
      '1. Estimating Manpower Requirements: Understanding how many and what type of persons are needed. Involves Workload Analysis (number needed) and Workforce Analysis (number available).',
      '2. Recruitment: Process of searching for prospective employees and stimulating them to apply for jobs.',
      '3. Selection: Choosing the best person out of the pool of prospective candidates.',
      '4. Placement and Orientation: Introducing the employee to the organisation (Orientation) and occupying the position (Placement).',
      '5. Training and Development: Improving current/future performance by increasing skills and knowledge.',
      '6. Performance Appraisal: Evaluating employee\\'s performance against predetermined standards.',
      '7. Promotion and Career Planning: Placed in positions of increased responsibility.',
      '8. Compensation: All forms of pay or rewards (financial and non-financial).'
    ],
    visualizations: []
  },
  {
    id: 'recruitment',
    title: 'Recruitment',
    description: 'Process of searching for prospective employees.',
    content: [
      'Meaning: Searching for prospective employees and stimulating them to apply.',
      'Internal Sources: Transfers (shifting without substantive change in responsibility), Promotions (vertical shifting with higher responsibility/pay).',
      'Merits of Internal: Motivated employees, simpler selection, cheaper, tool for training.',
      'Limitations of Internal: No fresh talent (inbreeding), lethargy, not possible for new enterprises, reduced competition.',
      'External Sources:',
      '- Direct Recruitment: Notice on notice board (for unskilled/casual).',
      '- Casual Callers: Unsolicited applicants database.',
      '- Advertisement: Newspapers/Journals (wider choice).',
      '- Employment Exchange: Government run (for unskilled/skilled).',
      '- Placement Agencies & Management Consultants: For technical/professional/top roles.',
      '- Campus Recruitment: From educational institutions.',
      '- Recommendations of Employees: Applicants introduced by current staff.',
      '- Labour Contractors: For unskilled workers at short notice.',
      '- Advertising on TV & Web Publishing: Using media and internet portals.',
      'Merits of External: Qualified personnel, wider choice, fresh talent, competitive spirit.',
      'Limitations of External: Dissatisfaction among existing staff, lengthy process, costly.'
    ],
    visualizations: []
  },
  {
    id: 'selection',
    title: 'Selection',
    description: 'Process of identifying the best person for the job.',
    content: [
      'Meaning: Choosing the best person out of prospective candidates. It is a negative process (rejection).',
      'Process Steps:',
      '1. Preliminary Screening: Eliminating unfit seekers based on application forms.',
      '2. Selection Tests: Measuring characteristics (Intelligence, Aptitude, Personality, Trade, Interest tests).',
      '3. Employment Interview: In-depth conversation to evaluate suitability.',
      '4. Reference and Background Checks: Verifying information.',
      '5. Selection Decision: Final decision from among those who passed.',
      '6. Medical Examination: Fitness check.',
      '7. Job Offer: Letter of appointment.',
      '8. Contract of Employment: Documents involving terms, duties, pay, etc.'
    ],
    visualizations: []
  },
  {
    id: 'training-development',
    title: 'Training and Development',
    description: 'Improving employee performance and growth.',
    content: [
      'Training: Process of increasing knowledge and skills for a specific job. (Job-oriented)',
      'Development: Learning opportunities for overall growth of the individual. (Career-oriented)',
      'Benefits to Organisation: Systematic learning (saves time/money), higher productivity, prepares future managers, higher morale, effective response to change.',
      'Benefits to Employee: Better career, increased earnings, safety (efficient machine handling), high morale/satisfaction.'
    ],
    visualizations: []
  },
  {
    id: 'training-methods',
    title: 'Training Methods',
    description: 'Techniques for training employees.',
    content: [
      'On-the-Job Methods (Learning while doing):',
      '- Apprenticeship Programmes: Trainee works under a master worker (for skills like plumbing).',
      '- Coaching: Superior guides and instructs the trainee.',
      '- Internship Training: Joint programme of educational institutions and business firms.',
      '- Job Rotation: Shifting trainee between departments/jobs.',
      'Off-the-Job Methods (Learning before doing):',
      '- Class Room Lectures/Conferences: For specific information/rules.',
      '- Films: Demonstrating skills.',
      '- Case Study: Analysing real problems.',
      '- Computer Modelling: Simulating work environment.',
      '- Vestibule Training: Learning on equipment in a classroom setting (away from actual work floor).',
      '- Programmed Instruction: Sequential learning packages.'
    ],
    visualizations: []
  }
];
"""

with open('c:\\Users\\Admin\\Neil\\bstudies-cbse-class-XII\\data\\unit6\\topics.ts', 'w', encoding='utf-8') as f:
    f.write(content)

print("Successfully wrote data/unit6/topics.ts")
