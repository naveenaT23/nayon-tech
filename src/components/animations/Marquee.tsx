"use client";

import React from "react";
import { motion } from "framer-motion";

interface MarqueeProps {
  children: React.ReactNode;
  direction?: "left" | "right";
  speed?: number;
}

export const Marquee = ({ children, direction = "left", speed = 40 }: MarqueeProps) => {
  return (
    <div style={{ overflow: "hidden", display: "flex", width: "100%", position: "relative", padding: "20px 0" }}>
      <motion.div
        animate={{
          x: direction === "left" ? [0, -1000] : [-1000, 0],
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: speed,
            ease: "linear",
          },
        }}
        style={{
          display: "flex",
          gap: "2rem",
          whiteSpace: "nowrap",
          width: "max-content",
        }}
      >
        {children}
        {children} {/* Duplicate for seamless loop */}
        {children} {/* Triplicate for extra safety on wide screens */}
      </motion.div>
    </div>
  );
};
