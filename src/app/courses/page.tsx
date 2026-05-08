import React from "react";
import type { Metadata } from "next";
import CoursesContent from "./CoursesContent";

export const metadata: Metadata = {
  title: "Nayon Courses | Master AI, Web Dev & Digital Marketing",
  description: "Bridge the gap between theory and industry excellence with professional courses in AI Automation, Web Development, and Design from Nayon Tech.",
};

export default function CoursesPage() {
  return <CoursesContent />;
}
