import { Link } from "react-router-dom";

type NavbarProps = { currentTab: string };

export default function Navbar({ currentTab }: NavbarProps) {
  return (
    <div className="flex justify-center gap-16 pr-8">
      <Link to="/" className={`tab ${currentTab === "home" ? "current" : ""}`}>
        Home
      </Link>
      <Link
        to="/about"
        className={`tab ${currentTab === "about" ? "current" : ""}`}
      >
        About
      </Link>
      <Link
        to="/project"
        className={`tab ${currentTab === "project" ? "current" : ""}`}
      >
        Project
      </Link>
    </div>
  );
}
