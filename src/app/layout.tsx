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
  metadataBase: new URL('https://nayontech.com'),
  alternates: {
    canonical: '/',
  },
  description: "Nayon Tech is a versatile digital agency specializing in Web Development, Digital Marketing, UI/UX Design, Branding, Video Editing, and AI Content Creation. We build futuristic solutions for modern businesses.",
  keywords: [
    "Web Development Agency", 
    "Digital Marketing Services", 
    "UI/UX Design Company", 
    "Logo & Branding", 
    "Professional Video Editing", 
    "AI Content Creation", 
    "Next.js Development",
    "Nayon Tech",
    "Naveena Tirumalaraju"
  ],
  authors: [{ name: "Nayon Tech" }, { name: "Naveena Tirumalaraju" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://nayontech.com",
    siteName: "Nayon Tech",
    title: "Nayon Tech | Premium Digital Agency & Technology Solutions",
    description: "Empowering businesses through innovative technology, AI-driven content, and world-class design.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Nayon Tech - Building the Future",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nayon Tech | Premium Digital Agency",
    description: "Empowering businesses through innovative technology solutions and AI-driven growth.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
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
