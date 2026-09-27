import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b border-slate-800 bg-slate-950/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link to="/" className="text-2xl font-bold text-white">
          Constantine<span className="text-cyan-400">Akas</span>
        </Link>

        <div className="hidden gap-6 md:flex">
          <Link to="/" className="text-slate-300 hover:text-cyan-400">
            Home
          </Link>

          <Link to="/about" className="text-slate-300 hover:text-cyan-400">
            About
          </Link>

          <Link to="/projects" className="text-slate-300 hover:text-cyan-400">
            Projects
          </Link>

          <Link
            to="/experience"
            className="text-slate-300 hover:text-cyan-400"
          >
            Experience
          </Link>

          <Link
            to="/certificates"
            className="text-slate-300 hover:text-cyan-400"
          >
            Certificates
          </Link>

          <Link
            to="/resume"
            className="text-slate-300 hover:text-cyan-400"
          >
            Resume
          </Link>

          <Link
            to="/contact"
            className="text-slate-300 hover:text-cyan-400"
          >
            Contact
          </Link>
        </div>

        <Link
          to="/contact"
          className="rounded-lg bg-cyan-500 px-4 py-2 font-semibold text-black"
        >
          Hire Me
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;