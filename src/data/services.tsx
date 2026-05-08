import { Code2, Palette, BrainCircuit, Megaphone, Bot } from "lucide-react";
import React from "react";

export interface ServiceOffering {
  title: string;
  description: string;
}

export interface Service {
  id: string;
  slug: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  details: string;
  imageUrl: string;
  imageAlt: string;
  offerings: ServiceOffering[];
  btnLabel?: string;
}

export const services: Service[] = [
  {
    id: "1",
    slug: "web-development",
    icon: <Code2 size={32} />,
    title: "Web Development",
    description: "High-performance websites and web apps built on Next.js.",
    details: "From rapid prototypes to enterprise-grade platforms. Our web development process is built on speed, security, and scalability. We specialize in high-performance frameworks like Next.js and React to build everything from dynamic SaaS platforms to immersive creative portfolios.",
    imageUrl: "/service_web_dev.png",
    imageAlt: "Enterprise AI-driven web development and Next.js engineering workstation with holographic interfaces",
    offerings: [
      { title: "Web Development", description: "Custom React, Angular, and Next.js web applications." },
      { title: "WordPress Solutions", description: "Custom themes, plugins, and scalable CMS architectures." },
      { title: "E-commerce Stores", description: "High-converting stores on Shopify, WooCommerce & Magento." },
      { title: "Mobile Apps", description: "Native iOS/Android and Cross-platform (Flutter) development." },
      { title: "App Development", description: "Enterprise SaaS platforms and custom software solutions." },
      { title: "AI Web Integration", description: "Smart chatbots, recommendation engines, and LLM features." },
      { title: "AI Automation", description: "Automate workflows and business processes with intelligent bots." },
      { title: "Website Maintenance", description: "Keeping your digital assets secure, fast, and up-to-date." },
      { title: "AI-Powered UX", description: "Personalized user journeys and predictive interface adjustments." }
    ]
  },
  {
    id: "2",
    slug: "digital-marketing",
    icon: <Megaphone size={32} />,
    title: "Digital Marketing",
    description: "Data-driven strategies to scale your traffic and revenue.",
    details: "Traditional expertise meets modern AI acceleration. We don't just run ads; we engineer growth. Our digital marketing suite is designed to dominate the market by combining data-driven strategy with ML-powered insights.",
    imageUrl: "/service_marketing.png",
    imageAlt: "Digital marketing control center featuring AI-powered predictive analytics and data visualization",
    offerings: [
      { title: "SEO Optimization", description: "Comprehensive organic search strategy for long-term growth." },
      { title: "Local SEO", description: "Dominate local maps and 'near me' searches." },
      { title: "E-commerce SEO", description: "Drive sales with product and category optimization." },
      { title: "Enterprise SEO", description: "Scalable solutions for massive sites and detailed architecture." },
      { title: "Google LSA", description: "Get the Google Guarantee badge and pay per lead." },
      { title: "Predictive Analytics", description: "Forecast trends and customer behavior with ML." },
      { title: "Lead Generation", description: "Fuel your sales pipeline with high-quality leads." },
      { title: "Strategy Consulting", description: "CMO-level advice to dominate your market." },
      { title: "PPC Advertising", description: "ROI-focused campaigns on Google and Social platforms." },
      { title: "Social Media", description: "Engage your community and build brand loyalty." },
      { title: "Reporting & Data", description: "Turn complex analytics into clear, actionable dashboards." },
      { title: "App Marketing", description: "User acquisition and retention for mobile apps." },
      { title: "Email Marketing", description: "Automated flows that nurture leads into customers." },
      { title: "CRO", description: "Turn more visitors into customers with A/B testing." },
      { title: "Reputation Mgmt", description: "Protect and enhance your brand's online image." }
    ]
  },
  {
    id: "3",
    slug: "graphic-design",
    icon: <Palette size={32} />,
    title: "Graphic Design",
    description: "Brand identities, logos, and UI/UX that captivate.",
    details: "From static assets to dynamic motion graphics, powered by the latest design tech. We help you define your voice, values, and visual identity. Our branding process covers everything from logo design and typography to brand guidelines and messaging strategy.",
    imageUrl: "/service_uiux.png",
    imageAlt: "Premium UI/UX design studio with generative AI branding and holographic interface prototypes",
    offerings: [
      { title: "Product Design", description: "Physical and digital product design that solves real user problems." },
      { title: "UI/UX Design", description: "Intuitive interfaces and seamless user experiences for web and mobile." },
      { title: "Digital Product Design", description: "SaaS dashboards, app interfaces, and complex digital platforms." },
      { title: "Digital Assets", description: "Icon sets, stock photography, and virtual goods for your brand." },
      { title: "Generative AI Art", description: "Unique AI-generated illustrations, photos, and concepts." },
      { title: "Video Editing", description: "Professional editing for social reels, corporate videos, and ads." },
      { title: "Motion Graphics", description: "Animated logos and explainer videos that grab attention." },
      { title: "Logo & Branding", description: "Memorable identities that define your business." },
      { title: "Marketing Collaterals", description: "Brochures, flyers, and decks that sell." },
      { title: "Digital Banners", description: "High-CTR ad creatives for Google and Social." },
      { title: "Social Media Graphics", description: "Engaging visuals for your daily social content." },
      { title: "Brochure Design", description: "Print-ready assets for physical marketing." }
    ]
  },
  {
    id: "4",
    slug: "ai-automation",
    icon: <Bot size={32} />,
    title: "AI Automation & Consulting",
    description: "Intelligent agents and workflows to automate your business.",
    details: "We build custom GPTs, automate complex workflows, and deploy intelligent support bots that learn and grow with your business. Our AI consulting services help you identify the highest-impact opportunities for automation, saving you hundreds of hours of manual labor while improving accuracy and customer satisfaction.",
    imageUrl: "/service_ai_content.png",
    imageAlt: "Advanced AI automation hub deploying intelligent agents and custom GPT workflows for enterprise",
    offerings: [
      { title: "Custom GPT Development", description: "Bespoke AI models trained on your specific business data." },
      { title: "Workflow Automation", description: "Connecting your tools with intelligent, self-operating flows." },
      { title: "Intelligent Chatbots", description: "Next-gen support bots that handle complex queries naturally." },
      { title: "AI Strategy Consulting", description: "Expert guidance on integrating AI into your business model." },
      { title: "LLM Implementation", description: "Deploying Large Language Models for advanced text processing." },
      { title: "Automated Content Engines", description: "Scalable AI systems for high-quality content production." },
      { title: "AI Data Analysis", description: "Uncovering deep insights from your data using machine learning." },
      { title: "Predictive Modeling", description: "Forecasting future trends and behaviors with high accuracy." }
    ],
    btnLabel: "Automate Now"
  },
  {
    id: "5",
    slug: "ai-content-creation",
    icon: <BrainCircuit size={32} />,
    title: "AI Content Creation",
    description: "Scale your creative output with high-end generative AI solutions.",
    details: "We leverage state-of-the-art generative models to produce high-quality text, images, and video content at scale. From automated social media engines to personalized marketing copy, our AI content solutions help you maintain a consistent, world-class brand voice while significantly reducing production time and costs.",
    imageUrl: "/service_ai_content.png",
    imageAlt: "Professional AI content creation studio with holographic synthesis of text and visual media",
    offerings: [
      { title: "Generative Copywriting", description: "High-converting ad copy, blog posts, and product descriptions." },
      { title: "AI Image Synthesis", description: "Custom photorealistic and artistic visuals for any brand need." },
      { title: "AI Video Production", description: "Automated video content for reels, ads, and training modules." },
      { title: "Voice Synthesis", description: "Natural-sounding AI voiceovers in multiple languages and tones." },
      { title: "Content Personalization", description: "Dynamic content that adapts to individual user preferences." },
      { title: "Social Media Automation", description: "End-to-end AI pipelines for daily social content generation." }
    ]
  }
];
