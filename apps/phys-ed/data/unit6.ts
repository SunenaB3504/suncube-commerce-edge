import { Chapter } from '../types';

export const unit6: Chapter = {
  id: 6,
  slug: 'test-measurement',
  name: 'Test & Measurement in Sports',
  description: 'Procedures for Motor Fitness, Cardio-Vascular Fitness, and Senior Citizen Fitness Tests.',
  topics: [
    {
      id: 'sai-khelo-india',
      title: 'Motor Fitness (SAI Khelo India)',
      description: 'Standardized fitness assessments for different age groups in schools.',
      content: [
        'Purpose: To assess fitness levels of children to identify talent and monitor health.',
        'Age Group 5-8 Years (Class 1-3):',
        '• BMI (Body Mass Index): Body Composition.',
        '• Flamingo Balance Test: Static Balance (Stand on one leg on a beam).',
        '• Plate Tapping Test: Speed and Limb Coordination (Tap two plates with hand).',
        'Age Group 9-18 Years (Class 4-12):',
        '• 50m Standing Start: Speed (Sprint).',
        '• 600m Run/Walk: Cardiovascular Endurance.',
        '• Sit and Reach: Flexibility (Lower back/Hamstrings).',
        '• Partial Curl Up: Abdominal Strength/Endurance.',
        '• Push-Ups (Boys) / Modified Push-Ups (Girls): Upper Body Strength.',
        '• Standing Broad Jump: Explosive Leg Power.',
        '• 4x10m Shuttle Run: Agility.'
      ],
      visualizations: [
        {
          id: 'v1',
          title: '9-18 Years Test Battery',
          type: 'table',
          data: {
            headers: ['Component', 'Test Item'],
            rows: [
              ['Speed', '50m Dash'],
              ['Endurance', '600m Run/Walk'],
              ['Flexibility', 'Sit & Reach'],
              ['Abdominal Strength', 'Partial Curl Up'],
              ['Upper Body Strength', 'Push Ups (Boys) / Mod. Push Ups (Girls)'],
              ['Explosive Power', 'Standing Broad Jump'],
              ['Agility', '4x10m Shuttle Run']
            ]
          }
        }
      ]
    },
    {
      id: 'general-motor-fitness',
      title: 'General Motor Fitness (Barrow)',
      description: 'Barrow Three-Item General Motor Ability Test.',
      content: [
        'Developer: Harold M. Barrow (1953) for college men (adaptable).',
        'Item 1: Standing Broad Jump (Explosive Leg Power). Measured in feet/inches.',
        'Item 2: Zig-Zag Run (Agility and Speed). Run through a course of cones. Measured in seconds.',
        'Item 3: Medicine Ball Put (Arm/Shoulder Strength). 3 kg for boys, 1 kg for girls. Measured in feet/meters.'
      ],
      visualizations: [
        {
          id: 'v2',
          title: 'Barrow Test Items',
          type: 'grid',
          data: [
            { label: 'Broad Jump', desc: 'Power (Legs)' },
            { label: 'Zig-Zag Run', desc: 'Agility' },
            { label: 'Med Ball Put', desc: 'Strength (Arms)' }
          ]
        }
      ]
    },
    {
      id: 'cardio-fitness',
      title: 'Cardio-Vascular Fitness',
      description: 'Tests to measure Aerobic Capacity (VO2 Max).',
      content: [
        'Harvard Step Test: Developed by Brouha. Bench height 20 inches (Men) / 16 inches (Women). Rate: 30 steps/min for 5 min.',
        'Pulse Count: Taken at 1-1.5 min, 2-2.5 min, 3-3.5 min recovery.',
        'Fitness Index (Long): (Duration in sec × 100) / (2 × Sum of 3 pulse counts).',
        'Fitness Index (Short): (Duration in sec × 100) / (5.5 × Pulse count at 1-1.5 min).',
        'Rockport One Mile Test: Walk 1 mile as fast as possible. Record Time and Heart Rate (immediately after).',
        'VO2 Max Formula: 132.853 - (0.0769 × Weight[lb]) - (0.3877 × Age) + (6.315 × Gender[M=1,F=0]) - (3.2649 × Time[min]) - (0.1565 × HR).'
      ],
      visualizations: [
        {
          id: 'v3',
          title: 'Harvard Step Test Norms',
          type: 'table',
          data: {
            headers: ['Score', 'Rating'],
            rows: [
              ['> 96', 'Excellent'],
              ['83 - 96', 'Good'],
              ['68 - 82', 'Average'],
              ['< 68', 'Below Average (Poor)']
            ]
          }
        }
      ]
    },
    {
      id: 'senior-citizens',
      title: 'Rikli & Jones Senior Citizen Test',
      description: 'Functional fitness test for ages 60-94.',
      content: [
        '1. Chair Stand Test: [Purpose: Lower Body Strength] -> [Procedure: Sit-to-stand in 30s] -> [Scoring: Count].',
        '2. Arm Curl Test: [Purpose: Upper Body Strength] -> [Procedure: Bicep curls in 30s (8lb M / 5lb F)] -> [Scoring: Count].',
        '3. Chair Sit and Reach: [Purpose: Lower Body Flexibility] -> [Procedure: Reach toes from chair] -> [Scoring: Distance (+/-)].',
        '4. Back Scratch Test: [Purpose: Upper Body Flexibility] -> [Procedure: Touch fingers behind back] -> [Scoring: Distance (+/-)].',
        '5. 8-Foot Up and Go: [Purpose: Agility/Dynamic Balance] -> [Procedure: Stand, walk 8ft, return] -> [Scoring: Time (sec)].',
        '6. 6-Minute Walk Test: [Purpose: Aerobic Endurance] -> [Procedure: Distance covered in 6 min] -> [Scoring: Yards/Meters].'
      ],
      visualizations: [
        {
          id: 'v4-triplet-hack',
          title: 'Senior Citizen "Triplet Master"',
          type: 'table',
          hack: 'Hacker Hack: For any test question, you MUST write the Purpose, the exact Procedure (30s time limit usually), and the Scoring unit (Count or Time).',
          data: {
            headers: ['Test Item', 'Purpose', 'Procedure (Key)', 'Scoring'],
            rows: [
              ['Chair Stand', 'Lower Strength', 'Max stands in 30s', 'Total Count'],
              ['Arm Curl', 'Upper Strength', 'Curls in 30s (8/5lb)', 'Total Count'],
              ['Up & Go', 'Agility', '8ft distance + return', 'Seconds'],
              ['6-Min Walk', 'Endurance', 'Max distance 6 mins', 'Meters/Yards']
            ]
          }
        },
        {
          id: 'v4',
          title: 'Senior Test Battery',
          type: 'list',
          data: [
            'Chair Stand -> Legs',
            'Arm Curl -> Arms',
            'Sit & Reach -> Hams/Back',
            'Back Scratch -> Shoulder',
            '8-ft Up & Go -> Agility',
            '6-min Walk -> Endurance'
          ]
        }
      ]
    }
  ],
  flashcards: [
    { id: 'f1', category: 'Age Group', question: 'What is the age group for the Flamingo Balance Test?', answer: '5-8 Years.' },
    { id: 'f2', category: 'Technical', question: 'What is the bench height for Men in Harvard Step Test?', answer: '20 inches.' },
    { id: 'f3', category: 'Technical', question: 'What does the Partial Curl Up measure?', answer: 'Abdominal Strength and Endurance.' },
    { id: 'f4', category: 'Technical', question: 'Formula for BMI?', answer: 'Weight (kg) / Height (m)².' },
    { id: 'f5', category: 'Technical', question: 'What is the weight of the dumbbell for Women in Arm Curl Test?', answer: '5 lbs.' },
    { id: 'f6', category: 'Senior', question: 'Which test measures upper body flexibility in seniors?', answer: 'Back Scratch Test.' },
    { id: 'f7', category: 'Technical', question: 'What is the duration of the Harvard Step Test?', answer: '5 minutes (300 seconds).' },
    { id: 'f8', category: 'Formula', question: 'State the Short Form Formula for Fitness Index.', answer: '(Duration × 100) / (5.5 × Pulse 1).' },
    { id: 'f9', category: 'Technical', question: 'What is measured by the 600m Run/Walk?', answer: 'Cardiovascular Endurance.' },
    { id: 'f10', category: 'Technical', question: 'What does the Plate Tapping test measure?', answer: 'Limb movement speed and coordination.' },
    { id: 'f11', category: 'Technical', question: 'What equipment is needed for the 8-Foot Up and Go?', answer: 'Chair, Cone, Stopwatch, Measuring Tape.' },
    { id: 'f12', category: 'Cardio', question: 'Who developed the Harvard Step Test?', answer: 'Lucien Brouha (1943).' },
    { id: 'f13', category: 'Barrow', question: 'Name the three items in the Barrow Motor Ability Test.', answer: 'Standing Broad Jump, Zig-Zag Run, Medicine Ball Put.' },
    { id: 'f14', category: 'Technical', question: 'What represents "Gender" in the Rockport formula for females?', answer: '0.' },
    { id: 'f15', category: 'Senior', question: 'Alternative to 6-Minute Walk test for seniors?', answer: '2-Minute Step Test.' },
    { id: 'f16', category: 'Technical', question: 'Modified Push-Ups (Girls) differs how from standard?', answer: 'Knees touch the ground.' },
    { id: 'f17', category: 'Technical', question: 'What does Sit and Reach measure?', answer: 'Flexibility (Lower Back & Hamstrings).' },
    { id: 'f18', category: 'Cardio', question: 'In Harvard Step Test, when are pulses taken?', answer: '1-1.5 min, 2-2.5 min, and 3-3.5 min after exercise.' },
    { id: 'f19', category: 'Technical', question: 'Define VO2 Max.', answer: 'Maximum volume of oxygen one can use during intense exercise.' },
    { id: 'f20', category: 'Barrow', question: 'What does Medicine Ball Put measure?', answer: 'Explosive Upper Body (Arm/Shoulder) Strength.' },
    { id: 'f21', category: 'Technical', question: 'Distance for Shuttle Run in Khelo India?', answer: '10 meters (4 x 10m).' },
    { id: 'f22', category: 'Senior', question: 'Purpose of Chair Stand Test?', answer: 'Measure Lower Body Strength.' },
    { id: 'f23', category: 'Technical', question: 'What is the stepping rate in Harvard Step Test?', answer: '30 steps per minute.' },
    { id: 'f24', category: 'Formula', question: 'What is the constant "5.5" used for?', answer: 'Denominator in the Short Form Fitness Index formula.' },
    { id: 'f25', category: 'Barrow', question: 'What does Zig-Zag Run measure?', answer: 'Agility and Speed.' },
    { id: 'f26', category: 'Technical', question: 'Which is an Aerobic test: 50m Dash or 600m Run?', answer: '600m Run.' },
    { id: 'f27', category: 'Definition', question: 'What is "Motor Fitness"?', answer: 'Ability to perform physical activities effectively (Speed, Agility, Power etc).' },
    { id: 'f28', category: 'Technical', question: 'Weight of Medicine Ball for Boys (Barrow)?', answer: '3 kg.' },
    { id: 'f28b', category: 'Technical', question: 'Weight of Medicine Ball for Girls (Barrow)?', answer: '1 kg.' },
    { id: 'f29', category: 'Senior', question: 'Weight of dumbbell for Men in Arm Curl?', answer: '8 lbs.' },
    { id: 'f30', category: 'Technical', question: 'Rockport Test requires walking what distance?', answer: '1 Mile (1.6 km).' },
    { id: 'f31', category: 'Technical', question: 'Why is BMI part of the test battery?', answer: 'To screen for obesity/underweight issues early.' },
    { id: 'f32', category: 'Cardio', question: 'If a student stops at 3 mins in Harvard Test, what duration is used?', answer: '180 seconds.' },
    { id: 'f33', category: 'Technical', question: 'Flamingo Balance Test focuses on?', answer: 'Static Balance.' },
    { id: 'f34', category: 'Technical', question: 'What constitutes one "cycle" in Plate Tapping?', answer: 'Touching both plates (Left-Right) or vice versa.' },
    { id: 'f35', category: 'Senior', question: 'Standard height of step for Seniors?', answer: 'Seniors do not do a step test; they do 2-Min Step (marching in place).' },
    { id: 'f36', category: 'Technical', question: 'What is the "Reach" in Sit and Reach?', answer: 'The distance fingers extend beyond the toes (or zero point).' },
    { id: 'f37', category: 'Technical', question: 'Primary muscle in Chair Stand Test?', answer: 'Quadriceps / Glutes.' },
    { id: 'f38', category: 'Technical', question: 'Purpose of 50m Dash?', answer: 'To measure Speed (Acceleration).' },
    { id: 'f39', category: 'Senior', question: 'What constitutes a "Zero" score in Back Scratch?', answer: 'Tips of middle fingers just touching.' },
    { id: 'f40', category: 'Formula', question: 'Rockport Formula: Is Weight in Kg or Lbs?', answer: 'Pounds (lbs).' },
    { id: 'f41', category: 'Calculation', question: 'If Short Index is < 50, what is the fitness level?', answer: 'Poor.' },
    { id: 'f42', category: 'Technical', question: 'Safety precaution for Harvard Step Test?', answer: 'Stop if the subject gets too exhausted or dizzy.' },
    { id: 'f43', category: 'Barrow', question: 'Why "Zig-Zag" run?', answer: 'To test the ability to change direction quickly (Agility).' },
    { id: 'f44', category: 'Technical', question: 'Does 600m Run require a track?', answer: 'Not necessarily, but accurate distance measurement is required.' },
    { id: 'f45', category: 'General', question: 'What is "Cardiovascular Endurance"?', answer: 'Ability of heart/lungs to supply oxygen during sustained activity.' }
  ],
  sqp: [
    {
      id: 'q1',
      year: '2023-24',
      paperType: 'Board',
      marks: 3,
      type: 'SA',
      question: 'Explain the procedure of the Harvard Step Test.',
      answer: '5 min stepping, 30 steps/min, 20-inch bench. Pulse taken at 1-1.5, 2-2.5, 3-3.5 mins post-exercise.',
      aiExplanation: 'Teacher\'s Note: Break it down into equipment, procedure (stepping rhythm), and recovery measurement. Mention calculation of Fitness Index.'
    },
    {
      id: 'q2',
      year: '2024-25',
      paperType: 'SQP',
      marks: 1,
      type: 'MCQ',
      question: 'Which test item is used to measure partial abdominal strength?',
      answer: '(c) Partial Curl Up',
      aiExplanation: 'Key differentiator: Sit-ups are full range, "Partial" Curl Up isolates the abs better and is safer for the back.'
    },
    {
      id: 'q3',
      year: '2022-23',
      paperType: 'Board',
      marks: 5,
      type: 'LA',
      question: 'Describe the Rikli and Jones Senior Citizen Fitness Test. Explain the purpose of any three items.',
      answer: 'Battery for elderly fitness. 1. Chair Stand (Lower Strength), 2. Back Scratch (Upper Flex), 3. 6-Min Walk (Endurance).',
      aiExplanation: 'Structure: Introduction (Purpose: Functional Fitness) -> List all 6 items -> Detail any 3 with Procedure and Purpose.'
    },
    {
      id: 'q4',
      year: '2023-24',
      paperType: 'SQP',
      marks: 3,
      type: 'SA',
      question: 'Calculate the Physical Fitness Index (Long Form) for a girl who steps for 4 minutes and her heart rates are 100, 90, and 80.',
      answer: 'Duration=240s. Sum=270. Index = (240*100)/(2*270) = 24000/540 = 44.4 (Poor).',
      aiExplanation: 'Step 1: Convert minutes to seconds (4 * 60 = 240). Step 2: Sum pulses (100+90+80=270). Step 3: Apply Formula.'
    },
    {
      id: 'q5',
      year: '2025-26',
      paperType: 'SQP',
      marks: 1,
      type: 'MCQ',
      question: 'Weight of the medicine ball for boys in Barrow Motor Ability Test is:',
      answer: '(b) 3 kg',
      aiExplanation: 'Standard weight is often cited as 3kg or 6lbs. Choose the option closest to this standard.'
    },
    {
      id: 'q6',
      year: '2021-22',
      paperType: 'Term-1',
      marks: 1,
      type: 'MCQ',
      question: 'Which component is NOT measured by the Rikli & Jones test?',
      answer: '(d) 50m Sprint',
      aiExplanation: 'Sprinting is too high-risk for seniors; they do "8-ft Up & Go" instead.'
    },
    {
      id: 'q7',
      year: '2024-25',
      paperType: 'Board',
      marks: 3,
      type: 'SA',
      question: 'Elucidate the Barrow Three Item General Motor Ability Test.',
      answer: 'Consists of Standing Broad Jump, Zig-Zag Run, and Medicine Ball Put. Measures General Motor Capacity.',
      aiExplanation: 'Teacher\'s Voice - Scoring Breakdown (3 Marks):\n1. **List the 3 Items (1.5 Marks):** Standing Broad Jump, Zig-Zag Run, Medicine Ball Put.\n2. **Explain the purpose of each (1.5 Marks):** \n   *   Broad Jump -> Explosive Leg Power.\n   *   Zig-Zag Run -> Agility/Speed.\n   *   Med Ball Put -> Arm/Shoulder Strength.'
    },
    {
      id: 'q8',
      year: '2023-24',
      paperType: 'SQP',
      marks: 5,
      type: 'LA',
      question: 'Suggest a fitness test battery for primary school children (5-8 years) and explain the tests.',
      answer: 'Flamingo Balance (Balance), Plate Tapping (Coordination), BMI (Composition).',
      aiExplanation: 'Focus on "SAI Khelo India" guidelines for the younger age group (Class 1-3). Do not confuse with the 9-18 yrs (Class 4-12) battery.'
    },
    {
      id: 'q17-2024-sqp',
      year: '2023-24',
      paperType: 'SQP',
      marks: 1,
      type: 'MCQ',
      questionNumber: 'Q17.',
      question: 'Senior Citizen Fitness Test the range of age group is___________\n(a) 60-94\n(b) 55-79\n(c) 65-95\n(d) 50-90',
      answer: '(a) 60-94',
      markingScheme: '(a) 60-94',
      aiExplanation: 'Teacher\'s Voice: \n*   **Rikli & Jones Test** is designed for independent living assessment. \n*   **Target:** Adults aged 60 to 94 years.'
    },
    {
      id: 'q23-2024-sqp',
      year: '2023-24',
      paperType: 'SQP',
      marks: 2,
      type: 'SA',
      questionNumber: 'Q23.',
      question: 'Explain the procedure and scoring of 600meter run/ walk',
      answer: 'Run/Walk 600m distance. Time taken is recorded in minutes and seconds.',
      markingScheme: 'Procedure: Subject runs/walks 600m. Can stop if tired. \nScoring: Time taken to cover distance in min/sec. Measures Cardiovascular Endurance.',
      aiExplanation: 'Teacher\'s Voice - 2 Points (2 Marks):\n1. **Procedure (1 Mark):** Mention "Run or Walk" and "Fastest possible time".\n2. **Scoring (1 Mark):** Measurement unit is "Minutes and Seconds" (Time).'
    },
    {
      id: 'q35-2024-sqp-9to18',
      year: '2023-24',
      paperType: 'SQP',
      marks: 5,
      type: 'LA',
      questionNumber: 'Q35.',
      question: 'Make a table of test items listed under fitness test by SAI (Age group 9-18 yrs) Explain the Procedure and Scoring of 50 MTS Run and Partial Curl Up',
      answer: 'Table: BMI, 50m Dash, 600m Run, Sit & Reach, Push-ups/Curl-ups. 50m: Speed (Time). Curl-up: Abdominal Strength (Count).',
      markingScheme: 'Items: BMI (Body Comp), 50M (Speed), 600M (Endurance), Sit & Reach (Flexibility), Curl Up (Strength). \n50M Procedure: Standing start, max speed. Score: Time. \nCurl Up Procedure: Knees bent, slide hands 6 inches. Score: Max count in 30s.',
      aiExplanation: 'Teacher\'s Voice - Syllabus Breakdown (5 Marks):\n1. **Table (1 Mark):** List correct tests (BMI, 50m, 600m, Sit & Reach, Curl Up/Push Up).\n2. **50m Dash (2 Marks):** Procedure (Standing Start) + Scoring (Time in sec).\n3. **Partial Curl Up (2 Marks):** Procedure (Knees bent, hands slide) + Scoring (Count/30s).'
    }
  ],
  mindMap: {
    id: 'm1',
    label: 'Unit 6: Testing',
    children: [
      {
        id: 'm2',
        label: 'General Fitness',
        children: [{ id: 'm3', label: 'SAI Khelo India (5-18)' }, { id: 'm4', label: 'Barrow (Motor)' }]
      },
      {
        id: 'm5',
        label: 'Cardio',
        children: [{ id: 'm6', label: 'Harvard Step' }, { id: 'm7', label: 'Rockport 1-Mile' }]
      },
      {
        id: 'm8',
        label: 'Seniors',
        children: [{ id: 'm9', label: 'Rikli & Jones (6 Items)' }]
      }
    ]
  },
  cheatSheet: [
    {
      title: 'Sports Authority of India (SAI) Khelo India Battery',
      points: [
        'Age 5-8 (Class 1-3): BMI (Body Mass Index) + Flamingo (Balance) + Plate Tapping (Coordination)',
        'Age 9-18 (Class 4-12): 50m (Speed) + 600m (Endurance) + Sit & Reach (Flex)',
        'Strength (9-18): Partial Curl Up (Abs) + Push Ups (Upper Body)'
      ]
    },
    {
      title: 'Rikli & Jones (Seniors)',
      points: [
        'Chair Stand -> Lower Body Strength',
        'Arm Curl -> Upper Body Strength (Men 8lb, Women 5lb)',
        'Back Scratch -> Upper Flex | Sit & Reach -> Lower Flex',
        '8-ft Up & Go -> Agility | 6-Min Walk -> Aerobic Endurance'
      ]
    },
    {
      title: 'The Math (Formulas)',
      points: [
        'Body Mass Index (BMI) = Weight(kg) / Height(m)²',
        'Fitness Index (Long) = (Duration × 100) / (2 × Sum of 3 Pulses)',
        'Fitness Index (Short) = (Duration × 100) / (5.5 × Pulse 1)'
      ]
    },
    {
      title: 'Barrow Motor Ability (3 Items)',
      points: [
        '1. Standing Broad Jump (Leg Power)',
        '2. Zig-Zag Run (Agility/Speed)',
        '3. Medicine Ball Put (Arm Strength)'
      ]
    },
    {
      title: 'Golden Keywords',
      points: [
        'Purpose: "Talent Identification", "Functional Ability (Seniors)"',
        'Cardio: "VO2 Max", "Aerobic Capacity", "Recovery Rate"',
        'Motor: "Explosive Power", "Static Balance"'
      ]
    }
  ],
};
