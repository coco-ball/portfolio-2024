import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
// src/SpiralCanvas.tsx
import { useRef, useMemo, useState, useEffect } from "react";
import { useFrame, Canvas } from "@react-three/fiber";
import { useProject } from "@/contexts/ProjectContext";
import { useCanvas } from "@/contexts/CanvasContext";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";
const SpiralMesh = ({ color }) => {
    const meshRef = useRef(null);
    const path = useMemo(() => {
        const pathPoints = [];
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
    return (_jsx("mesh", { ref: meshRef, geometry: tubeGeometry, rotation: [Math.PI / 2, 0, 0], children: _jsx("meshStandardMaterial", { color: color }) }));
};
export default function SpiralCanvas() {
    const { selectedProject } = useProject();
    const { cameraPosition, bgColor, spiralColor } = useCanvas();
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);
    const canvasWidth = isMobile && selectedProject !== null
        ? "0%"
        : selectedProject === null
            ? "100%"
            : "23.5%";
    return (_jsxs(Canvas
    // className={selectedProject === null ? "canvas-home" : "canvas-project"}
    , { 
        // className={selectedProject === null ? "canvas-home" : "canvas-project"}
        style: {
            background: bgColor,
            height: "100vh",
            position: "absolute",
            width: canvasWidth,
            transitionProperty: "all",
            transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
            transitionDuration: "500ms",
        }, 
        // style={{
        //   background: bgColor,
        // }}
        // className={`spiral-canvas ${
        //   selectedProject === null ? "project-null" : "project-selected"
        // }`}
        camera: { position: cameraPosition, fov: 75, near: 1, far: 10000 }, gl: { antialias: true }, children: [_jsx("ambientLight", { intensity: 4 }), _jsx(OrbitControls, { rotateSpeed: 0.17, zoomSpeed: 0.17 }), _jsx(SpiralMesh, { color: spiralColor })] }));
}
