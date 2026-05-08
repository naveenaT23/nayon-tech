"use client";

import { motion } from "framer-motion";
import { Bot } from "lucide-react";

export default function DancingToy() {
  return (
    <motion.div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: "2rem",
        position: "relative"
      }}
      animate={{
        y: [0, -15, 0],
        rotate: [-5, 5, -5],
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    >
      <div style={{
        position: "relative",
        background: "linear-gradient(135deg, var(--primary), var(--secondary))",
        padding: "1.5rem",
        borderRadius: "50%",
        boxShadow: "0 0 30px var(--primary-glow)",
      }}>
        <Bot size={48} color="white" />
        
        {/* Glow particles */}
        <motion.div
          style={{
            position: "absolute",
            top: -10,
            right: -10,
            width: "15px",
            height: "15px",
            background: "var(--primary)",
            borderRadius: "50%",
            filter: "blur(5px)"
          }}
          animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        />
      </div>
      
      {/* Shadow */}
      <motion.div
        style={{
          width: "40px",
          height: "10px",
          background: "rgba(0,0,0,0.3)",
          borderRadius: "50%",
          filter: "blur(5px)",
          marginTop: "10px"
        }}
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.1, 0.3] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      />
      
      <span style={{ 
        marginTop: "1rem", 
        fontSize: "0.8rem", 
        color: "var(--primary)", 
        fontWeight: "bold",
        textTransform: "uppercase",
        letterSpacing: "2px"
      }}>
        Nayon AI Assistant
      </span>
    </motion.div>
  );
}
