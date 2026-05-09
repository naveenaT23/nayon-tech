"use client";

import React, { useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Sphere, MeshDistortMaterial } from "@react-three/drei";
import * as THREE from "three";

const BackgroundGlow = () => {
  return (
    <>
      <Float speed={1} rotationIntensity={0.2} floatIntensity={0.5}>
        <Sphere args={[15, 32, 32]} position={[10, 10, -20]}>
          <MeshDistortMaterial
            color="#00f2ff"
            speed={1}
            distort={0.3}
            radius={1}
            transparent
            opacity={0.05}
          />
        </Sphere>
      </Float>
      <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.4}>
        <Sphere args={[12, 32, 32]} position={[-15, -10, -25]}>
          <MeshDistortMaterial
            color="#7000ff"
            speed={0.8}
            distort={0.4}
            radius={1}
            transparent
            opacity={0.03}
          />
        </Sphere>
      </Float>
    </>
  );
};

const Global3D = () => {
  return (
    <div style={{ 
      position: "absolute", 
      top: 0, 
      left: 0, 
      width: "100%", 
      height: "100%", 
      pointerEvents: "none", 
      zIndex: 0,
      opacity: 1
    }}>
      <Canvas 
        camera={{ position: [0, 0, 30], fov: 60 }}
        style={{ background: "transparent" }}
        gl={{ alpha: true, antialias: true }}
        onCreated={({ gl }) => gl.setClearColor("#05060a", 0)}
      >
        <color attach="background" args={["#05060a"]} />
        <ambientLight intensity={0.5} />
        <BackgroundGlow />
      </Canvas>
    </div>
  );
};

export default Global3D;
