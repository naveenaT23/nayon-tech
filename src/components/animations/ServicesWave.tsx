"use client";

import React, { useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

const WaveMesh = () => {
  const meshRef = useRef<THREE.Points>(null);
  
  const { positions, count } = useMemo(() => {
    const size = 100;
    const count = size * size;
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < size; i++) {
      for (let j = 0; j < size; j++) {
        positions[(i * size + j) * 3] = (i - size / 2) * 0.8;
        positions[(i * size + j) * 3 + 1] = 0;
        positions[(i * size + j) * 3 + 2] = (j - size / 2) * 0.8;
      }
    }
    return { positions, count };
  }, []);

  useFrame((state) => {
    if (meshRef.current) {
      const time = state.clock.getElapsedTime();
      const pos = meshRef.current.geometry.attributes.position.array as Float32Array;
      for (let i = 0; i < count; i++) {
        const x = pos[i * 3];
        const z = pos[i * 3 + 2];
        
        // Multi-layered waving effect
        const wave1 = Math.sin(x * 0.2 + time) * 2;
        const wave2 = Math.cos(z * 0.2 + time * 1.5) * 1.5;
        const wave3 = Math.sin((x + z) * 0.1 + time * 0.8) * 1;
        
        pos[i * 3 + 1] = wave1 + wave2 + wave3;
      }
      meshRef.current.geometry.attributes.position.needsUpdate = true;
      meshRef.current.rotation.y = Math.sin(time * 0.1) * 0.1;
    }
  });

  return (
    <points ref={meshRef} position={[0, -2, 0]}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial 
        color="#008899" // Dimmer cyan
        size={0.06} // Smaller points
        transparent 
        opacity={0.25} // Much lower opacity
        sizeAttenuation={true}
      />
    </points>
  );
};

const ServicesWave = () => {
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
      <Canvas 
        camera={{ position: [0, 15, 30], fov: 45 }}
        gl={{ alpha: false, antialias: true }}
      >
        <color attach="background" args={["#05060a"]} />
        <WaveMesh />
      </Canvas>
      {/* Gradient overlay for depth */}
      <div style={{
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        height: "50%",
        background: "linear-gradient(to top, #05060a, transparent)",
        zIndex: 1
      }} />
    </div>
  );
};

export default ServicesWave;
