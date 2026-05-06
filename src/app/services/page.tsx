import React from "react";
import { Reveal } from "@/components/animations/Reveal";
import ServiceCard from "@/components/services/ServiceCard";
import type { Metadata } from "next";
import { services } from "@/data/services";

export const metadata: Metadata = {
  title: "Services | Web Dev, Digital Marketing, UI/UX & AI Solutions",
  description: "Explore our comprehensive range of digital services, including high-end web development, digital marketing, UI/UX design, branding, video editing, and AI-powered content creation.",
  keywords: ["Web Development Services", "AI Content Creation", "UI/UX Design Portfolio", "Digital Marketing Agency Visakhapatnam"],
};

export default function ServicesPage() {
  return (
    <main>
      <header className="page-header">
        <div className="container">
          <Reveal>
            <h1>Our Expertise</h1>
          </Reveal>
          <Reveal delay={0.4}>
            <p style={{ color: "var(--text-muted)" }}>Harnessing future-ready technology to solve today&apos;s business challenges.</p>
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
                  slug={service.slug}
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
