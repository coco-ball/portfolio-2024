import ProjectDetail from "@/components/project/ProjectDetail";
import projectList from "@/data/projectdata";
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
      <ul className="text-sm -rotate-6 absolute left-16 top-32 w-60">
        {projectList.map((project: Project, idx) => (
          <div
            className={`button ${selectedProject === project ? "current" : ""}`}
            key={idx}
            onClick={() => {
              setSelectedProject(project);
            }}
          >
            {project.name}
          </div>
        ))}
      </ul>
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
