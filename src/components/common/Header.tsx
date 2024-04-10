import LogoSmall from "@/../public/image/logo_small.gif";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
export default function Header() {
  const router = useNavigate();
  if (window.location.pathname === "/") return null;

  return (
    <div className="flex-col w-fit">
      <div className="relative h-64 w-[624px]" onClick={() => router("/")}>
        {/* router 지역변수 겹침 */}
        <img src={LogoSmall} className="h-full absolute" alt="Logo" />
        <img
          src={LogoSmall}
          className="h-full absolute left-[156px]"
          alt="Logo"
        />
      </div>
      <Navbar />
    </div>
  );
}
