"use client";

import React, { useRef, useEffect } from "react";

const GeometricTunnel: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let time = 0;

    const draw = () => {
      ctx.fillStyle = "#05060a";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;
      const maxSide = Math.max(canvas.width, canvas.height);

      time += 0.015;

      for (let i = 0; i < 30; i++) {
        const size = ( (i * 50 + time * 100) % maxSide );
        const opacity = 1 - (size / maxSide);
        const rotation = i * 0.2 + time * 0.5;

        ctx.save();
        ctx.translate(centerX, centerY);
        ctx.rotate(rotation);
        
        ctx.strokeStyle = `rgba(0, 242, 255, ${opacity * 0.3})`;
        ctx.lineWidth = 2;
        
        // Draw hexagon
        ctx.beginPath();
        for (let s = 0; s < 6; s++) {
          const angle = (s * Math.PI * 2) / 6;
          const x = Math.cos(angle) * size;
          const y = Math.sin(angle) * size;
          if (s === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.closePath();
        ctx.stroke();

        // Inner glowing points
        if (i % 5 === 0) {
            ctx.fillStyle = `rgba(0, 242, 255, ${opacity})`;
            ctx.beginPath();
            ctx.arc(size, 0, 3, 0, Math.PI * 2);
            ctx.fill();
        }

        ctx.restore();
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", resize);
    resize();
    draw();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: 0,
        pointerEvents: "none",
        background: "#05060a",
      }}
    />
  );
};

export default GeometricTunnel;
