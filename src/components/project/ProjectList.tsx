import projectData from "@/data/projectdata";
import { Project } from "@/pages/project";
// import { useState } from "react";

type ProjectListProps = {
  selectedProject: Project | null;
  setSelectedProject: React.Dispatch<React.SetStateAction<Project | null>>;
};

export default function ProjectList({
  selectedProject,
  setSelectedProject,
}: ProjectListProps) {
  return (
    <ul className="text-sm -rotate-6 absolute left-16 top-32 ">
      {projectData.map((project: Project, idx) => (
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
  );
}
