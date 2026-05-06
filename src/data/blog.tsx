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
    slug: "ux-trends-next-generation",
    title: "Designing for the Next Generation: UX Trends",
    category: "UI/UX Design",
    date: "May 15, 2026",
    author: "Naveena Tirumalaraju",
    image: "/blog1.png",
    description: "Exploring how immersive interfaces and emotional design are shaping the future of digital products.",
    content: "The landscape of user experience design is shifting rapidly. As we move into 2026, the focus has moved beyond simple usability to immersive, emotional, and AI-integrated experiences. In this article, we explore the rise of spatial computing, micro-interactions, and how minimalist aesthetics are making a comeback in high-end digital products. We'll look at case studies from top-tier brands that are leveraging these trends to build deeper connections with their users."
  },
  {
    id: "2",
    slug: "data-driven-marketing-strategies",
    title: "Data-Driven Marketing: Beyond the Basics",
    category: "Digital Marketing",
    date: "April 28, 2026",
    author: "Naveena Tirumalaraju",
    image: "/blog2.png",
    description: "How to leverage advanced analytics and consumer behavior data to drive explosive brand growth.",
    content: "Data is the new oil, but only if you know how to refine it. Modern marketing requires a deep understanding of customer data platforms (CDPs) and predictive analytics. This guide covers how to move beyond basic demographics and into psychographic modeling and real-time conversion optimization. We discuss the importance of privacy-first data collection and how transparency can actually become a competitive advantage in your marketing strategy."
  },
  {
    id: "3",
    slug: "creative-era-of-ai",
    title: "The Creative Side of AI: A New Era",
    category: "AI Content",
    date: "April 10, 2026",
    author: "Naveena Tirumalaraju",
    image: "/blog3.png",
    description: "Discover how generative AI is empowering creators to push the boundaries of visual and written storytelling.",
    content: "Artificial Intelligence is not here to replace creators; it's here to augment them. Generative models like Midjourney, GPT-4o, and Sora are opening up possibilities that were previously locked behind massive budgets and technical barriers. This article showcases how small agencies are producing world-class visual content at lightning speed and why the 'human-in-the-loop' model is the secret to maintaining brand authenticity in an AI-driven world."
  },
  {
    id: "4",
    slug: "future-of-web-performance",
    title: "The Speed of Light: Future of Web Performance",
    category: "Web Development",
    date: "March 22, 2026",
    author: "Naveena Tirumalaraju",
    image: "/blog1.png",
    description: "Why performance is the ultimate feature and how modern frameworks are achieving sub-second load times.",
    content: "In a world of short attention spans, a 1-second delay can cost you a customer. Next.js and Turbopack are leading the charge in building websites that feel instantaneous. We dive deep into server components, edge computing, and optimized asset loading. Learn how Nayon Tech builds infrastructures that stay fast under heavy load and why performance optimization is one of the highest-ROI investments you can make for your digital presence."
  }
];
