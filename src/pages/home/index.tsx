import ProjectList from "@/components/project/ProjectList";
// import Navbar from "@/components/common/Navbar";
import { useEffect, useMemo, useState } from "react";
import * as THREE from "three";
import About from "@/components/common/About";
import ProjectInfo from "@/components/common/ProjectInfo";
import SpiralCanvas from "@/components/common/SpiralCanvas";

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

function HomePage() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isSelected, setIsSelected] = useState<boolean>(false);

  useEffect(() => {
    setIsSelected(selectedProject != null ? true : false);
  }, [selectedProject]);

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
    <div>
      <SpiralCanvas
        cameraPosition={cameraPosition}
        bgColor={bgColor}
        spiralColor={spiralColor}
        canvasWidth="100%"
      />
      {/* <main className="h-screen flex flex-wrap justify-between content-center mx-20 text-white mix-blend-exclusion"> */}
      <main className="h-screen grid grid-cols-4 text-black ">
        {/* <img src={Logo} className="h-[20rem]" alt="Logo"></img> */}
        <div
          className={`col-span-1 -rotate-6 mt-auto mb-16 ${
            isSelected ? "pl-14" : "pl-40"
          } transition-all duration-700`}
        >
          <div className="home-category">Project</div>
          <div className="home-content">
            <ProjectList
              selectedProject={selectedProject}
              setSelectedProject={setSelectedProject}
            ></ProjectList>
          </div>
        </div>
        {isSelected ? (
          <ProjectInfo selectedProject={selectedProject}></ProjectInfo>
        ) : (
          <About></About>
        )}
      </main>
    </div>
  );
}

export default HomePage;
