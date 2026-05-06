import React from "react";
import { Code2, Megaphone, Palette, PenTool, Video, BrainCircuit } from "lucide-react";
import { Reveal } from "@/components/animations/Reveal";
import ServiceCard from "@/components/services/ServiceCard";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services | Web Dev, Digital Marketing, UI/UX & AI Solutions",
  description: "Explore our comprehensive range of digital services, including high-end web development, digital marketing, UI/UX design, branding, video editing, and AI-powered content creation.",
  keywords: ["Web Development Services", "AI Content Creation", "UI/UX Design Portfolio", "Digital Marketing Agency Visakhapatnam"],
};

export default function ServicesPage() {
  const services = [
    {
      icon: <Code2 size={32} />,
      title: "Web Development",
      description: "High-performance, responsive websites and web applications built with the latest technologies.",
      details: "Our web development suite covers everything from simple landing pages to complex enterprise platforms. We utilize Next.js 14 and React to ensure your site is ultra-fast, SEO-optimized out of the box, and highly scalable. We also specialize in headless CMS integrations, custom API development, and secure payment gateway implementation (Stripe, PayPal, etc.). Every site we build is mobile-first and tested across all major browsers for a seamless experience.",
      imageUrl: "/service_web_dev.png",
      imageAlt: "High-tech web development workstation with coding environment"
    },
    {
      icon: <Megaphone size={32} />,
      title: "Digital Marketing",
      description: "Strategic growth campaigns and social media management to amplify your brand's digital presence.",
      details: "We don't just run ads; we build growth engines. Our digital marketing services include comprehensive SEO (Search Engine Optimization), PPC (Pay-Per-Click) management on Google and Meta, and strategic social media growth. We analyze consumer data to identify high-conversion opportunities and provide detailed weekly reports on ROI, traffic growth, and lead generation quality. Our goal is to turn every marketing dollar into sustainable business revenue.",
      imageUrl: "/service_marketing.png",
      imageAlt: "Digital marketing analytics dashboard with growth charts"
    },
    {
      icon: <Palette size={32} />,
      title: "UI/UX Designing",
      description: "User-centric design systems that combine stunning aesthetics with seamless functionality.",
      details: "Design at Nayon Tech is a fusion of science and art. We start with deep user research and journey mapping to understand your audience's pain points. From there, we build high-fidelity wireframes and interactive prototypes in Figma. Our design systems are modular, ensuring that as your product grows, the UI remains consistent and easy to maintain. We also conduct accessibility audits (WCAG) to ensure your product is usable by everyone.",
      imageUrl: "/service_uiux.png",
      imageAlt: "Modern UI/UX design workspace with mobile app layouts"
    },
    {
      icon: <PenTool size={32} />,
      title: "Logo & Branding",
      description: "Crafting iconic visual identities that resonate with your audience and define your brand.",
      details: "Your brand is your promise to your customer. We help you define that promise through iconic logo design, curated typography, and sophisticated color palettes. Beyond the logo, we provide a complete brand book that outlines your brand voice, imagery style, and usage guidelines. We also deliver full social media kits and stationery designs to ensure your brand looks premium across every touchpoint, both digital and physical.",
      imageUrl: "/service_branding.png",
      imageAlt: "Creative branding studio with logo sketches and brand books"
    },
    {
      icon: <Video size={32} />,
      title: "Video Editing",
      description: "Professional post-production and motion graphics to tell your brand story visually.",
      details: "In the age of short-form content, video is king. Our professional editors bring your raw footage to life with cinematic color grading, advanced sound design, and custom motion graphics. Whether you need high-energy social media Reels, polished corporate presentations, or high-conversion video ads, we deliver content that stops the scroll. We handle the entire post-production pipeline, including VFX, subtitling, and multi-format exporting.",
      imageUrl: "/service_video_editing.png",
      imageAlt: "Professional video editing suite with timeline and footage"
    },
    {
      icon: <BrainCircuit size={32} />,
      title: "AI Content Creation",
      description: "Leveraging generative AI to produce high-quality, data-driven content at scale.",
      details: "Harness the power of the AI revolution to scale your content production. We integrate advanced LLMs and image generation models into your workflow to produce high-quality blog posts, marketing copy, and visual assets in record time. Our team specializes in prompt engineering and fine-tuning custom models to ensure the AI-generated content maintains your unique brand voice and meets high editorial standards. Scale your output without scaling your overhead.",
      imageUrl: "/service_ai_content.png",
      imageAlt: "AI content creation hub with neural network visuals"
    }
  ];

  return (
    <main>
      <header className="page-header">
        <div className="container">
          <Reveal>
            <h1>Our Services</h1>
          </Reveal>
          <Reveal delay={0.4}>
            <p style={{ color: "var(--text-muted)" }}>End-to-end digital solutions for the modern era.</p>
          </Reveal>
        </div>
      </header>

      <section id="services-full">
        <div className="container">
          <div className="services-grid">
            {services.map((service, index) => (
              <Reveal key={index} delay={index * 0.1}>
                <ServiceCard 
                  icon={service.icon} 
                  title={service.title} 
                  description={service.description} 
                  details={service.details}
                  imageUrl={service.imageUrl}
                  imageAlt={service.imageAlt}
                />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
