export interface RoleExperience {
  id: string;
  role: string;
  company: string;
  period: string;
  category: string;
  summary: string;
  highlights: string[];
  tools: string[];
  featured?: boolean;
}

export interface ServicePillar {
  id: string;
  title: string;
  tag: string;
  description: string;
  deliverables: string[];
  icon: string;
}

export const portfolioData = {
  personal: {
    fullName: "Jeanette G. Gepiga",
    shortName: "Jeanette",
    roleTitle: "General Virtual Assistant",
    subtitle: "Executive Support & Business Operations Specialist",
    tagline: "Bridging executive vision with meticulous operational execution.",
    bioLead: "Administrative and Business Support Professional with over 8 years of combined experience across virtual assistance, administrative operations, customer support, web research, accounting, and business management.",
    bioBody: "Skilled in calendar coordination, online research, client communication, workflow organization, data management, and operational support for remote and client-facing teams. Recognized for maintaining organized processes, improving administrative efficiency, managing competing priorities, and delivering dependable support that enables business continuity and seamless day-to-day operations.",
    location: "Caloocan City, Philippines",
    email: "gepigajhean@gmail.com",
    phone: "+63 936 610 5329",
    availability: "Open to Remote Full-Time & Fractional Retainers",
    timezones: "Supporting US (EST/PST), UK/Europe (GMT/CET), and APAC (AEST/SGT)",
    resumeUrl: "/jeanette-gepiga-resume.pdf",
    photoUrl: "/jeanette.jpg",
  },

  stats: [
    { value: "8+", label: "Years Experience", detail: "Across administrative & business operations" },
    { value: "BSBA", label: "Financial Management", detail: "University of Caloocan City graduate" },
    { value: "6", label: "Industry Domains", detail: "Marketplaces, e-commerce, research, logistics" },
    { value: "100%", label: "Remote Reliability", detail: "Proactive communication & zero-error standards" },
  ],

  services: [
    {
      id: "executive-admin",
      title: "Executive Administrative Support",
      tag: "Calendar & Comms",
      description: "Comprehensive executive assistance that shields founders and leadership from operational clutter, preserving high-value focus time.",
      deliverables: [
        "Complex calendar & multi-timezone scheduling",
        "Executive inbox zero triage & response drafting",
        "Confidential document preparation & filing",
        "Meeting agenda creation & action-item follow-through"
      ],
      icon: "Calendar"
    },
    {
      id: "marketplace-ops",
      title: "Marketplace & Vendor Operations",
      tag: "Listings & RFPs",
      description: "Hands-on listing optimization, multi-platform vendor vetting, and swift RFP correspondence based on active marketplace experience.",
      deliverables: [
        "Vendor & venue data verification and vetting",
        "Digital marketplace listing publication & QA",
        "RFP inbox monitoring & initial review handling",
        "Cross-platform inventory and catalogue integrity"
      ],
      icon: "Store"
    },
    {
      id: "research-intelligence",
      title: "Web Research & Data Intelligence",
      tag: "Deep Search & QA",
      description: "Rigorous multi-source business research providing decision-makers with clean, structured, and fact-verified intelligence.",
      deliverables: [
        "In-depth online research from verified public databases",
        "Competitive landscape & directory compilation",
        "Lead validation & data enrichment in spreadsheets",
        "Synthesis of complex findings into clear briefs"
      ],
      icon: "Search"
    },
    {
      id: "business-finance",
      title: "Business Process & Financial Support",
      tag: "Accounting & Logistics",
      description: "Harnessing a formal financial management background to manage invoices, vendor accounts, order workflows, and operational records.",
      deliverables: [
        "Invoice reconciliation & accounts coordination",
        "Supplier follow-up and payment status tracking",
        "Order fulfillment & logistics scheduling",
        "Corporate record keeping & secretary governance"
      ],
      icon: "BarChart3"
    }
  ] as ServicePillar[],

  experiences: [
    {
      id: "offsite-exp",
      role: "Marketplace Team Virtual Assistant",
      company: "Offsite Experiences Inc.",
      period: "January 2025 – July 2026",
      category: "Virtual Assistance & Marketplaces",
      summary: "Spearheaded vendor/venue data verification and listing management across digital platforms while monitoring high-volume RFP inboxes.",
      highlights: [
        "Performed comprehensive online research to verify vendor and venue information, maintaining accurate marketplace records for business use.",
        "Published detailed vendor and venue listings while ensuring consistency, completeness, and data accuracy across digital platforms.",
        "Reviewed all incoming RFP emails in the Marketplace inbox to ensure timely routing and client engagement.",
        "Monitored active priorities, anticipated deadlines, and delivered administrative support that kept projects progressing on schedule."
      ],
      tools: ["Marketplace CMS", "Email & RFP Inbox", "Google Workspace", "Spreadsheets", "Database QA"],
      featured: true
    },
    {
      id: "clothing-business",
      role: "Entrepreneur | Clothing Business Owner",
      company: "Independent Fashion Business",
      period: "August 2023 – Present",
      category: "Business Operations & Ownership",
      summary: "Founded and scaled an independent apparel venture, overseeing end-to-end supply chain, customer service, inventory systems, and marketing.",
      highlights: [
        "Directed daily business operations including inventory planning, order fulfillment, supplier coordination, and logistics scheduling.",
        "Developed organized inventory, sales, and order tracking systems that improved operational visibility and record accuracy.",
        "Executed marketing activities by managing product listings, posting schedules, and customer engagement across digital channels.",
        "Delivered responsive customer service while ensuring transactions, inquiries, and business communications were completed professionally."
      ],
      tools: ["Inventory Systems", "Logistics & Shipping", "E-Commerce", "Customer Relations", "Financial Tracking"],
      featured: true
    },
    {
      id: "cybersoft",
      role: "Web Research Specialist",
      company: "Cybersoft Content Services Inc.",
      period: "March 2022 – July 2023",
      category: "Research Intelligence & QA",
      summary: "Executed exhaustive online research across trusted enterprise sources, delivering verified and structured data for key business decisions.",
      highlights: [
        "Conducted in-depth online research using multiple trusted sources to produce reliable business information.",
        "Validated, organized, and documented research findings within internal systems to support operational requirements.",
        "Balanced multiple research assignments while consistently meeting rigorous quality targets and tight deadlines.",
        "Supplied verified information that directly contributed to executive business decisions and successful project completions."
      ],
      tools: ["Enterprise Search", "Data Validation", "Spreadsheets", "Internal CMS", "Reporting"],
      featured: false
    },
    {
      id: "collective-solution",
      role: "Chat and Email Support Representative",
      company: "Collective Solution",
      period: "October 2020 – January 2021",
      category: "Client Experience & Support",
      summary: "Delivered empathetic, prompt, and solution-oriented omnichannel customer support, upholding superior communication metrics.",
      highlights: [
        "Delivered professional customer support through chat and email while maintaining excellent response quality and communication standards.",
        "Resolved customer concerns efficiently through clear communication, timely follow-up, and solution-focused interactions.",
        "Strengthened customer satisfaction by providing prompt, courteous, and consistent assistance across multiple inquiries."
      ],
      tools: ["Live Chat Systems", "Email Helpdesk", "CRM", "Ticketing Platforms", "Conflict Resolution"],
      featured: false
    },
    {
      id: "geomaster",
      role: "Co-Owner | Corporate Secretary",
      company: "Geomaster Travel and Tours Inc.",
      period: "May 2018 – June 2020",
      category: "Corporate Administration & Governance",
      summary: "Oversaw corporate documentation, board communications, and statutory administrative requirements for a travel company.",
      highlights: [
        "Oversaw corporate administrative activities while maintaining organized business records and operational documentation.",
        "Coordinated internal communications, scheduled meetings, and facilitated day-to-day administrative requirements for business operations.",
        "Supported executive decision-making by conducting research, preparing information, and maintaining accurate administrative records."
      ],
      tools: ["Corporate Governance", "Executive Scheduling", "Legal & Business Documentation", "Meeting Minutes"],
      featured: false
    },
    {
      id: "plums-boons",
      role: "Accounting Staff",
      company: "Plums and Boons Transport",
      period: "January 2016 – February 2018",
      category: "Financial Administration",
      summary: "Managed day-to-day accounting records, client/supplier invoicing, and payment reconciliation with extreme attention to detail.",
      highlights: [
        "Maintained financial records and ensured precision in all ledger entries and transactions.",
        "Coordinated with clients and suppliers on payments, invoices, and account reconciliation.",
        "Supported daily operational and administrative tasks requiring close attention to detail and compliance."
      ],
      tools: ["Financial Ledgers", "Invoicing & Billing", "Supplier Accounts", "Microsoft Excel"],
      featured: false
    }
  ] as RoleExperience[],

  education: {
    degree: "Bachelor of Science in Business Administration",
    major: "Major in Financial Management",
    institution: "University of Caloocan City",
    years: "2011 – 2016",
    summary: "Comprehensive academic foundation in financial systems, business analysis, operational management, and administrative protocol."
  },

  certifications: [
    { title: "Calendar Management", focus: "Multi-Timezone Executive Scheduling" },
    { title: "Project Management Basics", focus: "Task Prioritization & Milestones" },
    { title: "Data Entry & Data Organization", focus: "Data Hygiene & Validation" },
    { title: "Email Handling & Communication", focus: "Inbox Zero & Client Protocol" },
    { title: "Social Media Management", focus: "Listing Schedules & Audience Engagement" },
    { title: "Task Prioritization & Workflow", focus: "Process Optimization & Continuity" }
  ],

  coreStrengths: [
    "Executive Administrative Support",
    "Operational Coordination",
    "Calendar Management",
    "Client Relationship Management",
    "Workflow Optimization",
    "Business Process Support",
    "Research Intelligence",
    "Documentation Management",
    "Customer Experience Excellence",
    "Cross-Functional Communication"
  ],

  softwareSkills: [
    {
      category: "Office & Productivity",
      skills: ["Microsoft Office Suite (Excel, Word, PowerPoint, Outlook)", "Google Workspace (Drive, Docs, Sheets, Slides, Forms, Meet)"]
    },
    {
      category: "Operations & Marketplaces",
      skills: ["Marketplace Listing Platforms", "Vendor & Venue Verification CMS", "Inventory & Order Tracking Systems"]
    },
    {
      category: "Communications & Helpdesk",
      skills: ["Email Management & RFP Monitoring", "Live Chat & Omnichannel Support", "CRM & Customer Communication Portals"]
    },
    {
      category: "Research & Data Management",
      skills: ["Online Research Databases", "Data Organization & Cleaning", "Financial Transaction Records & Invoicing"]
    }
  ],

  processSteps: [
    {
      step: "01",
      title: "Operational Discovery",
      description: "We identify your current pain points, repetitive time-drains, and administrative bottlenecks to establish exact operational priorities."
    },
    {
      step: "02",
      title: "Access & System Protocol",
      description: "A smooth, secure handover of essential tools, communication channels, and standard operating procedures (SOPs)."
    },
    {
      step: "03",
      title: "Daily Cadence & Execution",
      description: "Proactive calendar defense, inbox triage, marketplace maintenance, and structured task completion with steady end-of-day updates."
    },
    {
      step: "04",
      title: "Refinement & Scale",
      description: "Continuous workflow enhancements, template creation, and system optimizations that save leadership dozens of hours every month."
    }
  ]
};
