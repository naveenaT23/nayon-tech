"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { X } from "lucide-react";

const WelcomeModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const hasVisited = sessionStorage.getItem("welcomeShown");
    if (!hasVisited) {
      const timer = setTimeout(() => {
        setIsOpen(true);
        sessionStorage.setItem("welcomeShown", "true");
      }, 2000); // Show after 2 seconds
      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="welcome-modal-overlay" style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0,0,0,0.85)",
          backdropFilter: "blur(8px)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 9999,
          padding: "20px"
        }}>
          <motion.div
            initial={{ scale: 0.8, opacity: 0, y: 50 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.8, opacity: 0, y: 50 }}
            className="welcome-modal-content"
            style={{
              background: "linear-gradient(135deg, #0a0b10 0%, #151921 100%)",
              borderRadius: "30px",
              border: "1px solid rgba(0, 242, 255, 0.3)",
              boxShadow: "0 0 50px rgba(0, 242, 255, 0.15)",
              padding: "40px",
              maxWidth: "500px",
              width: "100%",
              position: "relative",
              textAlign: "center",
              overflow: "hidden"
            }}
          >
            {/* Animated Background Glow */}
            <motion.div 
              style={{
                position: "absolute",
                top: "-50%",
                left: "-50%",
                width: "200%",
                height: "200%",
                background: "radial-gradient(circle, rgba(0, 242, 255, 0.05) 0%, transparent 70%)",
                zIndex: 0
              }}
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            />

            <button 
              onClick={() => setIsOpen(false)}
              style={{
                position: "absolute",
                top: "20px",
                right: "20px",
                background: "rgba(255,255,255,0.05)",
                border: "none",
                color: "white",
                cursor: "pointer",
                padding: "8px",
                borderRadius: "50%",
                zIndex: 10
              }}
            >
              <X size={20} />
            </button>

            <div style={{ position: "relative", zIndex: 1 }}>
              <motion.div
                style={{ marginBottom: "20px", position: "relative" }}
              >
                <div style={{ 
                  width: "200px", 
                  height: "200px", 
                  margin: "0 auto", 
                  position: "relative",
                  filter: "drop-shadow(0 0 20px rgba(0, 242, 255, 0.4))"
                }}>
                  <Image 
                    src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNHR4YnZycWp3ZzJqZzJqZzJqZzJqZzJqZzJqZzJqZzJqZzJqJmVwPXYxX3N0aWNrZXJzX3NlYXJjaCZjdD1z/3o7TKMGpx4Z6u8604o/giphy.gif" 
                    alt="Smiling Waving Robot" 
                    fill
                    style={{ objectFit: "contain" }}
                    unoptimized // Necessary for GIFs in Next.js
                  />
                </div>
              </motion.div>

              <h2 style={{ 
                fontFamily: "Orbitron, sans-serif", 
                fontSize: "1.8rem", 
                marginBottom: "1rem",
                background: "linear-gradient(to right, #fff, var(--primary))",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent"
              }}>
                Welcome to Nayon Tech
              </h2>
              
              <p style={{ color: "var(--text-muted)", fontSize: "1.1rem", lineHeight: "1.6", marginBottom: "2rem" }}>
                Dear customer, we are delighted to welcome you to our world of innovation and AI excellence. How can we empower your tomorrow today?
              </p>

              <button 
                onClick={() => setIsOpen(false)}
                className="btn btn-primary"
                style={{ width: "100%", padding: "15px", fontSize: "1rem", fontWeight: "bold" }}
              >
                Get Started
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default WelcomeModal;
