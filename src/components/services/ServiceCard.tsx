"use client";

import React from "react";
import { ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ServiceOffering } from "@/data/services";

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  slug: string;
  imageUrl?: string;
  imageAlt?: string;
  offerings?: ServiceOffering[];
  btnLabel?: string;
  showOfferings?: boolean;
}

const ServiceCard = ({ 
  icon, 
  title, 
  description, 
  slug, 
  imageUrl, 
  imageAlt, 
  offerings, 
  btnLabel,
  showOfferings = true
}: ServiceCardProps) => {
  return (
    <Link href={`/services/${slug}`}>
      <motion.div 
        whileHover={{ y: -15, scale: 1.01 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className="service-card" 
        style={{ 
          cursor: "pointer", 
          transition: "var(--transition-smooth)", 
          padding: 0, 
          overflow: "hidden", 
          height: "100%",
          minHeight: "480px", // Enforce substantial equal size
          display: "flex",
          flexDirection: "column",
          background: "rgba(255, 255, 255, 0.03)",
          backdropFilter: "blur(12px)",
          border: "1px solid rgba(255, 255, 255, 0.05)",
          borderRadius: "24px",
          position: "relative"
        }}
      >
        {imageUrl && (
          <div style={{ position: "relative", width: "100%", height: "220px", overflow: "hidden" }}>
            <Image 
              src={imageUrl} 
              alt={imageAlt || title} 
              fill 
              className="object-cover"
              style={{ transition: "transform 0.8s ease" }}
            />
            <div style={{ 
              position: "absolute", 
              top: 0, 
              left: 0, 
              width: "100%", 
              height: "100%", 
              background: "linear-gradient(to bottom, transparent 30%, rgba(5, 6, 10, 1) 100%)" 
            }}></div>
          </div>
        )}
        <div style={{ padding: "2rem", flex: 1, display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}>
          <div className="service-icon" style={{ 
            marginTop: imageUrl ? "-3.5rem" : "0", 
            position: "relative", 
            zIndex: 2,
            background: "var(--primary)",
            color: "#000",
            width: "60px",
            height: "60px",
            borderRadius: "14px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 10px 30px rgba(0, 242, 255, 0.4)",
            margin: imageUrl ? "-3.5rem auto 0" : "0 auto"
          }}>{icon}</div>

          <div style={{ 
            position: "absolute", 
            top: "1.25rem", 
            left: "1.25rem", 
            background: "linear-gradient(135deg, rgba(0, 242, 255, 0.2), rgba(0, 242, 255, 0.05))", 
            backdropFilter: "blur(8px)",
            border: "1px solid rgba(0, 242, 255, 0.5)",
            padding: "0.35rem 0.85rem",
            borderRadius: "50px",
            display: "flex",
            alignItems: "center",
            gap: "8px",
            zIndex: 3,
            boxShadow: "0 0 15px rgba(0, 242, 255, 0.2)"
          }}>
            <div style={{ 
              width: "8px", 
              height: "8px", 
              borderRadius: "50%", 
              background: "#00f2ff", 
              boxShadow: "0 0 12px #00f2ff",
              animation: "pulse-glow 2s infinite" 
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
          
          <h3 style={{ fontSize: "1.4rem", margin: "1.5rem 0 0.5rem", lineHeight: "1.2" }}>{title}</h3>
          <p style={{ fontWeight: "600", color: "var(--primary)", marginBottom: "1.5rem", fontSize: "0.8rem", letterSpacing: "1px", textTransform: "uppercase" }}>{description}</p>
          
          {showOfferings && (
            <ul style={{ 
              listStyle: "none", 
              padding: 0, 
              margin: "0 0 2.5rem 0", 
              display: "grid", 
              gap: "12px" 
            }}>
              {offerings?.slice(0, 8).map((item, i) => (
                <li key={i} style={{ 
                  color: "var(--text-muted)", 
                  fontSize: "0.9rem", 
                  display: "flex", 
                  alignItems: "center", 
                  gap: "10px",
                  opacity: 0.8
                }}>
                  <div style={{ minWidth: "6px", height: "6px", background: "var(--primary)", borderRadius: "1px", transform: "rotate(45deg)" }}></div>
                  {item.title}
                </li>
              ))}
            </ul>
          )}
        
          <div style={{ 
            marginTop: "auto", 
            display: "flex", 
            alignItems: "center", 
            justifyContent: "space-between",
            gap: "10px", 
            color: "var(--white)",
            fontWeight: "700",
            fontSize: "0.9rem",
            textTransform: "uppercase",
            border: "1px solid rgba(255, 255, 255, 0.1)",
            padding: "1rem 2rem",
            borderRadius: "50px",
            background: "rgba(255,255,255,0.02)",
            transition: "var(--transition-smooth)"
          }} className="service-btn-new">
            <span>{btnLabel || `Explore Solutions`}</span>
            <ChevronRight size={18} className="btn-icon" />
          </div>
        </div>
      </motion.div>
    </Link>
  );
};

export default ServiceCard;
