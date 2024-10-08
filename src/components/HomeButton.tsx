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
    <div className="absolute right-3 bottom-1 ">
      <a href="/" onClick={resetToHome}>
        <img
          src={Logo}
          alt="Home"
          className="w-12 -rotate-6 ml-auto mr-40 mix-blend-exclusion "
        />
      </a>

      <p className="sohne-light text-black text-right text-xs mt-32 ">
        Copyright 2024. ChaewonYu all rights reserved.
      </p>
    </div>
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
