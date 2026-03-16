import { Chapter, MindMapNode } from '../../types';

export const MIND_MAP: Chapter['mindMap'] = {
    id: "root",
    label: "MARKETING MANAGEMENT",
    children: [
        {
            id: "philosophies",
            label: "1. Marketing Philosophies",
            children: [
                { id: "ph1", label: "Production (Availability/Affordability)" },
                { id: "ph2", label: "Product (Quality/Features)" },
                { id: "ph3", label: "Selling (Aggressive Promotion)" },
                { id: "ph4", label: "Marketing (Customer Satisfaction)" },
                { id: "ph5", label: "Societal (Satisfaction plus Social Welfare)" }
            ]
        },
        {
            id: "functions",
            label: "2. Functions of Marketing",
            children: [
                { id: "f1", label: "Gathering Market Info" },
                { id: "f2", label: "Marketing Planning" },
                { id: "f3", label: "Product Design and Dev" },
                { id: "f4", label: "Standardisation and Grading" },
                { id: "f5", label: "Packaging and Labelling" },
                { id: "f6", label: "Customer Support Services" }
            ]
        },
        {
            id: "product_mix",
            label: "3. Product Mix",
            children: [
                { id: "pd1", label: "Classification: Consumer vs Industrial" },
                { id: "pd2", label: "Branding: Name, Mark, Trade Mark" },
                {
                    id: "pd3",
                    label: "Packaging",
                    children: [
                        { id: "pkg1", label: "Primary (Immediate)" },
                        { id: "pkg2", label: "Secondary (Protection)" },
                        { id: "pkg3", label: "Transportation (Shipping)" }
                    ]
                },
                { id: "pd4", label: "Labelling: Provides information" }
            ]
        },
        {
            id: "price_mix",
            label: "4. Price Mix",
            children: [
                { id: "pr1", label: "Factors: Product Cost" },
                { id: "pr2", label: "Factors: Utility and Demand" },
                { id: "pr3", label: "Factors: Competition" },
                { id: "pr4", label: "Factors: Government Regulations" },
                { id: "pr5", label: "Factors: Pricing Objectives" }
            ]
        },
        {
            id: "place_mix",
            label: "5. Place Mix",
            children: [
                { id: "pl1", label: "Order Processing" },
                { id: "pl2", label: "Transportation" },
                { id: "pl3", label: "Warehousing" },
                { id: "pl4", label: "Inventory Control" }
            ]
        },
        {
            id: "promotion_mix",
            label: "6. Promotion Mix",
            children: [
                { id: "pro1", label: "Advertising (Paid, mass reach)" },
                { id: "pro2", label: "Personal Selling (Oral, flexible)" },
                { id: "pro3", label: "Sales Promotion (Short-term incentives)" },
                { id: "pro4", label: "Public Relations (Managing image)" }
            ]
        }
    ]
};
