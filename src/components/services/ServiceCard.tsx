"use client";

import React from "react";
import { ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  slug: string;
  imageUrl?: string;
  imageAlt?: string;
}

const ServiceCard = ({ icon, title, description, slug, imageUrl, imageAlt }: ServiceCardProps) => {
  return (
    <Link href={`/services/${slug}`}>
      <motion.div 
        whileHover={{ y: -10 }}
        className="service-card" 
        style={{ cursor: "pointer", transition: "var(--transition-smooth)", padding: 0, overflow: "hidden", height: "100%" }}
      >
        {imageUrl && (
          <div style={{ position: "relative", width: "100%", height: "200px", overflow: "hidden" }}>
            <Image 
              src={imageUrl} 
              alt={imageAlt || title} 
              fill 
              className="object-cover"
              style={{ transition: "transform 0.5s ease" }}
            />
            <div style={{ 
              position: "absolute", 
              top: 0, 
              left: 0, 
              width: "100%", 
              height: "100%", 
              background: "linear-gradient(to bottom, transparent 0%, rgba(5, 6, 10, 0.8) 100%)" 
            }}></div>
          </div>
        )}
        <div style={{ padding: "2rem" }}>
          <div className="service-icon" style={{ marginTop: imageUrl ? "-3rem" : "0", position: "relative", zIndex: 2 }}>{icon}</div>
          <h3>{title}</h3>
          <p>{description}</p>
        
          <div style={{ 
            marginTop: "1.5rem", 
            display: "flex", 
            alignItems: "center", 
            gap: "10px", 
            color: "var(--primary)",
            fontWeight: "bold",
            fontSize: "0.85rem",
            textTransform: "uppercase"
          }}>
            Learn More
            <ChevronRight size={18} />
          </div>
        </div>
      </motion.div>
    </Link>
  );
};

export default ServiceCard;
