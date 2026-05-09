import React from "react";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Calendar, User, Tag } from "lucide-react";
import { blogPosts } from "@/data/blog";
import { Reveal } from "@/components/animations/Reveal";
import { Parallax } from "@/components/animations/Parallax";
import ScrollIndicator from "@/components/animations/ScrollIndicator";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return { title: "Post Not Found" };

  return {
    title: `${post.title} | Blog`,
    description: post.description,
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <main>
      <header className="page-header" style={{ padding: "160px 0 60px", position: "relative", overflow: "hidden", backgroundColor: "#05060a" }}>
        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <Parallax offset={40}>
            <Reveal>
              <Link href="/blog" className="btn btn-outline" style={{ display: "inline-flex", alignItems: "center", gap: "8px", marginBottom: "2.5rem", padding: "0.5rem 1rem" }}>
                <ArrowLeft size={16} /> Back to Blog
              </Link>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="blog-meta" style={{ marginBottom: "1.5rem", fontSize: "0.9rem", opacity: 0.8 }}>
                <span style={{ display: "inline-flex", alignItems: "center", gap: "6px", marginRight: "20px" }}>
                  <Tag size={14} className="text-primary" /> {post.category}
                </span>
                <span style={{ display: "inline-flex", alignItems: "center", gap: "6px" }}>
                  <Calendar size={14} className="text-primary" /> {post.date}
                </span>
              </div>
            </Reveal>
            <Reveal delay={0.4}>
              <h1 style={{ fontSize: "3.5rem", lineHeight: "1.1", maxWidth: "900px" }}>{post.title}</h1>
            </Reveal>
            <Reveal delay={0.8}>
              <ScrollIndicator targetId="blog-content" className="relative" />
            </Reveal>
          </Parallax>
        </div>
      </header>

      <section id="blog-content">
        <div className="container">
          <div style={{ maxWidth: "900px", margin: "0 auto" }}>
            <Reveal delay={0.6}>
              <Parallax offset={50}>
                <div style={{ 
                  position: "relative", 
                  width: "100%", 
                  aspectRatio: "21/9", 
                  borderRadius: "24px", 
                  overflow: "hidden",
                  marginBottom: "4rem",
                  border: "1px solid var(--border-color)",
                  boxShadow: "0 20px 60px rgba(0,0,0,0.4)"
                }}>
                  <Image 
                    src={post.image} 
                    alt={post.title} 
                    fill 
                    className="object-cover"
                  />
                </div>
              </Parallax>
            </Reveal>

            <Reveal delay={0.8}>
              <div className="article-body" style={{ fontSize: "1.2rem", lineHeight: "1.8", color: "var(--text-main)" }}>
                <p style={{ fontSize: "1.4rem", color: "var(--white)", fontWeight: "500", marginBottom: "2rem" }}>
                  {post.description}
                </p>
                <div style={{ color: "var(--text-muted)" }}>
                  {post.content}
                </div>
                
                <div style={{ 
                  marginTop: "4rem", 
                  padding: "2rem", 
                  background: "rgba(255,255,255,0.02)", 
                  borderRadius: "16px",
                  border: "1px solid var(--border-color)",
                  display: "flex",
                  alignItems: "center",
                  gap: "15px"
                }}>
                  <div style={{ width: "50px", height: "50px", borderRadius: "50%", background: "var(--primary)", display: "flex", alignItems: "center", justifyItems: "center", fontSize: "20px", fontWeight: "bold", color: "black", justifyContent: "center" }}>
                    NT
                  </div>
                  <div>
                    <div style={{ fontSize: "0.8rem", color: "var(--primary)", fontWeight: "bold", textTransform: "uppercase" }}>Author</div>
                    <div style={{ fontWeight: "bold", color: "white" }}>{post.author}</div>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal delay={1}>
              <div style={{ marginTop: "6rem", textAlign: "center", borderTop: "1px solid var(--border-color)", paddingTop: "4rem" }}>
                <h2>Want more insights?</h2>
                <p style={{ color: "var(--text-muted)", marginBottom: "2rem" }}>Subscribe to our newsletter for the latest tech trends delivered to your inbox.</p>
                <div style={{ display: "flex", gap: "10px", justifyContent: "center", maxWidth: "500px", margin: "0 auto" }}>
                  <input type="email" placeholder="Enter your email" style={{ flex: 1, background: "rgba(255,255,255,0.05)", border: "1px solid var(--border-color)", borderRadius: "8px", padding: "0 1rem", color: "white" }} />
                  <button className="btn btn-primary">Subscribe</button>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </main>
  );
}
