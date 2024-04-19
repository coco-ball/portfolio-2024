import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const router = useNavigate();
  return (
    <div className="flex justify-center gap-16 pr-8">
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
  );
}
