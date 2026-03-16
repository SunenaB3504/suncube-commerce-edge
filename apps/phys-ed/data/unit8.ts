import { Chapter } from '../types';

export const unit8: Chapter = {
  id: 8,
  slug: 'biomechanics-sports',
  name: 'Biomechanics & Sports',
  description: 'Newton’s Laws of motion, types of equilibrium, center of gravity, friction, and projectile trajectory in sporting activities.',
  topics: [
    {
      id: 'biomech-basics',
      title: 'Biomechanics Basics',
      description: 'Understanding Movement, Locomotion, Planes, and Axes.',
      content: [
        'Movement vs Locomotion: Movement is displacement of body parts (e.g., blinking). Locomotion translates the whole body from place to place (e.g., running).',
        'Planes (Surfaces):',
        '1. Sagittal Plane: Vertical split into Left/Right. Movements: Flexion/Extension (e.g., Walking, Sit-ups).',
        '2. Frontal (Coronal) Plane: Vertical split into Anterior/Posterior. Movements: Abduction/Adduction (e.g., Jumping Jacks).',
        '3. Transverse Plane: Horizontal split into Superior/Inferior. Movements: Rotation (e.g., Discus throw twist).',
        'Axes (Lines of Rotation):',
        '• Sagittal Axis: Passes front-to-back (Pivot for Frontal Plane).',
        '• Frontal Axis: Passes left-to-right (Pivot for Sagittal Plane).',
        '• Vertical Axis: Passes top-to-bottom (Pivot for Transverse Plane).',
        'Types of Movement:',
        '• Flexion: Decreasing angle between bones (Bending).',
        '• Extension: Increasing angle between bones (Straightening).',
        '• Abduction: Moving away from midline ("Taking away").',
        '• Adduction: Moving towards midline ("Adding").'
      ],
      visualizations: [
        {
          id: 'v0',
          title: 'Body Planes & Axes',
          type: 'table',
          data: {
            headers: ['Plane', 'Axis of Rotation', 'Example Movement'],
            rows: [
              ['Sagittal (Side View)', 'Frontal (Left-Right)', 'Somersault, Running'],
              ['Frontal (Front View)', 'Sagittal (Front-Back)', 'Cartwheel, Jumping Jack'],
              ['Transverse (Top View)', 'Vertical (Top-Down)', 'Pirouette, Discus Turn']
            ]
          }
        }
      ]
    },
    {
      id: 'newton-laws',
      title: 'Newton’s Laws of Motion',
      description: 'The fundamental physical principles governing movement in sports.',
      content: [
        'Law of Inertia (1st Law): A body remains at rest or in uniform motion unless acted upon by an external force. Includes Inertia of Rest (Sprinter in blocks), Inertia of Motion (Follow through in throwing), and Inertia of Direction (Car turning).',
        'Law of Acceleration (2nd Law): F = ma. The acceleration of an object is directly proportional to the force applied and inversely proportional to its mass. Application: A lighter shot-put travels further than a heavier one with the same force.',
        'Law of Reaction (3rd Law): For every action, there is an equal and opposite reaction. Examples: Swimming (Push water back -> Move forward), High Jump (Push ground down -> Move up), Walking.'
      ],
      visualizations: [
        {
          id: 'v8-newton-hack',
          title: 'Newton’s "Sports-First" Hack',
          type: 'grid',
          hack: 'Physics-Lite Hack: Don\'t memorize definitions. Think of a Penalty Kick: Ball at rest (1st Law) -> Kicking it hard (2nd Law) -> Foot feels the impact (3rd Law).',
          data: [
            { label: 'Example: 100m Sprint', desc: '1st: Blocks. 2nd: Force from legs. 3rd: Ground pushes back.' },
            { label: 'Example: Cricket Six', desc: '2nd Law: Timing + Force = Distance.' }
          ]
        },
        {
          id: 'v1',
          title: 'Newton’s Laws in Action',
          type: 'table',
          data: {
            headers: ['Law', 'Sport Example', 'Key Concept'],
            rows: [
              ['Inertia (1st)', 'Starting blocks in 100m sprint.', 'Resisting change of state.'],
              ['Acceleration (2nd)', 'Hitting a cricket ball for a six.', 'Force determines speed change.'],
              ['Reaction (3rd)', 'Dribbling a basketball.', 'Force returned by the floor.']
            ]
          }
        }
      ]
    },
    {
      id: 'equilibrium-cg',
      title: 'Equilibrium & Center of Gravity',
      description: 'Stability and balance factors in athletic performance.',
      content: [
        'Center of Gravity (C.G.): The imaginary point where the body’s weight is concentrated. Men: Higher C.G. | Women: Lower C.G. (due to pelvic structure).',
        'Equilibrium Types: 1. Static (Body at rest, e.g., Handstand), 2. Dynamic (Body in motion, e.g., Skating).',
        'Principles of Stability: 1. Lower the C.G. (Crouching), 2. Widen Base of Support (Feet apart), 3. Line of Gravity within Base, 4. Increase Mass (Heavyweight wrestlers are harder to topple).'
      ],
      visualizations: [
        {
          id: 'v2',
          title: 'Stability Conditions',
          type: 'grid',
          data: [
            { label: 'Stable', desc: 'Returns to original state (e.g., Hanging from bar).' },
            { label: 'Unstable', desc: 'Topples easily (e.g., Pencil on tip).' },
            { label: 'Neutral', desc: 'New position is sustainable (e.g., Ball rolling).' },
            { label: 'Dynamic', desc: 'Balance while moving (e.g., Gymnastics).' }
          ]
        }
      ]
    },
    {
      id: 'friction-sports',
      title: 'Friction & Sports',
      description: 'The force resisting the relative motion of solid surfaces.',
      content: [
        'Definition: Resistance to motion between two surfaces in contact.',
        'Coefficient of Friction (COF): Ratio of friction force to normal force. Formula: F = μN (where μ is COF).',
        'Types: Static (Starting motion), Sliding (Kinetic), Rolling (Least friction).',
        'Increasing Friction: Spikes/Cleats (Traction), Chalk/Magnesium (Gymnastics/Weightlifting), Textured balls (Basketball/Rugby).',
        'Decreasing Friction: Lubrication (Ski wax), Smoothing surfaces (Ice skating), Aerodynamics (Cycling helmets/suits), Ball Bearings.'
      ],
      visualizations: [
        {
          id: 'v3',
          title: 'Friction Management',
          type: 'table',
          data: {
            headers: ['Goal', 'Method', 'Sport'],
            rows: [
              ['Maximize Grip', 'Use Spikes/Studs', 'Football / Sprinting'],
              ['Maximize Grip', 'Use Chalk', 'Rock Climbing'],
              ['Minimize Drag', 'Polished Surface', 'Bowling'],
              ['Minimize Drag', 'Sharp Blades', 'Figure Skating']
            ]
          }
        }
      ]
    },
    {
      id: 'projectile-motion',
      title: 'Projectile in Sports',
      description: 'The path of an object thrown or kicked into the air.',
      content: [
        'Trajectory: The parabolic path followed by a projectile.',
        'Factors Affecting Flight:',
        '1. Angle of Release: 45° for max distance (theoretical). In sports like Shot Put, ~40-42° is optimal due to release height.',
        '2. Initial Velocity: Most critical factor. Higher speed = Longer distance.',
        '3. Height of Release: Higher release point allows for a smaller angle for max distance.',
        '4. Air Resistance: Wind speed and aerodynamics (Drag).',
        '5. Gravity: Constant downward pull.'
      ],
      visualizations: [
        {
          id: 'v4',
          title: 'Projectile Components',
          type: 'list',
          data: [
            'Vertical Component: Height (against gravity)',
            'Horizontal Component: Distance (range)',
            'Apex: Highest point of the trajectory',
            'Range: Horizontal distance covered'
          ]
        }
      ]
    }
  ],
  flashcards: [
    { id: 'f1', category: 'Definition', question: 'What is Biomechanics?', answer: 'Study of forces and their effects on living systems (human body in sports).' },
    { id: 'f2a', category: 'Biomechanics', question: 'What is the Sagittal Plane?', answer: 'Vertical plane dividing body into Left and Right.' },
    { id: 'f2b', category: 'Biomechanics', question: 'Axis for Sagittal Plane movements?', answer: 'Frontal Axis.' },
    { id: 'f2c', category: 'Biomechanics', question: 'Movement away from midline is called?', answer: 'Abduction.' },
    { id: 'f2d', category: 'Biomechanics', question: 'Formula for Friction?', answer: 'F = μN (Force = Coeff × Normal Force).' },
    { id: 'f2e', category: 'Biomechanics', question: 'Bending the elbow is an example of?', answer: 'Flexion.' },
    { id: 'f2f', category: 'Biomechanics', question: 'Which plane involves Rotation?', answer: 'Transverse Plane (around Vertical Axis).' },
    { id: 'f2', category: 'Newton', question: 'State Newton’s First Law.', answer: 'A body continues in its state of rest or uniform motion unless acted upon by an external force.' },
    { id: 'f3', category: 'Newton', question: 'Another name for Newton’s First Law?', answer: 'Law of Inertia.' },
    { id: 'f4', category: 'Newton', question: 'What is Newton’s Second Law formula?', answer: 'F = ma (Force = Mass × Acceleration).' },
    { id: 'f5', category: 'Newton', question: 'Example of Third Law in swimming?', answer: 'Swimmer pushes water backward (Action), water pushes swimmer forward (Reaction).' },
    { id: 'f6', category: 'Stability', question: 'What is "Center of Gravity" (CG)?', answer: 'The point where the total weight of the body is concentrated.' },
    { id: 'f7', category: 'Stability', question: 'How can a wrestler increase stability?', answer: 'By lowering their Center of Gravity and widening their Base of Support.' },
    { id: 'f8', category: 'Friction', question: 'Which friction is stronger: Static or Rolling?', answer: 'Static Friction.' },
    { id: 'f9', category: 'Friction', question: 'Why do gymansts use chalk?', answer: 'To absorb sweat and increase friction for better grip.' },
    { id: 'f10', category: 'Projectile', question: 'What shape is a projectile’s path?', answer: 'Parabola.' },
    { id: 'f11', category: 'Projectile', question: 'Theoretical optimal angle for max range?', answer: '45 degrees.' },
    { id: 'f12', category: 'Projectile', question: 'If release height is higher than landing, optimal angle is...?', answer: 'Less than 45 degrees.' },
    { id: 'f13', category: 'Friction', question: 'Why use spikes in running shoes?', answer: 'To increase friction (traction) and prevent slipping.' },
    { id: 'f14', category: 'Newton', question: 'What is "Inertia of Direction"?', answer: 'Tendency of an object to continue moving in the same direction.' },
    { id: 'f15', category: 'Stability', question: 'Define "Base of Support".', answer: 'The area bounded by the contact points of the body with the ground.' },
    { id: 'f16', category: 'Friction', question: 'Example of rolling friction?', answer: 'Ball rolling on grass / Skateboard wheels.' },
    { id: 'f17', category: 'Friction', question: 'Why is friction called a "necessary evil"?', answer: 'It is needed for movement (grip) but causes wear/tear and energy loss.' },
    { id: 'f18', category: 'Newton', question: 'Identify the law: Catching a ball pulls hands back.', answer: '2nd Law (Increasing time to reduce force impact).' },
    { id: 'f19', category: 'Newton', question: 'Identify the law: Starting blocks in sprinting.', answer: '3rd Law (Action-Reaction) & 1st Law (Overcoming Inertia).' },
    { id: 'f20', category: 'Projectile', question: 'Primary factor affecting projectile distance?', answer: 'Initial Velocity.' },
    { id: 'f21', category: 'Stability', question: 'Example of Unstable Equilibrium?', answer: 'Handstand or standing on one toe.' },
    { id: 'f22', category: 'Stability', question: 'Women have lower CG than men because?', answer: 'Broader pelvis and heavier lower body relative to upper body.' },
    { id: 'f23', category: 'Definition', question: 'Describe "Dynamic Equilibrium".', answer: 'Maintaining balance while the body is in motion.' },
    { id: 'f24', category: 'Friction', question: 'How does lubrication affect friction?', answer: 'It reduces friction by separating surfaces.' },
    { id: 'f25', category: 'Projectile', question: 'Gravity acts on which component regarding projectile?', answer: 'Vertical component.' },
    { id: 'f26', category: 'Projectile', question: 'Does mass affect projectile range in a vacuum?', answer: 'No (Gravity accelerates all objects equally).' },
    { id: 'f27', category: 'Friction', question: 'Type of friction when an object slides?', answer: 'Sliding (Kinetic) Friction.' },
    { id: 'f28', category: 'Newton', question: 'Unit of Force?', answer: 'Newton (N).' },
    { id: 'f29', category: 'Stability', question: 'Relation between CG height and stability?', answer: 'Inversely proportional (Higher CG = Lower Stability).' },
    { id: 'f30', category: 'Friction', question: 'Why do cyclists wear aerodynamic helmets?', answer: 'To reduce air resistance (Air Friction/Drag).' },
    { id: 'f31', category: 'Newton', question: 'A heavier object requires ____ force to accelerate.', answer: 'More.' },
    { id: 'f32', category: 'Friction', question: 'Is air resistance a type of friction?', answer: 'Yes (Fluid friction).' },
    { id: 'f33', category: 'Projectile', question: 'What is "Apex"?', answer: 'The highest point reached by the projectile.' },
    { id: 'f34', category: 'Stability', question: 'Technique to regain balance?', answer: 'Widening the stance or lowering the body.' },
    { id: 'f35', category: 'Newton', question: 'Recoil of a gun is an example of?', answer: 'Newton’s 3rd Law.' },
    { id: 'f36', category: 'General', question: 'Why is biomechanics important?', answer: ' Improves technique, prevents injury, enhances performance.' },
    { id: 'f37', category: 'Newton', question: 'What is Momentum?', answer: 'Mass × Velocity.' },
    { id: 'f38', category: 'Friction', question: 'Why water on a court makes it slippery?', answer: 'Water acts as a lubricant, reducing friction.' },
    { id: 'f39', category: 'Stability', question: 'Where is the CG of a standing human?', answer: 'Around the navel/sacrum area.' },
    { id: 'f40', category: 'Friction', question: 'Why is ice skating possible?', answer: 'Low friction of ice allows gliding.' }
  ],
  sqp: [
    {
      id: 'q1',
      year: '2023-24',
      paperType: 'Board',
      marks: 1,
      type: 'MCQ',
      question: 'Newton’s First Law of Motion is also known as:',
      answer: '(a) Law of Inertia',
      aiExplanation: 'Inertia explains the resistance to change in motion state.'
    },
    {
      id: 'q2',
      year: '2024-25',
      paperType: 'SQP',
      marks: 3,
      type: 'SA',
      question: 'Explain the Law of Acceleration with a suitable example from sports.',
      answer: 'Force = Mass x Acc. In Shot Put, applying more force to the shot increases its acceleration and distance.',
      aiExplanation: 'Mention the formula F=ma. Explain that for a constant mass, Force is proportional to Acceleration.'
    },
    {
      id: 'q3',
      year: '2022-23',
      paperType: 'Board',
      marks: 5,
      type: 'LA',
      question: 'Define Projectile. Elaborate on any four factors affecting the trajectory of a projectile.',
      answer: 'Projectile: Object thrown in air. Factors: 1. Angle (45 deg) 2. Velocity (Direct prop) 3. Gravity 4. Air Resistance.',
      aiExplanation: 'Provide the definition first. Then detail the factors, emphasizing Initial Velocity and Angle as the controllable ones.'
    },
    {
      id: 'q4',
      year: '2025-26',
      paperType: 'SQP',
      marks: 1,
      type: 'MCQ',
      question: 'To increase stability, an athlete should:',
      answer: '(c) Lower the Center of Gravity',
      aiExplanation: 'Raising CG makes one unstable. Lowering it makes one stable.'
    },
    {
      id: 'q5',
      year: '2023-24',
      paperType: 'SQP',
      marks: 3,
      type: 'SA',
      question: 'Differentiate between Sliding Friction and Rolling Friction.',
      answer: 'Sliding: Surfaces rub (Sled). Rolling: Object rolls (Ball). Rolling friction is much weaker than Sliding friction.',
      aiExplanation: 'Teacher\'s Voice - Scoring Breakdown (3 Marks):\n1. **Define Sliding Friction (1 Mark):** Resistance when one surface slides over another (e.g., Ice Skating).\n2. **Define Rolling Friction (1 Mark):** Resistance when an object rolls over a surface (e.g., Bowling).\n3. **Comparison (1 Mark):** Explicitly state that "Rolling Friction is significantly less than Sliding Friction" because the point of contact is smaller and deformation is minimal.'
    },
    {
      id: 'q6',
      year: '2021-22',
      paperType: 'Term-1',
      marks: 4,
      type: 'Case',
      question: 'Amit is a wrestler. He adopts a specific stance to avoid being pushed over. 1. What physical principle is he using? 2. How does it help?',
      answer: '1. Stability/Equilibrium. 2. Wide base and low CG prevent him from being toppled easily.',
      aiExplanation: 'He is manipulating the Base of Support and Center of Gravity.'
    },
    {
      id: 'q7',
      year: '2024-25',
      paperType: 'Board',
      marks: 3,
      type: 'SA',
      question: 'Why is Friction considered a necessary evil in sports?',
      answer: 'Necessary: Provides grip (Running). Evil: Slows motion (Skiing) and causes wear.',
      aiExplanation: 'Must mention both the positive (Traction) and negative (Drag/Heat/Wear) aspects.'
    },
    {
      id: 'q8',
      year: '2022-23',
      paperType: 'SQP',
      marks: 5,
      type: 'LA',
      question: 'Explain Newton’s Third Law of Motion with application in three different sports.',
      answer: 'Swimming (Push water back), Walking (Push ground back), Dribbling (Ball hits floor). Action = -Reaction.',
      aiExplanation: 'Choose dynamic examples. Swimming is the classic textbook example.'
    },
    {
      id: 'q9',
      year: '2025-26',
      paperType: 'SQP',
      marks: 1,
      type: 'MCQ',
      question: 'The angle of release for maximum distance when release height and landing height are equal is:',
      answer: '(b) 45 degrees',
      aiExplanation: 'Theoretical maximum is always 45 degrees.'
    },
    {
      id: 'q10',
      year: '2023-24',
      paperType: 'Term-1',
      marks: 1,
      type: 'MCQ',
      question: 'Which law of motion is also known as the Law of Inertia?',
      answer: 'Newton’s First Law',
      aiExplanation: 'First Law states a body stays at rest/motion unless acted on. This property is Inertia.'
    },
    {
      id: 'q11',
      year: '2024-25',
      paperType: 'SQP',
      marks: 1,
      type: 'MCQ',
      question: 'Which type of friction is the strongest?',
      answer: 'Static Friction',
      aiExplanation: 'Static > Sliding > Rolling. It takes more force to start an object moving than to keep it moving.'
    },
    {
      id: 'q3-2024-sqp-friction',
      year: '2023-24',
      paperType: 'SQP',
      marks: 1,
      type: 'MCQ',
      questionNumber: 'Q3.',
      question: 'The Friction force acts in a/an _______________ direction to the direction of motion of an object.\n(a) Opposite\n(b) Same\n(c) Downwards\n(d) Diagonal',
      answer: '(a) Opposite',
      markingScheme: '(a) Opposite',
      aiExplanation: 'Teacher\'s Voice: \n*   **Concept:** Friction always opposes motion. \n*   **Direction:** If object moves Right -> Friction acts Left.'
    },
    {
      id: 'q8-2024-sqp-newton1',
      year: '2023-24',
      paperType: 'SQP',
      marks: 1,
      type: 'MCQ',
      questionNumber: 'Q8.',
      question: 'Identify the given below [Image: Stationary vs Moving Object Logic]\n(a) First Law of Motion\n(b) Second Law of Motion\n(c) Third Law of Motion\n(d) Law of Effects',
      answer: '(a) First Law of Motion',
      markingScheme: '(a) First Law of Motion',
      aiExplanation: 'Teacher\'s Voice: \n*   **Key Phrase:** "Stationary object will not move... moving object will not stop." \n*   **Law:** Law of Inertia (Newton\'s 1st Law).'
    },
    {
      id: 'q32-2024-sqp-equilibrium',
      year: '2023-24',
      paperType: 'SQP',
      marks: 4,
      type: 'Case',
      questionNumber: 'Q32.',
      question: 'Equilibrium Principles:\n(a) Nearer the CG to the base, more is the ______?\n(b) CG position changes depending on ______?\n(c) Sum of forces must be ______?\n(d) CG is the average location of ______?',
      answer: '(a) Stability (b) Body position/Shape (c) Zero (d) Weight',
      markingScheme: '(a) Stability\n(b) Position of body/posture\n(c) Zero\n(d) Weight of an object',
      aiExplanation: 'Teacher\'s Voice - Fill in the blanks (4 Marks):\n1. **Lower CG:** Increases Stability.\n2. **CG Shift:** Changes with posture (raising hands raises CG).\n3. **Equilibrium Condition:** Net Force = 0.\n4. **Definition:** CG = Center of Weight distribution.'
    },
    {
      id: 'q37-2024-sqp-newton-app',
      year: '2023-24',
      paperType: 'SQP',
      marks: 5,
      type: 'LA',
      questionNumber: 'Q37.',
      question: 'With the help of suitable examples, discuss the application of Newton\'s Laws of Motion in sports.',
      answer: '1. Inertia: Starting a sprint. 2. Acceleration: Force applied on ball. 3. Reaction: Swimming tone.',
      markingScheme: '1. Law of Inertia: Starting from blocks (Sprinter needs force to overcome inertia). \n2. Law of Acceleration: Shot put (More force = more acceleration). \n3. Law of Reaction: High Jump (Pushing ground down to go up).',
      aiExplanation: 'Teacher\'s Voice - Application Focus (5 Marks):\n1. **Law 1 (1.5 Marks):** Example: Football stationary until kicked.\n2. **Law 2 (1.5 Marks):** Example: Hitting a ball harder makes it go faster (F=ma).\n3. **Law 3 (2 Marks):** Example: Dribbling basketball (Ball pushes floor, floor pushes ball).'
    }
  ],
  mindMap: {
    id: 'm1',
    label: 'Unit 8: Biomechanics',
    children: [
      {
        id: 'm2',
        label: 'Newton’s Laws',
        children: [{ id: 'm3', label: '1. Inertia' }, { id: 'm4', label: '2. Acceleration' }, { id: 'm5', label: '3. Reaction' }]
      },
      {
        id: 'm6',
        label: 'Stability',
        children: [{ id: 'm7', label: 'Equilibrium (Static/Dynamic)' }, { id: 'm8', label: 'Center of Gravity' }]
      },
      {
        id: 'm9',
        label: 'Forces',
        children: [{ id: 'm10', label: 'Friction' }, { id: 'm11', label: 'Projectile Motion' }]
      }
    ]
  },
  cheatSheet: [
    {
      title: 'Newton\'s Laws in Sports',
      points: [
        '1st (Inertia): Sprinter at starting blocks (Rest to Motion)',
        '2nd (Acceleration): Shot Put (Heavy needs more Force) -> F=ma',
        '3rd (Reaction): Swimming (Push water back -> Body moves forward)'
      ]
    },
    {
      title: 'Lever System Mnemonic: F-L-E',
      points: [
        '1st Class: Fulcrum in middle (Seesaw / Neck extension)',
        '2nd Class: Load in middle (Wheelbarrow / Calf Raise)',
        '3rd Class: Effort in middle (Bicep Curl / Bat swing)'
      ]
    },
    {
      title: 'Friction Hierarchy',
      points: [
        'Static (Hardest to start) > Sliding (Kinetic) > Rolling (Easiest)'
      ]
    },
    {
      title: 'Projectile Logic',
      points: [
        'Max Range Angle = 45° (When release/landing height same)',
        'Key Factor = Initial Velocity (Speed is King)',
        'Gravity = Constant downward pull (9.8 m/s²)'
      ]
    },
    {
      title: 'Stability Rules',
      points: [
        'Lower Center of Gravity (CG) = Higher Stability',
        'Wider Base = Higher Stability',
        'C.G. must fall inside Base of Support'
      ]
    },
    {
      title: 'Planes & Axes (Pairings)',
      points: [
        'Sagittal Plane + Frontal Axis (Running / Somersault)',
        'Frontal Plane + Sagittal Axis (Cartwheel / Jumping Jack)',
        'Transverse Plane + Vertical Axis (Spin / Twist)'
      ]
    }
  ],
};
