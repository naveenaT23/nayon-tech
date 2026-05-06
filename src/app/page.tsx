import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Code2, Palette, BrainCircuit, ArrowRight, Zap, Target, Award, Star } from "lucide-react";
import HeroCanvas from "@/components/animations/HeroCanvas";
import { Reveal } from "@/components/animations/Reveal";
import Counter from "@/components/animations/Counter";
import { Marquee } from "@/components/animations/Marquee";
import ServiceCard from "@/components/services/ServiceCard";
import { services } from "@/data/services";
import { blogPosts } from "@/data/blog";

export default function Home() {
  const featuredServices = services.slice(0, 3);
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
          <Reveal>
            <span className="hero-tagline">Innovation Meets Excellence</span>
          </Reveal>
          <Reveal delay={0.4}>
            <h1>Building the Future, <br />One Line at a Time</h1>
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
        </div>
      </section>

      {/* Brief Services */}
      <section id="services-brief">
        <div className="container">
          <Reveal>
            <div className="section-header">
              <h2>Our Core Expertise</h2>
              <div className="underline"></div>
            </div>
          </Reveal>
          
          <div className="services-grid">
            {featuredServices.map((service, index) => (
              <Reveal key={index} delay={index * 0.2}>
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
        background: "url('/home_stats_bg.png') center/cover no-repeat",
        borderTop: "1px solid var(--border-color)", 
        borderBottom: "1px solid var(--border-color)" 
      }}>
        <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", background: "rgba(5, 6, 10, 0.8)", zIndex: 1 }}></div>
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
        background: "url('/home_why_us_bg.png') center/cover no-repeat",
      }}>
        <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", background: "linear-gradient(to right, var(--bg-color) 40%, rgba(5, 6, 10, 0.7))", zIndex: 1 }}></div>
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
        background: "url('/home_cta_bg.png') center/cover no-repeat",
        overflow: "hidden"
      }}>
        <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", background: "radial-gradient(circle, rgba(112, 0, 255, 0.4) 0%, var(--bg-color) 80%)", zIndex: 1 }}></div>
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
