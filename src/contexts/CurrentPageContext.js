import { jsx as _jsx } from "react/jsx-runtime";
//context 쓸 필요없음 ProejctList에서만 쓰임
import { createContext, useContext } from "react";
import { useLocation } from "react-router-dom";
const CurrentPageContext = createContext(undefined);
export const CurrentProjectProvider = ({ children, }) => {
    const location = useLocation();
    const currentPage = location.pathname === "/"
        ? "home"
        : location.pathname === "/project"
            ? "project"
            : "unknown";
    return (_jsx(CurrentPageContext.Provider, { value: { currentPage }, children: children }));
};
export const useCurrentPage = () => {
    const context = useContext(CurrentPageContext);
    if (context === undefined) {
        throw new Error("useCurrentPage must be used within a CurrentPageProvider");
    }
    return context;
};
