import { Flashcard } from '../../types';

export const flashcards: Flashcard[] = [
  // ═══════════════════════════════════════════════════════
  // 1. CONCEPT & NATURE (1-7)
  // ═══════════════════════════════════════════════════════
  { id: 'f8-1', category: 'Concept', question: 'What is Controlling?', answer: 'Ensuring that activities in an organisation are performed as per the plans and resources are used effectively and efficiently.' },
  { id: 'f8-2', category: 'Nature', question: 'Is Controlling "Goal Oriented"?', answer: 'Yes. It ensures that resources are used effectively to achieve predetermined organisational goals.' },
  { id: 'f8-3', category: 'Nature', question: 'Is Controlling "Pervasive"?', answer: 'Yes. It is performed by managers at all levels — top, middle, and lower.' },
  { id: 'f8-4', category: 'Nature', question: 'Is Controlling a "Continuous Process"?', answer: 'Yes. It brings the management cycle back to planning and runs throughout the life of the organisation.' },
  { id: 'f8-5', category: 'Nature', question: 'Is Controlling Forward or Backward looking?', answer: 'Both. Backward-looking (postmortem of past acts) and Forward-looking (corrective action for future improvement).' },
  { id: 'f8-6', category: 'Nature', question: 'What does "Controlling is Dynamic" mean?', answer: 'Methods of control keep evolving to meet changing needs and conditions.' },
  { id: 'f8-7', category: 'Nature', question: 'Is Controlling a positive or restrictive function?', answer: 'Positive — it is designed to improve performance and achieve goals, not just to punish.' },

  // ═══════════════════════════════════════════════════════
  // 2. IMPORTANCE & LIMITATIONS (8-17)
  // ═══════════════════════════════════════════════════════
  { id: 'f8-8', category: 'Importance', question: 'How does controlling help "Accomplish Organisational Goals"?', answer: 'By measuring progress towards goals and bringing deviations to light for corrective action.' },
  { id: 'f8-9', category: 'Importance', question: 'How does controlling help "Judge Accuracy of Standards"?', answer: 'By verifying whether the standards set are accurate and objective in the changing environment.' },
  { id: 'f8-10', category: 'Importance', question: 'How does controlling "Make Efficient Use of Resources"?', answer: 'It reduces wastage and spoilage by monitoring resource utilisation.' },
  { id: 'f8-11', category: 'Importance', question: 'How does controlling help "Improve Employee Motivation"?', answer: 'Employees know exactly what is expected of them and how they will be measured.' },
  { id: 'f8-12', category: 'Importance', question: 'How does controlling "Ensure Order and Discipline"?', answer: 'It creates an atmosphere of order, minimises dishonest behaviour through constant monitoring.' },
  { id: 'f8-13', category: 'Importance', question: 'How does controlling "Facilitate Coordination"?', answer: 'It provides direction to all activities and efforts, ensuring they move towards organisational goals.' },
  { id: 'f8-14', category: 'Limitation', question: 'Why is "Setting Quantitative Standards" difficult?', answer: 'Employee morale, job satisfaction, and human behaviour are hard to measure numerically.' },
  { id: 'f8-15', category: 'Limitation', question: 'Why does controlling have "Little Control on External Factors"?', answer: 'Government policies, technological changes, and competition are beyond the organisation\'s control.' },
  { id: 'f8-16', category: 'Limitation', question: 'Why do employees "Resist" controlling?', answer: 'They may see it as a restriction on their freedom and autonomy.' },
  { id: 'f8-17', category: 'Limitation', question: 'Why is controlling called a "Costly Affair"?', answer: 'It involves expenditure on measurement, monitoring, reporting, and taking corrective action.' },

  // ═══════════════════════════════════════════════════════
  // 3. PLANNING & CONTROLLING RELATIONSHIP (18-22)
  // ═══════════════════════════════════════════════════════
  { id: 'f8-18', category: 'Relationship', question: 'Why is Controlling "Blind without Planning"?', answer: 'Without standards set in advance (Planning), managers have nothing to compare actual performance against.' },
  { id: 'f8-19', category: 'Relationship', question: 'Why is Planning "Meaningless without Controlling"?', answer: 'Without control, there is no way to ensure that events conform to plans.' },
  { id: 'f8-20', category: 'Relationship', question: 'Are Planning and Controlling "Inseparable Twins"?', answer: 'Yes. Planning provides standards for controlling; Controlling provides feedback to improve planning.' },
  { id: 'f8-21', category: 'Relationship', question: 'Is Planning Prescriptive or Evaluative?', answer: 'Prescriptive (prescribes the course of action).' },
  { id: 'f8-22', category: 'Relationship', question: 'Is Controlling Prescriptive or Evaluative?', answer: 'Evaluative (checks whether decisions have been translated into desired action).' },

  // ═══════════════════════════════════════════════════════
  // 4. CONTROLLING PROCESS (23-32)
  // ═══════════════════════════════════════════════════════
  { id: 'f8-23', category: 'Process', question: 'Name all 5 steps in the Controlling Process.', answer: 'Setting Standards, Measuring Performance, Comparing with Standards, Analysing Deviations, Taking Corrective Action.' },
  { id: 'f8-24', category: 'Process', question: 'What are "Performance Standards"?', answer: 'Criteria against which actual performance is measured. Can be Quantitative (units, cost) or Qualitative (morale).' },
  { id: 'f8-25', category: 'Process', question: 'How is "Actual Performance" measured?', answer: 'Through personal observation, sample checking, performance reports, and statistical data.' },
  { id: 'f8-26', category: 'Process', question: 'What is "Deviation"?', answer: 'The difference between actual performance and the planned/set standards.' },
  { id: 'f8-27', category: 'Process', question: 'Can deviations be positive?', answer: 'Yes. Positive deviation means actual performance exceeds the standard (e.g., exceeding sales targets).' },
  { id: 'f8-28', category: 'Process', question: 'What is "Critical Point Control" (CPC)?', answer: 'Focusing control on Key Result Areas (KRAs) that are critical to the organisation\'s success.' },
  { id: 'f8-29', category: 'Process', question: 'Give an example of CPC.', answer: 'A 5% rise in labour cost is more critical than a 15% rise in postal charges — focus control on labour cost.' },
  { id: 'f8-30', category: 'Process', question: 'What is "Management by Exception" (MBE)?', answer: 'Only SIGNIFICANT deviations beyond permissible limits should be reported to management.' },
  { id: 'f8-31', category: 'Process', question: 'What is the MBE principle in one line?', answer: '"Control EVERYTHING = Control NOTHING." Focus only on exceptions.' },
  { id: 'f8-32', category: 'Process', question: 'What types of corrective action can be taken?', answer: 'Training employees, allocating more resources, revising procedures, or updating/revising the standards themselves.' },

  // ═══════════════════════════════════════════════════════
  // 5. TECHNIQUES - TRADITIONAL (33-38)
  // ═══════════════════════════════════════════════════════
  { id: 'f8-33', category: 'Traditional', question: 'What is "Personal Observation"?', answer: 'First-hand information collected by the supervisor through direct observation of work.' },
  { id: 'f8-34', category: 'Traditional', question: 'What are "Statistical Reports"?', answer: 'Information presented in the form of averages, percentages, ratios, and charts for analysis.' },
  { id: 'f8-35', category: 'Traditional', question: 'What is "Breakeven Analysis"?', answer: 'A technique to study the relationship between costs, volume, and profits — identifying the no-profit, no-loss point.' },
  { id: 'f8-36', category: 'Traditional', question: 'Define "Budgetary Control".', answer: 'All operations are planned in advance as budgets, and actual results are compared with budgetary standards.' },
  { id: 'f8-37', category: 'Traditional', question: 'What is the Breakeven Point (BEP)?', answer: 'The point where total revenue equals total costs — no profit and no loss.' },
  { id: 'f8-38', category: 'Traditional', question: 'What is a "Budget" in controlling?', answer: 'A quantitative plan expressed in financial terms showing expected results for a definite period.' },

  // ═══════════════════════════════════════════════════════
  // 6. TECHNIQUES - MODERN (39-46)
  // ═══════════════════════════════════════════════════════
  { id: 'f8-39', category: 'Modern', question: 'What is "Return on Investment" (ROI)?', answer: 'A technique that measures the connection between net profit and investment — Net Income / Total Investment.' },
  { id: 'f8-40', category: 'Modern', question: 'What is "Ratio Analysis"?', answer: 'Analysis of financial statements through ratios — Liquidity, Solvency, Turnover, and Profitability ratios.' },
  { id: 'f8-41', category: 'Modern', question: 'What is "Responsibility Accounting"?', answer: 'Different sections are set up as responsibility centres — Cost, Revenue, Profit, and Investment centres.' },
  { id: 'f8-42', category: 'Modern', question: 'What is "Management Audit"?', answer: 'Systematic appraisal of the overall management methods and performance of an organisation.' },
  { id: 'f8-43', category: 'Modern', question: 'What are PERT and CPM?', answer: 'Programme Evaluation & Review Technique and Critical Path Method — for planning and controlling complex projects using network analysis.' },
  { id: 'f8-44', category: 'Modern', question: 'What is MIS?', answer: 'Management Information System — a computer-based system that provides relevant information to managers for decision-making.' },
  { id: 'f8-45', category: 'Modern', question: 'Name the 4 types of Responsibility Centres.', answer: 'Cost Centre, Revenue Centre, Profit Centre, and Investment Centre.' },
  { id: 'f8-46', category: 'Modern', question: 'Name 4 types of Ratios used in Ratio Analysis.', answer: 'Liquidity, Solvency, Activity/Turnover, and Profitability ratios.' },

  // ═══════════════════════════════════════════════════════
  // 7. SQP TRIGGERS & TRAPS (47-55)
  // ═══════════════════════════════════════════════════════
  { id: 'f8-47', category: 'SQP Trigger', question: 'If a case says "focus on labour cost because it is critical to success", which concept?', answer: 'Critical Point Control (CPC) — focusing on Key Result Areas.' },
  { id: 'f8-48', category: 'SQP Trigger', question: 'If a case says "only deviations beyond 5% are reported to the manager", which concept?', answer: 'Management by Exception (MBE).' },
  { id: 'f8-49', category: 'SQP Trigger', question: 'If a case mentions "computer-based system providing info to managers", which technique?', answer: 'Management Information System (MIS).' },
  { id: 'f8-50', category: 'SQP Trigger', question: 'If a case says "manager compares sales target of 1000 units with actual sales of 950", which step?', answer: 'Step 3: Comparing Actual Performance with Standards.' },
  { id: 'f8-51', category: 'Trap', question: 'Does Controlling eliminate deviations entirely?', answer: 'No. It IDENTIFIES deviations and takes corrective action to minimise them in the future.' },
  { id: 'f8-52', category: 'Trap', question: 'Is "Employee Morale" a Quantitative or Qualitative standard?', answer: 'Qualitative (difficult to measure precisely in numbers).' },
  { id: 'f8-53', category: 'Trap', question: 'What brings the management cycle BACK to the planning function?', answer: 'Controlling (through feedback and corrective action leading to revised plans).' },
  { id: 'f8-54', category: 'Trap', question: 'Is "Budgetary Control" a Traditional or Modern technique?', answer: 'Traditional technique.' },
  { id: 'f8-55', category: 'Trap', question: 'Is "Ratio Analysis" a Traditional or Modern technique?', answer: 'Modern technique.' }
];
