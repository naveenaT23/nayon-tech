import { Code2, Palette, BrainCircuit, Megaphone, PenTool, Video } from "lucide-react";
import React from "react";

export interface Service {
  id: string;
  slug: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  details: string;
  imageUrl: string;
  imageAlt: string;
}

export const services: Service[] = [
  {
    id: "1",
    slug: "web-development",
    icon: <Code2 size={32} />,
    title: "Web Development",
    description: "Building ultra-fast, scalable web applications that deliver world-class user experiences.",
    details: "Our web development process is built on speed and security. We specialize in high-performance frameworks like Next.js and React to build everything from dynamic SaaS platforms to immersive creative portfolios. Every line of code is optimized for SEO and conversion, ensuring your business has a rock-solid digital foundation that scales with your ambition. We also offer cloud integration, API development, and e-commerce solutions tailored to your business needs.",
    imageUrl: "/service_web_dev.png",
    imageAlt: "Futuristic web development workstation with glowing code on monitors"
  },
  {
    id: "2",
    slug: "digital-marketing",
    icon: <Megaphone size={32} />,
    title: "Digital Marketing",
    description: "Data-driven strategies that amplify your brand reach and drive measurable growth.",
    details: "We don't just run ads; we engineer growth. Our digital marketing suite includes SEO, SEM, social media management, and performance marketing. By leveraging advanced analytics and consumer psychology, we create campaigns that cut through the noise and deliver high ROI. Our team focuses on customer acquisition cost (CAC) and lifetime value (LTV) to ensure sustainable business scaling.",
    imageUrl: "/service_marketing.png",
    imageAlt: "Modern digital marketing dashboard with growth metrics and social media icons"
  },
  {
    id: "3",
    slug: "ui-ux-design",
    icon: <Palette size={32} />,
    title: "UI/UX Design",
    description: "Creating intuitive, beautiful interfaces that prioritize user needs and brand identity.",
    details: "Great design is invisible. We focus on creating seamless user journeys that make using your product a delight. Our UI/UX process involves deep research, wireframing, prototyping, and rigorous testing. We blend high-end aesthetics with functional design systems to ensure consistency and usability across all platforms. From mobile apps to complex enterprise software, we design for the human behind the screen.",
    imageUrl: "/service_uiux.png",
    imageAlt: "Designer working on a sleek UI layout using a digital tablet"
  },
  {
    id: "4",
    slug: "logo-branding",
    icon: <PenTool size={32} />,
    title: "Logo & Branding",
    description: "Forging iconic brand identities that resonate with your audience and stand the test of time.",
    details: "Your brand is more than a logo; it's an experience. We help you define your voice, values, and visual identity. Our branding process covers everything from logo design and typography to brand guidelines and messaging strategy. We create cohesive brand ecosystems that build trust and loyalty. Whether you're a startup looking for a soul or an established company seeking a refresh, we help you stand out in a crowded market.",
    imageUrl: "/service_branding.png",
    imageAlt: "Professional branding concept sketches and minimalist logo designs"
  },
  {
    id: "5",
    slug: "video-editing",
    icon: <Video size={32} />,
    title: "Video Editing",
    description: "Crafting cinematic visual stories that capture attention and engage your audience.",
    details: "In a video-first world, quality content is king. Our video editing services transform raw footage into compelling narratives. We specialize in commercial ads, social media content, corporate videos, and motion graphics. With professional color grading, sound design, and seamless transitions, we ensure your videos look and feel high-end. We optimize content for every platform, from high-definition YouTube videos to viral TikTok and Reel formats.",
    imageUrl: "/service_video_editing.png",
    imageAlt: "Professional video editing suite with dual monitors and timeline editing"
  },
  {
    id: "6",
    slug: "ai-content-creation",
    icon: <BrainCircuit size={32} />,
    title: "AI Content Creation",
    description: "Leveraging cutting-edge AI to produce high-quality content at scale without losing brand soul.",
    details: "The future of content is augmented. We use state-of-the-art AI tools to streamline content production while maintaining a human-centric approach. From AI-generated imagery and copywriting to automated video scripts, we help you stay ahead of the curve. Our process ensures that AI-enhanced content remains authentic to your brand voice and meets the highest quality standards. Scale your content output without blowing your budget or sacrificing creativity.",
    imageUrl: "/service_ai_content.png",
    imageAlt: "Glowing AI brain visualization representing digital content creation"
  }
];
