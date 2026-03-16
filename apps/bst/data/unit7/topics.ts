import { TheoryTopic } from '../../types';

export const topics: TheoryTopic[] = [
  {
    id: "directing-concept",
    title: "Directing Concept",
    description: "Directing is the process of instructing, guiding, counselling, motivating and leading people in the organisation to achieve its objectives.",
    content: [
      "**Meaning**",
      "Directing has been described as the life-spark of an enterprise. It is the process of instructing, guiding, counselling, motivating and leading people in the organisation to achieve its objectives.",
      "",
      "**Characteristics**",
      "1. **Initiates Action**: Directing is a key managerial function that initiates action while other functions prepare a setting for action.",
      "2. **Pervasive Function**: Directing takes place at every level of management wherever superior-subordinate relations exist.",
      "3. **Continuous Process**: It is a continuous process that takes place throughout the life of the organisation irrespective of people occupying managerial positions.",
      "4. **Flows from Top to Bottom**: Directing flows from top level to the bottom through the organisational hierarchy.",
      "",
      "**Importance**",
      "1. **Initiates Action**: Helps to initiate action by people in the organisation towards attainment of desired objectives.",
      "2. **Integrates Efforts**: Directing integrates employees' efforts ensuring that every individual effort contributes to organizational performance.",
      "3. **Motivates Employees**: Guides employees to fully realise their potential and capabilities through effective leadership and motivation.",
      "4. **Facilitates Change**: Helps to reduce resistance to change and develop required cooperation in introducing changes in the organization.",
      "5. **Stability and Balance**: Helps to bring stability and balance in the organisation by fostering cooperation and commitment among people.",
      "",
      "**Principles of Directing**",
      "1. **Maximum Individual Contribution**: Techniques must help every individual to contribute to his maximum potential.",
      "2. **Harmony of Objectives**: Good directing should provide harmony by convincing that employee rewards and work efficiency are complementary.",
      "3. **Unity of Command**: A person should receive instructions from one superior only to avoid confusion and conflicts.",
      "4. **Appropriateness of Direction Technique**: Motivational and leadership techniques should be appropriate to subordinate needs and capabilities.",
      "5. **Managerial Communication**: Effective communication across all levels makes direction effective by ensuring common understanding.",
      "6. **Use of Informal Organisation**: Managers should spot and make use of informal groups for effective directing and information flow.",
      "7. **Leadership**: Managers should exercise good leadership to influence subordinates positively without using force.",
      "8. **Follow Through**: Managers should follow up by reviewing continuously whether orders are being implemented correctly.",
      "",
      "**Elements of Directing**",
      "1. **Supervision**: Overseeing the work of subordinates.",
      "2. **Motivation**: Stimulating people to action to give their best performance.",
      "3. **Leadership**: Influencing the behaviour of people towards goal achievement.",
      "4. **Communication**: Exchange of ideas, views, facts, and feelings between people."
    ],
    visualizations: []
  },
  {
    id: "supervision",
    title: "Supervision",
    description: "Supervision means overseeing what is being done by subordinates and giving instructions to ensure optimum utilisation of resources.",
    content: [
      "**Meaning**",
      "Supervision implies overseeing the work of subordinates by their superiors. It is derived from 'Super' (above) and 'Vision' (sight), meaning overseeing from above.",
      "",
      "**Importance of Supervision**",
      "1. **Liaison/Link**: Supervisor acts as a link between workers and management. He conveys management policies to workers and workers' grievances to management.",
      "2. **Friend, Guide and Philosopher**: Maintains day-to-day contact and friendly relations with workers, guiding them in their work.",
      "3. **Group Unity**: Plays a key role in maintaining group unity among workers by sorting out internal differences.",
      "4. **Ensures Performance**: Ensures that performance is according to the targets set and takes responsibility for task completion.",
      "5. **On-the-Job Training**: Provides practical training to the workers in handling machines and tools.",
      "6. **Builds Morale**: Through good leadership, he builds high morale among the workforce.",
      "7. **Feedback**: Analyses the work and gives constructive feedback to workers to improve efficiency and reduce wastage."
    ],
    visualizations: []
  },
  {
    id: "motivation",
    title: "Motivation",
    description: "Motivation is the process of stimulating people to action to accomplish desired goals.",
    content: [
      "**Meaning**",
      "Motivation is the process of stimulating people to action to accomplish desired goals. It is a psychological term signifying that people's needs are satisfied for their performance.",
      "",
      "**Key Terms**",
      "- **Motive**: An inner state that energises, activates or moves and directs behaviour towards goals. (e.g., Hunger is a motive for eating).",
      "- **Motivation**: The process of stimulating people to action through motivators.",
      "- **Motivator**: The technique or tool used to motivate people (e.g., pay, bonus, praise, recognition).",
      "",
      "**Features of Motivation**",
      "1. **Internal Feeling**: Desire to perform comes from within an individual. (e.g., urge for status).",
      "2. **Goal Directed Behaviour**: Motivation produces behavior directed towards the accomplishment of goals.",
      "3. **Positive or Negative**: Positive motivation (rewards) and Negative motivation (fear of punishment, warnings).",
      "4. **Complex Process**: Since different people have different needs and reactions, it is difficult to motivate everyone the same way.",
      "",
      "**Maslow's Need Hierarchy Theory**",
      "Based on the assumption that human behavior depends on satisfied/unsatisfied needs:",
      "1. **Basic Physiological Needs**: Fundamental for survival (e.g., hunger, thirst). Organizational context: Basic Salary.",
      "2. **Safety/Security Needs**: Protection from physical and emotional harm. Organizational context: Job security, stability of income, pension plans.",
      "3. **Affiliation/Social Needs**: Needs for affection, belongingness, acceptance, and friendship.",
      "4. **Esteem Needs**: Needs for self-respect, status, recognition, and attention.",
      "5. **Self-Actualisation Needs**: Needs for growth, self-fulfillment, and realizing one's potential.",
      "",
      "**Financial Incentives** (Monetary)",
      "- **Pay and Allowances**: Basic salary, dearness allowance, etc.",
      "- **Productivity linked wage incentives**: Aimed at increasing efficiency.",
      "- **Bonus**: One-time payment offered over and above wages.",
      "- **Profit Sharing**: Giving a share in the profits of the organization to employees.",
      "- **Co-partnership/Stock option (ESOP)**: Offering company shares at a lower price than market value.",
      "- **Retirement Benefits**: Pension, gratuity, and provident fund.",
      "- **Perquisites (Perks)**: Car allowance, housing, medical aid, etc.",
      "",
      "**Non-Financial Incentives** (Psychological/Social)",
      "- **Status**: Ranking of positions in the organization. Provides ego satisfaction.",
      "- **Organisational Climate**: Autonomy, reward orientation, and consideration towards employees.",
      "- **Career Advancement Opportunity**: Promotion and training policies to develop skills.",
      "- **Job Enrichment**: Designing jobs that include a greater variety of work content and responsibility.",
      "- **Employee Recognition**: Appreciation for good performance (e.g., 'Employee of the Month').",
      "- **Job Security**: Stability of job and future income.",
      "- **Employee Participation**: Involvement in decision-making processes.",
      "- **Employee Empowerment**: Giving more autonomy and powers to subordinates."
    ],
    visualizations: [
      {
        id: 'maslow-pyramid',
        title: "Maslow's Hierarchy of Needs",
        type: 'flow',
        caption: 'From Bottom (Basic) to Top (Growth)',
        data: {
          nodes: [
            { id: '1', label: '1. Physiological (Basic)' },
            { id: '2', label: '2. Safety/Security' },
            { id: '3', label: '3. Belongingness (Social)' },
            { id: '4', label: '4. Esteem (Status)' },
            { id: '5', label: '5. Self-Actualisation' }
          ],
          edges: [
            { from: '1', to: '2', label: 'Satisfied -> Next' },
            { from: '2', to: '3' },
            { from: '3', to: '4' },
            { from: '4', to: '5' }
          ]
        }
      }
    ]
  },
  {
    id: "leadership",
    title: "Leadership",
    description: "Leadership is the process of influencing the behaviour of people by making them strive voluntarily towards achievement of organisational goals.",
    content: [
      "**Meaning**",
      "Leadership is the process of influencing the behaviour of people by making them strive voluntarily towards achievement of organisational goals. It is a key factor in making an organization successful.",
      "",
      "**Features of Leadership**",
      "1. **Influence**: It indicates the ability of an individual to influence others.",
      "2. **Behaviour Change**: Leadership tries to bring change in the behaviour of others.",
      "3. **Interpersonal Relations**: It indicates interpersonal relations between leaders and followers.",
      "4. **Common Goals**: It is exercised to achieve common goals of the organisation.",
      "5. **Continuous Process**: Leadership is an ongoing process of influencing.",
      "",
      "**Importance of Leadership**",
      "1. **Influences Behaviour**: A leader helps people to positively contribute their energy for the benefit of the organisation.",
      "2. **Personal Relations**: Leader maintains personal relations and helps followers in fulfilling their needs.",
      "3. **Introduces Changes**: Persuades, clarifies, and inspires people to accept changes whole-heartedly, reducing resistance.",
      "4. **Handles Conflicts**: A good leader handles conflicts effectively and doesn't allow adverse effects on the organisation.",
      "5. **Training**: Leader provides training to subordinates and builds up successors for smooth transition.",
      "",
      "**Leadership Styles**",
      "1. **Autocratic (Authoritarian)**: Leader gives orders and expects subordinates to obey. Communication is one-way. Suitable when quick decision-making is needed in a crisis. **Pros**: Fast decisions. **Cons**: Employee frustration, lack of initiative.",
      "2. **Democratic (Participative)**: Leader makes decisions in consultation with subordinates. Encourages participation and mutual trust. Suitable when complex tasks require shared knowledge. **Pros**: High morale, better quality decisions. **Cons**: Time-consuming.",
      "3. **Laissez-faire (Free-rein)**: Leader gives high independence to followers to set their own goals and solve problems. Suitable when subordinates are highly skilled and motivated professionals. **Pros**: High self-actualisation. **Cons**: Lack of clear direction."
    ],
    visualizations: [
      {
        id: 'leadership-styles-flow',
        title: 'Leadership Styles Flow',
        type: 'flow',
        data: {
          nodes: [
            { id: 'L', label: 'Leader' },
            { id: 'S1', label: 'Subordinate A' },
            { id: 'S2', label: 'Subordinate B' },
            { id: 'Auto', label: 'Autocratic (One-way)' },
            { id: 'Demo', label: 'Democratic (Two-way)' },
            { id: 'Free', label: 'Laissez-faire (Free)' }
          ],
          edges: [
            { from: 'L', to: 'Auto' }, { from: 'Auto', to: 'S1', label: 'Order' },
            { from: 'L', to: 'Demo' }, { from: 'Demo', to: 'S1', label: 'Consult' }, { from: 'S1', to: 'Demo', label: 'Feedback' },
            { from: 'L', to: 'Free' }, { from: 'Free', to: 'S1', label: 'Delegate' }, { from: 'S1', to: 'S2', label: 'Collaborate' }
          ]
        }
      }
    ]
  },
  {
    id: "communication",
    title: "Communication",
    description: "Communication is the process of exchange of ideas, views, facts, feelings, etc., between or among people to create common understanding.",
    content: [
      "**Meaning**",
      "Communication is the process of exchange of ideas, views, facts, feelings, etc., between two or more people to create common understanding.",
      "",
      "**Elements of Communication Process**",
      "1. **Sender**: The person who conveys thoughts or ideas (Source).",
      "2. **Message**: The content or information intended to be communicated.",
      "3. **Encoding**: Converting the message into communication symbols (words, pictures, gestures).",
      "4. **Media**: The path or channel through which the message is transmitted.",
      "5. **Decoding**: Converting the encoded symbols into a language understood by the receiver.",
      "6. **Receiver**: The person who receives the communication.",
      "7. **Feedback**: The response indicating that the message was received and understood.",
      "8. **Noise**: Hindrance or obstruction to communication (e.g., poor signal, background noise).",
      "",
      "**Importance of Communication**",
      "1. **Basis of Coordination**: Helps in coordinating departments and group activities.",
      "2. **Smooth Working**: Makes the organization run smoothly without interruptions.",
      "3. **Basis of Decision Making**: Provide managers with information to make decisions.",
      "4. **Managerial Efficiency**: Every function depends on effective communication.",
      "5. **Industrial Peace**: Promotes cooperation and reduces misunderstandings.",
      "6. **Effective Leadership**: Influencing subordinates requires constant communication.",
      "7. **Boosts Morale**: Keeps employees informed and motivated.",
      "",
      "**Formal Communication**",
      "- **Vertical**: Flows Upward (reports, suggestions) or Downward (orders, policies).",
      "- **Horizontal**: Flows between departments at the same level (e.g., Production to Sales).",
      "- **Networks**:",
      "  - **Single chain**: Flows from superior to subordinate in a straight line.",
      "  - **Wheel**: Central leader communicates with all subordinates.",
      "  - **Circular**: Each person communicates with his/her immediate two neighbors.",
      "  - **Free flow**: Everyone communicates with everyone else without restriction.",
      "  - **Inverted V**: A subordinate communicates with his superior's superior."
    ],
    visualizations: [
      {
        id: 'formal-communication-networks',
        title: 'Formal Communication Networks',
        type: 'flow',
        data: {
          nodes: [
            { id: 'chain', label: 'Single Chain (Scalar)' },
            { id: 'wheel', label: 'Wheel (Central Leader)' },
            { id: 'circ', label: 'Circular (Adjacents)' },
            { id: 'free', label: 'Free Flow (All-to-All)' },
            { id: 'inv', label: 'Inverted V (Two levels)' }
          ],
          edges: [
            { from: 'chain', to: 'wheel', label: 'Types' }
          ]
        }
      }
    ]
  },
  {
    id: "informal-communication",
    title: "Informal Communication (Grapevine)",
    description: "Informal communication networks within an organisation.",
    content: [
      "**Informal Communication (Grapevine)**",
      "Communication that takes place without following formal lines of authority (e.g., social talks, rumors).",
      "- **Features**: Arises out of social needs, fast-moving, lacks authentication.",
      "",
      "**Informal Networks**",
      "- **Single strand**: Each person communicates with the next in sequence.",
      "- **Gossip**: One person communicates with all others non-selectively.",
      "- **Probability**: One person communicates with others randomly.",
      "- **Cluster**: Information is shared with trusted individuals who then share with their own clusters."
    ],
    visualizations: [
      {
        id: 'informal-communication-networks',
        title: 'Informal Communication Networks',
        type: 'flow',
        data: {
          nodes: [
            { id: 'str', label: 'Single Strand' },
            { id: 'gos', label: 'Gossip' },
            { id: 'pro', label: 'Probability' },
            { id: 'clu', label: 'Cluster' }
          ],
          edges: []
        }
      }
    ]
  },
  {
    id: "communication-barriers",
    title: "Barriers to Communication",
    description: "Factors that obstruct effective communication and ways to improve it.",
    content: [
      "**Barriers to Communication**",
      "1. **Semantic Barriers** (Language problems):",
      "   - Badly expressed message (vague words).",
      "   - Symbols with different meanings (words like 'value' or 'right').",
      "   - Faulty translations or Technical jargon.",
      "   - Body language and gesture decoding.",
      "2. **Psychological Barriers** (State of mind):",
      "   - Premature evaluation (forming judgment before complete message).",
      "   - Lack of attention (preoccupied mind).",
      "   - Loss by transmission and poor retention.",
      "   - Distrust between sender and receiver.",
      "3. **Organisational Barriers** (Organizational factors):",
      "   - Organisational policy (if it doesn't support free flow).",
      "   - Rules and Regulations (rigid channels).",
      "   - Status (superior-subordinate distance).",
      "   - Complexity in structure (too many levels).",
      "4. **Personal Barriers** (Traits of individuals):",
      "   - Fear of challenge to authority.",
      "   - Lack of confidence in subordinates.",
      "   - Unwillingness to communicate (hiding info).",
      "   - Lack of proper incentives (no reward for suggestions).",
      "",
      "**Improving Communication Effectiveness**",
      "1. **Clarify ideas**: Think clearly before communicating.",
      "2. **Needs of receiver**: Tailor the message to the level of the receiver.",
      "3. **Consult others**: Involve others in planning the communication.",
      "4. **Be aware of tone**: Watch your language, tone, and body language.",
      "5. **Convey help and value**: Message should be useful to the listener.",
      "6. **Ensure feedback**: Ask the receiver to repeat or explain.",
      "7. **Communicate for future**: Consistency with long-term goals.",
      "8. **Follow up**: Check if the message led to the desired action.",
      "9. **Be a good listener**: Pay attention to what others are saying."
    ],
    visualizations: [
      {
        id: 'communication-process-network',
        title: 'Communication Process',
        type: 'flow',
        data: {
          nodes: [
            { id: 'Send', label: 'Sender' },
            { id: 'Msg', label: 'Message' },
            { id: 'Enc', label: 'Encoding' },
            { id: 'Media', label: 'Media' },
            { id: 'Dec', label: 'Decoding' },
            { id: 'Rec', label: 'Receiver' },
            { id: 'Feed', label: 'Feedback' },
            { id: 'Noise', label: 'NOISE (Barrier)' }
          ],
          edges: [
            { from: 'Send', to: 'Msg' }, { from: 'Msg', to: 'Enc' },
            { from: 'Enc', to: 'Media' }, { from: 'Media', to: 'Dec' },
            { from: 'Dec', to: 'Rec' }, { from: 'Rec', to: 'Feed' },
            { from: 'Feed', to: 'Send' }, { from: 'Noise', to: 'Media', label: 'Disturbs' }
          ]
        }
      }
    ]
  }
];
