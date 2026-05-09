"use client";

import React, { useRef, useEffect } from "react";

const Starfield: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let stars: Star[] = [];
    const starCount = 400;

    class Star {
      x: number;
      y: number;
      z: number;
      px: number;
      py: number;

      zigzagOffset: number;
      isZigzag: boolean;

      constructor() {
        this.x = (Math.random() - 0.5) * canvas!.width * 2;
        this.y = (Math.random() - 0.5) * canvas!.height * 2;
        this.z = Math.random() * canvas!.width;
        this.px = 0;
        this.py = 0;
        this.zigzagOffset = Math.random() * Math.PI * 2;
        this.isZigzag = Math.random() > 0.8; // Only 20% stars zig zag
      }

      update(time: number) {
        this.z -= 4; // Slightly faster for zigzag feel
        if (this.z <= 0) {
          this.z = canvas!.width;
          this.x = (Math.random() - 0.5) * canvas!.width * 2;
          this.y = (Math.random() - 0.5) * canvas!.height * 2;
          this.isZigzag = Math.random() > 0.8;
        }

        // Apply zigzag only to specific stars
        const wave = Math.sin(time * 0.002 + this.z * 0.01) * 20;
        const zigzag = this.isZigzag ? Math.sin(time * 0.02 + this.zigzagOffset) * 25 : 0;
        const currentX = this.x + wave + zigzag;
        const currentY = this.y + wave + zigzag;

        const k = 128 / this.z;
        const sx = currentX * k + canvas!.width / 2;
        const sy = currentY * k + canvas!.height / 2;

        if (this.px !== 0) {
          ctx!.beginPath();
          ctx!.strokeStyle = `rgba(0, 242, 255, ${1 - this.z / canvas!.width})`; // Brighter cyan
          ctx!.lineWidth = k * 1.5; // Slightly thicker for 'light' look
          ctx!.moveTo(this.px, this.py);
          ctx!.lineTo(sx, sy);
          ctx!.stroke();
        }

        this.px = sx;
        this.py = sy;
      }
    }

    const init = () => {
      stars = [];
      for (let i = 0; i < starCount; i++) {
        stars.push(new Star());
      }
    };

    const animate = (time: number) => {
      ctx.fillStyle = "rgba(5, 6, 10, 0.3)"; // Deeper trails
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      stars.forEach((star) => star.update(time));
      animationFrameId = requestAnimationFrame(animate);
    };

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      init();
    };

    window.addEventListener("resize", resize);
    resize();
    animate();

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
        background: "transparent",
      }}
    />
  );
};

export default Starfield;
