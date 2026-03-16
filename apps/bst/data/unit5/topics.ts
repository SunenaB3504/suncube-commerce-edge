import { TheoryTopic } from '../../types';

export const topics: TheoryTopic[] = [
  {
    id: 'concept-of-organising',
    title: 'Concept of Organising',
    description: 'Definition and meaning of organising as a management function.',
    content: [
      'Meaning: Organising is the process of identifying and grouping the work to be performed, defining and delegating responsibility and authority, and establishing relationships for the purpose of enabling people to work most effectively together in accomplishing objectives.',
      'Core Concept: It is a function that creates a structure of relationships among various job positions and the people who fill them. It translates plans into action by clarifying jobs and working relationships.',
      'Key Elements: (a) Identification and grouping of work. (b) Allocation of resources. (c) Establishing authority-responsibility relationships.'
    ],
    visualizations: []
  },
  {
    id: 'organising-process',
    title: 'Steps in Organising Process',
    description: 'The logical steps to organise resources and activities.',
    content: [
      '1. Identification and Division of Work: The first step is identifying and dividing the total work into small, manageable activities according to predetermined plans. This avoids duplication and burden.',
      '2. Departmentalisation: Once work is divided into small activities, similar activities are grouped together into departments (e.g., Marketing Dept, Finance Dept). This can be based on functions or products.',
      '3. Assignment of Duties: Jobs are allocated to members according to their skills and competencies. It is essential for effective performance that work is assigned to those who are best suited for it.',
      '4. Establishing Reporting Relationships: Merely allocating work is not enough; each individual must know who he has to take orders from and to whom he is accountable. This creates a clear hierarchy.'
    ],
    visualizations: [
      {
        id: 'organising-process-flow',
        title: 'Steps in Organising',
        type: 'flow',
        data: {
          nodes: [
            { id: '1', label: '1. Identification & Division of Work' },
            { id: '2', label: '2. Departmentalisation' },
            { id: '3', label: '3. Assignment of Duties' },
            { id: '4', label: '4. Establishing Reporting Relationships' }
          ],
          edges: [
            { from: '1', to: '2' }, { from: '2', to: '3' }, { from: '3', to: '4' }
          ]
        }
      }
    ]
  },
  {
    id: 'importance-of-organising',
    title: 'Importance of Organising',
    description: 'Benefits of the organising function for the enterprise.',
    content: [
      '1. Benefits of Specialisation: A systematic allocation of jobs leads to employees performing a specific task repeatedly, resulting in specialisation, speed, and accuracy.',
      '2. Clarity in Working Relationships: The establishment of reporting relationships clarifies the flow of authority and responsibility. It removes ambiguity in the transfer of information.',
      '3. Optimum Utilisation of Resources: Organising leads to proper usage of all material, financial and human resources. Avoiding duplication of work helps in preventing wastage.',
      '4. Adaptation to Change: It allows the organisation structure to be suitably modified and the revision of inter-relationships to provide for change in the business environment.',
      '5. Effective Administration: Organising provides a clear description of jobs and related duties. This helps to avoid confusion and duplication, making administration easier.',
      '6. Development of Personnel: Effective delegation allows managers to reduce their routine workload and focus on important issues. It provides subordinates with opportunities to grow.',
      '7. Expansion and Growth: It enables an enterprise to take up new challenges and expand by adding more job positions, departments, and even new product lines.'
    ],
    visualizations: []
  },
  {
    id: 'organisation-structure',
    title: 'Organisation Structure',
    description: 'Framework within which managerial and operating tasks are performed.',
    content: [
      'Concept: Organisation structure is the network of job positions, responsibilities, and authority at different levels. It provides the framework within which managerial and operating tasks are performed.',
      'Span of Management: It refers to the number of subordinates that can be effectively managed by a superior. It determines the levels of management and the shape of the organizational hierarchy (tall or flat structure).'
    ],
    visualizations: [
      {
        id: 'functional-structure-chart',
        title: 'Functional Structure Organization Chart',
        type: 'flow',
        data: {
          nodes: [
            { id: 'md', label: 'Managing Director' },
            { id: 'prod', label: 'Production' },
            { id: 'mark', label: 'Marketing' },
            { id: 'fin', label: 'Finance' },
            { id: 'hr', label: 'Human Resources' }
          ],
          edges: [
            { from: 'md', to: 'prod' },
            { from: 'md', to: 'mark' },
            { from: 'md', to: 'fin' },
            { from: 'md', to: 'hr' }
          ]
        }
      }
    ]
  },
  {
    id: 'types-of-structure',
    title: 'Types of Organisation Structures',
    description: 'Functional and Divisional structures.',
    content: [
      'Functional Structure: Grouping of activities on the basis of functions (Production, Finance, Marketing). Suitable for large organizations with one line of products.',
      'Advantages of Functional: (a) Occupational specialisation. (b) Better control and coordination. (c) Increased managerial and operational efficiency. (d) Avoids duplication of effort.',
      'Disadvantages of Functional: (a) Functional empires (focus on dept goals over org goals). (b) Coordination problems between depts. (c) Narrow perspective for managers.',
      'Divisional Structure: Grouping of activities on the basis of product lines. Each division has its own functional departments (Production, HR, etc.). Suitable for multi-product firms.',
      'Advantages of Divisional: (a) Skill development in multiple functions. (b) Fixes responsibility for performance/profits. (c) Flexibility and fast decision making. (d) Easy expansion.',
      'Disadvantages of Divisional: (a) Conflict among divisions over resource allocation. (b) Increased cost due to duplication of functions. (c) Divisional heads may ignore overall interests.'
    ],
    visualizations: [
      {
        id: 'divisional-structure-chart',
        title: 'Divisional Structure Organization Chart',
        type: 'flow',
        data: {
          nodes: [
            { id: 'md', label: 'Managing Director' },
            { id: 'div-a', label: 'Division: Cosmetics' },
            { id: 'div-b', label: 'Division: Garments' },
            { id: 'func-a1', label: 'Production' },
            { id: 'func-a2', label: 'Marketing' },
            { id: 'func-b1', label: 'Production' },
            { id: 'func-b2', label: 'Marketing' }
          ],
          edges: [
            { from: 'md', to: 'div-a' },
            { from: 'md', to: 'div-b' },
            { from: 'div-a', to: 'func-a1' },
            { from: 'div-a', to: 'func-a2' },
            { from: 'div-b', to: 'func-b1' },
            { from: 'div-b', to: 'func-b2' }
          ]
        }
      },
      {
        id: 'func-vs-div',
        title: 'Functional vs Divisional Structure',
        type: 'table',
        data: {
          headers: ['Basis', 'Functional Structure', 'Divisional Structure'],
          rows: [
            ['Formation', 'Based on functions (e.g., Marketing, Production)', 'Based on product lines (e.g., Cosmetics, Garments)'],
            ['Specialisation', 'Functional specialisation', 'Product specialisation'],
            ['Responsibility', 'Difficult to fix on a department', 'Easy to fix responsibility for performance'],
            ['Managerial Development', 'Difficult (narrow skills)', 'Easier (autonomy and multiple functions)'],
            ['Cost', 'Economical (no duplication)', 'Costly (duplication of resources per division)'],
            ['Coordination', 'Difficult for multi-product company', 'Easy (each division is autonomous)']
          ]
        }
      }
    ]
  },
  {
    id: 'formal-informal-org',
    title: 'Formal and Informal Organisation',
    description: 'Distinction between formally designed structure and social networks.',
    content: [
      'Formal Organisation: The structure designed by the management to accomplish a specific task. Features: Clearly defined authority-responsibility, based on rules/procedures, impersonal, stable.',
      'Advantages: Fixes responsibility easily, clarity in roles, unity of command, stability of the organization.',
      'Disadvantages: Procedural delays (scalar chain), rigidity, ignores social needs of employees.',
      'Informal Organisation: Spontaneous network of social relationships among employees. Features: Spontaneous emergence, no written rules, no fixed direction of flow of info.',
      'Advantages: Fast communication (grapevine), fulfills social needs of members, provides feedback to managers.',
      'Disadvantages: Spread of rumors, resistance to change, priority to personal interests over organizational interests.'
    ],
    visualizations: []
  },
  {
    id: 'delegation',
    title: 'Delegation',
    description: 'Transfer of authority from superior to subordinate.',
    content: [
      'Meaning: Downward transfer of authority from a superior to a subordinate. Prerequisite for efficient functioning of an organization as no manager can do all work alone.',
      'Elements of Delegation:',
      '1. Authority: Right of an individual to command his subordinates and to take action within the scope of his position. Flows from top to bottom.',
      '2. Responsibility: Obligation of a subordinate to properly perform the assigned duty. It flows upwards.',
      '3. Accountability: Being answerable for the final outcome. It flows upwards and cannot be delegated.',
      '> [!IMPORTANT]',
      '> **Principle of Absoluteness of Accountability**: Delegation of authority does not mean abdication of responsibility. The superior remains accountable for the tasks delegated to subordinates.',
      'Importance: (a) Effective management. (b) Employee development. (c) Motivation. (d) Facilitation of growth. (e) Basis of management hierarchy.'
    ],
    visualizations: []
  },
  {
    id: 'decentralisation',
    title: 'Decentralisation',
    description: 'Dispersal of decision-making authority to lower levels.',
    content: [
      'Meaning: Systematic dispersal of authority to the lowest level in the organization. It is much more than mere delegation; it is an organizational philosophy.',
      'Decentralisation vs Delegation: Delegation is a technique of getting work done, while decentralisation is the result of policy decisions by top management.',
      'Importance: (a) Develops initiative among subordinates. (b) Develops managerial talent for future. (c) Quick decision-making. (d) Relief to top management. (e) Facilitates growth. (f) Better control.'
    ],
    visualizations: []
  }
];
