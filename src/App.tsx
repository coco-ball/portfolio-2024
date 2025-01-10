import { Outlet } from "react-router-dom";
import { ProjectProvider } from "./contexts/ProjectContext";
import { CanvasProvider } from "./contexts/CanvasContext";
import SpiralCanvas from "@/components/SpiralCanvas";
import ProjectList from "@/components/ProjectList";
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
    <ProjectProvider>
      <div className="md:h-screen md:grid md:grid-cols-4">
        <CanvasProvider>
          <SpiralCanvas />
          {/* <img src={Logo} className="h-[20rem]" alt="Logo"></img> */}
          <ProjectList />
          <Outlet></Outlet>
          <HomeButton></HomeButton>
        </CanvasProvider>
      </div>
    </ProjectProvider>
  );
}

export default App;
