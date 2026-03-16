
import os

content = """import { TheoryTopic } from '../../types';

export const topics: TheoryTopic[] = [
  {
    id: 'concept-of-organising',
    title: 'Concept of Organising',
    description: 'Definition and meaning of organising as a management function.',
    content: [
      'Organising is the process of defining and grouping the work to be performed, defining and delegating responsibility and authority, and establishing relationships for the purpose of enabling people to work most effectively together in accomplishing objectives.',
      'It involves translating plans into action by creating an organisational structure.',
      'Process that initiates implementation of plans by clarifying jobs and working relationships and effectively deploying resources for attainment of identified and desired results.'
    ],
    visualizations: []
  },
  {
    id: 'organising-process',
    title: 'Steps in Organising Process',
    description: 'The logical steps to organise resources and activities.',
    content: [
      '1. Identification and Division of Work: Identifying and dividing the work into manageable activities so that duplication is avoided and burden is shared.',
      '2. Departmentalisation: Grouping similar activities together. Can be done on the basis of territory, products, etc.',
      '3. Assignment of Duties: Defining the work of different job positions and allocating work to employees according to their skills and competencies.',
      '4. Establishing Authority and Reporting Relationships: Clarifying who has to take orders from whom and to whom they are accountable. Creates a hierarchical structure.'
    ],
    visualizations: []
  },
  {
    id: 'importance-of-organising',
    title: 'Importance of Organising',
    description: 'Benefits of the organising function for the enterprise.',
    content: [
      '1. Benefits of Specialisation: Systematic allocation of jobs leads to specialisation and higher productivity.',
      '2. Clarity in Working Relationships: Removes ambiguity in transfer of information/instructions and fixes responsibility.',
      '3. Optimum Utilisation of Resources: Avoids overlapping and duplication, minimising wastage of resources.',
      '4. Adaptation to Change: Allows the organisation structure to be modified to accommodate changes in the business environment.',
      '5. Effective Administration: Clear description of jobs and duties helps avoid confusion and brings effectiveness.',
      '6. Development of Personnel: Delegation allows managers to reduce workload and develop new methods. It gives subordinates chances to grow.',
      '7. Expansion and Growth: Enables the enterprise to add more job positions, departments, and diversify product lines.'
    ],
    visualizations: []
  },
  {
    id: 'organisation-structure',
    title: 'Organisation Structure',
    description: 'Framework within which managerial and operating tasks are performed.',
    content: [
      'The framework within which managerial and operating tasks are performed. It specifies the relationships between people, work, and resources.',
      'Span of Management: Refers to the number of subordinates that can be effectively managed by a superior. This determines the levels of management in the structure.'
    ],
    visualizations: []
  },
  {
    id: 'types-of-structure',
    title: 'Types of Organisation Structures',
    description: 'Functional and Divisional structures.',
    content: [
      'Functional Structure: Grouping of jobs of similar nature under major functions (e.g., Production, Marketing).',
      'Advantages of Functional: Occupational specialisation, promotes control and coordination within department, increasing efficiency, economies of scale, easier training.',
      'Disadvantages of Functional: Less emphasis on overall objectives, coordination problems across departments, conflict of interests, inflexibility.',
      'Divisional Structure: Organisation comprised of separate business units or divisions (usually by product line). Each division is multifunctional and self-contained.',
      'Advantages of Divisional: Product specialisation, accountability for profits, promotes flexibility and initiative, facilitates expansion.',
      'Disadvantages of Divisional: Conflicts among divisions, increased costs due to duplication, managers may ignore organisational interests.'
    ],
    visualizations: []
  },
  {
    id: 'formal-informal-org',
    title: 'Formal and Informal Organisation',
    description: 'Distinction between formally designed structure and social networks.',
    content: [
      'Formal Organisation: Structure designed by management to accomplish a particular task. Clearly specifies boundaries of authority and responsibility.',
      'Advantages: Fixes responsibility, no ambiguity in roles, unity of command, stability.',
      'Limitations: Procedural delays, rigidity, does not account for social relationships.',
      'Informal Organisation: Network of social relationships arising out of interaction among employees. Emerges spontaneously.',
      'Advantages: Faster spread of information, fulfills social needs, compensates for inadequacies in formal structure.',
      'Disadvantages: Spread of rumors, resistance to change, pressure to conform to group norms.'
    ],
    visualizations: []
  },
  {
    id: 'delegation',
    title: 'Delegation',
    description: 'Transfer of authority from superior to subordinate.',
    content: [
      'Delegation differs to the downward transfer of authority from a superior to a subordinate. It is a prerequisite to efficient functioning.',
      'Elements of Delegation:',
      '1. Authority: Right to command subordinates and take action. Flows from top to bottom.',
      '2. Responsibility: Obligation of a subordinate to properly perform assigned duty. Flows upwards.',
      '3. Accountability: Answerability for the final outcome. Cannot be delegated. Flows upwards.',
      'Importance: Effective management, Employee development, Motivation of employees, Facilitation of growth, Basis of management hierarchy, Better coordination.'
    ],
    visualizations: []
  },
  {
    id: 'decentralisation',
    title: 'Decentralisation',
    description: 'Dispersal of decision-making authority to lower levels.',
    content: [
      'Decentralisation refers to delegation of authority throughout all the levels of the organisation. Decision making authority is pushed down the chain of command.',
      'Centralisation vs Decentralisation: Centralisation is retention of decision-making authority by higher management. Decentralisation is delegation of such authority.',
      'Importance: Develops initiative among subordinates, Develops managerial talent for the future, Quick decision making, Relief to top management, Facilitates growth, Better control.'
    ],
    visualizations: []
  }
];
"""

with open('c:\\Users\\Admin\\Neil\\bstudies-cbse-class-XII\\data\\unit5\\topics.ts', 'w', encoding='utf-8') as f:
    f.write(content)

print("Successfully wrote data/unit5/topics.ts")
