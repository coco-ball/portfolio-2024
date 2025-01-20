import { useNavigate } from "react-router-dom";
import { useCurrentPage } from "@/contexts/CurrentPageContext";
import { useProject } from "@/contexts/ProjectContext";
import projectData from "@/data/projectdata";
import { Project } from "@/App";

export default function ProjectList() {
  const { selectedProject, setSelectedProject } = useProject();
  const { currentPage } = useCurrentPage();

  const navigate = useNavigate();
  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
    navigate("/project");
  };

  if (currentPage === "home") {
    setSelectedProject(null);
  }
  if (!selectedProject && currentPage === "project") {
    setSelectedProject(projectData[0]);
  }

  return (
    <div className="col-span-1 flex">
      <div
        // className={`-rotate-6 mt-auto mb-16 bg-white mix-blend-exclusion pl-1 hover:mix-blend-normal ${
        //   selectedProject !== null ? "ml-14" : "ml-14"
        // }`}
        className={`-rotate-6 mt-auto ml-[6.5rem] md:ml-[1rem] xl:ml-[6.75rem] mb-16 bg-white mix-blend-exclusion pb-[0.1rem] md:hover:mix-blend-normal ${
          currentPage === "home" ? "hover:mix-blend-normal" : ""
        }`} //backdrop-blur-sm
      >
        <div className="home-category pl-1">Project</div>
        <div className="home-content min-w-80 md:min-w-60">
          <ul>
            {projectData.map((project: Project, idx) => (
              <div
                className={`pl-1 w-fill button ${
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
    </div>
  );
}
