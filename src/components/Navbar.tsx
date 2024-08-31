import { Link } from "react-router-dom";

type NavbarProps = { currentTab: string };

export default function Navbar({ currentTab }: NavbarProps) {
  return (
    <div className="flex justify-center gap-16 pr-8">
      <Link
        to="/"
        className={`button ${currentTab === "home" ? "current" : ""}`}
      >
        Home
      </Link>
      <Link
        to="/project"
        className={`button ${currentTab === "project" ? "current" : ""}`}
      >
        Project
      </Link>
    </div>
  );
}
