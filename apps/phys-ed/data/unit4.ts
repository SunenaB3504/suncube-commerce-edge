
import { Chapter } from '../types';

export const unit4: Chapter = {
  id: 4,
  slug: 'sports-cwsn',
  name: 'Physical Education & Sports for CWSN',
  description: 'Adaptive physical education, disability sports organizations, and strategies for inclusion of children with special needs.',
  topics: [
    {
      id: 'disability-orgs',
      title: 'Disability Sports Organizations',
      description: 'Major global and national bodies promoting sports for the differently-abled.',
      content: [
        'Special Olympics Bharat: National federation recognized by Special Olympics International, focusing on intellectual disabilities.',
        'Paralympics: Multi-sport events for athletes with physical impairments (limb deficiency, impaired muscle power, etc.).',
        'Deaflympics: International Olympic Committee-sanctioned event for deaf athletes where communication is through visual signals.',
        'Classification: A system used in disability sports to ensure fair competition by grouping athletes with similar functional limitations.'
      ],
      visualizations: [
        {
          id: 'v1',
          title: 'Organization Comparison',
          type: 'table',
          data: {
            headers: ['Organization', 'Target Group', 'Key Characteristic'],
            rows: [
              ['Special Olympics', 'Intellectual Disabilities', 'Year-round training and competition.'],
              ['Paralympics', 'Physical Impairments', 'Highest level of athletic excellence.'],
              ['Deaflympics', 'Hearing Impairment', 'Visual cues instead of auditory signals.']
            ]
          }
        },
        {
          id: 'v2',
          title: 'Special Olympics Bharat Motto',
          type: 'grid',
          data: [
            { label: 'The Oath', desc: '"Let me win. But if I cannot win, let me be brave in the attempt."' }
          ]
        }
      ]
    },
    {
      id: 'inclusion-concept',
      title: 'Concept of Inclusion',
      description: 'Integrating children with disabilities into general physical education settings.',
      content: [
        'Inclusion: The practice of educating students with disabilities in regular classrooms alongside their non-disabled peers.',
        'Need for Inclusion: Promoting social interaction, boosting self-esteem, and fostering empathy among regular students.',
        'Implementation: Requires modified curriculum, trained staff, and accessible infrastructure.'
      ],
      visualizations: [
        {
          id: 'v3',
          title: 'Benefits of Inclusion',
          type: 'grid',
          data: [
            { label: 'Social Skill', desc: 'Interaction with peers reduces isolation.' },
            { label: 'Psychological', desc: 'Improved self-confidence and body image.' },
            { label: 'Physical', desc: 'Enhanced motor skills and fitness levels.' },
            { label: 'Academic', desc: 'Better focus and cognitive engagement.' }
          ]
        }
      ]
    },
    {
      id: 'disabilities-disorders',
      title: 'Disorders: ODD & OCD',
      description: 'Understanding behavioral and anxiety disorders often co-occurring in CWSN.',
      content: [
        'Oppositional Defiant Disorder (ODD): A behavior disorder diagnosed in childhood characterized by uncooperative, defiant, and hostile behavior toward authority figures.',
        'ODD Symptoms: Angry/irritable mood, argumentative/defiant behavior, vindictiveness.',
        'Obsessive Compulsive Disorder (OCD): An anxiety disorder involving repeated thoughts (obsessions) and rituals (compulsions).',
        'OCD Symptoms: Fear of contamination, need for symmetry, unwanted aggressive thoughts (Obsessions); Washing, checking, counting, ordering (Compulsions).',
        'ADHD Connection: Children with ADHD are more likely to have ODD.'
      ],
      visualizations: [
        {
          id: 'v4-odd',
          title: 'ODD Severity Levels',
          type: 'list',
          data: [
            'Mild: Symptoms in one setting (e.g., home).',
            'Moderate: Symptoms in two settings.',
            'Severe: Symptoms in three or more settings.'
          ]
        }
      ]
    },
    {
      id: 'motor-skills-classification',
      title: 'Classification of Skills',
      description: 'Types of motor skills fundamental to physical activity and sports adaptation.',
      content: [
        'Locomotor Skills: Moving the body from one point to another. Examples: Running, jumping, hopping, galloping, rolling, leaping, dodging, sliding.',
        'Manipulative Skills: Handling objects with hands, feet, or implements. Examples: Throwing, catching, kicking, striking, trapping, dribbling.',
        'Stability Skills: Maintaining balance and body control. Examples: Balancing, twisting, turning, bending, stretching.'
      ],
      visualizations: [
        {
          id: 'v4-skills',
          title: 'Skill Categories',
          type: 'grid',
          data: [
            { label: 'Locomotor', desc: 'Body Transport (Run/Jump)' },
            { label: 'Manipulative', desc: 'Object Control (Throw/Kick)' },
            { label: 'Stability', desc: 'Body Control (Balance/Twist)' }
          ]
        }
      ]
    },
    {
      id: 'disability-etiquette',
      title: 'Disability Etiquette',
      description: 'Guidelines for respectful interaction with persons with disabilities.',
      content: [
        'Definition: A set of guidelines dealing specifically with how to approach a person with a disability.',
        'General Etiquette: Use "People First" language (e.g., "Person with disability" not "The disabled"). Avoid terms like "Crippled" or "Wheelchair-bound".',
        'Communication: Speak directly to the person, not the interpreter/companion. Use a normal tone.',
        'Physical Etiquette: Do not lean on a wheelchair (it is part of personal space). Sit at eye-level when talking to a wheelchair user.'
      ],
      visualizations: [
        {
          id: 'v4-etiquette',
          title: 'Etiquette Rulebook',
          type: 'grid',
          data: [
            { label: 'Do', desc: 'Ask before offering help.' },
            { label: 'Don\'t', desc: 'Pat a person on the head or distract guide dogs.' },
            { label: 'Do', desc: 'Shake hands (even if they have limited hand use).' },
            { label: 'Don\'t', desc: 'Make assumptions about capabilities.' }
          ]
        }
      ]
    },
    {
      id: 'advantages-pa',
      title: 'Advantages of Physical Activity',
      description: 'Benefits of sports participation for CWSN spanning physical, social, and emotional domains.',
      content: [
        'Physical Benefits: Improved muscle strength, flexibility, cardiovascular efficiency, and bone health. Helps fight obesity.',
        'Social Benefits: Reduces isolation, helps make friends, initiates social skills.',
        'emotional Benefits: Decreases depression, improves mood, wellness, and self-esteem.',
        'Independence: Improved daily life skills and greater ability to do tasks without assistance.'
      ],
      visualizations: [
        {
          id: 'v4-benefits',
          title: 'Holistic Benefits',
          type: 'table',
          data: {
            headers: ['Domain', 'Key Outcomes'],
            rows: [
              ['Physical', 'Motor skills, Obesity control'],
              ['Psychological', 'Surplus energy channelization (ADHD)'],
              ['Social', 'Teamwork, Problem Solving']
            ]
          }
        }
      ]
    },
    {
      id: 'adaptive-strategies',
      title: 'Strategies for Physical Activity',
      description: 'Methods to make physical activities accessible and effective for CWSN.',
      content: [
        'Communication: Advance info about activity, use verbal/visual/peer teaching. Simple words. "Communication Board" for non-verbal children.',
        'Space Management: Disturbance-free area (noise/heat/cold control). Boundaries marked clearly. Indoor space preferred initially.',
        'Equipment: Modified devices (lighter balls, larger targets). Bell-balls for visually impaired. Wheelchair-accessible zones.',
        'Graded Activities: Simple to complex progression. Non-locomotor -> Locomotor -> Manipulative activities.'
      ],
      visualizations: [
        {
          id: 'v4',
          title: 'Implementation Checklist',
          type: 'flow',
          data: [
            '1. Medical Assessment',
            '2. Goal Setting (IEP)',
            '3. Equipment Modification',
            '4. Simplified Instructions',
            '5. Safe Participation'
          ]
        },
        {
          id: 'v5',
          title: 'Assistive Technology',
          type: 'table',
          data: {
            headers: ['Technology', 'Usage in Sports'],
            rows: [
              ['Prosthetics', 'High-performance running blades for amputees.'],
              ['Wheelchairs', 'Specialized lightweight chairs for racing/basketball.'],
              ['Auditory Balls', 'Balls with bells for visually impaired athletes.'],
              ['Visual Cues', 'Strobe lights replacing starting guns for deaf athletes.']
            ]
          }
        },
        {
          id: 'v4-equipment-mods',
          title: 'Equipment Modification Table',
          type: 'table',
          data: {
            headers: ['Attribute', 'Easier Variant', 'Advanced Variant'],
            rows: [
              ['Weight', 'Lighter (Balloon/Foam)', 'Standard/Heavy'],
              ['Size', 'Larger (Beach ball)', 'Smaller (Tennis ball)'],
              ['Speed', 'Slower (Deflated)', 'Faster (High pressure)'],
              ['Color', 'Bright/High Contrast', 'Pale/Low Contrast'],
              ['Texture', 'Rough/Grippy', 'Smooth/Slippery']
            ]
          }
        }
      ]
    }
  ],
  flashcards: [
    // Definitions
    { id: 'f4-1', category: 'Definition', question: 'What is ODD?', answer: 'Oppositional Defiant Disorder: A childhood behavior disorder with uncooperative and hostile behavior.' },
    { id: 'f4-2', category: 'Definition', question: 'What is OCD?', answer: 'Obsessive Compulsive Disorder: Anxiety disorder with repeated thoughts (obsessions) and rituals (compulsions).' },
    { id: 'f4-3', category: 'Definition', question: 'Define Disability Etiquette.', answer: 'Guidelines for respectful interaction and communication with persons with disabilities.' },
    { id: 'f4-4', category: 'Definition', question: 'What is Adaptive Physical Education?', answer: 'A sub-discipline of PE adapted to meet the needs of children with disabilities.' },
    { id: 'f4-5', category: 'Definition', question: 'What is Inclusion in PE?', answer: 'Educating CWSN in regular PE classes alongside non-disabled peers.' },
    // Skills
    { id: 'f4-skill-1', category: 'Instruction', question: 'What are Locomotor Skills?', answer: 'Skills moving body from point A to B (Running, Jumping).' },
    { id: 'f4-skill-2', category: 'Instruction', question: 'What are Manipulative Skills?', answer: 'Skills handling objects (Throwing, Kicking, Catching).' },
    { id: 'f4-skill-3', category: 'Instruction', question: 'What are Stability Skills?', answer: 'Skills maintaining balance (Twisting, Bending).' },
    // ODD & OCD Specifics
    { id: 'f4-6', category: 'Technical', question: 'List 3 symptoms of ODD.', answer: 'Angry mood, argumentative behavior, vindictiveness.' },
    { id: 'f4-7', category: 'Technical', question: 'What is an "Obsession" in OCD?', answer: 'Repeated, persistent, unwanted thoughts or urges causing anxiety.' },
    { id: 'f4-8', category: 'Technical', question: 'What is a "Compulsion" in OCD?', answer: 'Repetitive behaviors (washing, counting) performed to reduce anxiety.' },
    { id: 'f4-9', category: 'Technical', question: 'Mild vs Severe ODD?', answer: 'Mild: 1 setting; Severe: 3+ settings.' },
    { id: 'f4-10', category: 'Technical', question: 'Common comorbid condition with ODD?', answer: 'ADHD (Attention Deficit Hyperactivity Disorder).' },
    // Organizations
    { id: 'f4-11', category: 'Organization', question: 'Focus of Special Olympics?', answer: 'Intellectual Disabilities (ID).' },
    { id: 'f4-12', category: 'Organization', question: 'Focus of Paralympics?', answer: 'Physical (and some Intellectual/Visual) Impairments.' },
    { id: 'f4-13', category: 'Organization', question: 'Focus of Deaflympics?', answer: 'Hearing Impaired athletes (55dB+ loss).' },
    { id: 'f4-14', category: 'Organization', question: 'Motto of Special Olympics?', answer: '"Let me win. But if I cannot win, let me be brave in the attempt."' },
    { id: 'f4-15', category: 'Organization', question: 'Starting signal in Deaflympics?', answer: 'Visual signals (Lights/Flags) instead of Gun/Whistle.' },
    // Strategies
    { id: 'f4-16', category: 'Strategy', question: 'Communication strategy for CWSN?', answer: 'Use simple words, visual aids, and communication boards.' },
    { id: 'f4-17', category: 'Strategy', question: 'Space strategy for CWSN?', answer: 'Disturbance-free, clearly marked boundaries, accessible (ramps).' },
    { id: 'f4-18', category: 'Strategy', question: 'Equipment strategy for Visually Impaired?', answer: 'Audio balls (bell balls) and tactile markings.' },
    { id: 'f4-19', category: 'Strategy', question: 'Equipment strategy for Motor Impairment?', answer: 'Lighter equipment, velcro straps, larger targets.' },
    { id: 'f4-20', category: 'Strategy', question: 'What is "Graded Activity"?', answer: 'Moving from simple to complex (Non-locomotor -> Locomotor -> Manipulative).' },
    // Etiquette
    { id: 'f4-21', category: 'Etiquette', question: 'General rule of Disability Etiquette?', answer: 'Treat the person with dignity; ask before helping.' },
    { id: 'f4-22', category: 'Etiquette', question: 'How to talk to a wheelchair user?', answer: 'Sit or crouch to be at their eye level.' },
    { id: 'f4-23', category: 'Etiquette', question: 'How to greet a person with an artificial hand?', answer: 'Shake hands as normal (or touch lightly) to show acceptance.' },
    { id: 'f4-24', category: 'Etiquette', question: 'Meaning of "People First Language"?', answer: 'Saying "Person with Autism" instead of "Autistic person".' },
    { id: 'f4-25', category: 'Etiquette', question: 'Rule for guide dogs?', answer: 'Do not pet or distract them while they are working.' },
    // True/False
    { id: 'f4-26', category: 'TrueFalse', question: 'True/False: ODD is an anxiety disorder.', answer: 'False. It is a behavioral disorder.' },
    { id: 'f4-27', category: 'TrueFalse', question: 'True/False: OCD rituals are done for pleasure.', answer: 'False. They are done to prevent/reduce anxiety.' },
    { id: 'f4-28', category: 'TrueFalse', question: 'True/False: You should lean on a wheelchair while talking.', answer: 'False. It is part of the user\'s personal space.' },
    { id: 'f4-29', category: 'TrueFalse', question: 'True/False: Deaflympics is under IPC.', answer: 'False. It is independent (IOC sanctioned).' },
    { id: 'f4-30', category: 'TrueFalse', question: 'True/False: Inclusion helps non-disabled students too.', answer: 'True. It builds empathy and acceptance.' },
    // Benefits
    { id: 'f4-31', category: 'Physiology', question: 'Physical benefit of sports for CWSN?', answer: 'Obesity control, bone density, motor coordination.' },
    { id: 'f4-32', category: 'Psychology', question: 'Psychological benefit?', answer: 'Channelizes surplus energy (ADHD), reduces depression.' },
    { id: 'f4-33', category: 'Social', question: 'Social benefit?', answer: 'Interaction, friendship, independence.' },
    { id: 'f4-34', category: 'Physiology', question: 'Why is bone health crucial for CWSN?', answer: 'Inactivity risks osteoporosis; weight-bearing activity prevents it.' },
    { id: 'f4-35', category: 'Psychology', question: 'Impact on Self-Esteem?', answer: 'Success in sports builds confidence and body image.' },
    // Classification
    { id: 'f4-36', category: 'Classification', question: 'Classify: Angry/Resentful.', answer: 'Symptom of ODD.' },
    { id: 'f4-37', category: 'Classification', question: 'Classify: Hand Washing Ritual.', answer: 'Symptom of OCD (Compulsion).' },
    { id: 'f4-38', category: 'Classification', question: 'Classify: Fear of Dirt.', answer: 'Symptom of OCD (Obsession).' },
    { id: 'f4-39', category: 'Classification', question: 'Classify: Intellectual Disability.', answer: 'Focus of Special Olympics.' },
    { id: 'f4-40', category: 'Classification', question: 'Classify: Amputee Sports.', answer: 'Focus of Paralympics.' },
    // Mixed
    { id: 'f4-41', category: 'Technical', question: 'Full form of ADHD?', answer: 'Attention Deficit Hyperactivity Disorder.' },
    { id: 'f4-42', category: 'Technical', question: 'Full form of SPD?', answer: 'Sensory Processing Disorder.' },
    { id: 'f4-43', category: 'Technical', question: 'Full form of ASD?', answer: 'Autism Spectrum Disorder.' },
    { id: 'f4-44', category: 'Technical', question: 'Date of World Autism Day?', answer: 'April 2nd.' },
    { id: 'f4-45', category: 'Technical', question: 'Date of World Disability Day?', answer: 'December 3rd.' }
  ],
  sqp: [
    {
      id: 'u4-sqp-2024-q-comm',
      year: '2023-24',
      paperType: 'SQP',
      marks: 3,
      type: 'SA',
      questionNumber: 'Q24.',
      question: 'Discuss strategies to make physical activities accessible for CWSN.',
      answer: 'Strategies: Communication (Variety), Space (Accessible), Equipment (Modified).',
      markingScheme: 'Communication: Advance info, verbal/visual usage. Space: Limit area, disturbance free. Equipment: Modified devices, lack of trained professionals.',
      aiExplanation: 'Teacher\'s Voice: \n*   **Communication:** Don\'t just say "talk". Mention "Visual Aids", "Sign Language", "Simple Sentences". \n*   **Space:** Mention "Ramps", "Smooth Surface", "Distraction Free". \n*   **Equipment:** Mention "Auditory Balls", "Lighter Bats", "Velcro Grips". \n*   **Key:** Use the header method for 3 marks (Header + Explanation).'
    },
    {
      id: 'u4-sqp-2024-mcq-defiant',
      year: '2023-24',
      paperType: 'SQP',
      marks: 1,
      type: 'MCQ',
      questionNumber: 'Q4.',
      question: 'Which disorder is characterized by argumentative and defiant behaviour?\n(a) ADHD\n(b) OCD\n(c) ODD\n(d) SPD',
      answer: '(c) ODD',
      markingScheme: '(c) ODD',
      aiExplanation: 'Teacher\'s Voice: \n*   **ODD (Oppositional Defiant Disorder)** = Defiance/Argument. \n*   **OCD** = Obsession/Rituals. \n*   **ADHD** = Hyperactivity/Inattention. \n*   **SPD** = Sensory issues.'
    },
    {
      id: 'u4-sqp-2025-mcq-ipc',
      year: '2024-25',
      paperType: 'SQP',
      marks: 1,
      type: 'MCQ',
      questionNumber: 'Q1.',
      question: 'Which organization is responsible for the Paralympic Games?\n(a) IOC\n(b) IPC\n(c) WHO\n(d) UNICEF',
      answer: '(b) IPC',
      markingScheme: 'B. IPC',
      aiExplanation: 'Teacher\'s Voice: \n*   **IPC** = International Paralympic Committee. \n*   **IOC** = International Olympic Committee (Able-bodied + Deaflympics recognition).'
    },
    {
      id: 'u4-sqp-2025-long-inclusion',
      year: '2025-26',
      paperType: 'SQP',
      marks: 5,
      type: 'LA',
      questionNumber: 'Q31.',
      question: 'Define Inclusion. Discuss its need and implementation in Physical Education.',
      answer: 'Inclusion is integrating CWSN in regular settings. Need: Social, Psychological. Implementation: Staff training, infrastructure, curriculum.',
      markingScheme: 'Definition: Educating CWSN in regular classrooms. \nNeeds: 1. Social Skills 2. Self Esteem 3. Academic Performance. \nImplementation: 1. Curriculum Adaptation 2. Trained Teachers 3. Barrier Free Environment.',
      aiExplanation: 'Teacher\'s Voice: \n*   **Definition (1 Mark):** Standard definition. \n*   **Need (2 Marks):** Focus on "Social Interaction" and "Confidence". \n*   **Implementation (2 Marks):** Focus on "Ramps/Lifts" (Infra) and "Special Educators" (Staff).'
    },
    {
      id: 'u4-sqp-2024-mcq-ocd',
      year: '2023-24',
      paperType: 'SQP',
      marks: 1,
      type: 'MCQ',
      questionNumber: 'Q2.',
      question: 'Putting things in certain order is a sign of:\n(a) OCD\n(b) ODD\n(c) ASD\n(d) SPD',
      answer: '(a) OCD',
      markingScheme: '(a) OCD',
      aiExplanation: 'Teacher\'s Voice: \n*   **Ordering/Symmetry** is a common compulsion in ICD. \n*   **ODD** is behavioral defiance.'
    },
    {
      id: 'u4-sqp-2024-mcq-depression',
      year: '2023-24',
      paperType: 'SQP',
      marks: 1,
      type: 'MCQ',
      questionNumber: 'Q15.',
      question: 'Which of the following is NOT a result of regular physical activity?\n(a) Increased bone density\n(b) Improved muscle strength\n(c) Increase in depression\n(d) Better cardiovascular fitness',
      answer: '(c) Increase in depression',
      markingScheme: '(c) Increase in depression',
      aiExplanation: 'Teacher\'s Voice: \n*   **Benefits:** Physical activity releases endorphins which *decrease* depression and anxiety. \n*   **Other options:** Are all valid physiological benefits.'
    },
    {
      id: 'u4-sqp-2024-case-skills',
      year: '2023-24',
      paperType: 'SQP',
      marks: 4,
      type: 'Case',
      questionNumber: 'Q33.',
      question: 'Study the image of a child throwing a ball. \n1. Throwing is an example of which motor skill? \n2. Running is which type of skill? \n3. Name one stability skill.',
      answer: '1. Manipulative 2. Locomotor 3. Balancing/Twisting',
      markingScheme: '1. Manipulative Skill \n2. Locomotor Skill \n3. Bending/Stretching/Twisting/Balancing',
      aiExplanation: 'Teacher\'s Voice: \n*   **Manipulative:** Involves an object (Ball). \n*   **Locomotor:** Involves moving location (Run). \n*   **Stability:** Involves staying in place (Balance).'
    },
    {
      id: 'u4-la-2024-sqp-q33-blind',
      year: '2023-24',
      paperType: 'SQP',
      marks: 4,
      type: 'LA',
      questionNumber: 'Q33 (Blind).',
      question: 'Explain the need for Inclusive Education.',
      answer: 'Social skills, Academic growth, Sensitivity, Belongingness.',
      markingScheme: '1. Development of Social Skills.\n2. Development of Academic Skills.\n3. Sensitive towards others.\n4. A sense of belongingness.',
      aiExplanation: 'Teacher\'s Voice - 4 Distinct Needs (4 Marks):\n1. **Social:** Interaction with diverse peers.\n2. **Academic:** Access to standard curriculum.\n3. **Emotional:** Feeling of belonging/acceptance.\n4. **Moral:** Teaches empathy to non-disabled students.'
    },
    {
      id: 'u4-sqp-2025-mcq-deaflympics',
      year: '2024-25',
      paperType: 'SQP',
      marks: 1,
      type: 'MCQ',
      questionNumber: 'Q7.',
      question: 'When was the first Deaflympics held?\n(a) 1924\n(b) 1960\n(c) 2001\n(d) 1948',
      answer: '(a) 1924',
      markingScheme: '(a) 1924 (Paris)',
      aiExplanation: 'Teacher\'s Voice: \n*   **1924:** First Deaflympics (Paris). \n*   **1960:** First Paralympics (Rome). \n*   **1948:** Stoke Mandeville Games (Precursor).'
    },
    {
      id: 'u4-sqp-2025-long-sp-objective',
      year: '2024-25',
      paperType: 'SQP',
      marks: 3,
      type: 'SA',
      questionNumber: 'Q27.',
      question: 'State the aim and objectives of Special Olympics Bharat.',
      answer: 'Focus on holistic development of persons with Intellectual Disability through sports.',
      markingScheme: '1. Holistic development through sports. \n2. Create role models for inclusion. \n3. Training coaches and teachers. \n4. Focus on Intellectually Disabled.',
      aiExplanation: 'Teacher\'s Voice: \n*   Mention **"Intellectual Disability"** explicitly. \n*   Mention **"Year-round training"**.'
    },
    {
      id: 'u4-sqp-2025-case-para-logo',
      year: '2024-25',
      paperType: 'SQP',
      marks: 4,
      type: 'Case',
      questionNumber: 'Q32.',
      question: 'Identify the logo shown (Three Agitos). \n1. Name the organization. \n2. What is the motto? \n3. When were the first games held?',
      answer: '1. International Paralympic Committee 2. Spirit in Motion 3. 1960 Rome',
      markingScheme: '1. International Paralympic Committee (IPC) / Paralympics \n2. "Spirit in Motion" \n3. 1960, Rome',
      aiExplanation: 'Teacher\'s Voice: \n*   **Logo:** 3 Agitos (Red, Blue, Green). \n*   **Motto:** "Spirit in Motion". \n*   **Confusion:** Don\'t confuse with Special Olympics (Sphere) or Deaflympics (Hand shapes/Circles).'
    },
    {
      id: 'u4-sqp-2026-mcq-sp-part',
      year: '2025-26',
      paperType: 'SQP',
      marks: 1,
      type: 'MCQ',
      questionNumber: 'Q7.',
      question: 'Who are the participants in Special Olympics?\n(a) Physically Impaired\n(b) Intellectually Disabled\n(c) Hearing Impaired\n(d) Visually Impaired',
      answer: '(b) Intellectually Disabled',
      markingScheme: '(b) Children and adults with intellectual disabilities',
      aiExplanation: 'Teacher\'s Voice: \n*   **Special Olympics** = Intellectual ID. \n*   **Paralympics** = Physical/Visual. \n*   **Deaflympics** = Hearing.'
    }
  ],
  mindMap: {
    id: 'm1',
    label: 'Unit 4: CWSN Sports',
    children: [
      {
        id: 'm2',
        label: 'Organizations',
        children: [{ id: 'm3', label: 'Sp. Olympics (ID)' }, { id: 'm4', label: 'Paralympics (Physical)' }, { id: 'm5', label: 'Deaflympics (Hearing)' }]
      },
      {
        id: 'm6',
        label: 'Disorders',
        children: [{ id: 'm7', label: 'ODD (Defiance)' }, { id: 'm8', label: 'OCD (Anxiety)' }, { id: 'm9', label: 'ADHD (Hyperactivity)' }]
      },
      {
        id: 'm10',
        label: 'Strategies',
        children: [{ id: 'm11', label: 'Mod. Equipment' }, { id: 'm12', label: 'Visual Comm.' }, { id: 'm13', label: 'Barrier-Free Space' }]
      }
    ]
  },
  cheatSheet: [
    {
      title: 'Disorder Mnemonics',
      points: [
        'ODD (Oppositional Defiant Disorder): A.D.V (Angry Mood, Defiant Behavior, Vindictiveness)',
        'OCD (Obsessive Compulsive Disorder): O -> A -> C -> R (Obsession -> Anxiety -> Compulsion -> Relief)',
        'ADHD (Attention Deficit Hyperactivity Disorder): "Hyper-Focus" paradox (Can foster creativity)'
      ]
    },
    {
      title: 'Organization Showdown (Vs)',
      points: [
        'Special Olympics: Intellectual Disability | Oath: "Let me win..."',
        'Paralympics: Physical/Visual Impairment | Motto: "Spirit in Motion"',
        'Deaflympics: Hearing Impairment (>55dB) | Sign: Visual cues (Lights)'
      ]
    },
    {
      title: 'Etiquette Rulebook',
      points: [
        'Rule #1: "Person First Language" ("Person with autism" NOT "Autistic")',
        'Wheelchair: "It is personal space" (Don\'t lean/touch)',
        'Blindness: "Identify yourself first" (Say name when entering)'
      ]
    },
    {
      title: 'Golden Keywords',
      points: [
        'Inclusion: "Mainstreaming", "Diverse Needs", "Empathy"',
        'Strategies: "Modified Equipment", "Barrier-Free", "Multi-Sensory"',
        'Goal: "Holistic Development", "Social Integration"'
      ]
    },
    {
      title: 'Skill Classification',
      points: [
        'Locomotor: Body moves A to B (Run, Jump, Hop)',
        'Manipulative: Equipment control (Throw, Kick, Strike)',
        'Stability: Body control in place (Balance, Twist)'
      ]
    },
    {
      title: 'Equipment Modification Logic',
      points: [
        'Visual Issue -> Bright Colors, Bell Balls',
        'Motor Issue -> Velcro Grips, Lighter Bats',
        'Hearing Issue -> Whistle replaced by Flag/Light'
      ]
    }
  ],
};
