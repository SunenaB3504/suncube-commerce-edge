import { TheoryTopic } from '../../types';

export const topics: TheoryTopic[] = [
  {
    id: 'mgmt-intro',
    title: 'Introduction to Management',
    description: 'The art of getting things done through others.',
    content: [
      'Definition: Management is a process of designing and maintaining an environment in which individuals, working together in groups, efficiently accomplish selected aims.',
      'Functions: Planning, Organizing, Staffing, Directing, Controlling (POSDC).',
      'Management is essential for all organisations big or small, profit or non-profit, services or manufacturing.',
      'It consists of a series of interrelated functions performed by all managers.'
    ],
    visualizations: [
      {
        id: 'mgmt-process-cycle',
        title: 'The Management Process Cycle',
        type: 'steps',
        data: ['Planning', 'Organising', 'Staffing', 'Directing', 'Controlling']
      }
    ]
  },
  {
    id: 'eff-vs-eff',
    title: 'Effectiveness vs Efficiency',
    description: 'Balancing the two sides of the same coin.',
    content: [
      'Effectiveness: Doing the right task, completing activities and achieving goals. Main focus is on end result.',
      'Efficiency: Doing the task correctly and with minimum cost. Main focus is on cost-benefit analysis.',
      'Example: Suppose a company\'s target is to produce 5,000 units in a month. To achieve this, the manager operates on double shifts. He achieves the target (Effective) but at a higher cost due to overtime (Inefficient). If he produced them at the standard cost but missed the deadline, he would be Efficient but Ineffective.',
      'Relation: High efficiency without effectiveness is useless; high effectiveness with low efficiency leads to high costs.'
    ],
    visualizations: [
      {
        id: 'eff-matrix',
        title: 'Effectiveness vs Efficiency Matrix',
        type: 'table',
        data: {
          headers: ['Basis', 'Effectiveness', 'Efficiency'],
          rows: [
            ['Meaning', 'Completing the job on time', 'Completing job with minimum cost'],
            ['Objective', 'To achieve end result', 'To conduct cost-benefit analysis'],
            ['Main Focus', 'Time', 'Cost']
          ]
        }
      }
    ]
  },
  {
    id: 'mgmt-characteristics',
    title: 'Characteristics of Management',
    description: 'Key features that define the nature of management.',
    content: [
      'Goal Oriented Process: Management is a goal-oriented process because it is intended to achieve certain predetermined objectives. Every organization has a set of basic goals which are the basic reason for its existence.',
      'Pervasive: Management is required in all types of organizations (economic, social, political), at all levels (Top, Middle, Lower), and in all countries. The way a manager works in India may be different from a manager in the USA, but management is common to both.',
      'Multidimensional: (a) Management of Work: Translates goals into tasks to be achieved. (b) Management of People: Managing individuals and groups of people. (c) Management of Operations: Directing the production process to transform inputs into outputs.',
      'Continuous Process: It is a series of continuous, composite but separate functions (Planning, Organising, Staffing, Directing, and Controlling) performed by all managers all the time.',
      'Group Activity: An organization is a collection of diverse individuals with different needs. Management should enable all its members to grow and develop while fulfilling individual goals as well as organizational goals.',
      'Dynamic Function: Management has to adapt itself to the changing environment. In order to be successful, an organization must change itself and its goals according to the needs of the environment (Economic, Social, Political, etc.). Example: McDonald’s changed its menu to survive in the Indian market.',
      'Intangible Force: Management is an intangible force that cannot be seen but its presence can be felt in the way the organization functions. The effect of management is noticeable in an organization where targets are met according to plans, employees are happy and satisfied, and there is orderliness instead of chaos.'
    ],
    visualizations: [
      {
        id: 'mgmt-dimensions',
        title: 'Dimensions of Management',
        type: 'list',
        data: ['Management of Work', 'Management of People', 'Management of Operations']
      }
    ]
  },
  {
    id: 'mgmt-obj',
    title: 'Objectives of Management',
    description: 'Organizational, Social, and Personal objectives.',
    content: [
      'Organizational Objectives: These involve setting and achieving goals for the organization itself. (a) Survival: Earning enough revenue to cover costs. (b) Profit: Essential for covering risks and for growth. (c) Growth: Increasing its prospects in the long run (measured by sales volume, number of employees, etc.).',
      'Social Objectives: It involves the creation of benefit for society. (a) Providing quality products at reasonable prices. (b) Using environmental friendly methods of production. (c) Creating employment opportunities for disadvantaged sections. (d) Providing basic amenities like schools and crèches to employees.',
      'Personal/Individual Objectives: Organizations are made up of people with different personalities and backgrounds. (a) Competitive salaries and perks. (b) Peer recognition and social respect. (c) Personal growth and development (training). (d) Good and healthy working conditions.'
    ],
    visualizations: []
  },
  {
    id: 'mgmt-imp',
    title: 'Importance of Management',
    description: 'Why management is critical for success.',
    content: [
      'Helps in achieving group goals: Directs individual efforts towards organization\'s goal.',
      'Increases efficiency: Reduces costs and increases productivity through better planning and organizing.',
      'Creates a dynamic organisation: Helps people adapt to changing environment so the firm maintains its competitive edge.',
      'Helps in achieving personal objectives: Lead and motivate individuals to achieve personal goals while working for the organization.',
      'Helps in development of society: Provides good quality products, creates jobs, and adopts new technology.'
    ],
    visualizations: []
  },
  {
    id: 'nature-art-science',
    title: 'Nature of Management: Art or Science?',
    description: 'Management has features of both Art and Science.',
    content: [
      'Management as an Art: Art is the skillful and personalized application of existing knowledge to achieve desired results. (a) Existence of theoretical knowledge: Like any art, management has a lot of literature and theory. (b) Personalized application: Every manager has his own unique way of managing things. (c) Based on practice and creativity: Management requires regular practice and creativity to solve problems.',
      'Management as a Science: Science is a systematized body of knowledge that explains certain general truths. (a) Systematized body of knowledge: Management has its own theory and principles. (b) Principles based on experimentation: Management principles are developed through observation and repeated experimentation. (c) Universal validity: Unlike pure science, management principles are not universally valid because they deal with humans.',
      'Conclusion: Management is both an art and a science. It is an inexact science (social science) because it deals with human behavior, but it is a creative art because it requires the application of personal skills.'
    ],
    visualizations: [
      {
        id: 'art-vs-science',
        title: 'Art vs Science Features',
        type: 'table',
        data: {
          headers: ['Feature', 'Art', 'Science', 'Management Status'],
          rows: [
            ['Systematic Knowledge', 'Yes', 'Yes', 'Present in Management'],
            ['Personalized Application', 'Yes', 'No', 'Highly present in Management'],
            ['Based on Practice/Exp', 'Yes', 'Yes', 'Present in Management'],
            ['Universal Validity', 'No', 'Yes', 'Not strictly present in Management']
          ]
        }
      }
    ]
  },
  {
    id: 'nature-profession',
    title: 'Management as a Profession',
    description: 'Is management a full-fledged profession?',
    content: [
      'Well-defined body of knowledge: Management has a systematic body of knowledge consisting of principles and theories.',
      'Restricted Entry: In management, there is no restriction on anyone being designated or appointed as a manager. However, professional knowledge is preferred.',
      'Professional Association: There are several professional associations for managers (like AIMA), but it is not mandatory for every manager to be a member.',
      'Ethical Code of Conduct: While associations have laid down codes of conduct, they do not have statutory backing to enforce them on all managers.',
      'Service Motive: The primary goal of management is profit maximization, but social responsibility is increasingly becoming a part of management objectives.',
      'Conclusion: Management is not a full-fledged profession like Medicine or Law, but it is moving in that direction.'
    ],
    visualizations: []
  },
  {
    id: 'levels-mgmt',
    title: 'Levels of Management',
    description: 'The hierarchy of authority and responsibility.',
    content: [
      'Top Management: Consists of Chairman, CEO, Board of Directors. Functions: (a) Formulating overall organizational goals and strategies. (b) Coordinating activities of different departments. (c) Responsible for welfare and survival of the organization. (d) Liaison with outside world.',
      'Middle Management: Consists of Departmental Heads (Production, Finance, Marketing). Functions: (a) Interpreting policies framed by top management. (b) Ensuring their department has necessary personnel. (c) Assigning necessary duties and responsibilities. (d) Motivating people to achieve desired objectives.',
      'Operational/Supervisory Management: Consists of Supervisors and Foremen. Functions: (a) Directly overseeing the efforts of the workforce. (b) Ensuring quality of output and safety standards. (c) Passing on instructions to workers. (d) Maintaining discipline and minimizing wastage.'
    ],
    visualizations: [
      {
        id: 'levels-pyramid',
        title: 'Management Hierarchy',
        type: 'steps',
        data: ['Top Management (Strategic)', 'Middle Management (Tactical)', 'Operational Management (Technical)']
      }
    ]
  },
  {
    id: 'coordination',
    title: 'Coordination',
    description: 'The essence of management.',
    content: [
      'Definition: Coordination is the process by which a manager synchronizes the activities of different departments to achieve organizational goals. It is the "thread" that runs through all functions like planning, organizing, staffing, directing, and controlling.',
      'Characteristics: (a) Integrates group efforts into purposeful activities. (b) Ensures unity of action by acting as a binding force. (c) It is a continuous process that begins with planning and ends with controlling. (d) It is all-pervasive as it is needed at all levels. (e) It is the responsibility of all managers. (f) It is a deliberate function.',
      'Importance: (a) Growth in size: As organizations grow, coordination is needed to harmonize individual goals with organizational goals. (b) Functional differentiation: To reconcile the conflicting interests of different departments. (c) Specialization: To integrate the opinions of specialists/experts into a common plan.',
      'Essence of Management: Coordination is not a separate function of management. It is required in Planning (objectives integration), Organizing (authority-responsibility), Staffing (filling positions), Directing (guiding efforts), and Controlling (correcting deviations).'
    ],
    visualizations: [
      {
        id: 'coord-vs-coop',
        title: 'Coordination vs Cooperation',
        type: 'table',
        data: {
          headers: ['Basis', 'Coordination', 'Cooperation'],
          rows: [
            ['Meaning', 'Orderly arrangement of group efforts', 'Voluntary effort of individuals'],
            ['Scope', 'Wider (includes cooperation)', 'Narrow (part of coordination)'],
            ['Nature', 'Deliberate and conscious effort', 'Voluntary and spontaneous'],
            ['Requirement', 'Required by managers at all levels', 'Depends on individual willingness']
          ]
        }
      }
    ]
  }
];
