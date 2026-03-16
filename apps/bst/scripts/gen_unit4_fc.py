import os

file_content = """import { Chapter } from '../../types';

export const flashcards: Chapter['flashcards'] = [
  {
    id: 'fc-u4-1',
    question: 'What is the primary function of planning?',
    answer: 'Planning provides the basis for all other management functions (Organising, Staffing, Directing, Controlling). This is called the Primacy of Planning.',
    category: 'Concept'
  },
  {
    id: 'fc-u4-2',
    question: 'Define "Planning Premises".',
    answer: 'Planning premises are the assumptions made about the future on the basis of which plans are drawn. They can be internal (policies, resources) or external (political, economic environment).',
    category: 'Definition'
  },
  {
    id: 'fc-u4-3',
    question: 'Why is planning considered "Pervasive"?',
    answer: 'Because it is required at all levels of management and in all departments of the organisation. It is not an exclusive function of top management.',
    category: 'Reasoning'
  },
  {
    id: 'fc-u4-4',
    question: 'Differentiate between "Rule" and "Policy".',
    answer: 'Policy is a general guide to thinking/decision-making (allows discretion). Rule is a specific statement telling what is to be done (allows no discretion).',
    category: 'Distinction'
  },
  {
    id: 'fc-u4-5',
    question: 'How does planning reduce the risk of uncertainty?',
    answer: 'By deciding in advance what tasks to perform, planning allows managers to anticipate changes and develop responses to them, rather than reacting to emergencies.',
    category: 'Benefit'
  },
  {
    id: 'fc-u4-6',
    question: 'What is a "Budget"?',
    answer: 'A budget is a plan which states expected results of a given future period in numerical terms.',
    category: 'Definition'
  },
  {
    id: 'fc-u4-7',
    question: 'Explain "Follow-up Action" in the planning process.',
    answer: 'It involves monitoring the plans to ensure that activities are performed according to the schedule and objectives are achieved.',
    category: 'Process'
  },
  {
    id: 'fc-u4-8',
    question: 'Why is planning called a "Mental Exercise"?',
    answer: 'Because it requires application of the mind, involving foresight, intelligent imagination, and sound judgement to choose between alternatives.',
    category: 'Feature'
  },
  {
    id: 'fc-u4-9',
    question: 'What is the "Rigidity" limitation of planning?',
    answer: 'Once plans are made, managers may not be in a position to change them. This inflexibility can be detrimental in a dynamic environment.',
    category: 'Limitation'
  },
  {
    id: 'fc-u4-10',
    question: 'Is Planning a one-time process?',
    answer: 'No, it is a Continuous Process. Plans are made for a specific period, and new plans are needed at the end of that period based on new conditions.',
    category: 'Feature'
  },
  {
    id: 'fc-u4-11',
    question: 'Which step comes after "Setting Objectives"?',
    answer: 'Developing Premises (Making assumptions about the future).',
    category: 'Process'
  },
  {
    id: 'fc-u4-12',
    question: 'Give an example of a Single-use Plan.',
    answer: 'Budget for an Annual Sales Conference or a specific Programme.',
    category: 'Example'
  },
  {
    id: 'fc-u4-13',
    question: 'What is "Method" in types of plans?',
    answer: 'Method prescribes the specific manner in which a task has to be performed. It deals with a task comprising one step of a procedure.',
    category: 'Definition'
  },
  {
    id: 'fc-u4-14',
    question: 'Does planning guarantee success?',
    answer: 'No. Planning provides a path, but success depends on proper implementation. Relying on previously successful plans in a changed environment can lead to failure.',
    category: 'Limitation'
  },
  {
    id: 'fc-u4-15',
    question: 'Define "Strategy".',
    answer: 'Strategy is a comprehensive plan for accomplishing organisation objectives. It includes long-term objectives, adopting a course of action, and resource allocation.',
    category: 'Definition'
  },
  {
    id: 'fc-u4-trap-1',
    category: 'Tricky Concept',
    question: 'Is "Strategy" a Standing Plan?',
    answer: 'NO. It is a Comprehensive Plan, often treated distinctly or linked to long-term single-use situations in exams.'
  },
  {
    id: 'fc-u4-trap-2',
    category: 'Tricky Concept',
    question: 'What is the "Real point of decision making"?',
    answer: 'Step 5: Selecting an Alternative. This is where the choice is actually made.'
  },
  {
    id: 'fc-u4-trap-3',
    category: 'Tricky Concept',
    question: 'Does Planning prevent problems?',
    answer: 'NO. It only "Reduces the risk of uncertainty". It cannot prevent natural or external problems.'
  },
  {
    id: 'fc-u4-19',
    category: 'Concept',
    question: 'What is the basic meaning of Planning?',
    answer: 'Planning is deciding in advance what to do, how to do it, when to do it, and who is to do it. It bridges the gap between where we are and where we want to go.'
  },
  {
    id: 'fc-u4-20',
    category: 'Feature',
    question: 'How is Planning "Goal-Oriented"?',
    answer: 'Planning always starts with the determination of objectives. All activities are then directed towards achieving these specific goals.'
  },
  {
    id: 'fc-u4-21',
    category: 'Feature',
    question: 'Explain Planning as "Futuristic" or "Forward-Looking".',
    answer: 'Planning involves looking ahead and preparing for the future. It requires forecasting future events and conditions to plan effectively.'
  },
  {
    id: 'fc-u4-22',
    category: 'Feature',
    question: 'Why does Planning involve "Decision Making"?',
    answer: 'Because planning essentially involves choosing the best alternative among several available courses of action to achieve an objective.'
  },
  {
    id: 'fc-u4-23',
    category: 'Benefit',
    question: 'How does Planning "Provide Direction"?',
    answer: 'By stating in advance how work is to be done, planning provides direction for action. Employees know what the organisation has to do and what they must do.'
  },
  {
    id: 'fc-u4-24',
    category: 'Benefit',
    question: 'How does Planning reduce overlapping and wasteful activities?',
    answer: 'It coordinates the efforts of different divisions and individuals. Clear plans avoid confusion and misunderstanding, ensuring smooth operations.'
  },
  {
    id: 'fc-u4-25',
    category: 'Benefit',
    question: 'How does Planning promote innovation?',
    answer: 'Since planning is a mental exercise, managers must constantly think of new ideas, new methods, and better ways of doing things, which encourages innovation.'
  },
  {
    id: 'fc-u4-26',
    category: 'Benefit',
    question: 'How does Planning establish standards for Controlling?',
    answer: 'Planning provides the predetermined goals (standards) against which actual performance is measured in the controlling process.'
  },
  {
    id: 'fc-u4-27',
    category: 'Limitation',
    question: 'Explain how Planning "Involves Huge Costs".',
    answer: 'Drafting plans requires extensive research, environmental scanning, and experts’ fees. The costs incurred sometimes may not justify the benefits derived.'
  },
  {
    id: 'fc-u4-28',
    category: 'Limitation',
    question: 'Why is Planning considered "Time-Consuming"?',
    answer: 'The collection of data, analysis, and evaluation of alternatives takes a lot of time. In emergencies, there may not be enough time to plan.'
  },
  {
    id: 'fc-u4-29',
    category: 'Limitation',
    question: 'How does Planning "Reduce Creativity"?',
    answer: 'Once plans are made by top management, middle and lower managers just implement them blindly. They stop taking initiative or thinking of new ideas.'
  },
  {
    id: 'fc-u4-30',
    category: 'Limitation',
    question: 'Why does Planning fail in a dynamic environment?',
    answer: 'The business environment is constantly changing (political, economic, tech). It becomes difficult to forecast accurately, making rigid plans ineffective.'
  },
  {
    id: 'fc-u4-31',
    category: 'Process',
    question: 'What is the First Step in the Planning Process?',
    answer: 'Setting Objectives: Specifying exactly what the organisation wants to achieve in clear, measurable terms.'
  },
  {
    id: 'fc-u4-32',
    category: 'Process',
    question: 'What is the Third Step in the Planning Process?',
    answer: 'Identifying alternative courses of action: Finding out the different paths or methods available to achieve the set objectives.'
  },
  {
    id: 'fc-u4-33',
    category: 'Process',
    question: 'What happens in "Evaluating alternatives"? (Step 4)',
    answer: 'Managers weigh the pros and cons (positive and negative aspects) of each alternative in light of their feasibility and consequences.'
  },
  {
    id: 'fc-u4-34',
    category: 'Process',
    question: 'What happens in "Implementing the plan"? (Step 6)',
    answer: 'This is the step where other managerial functions come into play. It means putting the plan into action, allocating resources, and assigning tasks.'
  },
  {
    id: 'fc-u4-35',
    category: 'Definition',
    question: 'What is a "Standing Plan"?',
    answer: 'A plan that is used for activities that occur regularly over a period of time. It is designed to ensure smooth internal operations. (e.g., Policy, Procedure, Rule)'
  },
  {
    id: 'fc-u4-36',
    category: 'Definition',
    question: 'What is a "Single-Use Plan"?',
    answer: 'A plan developed for a one-time event or project. Such a course of action is not likely to be repeated in future. (e.g., Programme, Budget)'
  },
  {
    id: 'fc-u4-37',
    category: 'Definition',
    question: 'Define "Objective" as a type of plan.',
    answer: 'Objectives are the end results towards which all activities are directed. They should be quantitative, measurable, and achievable.'
  },
  {
    id: 'fc-u4-38',
    category: 'Definition',
    question: 'What is a "Procedure"?',
    answer: 'A procedure consists of routine steps on how to carry out activities. They detail the exact chronological manner in which work is to be performed.'
  },
  {
    id: 'fc-u4-39',
    category: 'Definition',
    question: 'What is a "Programme"?',
    answer: 'A programme is a detailed statement about a project which outlines the objectives, policies, procedures, rules, tasks, and budget to implement any course of action.'
  },
  {
    id: 'fc-u4-40',
    category: 'Distinction',
    question: 'Difference: Policy vs Procedure.',
    answer: 'Policy is a general guide to thinking (e.g., "We hire only local talent"). Procedure is a guide to action specifying chronological steps (e.g., Step 1: Advertisement, Step 2: Interview).'
  },
  {
    id: 'fc-u4-41',
    category: 'Distinction',
    question: 'Difference: Procedure vs Method.',
    answer: 'A procedure involves a sequence of steps for a whole task. A method is the prescribed way of performing just one specific step of a procedure.'
  },
  {
    id: 'fc-u4-42',
    category: 'Distinction',
    question: 'Difference: Rule vs Method.',
    answer: 'Rule demands strict compliance and dictates what should/should not be done. Method acts as a guide on HOW to perform a task efficiently.'
  },
  {
    id: 'fc-u4-43',
    category: 'Distinction',
    question: 'Difference: Objective vs Strategy.',
    answer: 'Objective is the destination or end-point. Strategy is the comprehensive path, including resource allocation, designed to reach that destination against competition.'
  },
  {
    id: 'fc-u4-44',
    category: 'Example',
    question: 'Is "No Smoking in the factory" a Rule or a Policy?',
    answer: 'It is a Rule. It specifies exactly what is not to be done and allows no discretion or exception.'
  },
  {
    id: 'fc-u4-45',
    category: 'Example',
    question: 'If a school plans to organize a one-time Annual Sports Day, what type of plan will they make?',
    answer: 'A Single-use Plan, specifically a Programme (which will include a Budget).'
  },
  {
    id: 'fc-u4-46',
    category: 'Tricky Concept',
    question: 'Which type of plan is neither single-use nor standing?',
    answer: 'Objectives and Strategy are often considered distinct from single-use and standing plans as they form the broader framework.'
  },
  {
    id: 'fc-u4-47',
    category: 'Benefit',
    question: 'If Planning is properly done, what happens to "Controlling"?',
    answer: 'Controlling becomes easier and meaningful because planning provides the standards to evaluate whether the actual results match the desired results.'
  },
  {
    id: 'fc-u4-48',
    category: 'Example',
    question: 'A manager decides to sell goods only on a cash basis. What type of plan is this?',
    answer: 'Policy. It provides a general parameter within which the sales team must make decisions.'
  },
  {
    id: 'fc-u4-49',
    category: 'Process',
    question: 'During which step do managers prepare derivative plans?',
    answer: '"Implementing the plan" (Step 6). Minor/derivative plans (like buying equipment) are made to support the main plan.'
  },
  {
    id: 'fc-u4-50',
    category: 'Feature',
    question: 'Why is Planning called an "Intellectual Activity"?',
    answer: 'Because it requires logical and systematic thinking rather than guess work or wishful thinking. It deals with foresight and judgment.'
  },
  {
    id: 'fc-u4-51',
    category: 'SQP Trigger',
    question: 'If an SQP case mentions "anticipating changes and avoiding being caught by surprise", which importance of planning is highlighted?',
    answer: 'Planning reduces the risk of uncertainty.'
  },
  {
    id: 'fc-u4-52',
    category: 'SQP Trigger',
    question: 'If an SQP case mentions "managers blindly following the same old successful plan and failing", which limitation is this?',
    answer: 'Planning does not guarantee success (Relying on past success in a dynamic environment).'
  }
];
"""

with open(r'c:\Users\Admin\Neil\bstudies-cbse-class-XII\data\unit4\flashcards.ts', 'w', encoding='utf-8') as f:
    f.write(file_content)

print("Unit 4 Flashcards expanded to 52 items successfully.")
