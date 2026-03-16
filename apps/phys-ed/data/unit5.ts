import { Chapter } from '../types';

export const unit5: Chapter = {
  id: 5,
  slug: 'children-women-sports',
  name: 'Children & Women in Sports',
  description: 'Motor development, exercise guidelines by age, postural deformities, and special considerations for female athletes.',
  topics: [
    {
      id: 'motor-development',
      title: 'Motor Development',
      description: 'Progressive change in movement behavior throughout the lifecycle.',
      content: [
        'Definition: Continuous change in motor behavior brought about by interaction among task requirements, biology, and environment.',
        'Gross Motor Skills: Involvement of large muscle groups (Sitting, Walking, Running, Climbing).',
        'Fine Motor Skills: Precision movements using small muscles (Writing, catching, cutting with scissors).',
        'Domains: 1. Physical (Growth), 2. Cognitive (Intellect), 3. Affective (Social/Emotional), 4. Psychomotor (Movement).',
        'Factors Affecting Development: Genetic Factors, Nutrition, Physical Activities, Immunization, and Environment.'
      ],
      visualizations: [
        {
          id: 'v1',
          title: 'Stages of Motor Development',
          type: 'list',
          data: [
            'Infant: Reflexive movements, basic grasping.',
            'Early Childhood: Fundamental skills (running, jumping).',
            'Adolescence: Specialized skills, sport-specific training.',
            'Adulthood: Maintenance and peak performance.'
          ]
        }
      ]
    },
    {
      id: 'exercise-guidelines',
      title: 'Exercise Guidelines (WHO)',
      description: 'Physical activity recommendations for different age groups.',
      content: [
        'Under 5 Years: Active play, minimal sedentary time (<1hr restrained). 180 mins physical activity for 3-4 year olds.',
        'Children (5-17 Years): At least 60 mins/day of moderate-to-vigorous activity. Muscle/Bone strengthening 3 times/week.',
        'Adults (18-64 Years): 150-300 mins moderate or 75-150 mins vigorous activity per week.',
        'Seniors (65+): Focus on balance and functional ability. Similar duration to adults but adjusted for intensity.'
      ],
      visualizations: [
        {
          id: 'v2',
          title: 'WHO Activity Rubric',
          type: 'table',
          data: {
            headers: ['Age Group', 'Duration', 'Focus'],
            rows: [
              ['5-17', '60 mins/day', 'Aerobic + Bone Strengthening'],
              ['18-64', '150 mins/week', 'Aerobic + Muscle Maintenance'],
              ['65+', 'Varied', 'Balance, Fall Prevention']
            ]
          }
        }
      ]
    },
    {
      id: 'postural-deformities',
      title: 'Common Postural Deformities',
      description: 'Spinal and skeletal deviations and their corrective measures.',
      content: [
        'Kyphosis (Hunchback): Exaggerated posterior curvature of thoracic spine. Corrective: Bhujangasana, Chakrasana.',
        'Lordosis (Swayback): Exaggerated anterior curvature of lumbar spine. Corrective: Halasana, Paschimottanasana.',
        'Scoliosis: Lateral curvature of spine (S or C shape). Corrective: Trikonasana, Chin-ups.',
        'Knock Knees (Genu Valgum): Knees touch while ankles are apart. Corrective: Horse riding, Padmasana.',
        'Bow Legs (Genu Varum): Knees wide apart when feet are together. Corrective: Walking on inner edge of feet.',
        'Flat Foot: Loss of foot arch. Corrective: Walking on toes, Tadasana.',
        'Round Shoulders: Shoulders bent forward. Corrective: Dhanurasana, Chakrasana.'
      ],
      visualizations: [
        {
          id: 'v5-def-hack',
          title: 'Silhouette "Pattern Hack"',
          type: 'grid',
          hack: 'Visual Recognition Hack: If knees TOUCH = Genu Valgum (Knock Knees). If knees ARE WIDE apart = Genu Varum (Bow Legs). Think "V" for Valgum (inward) and "O" for Varum (outward).',
          data: [
            { label: 'Knock Knees', desc: 'Walking pattern: Knees strike each other.' },
            { label: 'Bow Legs', desc: 'Walking pattern: Knees wide apart.' }
          ]
        },
        {
          id: 'v5-ex-hack',
          title: 'Exercise "Single-Fix" Solution',
          type: 'grid',
          hack: 'The "Horse-Rider" Hack: Padmasana & Horse Riding are MAPPED to Knock Knees. Walking on inner edge of feet is MAPPED to Bow Legs.',
          data: [
            { label: 'Knock Knees Fix', desc: 'Horse Riding, Padmasana, Pillow between knees.' },
            { label: 'Bow Legs Fix', desc: 'Walking on inner edge, Ardhachakrasana.' }
          ]
        },
        {
          id: 'v5-3',
          title: 'Spine Deformities',
          type: 'flow',
          data: [
            'Thoracic -> Kyphosis (Round Back)',
            'Lumbar -> Lordosis (Hollow Back)',
            'Lateral -> Scoliosis (Sideways)'
          ]
        }
      ]
    },
    {
      id: 'women-participation',
      title: 'Women in Sports',
      description: 'Analysis of constraints and the female athlete triad.',
      content: [
        'Constraints: Social (Traditional roles), Psychological (Low self-esteem), Economic (Lack of sponsorship), Physiological (Myths about frailty).',
        'Menarche: The onset of menstruation. Heavy training may sometimes delay it (Primary Amenorrhea).',
        'Menstrual Dysfunction: Irregular cycles due to intense training or low energy availability.',
        'Female Athlete Triad: A syndrome of three interrelated conditions: 1. Osteoporosis (Low bone mass), 2. Amenorrhea (Missed periods), 3. Disordered Eating (Low energy availability).'
      ],
      visualizations: [
        {
          id: 'v4',
          title: 'The Female Athlete Triad',
          type: 'grid',
          data: [
            { label: 'Osteoporosis', desc: 'Weak bones, risk of stress fractures.' },
            { label: 'Amenorrhea', desc: 'Cessation of menstrual cycle > 3 months.' },
            { label: 'Eating Disorder', desc: 'Anorexia, Bulimia, or caloric deficit.' }
          ]
        }
      ]
    }
  ],
  flashcards: [
    { id: 'f1', category: 'Definition', question: 'Define Motor Development.', answer: 'Changes in motor behavior over the lifespan due to biology and environment interactions.' },
    { id: 'f2', category: 'Technical', question: 'Differentiate between Gross and Fine motor skills.', answer: 'Gross: Large muscle movements (Running). Fine: Small muscle precision (Writing).' },
    { id: 'f3', category: 'Age Guidelines', question: 'What is the WHO recommended activity duration for ages 5-17?', answer: 'At least 60 minutes of moderate-to-vigorous activity daily.' },
    { id: 'f4', category: 'Posture', question: 'What is Kyphosis?', answer: 'Exaggerated posterior curvature of the thoracic spine (Hunchback).' },
    { id: 'f5', category: 'Posture', question: 'Identify the deformity: Knees touch but ankles are apart.', answer: 'Knock Knees (Genu Valgum).' },
    { id: 'f6', category: 'Correction', question: 'Name a corrective asana for Lordosis.', answer: 'Halasana or Paschimottanasana.' },
    { id: 'f7', category: 'Correction', question: 'Which activity helps correct Flat Foot?', answer: 'Walking on toes, skipping, or picking up marbles with toes.' },
    { id: 'f8', category: 'Women', question: 'What is Menarche?', answer: 'The first occurrence of menstruation.' },
    { id: 'f9', category: 'Triad', question: 'Name the three components of the Female Athlete Triad.', answer: 'Osteoporosis, Amenorrhea, Disordered Eating (Low Energy Availability).' },
    { id: 'f10', category: 'Triad', question: 'What is Amenorrhea?', answer: 'The absence of menstruation for 3 months or more.' },
    { id: 'f11', category: 'Posture', question: 'What is Scoliosis?', answer: 'A lateral (sideways) curvature of the spine.' },
    { id: 'f12', category: 'Correction', question: 'Corrective measure for Bow Legs?', answer: 'Walking on the inner edge of the feet.' },
    { id: 'f13', category: 'Technical', question: 'Define Osteoporosis.', answer: 'A condition of low bone mineral density increasing fracture risk.' },
    { id: 'f14', category: 'Women', question: 'What is Anorexia Nervosa?', answer: 'An eating disorder characterized by restricted energy intake and intense fear of gaining weight.' },
    { id: 'f15', category: 'Women', question: 'What is Bulimia Nervosa?', answer: 'Binge eating followed by purging.' },
    { id: 'f16', category: 'Age Guidelines', question: 'WHO activity recommendation for Adults (18-64)?', answer: '150-300 mins moderate or 75-150 mins vigorous activity per week.' },
    { id: 'f17', category: 'Posture', question: 'What is Round Shoulders?', answer: 'Shoulders bent forward creating a curve in the upper back.' },
    { id: 'f18', category: 'Correction', question: 'Asana to correct Round Shoulders?', answer: 'Chakrasana or Dhanurasana.' },
    { id: 'f19', category: 'Definition', question: 'What are the 4 domains of Motor Development?', answer: 'Physical, Cognitive, Affective, Psychomotor.' },
    { id: 'f20', category: 'Factors', question: 'Name two factors affecting Motor Development.', answer: 'Nutrition and Genetic Factors.' },
    { id: 'f21', category: 'Technical', question: 'What is Tummy Time?', answer: 'Time spent by infants on their stomach to strengthen neck/shoulder muscles.' },
    { id: 'f22', category: 'Posture', question: 'What causes Rickets?', answer: 'Vitamin D, Calcium, or Phosphate deficiency.' },
    { id: 'f23', category: 'Triad', question: 'How are the components of the Triad related?', answer: 'Low energy (eating disorder) leads to menstrual loss (amenorrhea), which lowers estrogen, causing bone loss (osteoporosis).' },
    { id: 'f24', category: 'Women', question: 'What is Dysmenorrhea?', answer: 'Painful menstruation.' },
    { id: 'f25', category: 'Technical', question: 'What separates Gross from Fine motor skills?', answer: 'The size of the muscle groups involved.' },
    { id: 'f26', category: 'Correction', question: 'Best exercise for Knock Knees?', answer: 'Horse riding or placing a pillow between knees while standing.' },
    { id: 'f27', category: 'Posture', question: 'Scientific name for Knock Knees?', answer: 'Genu Valgum.' },
    { id: 'f28', category: 'Posture', question: 'Scientific name for Bow Legs?', answer: 'Genu Varum.' },
    { id: 'f29', category: 'Age Guidelines', question: 'Screen time limit for children under 2?', answer: 'Zero (No sedentary screen time recommended).' },
    { id: 'f30', category: 'Women', question: 'Social constraint examples for women in sports?', answer: 'Lack of family support, traditional gender roles.' },
    { id: 'f31', category: 'Technical', question: 'What is Menorrhagia?', answer: 'Abnormally heavy or prolonged bleeding during menstruation.' },
    { id: 'f32', category: 'Correction', question: 'Corrective measure for Scoliosis?', answer: 'Hanging on a horizontal bar.' },
    { id: 'f33', category: 'Technical', question: 'Define Cephalocaudal development.', answer: 'Development proceeding from head to toe.' },
    { id: 'f34', category: 'Technical', question: 'Define Proximodistal development.', answer: 'Development proceeding from the center of the body outward.' },
    { id: 'f35', category: 'Correction', question: 'Which Yoga Asana is good for Kyphosis?', answer: 'Bhujangasana (Cobra Pose).' },
    { id: 'f36', category: 'Correction', question: 'What is the "Inner Edge Walk" used for?', answer: 'Correcting Bow Legs.' },
    { id: 'f37', category: 'Women', question: 'Psychological constraint for women?', answer: 'Fear of failure, body image issues.' },
    { id: 'f38', category: 'Age Guidelines', question: 'Focus of exercise for 65+ age group?', answer: 'Functional balance and fall prevention.' },
    { id: 'f39', category: 'Triad', question: 'Primary cause of Functional Hypothalamic Amenorrhea?', answer: 'Energy deficit (burning more calories than consumed).' },
    { id: 'f40', category: 'Technical', question: 'What is "Bone Mineral Density"?', answer: 'The amount of bone mineral in bone tissue, a marker of bone health.' },
    { id: 'f41', category: 'Posture', question: 'What is "Text Neck"?', answer: 'Strain on the neck from looking down at devices (modern postural issue).' },
    { id: 'f42', category: 'Correction', question: 'Can Flat Foot be corrected in adulthood?', answer: 'Difficult, but arch supports and exercises can manage pain.' },
    { id: 'f43', category: 'Definition', question: 'What is Menopause?', answer: 'Permanent cessation of menstruation (usually age 45-55).' }
  ],
  sqp: [
    {
      id: 'q1',
      year: '2023-24',
      paperType: 'Board',
      marks: 5,
      type: 'LA',
      question: 'Define Female Athlete Triad. Explain its three components in detail.',
      answer: 'Defined as a syndrome involving Osteoporosis, Amenorrhea, and Eating Disorders. Explanation of interrelation: Low energy leads to hormonal suppression.',
      aiExplanation: 'Teacher\'s Voice - Scoring Breakdown (5 Marks):\n1. **Definition (1 Mark):** Define as a syndrome of three interrelated conditions affecting female athletes.\n2. **Three Components (3 Marks):**\n   *   **Osteoporosis:** Low bone mass/density increasing fracture risk.\n   *   **Amenorrhea:** Absence of menstrual periods (Primary or Secondary).\n   *   **Eating Disorders:** Spectrum of abnormal eating behaviors (Anorexia/Bulimia) leading to Low Energy Availability.\n3. **Relationship (1 Mark):** Briefly explain that low energy leads to menstrual dysfunction, which causes bone loss.'
    },
    {
      id: 'q2',
      year: '2022-23',
      paperType: 'SQP',
      marks: 3,
      type: 'SA',
      question: 'Differentiate between Menarche and Menopause.',
      answer: 'Menarche: First period (puberty). Menopause: Stopping of periods (mid-life).',
      aiExplanation: 'Focus on the "Lifecycle" aspect. Menarche marks the beginning of reproductive age (11-14 yrs), while Menopause marks the end (45-55 yrs). Mention that sports training can delay Menarche.'
    },
    {
      id: 'q3',
      year: '2024-25',
      paperType: 'SQP',
      marks: 5,
      type: 'LA',
      question: 'List five common postural deformities and suggest one corrective yoga asana for each.',
      answer: '1. Kyphosis (Bhujangasana), 2. Lordosis (Paschimottanasana), 3. Scoliosis (Trikonasana), 4. Knock Knees (Padmasana), 5. Round Shoulders (Dhanurasana).',
      aiExplanation: 'Teacher\'s Voice - Table Strategy (5 Marks):\nCreate a table with 3 columns: Deformity | Description | Corrective Asana.\n1. **Kyphosis:** Round upper back -> Bhujangasana (Cobra Pose).\n2. **Lordosis:** Inward lower back curve -> Halasana (Plow Pose).\n3. **Scoliosis:** Sideways spine curve -> Trikonasana (Triangle Pose).\n4. **Knock Knees (Genu Valgum):** Knees touch -> Padmasana (Lotus Pose).\n5. **Bow Legs (Genu Varum):** Knees apart -> Garudasana (Eagle Pose).'
    },
    {
      id: 'q4',
      year: '2021-22',
      paperType: 'Term-1',
      marks: 1,
      type: 'MCQ',
      question: 'Genu Valgum is also known as:',
      answer: '(b) Knock Knees',
      aiExplanation: 'Mnemonic: "Gum" makes your knees stick together. Valgum = Keywords "Stick together" / Knock Knees.'
    },
    {
      id: 'q5',
      year: '2023-24',
      paperType: 'SQP',
      marks: 3,
      type: 'SA',
      question: 'Explain the factors affecting Motor Development in children.',
      answer: 'Genetics, Nutrition, Environment, Physical Activity, Sensory Impairments.',
      aiExplanation: 'Do not just list them. Explain "How". Example: "Nutrition" - Lack of protein affects muscle growth needed for motor skills. "Environment" - Open spaces encourage gross motor skills.'
    },
    {
      id: 'q6',
      year: '2020-21',
      paperType: 'Board',
      marks: 3,
      type: 'SA',
      question: 'Suggest physical activity guidelines for children under 5 years of age.',
      answer: 'Tummy time for infants, active play for toddlers, 180 mins activity for 3-4 yrs.',
      aiExplanation: 'Reference the WHO guidelines. Key phrase: "Minimize sedentary screen time". Mention "Tummy Time" for infants as it builds neck strength.'
    },
    {
      id: 'q7',
      year: '2024-25',
      paperType: 'SQP',
      marks: 1,
      type: 'MCQ',
      question: 'Which of the following is NOT a component of the Female Athlete Triad?',
      answer: '(d) Anemia',
      aiExplanation: 'The Triad is Bone, Period, and Food. Anemia (Iron deficiency) is common but not part of the clinical Triad definition.'
    },
    {
      id: 'q8',
      year: '2023-24',
      paperType: 'Board',
      marks: 5,
      type: 'LA',
      question: 'Analyze the sociological and psychological constraints for women participation in sports in India.',
      answer: 'Social: Patriarchal mindset, safety concerns. Psych: Body image, confidence.',
      aiExplanation: 'Teacher\'s Voice - Essay Structure (5 Marks):\nDivide your answer into two clear sections:\n1. **Sociological Constraints (2.5 Marks):** Focus on external factors.\n   *   Traditional gender roles (Home-makers).\n   *   Lack of safety/transport.\n   *   Lack of female role models.\n2. **Psychological Constraints (2.5 Marks):** Focus on internal mindsets.\n   *   Low self-confidence.\n   *   Body image issues (fear of being "muscular").\n   *   Fear of social criticism.'
    },
    {
      id: 'q8-2025',
      year: '2024-25',
      paperType: 'SQP',
      marks: 1,
      type: 'MCQ',
      questionNumber: 'Q8.',
      question: 'Menarche is defined as:\nA. Ending of Menstrual period in women\nB. Beginning of menstrual period in women\nC. Time of pregnancy\nD. Beginning of pregnancy',
      answer: 'B. Beginning of menstrual period in women',
      markingScheme: 'B. Beginning of menstrual period in women',
      aiExplanation: 'Teacher\'s Voice: \n*   **Root Word:** "Arche" means beginning (like Archaeology/Archaic). \n*   **Menarche:** The *start* of menstruation (Puberty). \n*   **Menopause:** The *pause/stop* of menstruation (Old age).'
    },
    {
      id: 'q19-2025',
      year: '2024-25',
      paperType: 'SQP',
      marks: 2,
      type: 'SA',
      questionNumber: 'Q19.',
      question: 'Enlist any two-exercise guideline by WHO for different age groups.',
      answer: '1. Children (5-17): 60 mins/day. 2. Adults (18-64): 150 mins/week.',
      markingScheme: '1. For children and youth aged 5–17, should do at least an average of 60 minutes per day of moderate-to-vigorous intensity, mostly aerobic, physical activity, across the week.\n2. Adults aged 18–64 years, should do at least 150–300 minutes of moderate-intensity aerobic physical activity.',
      aiExplanation: 'Teacher\'s Voice - Specific Metrics (2 Marks):\n1. **Group 1 (5-17 Years):** Must mention "60 minutes daily" and "Moderate-to-Vigorous".\n2. **Group 2 (18-64 Years):** Must mention "150-300 minutes per week" of "Moderate intensity".'
    },
    {
      id: 'q26-2025',
      year: '2024-25',
      paperType: 'SQP',
      marks: 3,
      type: 'SA',
      questionNumber: 'Q26.',
      question: 'What are the health problem face by a woman due to female athlete triad in its sports and athletic performance',
      answer: 'Bone loss (Osteoporosis), Reproductive issues (Amenorrhea), and Low Energy.',
      markingScheme: '1. Osteoporosis: Weakening of bones due to low estrogen.\n2. Amenorrhea: Cessation of periods affecting fertility.\n3. Low Energy Availability: Leads to fatigue, poor performance, and increased injury risk.',
      aiExplanation: 'Teacher\'s Voice - Consequences Focus (3 Marks):\nUnlike the 5-mark definition question, this asks for the *Problems/Consequences*:\n1. **Skeletal Health (1 Mark):** Osteoporosis -> Stress fractures + Weak bones.\n2. **Reproductive Health (1 Mark):** Amenorrhea -> Infertility + Hormonal imbalance.\n3. **Performance Health (1 Mark):** Low Energy -> Fatigue + Slow recovery + Mental stress.'
    },
    {
      id: 'q16-2024-sqp',
      year: '2023-24',
      paperType: 'SQP',
      marks: 1,
      type: 'MCQ',
      questionNumber: 'Q16.',
      question: 'If the menstruation cycle does not begin at puberty, the condition is called ___________\n(a) Primary Amenorrhea\n(b) Secondary amenorrhea\n(c) Oligomenorrhea\n(d) Dysmenorrhea',
      answer: '(a) Primary Amenorrhea',
      markingScheme: '(a) Primary Amenorrhea',
      aiExplanation: 'Teacher\'s Voice: \n*   **Primary:** Never started by age 15-16. \n*   **Secondary:** Started but stopped for 3+ months. \n*   **Oligomenorrhea:** Infrequent periods. \n*   **Dysmenorrhea:** Painful periods.'
    },
    {
      id: 'q18-2024-sqp',
      year: '2023-24',
      paperType: 'SQP',
      marks: 1,
      type: 'MCQ',
      questionNumber: 'Q18.',
      question: 'Kyphosis is also known as ____________\n(a) Hallow Back\n(b) Hunch Back\n(c) Curve Back\n(d) both (a) and (b)',
      answer: '(b) Hunch Back',
      markingScheme: '(b) Hunch Back',
      aiExplanation: 'Teacher\'s Voice: \n*   **Kyphosis** = Hunch Back (Round Upper Back). \n*   **Lordosis** = Hollow Back (Sway Lower Back). \n*   **Scoliosis** = C or S curve.'
    },
    {
      id: 'q30-2024-sqp',
      year: '2023-24',
      paperType: 'SQP',
      marks: 3,
      type: 'SA',
      questionNumber: 'Q30.',
      question: 'Write in brief the corrective measures of Bow Leg, Knock Knee and Flat Foot.',
      answer: 'Bow Leg: Walking on inner edge. Knock Knee: Horse riding. Flat Foot: Jumping on toes.',
      markingScheme: '1. Bow Leg: Use braces, walk on inner edge of feet, Vitamin D. \n2. Knock Knee: Horse riding, Padmasana, keep pillow between knees while sleeping. \n3. Flat Foot: Jumping on toes, skipping, walk on heels, pick marbles with toes.',
      aiExplanation: 'Teacher\'s Voice - 1 Mark per Deformity:\n1. **Bow Legs:** Focus on "Inner Edge Walking".\n2. **Knock Knees:** Focus on "Horse Riding" or "Pillow between knees".\n3. **Flat Foot:** Focus on "Toe exercises" (Skipping/Heel walking).'
    }
  ],
  mindMap: {
    id: 'm1',
    label: 'Unit 5: Children & Women',
    children: [
      {
        id: 'm2',
        label: 'Motor Dev',
        children: [{ id: 'm3', label: 'Gross vs Fine' }, { id: 'm4', label: 'Factors (Genes/Diet)' }]
      },
      {
        id: 'm5',
        label: 'Posture',
        children: [{ id: 'm6', label: 'Spine (Kypho/Lord/Scoli)' }, { id: 'm7', label: 'Legs (Knock/Bow/Flat)' }]
      },
      {
        id: 'm8',
        label: 'Women',
        children: [{ id: 'm9', label: 'Triad (Bone/Period/Food)' }, { id: 'm10', label: 'Menarche' }]
      }
    ]
  },
  cheatSheet: [
    {
      title: 'Postural Deformity Map',
      points: [
        'Top Spine: Kyphosis (Hunchback) -> Rx: Bhujangasana',
        'Bottom Spine: Lordosis (Swayback) -> Rx: Halasana',
        'Sideways Spine: Scoliosis (S-Shape) -> Rx: Trikonasana',
        'Knees: Genu Valgum (Knock) vs Genu Varum (Bow)',
        'Feet: Flat Foot (No Arch) -> Rx: Toe Walking'
      ]
    },
    {
      title: 'The Female Athlete Triad',
      points: [
        'Triangle: Osteoporosis <-> Amenorrhea <-> Low Energy',
        'Cause: Eating Disorder (Anorexia/Bulimia) -> Caloric Deficit',
        'Result: Hormonal imbalance -> Bone loss -> Stress Fractures'
      ]
    },
    {
      title: 'Motor Development Rules',
      points: [
        'Gross Motor: Large Muscles (Running, Jumping) -> Early Childhood',
        'Fine Motor: Small Muscles (Writing, Cutting) -> Pre-School/School',
        'Factors: Genetics + Nutrition + Environment'
      ]
    },
    {
      title: 'WHO (World Health Organization) Activity Prescription',
      points: [
        'Children (5-17): 60 mins/day (Mod-Vigorous) + Bone Strength 3x/week',
        'Adults (18-64): 150-300 mins/week (Moderate) OR 75-150 (Vigorous)',
        'Seniors (65+): Focus on Balance & Fall Prevention'
      ]
    },
    {
      title: 'Golden Keywords',
      points: [
        'Menarche: "First Menstruation" (Puberty)',
        'Amenorrhea: "Absence of Menses" (>3 months)',
        'Osteoporosis: "Porous Bones" (Low Density)',
        'Bulimia: "Binging and Purging"'
      ]
    }
  ],
};
