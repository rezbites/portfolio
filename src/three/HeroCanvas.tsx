import { Suspense, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import * as THREE from "three";
import BackgroundBlobs from "./BackgroundBlobs";

export default function HeroCanvas() {
  // Cap DPR at 1.5 for performance
  const dpr = useRef<[number, number]>([1, Math.min(1.5, window.devicePixelRatio || 1)]);

  return (
    <Canvas
      dpr={dpr.current}
      gl={{ antialias: false, alpha: true, powerPreference: "high-performance" }}
      camera={{ position: [0, 0, 8], fov: 50 }}
      frameloop="always"
      onCreated={({ gl }) => {
        gl.setClearColor(new THREE.Color("#26282F"), 0);
      }}
    >
      <ambientLight intensity={0.4} />
      <directionalLight position={[3, 4, 5]} intensity={0.9} color="#FFFFFF" />
      <directionalLight position={[-4, -2, 2]} intensity={0.4} color="#A8A59B" />

      <Suspense fallback={null}>
        <BackgroundBlobs />
      </Suspense>
    </Canvas>
  );
}
