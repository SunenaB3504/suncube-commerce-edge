import { Flashcard } from '../../types';

export const flashcards: Flashcard[] = [
  // ═══════════════════════════════════════════════════════
  // 1. CONCEPT & IMPORTANCE (1-7)
  // ═══════════════════════════════════════════════════════
  { id: 'f6-1', category: 'Concept', question: 'What is Staffing?', answer: 'The managerial function of filling and keeping filled the positions in the organisation structure (Putting people to jobs).' },
  { id: 'f6-2', category: 'Concept', question: 'Where does Staffing fit in the management functions?', answer: 'After Planning and Organising. It bridges the gap between jobs created and people needed to fill them.' },
  { id: 'f6-3', category: 'Importance', question: 'How does staffing discover "Competent Personnel"?', answer: 'By systematically searching for and obtaining qualified people for various job positions.' },
  { id: 'f6-4', category: 'Importance', question: 'How does staffing ensure "Higher Performance"?', answer: 'By putting the right person on the right job based on their skills, abilities, and aptitude.' },
  { id: 'f6-5', category: 'Importance', question: 'How does staffing ensure "Continuous Growth"?', answer: 'Through succession planning — training and developing internal talent for future managerial roles.' },
  { id: 'f6-6', category: 'Importance', question: 'What does "Optimum Utilisation" mean in staffing?', answer: 'Avoiding overmanning (costly) and understaffing (disruption) by maintaining the right number of employees.' },
  { id: 'f6-7', category: 'Importance', question: 'How does staffing improve "Job Satisfaction"?', answer: 'Through objective performance assessment, fair promotion, and providing development opportunities.' },

  // ═══════════════════════════════════════════════════════
  // 2. STAFFING PROCESS (8-15)
  // ═══════════════════════════════════════════════════════
  { id: 'f6-8', category: 'Process', question: 'Name all 8 steps in the Staffing Process.', answer: 'Estimating Manpower, Recruitment, Selection, Placement & Orientation, Training & Development, Performance Appraisal, Promotion, Compensation.' },
  { id: 'f6-9', category: 'Process', question: 'What is "Workload Analysis"?', answer: 'Assessing the number and type of human resources NEEDED for the performance of various jobs.' },
  { id: 'f6-10', category: 'Process', question: 'What is "Workforce Analysis"?', answer: 'Assessing the number and type of human resources CURRENTLY AVAILABLE in the organization.' },
  { id: 'f6-11', category: 'Process', question: 'What is "Placement"?', answer: 'The employee occupying the position they were hired for and taking up the assigned duties.' },
  { id: 'f6-12', category: 'Process', question: 'What is "Orientation" (Induction)?', answer: 'Introducing the new employee to the organisation — its people, policies, procedures, and culture.' },
  { id: 'f6-13', category: 'Process', question: 'What is "Performance Appraisal"?', answer: 'Evaluating employee performance against predetermined standards to identify strengths and weaknesses.' },
  { id: 'f6-14', category: 'Process', question: 'What is "Compensation"?', answer: 'All forms of pay and rewards (financial and non-financial) given to employees for their work.' },
  { id: 'f6-15', category: 'Process', question: 'Difference: Workload vs Workforce Analysis?', answer: 'Workload = how many are NEEDED. Workforce = how many are AVAILABLE. Gap = recruitment/training need.' },

  // ═══════════════════════════════════════════════════════
  // 3. RECRUITMENT - INTERNAL SOURCES (16-22)
  // ═══════════════════════════════════════════════════════
  { id: 'f6-16', category: 'Recruitment', question: 'Define Recruitment.', answer: 'The process of searching for prospective employees and stimulating them to apply for jobs in the organisation.' },
  { id: 'f6-17', category: 'Recruitment', question: 'Is Recruitment a Positive or Negative process?', answer: 'POSITIVE — it aims to ATTRACT as many candidates as possible to apply.' },
  { id: 'f6-18', category: 'Internal', question: 'What is "Transfer" as a recruitment source?', answer: 'Shifting an employee from one job/department to another WITHOUT substantive change in responsibility or status.' },
  { id: 'f6-19', category: 'Internal', question: 'What is "Promotion" as a recruitment source?', answer: 'Vertical shifting of an employee to a HIGHER position with MORE responsibility and pay.' },
  { id: 'f6-20', category: 'Internal', question: 'Name two merits of Internal Recruitment.', answer: 'Motivates employees (assured career growth) and cheaper/simpler process (no advertising needed).' },
  { id: 'f6-21', category: 'Internal', question: 'Name two limitations of Internal Recruitment.', answer: 'No fresh talent (inbreeding) and may cause lethargy due to assured promotions.' },
  { id: 'f6-22', category: 'Internal', question: 'Why is Internal Recruitment not suitable for new enterprises?', answer: 'Because there is no existing workforce to draw from — all positions are new.' },

  // ═══════════════════════════════════════════════════════
  // 4. RECRUITMENT - EXTERNAL SOURCES (23-30)
  // ═══════════════════════════════════════════════════════
  { id: 'f6-23', category: 'External', question: 'What is "Direct Recruitment"?', answer: 'A notice on the factory notice board inviting applicants, typically for unskilled or casual workers.' },
  { id: 'f6-24', category: 'External', question: 'What is "Campus Recruitment"?', answer: 'Hiring directly from educational institutions like IITs, IIMs, and colleges.' },
  { id: 'f6-25', category: 'External', question: 'What is the role of "Placement Agencies"?', answer: 'They maintain databases of job seekers and help firms find suitable candidates for technical/professional roles.' },
  { id: 'f6-26', category: 'External', question: 'What are "Employment Exchanges"?', answer: 'Government-run agencies that register job seekers and help employers find unskilled/skilled candidates.' },
  { id: 'f6-27', category: 'External', question: 'What is "Casual Callers"?', answer: 'Maintaining a database of unsolicited applicants who have previously applied or walked in.' },
  { id: 'f6-28', category: 'External', question: 'What is "Recommendations of Employees"?', answer: 'Applicants introduced by current employees of the organisation.' },
  { id: 'f6-29', category: 'External', question: 'Name two merits of External Recruitment.', answer: 'Brings fresh talent and wider choice of qualified candidates.' },
  { id: 'f6-30', category: 'External', question: 'Name two limitations of External Recruitment.', answer: 'Costly and lengthy process; may cause dissatisfaction among existing employees.' },

  // ═══════════════════════════════════════════════════════
  // 5. SELECTION PROCESS (31-40)
  // ═══════════════════════════════════════════════════════
  { id: 'f6-31', category: 'Selection', question: 'Define Selection.', answer: 'The process of choosing the best person from a pool of prospective candidates.' },
  { id: 'f6-32', category: 'Selection', question: 'Is Selection Positive or Negative?', answer: 'NEGATIVE — it involves REJECTING unsuitable candidates to find the best fit.' },
  { id: 'f6-33', category: 'Selection', question: 'What is Step 1: Preliminary Screening?', answer: 'Eliminating clearly unqualified applicants based on information in application forms.' },
  { id: 'f6-34', category: 'Test', question: 'What does an "Intelligence Test" measure?', answer: 'The level of intelligence or IQ — mental ability, reasoning, and learning capacity.' },
  { id: 'f6-35', category: 'Test', question: 'What does an "Aptitude Test" measure?', answer: 'The POTENTIAL of an individual to learn new skills (future ability).' },
  { id: 'f6-36', category: 'Test', question: 'What does a "Trade Test" measure?', answer: 'EXISTING professional skills and knowledge of the candidate (current ability).' },
  { id: 'f6-37', category: 'Test', question: 'What does a "Personality Test" measure?', answer: 'Emotions, reactions, maturity, and overall personality traits of the candidate.' },
  { id: 'f6-38', category: 'Test', question: 'What does an "Interest Test" measure?', answer: 'The areas of interest and involvement of the candidate.' },
  { id: 'f6-39', category: 'Selection', question: 'What is Step 5: Selection Decision?', answer: 'The REAL point of decision-making — choosing among candidates who have passed all tests and interviews.' },
  { id: 'f6-40', category: 'Selection', question: 'What happens after the Medical Examination?', answer: 'Job Offer (letter of appointment) followed by Contract of Employment (duties, pay, leave rules).' },

  // ═══════════════════════════════════════════════════════
  // 6. TRAINING & DEVELOPMENT (41-48)
  // ═══════════════════════════════════════════════════════
  { id: 'f6-41', category: 'Training', question: 'Define Training.', answer: 'A process of increasing knowledge and skills for doing a particular job. It is job-oriented.' },
  { id: 'f6-42', category: 'Training', question: 'Define Development.', answer: 'Learning opportunities for overall growth of the individual. It is career-oriented.' },
  { id: 'f6-43', category: 'Training', question: 'Difference: Training vs Development?', answer: 'Training is job-oriented (specific skills for current role). Development is career-oriented (overall growth for future roles).' },
  { id: 'f6-44', category: 'Method', question: 'What is "Apprenticeship Training"?', answer: 'Trainee works under a master worker for a long period to learn a craft (e.g., plumbing, electrician).' },
  { id: 'f6-45', category: 'Method', question: 'What is "Vestibule Training"?', answer: 'Training on dummy equipment in a classroom setting, AWAY from the actual work floor. Off-the-job method.' },
  { id: 'f6-46', category: 'Method', question: 'What is "Internship Training"?', answer: 'Joint programme between educational institutions and business firms, combining theory with practice.' },
  { id: 'f6-47', category: 'Method', question: 'What is "Coaching" as a training method?', answer: 'The superior directly guides and instructs the trainee on the job.' },
  { id: 'f6-48', category: 'Method', question: 'What is "Job Rotation"?', answer: 'Shifting the trainee between different departments or jobs to give broad exposure and experience.' },

  // ═══════════════════════════════════════════════════════
  // 7. MORE METHODS & BENEFITS (49-55)
  // ═══════════════════════════════════════════════════════
  { id: 'f6-49', category: 'Method', question: 'Name 3 On-the-Job training methods.', answer: 'Apprenticeship, Coaching, Internship, and Job Rotation.' },
  { id: 'f6-50', category: 'Method', question: 'Name 3 Off-the-Job training methods.', answer: 'Vestibule Training, Classroom Lectures, Case Study, Computer Modelling, and Programmed Instruction.' },
  { id: 'f6-51', category: 'Training', question: 'Name two benefits of Training to the Organisation.', answer: 'Systematic learning (saves time/money) and higher productivity/efficiency.' },
  { id: 'f6-52', category: 'Training', question: 'Name two benefits of Training to the Employee.', answer: 'Better career opportunities and increased earnings. Also higher morale and safety.' },
  { id: 'f6-53', category: 'Training', question: 'How does training prepare "Future Managers"?', answer: 'Trained employees develop broader skills that prepare them for higher responsibilities in the future.' },
  { id: 'f6-54', category: 'Distinction', question: 'Aptitude Test vs Trade Test?', answer: 'Aptitude = potential to LEARN (future). Trade = existing SKILLS (current).' },
  { id: 'f6-55', category: 'Distinction', question: 'Recruitment vs Selection?', answer: 'Recruitment is POSITIVE (attracting applicants). Selection is NEGATIVE (rejecting unfit candidates).' },

  // ═══════════════════════════════════════════════════════
  // 8. SQP TRIGGERS & TRAPS (56-65)
  // ═══════════════════════════════════════════════════════
  { id: 'f6-56', category: 'SQP Trigger', question: 'If a case says "hired through a notice on the factory gate", which source?', answer: 'Direct Recruitment (External Source).' },
  { id: 'f6-57', category: 'SQP Trigger', question: 'If a case says "hired from IIM Ahmedabad", which source?', answer: 'Campus Recruitment (External Source).' },
  { id: 'f6-58', category: 'SQP Trigger', question: 'If a case says "employee shifted to a higher role with more pay", which source?', answer: 'Promotion (Internal Source).' },
  { id: 'f6-59', category: 'SQP Trigger', question: 'If a case says "trainee learns plumbing under a master craftsman", which method?', answer: 'Apprenticeship Training (On-the-job).' },
  { id: 'f6-60', category: 'SQP Trigger', question: 'If a case says "training on duplicate machines away from the shop floor", which method?', answer: 'Vestibule Training (Off-the-job).' },
  { id: 'f6-61', category: 'Trap', question: 'Does "Lethargy" occur in Internal or External recruitment?', answer: 'Internal Recruitment (employees become complacent due to assured promotions).' },
  { id: 'f6-62', category: 'Trap', question: 'Is "Vestibule Training" On-the-job or Off-the-job?', answer: 'Off-the-job (conducted AWAY from the actual work floor, on duplicate equipment).' },
  { id: 'f6-63', category: 'Trap', question: 'Is "Internship" On-the-job or Off-the-job?', answer: 'On-the-job (the trainee works in the actual business environment).' },
  { id: 'f6-64', category: 'Trap', question: 'Which step is the "Real point of decision making" in Selection?', answer: 'Step 5: Selection Decision.' },
  { id: 'f6-65', category: 'Trap', question: 'Does "Transfer" involve a change in pay or status?', answer: 'No. Transfer involves NO substantive change in responsibility or status.' }
];
