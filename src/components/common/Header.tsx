// import LogoSmall from "@/../public/image/logo_small.gif";
import LogoSquare from "@/../public/image/logo_square.png";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
export default function Header() {
  const router = useNavigate();
  if (window.location.pathname === "/") return null;

  return (
    <div className="flex w-fill justify-between p-8">
      {/* LongSpiral Logo */}
      {/* <div className="relative h-64 w-[624px]" onClick={() => router("/")}>
        <img src={LogoSmall} className="h-full absolute" alt="Logo" />
        <img
          src={LogoSmall}
          className="h-full absolute left-[156px]"
          alt="Logo"
        />
      </div> */}
      <img src={LogoSquare} className="h-16" onClick={() => router("/")}></img>
      <Navbar />
    </div>
  );
}
