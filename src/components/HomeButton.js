import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
// import Logo from "@/../public/image/logo/logo_transparent.png";
// import { useCanvas } from "@/contexts/CanvasContext";
import { useCurrentPage } from "@/contexts/CurrentPageContext";
export default function HomeButton() {
    const resetToHome = (e) => {
        // setSelectedProject(null);
        e.preventDefault();
        window.location.href = "/"; // 무조건 새로고침하면서 홈으로 이동
    };
    const { currentPage } = useCurrentPage();
    return (_jsx(_Fragment, { children: _jsx("a", { href: "/", onClick: resetToHome, 
            // className="fixed w-1/4 md:w-screen md:mix-blend-exclusion right-4 top-6 md:left-10 md:top-11 z-50 transition-all hover:mix-blend-normal"
            // className={`fixed w-1/4 md:mix-blend-exclusion right-4 top-6 md:left-10 md:top-11 z-50 transition-all hover:mix-blend-normal ${
            //   currentPage === "home"
            //     ? "md:w-screen"
            //     : "mix-blend-exclusion md:w-[21rem]"
            // }`}
            className: `fixed w-28 md:mix-blend-exclusion right-4 top-6 md:left-10 md:top-11 z-50 transition-all hover:mix-blend-normal ${currentPage === "home" ? "" : "mix-blend-exclusion"}`, children: _jsx("div", { className: "transition-all home-category -rotate-6 bg-white px-1 pb-[0.05rem]", children: "Home" }) }) }));
}
