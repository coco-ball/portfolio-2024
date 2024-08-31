// src/SpiralCanvas.tsx
import { useRef, useMemo } from "react";
import { useFrame, Canvas } from "@react-three/fiber";
import { useProject } from "@/contexts/ProjectContext";
import { useCanvas } from "@/contexts/CanvasContext";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";

const SpiralMesh = ({ color }: { color: THREE.Color }) => {
  const meshRef = useRef<THREE.Mesh>(null);

  const path = useMemo(() => {
    const pathPoints: THREE.Vector3[] = [];
    const cote = 400.0;
    const pah = 60;
    const numRevolutions = 4;
    const pas = Math.floor((numRevolutions * 360) / 4);
    const aStep = (numRevolutions * Math.PI * 2) / pas;

    for (let theta = 0; theta < aStep * pas; theta += aStep) {
      const x = cote * Math.cos(theta);
      const y = pah * theta - (pah * aStep * pas) / 2; // Adjust Y to center
      const z = cote * Math.sin(theta);
      pathPoints.push(new THREE.Vector3(x, y, z));
    }

    return new THREE.CatmullRomCurve3(pathPoints);
  }, []);

  const tubeGeometry = useMemo(() => {
    return new THREE.TubeGeometry(path, 1500, 5, 8, false);
    // return new THREE.TubeGeometry(path, 1500, 40, 20, false);
  }, [path]);

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.01;
    }
  });

  return (
    <mesh ref={meshRef} geometry={tubeGeometry} rotation={[Math.PI / 2, 0, 0]}>
      <meshStandardMaterial color={color} />
    </mesh>
  );
};

export default function SpiralCanvas() {
  const { selectedProject } = useProject();
  const { cameraPosition, bgColor, spiralColor } = useCanvas();

  return (
    <Canvas
      style={{
        background: bgColor,
        height: "100vh",
        position: "absolute",
        width: selectedProject === null ? "100%" : "23.5%",
        transitionProperty: "all",
        transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
        transitionDuration: "500ms",
      }}
      camera={{ position: cameraPosition, fov: 75, near: 1, far: 10000 }}
      gl={{ antialias: true }}
    >
      <ambientLight intensity={4} />
      {/* <directionalLight position={[10, 10, 10]} intensity={1.5} />{" "} */}
      <OrbitControls
        rotateSpeed={0.17}
        zoomSpeed={0.17}
        // panSpeed={0.3}
        // enablePan={true}
      />
      <SpiralMesh color={spiralColor} />
    </Canvas>
  );
}