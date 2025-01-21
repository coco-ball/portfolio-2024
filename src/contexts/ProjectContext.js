import { jsx as _jsx } from "react/jsx-runtime";
import { createContext, useContext, useState } from "react";
const ProjectContext = createContext(undefined);
export const ProjectProvider = ({ children, }) => {
    const [selectedProject, setSelectedProject] = useState(null);
    return (_jsx(ProjectContext.Provider, { value: { selectedProject, setSelectedProject }, children: children }));
};
export const useProject = () => {
    const context = useContext(ProjectContext);
    if (context === undefined) {
        throw new Error("useProject must be used within a ProjectProvider");
    }
    return context;
};
