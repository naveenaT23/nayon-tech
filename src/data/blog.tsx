export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  description: string;
  content: string;
  category: string;
  date: string;
  image: string;
  author: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    slug: "ai-transformation-business-2026",
    title: "The AI Revolution: Reshaping Business Architecture in 2026",
    category: "AI & Strategy",
    date: "May 20, 2026",
    author: "Naveena Tirumalaraju",
    image: "/blog1.png",
    description: "How autonomous agents and generative models are becoming the backbone of modern enterprise operations.",
    content: "By mid-2026, AI has transitioned from a 'cool feature' to the fundamental architecture of successful businesses. At Nayon Tech, we've seen a 300% increase in demand for autonomous agent integration. This article explores how businesses are automating complex decision-making processes, personalizing customer journeys at scale, and why the role of the human operator is shifting from 'executor' to 'orchestrator'. We look at real-world examples of AI-driven efficiency gains in supply chain and customer service."
  },
  {
    id: "2",
    slug: "future-of-web-performance-optimization",
    title: "Beyond Speed: The New Era of High-Performance Web Apps",
    category: "Web Development",
    date: "May 12, 2026",
    author: "Naveena Tirumalaraju",
    image: "/blog2.png",
    description: "Next.js 16, Turbopack, and the death of loading spinners in the quest for the instantaneous web.",
    content: "The modern user no longer tolerates even a 500ms delay. With the release of Next.js 16 and the full stabilization of Turbopack, we are entering an era of 'Instantaneous Web'. This post dives deep into advanced caching strategies, partial pre-rendering (PPR), and how server actions are simplifying the data mutation lifecycle. We also discuss why performance is now the most important SEO factor for high-competition keywords in 2026."
  },
  {
    id: "3",
    slug: "premium-design-cyber-industrial-aesthetic",
    title: "Cyber-Industrial: The Visual Identity of the Future",
    category: "UI/UX Design",
    date: "May 05, 2026",
    author: "Naveena Tirumalaraju",
    image: "/blog3.png",
    description: "Why the fusion of neon accents, geometric grids, and glassmorphism is dominating premium tech branding.",
    content: "Visual trends go in cycles, and 2026 is the year of Cyber-Industrial design. This aesthetic blends the raw, functional look of industrial blueprints with the polished, futuristic glow of digital interfaces. We analyze why high-end tech firms are moving away from flat design and embracing depth, transparency, and vibrant neon accents. Learn how to implement these trends without sacrificing accessibility or page performance."
  },
  {
    id: "4",
    slug: "growth-engineering-vs-traditional-marketing",
    title: "Growth Engineering: Why Code is the New Ad Copy",
    category: "Digital Marketing",
    date: "April 28, 2026",
    author: "Naveena Tirumalaraju",
    image: "/blog1.png",
    description: "Transitioning from traditional advertising to technical marketing funnels that convert 5x better.",
    content: "Traditional 'spray and pray' advertising is dead. The winners in 2026 are 'Growth Engineers' who build technical funnels, interactive calculators, and personalized landing pages that react to user behavior in real-time. This article outlines the shift from marketing as a creative discipline to marketing as a technical science. We share our internal framework for building high-conversion funnels using data-driven triggers and automated lead scoring."
  }
];
