import { TheoryTopic } from '../../types';

export const topics: TheoryTopic[] = [
  {
    id: "controlling-concept",
    title: "Controlling Concept",
    description: "Controlling is the process of ensuring that activities in an organisation are performed as per the plans.",
    content: [
      "**Meaning**",
      "Controlling is the process of ensuring that activities in an organisation are performed as per the plans. It involves comparing actual performance with standards, finding deviations, and taking corrective actions.",
      "",
      "**Nature/Characteristics of Controlling**",
      "1. **Goal Oriented**: Controlling is a goal-oriented function as it ensures that resources are used effectively to achieve pre-determined organizational goals.",
      "2. **Pervasive**: It is a primary function of every manager at all levels (top, middle, lower). It is not just the responsibility of the top management.",
      "3. **Continuous Process**: It is not a one-time function but a continuous process that involves constant monitoring of performance.",
      "4. **Both Backward and Forward Looking**: It is backward-looking as it reviews past performance and forward-looking as it aims to improve future performance based on past experiences.",
      "",
      "**Importance of Controlling**",
      "1. **Accomplishing Organisational Goals**: It measures progress towards organizational goals and brings to light deviations, allowing for corrective action.",
      "2. **Judging Accuracy of Standards**: An effective control system enables management to verify whether the standards set are accurate and objective in the face of changes.",
      "3. **Making Efficient Use of Resources**: By exercising control, a manager seeks to reduce wastage and spoilage of resources. Each activity is performed according to prescribed standards.",
      "4. **Improving Employee Motivation**: A good control system ensures that employees know in advance what they are expected to do and what are the standards of performance.",
      "5. **Ensuring Order and Discipline**: Controlling creates an atmosphere of order and discipline in the organisation. It helps to minimize dishonest behaviour by employees.",
      "6. **Facilitating Coordination in Action**: Control provides direction to all activities and efforts for achieving organisational goals. Each department and employee is governed by pre-set standards.",
      "",
      "**Limitations of Controlling**",
      "1. **Difficulty in Setting Quantitative Standards**: Control system loses some of its effectiveness when standards cannot be defined in quantitative terms (e.g., employee morale, job satisfaction).",
      "2. **Little Control on External Factors**: An enterprise cannot control external factors such as government policies, technological changes, competition, etc.",
      "3. **Resistance from Employees**: Control is often resisted by employees. They may see it as a restriction on their freedom.",
      "4. **Costly Affair**: Control is a costly affair as it involves a lot of expenditure, time, and effort. Small enterprises may not be able to afford an elaborate control system."
    ],
    visualizations: []
  },
  {
    id: "planning-controlling-relationship",
    title: "Relationship between Planning and Controlling",
    description: "Planning and controlling are inseparable twins of management.",
    content: [
      "**Planning and Controlling are Inseparable**",
      "- Planning and controlling are inseparable twins of management. A system of control presupposes the existence of certain standards.",
      "- Planning without controlling is meaningless as there is no way to check if plans are being followed.",
      "- Controlling is blind without planning because there are no standards to compare actual performance against.",
      "",
      "**Planning is Prescriptive while Controlling is Evaluative**",
      "- Planning is prescriptive because it prescribes a course of action to be followed for achieving objectives.",
      "- Controlling is evaluative because it checks whether decisions have been translated into desired action.",
      "",
      "**Both are Forward and Backward Looking**",
      "- **Planning is Forward-Looking**: It involves looking ahead and preparing for the future.",
      "- **Planning is Backward-Looking**: It is guided by past experiences and performance data.",
      "- **Controlling is Backward-Looking**: It is like a post-mortem of past activities to find deviations.",
      "- **Controlling is Forward-Looking**: It aims to improve future performance by taking corrective actions based on past deviations."
    ],
    visualizations: [
      {
        id: 'planning-controlling-cycle',
        title: 'Planning-Controlling Cycle',
        type: 'flow',
        data: {
          nodes: [
            { id: 'Plan', label: 'Planning (Standards)' },
            { id: 'Act', label: 'Action/Implementation' },
            { id: 'Control', label: 'Controlling (Check)' },
            { id: 'Correct', label: 'Corrective Action' }
          ],
          edges: [
            { from: 'Plan', to: 'Act', label: 'Basis' },
            { from: 'Act', to: 'Control', label: 'Input' },
            { from: 'Control', to: 'Correct', label: 'Feedback' },
            { from: 'Correct', to: 'Plan', label: 'Improve Future' }
          ]
        }
      }
    ]
  },
  {
    id: "controlling-process",
    title: "Controlling Process",
    description: "Controlling is a systematic process involving setting standards, measurement, comparison, analysis, and corrective action.",
    content: [
      "**Steps in Controlling Process**",
      "1. **Setting Performance Standards**: Standards are the benchmarks towards which an organization strives to work. They should be flexible enough to be modified with changes. (e.g., Target profit, Production units).",
      "2. **Measurement of Actual Performance**: Performance should be measured in an objective and reliable manner. Techniques include personal observation, sample checking, and performance reports.",
      "3. **Comparison of Actual Performance with Standards**: This step involves comparing actual results with planned standards to find out deviations.",
      "4. **Analysing Deviations**: Some deviation in performance can be expected in all activities. It is important to determine the acceptable range of deviation.",
      "   - **Critical Point Control (CPC)**: Control should focus on Key Result Areas (KRAs) which are critical to the success of an organisation. If anything goes wrong at critical points, the entire organisation suffers.",
      "   - **Management by Exception (MBE)**: If you try to control everything, you may end up controlling nothing. Only significant deviations which go beyond the permissible limit should be brought to the notice of management.",
      "5. **Taking Corrective Action**: The final step is taking corrective action. No corrective action is required when deviations are within acceptable limits. Actions may include training, additional resources, or revising the standards if they are unattainable."
    ],
    visualizations: [
      {
        id: 'control-process-loop',
        title: 'Controlling Process Cycle',
        type: 'flow',
        caption: 'A continuous loop of measurement and correction',
        data: {
          nodes: [
            { id: '1', label: '1. Set Standards' },
            { id: '2', label: '2. Measure Performance' },
            { id: '3', label: '3. Compare' },
            { id: '4', label: '4. Analyse (CPC/MBE)' },
            { id: '5', label: '5. Corrective Action' }
          ],
          edges: [
            { from: '1', to: '2' }, { from: '2', to: '3' },
            { from: '3', to: '4', label: 'Find Deviation' },
            { from: '4', to: '5', label: 'If Significant' },
            { from: '5', to: '1', label: 'Feedback Loop' }
          ]
        }
      }
    ]
  },
  {
    id: "controlling-techniques",
    title: "Techniques of Managerial Control",
    description: "Methods used by managers to control actual performance.",
    content: [
      "**Traditional Techniques**",
      "- **Personal Observation**: Enables the manager to collect first-hand information but is time-consuming.",
      "- **Statistical Reports**: Analysis of reports like averages, percentages, and ratios to identify trends.",
      "- **Breakeven Analysis**: Helps in determining the point where there is no profit or loss, focusing on relationship between cost, volume and profit.",
      "- **Budgetary Control**: Operations are planned in advance in the form of budgets and actual results are compared with budgetary standards. Types include Sales budget, Production budget, Cash budget, etc.",
      "",
      "**Modern Techniques**",
      "- **Return on Investment (ROI)**: Provides a judge of the overall performance of an enterprise (Net Income / Total Investment).",
      "- **Ratio Analysis**: Calculation of various ratios like Liquidity ratios (Current/Quick), Solvency ratios (Debt-Equity), and Profitability ratios (Gross profit/Net profit).",
      "- **Responsibility Accounting**: System of accounting where different sections are set up as 'responsibility centres' (Cost Centre, Revenue Centre, Profit Centre, Investment Centre).",
      "- **Management Audit**: Systematic appraisal of the overall performance of the management of an organisation.",
      "- **PERT and CPM**: Programme Evaluation and Review Technique and Critical Path Method are used for planning and controlling complex projects involving time and resource constraints.",
      "- **Management Information System (MIS)**: Using computers to provide necessary information to managers for decision-making and control."
    ],
    visualizations: []
  }
];
