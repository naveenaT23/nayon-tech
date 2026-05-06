import React from "react";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import { services } from "@/data/services";
import { Reveal } from "@/components/animations/Reveal";

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
  const { slug } = params;
  const service = services.find((s) => s.slug === slug);
  if (!service) return { title: "Service Not Found" };

  return {
    title: service.title,
    description: service.description,
  };
}

export default function ServiceDetailPage({ params }: PageProps) {
  const { slug } = params;
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  const features = [
    "High-Performance Delivery",
    "Tailored Strategic Approach",
    "Expert Support & Maintenance",
    "Industry-Standard Best Practices",
    "Data-Driven Decision Making",
    "Scalable Architecture"
  ];

  return (
    <main>
      <header className="page-header" style={{ padding: "160px 0 80px" }}>
        <div className="container">
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
        </div>
      </header>

      <section id="service-detail">
        <div className="container">
          <div className="about-flex" style={{ alignItems: "flex-start" }}>
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

              <Reveal delay={0.4}>
                <h3>What We Offer</h3>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "1.5rem", marginTop: "1.5rem" }}>
                  {features.map((feature, i) => (
                    <div key={i} style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                      <CheckCircle2 size={20} className="text-primary" />
                      <span style={{ color: "var(--text-main)" }}>{feature}</span>
                    </div>
                  ))}
                </div>
              </Reveal>

              <Reveal delay={0.6}>
                <div style={{ marginTop: "4rem" }}>
                  <Link href="/contact" className="btn btn-primary" style={{ padding: "1.2rem 3rem" }}>
                    Start Your Project
                  </Link>
                </div>
              </Reveal>
            </div>

            <div style={{ flex: 1 }}>
              <Reveal delay={0.3}>
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
              </Reveal>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
