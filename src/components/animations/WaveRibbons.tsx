"use client";

import React, { useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

const Ribbon = ({ offset, color }: { offset: number; color: string }) => {
  const mesh = useRef<THREE.Mesh>(null);
  
  const { geometry } = useMemo(() => {
    const curve = new THREE.CatmullRomCurve3([
      new THREE.Vector3(-20, 0, 0),
      new THREE.Vector3(-10, 5, 5),
      new THREE.Vector3(0, 0, 10),
      new THREE.Vector3(10, -5, 5),
      new THREE.Vector3(20, 0, 0),
    ]);
    const geometry = new THREE.TubeGeometry(curve, 100, 0.1, 8, false);
    return { geometry };
  }, []);

  useFrame((state) => {
    if (mesh.current) {
      const time = state.clock.getElapsedTime();
      mesh.current.position.y = Math.sin(time + offset) * 2;
      mesh.current.rotation.z = Math.cos(time * 0.5 + offset) * 0.2;
      
      const positions = mesh.current.geometry.attributes.position.array as Float32Array;
      for (let i = 0; i < positions.length; i += 3) {
        const x = positions[i];
        positions[i + 1] += Math.sin(x * 0.5 + time + offset) * 0.02;
      }
      mesh.current.geometry.attributes.position.needsUpdate = true;
    }
  });

  return (
    <mesh ref={mesh} geometry={geometry}>
      <meshBasicMaterial color={color} transparent opacity={0.5} />
    </mesh>
  );
};

const WaveRibbons = () => {
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
      <Canvas camera={{ position: [0, 0, 20], fov: 45 }}>
        <color attach="background" args={["#05060a"]} />
        <Ribbon offset={0} color="#00f2ff" />
        <Ribbon offset={2} color="#008899" />
        <Ribbon offset={4} color="#004455" />
      </Canvas>
    </div>
  );
};

export default WaveRibbons;
