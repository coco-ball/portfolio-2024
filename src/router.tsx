import { createBrowserRouter } from "react-router-dom";
import App from "./app";
import About from "./pages/about";
import Home from "./pages/home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "", element: <Home /> },
      { path: "about", element: <About /> },
    ],
  },
]);

export default router;
