import { Chapter } from '../types';

export const unit3: Chapter = {
  id: 3,
  slug: 'yoga-lifestyle',
  name: 'Yoga & Lifestyle',
  description: 'Preventive measures for lifestyle diseases (Obesity, Diabetes, Asthma, Hypertension, Back Pain) through Yoga.',
  topics: [
    {
      id: 'preventive-measures',
      title: 'Asanas as Preventive Measures',
      description: 'Role of Yoga in preventing lifestyle diseases and promoting overall health.',
      content: [
        'Definition: "To sit in a comfortable position or posture for everlasting period is called Asana" (Bhavanopanishad).',
        'Patanjali Definition: "Sthira sukham asanam" (Asana means a steady and comfortable posture).',
        'Physiological Benefits:',
        '1. Bones & Joints: Yoga is weight-bearing, strengthens bones, increases density. (e.g. Tadasana).',
        '2. Blood Circulation: Increases cardiac output, oxygenates blood, improves memory/alertness, helps vital organs.',
        '3. Immunity: Lowers cortisol (stress), stimulates lymphatic system to remove toxins.',
        '4. Respiratory Efficiency: Increases lung size/capacity, lowers resting respiratory rate.',
        '5. Excretory System: Improves blood to kidneys/liver to excrete waste (lactic acid, urea).',
        '6. Muscular Tissues: Strengthens weak muscles, stretches tight ones, corrects posture.'
      ],
      visualizations: [
        {
          id: 'v3-0-hack',
          title: 'Yoga "Core Essence"',
          type: 'grid',
          hack: '3-Keyword: "Control, Balance, Holistic"',
          data: [
            { label: 'Patanjali', desc: 'Sthira sukham asanam (Steady and Comfortable).' }
          ]
        },
        {
          id: 'v3-0',
          title: 'Physiological Impact of Asanas',
          type: 'list',
          data: [
            'Bones: Increased Density',
            'Cardio: Improved Circulation',
            'Lungs: Enhanced Capacity',
            'Muscles: Strength & Flexibility',
            'Immunity: Stress Reduction'
          ]
        }
      ]
    },
    {
      id: 'obesity',
      title: 'Obesity Management',
      description: 'Asanas to reduce excess body fat and improve metabolism.',
      content: [
        'Definition: A condition of excess body fat accumulation (BMI >= 30).',
        'Recommended Asanas: Vajrasana, Hastasana, Trikonasana, Ardha Matsyendrasana.'
      ],
      dangerZones: [
        'Vajrasana: Avoid If Knee Injury / Ligament Issue.',
        'Hastasana: Avoid If Shoulder Pain / Vertigo.',
        'Trikonasana: Avoid If Severe Back Pain / Migraine.',
        'Ardha Matsyendrasana: Avoid If Pregnancy / Slipped Disc.'
      ],
      visualizations: [
        {
          id: 'v3-obesity-hack',
          title: 'Obesity "Rapid Recall"',
          type: 'grid',
          hack: '3-Keyword: "Digestion, Metabolism, Slimming"',
          data: [
            { label: 'Key Move', desc: 'Vajrasana is the ONLY asana for after-meals.' }
          ]
        },
        {
          id: 'v3-1',
          title: 'Obesity Asana Protocol',
          type: 'table',
          data: {
            headers: ['Asana', 'Mechanism', 'Contraindication'],
            rows: [
              ['Vajrasana', 'Improves digestion, boosts metabolism', 'Acute knee pain'],
              ['Trikonasana', 'Burns lateral fat', 'Severe back pain'],
              ['Hastasana', 'Stretches abdominal muscles', 'Shoulder injury']
            ]
          }
        },
        {
          id: 'v3-2',
          title: 'Vajrasana Procedure',
          type: 'steps',
          data: [
            '1. Kneel down on the floor.',
            '2. Sit on your heels with big toes touching.',
            '3. Keep spine erect and hands on knees.',
            '4. Hold for 3-5 minutes after meals.'
          ]
        }
      ]
    },
    {
      id: 'diabetes',
      title: 'Diabetes Management',
      description: 'Asanas to stimulate the pancreas and regulate blood sugar.',
      content: [
        'Definition: Metabolic disorder characterized by high blood sugar (Insulin deficiency/resistance).',
        'Recommended Asanas: Bhujangasana, Paschimottanasana, Pawanmuktasana, Ardha Matsyendrasana.'
      ],
      dangerZones: [
        'Bhujangasana: Avoid If Hernia / Abdominal Surgery.',
        'Paschimottanasana: Avoid If Slipped Disc / Sciatica.',
        'Pawanmuktasana: Avoid If Recent Abdominal Surgery.',
        'Ardha Matsyendrasana: Avoid If Severe Spinal Injury.'
      ],
      visualizations: [
        {
          id: 'v3-diabetes-hack',
          title: 'Diabetes "Rapid Recall"',
          type: 'grid',
          hack: '3-Keyword: "Insulin, Pancreas, Compression"',
          data: [
            { label: 'Key Move', desc: 'Bhujangasana/Paschimottanasana squeeze the pancreas.' }
          ]
        },
        {
          id: 'v3-3',
          title: 'Asanas for Pancreas Stimulation',
          type: 'grid',
          data: [
            { label: 'Bhujangasana', desc: 'Frontal abdominal stretch.' },
            { label: 'Paschimottanasana', desc: 'Abdominal compression.' },
            { label: 'Ardha Matsyendrasana', desc: 'Spinal twist squeezing pancreas.' }
          ]
        }
      ]
    },
    {
      id: 'asthma',
      title: 'Asthma Management',
      description: 'Asanas to expand chest capacity and improve respiration.',
      content: [
        'Definition: Chronic inflammatory condition where airways narrow due to triggers (allergens, cold air).',
        'Recommended Asanas: Sukhasana, Chakrasana, Gomukhasana, Parvatasana, Matsyasana, Paschimottanasana.'
      ],
      dangerZones: [
        'Sukhasana: Avoid If Acute Knee Pain.',
        'Chakrasana: Avoid If High Blood Pressure (Hypertension).',
        'Matsyasana: Avoid If Neck Injury / Spondylitis.',
        'Gomukhasana: Avoid If Shoulder/Neck Injury.'
      ],
      visualizations: [
        {
          id: 'v3-asthma-hack',
          title: 'Asthma "Rapid Recall"',
          type: 'grid',
          hack: '3-Keyword: "Expansion, Congestion, Breathing"',
          data: [
            { label: 'Key Move', desc: 'Chakrasana & Matsyasana open the chest cavity.' }
          ]
        },
        {
          id: 'v3-4',
          title: 'Gomukhasana Procedure',
          type: 'steps',
          data: [
            '1. Sit with legs extended.',
            '2. Cross legs so knees are stacked.',
            '3. Clasp hands behind back (one from top, one from bottom).',
            '4. Keep spine erect and look forward.'
          ]
        },
        {
          id: 'v3-5',
          title: 'Matsyasana Procedure',
          type: 'steps',
          data: [
            '1. Lie flat on back (or in Padmasana).',
            '2. Arch back lifting chest.',
            '3. Rest crown of head on floor.',
            '4. Hold toes with hands.'
          ]
        }
      ]
    },
    {
      id: 'hypertension',
      title: 'Hypertension Management',
      description: 'Asanas to induce relaxation and lower blood pressure.',
      content: [
        'Definition: Blood pressure above normal (systolic >140 mmHg, diastolic >90 mmHg).',
        'Recommended Asanas: Tadasana, Vajrasana, Pawanmuktasana, Ardha Chakrasana, Bhujangasana, Shavasana.'
      ],
      dangerZones: [
        'Tadasana: Avoid If Low Blood Pressure / Vertigo.',
        'Ardha Chakrasana: Avoid If Severe Hypertension / Vertigo.',
        'Bhujangasana: Avoid If Hernia (Standard rule).'
      ],
      visualizations: [
        {
          id: 'v3-hyp-hack',
          title: 'Hypertension "Rapid Recall"',
          type: 'grid',
          hack: '3-Keyword: "Relaxation, Calm, Circulation"',
          data: [
            { label: 'Key Move', desc: 'Shavasana is the king of relaxation.' }
          ]
        },
        {
          id: 'v3-6',
          title: 'Relaxation Asanas Protocol',
          type: 'table',
          data: {
            headers: ['Asana', 'Benefit', 'Key Step'],
            rows: [
              ['Shavasana', 'Reduces sympathetic nervous activity', 'Conscious relaxation'],
              ['Vajrasana', 'Calmness', 'Sit on heels'],
              ['Bhujangasana', 'Stress relief', 'Cobra stretch']
            ]
          }
        }
      ]
    },
    {
      id: 'back-pain',
      title: 'Back Pain Management',
      description: 'Asanas to strengthen the spine and relieve stiffness.',
      content: [
        'Definition: Pain in cervical, thoracic, or lumbar region.',
        'Recommended Asanas: Vakrasana, Shalabhasana, Bhujangasana, Tadasana, Ardha Matsyendrasana.'
      ],
      dangerZones: [
        'Vakrasana: Avoid If Severe Spinal Injury / Recent Surgery.',
        'Shalabhasana: Avoid If Hernia / Peptic Ulcers.',
        'Bhujangasana: Avoid If Abdominal Surgery.'
      ],
      visualizations: [
        {
          id: 'v3-back-hack',
          title: 'Back Pain "Rapid Recall"',
          type: 'grid',
          hack: '3-Keyword: "Strength, Flexibility, Alignment"',
          data: [
            { label: 'Key Move', desc: 'Bhujangasana realigns the thoracic spine.' }
          ]
        },
        {
          id: 'v3-7',
          title: 'Spinal Health Asanas',
          type: 'flow',
          data: [
            'Tadasana (Stretch)',
            'Bhujangasana (Backward Bend)',
            'Shalabhasana (Lower Back Strength)',
            'Vakrasana (Twist)'
          ]
        }
      ]
    }
  ],
  flashcards: [
    // Sanskrit Roots (NEW)
    { id: 'f3-root-1', category: 'Definition', question: 'Meaning of Sanskrit root "Vajra"?', answer: 'Thunderbolt.' },
    { id: 'f3-root-2', category: 'Definition', question: 'Meaning of Sanskrit root "Matsya"?', answer: 'Fish.' },
    { id: 'f3-root-3', category: 'Definition', question: 'Meaning of Sanskrit root "Bhujanga"?', answer: 'Cobra.' },
    { id: 'f3-root-4', category: 'Definition', question: 'Meaning of Sanskrit root "Paschima"?', answer: 'West or Back (referring to back of body).' },
    { id: 'f3-root-5', category: 'Definition', question: 'Meaning of Sanskrit root "Pawan"?', answer: 'Wind (Mukta = Release).' },
    { id: 'f3-root-6', category: 'Definition', question: 'Meaning of Sanskrit root "Trikona"?', answer: 'Triangle.' },
    // Definitions
    { id: 'f3-1', category: 'Definition', question: 'What is Diabetes?', answer: 'A metabolic disorder caused by insufficient insulin or insulin resistance, leading to high blood sugar.' },
    { id: 'f3-2', category: 'Definition', question: 'What is Asthma?', answer: 'A chronic respiratory condition causing inflammation and narrowing of airways.' },
    { id: 'f3-3', category: 'Definition', question: 'What is Hypertension?', answer: 'High Blood Pressure condition mainly defined by reading >140/90 mmHg.' },
    { id: 'f3-4', category: 'Definition', question: 'What constitutes Obesity?', answer: 'Abnormal fat accumulation with BMI >= 30.' },
    // Asana Identification
    { id: 'f3-5', category: 'Classification', question: 'Name 3 Asanas for Obesity.', answer: 'Vajrasana, Hastasana, Trikonasana, Ardha Matsyendrasana.' },
    { id: 'f3-6', category: 'Classification', question: 'Name 3 Asanas for Diabetes.', answer: 'Bhujangasana, Paschimottanasana, Pawanmuktasana.' },
    { id: 'f3-7', category: 'Classification', question: 'Name 3 Asanas for Asthma.', answer: 'Matsyasana, Gomukhasana, Chakrasana, Paschimottanasana.' },
    { id: 'f3-8', category: 'Classification', question: 'Name 3 Asanas for Hypertension.', answer: 'Shavasana, Tadasana, Vajrasana, Pawanmuktasana.' },
    { id: 'f3-9', category: 'Classification', question: 'Name 3 Asanas for Back Pain.', answer: 'Shalabhasana, Bhujangasana, Vakrasana, Ardha Matsyendrasana.' },
    // Contraindications
    { id: 'f3-10', category: 'Injury', question: 'Who should avoid Vajrasana?', answer: 'People with acute knee pain or ligament injury.' },
    { id: 'f3-11', category: 'Injury', question: 'Who should avoid Bhujangasana?', answer: 'People with Hernia or recent abdominal surgery or severe back problem.' },
    { id: 'f3-12', category: 'Injury', question: 'Who should avoid Chakrasana?', answer: 'People with high BP (Hypertension) or heart problems.' },
    { id: 'f3-13', category: 'Injury', question: 'Who should avoid Matsyasana?', answer: 'People with neck injury or spondylitis; also Hypertension.' },
    { id: 'f3-14', category: 'Injury', question: 'Who should avoid Paschimottanasana?', answer: 'People with severe back pain, slipped disc, or sciatica.' },
    // Technical/Physiology
    { id: 'f3-15', category: 'Physiology', question: 'How does Bhujangasana help Diabetes?', answer: 'It stretches the abdomen and stimulates the pancreas to improve insulin secretion.' },
    { id: 'f3-16', category: 'Physiology', question: 'How does Vajrasana help digestion?', answer: 'It reduces blood flow to legs and increases flow to the digestive tract.' },
    { id: 'f3-17', category: 'Physiology', question: 'How does Shavasana help Hypertension?', answer: 'It calms the nervous system and reduces sympathetic dominance.' },
    { id: 'f3-18', category: 'Physiology', question: 'How does Gomukhasana help Asthma?', answer: 'It expands the chest cavity, improving lung capacity.' },
    // True/False
    { id: 'f3-19', category: 'TrueFalse', question: 'True or False: Vajrasana can be performed after meals.', answer: 'True. It is the only asana recommended immediately after meals.' },
    { id: 'f3-20', category: 'TrueFalse', question: 'True or False: Hypertensive patients should do Chakrasana.', answer: 'False. Inverted poses or intense backward bends raise BP.' },
    { id: 'f3-21', category: 'TrueFalse', question: 'True or False: Obesity is a lifestyle disease.', answer: 'True.' },
    // Management
    { id: 'f3-22', category: 'Management', question: 'Can stress cause Hypertension?', answer: 'Yes, chronic stress is a major risk factor.' },
    { id: 'f3-23', category: 'Management', question: 'Is irregular eating a cause of Obesity?', answer: 'Yes, along with lack of exercise and hormonal issues.' },
    // Additional Asanas
    { id: 'f3-24', category: 'Asana', question: 'What is the English name for Tadasana?', answer: 'Mountain Pose (or Palm Tree Pose).' },
    { id: 'f3-25', category: 'Asana', question: 'What is the English name for Bhujangasana?', answer: 'Cobra Pose.' },
    { id: 'f3-26', category: 'Asana', question: 'What is the English name for Paschimottanasana?', answer: 'Seated Forward Bend.' },
    { id: 'f3-27', category: 'Asana', question: 'What is the English name for Pawanmuktasana?', answer: 'Wind Relieving Pose.' },
    { id: 'f3-28', category: 'Asana', question: 'English name for Shalabhasana?', answer: 'Locust Pose.' },
    { id: 'f3-29', category: 'Asana', question: 'English name for Trikonasana?', answer: 'Triangle Pose.' },
    { id: 'f3-30', category: 'Asana', question: 'English name for Gomukhasana?', answer: 'Cow Face Pose.' },
    // Procedures (Steps)
    { id: 'f3-31', category: 'Technical', question: 'Key step in Tadasana?', answer: 'Lifting heels and balancing on toes while stretching arms up.' },
    { id: 'f3-32', category: 'Technical', question: 'Key breathing in Bhujangasana?', answer: 'Inhale while lifting the chest up.' },
    { id: 'f3-33', category: 'Technical', question: 'Key breathing in Paschimottanasana?', answer: 'Exhale while bending forward.' },
    // More Physiological
    { id: 'f3-34', category: 'Physiology', question: 'Which organ produces Insulin?', answer: 'Pancreas.' },
    { id: 'f3-35', category: 'Physiology', question: 'Primary cause of Type 2 Diabetes?', answer: 'Insulin Resistance.' },
    { id: 'f3-36', category: 'Physiology', question: 'Normal BP reading?', answer: '120/80 mmHg or below.' },
    { id: 'f3-37', category: 'Physiology', question: 'BMI range for Obesity?', answer: '>= 30.' },
    // General
    { id: 'f3-38', category: 'Theory', question: 'Meaning of "Asana"?', answer: 'A steady and comfortable posture (Sthira Sukham Asanam).' },
    { id: 'f3-39', category: 'Theory', question: 'Preventive role of Yoga?', answer: 'Improves immunity, reduces stress, and balances metabolism.' },
    { id: 'f3-40', category: 'Theory', question: 'Why is warm-up important before Asanas?', answer: 'To increase blood flow and flexibility, preventing injury.' },
    // Specifics
    { id: 'f3-41', category: 'Asana', question: 'Contraindication for Ardha Matsyendrasana?', answer: 'Pregnancy and severe spinal injury.' },
    { id: 'f3-42', category: 'Asana', question: 'Benefit of Katichakrasana?', answer: 'Tones waist and improves spinal flexibility.' },
    { id: 'f3-43', category: 'Asana', question: 'Benefit of Ustrasana (Camel Pose)?', answer: 'Expands chest, good for Asthma.' },
    { id: 'f3-44', category: 'Asana', question: 'Contraindication for Halasana?', answer: 'Cervical spondylitis and high BP.' },
    { id: 'f3-45', category: 'Asana', question: 'Benefit of Mandukasana?', answer: 'Stimulates pancreas, good for Diabetes.' },
    { id: 'f3-46', category: 'Technical', question: 'Sanskrit name for Fish Pose?', answer: 'Matsyasana.' },
    { id: 'f3-47', category: 'Technical', question: 'Sanskrit name for Diamond Pose?', answer: 'Vajrasana.' },
    { id: 'f3-48', category: 'Technical', question: 'Sanskrit name for Corpse Pose?', answer: 'Shavasana.' },
    { id: 'f3-49', category: 'Technical', question: 'Breathing rule for twisting asanas?', answer: 'Exhale while twisting.' },
    { id: 'f3-50', category: 'Technical', question: 'Duration for holding preventive asanas?', answer: 'Ideally 3-5 minutes or as per capacity.' }
  ],
  mindMap: {
    id: 'm3-1',
    label: 'Unit 3: Yoga & Lifestyle',
    children: [
      {
        id: 'm3-2',
        label: 'Obesity',
        children: [
          { id: 'm3-2a', label: 'Vajrasana' },
          { id: 'm3-2b', label: 'Trikonasana' },
          { id: 'm3-2c', label: 'Hastasana' }
        ]
      },
      {
        id: 'm3-3',
        label: 'Diabetes',
        children: [
          { id: 'm3-3a', label: 'Bhujangasana' },
          { id: 'm3-3b', label: 'Paschimottanasana' },
          { id: 'm3-3c', label: 'Areh-Matsyendr-asana' }
        ]
      },
      {
        id: 'm3-4',
        label: 'Asthma',
        children: [
          { id: 'm3-4a', label: 'Matsyasana' },
          { id: 'm3-4b', label: 'Gomukhasana' },
          { id: 'm3-4c', label: 'Chakrasana' }
        ]
      },
      {
        id: 'm3-5',
        label: 'Hypertension',
        children: [
          { id: 'm3-5a', label: 'Shavasana' },
          { id: 'm3-5b', label: 'Tadasana' },
          { id: 'm3-5c', label: 'Ardha Halasana' }
        ]
      },
      {
        id: 'm3-6',
        label: 'Back Pain',
        children: [
          { id: 'm3-6a', label: 'Shalabhasana' },
          { id: 'm3-6b', label: 'Vakrasana' },
          { id: 'm3-6c', label: 'Bhujangasana' }
        ]
      }
    ]
  },
  cheatSheet: [
    {
      title: 'The Asana Cure Matrix',
      points: [
        'Obesity: Vajrasana (Digestion), Trikonasana (Side Fat), Hastasana (Waist)',
        'Diabetes: Bhujangasana (Pancreas), Paschimottanasana (Abd. Compression)',
        'Asthma: Matsyasana (Lungs), Gomukhasana (Chest Expansion), Chakrasana',
        'Hypertension: Shavasana (Relax), Tadasana (Stretch), Vajrasana',
        'Back Pain: Shalabhasana (Lumbar), Bhujangasana (Spine), Vakrasana'
      ]
    },
    {
      title: 'Sanskrit Roots (Decoding Names)',
      points: [
        'Bhujanga = Cobra | Matsya = Fish | Kurma = Tortoise',
        'Vajra = Thunderbolt | Trikona = Triangle | Vriksha = Tree',
        'Paschima = West/Back | Ardha = Half | Mukta = Release'
      ]
    },
    {
      title: 'Contraindication Logic',
      points: [
        'Forward Bends: STOP if Back Pain / Slip Disc / Sciatica',
        'Backward Bends: STOP if Hernia / Abdominal Surgery',
        'Inversions/Intense: STOP if High Blood Pressure (BP) / Heart Issues / Migraine',
        'Kneeling: STOP if Knee Injury / Osteoarthritis'
      ]
    },
    {
      title: 'Golden Keywords',
      points: [
        'Definition: "Sthira Sukham Asanam" (Steady & Comfortable)',
        'Benefits: "Cardiac Output", "Lung Capacity", "Neuromuscular Coordination"',
        'Goal: "Preventive Measure", "Holistic Health"'
      ]
    },
    {
      title: 'Physiological Benefits (Mnemonics)',
      points: [
        'Bones: Increased Density (Weight bearing)',
        'Lungs: Increased Vital Capacity (Pranayama effects)',
        'Heart: Decreased Resting Heart Rate (Efficiency)',
        'Mind: Reduced Cortisol (Stress hormone)'
      ]
    }
  ],
  sqp: [
    {
      id: 'u3-mcq-2023-sqp-q1',
      year: '2023-24',
      paperType: 'SQP',
      marks: 1,
      type: 'MCQ',
      questionNumber: 'Q1.',
      question: 'Identify the asana shown in the image (Person touching knees with head):\n(a) Halasana\n(b) Pawanmuktasana\n(c) Chakrasana\n(d) Dhanurasana',
      answer: '(b) Pawanmuktasana',
      markingScheme: 'B. Pawanmuktasana',
      aiExplanation: 'Teacher\'s Voice: \n*   The posture shows the knees being hugged to the chest/head, which equates to "Wind Releasing Pose" or **Pawanmuktasana**. \n*   Halasana involves legs over head. Chakrasana is a wheel. Dhanurasana is a bow.'
    },
    {
      id: 'u3-mcq-2024-sqp-q1-blind',
      year: '2023-24',
      paperType: 'SQP',
      marks: 1,
      type: 'MCQ',
      questionNumber: 'Q1.',
      question: 'Shalbhasana pose refers to:\n(a) Grasshopper pose\n(b) Cow pose\n(c) Fish pose\n(d) Cobra pose',
      answer: '(a) Grasshopper pose',
      markingScheme: 'A. Grasshopper pose',
      aiExplanation: 'Teacher\'s Voice: \n*   **Shalabha** translates to "Locust" or "Grasshopper". \n*   **Gomukhasana** is Cow Face pose. \n*   **Matsyasana** is Fish pose. \n*   **Bhujangasana** is Cobra pose.'
    },
    {
      id: 'u3-mcq-2024-sqp-q12',
      year: '2023-24',
      paperType: 'SQP',
      marks: 1,
      type: 'MCQ',
      questionNumber: 'Q12.',
      question: 'Which gland is associated with Diabetes?\n(a) Endocrine glands\n(b) Pituitary\n(c) Pancreas\n(d) Hypothalmus',
      answer: '(c) Pancreas',
      markingScheme: 'C. Pancreas',
      aiExplanation: 'Teacher\'s Voice: \n*   **Mechanism:** Diabetes is the inability to regulate blood sugar. \n*   **Organ:** Beta cells of Islets of Langerhans in the **Pancreas** secrete Insulin. \n*   **Deficiency:** Reduced insulin leads to Diabetes.'
    },
    {
      id: 'u3-la-2024-sqp-q34',
      year: '2023-24',
      paperType: 'SQP',
      marks: 5,
      type: 'LA',
      questionNumber: 'Q34.',
      question: 'Discuss the asanas helpful for a person suffering from Hypertension. Write down the procedure and contraindications of Sarala Matsyasana in detail.',
      answer: 'Hypertension asanas: Tadasana, Katichakrasana, Uttanpadasana. Sarala Matsyasana involves arching back with support.',
      markingScheme: 'Asanas for Hypertension: Tadasana, Katichakrasana, Uttanpadasana, Ardha Halasana, Sarala Matsyasana, Gomukhasana, UttanMandukasana, Vakrasana, Bhujangasana, Makarasana, Shavasana, Nadi-shodhanapranayam, Sitlipranayam. \n\nProcedure of Sarala Matsyasana: \n1. Lie on the back with legs together and hands beside the thighs. \n2. Place palms under the shoulders, fingers pointing towards the body. \n3. Inhale and lift the head and chest, arching the back. \n4. Place crown of head on floor. \n\nContraindications: \n1. Spondylitis \n2. Cardiovascular diseases \n3. Hernia \n4. Migraine',
      aiExplanation: 'Teacher\'s Voice - Scoring Strategy (5 Marks): \n1. **List Asanas (2 Marks):** Mention at least 4-5 names (Shavasana is easiest to remember). \n2. **Procedure (1.5 Marks):** Break into steps (Start position -> Action -> Final Pose). \n3. **Contraindications (1.5 Marks):** Mention Neck issues (Spondylitis) or BP issues (Check specific rules for modifications).'
    },
    {
      id: 'u3-mcq-2024-sqp-q6',
      year: '2024-25',
      paperType: 'SQP',
      marks: 1,
      type: 'MCQ',
      questionNumber: 'Q6.',
      question: 'Which asana poses like a cobra?\n(a) Shalabhasana\n(b) Bhujangasana\n(c) Dhanurasana\n(d) Makarasana',
      answer: '(b) Bhujangasana',
      markingScheme: 'B. Bhujangasana',
      aiExplanation: 'Teacher\'s Voice: \n*   **Bhujanga** = Cobra. \n*   **Shalabha** = Locust. \n*   **Dhanura** = Bow. \n*   **Makara** = Crocodile.'
    },
    {
      id: 'u3-la-2024-sqp-q34-new',
      year: '2024-25',
      paperType: 'SQP',
      marks: 5,
      type: 'LA',
      questionNumber: 'Q34. (New)',
      question: 'List four asanas for Hypertension and explain one with a stick diagram.',
      answer: 'Asanas: Tadasana, Vajrasana, Shavasana, Bhujangasana.',
      markingScheme: 'Any 4 Asanas: Tadasana, Vajrasana, Pawanmuktasana, Ardha Chakrasana, Bhujangasana, Shavasana. \n\nExplanation of ANY ONE with diagram (e.g. Tadasana): \n1. Stand straight, feet together. \n2. Interlock fingers, turn palms up. \n3. Inhale and stretch arms up, lifting heels. \n4. Balance on toes.',
      aiExplanation: 'Teacher\'s Voice: \n*   **Asana Selection:** Pick simple ones like Shavasana and Tadasana. \n*   **Stick Diagram:** A simple line drawing is expected (e.g., vertical line for Tadasana with arms up). \n*   **Requirement:** Ensure 4 names are listed clearly before explaining one.'
    },
    {
      id: 'u3-mcq-2025-sqp-q6',
      year: '2025-26',
      paperType: 'SQP',
      marks: 1,
      type: 'MCQ',
      questionNumber: 'Q6.',
      question: 'Identify a yoga pose treatment for Obesity.',
      answer: 'Vajrasana',
      markingScheme: 'Vajrasana',
      aiExplanation: 'Teacher\'s Voice: \n*   **Vajrasana** (Thunderbolt Pose) is the primary asana for obesity as it improves digestion and metabolism. \n*   Other options often include Trikonasana or Hastasana.'
    }
  ]
};
