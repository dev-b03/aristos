export interface Insight {
  id: string;
  number: string;
  title: string;
  source: string;
  category: string;
  date: string;
  readTime: string;
  excerpt: string;
  fullBody: string[];
  url?: string;
  tags: string[];
}

export const insights: Insight[] = [
  {
    id: "purpose-is-not-a-discovery",
    number: "THOUGHT / 01",
    title: "Purpose Is Not a Discovery. It Is a Decision.",
    source: "Personal Reflection & Philosophy",
    category: "Thought Leadership",
    date: "LinkedIn Archive",
    readTime: "3 min read",
    excerpt: "We often treat purpose like a buried relic waiting to be unearthed by happenstance. In truth, purpose is forged through deliberate commitment, focus, and consistent action.",
    fullBody: [
      "We often treat purpose like a buried relic waiting to be unearthed by happenstance. We wait for an epiphany, an unexplainable lightning bolt that clarifies the next forty years.",
      "In truth, purpose is forged through deliberate commitment, focus, and consistent action. It is not an archaeological dig; it is architecture.",
      "When you choose what matters, commit to deep research, embrace the quiet discipline of craft, and refuse to be swayed by fleeting distractions, purpose emerges as the consequence of your decision.",
      "Think deeply. Research properly. Write clearly. Decide what matters and build relentlessly toward it."
    ],
    url: "https://www.linkedin.com/in/el-shaddai-dien-6227821bb",
    tags: ["Philosophy", "Discipline", "Mindset"]
  },
  {
    id: "offline-45-days",
    number: "THOUGHT / 02",
    title: "I Was Offline for 45 Days. There Was a Reason.",
    source: "Digital Presence & Mental Clarity",
    category: "Personal Essay",
    date: "LinkedIn Archive",
    readTime: "4 min read",
    excerpt: "Stepping away from the algorithmic feed isn't retreat; it is calibration. In the silence of forty-five days, the distinction between noise and genuine signal became sharp again.",
    fullBody: [
      "Stepping away from the algorithmic feed isn't retreat; it is calibration. In the silence of forty-five days, the distinction between noise and genuine signal became sharp again.",
      "Constant consumption tricks the brain into mistaking motion for progress. When you cut the constant influx of opinions, you are forced to confront your own original thoughts.",
      "What did I return with? A profound conviction that writing must be intentional. That research cannot be rushed through summaries. That true communication demands stillness before synthesis."
    ],
    url: "https://www.linkedin.com/in/el-shaddai-dien-6227821bb",
    tags: ["Intentionality", "Research", "Deep Work"]
  },
  {
    id: "tomato-value-chain",
    number: "THOUGHT / 03",
    title: "The Tomato Doesn't Lose Value on the Road.",
    source: "Havilah AgroTech Research",
    category: "AgroTech & Food Systems",
    date: "Havilah AgroTech Series",
    readTime: "4 min read",
    excerpt: "Post-harvest food loss in emerging supply chains is often blamed on bad roads. The deeper economic reality is a failure of distributed processing and timely value capture at harvest.",
    fullBody: [
      "Post-harvest food loss in emerging supply chains is often blamed on transit and infrastructure. But when you examine the value chain systematically, the loss begins long before the truck departs.",
      "Without decentralized preservation, solar drying, and rapid intermediate processing at the farm gate, perishable goods bleed margin every hour they sit waiting for transport.",
      "By reframing agricultural waste from a transportation dilemma into a processing and logistics challenge, we unlock viable commercial solutions for African smallholders and commercial processors alike."
    ],
    url: "https://www.linkedin.com/in/el-shaddai-dien-6227821bb",
    tags: ["Food Systems", "Supply Chain", "Market Strategy"]
  },
  {
    id: "digital-identity-architecture",
    number: "THOUGHT / 04",
    title: "The Architecture of Professional Positioning.",
    source: "Aristos Strategic Communication",
    category: "Strategic Communication",
    date: "LinkedIn Archive",
    readTime: "3 min read",
    excerpt: "A profile is not a digital resume. It is a spatial positioning document. What you omit speaks as loudly as what you foreground.",
    fullBody: [
      "A profile is not a digital resume. It is a spatial positioning document. What you omit speaks as loudly as what you foreground.",
      "Most professionals list duties when they should be articulating their intellectual intersection. The world doesn't need another generic writer; it needs minds capable of dissecting biochemistry, technology, and commerce, and rendering them in undeniable clarity."
    ],
    url: "https://www.linkedin.com/in/el-shaddai-dien-6227821bb",
    tags: ["Positioning", "Brand Strategy", "Writing"]
  }
];
