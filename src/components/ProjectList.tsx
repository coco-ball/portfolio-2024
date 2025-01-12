import { useNavigate } from "react-router-dom";
import { useProject } from "@/contexts/ProjectContext";
import projectData from "@/data/projectdata";
import { Project } from "@/App";

export default function ProjectList() {
  const { selectedProject, setSelectedProject } = useProject();

  const navigate = useNavigate();
  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
    navigate("/project");
  };

  return (
    <div
      className={`col-span-1 -rotate-6 mt-auto mb-16 ${
        selectedProject !== null ? "pl-14" : "pl-40"
      }`}
    >
      <div className="home-category">Project</div>
      <div className="home-content">
        <ul>
          {projectData.map((project: Project, idx) => (
            <div
              className={`w-fit button ${
                selectedProject === project ? "current" : ""
              }`}
              key={idx}
              onClick={() => {
                handleProjectClick(project);
              }}
            >
              {project.shortenName ? project.shortenName : project.name}
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
}
