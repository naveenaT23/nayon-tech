"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

interface ParallaxImageProps {
  src: string;
  alt: string;
  offset?: number;
  overlayOpacity?: number;
}

export const ParallaxImage = ({ src, alt, offset = 100, overlayOpacity = 0.7 }: ParallaxImageProps) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [-offset, offset]);

  return (
    <div ref={ref} style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", overflow: "hidden", zIndex: 0 }}>
      <motion.div style={{ y, height: "120%", width: "100%", position: "absolute", top: "-10%" }}>
        <Image src={src} alt={alt} fill className="object-cover" />
      </motion.div>
      <div style={{ 
        position: "absolute", 
        top: 0, 
        left: 0, 
        width: "100%", 
        height: "100%", 
        background: `rgba(5, 6, 10, ${overlayOpacity})`, 
        zIndex: 1 
      }}></div>
    </div>
  );
};
