import type { Metadata } from "next";
import { Inter, Orbitron } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
});

const orbitron = Orbitron({
  subsets: ["latin"],
  variable: "--font-orbitron",
});

export const metadata: Metadata = {
  title: {
    default: "Nayon Tech | Building the Future, One Line at a Time",
    template: "%s | Nayon Tech"
  },
  description: "Nayon Tech is a versatile digital agency specializing in Web Development, Digital Marketing, UI/UX Design, Branding, Video Editing, and AI Content Creation.",
  keywords: ["Web Development", "Digital Marketing", "UI/UX Design", "Logo Design", "Video Editing", "AI Content Creation", "Nayon Tech"],
  authors: [{ name: "Nayon Tech" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://nayontech.com",
    siteName: "Nayon Tech",
    title: "Nayon Tech | Building the Future",
    description: "Empowering businesses through innovative technology solutions.",
    images: [
      {
        url: "/og-image.png", // Assume we might add this later
        width: 1200,
        height: 630,
        alt: "Nayon Tech",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nayon Tech | Building the Future",
    description: "Empowering businesses through innovative technology solutions.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${orbitron.variable}`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
