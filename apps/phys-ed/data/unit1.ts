import { Chapter } from '../types';

export const unit1: Chapter = {
  id: 1,
  slug: 'planning-in-sports',
  name: 'Planning in Sports',
  description: 'Comprehensive study of planning, committee structures, tournament formats, and specific sports programmes.',
  topics: [
    {
      id: 'planning-core',
      title: 'Planning in Sports',
      description: 'The foundation of successful sports management.',
      content: [
        'Definition: Planning is the process of deciding in advance what is to be done, Who is to do it, How it is to be done and When it is to be done. (Page 15)',
        'Planning is an intellectual activity involving selection of the most viable processes from among alternatives.',
        'It is the foremost function in sports as it gives a view of future course of action.',
        'Strategic Planning: Long-term goals and policies (1-5 years).',
        'Tactical Planning: Medium-term targets and strategies (3-12 months).',
        'Operative Planning: Short-term daily execution and adjustments (1 day-3 months).'
      ],
      visualizations: [
        {
          id: 'v1',
          title: '7 Key Objectives of Planning',
          type: 'grid',
          data: [
            { label: 'Reduce Pressure', desc: 'Minimizes last-minute stress (Immediacy).' },
            { label: 'Better Control', desc: 'Ensures tighter control over activities.' },
            { label: 'Coordination', desc: 'Facilitates cooperation among committees.' },
            { label: 'Reduce Mistakes', desc: 'Minimizes errors and omissions.' },
            { label: 'Increase Efficiency', desc: 'Officials perform duties effectively.' },
            { label: 'Enhance Creativity', desc: 'Promotes innovative organizing.' },
            { label: 'Performance', desc: 'Helps athletes perform better.' }
          ]
        },
        {
          id: 'v1b',
          title: 'Planning Levels Hierarchy (Page 17)',
          type: 'table',
          data: {
            headers: ['Planning Level', 'Duration', 'Scope', 'Example'],
            rows: [
              ['Strategic', '1-5 years', 'Organization-wide goals', 'Sports policy for school'],
              ['Tactical', '3-12 months', 'Department/team goals', 'Annual tournament calendar'],
              ['Operative', '1 day-3 months', 'Daily execution', 'Daily training schedule']
            ]
          }
        }
      ]
    },
    {
      id: 'fixtures-drawing',
      title: 'Procedure to Draw Fixtures',
      description: 'Step-by-step specific procedures for Knock-Out and League tournaments.',
      content: [
        'Knock-Out Fixture Procedure:',
        '1. N = Total Number of Teams.',
        '2. Total Combinations/Matches = N - 1.',
        '3. Semi-Finals & Quarter-Finals are determined by Powers of 2 (2, 4, 8, 16, 32...).',
        '4. Byes: Privilege given to teams to skip the first round. Calculated as (Next Power of 2) - N.',
        '5. Seeding: Placing strong teams in separate halves/pools to avoid early elimination.',
        'League Fixture Procedure:',
        '1. Staircase Method: Teams are arranged in a stepped ladder format. Simplest calculation, no byes.',
        '2. Cyclic Method: Teams rotate in a circle. If N is even, Team 1 is fixed. If N is odd, a "Bye" is fixed.'
      ],
      visualizations: [
        {
          id: 'v2-hacker-fixture',
          title: 'Fixture "Cheat Code" (Knock-out)',
          type: 'grid',
          hack: 'To solve any Knock-out calculation in <15s: Start with the "Nearest Power of 2" (2, 4, 8, 16, 32...). If N=13, your target is 16. If N=21, target is 32.',
          formulaTitle: 'Matches & Byes',
          formula: 'Matches = N - 1 | Byes = (Next Power of 2) - N',
          data: [
            { label: 'Example: 13 Teams', desc: 'Matches: 12 | Byes: 16 - 13 = 3' },
            { label: 'Example: 21 Teams', desc: 'Matches: 20 | Byes: 32 - 21 = 11' }
          ]
        },
        {
          id: 'v2-bye-order',
          title: 'Order of Bye Placement (Fixed Rules)',
          type: 'steps',
          data: [
            '1st Bye: Bottom of Lower Half',
            '2nd Bye: Top of Upper Half',
            '3rd Bye: Top of Lower Half',
            '4th Bye: Bottom of Upper Half',
            'Repeats... 5th Bye (Bottom Lower), etc.'
          ]
        },
        {
          id: 'v3-divisions',
          title: 'Division of Teams (N = Odd)',
          type: 'table',
          data: {
            headers: ['Division', 'Teams Formula', 'Byes Formula'],
            rows: [
              ['Upper Half', '(N + 1) / 2', '(Total Byes - 1) / 2'],
              ['Lower Half', '(N - 1) / 2', '(Total Byes + 1) / 2']
            ]
          }
        }
      ]
    },
    {
      id: 'specific-programmes',
      title: 'Intramural, Extramural & Specific Programmes',
      description: 'Understanding internal vs external competitions and community sports events.',
      content: [
        'Intramural: Derived from Latin "Intra" (Within) + "Muralis" (Wall). Competitions within the institution (e.g., Inter-House).',
        'Objectives of Intramural: Mass participation, Fun & Recreation, Talent Identification, Leadership development.',
        'Extramural: Derived from Latin "Extra" (Outside) + "Muralis" (Wall). Competitions between institutions (e.g., Inter-School).',
        'Objectives of Extramural: Enhancing standard of sports, learning new techniques, sportsmanship, and fraternity.',
        'Specific Sports Programmes: Non-competitive events for social causes.',
        '1. Sports Day: Annual event to showcase talent and mass participation.',
        '2. Health Run: Promoting fitness awareness (ISO standard rules not required).',
        '3. Run for Fun: purely for enjoyment.',
        '4. Run for Unity: To promote national integration and peace.',
        '5. Run for Specific Cause: Charity runs (Cancer awareness, Green environment).'
      ],
      visualizations: []
    }
  ],
  flashcards: [
    {
      id: '1-1',
      question: 'What is the definition of Planning in Sports?',
      answer: 'Planning is the process of setting objectives and deciding how to accomplish them in advance to ensure efficient conduct of a sports event.',
      category: 'Definition'
    },
    {
      id: '1-2',
      question: 'What is the primary objective of planning in sports?',
      answer: 'To reduce unnecessary pressure and ensure the smooth conduct of sports events.',
      category: 'Theory'
    },
    {
      id: '1-3',
      question: 'Which planning objective focuses on financial efficiency?',
      answer: 'To increase economy and reduce costs of the tournament.',
      category: 'Management'
    },
    {
      id: '1-4',
      question: 'True or False: Planning helps in better coordination among various committees.',
      answer: 'True. It facilitates cooperation between different groups.',
      category: 'TrueFalse'
    },
    {
      id: '1-5',
      question: 'What does "Goal Orientation" mean in sports planning?',
      answer: 'It means every activity is directed towards achieving specific organizational goals.',
      category: 'Theory'
    },
    {
      id: '1-6',
      question: 'Which committee is responsible for the opening and closing ceremonies?',
      answer: 'Ceremony and Decoration Committee.',
      category: 'Management'
    },
    {
      id: '1-7',
      question: 'Who typically heads the administrative committee for a school sports tournament?',
      answer: 'The Principal or Head of Institution.',
      category: 'Management'
    },
    {
      id: '1-8',
      question: 'Which committee works primarily during the tournament to record scores?',
      answer: 'Committee for Officials (Referees, Umpires, Scorers).',
      category: 'Technical'
    },
    {
      id: '1-9',
      question: 'What is the main responsibility of the Transport Committee?',
      answer: 'To provide transportation for teams and officials to/from the venue and accommodation.',
      category: 'Management'
    },
    {
      id: '1-10',
      question: 'Which committee is responsible for press releases and media coverage?',
      answer: 'Publicity Committee.',
      category: 'Management'
    },
    {
      id: '1-11',
      question: 'When does the "Post-meet" committee work primarily occur?',
      answer: 'After the tournament is concluded (e.g., accounting, reports).',
      category: 'Theory'
    },
    {
      id: '1-12',
      question: 'Which committee ensures proper meals for participants?',
      answer: 'Refreshment and Entertainment Committee (or Boarding and Lodging).',
      category: 'Management'
    },
    {
      id: '1-13',
      question: 'Identify the committee: Responsible for preparing the playfields and equipment.',
      answer: 'Ground and Equipment Committee.',
      category: 'Technical'
    },
    {
      id: '1-14',
      question: 'True or False: The finance committee prepares the budget after the tournament.',
      answer: 'False. They prepare it beforehand to allocate funds.',
      category: 'TrueFalse'
    },
    {
      id: '1-15',
      question: 'What is the duty of the First Aid Committee?',
      answer: 'To provide immediate medical assistance to injured athletes during the event.',
      category: 'Technical'
    },
    {
      id: '1-16',
      question: 'Define a "Tournament".',
      answer: 'A series of sports competitions where several teams compete to decide a winner.',
      category: 'Definition'
    },
    {
      id: '1-17',
      question: 'What is a Knock-Out Tournament?',
      answer: 'A tournament format where a team is eliminated immediately after one loss.',
      category: 'Definition'
    },
    {
      id: '1-18',
      question: 'What is the main advantage of a League Tournament?',
      answer: 'It usually finds the true winner as every team plays every other team.',
      category: 'Theory'
    },
    {
      id: '1-19',
      question: 'What is a "Bye" in a fixture?',
      answer: 'A privilege given to a team to skip the first round and play directly in the second round.',
      category: 'Technical'
    },
    {
      id: '1-20',
      question: 'Calculate the total matches in a single league tournament for 8 teams.',
      answer: 'Formula N(N-1)/2. 8(7)/2 = 28 matches.',
      category: 'Calculation'
    },
    {
      id: '1-21',
      question: 'Calculate the number of matches in a knock-out tournament for 13 teams.',
      answer: 'Formula N - 1. 13 - 1 = 12 matches.',
      category: 'Calculation'
    },
    {
      id: '1-22',
      question: 'If there are 11 teams in a knock-out, how many byes are given?',
      answer: 'Next power of 2 (16) - 11 = 5 Byes.',
      category: 'Calculation'
    },
    {
      id: '1-23',
      question: 'What is "Seeding" in a tournament fixture?',
      answer: 'A procedure to place strong teams in the fixture so they do not meet in early rounds.',
      category: 'Technical'
    },
    {
      id: '1-24',
      question: 'Define "Special Seeding".',
      answer: 'Seeded teams play directly in the Quarter-finals or Semi-finals.',
      category: 'Technical'
    },
    {
      id: '1-25',
      question: 'In a Cyclic League fixture with 5 teams, how many rounds are played?',
      answer: 'For odd N, N rounds. So 5 rounds.',
      category: 'Calculation'
    },
    {
      id: '1-26',
      question: 'In a Staircase League fixture with 7 teams, how do rounds work?',
      answer: 'Matches are arranged in steps. It does not have rounds in the traditional cyclic sense.',
      category: 'Technical'
    },
    {
      id: '1-27',
      question: 'Describe "Extension Extramurals".',
      answer: 'Competitions promoting interaction between different institutions or communities.',
      category: 'Classification'
    },
    {
      id: '1-28',
      question: 'Formula for teams in Upper Half of Knock-out (N=11)?',
      answer: '(N+1)/2 = 12/2 = 6 teams.',
      category: 'Calculation'
    },
    {
      id: '1-29',
      question: 'Formula for teams in Lower Half of Knock-out (N=11)?',
      answer: '(N-1)/2 = 10/2 = 5 teams.',
      category: 'Calculation'
    },
    {
      id: '1-30',
      question: 'How many byes in Upper Half if total Byes are 5?',
      answer: '(NB-1)/2 = 4/2 = 2 Byes.',
      category: 'Calculation'
    },
    {
      id: '1-31',
      question: 'How many byes in Lower Half if total Byes are 5?',
      answer: '(NB+1)/2 = 6/2 = 3 Byes.',
      category: 'Calculation'
    },
    {
      id: '1-32',
      question: 'What is the purpose of "Consolation Tournaments"?',
      answer: 'To give a second chance to teams defeated in the first round of a knock-out.',
      category: 'Theory'
    },
    {
      id: '1-33',
      question: 'Define "Intramural".',
      answer: 'Sports competitions held within the walls of a single institution (e.g., Inter-House).',
      category: 'Definition'
    },
    {
      id: '1-34',
      question: 'State one significant objective of Intramural competitions.',
      answer: 'To provide opportunity to every student to participate in games and sports.',
      category: 'Theory'
    },
    {
      id: '1-35',
      question: 'Define "Extramural".',
      answer: 'Sports competitions between two or more institutions (Inter-School/Inter-University).',
      category: 'Definition'
    },
    {
      id: '1-36',
      question: 'Significance of Extramurals.',
      answer: 'Enhances standard of sports performance and allows new records.',
      category: 'Theory'
    },
    {
      id: '1-37',
      question: 'What does "Run for Unity" promote?',
      answer: 'National integration and harmony among people of different religions/backgrounds.',
      category: 'Application'
    },
    {
      id: '1-38',
      question: 'True or False: "Health Run" requires specific competitive rules.',
      answer: 'False. It is non-competitive and focuses on monitoring health/fitness.',
      category: 'TrueFalse'
    },
    {
      id: '1-39',
      question: 'What is the main aim of "Sports Day"?',
      answer: 'To showcase physical activities and encourage mass participation within an institution.',
      category: 'Theory'
    },
    {
      id: '1-40',
      question: 'Explain "Run for Specific Cause".',
      answer: 'A run organized to raise awareness or funds for a specific charity or social issue.',
      category: 'Application'
    },
    {
      id: '1-41',
      question: 'What is a "Combination Tournament"?',
      answer: 'A mix of formats, like League-cum-Knockout, used for large zonal competitions.',
      category: 'Definition'
    },
    {
      id: '1-42',
      question: 'Identify a disadvantage of Knock-out tournaments.',
      answer: 'Good teams might get eliminated early due to one bad performance.',
      category: 'Theory'
    },
    {
      id: '1-43',
      question: 'Identify a disadvantage of League tournaments.',
      answer: 'It requires more time, money, and resources due to the large number of matches.',
      category: 'Theory'
    },
    {
      id: '1-44',
      question: 'In Cyclic Method, which team is fixed if N is even?',
      answer: 'Team number 1 is fixed on the top right.',
      category: 'Technical'
    },
    {
      id: '1-45',
      question: 'Which tournament type is best for selecting a true winner?',
      answer: 'League (Round Robin) Tournament.',
      category: 'Application'
    },
    {
      id: '1-46',
      question: 'Calculate matches for Double League with 6 teams.',
      answer: 'Formula N(N-1). 6(5) = 30 matches.',
      category: 'Calculation'
    },
    {
      id: '1-47',
      question: 'What does the term "Fixture" mean?',
      answer: 'The schedule and systematic arrangement of matches for teams in a tournament.',
      category: 'Definition'
    },
    {
      id: '1-48',
      question: 'True or False: Intramurals help in selecting school teams.',
      answer: 'True. They act as a selection ground for extramural teams.',
      category: 'TrueFalse'
    },
    {
      id: '1-49',
      question: 'Which run is usually a non-competitive fun event for all ages?',
      answer: 'Run for Fun.',
      category: 'Application'
    },
    {
      id: '1-50',
      question: 'Who constitutes the "General Committee"?',
      answer: 'The overall governing body responsible for the entire tournament.',
      category: 'Management'
    },
    {
      id: '1-51',
      question: 'What is the number of rounds in Knock-out if N=32?',
      answer: '32 = 2^5, so 5 Rounds.',
      category: 'Calculation'
    },
    {
      id: '1-52',
      question: 'What is a "Specific Sports Programme"?',
      answer: 'Events organized for causes (health, unity, charity) rather than just competition.',
      category: 'Definition'
    },
    {
      id: '1-53',
      question: 'How many byes if there are 6 teams in a Knock-out?',
      answer: 'Next power 8. 8 - 6 = 2 Byes.',
      category: 'Calculation'
    },
    {
      id: '1-54',
      question: 'Why is "Seeding" done?',
      answer: 'To ensure a balanced fixture where strong teams don\'t eliminate each other early.',
      category: 'Theory'
    },
    {
      id: '1-55',
      question: 'What determines the winner in a League tournament?',
      answer: 'Typically, the team with the most points (2 for win, 1 for draw, 0 for loss).',
      category: 'Technical'
    },
    {
      id: '1-56',
      question: 'What is the function of the Executive Committee?',
      answer: 'This committee plans and executes the tournament, ensuring all sub-committees function effectively.',
      category: 'Management'
    },
    {
      id: '1-57',
      question: 'What is the role of the Announcement Committee?',
      answer: 'They provide information regarding upcoming matches, scores, and running commentary during the event.',
      category: 'Technical'
    },
    {
      id: '1-58',
      question: 'What does the Reception Committee do?',
      answer: 'They are responsible for welcoming guests, VIPS, and spectators during the opening and closing ceremonies.',
      category: 'Management'
    },
    {
      id: '1-59',
      question: 'Function of Committee on Entries and Programmes?',
      answer: 'Sends entry forms, prepares fixtures, and prints the souvenir/programme for the tournament.',
      category: 'Management'
    },
    {
      id: '1-60',
      question: 'What is the etymological meaning of "Intramural"?',
      answer: 'Derived from Latin words "Intra" (within) and "Muralis" (wall).',
      category: 'Definition'
    },
    {
      id: '1-61',
      question: 'What is the etymological meaning of "Extramural"?',
      answer: 'Derived from Latin word "Extra" (outside) and "Muralis" (wall).',
      category: 'Definition'
    },
    {
      id: '1-62',
      question: 'How are points calculated in the American Method (League)?',
      answer: 'Points = (Games Won / Total Games Played) * 100.',
      category: 'Calculation'
    },
    {
      id: '1-63',
      question: 'Where is the 1st Bye placed in a Knock-out fixture?',
      answer: 'At the bottom of the Lower Half.',
      category: 'Technical'
    },
    {
      id: '1-64',
      question: 'Where is the 2nd Bye placed in a Knock-out fixture?',
      answer: 'At the top of the Upper Half.',
      category: 'Technical'
    }
  ],

  mindMap: {
    id: 'root',
    label: 'Planning in Sports',
    children: [
      {
        id: 'objectives',
        label: 'Objectives & Meaning',
        children: [
          { id: 'goal', label: 'Goal Oriented' },
          { id: 'policy', label: 'Policy Development' },
          { id: 'economy', label: 'Economy' },
          { id: 'mistake', label: 'Reduce Mistakes' },
          { id: 'control', label: 'Better Control' }
        ]
      },
      {
        id: 'committees',
        label: 'Committees',
        children: [
          {
            id: 'pre',
            label: 'Pre-Event',
            children: [
              { id: 'publicity', label: 'Publicity' },
              { id: 'finance', label: 'Finance' },
              { id: 'purchase', label: 'Purchase' }
            ]
          },
          {
            id: 'during',
            label: 'During Event',
            children: [
              { id: 'organization', label: 'Organization' },
              { id: 'transport', label: 'Transport' },
              { id: 'food', label: 'Refreshment' },
              { id: 'ceremony', label: 'Ceremony' },
              { id: 'technical', label: 'Technical/Officials' }
            ]
          },
          {
            id: 'post',
            label: 'Post-Event',
            children: [
              { id: 'record', label: 'Records' },
              { id: 'finance-re', label: 'Accounts Settlement' }
            ]
          }
        ]
      },
      {
        id: 'tournaments',
        label: 'Tournaments',
        children: [
          {
            id: 'knockout',
            label: 'Knock-Out',
            children: [
              { id: 'bye', label: 'Byes' },
              { id: 'seeding', label: 'Seeding' },
              { id: 'special', label: 'Special Seeding' }
            ]
          },
          {
            id: 'league',
            label: 'League',
            children: [
              { id: 'staircase', label: 'Staircase Method' },
              { id: 'cyclic', label: 'Cyclic Method' }
            ]
          },
          { id: 'combination', label: 'Combination Types' }
        ]
      },
      {
        id: 'programs',
        label: 'Sports Programs',
        children: [
          { id: 'intra', label: 'Intramural (Within Walls)' },
          { id: 'extra', label: 'Extramural (Between Schools)' },
          { id: 'community', label: 'Community Sports' },
          { id: 'runs', label: 'Health Runs/Run for Unity' }
        ]
      }
    ]
  },
  cheatSheet: [
    {
      title: 'Quick Mnemonics',
      points: [
        'Functions: P.O.S.D.C.R.B (Planning, Organizing, Staffing, Directing, Controlling, Reporting, Budgeting)',
        'Objectives: P.E.C.C (Performance, Efficiency, Control, Coordination)',
        'Specific Sports: H.R.S (Health Run, Run for Fun, Specific Cause)'
      ]
    },
    {
      title: 'Golden Keywords',
      points: [
        'Planning: "Deciding in advance", "Immediacy", "Mistake Reduction"',
        'Committees: "Decentralization", "Accountability", "Smooth Conduct"',
        'Tournament: "Systematic Competition", "True Winner (League)"'
      ]
    },
    {
      title: 'Key Formulas (100% Coverage)',
      points: [
        'Total Matches (Knockout): N - 1 (Where N = Number of Teams)',
        'Total Matches (League): N(N-1)/2 (Single) | N(N-1) (Double)',
        'Upper Half (Odd N): (N+1)/2 | Lower Half: (N-1)/2',
        'Total Byes: Next Power of 2 - N',
        'Upper Byes: (NB-1)/2 | Lower Byes: (NB+1)/2 (Where NB = Number of Byes)'
      ]
    },
    {
      title: 'Fixture Logic Flow',
      points: [
        'N -> Power of 2 Check -> Calc Byes -> Distribute Halves -> Seeding',
        'Bye Order: 1.Bottom-Lower -> 2.Top-Upper -> 3.Top-Lower -> 4.Bottom-Upper',
        'Cyclic Method: Even N (Team 1 Fixed), Odd N (Bye Fixed)'
      ]
    },
    {
      title: 'Versus: Intramural vs Extramural',
      points: [
        'Intramural: "Within Walls" (Inter-House) | Goal: Mass Participation, Fun',
        'Extramural: "Outside Walls" (Inter-School) | Goal: High Performance, Standards'
      ]
    },
    {
      title: 'Committee Roles (Simplified)',
      points: [
        'Pre: Publicity (Dates), Finance (Budget), Entries (Fixtures)',
        'During: Transport, Food, Officials (Scoring), First Aid',
        'Post: Records (Results), Finance (Settlement)'
      ]
    }
  ],
  sqp: [
    {
      id: 'u1-mcq-2024-board-q13',
      year: '2023-24',
      paperType: 'Board',
      marks: 1,
      type: 'MCQ',
      question: 'Identify the formula to calculate total matches in a Single League Tournament for N teams.',
      answer: 'N(N-1)/2',
      markingScheme: '1 mark for correct formula: N(N-1)/2.',
      aiExplanation: '1. Single League Formula: N(N-1)/2. \n2. Double League Formula: N(N-1). \n3. Knockout Formula: N-1. \n\nSince the question asks for "Single League", we use N(N-1)/2. The formula N(N-1) represents a "Double League" where teams play each other twice (Home and Away).'
    },
    {
      id: 'u1-mcq-2024-board-q14',
      year: '2023-24',
      paperType: 'Board',
      marks: 1,
      type: 'MCQ',
      question: 'In which tournament is the expenditure less and the process completed in less time?',
      answer: 'Knock-out Tournament',
      markingScheme: '1 mark for Knock-out Tournament.',
      aiExplanation: '1. Knock-out: Matches = N-1 (Fewest matches, Lowest cost, Fastest completion). \n2. League: Matches = N(N-1)/2 (Many matches, High cost, Takes longer). \n3. Combination: Complex and lengthy. \n\nTherefore, Knock-out is the most economical and time-efficient format because losing teams are eliminated immediately, drastically reducing the total number of matches required.'
    },
    {
      id: 'u1-la-2024-board-q31',
      year: '2023-24',
      paperType: 'Board',
      marks: 4,
      type: 'LA',
      question: 'Case Study: Identify the committees based on responsibilities:\n1. Welcoming the guests and teams.\n2. Announcement of dates and venues through media.\n3. Preparing the playfields and arranging equipment.\n4. Printing of brochures, souvenir and entry forms.',
      answer: '1. Reception Committee, 2. Publicity Committee, 3. Ground & Equipment Committee, 4. Committee on Entries & Programmes.',
      markingScheme: '1 mark for each correct committee identification.',
      aiExplanation: 'Committee Function Mapping: \n1. "Welcoming guests" -> Reception Committee (Primary duty is protocol and hospitality). \n2. "Media/Dates" -> Publicity Committee (Responsible for marketing and press releases). \n3. "Playfields/Equipment" -> Ground & Equipment Committee (Technical setup of the venue). \n4. "Printing brochures/Souvenirs" -> Committee on Entries & Programmes (Documentation and literature).'
    },
    {
      id: 'u1-la-2024-board-q31-blind',
      year: '2023-24',
      paperType: 'Board',
      marks: 4,
      type: 'LA',
      question: 'Explain the objectives of Extramural tournaments.',
      answer: 'To improve the standard of sports, broaden the base of sports, and develop sportsmanship/fraternity.',
      markingScheme: '1. Improve standard of sports.\n2. Broaden the base of sports.\n3. Develop sportsmanship and fraternity.\n4. Provide knowledge of new rules and techniques.',
      aiExplanation: '"Extramural" means "Outside Wages" (Inter-School Competitions). \nObjectives Breakdown: \n1. Standard of Sports: Playing against new/tougher opponents raises the skill level. \n2. Broaden Base: Exposes more students to competitive environments. \n3. Fraternity: Promotes social bonding and harmony between different institutions/regions. \n4. Technical Knowledge: Exposure to official rules, new tactics, and advanced techniques not seen in intramurals.'
    },
    {
      id: 'u1-la-2025-sqp-q31-blind-v2',
      year: '2024-25',
      paperType: 'SQP',
      marks: 4,
      type: 'LA',
      question: 'Case Study (For Blind Candidates): Identify the committee based on work:\n1. Committee for publicity.\n2. Committee for Boarding and lodging.\n3. Reception Committee.\n4. Committee on entries and programmes.',
      answer: '1. Publicity, 2. Boarding/Lodging, 3. Reception, 4. Entries/Programmes',
      markingScheme: '1. Announcement of dates/venues.\n2. Accommodation/Meals.\n3. Welcoming guests.\n4. sending entry forms/fixtures.',
      aiExplanation: 'Blind candidates identify the committee name from the work description: \n1. "Publicity" is explicitly linked to "Announcement of dates/venues" and media management. \n2. "Boarding and Lodging" is the formal term for "Accommodation and Meals". \n3. "Reception" is the standard term for the committee that "Welcomes guests". \n4. "Entries and Programmes" deals with the paperwork, specifically "sending entry forms/fixtures".'
    },
    {
      id: 'u1-mcq-2026-sqp-q1',
      year: '2025-26',
      paperType: 'SQP',
      marks: 1,
      type: 'MCQ',
      questionNumber: 'Q1.',
      question: 'A tournament where every team plays with every other team once and the number of matches is \ndetermined with the help of the formula N(N-1) is called as:                                       \n \n(a) knockout tournament   (b) double league tournament \n(c) single league tournament   (d) none of these',
      answer: '(b) double league tournament',
      markingScheme: 'B. Double league tournament',
      aiExplanation: 'Formula Analysis:\n- Single League: N(N-1)/2 (Plays once)\n- Double League: N(N-1) (Plays twice)\n- Knockout: N-1\n\nSince the formula given is N(N-1), it corresponds to a Double League tournament. Note: The question text says "once" but provides the formula for Double League; in CBSE context, the specific mention of the formula `N(N-1)` takes precedence as the identifier for Double League.'
    },
    {
      id: 'u1-mcq-2026-sqp-q2',
      year: '2025-26',
      paperType: 'SQP',
      marks: 1,
      type: 'MCQ',
      questionNumber: 'Q2.',
      question: 'Read the following statements labelled Assertion (A) and Reason (R). Choose one of the \ncorrect alternatives given below:             \n   Assertion (A): Planning should be the first step for organizing a tournament.  \n   Reason (R): A tournament can be conducted without planning. \n   In context of the above two statements, which one of the following is correct? \n(a) Both (A)and (R) are true and (R) is the correct explanation of (A). \n(b) Both (A)and (R) are true and (R) is not the correct explanation of (A). \n \n(c) (A) is true but (R)is false. \n(d) (A) is false but (R)is true.',
      answer: '(c) (A) is true but (R)is false.',
      markingScheme: 'C. A is true, R is false',
      aiExplanation: 'Assertion Analysis: Correct. Planning is universally accepted as the first function of management.\nReason Analysis: Incorrect. A tournament cannot be successfully conducted without planning; it leads to chaos, inefficiency, and failure.\nConclusion: Since A is True and R is False, option (c) is the correct answer.'
    },
    {
      id: 'u1-sa-2026-sqp-q25',
      year: '2025-26',
      paperType: 'SQP',
      marks: 3,
      type: 'SA',
      questionNumber: 'Q25.',
      question: 'League tournament is a better way to judge the best team of the tournament. Comment.',
      answer: 'It provides equal opportunity to all teams and reduces the element of luck.',
      markingScheme: '● Equal opportunities to all the teams \n● League matches minimize impact of luck or unexpected outcomes \n● Judged on basis of multiple matches \n● Ranking of basis of points earned \n● Less pressure on teams with compassion to knockout tournament \n● Scope of improvement',
      aiExplanation: 'Teacher\'s Voice - Scoring Strategy (3 Marks):\nTo secure full marks, you must provide 3 distinct arguments. \n1. **True Merit (1 Mark):** Unlike Knockout, a single bad match doesn\'t eliminate a strong team. \n2. **Equal Opportunity (1 Mark):** Every team plays every other team, ensuring a fair assessment. \n3. **Ranking Accuracy (1 Mark):** The final standing is based on points accumulated over many matches, reflecting true consistency.'
    },
    {
      id: 'u1-la-2026-sqp-q31',
      year: '2025-26',
      paperType: 'SQP',
      marks: 4,
      type: 'LA',
      questionNumber: 'Q31.',
      question: 'Read the following text carefully and answer the questions that follow:                \nCompeting in physical activities has been the natural tendency of humans. The \ncompetitions or tournaments are held according to the set rules and regulations. The \nsuccess of the tournament depends upon suitable fixture \n \n  1. The method followed in drawing the fixture is: \na) Random method \nb) Knock out method \nc) League cum knockout method \nd) League method \n  2. The number of matches played can be calculated by the formula _____. \na) 2N \nb) N+1 \nc) N/2 \nd) N - 1 \n  3. What is the advantage of this tournament?  \n                    a) More matches are played \nb) Less number of teams participate \nc) The knockout tournament takes less time and is economical \nd) All teams play equal number of matches \n  4. What is the term used if privilege is given to a team to play at a higher round?  \n                    a) Bye \nb) Draw \nc) Super seeding \nd)  Any of the above',
      answer: '1. b, 2. d, 3. c, 4. a',
      markingScheme: '1. b) Knockout method \n2. d) N - 1 \n3. c) Knockout tournament takes less time and is economical \n4. a)  Bye',
      aiExplanation: 'Case Study Breakdown:\n1. Method: The context implies a standard elimination format -> "Knock out method".\n2. Formula: The universal formula for Knockout matches is "N - 1" (where N is number of teams).\n3. Advantage: Knockout is famous for being "Economical and Time-saving" because it involves the minimum number of matches.\n4. Terminology: "Bye" is the specific advantage given to play directly in the second round (to adjust power of 2).'
    },
    {
      id: 'u1-mcq-2025-sqp-q1',
      year: '2024-25',
      paperType: 'SQP',
      marks: 1,
      type: 'MCQ',
      questionNumber: 'Q1.',
      question: 'How many total matches will be played in a knock out fixture of 19 teams\nA. 18   B. 17   C. 20   D. 16',
      answer: 'A. 18',
      markingScheme: 'A. 18',
      aiExplanation: 'Step-by-Step Calculation:\n1. Identify Tournament Type: Knock-out.\n2. Identify Formula: Total Matches = N - 1.\n3. Substitute N: Here, N = 19 teams.\n4. Calculate: 19 - 1 = 18 Matches.\nAnswer is Option A.'
    },
    {
      id: 'u1-mcq-2025-sqp-q2',
      year: '2024-25',
      paperType: 'SQP',
      marks: 1,
      type: 'MCQ',
      questionNumber: 'Q2.',
      question: 'Given below are the two statements labeled Assertion (A) and Reason (R). Read               \n        the statements and choose the appropriate option from the options given below: \nAssertion: The knock out tournament is an elimination tournament \nReason: In knock out tournament, winner of each match advances in the tournament and \nthe loser gets eliminated. \nIn the context of the above two statements, which one of the following is correct? \nA. Both (A) and (R) are true and (R) is the correct explanation of (A). \nB.  Both (A) and (R) are true, but (R) is not the correct explanation of (A). \nC.  (A) is true, but (R) is false. \nD.  (A) is false, but (R) is true',
      answer: 'A. Both (A) and (R) are true and (R) is the correct explanation of (A).',
      markingScheme: 'A.  Both (A) and (R) are true and (R) is the correct explanation of (A).',
      aiExplanation: '1. Analyze Assertion: "Knock out is an elimination tournament" -> TRUE. This is the defining characteristic.\n2. Analyze Reason: "Loser gets eliminated" -> TRUE. This describes the mechanism.\n3. Link A & R: Does the Reason explain WHY it is called an elimination tournament? Yes. It is called that *because* losers are eliminated instantly.\nTherefore, both are true and R is the correct explanation.'
    },
    {
      id: 'u1-la-2025-sqp-q31',
      year: '2024-25',
      paperType: 'SQP',
      marks: 4,
      type: 'LA',
      questionNumber: 'Q31.',
      question: 'I. Choose the function of boarding committee\nA. To take teams to the venue of match\nB. To provide them meals\nC. To take care of their stay\nD. To arrange opening ceremony\nII. What is the work of ceremony committee\nA. To take teams to the venue of match\nB. To provide them meals\nC. To take care of their stay\nD. To arrange opening ceremony\nIII. Ground and equipment committee should not perform\nA.  To arrange teams match venues\nB. To provide them meals\nC. To take care of proper officiating\nD. To make fixtures\nIV. Why committees are required? \nA. To organize the event is perfect manner\nB. To distribute the work \nC. To make the best use of resources\nD. All of the above',
      answer: 'I. C, II. D, III. B, IV. D',
      markingScheme: 'a. To take care of their stay \nd.  To arrange opening ceremony \na. To provide them meals \nCommittees are important for proper planning, organization, control during the \ntournament. \nAppropriate path and guidelines are provided by these committees during the \ntournament. Through committees all understand their work duties and responsibilities \nno body interferes in any others work.',
      aiExplanation: 'Detailed Analysis:\nI. Boarding Committee: Responsible for "Stay/Accommodation" (Option C).\nII. Ceremony Committee: Responsible for "Opening Ceremony" (Option D).\nIII. Ground Committee EXCLUSION: Their job is Venues/Officiating. They do NOT provide meals (Option B); that is the job of the Refreshment Committee.\nIV. Requirement: Committees are needed for Organization, Distribution of Work, and Resource Management (Option D covers all).'
    },
    {
      id: 'u1-sa-2025-sqp-q25',
      year: '2024-25',
      paperType: 'SQP',
      marks: 3,
      type: 'SA',
      questionNumber: 'Q25.',
      question: 'Specify the purpose of specific sports programme organised for community services.',
      answer: 'To create awareness, unity, and health consciousness among the community.',
      markingScheme: '1. Creating awareness regarding health.\n2. Unity and peace.\n3. Charity for specific cause.\n4. Upliftment of sports standard.',
      aiExplanation: 'Teacher\'s Voice - 3 Distinct Points (3 Marks):\n1. **Social Cohesion (1 Mark):** Promotes Unity, Peace, and Integration among diverse groups (e.g., Run for Unity).\n2. **Health Awareness (1 Mark):** Spreads message of fitness and lifestyle diseases (e.g., Health Runs).\n3. **Charitable Cause (1 Mark):** Raises funds and awareness for specific social issues like Cancer or Environment.'
    },
    {
      id: 'u1-sa-2024-sqp-q27',
      year: '2023-24',
      paperType: 'SQP',
      marks: 3,
      type: 'SA',
      questionNumber: 'Q27.',
      question: 'What should be the role of technical and marketing committee while organizing the event?',
      answer: 'Technical: Equipment, Referees. Marketing: Sponsorship, Publicity.',
      markingScheme: 'Technical Committee: Procurement of equipment, arrangement of officials, conducting matches. \nMarketing Committee: Generating funds/sponsorships, publicity of the event.',
      aiExplanation: 'Teacher\'s Voice - Split the Marks (1.5 + 1.5):\n1. **Technical Committee (1.5 Marks):** Focus on the *Game* aspects (Rules, Equipment, Referees, Fixtures).\n2. **Marketing Committee (1.5 Marks):** Focus on the *Business* aspects (Sponsors, Media, Advertisements).'
    }
  ]
};
