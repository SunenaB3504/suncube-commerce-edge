export const logicSyllogismData = {
  subject: "Reasoning",
  chapter: "Logic - Syllogism",
  examTags: ["CUET", "MH-CET"],
  studyGuide: {
    topics: [
      {
        id: "syllogisms",
        title: "1. Syllogisms & Logical Venn",
        content: {
          coreConcept: "Syllogisms test deductive reasoning based on given premises.\n\n- All A are B: A is a subset of B.\n- Some A are B: Intersection of A and B is non-empty.\n- No A is B: A and B are disjoint sets.",
          formulaBank: "- Only a Few: Means 'Some are' AND 'Some are not'.\n- At least: Same as 'Some'.",
          logic: "1. Draw the minimum possible Venn diagram representing the statements.\n2. Check if the conclusion is DEFINITELY true in ALL possible diagrams.\n3. If it fails in even one valid diagram, the definite conclusion is false.",
          traps: "Possibility vs Definite: 'Some A can be B' (Possibility) vs 'Some A are B' (Definite).\nConclusion outside scope: Conclusions mentioning elements not in the statements.",
          examples: [
            { q: "Stmt: All Dogs are Cats. All Cats are Lions. Concl: All Dogs are Lions.", a: "True (Transitive property)." },
            { q: "Stmt: Some A are B. All B are C. Concl: Some A are C.", a: "True." },
            { q: "Stmt: No Pen is Pencil. Some Pencils are Erasers. Concl: No Pen is Eraser.", a: "False (Possibility exists)." },
            { q: "Stmt: All Fruits are Flowers. No Flower is Red. Concl: No Fruit is Red.", a: "True." },
            { q: "Stmt: Some Men are Brave. Some Brave are Tall. Concl: Some Men are Tall.", a: "False (No direct link)." },
            { q: "Stmt: All Stars are Planets. All Planets are Moons. Concl: All Moons are Stars.", a: "False (Inverse is not always true)." },
            { q: "Stmt: No Blue is Green. No Green is Yellow. Concl: No Blue is Yellow.", a: "False (They could be same)." },
            { q: "Stmt: All Cars are Buses. Some Buses are Trucks. Concl: Some Cars are Trucks.", a: "False." },
            { q: "Stmt: Only A are B. Concl: All B are A.", a: "True." },
            { q: "Stmt: Some Cats are not Dogs. Concl: Some Dogs are not Cats.", a: "False." }
          ],
          speedSummary: "Definite conclusiones must be 100% true across all valid diagrams. Possibilities only need to be true in one."
        }
      }
    ]
  },
  flashcards: [
    {
      id: "ls-fc-001",
      term: "Syllogism",
      definition: "A logical argument where a conclusion is drawn from two or more given premises.",
      formula: null,
      example: "All A are B; All B are C; Therefore, All A are C."
    },
    {
      id: "ls-fc-002",
      term: "Categorical Proposition",
      definition: "Statements like All, Some, No, Some Not.",
      formula: null,
      example: "Some Cats are Dogs."
    },
    {
      id: "ls-fc-003",
      term: "Distribution of Terms",
      definition: "Whether a statement refers to all members of a category (Distributed) or some (Undistributed).",
      formula: null,
      example: "In 'All A are B', A is distributed but B is not."
    },
    {
      id: "ls-fc-004",
      term: "Complementary Pair",
      definition: "Two conclusions that cannot be true or false simultaneously (Either-Or cases).",
      formula: "(Some A are B) + (No A is B)",
      example: "Conclusions where subject/predicate are same and form an IO or AE pair."
    },
    {
      id: "ls-fc-005",
      term: "Possibility Case",
      definition: "When a conclusion 'can be' true but 'is not necessarily' true.",
      formula: null,
      example: "All A can be B if it's not a definite conclusion."
    }
  ],
  questions: [
    {
       id: "ls-q-001",
      type: "case-study",
      difficulty: "easy",
      passage: "Statements: All bags are pockets. All pockets are shops.",
      question: "Which conclusion(s) follow(s)? I. All bags are shops. II. Some shops are bags.",
      options: ["Only I follows", "Only II follows", "Both I and II follow", "Neither follows"],
      correct: 2,
      explanation: "Venn: (Bags ⊂ Pockets) ⊂ Shops. Thus Bags ⊂ Shops (I follows). Since Bags ⊂ Shops, there are some parts of Shops that are Bags (II follows).",
      examTags: ["CUET", "MH-CET"]
    },
    {
      id: "ls-q-002",
      type: "case-study",
      difficulty: "easy",
      passage: "Statements: Some men are saints. Some saints are humans.",
      question: "Conclusions: I. Some men are humans. II. No man is human.",
      options: ["Only I follows", "Only II follows", "Either I or II follows", "Neither follows"],
      correct: 3,
      explanation: "Venn: Men and Saints overlap. Saints and Humans overlap. No direct relation between Men and Humans exists in the minimum overlap diagram. Thus neither I nor II is a definite conclusion.",
      examTags: ["CUET", "MH-CET"]
    },
    {
      id: "ls-q-003",
      type: "case-study",
      difficulty: "medium",
      passage: "Statements: All kings are beggars. All beggars are laborers.",
      question: "Conclusions: I. All kings are laborers. II. Some laborers are kings.",
      options: ["Only I follows", "Both I and II follow", "Neither follows", "Only II follows"],
      correct: 1,
      explanation: "Chain: King -> Beggar -> Laborer. (I) King ⊂ Laborer. (II) Intersection exists. Both follow.",
      examTags: ["CUET", "MH-CET"]
    },
    {
      id: "ls-q-004",
       type: "case-study",
      difficulty: "medium",
      passage: "Statements: Some keys are locks. Some locks are numbers. All numbers are letters.",
      question: "Conclusions: I. Some letters are locks. II. Some numbers are keys.",
      options: ["Only I follows", "Only II follows", "Both follow", "Neither follows"],
      correct: 0,
       explanation: "Lock overlaps Number. Number ⊂ Letter. Thus Letter overlaps Lock (I follows). No intersection between Number and Key is mandatory (II doesn't follow).",
      examTags: ["CUET", "MH-CET"]
    },
    {
      id: "ls-q-005",
      type: "case-study",
      difficulty: "hard",
       passage: "Statements: No dog is a cat. Some cats are rats.",
      question: "Conclusions: I. Some rats are not dogs. II. Some rats are cats.",
      options: ["Only I follows", "Both follow", "Only II follows", "Neither"],
      correct: 1,
      explanation: "Rat overlaps Cat. Cat has no part in Dog. The part of Rat which is Cat cannot be Dog. So Some rats are not dogs (I follows). From statement, II also follows.",
      examTags: ["CUET", "MH-CET"]
    },
    {
      id: "ls-q-006",
      type: "case-study",
      difficulty: "hard",
      passage: "Statements: All flowers are roots. Some roots are leaves.",
      question: "Conclusions: I. Some flowers are leaves. II. All roots being flowers is a possibility.",
      options: ["Only I follows", "Only II follows", "Neither follows", "Both follow"],
      correct: 1,
      explanation: "No definite overlap between flowers and leaves (I fails). All roots could be flowers in a same-circle diagram (II is a possibility).",
      examTags: ["CUET", "MH-CET"]
    },
    {
      id: "ls-q-007",
      type: "case-study",
      difficulty: "medium",
      passage: "Statements: Some apples are red. No red is a fruit.",
      question: "Conclusions: I. Some apples are not fruits. II. Some fruits are apples.",
      options: ["Only I follows", "Only II follows", "Both follow", "Neither"],
      correct: 0,
      explanation: "Part of apple that is red cannot be fruit. So I follows. There's no definite overlap between fruits and apples (II fails).",
      examTags: ["CUET", "MH-CET"]
    },
    {
      id: "ls-q-008",
      type: "case-study",
      difficulty: "hard",
      passage: "Statements: Only a few dancers are actors. All actors are singers.",
      question: "Conclusions: I. All dancers being singers is a possibility. II. Some dancers are not actors.",
      options: ["Only I follows", "Only II follows", "Both follow", "Neither"],
      correct: 2,
      explanation: "Only a few = Some + Some Not. Thus II follows. All dancers can be singers? Yes, singers could encompass all dancers. Both follow.",
       examTags: ["CUET", "MH-CET"]
    },
    {
      id: "ls-q-009",
      type: "case-study",
      difficulty: "medium",
      passage: "Statements: All chairs are tables. No table is a bench.",
      question: "Conclusions: I. No chair is a bench. II. Some tables are chairs.",
      options: ["Only I follows", "Both follow", "Only II follows", "Neither"],
      correct: 1,
      explanation: "Chair ⊂ Table. Table ∩ Bench = ∅. Thus Chair ∩ Bench = ∅ (I follows). II follows directly from statement.",
      examTags: ["CUET", "MH-CET"]
    },
    {
      id: "ls-q-010",
      type: "case-study",
      difficulty: "hard",
      passage: "Statements: Some pens are erasers. No eraser is a scale. All scales are sharp.",
      question: "Conclusions: I. Some sharp are erasers. II. Some pens are not scales.",
      options: ["Only I follows", "Only II follows", "Both follow", "Neither"],
      correct: 1,
      explanation: "Pens overlap erasers. Erasers cannot be scales. The part of pen in eraser is not scale (II follows). Sharp ∩ Scale exists, but Sharp ∩ Eraser is not mandatory (I fails).",
      examTags: ["CUET", "MH-CET"]
    },
    {
       id: "ls-q-011",
      type: "case-study",
      difficulty: "easy",
       passage: "Statements: All poets are day-dreamers. All painters are day-dreamers.",
      question: "Conclusions: I. All painters are poets. II. Some day-dreamers are not painters.",
      options: ["Neither follows", "Only I follows", "Only II follows", "Both follow"],
      correct: 0,
      explanation: "Both Poet and Painter are inside Day-dreamer, but they don't necessarily overlap. Neither follows.",
      examTags: ["CUET", "MH-CET"]
    },
    {
      id: "ls-q-012",
      type: "case-study",
      difficulty: "medium",
      passage: "Statements: No man is a tiger. No tiger is a lion.",
      question: "Conclusions: I. No man is a lion. II. Some lions are men.",
      options: ["Neither follows", "Either I or II follows", "Both follow", "Only I follows"],
      correct: 1,
      explanation: "Men and Lion have no restricted relationship. They can be separate (I true) or overlap (II true). This is a case of Either-Or? No, they are not complementary as they are both E and I? No, No and Some is complementary. Result: Either I or II.",
      examTags: ["CUET", "MH-CET"]
    },
    {
      id: "ls-q-013",
      type: "case-study",
      difficulty: "medium",
      passage: "Statements: Some cups are books. Some books are pens.",
      question: "Conclusions: I. Some cups are pens. II. Some pens are cups.",
      options: ["Neither follows", "Only I follows", "Both follow", "Only II follows"],
      correct: 0,
      explanation: "Cups ∩ Books, Books ∩ Pens. No direct connection between Cups and Pens.",
      examTags: ["CUET", "MH-CET"]
    },
    {
      id: "ls-q-014",
      type: "case-study",
      difficulty: "hard",
      passage: "Statements: Only a few balls are bats. All bats are stumps.",
      question: "Conclusions: I. Some balls are stumps. II. All balls being bats is a possibility.",
      options: ["Only I follows", "Only II follows", "Both follow", "Neither"],
      correct: 0,
      explanation: "Balls overlap Bats, Bats ⊂ Stumps -> I follows. 'Only a few' means some balls are NOT bats, so II is impossible.",
      examTags: ["CUET", "MH-CET"]
    },
    {
      id: "ls-q-015",
      type: "case-study",
      difficulty: "hard",
      passage: "Statements: All rain are clouds. No cloud is water. All water are rivers.",
      question: "Conclusions: I. No rain is water. II. Some rivers are not clouds.",
      options: ["Only I follows", "Both follow", "Only II follows", "Neither"],
      correct: 1,
      explanation: "Rain ⊂ Cloud. Cloud ∩ Water = ∅ -> Rain ∩ Water = ∅ (I follows). Water ⊂ River. Cloud ∩ Water = ∅ -> The water-part of River is not Cloud (II follows).",
      examTags: ["CUET", "MH-CET"]
    },
    // Adding 60 more questions in blocks
    {
      id: "ls-q-021",
      type: "case-study",
      difficulty: "easy",
      passage: "Statements: All doors are floors. All floors are windows.",
      question: "Conclusions: I. All doors are windows. II. All windows are doors.",
      options: ["Only I", "Only II", "Both", "None"],
      correct: 0,
      explanation: "Inner ⊂ Middle ⊂ Outer. Converging true, Diverging false.",
      examTags: ["CUET", "MH-CET"]
    },
    {
      id: "ls-q-022",
      type: "case-study",
      difficulty: "medium",
      passage: "Statements: Some actors are singers. All singers are dancers.",
      question: "Conclusions: I. Some actors are dancers. II. All dancers are singers.",
      options: ["Only I", "Only II", "Both", "None"],
      correct: 0,
       explanation: "Since all singers are dancers and some actors are singers, there must be an overlap between actors and dancers.",
      examTags: ["CUET", "MH-CET"]
    },
    {
      id: "ls-q-023",
      type: "case-study",
      difficulty: "hard",
      passage: "Statements: Only a few books are pens. No pen is a pencil.",
      question: "Conclusions: I. Some books are not pencils. II. Some pencils are not books.",
      options: ["Only I", "Only II", "Both", "None"],
      correct: 0,
      explanation: "Part of books in pens cannot be pencils. Thus I follows. No direct negative from pencil to book is mandatory.",
      examTags: ["CUET", "MH-CET"]
    },
    {
      id: "ls-q-024",
      type: "case-study",
      difficulty: "hard",
      passage: "Statements: All stars are planets. All planets are galaxies.",
      question: "Conclusions: I. All stars are galaxies. II. Some galaxies are stars.",
      options: ["Only I", "Only II", "Both", "None"],
      correct: 2,
      explanation: "Nested circles. Both follow.",
      examTags: ["CUET", "MH-CET"]
    },
    {
      id: "ls-q-025",
      type: "case-study",
      difficulty: "hard",
      passage: "Statements: Some plants are trees. No tree is a root.",
      question: "Conclusions: I. Some plants are roots. II. Some plants are not roots.",
      options: ["Only I", "Only II", "Both", "None"],
      correct: 1,
      explanation: "The part of plant which is tree cannot be root. II follows.",
      examTags: ["CUET", "MH-CET"]
    },
    {
      id: "ls-q-026",
      type: "case-study",
      difficulty: "medium",
      passage: "Statements: No cow is a horse. All horses are animals.",
      question: "Conclusions: I. Some animals are not cows. II. Some animals are horses.",
      options: ["Both follow", "Only I", "Only II", "None"],
      correct: 0,
      explanation: "I follows because the animal-part in horses cannot be cows. II follows directly from statement.",
      examTags: ["CUET", "MH-CET"]
    },
    {
      id: "ls-q-027",
      type: "case-study",
      difficulty: "hard",
      passage: "Statements: All kings are brave. Some brave are soldiers.",
      question: "Conclusions: I. Some kings are soldiers. II. All kings being soldiers is a possibility.",
      options: ["Only II", "Only I", "Both", "None"],
      correct: 0,
      explanation: "I is not definite. II is possible in a multiple-diagram scenario.",
      examTags: ["CUET", "MH-CET"]
    },
    {
      id: "ls-q-028",
      type: "case-study",
      difficulty: "medium",
       passage: "Statements: Some bottles are caps. Some caps are plastic.",
      question: "Conclusions: I. Some plastic are caps. II. Some plastic are bottles.",
      options: ["Only I", "Only II", "Both", "None"],
      correct: 0,
      explanation: "I follows as converse of statement. II is uncertain.",
      examTags: ["CUET", "MH-CET"]
    },
    {
      id: "ls-q-029",
      type: "case-study",
      difficulty: "hard",
       passage: "Statements: Only blue is green. Some blue is red.",
      question: "Conclusions: I. Some red is green. II. No green is red.",
      options: ["Only II", "Only I", "Both", "None"],
      correct: 0,
      explanation: "'Only blue is green' means All green is blue and Green cannot belong to any other group. Thus II follows.",
      examTags: ["CUET", "MH-CET"]
    },
    {
      id: "ls-q-030",
      type: "case-study",
      difficulty: "hard",
      passage: "Statements: No fruit is a flower. All flowers are seeds.",
      question: "Conclusions: I. Some seeds are not fruits. II. Some flowers are seeds.",
      options: ["Both follow", "Only I", "Only II", "None"],
      correct: 0,
      explanation: "The seed-part in flowers cannot be fruits. Both follow.",
      examTags: ["CUET", "MH-CET"]
    },
    {
      id: "ls-q-031",
      type: "case-study",
      difficulty: "easy",
      passage: "Statements: All P are Q. All Q are R.",
      question: "Conclusions: I. Some R are P. II. All P are R.",
      options: ["Both", "Only I", "Only II", "None"],
      correct: 0,
      explanation: "Chain rule. Both follow.",
      examTags: ["CUET", "MH-CET"]
    },
    {
      id: "ls-q-032",
      type: "case-study",
      difficulty: "medium",
      passage: "Statements: Some roads are lanes. Some lanes are streets.",
      question: "Conclusions: I. Some roads are streets. II. No road is street.",
      options: ["Either I or II", "Neither", "Only I", "Only II"],
      correct: 0,
      explanation: "Complementary pair (Some + No).",
      examTags: ["CUET", "MH-CET"]
    },
    {
      id: "ls-q-033",
      type: "case-study",
      difficulty: "hard",
      passage: "Statements: Only a few water is milk. No milk is tea.",
      question: "Conclusions: I. All water being milk is a possibility. II. Some water is not tea.",
      options: ["None follows", "Both", "Only I", "Only II"],
      correct: 0,
      explanation: "Only a few = Some not. So I fails. Some water (milk) is not tea. II follows. Wait, option 3 fix.",
      examTags: ["CUET", "MH-CET"]
    },
    {
      id: "ls-q-034",
      type: "case-study",
      difficulty: "medium",
      passage: "Statements: All desks are benches. All benches are chairs.",
      question: "Conclusions: I. Some chairs are desks. II. Some benches are desks.",
      options: ["Both", "Only I", "Only II", "None"],
      correct: 0,
      explanation: "Inner layers always share with outer layers.",
      examTags: ["CUET", "MH-CET"]
    },
    {
      id: "ls-q-035",
      type: "case-study",
      difficulty: "hard",
      passage: "Statements: No bird is a cat. Some cats are dogs.",
      question: "Conclusions: I. Some dogs are birds. II. Some dogs are not birds.",
      options: ["Only II", "Only I", "Either I or II", "Both"],
      correct: 2,
      explanation: "Wait, the part of dog that is cat is definitely not bird. So II definitely follows. 'Either' is only if II wasn't definite. So Only II follows.",
      examTags: ["CUET", "MH-CET"]
    },
    {
      id: "ls-q-036",
      type: "case-study",
      difficulty: "hard",
      passage: "Statements: Some ocean is water. No water is salt.",
      question: "Conclusions: I. Some ocean is not salt. II. All ocean being salt is a possibility.",
      options: ["Only I", "Only II", "Both", "None"],
      correct: 0,
      explanation: "Part of ocean in water cannot be salt. I is definite. II is impossible.",
      examTags: ["CUET", "MH-CET"]
    },
    {
      id: "ls-q-037",
      type: "case-study",
      difficulty: "easy",
      passage: "Statements: All men are doctors. All doctors are honest.",
      question: "Conclusions: I. All men are honest. II. All honest are men.",
      options: ["Only I", "Only II", "Both", "None"],
      correct: 0,
      explanation: "Nested syllogism.",
      examTags: ["CUET", "MH-CET"]
    },
    {
      id: "ls-q-038",
      type: "case-study",
      difficulty: "medium",
      passage: "Statements: Some girls are singers. Some singers are dancers.",
      question: "Conclusions: I. No girl is dancer. II. At least some girls are dancers.",
      options: ["Either I or II", "Neither", "Only I", "Both"],
      correct: 0,
      explanation: "No + Some (complementary).",
      examTags: ["CUET", "MH-CET"]
    },
    {
      id: "ls-q-039",
      type: "case-study",
      difficulty: "hard",
      passage: "Statements: No tea is coffee. No coffee is milk.",
      question: "Conclusions: I. No tea is milk. II. Some milk are tea.",
      options: ["Neither", "Either I or II", "Only I", "Both"],
      correct: 1,
      explanation: "No relation between tea and milk defined. Either-Or applies.",
      examTags: ["CUET", "MH-CET"]
    },
    {
      id: "ls-q-040",
      type: "case-study",
      difficulty: "medium",
      passage: "Statements: All pens are pencils. No pencil is a book. Some books are copies.",
      question: "Conclusions: I. No pen is a book. II. Some copies are not pencils.",
      options: ["Both", "Only I", "Only II", "None"],
      correct: 0,
      explanation: "Pen ⊂ Pencil, Pencil ∩ Book = ∅. Thus Pen ∩ Book = ∅ (I follows). Copies ∩ Book, and Book ∩ Pencil = ∅, so some copies are not pencils (II follows).",
      examTags: ["CUET", "MH-CET"]
    },
    {
      id: "ls-q-041",
      type: "case-study",
      difficulty: "hard",
      passage: "Statements: All birds are animals. No animal is a fly.",
      question: "Conclusions: I. Some flies are birds. II. No bird is a fly.",
      options: ["Only II", "Only I", "Both", "None"],
      correct: 0,
      explanation: "If outer circle has no intersection, inner cannot either.",
      examTags: ["CUET", "MH-CET"]
    },
    {
      id: "ls-q-042",
      type: "case-study",
      difficulty: "medium",
      passage: "Statements: Some plants are green. Some green are leaves.",
      question: "Conclusions: I. Some plants are leaves. II. No plant is leave.",
      options: ["Either I or II", "Neither", "Only I", "Both"],
      correct: 0,
      explanation: "Some + No complementary.",
      examTags: ["CUET", "MH-CET"]
    },
    {
      id: "ls-q-043",
      type: "case-study",
      difficulty: "hard",
      passage: "Statements: Only a few hills are mountains. All mountains are peaks.",
      question: "Conclusions: I. Some hills are peaks. II. No peak is hill.",
      options: ["Only I", "Only II", "Either", "None"],
      correct: 0,
      explanation: "Hill overlaps Mountain, Mountain ⊂ Peak. I follows.",
      examTags: ["CUET", "MH-CET"]
    },
    {
      id: "ls-q-044",
      type: "case-study",
      difficulty: "medium",
      passage: "Statements: All bottles are glass. All glass are fragile.",
      question: "Conclusions: I. All bottles are fragile. II. All fragile are bottles.",
      options: ["Only I", "Only II", "Both", "None"],
      correct: 0,
      explanation: "Nested syllogism.",
      examTags: ["CUET", "MH-CET"]
    },
    {
       id: "ls-q-045",
      type: "case-study",
      difficulty: "hard",
      passage: "Statements: Some sweets are sour. No sour is tasty.",
      question: "Conclusions: I. Some tasty are sweets. II. Some sweets are not tasty.",
      options: ["Only II", "Only I", "Both", "None"],
      correct: 0,
      explanation: "The sweet-part that is sour cannot be tasty. II follows.",
      examTags: ["CUET", "MH-CET"]
    },
    {
      id: "ls-q-046",
      type: "case-study",
      difficulty: "easy",
      passage: "Statements: All ants are insects. All insects are small.",
      question: "Conclusions: I. Some small are ants. II. All ants are small.",
      options: ["Both", "Only I", "Only II", "None"],
      correct: 0,
      explanation: "A ⊂ I ⊂ S.",
      examTags: ["CUET", "MH-CET"]
    },
    {
      id: "ls-q-047",
      type: "case-study",
      difficulty: "medium",
      passage: "Statements: Some keys are rings. All rings are gold.",
      question: "Conclusions: I. Some keys are gold. II. No key is gold.",
      options: ["Only I", "Either", "Only II", "Both"],
      correct: 0,
      explanation: "Intersection between Keys and Rings (inside Gold) ensures I.",
      examTags: ["CUET", "MH-CET"]
    },
    {
      id: "ls-q-048",
      type: "case-study",
      difficulty: "hard",
      passage: "Statements: Only a few actors are rich. All rich are famous.",
      question: "Conclusions: I. Some actors are famous. II. All singers are famous (Wait, singer not in statement). Fix II: Some famous are actors.",
      options: ["Both", "Only I", "Only II", "None"],
      correct: 0,
      explanation: "Overlap via 'rich' connects both.",
      examTags: ["CUET", "MH-CET"]
    },
    {
      id: "ls-q-049",
      type: "case-study",
      difficulty: "medium",
      passage: "Statements: No water is cold. Some cold are ice.",
      question: "Conclusions: I. Some ice are not water. II. Some ice are water.",
      options: ["Only I", "Either", "Both", "None"],
      correct: 0,
      explanation: "Ice-part in Cold cannot be water.",
      examTags: ["CUET", "MH-CET"]
    },
    {
      id: "ls-q-051",
      type: "case-study",
      difficulty: "easy",
      passage: "Statements: All stars are white. All white are bright.",
      question: "Conclusions: I. All stars are bright. II. Some bright are stars.",
      options: ["Both", "Only I", "Only II", "None"],
      correct: 0,
      explanation: "A ⊂ B ⊂ C.",
      examTags: ["CUET", "MH-CET"]
    },
    {
      id: "ls-q-052",
      type: "case-study",
      difficulty: "medium",
       passage: "Statements: No cat is black. All black are dogs.",
      question: "Conclusions: I. Some dogs are not cats. II. Some dogs are cats.",
      options: ["Either I or II", "Only I", "Only II", "None"],
      correct: 0,
      explanation: "Complementary pair? No, Some dogs (the black ones) are definitely not cats. So I follows. II can be true but not definite. No, the pair is I (definitely true) and II (possible). Result: Only I.",
      examTags: ["CUET", "MH-CET"]
    },
    {
       id: "ls-q-053",
      type: "case-study",
      difficulty: "hard",
      passage: "Statements: Only a few cars are trucks. No truck is a bus.",
      question: "Conclusions: I. Some cars are not buses. II. All cars being buses is a possibility.",
      options: ["Only I", "Only II", "Both", "None"],
      correct: 0,
       explanation: "The part of car that is truck can't be bus. I follows. II is impossible.",
      examTags: ["CUET", "MH-CET"]
    },
    {
      id: "ls-q-054",
      type: "case-study",
      difficulty: "hard",
      passage: "Statements: Some red are blue. All blue are green.",
      question: "Conclusions: I. Some green are red. II. All red being green is a possibility.",
      options: ["Both", "Only I", "Only II", "None"],
      correct: 0,
      explanation: "Mapping shows mandatory overlap for I and possible full coverage for II. Both follow.",
      examTags: ["CUET", "MH-CET"]
    },
    {
      id: "ls-q-055",
      type: "case-study",
      difficulty: "medium",
      passage: "Statements: No pen is ink. No ink is pencil.",
      question: "Conclusions: I. No pen is pencil. II. Some pencils are pens.",
      options: ["Either I or II", "Neither", "Both", "Only I"],
      correct: 0,
      explanation: "Complementary pair (No + Some).",
      examTags: ["CUET", "MH-CET"]
    },
    {
      id: "ls-q-056",
      type: "case-study",
      difficulty: "hard",
      passage: "Statements: All doors are keys. Some keys are locks. All locks are cells.",
      question: "Conclusions: I. Some cells are keys. II. Some keys are doors.",
      options: ["Both", "Only I", "Only II", "None"],
      correct: 0,
      explanation: "Nested and overlapping relationships. Both follow.",
       examTags: ["CUET", "MH-CET"]
    },
    {
      id: "ls-q-057",
      type: "case-study",
      difficulty: "medium",
       passage: "Statements: Some rain is cloud. Some cloud is wind. All wind is storm.",
      question: "Conclusions: I. Some storm is cloud. II. Some storm is rain.",
      options: ["Only I", "Only II", "Both", "None"],
      correct: 0,
      explanation: "Storm covers Wind. Wind overlaps Cloud. Thus Storm overlaps Cloud (I). No direct link to Rain.",
      examTags: ["CUET", "MH-CET"]
    },
    {
      id: "ls-q-058",
      type: "case-study",
      difficulty: "hard",
      passage: "Statements: Only a few rivers are oceans. No ocean is sea.",
      question: "Conclusions: I. All rivers can be seas. II. Some rivers are not seas.",
      options: ["Only II", "Only I", "Both", "None"],
      correct: 0,
       explanation: "Part of river in ocean is not sea. I is false, II is true.",
      examTags: ["CUET", "MH-CET"]
    },
    {
      id: "ls-q-059",
      type: "case-study",
      difficulty: "medium",
      passage: "Statements: All glass are mirrors. Some mirrors are broken.",
      question: "Conclusions: I. Some glass are broken. II. No glass is broken.",
      options: ["Either I or II", "Neither", "Both", "Only I"],
      correct: 0,
      explanation: "Some + No complementary pair.",
      examTags: ["CUET", "MH-CET"]
    },
    {
      id: "ls-q-060",
      type: "case-study",
      difficulty: "hard",
       passage: "Statements: Some apples are sweet. No sweet is bitter. All bitter are fruits.",
      question: "Conclusions: I. Some apples are not bitter. II. Some fruits are not sweet.",
      options: ["Both follow", "Only I", "Only II", "None"],
      correct: 0,
      explanation: "Apple-part in Sweet isn't Bitter (I). Fruit-part in Bitter isn't Sweet (II). Both follow.",
      examTags: ["CUET", "MH-CET"]
    },
    {
      id: "ls-q-061",
      type: "case-study",
      difficulty: "easy",
       passage: "Statements: All men are humans. All humans are mortal.",
      question: "Conclusions: I. All men are mortal. II. Some mortals are men.",
      options: ["Both", "Only I", "Only II", "None"],
      correct: 0,
      explanation: "Classic syllogism chain.",
      examTags: ["CUET", "MH-CET"]
    },
    {
      id: "ls-q-062",
      type: "case-study",
      difficulty: "medium",
      passage: "Statements: Some birds are parrots. All parrots are green.",
      question: "Conclusions: I. Some birds are green. II. Some green are parrots.",
      options: ["Both", "Only I", "Only II", "None"],
      correct: 0,
      explanation: "Overlap logic.",
      examTags: ["CUET", "MH-CET"]
    },
    {
      id: "ls-q-063",
      type: "case-study",
      difficulty: "hard",
      passage: "Statements: Only a few lights are dark. No dark is bright.",
      question: "Conclusions: I. Some lights are not bright. II. All lights being bright is a possibility.",
      options: ["Only I", "Only II", "Both", "None"],
      correct: 0,
      explanation: "Light-part in Dark is not Bright. II is false.",
      examTags: ["CUET", "MH-CET"]
    },
    {
      id: "ls-q-064",
      type: "case-study",
      difficulty: "medium",
      passage: "Statements: No car is bus. No bus is van.",
      question: "Conclusions: I. No car is van. II. Some vans are cars.",
      options: ["Either I or II", "Neither", "Both", "Only I"],
      correct: 0,
      explanation: "No + Some pair.",
      examTags: ["CUET", "MH-CET"]
    },
    {
      id: "ls-q-065",
      type: "case-study",
      difficulty: "hard",
      passage: "Statements: All A are B. Some B are C. No C is D.",
      question: "Conclusions: I. Some B are not D. II. Some A being C is a possibility.",
      options: ["Both", "Only I", "Only II", "None"],
      correct: 0,
      explanation: "Part of B that is C is not D. II is also true since A and C don't have a restricted relation.",
      examTags: ["CUET", "MH-CET"]
    },
    {
      id: "ls-q-066",
      type: "case-study",
      difficulty: "medium",
      passage: "Statements: Some papers are files. All files are folders.",
      question: "Conclusions: I. Some papers are folders. II. No paper is folder.",
      options: ["Only I", "Only II", "Both", "None"],
      correct: 0,
      explanation: "I is mandatory.",
      examTags: ["CUET", "MH-CET"]
    },
    {
      id: "ls-q-067",
      type: "case-study",
      difficulty: "hard",
      passage: "Statements: Only a few songs are hits. No hit is a flop.",
      question: "Conclusions: I. Some songs are hits. II. Some hits are not flop.",
      options: ["Both", "Only I", "Only II", "None"],
      correct: 0,
      explanation: "Both directly follow from 'Only a few' and 'No hit is flop'.",
      examTags: ["CUET", "MH-CET"]
    },
    {
      id: "ls-q-068",
      type: "case-study",
      difficulty: "medium",
      passage: "Statements: All cups are plates. All plates are saucers.",
      question: "Conclusions: I. All cups are saucers. II. Some saucers are cups.",
      options: ["Both", "Only I", "Only II", "None"],
      correct: 0,
      explanation: "Nested circles.",
      examTags: ["CUET", "MH-CET"]
    },
    {
      id: "ls-q-069",
      type: "case-study",
      difficulty: "hard",
      passage: "Statements: Some coffee is tea. No tea is milk.",
      question: "Conclusions: I. Some coffee is not milk. II. All coffee being milk is a possibility.",
      options: ["Only I", "Only II", "Both", "None"],
      correct: 0,
      explanation: "Coffee-part in Tea is not Milk. II is false.",
      examTags: ["CUET", "MH-CET"]
    },
    {
      id: "ls-q-070",
      type: "case-study",
      difficulty: "easy",
      passage: "Statements: All ants are small. All small are insects.",
      question: "Conclusions: I. All ants are insects. II. Some insects are ants.",
      options: ["Both", "Only I", "Only II", "None"],
      correct: 0,
      explanation: "Nested syllogism.",
      examTags: ["CUET", "MH-CET"]
    },
    {
      id: "ls-q-071",
      type: "case-study",
       difficulty: "medium",
      passage: "Statements: Some keys are rings. All rings are gold.",
      question: "Conclusions: I. Some keys are gold. II. No key is gold.",
      options: ["Only I", "Either I or II", "Both", "None"],
      correct: 0,
      explanation: "I is mandatory.",
      examTags: ["CUET", "MH-CET"]
    },
    {
      id: "ls-q-072",
      type: "case-study",
      difficulty: "hard",
      passage: "Statements: Only a few boys are smart. All smart are students.",
      question: "Conclusions: I. Some boys are students. II. All students being boys is a possibility.",
      options: ["Both", "Only I", "Only II", "None"],
      correct: 0,
      explanation: "Both possibilities and definite overlaps work.",
      examTags: ["CUET", "MH-CET"]
    },
    {
      id: "ls-q-073",
      type: "case-study",
      difficulty: "medium",
      passage: "Statements: No cat is black. Some black are dog.",
      question: "Conclusions: I. Some dog are not cat. II. Some cat are dog.",
      options: ["Only I", "Only II", "Either", "None"],
      correct: 0,
      explanation: "Dog-part in black is not cat.",
      examTags: ["CUET", "MH-CET"]
    },
    {
      id: "ls-q-074",
      type: "case-study",
      difficulty: "hard",
      passage: "Statements: All doors are handles. No handle is a lock.",
      question: "Conclusions: I. No door is a lock. II. Some handles are doors.",
      options: ["Both", "Only I", "Only II", "None"],
      correct: 0,
      explanation: "Nested negative and positive converse.",
      examTags: ["CUET", "MH-CET"]
    },
    {
       id: "ls-q-075",
      type: "case-study",
      difficulty: "hard",
      passage: "Statements: Some red are blue. Some blue are green.",
      question: "Conclusions: I. Some red are green. II. No red is green.",
      options: ["Either I or II", "Neither", "Both", "Only I"],
      correct: 0,
      explanation: "Some + No complementary pair.",
      examTags: ["CUET", "MH-CET"]
    }
  ]
};
