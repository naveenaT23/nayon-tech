import React from "react";
import { BookOpen, Video, Users, GraduationCap } from "lucide-react";

export interface Course {
  id: string;
  slug: string;
  title: string;
  description: string;
  price: string;
  duration: string;
  level: "Beginner" | "Intermediate" | "Advanced";
  imageUrl: string;
  category: string;
  features: string[];
}

export const courses: Course[] = [
  {
    id: "1",
    slug: "nextjs-mastery",
    title: "Web Development",
    description: "Comprehensive training in modern web technologies, from frontend fundamentals to advanced full-stack systems.",
    price: "?",
    duration: "12 Weeks",
    level: "Intermediate",
    imageUrl: "/course_web_dev.png",
    category: "web-development",
    features: ["Server Components", "App Router", "Performance Optimization", "Real-world Projects"]
  },
  {
    id: "2",
    slug: "seo-domination",
    title: "Digital Marketing",
    description: "Master data-driven marketing strategies, SEO, and AI-powered growth tactics to dominate the digital landscape.",
    price: "?",
    duration: "8 Weeks",
    level: "Beginner",
    imageUrl: "/course_marketing.png",
    category: "digital-marketing",
    features: ["Keyword Research", "Technical SEO", "Content Strategy", "Backlink Building"]
  },
  {
    id: "3",
    slug: "branding-essentials",
    title: "Graphic Design",
    description: "Learn professional design principles, brand identity creation, and high-impact visual storytelling.",
    price: "?",
    duration: "6 Weeks",
    level: "Beginner",
    imageUrl: "/course_design.png",
    category: "graphic-design",
    features: ["Visual Identity", "Typography", "Color Theory", "Brand Messaging"]
  },
  {
    id: "4",
    slug: "ai-automation-business",
    title: "AI Automation",
    description: "Unlock the power of artificial intelligence to automate complex workflows and build intelligent business agents.",
    price: "?",
    duration: "10 Weeks",
    level: "Intermediate",
    imageUrl: "/course_ai.png",
    category: "ai-automation",
    features: ["Custom GPTs", "Zapier + AI", "Prompt Engineering", "Operational Efficiency"]
  }
];
