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

import { blogPosts } from "@/data/blog";

export default function BlogPage() {
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
            {blogPosts.map((post, index) => (
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
                    <Link href={`/blog/${post.slug}`} className="read-more">
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
