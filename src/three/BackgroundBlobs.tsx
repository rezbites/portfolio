import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { MeshDistortMaterial } from "@react-three/drei";
import * as THREE from "three";

type Blob = {
  position: [number, number, number];
  scale: number;
  distort: number;
  speed: number;
  rotateSpeed: [number, number];
};

// Four blobs for richer depth
const BLOBS: Blob[] = [
  { position: [-5.0, 1.5, -2.5], scale: 3.2, distort: 0.45, speed: 0.8, rotateSpeed: [0.03, 0.04] },
  { position: [5.2, 2.2, -2.2], scale: 2.8, distort: 0.5, speed: 1.0, rotateSpeed: [-0.025, 0.03] },
  { position: [-3.8, -2.8, -2.0], scale: 2.4, distort: 0.4, speed: 1.1, rotateSpeed: [0.04, -0.03] },
  { position: [4.0, -3.0, -3.2], scale: 2.2, distort: 0.38, speed: 0.7, rotateSpeed: [-0.03, -0.025] },
];

function SingleBlob({ blob }: { blob: Blob }) {
  const ref = useRef<THREE.Mesh>(null);
  const baseY = blob.position[1];
  const baseX = blob.position[0];

  useFrame(({ clock }, delta) => {
    if (!ref.current) return;
    ref.current.rotation.x += delta * blob.rotateSpeed[0];
    ref.current.rotation.y += delta * blob.rotateSpeed[1];
    const t = clock.getElapsedTime();
    ref.current.position.y = baseY + Math.sin(t * 0.3 + baseX) * 0.35;
    ref.current.position.x = baseX + Math.cos(t * 0.2 + baseY) * 0.25;
  });

  return (
    <mesh ref={ref} position={blob.position} scale={blob.scale}>
      <icosahedronGeometry args={[1, 24]} />
      <MeshDistortMaterial
        color="#1B1D22"
        roughness={0.55}
        metalness={0.05}
        distort={blob.distort}
        speed={blob.speed}
      />
    </mesh>
  );
}

export default function BackgroundBlobs() {
  return (
    <group>
      {BLOBS.map((b, i) => (
        <SingleBlob key={i} blob={b} />
      ))}
    </group>
  );
}
