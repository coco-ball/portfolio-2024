import { Outlet } from "react-router-dom";
import { useEffect, useMemo, useState } from "react";
import * as THREE from "three";
import SpiralCanvas from "@/components/common/SpiralCanvas";
import ProjectList from "@/components/project/ProjectList";
import HomeButton from "./components/common/HomeButton";

export type Project = {
  name: string;
  shortenName?: string;
  year: string;
  link: string;
  engDescription: string;
  korDescription: string;
  mainCategory: string;
  category: string;
  tools: string;
  image: string[];
  engHonors?: string;
  korHonors?: string;
};

function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  // const [isSelected, setIsSelected] = useState<boolean>(false);

  // useEffect(() => {
  //   setIsSelected(selectedProject != null ? true : false);
  // }, [selectedProject]);

  const cameraPosition: [number, number, number] = useMemo(() => {
    const x = Math.random() * 1150;
    const y = Math.random() * 800 - 400;
    const z = Math.random() * 800 - 400;
    return [x, y, z];
  }, []);

  const bgColor: string = useMemo(() => {
    const r = Math.floor(Math.random() * 256) + 20;
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256) + 20;
    return `rgb(${r}, ${g}, ${b})`;
  }, []);

  const spiralColor: THREE.Color = useMemo(() => {
    const r = Math.random();
    const g = Math.random();
    const b = Math.random();
    return new THREE.Color(r, g, b);
  }, []);

  useEffect(() => {
    console.log(selectedProject);
  }, [selectedProject]);

  return (
    <div className="h-screen grid grid-cols-4">
      <SpiralCanvas
        cameraPosition={cameraPosition}
        bgColor={bgColor}
        spiralColor={spiralColor}
        canvasWidth="100%"
      ></SpiralCanvas>
      {/* <img src={Logo} className="h-[20rem]" alt="Logo"></img> */}
      <ProjectList
        selectedProject={selectedProject}
        setSelectedProject={setSelectedProject}
      ></ProjectList>
      <Outlet></Outlet>
      <HomeButton></HomeButton>
    </div>
  );
}

export default App;
