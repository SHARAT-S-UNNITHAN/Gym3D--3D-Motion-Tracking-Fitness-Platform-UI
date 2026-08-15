import { useRef, useMemo, Suspense } from "react";
import { Canvas, useFrame, type ThreeEvent } from "@react-three/fiber";
import { Points, PointMaterial, Icosahedron } from "@react-three/drei";
import * as THREE from "three";

function ParticleField() {
  const ref = useRef<THREE.Points>(null);
  const count = 900;

  const positions = useMemo(() => {
    const pts = new Float32Array(count * 3);

    for (let i = 0; i < count; i++) {
      const r = 6 + Math.random() * 5;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);

      pts[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      pts[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      pts[i * 3 + 2] = r * Math.cos(phi);
    }

    return pts;
  }, []);

  useFrame((_, delta) => {
    if (!ref.current) return;
    ref.current.rotation.y += delta * 0.02;
    ref.current.rotation.x += delta * 0.005;
  });

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled>
      <PointMaterial
        transparent
        color="#f97316"
        size={0.028}
        sizeAttenuation
        depthWrite={false}
        opacity={0.7}
      />
    </Points>
  );
}

function CoreMesh() {
  const group = useRef<THREE.Group>(null);
  const mouse = useRef({ x: 0, y: 0 });

  const onPointerMove = (e: ThreeEvent<PointerEvent>) => {
    mouse.current.x = (e.point.x / 4) * 0.15;
    mouse.current.y = (e.point.y / 4) * 0.15;
  };

  useFrame((state, delta) => {
    if (!group.current) return;

    group.current.rotation.y += delta * 0.18;
    group.current.rotation.x = THREE.MathUtils.lerp(
      group.current.rotation.x,
      mouse.current.y + Math.sin(state.clock.elapsedTime * 0.15) * 0.1,
      0.04
    );
    group.current.rotation.z = THREE.MathUtils.lerp(
      group.current.rotation.z,
      mouse.current.x,
      0.04
    );
  });

  return (
    <group ref={group} onPointerMove={onPointerMove}>
      <Icosahedron args={[1.9, 1]}>
        <meshBasicMaterial color="#f97316" wireframe transparent opacity={0.55} />
      </Icosahedron>

      <Icosahedron args={[1.35, 0]}>
        <meshBasicMaterial color="#22c55e" wireframe transparent opacity={0.8} />
      </Icosahedron>

      <mesh>
        <sphereGeometry args={[0.55, 32, 32]} />
        <meshBasicMaterial color="#ffffff" transparent opacity={0.06} />
      </mesh>
    </group>
  );
}

export default function HeroScene() {
  return (
    <Canvas
      dpr={[1, 1.6]}
      camera={{ position: [0, 0, 7], fov: 42 }}
      gl={{
        antialias: true,
        alpha: true,
        preserveDrawingBuffer: true,
      }}
      className="!absolute inset-0"
    >
      <Suspense fallback={null}>
        <ambientLight intensity={0.4} />
        <CoreMesh />
        <ParticleField />
      </Suspense>
    </Canvas>
  );
}