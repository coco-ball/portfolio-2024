// src/Spiral.tsx
import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

const Spiral = () => {
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
    return new THREE.TubeGeometry(path, 1500, 4, 8, false);
  }, [path]);

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.01;
    }
  });

  const spiralColor = useMemo(() => {
    const r = Math.random();
    const g = Math.random();
    const b = Math.random();
    return new THREE.Color(r, g, b);
  }, []);

  return (
    <mesh ref={meshRef} geometry={tubeGeometry} rotation={[Math.PI / 2, 0, 0]}>
      <meshStandardMaterial color={spiralColor} />
    </mesh>
  );
};

export default Spiral;
