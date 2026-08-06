"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

import vertexShader from "./shaders/vertex";
import fragmentShader from "./shaders/fragment";

export default function Nebula() {
  const material = useRef<THREE.ShaderMaterial>(null!);

  useFrame(({ clock, mouse }) => {
    if (!material.current) return;

    material.current.uniforms.uTime.value = clock.getElapsedTime();

    material.current.uniforms.uMouse.value.set(
      mouse.x,
      mouse.y
    );
  });

  return (
    <mesh scale={[8, 8, 1]}>
      <planeGeometry args={[1, 1, 64, 64]} />

      <shaderMaterial
        ref={material}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        transparent
        depthWrite={false}
        uniforms={{
          uTime: {
            value: 0,
          },
          uMouse: {
            value: new THREE.Vector2(),
          },
          uResolution: {
            value: new THREE.Vector2(
              window.innerWidth,
              window.innerHeight
            ),
          },
        }}
      />
    </mesh>
  );
}