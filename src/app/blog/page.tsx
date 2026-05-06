import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/animations/Reveal";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
  description: "Insights and trends in Web Development, Digital Marketing, UI/UX Design, and AI Content Creation from the Nayon Tech team.",
};

export default function BlogPage() {
  const posts = [
    {
      image: "/blog1.png",
      category: "UI/UX Design",
      date: "May 15, 2026",
      title: "Designing for the Next Generation: UX Trends",
      description: "Exploring how immersive interfaces and emotional design are shaping the future of digital products."
    },
    {
      image: "/blog2.png",
      category: "Digital Marketing",
      date: "April 28, 2026",
      title: "Data-Driven Marketing: Beyond the Basics",
      description: "How to leverage advanced analytics and consumer behavior data to drive explosive brand growth."
    },
    {
      image: "/blog3.png",
      category: "AI Content",
      date: "April 10, 2026",
      title: "The Creative Side of AI: A New Era",
      description: "Discover how generative AI is empowering creators to push the boundaries of visual and written storytelling."
    },
    {
      image: "/blog1.png",
      category: "Web Development",
      date: "March 22, 2026",
      title: "The Speed of Light: Future of Web Performance",
      description: "Why performance is the ultimate feature and how modern frameworks are achieving sub-second load times."
    }
  ];

  return (
    <main>
      <header className="page-header">
        <div className="container">
          <Reveal>
            <h1>Insights & Innovation</h1>
          </Reveal>
          <Reveal delay={0.4}>
            <p style={{ color: "var(--text-muted)" }}>Expert perspectives on the evolving digital landscape.</p>
          </Reveal>
        </div>
      </header>

      <section id="blog-listing">
        <div className="container">
          <div className="blog-grid">
            {posts.map((post, index) => (
              <Reveal key={index} delay={index * 0.1}>
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
                    <Link href="#" className="read-more">
                      Read Full Article <ArrowRight size={14} style={{ display: "inline", marginLeft: "5px" }} />
                    </Link>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
