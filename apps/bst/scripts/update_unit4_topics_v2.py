
import os

content = """import { TheoryTopic } from '../../types';

export const topics: TheoryTopic[] = [
  {
    id: 'concept-of-planning',
    title: 'Concept of Planning',
    content: [
      'Planning is deciding in advance what to do and how to do. It is one of the basic managerial functions. Before doing something, the manager must formulate an idea of how to work on a particular task. Thus, planning is closely connected with creativity and innovation.',
      'Planning seeks to bridge the gap between where we are and where we want to go. It involves setting objectives and developing appropriate courses of action to achieve these objectives.',
      'Key Aspects include: Setting Objectives (Determining what needs to be achieved), Developing Courses of Action (Deciding how to achieve the objectives), Selection (Making a choice from alternative courses of action), and Bridging the gap (Links the present position to the desired future state).'
    ]
  },
  {
    id: 'importance-of-planning',
    title: 'Importance of Planning',
    content: [
      '1. Provides Direction: By stating in advance how work is to be done, planning provides direction for action. It ensures that goals generally stated are clearly defined so that they act as a guide for deciding what action should be taken and in which direction.',
      '2. Reduces Risks of Uncertainty: Planning enables a manager to look ahead and anticipate changes. By deciding in advance the tasks to be performed, planning shows the way to deal with changes and uncertain events.',
      '3. Reduces Overlapping and Wasteful Activities: It serves as the basis of coordinating the activities and efforts of different divisions, departments and individuals. It helps in avoiding confusion and misunderstanding.',
      '4. Promotes Innovative Ideas: Since planning is the first function of management, new ideas can take the shape of concrete plans. It is the most challenging activity for the management as it guides all future actions.',
      '5. Facilitates Decision Making: Planning helps the manager to look into the future and make a choice from amongst various alternative courses of action.',
      '6. Establishes Standards for Controlling: Planning provides the goals or standards against which actual performance is measured. Therefore, planning provides the basis of control.'
    ]
  },
  {
    id: 'features-of-planning',
    title: 'Features of Planning',
    content: [
      'Focuses on Achieving Objectives: Planning is purposeful and has no meaning unless it contributes to the achievement of predetermined organisational goals.',
      'Primary Function of Management: It lays down the base for other functions of management (organising, staffing, directing, controlling). This is referred to as the "primacy of planning".',
      'Pervasive: It is required at all levels of management as well as in all departments. It is not an exclusive function of top management.',
      'Continuous: Plans are prepared for a specific period. At the end of that period, there is a need for a new plan based on new requirements and future conditions.',
      'Futuristic: It essentially involves looking ahead and preparing for the future. It is regarded as a forward-looking function based on forecasting.',
      'Involves Decision Making: It essentially involves choice from among various alternatives and activities.',
      'Mental Exercise: It requires application of the mind involving foresight, intelligent imagination and sound judgement. It is an intellectual activity.'
    ]
  },
  {
    id: 'limitations-of-planning',
    title: 'Limitations of Planning',
    content: [
      '1. Leads to Rigidity: Specific goals to be achieved within a specific time frame may not allow managers to be flexible enough to cope with changed circumstances.',
      '2. May Not Work in Dynamic Environment: The business environment is dynamic. Planning cannot foresee everything and thus, there may be obstacles to effective planning in a rapidly changing environment.',
      '3. Reduces Creativity: Middle management and other decision makers are often not allowed to deviate from plans, which reduces their initiative and creativity.',
      '4. Involves Huge Costs: Costs involved in formulation (time, money, scientific calculations, boardroom meetings) may sometimes not justify the benefits derived.',
      '5. Time-Consuming Process: Ideally, plans take time to draw up, sometimes leaving little time for their implementation.',
      '6. Does Not Guarantee Success: Relying on previously tried and tested successful plans does not guarantee success again, as unknown factors may have changed. It can lead to a false sense of security.'
    ]
  },
  {
    id: 'planning-process',
    title: 'Planning Process',
    content: [
      '1. Setting Objectives: The first step is setting objectives for the entire organisation and each department. Objectives specify what the organisation wants to achieve.',
      '2. Developing Premises: Planning is concerned with the future which is uncertain. The manager is required to make certain assumptions about the future, known as premises (e.g., forecasts).',
      '3. Identifying Alternative Courses of Action: Once objectives are set and assumptions made, alternative ways to act and achieve objectives should be identified.',
      '4. Evaluating Alternative Courses: Weighing the pros and cons of each alternative. The positive and negative aspects of each proposal need to be evaluated in the light of the objective to be achieved.',
      '5. Selecting an Alternative: This is the real point of decision making. The best plan (most feasible, profitable, least negative consequences) has to be adopted and implemented.',
      '6. Implementing the Plan: Putting the plan into action, i.e., doing what is required (e.g., organising for labour and purchase of machinery).',
      '7. Follow-up Action: Monitoring the plans to ensure that objectives are achieved and activities are performed according to schedule.'
    ]
  },
  {
    id: 'types-of-plans',
    title: 'Types of Plans',
    content: [
      'Plans can be classified as Single-use Plans (for one-time events like budgets, programmes) or Standing Plans (for regular activities like policies, procedures, rules).',
      '1. Objectives: The desired future position that the management would like to reach. They are the end result of activities.',
      '2. Strategy: A comprehensive plan for accomplishing an organisation\\'s objectives. It includes determining long-term objectives, adopting a course of action, and allocating resources.',
      '3. Policy: General statements that guide thinking or channelise energies towards a particular direction. They provide a basis for interpreting strategy.',
      '4. Procedure: Routine steps on how to carry out activities. They detail the exact manner in which any work is to be performed in a chronological order.',
      '5. Method: Provides the prescribed ways or manner in which a task has to be performed considering the objective. It deals with a task comprising one step of a procedure.',
      '6. Rule: Specific statements that inform what is to be done. They do not allow for any flexibility or discretion.',
      '7. Programme: Detailed statements about a project which outlines the objectives, policies, procedures, rules, tasks, human and physical resources required and the budget.',
      '8. Budget: A statement of expected results expressed in numerical terms. It is a plan which quantifies future facts and figures.'
    ]
  }
];
"""

with open('c:\\Users\\Admin\\Neil\\bstudies-cbse-class-XII\\data\\unit4\\topics.ts', 'w', encoding='utf-8') as f:
    f.write(content)

print("Successfully wrote data/unit4/topics.ts")
