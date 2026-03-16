import { Flashcard } from '../../types';

export const flashcards: Flashcard[] = [
  // ═══════════════════════════════════════════════════════
  // 1. CONCEPT & IMPORTANCE (1-8)
  // ═══════════════════════════════════════════════════════
  { id: 'f12-1', category: 'Concept', question: 'What is Consumer Protection?', answer: 'Safeguarding the interests and rights of consumers against unfair trade practices, defective products, and deficient services.' },
  { id: 'f12-2', category: 'Concept', question: 'Who is a "Consumer" under CPA 2019?', answer: 'A person who buys goods or avails services for a CONSIDERATION, EXCLUDING those who buy for resale or commercial purposes.' },
  { id: 'f12-3', category: 'Importance', question: 'Why is Consumer Protection important from a "Business" point of view?', answer: 'Long-term interest of business, social responsibility, Government intervention avoidance, and ethical use of society\'s resources.' },
  { id: 'f12-4', category: 'Importance', question: 'Why is Consumer Protection important from a "Consumer" point of view?', answer: 'Consumer ignorance, unorganised consumers, widespread exploitation, and need for safety against defective products.' },
  { id: 'f12-5', category: 'Concept', question: 'What Act governs Consumer Protection in India?', answer: 'Consumer Protection Act, 2019 (replaced the 1986 Act).' },
  { id: 'f12-6', category: 'Concept', question: 'Name the ways of achieving Consumer Protection.', answer: 'Self-regulation by business, Business associations, Consumer awareness, Consumer organisations, and Government legislation.' },
  { id: 'f12-7', category: 'Concept', question: 'What is "Caveat Emptor"?', answer: '"Let the buyer beware" — the old principle where the buyer was responsible. Now replaced by consumer protection laws.' },
  { id: 'f12-8', category: 'Concept', question: 'Does CPA 2019 cover online/e-commerce transactions?', answer: 'YES. It covers both offline and online (e-commerce) transactions.' },

  // ═══════════════════════════════════════════════════════
  // 2. CONSUMER RIGHTS (9-18)
  // ═══════════════════════════════════════════════════════
  { id: 'f12-9', category: 'Right', question: 'Name all 6 Consumer Rights.', answer: 'Right to Safety, Right to be Informed, Right to Choose, Right to be Heard, Right to Seek Redressal, Right to Consumer Education.' },
  { id: 'f12-10', category: 'Right', question: 'Define "Right to Safety".', answer: 'Protection against products that are hazardous to life and property (e.g., electrical goods without ISI mark).' },
  { id: 'f12-11', category: 'Right', question: 'Define "Right to be Informed".', answer: 'Right to be informed about quality, quantity, potency, purity, price, and expiry of products.' },
  { id: 'f12-12', category: 'Right', question: 'Define "Right to Choose".', answer: 'Right to have access to a variety of products at competitive prices — freedom to select.' },
  { id: 'f12-13', category: 'Right', question: 'Define "Right to be Heard".', answer: 'Right to file a complaint and be heard in the appropriate consumer forum.' },
  { id: 'f12-14', category: 'Right', question: 'Define "Right to Seek Redressal".', answer: 'Right to get compensation/remedy for unfair trade practices or defective products.' },
  { id: 'f12-15', category: 'Right', question: 'Define "Right to Consumer Education".', answer: 'Right to acquire knowledge and skills to be a well-informed consumer.' },
  { id: 'f12-16', category: 'Right', question: 'A product sold without MRP printed is a violation of which right?', answer: 'Right to be Informed.' },
  { id: 'f12-17', category: 'Right', question: 'A shopkeeper forcing you to buy a specific brand is a violation of which right?', answer: 'Right to Choose.' },
  { id: 'f12-18', category: 'Right', question: 'An electrical heater exploding and causing injury relates to which right?', answer: 'Right to Safety.' },

  // ═══════════════════════════════════════════════════════
  // 3. CONSUMER RESPONSIBILITIES (19-24)
  // ═══════════════════════════════════════════════════════
  { id: 'f12-19', category: 'Responsibility', question: 'Name 3 Consumer Responsibilities.', answer: 'Be aware of rights, Buy standardised goods (ISI/Agmark), Read labels, Keep proof of purchase, File complaints.' },
  { id: 'f12-20', category: 'Responsibility', question: 'Why should consumers buy "Standardised Goods"?', answer: 'To ensure quality assurance and safety (e.g., ISI, Agmark, BIS Hallmark labels).' },
  { id: 'f12-21', category: 'Responsibility', question: 'Which document is "Proof of Purchase" needed to file complaints?', answer: 'Cash Memo / Bill / Invoice.' },
  { id: 'f12-22', category: 'Mark', question: 'Match: ISI Mark, Agmark, BIS Hallmark.', answer: 'ISI = Electrical/Industrial goods. Agmark = Agricultural products. BIS Hallmark = Gold/Silver Jewellery.' },
  { id: 'f12-23', category: 'Responsibility', question: 'Should consumers be honest in their dealings?', answer: 'Yes. Consumers should not make false complaints or misuse consumer protection provisions.' },
  { id: 'f12-24', category: 'Responsibility', question: 'Why is it important to read labels before buying?', answer: 'To know ingredients, manufacturing/expiry dates, MRP, and safety warnings — exercising the Right to be Informed.' },

  // ═══════════════════════════════════════════════════════
  // 4. REDRESSAL MACHINERY (25-36)
  // ═══════════════════════════════════════════════════════
  { id: 'f12-25', category: 'Machinery', question: 'Name the 3-tier Consumer Redressal Machinery.', answer: 'District Commission, State Commission, and National Commission.' },
  { id: 'f12-26', category: 'Jurisdiction', question: 'What is the pecuniary jurisdiction of District Commission?', answer: 'Up to ₹1 Crore.' },
  { id: 'f12-27', category: 'Jurisdiction', question: 'What is the pecuniary jurisdiction of State Commission?', answer: 'Exceeds ₹1 Crore but does not exceed ₹10 Crores.' },
  { id: 'f12-28', category: 'Jurisdiction', question: 'What is the pecuniary jurisdiction of National Commission?', answer: 'Exceeds ₹10 Crores.' },
  { id: 'f12-29', category: 'Appellate', question: 'Where is an appeal filed against District Commission order?', answer: 'State Commission (within 45 days).' },
  { id: 'f12-30', category: 'Appellate', question: 'Where is an appeal filed against State Commission order?', answer: 'National Commission (within 30 days).' },
  { id: 'f12-31', category: 'Appellate', question: 'Where is an appeal filed against National Commission order?', answer: 'Supreme Court (within 30 days).' },
  { id: 'f12-32', category: 'Filing', question: 'Who can file a complaint?', answer: 'Any consumer, registered consumer association, Central/State Government, or legal heir of a deceased consumer.' },
  { id: 'f12-33', category: 'Filing', question: 'Is there any fee to file a consumer complaint?', answer: 'Nominal fee depending on the value of goods/services. The process is simple and inexpensive.' },
  { id: 'f12-34', category: 'Filing', question: 'What information must a complaint contain?', answer: 'Name and address, facts of the case, description of defect/deficiency, relief sought, and supporting documents.' },
  { id: 'f12-35', category: 'Machinery', question: 'What is the composition of a District Commission?', answer: 'A President (District Judge level) and at least 2 members.' },
  { id: 'f12-36', category: 'Machinery', question: 'How is a complaint disposed of?', answer: 'Commission examines the complaint, hears both parties, and passes an order within the stipulated time.' },

  // ═══════════════════════════════════════════════════════
  // 5. RELIEFS & NGOs (37-42)
  // ═══════════════════════════════════════════════════════
  { id: 'f12-37', category: 'Relief', question: 'Name the reliefs available to a consumer.', answer: 'Removal of defects, Replacement, Refund of price, Compensation for loss, Discontinue unfair practice, Punitive damages.' },
  { id: 'f12-38', category: 'Relief', question: 'Can a consumer get "Compensation for Loss or Injury"?', answer: 'Yes. The Commission can award compensation for loss or injury suffered due to negligence of the opposite party.' },
  { id: 'f12-39', category: 'Relief', question: 'Can the Commission order to "Stop the Unfair Trade Practice"?', answer: 'Yes. It can order the opposite party to discontinue the unfair trade practice and not repeat it.' },
  { id: 'f12-40', category: 'NGO', question: 'What is the role of Consumer Organisations (NGOs)?', answer: 'Educating consumers, filing complaints on their behalf, providing legal assistance, and conducting tests on products.' },
  { id: 'f12-41', category: 'NGO', question: 'Name two well-known consumer organisations in India.', answer: 'VOICE (Voluntary Organisation in Interest of Consumer Education) and Consumer Guidance Society.' },
  { id: 'f12-42', category: 'NGO', question: 'How do NGOs create consumer awareness?', answer: 'Through publications, workshops, seminars, TV programmes, and social media campaigns.' },

  // ═══════════════════════════════════════════════════════
  // 6. SQP TRIGGERS & TRAPS (43-55)
  // ═══════════════════════════════════════════════════════
  { id: 'f12-43', category: 'SQP Trigger', question: 'If a case says "product purchased for ₹50,000 was defective", where to file?', answer: 'District Commission (value up to ₹1 Crore).' },
  { id: 'f12-44', category: 'SQP Trigger', question: 'If a case involves goods worth ₹5 Crores, where to file?', answer: 'State Commission (₹1 Crore to ₹10 Crores).' },
  { id: 'f12-45', category: 'SQP Trigger', question: 'If a case says "consumer was not told about side effects of a medicine", which right violated?', answer: 'Right to be Informed.' },
  { id: 'f12-46', category: 'SQP Trigger', question: 'If a case says "consumer given only one brand with no alternatives", which right violated?', answer: 'Right to Choose.' },
  { id: 'f12-47', category: 'SQP Trigger', question: 'If a case says "appeal filed within 45 days against District Commission", where?', answer: 'To the State Commission.' },
  { id: 'f12-48', category: 'Trap', question: 'Is a person who buys goods for RESALE considered a consumer?', answer: 'NO. Buying for resale or commercial purposes is excluded under CPA 2019.' },
  { id: 'f12-49', category: 'Trap', question: 'Is a person who buys goods for SELF-EMPLOYMENT considered a consumer?', answer: 'YES. Self-employment is excluded from the "commercial purpose" exception.' },
  { id: 'f12-50', category: 'Trap', question: 'Within how many days can appeal be filed against State Commission?', answer: '30 days (to the National Commission).' },
  { id: 'f12-51', category: 'Trap', question: 'ISI Mark is for which type of goods?', answer: 'ELECTRICAL and INDUSTRIAL goods (not agricultural — that is Agmark).' },
  { id: 'f12-52', category: 'Trap', question: 'BIS Hallmark certifies which products?', answer: 'GOLD and SILVER Jewellery (purity certification).' },
  { id: 'f12-53', category: 'Trap', question: 'When was World Consumer Rights Day?', answer: 'March 15 (observed annually).' },
  { id: 'f12-54', category: 'Trap', question: 'When is National Consumer Day in India?', answer: 'December 24 (date when CPA 1986 received Presidential assent).' },
  { id: 'f12-55', category: 'Trap', question: 'Does CPA 2019 establish a Central Consumer Protection Authority (CCPA)?', answer: 'Yes. CCPA was introduced as a new feature in CPA 2019 to regulate unfair trade practices and misleading ads.' }
];
