import {
  BarChart,
  Eye,
  Grid,
  Shield,
  Target,
  Workflow,
  Zap,
} from 'lucide-react';

export const personas = [
  {
    title: 'Satellite Operator',
    role: 'Real-time custodian of satellite fleet health.',
    keyGoals:
      'Ensure continuous mission uptime, execute maneuvers, respond quickly to anomalies.',
    coreTasks:
      'Monitor telemetry, execute commands, coordinate with teams, act on alerts.',
    painPoints:
      'Cognitive overload, time-sensitive decisions under pressure, fragmented data sources.',
  },
  {
    title: 'Mission Analyst',
    role: 'Strategic planner and in-depth data expert.',
    keyGoals:
      'Analyze orbital dynamics, model scenarios, mitigate risks, and optimize mission procedures.',
    coreTasks:
      'Perform conjunction analysis, design maneuvers, synthesize data, track long-term trends.',
    painPoints:
      'Data fragmentation, reliance on complex software tools, manual transfer of data between modules.',
  },
  {
    title: 'Commercial Agency Representative',
    role: 'High-level decision-maker for fleet safety and business continuity.',
    keyGoals:
      'Protect assets, ensure cost efficiency, maintain operational resilience.',
    coreTasks:
      'Review high-risk alerts, approve maneuver plans, evaluate ROI, justify operational costs.',
    painPoints:
      'Lack of actionable business insights, difficulty quantifying risk, limited trust in vendor data.',
  },
];
export const userNeeds = [
  {
    label: 'Operators',
    description: 'need quick scanning and low cognitive load.',
  },
  {
    label: 'Analysts',
    description: 'need accuracy, detail, and comparison tools.',
  },
  {
    label: 'Agency reps',
    description: 'need high-level insights tied to cost and risk.',
  },
];
export const dashboard = [
  {
    label: 'Risk Distribution :',
    description: 'visual breakdown of high, medium, and low-risk objects.',
  },
  {
    label: 'Fleet Health KPIs :',
    description:
      'circular meters for operational status, battery levels, and communication uptime.',
  },
  {
    label: 'Collision Alerts :',
    description:
      'prioritized warnings with time of closest approach and probability.',
  },
  {
    label: 'Operational Cost Impact :',
    description:
      'projected fuel usage and financial implications of maneuvers.',
  },
];
export const collision_screening = [
  {
    label: 'Filters + KPI Strip :',
    description:
      'instant stats on total conjunctions, high-risk objects, average closest approach, and countdown to next event.',
  },
  {
    label: 'Conjunction Table :',
    description:
      'sortable by distance, probability, or risk level with color-coded badges.',
  },
  {
    label: 'Orbit Visualization :',
    description: 'live view of satellite and threat trajectories.',
  },
  {
    label: 'Tracking Details Panel :',
    description:
      'expanded data on a selected event, including velocity, catalogue source, and confidence.',
  },
];
export const Maneuver_Design = {
  support: [
    {
      label: 'Linked to Conjunction :',
      description:
        'Threat object, TCA, and risk data are auto-populated from the screening results. Users can immediately see the recommended maneuver and validate its impact.',
    },
    {
      label: 'Independent Simulation :',
      description:
        'Users can manually enter minimal parameters such as Start Time (UTC), Δv, Direction (along-track / radial / inclination), and Fuel Allocation, giving analysts flexibility to test “what-if” scenarios even without a current alert.',
    },
  ],
  features: [
    {
      label: 'Orbit Comparison :',
      description:
        'Visualizes current vs. post-maneuver trajectory for clarity.',
    },
    {
      label: 'Recommended vs. Alternatives :',
      description:
        ' The system proposes the optimal maneuver, while also listing viable alternatives with Δv, fuel usage, and post-maneuver risk.',
    },
    {
      label: 'Risk & Cost Validation :',
      description:
        ' Dedicated bottom panel projects collision probability drop, fuel remaining, and cost impact over time.',
    },
  ],
  achievements: [
    {
      label: 'Operators',
      description: 'can quickly confirm safe maneuvers with confidence.',
    },
    {
      label: 'Analysts',
      description: 'gain tools for detailed trade-offs and scenario testing.',
    },
    {
      label: 'Agency reps',
      description:
        'see cost and risk implications in clear terms, linking technical choices to business impact.',
    },
  ],
};
export const decisions = [
  {
    number: '1',
    title: 'Persona-Driven Layouts',
    description:
      'Designed each module with different depth levels: quick-scan dashboards for operators, detail-heavy panels for analysts, and simplified summaries for agency reps.',
  },
  {
    number: '2',
    title: 'Tiered Information Flow',
    description:
      'Critical alerts and KPIs are always surfaced first, with expandable panels and orbit visualizations for deeper analysis only when needed.',
  },
  {
    number: '3',
    title: 'Dual Workflow Support',
    description:
      'Maneuver Design works seamlessly in two modes: linked from Collision Screening (auto-populated) or independent (manual input for simulations).',
  },
  {
    number: '4',
    title: 'Modular Widgets & Collapsible Panels',
    description:
      'To reduce cognitive overload, the interface uses modular widgets that can collapse/expand, letting users control the amount of visible data.',
  },
  {
    number: '5',
    title: 'Consistent Visual Language',
    description:
      'Adopted a dark sci-fi theme with bluish gradients, high-contrast risk states (red/orange/green), and consistent typography, ensuring familiarity and easy scanning across screens.',
  },
  {
    number: '6',
    title: 'Action-Oriented Design',
    description:
      'Every workflow ends with a clear action button: Send to Maneuver Design, Confirm Maneuver, or Export Log. This prevents dead ends and ensures continuity in decision-making.',
  },
  {
    number: '7',
    title: 'Visual Emphasis on Risk',
    description:
      'Risk levels are encoded with color, charts, and KPIs (e.g., Risk Distribution donut, Collision Probability charts), making high-risk events impossible to miss.',
  },
  {
    number: '8',
    title: 'Business Insight Integration',
    description:
      'Added Operational Cost Impact and Fuel Remaining indicators to bridge the gap between technical maneuvers and executive decision-making.',
  },
];

export const outcomes = [
  {
    persona: 'Operators',
    description:
      'gain rapid situational awareness with clear KPIs, risk alerts, and direct actions like Send to Maneuver Design. This reduces cognitive overload and speeds up response in critical situations.',
    icon: <Target className="w-5 h-5" />,
  },
  {
    persona: 'Analysts',
    description:
      'can filter, sort, and validate conjunctions, explore orbit visualizations, and compare alternative maneuvers. The workflow supports deep technical review without overwhelming others.',
    icon: <BarChart className="w-5 h-5" />,
  },
  {
    persona: 'Agency Representatives',
    description:
      'get high-level insights through risk distribution, cost impact, and post-maneuver validation. The platform translates technical maneuvers into business-relevant decisions.',
    icon: <Shield className="w-5 h-5" />,
  },
];

export const takeaways = [
  'This project was a completely new challenge for me. At the start, I had no prior exposure to space-tech or satellite monitoring systems. To bridge this gap, I studied how these systems work, researched industry platforms like LeoLabs and Ansys STK, and analyzed their strengths and weaknesses.',
  'Through this process, I learned how to handle critical, high-stakes data and design interfaces that balance technical depth with quick, confident actions. The requirement to let users run Collision Screening and Maneuver Design independently pushed me to create a flexible flow that still felt smooth and intuitive.',
  " The biggest takeaway was how structured design thinking can turn unfamiliar, complex domains into clear, user-friendly workflows. It showed me that good UX is not about knowing the industry beforehand it's about research, empathy, and problem-solving.",
];
export const platformStructure = [
  {
    icon: <Zap className="w-6 h-6" />,
    title: 'Tiered Information Flow',
    description: 'Critical alerts first, deeper details only when needed.',
  },
  {
    icon: <Eye className="w-6 h-6" />,
    title: 'Visual-Heavy Dashboards',
    description: 'Charts, KPIs, and orbit views for at-a-glance understanding.',
  },
  {
    icon: <Grid className="w-6 h-6" />,
    title: 'Modular Widgets',
    description:
      'Collapsible panels to reduce clutter while keeping flexibility.',
  },
  {
    icon: <Workflow className="w-6 h-6" />,
    title: 'Dual Workflows',
    description:
      'Collision Screening and Maneuver Design can connect seamlessly or run independently.',
  },
];
