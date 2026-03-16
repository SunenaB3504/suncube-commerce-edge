import { TheoryTopic } from '../../types';

export const topics: TheoryTopic[] = [
  {
    id: 'concept-of-planning',
    title: 'Concept of Planning',
    description: 'Understanding the definition and key aspects of planning.',
    content: [
      'Meaning: Planning is the process of deciding in advance what to do, how to do, when to do and who is to do. It bridges the gap between where we are and where we want to go. It is a fundamental function of management.',
      'Core Logic: Before any action is taken, a manager must formulate an idea of how to work on a particular task. Planning is thus closely connected with creativity and innovation.',
      'Key Aspects: (a) Setting Objectives: The desired future position of the organization. (b) Developing Courses of Action: Identifying various ways to reach the goal. (c) Selection: Decision-making to choose the most suitable path. (d) Bridging the Gap: Linking the present situation to a desired future state.'
    ],
    visualizations: []
  },
  {
    id: 'importance-of-planning',
    title: 'Importance of Planning',
    description: 'Why planning is essential for organisational success.',
    content: [
      '1. Provides Direction: By stating in advance how work is to be done, planning ensures that goals are clearly defined. It acts as a guide for deciding what action should be taken.',
      '2. Reduces Risks of Uncertainty: Planning enables a manager to look ahead and anticipate changes. While it cannot eliminate uncertainty, it helps in preparing for it through forecasting.',
      '3. Reduces Overlapping and Wasteful Activities: Planning serves as the basis of coordinating activities of different divisions/individuals. It helps in avoiding confusion and misunderstanding.',
      '4. Promotes Innovative Ideas: Since it is the first function of management, new ideas can take the shape of concrete plans. It makes managers think and stay creative.',
      '5. Facilitates Decision Making: Planning involves looking into the future and making a choice from amongst various alternative courses of action based on a comparison of their feasibility.',
      '6. Establishes Standards for Controlling: Planning provides the goals or standards against which actual performance is measured. Without planning, there would be nothing to control.'
    ],
    visualizations: [
      {
        id: 'planning-importance-list',
        title: 'Importance of Planning Benefits',
        type: 'list',
        data: ['Direction', 'Risk Reduction', 'Efficiency (No Overlap)', 'Innovation', 'Decision Making', 'Control Standards']
      }
    ]
  },
  {
    id: 'features-of-planning',
    title: 'Features of Planning',
    description: 'Key characteristics that define the nature of planning.',
    content: [
      'Focuses on Achieving Objectives: Planning is purposeful; it has no meaning unless it contributes to the achievement of predetermined organisational goals.',
      'Primary Function of Management: It precedes all other functions (Organising, Staffing, Directing, Controlling). This is also known as the primacy of planning.',
      'Pervasive: Required at all levels—top level for the whole organization, middle level for departments, and lower level for day-to-day operations.',
      'Continuous: Plans are prepared for a specific period (a month, a quarter, a year). At the end of that period, new plans are formulated based on results and feedback.',
      'Futuristic: Regarded as a forward-looking function. It involves forecasting future events and conditions based on analysis of current data.',
      'Involves Decision Making: Planning essentially involves choice from among various alternatives. If there is only one way of doing something, there is no need for planning.',
      'Mental Exercise: It is an intellectual activity requiring foresight, intelligent imagination, and sound judgment rather than mere guesswork.'
    ],
    visualizations: []
  },
  {
    id: 'limitations-of-planning',
    title: 'Limitations of Planning',
    description: 'Challenges and constraints involved in the planning process.',
    content: [
      'Internal Limitations: (a) Leads to Rigidity: Specific plans may not allow managers enough flexibility to cope with unexpected changes. (b) Not effective in Dynamic Environment: Rapidly changing political, economic or technological conditions can make plans obsolete. (c) Reduces Creativity: Middle and lower level managers are often required only to execute plans, discouraging their initiative. (d) Involves Huge Costs: Formulation requires research, data analysis, and expert consultations which are expensive. (e) Time Consuming: Sometimes it takes so much time that it delays action. (f) No Guarantee of Success: A plan that worked in the past may not necessarily work in a new situation.',
      'External Limitations: These are beyond the control of the organization. (a) Changes in Government Policies: New taxes or regulations. (b) Natural Calamities: Floods, fire, or earthquakes. (c) Changes in Competitors’ Policies. (d) Changes in Economic and Political Environment.'
    ],
    visualizations: []
  },
  {
    id: 'planning-process',
    title: 'Planning Process',
    description: 'Step-by-step procedure to formulate a plan.',
    content: [
      '1. Setting Objectives: Specifying what the organization wants to achieve. Objectives should be clear, measurable and understandable.',
      '2. Developing Premises: Making assumptions about the future environment (inflation, demand, policy). These are the material for planning.',
      '3. Identifying Alternative Courses of Action: Enumerating all possible ways of achieving the goals.',
      '4. Evaluating Alternative Courses: Weighing the positive and negative aspects of each alternative against factors like profit, cost, and time.',
      '5. Selecting an Alternative: Choosing the plan that is most feasible, profitable and carries the least negative consequences.',
      '6. Implementing the Plan: Putting the plan into action by allocating resources and coordinating efforts.',
      '7. Follow-up Action: Monitoring the plan to ensure that activities are going according to schedule and making adjustments if needed.'
    ],
    visualizations: [
      {
        id: 'planning-process-flow',
        title: 'The Planning Process',
        type: 'flow',
        data: {
          nodes: [
            { id: '1', label: '1. Setting Objectives' },
            { id: '2', label: '2. Developing Premises' },
            { id: '3', label: '3. Identifying Alternatives' },
            { id: '4', label: '4. Evaluating Alternatives' },
            { id: '5', label: '5. Selecting Alternative' },
            { id: '6', label: '6. Implementing Plan' },
            { id: '7', label: '7. Follow-up Action' }
          ],
          edges: [
            { from: '1', to: '2' }, { from: '2', to: '3' }, { from: '3', to: '4' },
            { from: '4', to: '5' }, { from: '5', to: '6' }, { from: '6', to: '7' }
          ]
        }
      }
    ]
  },
  {
    id: 'types-of-plans',
    title: 'Types of Plans',
    description: 'Single-use plans and Standing plans.',
    content: [
      'Single-use Plans: Developed for a one-time event or project. Not likely to be repeated (e.g., Budgets, Programmes, Projects).',
      'Standing Plans: Used for activities that occur regularly over a period of time. Ensure smooth internal operations (e.g., Policies, Procedures, Rules, Methods).',
      'Specific Types:',
      '1. Objectives: The end points toward which all activities are directed.',
      '2. Strategy: A comprehensive plan defining the organization’s long-term scope and direction.',
      '3. Policy: General guidelines that channel thinking toward achievement of objectives.',
      '4. Procedure: Sequential steps of actions prescribed to handle routine activities.',
      '5. Method: The standard way in which a task is performed to ensure speed and economy.',
      '6. Rule: Rigid statements that inform what is to be done and what not. There is no room for discretion.',
      '7. Programme: Detailed overview of a project including its objectives, policies, procedures, and rules.',
      '8. Budget: A statement of expected results expressed in numerical terms (financial or physical).'
    ],
    visualizations: [
      {
        id: 'single-vs-standing',
        title: 'Single-use vs Standing Plans',
        type: 'table',
        data: {
          headers: ['Basis', 'Single-use Plans', 'Standing Plans'],
          rows: [
            ['Meaning', 'Developed for one-time event', 'Used for activities that occur regularly'],
            ['Objective', 'To manage specific project', 'To enable smooth operations'],
            ['Scope', 'Narrow', 'Wide'],
            ['Examples', 'Budget, Programme', 'Policy, Procedure, Rule']
          ]
        }
      }
    ]
  }
];
