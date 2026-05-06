import React from "react";
import Image from "next/image";
import { Reveal } from "@/components/animations/Reveal";
import Counter from "@/components/animations/Counter";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Pioneering Digital Excellence",
  description: "Discover the story of Nayon Tech, our mission to empower businesses through technology, and meet our founder Naveena Tirumalaraju.",
  keywords: ["Nayon Tech Founder", "Naveena Tirumalaraju", "Digital Agency Mission", "Tech Innovation Visakhapatnam"],
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
      <header className="page-header">
        <div className="container">
          <Reveal>
            <h1>About Nayon Tech</h1>
          </Reveal>
          <Reveal delay={0.4}>
            <p style={{ color: "var(--text-muted)" }}>Pioneering the digital frontier since 2021.</p>
          </Reveal>
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
            
            <div className="founder-image" style={{ 
              flex: 1, 
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
          </div>
        </div>
      </section>
    </main>
  );
}
