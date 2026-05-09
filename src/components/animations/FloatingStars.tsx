"use client";

import React, { useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";

const StarGroup = () => {
  const ref = useRef<THREE.Points>(null);
  
  // Generate random star positions
  const stars = useMemo(() => {
    const positions = new Float32Array(3000 * 3);
    for (let i = 0; i < 3000; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 50;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 50;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 50;
    }
    return positions;
  }, []);

  useFrame((state) => {
    if (ref.current) {
      const time = state.clock.getElapsedTime();
      ref.current.rotation.y = time * 0.05;
      ref.current.rotation.x = time * 0.02;
      
      // Waving motion
      ref.current.position.y = Math.sin(time * 0.5) * 2;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={stars} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#00f2ff"
          size={0.1}
          sizeAttenuation={true}
          depthWrite={false}
          opacity={0.6}
        />
      </Points>
    </group>
  );
};

const FloatingStars = () => {
  return (
    <div style={{ 
      position: "absolute", 
      top: 0, 
      left: 0, 
      width: "100%", 
      height: "100%", 
      zIndex: 0, 
      pointerEvents: "none",
      backgroundColor: "#05060a"
    }}>
      <Canvas camera={{ position: [0, 0, 15] }}>
        <color attach="background" args={["#05060a"]} />
        <StarGroup />
      </Canvas>
      <div style={{
        position: "absolute",
        inset: 0,
        background: "radial-gradient(circle at center, transparent 0%, #05060a 80%)",
        pointerEvents: "none"
      }} />
    </div>
  );
};

export default FloatingStars;
