//context 쓸 필요없음 ProejctList에서만 쓰임

import React, { createContext, useContext, ReactNode } from "react";
import { useLocation } from "react-router-dom";

type CurrentPageType = "home" | "project" | "unknown";

type CurrentPageContextType = {
  currentPage: CurrentPageType;
};

const CurrentPageContext = createContext<CurrentPageContextType | undefined>(
  undefined
);

export const CurrentProjectProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const location = useLocation();

  const currentPage: CurrentPageType =
    location.pathname === "/"
      ? "home"
      : location.pathname === "/project"
      ? "project"
      : "unknown";

  return (
    <CurrentPageContext.Provider value={{ currentPage }}>
      {children}
    </CurrentPageContext.Provider>
  );
};

export const useCurrentPage = () => {
  const context = useContext(CurrentPageContext);
  if (context === undefined) {
    throw new Error("useCurrentPage must be used within a CurrentPageProvider");
  }
  return context;
};
