import LogoSmall from "@/../public/image/logo_small.gif";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const router = useNavigate();
  if (window.location.pathname === "/") return null;

  return (
    <div className="flex-col w-fit">
      <div className="relative h-64 w-[624px]" onClick={() => router("/")}>
        <img src={LogoSmall} className="h-full absolute" alt="Logo" />
        <img
          src={LogoSmall}
          className="h-full absolute left-[156px]"
          alt="Logo"
        />
      </div>
      <div className="flex justify-center gap-16 pr-16">
        <button
          className="hover:underline underline-offset-4"
          onClick={() => router("/about")}
        >
          About
        </button>
        <button
          className="hover:underline underline-offset-4"
          onClick={() => router("/project")}
        >
          Project
        </button>
        <button
          className="hover:underline underline-offset-4"
          onClick={() => router("/contact")}
        >
          Contact
        </button>
      </div>
      ;
    </div>
  );
}
