import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Outlet } from "react-router-dom";
import { CurrentProjectProvider } from "./contexts/CurrentPageContext";
import { ProjectProvider } from "./contexts/ProjectContext";
import { CanvasProvider } from "./contexts/CanvasContext";
import SpiralCanvas from "@/components/SpiralCanvas";
// import ProjectList from "@/components/ProjectList";
import HomeButton from "./components/HomeButton";
function App() {
    return (_jsx(CurrentProjectProvider, { children: _jsx(ProjectProvider, { children: _jsx("div", { className: "h-screen md:h-screen md:grid md:grid-cols-4", children: _jsxs(CanvasProvider, { children: [_jsx(SpiralCanvas, {}), _jsx(Outlet, {}), _jsx(HomeButton, {}), _jsx("p", { className: "md:absolute md:right-3 md:bottom-1 sohne-light bg-black text-gray-100 md:bg-inherit md:text-black text-right text-xs pr-1 md:pr-0 md:mt-32 ", children: "Copyright 2024. ChaewonYu all rights reserved." })] }) }) }) }));
}
export default App;
