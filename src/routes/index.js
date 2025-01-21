import { jsx as _jsx } from "react/jsx-runtime";
import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import HomePage from "../pages/home/index";
import ProjectPage from "../pages/project/index";
const router = createBrowserRouter([
    {
        path: "/",
        element: _jsx(App, {}),
        children: [
            { path: "", element: _jsx(HomePage, {}) },
            { path: "project", element: _jsx(ProjectPage, {}) },
        ],
    },
]);
export default router;
