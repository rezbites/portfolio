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

const BLOBS: Blob[] = [
  { position: [-5.5, 2.5, -2], scale: 1.4, distort: 0.55, speed: 1.2, rotateSpeed: [0.05, 0.07] },
  { position: [5.8, 1.2, -3], scale: 1.7, distort: 0.62, speed: 1.6, rotateSpeed: [-0.04, 0.06] },
  { position: [-4.5, -2.5, -1.5], scale: 1.2, distort: 0.5, speed: 1.0, rotateSpeed: [0.06, -0.05] },
  { position: [4.5, -2.8, -2.2], scale: 1.5, distort: 0.58, speed: 1.4, rotateSpeed: [-0.05, -0.04] },
  { position: [0, 3.4, -4], scale: 0.9, distort: 0.45, speed: 1.1, rotateSpeed: [0.07, 0.03] },
  { position: [-2, -3.6, -3.5], scale: 0.8, distort: 0.48, speed: 1.3, rotateSpeed: [-0.06, 0.05] },
];

function SingleBlob({ blob }: { blob: Blob }) {
  const ref = useRef<THREE.Mesh>(null);
  const baseY = blob.position[1];

  useFrame(({ clock, pointer }, delta) => {
    if (!ref.current) return;
    ref.current.rotation.x += delta * blob.rotateSpeed[0];
    ref.current.rotation.y += delta * blob.rotateSpeed[1];
    ref.current.position.y =
      baseY + Math.sin(clock.getElapsedTime() * 0.4 + blob.position[0]) * 0.3;
    ref.current.position.x = blob.position[0] + pointer.x * 0.3;
  });

  return (
    <mesh ref={ref} position={blob.position} scale={blob.scale}>
      <icosahedronGeometry args={[1, 32]} />
      <MeshDistortMaterial
        color="#1F2229"
        roughness={0.35}
        metalness={0.15}
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
