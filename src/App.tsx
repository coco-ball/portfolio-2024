import { Outlet } from "react-router-dom";
import { CurrentProjectProvider } from "./contexts/CurrentPageContext";
import { ProjectProvider } from "./contexts/ProjectContext";
import { CanvasProvider } from "./contexts/CanvasContext";
import SpiralCanvas from "@/components/SpiralCanvas";
// import ProjectList from "@/components/ProjectList";
import HomeButton from "./components/HomeButton";

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
  return (
    <CurrentProjectProvider>
      <ProjectProvider>
        <div className="h-screen md:grid md:grid-cols-4">
          <CanvasProvider>
            <SpiralCanvas />
            {/* <img src={Logo} className="h-[20rem]" alt="Logo"></img> */}
            {/* <ProjectList /> */}
            <Outlet></Outlet>
            <HomeButton></HomeButton>
            <p className="md:absolute md:right-3 md:bottom-1 sohne-light bg-black text-gray-100 md:bg-inherit md:text-black text-right text-xs pr-1 md:pr-0 md:mt-32 ">
              Copyright 2024. ChaewonYu all rights reserved.
            </p>
          </CanvasProvider>
        </div>
      </ProjectProvider>
    </CurrentProjectProvider>
  );
}

export default App;
