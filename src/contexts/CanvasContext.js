import { jsx as _jsx } from "react/jsx-runtime";
import { createContext, useContext, useState, useEffect, } from "react";
import * as THREE from "three";
const CanvasContext = createContext(undefined);
export const CanvasProvider = ({ children, }) => {
    const [cameraPosition, setCameraPosition] = useState([500, 0, 0]);
    const [bgColor, setBgColor] = useState("rgb(255,255,255)");
    const [spiralColor, setSpiralColor] = useState(new THREE.Color(255, 255, 255));
    const resetSpiralCanvas = () => {
        const x = Math.random() * 1150;
        const y = Math.random() * 800 - 400;
        const z = Math.random() * 800 - 400;
        const randomCameraPosition = [x, y, z];
        const r = Math.floor(Math.random() * 256) + 20;
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256) + 20;
        const randomBgColor = `rgb(${r}, ${g}, ${b})`;
        const randomSpiralColor = new THREE.Color(Math.random(), Math.random(), Math.random());
        console.log(randomCameraPosition);
        setCameraPosition(randomCameraPosition);
        setBgColor(randomBgColor);
        setSpiralColor(randomSpiralColor);
    };
    useEffect(() => {
        resetSpiralCanvas();
    }, []);
    return (_jsx(CanvasContext.Provider, { value: {
            cameraPosition,
            setCameraPosition,
            bgColor,
            setBgColor,
            spiralColor,
            setSpiralColor,
            resetSpiralCanvas,
        }, children: children }));
};
export const useCanvas = () => {
    const context = useContext(CanvasContext);
    if (context === undefined) {
        throw new Error("useCanvas must be used within a CanvasProvider");
    }
    return context;
};
