import { Chapter } from '../types';

export const unit7: Chapter = {
  id: 7,
  slug: 'physiology-injuries',
  name: 'Physiology & Injuries in Sports',
  description: 'Physiological factors of fitness, effects of exercise on body systems, and management of sports injuries.',
  topics: [
    {
      id: 'physio-factors',
      title: 'Physiological Factors of Fitness',
      description: 'Internal biological factors that determine an individual’s physical capabilities.',
      content: [
        'Determining Strength: Muscle Cross-Sectional Area (Hypertrophy), Muscle Fiber Composition (Fast Twitch), Neural Impulse intensity.',
        'Determining Speed: Explosive Strength, Mobility of Nervous System (Reaction Time), Muscle Composition (White Fibers), Flexibility.',
        'Determining Endurance: Aerobic Capacity (VO2 Max), Lactate Threshold, Movement Economy, Muscle Composition (Red/Slow Twitch Fibers), Energy Reserves (Glycogen).',
        'Energy Production Factors:',
        '• ATP-CP System: Provides energy for < 10 seconds (High Intensity).',
        '• Anaerobic System: Provides energy for < 2 minutes (e.g., 400m).',
        '• Aerobic System: Provides energy for long duration (Marathon).',
        'Determining Flexibility: Joint Structure, Connective Tissue elasticity (Ligaments/Tendons), Muscle Stretchability, Age and Gender.'
      ],
      visualizations: [
        {
          id: 'v1',
          title: 'Physiological Determinants',
          type: 'table',
          data: {
            headers: ['Component', 'Primary Factors'],
            rows: [
              ['Strength', 'Muscle Size, Nerve Impulse, % Fast Twitch'],
              ['Speed', 'CNS Mobility, Explosive Power, Flexibility'],
              ['Endurance', 'VO2 Max, Lactate Threshold, % Slow Twitch'],
              ['Flexibility', 'Joint Structure, Ligament Elasticity, Age']
            ]
          }
        }
      ]
    },
    {
      id: 'exercise-effects',
      title: 'Effects of Exercise on Body Systems',
      description: 'Short-term responses and Long-term adaptations to regular training.',
      content: [
        'Cardio-Respiratory (Short Term): Increased Heart Rate, Stroke Volume increase, Cardiac Output surge, Increased Tidal Volume & Respiratory Rate.',
        'Cardio-Respiratory (Long Term): Cardiac Hypertrophy (Athlete\'s Heart), Bradycardia (Resting HR < 60), Increased Vital Capacity, Capillarization, Faster Recovery.',
        'Muscular (Short Term): Increased blood supply, rise in muscle temperature, accumulation of lactate, micro-tears.',
        'Muscular (Long Term): Hypertrophy (Size increase), increased mitochondria number/size, higher myoglobin stores, delayed fatigue (Lactate Tolerance).'
      ],
      visualizations: [
        {
          id: 'v2',
          title: 'Cardio-Respiratory Formulae',
          type: 'grid',
          data: [
            { label: 'Cardiac Output', desc: 'Stroke Volume × Heart Rate' },
            { label: 'Stroke Volume', desc: 'Blood pumped per beat (70ml -> 100ml+)' },
            { label: 'Minute Volume', desc: 'Tidal Volume × Respiratory Rate' },
            { label: 'VO2 Max', desc: 'Max Oxygen consumption during peak effort' }
          ]
        }
      ]
    },
    {
      id: 'injury-classification',
      title: 'Classification of Sports Injuries',
      description: 'Categorization based on tissue type and cause.',
      content: [
        'Soft Tissue Injuries (STI):',
        '• Abrasion: Friction burn/scrape of skin (epidermis).',
        '• Contusion: Direct blow causing bleeding under skin (Bruise/Hematoma).',
        '• Laceration: Irregular cut/tear in skin (sharp object).',
        '• Sprain: Ligament injury (Bone to Bone connector).',
        '• Strain: Muscle/Tendon injury (Muscle to Bone connector).',
        'Bone Injuries (Fractures):',
        '• Simple: Bone breaks, skin remains intact.',
        '• Compound (Open): Bone breaks and tears through skin.',
        '• Greenstick: Bending/Partial break (common in children).',
        '• Comminuted: Bone shatters into 3+ pieces.',
        '• Transverse: Fracture at a right angle to the bone\'s axis.',
        '• Oblique: Fracture runs diagonally to the bone\'s axis.',
        '• Impacted: Broken ends drive into each other.',
        'Joint Injuries: Dislocation (separation of joint surfaces). Common in Shoulder, Jaw, Hip.'
      ],
      visualizations: [
        {
          id: 'v3',
          title: 'Sprain vs Strain',
          type: 'table',
          data: {
            headers: ['Feature', 'Sprain', 'Strain'],
            rows: [
              ['Tissue', 'Ligament', 'Muscle or Tendon'],
              ['Connection', 'Bone to Bone', 'Muscle to Bone'],
              ['Severity', 'Mild/Severe Tear', 'Pulled/Ruptured'],
              ['Recovery', 'Slow (Poor blood supply)', 'Faster (Vascular)']
            ]
          }
        }
      ]
    },
    {
      id: 'management',
      title: 'Management (First Aid)',
      description: 'Standard protocols for immediate injury care.',
      content: [
        'PRICER / PRICE Protocol for Soft Tissue:',
        '• Protection: Prevent further harm (splint/crutches).',
        '• Rest: Stop activity immediately.',
        '• Ice: Vasoconstriction to reduce swelling (Cryotherapy). Max 20 mins.',
        '• Compression: Bandage to limit swelling.',
        '• Elevation: Above heart level to drain fluid.',
        '• Referral: See a doctor if severe.',
        'Fracture Management: Immobilize joint above and below fracture. Do not move the person unless necessary.'
      ],
      visualizations: [
        {
          id: 'v4',
          title: 'Physiological Changes Chart',
          type: 'list',
          data: [
            'Heart Rate: Decreases at rest',
            'Stroke Volume: Increases',
            'Muscle Mass: Increases',
            'Fat Mass: Decreases',
            'Capillaries: Increases density'
          ]
        }
      ]
    }
  ],
  flashcards: [
    { id: 'f1', category: 'Definition', question: 'What is "Stroke Volume"?', answer: 'The amount of blood ejected by the left ventricle in one contraction.' },
    { id: 'f2', category: 'Physiology', question: 'Which muscle fiber type is dominant in marathon runners?', answer: 'Slow Twitch (Red) Fibers / Type I.' },
    { id: 'f3', category: 'Physiology', question: 'What is "Cardiac Hypertrophy"?', answer: 'Thickening and enlargement of the heart muscle due to training (Athlete\'s Heart).' },
    { id: 'f4', category: 'Physiology', question: 'Define "Vital Capacity".', answer: 'Maximum amount of air a person can exhale after a maximum inhalation.' },
    { id: 'f5', category: 'Injury', question: 'Differentiation between Sprain and Strain?', answer: 'Sprain = Ligament injury; Strain = Muscle/Tendon injury.' },
    { id: 'f6', category: 'Injury', question: 'What is a "Greenstick Fracture"?', answer: 'A fracture where the bone bends and cracks, common in children.' },
    { id: 'f7', category: 'First Aid', question: 'What does "C" stand for in RICER?', answer: 'Compression.' },
    { id: 'f8', category: 'Physiology', question: 'What is "Tidal Volume"?', answer: 'The volume of air inhaled or exhaled in a normal breath.' },
    { id: 'f9', category: 'Physiology', question: 'How does exercise affect Resting Heart Rate?', answer: 'It decreases it (Bradycardia) due to increased efficiency.' },
    { id: 'f10', category: 'Physiology', question: 'Primary determinant of explosive strength?', answer: 'Muscle composition (percentage of Fast Twitch fibers) and nerve impulse intensity.' },
    { id: 'f11', category: 'Injury', question: 'Define "Abrasion".', answer: 'A superficial injury where skin is scraped off due to friction.' },
    { id: 'f12', category: 'Injury', question: 'What is a "Comminuted Fracture"?', answer: 'A fracture where the bone breaks into three or more pieces.' },
    { id: 'f13', category: 'Physiology', question: 'What is the "Second Wind"?', answer: 'A phenomenon characterized by sudden transition from distress to comfort during endurance exercise.' },
    { id: 'f14', category: 'Physiology', question: 'Formula for Cardiac Output?', answer: 'Cardiac Output = Stroke Volume × Heart Rate.' },
    { id: 'f15', category: 'Injury', question: 'What is "Tennis Elbow"?', answer: 'An overuse injury (strain/inflammation) of the tendons in the elbow.' },
    { id: 'f16', category: 'First Aid', question: 'Why apply Ice to an injury?', answer: 'To cause vasoconstriction, reducing blood flow, swelling, and pain.' },
    { id: 'f17', category: 'Physiology', question: 'What is "Oxygen Debt" (EPOC)?', answer: 'The amount of extra oxygen required by muscle tissue during recovery from vigorous exercise.' },
    { id: 'f18', category: 'Injury', question: 'Identification: A bruise caused by a direct hit.', answer: 'Contusion.' },
    { id: 'f19', category: 'Injury', question: 'What is a "Stress Fracture"?', answer: 'A tiny crack in a bone caused by repetitive stress or overuse.' },
    { id: 'f20', category: 'Physiology', question: 'Role of Myoglobin in endurance?', answer: 'Stores oxygen in muscle cells for aerobic respiration.' },
    { id: 'f21', category: 'First Aid', question: 'What does Elevation do in PRICE?', answer: 'Uses gravity to help drain fluid away from the injured area to reduce swelling.' },
    { id: 'f22', category: 'Physiology', question: 'What determines Flexibility?', answer: 'Joint structure, ligament stretchability, and muscle temperature.' },
    { id: 'f23', category: 'Physiology', question: 'Effect of aging on flexibility?', answer: 'Flexibility generally decreases with age due to loss of tissue elasticity.' },
    { id: 'f24', category: 'Injury', question: 'What is a "Dislocation"?', answer: 'Displacement of contiguous surfaces of bones comprising a joint.' },
    { id: 'f25', category: 'Injury', question: 'Difference between Simple and Compound fracture?', answer: 'Simple: Skin intact. Compound: Bone pierces skin.' },
    { id: 'f26', category: 'Physiology', question: 'What is "Lactate Threshold"?', answer: 'The intensity of exercise at which lactate begins to accumulate in the blood.' },
    { id: 'f27', category: 'Physiology', question: 'Effect of exercise on capillaries?', answer: 'Capillarization: Density of capillaries increases to improve blood supply.' },
    { id: 'f28', category: 'Physiology', question: 'Function of Red Muscle Fibers?', answer: 'Endurance activities (Aerobic), fatigue resistant, high mitochondrial density.' },
    { id: 'f29', category: 'Physiology', question: 'Function of White Muscle Fibers?', answer: 'Power/Speed activities (Anaerobic), fatigue quickly.' },
    { id: 'f30', category: 'Injury', question: 'Common site for Anterior Cruciate Ligament (ACL) injury?', answer: 'The Knee.' },
    { id: 'f31', category: 'First Aid', question: 'Duration for Ice application?', answer: '10-20 minutes, every 2-3 hours for the first 48 hours.' },
    { id: 'f32', category: 'Physiology', question: 'What is "Minute Volume"?', answer: 'Total volume of air breathed in one minute (TV x Rate).' },
    { id: 'f33', category: 'Injury', question: 'What is "Laceration"?', answer: 'A deep cut or tear in the skin or flesh.' },
    { id: 'f34', category: 'Physiology', question: 'Does Vital Capacity increase with training?', answer: 'Yes, regular aerobic training increases vital capacity.' },
    { id: 'f35', category: 'Physiology', question: 'What is "Reaction Time"?', answer: 'The interval of time between the presentation of a stimulus and the initiation of a response.' },
    { id: 'f36', category: 'Physiology', question: 'Main fuel source for aerobic exercise?', answer: 'Glycogen and Fats.' },
    { id: 'f37', category: 'Physiology', question: 'Main fuel source for anaerobic exercise?', answer: 'ATP-CP and Glucose (Glycolysis).' },
    { id: 'f38', category: 'Physiology', question: 'Normal vs Elite Cardiac Output?', answer: 'Rest: ~5 L/min (both). Max Effort: ~20-25 L/min (Untrained) vs up to 40 L/min (Elite).' }
  ],
  sqp: [
    {
      id: 'q1',
      year: '2023-24',
      paperType: 'Board',
      marks: 1,
      type: 'MCQ',
      question: 'Which physiological factor determines the speed of an athlete?',
      answer: '(b) Muscle Fiber Type',
      aiExplanation: 'Fast Twitch (White) fibers contract rapidly and are essential for speed.'
    },
    {
      id: 'q2',
      year: '2024-25',
      paperType: 'SQP',
      marks: 3,
      type: 'SA',
      question: 'Differentiate between Sprain and Strain.',
      answer: 'Sprain: Ligament injury (Bone-Bone). Strain: Muscle/Tendon injury (Muscle-Bone).',
      aiExplanation: 'Teacher\'s Voice - Differentiation Strategy (3 Marks):\nCreate a comparison for full marks:\n1. **Tissue Involved:** Sprain = Ligament; Strain = Muscle/Tendon. (1 Mark)\n2. **Connection:** Sprain = Bone-to-Bone; Strain = Muscle-to-Bone. (1 Mark)\n3. **Severity/Recovery:** Sprains often take longer to heal due to poor blood supply compared to vascular muscles. (1 Mark)'
    },
    {
      id: 'q3',
      year: '2022-23',
      paperType: 'Board',
      marks: 5,
      type: 'LA',
      question: 'Explain the effects of regular exercise on the Muscular System.',
      answer: '1. Hypertrophy (Size) 2. Change in shape 3. Increased Capillaries 4. Delayed Fatigue 5. Better Coordination.',
      aiExplanation: 'Focus on structural changes (size, blood supply) and functional changes (endurance, efficiency).'
    },
    {
      id: 'q4',
      year: '2025-26',
      paperType: 'SQP',
      marks: 1,
      type: 'MCQ',
      question: 'A fracture where the bone is crushed into many pieces is called:',
      answer: '(c) Comminuted Fracture',
      aiExplanation: 'Greenstick = Bend; Comminuted = Shattered/Many pieces; Simple = Clean break.'
    },
    {
      id: 'q5',
      year: '2023-24',
      paperType: 'SQP',
      marks: 3,
      type: 'SA',
      question: 'What is the PRICER protocol? Explain briefly.',
      answer: 'P-Protection, R-Rest, I-Ice, C-Compression, E-Elevation, R-Referral. Used for soft tissue injuries.',
      aiExplanation: 'Ideally list each letter and its action. "Protection" and "Referral" are the extensions to the classic RICE.'
    },
    {
      id: 'q6',
      year: '2021-22',
      paperType: 'Term-1',
      marks: 1,
      type: 'MCQ',
      question: 'Which of the following decreases due to regular exercise?',
      answer: '(a) Resting Heart Rate',
      aiExplanation: 'Stroke volume and Cardiac output increase, but Resting Heart Rate decreases (Bradycardia) due to efficiency.'
    },
    {
      id: 'q7',
      year: '2024-25',
      paperType: 'Board',
      marks: 5,
      type: 'LA',
      question: 'Elucidate the physiological factors determining Strength.',
      answer: '1. Muscle Cross-sectional area (Size). 2. Muscle Fiber Composition (% Fast Twitch). 3. Nerve Impulse Intensity.',
      aiExplanation: 'Size is the biggest factor (Hypertrophy). Fiber type is genetic. Nerve impulse allows recruitment of more fibers.'
    },
    {
      id: 'q8',
      year: '2022-23',
      paperType: 'SQP',
      marks: 3,
      type: 'SA',
      question: 'Define Vital Capacity and Stroke Volume.',
      answer: 'Vital Capacity: Max air exhaled after max inhalation. Stroke Volume: Blood pumped per beat (~70ml resting).',
      aiExplanation: 'Key difference: One is Respiratory (Lungs/Air), the other is Cardiovascular (Heart/Blood).'
    },
    {
      id: 'q9',
      year: '2025-26',
      paperType: 'SQP',
      marks: 4,
      type: 'Case',
      question: 'Rohan, a basketball player, landed awkwardly and felt a pop in his ankle, followed by swelling. 1. Identify injury. 2. First Aid?',
      answer: '1. Sprain (Ligament injury). 2. Apply PRICER (Ice, Compression, Elevation).',
      aiExplanation: 'Ankle turns usually result in Ligament damage (Sprain). Immediate Ice reduces the swelling.'
    },
    {
      id: 'q10',
      year: '2023-24',
      paperType: 'Term-1',
      marks: 1,
      type: 'MCQ',
      question: 'Identify the soft tissue injury characterized by an irregular cut in the skin caused by a sharp object.',
      answer: 'Laceration',
      aiExplanation: 'Laceration implies a jagged tear, unlike an Incision (smooth) or Abrasion (scrape).'
    },
    {
      id: 'q4-2024-sqp-laceration',
      year: '2023-24',
      paperType: 'SQP',
      marks: 1,
      type: 'MCQ',
      questionNumber: 'Q4.',
      question: 'The irregular tear-like wounds caused by some blunt trauma _______________\n(a) Laceration\n(b) Contusion\n(c) Abrasion\n(d) Incision',
      answer: '(a) Laceration',
      markingScheme: '(a) Laceration',
      aiExplanation: 'Teacher\'s Voice: \n*   **Laceration:** Irregular/Jagged tear (Blunt force). \n*   **Incision:** Clean cut (Sharp object). \n*   **Abrasion:** Scrape (Friction). \n*   **Contusion:** Bruise (Internal bleeding).'
    },
    {
      id: 'q7-2024-sqp-cardiac',
      year: '2023-24',
      paperType: 'SQP',
      marks: 1,
      type: 'MCQ',
      questionNumber: 'Q7.',
      question: 'It is the amount of blood pumped out by each side of the heart (actually each ventricle) in 1 minute_______________\n(a) Blood pressure\n(b) Cardiac Output\n(c) Blood volume',
      answer: '(b) Cardiac Output',
      markingScheme: '(b) Cardiac Output',
      aiExplanation: 'Teacher\'s Voice: \n*   **Formula:** Cardiac Output = Stroke Volume × Heart Rate. \n*   **Definition:** Volume ejected per *minute*.'
    },
    {
      id: 'q19-2024-sqp',
      year: '2023-24',
      paperType: 'SQP',
      marks: 2,
      type: 'SA',
      questionNumber: 'Q19.',
      question: 'Point out physiological factor for strength.',
      answer: 'Muscle Cross-sectional area and Muscle Fiber Type (Fast Twitch).',
      markingScheme: '1. Size of the muscle. \n2. Body weight. \n3. Muscle composition (Fast Twitch fibers). \n4. Intensity of nerve impulse.',
      aiExplanation: 'Teacher\'s Voice - 2 Factors (2 Marks):\n1. **Muscle Size (1 Mark):** Larger cross-sectional area = More force.\n2. **Fiber Type (1 Mark):** High percentage of Fast Twitch (White) fibers = More explosive strength.'
    },
    {
      id: 'q22-2024-sqp',
      year: '2023-24',
      paperType: 'SQP',
      marks: 2,
      type: 'SA',
      questionNumber: 'Q22.',
      question: 'Write a key point on cardio respiratory factors determining fitness.',
      answer: 'VO2 Max and Stroke Volume.',
      markingScheme: '1. VO2 Max (Aerobic capacity). \n2. Stroke Volume (Blood per beat). \n3. Pulmonary Ventilation (Air flow).',
      aiExplanation: 'Teacher\'s Voice - 2 Factors (2 Marks):\n1. **VO2 Max (1 Mark):** The maximum amount of oxygen the body can utilize. \n2. **Stroke Volume (1 Mark):** Use the term "Ejection Fraction" or "Blood pumped per beat".'
    },
    {
      id: 'q29-2024-sqp',
      year: '2023-24',
      paperType: 'SQP',
      marks: 3,
      type: 'SA',
      questionNumber: 'Q29.',
      question: 'Define Fracture and explain any four types of fracture.',
      answer: 'Fracture is a break in bone continuity. Types: Simple, Compound, Greenstick, Comminuted.',
      markingScheme: 'Definition: Discontinuity in the bone. \nTypes: \n1. Simple (Closed). \n2. Compound (Open - skin borken). \n3. Greenstick (Soft bone bends/cracks). \n4. Comminuted (Shattered into pieces). \n5. Transverse (Right angle). \n6. Impacted (Driven into each other).',
      aiExplanation: 'Teacher\'s Voice - Structure (3 Marks):\n1. **Definition (1 Mark):** Must mention "Break in continuity of bone".\n2. **Types (2 Marks - 0.5 each):** List any 4. Suggest remembering: Simple, Compound, Greenstick (Children), Comminuted (High impact).'
    },
    {
      id: 'q11',
      year: '2024-25',
      paperType: 'SQP',
      marks: 1,
      type: 'MCQ',
      question: 'If Stroke Volume is 70ml and Heart Rate is 72 beats/min, what is the Cardiac Output?',
      answer: '5040 ml/min',
      aiExplanation: 'Cardiac Output = SV × HR = 70 × 72 = 5040 ml.'
    }
  ],
  mindMap: {
    id: 'm1',
    label: 'Unit 7: Physiology & Injuries',
    children: [
      {
        id: 'm2',
        label: 'Physiology',
        children: [{ id: 'm3', label: 'Determinants (Strength/Speed)' }, { id: 'm4', label: 'Adaptations (Hypertrophy/Bradycardia)' }]
      },
      {
        id: 'm5',
        label: 'Injuries',
        children: [{ id: 'm6', label: 'Soft Tissue (Sprain/Strain)' }, { id: 'm7', label: 'Bone (Fractures)' }]
      },
      {
        id: 'm8',
        label: 'Management',
        children: [{ id: 'm9', label: 'PRICER' }, { id: 'm10', label: 'First Aid' }]
      }
    ]
  },
  cheatSheet: [
    {
      title: 'Short vs Long Term Effects',
      points: [
        'Short Term: Heart Rate (HR) ↑, Stroke Volume ↑, Body Temp ↑, Lactate Accumulation',
        'Long Term: Hypertrophy (Muscle Size), Bradycardia (Resting HR ↓), Capillarization'
      ]
    },
    {
      title: 'First Aid: P.R.I.C.E.R',
      points: [
        'Protection (Splint/Crutches)',
        'Rest (Stop Activity)',
        'Ice (Cryotherapy - Vasoconstriction)',
        'Compression (Bandage)',
        'Elevation (Above Heart)',
        'Referral (Doctor)'
      ]
    },
    {
      title: 'Injury Decoder',
      points: [
        'Sprain = Ligament (Bone to Bone) -> "Sprained Ankle"',
        'Strain = Tendon/Muscle (Muscle to Bone) -> "Pulled Hamstring"',
        'Fracture = Greenstick (Kids/Bend), Comminuted (Shatter), Compound (Open)'
      ]
    },
    {
      title: 'The Formulas',
      points: [
        'Cardiac Output = Stroke Volume × Heart Rate',
        'Minute Volume = Tidal Volume × Resp. Rate',
        'VO2 Max = Max Oxygen used per min'
      ]
    },
    {
      title: 'Golden Keywords',
      points: [
        'Definition: "Physiological Factors" (Strength/Speed Determinants)',
        'Heart: "Hypertrophy" (Athlete Heart), "Bradycardia" (Efficient)',
        'Skin: "Abrasion" (Scrape), "Laceration" (Cut), "Contusion" (Bruise)'
      ]
    }
  ],
};
