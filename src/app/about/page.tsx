import React from "react";
import Image from "next/image";
import { Reveal } from "@/components/animations/Reveal";
import Counter from "@/components/animations/Counter";
import ScrollIndicator from "@/components/animations/ScrollIndicator";
import { Parallax } from "@/components/animations/Parallax";
import PageHeader3D from "@/components/animations/PageHeader3D";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Nayon Tech | Leading AI & Tech Strategy Partners",
  description: "Learn how Nayon Tech empowers global innovators through elite AI automation, high-performance web development, and visionary digital strategy.",
};

export default function AboutPage() {
  const stats = [
    { target: 200, label: "Projects Done", suffix: "+" },
    { target: 50, label: "Happy Clients", suffix: "+" },
    { target: 5, label: "Years Experience", suffix: "+" },
    { target: 98, label: "Success Rate", suffix: "%" },
  ];

  return (
    <main>
      <header className="page-header" style={{ position: "relative", overflow: "hidden", background: "transparent" }}>
        <PageHeader3D />
        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <Parallax offset={60}>
            <Reveal>
              <h1>Expert AI Automation & Digital Strategy</h1>
            </Reveal>
            <Reveal delay={0.4}>
              <p style={{ color: "var(--text-muted)" }}>Pioneering the digital frontier since 2021.</p>
            </Reveal>
            <Reveal delay={0.8}>
              <ScrollIndicator targetId="mission" className="relative" />
            </Reveal>
          </Parallax>
        </div>
      </header>

      <section id="mission">
        <div className="container">
          <div className="about-flex">
            <div className="about-text">
              <Reveal>
                <h2>Our Mission</h2>
              </Reveal>
              <Reveal delay={0.2}>
                <p>At Nayon Tech, we believe that technology should be an enabler, not a barrier. Our mission is to provide businesses of all sizes with the tools they need to thrive in a digital-first world.</p>
              </Reveal>
              <Reveal delay={0.4}>
                <p>We specialize in bridging the gap between complex engineering and elegant user experiences. Whether it&apos;s AI-driven analytics or cloud-native infrastructure, we build for longevity and scale.</p>
              </Reveal>
            </div>
            
            <div className="stats-grid">
              {stats.map((stat, index) => (
                <Reveal key={index} delay={index * 0.1}>
                  <Counter target={stat.target} label={stat.label} suffix={stat.suffix} />
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section id="founder" style={{ background: "rgba(255,255,255,0.02)", borderTop: "1px solid var(--border-color)" }}>
        <div className="container">
          <div className="about-flex" style={{ flexDirection: "row-reverse" }}>
            <div className="about-text">
              <Reveal>
                <span className="hero-tagline" style={{ marginBottom: "1rem" }}>Our Leadership</span>
                <h2>Meet the Founder</h2>
              </Reveal>
              <Reveal delay={0.2}>
                <h3 style={{ color: "var(--primary)", marginTop: "1rem", marginBottom: "1.5rem" }}>Naveena Tirumalaraju</h3>
              </Reveal>
              <Reveal delay={0.4}>
                <p>Naveena Tirumalaraju is the visionary force behind Nayon Tech. With a deep passion for technology and a commitment to excellence, she founded this agency to help businesses navigate the complexities of the digital age.</p>
                <p>Under her leadership, Nayon Tech has grown into a hub for innovation, delivering state-of-the-art solutions that combine technical prowess with creative ingenuity.</p>
              </Reveal>
            </div>
            
            <Parallax offset={30} className="founder-parallax" style={{ flex: 1 }}>
              <div className="founder-image" style={{ 
                width: "100%", 
                aspectRatio: "1/1", 
                maxWidth: "400px", 
                borderRadius: "20px",
                position: "relative",
                overflow: "hidden",
                border: "1px solid var(--border-color)",
                boxShadow: "0 20px 40px rgba(0,0,0,0.4)"
              }}>
                <Image 
                  src="/founder.png" 
                  alt="Naveena Tirumalaraju - Founder of Nayon Tech" 
                  fill
                  className="object-cover"
                />
              </div>
            </Parallax>
          </div>
        </div>
      </section>

      <section id="global-reach" style={{ background: "rgba(0, 242, 255, 0.02)" }}>
        <div className="container">
          <div className="section-header">
            <h2>Global Reach</h2>
            <p style={{ color: "var(--primary)" }}>Partnering with innovators across the world.</p>
            <div className="underline"></div>
          </div>
          
          <div className="services-grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))" }}>
            {[
              { country: "India", flag: "🇮🇳", desc: "Our core engineering hub, delivering excellence from Visakhapatnam to the nation." },
              { country: "Singapore", flag: "🇸🇬", desc: "Driving fintech and AI innovation in the heart of Southeast Asia's tech capital." },
              { country: "USA", flag: "🇺🇸", desc: "Partnering with Silicon Valley startups and enterprises across the United States." }
            ].map((item, i) => (
              <Reveal key={i} delay={i * 0.2}>
                <div style={{ 
                  background: "rgba(255,255,255,0.03)", 
                  padding: "3rem 2rem", 
                  borderRadius: "24px", 
                  textAlign: "center",
                  border: "1px solid rgba(255,255,255,0.05)"
                }}>
                  <div style={{ fontSize: "4rem", marginBottom: "1.5rem" }}>{item.flag}</div>
                  <h3 style={{ fontSize: "1.8rem", marginBottom: "1rem" }}>{item.country}</h3>
                  <p style={{ color: "var(--text-muted)", fontSize: "1rem", lineHeight: "1.6" }}>{item.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
