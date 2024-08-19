import ProjectDetail from "@/components/project/ProjectDetail";
import ProjectList from "@/components/project/ProjectList";
import { useState } from "react";

export type Project = {
  name: string;
  year: string;
  link: string;
  engDescription: string;
  korDescription: string;
  mainCategory: string;
  category: string;
  tools: string;
  image: string[];
  engHonors: string | null;
  korHonors: string | null;
};

export default function ProjectPage() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <div className="grid grid-cols-4 gap-3">
      <div className="-rotate-6 absolute left-16 top-32 ">
        <ProjectList
          selectedProject={selectedProject}
          setSelectedProject={setSelectedProject}
        ></ProjectList>
      </div>
      <div className="col-start-2 pt-14 h-screen overflow-y-scroll">
        <ProjectDetail selectedProject={selectedProject}></ProjectDetail>
      </div>
      <ul className="col-span-2 h-screen overflow-y-scroll">
        {selectedProject?.image.map((img, idx) => (
          <img
            src={`/image/project/${img}`}
            className="w-full"
            alt=""
            key={idx}
          />
        ))}
      </ul>
    </div>
  );
}
