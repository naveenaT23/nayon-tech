"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/animations/Reveal";
import { Parallax } from "@/components/animations/Parallax";
import { Suspense } from "react";
import Starfield from "@/components/animations/Starfield";
import ScrollIndicator from "@/components/animations/ScrollIndicator";
import { courses } from "@/data/courses";
import { BookOpen, Clock, BarChart, ArrowRight, Star, Video, Users, GraduationCap } from "lucide-react";
import { motion } from "framer-motion";

export default function CoursesContent() {
  return (
    <main>
      <header className="page-header" style={{ position: "relative", overflow: "hidden", backgroundColor: "#05060a" }}>
        <Starfield />
        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <Parallax offset={60}>
            <Reveal>
              <span className="hero-tagline">Master the Future</span>
            </Reveal>
            <Reveal delay={0.2}>
              <h1>Nayon Courses</h1>
            </Reveal>
            <Reveal delay={0.4}>
              <p style={{ color: "var(--text-muted)", maxWidth: "700px", margin: "0 auto" }}>
                Professional-grade courses designed to bridge the gap between theory and industry excellence. 
                Learn the exact tech stacks we use at Nayon Tech.
              </p>
            </Reveal>
            <Reveal delay={0.6}>
              <ScrollIndicator targetId="courses-grid" className="relative" />
            </Reveal>
          </Parallax>
        </div>
      </header>

      <section id="courses-grid">
        <div className="container">
          <div style={{ 
            display: "grid", 
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", 
            gap: "3rem" 
          }}>
            {courses.map((course, index) => (
              <Reveal key={course.id} delay={index * 0.1} height="100%">
                <motion.div 
                  whileHover={{ y: -10 }}
                  style={{ 
                    background: "rgba(255,255,255,0.02)", 
                    borderRadius: "24px", 
                    overflow: "hidden", 
                    border: "1px solid rgba(255,255,255,0.05)",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column"
                  }}
                >
                  <div style={{ 
                    position: "relative", 
                    width: "100%", 
                    height: "220px", 
                    overflow: "hidden",
                    borderBottom: "1px solid rgba(255,255,255,0.05)"
                  }}>
                    <Image 
                      src={course.imageUrl} 
                      alt={course.title} 
                      fill 
                      priority
                      unoptimized
                      className="object-cover"
                      style={{ transition: "transform 0.5s ease", opacity: 0.9 }}
                    />
                    <div style={{ 
                      position: "absolute", 
                      top: 0, 
                      left: 0, 
                      width: "100%", 
                      height: "100%", 
                      background: "linear-gradient(to bottom, transparent 60%, rgba(5,6,10,0.8) 100%)" 
                    }}></div>
                    <div style={{ 
                      position: "absolute", 
                      top: "1rem", 
                      left: "1rem", 
                      background: "linear-gradient(135deg, rgba(0, 242, 255, 0.2), rgba(0, 242, 255, 0.05))", 
                      backdropFilter: "blur(8px)",
                      border: "1px solid rgba(0, 242, 255, 0.5)",
                      padding: "0.35rem 0.85rem",
                      borderRadius: "50px",
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                      zIndex: 5,
                      boxShadow: "0 0 15px rgba(0, 242, 255, 0.2)"
                    }}>
                      <div style={{ 
                        width: "8px", 
                        height: "8px", 
                        borderRadius: "50%", 
                        background: "#00f2ff", 
                        boxShadow: "0 0 12px #00f2ff"
                      }}></div>
                      <span style={{ 
                        fontSize: "0.7rem", 
                        fontWeight: "800", 
                        color: "#00f2ff", 
                        textTransform: "uppercase", 
                        letterSpacing: "1.5px",
                        textShadow: "0 0 10px rgba(0, 242, 255, 0.5)" 
                      }}>AI Integrated</span>
                    </div>
                  </div>
                  
                  <div style={{ padding: "2rem", flex: 1, display: "flex", flexDirection: "column" }}>
                    <span style={{ color: "var(--primary)", fontSize: "0.8rem", fontWeight: "bold", textTransform: "uppercase", letterSpacing: "1px" }}>
                      {course.category.replace("-", " ")}
                    </span>
                    <h3 style={{ fontSize: "1.5rem", margin: "0.5rem 0 1rem" }}>{course.title}</h3>
                    <p style={{ color: "var(--text-muted)", fontSize: "0.95rem", marginBottom: "1.5rem" }}>{course.description}</p>
                    
                    <div style={{ display: "flex", gap: "1.5rem", marginBottom: "2rem" }}>
                      <div style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "0.85rem", opacity: 0.8 }}>
                        <Clock size={14} className="text-primary" /> {course.duration}
                      </div>
                      <div style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "0.85rem", opacity: 0.8 }}>
                        <BookOpen size={14} className="text-primary" /> {course.features.length} Modules
                      </div>
                    </div>

                    <div style={{ marginTop: "auto", display: "flex", alignItems: "center", justifyContent: "space-between", paddingTop: "1.5rem", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
                      <span style={{ fontSize: "1.5rem", fontWeight: "bold" }}>{course.price}</span>
                      <Link href="/contact" className="btn btn-outline" style={{ padding: "0.6rem 1.2rem", fontSize: "0.9rem" }}>
                        Enroll Now
                      </Link>
                    </div>
                  </div>
                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="why-courses" style={{ background: "rgba(0, 242, 255, 0.02)" }}>
        <div className="container">
          <div className="section-header">
            <h2>Why Learn with Us?</h2>
            <div className="underline"></div>
          </div>
          
          <div className="services-grid">
            {[
              { 
                image: "/academy_projects.png", 
                title: "Industry Projects", 
                desc: "No boring theory. You build the exact projects we deliver to our global clients." 
              },
              { 
                image: "/academy_mentorship.png", 
                title: "Mentorship", 
                desc: "Get direct feedback and 1-on-1 guidance from our senior agency experts." 
              },
              { 
                image: "/enterprise_solutions_bg.png", 
                title: "Certification", 
                desc: "Receive a Nayon Tech Certified professional certificate upon successful completion." 
              }
            ].map((item, i) => (
              <Reveal key={i} delay={i * 0.2}>
                <div style={{ 
                  background: "rgba(255,255,255,0.02)", 
                  borderRadius: "24px", 
                  overflow: "hidden", 
                  border: "1px solid rgba(255,255,255,0.05)",
                  textAlign: "center"
                }}>
                  <div style={{ position: "relative", width: "100%", height: "200px" }}>
                    <Image src={item.image} alt={item.title} fill unoptimized className="object-cover" style={{ opacity: 0.8 }} />
                    <div style={{ 
                      position: "absolute", 
                      top: 0, 
                      left: 0, 
                      width: "100%", 
                      height: "100%", 
                      background: "linear-gradient(to bottom, transparent, rgba(5,6,10,1))" 
                    }}></div>
                  </div>
                  <div style={{ padding: "2rem" }}>
                    <h3 style={{ marginBottom: "1rem" }}>{item.title}</h3>
                    <p style={{ color: "var(--text-muted)", fontSize: "0.95rem" }}>{item.desc}</p>
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
