import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useEffect, useRef } from "react";
import { useProject } from "@/contexts/ProjectContext";
import ProjectList from "@/components/ProjectList";
export default function ProjectPage() {
    const { selectedProject } = useProject();
    const imageContainerRef = useRef(null);
    useEffect(() => {
        if (imageContainerRef.current) {
            imageContainerRef.current.scrollTo(0, 0);
        }
    }, [selectedProject]);
    return (_jsxs(_Fragment, { children: [_jsx(ProjectList, {}), _jsx("div", { className: "col-span-1 overflow-y-scroll", children: _jsxs("div", { className: 
                    // "mb-8 md:mb-20 pt-14 pl-3 pr-8" + (selectedProject ? "" : "hidden")
                    "mb-8 md:mb-20 pt-4 md:pt-14 px-4 md:pl-0 md:pr-6" +
                        (selectedProject ? "" : "hidden"), children: [_jsx("div", { className: "project-summary", children: selectedProject?.year + ", " + selectedProject?.mainCategory }), _jsx("div", { className: "text-[3rem] leading-[1.12] mt-2", children: selectedProject?.name }), _jsxs("div", { className: "text-sm mt-5", children: [_jsxs("div", { className: "flex gap-7", children: [_jsx("p", { className: "w-20", children: "category" }), _jsx("p", { className: "w-full", children: selectedProject?.category })] }), _jsxs("div", { className: "flex gap-7", children: [_jsx("p", { className: "w-20", children: "tools" }), _jsx("p", { className: "w-full", children: selectedProject?.tools })] })] }), _jsxs("div", { className: "text-sm mt-20 text-justify hyphens-auto", children: [_jsx("p", { className: "mb-5", children: selectedProject?.engDescription }), _jsx("p", { children: selectedProject?.korDescription })] })] }) }), _jsxs("ul", { ref: imageContainerRef, className: "col-span-2 overflow-y-scroll", children: [_jsx("div", { children: selectedProject?.engHonors && (_jsxs("div", { className: "flex gap-3 text-[0.68rem] md:text-xs sohne-light w-full px-4 py-1 bg-black text-white overflow-clip", children: [_jsx("p", { className: "w-60 flex-1", children: selectedProject?.engHonors }), _jsx("p", { className: "w-60 flex-1", children: selectedProject?.korHonors })] })) }), selectedProject?.image.map((img, idx) => (_jsx("img", { src: `/image/project/${img}`, className: "w-full", alt: "" }, idx)))] })] }));
}
