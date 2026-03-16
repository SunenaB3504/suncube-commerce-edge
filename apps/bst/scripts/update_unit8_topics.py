import os

def create_unit8_topics():
    content = """import { TheoryTopic } from '../../types';

export const topics: TheoryTopic[] = [
  {
    id: "controlling-concept",
    title: "Controlling Concept",
    description: "Controlling is the process of ensuring that activities in an organisation are performed as per the plans.",
    content: [
      "**Meaning**",
      "Controlling means ensuring that activities in an organisation are performed as per the plans. It also ensures that an organisation's resources are being used effectively and efficiently for the achievement of predetermined goals.",
      "",
      "**Nature/Characteristics**",
      "1. **Goal Oriented**: Controlling is a goal-oriented function as it ensures that resources are used effectively to achieve goals.",
      "2. **Pervasive**: It is a primary function of every manager at all levels (top, middle, lower).",
      "3. **Continuous Process**: It is not a one-time function but a continuous process bringing the management cycle back to planning.",
      "",
      "**Importance**",
      "1. **Accomplishing Organisational Goals**: Measures progress towards goals and brings to light deviations.",
      "2. **Judging Accuracy of Standards**: Enables management to verify whether standards set are accurate and objective.",
      "3. **Making Efficient Use of Resources**: Seeks to reduce wastage and spoilage of resources.",
      "4. **Improving Employee Motivation**: Ensures employees know what they are expected to do and standards of performance.",
      "5. **Ensuring Order and Discipline**: Creates an atmosphere of order and discipline; minimizes dishonest behaviour.",
      "6. **Facilitating Coordination in Action**: Provides direction to all activities and efforts for achieving organisational goals.",
      "",
      "**Limitations**",
      "1. **Difficulty in Setting Quantitative Standards**: Hard to measure employee morale, job satisfaction, etc.",
      "2. **Little Control on External Factors**: Cannot control government policies, technological changes, etc.",
      "3. **Resistance from Employees**: Employees may see it as a restriction on their freedom.",
      "4. **Costly Affair**: Involves a lot of expenditure, time and effort."
    ],
    visualizations: []
  },
  {
    id: "planning-controlling-relationship",
    title: "Relationship between Planning and Controlling",
    description: "Planning and controlling are inseparable twins of management.",
    content: [
      "**Planning and Controlling are Inseparable**",
      "- Planning without controlling is meaningless. Controlling is blind without planning.",
      "- Planning provides the standards for controlling.",
      "- Controlling ensures that events conform to plans.",
      "",
      "**Prescriptive vs Evaluative**",
      "- Planning is prescriptive (prescribes course of action).",
      "- Controlling is evaluative (checks whether decisions have been translated into desired action).",
      "",
      "**Forward vs Backward Looking**",
      "- **Planning**: Often called forward-looking (looking ahead).",
      "- **Controlling**: Often called backward-looking (postmortem of past activities).",
      "- **Correction**: Both are forward and backward looking. Planning is guided by past experiences (backward). Controlling aims to improve future performance (forward)."
    ],
    visualizations: []
  },
  {
    id: "controlling-process",
    title: "Controlling Process",
    description: "Controlling is a systematic process involving setting standards, measurement, comparison, analysis, and corrective action.",
    content: [
      "**Steps in Controlling Process**",
      "1. **Setting Performance Standards**: Criteria against which actual performance would be measured. Can be quantitative or qualitative.",
      "2. **Measurement of Actual Performance**: Measurement should be objective and reliable (e.g., personal observation, sample checking, reports).",
      "3. **Comparison of Actual Performance with Standards**: Reveals deviation between actual and desired results.",
      "4. **Analysing Deviations**: Determining acceptable range of deviations.",
      "   - **Critical Point Control (CPC)**: Focus on Key Result Areas (KRAs) which are critical to success. 'If anything goes wrong at the critical points, the entire organisation suffers.'",
      "   - **Management by Exception (MBE)**: 'An attempt to control everything results in controlling nothing.' Only significant deviations beyond permissible limits should be brought to notice of management.",
      "5. **Taking Corrective Action**: Final step. Required when deviations go beyond acceptable range. May involve training, resource allocation, or revising standards."
    ],
    visualizations: []
  },
  {
    id: "controlling-techniques",
    title: "Techniques of Managerial Control",
    description: "Methods used by managers to control actual performance.",
    content: [
      "**Traditional Techniques**",
      "- **Personal Observation**: First-hand information by supervisor.",
      "- **Statistical Reports**: Information presented in form of averages, percentages, ratios, etc.",
      "- **Breakeven Analysis**: Technique to study relationship between costs, volume and profits.",
      "- **Budgetary Control**: all operations are planned in advance in the form of budgets and actual results are compared with budgetary standards.",
      "",
      "**Modern Techniques**",
      "- **Return on Investment (ROI)**: Measures connection between profit and investment.",
      "- **Ratio Analysis**: Analysis of financial statements through ratios (Liquidity, Solvency, Turnover, Profitability).",
      "- **Responsibility Accounting**: Different sections are set up as responsibility centres (Cost, Revenue, Profit, Investment centres).",
      "- **Management Audit**: Systematic appraisal of the management methods and performance.",
      "- **PERT and CPM**: Programme Evaluation and Review Technique & Critical Path Method for planning and controlling complex projects.",
      "- **Management Information System (MIS)**: Computer-based information system that provides information/support to managers."
    ],
    visualizations: []
  }
];
"""
    
    target_dir = r"c:\Users\Admin\Neil\bstudies-cbse-class-XII\data\unit8"
    if not os.path.exists(target_dir):
        os.makedirs(target_dir)
        
    with open(os.path.join(target_dir, "topics.ts"), "w", encoding="utf-8") as f:
        f.write(content)

if __name__ == "__main__":
    create_unit8_topics()
