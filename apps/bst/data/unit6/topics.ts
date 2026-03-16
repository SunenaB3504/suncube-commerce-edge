import { TheoryTopic } from '../../types';

export const topics: TheoryTopic[] = [
  {
    id: 'staffing-concept',
    title: 'Concept & Importance of Staffing',
    description: 'Staffing as a managerial function and its significance.',
    content: [
      'Meaning: Staffing has been described as the managerial function of filling and keeping filled the positions in the organisation structure. It is the process of acquiring and maintaining a capable and satisfied workforce.',
      'Core Logics: Staffing ensures that the right people with the right skills are placed in the right jobs at the right time. It is a continuous process as organizations grow and people leave or move.',
      'Importance:',
      '1. Obtaining Competent Personnel: Helpful in discovering and obtaining competent personnel for various jobs through recruitment and selection.',
      '2. Higher Performance: By putting the right person on the right job, it ensures higher performance and greater efficiency.',
      '3. Continuous Survival and Growth: Ensures the survival and growth of the enterprise through succession planning for managers.',
      '4. Optimum Utilisation of Human Resources: Facilitates optimum utilisation by avoiding overmanning and high labour costs, while preventing understaffing.',
      '5. Improving Job Satisfaction: Improves morale and job satisfaction of employees through objective assessment and fair reward for their contribution.'
    ],
    visualizations: [
      {
        id: 'staffing-importance-list',
        title: 'Importance of Staffing',
        type: 'list',
        data: ['Competent Personnel', 'Higher Performance', 'Survival & Growth', 'Optimum Utilisation', 'Job Satisfaction']
      }
    ]
  },
  {
    id: 'staffing-process',
    title: 'Staffing Process',
    description: 'Steps involved in the staffing function.',
    content: [
      '1. Estimating Manpower Requirements: Analyzing the number and type of people required. (a) Workload Analysis: Number and type of human resources necessary for performance. (b) Workforce Analysis: Number and type available. (c) Comparison: Reveals overstaffing or understaffing.',
      '2. Recruitment: The process of searching for prospective employees and stimulating them to apply for jobs in the organisation. The objective is to create a pool of prospective candidates.',
      '3. Selection: The process of choosing the best person among the pool of prospective candidates that meets job requirements.',
      '4. Placement and Orientation: Orientation is introducing the selected employee to other employees and familiarising them with rules. Placement refers to the employee occupying the position for which they were selected.',
      '5. Training and Development: Systematic training helps in increasing skills and knowledge for currently held jobs, while development refers to growth of the individual in all respects.',
      '6. Performance Appraisal: Evaluating an employee\'s current/past performance against certain predetermined standards. The employee is provided feedback to improve.',
      '7. Promotion and Career Planning: Managers need to design activities to serve employees\' long-term interests. It includes promotions based on merit or seniority.',
      '8. Compensation: All forms of pay or rewards given to employees. It includes direct financial payments (wages, salary) and indirect payments (insurance, vacations).'
    ],
    visualizations: [
      {
        id: 'staffing-process-flow',
        title: 'The Staffing Process',
        type: 'flow',
        data: {
          nodes: [
            { id: '1', label: '1. Estimating Manpower' },
            { id: '2', label: '2. Recruitment' },
            { id: '3', label: '3. Selection' },
            { id: '4', label: '4. Placement & Orientation' },
            { id: '5', label: '5. Training & Development' },
            { id: '6', label: '6. Performance Appraisal' },
            { id: '7', label: '7. Promotion' },
            { id: '8', label: '8. Compensation' }
          ],
          edges: [
            { from: '1', to: '2' }, { from: '2', to: '3' }, { from: '3', to: '4' },
            { from: '4', to: '5' }, { from: '5', to: '6' }, { from: '6', to: '7' },
            { from: '7', to: '8' }
          ]
        }
      }
    ]
  },
  {
    id: 'recruitment',
    title: 'Recruitment',
    description: 'Process of searching for prospective employees.',
    content: [
      'Meaning: Recruitment is the process of searching for prospective employees and stimulating them to apply for jobs in the organization. It is regarded as a positive process.',
      'Internal Sources: Filling vacancies from within the organisation. (a) Transfers: Shifting an employee from one job to another without much change in responsibility/pay. (b) Promotions: Shifting to a higher position carrying more responsibilities, prestige and pay.',
      'Merits of Internal: (1) Motivation of employees. (2) Simpler process of selection and orientation. (3) Cheap source of recruitment. (4) Tool for training.',
      'Limitations of Internal: (1) No fresh talent (Inbreeding). (2) Lethargy among employees. (3) Not possible for new enterprises. (4) Reduced competitive spirit.',
      'External Sources: Seeking candidates from outside the organisation.',
      '- Direct Recruitment: Notice on factory gate for casual/unskilled workers.',
      '- Casual Callers: Database of unsolicited applicants.',
      '- Advertisement: In newspapers or professional journals for a wider choice.',
      '- Employment Exchange: Government-run for unskilled and skilled operative jobs.',
      '- Placement Agencies & Management Consultants: Agencies provide bio-data and consultants handle technical and professional recruitment.',
      '- Campus Recruitment: Recruiting fresh talent from schools/colleges.',
      '- Recommendations of Employees: Applicants introduced by existing employees.',
      '- Labour Contractors: Maintain contact with workers and provide unskilled labour at short notice.',
      '- Web Publishing: Using websites (e.g., Naukri.com, Monster.com) to search for candidates.',
      'Merits of External: (1) Qualified personnel. (2) Wider choice. (3) Fresh talent with new ideas. (4) Competitive spirit.',
      'Limitations of External: (1) Dissatisfaction among existing staff. (2) Lengthy process. (3) Costly source.'
    ],
    visualizations: [
      {
        id: 'recruitment-sources-tree',
        title: 'Sources of Recruitment',
        type: 'flow',
        data: {
          nodes: [
            { id: 'src', label: 'Sources of Recruitment' },
            { id: 'int', label: 'Internal Sources' },
            { id: 'ext', label: 'External Sources' },
            { id: 'trans', label: 'Transfers' }, { id: 'prom', label: 'Promotions' },
            { id: 'adv', label: 'Advertisement' }, { id: 'camp', label: 'Campus' },
            { id: 'ex', label: 'Exchange' }, { id: 'web', label: 'Web Pub' }
          ],
          edges: [
            { from: 'src', to: 'int' }, { from: 'src', to: 'ext' },
            { from: 'int', to: 'trans' }, { from: 'int', to: 'prom' },
            { from: 'ext', to: 'adv' }, { from: 'ext', to: 'camp' },
            { from: 'ext', to: 'ex' }, { from: 'ext', to: 'web' }
          ]
        }
      }
    ]
  },
  {
    id: 'selection',
    title: 'Selection',
    description: 'Process of identifying and choosing the best person.',
    content: [
      'Selection is the process of choosing from among the pool of prospective candidates. It is a negative process as more candidates are rejected than selected.',
      'Steps in Selection Process:',
      '1. Preliminary Screening: Helps the manager eliminate unqualified or unfit job seekers based on information supplied in application forms.',
      '2. Selection Tests: Used to measure characteristics of individuals. (a) Intelligence Test: Measures IQ and psychological traits. (b) Aptitude Test: Measures potential for learning new skills. (c) Personality Test: Measures emotions, maturity and value system. (d) Trade Test: Measures existing professional knowledge and skills. (e) Interest Test: Used to know the pattern of interests or involvement.',
      '3. Employment Interview: A formal, in-depth conversation conducted to evaluate the applicant\'s suitability for the job.',
      '4. Reference and Background Checks: Verifying the accuracy of info provided by checking with previous employers, characters, etc.',
      '5. Selection Decision: The final decision has to be made from among the candidates who pass the tests, interviews and reference checks.',
      '6. Medical Examination: After the selection decision and before the job offer is made, the candidate is required to undergo a medical fitness test.',
      '7. Job Offer: The next step is a job offer through a letter of appointment, which mentions the date of joining.',
      '8. Contract of Employment: A document containing job title, duties, responsibilities, pay, allowances, leave rules, and termination terms.'
    ],
    visualizations: [
      {
        id: 'selection-process-flow',
        title: 'Steps in Selection Process',
        type: 'flow',
        data: {
          nodes: [
            { id: '1', label: '1. Preliminary Screening' },
            { id: '2', label: '2. Selection Tests' },
            { id: '3', label: '3. Employment Interview' },
            { id: '4', label: '4. Reference Checks' },
            { id: '5', label: '5. Selection Decision' },
            { id: '6', label: '6. Medical Exam' },
            { id: '7', label: '7. Job Offer' },
            { id: '8', label: '8. Contract' }
          ],
          edges: [
            { from: '1', to: '2' }, { from: '2', to: '3' }, { from: '3', to: '4' },
            { from: '4', to: '5' }, { from: '5', to: '6' }, { from: '6', to: '7' },
            { from: '7', to: '8' }
          ]
        }
      }
    ]
  },
  {
    id: 'training-development',
    title: 'Training and Development',
    description: 'Improving employee performance and growth.',
    content: [
      'Training: Process by which the attitudes, skills and abilities of employees to perform specific jobs are increased. It is a job-oriented process.',
      'Development: Refers to the learning opportunities designed to help employees grow. It is a career-oriented process for overall growth.',
      'Benefits to the Organisation:',
      '- Systematic learning, always better than hit and trial methods which lead to wastage of efforts and money.',
      '- It enhances employee productivity both in terms of quantity and quality, leading to higher profits.',
      '- Prepares future managers who can take over in case of emergency.',
      '- Increases employee morale and reduces absenteeism and employee turnover.',
      '- Effective response to fast-changing technological and economic environment.',
      'Benefits to the Employee:',
      '- Improved skills and knowledge lead to better career opportunities.',
      '- Increased performance allows the individual to earn more.',
      '- Makes employees more efficient to handle machines, thus less prone to accidents.',
      '- Increases satisfaction and morale of employees.'
    ],
    visualizations: []
  },
  {
    id: 'training-methods',
    title: 'Training Methods',
    description: 'Techniques for training employees.',
    content: [
      'I. On-the-Job Methods: Learning while doing. Suitable for technical jobs.',
      '- Apprenticeship Programmes: Trainees are put under the guidance of a master worker for a specific period (e.g., plumbers, electricians).',
      '- Coaching: The superior guides and instructs the trainee as a coach. The trainee works directly with a senior manager.',
      '- Internship Training: Educational institutions enter into an agreement with industrial enterprises for practical knowledge (e.g., CA articleship).',
      '- Job Rotation: Shifting trainee from one department to another or from one job to another to gain broader view.',
      'II. Off-the-Job Methods: Learning before doing. Away from the work floor.',
      '- Class Room Lectures/Conferences: Used to convey specific information, rules or procedures.',
      '- Films: Can provide information and explicitly demonstrate skills that are not easily represented by other techniques.',
      '- Case Study: Trainees study real or hypothetical problems to learn decision-making and analytical skills.',
      '- Computer Modelling: Simulates the work environment by programming a computer to show real-world situations.',
      '- Vestibule Training: Employees learn on the equipment they will be using, but the training is conducted away from the actual work floor (e.g., handling complex machinery).',
      '- Programmed Instruction: Information is broken into meaningful units and these units are arranged in a proper way to form a logical sequence.'
    ],
    visualizations: []
  }
];
