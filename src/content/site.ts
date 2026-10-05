export interface NavigationItem {
  id: string;
  label: string;
  href: string;
  number: string;
}

export interface SiteIdentity {
  name: string;
  fullName: string;
  brandTitle: string;
  coreMotto: {
    line1: string;
    line2: string;
    line3: string;
    conclusion: string;
  };
  positioning: string;
  biography: string[];
  capabilities: {
    title: string;
    description: string;
    disciplines: string[];
  };
  approach: {
    step: string;
    label: string;
    description: string;
  }[];
  intersections: {
    left: string;
    middle: string;
    right: string;
    note: string;
  }[];
  socials: {
    platform: string;
    label: string;
    url: string;
  }[];
}

export const siteConfig: SiteIdentity = {
  name: "ARISTOS",
  fullName: "Dien El-Shaddai King Dien",
  brandTitle: "ARISTOS",
  coreMotto: {
    line1: "THINK DEEPLY.",
    line2: "RESEARCH PROPERLY.",
    line3: "WRITE CLEARLY.",
    conclusion: "MAKE IT MATTER."
  },
  positioning: "Research-driven copywriter, ghostwriter and content writer turning ideas, information and expertise into clear, compelling communication.",
  biography: [
    "I'm a research-driven Copywriter, Ghostwriter and Content Writer who turns ideas, information and expertise into clear, compelling communication.",
    "My work sits at the intersection of writing, research, storytelling and strategy. I write across copy, thought leadership, brand content, articles, scripts and digital communication, with a focus on understanding what a business or individual is really trying to say, and making that message resonate with the right audience.",
    "Through my work with Aristos Creative, I've developed copywriting, ghostwriting, storytelling, script writing and brand messaging projects across different voices, industries and communication needs. I research unfamiliar subjects, simplify complex information and shape ideas into writing that is purposeful, audience-aware and human.",
    "At Havilah AgroTech, I work across market strategy, research and content, developing research-driven communication around food systems, agricultural technology, food loss and market opportunities. I also develop LinkedIn thought leadership using research, statistics, editorial angles and storytelling, while contributing to brand positioning and broader communication strategy.",
    "I bring an interdisciplinary perspective shaped by business, technology, marketing, e-commerce and scientific research, alongside academic training in Biochemistry that has strengthened my research, analytical thinking and ability to communicate complex subjects with precision."
  ],
  capabilities: {
    title: "WRITING CAPABILITIES & DISCIPLINES",
    description: "Translating nuanced technical, commercial, and creative thoughts into high-resonance language.",
    disciplines: [
      "Copywriting",
      "Ghostwriting",
      "Content Writing",
      "B2B Content",
      "Brand Messaging",
      "Thought Leadership",
      "Storytelling",
      "Scriptwriting",
      "Strategic Communication",
      "Technical & Business Writing"
    ]
  },
  approach: [
    {
      step: "01",
      label: "RESEARCH",
      description: "Delve deep into unfamiliar domains, academic foundations, data points, and context."
    },
    {
      step: "02",
      label: "UNDERSTAND",
      description: "Extract the core objective: what is the founder, enterprise, or project genuinely trying to express?"
    },
    {
      step: "03",
      label: "FRAME",
      description: "Isolate the audience perspective, finding the tension and relevance that commands attention."
    },
    {
      step: "04",
      label: "THINK",
      description: "Synthesize business reality, scientific analysis, and narrative architecture into a unified angle."
    },
    {
      step: "05",
      label: "CREATE",
      description: "Draft with uncompromising precision, human rhythm, and distinct tonality."
    },
    {
      step: "06",
      label: "REFINE",
      description: "Strip superfluous ornamentation. Tighten the prose until every word earns its place."
    },
    {
      step: "07",
      label: "COMMUNICATE",
      description: "Deploy resonant messaging across thought leadership, scripts, editorial essays, and brand assets."
    }
  ],
  intersections: [
    {
      left: "BIOCHEMISTRY & SCIENCE",
      middle: "RESEARCH METHODOLOGY",
      right: "MARKET STRATEGY",
      note: "Biochemical training provides the rigor to analyze complex systems and evaluate evidence objectively."
    },
    {
      left: "TECHNOLOGY & AGROTECH",
      middle: "AUDIENCE TRANSLATION",
      right: "THOUGHT LEADERSHIP",
      note: "Transforming technical agricultural innovations and supply-chain logistics into compelling executive narratives."
    },
    {
      left: "BUSINESS & COMMERCE",
      middle: "STRATEGIC COMMUNICATION",
      right: "CREATIVE STORYTELLING",
      note: "Where commercial positioning meets cinematic scriptwriting and authentic human voice."
    }
  ],
  socials: [
    {
      platform: "LinkedIn",
      label: "Dien El-Shaddai King Dien",
      url: "https://www.linkedin.com/in/el-shaddai-dien-6227821bb"
    }
  ]
};

export const navigationItems: NavigationItem[] = [
  { id: "mind", label: "Mind", href: "#mind", number: "01" },
  { id: "words", label: "Words", href: "#words", number: "02" },
  { id: "intersection", label: "Intersection", href: "#intersection", number: "03" },
  { id: "work", label: "Work", href: "#work", number: "04" },
  { id: "thought", label: "Thought", href: "#thought", number: "05" },
  { id: "contact", label: "Contact", href: "#contact", number: "06" }
];
