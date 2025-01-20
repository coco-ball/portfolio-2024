// import Logo from "@/../public/image/logo/logo_transparent.png";
// import { useCanvas } from "@/contexts/CanvasContext";

export default function HomeButton() {
  const resetToHome = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    // setSelectedProject(null);
    e.preventDefault();
    window.location.href = "/"; // 무조건 새로고침하면서 홈으로 이동
  };

  return (
    <>
      <a
        href="/"
        onClick={resetToHome}
        className="fixed mix-blend-exclusion left-4 top-8 md:left-10 md:top-10 z-50 transition-all hover:mix-blend-normal"
      >
        <div className="home-category -rotate-6 bg-white px-1 pb-[0.05rem]">
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
