export interface Project {
  id: string;
  number: string;
  title: string;
  client: string;
  period: string;
  category: string[];
  headline: string;
  description: string;
  context: string;
  execution: string[];
  deliverables: string[];
  image: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: "havilah-agrotech",
    number: "PROJECT / 01",
    title: "Havilah AgroTech",
    client: "Havilah AgroTech",
    period: "2024 — Present",
    category: [
      "Market Strategy",
      "Research",
      "Content",
      "Thought Leadership",
      "Food Innovation"
    ],
    headline: "Translating food systems logistics, agricultural technology, and post-harvest dynamics into high-impact communication.",
    description: "Developing research-driven communication around agricultural technology, tomato value chains, post-harvest food loss, and market dynamics. Formulating executive LinkedIn thought leadership backed by verifiable statistics and editorial perspective.",
    context: "Food systems across emerging markets face acute inefficiencies—such as post-harvest tomato value loss occurring before reaching consumers. Havilah AgroTech needed content and market strategy that speaks directly to agricultural investors, processors, and supply chain partners with scientific authority.",
    execution: [
      "Conducted domain research on perishable food logistics, solar dehydration, and processing efficiency.",
      "Engineered editorial thought leadership series for LinkedIn explaining systemic agricultural economics in accessible, gripping prose.",
      "Formulated messaging around product development, shelf-life extension, and agro-industrial innovation.",
      "Positioned the enterprise voice at the forefront of African agritech and food security dialogues."
    ],
    deliverables: [
      "Executive LinkedIn Thought Leadership",
      "Food Systems & Value-Chain Research Summaries",
      "Market Strategy & Brand Positioning Documentation",
      "B2B Agribusiness Content"
    ],
    image: "/src/assets/images/project_havilah_agrotech_1791208748696.jpg",
    featured: true
  },
  {
    id: "the-price-of-presence",
    number: "PROJECT / 02",
    title: "The Price of Presence",
    client: "Aristos Narrative Production",
    period: "2024",
    category: [
      "Scriptwriting",
      "Storytelling",
      "Dramatic Direction",
      "Narrative Arc"
    ],
    headline: "An exploratory dramatic script delving into human emotional economics, sacrifice, and modern connection.",
    description: "A screenplay and storytelling piece examining the hidden cost of physical and digital engagement, navigating the delicate space between solitude, ambition, and authentic presence.",
    context: "Crafted as an exercise in pacing, dialogue economy, and psychological realism. The project explores what individuals sacrifice to remain 'present' in hyper-accelerated modern environments.",
    execution: [
      "Developed screenplay structure, dialogue rhythms, and intimate scene transitions.",
      "Focused on the unspoken friction between creative dedication and relational availability.",
      "Balanced lyrical minimalism with grounded cinematic cadence."
    ],
    deliverables: [
      "Full Narrative Screenplay Draft",
      "Character Motivation & Thematic Bible",
      "Story Arc & Pacing Framework"
    ],
    image: "/src/assets/images/project_price_of_presence_1791208760170.jpg",
    featured: true
  },
  {
    id: "aristos-creative",
    number: "PROJECT / 03",
    title: "Aristos Creative",
    client: "Aristos Creative Platform",
    period: "2023 — Present",
    category: [
      "Copywriting",
      "Ghostwriting",
      "Storytelling",
      "Brand Messaging",
      "Editorial Strategy"
    ],
    headline: "Developing diverse editorial voices, strategic narratives, and human-centered brand communication.",
    description: "The founding platform for bespoke writing, ghostwriting, and narrative consulting. Helping founders, operators, and creators articulate what they truly mean and connect deeply with their target readership.",
    context: "Aristos Creative was established to counter commoditized, algorithmic copywriting by combining academic research rigor with narrative intuition.",
    execution: [
      "Produced multi-voice ghostwriting for founders and executives navigating industry transitions.",
      "Authored brand manifests, value propositions, and core messaging architectures.",
      "Crafted long-form essays examining philosophy, discipline, digital presence, and purpose."
    ],
    deliverables: [
      "Founder Ghostwriting Suites",
      "Brand Voice & Tonality Directives",
      "Strategic Narrative Blueprints",
      "Comprehensive Digital Copy Suites"
    ],
    image: "/src/assets/images/project_aristos_creative_1791208771405.jpg",
    featured: true
  }
];
