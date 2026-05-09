import type { Metadata } from "next";
import { Inter, Orbitron } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SmoothScroll from "@/components/layout/SmoothScroll";
import ScrollProgress from "@/components/animations/ScrollProgress";
import WhatsAppButton from "@/components/layout/WhatsAppButton";

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
    default: "Nayon Tech | AI Automation & Premium Digital Agency India",
    template: "%s | Nayon Tech"
  },
  metadataBase: new URL('https://nayontech.com'),
  alternates: {
    canonical: '/',
  },
  description: "Scale your business with futuristic AI automation, high-performance Next.js development, and world-class digital design from Nayon Tech's expert team.",
  keywords: [
    "AI Automation Agency", 
    "Premium Web Development India", 
    "Next.js Experts USA", 
    "AI Content Creation Singapore",
    "Digital Transformation Consulting",
    "Custom AI Agents for Business",
    "High-Performance Web Apps",
    "UI/UX Design Agency",
    "Nayon Tech Academy",
    "Naveena Tirumalaraju",
    "Enterprise AI Solutions"
  ],
  authors: [{ name: "Nayon Tech" }, { name: "Naveena Tirumalaraju" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://nayontech.com",
    siteName: "Nayon Tech",
    title: "Nayon Tech | Leading AI Automation & Digital Strategy Agency",
    description: "Scale your business with futuristic AI automation, high-performance Next.js development, and world-class digital design.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Nayon Tech - Elite Digital Agency Branding",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nayon Tech | Future-Ready AI & Digital Agency",
    description: "Transforming enterprises with AI automation and premium technology solutions.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" style={{ backgroundColor: "#05060a" }}>
      <body className={`${inter.variable} ${orbitron.variable}`} style={{ backgroundColor: "#05060a" }}>
        <SmoothScroll>
          <ScrollProgress />
          <Navbar />
          {children}
          <WhatsAppButton />
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
