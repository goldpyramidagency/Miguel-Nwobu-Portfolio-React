import { Project, LabExperiment, FAQItem, InsightArticle } from '../types';

export const PROJECTS: Project[] = [
  {
    id: 'classic-kids-care',
    tag: 'Classic Kids Care · Skincare',
    title: 'From ₦12M to ₦30M Monthly Revenue on a Fixed Ad Budget',
    subtitle: "Scaling an organic children's skincare brand past its revenue ceiling through WooCommerce migration and the OPTIMISATION™ Framework.",
    image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=1200&q=80',
    alt: "Classic Kids Care organic children's skincare range",
    category: "Organic Children's Skincare & E-commerce",

    // WordPress ACF Custom Fields:
    client_name: 'Classic Kids Care',
    business_industry: "Organic Children's Skincare & Retail",
    project_date: 'Jan 2024 — Apr 2024',
    project_url: 'https://classickidscare.com',
    role: 'Growth Strategist & Systems Architect',

    metrics: [
      { label: 'Monthly Revenue', value: '₦30M' },
      { label: 'Revenue Growth', value: '+150%' },
      { label: 'ROAS', value: '18.7x' }
    ],
    overview: "Classic Kids Care makes organic skincare for children, built on a secret formula and packaged as a premium product. Founded by Mrs Nma Adua, the brand grew from a single room into a headquarters in Lekki, Lagos, with over 1,000 repeat customers across Nigeria and the diaspora.",
    challenge: "The brand hit a recurring revenue ceiling at ₦12M/month, only breaking past it briefly during aggressive discount sales campaigns before sliding back. The company goal was to push that ceiling past ₦30M per month on a fixed marketing ad budget of ₦1M.",
    solution: "Executed the OPTIMISATION™ Framework: migrated the web store from Shopify to custom WordPress + WooCommerce to cut platform fees without compromising conversion; identified a single winning hero product targeting child skin discomfort; created 60+ split-tested Meta ad creatives; and established automated WhatsApp sales team scripts.",
    results: [
      'Month 1: ₦16M → Month 2: ₦24M → Month 3: ₦30M monthly revenue reached',
      'Generated ₦30M in monthly revenue on ₦1.6M total ad spend (18.7x ROAS)',
      'Return customers accounted for 30% of total monthly sales',
      'Studio-shot narrator advert outperformed all influencer and UGC creatives tested'
    ],
    deliverables: [
      'Custom WordPress & WooCommerce Rebuild',
      'Hero-Product WhatsApp Funnel & Sales Scripts',
      '60+ Split-Tested Meta & PPC Ad Creatives',
      'Regional Distribution Partner Onboarding'
    ],
    techStack: ['WordPress', 'WooCommerce', 'Meta Ads Manager', 'Google Ads', 'WhatsApp Business API', 'Google Analytics 4']
  },
  {
    id: 'kenkeputa-vendorizeme',
    tag: 'Vendorizeme · Marketplace',
    title: '400+ Vendor Signups in 4 Months with Zero Paid Ad Spend',
    subtitle: 'Solving the chicken-and-egg marketplace dilemma for an event planning discovery platform through organic authority and narrow-scope targeting.',
    image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1200&q=80',
    alt: 'Vendorizeme event planning and vendor marketplace',
    category: 'Event Marketplace & Supply Acquisition',

    // WordPress ACF Custom Fields:
    client_name: 'Kenkeputa (Vendorizeme)',
    business_industry: 'Event Planning & Vendor Discovery Marketplace',
    project_date: 'Jan 2025 — Apr 2025',
    project_url: 'https://vendorizeme.com',
    role: 'Marketplace Growth Lead & Organic Strategist',

    metrics: [
      { label: 'Vendor Signups', value: '400+' },
      { label: 'Paid Ad Spend', value: '₦0 / $0' },
      { label: 'Acquisition Window', value: '4 Months' }
    ],
    overview: "Vendorizeme launched in early 2025 with a simple premise: make it effortless to plan any event by connecting hosts with the right vendors (birthdays, weddings, graduations, baby showers). As a two-sided marketplace, it faced the classic chicken-and-egg problem on day one.",
    challenge: "Building vendor supply and host demand simultaneously across North America with zero paid advertising budget and no existing brand awareness.",
    solution: "Narrowed execution scope strictly by geography and vendor categories. Built organic authority via App Store Optimization (ASO), long-form SEO blog clusters, targeted Facebook group engagement, and a curated Pinterest host hub.",
    results: [
      '400+ verified vendor signups and business profiles created in 4 months',
      'Zero dollars spent on paid acquisition or boosted social posts',
      'Established organic search authority across key US event planning queries',
      'Demonstrated that organic compounding trust closes marketplace supply gaps faster than paid ads'
    ],
    deliverables: [
      'Vendorizeme Web Platform & ASO Copywriting',
      'State-by-State Vendor Onboarding Playbook',
      'Event Host Organic Content & Pinterest Engine',
      'Amplitude Marketplace Funnel Telemetry'
    ],
    techStack: ['WordPress REST API', 'Amplitude Analytics', 'Google Analytics 4', 'Ahrefs', 'Pinterest Analytics', 'Google Sheets Engine']
  },
  {
    id: 'yipeebet-igaming',
    tag: 'YipeeBet · iGaming',
    title: 'Scaling a Zero-to-One iGaming Platform to 60,000 Users in 4 Months',
    subtitle: 'Engineering rapid acquisition, alternative media channels, and player retention for a brand-new casino platform in a hyper-competitive market.',
    image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=1200&q=80',
    alt: 'YipeeBet casino and leisure gaming platform',
    category: 'iGaming & FinTech Entertainment',

    // WordPress ACF Custom Fields:
    client_name: 'YipeeBet (Aftech Group)',
    business_industry: 'iGaming & Consumer Entertainment',
    project_date: 'Jun 2024 — Oct 2024',
    project_url: 'https://yipeebet.com',
    role: 'Go-To-Market & Growth Architect',

    metrics: [
      { label: 'Acquired Users', value: '60,000' },
      { label: 'OPay Channel Share', value: '80%+' },
      { label: 'Launch Budget', value: '₦400k' }
    ],
    overview: "YipeeBet is a casino and leisure gaming platform launched in Lagos, Nigeria under parent company Aftech. Launched in June 2024, this was a zero-to-one product in a market with over 50 established competitors including SportyBet and 1xBet.",
    challenge: "Validating the platform and reaching 60,000 active users in 4 months on a lean initial launch budget of ₦400k while navigating strict ad platform policy regulations.",
    solution: "Pioneered unconventional ad placements on OPay (Nigeria's leading payment platform), which competitors overlooked. Combined with X micro-influencer campaigns, daily login engagement incentives, automated SMS re-activation, and a custom real-time telemetry dashboard.",
    results: [
      'Scaled from 0 to 60,000 active users in 4 months',
      'OPay ad placement emerged as the primary growth driver, accounting for >80% of total acquisition',
      'Maintained 100% ad platform compliance with zero account restrictions or bans',
      'Strong player retention maintained through structured login bonus mechanics'
    ],
    deliverables: [
      'Go-To-Market Brand Identity & Mascot System',
      'OPay & Meta Paid Acquisition Funnels',
      'Real-time Telemetry & Player Analytics Dashboard',
      'Micro-Influencer Roster & Referral Mechanics'
    ],
    techStack: ['WordPress Headless', 'Custom Real-time Dashboard', 'OPay Ads Network', 'Meta Ads Manager', 'SMS Gateway API', 'Google Analytics 4']
  }
];

export const LAB_EXPERIMENTS: LabExperiment[] = [
  {
    id: 'exp-01',
    number: 'Experiment 01',
    title: 'Algorithmic SEO Systems',
    description: 'Automating content gap analysis using custom LLM agents to map search intent clusters in real-time.',
    tags: ['LLM Agents', 'Programmatic SEO', 'Python', 'Intent Clustering'],
    interactiveType: 'seo',
    fullContent: 'By pairing Google Gemini models with vector search databases, we evaluate competitor rankings, extract semantic gap clusters, and generate optimized article structures in under 3 seconds per keyword set.'
  },
  {
    id: 'exp-02',
    number: 'Experiment 02',
    title: 'Predictive LTV Models',
    description: 'Building real-time dashboards that forecast user value based on day-zero behavior signals.',
    tags: ['Machine Learning', 'LTV Forecasting', 'BigQuery', 'React'],
    interactiveType: 'ltv',
    fullContent: 'Analyzing early user interaction vectors (time-to-first-key-action, device type, referral path) allows us to bid up to 300% more aggressively on high-LTV cohorts on Day 1.'
  },
  {
    id: 'exp-03',
    number: 'Experiment 03',
    title: 'Multi-Touch Attribution Engine',
    description: 'First-party cookieless attribution tracking for complex omnichannel buyer journeys.',
    tags: ['Server-Side Tracking', 'PostgreSQL', 'Attribution', 'First-Party Data'],
    interactiveType: 'attribution',
    fullContent: 'Combines Markov chain path analysis with impression decay modeling to accurately attribute conversion lift across paid social, podcast, and direct organic channels.'
  },
  {
    id: 'exp-04',
    number: 'Experiment 04',
    title: 'Growth Audit AI Simulator',
    description: 'An interactive diagnostic tool simulating CAC-to-LTV ratio bottlenecks across funnel stages.',
    tags: ['Diagnostic AI', 'Funnel Optimization', 'Growth Ops'],
    interactiveType: 'audit',
    fullContent: 'Input your metrics (traffic, opt-in rate, sales conversion, churn) to instantly identify your primary constraint and receive an actionable growth roadmap.'
  }
];

export const INSIGHTS: InsightArticle[] = [
  {
    id: 'composure-as-weapon',
    slug: 'composure-is-a-weapon-scaling-paid-channels',
    date: 'OCTOBER 14, 2024',
    title: "The Best Marketing Isn't Louder. It's More Relevant.",
    readTime: '8 MIN READ',
    snippet: 'A deep dive into why relevance is the only metric that truly scales in the modern attention economy.',
    category: 'Growth Strategy',
    tags: ['Paid Media', 'Conversion', 'Performance Marketing', 'SEO Strategy'],
    featuredImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDhygYNTw19hhxx9Y3zSOga7XLp_BXabo5nvmEJnlPY466xXjaRTvDAG52g6pSsT6fM_JrjTlMmhtzhuyaGLRPGQZp-SwHfIYOnIY1VvHq04wR8dhZreQv_hJo1WSCF7qYy1nh9c22EC22MQn1JR7KBD3sR1kK24KGM9NSK4OiDaCoaA2pTCawmGu29X8NyCTMFoLpazOeHdN3c5oj55kUuNZybkQN24HxhDIg6Hu2wB70vCxuqtkYVejxV949w3zGenWDlKqjULw',
    author: {
      name: 'Miguel Nwobu',
      role: 'Growth Director & Systems Architect',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&auto=format&fit=crop&q=80',
      bio: 'Miguel Nwobu is a full-stack growth marketer and digital strategist with 12+ years of experience engineering $50M+ revenue pipelines across 24+ countries.'
    },
    keyTakeaway: 'In an era where every brand has a megaphone, volume is no longer a competitive advantage. The digital landscape is saturated with noise—relevance is the only compound asset.',
    content: `Most marketing focuses on generating more clicks. I focus on building systems that generate measurable business growth. My work combines growth strategy, performance marketing, user experience, search optimisation, analytics, and conversion psychology into one connected system.`,
    sections: [
      {
        heading: 'Signal Over Noise in the Attention Economy',
        body: 'In an era where every brand has a megaphone, volume is no longer a competitive advantage. The digital landscape is saturated with noise—endless notifications, ubiquitous retargeting, and a relentless barrage of content designed to capture attention at any cost. But attention is fleeting; relevance is enduring. The prevailing wisdom often equates reach with resonance. It assumes that if you shout loud enough, eventually, the right people will hear you. This is the brute-force approach to performance marketing. It is inefficient, expensive, and ultimately alienating.'
      },
      {
        heading: 'The Psychology of Conversion: Why Users Really Click',
        body: 'Conversion is not a mechanical act; it is a psychological threshold. Users do not click because a button is perfectly rounded or because the copy uses a specific power word. They click because they recognize their own problem reflected in your solution.',
        quote: 'Composure is a weapon. In marketing, composure means resisting the urge to speak to everyone, so you can clearly speak to someone.'
      },
      {
        heading: 'Search as a Compound Asset',
        body: 'Consider search optimisation. It is often treated as a tactical game of keyword density and backlink acquisition. But at its core, search is the ultimate expression of relevance. When someone types a query into a search engine, they are articulating a specific need.',
        listItems: [
          'Intent Alignment: Aligning your content perfectly with the user’s underlying intent, not just the literal keyword string.',
          'Authority Building: Demonstrating deep, undeniable expertise that search algorithms and human readers both recognize as definitive.',
          'Frictionless Experience: Ensuring that once the user arrives, the pathway to resolving their query is immediately obvious and technically flawless.'
        ]
      }
    ]
  },
  {
    id: 'death-of-third-party-cookies',
    slug: 'architecting-server-side-tracking-post-cookie-era',
    date: 'AUGUST 28, 2024',
    title: 'Architecting Server-Side Tracking for the Post-Cookie Era',
    readTime: '8 MIN READ',
    snippet: 'How first-party data warehouses and server-side CAPI setups recover up to 35% lost conversion signals.',
    category: 'Analytics & Data',
    tags: ['Server-Side CAPI', 'Meta Ads', 'GA4', 'Privacy Engine'],
    featuredImage: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&auto=format&fit=crop&q=80',
    author: {
      name: 'Miguel Nwobu',
      role: 'Growth Director & Systems Architect',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&auto=format&fit=crop&q=80',
      bio: 'Miguel Nwobu is a full-stack growth marketer and digital strategist with 12+ years of experience engineering $50M+ revenue pipelines across 24+ countries.'
    },
    keyTakeaway: 'Client-side pixel tracking loses 20-35% of events due to ad-blockers and browser privacy features. Server-side event mesh bridges the signal loss.',
    content: `Client-side pixel tracking loses 20-35% of events due to ad-blockers and browser privacy features. Implementing server-side Meta CAPI and Google Measurement Protocol via Cloudflare Workers ensures pristine signal fidelity.`,
    sections: [
      {
        heading: 'The Signal Decay Problem',
        body: 'With iOS 14.5+, ITP 2.3, and ad blockers used by over 40% of tech-savvy audiences, relying strictly on client-side JS pixels is financial negligence. Ad platforms lose feedback signals, causing algorithmic bidding algorithms to decay into random walk behavior.'
      },
      {
        heading: 'Designing a First-Party Event Mesh',
        body: 'By routing browser events to a dedicated server endpoint (e.g. tracking.yourdomain.com), we scrub PII, enrich data with server session IDs, and forward hashed telemetry straight to Meta, Google, and TikTok APIs in under 12ms.'
      }
    ]
  },
  {
    id: 'day-zero-ltv',
    slug: 'math-behind-day-zero-ltv-prediction',
    date: 'JUNE 12, 2024',
    title: 'The Math Behind Day-Zero LTV Prediction',
    readTime: '5 MIN READ',
    snippet: 'Predicting 12-month customer lifetime value using micro-conversion signals within the first 10 minutes of onboarding.',
    category: 'Data Science & LTV',
    tags: ['LTV Modeling', 'Machine Learning', 'BigQuery', 'Predictive Bidding'],
    featuredImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&auto=format&fit=crop&q=80',
    author: {
      name: 'Miguel Nwobu',
      role: 'Growth Director & Systems Architect',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&auto=format&fit=crop&q=80',
      bio: 'Miguel Nwobu is a full-stack growth marketer and digital strategist with 12+ years of experience engineering $50M+ revenue pipelines across 24+ countries.'
    },
    keyTakeaway: 'You cannot wait 90 days to evaluate CAC payback. Micro-conversion signals in the first 10 minutes reveal future value with 89% accuracy.',
    content: `You cannot wait 90 days to evaluate CAC payback. By training lightweight regression models on initial onboarding depth and activation velocity, you can predict cohort 12-month value with 89% accuracy on Day 1.`,
    sections: [
      {
        heading: 'Micro-Actions as Lead Indicators',
        body: 'Whether a user completes profile setup, connects a bank account, or completes a 3-step setup wizard within 10 minutes correlates directly with 12-month retention. We map these signals into algorithmic weights to adjust Google Search & Meta ad bids dynamically.'
      }
    ]
  }
];

export const FAQS: FAQItem[] = [
  {
    category: 'Engagement & Advisory',
    question: 'How do you structure your growth engagements?',
    answer: 'I partner with high-growth companies in two primary models: Fractional VP of Growth (hands-on architecture & team leadership for 3–6 months) or Dedicated Growth Audits & System Architecture (intensive 4-week sprint to rebuild your acquisition stack).'
  },
  {
    category: 'Experience & Scope',
    question: 'What industries do you specialize in?',
    answer: 'Over the last 12+ years, I have built growth engines across B2B SaaS, FinTech, High-Ticket E-commerce, Architectural/Botanical luxury, and Global Consumer Apps across 24+ countries.'
  },
  {
    category: 'Technical Stack',
    question: 'What tools and data stacks do you build with?',
    answer: 'My modern stack spans Google BigQuery, PostgreSQL, Python (data modeling & ML), Meta CAPI / Google Ads CAPI, GA4 Server-Side, Mixpanel, Looker Studio, custom React dashboards, and Gemini AI agents for content & intent scaling.'
  },
  {
    category: 'Timeline & Guarantee',
    question: 'How quickly do we see measurable impact?',
    answer: 'System audits identify immediate quick-wins in Week 1 (attribution fixes & leakage cleanup). Scaled campaign optimizations and channel expansion playbooks typically yield compounding returns within 30–60 days.'
  }
];

export const CV_DATA = {
  name: "Miguel Nwobu",
  title: "Full Stack Growth Marketer & Digital Strategist",
  location: "Global / Remote",
  experienceYears: "12+ Years",
  summary: "Performance Marketer and Digital Strategist with 12+ years of experience turning complex datasets into high-performing ecosystems. Delivered over $50M in attributed revenue across 200+ campaigns and 24+ countries.",
  skills: [
    "Performance Marketing & Media Buying",
    "Server-Side Attribution & Conversion APIs",
    "Algorithmic SEO & LLM Content Systems",
    "Data Analytics (BigQuery, SQL, Python)",
    "Conversion Rate Optimization (CRO)",
    "Funnel Architecture & Lead Gen Engines",
    "LTV & CAC Predictive Modeling",
    "Cross-Border Market Expansion"
  ],
  roles: [
    {
      period: "2021 — PRESENT",
      role: "Fractional Growth Director & Systems Architect",
      company: "Growth Engine Advisory",
      highlights: [
        "Architected $50M+ in attributed revenue across 24+ countries for enterprise & fintech scale-ups.",
        "Engineered server-side attribution engines recovering 35% missing conversion signals.",
        "Deployed AI-driven SEO gap analysis pipelines scaling organic revenue by 247%."
      ]
    },
    {
      period: "2017 — 2021",
      role: "Head of Growth & Acquisition",
      company: "Apex Digital Global",
      highlights: [
        "Managed $15M+ annual ad spend across Google, Meta, LinkedIn, and programmatic networks.",
        "Scaled customer acquisition from seed stage to Series B with 4.2x average ROAS.",
        "Built and led a high-performing international team of 14 performance marketers & data engineers."
      ]
    },
    {
      period: "2013 — 2017",
      role: "Senior Performance Strategist",
      company: "Nexus Media Group",
      highlights: [
        "Executed 100+ multi-channel paid acquisition campaigns across North America & EMEA.",
        "Pioneered multivariate CRO testing frameworks boosting average landing page conversion by 48%."
      ]
    }
  ]
};

