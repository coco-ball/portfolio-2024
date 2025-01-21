import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useNavigate } from "react-router-dom";
import { useCurrentPage } from "@/contexts/CurrentPageContext";
import { useProject } from "@/contexts/ProjectContext";
import projectData from "@/data/projectdata";
export default function ProjectList() {
    const { selectedProject, setSelectedProject } = useProject();
    const { currentPage } = useCurrentPage();
    const navigate = useNavigate();
    const handleProjectClick = (project) => {
        setSelectedProject(project);
        navigate("/project");
    };
    if (currentPage === "home") {
        setSelectedProject(null);
    }
    if (!selectedProject && currentPage === "project") {
        setSelectedProject(projectData[0]);
    }
    return (_jsx("div", { className: "col-span-1 flex", children: _jsxs("div", { 
            // className={`-rotate-6 mt-auto mb-16 bg-white mix-blend-exclusion pl-1 hover:mix-blend-normal ${
            //   selectedProject !== null ? "ml-14" : "ml-14"
            // }`}
            className: `-rotate-6 mt-auto ml-[6.5rem] md:ml-[1rem] xl:ml-[6.75rem] mb-16 bg-white mix-blend-exclusion pb-[0.1rem] md:hover:mix-blend-normal ${currentPage === "home" ? "hover:mix-blend-normal" : ""}`, children: [_jsx("div", { className: "home-category pl-1", children: "Project" }), _jsx("div", { className: "home-content min-w-80 md:min-w-60", children: _jsx("ul", { children: projectData.map((project, idx) => (_jsx("div", { className: `pl-1 w-fill button ${selectedProject === project ? "current" : ""}`, onClick: () => {
                                handleProjectClick(project);
                            }, children: project.shortenName ? project.shortenName : project.name }, idx))) }) })] }) }));
}
