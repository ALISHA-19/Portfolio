export const portfolioData = {
  name: "Alisha Chaudhari",
  role: "AI Product Manager | GenAI, LLMs & RAG | B2B & API Products",
  email: "alishachaudhari11@gmail.com",
  phone: "+91 7719849809",
  location: "Bangalore, Karnataka, India",

  // Public profiles
  linkedin: "https://www.linkedin.com/in/alisha-chaudhari-pm",
  github: "https://github.com/AlishaChaudhari",
  portfolio: "https://ayuda.co.in/portfolio/alishachaudhari",

  metrics: [
    { label: "Lifecycle Emails Shipped", value: 60, suffix: "+" },
    { label: "Conversion Lift", value: 22, suffix: "%" },
    { label: "Global Products Owned", value: 150, suffix: "+" },
    { label: "Years in Product", value: 4, suffix: "+" },
  ],

  projects: [
    {
      id: "ai-email-agent",
      title: "AI Email Agent — 5-Stage Lifecycle",
      outcome: "60+ Personalized Emails, Zero Hallucinations",
      problem: "DivineAPI needed personalized email coverage across every customer stage, but manual copywriting didn't scale and generic AI risked stating wrong pricing, plans, or features to real customers.",
      impact: "Shipped an AI email agent that generates 60+ personalized, audience-adapted emails across 5 lifecycle stages — from just 3 prompt documents, with human-in-the-loop approval on every send.",
      approach: "Designed the agent's RAG architecture, knowledge-base schema, and a fact-verification layer so every claim is grounded in verified company facts before a human approves the send.",
      challenge: "Generative email fails the moment it invents a price, a plan limit, or a feature that doesn't exist. The hard part was grounding every fact in a verified knowledge base and inserting a human approval gate — without losing the personalization that made the emails worth sending.",
      results: [
        { value: "5 stages", label: "Signup · Trial · Win-back · Expansion · Sales" },
        { value: "60+", label: "Personalized emails from 3 prompt docs" },
        { value: "100%", label: "Human-in-the-loop approved sends" }
      ],
      highlights: [
        "Designed the RAG knowledge-base schema and retrieval flow so every email is grounded in verified company facts — pricing, plans, and features — eliminating the hallucinated claims that make AI email unusable in production.",
        "Built a fact-verification layer that checks each generated claim against the knowledge base before it reaches a human reviewer, making approval fast instead of forensic.",
        "Structured the agent around 5 customer-journey stages (Signup, Trial, Win-back, Expansion, Sales Inquiry), each with audience-adapted tone and intent, all driven from just 3 prompt documents.",
        "Authored the full product documentation suite — PRD, build guides for all 5 pipelines, CRM specification, and knowledge-base guide — so engineers could build to spec and the founder could own it after handoff.",
        "Delivered a working end-to-end demo simulating 38 customers through the complete journey, proving the pipeline before any real send."
      ],
      techStack: ["LLMs", "RAG", "Prompt Engineering", "Knowledge Base", "CRM", "Human-in-the-loop"],
      hardSkills: ["RAG Architecture", "AI Product Strategy", "Prompt Systems", "Evaluation"],
      softSkills: ["Cross-functional Leadership", "Product Documentation", "Stakeholder Alignment"],
      featured: true
    },
    {
      id: "sales-dashboard",
      title: "Founder's Unified Sales Dashboard",
      outcome: "One View of Leads, Trials & Conversions",
      problem: "The founder had no single view of the funnel — leads, trials, and conversions lived in separate places, making it hard to see what was actually working.",
      impact: "Built DivineAPI's first unified sales dashboard, giving the founder a single source of truth across leads, trials, and conversions.",
      approach: "Defined the metrics that mattered, mapped the underlying data sources, and designed a single dashboard view tuned for fast leadership decisions.",
      challenge: "A dashboard is only useful if leadership trusts it. The challenge was reconciling lead, trial, and conversion data from different sources into one consistent funnel view — and showing only the numbers that change a decision, not every metric available.",
      results: [
        { value: "1 view", label: "Leads → trials → conversions" },
        { value: "First", label: "Company's first unified dashboard" },
        { value: "Faster", label: "Leadership decisions on the funnel" }
      ],
      highlights: [
        "Mapped fragmented lead, trial, and conversion data into a single funnel model so the founder could see the whole pipeline in one place.",
        "Prioritized a small set of decision-driving metrics over a wall of vanity charts, keeping the dashboard scannable in seconds.",
        "Established the dashboard as the company's shared source of truth for go-to-market performance."
      ],
      techStack: ["Dashboards", "Funnel Analytics", "SQL", "CRM Data"],
      hardSkills: ["Dashboard Design", "Funnel Analytics", "Metrics Modeling"],
      softSkills: ["Data Storytelling", "Executive Reporting"]
    },
    {
      id: "growth-funnel-snp",
      title: "Acquisition-to-Retention Growth Engine",
      outcome: "22% Conversion Lift Across 150+ Products",
      problem: "S&P Global's 150+ global digital products needed a coherent acquisition-to-retention funnel; users were dropping off without clear segmentation or journey mapping.",
      impact: "Owned the end-to-end growth funnel for 150+ global digital products; user segmentation and journey mapping drove a 22% lift in conversion.",
      approach: "Defined North Star metrics (CTR, CVR, engagement), built automated dashboards for senior stakeholders, and mapped journeys to find and close the biggest drop-offs.",
      challenge: "At 150+ products, you can't optimize one funnel — you need a repeatable system. The challenge was building segmentation and journey-mapping frameworks general enough to apply across a global portfolio, yet sharp enough to move conversion.",
      results: [
        { value: "22%", label: "Lift in conversion" },
        { value: "150+", label: "Global digital products" },
        { value: "3 KPIs", label: "North Star: CTR, CVR, engagement" }
      ],
      highlights: [
        "Owned the full acquisition-to-retention funnel across S&P Global Market Intelligence's portfolio of 150+ global B2B and B2C digital products.",
        "Drove a 22% conversion lift through user segmentation and journey mapping that identified and closed the highest-impact drop-offs.",
        "Defined North Star metrics (CTR, CVR, engagement) and built automated dashboards that senior stakeholders used for decision-making.",
        "Standardized product-ops frameworks on Monday.com and Workfront, reducing operational debt across the team."
      ],
      techStack: ["Marketo", "Salesforce", "Analytics", "Dashboards"],
      hardSkills: ["Funnel Analysis", "Segmentation", "North Star Metrics", "Journey Mapping"],
      softSkills: ["Stakeholder Communication", "Data-Driven Decisions"]
    },
    {
      id: "marketing-automation",
      title: "Marketing Automation Product Roadmap",
      outcome: "~30% Faster Time-to-Market",
      problem: "Campaign delivery was slow and inconsistent, and the Marketo–Salesforce data models were drifting — hurting attribution accuracy and time-to-market.",
      impact: "Owned the marketing automation product roadmap; designed Marketo workflows that cut time-to-market by ~30% and partnered with Engineering and Data to sync Marketo–Salesforce data models.",
      approach: "Designed reusable Marketo workflows, drove a roadmap for the automation stack, and improved attribution accuracy by aligning the data models across systems.",
      challenge: "Marketing automation breaks quietly: a drifting field mapping silently corrupts attribution for months. The challenge was redesigning workflows for speed while hardening the Marketo–Salesforce sync so the data could actually be trusted.",
      results: [
        { value: "~30%", label: "Faster time-to-market" },
        { value: "Marketo ↔ SFDC", label: "Synced data models" },
        { value: "↑ Accuracy", label: "Attribution & data integrity" }
      ],
      highlights: [
        "Owned the marketing-automation product roadmap, prioritizing the workflows with the highest leverage on delivery speed.",
        "Designed Marketo workflows that cut time-to-market by roughly 30% across campaigns.",
        "Partnered with Engineering and Data teams to sync Marketo–Salesforce data models, materially improving attribution accuracy and data integrity."
      ],
      techStack: ["Marketo", "Salesforce", "Monday.com", "Workfront"],
      hardSkills: ["Marketing Automation", "Roadmapping", "Data Modeling", "Product Ops"],
      softSkills: ["Cross-team Partnership", "Process Standardization"]
    },
    {
      id: "experimentation-wns",
      title: "Multi-Channel A/B Testing Program",
      outcome: "18% CTR Uplift · 20% Open-Rate Lift",
      problem: "Multi-channel campaigns were running on intuition, with no structured experimentation framework to know what actually moved engagement — and lead data quality was eroding ROI.",
      impact: "Drove an 18% uplift in CTR across multi-channel campaigns through structured A/B testing, and a 20% improvement in user open rates by testing UI/UX elements.",
      approach: "Built structured A/B testing and experimentation frameworks, ran funnel analysis to find drop-offs, and led data-hygiene initiatives that improved lead accuracy and marketing ROI.",
      challenge: "Experimentation only compounds if the data underneath it is clean. The challenge was running a disciplined A/B testing program while simultaneously fixing the lead-database hygiene that was quietly distorting every result.",
      results: [
        { value: "18%", label: "CTR uplift (multi-channel)" },
        { value: "20%", label: "Open-rate lift (UI/UX tests)" },
        { value: "100%", label: "GDPR-compliant launches" }
      ],
      highlights: [
        "Drove an 18% CTR uplift across multi-channel campaigns through structured A/B testing and experimentation frameworks.",
        "Introduced A/B testing on UI/UX elements that improved user open rates by 20%.",
        "Owned QA for product launches — reducing post-launch defects and ensuring 100% GDPR compliance.",
        "Led data strategy and hygiene initiatives that improved lead-database accuracy, marketing ROI, and Lead-to-MQL conversion."
      ],
      techStack: ["A/B Testing", "Funnel Analytics", "CRM", "Data Hygiene"],
      hardSkills: ["Experimentation", "Funnel Analysis", "Lead-to-MQL Optimization", "QA Ownership"],
      softSkills: ["Stakeholder Management", "Cross-functional Collaboration"]
    }
  ],

  experience: [
    {
      role: "AI Product Manager",
      company: "DivineAPI",
      location: "Delhi, India",
      duration: "May 2026 – Present",
      summary: "Leading AI product development on an API platform; managing a 3-person team (AI engineer + 2 developers) building agentic AI from zero.",
      bullets: [
        "Shipped an AI Email Agent across 5 lifecycle stages — 60+ personalized emails from 3 prompt docs, with human-in-the-loop approval on every send.",
        "Designed the agent's RAG architecture: knowledge-base schema, retrieval flow, and a fact-verification layer to eliminate hallucinations.",
        "Built the company's first unified sales dashboard and authored the full PRD, build-guide, CRM, and knowledge-base documentation suite."
      ],
      techStack: ["LLMs", "RAG", "Prompt Engineering", "CRM", "Dashboards"],
      hardSkills: ["AI Product Strategy", "RAG Architecture", "Evaluation", "Funnel Analytics"],
      softSkills: ["Team Leadership", "Product Documentation", "Stakeholder Alignment"]
    },
    {
      role: "Associate Product Manager — Growth & Engagement",
      company: "S&P Global",
      location: "Gurugram",
      duration: "Sep 2024 – Jan 2026",
      summary: "Owned the growth funnel and marketing-automation roadmap for Market Intelligence's portfolio of global digital products.",
      bullets: [
        "Owned the acquisition-to-retention funnel for 150+ global digital products; segmentation and journey mapping drove a 22% conversion lift.",
        "Designed Marketo workflows that cut time-to-market ~30% and defined North Star metrics with automated leadership dashboards.",
        "Partnered with Engineering and Data to sync Marketo–Salesforce data models, improving attribution accuracy and data integrity."
      ],
      techStack: ["Marketo", "Salesforce", "Monday.com", "Workfront"],
      hardSkills: ["Growth Funnel", "Marketing Automation", "North Star Metrics", "Roadmapping"],
      softSkills: ["Stakeholder Communication", "Cross-team Partnership"]
    },
    {
      role: "Senior Product Operations Associate",
      company: "WNS",
      location: "Pune",
      duration: "May 2022 – Jun 2024",
      summary: "Ran structured experimentation and data-quality programs across global B2B and B2C campaigns (progressed from Product Operations Associate).",
      bullets: [
        "Drove an 18% CTR uplift across multi-channel campaigns through structured A/B testing and experimentation frameworks.",
        "Introduced A/B testing on UI/UX elements that improved user open rates by 20%; owned QA for launches with 100% GDPR compliance.",
        "Led data strategy and hygiene initiatives that improved lead-database accuracy, marketing ROI, and Lead-to-MQL conversion."
      ],
      techStack: ["A/B Testing", "CRM", "Funnel Analytics"],
      hardSkills: ["Experimentation", "Funnel Analysis", "Data Hygiene", "QA Ownership"],
      softSkills: ["Stakeholder Management", "Cross-functional Collaboration"]
    },
    {
      role: "Associate Product Analyst — Customer Experience",
      company: "Tech Mahindra Business Services",
      location: "Pune",
      duration: "Dec 2021 – May 2022",
      summary: "Turned customer feedback into product fixes across the customer-experience function.",
      bullets: [
        "Performed root-cause analysis on customer feedback, driving product improvements that reduced support ticket volume.",
        "Improved product CSAT by streamlining workflows between Product, Support, and Engineering."
      ],
      techStack: ["RCA", "CX Analytics", "Workflow Tools"],
      hardSkills: ["Root Cause Analysis", "Workflow Design", "CSAT Improvement"],
      softSkills: ["Cross-functional Coordination", "Customer Empathy"]
    },
    {
      role: "Field Marketing Associate (Freelance)",
      company: "Benchmark Media",
      location: "Pune",
      duration: "Mar 2019 – May 2019",
      summary: "Ran on-ground community campaigns promoting Google's Neighbourly app.",
      bullets: [
        "Promoted Google's Neighbourly app through on-ground community campaigns.",
        "Exceeded install targets through team coordination and direct user outreach."
      ],
      techStack: ["Field Marketing", "Community Outreach"],
      hardSkills: ["Campaign Execution", "User Outreach"],
      softSkills: ["Team Coordination", "Growth Hustle"]
    }
  ],

  skills: {
    "AI Product Execution": [
      "AI Product Strategy", "RAG Architecture", "Prompt Systems", "LLM Evaluation",
      "Human-in-the-loop Design", "Agentic AI", "Knowledge Base Design",
      "PRDs & Specs", "Product Discovery"
    ],
    "Growth & Lifecycle": [
      "Funnel Analysis", "Customer Segmentation", "A/B Testing & Experimentation",
      "North Star Metrics", "Journey Mapping", "Retention & Win-back",
      "Conversion Optimization", "Lifecycle Marketing"
    ],
    "Data & Decision Making": [
      "Dashboard Design", "Product Analytics", "SQL Fundamentals", "Data Storytelling",
      "Attribution & Data Integrity", "KPI Modeling", "Executive Reporting"
    ],
    "Tools & Cross-functional": [
      "Marketo", "Salesforce", "Monday.com", "Workfront", "Figma",
      "Agile / Scrum", "Stakeholder Management", "Cross-functional Leadership"
    ]
  },

  certifications: [
    {
      title: "Product Management: Building a Product Roadmap",
      issuer: "Professional Certification",
      year: "2025",
      vendor: "pm",
      foundation: "Roadmapping // Prioritization // Stakeholders",
      rationale: "Formalizing the craft of turning strategy into a sequenced, defensible roadmap — balancing user value, business goals, and engineering reality.",
      competencies: ["Roadmapping", "Prioritization", "Stakeholder Alignment", "Product Strategy"]
    },
    {
      title: "From Data to Decision",
      issuer: "Professional Certification",
      year: "2025",
      vendor: "data",
      foundation: "Analytics // Decision Frameworks // Metrics",
      rationale: "Sharpening the path from raw data to a confident product decision — choosing the right metric, reading it honestly, and acting on it.",
      competencies: ["Data Analysis", "Decision Frameworks", "Metrics", "Insight Generation"]
    },
    {
      title: "Design Thinking for UX Design Managers",
      issuer: "Professional Certification",
      year: "2024",
      vendor: "ux",
      foundation: "Design Thinking // UX // Discovery",
      rationale: "Grounding product decisions in real user needs through structured discovery, empathy, and iterative problem framing.",
      competencies: ["Design Thinking", "UX Strategy", "User Research", "Problem Framing"]
    },
    {
      title: "Global Marketing H1 2025 Awards — Execute & Deliver (Team)",
      issuer: "S&P Global",
      year: "2025",
      vendor: "award",
      foundation: "Recognition // Execution // Delivery",
      rationale: "Team award within S&P Global's Global Marketing organization, recognizing execution and delivery on growth initiatives.",
      competencies: ["Execution", "Delivery", "Team Impact", "Growth"]
    },
    {
      title: "Ayuda Hackathon",
      issuer: "Ayuda",
      year: "2026",
      vendor: "hackathon",
      foundation: "AI Product // Rapid Build // Teamwork",
      rationale: "Hands-on rapid build within the Ayuda AI Product Management program — shipping a working concept under time pressure.",
      competencies: ["Rapid Prototyping", "AI Product", "Teamwork", "Shipping"]
    }
  ],

  education: [
    {
      degree: "AI Product Management",
      university: "Ayuda Flagship Program",
      duration: "Dec 2025 – Jun 2026",
      kicker: "AI PRODUCT TRAINING // COHORT",
      summary: "An intensive cohort program focused on shipping real AI products end-to-end — from PRD to RAG architecture to evaluation and human-in-the-loop design.",
      highlightLabel: "FLAGSHIP CAPSTONE",
      highlight: "Designed and shipped an end-to-end AI Email Agent: a RAG-grounded, human-in-the-loop system generating 60+ personalized lifecycle emails across 5 customer journey stages.",
      highlightTags: ["Focus: AI Product", "Build: RAG + LLMs", "Outcome: Shipped Agent"],
      modules: ["AI Product Strategy", "RAG & LLMs", "Prompt Systems", "Evaluation", "GTM Strategy", "Product Discovery", "A/B Testing", "Roadmapping"]
    },
    {
      degree: "B.Sc — Geology / Earth Science",
      university: "Fergusson College",
      duration: "2017 – 2020",
      kicker: "ACADEMIC FOUNDATION // SCIENCE",
      summary: "A science foundation that built the analytical, data-first, evidence-led thinking I now apply to product and growth decisions.",
      modules: ["Data Analysis", "Scientific Method", "Field Research", "Statistics", "Technical Reporting"]
    }
  ]
};
