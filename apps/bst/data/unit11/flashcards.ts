import { Flashcard } from '../../types';

export const flashcards: Flashcard[] = [
  // ═══════════════════════════════════════════════════════
  // 1. CONCEPT & PHILOSOPHIES (1-8)
  // ═══════════════════════════════════════════════════════
  { id: 'f11-1', category: 'Concept', question: 'Define Marketing.', answer: 'A social process where people obtain what they need and want through creating and exchanging products of value with others.' },
  { id: 'f11-2', category: 'Concept', question: 'What is "Marketing Management"?', answer: 'Planning, organising, directing and controlling activities to facilitate exchange of goods for mutual benefit.' },
  { id: 'f11-3', category: 'Philosophy', question: 'Identify: Profit through large-scale production and wide distribution.', answer: 'Production Concept. Trigger: "Mass production", "Availability", "Affordability".' },
  { id: 'f11-4', category: 'Philosophy', question: 'Identify: Profit through high quality and product improvement.', answer: 'Product Concept. Trigger: "Quality", "Best product", "Performance".' },
  { id: 'f11-5', category: 'Philosophy', question: 'Identify: Profit through aggressive selling and promotion.', answer: 'Selling Concept. Trigger: "Push", "Hard selling", "Promotion".' },
  { id: 'f11-6', category: 'Philosophy', question: 'Identify: Profit through customer satisfaction and integrated marketing.', answer: 'Marketing Concept. Trigger: "Customer needs first", "Satisfaction", "Integration".' },
  { id: 'f11-7', category: 'Philosophy', question: 'Identify: Focus on social welfare along with profit and customer satisfaction.', answer: 'Societal Marketing Concept. Trigger: "Society welfare", "Environment", "Eco-friendly".' },
  { id: 'f11-8', category: 'Distinction', question: 'Selling vs Marketing?', answer: 'Selling is product-centric (push what is produced). Marketing is customer-centric (produce what customer needs).' },

  // ═══════════════════════════════════════════════════════
  // 2. MARKETING MIX - 4Ps (9-12)
  // ═══════════════════════════════════════════════════════
  { id: 'f11-9', category: 'Mix', question: 'What are the 4 elements of Marketing Mix?', answer: 'Product, Price, Place (Distribution), and Promotion.' },
  { id: 'f11-10', category: 'Mix', question: 'What is "Marketing Mix"?', answer: 'The set of marketing tools (4Ps) a firm uses to pursue its marketing objectives in the target market.' },
  { id: 'f11-11', category: 'Mix', question: 'Why must the 4Ps be combined properly?', answer: 'Each element is interrelated. The right mix creates a unique offering that maximises customer satisfaction and profit.' },
  { id: 'f11-12', category: 'Mix', question: 'Which P is the "Silent Salesman"?', answer: 'Product (specifically, its Packaging). Packaging attracts attention and convinces at the point of sale.' },

  // ═══════════════════════════════════════════════════════
  // 3. PRODUCT (13-20)
  // ═══════════════════════════════════════════════════════
  { id: 'f11-13', category: 'Product', question: 'Define Product.', answer: 'Anything that can be offered to a market to satisfy a need or want — includes goods, services, ideas, experiences.' },
  { id: 'f11-14', category: 'Product', question: 'What is "Product Mix"?', answer: 'The total number of product lines and items that a marketer offers to the market.' },
  { id: 'f11-15', category: 'Branding', question: 'Define "Brand".', answer: 'A name, term, sign, symbol, or design used to identify a seller\'s product and differentiate it from competitors.' },
  { id: 'f11-16', category: 'Branding', question: 'What is a "Trade Mark"?', answer: 'A brand that is given LEGAL PROTECTION against use by other firms. Registered under law.' },
  { id: 'f11-17', category: 'Branding', question: 'What is a "Brand Name"?', answer: 'The verbal part of the brand that can be spoken (e.g., "Nike", "Apple", "Amul").' },
  { id: 'f11-18', category: 'Packaging', question: 'What are the 3 levels of Packaging?', answer: 'Primary (immediate container, e.g., tube), Secondary (outer box), Transportation (shipping carton).' },
  { id: 'f11-19', category: 'Packaging', question: 'Why is packaging called a "Silent Salesman"?', answer: 'In self-service stores, it attracts attention, describes the product, and persuades purchase without a human seller.' },
  { id: 'f11-20', category: 'Labelling', question: 'What are the functions of Labelling?', answer: 'Describes the product, Identifies (brand), Grades quality, Promotes through attractive design, and Provides legal info.' },

  // ═══════════════════════════════════════════════════════
  // 4. PRICING (21-27)
  // ═══════════════════════════════════════════════════════
  { id: 'f11-21', category: 'Price', question: 'What is the "Price" element of Marketing Mix?', answer: 'The amount of money customers must pay to obtain the product. It generates revenue.' },
  { id: 'f11-22', category: 'Price', question: 'What sets the "Floor" (lower limit) of price?', answer: 'Product Cost — price cannot be lower than cost in the long run.' },
  { id: 'f11-23', category: 'Price', question: 'What sets the "Ceiling" (upper limit) of price?', answer: 'Demand and perceived utility of the product to the customer.' },
  { id: 'f11-24', category: 'Price', question: 'Name the factors affecting Price.', answer: 'Product Cost, Demand, Competition, Government regulations, Marketing objectives, Distribution channels.' },
  { id: 'f11-25', category: 'Price', question: 'How does "Competition" affect pricing?', answer: 'Severe competition forces lower prices. Monopoly allows premium pricing.' },
  { id: 'f11-26', category: 'Price', question: 'How do "Marketing Objectives" affect pricing?', answer: 'Market penetration = low price. Profit maximisation = high price. Market leader = competitive price.' },
  { id: 'f11-27', category: 'Price', question: 'How does "Government Regulation" affect pricing?', answer: 'Price controls, duties, taxes, and MRP rules constrain pricing freedom.' },

  // ═══════════════════════════════════════════════════════
  // 5. PLACE / DISTRIBUTION (28-34)
  // ═══════════════════════════════════════════════════════
  { id: 'f11-28', category: 'Place', question: 'What is "Place" in Marketing Mix?', answer: 'Activities to make the product available to target customers — channels of distribution and physical distribution.' },
  { id: 'f11-29', category: 'Place', question: 'What is a "Zero Level" channel?', answer: 'Direct channel: Manufacturer → Consumer (no intermediaries). E.g., Mail order, company website.' },
  { id: 'f11-30', category: 'Place', question: 'What is a "One Level" channel?', answer: 'Manufacturer → Retailer → Consumer. One intermediary.' },
  { id: 'f11-31', category: 'Place', question: 'What is a "Two Level" channel?', answer: 'Manufacturer → Wholesaler → Retailer → Consumer. Most common for consumer goods.' },
  { id: 'f11-32', category: 'Place', question: 'Name the components of Physical Distribution.', answer: 'Transportation, Warehousing, Inventory Management, and Order Processing.' },
  { id: 'f11-33', category: 'Place', question: 'What does Warehousing do?', answer: 'Removes the TIME gap between production and consumption by storing goods until demanded.' },
  { id: 'f11-34', category: 'Place', question: 'Name factors affecting choice of channels.', answer: 'Product nature, Market size, Company resources, Competition, Government regulations.' },

  // ═══════════════════════════════════════════════════════
  // 6. PROMOTION MIX (35-44)
  // ═══════════════════════════════════════════════════════
  { id: 'f11-35', category: 'Promotion', question: 'What is "Promotion" in Marketing Mix?', answer: 'Activities to inform, persuade, and remind customers about the product and its benefits.' },
  { id: 'f11-36', category: 'Promotion', question: 'Name the 4 elements of Promotion Mix.', answer: 'Advertising, Personal Selling, Sales Promotion, and Public Relations.' },
  { id: 'f11-37', category: 'Advertising', question: 'Define Advertising.', answer: 'Paid, NON-PERSONAL form of communication by an IDENTIFIED sponsor through mass media.' },
  { id: 'f11-38', category: 'Advertising', question: 'Name two merits of Advertising.', answer: 'Reaches large audience at low cost per person and helps build brand image.' },
  { id: 'f11-39', category: 'Advertising', question: 'Name two demerits of Advertising.', answer: 'Impersonal (no customisation) and may mislead consumers with exaggerated claims.' },
  { id: 'f11-40', category: 'Personal Selling', question: 'Define Personal Selling.', answer: 'ORAL presentation and conversation with one or more prospective customers for making sales.' },
  { id: 'f11-41', category: 'Personal Selling', question: 'Name two advantages of Personal Selling.', answer: 'Personal attention and immediate feedback. Two-way communication allows clearing objections.' },
  { id: 'f11-42', category: 'Sales Promotion', question: 'Define Sales Promotion.', answer: 'SHORT-TERM incentives designed to encourage immediate purchase (e.g., discounts, free samples, contests).' },
  { id: 'f11-43', category: 'Sales Promotion', question: 'Name 3 examples of Sales Promotion tools.', answer: 'Free samples, Discount coupons, Lucky draws, Contests, Festivals offers, Exchange offers.' },
  { id: 'f11-44', category: 'PR', question: 'Define Public Relations.', answer: 'Managing public image and goodwill through press releases, sponsorships, and community involvement.' },

  // ═══════════════════════════════════════════════════════
  // 7. SQP TRIGGERS & TRAPS (45-55)
  // ═══════════════════════════════════════════════════════
  { id: 'f11-45', category: 'SQP Trigger', question: 'If a case says "company focuses on what it can produce rather than what customers want", which concept?', answer: 'Production Concept.' },
  { id: 'f11-46', category: 'SQP Trigger', question: 'If a case says "company uses aggressive advertising and door-to-door sales", which concept?', answer: 'Selling Concept.' },
  { id: 'f11-47', category: 'SQP Trigger', question: 'If a case says "company first researches what customers need, then develops products", which concept?', answer: 'Marketing Concept.' },
  { id: 'f11-48', category: 'SQP Trigger', question: 'If a case says "company uses eco-friendly packaging to protect the environment", which concept?', answer: 'Societal Marketing Concept.' },
  { id: 'f11-49', category: 'SQP Trigger', question: 'If a case says "buy 2 get 1 free" or "scratch card contest", which element?', answer: 'Sales Promotion.' },
  { id: 'f11-50', category: 'SQP Trigger', question: 'If a case says "product sold directly through company website", which channel?', answer: 'Zero Level (Direct) Channel.' },
  { id: 'f11-51', category: 'Trap', question: 'Is Advertising "Personal" or "Impersonal"?', answer: 'IMPERSONAL. Personal Selling is the personal form of promotion.' },
  { id: 'f11-52', category: 'Trap', question: 'Is Sales Promotion a "Long-term" or "Short-term" tool?', answer: 'SHORT-TERM. It is designed for immediate boost, not long-term brand building.' },
  { id: 'f11-53', category: 'Trap', question: 'Which comes first: Branding or Labelling?', answer: 'Branding comes first (creating identity), then Labelling (providing info on the label).' },
  { id: 'f11-54', category: 'Trap', question: 'Is "Public Relations" the same as "Advertising"?', answer: 'No. PR is unpaid and indirect. Advertising is paid and sponsored by an identified source.' },
  { id: 'f11-55', category: 'Trap', question: 'What level of packaging is the "shipping carton"?', answer: 'Transportation Packaging (Third level).' }
];
