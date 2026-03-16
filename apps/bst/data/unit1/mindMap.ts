import { MindMapNode } from '../../types';

export const mindMap: MindMapNode = {
  id: "root",
  label: "NATURE AND SIGNIFICANCE OF MANAGEMENT",
  children: [
    {
      id: "concept",
      label: "1. CONCEPT",
      children: [
        { id: "def", label: "Process of getting things done" },
        {
          id: "eff-vs-eff",
          label: "Performance",
          children: [
            { id: "eff1", label: "Effectiveness (Right Task/Time)" },
            { id: "eff2", label: "Efficiency (Right Way/Cost)" }
          ]
        }
      ]
    },
    {
      id: "char",
      label: "2. CHARACTERISTICS",
      children: [
        { id: "c1", label: "Goal Oriented" },
        { id: "c2", label: "Pervasive (Universal)" },
        { id: "c3", label: "Multidimensional (Work, People, Ops)" },
        { id: "c4", label: "Continuous Process" },
        { id: "c5", label: "Group Activity" },
        { id: "c6", label: "Dynamic Function" },
        { id: "c7", label: "Intangible Force" }
      ]
    },
    {
      id: "obj",
      label: "3. OBJECTIVES",
      children: [
        {
          id: "o-org",
          label: "Organisational",
          children: [
            { id: "surv", label: "Survival" },
            { id: "prof", label: "Profit" },
            { id: "grow", label: "Growth" }
          ]
        },
        { id: "o-soc", label: "Social ( Eco-friendly, Jobs)" },
        { id: "o-per", label: "Personal (Wages, Recognition)" }
      ]
    },
    {
      id: "imp",
      label: "4. IMPORTANCE",
      children: [
        { id: "i1", label: "Achieving Group Goals" },
        { id: "i2", label: "Increases Efficiency" },
        { id: "i3", label: "Dynamic Organisation" },
        { id: "i4", label: "Personal Objectives" },
        { id: "i5", label: "Development of Society" }
      ]
    },
    {
      id: "nat",
      label: "5. NATURE",
      children: [
        {
          id: "n-art",
          label: "As an Art",
          children: [
            { id: "na1", label: "Theoretical Knowledge" },
            { id: "na2", label: "Personalised Application" },
            { id: "na3", label: "Practice and Creativity" }
          ]
        },
        {
          id: "n-sci",
          label: "As a Science",
          children: [
            { id: "ns1", label: "Systematized Body" },
            { id: "ns2", label: "Principles (Experimental)" },
            { id: "ns3", label: "Universal Validity (Absent)" }
          ]
        },
        { id: "n-prof", label: "As Profession (Developing)" }
      ]
    },
    {
      id: "lvl",
      label: "6. LEVELS",
      children: [
        { id: "l-top", label: "Top (BOD, CEO) - Strategy" },
        { id: "l-mid", label: "Middle (Mgrs) - Link Pin" },
        { id: "l-low", label: "Operational - Workforce" }
      ]
    },
    {
      id: "coord",
      label: "7. COORDINATION",
      children: [
        { id: "co-def", label: "The Essence of Management" },
        { id: "co-feat", label: "Synchronises efforts" },
        { id: "co-force", label: "Binds all other functions" }
      ]
    }
  ]
};
