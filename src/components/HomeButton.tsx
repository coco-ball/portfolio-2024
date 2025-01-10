import Logo from "@/../public/image/logo/logo_transparent.png";
import { useProject } from "@/contexts/ProjectContext";
// import { useCanvas } from "@/contexts/CanvasContext";
// import { Link } from "react-router-dom";

export default function HomeButton() {
  const { setSelectedProject } = useProject();
  // const { resetSpiralCanvas } = useCanvas();
  const resetToHome = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    setSelectedProject(null);
    // resetSpiralCanvas();
    e.preventDefault();
    window.location.href = "/"; // 무조건 새로고침하면서 홈으로 이동
  };

  return (
    <>
      <a
        href="/"
        onClick={resetToHome}
        className="md:absolute md:left-10 md:top-10"
      >
        <img
          src={Logo}
          alt="Home"
          className="md:block hidden w-12 -rotate-6 mix-blend-exclusion "
        />
      </a>

      <p className="md:absolute md:right-3 md:bottom-1 sohne-light bg-black text-gray-100 md:bg-inherit md:text-black text-right text-xs pr-1 md:pr-0 md:mt-32 ">
        Copyright 2024. ChaewonYu all rights reserved.
      </p>
    </>
  );
}

// export default function HomeButton() {
//   return (
//     <Link to="/">
//       <img
//         src={Logo}
//         className="absolute right-24 bottom-20 w-8 mix-blend-exclusion -rotate-6 "
//       ></img>
//     </Link>
//   );
// }
