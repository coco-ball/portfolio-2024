// import Logo from "@/../public/image/logo/logo_transparent.png";
// import { useCanvas } from "@/contexts/CanvasContext";
import { useCurrentPage } from "@/contexts/CurrentPageContext";

export default function HomeButton() {
  const resetToHome = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    // setSelectedProject(null);
    e.preventDefault();
    window.location.href = "/"; // 무조건 새로고침하면서 홈으로 이동
  };

  const { currentPage } = useCurrentPage();

  return (
    <>
      <a
        href="/"
        onClick={resetToHome}
        // className="fixed w-1/4 md:w-screen md:mix-blend-exclusion right-4 top-6 md:left-10 md:top-11 z-50 transition-all hover:mix-blend-normal"
        className={`fixed w-1/4 md:mix-blend-exclusion right-4 top-6 md:left-10 md:top-11 z-50 transition-all hover:mix-blend-normal ${
          currentPage === "home"
            ? "md:w-screen"
            : "mix-blend-exclusion md:w-[21rem]"
        }`}
      >
        <div className="transition-all home-category -rotate-6 bg-white px-1 pb-[0.05rem]">
          {/* currentPage === "home" ? "www.cwwwyu.kr" : "Home" */}
          Home
        </div>
        {/* <img
          src={Logo}
          alt="Home"
          className={
            "w-12 md:-rotate-6 transition-all " +
            (selectedProject ? "" : "-rotate-6")
          }
        /> */}
      </a>
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
