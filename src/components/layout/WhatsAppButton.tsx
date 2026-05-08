"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  const phoneNumber = "917569562240";
  const message = "Hello Nayon Tech! I'm interested in your services.";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      style={{
        position: "fixed",
        bottom: "30px",
        right: "30px",
        backgroundColor: "#25D366",
        color: "white",
        width: "60px",
        height: "60px",
        borderRadius: "50%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        boxShadow: "0 10px 25px rgba(37, 211, 102, 0.4)",
        zIndex: 1000,
        cursor: "pointer"
      }}
    >
      <MessageCircle size={32} fill="white" />
      
      {/* Pulse Effect */}
      <motion.div
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          borderRadius: "50%",
          border: "2px solid #25D366",
          zIndex: -1
        }}
        animate={{
          scale: [1, 1.5],
          opacity: [0.5, 0]
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeOut"
        }}
      />
    </motion.a>
  );
}
