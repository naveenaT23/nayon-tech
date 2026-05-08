"use client";

import { useRef, ReactNode } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface ParallaxProps {
  children: ReactNode;
  offset?: number;
  className?: string;
  style?: React.CSSProperties;
}

export const Parallax = ({ children, offset = 50, className = "", style = {} }: ParallaxProps) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [-offset, offset]);

  return (
    <div ref={ref} className={className} style={{ position: "relative", height: style.height || "auto", ...style }}>
      <motion.div style={{ y, height: style.height || "auto" }}>{children}</motion.div>
    </div>
  );
};
