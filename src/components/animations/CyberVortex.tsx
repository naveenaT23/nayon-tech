"use client";

import React, { useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

const VortexParticles = () => {
  const points = useRef<THREE.Points>(null);
  
  const { positions, colors } = useMemo(() => {
    const count = 5000;
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    const color = new THREE.Color("#00f2ff");

    for (let i = 0; i < count; i++) {
      const radius = Math.random() * 20;
      const angle = Math.random() * Math.PI * 2;
      const x = Math.cos(angle) * radius;
      const y = (Math.random() - 0.5) * 50;
      const z = Math.sin(angle) * radius;

      positions[i * 3] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;

      colors[i * 3] = color.r;
      colors[i * 3 + 1] = color.g;
      colors[i * 3 + 2] = color.b;
    }
    return { positions, colors };
  }, []);

  useFrame((state) => {
    if (points.current) {
      const time = state.clock.getElapsedTime();
      points.current.rotation.y = time * 0.2;
      
      const pos = points.current.geometry.attributes.position.array as Float32Array;
      for (let i = 0; i < 5000; i++) {
        const x = pos[i * 3];
        const z = pos[i * 3 + 2];
        const radius = Math.sqrt(x * x + z * z);
        
        // Swirling motion
        const angle = Math.atan2(z, x) + 0.01 * (10 / radius);
        pos[i * 3] = Math.cos(angle) * radius;
        pos[i * 3 + 2] = Math.sin(angle) * radius;
        
        // Vertical waving
        pos[i * 3 + 1] += Math.sin(time + radius * 0.5) * 0.05;
      }
      points.current.geometry.attributes.position.needsUpdate = true;
    }
  });

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
        <bufferAttribute
          attach="attributes-color"
          args={[colors, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.1}
        vertexColors
        transparent
        opacity={0.6}
        sizeAttenuation={true}
      />
    </points>
  );
};

const CyberVortex = () => {
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
      <Canvas camera={{ position: [0, 20, 40], fov: 45 }}>
        <color attach="background" args={["#05060a"]} />
        <VortexParticles />
      </Canvas>
    </div>
  );
};

export default CyberVortex;
