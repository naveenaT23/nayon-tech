"use client";

import React, { useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

const WaveField = () => {
  const meshRef = useRef<THREE.Points>(null);
  
  const { positions, count } = useMemo(() => {
    const size = 50;
    const count = size * size;
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < size; i++) {
      for (let j = 0; j < size; j++) {
        positions[(i * size + j) * 3] = (i - size / 2) * 1.5;
        positions[(i * size + j) * 3 + 1] = 0;
        positions[(i * size + j) * 3 + 2] = (j - size / 2) * 1.5;
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
        const dist = Math.sqrt(x * x + z * z);
        pos[i * 3 + 1] = Math.sin(dist * 0.3 - time * 2) * 2;
      }
      meshRef.current.geometry.attributes.position.needsUpdate = true;
      meshRef.current.rotation.y = time * 0.05;
    }
  });

  return (
    <points ref={meshRef} position={[0, -5, 0]}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial 
        color="#00f2ff" 
        size={0.2} 
        transparent 
        opacity={0.6} 
        sizeAttenuation={true}
      />
    </points>
  );
};

const PageHeader3D = () => {
  return (
    <div style={{ 
      position: "absolute", 
      top: 0, 
      left: 0, 
      width: "100%", 
      height: "100%", 
      zIndex: 0, // Changed to 0 to be visible over parent bg but behind content
      pointerEvents: "none"
    }}>
      <Canvas 
        camera={{ position: [0, 10, 25], fov: 50 }}
        style={{ background: "transparent" }}
        gl={{ alpha: true, antialias: true }}
      >
        <ambientLight intensity={1} />
        <WaveField />
      </Canvas>
    </div>
  );
};

export default PageHeader3D;
