import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/animations/Reveal";
import ScrollIndicator from "@/components/animations/ScrollIndicator";
import { Parallax } from "@/components/animations/Parallax";
import PageHeader3D from "@/components/animations/PageHeader3D";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio | Showcase of Innovative Digital Solutions",
  description: "Explore the diverse portfolio of Nayon Tech, featuring web development, e-commerce, construction, and fitness platforms.",
  keywords: ["Web Development Portfolio", "Digital Agency Case Studies", "Next.js Project Showcase", "Nayon Tech Projects"],
};

export default function PortfolioPage() {
  const projects = [
    {
      image: "/project1.png",
      title: "Naila Exim",
      description: "A comprehensive export-import platform for global trade and logistics management.",
      link: "https://naila-exim.netlify.app"
    },
    {
      image: "/project2.png",
      title: "Effortless Moonbeam",
      description: "A modern, high-performance SaaS landing page with advanced animations and clean UI.",
      link: "https://effortless-moonbeam-afc10e.netlify.app"
    },
    {
      image: "/project3.png",
      title: "Nesara Constructions",
      description: "Luxury construction and landscaping portfolio showcasing architectural excellence.",
      link: "https://nesaraconstructions-landescaping.netlify.app"
    },
    {
      image: "/service_web_dev.png",
      title: "Sunny Homestay",
      description: "A serene and inviting homestay booking platform designed for a seamless user experience.",
      link: "https://sunnyhomstay.netlify.app"
    },
    {
      image: "/service_uiux.png",
      title: "Sri Laxhmi Sugandalaya",
      description: "A premium e-commerce showcase for traditional fragrances and aromatic products.",
      link: "https://sri-laxhmi-sugandalaya.netlify.app"
    },
    {
      image: "/service_marketing.png",
      title: "Royal Fitness Gym",
      description: "Dynamic fitness center platform featuring workout plans, trainer profiles, and memberships.",
      link: "https://royalfitness-gym.netlify.app"
    }
  ];

  return (
    <main>
      <header className="page-header" style={{ position: "relative", overflow: "hidden", background: "transparent" }}>
        <PageHeader3D />
        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <Parallax offset={60}>
            <Reveal>
              <h1>Our Portfolio</h1>
            </Reveal>
            <Reveal delay={0.4}>
              <p style={{ color: "var(--text-muted)" }}>Showcasing our latest breakthroughs and collaborations.</p>
            </Reveal>
            <Reveal delay={0.8}>
              <ScrollIndicator targetId="portfolio-grid" className="relative" />
            </Reveal>
          </Parallax>
        </div>
      </header>

      <section id="portfolio-full">
        <div className="container">
            <div className="portfolio-grid">
              {projects.map((project, index) => (
                <Reveal key={index} delay={index * 0.2} height="100%">
                  <Parallax offset={20} style={{ height: "100%" }}>
                    <div className="project-card" style={{ height: "100%", display: "flex", flexDirection: "column" }}>
                      <div className="project-image">
                        <Image 
                          src={project.image} 
                          alt={project.title} 
                          width={600} 
                          height={400} 
                          className="object-cover w-full h-full"
                        />
                      </div>
                      <div className="project-content" style={{ flex: 1, display: "flex", flexDirection: "column" }}>
                        <h3 style={{ fontSize: "1.5rem", marginBottom: "0.5rem" }}>{project.title}</h3>
                        <p style={{ color: "var(--text-muted)", marginBottom: "1.5rem", flex: 1 }}>{project.description}</p>
                        <Link href={project.link} target="_blank" className="view-project">
                          View Project <ArrowRight size={14} style={{ display: "inline", marginLeft: "5px" }} />
                        </Link>
                      </div>
                    </div>
                  </Parallax>
                </Reveal>
              ))}
            </div>
        </div>
      </section>
    </main>
  );
}
