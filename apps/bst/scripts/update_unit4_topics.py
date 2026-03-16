
import os

content = """import { Topic } from '../../types';

export const topics: Topic[] = [
  {
    id: 'concept-of-planning',
    title: 'Concept of Planning',
    content: `
      <h3>Definition</h3>
      <p>Planning is deciding in advance what to do and how to do. It is one of the basic managerial functions. Before doing something, the manager must formulate an idea of how to work on a particular task. Thus, planning is closely connected with creativity and innovation.</p>
      
      <p>Planning seeks to bridge the gap between where we are and where we want to go. It involves setting objectives and developing appropriate courses of action to achieve these objectives.</p>
      
      <h3>Key Aspects</h3>
      <ul>
        <li><strong>Setting Objectives:</strong> Determining what needs to be achieved.</li>
        <li><strong>Developing Courses of Action:</strong> Deciding how to achieve the objectives.</li>
        <li><strong>Selection:</strong> Making a choice from alternative courses of action.</li>
        <li><strong>Bridge:</strong> Links the present position to the desired future state.</li>
      </ul>
    `
  },
  {
    id: 'importance-of-planning',
    title: 'Importance of Planning',
    content: `
      <p>Planning is essential for the following reasons:</p>
      
      <div class="space-y-4">
        <div class="p-4 bg-blue-50 rounded-lg">
          <h4 class="font-bold text-blue-800">1. Provides Direction</h4>
          <p>By stating in advance how work is to be done, planning provides direction for action. It ensures that goals generally stated are clearly defined so that they act as a guide for deciding what action should be taken and in which direction.</p>
        </div>
        
        <div class="p-4 bg-green-50 rounded-lg">
          <h4 class="font-bold text-green-800">2. Reduces Risks of Uncertainty</h4>
          <p>Planning enables a manager to look ahead and anticipate changes. By deciding in advance the tasks to be performed, planning shows the way to deal with changes and uncertain events.</p>
        </div>
        
        <div class="p-4 bg-yellow-50 rounded-lg">
          <h4 class="font-bold text-yellow-800">3. Reduces Overlapping and Wasteful Activities</h4>
          <p>It serves as the basis of coordinating the activities and efforts of different divisions, departments and individuals. It helps in avoiding confusion and misunderstanding.</p>
        </div>

        <div class="p-4 bg-purple-50 rounded-lg">
          <h4 class="font-bold text-purple-800">4. Promotes Innovative Ideas</h4>
          <p>Since planning is the first function of management, new ideas can take the shape of concrete plans. It is the most challenging activity for the management as it guides all future actions.</p>
        </div>

        <div class="p-4 bg-red-50 rounded-lg">
          <h4 class="font-bold text-red-800">5. Facilitates Decision Making</h4>
          <p>Byp lanning helps the manager to look into the future and make a choice from amongst various alternative courses of action.</p>
        </div>

        <div class="p-4 bg-indigo-50 rounded-lg">
          <h4 class="font-bold text-indigo-800">6. Establishes Standards for Controlling</h4>
          <p>Planning provides the goals or standards against which actual performance is measured. Therefore, planning provides the basis of control.</p>
        </div>
      </div>
    `
  },
  {
    id: 'features-of-planning',
    title: 'Features of Planning',
    content: `
      <ul class="list-disc pl-5 space-y-2">
        <li><strong>Focuses on Achieving Objectives:</strong> Planning is purposeful and has no meaning unless it contributes to the achievement of predetermined organisational goals.</li>
        <li><strong>Primary Function of Management:</strong> It lays down the base for other functions of management (organising, staffing, directing, controlling). This is referred to as the "primacy of planning".</li>
        <li><strong>Pervasive:</strong> It is required at all levels of management as well as in all departments. It is not an exclusive function of top management.</li>
        <li><strong>Continuous:</strong> Plans are prepared for a specific period. At the end of that period, there is a need for a new plan based on new requirements and future conditions.</li>
        <li><strong>Futuristic:</strong> It essentially involves looking ahead and preparing for the future. It is regarded as a forward-looking function based on forecasting.</li>
        <li><strong>Involves Decision Making:</strong> It essentially involves choice from among various alternatives and activities.</li>
        <li><strong>Mental Exercise:</strong> It requires application of the mind involving foresight, intelligent imagination and sound judgement. It is an intellectual activity.</li>
      </ul>
    `
  },
  {
    id: 'limitations-of-planning',
    title: 'Limitations of Planning',
    content: `
      <p>Despite being essential, planning has several limitations:</p>
      
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        <div class="border p-4 rounded bg-gray-50">
          <h4 class="font-bold">1. Leads to Rigidity</h4>
          <p>Specific goals to be achieved within a specific time frame may not allow managers to be flexible enough to cope with changed circumstances.</p>
        </div>
        
        <div class="border p-4 rounded bg-gray-50">
          <h4 class="font-bold">2. May Not Work in Dynamic Environment</h4>
          <p>The business environment is dynamic. Planning cannot foresee everything and thus, there may be obstacles to effective planning in a rapidly changing environment.</p>
        </div>
        
        <div class="border p-4 rounded bg-gray-50">
          <h4 class="font-bold">3. Reduces Creativity</h4>
          <p>Middle management and other decision makers are often not allowed to deviate from plans, which reduces their initiative and creativity.</p>
        </div>
        
        <div class="border p-4 rounded bg-gray-50">
          <h4 class="font-bold">4. Involves Huge Costs</h4>
          <p>Costs involved in formulation (time, money, scientific calculations, boardroom meetings) may sometimes not justify the benefits derived.</p>
        </div>

        <div class="border p-4 rounded bg-gray-50">
          <h4 class="font-bold">5. Time-Consuming Process</h4>
          <p>Ideally, plans take time to draw up, sometimes leaving little time for their implementation.</p>
        </div>

        <div class="border p-4 rounded bg-gray-50">
          <h4 class="font-bold">6. Does Not Guarantee Success</h4>
          <p>Relying on previously tried and tested successful plans does not guarantee success again, as unknown factors may have changed. It can lead to a false sense of security.</p>
        </div>
      </div>
    `
  },
  {
    id: 'planning-process',
    title: 'Planning Process',
    content: `
      <ol class="list-decimal pl-5 space-y-4">
        <li>
          <strong>Setting Objectives:</strong> The first step is setting objectives for the entire organisation and each department. Objectives specify what the organisation wants to achieve.
        </li>
        <li>
          <strong>Developing Premises:</strong> Planning is concerned with the future which is uncertain. The manager is required to make certain assumptions about the future, known as premises (e.g., forecasts).
        </li>
        <li>
          <strong>Identifying Alternative Courses of Action:</strong> Once objectives are set and assumptions made, alternative ways to act and achieve objectives should be identified.
        </li>
        <li>
          <strong>Evaluating Alternative Courses:</strong> Weighing the pros and cons of each alternative. The positive and negative aspects of each proposal need to be evaluated in the light of the objective to be achieved.
        </li>
        <li>
          <strong>Selecting an Alternative:</strong> This is the real point of decision making. The best plan (most feasible, profitable, least negative consequences) has to be adopted and implemented.
        </li>
        <li>
          <strong>Implementing the Plan:</strong> Putting the plan into action, i.e., doing what is required (e.g., organising for labour and purchase of machinery).
        </li>
        <li>
          <strong>Follow-up Action:</strong> Monitoring the plans to ensure that objectives are achieved and activities are performed according to schedule.
        </li>
      </ol>
    `
  },
  {
    id: 'types-of-plans',
    title: 'Types of Plans',
    content: `
      <p>Plans can be classified based on use and length of planning period.</p>
      
      <h3>Single-use vs. Standing Plans</h3>
      <ul class="list-disc pl-5 mb-4">
        <li><strong>Single-use Plan:</strong> Developed for a one-time event or project (e.g., budgets, programmes, projects).</li>
        <li><strong>Standing Plan:</strong> Used for activities that occur regularly over a period of time (e.g., policies, procedures, methods, rules).</li>
      </ul>

      <h3>Specific Types of Plans</h3>
      <div class="space-y-4">
        <div class="p-3 border rounded">
          <h4 class="font-semibold text-blue-700">1. Objectives</h4>
          <p>The desired future position that the management would like to reach. They are the end result of activities.</p>
        </div>
        
        <div class="p-3 border rounded">
          <h4 class="font-semibold text-blue-700">2. Strategy</h4>
          <p>A comprehensive plan for accomplishing an organisation\\'s objectives. It includes determining long-term objectives, adopting a course of action, and allocating resources.</p>
        </div>
        
        <div class="p-3 border rounded">
          <h4 class="font-semibold text-blue-700">3. Policy</h4>
          <p>General statements that guide thinking or channelise energies towards a particular direction. They provide a basis for interpreting strategy.</p>
        </div>
        
        <div class="p-3 border rounded">
          <h4 class="font-semibold text-blue-700">4. Procedure</h4>
          <p>Routine steps on how to carry out activities. They detail the exact manner in which any work is to be performed in a chronological order.</p>
        </div>

        <div class="p-3 border rounded">
          <h4 class="font-semibold text-blue-700">5. Method</h4>
          <p>Provides the prescribed ways or manner in which a task has to be performed considering the objective. It deals with a task comprising one step of a procedure.</p>
        </div>

        <div class="p-3 border rounded">
          <h4 class="font-semibold text-blue-700">6. Rule</h4>
          <p>Specific statements that inform what is to be done. They do not allow for any flexibility or discretion.</p>
        </div>

        <div class="p-3 border rounded">
          <h4 class="font-semibold text-blue-700">7. Programme</h4>
          <p>Detailed statements about a project which outlines the objectives, policies, procedures, rules, tasks, human and physical resources required and the budget.</p>
        </div>

        <div class="p-3 border rounded">
          <h4 class="font-semibold text-blue-700">8. Budget</h4>
          <p>A statement of expected results expressed in numerical terms. It is a plan which quantifies future facts and figures.</p>
        </div>
      </div>
    `
  }
];
"""

with open('c:\\Users\\Admin\\Neil\\bstudies-cbse-class-XII\\data\\unit4\\topics.ts', 'w', encoding='utf-8') as f:
    f.write(content)

print("Successfully wrote data/unit4/topics.ts")
