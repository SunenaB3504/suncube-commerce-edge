import { Chapter } from '../types';

export const unit10: Chapter = {
  id: 10,
  slug: 'training-sports',
  name: 'Training in Sports',
  description: 'Concepts of training, cycle types, and methods to develop Strength, Endurance, Speed, Flexibility, and Coordinative Abilities.',
  topics: [
    {
      id: 'training-intro',
      title: 'Introduction to Sports Training',
      description: 'The systematic process of preparing athletes for highest performance.',
      content: [
        'Definition: A planned and controlled process in which, for achieving a goal, changes in complex motor coordination, physical performance, and behavior are made.',
        'Principles: Continuity, Overload, Specificity, Progression, Individual Differences, Active Involvement, Variety.',
        'Training Cycles:',
        '1. Micro Cycle: Shortest duration (3-10 days, usually 1 week). Focus on immediate specific goals.',
        '2. Meso Cycle: Medium duration (3-6 weeks). Focus on specific fitness components.',
        '3. Macro Cycle: Longest duration (3-12 months). Focus on overall periodization (Prep, Competition, Transition).'
      ],
      visualizations: [
        {
          id: 'v1',
          title: 'Periodization Cycles',
          type: 'table',
          data: {
            headers: ['Cycle', 'Duration', 'Purpose'],
            rows: [
              ['Micro', '3 - 10 Days', 'Immediate acute training load.'],
              ['Meso', '3 - 6 Weeks', 'Development of specific abilities.'],
              ['Macro', '3 - 12 Months', 'Overall season planning.']
            ]
          }
        }
      ]
    },
    {
      id: 'strength-development',
      title: 'Strength: Types & Development',
      description: 'The ability of muscles to overcome resistance.',
      content: [
        'Definition: The ability to overcome resistance or to act against resistance (Singh, 1991).',
        'Types of Strength:',
        '1. Maximum Strength: Ability to overcome maximum resistance in a single repetition (e.g., Weightlifting).',
        '2. Explosive Strength: Ability to overcome resistance as fast as possible; Strength + Speed (e.g., Jumping, Spiking).',
        '3. Strength Endurance: Ability to overcome resistance under fatigue (e.g., Long distance races, Swimming).',
        'Methods to Develop Strength:',
        '• Isometric Exercises (Hettinger & Muller): "Iso" (Same) + "Metric" (Length). Static contraction. No visible movement. (e.g., Plank, Wall Push).',
        '• Isotonic Exercises (De Lorme): "Iso" (Same) + "Tonic" (Tone). Dynamic contraction. Movement is visible. Concentric (Shortening) & Eccentric (Lengthening).',
        '• Isokinetic Exercises (J.J. Perrine): "Iso" (Same) + "Kinetic" (Motion). Constant speed with variable resistance throughout range of motion using special machines (Cybex).'
      ],
      visualizations: [
        {
          id: 'v2',
          title: 'Strength Training Matrix',
          type: 'grid',
          data: [
            { label: 'Isometric', desc: 'Static. Zero physical work. (Rehab)' },
            { label: 'Isotonic', desc: 'Dynamic. Visible movement. (Weights)' },
            { label: 'Isokinetic', desc: 'Machine. Constant Speed. (Sports Power)' }
          ]
        }
      ]
    },
    {
      id: 'endurance-development',
      title: 'Endurance: Types & Development',
      description: 'Ability to resist fatigue for a long duration.',
      content: [
        'Definition: The ability to sustain activity for a long period (Harre, 1986).',
        'Types of Endurance (Nature):',
        '• Basic Endurance: Large muscle movement at slow pace (Jogging 30 mins).',
        '• General Endurance: General sporting movements, not specific to a sport.',
        '• Specific Endurance: Requirement for a specific sport (e.g., Boxer vs Runner).',
        'Types of Endurance (Duration):',
        '1. Speed Endurance: < 45 seconds (Anaerobic energy).',
        '2. Short Term Endurance: 45 sec - 2 mins (Anaerobic + Aerobic).',
        '3. Medium Term Endurance: 2 mins - 11 mins.',
        '4. Long Term Endurance: > 11 mins (Purely Aerobic).',
        'Methods to Develop Endurance:',
        '• Continuous Method: Long duration, no break, low intensity (130-160 BPM).',
        '• Interval Method (Bikila): "Work-Rest-Work". High intensity (180 BPM) with incomplete recovery.',
        '• Fartlek Method (Gosta Holmer): "Speed Play". Variable pace in natural terrain.'
      ],
      visualizations: [
        {
          id: 'v3',
          title: 'Endurance Zones',
          type: 'table',
          data: {
            headers: ['Type', 'Duration', 'Energy System'],
            rows: [
              ['Speed Endurance', '< 45 Sec', 'Anaerobic'],
              ['Short Term', '45s - 2m', 'Mixed'],
              ['Long Term', '> 11 Min', 'Aerobic']
            ]
          }
        }
      ]
    },
    {
      id: 'speed-flexibility',
      title: 'Speed, Flexibility & Coordinative Abilities',
      description: 'Enhancing quickness, range of motion, and precision.',
      content: [
        'SPEED (Types):',
        '1. Reaction Ability: Response to a signal (Simple vs Complex).',
        '2. Acceleration Ability: Reaching high speed from stationary.',
        '3. Movement Speed: Single movement in min time.',
        '4. Locomotor Ability: Maintaining max speed.',
        '5. Speed Endurance: Speed under fatigue.',
        'Methods: Acceleration Runs (Sprints from start) & Pace Runs (Constant speed 800m+).',
        'FLEXIBILITY:',
        '• Passive: With help (Partner). Greater than Active flexibility.',
        '• Active: Without help (Static or Dynamic).',
        'Methods: Ballistic (Rhythm/Swing), Static (Hold), Dynamic (Controlled), PNF (Contract-Relax).',
        'COORDINATIVE ABILITIES (CNS Dependent):',
        'Orientation (Position), Coupling (Linking), Reaction, Balance, Rhythm, Adaptation, Differentation.'
      ],
      visualizations: [
        {
          id: 'v4',
          title: 'Coordinative Abilities',
          type: 'list',
          data: [
            'Orientation (Space/Time)',
            'Coupling (Body Parts)',
            'Reaction (Signal)',
            'Balance (Equilibrium)',
            'Rhythm (Timing)',
            'Adaptation (Situational)',
            'Differentiation (Economy)'
          ]
        }
      ]
    },
    {
      id: 'circuit-training',
      title: 'Circuit Training',
      description: 'A method combining strength and endurance.',
      content: [
        'Definition: Designed by Adamson and Morgan (1957). Series of exercises (stations) performed with minimal rest.',
        'Principle: Alternate muscle groups (Upper Body -> Lower Body -> Core) to allow local recovery.',
        'Benefit: High density, time efficient, general fitness.'
      ],
      visualizations: [
        {
          id: 'v5',
          title: 'Sample Circuit',
          type: 'grid',
          data: [
            { label: 'Stn 1', desc: 'Jumping Jacks' },
            { label: 'Stn 2', desc: 'Push Ups (Upper)' },
            { label: 'Stn 3', desc: 'Squats (Lower)' },
            { label: 'Stn 4', desc: 'Crunches (Core)' },
            { label: 'Stn 5', desc: 'Skipping' }
          ]
        }
      ]
    }
  ],
  flashcards: [
    { id: 'f1', category: 'Strength', question: 'How much work is done in Isometric exercises?', answer: 'Scientifically Zero (Distance moved is 0).' },
    { id: 'f2', category: 'Strength', question: 'Meaning of "Isotonic"?', answer: 'Iso (Same) + Tonic (Tone). Tone remains same, length changes.' },
    { id: 'f3', category: 'Endurance', question: 'Duration of "Speed Endurance"?', answer: 'Less than 45 seconds.' },
    { id: 'f4', category: 'Speed', question: 'What are Pace Runs used for?', answer: 'To maintain maximum speed for long distance (Speed Endurance).' },
    { id: 'f5', category: 'Flexibility', question: 'Which flexibility is greater: Active or Passive?', answer: 'Passive Flexibility.' },
    { id: 'f6', category: 'Flexibility', question: 'What does PNF stand for?', answer: 'Proprioceptive Neuromuscular Facilitation.' },
    { id: 'f7', category: 'Coordination', question: 'Ability to combine movements of different body parts?', answer: 'Coupling Ability.' },
    { id: 'f8', category: 'Methods', question: 'Who developed Circuit Training?', answer: 'Adamson and Morgan (1957).' },
    { id: 'f9', category: 'Endurance', question: 'Key feature of Interval Training?', answer: 'Incomplete recovery (Rest periods are not for full recovery).' },
    { id: 'f10', category: 'Strength', question: 'Example of Isokinetic exercise?', answer: 'Using a Cybex or Biodex machine (Constant speed).' },
    { id: 'f11', category: 'Speed', question: 'Acceleration Runs start from?', answer: 'A stationary position.' },
    { id: 'f12', category: 'Endurance', question: 'Fartlek means?', answer: 'Speed Play (Swedish).' },
    { id: 'f13', category: 'Coordination', question: 'Reaction time depends mainly on?', answer: 'Central Nervous System (CNS) processing.' },
    { id: 'f14', category: 'Strength', question: 'Difference between Explosive and Maximum Strength?', answer: 'Explosive involves speed (Jumping). Maximum is single max effort (Lifting).' },
    { id: 'f15', category: 'Flexibility', question: 'Why is Ballistic stretching risky?', answer: 'Uses momentum/bouncing which can trigger stretch reflex and tear muscle.' },
    { id: 'f16', category: 'Endurance', question: 'Long Term Endurance duration?', answer: 'More than 11 minutes.' },
    { id: 'f17', category: 'Coordination', question: 'Ability to determine body position in space/time?', answer: 'Orientation Ability.' },
    { id: 'f18', category: 'General', question: 'Goal of Sports Training?', answer: 'Preparation for highest performance.' },
    { id: 'f19', category: 'Strength', question: 'Pushing a wall is?', answer: 'Isometric (No length change).' },
    { id: 'f20', category: 'Cycles', question: 'Duration of Macro Cycle?', answer: '3 to 12 Months.' },
    { id: 'f21', category: 'Endurance', question: 'Heart Rate zone for Continuous Method?', answer: '140 - 160 Beats per minute.' },
    { id: 'f22', category: 'Speed', question: 'Ability to respond to a given signal?', answer: 'Reaction Ability.' },
    { id: 'f23', category: 'Coordination', question: 'Ability to adjust movement according to changing situations?', answer: 'Adaptation Ability.' },
    { id: 'f24', category: 'General', question: 'Principle of "Overload"?', answer: 'Training load must be greater than normal to produce adaptation.' },
    { id: 'f25', category: 'Cycles', question: 'Duration of Micro Cycle?', answer: '3 to 10 Days (Weekly).' },
    { id: 'f26', category: 'Strength', question: 'Dynamic Strength is also known as?', answer: 'Isotonic Strength.' }
  ],
  sqp: [
    {
      id: 'q6',
      year: '2023-24',
      paperType: 'Board',
      marks: 1,
      type: 'MCQ',
      question: 'Identify the odd one out regarding Strength: Isometric, Isotonic, Aerobic, Isokinetic.',
      answer: 'Aerobic (It is an endurance method).',
      aiExplanation: 'The others (Iso-...) are strength development methods.'
    },
    {
      id: 'q21',
      year: '2023-24',
      paperType: 'Board',
      marks: 2,
      type: 'SA',
      question: 'Explain Isokinetic exercise with suitable examples.',
      answer: 'Exercises on special machines (Cybex) where speed is constant and resistance adapts to force. Best for power.',
      aiExplanation: 'Mention "Constant Speed" and "Variable Resistance".'
    },
    {
      id: 'q36',
      year: '2023-24',
      paperType: 'Board',
      marks: 5,
      type: 'LA',
      question: 'Define Flexibility. Explain types and any 2 methods to improve it.',
      answer: 'Range of motion. Types: Active, Passive. Methods: PNF (Contract-Relax), Static Stretching.',
      aiExplanation: 'Teacher\'s Voice - Scoring Breakdown (5 Marks):\n1. **Definition (1 Mark):** Define as the "range of motion around a joint".\n2. **Types (2 Marks):** Distinguish between:\n   *   **Passive Flexibility:** Ability to stretch with external help (Partner).\n   *   **Active Flexibility:** Ability to stretch without help (further divided into Static & Dynamic).\n3. **Methods (2 Marks):** Explain any two methods details:\n   *   **PNF (Proprioceptive Neuromuscular Facilitation):** Contract-Relax method, fastest for gains.\n   *   **Ballistic Method:** Rhythmic swinging movements (Caution: Risk of injury).\n   *   **Static Stretching:** Holding the pose for a duration.'
    },
    {
      id: 'q17',
      year: '2024-25',
      paperType: 'SQP',
      marks: 1,
      type: 'MCQ',
      question: 'Which of the following is NOT a type of Endurance?',
      answer: '(b) Static Endurance',
      aiExplanation: 'Endurance is dynamic. Types are Basic, General, Specific, Speed, Short/Med/Long Term.'
    },
    {
      id: 'q18',
      year: '2024-25',
      paperType: 'SQP',
      marks: 1,
      type: 'MCQ',
      question: 'Which coordinative ability is crucial for Judo/Wrestling?',
      answer: 'Coupling Ability (Coordinating hands/feet/trunk together).',
      aiExplanation: 'Complex movements require linking body parts effectively.'
    },
    {
      id: 'q36_25',
      year: '2024-25',
      paperType: 'SQP',
      marks: 5,
      type: 'LA',
      question: 'Define Strength. Differentiate Isometric, Isotonic, and Isokinetic.',
      answer: 'Strength: Muscle force. Isometric: No Move. Isotonic: Visible Move. Isokinetic: Machine/Constant Speed.',
      aiExplanation: 'Teacher\'s Voice - Scoring Breakdown (5 Marks):\n1. **Define Strength (1 Mark):** Ability to overcome resistance.\n2. **Differentiate Types (4 Marks):**\n   *   **Isometric:** Static, No movement (e.g., Plank).\n   *   **Isotonic:** Dynamic, Visible movement (e.g., Push-ups).\n   *   **Isokinetic:** Machine-controlled, Constant speed (e.g., Cybex).\n   *   *Note:* Using Greek roots (Metric=Length, Tonic=Tone, Kinetic=Motion) adds credibility.'
    },
    {
      id: 'q17_26',
      year: '2025-26',
      paperType: 'SQP',
      marks: 1,
      type: 'MCQ',
      question: 'Training involving high intensity work with incomplete recovery is:',
      answer: 'Interval Training.',
      aiExplanation: 'Incomplete recovery (HR ~120bpm) is the hallmark of Interval training.'
    },
    {
      id: 'q24',
      year: '2025-26',
      paperType: 'SQP',
      marks: 2,
      type: 'SA',
      question: 'Suggest methods to improve acceleration.',
      answer: 'Acceleration Runs (Short sprints from stationary start).',
      aiExplanation: 'Focus on explosive power from zero speed.'
    },
    {
      id: 'q36_26',
      year: '2025-26',
      paperType: 'SQP',
      marks: 5,
      type: 'LA',
      question: 'Define Circuit Training. Plan a session with 6 stations.',
      answer: 'Series of stations (Adamson & Morgan). Plan: 1. jacks, 2. pushup, 3. squat, 4. crunch, 5. dip, 6. rope.',
      aiExplanation: 'Teacher\'s Voice - Session Design (5 Marks):\n1. **Definition (1 Mark):** Training method by Adamson & Morgan involving stations.\n2. **The "Checklist" for your Plan (4 Marks):**\n   *   **Diagram:** Draw a circle with 6 stations.\n   *   **Selection:** You must alternate muscle groups (Circuit Principle).\n   *   **Example:** 1. Jacks (Warmup) -> 2. Pushups (Upper) -> 3. Squats (Lower) -> 4. Crunches (Core) -> 5. Dips (Upper) -> 6. Rope Skipping (Cardio).'
    },
    {
      id: 'q5-2024-sqp-assertion',
      year: '2023-24',
      paperType: 'SQP',
      marks: 1,
      type: 'MCQ',
      questionNumber: 'Q5.',
      question: 'Given below are two statements...\nAssertion (A): For improvement of performance in long distance running, continuous training is effective.\nReason (R): Continuous method of training improves basic endurance.\n(a) Both A and R are true and R is correct explanation\n(b) Both true but R is not correct explanation\n(c) A true, R false\n(d) A false, R true',
      answer: '(a) Both (A) and (R) are true and(R) is the correct explanation of (A)',
      markingScheme: '(a) Both (A) and (R) are true and(R) is the correct explanation of (A)',
      aiExplanation: 'Teacher\'s Voice: \n*   **Concept:** Continuous training (long duration, no rest) targets Aerobic capacity. \n*   **Link:** Aerobic capacity = Endurance. Therefore, R explains A.'
    },
    {
      id: 'q6-2024-sqp-iso-metric',
      year: '2023-24',
      paperType: 'SQP',
      marks: 1,
      type: 'MCQ',
      questionNumber: 'Q6.',
      question: 'What do you mean by iso and metric?\n(a) Iso means constant and metric means length\n(b) Iso means change and metric means size\n(c) Iso means constant and metric means velocity\n(d) Iso means size and metric means constant',
      answer: '(a) Iso means constant and metric means length',
      markingScheme: '(a) Iso means constant and metric means length',
      aiExplanation: 'Teacher\'s Voice: \n*   **Isometric:** Iso (Same) + Metric (Length). Muscle length doesn\'t change. \n*   **Isotonic:** Iso (Same) + Tone (Tension). \n*   **Isokinetic:** Iso (Same) + Kinetic (Speed).'
    }
  ],
  mindMap: {
    id: 'm1',
    label: 'Unit 10: Training',
    children: [
      {
        id: 'm2',
        label: 'Strength',
        children: [{ id: 'm3', label: 'Max/Explosive/Endurance' }, { id: 'm3b', label: 'Iso-Metric/Tonic/Kinetic' }]
      },
      {
        id: 'm4',
        label: 'Endurance',
        children: [{ id: 'm5', label: 'Speed/Short/Med/Long' }, { id: 'm5b', label: 'Cont/Interval/Fartlek' }]
      },
      {
        id: 'm6',
        label: 'Speed',
        children: [{ id: 'm7', label: '5 Types (Reaction...)' }, { id: 'm7b', label: 'Accel/Pace Runs' }]
      },
      {
        id: 'm8',
        label: 'Coordination',
        children: [{ id: 'm9', label: '7 Types (Orientation...)' }]
      }
    ]
  },
  cheatSheet: [
    {
      title: 'Training Cycles (Periodization)',
      points: [
        'Micro Cycle: 3-10 Days (Weekly Plan) -> Focus: Acute Load',
        'Meso Cycle: 3-6 Weeks (Monthly Plan) -> Focus: Specific Component',
        'Macro Cycle: 3-12 Months (Yearly Plan) -> Focus: Peak Performance'
      ]
    },
    {
      title: 'Strength Development (The 3 Isos)',
      points: [
        'Isometric: Static Force (Plank) -> Rehab/Core',
        'Isotonic: Dynamic Movement (Weights) -> Hypertrophy',
        'Isokinetic: Constant Speed (Cybex Machine) -> Water Sports/Rehab'
      ]
    },
    {
      title: 'Endurance Methods',
      points: [
        'Continuous: Long duration, low intensity (Aerobic base)',
        'Interval: High intensity with incomplete rest (Speed endurance)',
        'Fartlek: "Speed Play" in nature (Variable pace/terrain)'
      ]
    },
    {
      title: '7 Coordinative Abilities',
      points: [
        'Orientation (Space), Coupling (Linking), Reaction (Signal)',
        'Balance (Stability), Rhythm (Timing), Adaptation (Change)',
        'Differentiation (Precision/Economy)'
      ]
    },
    {
      title: 'Golden Keywords',
      points: [
        'Definition: "Systematic Process", "Scientific Principles"',
        'Principles: "Overload", "Continuity", "Specificity"',
        'Goal: "Peak Performance", "Skill Acquisition"',
        'Method: "PNF" (Proprioceptive Neuromuscular Facilitation) for Flexibility'
      ]
    },
    {
      title: 'Circuit Training (Sample Flow)',
      points: [
        'Principle: Alternate Muscle Groups (Upper -> Lower -> Core -> Cardio)',
        'Sample 6 Stations: 1.Jacks (Warmup) -> 2.Pushups (Upper) -> 3.Squats (Lower) -> 4.Crunches (Core) -> 5.Dips (Upper) -> 6.Rope Skip (Cardio)',
        'Goal: General Fitness + High Density'
      ]
    }
  ],
};
