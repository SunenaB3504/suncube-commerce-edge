import { Flashcard } from '../../types';

export const flashcards: Flashcard[] = [
  // ═══════════════════════════════════════════════════════
  // 1. CONCEPT & PROCESS OF ORGANISING (1-8)
  // ═══════════════════════════════════════════════════════
  { id: 'f5-1', category: 'Concept', question: 'What is Organising?', answer: 'The process of defining and grouping activities and establishing authority relationships among them to achieve objectives.' },
  { id: 'f5-2', category: 'Concept', question: 'What does organising translate into action?', answer: 'Plans. It creates the structure needed to implement plans by clarifying jobs and working relationships.' },
  { id: 'f5-3', category: 'Process', question: 'Name the first step in the Organising process.', answer: 'Identification and Division of Work.' },
  { id: 'f5-4', category: 'Process', question: 'What is Step 2: Departmentalisation?', answer: 'Grouping similar or related jobs into larger units called departments (based on function, product, or territory).' },
  { id: 'f5-5', category: 'Process', question: 'What is Step 3: Assignment of Duties?', answer: 'Allocating work to employees according to their skills, competencies, and abilities.' },
  { id: 'f5-6', category: 'Process', question: 'What is Step 4?', answer: 'Establishing Authority and Reporting Relationships — clarifying who reports to whom, creating hierarchy.' },
  { id: 'f5-7', category: 'Process', question: 'Why is "Division of Work" done in organising?', answer: 'To avoid duplication, share the burden, and ensure specialisation for increased efficiency.' },
  { id: 'f5-8', category: 'Process', question: 'On what basis can Departmentalisation be done?', answer: 'Functions (Production, Marketing), Products (Cosmetics, Garments), or Territory (North, South).' },

  // ═══════════════════════════════════════════════════════
  // 2. IMPORTANCE OF ORGANISING (9-15)
  // ═══════════════════════════════════════════════════════
  { id: 'f5-9', category: 'Importance', question: 'How does organising provide "Benefits of Specialisation"?', answer: 'Systematic allocation of related jobs leads to specialisation, increasing efficiency and output.' },
  { id: 'f5-10', category: 'Importance', question: 'How does organising provide "Clarity in Working Relationships"?', answer: 'It establishes clear reporting lines (who reports to whom), removing ambiguity and fixing responsibility.' },
  { id: 'f5-11', category: 'Importance', question: 'How does organising ensure "Optimum Utilisation of Resources"?', answer: 'By avoiding overlapping and duplication of activities, minimizing wastage of resources.' },
  { id: 'f5-12', category: 'Importance', question: 'How does organising help in "Adaptation to Change"?', answer: 'The structure can be modified to accommodate changes in the business environment.' },
  { id: 'f5-13', category: 'Importance', question: 'How does organising allow "Development of Personnel"?', answer: 'Delegation reduces workload for managers and gives subordinates chance to grow and assume new responsibilities.' },
  { id: 'f5-14', category: 'Importance', question: 'How does organising enable "Expansion and Growth"?', answer: 'By adding new job positions and departments, the enterprise can diversify and grow systematically.' },
  { id: 'f5-15', category: 'Importance', question: 'How does organising lead to "Effective Administration"?', answer: 'Clear job descriptions and duties prevent confusion and bring orderliness to the functioning of the enterprise.' },

  // ═══════════════════════════════════════════════════════
  // 3. ORGANISATION STRUCTURE (16-20)
  // ═══════════════════════════════════════════════════════
  { id: 'f5-16', category: 'Structure', question: 'Define "Organisation Structure".', answer: 'The framework within which managerial and operating tasks are performed, specifying relationships between people, work, and resources.' },
  { id: 'f5-17', category: 'Structure', question: 'Define "Span of Management".', answer: 'The number of subordinates that can be effectively managed by a superior.' },
  { id: 'f5-18', category: 'Structure', question: 'What determines the levels of management?', answer: 'Span of Management. Narrow span = more levels (tall structure); Wide span = fewer levels (flat structure).' },
  { id: 'f5-19', category: 'Structure', question: 'What is a "Tall Structure"?', answer: 'An organisation with many levels of management due to a narrow span of control.' },
  { id: 'f5-20', category: 'Structure', question: 'What is a "Flat Structure"?', answer: 'An organisation with few levels of management due to a wide span of control.' },

  // ═══════════════════════════════════════════════════════
  // 4. FUNCTIONAL vs DIVISIONAL STRUCTURE (21-30)
  // ═══════════════════════════════════════════════════════
  { id: 'f5-21', category: 'Functional', question: 'What is a Functional Structure?', answer: 'Grouping of jobs of similar nature under major functions like Production, Marketing, Finance, and HR.' },
  { id: 'f5-22', category: 'Functional', question: 'Name two advantages of Functional Structure.', answer: 'Occupational specialisation and economies of scale (resources shared across the function).' },
  { id: 'f5-23', category: 'Functional', question: 'Name two disadvantages of Functional Structure.', answer: 'Coordination problems across departments and "Functional Empire" (departments prioritise own interest over firm).' },
  { id: 'f5-24', category: 'Functional', question: 'When is Functional Structure most suitable?', answer: 'When the firm has a single product or a few closely related products and needs specialisation.' },
  { id: 'f5-25', category: 'Divisional', question: 'What is a Divisional Structure?', answer: 'Organisation divided into separate business units (divisions) — each is self-contained and multifunctional.' },
  { id: 'f5-26', category: 'Divisional', question: 'Name two advantages of Divisional Structure.', answer: 'Product specialisation and clear accountability for divisional profits.' },
  { id: 'f5-27', category: 'Divisional', question: 'Name two disadvantages of Divisional Structure.', answer: 'Duplication of resources across divisions (high cost) and inter-divisional conflicts.' },
  { id: 'f5-28', category: 'Divisional', question: 'When is Divisional Structure most suitable?', answer: 'When a multi-product company needs product specialisation and independent divisional accountability.' },
  { id: 'f5-29', category: 'Distinction', question: 'Functional vs Divisional: How is responsibility fixed?', answer: 'Functional: Difficult to fix. Divisional: Easy to fix (each division head is accountable).' },
  { id: 'f5-30', category: 'Distinction', question: 'Functional vs Divisional: Which is more economical?', answer: 'Functional (no duplication of resources). Divisional is costlier due to duplication.' },

  // ═══════════════════════════════════════════════════════
  // 5. FORMAL & INFORMAL ORGANISATION (31-38)
  // ═══════════════════════════════════════════════════════
  { id: 'f5-31', category: 'Formal', question: 'What is a Formal Organisation?', answer: 'A structure designed by management with defined authority, responsibility, and reporting relationships to accomplish tasks.' },
  { id: 'f5-32', category: 'Formal', question: 'Name two advantages of Formal Organisation.', answer: 'Fixes responsibility clearly and provides unity of command/ stability in the structure.' },
  { id: 'f5-33', category: 'Formal', question: 'Name two limitations of Formal Organisation.', answer: 'Procedural delays and rigidity — it does not account for social relationships among employees.' },
  { id: 'f5-34', category: 'Informal', question: 'How does an Informal Organisation emerge?', answer: 'Spontaneously, arising out of social interaction and personal relationships among employees.' },
  { id: 'f5-35', category: 'Informal', question: 'Name two advantages of Informal Organisation.', answer: 'Faster spread of information (grapevine) and fulfils social needs of employees.' },
  { id: 'f5-36', category: 'Informal', question: 'Name two disadvantages of Informal Organisation.', answer: 'Spread of rumours and resistance to change (pressure to conform to group norms).' },
  { id: 'f5-37', category: 'Distinction', question: 'Formal vs Informal: How does communication flow?', answer: 'Formal: Through official channels along the scalar chain. Informal: Through grapevine (any direction).' },
  { id: 'f5-38', category: 'Distinction', question: 'Formal vs Informal: Which is deliberately created and which is spontaneous?', answer: 'Formal is deliberately created by management. Informal is spontaneous and unplanned.' },

  // ═══════════════════════════════════════════════════════
  // 6. DELEGATION (39-48)
  // ═══════════════════════════════════════════════════════
  { id: 'f5-39', category: 'Delegation', question: 'Define Delegation.', answer: 'The downward transfer of authority from a superior to a subordinate to perform certain tasks.' },
  { id: 'f5-40', category: 'Delegation', question: 'Name the three elements of Delegation.', answer: 'Authority, Responsibility, and Accountability.' },
  { id: 'f5-41', category: 'Delegation', question: 'Define "Authority" in delegation.', answer: 'The right of a superior to command subordinates and take necessary action. Flows DOWNWARD.' },
  { id: 'f5-42', category: 'Delegation', question: 'Define "Responsibility" in delegation.', answer: 'The obligation of a subordinate to properly perform the assigned duty. Flows UPWARD.' },
  { id: 'f5-43', category: 'Delegation', question: 'Define "Accountability" in delegation.', answer: 'Answerability for the final outcome of the delegated task. CANNOT be delegated. Flows UPWARD.' },
  { id: 'f5-44', category: 'Delegation', question: 'State the "Principle of Absoluteness of Accountability".', answer: 'Authority can be delegated, but accountability is ABSOLUTE — the manager remains answerable to their own superior.' },
  { id: 'f5-45', category: 'Delegation', question: 'Does delegation reduce the manager\'s responsibility?', answer: 'No. The manager remains ultimately responsible even after delegating tasks to subordinates.' },
  { id: 'f5-46', category: 'Delegation', question: 'How does delegation motivate employees?', answer: 'It gives subordinates recognition, autonomy, and a sense of importance, boosting their morale and motivation.' },
  { id: 'f5-47', category: 'Delegation', question: 'How does delegation form the "Basis of Management Hierarchy"?', answer: 'Superior-subordinate relationships are built through delegation, establishing the hierarchy from top to bottom.' },
  { id: 'f5-48', category: 'Delegation', question: 'Name two importance points of delegation.', answer: 'Effective management (reduces workload) and Employee development (subordinates learn new skills).' },

  // ═══════════════════════════════════════════════════════
  // 7. DECENTRALISATION (49-55)
  // ═══════════════════════════════════════════════════════
  { id: 'f5-49', category: 'Decentralisation', question: 'Define Decentralisation.', answer: 'The systematic delegation of authority to the lowest levels throughout the entire organisation.' },
  { id: 'f5-50', category: 'Decentralisation', question: 'What is Centralisation?', answer: 'The retention of decision-making authority by higher management levels.' },
  { id: 'f5-51', category: 'Distinction', question: 'Delegation vs Decentralisation: Scope?', answer: 'Delegation is between two individuals (narrow). Decentralisation is a policy extending to all levels (organisation-wide).' },
  { id: 'f5-52', category: 'Distinction', question: 'Delegation vs Decentralisation: Is it compulsory?', answer: 'Delegation is compulsory (a manager cannot do everything). Decentralisation is optional (a policy choice).' },
  { id: 'f5-53', category: 'Decentralisation', question: 'How does decentralisation develop managerial talent?', answer: 'Lower-level managers get decision-making experience, preparing them for higher positions in the future.' },
  { id: 'f5-54', category: 'Decentralisation', question: 'How does decentralisation ensure "Quick Decision Making"?', answer: 'Decisions are made closer to the point of action, avoiding delays from referring matters to top management.' },
  { id: 'f5-55', category: 'Decentralisation', question: 'Name two importance points of decentralisation.', answer: 'Relief to top management (focus on strategic matters) and Facilitates growth (adds new departments easily).' },

  // ═══════════════════════════════════════════════════════
  // 8. SQP TRIGGERS & TRAPS (56-65)
  // ═══════════════════════════════════════════════════════
  { id: 'f5-56', category: 'SQP Trigger', question: 'If a case says "employees know exactly who to report to", which concept is highlighted?', answer: 'Establishing Authority and Reporting Relationships (Step 4 of Organising).' },
  { id: 'f5-57', category: 'SQP Trigger', question: 'If a case mentions "a company grouped by Garments, Cosmetics, and Electronics", which structure?', answer: 'Divisional Structure.' },
  { id: 'f5-58', category: 'SQP Trigger', question: 'If a case mentions "departments like Production, Finance, Marketing", which structure?', answer: 'Functional Structure.' },
  { id: 'f5-59', category: 'SQP Trigger', question: 'If a case mentions "absolute answerability even after delegating work", which concept?', answer: 'Accountability / Principle of Absoluteness of Accountability.' },
  { id: 'f5-60', category: 'SQP Trigger', question: 'If a case says "decision-making power pushed to the branch level", which concept?', answer: 'Decentralisation.' },
  { id: 'f5-61', category: 'Trap', question: 'Does Delegation decrease the authority of the manager?', answer: 'No. The manager retains overall authority even after delegating specific tasks; only a portion is transferred.' },
  { id: 'f5-62', category: 'Trap', question: '"Grapevine" communication is part of which organisation?', answer: 'Informal Organisation.' },
  { id: 'f5-63', category: 'Trap', question: 'Where is "Functional Empire" a disadvantage?', answer: 'Functional Structure — departments prioritise their own goals rather than overall organisational interest.' },
  { id: 'f5-64', category: 'Trap', question: 'Is Informal Organisation always bad?', answer: 'No. It has advantages like faster communication, fulfilling social needs, and covering gaps in formal structure.' },
  { id: 'f5-65', category: 'Trap', question: 'Under which structure is it easier to fix profit responsibility?', answer: 'Divisional Structure (each division head is directly accountable for divisional profits).' }
];
