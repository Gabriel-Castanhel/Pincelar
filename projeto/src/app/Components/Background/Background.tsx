"use client";

import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { EffectComposer, Bloom } from "@react-three/postprocessing";

import Nebula from "./Nebula";
import Stars from "./Stars";

export default function Background() {
  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: -10,
        overflow: "hidden",
      }}
    >
      <Canvas
        camera={{
          position: [0, 0, 2],
          fov: 60,
        }}
        gl={{
          antialias: true,
          alpha: true,
        }}
      >
        {/* Cor de fundo */}
        <color attach="background" args={["#050816"]} />

        {/* Luz ambiente */}
        <ambientLight intensity={0.2} />

        <Suspense fallback={null}>
          <Nebula />
          <Stars />
        </Suspense>

        <EffectComposer>
          <Bloom
            intensity={0.7}
            luminanceThreshold={0.2}
            luminanceSmoothing={0.9}
          />
        </EffectComposer>
      </Canvas>
    </div>
  );
}