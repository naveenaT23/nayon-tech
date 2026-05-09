import React from "react";
import Image from "next/image";
import { Reveal } from "@/components/animations/Reveal";
import ServiceCard from "@/components/services/ServiceCard";
import ScrollIndicator from "@/components/animations/ScrollIndicator";
import { Parallax } from "@/components/animations/Parallax";
import type { Metadata } from "next";
import { Suspense } from "react";
import Starfield from "@/components/animations/Starfield";
import Link from "next/link";
import { services } from "@/data/services";
import { ParallaxImage } from "@/components/animations/ParallaxImage";

export const metadata: Metadata = {
  title: "Expert AI & Web Services | High-Performance Tech Solutions",
  description: "Explore Nayon Tech's premium services: AI Automation, Next.js Development, UI/UX Design, and Data-Driven Marketing tailored for enterprise scale.",
  keywords: ["Web Development Services", "AI Content Creation", "UI/UX Design Portfolio", "Digital Marketing Agency Visakhapatnam"],
};

export default function ServicesPage() {
  return (
    <main>
      <header className="page-header" style={{ position: "relative", overflow: "hidden", backgroundColor: "#05060a" }}>
        <Suspense fallback={<div className="absolute inset-0" style={{ backgroundColor: "#05060a" }} />}>
          <Starfield />
        </Suspense>
        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <Parallax offset={60}>
            <Reveal>
              <h1>Elite Digital Services & AI Automation Hub</h1>
            </Reveal>
            <Reveal delay={0.4}>
              <p style={{ color: "var(--text-muted)" }}>Harnessing future-ready technology to solve today&apos;s business challenges.</p>
            </Reveal>
            <Reveal delay={0.8}>
              <ScrollIndicator targetId="services-full" className="relative" />
            </Reveal>
          </Parallax>
        </div>
      </header>

      <section id="services-full">
        <div className="container">
          <div className="services-grid">
            {services.map((service, index) => (
              <Reveal key={service.id} delay={index * 0.1} height="100%">
                <Parallax offset={20} style={{ height: "100%" }}>
                  <ServiceCard 
                    icon={service.icon} 
                    title={service.title} 
                    description={service.description} 
                    slug={service.slug}
                    imageUrl={service.imageUrl}
                    imageAlt={service.imageAlt}
                    offerings={service.offerings}
                    btnLabel={service.btnLabel}
                  />
                </Parallax>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="enterprise-cta" style={{ position: "relative", padding: "120px 0", overflow: "hidden" }}>
        <ParallaxImage 
          src="/enterprise_solutions_bg.png" 
          alt="Enterprise Network Background" 
          overlayOpacity={0.7}
        />
        <div className="container">
          <div style={{ 
            display: "flex", 
            flexDirection: "column", 
            alignItems: "center", 
            textAlign: "center",
            maxWidth: "900px",
            margin: "0 auto",
            background: "rgba(255,255,255,0.02)",
            padding: "4rem",
            borderRadius: "32px",
            backdropFilter: "blur(10px)",
            border: "1px solid rgba(255,255,255,0.05)"
          }}>
            <Reveal>
              <h2 style={{ fontSize: "2.5rem", marginBottom: "1.5rem" }}>Enterprise Solutions</h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p style={{ 
                fontSize: "1.25rem", 
                color: "var(--text-muted)", 
                lineHeight: "1.8",
                marginBottom: "2.5rem" 
              }}>
                Ready to Scale Internationally? Deploy predictive digital marketing engines that operate systematically across borders. 
                Turn fractured international data into cohesive global strategy.
              </p>
            </Reveal>
            <Reveal delay={0.4}>
              <Link href="/contact" className="btn btn-primary" style={{ padding: "1.2rem 3.5rem" }}>
                Talk to our Enterprise Experts
              </Link>
            </Reveal>
          </div>
        </div>
      </section>
    </main>
  );
}
