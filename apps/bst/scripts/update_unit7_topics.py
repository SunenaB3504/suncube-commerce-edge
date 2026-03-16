import os

def create_unit7_topics():
    content = """import { TheoryTopic } from '../../types';

export const topics: TheoryTopic[] = [
  {
    id: "directing-concept",
    title: "Directing Concept",
    description: "Directing is the process of instructing, guiding, counselling, motivating and leading people in the organisation to achieve its objectives.",
    content: [
      "**Meaning**",
      "Directing refers to the process of instructing, guiding, counselling, motivating and leading people in the organisation to achieve its objectives. It constitutes the life-spark of the enterprise which sets it in motion.",
      "",
      "**Characteristics**",
      "1. **Initiates Action**: Directing is a key managerial function that initiates action while other functions prepare a setting for action.",
      "2. **Pervasive Function**: Takes place at every level of management wherever superior-subordinate relations exist.",
      "3. **Continuous Process**: It takes place throughout the life of the organisation irrespective of people occupying managerial positions.",
      "4. **Flows from Top to Bottom**: Directing flows from top level to the bottom through the organisational hierarchy.",
      "",
      "**Importance**",
      "1. **Initiates Action**: Helps to initiate action by people in the organisation towards attainment of desired objectives.",
      "2. **Integrates Efforts**: Integrates employees' efforts ensuring that every individual effort contributes to the organisational performance.",
      "3. **Motivates Employees**: Guides employees to fully realise their potential and capabilities through effective leadership.",
      "4. **Facilitates Change**: Helps to reduce resistance to change and develop required cooperation in introducing changes.",
      "5. **Stability and Balance**: Helps to bring stability and balance in the organisation by fostering cooperation and commitment.",
      "",
      "**Principles of Directing**",
      "1. **Maximum Individual Contribution**: Techniques must help every individual to contribute to his maximum potential.",
      "2. **Harmony of Objectives**: Good directing should provide harmony by convincing that employee rewards and work efficiency are complimentary.",
      "3. **Unity of Command**: A person should receive instructions from one superior only to avoid confusion.",
      "4. **Appropriateness of Direction Technique**: Motivational and leadership techniques should be appropriate to subordinate needs and capabilities.",
      "5. **Managerial Communication**: Effective communication across all levels makes direction effective.",
      "6. **Use of Informal Organisation**: Managers should spot and make use of informal groups for effective directing.",
      "7. **Leadership**: Managers should exercise good leadership to influence subordinates positively.",
      "8. **Follow Through**: Managers should follow up by reviewing continuously whether orders are being implemented."
    ],
    visualizations: []
  },
  {
    id: "supervision",
    title: "Supervision",
    description: "Supervision means overseeing what is being done by subordinates and giving instructions to ensure optimum utilisation of resources.",
    content: [
      "**Meaning**",
      "Supervision implies overseeing the work of subordinates by their superiors. It is the act of watching & directing work & workers.",
      "",
      "**Importance**",
      "1. **Link between Workers and Management**: Supervisor conveys management ideas to workers and workers' problems to management.",
      "2. **Direct Contact**: Maintains day-to-day contact and friendly relations with workers.",
      "3. **Group Unity**: Plays a key role in maintaining group unity among workers.",
      "4. **Ensures Performance**: Ensures performance of work according to the targets set.",
      "5. **Training**: Provides on-the-job training to the workers and employees.",
      "6. **Leadership**: specific leadership plays a key role in influencing the workers.",
      "7. **Feedback**: Analyses the work performed and gives feedback to the workers."
    ],
    visualizations: []
  },
  {
    id: "motivation",
    title: "Motivation",
    description: "Motivation is the process of stimulating people to action to accomplish desired goals.",
    content: [
      "**Meaning**",
      "Motivation is the process of stimulating people to action to accomplish desired goals. It depends upon satisfying needs of people.",
      "**Key Terms**: ",
      "- **Motive**: An inner state that energises, activates or moves and directs behaviour towards goals.",
      "- **Motivation**: The process of stimulating people to action.",
      "- **Motivator**: The technique used to motivate people (e.g., pay, bonus, praise).",
      "",
      "**Features**",
      "1. **Internal Feeling**: Urges, drives, desires, aspirations are internal to an individual.",
      "2. **Goal Directed Behaviour**: Motivation produces behaviour directed towards goals.",
      "3. **Positive or Negative**: Can be positive (rewards) or negative (punishment).",
      "4. **Complex Process**: Individuals are heterogeneous in their expectations and reactions.",
      "",
      "**Maslow's Need Hierarchy Theory**",
      "1. **Basic Physiological Needs**: Hunger, thirst, shelter, sleep (e.g., Basic Salary).",
      "2. **Safety/Security Needs**: Protection from physical and emotional harm (e.g., Pension, Job security).",
      "3. **Affiliation/Belonging Needs**: Affection, sense of belongingness, acceptance, friendship.",
      "4. **Esteem Needs**: Self-respect, autonomy, status, recognition.",
      "5. **Self Actualisation Needs**: Drive to become what one is capable of becoming; growth and self-fulfillment.",
      "",
      "**Incentives**",
      "**Financial Incentives**: Direct monetary form or measurable in monetary terms.",
      "- Pay and allowances",
      "- Productivity linked wage incentives",
      "- Bonus",
      "- Profit Sharing",
      "- Copartnership/Stock option (ESOP)",
      "- Retirement Benefits",
      "- Perquisites",
      "",
      "**Non-Financial Incentives**: Focus on psychological, social and emotional needs.",
      "- Status (ranking of positions)",
      "- Organisational Climate (characteristics of the organisation)",
      "- Career Advancement Opportunity (promotion, skill development)",
      "- Job Enrichment (designing jobs with variety and challenge)",
      "- Employee Recognition programmes (acknowledgment with appreciation)",
      "- Job security (stability of future income)",
      "- Employee participation (involvement in decision making)",
      "- Employee Empowerment (giving more autonomy and powers)"
    ],
    visualizations: []
  },
  {
    id: "leadership",
    title: "Leadership",
    description: "Leadership is the process of influencing the behaviour of people by making them strive voluntarily towards achievement of organisational goals.",
    content: [
      "**Meaning**",
      "Leadership is the process of influencing the behaviour of people by making them strive voluntarily towards achievement of organisational goals. It indicates the ability of an individual to maintain good interpersonal relations with followers.",
      "",
      "**Features**",
      "1. **Influence**: Indicates ability of an individual to influence others.",
      "2. **Behaviour Change**: Tries to bring change in the behaviour of others.",
      "3. **Interpersonal Relations**: Indicates interpersonal relations between leaders and followers.",
      "4. **Common Goals**: Exercised to achieve common goals of the organisation.",
      "5. **Continuous Process**: It is a continuous process.",
      "",
      "**Importance**",
      "1. **Influences Behaviour**: Makes people positively contribute their energies for the benefit of the organisation.",
      "2. **Personal Relations**: Maintains personal relations and helps followers in fulfilling their needs.",
      "3. **Introduces Changes**: Persuades, clarifies and inspires people to accept changes whole-heartedly.",
      "4. **Handles Conflicts**: Handles conflicts effectively and does not allow adverse effects.",
      "5. **Training**: Provides training to subordinates and builds up successors.",
      "",
      "**Leadership Styles**",
      "1. **Autocratic (Authoritarian)**: Leader gives orders and expects subordinates to obey. Communication is one-way. Effective for quick decision-making and productivity in certain situations.",
      "2. **Democratic (Participative)**: Leader develops action plans and makes decisions in consultation with subordinates. Encourages participation and respects others' opinions.",
      "3. **Laissez-faire (Free-rein)**: Leader does not believe in use of power unless essential. Followers are given high independence to formulate objectives and ways to achieve them."
    ],
    visualizations: []
  },
  {
    id: "communication",
    title: "Communication",
    description: "Communication is the process of exchange of ideas, views, facts, feelings, etc., between or among people to create common understanding.",
    content: [
      "**Meaning**",
      "Communication is the process of exchange of ideas, views, facts, feelings, etc., between or among people to create common understanding. Ideally, it involves a sender, a message, and a receiver.",
      "",
      "**Elements of Communication Process**",
      "1. **Sender**: Person who conveys thoughts or ideas.",
      "2. **Message**: Content of ideas, feelings, suggestions, order, etc.",
      "3. **Encoding**: Converting the message into communication symbols.",
      "4. **Media**: Path through which encoded message is transmitted.",
      "5. **Decoding**: Converting encoded symbols of the sender.",
      "6. **Receiver**: Person who receives communication.",
      "7. **Feedback**: Actions of receiver indicating understanding of message.",
      "8. **Noise**: Obstruction or hindrance to communication.",
      "",
      "**Importance**",
      "1. **Basis of Coordination**: Provides coordination among departments/activities.",
      "2. **Smooth Working**: Makes possible for smooth and unrestricted working of the enterprise.",
      "3. **Basis of Decision Making**: Provides needed information for decision making.",
      "4. **Managerial Efficiency**: Essential for quick and effective performance of managerial functions.",
      "5. **Cooperation and Peace**: Promotes cooperation and industrial peace.",
      "6. **Effective Leadership**: Basis of leadership; helps to influence subordinates.",
      "7. **Boosts Morale**: Enables management to motivate and satisfy subordinates.",
      "",
      "**Formal vs Informal Communication**",
      "**Formal Communication**: Flows through official channels.",
      "- **Vertical**: Upward (subordinate to superior) or Downward (superior to subordinate).",
      "- **Horizontal**: Between one division/department and another.",
      "- **Networks**: Single chain, Wheel, Circular, Free flow, Inverted V.",
      "",
      "**Informal Communication (Grapevine)**: Flows without following formal lines.",
      "- Arises out of social needs.",
      "- Spreads rapidly but sometimes gets distorted.",
      "- **Networks**: Single strand, Gossip, Probability, Cluster.",
      "",
      "**Barriers to Communication**",
      "1. **Semantic Barriers**: Badly expressed message, Symbols with different meanings, Faulty translations, Unclarified assumptions, Technical jargon, Body language.",
      "2. **Psychological Barriers**: Premature evaluation, Lack of attention, Loss by transmission/poor retention, Distrust.",
      "3. **Organisational Barriers**: Organisational policy, Rules and regulations, Status, Complexity in structure, Lack of facilities.",
      "4. **Personal Barriers**: Fear of challenge to authority, Lack of confidence in subordinates, Unwillingness to communicate, Lack of incentives.",
      "",
      "**Improving Communication Effectiveness**",
      "1. Clarify ideas before communication.",
      "2. Communicate according to the needs of receiver.",
      "3. Consult others before communicating.",
      "4. Be aware of languages, tone and content.",
      "5. Convey things of help and value to listeners.",
      "6. Ensure proper feedback.",
      "7. Communicate for present as well as future.",
      "8. Follow up communications.",
      "9. Be a good listener."
    ],
    visualizations: []
  }
];
"""
    
    target_dir = r"c:\Users\Admin\Neil\bstudies-cbse-class-XII\data\unit7"
    if not os.path.exists(target_dir):
        os.makedirs(target_dir)
        
    with open(os.path.join(target_dir, "topics.ts"), "w", encoding="utf-8") as f:
        f.write(content)
    
    print("Created unit 7 topics")

if __name__ == "__main__":
    create_unit7_topics()
