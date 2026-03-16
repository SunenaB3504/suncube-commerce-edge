import { TheoryTopic } from '../../types';

export const topics: TheoryTopic[] = [
  {
    id: "consumer-protection-importance",
    title: "Importance of Consumer Protection",
    description: "Why consumer protection is significant for both consumers and businesses.",
    content: [
      "**From Consumers' Point of View**",
      "1. **Consumer Ignorance**: Most consumers are not aware of their rights and reliefs. They need to be educated to act as 'prudent' consumers.",
      "2. **Unorganised Consumers**: Consumers are often spread and unorganised. They need to form consumer organisations to collectively protect their interests.",
      "3. **Widespread Exploitation**: Protection is needed against exploitative practices like adulteration, defective goods, and misleading advertisements.",
      "",
      "**From Business's Point of View**",
      "1. **Long-term Interest of Business**: Satisfied customers lead to repeat sales and Positive Word of Mouth (WOM), which are essential for long-term growth.",
      "2. **Business uses Society's Resources**: Since business depends on society for resources, it has a corresponding responsibility to serve public interest.",
      "3. **Social Responsibility**: Every business has a duty towards its various stakeholders, including consumers, who are the 'King' of the market.",
      "4. **Moral Justification**: It is the ethical and moral duty of every business to avoid exploitative and unfair trade practices.",
      "5. **Government Intervention**: By practicing fair trade voluntarily, businesses can avoid the cost and complexity of strict government regulations."
    ],
    visualizations: []
  },
  {
    id: "consumer-protection-act-2019",
    title: "Consumer Protection Act, 2019",
    description: "Key provisions, definitions, and rights under the Act.",
    content: [
      "**Who is a Consumer?**",
      "Under CPA 2019, a consumer is anyone who:",
      "- Buys goods or avails services for a consideration (paid or promised).",
      "- Includes both offline and online transactions through electronic means.",
      "- **Excludes**: A person who obtains goods for resale or for any commercial purpose.",
      "",
      "**Consumer Rights**",
      "1. **Right to Safety**: Right to be protected against products and services that are hazardous to life and health (e.g., ISI mark on electrical goods).",
      "2. **Right to be Informed**: Right to have complete information about the product (ingredients, price, expiry, etc.) to make a healthy choice.",
      "3. **Right to Choose (Assured)**: Right to have access to a variety of products at competitive prices. In case of a monopoly, it means the right to be assured of satisfactory quality.",
      "4. **Right to be Heard**: Right to have their interest represented and to file a complaint in case of dissatisfaction.",
      "5. **Right to Seek Redressal**: Right to get relief against unfair trade practices and exploitation. It includes the right to compensation, replacement, or refund.",
      "6. **Right to Consumer Education**: Right to acquire knowledge and skills to be an informed consumer throughout life."
    ],
    visualizations: [
      {
        id: 'consumer-rights-list',
        title: 'Consumer Rights',
        type: 'list',
        data: [
          'Right to Safety',
          'Right to be Informed',
          'Right to Choose',
          'Right to be Heard',
          'Right to Seek Redressal',
          'Right to Consumer Education'
        ]
      }
    ]
  },
  {
    id: "consumer-responsibilities",
    title: "Consumer Responsibilities",
    description: "Duties of a consumer while purchasing and using goods/services.",
    content: [
      "1. **Be Aware of Available Goods/Services**: So that an intelligent and wise choice can be made.",
      "2. **Buy only Standardised Goods**: Look for quality certification marks such as **ISI** (electricals), **AGMARK** (food), **BIS Hallmark** (jewellery).",
      "3. **Learn about Risks**: Follow manufacturer's instructions and learn about risks associated with product usage.",
      "4. **Read Labels Carefully**: For information regarding price, net weight, manufacturing and expiry dates.",
      "5. **Assert Yourself**: To ensure that you get a fair deal and are not short-changed.",
      "6. **Be Honest in your Dealings**: Choose only from legal goods and services and discourage unscrupulous practices like black-marketing.",
      "7. **Ask for Cash Memo**: It is the only proof of purchase and is essential while filing a complaint.",
      "8. **File a Complaint**: In an appropriate consumer forum in case of a shortcoming in the quality of goods or services.",
      "9. **Form Consumer Societies**: Which would play an active part in educating consumers and safeguarding their interests.",
      "10. **Respect the Environment**: Avoid waste, littering and contributing to pollution."
    ],
    visualizations: [
      {
        id: 'quality-marks',
        title: 'Quality Marks for Products',
        type: 'grid',
        data: [
          { label: 'ISI Mark', desc: 'Durable/Electrical Goods' },
          { label: 'Agmark', desc: 'Agricultural Commodities' },
          { label: 'BIS Hallmark', desc: 'Gold Jewellery' },
          { label: 'Woolmark', desc: 'Woolen Products' },
          { label: 'Eco-mark', desc: 'Environment Friendly' }
        ]
      }
    ]
  },
  {
    id: "redressal-machinery",
    title: "Redressal Agencies",
    description: "Three-tier enforcement machinery under the Consumer Protection Act, 2019.",
    content: [
      "The Consumer Protection Act, 2019 provides for a three-tier enforcement machinery at the District, State, and National levels.",
      "",
      "**District Commission**",
      "- Has jurisdiction to entertain complaints where the value of goods or services paid as consideration does **not exceed ₹1 Crore**.",
      "- If dissatisfied, the consumer can appeal to the State Commission within **45 days**.",
      "",
      "**State Commission**",
      "- Has jurisdiction where the value of consideration **exceeds ₹1 Crore but does not exceed ₹10 Crores**.",
      "- An appeal against its order can be made to the National Commission within **30 days**.",
      "",
      "**National Commission**",
      "- Has jurisdiction for complaints where the value of consideration **exceeds ₹10 Crores**.",
      "- An appeal against its order can be made to the Supreme Court of India within **30 days**.",
      "",
      "**Mediation**",
      "- The Act introduces 'Mediation' as an alternate dispute resolution mechanism to allow for speedier disposal of cases."
    ],
    visualizations: [
      {
        id: 'redressal-machinery-flow',
        title: 'Redressal Machinery Hierarchy (CPA 2019)',
        type: 'flow',
        data: {
          nodes: [
            { id: 'SC', label: 'Supreme Court' },
            { id: 'Nat', label: 'National Commission (> ₹10 Cr)' },
            { id: 'State', label: 'State Commission (₹1 Cr - ₹10 Cr)' },
            { id: 'Dist', label: 'District Commission (< ₹1 Cr)' }
          ],
          edges: [
            { from: 'Dist', to: 'State', label: 'Appeal (45 days)' },
            { from: 'State', to: 'Nat', label: 'Appeal (30 days)' },
            { from: 'Nat', to: 'SC', label: 'Appeal (30 days)' }
          ]
        }
      }
    ]
  },
  {
    id: "relief-and-ngos",
    title: "Relief & Consumer Organisations",
    description: "Remedies available to consumers and the role of NGOs.",
    content: [
      "**Relief Available**",
      "- **Removal of Defect**: To remove the defect in goods or deficiency in services.",
      "- **Replacement**: To replace the defective product with a new one of similar description.",
      "- **Refund**: To refund the price paid by the consumer.",
      "- **Compensation**: To pay a reasonable amount of compensation for any loss or injury suffered.",
      "- **Punitive Damages**: In appropriate circumstances, to pay punitive damages.",
      "- **Discontinuance of Unfair Practices**: To discontinue and not repeat unfair or restrictive trade practices.",
      "- **Withdrawal of Hazardous Goods**: To withdraw hazardous goods from being offered for sale.",
      "",
      "**Role of Consumer Organisations & NGOs**",
      "- **Education**: Educating the general public about their rights through seminars and workshops.",
      "- **Publications**: Publishing periodicals and reports to impart knowledge.",
      "- **Product Testing**: Carrying out comparative testing of consumer products in labs.",
      "- **Legal Help**: Providing legal assistance to consumers by way of aid or advice.",
      "- **Filing Complaints**: Filing complaints in consumer courts on behalf of consumers.",
      "- **Public Interest Litigation (PIL)**: Taking an active part in filing cases in the interest of the general public."
    ],
    visualizations: []
  }
];
