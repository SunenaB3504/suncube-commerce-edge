import { TheoryTopic } from '../../types';

export const topics: TheoryTopic[] = [
  {
    id: "marketing-concept",
    title: "Marketing & Philosophies",
    description: "Understanding marketing as a social process and the evolution of marketing management philosophies.",
    content: [
      "**Meaning of Marketing**",
      "Marketing is a social process by which individuals and groups obtain what they need and want through creating, offering, and freely exchanging products and services of value with others. It involves understanding customer needs and delivering value to them profitable.",
      "",
      "**Marketing Management Philosophies**",
      "1. **Production Concept**: Assumes that consumers will favour products that are widely available and affordable. Focus is on high production efficiency and wide distribution.",
      "2. **Product Concept**: Assumes that consumers will favour products that offer the most quality, performance, and features. Focus is on continuous product improvement.",
      "3. **Selling Concept**: Assumes that consumers will not buy enough of the firm's products unless it undertakes a large-scale selling and promotion effort. Focus is on aggressive selling and 'pushing' products.",
      "4. **Marketing Concept**: Assumes that the key to achieving organizational goals consists of determining the needs and wants of target markets and delivering the desired satisfaction more effectively than competitors.",
      "5. **Societal Marketing Concept**: Extends the marketing concept by stating that the organization's task is to determine needs and deliver satisfaction in a way that preserves or enhances the customer's and the society's well-being (e.g., environmental protection)."
    ],
    visualizations: [
      {
        id: 'marketing-concepts-table',
        title: 'Marketing Philosophies Comparison',
        type: 'table',
        data: {
          headers: ['Concept', 'Focus', 'Means', 'Ends (Profit)'],
          rows: [
            ['Production', 'Availability', 'Mass Production', 'Volume'],
            ['Product', 'Quality/Features', 'Product Improv.', 'Quality'],
            ['Selling', 'Existing Product', 'Selling/Prom.', 'Sales Volume'],
            ['Marketing', 'Customer Needs', 'Integrated Mkting', 'Satisfaction'],
            ['Societal', 'Welfare + Needs', 'Social Mkting', 'Sat + Welfare']
          ]
        }
      },
      {
        id: 'marketing-mix',
        title: 'The 4 Ps of Marketing Mix',
        type: 'grid',
        data: [
          { label: 'Product', desc: 'Design, Quality, Features, Brand, Packaging' },
          { label: 'Price', desc: 'List Price, Discounts, Credit Terms, Payment Period' },
          { label: 'Place', desc: 'Channels, Coverage, Locations, Inventory, Transport' },
          { label: 'Promotion', desc: 'Advertising, Personal Selling, Sales Promotion, PR' }
        ]
      }
    ]
  },
  {
    id: "marketing-functions",
    title: "Functions of Marketing",
    description: "Key activities involved in the marketing process.",
    content: [
      "1. **Gathering and Analysing Market Information**: Understanding customer needs and conducting SWOT analysis (Strengths, Weaknesses, Opportunities, Threats).",
      "2. **Marketing Planning**: Developing a strategic plan to achieve objectives like increasing market share or sales volume.",
      "3. **Product Designing and Development**: Creating a product that meets customer expectations in terms of features, quality, and design.",
      "4. **Standardisation and Grading**: Standardisation ensures uniformity in quality; Grading involves classifying products into different groups based on quality/size.",
      "5. **Packaging and Labelling**: Packaging refers to designing and producing the container for a product; Labelling involves putting information on the package.",
      "6. **Branding**: Creating a distinct identity for a product through a name, symbol, or design.",
      "7. **Customer Support Services**: Providing services like after-sales support, technical advice, and handling consumer grievances.",
      "8. **Pricing of Product**: Deciding the amount of money to be paid by the customer for the product.",
      "9. **Promotion**: Informing and persuading customers about the product's availability through various media.",
      "10. **Physical Distribution**: Deciding on the channels of distribution and physical movement of goods.",
      "11. **Transportation**: Physical movement of goods from one place to another, creating 'place utility'.",
      "12. **Storage or Warehousing**: Holding goods until they are required in the market, creating 'time utility'."
    ],
    visualizations: []
  },
  {
    id: "product-mix",
    title: "Product Mix",
    description: "Decisions regarding the product, including classification, branding, packaging, and labelling.",
    content: [
      "**Product Classification**",
      "- **Consumer Products**: Items meant for personal consumption. Includes Convenience goods (bread), Shopping goods (clothes), and Speciality goods (luxury cars).",
      "- **Industrial Products**: Used as inputs in producing other goods. Includes Materials and Parts, Capital Items (machinery), and Supplies.",
      "",
      "**Branding**",
      "- **Brand**: A name, term, sign, symbol, or design used to identify the products of one seller.",
      "- **Brand Name**: The part of a brand that can be spoken (e.g., Nike).",
      "- **Brand Mark**: The part of a brand that can be recognized but not spoken (e.g., symbol).",
      "- **Trade Mark**: A brand name or brand mark that is given legal protection.",
      "- **Good Brand Name**: Should be short, easy to pronounce, suggest benefits, be distinctive, and be adaptable to new products.",
      "",
      "**Packaging**",
      "- **Levels**: **Primary** (tube of paste), **Secondary** (cardboard box for tube), **Transportation** (corrugated box for shipping).",
      "- **Functions**: Product identification, protection, facilitating use, and promotion. It is often called the **'Silent Salesmen'**.",
      "- **Importance**: Rising standards of health, self-service outlets, innovational opportunity, and product differentiation."
    ],
    visualizations: [
      {
        id: 'packaging-levels',
        title: 'Levels of Packaging',
        type: 'list',
        data: [
          '1. Primary Package: Immediate container (e.g., Tube)',
          '2. Secondary Package: Protection/Dispensing (e.g., Cardboard Box)',
          '3. Transportation Package: Storage/Shipping (e.g., Corrugated Box)'
        ]
      }
    ]
  },
  {
    id: "labelling-branding",
    title: "Labelling and Branding",
    description: "Identification and Promotion tools.",
    content: [
      "**Labelling**",
      "Labelling refers to designing the label to be put on the package. Its key functions are:",
      "1. **Describe the product and specify its contents**: Providing information about ingredients, usage, etc.",
      "2. **Identification of the product or brand**: Helping customers identify the product among competitors.",
      "3. **Grading of products**: Classifying products into categories like A, B, C based on quality.",
      "4. **Help in promotion of products**: Using attractive graphics and graphics to attract attention.",
      "5. **Providing information required by law**: E.g., statutory warnings on cigarette packs."
    ],
    visualizations: []
  },
  {
    id: "pricing-mix",
    title: "Price Mix",
    description: "Factors affecting the price determination of a product.",
    content: [
      "**Meaning**",
      "Price is the amount of money paid by a buyer in consideration of the purchase of a product or service.",
      "",
      "**Factors Affecting Price Determination**",
      "1. **Product Cost**: The total cost (Fixed + Variable) sets the minimum level or 'floor' for the price. Includes research and development, production, and distribution costs.",
      "2. **Utility and Demand**: The utility of the product and the intensity of demand sets the 'ceiling' price. Higher utility or inelastic demand allows for higher pricing.",
      "3. **Competition**: The nature and intensity of competition in the market influence where the price will settle between the floor and the ceiling. Competitive products and their prices are analyzed.",
      "4. **Government and Legal Regulations**: Government may intervene to regulate prices of essential commodities (like medicines or fuels) to protect public interest and prevent exploitation.",
      "5. **Pricing Objectives**: Objectives like profit maximisation (short vs long term), obtaining market share leadership, surviving in a competitive market, or achieving product quality leadership.",
      "6. **Marketing Methods Used**: The quality and cost of distribution, intensity of advertising, type of packaging, and sales promotion also affect the final price determination."
    ],
    visualizations: []
  },
  {
    id: "place-mix",
    title: "Place Mix (Physical Distribution)",
    description: "Activities to make the product available to customers.",
    content: [
      "**Physical Distribution Components**",
      "1. **Order Processing**: The time and effort taken between receipt of order and its delivery. It should be fast and accurate.",
      "2. **Transportation**: The means of carrying goods to the customer. It creates 'place utility'.",
      "3. **Warehousing**: Acting as a bridge between the time of production and time of consumption. It creates 'time utility'.",
      "4. **Inventory Control**: Maintaining a level of inventory that balances the cost of holding it against the cost of lost sales.",
      "",
      "**Channels of Distribution**",
      "- **Direct Channel (Zero Level)**: Manufacturer directly to Customer (e.g., Mail order, Internet).",
      "- **Indirect Channels**: Involves intermediaries like Wholesalers, Retailers, and Agents."
    ],
    visualizations: [
      {
        id: 'distribution-channels',
        title: 'Channels of Distribution',
        type: 'flow',
        data: {
          nodes: [
            { id: 'M', label: 'Manufacturer' },
            { id: 'C', label: 'Consumer' },
            { id: 'R', label: 'Retailer' },
            { id: 'W', label: 'Wholesaler' },
            { id: 'A', label: 'Agent' }
          ],
          edges: [
            { from: 'M', to: 'C', label: 'Zero Level' },
            { from: 'M', to: 'R', label: 'One Level' }, { from: 'R', to: 'C' },
            { from: 'M', to: 'W', label: 'Two Level' }, { from: 'W', to: 'R' },
            { from: 'M', to: 'A', label: 'Three Level' }, { from: 'A', to: 'W' }
          ]
        }
      }
    ]
  },
  {
    id: "promotion-mix-elements",
    title: "Promotion Mix Elements",
    description: "Tools used to communicate with customers: Advertising, Personal Selling, Sales Promotion, Public Relations.",
    content: [
      "**1. Advertising**",
      "An impersonal, paid form of communication by an identified sponsor. It has wide reach and can create a distinct image for the product.",
      "",
      "**2. Personal Selling**",
      "Personal form of communication where a face-to-face dialogue takes place between the seller and the buyer. It is highly flexible and allows for immediate feedback.",
      "",
      "**3. Sales Promotion**",
      "Short-term incentives designed to encourage the purchase or sale of a product or service (e.g., discounts, coupons, free samples).",
      "",
      "**4. Public Relations (PR)**",
      "Involves a variety of programmes designed to promote or protect a company's image or its individual products in the eyes of the public."
    ],
    visualizations: []
  }
];
