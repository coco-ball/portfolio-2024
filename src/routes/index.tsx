import { createBrowserRouter } from "react-router-dom";
import App from "@/app";
import HomePage from "@/pages/home";
import AboutPage from "@/pages/about";
import ProjectPage from "@/pages/project";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "", element: <HomePage /> },
      { path: "about", element: <AboutPage /> },
      { path: "project", element: <ProjectPage /> },
    ],
  },
]);

export default router;
