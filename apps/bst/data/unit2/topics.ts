import { TheoryTopic } from '../../types';

export const topics: TheoryTopic[] = [
  {
    id: 'principles-concept',
    title: 'Concept & Nature of Principles',
    description: 'General guidelines for managerial decision making.',
    content: [
      'Definition: Principles of management are broad and general guidelines for managerial decision-making and behaviour. They are different from pure science principles because they deal with human behavior.',
      'Nature: (a) Universal Applicability: Can be applied to all types and sizes of organizations. (b) General Guidelines: They are not ready-made solutions but provide a direction for action. (c) Formed by Practice & Experimentation: They are developed over a period of time based on observation and experience. (d) Flexible: They can be modified by managers to suit a particular situation. (e) Mainly Behavioural: They aim at influencing human behavior. (f) Cause & Effect Relationships: They help in predicting the outcome of a particular action. (g) Contingent: Their application depends on the prevailing situation at a particular point in time.'
    ],
    visualizations: []
  },
  {
    id: 'principles-significance',
    title: 'Significance of Principles',
    description: 'Why do we need management principles?',
    content: [
      'Providing managers with useful insights into reality: These principles improve the knowledge, ability and understanding of managers in various situations. They help managers to learn from past mistakes.',
      'Optimum utilization of resources and effective administration: Principles help in achieving maximum benefit from minimum resources (human and material) by reducing wastage.',
      'Scientific decisions: Decisions should be based on facts, thoughtful and justifiable in terms of intended purposes. They must be timely and realistic.',
      'Meeting changing environment requirements: Management principles are flexible and can be adapted to meet the needs of the dynamic business environment.',
      'Fulfilling social responsibility: Increased awareness of the public forces businesses to fulfill social obligations. Principles like Equity and Fair Remuneration help in this.',
      'Management training, education and research: These principles form the core of management theory and are used as a basis for management training (MBA, BBA) and research work.'
    ],
    visualizations: []
  },
  {
    id: 'taylor-scientific-mgmt',
    title: 'Scientific Management (F.W. Taylor)',
    description: 'The "Father of Scientific Management" and his contribution.',
    content: [
      'Science, not Rule of Thumb: Rule of thumb refers to trial and error. Taylor believed there is "one best way" to maximize efficiency, which can be developed through scientific analysis of work.',
      'Harmony, not Discord: There should be complete harmony between the management and workers. Both should realize that they need each other. Mental Revolution: A complete change in the attitude of workers and management towards each other.',
      'Cooperation, not Individualism: This is an extension of the principle of Harmony. Competition should be replaced by cooperation. Management should welcome suggestions from workers and reward them for good suggestions.',
      'Development of each and every person to his or her greatest efficiency and prosperity: Employees should be scientifically selected and assigned work according to their mental/physical capabilities. They should be given proper training.'
    ],
    visualizations: []
  },
  {
    id: 'taylor-techniques',
    title: 'Techniques of Scientific Management',
    description: 'Practical tools to implement scientific management.',
    content: [
      'Functional Foremanship: Taylor advocated the separation of planning and execution functions. He suggested 8 specialists (4 for planning, 4 for execution) to supervise each worker. Planning: Instruction Card Clerk, Route Clerk, Time & Cost Clerk, Disciplinarian. Execution: Speed Boss, Gang Boss, Repair Boss, Inspector.',
      'Standardization and Simplification of Work: Standardization refers to setting benchmarks for every business activity (processes, raw materials, time, product). Simplification refers to eliminating unnecessary diversity of products, sizes and types.',
      'Method Study: Objective is to find "one best way" of doing the job to minimize cost and maximize satisfaction.',
      'Motion Study: Studying the movements like lifting, putting objects, sitting and changing positions which are undertaken while doing a job. Eliminating unproductive movements.',
      'Time Study: It determines the standard time taken to perform a well-defined job. It helps in determining the number of workers to be employed and framing suitable incentive schemes.',
      'Fatigue Study: Determines the amount and frequency of rest intervals in finishing a task. A person is bound to feel tired physically and mentally if he does not have rest.',
      'Differential Piece Wage System: Link wages to productivity. Efficient workers (reaching standard) are paid at a higher rate, while inefficient workers are paid lower. This creates an incentive for workers to improve.'
    ],
    visualizations: [
      {
        id: 'functional-foremanship',
        title: 'Functional Foremanship Structure',
        type: 'flow',
        data: {
          nodes: [
            { id: 'fm', label: 'Factory Manager' },
            { id: 'plan', label: 'Planning Incharge' },
            { id: 'prod', label: 'Production Incharge' },
            { id: 'w', label: 'Workmen' },
            { id: 'wc', label: 'Route Clerk' },
            { id: 'ic', label: 'Instruction Card Clerk' },
            { id: 'tc', label: 'Time & Cost Clerk' },
            { id: 'd', label: 'Disciplinarian' },
            { id: 'gb', label: 'Gang Boss' },
            { id: 'sb', label: 'Speed Boss' },
            { id: 'rb', label: 'Repair Boss' },
            { id: 'i', label: 'Inspector' }
          ],
          edges: [
            { from: 'fm', to: 'plan' },
            { from: 'fm', to: 'prod' },
            { from: 'plan', to: 'wc' }, { from: 'plan', to: 'ic' }, { from: 'plan', to: 'tc' }, { from: 'plan', to: 'd' },
            { from: 'prod', to: 'gb' }, { from: 'prod', to: 'sb' }, { from: 'prod', to: 'rb' }, { from: 'prod', to: 'i' },
            { from: 'wc', to: 'w' }, { from: 'ic', to: 'w' }, { from: 'tc', to: 'w' }, { from: 'd', to: 'w' },
            { from: 'gb', to: 'w' }, { from: 'sb', to: 'w' }, { from: 'rb', to: 'w' }, { from: 'i', to: 'w' }
          ]
        }
      }
    ]
  },
  {
    id: 'fayol-principles',
    title: 'Fayol\'s 14 Principles',
    description: 'Administrative Theory by Henri Fayol.',
    content: [
      '1. Division of Work: Work is divided into small tasks. A person performing the same task repeatedly becomes specialized and efficient.',
      '2. Authority and Responsibility: Authority is the right to give orders; Responsibility is the obligation to perform. There should be a balance between the two.',
      '3. Discipline: It refers to obedience to organizational rules and employment agreements. It requires good supervisors at all levels and clear/fair agreements.',
      '4. Unity of Command: Each subordinate should receive orders from and be accountable to only one superior to avoid confusion and dual subordination.',
      '5. Unity of Direction: All units of an organization should be moving towards the same objectives through coordinated and focused efforts. One head, one plan.',
      '6. Subordination of Individual Interest to General Interest: The interest of an organization should take priority over the interest of any one individual employee.',
      '7. Remuneration of Employees: Compensation should be fair to both employees and management, providing a reasonable standard of living.',
      '8. Centralization and Decentralization: Centralization is concentration of decision-making authority; Decentralization is its dispersal. An organization should have a balance.',
      '9. Scalar Chain: Formal line of authority from highest to lowest rank. In case of emergency, "Gang Plank" allows direct communication between same-level employees.',
      '10. Order: A place for everything (material order) and everyone (social order). Efficiency is maximized when things/people are in their right places.',
      '11. Equity: Justice and kindness in the treatment of workers by managers. No discrimination on the basis of sex, religion, language, caste, or nationality.',
      '12. Stability of Personnel: Employees should be selected and kept in their positions for a reasonable time to show results. Frequent turnover is inefficient.',
      '13. Initiative: Workers should be encouraged to develop and carry out their plans for improvement. It leads to psychological satisfaction.',
      '14. Esprit de Corps: Management should promote team spirit and unity. A manager should replace "I" with "We" in all conversations with workers.'
    ],
    visualizations: [
      {
        id: 'unity-command-vs-direction',
        title: 'Unity of Command vs Direction',
        type: 'table',
        data: {
          headers: ['Basis', 'Unity of Command', 'Unity of Direction'],
          rows: [
            ['Meaning', 'One boss per employee', 'One head, one plan per unit'],
            ['Aim', 'Prevents dual subordination', 'Prevents overlapping of activities'],
            ['Implication', 'Affects individual employee', 'Affects entire organization']
          ]
        }
      },
      {
        id: 'scalar-chain-diagram',
        title: 'Scalar Chain & Gang Plank',
        type: 'flow',
        data: {
          nodes: [
            { id: 'a', label: 'A (Top)' },
            { id: 'b', label: 'B' }, { id: 'c', label: 'C' }, { id: 'd', label: 'D (Peer)' },
            { id: 'l', label: 'L' }, { id: 'm', label: 'M' }, { id: 'n', label: 'N (Peer)' }
          ],
          edges: [
            { from: 'a', to: 'b' }, { from: 'b', to: 'c' }, { from: 'c', to: 'd' },
            { from: 'a', to: 'l' }, { from: 'l', to: 'm' }, { from: 'm', to: 'n' },
            { from: 'd', to: 'n', label: 'Gang Plank (Emergency)' }
          ]
        }
      }
    ]
  },
  {
    id: 'taylor-vs-fayol',
    title: 'Taylor vs Fayol',
    description: 'Comparison of the two classical theorists.',
    content: [
      'Perspective: Taylor focused on Shop Floor/Operational level (improving worker efficiency); Fayol focused on Top Management (improving overall administration).',
      'Basis: Taylor based his theory on Scientific Observation/Experimentation; Fayol based his on Personal Experience and general principles.',
      'Applicability: Taylor\'s techniques are specialized and applied in specific situations; Fayol\'s principles are Universal and applicable to all organizations.',
      'Unity of Command: Taylor\'s Functional Foremanship violated it (8 bosses); Fayol strictly insisted on only one boss per subordinate.',
      'Focus: Taylor focused on increasing Productivity; Fayol focused on improving Administrative efficiency.',
      'Expression: Taylor is known as the "Father of Scientific Management"; Fayol is known as the "Father of General Management".'
    ],
    visualizations: [
      {
        id: 'comparison-table',
        title: 'Taylor vs Fayol',
        type: 'table',
        data: {
          headers: ['Basis', 'Taylor', 'Fayol'],
          rows: [
            ['Perspective', 'Shop Floor', 'Top Level'],
            ['Focus', 'Productivity', 'Administration'],
            ['Applicability', 'Specialized', 'Universal'],
            ['Unity of Command', 'Did not follow', 'Strictly followed']
          ]
        }
      }
    ]
  }
];
