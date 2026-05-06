"use client";

import React, { useState } from "react";
import { ChevronRight, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  details: string;
  imageUrl?: string;
  imageAlt?: string;
}

const ServiceCard = ({ icon, title, description, details, imageUrl, imageAlt }: ServiceCardProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div 
        className="service-card" 
        onClick={() => setIsOpen(true)}
        style={{ cursor: "pointer", transition: "var(--transition-smooth)", padding: 0, overflow: "hidden" }}
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
      </div>

      <AnimatePresence>
        {isOpen && (
          <div style={{ 
            position: "fixed", 
            top: 0, 
            left: 0, 
            width: "100vw", 
            height: "100vh", 
            zIndex: 9999,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "20px"
          }}>
            {/* Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              style={{ 
                position: "absolute", 
                top: 0, 
                left: 0, 
                width: "100%", 
                height: "100%", 
                background: "rgba(5, 6, 10, 0.9)",
                backdropFilter: "blur(10px)"
              }}
            />

            {/* Big Detail Card */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              style={{ 
                position: "relative",
                width: "100%",
                maxWidth: "700px",
                background: "var(--surface-color)",
                border: "1px solid var(--primary)",
                borderRadius: "24px",
                padding: "3rem",
                boxShadow: "0 0 100px rgba(0, 242, 255, 0.2)",
                zIndex: 10
              }}
            >
              <button 
                onClick={() => setIsOpen(false)}
                style={{ 
                  position: "absolute", 
                  top: "20px", 
                  right: "20px", 
                  background: "rgba(255,255,255,0.05)",
                  border: "none",
                  borderRadius: "50%",
                  width: "40px",
                  height: "40px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "white",
                  cursor: "pointer"
                }}
              >
                <X size={24} />
              </button>

              <div className="modal-header-flex">
                <div style={{ flex: 1 }}>
                  <div className="service-icon" style={{ width: "80px", height: "80px", fontSize: "40px" }}>
                    {icon}
                  </div>
                  
                  <h2 style={{ 
                    fontFamily: "var(--font-orbitron)", 
                    fontSize: "2.5rem", 
                    margin: "1.5rem 0 1rem",
                    background: "linear-gradient(to right, white, var(--primary))",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent"
                  }}>
                    {title}
                  </h2>

                  <div className="underline" style={{ margin: "0 0 2rem", width: "100px" }}></div>
                </div>

                {imageUrl && (
                  <div style={{ 
                    flex: 1, 
                    position: "relative", 
                    height: "200px", 
                    borderRadius: "16px", 
                    overflow: "hidden",
                    border: "1px solid var(--border-color)"
                  }}>
                    <Image 
                      src={imageUrl} 
                      alt={imageAlt || title} 
                      fill 
                      className="object-cover"
                    />
                  </div>
                )}
              </div>
              
              <p style={{ 
                fontSize: "1.1rem", 
                color: "white", 
                lineHeight: "1.6", 
                marginBottom: "2rem" 
              }}>
                {description}
              </p>

              <div style={{ 
                background: "rgba(255,255,255,0.02)", 
                padding: "2rem", 
                borderRadius: "16px",
                borderLeft: "4px solid var(--primary)",
                color: "var(--text-muted)",
                fontSize: "1rem",
                lineHeight: "1.8"
              }}>
                {details}
              </div>

              <div style={{ marginTop: "2.5rem" }}>
                <button 
                  onClick={() => setIsOpen(false)}
                  className="btn btn-primary"
                  style={{ width: "100%" }}
                >
                  Close Details
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ServiceCard;
