// import LogoSmall from "@/../public/image/logo_small.gif";
import LogoSquare from "@/../public/image/logo/logo_square.png";
import { useMemo } from "react";
import { Link, useLocation } from "react-router-dom";
import Navbar from "./Navbar";

export default function Header() {
  const location = useLocation();

  const currentTab = useMemo(() => {
    if (location.pathname === "/") return "home";
    if (location.pathname === "/about") return "about";
    if (location.pathname === "/project") return "project";
    return "unknown";
  }, [location.pathname]);

  return (
    <div
      className={
        "flex w-fill sticky justify-between p-8 " +
        `${currentTab === "home" ? "hidden" : ""}`
      }
    >
      {/* LongSpiral Logo */}
      {/* <div className="relative h-64 w-[624px]" onClick={() => router("/")}>
        <img src={LogoSmall} className="h-full absolute" alt="Logo" />
        <img
          src={LogoSmall}
          className="h-full absolute left-[156px]"
          alt="Logo"
        />
      </div> */}
      <Link to="/">
        <img src={LogoSquare} className="h-16"></img>
      </Link>
      <Navbar currentTab={currentTab}></Navbar>
    </div>
  );
}
