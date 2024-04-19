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
  image: Image[];
};

type Image = { id: number; name: string };

export default function ProjectPage() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <div className="h-full grid grid-cols-4 gap-3">
      <ul className="text-sm ml-24 -rotate-6">
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
      <ProjectDetail selectedProject={selectedProject}></ProjectDetail>
      <ul className="col-span-2 h-screen overflow-y-scroll">
        {selectedProject?.image.map((img) => (
          <img
            src={`/image/project/${img.name}`}
            className="w-full"
            alt=""
            key={img.id}
          />
        ))}
      </ul>
    </div>
  );
}
