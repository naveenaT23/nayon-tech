import React from "react";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, CheckCircle2, ChevronRight } from "lucide-react";
import { services } from "@/data/services";
import { Reveal } from "@/components/animations/Reveal";
import { Parallax } from "@/components/animations/Parallax";
import ScrollIndicator from "@/components/animations/ScrollIndicator";

interface PageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) return { title: "Service Not Found" };

  return {
    title: service.title,
    description: service.description,
  };
}

export default async function ServiceDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  return (
    <main>
      <header className="page-header" style={{ padding: "160px 0 80px", position: "relative", overflow: "hidden", backgroundColor: "#05060a" }}>
        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <Parallax offset={40}>
            <Reveal>
              <Link href="/services" className="btn btn-outline" style={{ display: "inline-flex", alignItems: "center", gap: "8px", marginBottom: "2rem", padding: "0.5rem 1rem" }}>
                <ArrowLeft size={16} /> Back to Services
              </Link>
            </Reveal>
            <Reveal delay={0.2}>
              <h1 style={{ fontSize: "3.5rem" }}>{service.title}</h1>
            </Reveal>
            <Reveal delay={0.4}>
              <div className="underline" style={{ width: "100px", margin: "1.5rem 0" }}></div>
            </Reveal>
            <Reveal delay={0.8}>
              <ScrollIndicator targetId="service-detail" className="relative" />
            </Reveal>
          </Parallax>
        </div>
      </header>

      <section id="service-detail">
        <div className="container">
          <div className="about-flex" style={{ alignItems: "flex-start", marginBottom: "6rem" }}>
            <div className="about-text" style={{ flex: 1.5 }}>
              <Reveal>
                <p style={{ fontSize: "1.25rem", color: "var(--white)", lineHeight: "1.8", marginBottom: "2rem" }}>
                  {service.description}
                </p>
              </Reveal>
              <Reveal delay={0.2}>
                <div style={{ 
                  background: "rgba(255,255,255,0.02)", 
                  padding: "2.5rem", 
                  borderRadius: "24px",
                  borderLeft: "4px solid var(--primary)",
                  marginBottom: "3rem"
                }}>
                  <p style={{ fontSize: "1.1rem", color: "var(--text-muted)", lineHeight: "1.8" }}>
                    {service.details}
                  </p>
                </div>
              </Reveal>

              <Reveal delay={0.6}>
                <div style={{ marginTop: "2rem" }}>
                  <Link href="/contact" className="btn btn-primary" style={{ padding: "1.2rem 3rem" }}>
                    Start Your Project
                  </Link>
                </div>
              </Reveal>
            </div>

            <div style={{ flex: 1 }}>
              <Reveal delay={0.3}>
                <Parallax offset={50} style={{ width: "100%" }}>
                  <div style={{ 
                    position: "relative", 
                    width: "100%", 
                    aspectRatio: "4/5", 
                    borderRadius: "32px", 
                    overflow: "hidden",
                    border: "1px solid var(--border-color)",
                    boxShadow: "0 20px 80px rgba(0, 242, 255, 0.1)"
                  }}>
                    <Image 
                      src={service.imageUrl} 
                      alt={service.imageAlt} 
                      fill 
                      className="object-cover"
                    />
                    <div style={{ 
                      position: "absolute", 
                      bottom: 0, 
                      left: 0, 
                      width: "100%", 
                      padding: "3rem", 
                      background: "linear-gradient(to top, rgba(5,6,10,0.9), transparent)" 
                    }}>
                      <div className="service-icon" style={{ width: "60px", height: "60px", fontSize: "30px", marginBottom: 0 }}>
                        {service.icon}
                      </div>
                    </div>
                  </div>
                </Parallax>
              </Reveal>
            </div>
          </div>

          <Reveal delay={0.4}>
            <div style={{ borderTop: "1px solid var(--border-color)", paddingTop: "6rem" }}>
              <h3 style={{ fontSize: "2.5rem", marginBottom: "3rem" }}>Our Core Offerings</h3>
              <div style={{ 
                display: "grid", 
                gridTemplateColumns: "repeat(3, 1fr)", 
                gap: "2rem"
              }} className="offerings-grid">
                {service.offerings.map((offering, i) => (
                  <div key={i} style={{ 
                    background: "rgba(255,255,255,0.02)",
                    padding: "2rem",
                    borderRadius: "16px",
                    border: "1px solid rgba(255,255,255,0.05)",
                    transition: "var(--transition-smooth)"
                  }} className="offering-item">
                    <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "1rem" }}>
                      <CheckCircle2 size={24} className="text-primary" />
                      <h4 style={{ color: "var(--white)", fontSize: "1.25rem", margin: 0 }}>{offering.title}</h4>
                    </div>
                    <p style={{ color: "var(--text-muted)", marginBottom: "1.5rem" }}>{offering.description}</p>
                    <Link href="/contact" style={{ 
                      color: "var(--primary)", 
                      fontWeight: "bold", 
                      fontSize: "0.9rem", 
                      textTransform: "uppercase",
                      display: "flex",
                      alignItems: "center",
                      gap: "6px"
                    }}>
                      Learn more <ChevronRight size={14} />
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section id="enterprise-solutions" style={{ position: "relative", padding: "120px 0", overflow: "hidden" }}>
        <div style={{ 
          position: "absolute", 
          top: 0, 
          left: 0, 
          width: "100%", 
          height: "100%", 
          zIndex: -1 
        }}>
          <Image 
            src="/enterprise_solutions_bg.png" 
            alt="Enterprise Network Background" 
            fill 
            className="object-cover"
            style={{ opacity: 0.45 }}
          />
          <div style={{ 
            position: "absolute", 
            top: 0, 
            left: 0, 
            width: "100%", 
            height: "100%", 
            background: "radial-gradient(circle at center, transparent 0%, rgba(5,6,10,0.9) 100%)" 
          }}></div>
        </div>
        <div className="container">
          <div style={{ 
            background: "rgba(255,255,255,0.03)", 
            padding: "5rem", 
            borderRadius: "40px", 
            border: "1px solid var(--border-color)",
            textAlign: "center",
            backdropFilter: "blur(10px)"
          }}>
            <Reveal>
              <h2 style={{ fontSize: "3rem", marginBottom: "1rem" }}>Enterprise Solutions</h2>
            </Reveal>
            <Reveal delay={0.2}>
              <h4 style={{ color: "var(--primary)", fontSize: "1.5rem", marginBottom: "2rem", fontStyle: "italic" }}>
                Ready to Scale Internationally?
              </h4>
            </Reveal>
            <Reveal delay={0.4}>
              <p style={{ 
                fontSize: "1.2rem", 
                color: "var(--text-muted)", 
                maxWidth: "800px", 
                margin: "0 auto 3rem",
                lineHeight: "1.8"
              }}>
                Deploy predictive digital marketing engines that operate systematically across borders. 
                Turn fractured international data into cohesive global strategy.
              </p>
            </Reveal>
            <Reveal delay={0.6}>
              <Link href="/contact" className="btn btn-outline" style={{ padding: "1.2rem 3rem", fontSize: "1.1rem" }}>
                View Global Marketing Solutions
              </Link>
            </Reveal>
          </div>
        </div>
      </section>
    </main>
  );
}
