"use client";

import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { 
  Float, 
  MeshDistortMaterial, 
  PerspectiveCamera,
  Environment,
  ContactShadows,
  PresentationControls
} from "@react-three/drei";
import * as THREE from "three";

const FluidSphere = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    if (meshRef.current) {
      meshRef.current.rotation.x = time * 0.1;
      meshRef.current.rotation.y = time * 0.15;
    }
  });

  return (
    <Float speed={3} rotationIntensity={0.5} floatIntensity={1}>
      <mesh ref={meshRef}>
        <sphereGeometry args={[2, 64, 64]} />
        <MeshDistortMaterial
          color="#00f2ff"
          speed={2}
          distort={0.4}
          radius={1}
          emissive="#00f2ff"
          emissiveIntensity={0.1}
          roughness={0.1}
          metalness={0.8}
          transparent
          opacity={0.8}
        />
      </mesh>
    </Float>
  );
};

const Hero3D = () => {
  return (
    <div style={{ 
      position: "absolute", 
      top: 0, 
      left: 0, 
      width: "100%", 
      height: "100%", 
      zIndex: -1,
      opacity: 0.8
    }}>
      <Canvas>
        <PerspectiveCamera makeDefault position={[0, 0, 8]} fov={50} />
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} color="#00f2ff" />
        <pointLight position={[-10, -5, -10]} intensity={0.5} color="#7000ff" />
        <spotLight position={[0, 10, 0]} intensity={1} />
        
        <PresentationControls
          global
          config={{ mass: 2, tension: 500 }}
          snap
          rotation={[0, 0.3, 0]}
          polar={[-Math.PI / 4, Math.PI / 4]}
          azimuth={[-Math.PI / 4, Math.PI / 4]}
        >
          <FluidSphere />
        </PresentationControls>

        <ContactShadows
          position={[0, -3.5, 0]}
          opacity={0.4}
          scale={20}
          blur={2.4}
          far={4.5}
        />
        <Environment preset="city" />
      </Canvas>
    </div>
  );
};

export default Hero3D;
