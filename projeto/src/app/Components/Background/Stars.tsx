"use client";

import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";

export default function Stars() {
  const ref = useRef<THREE.Points>(null!);

  const positions = useMemo(() => {
    const array = new Float32Array(6000 * 3);

    for (let i = 0; i < 6000; i++) {
      array[i * 3] = (Math.random() - 0.5) * 25;
      array[i * 3 + 1] = (Math.random() - 0.5) * 25;
      array[i * 3 + 2] = (Math.random() - 0.5) * 25;
    }

    return array;
  }, []);

  useFrame(({ clock }) => {
    if (!ref.current) return;

    ref.current.rotation.y = clock.elapsedTime * 0.01;
    ref.current.rotation.x = Math.sin(clock.elapsedTime * 0.02) * 0.05;
  });

  return (
    <Points ref={ref} positions={positions} stride={3}>
      <PointMaterial
        transparent
        color="#ffffff"
        size={0.03}
        sizeAttenuation
        depthWrite={false}
      />
    </Points>
  );
}