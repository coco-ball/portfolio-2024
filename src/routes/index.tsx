import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import HomePage from "../pages/home/index";
import ProjectPage from "../pages/project/index";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "", element: <HomePage /> },
      { path: "project", element: <ProjectPage /> },
    ],
  },
]);

export default router;
