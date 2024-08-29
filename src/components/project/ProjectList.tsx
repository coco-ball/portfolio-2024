import projectData from "@/data/projectdata";
import { Project } from "@/pages/home";

type ProjectListProps = {
  selectedProject: Project | null;
  setSelectedProject: React.Dispatch<React.SetStateAction<Project | null>>;
};

export default function ProjectList({
  selectedProject,
  setSelectedProject,
}: ProjectListProps) {
  return (
    <ul>
      {projectData.map((project: Project, idx) => (
        <div
          className={`w-fit button ${
            selectedProject === project ? "current" : ""
          }`}
          key={idx}
          onClick={() => {
            setSelectedProject(project);
          }}
        >
          {project.shortenName ? project.shortenName : project.name}
        </div>
      ))}
    </ul>
  );
}
