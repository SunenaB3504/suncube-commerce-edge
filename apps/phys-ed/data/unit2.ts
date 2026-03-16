
import { Chapter } from '../types';

export const unit2: Chapter = {
  id: 2,
  slug: 'sports-nutrition',
  name: 'Sports & Nutrition',
  description: 'Balanced diet, macro and micro nutrients, nutritive/non-nutritive components, and weight management.',
  topics: [
    {
      id: 'balanced-diet',
      title: 'Balanced Diet & Nutrients',
      description: 'The foundation of physical performance and overall health.',

      content: [
        'Minerals: Inorganic elements. Macro (Calcium, Potassium, Sodium, Magnesium, Phosphorus), Micro (Iron, Iodine, Zinc, Copper). Functions: bone strength, nerve function, oxygen transport.',
        'Caloric Value: Carbohydrates = 4 kcal/g, Proteins = 4 kcal/g, Fats = 9 kcal/g.',
        'Proteins Detail: Consist of Amino Acids. Essential Amino Acids (9 types, e.g., Histidine, Lysine) cannot be made by the body and must come from food. Non-Essential Amino Acids can be synthesized by the body.',
        'Fats Detail: Classified into Saturated (Animal sources, solid at room temperature) and Unsaturated (Plant sources, liquid). Unsaturated fats (Mono/Poly) are healthier for the heart.'
      ],
      visualizations: [
        {
          id: 'v2-nutrient-hack',
          title: 'Nutrient "Function-to-Source" Hack',
          type: 'grid',
          hack: 'Reverse-Recall Hack: Look at the Function first. Blood -> Iron. Bones -> Calcium. Energy -> Carbs. Repair -> Protein.',
          data: [
            { label: 'Blood (Oxygen)', desc: 'Function: Hemoglobin | Source: Iron (Spinach, Meat)' },
            { label: 'Bones (Strength)', desc: 'Function: Bone Density | Source: Calcium (Milk, Cheese)' },
            { label: 'Energy (Instant)', desc: 'Function: 4 kcal/g | Source: Carbs (Rice, Potatoes)' },
            { label: 'Muscle Repair', desc: 'Function: 4 kcal/g | Source: Protein (Eggs, Pulses)' }
          ]
        },
        {
          id: 'v1',
          title: 'Macro vs Micro Nutrients',
          type: 'table',
          data: {
            headers: ['Category', 'Nutrients', 'Function', 'Sources'],
            rows: [
              ['Macro', 'Carbohydrates', 'Energy (4 kcal/g)', 'Rice, wheat, potatoes, fruits'],
              ['Macro', 'Proteins', 'Growth, repair (4 kcal/g)', 'Milk, eggs, pulses, meat'],
              ['Macro', 'Fats', 'Storage, insulation (9 kcal/g)', 'Ghee, butter, oils, nuts'],
              ['Macro', 'Water', 'Transport, temperature', 'Water, fruits, vegetables'],
              ['Micro', 'Vitamins', 'Metabolism, immunity', 'Fruits, vegetables, milk, eggs'],
              ['Micro', 'Minerals', 'Bones, nerves, blood', 'Milk, green leafy, salt, meat']
            ]
          }
        },
        {
          id: 'v2',
          title: 'Vitamin Classification',
          type: 'flow',
          data: [
            'Fat Soluble: A, D, E, K',
            'Water Soluble: B-Complex, C'
          ]
        },
        {
          id: 'v3',
          title: 'Vitamin Table',
          type: 'table',
          data: {
            headers: ['Vitamin', 'Type', 'Sources', 'Functions', 'Deficiency'],
            rows: [
              ['A', 'Fat-soluble', 'Carrots, milk, eggs', 'Vision, immunity', 'Night blindness'],
              ['B1', 'Water-soluble', 'Cereals, nuts', 'Nerve function', 'Beri Beri'],
              ['C', 'Water-soluble', 'Citrus fruits', 'Immunity, healing', 'Scurvy'],
              ['D', 'Fat-soluble', 'Sunlight, milk', 'Bone health', 'Rickets'],
              ['E', 'Fat-soluble', 'Nuts, oils', 'Antioxidant', 'Rare'],
              ['K', 'Fat-soluble', 'Green leafy', 'Blood clotting', 'Bleeding']
            ]
          }
        },
        {
          id: 'v4',
          title: 'Mineral Table',
          type: 'table',
          data: {
            headers: ['Mineral', 'Type', 'Sources', 'Functions', 'Deficiency'],
            rows: [
              ['Calcium', 'Macro', 'Milk, cheese', 'Bones, teeth', 'Weak bones'],
              ['Iron', 'Micro', 'Meat, spinach', 'Hemoglobin', 'Anemia'],
              ['Iodine', 'Micro', 'Iodized salt', 'Thyroid', 'Goiter'],
              ['Potassium', 'Macro', 'Banana, potato', 'Nerves, muscles', 'Weakness'],
              ['Sodium', 'Macro', 'Salt', 'Water balance', 'Cramps'],
              ['Zinc', 'Micro', 'Nuts, seeds', 'Immunity', 'Growth issues']
            ]
          }
        },
        {
          id: 'v7',
          title: 'Amino Acid Classification',
          type: 'table',
          data: {
            headers: ['Type', 'Definition', 'Examples', 'Source'],
            rows: [
              ['Essential Amino Acids', 'Cannot be made by body; must come from food', 'Histidine, Isoleucine, Leucine, Lysine, Valine', 'Meat, Eggs, Dairy, Soy (Complete Proteins)'],
              ['Non-Essential Amino Acids', 'Can be synthesized by the body', 'Alanine, Asparagine, Glutamic Acid', 'Body synthesis']
            ]
          }
        }
      ]
    },
    {
      id: 'nutritive-components',
      title: 'Nutritive & Non-Nutritive Components',
      description: 'Elements of diet that provide energy versus those that perform other functions.',
      content: [
        'Nutritive Components: Provide energy (Calories). Includes Carbohydrates, Proteins, Fats.',
        'Non-Nutritive Components: Do NOT provide energy but are essential. Includes: Fiber (Roughage), Water, Colour Compounds, Flavor Compounds, Plant Compounds.',
        'Anti-Nutritional Factors (ANFs): Compounds that reduce nutrient availability. Examples: Phytates (bind minerals), Tannins (tea/coffee), Oxalates (spinach).',
        'Beneficial Non-Nutritives: Artificial Sweeteners (taste without calories), Preservatives (prevent spoilage).'
      ],
      visualizations: [
        {
          id: 'v3',
          title: 'Non-Nutritive Roles',
          type: 'grid',
          data: [
            { label: 'Fiber', desc: 'Prevents constipation and lowers cholesterol.' },
            { label: 'Water', desc: 'Maintains body temp and transports nutrients.' },
            { label: 'Flavors', desc: 'Stimulates appetite and digestive juices.' },
            { label: 'Pigments', desc: 'Provide antioxidants and visual appeal.' }
          ]
        }
      ]
    },
    {
      id: 'weight-management',
      title: 'Eating for Weight Control',
      description: 'Understanding BMI and maintaining a healthy body weight.',
      content: [
        // Level 1: Healthy Weight
        'Healthy Weight: Maintaining a body weight where BMI is between 18.5 and 24.9 to reduce risk of diseases.',
        // Level 2: BMI
        'Body Mass Index (BMI): A measure to classify underweight, normal, overweight, and obesity.',
        // Level 3: BMI Formula
        'Formula: Body Mass Index = Weight in kilograms / (Height in meters)^2.',
        // Level 3: Step-by-step Example
        'Example: If weight = 70 kg, height = 1.75 m, BMI = 70 / (1.75 × 1.75) = 22.86 (Normal).',
        // Level 2: Waist-to-Hip Ratio (WHR)
        'Waist-to-Hip Ratio (WHR): Assesses central obesity. Formula: WHR = Waist circumference (cm) / Hip circumference (cm).',
        'Cut-offs: >1.0 for men, >0.85 for women indicate central obesity.',
        // Level 2: Pitfalls of Dieting
        'Pitfalls of Dieting: Extreme restriction triggers "Starvation Mode", where body slows metabolism to conserve fat. Leads to muscle loss and rebound weight gain.',
        // Level 2: Food Intolerance
        'Food Intolerance: Difficulty digesting foods due to enzyme deficiency (e.g., Lactose Intolerance due to lack of Lactase). Unlike allergies, the immune system is NOT involved.'
      ],
      visualizations: [
        {
          id: 'v4',
          title: 'BMI Categories (WHO Standards)',
          type: 'table',
          data: {
            headers: ['BMI Range', 'Category'],
            rows: [
              ['< 18.5', 'Underweight'],
              ['18.5 - 24.9', 'Normal / Healthy'],
              ['25.0 - 29.9', 'Overweight'],
              ['30.0 - 34.9', 'Obesity Class I'],
              ['35.0 - 39.9', 'Obesity Class II'],
              ['≥ 40.0', 'Obesity Class III']
            ]
          },
          formula: 'BMI = Weight (kg) / [Height (m)]²'
        },
        {
          id: 'v5',
          title: 'Waist-to-Hip Ratio (WHR) Table',
          type: 'table',
          data: {
            headers: ['Gender', 'WHR Cut-off', 'Interpretation'],
            rows: [
              ['Men', '>1.0', 'Central obesity risk'],
              ['Women', '>0.85', 'Central obesity risk']
            ]
          },
          formula: 'WHR = Waist circumference (cm) / Hip circumference (cm)'
        },
        {
          id: 'v6',
          title: 'Step-by-Step BMI Calculation',
          type: 'steps',
          data: [
            '1. Measure weight in kilograms (kg).',
            '2. Measure height in meters (m).',
            '3. Square the height value.',
            '4. Divide weight by squared height.',
            '5. Interpret the result using BMI categories.'
          ],
          caption: 'Example: Weight = 70 kg, Height = 1.75 m, BMI = 70 / (1.75 × 1.75) = 22.86 (Normal)'
        }
      ]
    },
    {
      id: 'food-myths',
      title: 'Food Myths Debunked',
      description: 'Scientific evidence against common nutritional misconceptions.',
      content: [
        'Myth: Potatoes make you fat. Reality: Only excessive calories lead to weight gain; potatoes are nutrient-rich.',
        'Myth: Don’t drink water during meals. Reality: Water aids digestion and doesn’t dilute enzymes significantly.',
        'Myth: Skipping meals helps weight loss. Reality: It lowers metabolism and leads to overeating later.',
        'Myth: Vegetarian diet can’t build muscle. Reality: Plant-based proteins are effective if properly combined.'
      ],
      visualizations: [
        {
          id: 'v5',
          title: 'Common Myth Busters',
          type: 'grid',
          data: [
            { label: 'Myth 1', desc: 'Eating at night causes weight gain. (False: Total calories matter most).' },
            { label: 'Myth 2', desc: 'Fat-free food is healthy. (False: Often high in sugar for flavor).' },
            { label: 'Myth 3', desc: 'Fruit juices = Whole fruit. (False: Whole fruit has essential fiber).' }
          ]
        }
      ]
    }
  ],
  flashcards: [
    // Definitions
    { id: 'f1', category: 'Definition', question: 'What is a balanced diet?', answer: 'A diet containing all essential nutrients in correct proportions for health.' },
    { id: 'f2', category: 'Definition', question: 'Define macronutrients.', answer: 'Nutrients required in large amounts: carbohydrates, proteins, fats, and water.' },
    { id: 'f3', category: 'Definition', question: 'Define micronutrients.', answer: 'Nutrients needed in small amounts: vitamins and minerals.' },
    { id: 'f4', category: 'Definition', question: 'What is BMI?', answer: 'Body Mass Index, a measure of body fat based on height and weight.' },
    { id: 'f5', category: 'Definition', question: 'What is WHR?', answer: 'Waist-to-Hip Ratio, a measure of central obesity.' },
    { id: 'f6', category: 'Definition', question: 'What is roughage?', answer: 'Indigestible part of food that helps in bowel movement.' },
    { id: 'f7', category: 'Definition', question: 'What are non-nutritive components?', answer: 'Dietary elements that do not provide energy but have other functions (fiber, water, flavors, pigments).' },
    // Classification
    { id: 'f8', category: 'Classification', question: 'Classify vitamins based on solubility.', answer: 'Fat-soluble: A, D, E, K; Water-soluble: B-complex, C.' },
    { id: 'f9', category: 'Classification', question: 'Classify minerals as macro and micro.', answer: 'Macro: Calcium, Potassium, Sodium, Magnesium, Phosphorus; Micro: Iron, Iodine, Zinc, Copper.' },
    { id: 'f10', category: 'Classification', question: 'Which nutrients are energy-yielding?', answer: 'Carbohydrates, proteins, and fats.' },
    // Calculations
    { id: 'f11', category: 'Calculation', question: 'How many calories does 1 gram of carbohydrate provide?', answer: '4 kcal.' },
    { id: 'f12', category: 'Calculation', question: 'How many calories does 1 gram of protein provide?', answer: '4 kcal.' },
    { id: 'f13', category: 'Calculation', question: 'How many calories does 1 gram of fat provide?', answer: '9 kcal.' },
    { id: 'f14', category: 'Calculation', question: 'What is the formula for BMI?', answer: 'BMI = Weight (kg) / [Height (m)]².' },
    { id: 'f15', category: 'Calculation', question: 'What is the formula for WHR?', answer: 'WHR = Waist circumference (cm) / Hip circumference (cm).' },
    // True/False
    { id: 'f16', category: 'TrueFalse', question: 'True or False: All fats are bad for health.', answer: 'False. Unsaturated fats are healthy in moderation.' },
    { id: 'f17', category: 'TrueFalse', question: 'True or False: Skipping meals helps in weight loss.', answer: 'False. It can lower metabolism and cause overeating.' },
    { id: 'f18', category: 'TrueFalse', question: 'True or False: Vitamin C is fat-soluble.', answer: 'False. It is water-soluble.' },
    { id: 'f19', category: 'TrueFalse', question: 'True or False: Fiber is a non-nutritive component.', answer: 'True.' },
    // Food Myths
    { id: 'f20', category: 'Theory', question: 'Does eating potatoes make you fat?', answer: 'No, only excess calories cause weight gain.' },
    { id: 'f21', category: 'Theory', question: 'Is drinking water during meals harmful?', answer: 'No, water aids digestion.' },
    { id: 'f22', category: 'Theory', question: 'Can a vegetarian diet build muscle?', answer: 'Yes, if plant proteins are properly combined.' },
    // Vitamins & Deficiencies
    { id: 'f23', category: 'Technical', question: 'Deficiency of Vitamin A causes?', answer: 'Night blindness.' },
    { id: 'f24', category: 'Technical', question: 'Deficiency of Vitamin D causes?', answer: 'Rickets in children, osteomalacia in adults.' },
    { id: 'f25', category: 'Technical', question: 'Deficiency of Vitamin C causes?', answer: 'Scurvy.' },
    { id: 'f26', category: 'Technical', question: 'Deficiency of Vitamin B1 causes?', answer: 'Beri Beri.' },
    { id: 'f27', category: 'Technical', question: 'Deficiency of Vitamin K causes?', answer: 'Bleeding disorders.' },
    // Minerals & Deficiencies
    { id: 'f28', category: 'Technical', question: 'Deficiency of Iron causes?', answer: 'Anemia.' },
    { id: 'f29', category: 'Technical', question: 'Deficiency of Iodine causes?', answer: 'Goiter.' },
    { id: 'f30', category: 'Technical', question: 'Deficiency of Calcium causes?', answer: 'Weak bones and teeth.' },
    { id: 'f31', category: 'Technical', question: 'Deficiency of Potassium causes?', answer: 'Muscle weakness.' },
    // Functions & Sources
    { id: 'f32', category: 'Technical', question: 'Main function of carbohydrates?', answer: 'Provide energy.' },
    { id: 'f33', category: 'Technical', question: 'Main function of proteins?', answer: 'Build and repair tissues.' },
    { id: 'f34', category: 'Technical', question: 'Main function of fats?', answer: 'Energy storage and insulation.' },
    { id: 'f35', category: 'Technical', question: 'Main function of water?', answer: 'Regulates temperature, transports nutrients.' },
    { id: 'f36', category: 'Technical', question: 'Main function of vitamins?', answer: 'Regulate metabolism and immunity.' },
    { id: 'f37', category: 'Technical', question: 'Main function of minerals?', answer: 'Bone strength, nerve function, oxygen transport.' },
    { id: 'f38', category: 'Technical', question: 'Source of Vitamin C?', answer: 'Citrus fruits.' },
    { id: 'f39', category: 'Technical', question: 'Source of Vitamin D?', answer: 'Sunlight, milk.' },
    { id: 'f40', category: 'Technical', question: 'Source of Iron?', answer: 'Meat, spinach.' },
    { id: 'f41', category: 'Technical', question: 'Source of Calcium?', answer: 'Milk, cheese.' },
    { id: 'f42', category: 'Technical', question: 'Source of Iodine?', answer: 'Iodized salt.' },
    // Logic & Application
    { id: 'f43', category: 'Theory', question: 'Why is a balanced diet important for athletes?', answer: 'It ensures optimal energy, recovery, and performance.' },
    { id: 'f44', category: 'Theory', question: 'Why is roughage important?', answer: 'It aids digestion and prevents constipation.' },
    { id: 'f45', category: 'Theory', question: 'Why is water essential?', answer: 'It regulates body temperature and removes waste.' },
    { id: 'f46', category: 'Theory', question: 'Why should protein intake be adequate?', answer: 'For muscle repair and immune function.' },
    { id: 'f47', category: 'Theory', question: 'Why is excess fat intake harmful?', answer: 'It increases risk of obesity and heart disease.' },
    { id: 'f48', category: 'Theory', question: 'Why are vitamins and minerals called protective foods?', answer: 'They protect against diseases and regulate body functions.' },
    // Application/Case
    { id: 'f49', category: 'Application', question: 'A student is always tired. Which nutrient deficiency could be the cause?', answer: 'Iron (anemia).' },
    { id: 'f50', category: 'Application', question: 'A child has weak bones. Which nutrient is lacking?', answer: 'Calcium or Vitamin D.' },
    // Master Verification Additions
    { id: 'f51', category: 'Definition', question: 'What are Anti-Nutritional Factors (ANFs)?', answer: 'Compounds like Phytates and Tannins that reduce the absorption of nutrients.' },
    { id: 'f52', category: 'Technical', question: 'Name two Anti-Nutritional Factors and their effect.', answer: 'Phytates (bind iron/zinc) and Tannins (bind iron).' },
    { id: 'f53', category: 'Definition', question: 'What are Essential Amino Acids?', answer: '9 amino acids that the body cannot make and must come from food (e.g. Lysine, Leucine).' },
    { id: 'f54', category: 'Definition', question: 'What are Non-Essential Amino Acids?', answer: 'Amino acids the body can synthesize on its own.' },
    { id: 'f55', category: 'Theory', question: 'What is "Starvation Mode"?', answer: 'Metabolic slowdown caused by extreme calorie restriction, leading to fat conservation and weight regain.' },
    { id: 'f56', category: 'Technical', question: 'Difference between Food Allergy and Intolerance?', answer: 'Allergy involves the Immune System (IgE); Intolerance is digestive (enzyme deficiency).' },
    { id: 'f57', category: 'Theory', question: 'Why do sliced apples turn brown?', answer: 'Oxidation (enzymatic browning), not just because of iron content (Myth).' }
  ],
  mindMap: {
    id: 'm1',
    label: 'Unit 2: Sports & Nutrition',
    children: [
      {
        id: 'm2',
        label: 'Nutrients',
        children: [
          {
            id: 'm3',
            label: 'Macronutrients',
            children: [
              {
                id: 'm3a', label: 'Carbohydrates', children: [
                  { id: 'm3a1', label: 'Simple (Sugars)' },
                  { id: 'm3a2', label: 'Complex (Starch, Fiber)' },
                  { id: 'm3a3', label: 'Functions: Energy (4 kcal/g)' },
                  { id: 'm3a4', label: 'Sources: Rice, wheat, potatoes, fruits' }
                ]
              },
              {
                id: 'm3b', label: 'Proteins', children: [
                  { id: 'm3b1', label: 'Amino acids' },
                  { id: 'm3b2', label: 'Functions: Growth, repair (4 kcal/g)' },
                  { id: 'm3b3', label: 'Sources: Milk, eggs, pulses, meat' }
                ]
              },
              {
                id: 'm3c', label: 'Fats', children: [
                  { id: 'm3c1', label: 'Saturated/Unsaturated' },
                  { id: 'm3c2', label: 'Functions: Storage, insulation (9 kcal/g)' },
                  { id: 'm3c3', label: 'Sources: Ghee, butter, oils, nuts' }
                ]
              },
              {
                id: 'm3d', label: 'Water', children: [
                  { id: 'm3d1', label: 'Functions: Transport, temperature' },
                  { id: 'm3d2', label: 'Sources: Water, fruits, vegetables' }
                ]
              }
            ]
          },
          {
            id: 'm4',
            label: 'Micronutrients',
            children: [
              {
                id: 'm4a', label: 'Vitamins', children: [
                  { id: 'm4a1', label: 'Fat-soluble: A, D, E, K' },
                  { id: 'm4a2', label: 'Water-soluble: B-complex, C' },
                  { id: 'm4a3', label: 'Functions: Metabolism, immunity' },
                  { id: 'm4a4', label: 'Deficiencies: Night blindness, scurvy, rickets' }
                ]
              },
              {
                id: 'm4b', label: 'Minerals', children: [
                  { id: 'm4b1', label: 'Macro: Ca, K, Na, Mg, P' },
                  { id: 'm4b2', label: 'Micro: Fe, I, Zn, Cu' },
                  { id: 'm4b3', label: 'Functions: Bones, nerves, blood' },
                  { id: 'm4b4', label: 'Deficiencies: Anemia, goiter, weak bones' }
                ]
              }
            ]
          }
        ]
      },
      {
        id: 'm5',
        label: 'Components',
        children: [
          {
            id: 'm6', label: 'Nutritive', children: [
              { id: 'm6a', label: 'Carbohydrates, Proteins, Fats, Vitamins, Minerals' }
            ]
          },
          {
            id: 'm7', label: 'Non-Nutritive', children: [
              { id: 'm7a', label: 'Fiber (Roughage)' },
              { id: 'm7b', label: 'Water' },
              { id: 'm7c', label: 'Flavors, Pigments' }
            ]
          }
        ]
      },
      {
        id: 'm8',
        label: 'Weight Control',
        children: [
          {
            id: 'm9', label: 'BMI', children: [
              { id: 'm9a', label: 'Formula: Weight (kg) / [Height (m)]²' },
              { id: 'm9b', label: 'Categories: Underweight, Normal, Overweight, Obesity' }
            ]
          },
          {
            id: 'm10', label: 'WHR', children: [
              { id: 'm10a', label: 'Formula: Waist / Hip' },
              { id: 'm10b', label: 'Cut-offs: >1.0 (men), >0.85 (women)' }
            ]
          },
          { id: 'm11', label: 'Pitfalls of Dieting' },
          { id: 'm12', label: 'Food Intolerance' }
        ]
      },
      {
        id: 'm13',
        label: 'Food Myths',
        children: [
          { id: 'm13a', label: 'Potatoes make you fat?' },
          { id: 'm13b', label: 'Drinking water during meals?' },
          { id: 'm13c', label: 'Vegetarian diet and muscle?' },
          { id: 'm13d', label: 'Skipping meals for weight loss?' }
        ]
      }
    ]
  },
  cheatSheet: [
    {
      title: 'Quick Mnemonics',
      points: [
        'Fat Soluble Vitamins: K.E.D.A (Vitamin K, E, D, A -> Stored in Fat, Toxic in excess)',
        'Water Soluble: Vitamin B & C (Needs daily replenishment)',
        'Macro Minerals: C.P.S (Calcium, Potassium, Sodium, Phosphorus, Magnesium)'
      ]
    },
    {
      title: 'Golden Keywords',
      points: [
        'Balanced Diet: "Correct Proportion", "Essential Nutrients"',
        'Protein: "Building Block", "Tissue Repair", "Antibodies"',
        'Non-Nutritive: "Fiber/Roughage", "Digestion", "No Calories"'
      ]
    },
    {
      title: 'Key Formulas (100% Coverage)',
      points: [
        'Body Mass Index (BMI) = Weight (kg) / Height (m)²',
        'Waist-to-Hip Ratio (WHR) = Waist (cm) / Hip (cm) [>1.0 Men / >0.85 Women = Risk]',
        'Caloric Rule (4-4-9): Carbs (4kcal), Protein (4kcal), Fat (9kcal)'
      ]
    },
    {
      title: 'Versus: Nutritive vs Non-Nutritive',
      points: [
        'Nutritive: Provides Calories/Energy (Carbs, Fats, Proteins)',
        'Non-Nutritive: No Energy, Regulatory/Digestive function (Water, Fiber, Colors)'
      ]
    },
    {
      title: 'Deficiency Quick-List',
      points: [
        'Vit A (Night Blindness), B1 (Beri-Beri), C (Scurvy), D (Rickets)',
        'Iron (Anemia), Calcium (Bone Density), Iodine (Goiter)'
      ]
    },
    {
      title: 'Pitfalls of Dieting (Must Know)',
      points: [
        'Starvation Mode: Body slows metabolism to conserve fat (Reaction to extreme low calories).',
        'Skipping Meals: Causes blood sugar drop -> Craving -> Overeating later.',
        'Fluid Calories: Ignoring calories in juices/sodas leads to weight gain.'
      ]
    },
    {
      title: 'Food Myths Debunked',
      points: [
        'Potatoes are Fattening? False (Only excess calories are)',
        'Skipping Meals helps? False (Slows metabolism -> Weight gain)',
        'Drinking Water with meals? True (Aids digestion)'
      ]
    }
  ],
  sqp: [
    {
      id: 'u2-mcq-2026-sqp-q4',
      year: '2025-26',
      paperType: 'SQP',
      marks: 1,
      type: 'MCQ',
      questionNumber: 'Q4.',
      question: 'What is nutrition?                                                                                                          \n \n(a) Essential substances of food like proteins, fats, carbohydrates, etc. \n(b) Consuming correct ratio of nutrients \n(c) Dynamic process in which consumed food is digested  \n(d) Both (a) and (b)',
      answer: '(c) Dynamic process in which consumed food is digested',
      markingScheme: 'C.  Dynamic process in which consumed food is digested',
      aiExplanation: 'Teacher\'s Voice: \n1. **Analyze the Options:** Option (a) defines *Nutrients*. Option (b) defines a *Balanced Diet*. \n2. **Identify the Core Concept:** Nutrition is the *process* or mechanism. \n3. **Conclusion:** Nutrition is the broader science/process of ingestion, digestion, and utilization of food, making (c) the correct scientific definition.'
    },
    {
      id: 'u2-mcq-2026-sqp-q9',
      year: '2025-26',
      paperType: 'SQP',
      marks: 1,
      type: 'MCQ',
      questionNumber: 'Q9.',
      question: 'Find the odd one out.                                                                                                  \n \n(a) Calcium    (b) Sulfur \n(c) Potassium    (d) Iron',
      answer: '(d) Iron',
      markingScheme: 'D. Iron',
      aiExplanation: 'Teacher\'s Voice: \n1. **Categorize the Minerals:** \n   *   Calcium, Sulfur, Potassium = Macro Minerals (Required >100mg/day). \n   *   Iron = Micro Mineral (Required in trace amounts). \n2. **Find the Mismatch:** Iron differs in classification from the others.'
    },
    {
      id: 'u2-sa-2026-sqp-q20',
      year: '2025-26',
      paperType: 'SQP',
      marks: 2,
      type: 'SA',
      questionNumber: 'Q20.',
      question: 'What is a balanced diet? Mention its importance also.',
      answer: 'A balanced diet contains all essential nutrients in the correct proportion.',
      markingScheme: 'Balanced Diet – Definition [1] \n● Contains all essential nutrients in correct proportion. \nImportance of Balanced Diet (Any 2-3 points): \n● Provides energy \n● Supports growth and repay \n● Boosts immunity \n● Prevents deficiencies and diseases \n● Maintains body functions efficiently',
      aiExplanation: 'Teacher\'s Voice - Structuring your Answer: \n1. **Definition (1 Mark):** You MUST use the keywords "Correct Proportion" and "Essential Nutrients". \n2. **Importance (1 Mark):** Do not just list points; categorize them into ONE of the following to ensure the mark: \n   *   *Energy* (Fuel for activity). \n   *   *Structure* (Growth & Repair). \n   *   *Protection* (Immunity & Disease prevention).'
    },
    {
      id: 'u2-sa-2026-sqp-q28',
      year: '2025-26',
      paperType: 'SQP',
      marks: 3,
      type: 'SA',
      questionNumber: 'Q28.',
      question: 'Discuss the importance of pre, during and post competition diet in detail.',
      answer: 'Pre-competition fuels the body, during maintains levels, post aids recovery.',
      markingScheme: 'Pre-Competition Diet \no Provides energy, prevents early fatigue, and ensures smooth digestion \nbefore performance. \no Consume high-carbohydrate foods like rice, pasta, or bread for \nsustained energy. \no Prefer easily digestible, low-fat, and non-fried meals taken 3–4 hours \nbefore the event. \n \nDuring Competition Diet \no Maintains hydration, energy, and electrolyte balance to avoid fatigue \nand muscle cramps. \no Sip on glucose-rich drinks or electrolyte solutions to maintain blood \nsugar and sodium levels. \no Include small portions of quick energy foods like banana or energy \ngels if needed. \n \nPost-Competition Diet \no Supports recovery by replenishing lost fluids and restoring glycogen \nlevels in muscles. \no Eat carbohydrate-rich foods such as fruits, sandwiches, or energy bars \nimmediately after. \no Rehydrate with fluids like water, juice, or sports drinks to replace lost \nelectrolytes.',
      aiExplanation: 'Teacher\'s Voice - The "3-Phase Protocol" (3 Marks): \n1. **Pre-Event (1 Mark):** Focus on *Glycogen Loading*. High Carb + Low Fat + Low Fiber (to prevent digestive issues). \n2. **During-Event (1 Mark):** Focus on *Hydration & Sustenance*. Sip electrolytes/glucose to prevent hypoglycemia. \n3. **Post-Event (1 Mark):** The "3 R\'s" of Recovery: *Rehydrate* (Fluids), *Replenish* (Carbs), *Repair* (Protein).'
    },
    {
      id: 'u2-la-2026-sqp-q33-vi',
      year: '2025-26',
      paperType: 'SQP',
      marks: 4,
      type: 'LA',
      questionNumber: 'Q33 (VI).',
      question: 'Vitamins and minerals are essential nutrients which protect us from various diseases and \nare helpful for general development of the body. \n \n1. __________ is a group of 8 water-soluble vitamins which are important for \ncellular metabolism.: \n         a) Vitamin A     \nb) Vitamin K \nc) Vitamin B      \nd) Vitamin D \n \n2. _________ disease is caused due to lack of Vitamin B. \na) Anemia \nb) Kwashiorkor \nc) Scurvy \nd) Beri Beri \n \n3. Vitamin______ is important for healthy bones and teeth. \na) K \nb) A \nc) D \nd) C \n \n4. Vitamin_____ is needed for blood clotting \na) A \nb) D \nc) K \nd) E',
      answer: '1. c (Vitamin B), 2. d, 3. c, 4. c',
      markingScheme: '1. b) Vitamin B \n2. d) Beri Beri \n3. c) D \n4. c) K',
      aiExplanation: 'Teacher\'s Voice - Breakdown (1 Mark per correct answer): \n1. **B-Complex:** The only "Group" of vitamins (B1, B2, B12 etc). Water-soluble. \n2. **Beri-Beri:** Specific deficiency disease of Vitamin B1 (Thiamine). \n3. **Vitamin D:** "The Sunshine Vitamin" regulates Calcium absorption for bones. \n4. **Vitamin K:** "Koagulation" (German root). Essential for clotting cascade.'
    },
    {
      id: 'u2-mcq-2025-sqp-q4',
      year: '2024-25',
      paperType: 'SQP',
      marks: 1,
      type: 'MCQ',
      questionNumber: 'Q4.',
      question: 'For developing muscles, which nutrient should be increase in diet \nA. Vitamins     C. Minerals \nB. Protein      D. Carbohydrates',
      answer: 'B. Protein',
      markingScheme: 'B. Protein',
      aiExplanation: 'Teacher\'s Voice: \n*   **Concept:** Hypertrophy (Muscle Growth). \n*   **Role:** Proteins are polymers of Amino Acids, which are the fundamental building blocks for tissue repair and new muscle synthesis. \n*   **Distractor:** Carbs provide *energy* for the workout, but Protein builds the *structure*.'
    },
    {
      id: 'u2-mcq-2025-sqp-q9',
      year: '2024-25',
      paperType: 'SQP',
      marks: 1,
      type: 'MCQ',
      questionNumber: 'Q9.',
      question: 'Which of the following are fat soluble vitamins     \nA. Vitamin d & k \nB. Vitamin b & c \nC. Vitamin a & e \nD. Both option a & c',
      answer: 'D. Both option a & c',
      markingScheme: 'D. both a and c',
      aiExplanation: 'Teacher\'s Voice - Mnemonic "KEDA": \n*   **Fat Soluble:** K, E, D, A (Stored in body fat, toxicity possible). \n*   **Water Soluble:** B-Complex, C (Excreted in urine, daily intake needed). \n*   **Logic:** Option A has D&K (Correct), Option C has A&E (Correct). Thus, Option D (Both) is the right answer.'
    },
    {
      id: 'u2-sa-2025-sqp-q20',
      year: '2024-25',
      paperType: 'SQP',
      marks: 2,
      type: 'SA',
      questionNumber: 'Q20.',
      question: 'How we can say that protein is an essential component of diet?',
      answer: 'Protein is the building block of life...',
      markingScheme: '• Protein is essential component of diet because protein is known as building block \nof life and it increase the strength of muscle fibers, repair and maintenance of \nbody tissue and also connected with immune mechanism of the body.',
      aiExplanation: 'Teacher\'s Voice (2 Marks): \n1. **Structural Role (1 Mark):** Mention it as the "Building block of life" for muscles, skin, and hair. \n2. **Functional Role (1 Mark):** Mention its role in Immunity (Antibodies) and Metabolism (Enzymes).'
    },
    {
      id: 'u2-la-2025-sqp-q28',
      year: '2024-25',
      paperType: 'SQP',
      marks: 3,
      type: 'LA',
      questionNumber: 'Q28.',
      question: 'Differentiate between nutritive and nonnutritive components of a diet on the basis of their \nfunctions.',
      answer: 'Nutritive components provide energy; non-nutritive do not but serve other functions.',
      markingScheme: 'Nutritive Component:\nNutritive components of food are \nthose elements that provide a \nconsiderable quantity of energy to the \nsystem, such as protein, \ncarbohydrates, and fats, all of which \nare essential to the body.  \nNon-Nutritive Component:\nNon-nutritive components of the diet are \nthose components that do not have any \nnutritional value but are nonetheless \nnecessary for the body in tiny quantities.\n\nFunctions:\nNutritive: Provide Energy, Support growth and repair\nNon-Nutritive: Provide flavour and texture, Acts as food addictive, Provide antioxidant',
      aiExplanation: 'Teacher\'s Voice - The Differentiator Strategy (3 Marks):\n1. **Primary Difference (1 Mark):** **Nutritive** provides Calories/Energy; **Non-Nutritive** has NO Caloric value. \n2. **Function of Nutritive (1 Mark):** Growth, Repair, Energy (Carbs, Fats, Proteins). \n3. **Function of Non-Nutritive (1 Mark):** Digestion (Fiber), Hydration (Water), Metabolism (Vitamins/Minerals/Phytochemicals).'
    },
    {
      id: 'u2-ar-2024-sqp-q10',
      year: '2023-24',
      paperType: 'SQP',
      marks: 1,
      type: 'Assertion-Reason',
      questionNumber: 'Q10.',
      question: 'Given below are two statements, one of which is labelled as Assertion (A) and the other is labeled as Reason (R)\n\nAssertion (A): Scurvy is caused due to the deficiency of Vitamin C.\nReason (R): The disease sets in when the diet does not include fresh vegetables and fruits for a long time.',
      answer: '(a) Both (A) and (R) are true and (R) is the correct explanation of (A)',
      markingScheme: '(a) Both (A) and (R) are true and (R) is the correct explanation of (A)',
      aiExplanation: 'Teacher\'s Voice - Connect the Dots: \n1. **Check A:** Scurvy is indeed the definition of Vitamin C deficiency (True). \n2. **Check R:** Fresh fruits/veg are the main source of C (True). \n3. **Check Link:** Because the diet lacks the source (R), the deficiency (A) occurs. The "Why" is satisfied.'
    },
    {
      id: 'u2-mcq-2024-sqp-q11',
      year: '2023-24',
      paperType: 'SQP',
      marks: 1,
      type: 'MCQ',
      questionNumber: 'Q11.',
      question: 'One gram of carbohydrate contains _____ Calories.\n(a) 2\n(b) 3\n(c) 4\n(d) 5',
      answer: '(c) 4',
      markingScheme: '(c) 4',
      aiExplanation: 'Teacher\'s Voice - The "4-4-9" Rule: \n*   **Carbohydrates:** 4 kcal/g \n*   **Proteins:** 4 kcal/g \n*   **Fats:** 9 kcal/g (Most energy-dense) \n*   **Alcohol:** 7 kcal/g (Non-nutrient energy)'
    },
    {
      id: 'u2-sa-2024-sqp-q26',
      year: '2023-24',
      paperType: 'SQP',
      marks: 3,
      type: 'SA',
      questionNumber: 'Q26.',
      question: 'What do you understand by non-nutritive component of diet?',
      answer: 'Non-nutritive components are dietary elements that do not provide energy/calories but have biological functions. Examples: Fiber, Water, Phytochemicals, Artificial Sweeteners.',
      markingScheme: 'Phytochemicals or Plant chemicals, Artificial Sweeteners, Preservatives, Spices, and Coffee are examples. They provide no energy but have other roles like color, flavor, preservation, or antioxidant properties.',
      aiExplanation: 'Teacher\'s Voice - Key Elements for Full Marks: \n1. **Definition:** "Do not provide energy/calories". \n2. **Function:** "Beneficial for health or sensory appeal". \n3. **Examples:** Must list at least 3 diverse types (Fiber, Water, Color Compounds).'
    },
    {
      id: 'u2-sa-2024-sqp-q24',
      year: '2023-24',
      paperType: 'SQP',
      marks: 2,
      type: 'SA',
      questionNumber: 'Q24.',
      question: 'Explain the importance of fluid intake during a competition.',
      answer: 'To prevent dehydration, maintain body temperature, and sustain performance.',
      markingScheme: '1. Prevents Dehydration (Fatigue, Cramps).\n2. Regulates Body Temperature (Sweating).\n3. Transports Nutrients to muscles.\n4. Maintains blood volume for circulation.',
      aiExplanation: 'Teacher\'s Voice - 2 Key Functions (2 Marks):\n1. **Thermoregulation (1 Mark):** Replacing sweat to keep the body cool.\n2. **Performance Maintenance (1 Mark):** Preventing dehydration-induced fatigue and muscle cramps.'
    }
  ]
};
