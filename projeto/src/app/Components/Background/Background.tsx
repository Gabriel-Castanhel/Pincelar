"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import { useRef, useMemo } from "react";
import * as THREE from "three";

function Stars() {
  const ref = useRef<THREE.Points>(null!);

  const positions = useMemo(() => {
    const arr = new Float32Array(9000 * 3);

    for (let i = 0; i < 9000; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 90;
      arr[i * 3 + 1] = (Math.random() - 0.5) * 90;
      arr[i * 3 + 2] = (Math.random() - 0.5) * 90;
    }

    return arr;
  }, []);

  useFrame((state) => {
    ref.current.rotation.y = state.clock.elapsedTime * 0.1;
    ref.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.1) * 0.1;
  });

  return (
    <Points ref={ref} positions={positions} stride={3}>
      <PointMaterial
        transparent
        color="#ffffff"
        size={0.04}
        sizeAttenuation
        depthWrite={false}
      />
    </Points>
  );
}

export default function Background() {
  return (
    <Canvas
      camera={{ position: [0, 0, 5] }}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: -1,
      }}
    >
      <color attach="background" args={["#000000"]} />
      <Stars />
    </Canvas>
  );
}