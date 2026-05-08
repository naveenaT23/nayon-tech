import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Code2, Palette, BrainCircuit, ArrowRight, Zap, Target, Award, Star } from "lucide-react";
import HeroCanvas from "@/components/animations/HeroCanvas";
import { Reveal } from "@/components/animations/Reveal";
import Counter from "@/components/animations/Counter";
import { Marquee } from "@/components/animations/Marquee";
import ServiceCard from "@/components/services/ServiceCard";
import ScrollIndicator from "@/components/animations/ScrollIndicator";
import { Parallax } from "@/components/animations/Parallax";
import { ParallaxImage } from "@/components/animations/ParallaxImage";
import { services } from "@/data/services";
import { blogPosts } from "@/data/blog";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nayon Tech | AI Automation & Next.js Development Agency",
  description: "Scale your business with futuristic AI automation, high-performance Next.js development, and world-class digital design from Nayon Tech's expert team.",
};

export default function Home() {
  const featuredServices = services;
  const recentNews = blogPosts.slice(0, 3);

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO, TechFlow",
      content: "Nayon Tech transformed our digital presence. Their attention to detail in UI/UX is simply unmatched.",
      rating: 5
    },
    {
      name: "Marcus Chen",
      role: "Marketing Director, Nexa",
      content: "The AI content solutions provided by Nayon Tech allowed us to scale our campaigns 10x in just two months.",
      rating: 5
    },
    {
      name: "Elena Rodriguez",
      role: "Founder, GreenSpace",
      content: "Incredible team and world-class development. They didn't just build a site; they built a brand experience.",
      rating: 5
    }
  ];

  const stats = [
    { target: 150, label: "Projects Completed", suffix: "+" },
    { target: 99, label: "Client Satisfaction", suffix: "%" },
    { target: 12, label: "Awards Won", suffix: "" },
    { target: 24, label: "Expert Creators", suffix: "" }
  ];

  return (
    <main>
      {/* Hero Section */}
      <section id="hero">
        <HeroCanvas />
        <div className="container hero-content">
          <Parallax offset={100}>
            <Reveal>
              <span className="hero-tagline">Innovation Meets Excellence</span>
            </Reveal>
            <Reveal delay={0.4}>
              <h1>Elite AI Automation & Next.js Development Agency</h1>
            </Reveal>
            <Reveal delay={0.6}>
              <p>We empower startups and enterprises with cutting-edge AI, cloud solutions, and digital transformation services designed for the next generation of business.</p>
            </Reveal>
            <Reveal delay={0.8}>
              <div className="hero-btns">
                <Link href="/contact" className="btn btn-primary">Get Started</Link>
                <Link href="/services" className="btn btn-outline">Our Services</Link>
              </div>
            </Reveal>
          </Parallax>
          <Reveal delay={1.2}>
            <ScrollIndicator targetId="services-brief" />
          </Reveal>
        </div>
      </section>

      {/* Brief Services */}
      <section id="services-brief">
        <div className="container">
          <Reveal>
            <div className="section-header" style={{ textAlign: "center", marginBottom: "4rem" }}>
              <h2 style={{ fontSize: "3rem" }}>Strategic Digital Services for Global Growth</h2>
              <p style={{ color: "var(--primary)", fontSize: "1.2rem", marginTop: "1rem" }}>
                End-to-end digital solutions designed for growth.
              </p>
              <div className="underline" style={{ margin: "1.5rem auto" }}></div>
            </div>
          </Reveal>
          
          <div className="home-services-grid">
            {featuredServices.map((service, index) => (
              <Reveal key={service.id} delay={index * 0.2} height="100%">
                <Parallax offset={20} style={{ height: "100%" }}>
                  <ServiceCard 
                    icon={service.icon} 
                    title={service.title} 
                    description={service.description} 
                    slug={service.slug}
                    imageUrl={service.imageUrl}
                    imageAlt={service.imageAlt}
                    offerings={service.offerings}
                    btnLabel="Explore"
                    showOfferings={false}
                  />
                </Parallax>
              </Reveal>
            ))}
          </div>
          
          <div style={{ textAlign: "center", marginTop: "3rem" }}>
            <Reveal delay={0.6}>
              <Link href="/services" className="btn btn-outline">View All Services</Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section id="stats-section" style={{ 
        position: "relative",
        borderTop: "1px solid var(--border-color)", 
        borderBottom: "1px solid var(--border-color)",
        overflow: "hidden"
      }}>
        <ParallaxImage src="/home_stats_bg.png" alt="Statistics background" overlayOpacity={0.85} />
        <div className="container" style={{ position: "relative", zIndex: 2 }}>
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <Reveal key={index} delay={index * 0.1}>
                <Counter target={stat.target} label={stat.label} suffix={stat.suffix} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section id="why-us" style={{
        position: "relative",
        overflow: "hidden"
      }}>
        <ParallaxImage src="/home_why_us_bg.png" alt="Why us background" overlayOpacity={0.9} offset={150} />
        <div className="container" style={{ position: "relative", zIndex: 2 }}>
          <div className="about-flex">
            <div className="about-text">
              <Reveal>
                <h2>Why Choose Nayon Tech?</h2>
                <div className="underline" style={{ margin: "1rem 0 2rem" }}></div>
              </Reveal>
              <Reveal delay={0.2}>
                <p>We don&apos;t just deliver projects; we architect digital success. Our approach combines data-driven strategy with boundary-pushing creativity.</p>
              </Reveal>
              <div style={{ marginTop: "2rem", display: "grid", gap: "1.5rem" }}>
                <Reveal delay={0.3}>
                  <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
                    <div className="service-icon" style={{ width: "40px", height: "40px", marginBottom: 0 }}><Zap size={20} /></div>
                    <div>
                      <h4 style={{ fontSize: "1rem" }}>Rapid Deployment</h4>
                      <p style={{ fontSize: "0.85rem" }}>Fast-to-market solutions without compromising quality.</p>
                    </div>
                  </div>
                </Reveal>
                <Reveal delay={0.4}>
                  <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
                    <div className="service-icon" style={{ width: "40px", height: "40px", marginBottom: 0 }}><Target size={20} /></div>
                    <div>
                      <h4 style={{ fontSize: "1rem" }}>Goal Oriented</h4>
                      <p style={{ fontSize: "0.85rem" }}>Focused on KPIs that actually matter for your business.</p>
                    </div>
                  </div>
                </Reveal>
                <Reveal delay={0.5}>
                  <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
                    <div className="service-icon" style={{ width: "40px", height: "40px", marginBottom: 0 }}><Award size={20} /></div>
                    <div>
                      <h4 style={{ fontSize: "1rem" }}>Expert Support</h4>
                      <p style={{ fontSize: "0.85rem" }}>24/7 dedicated support from our senior engineering team.</p>
                    </div>
                  </div>
                </Reveal>
              </div>
            </div>
            <div className="stats-grid" style={{ gap: "1rem" }}>
               <Reveal delay={0.6}>
                  <div className="project-card" style={{ height: "100%", padding: "2rem", display: "flex", flexDirection: "column", justifyContent: "center", textAlign: "center" }}>
                    <h3 style={{ color: "var(--primary)", fontSize: "2rem" }}>99%</h3>
                    <p>Client Retention Rate</p>
                  </div>
               </Reveal>
               <Reveal delay={0.7}>
                  <div className="project-card" style={{ height: "100%", padding: "2rem", display: "flex", flexDirection: "column", justifyContent: "center", textAlign: "center" }}>
                    <h3 style={{ color: "var(--secondary)", fontSize: "2rem" }}>500+</h3>
                    <p>Concepts Delivered</p>
                  </div>
               </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" style={{ background: "rgba(112, 0, 255, 0.02)", overflow: "hidden" }}>
        <div className="container">
          <Reveal>
            <div className="section-header">
              <h2>Client Stories</h2>
              <div className="underline"></div>
            </div>
          </Reveal>
        </div>
        
        <Parallax offset={40}>
          <Marquee speed={30}>
            {testimonials.map((t, index) => (
              <div key={index} className="testimonial-card" style={{ width: "400px", flexShrink: 0, whiteSpace: "normal" }}>
                <div className="rating">
                  {[...Array(t.rating)].map((_, i) => <Star key={i} size={16} fill="currentColor" style={{ display: "inline" }} />)}
                </div>
                <p style={{ fontStyle: "italic", marginBottom: "1.5rem" }}>&quot;{t.content}&quot;</p>
                <div>
                  <h4 style={{ fontSize: "1rem", color: "var(--white)" }}>{t.name}</h4>
                  <p style={{ fontSize: "0.8rem", color: "var(--primary)" }}>{t.role}</p>
                </div>
              </div>
            ))}
          </Marquee>
        </Parallax>
      </section>

      {/* Latest Blog Section */}
      <section id="latest-blog" style={{ background: "rgba(0, 242, 255, 0.01)" }}>
        <div className="container">
          <Reveal>
            <div className="section-header">
              <h2>Latest from the Blog</h2>
              <div className="underline"></div>
            </div>
          </Reveal>
          
          <div className="blog-grid">
            {recentNews.map((post, index) => (
              <Reveal key={index} delay={index * 0.2}>
                <Parallax offset={30 * (index + 1)}>
                  <div className="blog-card">
                    <div className="blog-image">
                      <Image 
                        src={post.image} 
                        alt={post.title} 
                        width={400} 
                        height={250} 
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <div className="blog-content">
                      <div className="blog-meta">
                        <span>{post.category}</span>
                        <span>{post.date}</span>
                      </div>
                      <h3>{post.title}</h3>
                      <p>{post.description}</p>
                      <Link href={`/blog/${post.slug}`} className="read-more">
                        Read More <ArrowRight size={14} style={{ display: "inline", marginLeft: "5px" }} />
                      </Link>
                    </div>
                  </div>
                </Parallax>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section id="cta" style={{ 
        textAlign: "center", 
        padding: "120px 0",
        position: "relative",
        overflow: "hidden"
      }}>
        <ParallaxImage src="/home_cta_bg.png" alt="CTA background" overlayOpacity={0.8} offset={200} />
        <div className="container" style={{ position: "relative", zIndex: 2 }}>
          <Reveal>
            <h2 style={{ fontSize: "3rem", marginBottom: "1.5rem" }}>Ready to Ignite Your Brand?</h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p style={{ maxWidth: "600px", margin: "0 auto 3rem", fontSize: "1.2rem", color: "var(--text-main)" }}>
              Join dozens of industry leaders who have already partnered with Nayon Tech to redefine their digital future.
            </p>
          </Reveal>
          <Reveal delay={0.4}>
            <Link href="/contact" className="btn btn-primary" style={{ padding: "1.2rem 4rem", fontSize: "1.1rem", boxShadow: "0 0 50px var(--primary-glow)" }}>Work With Us</Link>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
