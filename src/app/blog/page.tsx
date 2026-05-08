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
  title: "Blog",
  description: "Insights and trends in Web Development, Digital Marketing, UI/UX Design, and AI Content Creation from the Nayon Tech team.",
};

import { blogPosts } from "@/data/blog";

export default function BlogPage() {
  return (
    <main>
      <header className="page-header" style={{ position: "relative", overflow: "hidden", background: "transparent" }}>
        <PageHeader3D />
        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <Parallax offset={60}>
            <Reveal>
              <h1>Insights & Innovation</h1>
            </Reveal>
            <Reveal delay={0.4}>
              <p style={{ color: "var(--text-muted)" }}>Expert perspectives on the evolving digital landscape.</p>
            </Reveal>
            <Reveal delay={0.8}>
              <ScrollIndicator targetId="blog-posts" className="relative" />
            </Reveal>
          </Parallax>
        </div>
      </header>

      <section id="blog-listing">
        <div className="container">
          <div className="blog-grid">
            {blogPosts.map((post, index) => (
              <Reveal key={index} delay={index * 0.1}>
                <Parallax offset={20 * (index % 3 + 1)}>
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
                        Read Full Article <ArrowRight size={14} style={{ display: "inline", marginLeft: "5px" }} />
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
