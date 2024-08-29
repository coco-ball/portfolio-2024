import ProjectList from "@/components/project/ProjectList";
// import Navbar from "@/components/common/Navbar";
import { useEffect, useMemo, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Spiral from "@/components/common/spiral";
import About from "@/components/common/About";
import ProjectInfo from "@/components/common/ProjectInfo";

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
    return [x, y, z]; // 배열로 반환
  }, []);

  const bgColor = useMemo(() => {
    const r = Math.floor(Math.random() * 256) + 20; // 0~255 값 생성
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256) + 20;
    return `rgb(${r}, ${g}, ${b})`; // CSS용 rgb 문자열 생성
  }, []);

  useEffect(() => {
    console.log(selectedProject);
  }, [selectedProject]);

  return (
    <div>
      <Canvas
        style={{
          background: bgColor,
          height: "100vh",
          position: "absolute",
          width: isSelected ? "23.5%" : "100%",
          transitionProperty: "all",
          transitionTimingFunction: "cubic - bezier(0.4, 0, 0.2, 1)",
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
        <Spiral />
      </Canvas>
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
