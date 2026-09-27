import { Link } from "react-router-dom";
import { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 border-b border-slate-800 bg-slate-950/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link to="/" className="text-2xl font-bold text-white">
          Constantine<span className="text-cyan-400">Akas</span>
        </Link>

        {/* Desktop Menu */}
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

        {/* Desktop Button */}
        <Link
          to="/contact"
          className="hidden rounded-lg bg-cyan-500 px-4 py-2 font-semibold text-black md:block"
        >
          Hire Me
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="text-3xl text-white md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="border-t border-slate-800 bg-slate-900 md:hidden">
          <div className="flex flex-col px-6 py-4">
            <Link
              to="/"
              className="py-3 text-slate-300 hover:text-cyan-400"
              onClick={() => setMenuOpen(false)}
            >
              Home
            </Link>

            <Link
              to="/about"
              className="py-3 text-slate-300 hover:text-cyan-400"
              onClick={() => setMenuOpen(false)}
            >
              About
            </Link>

            <Link
              to="/projects"
              className="py-3 text-slate-300 hover:text-cyan-400"
              onClick={() => setMenuOpen(false)}
            >
              Projects
            </Link>

            <Link
              to="/experience"
              className="py-3 text-slate-300 hover:text-cyan-400"
              onClick={() => setMenuOpen(false)}
            >
              Experience
            </Link>

            <Link
              to="/certificates"
              className="py-3 text-slate-300 hover:text-cyan-400"
              onClick={() => setMenuOpen(false)}
            >
              Certificates
            </Link>

            <Link
              to="/resume"
              className="py-3 text-slate-300 hover:text-cyan-400"
              onClick={() => setMenuOpen(false)}
            >
              Resume
            </Link>

            <Link
              to="/contact"
              className="py-3 text-slate-300 hover:text-cyan-400"
              onClick={() => setMenuOpen(false)}
            >
              Contact
            </Link>

            <Link
              to="/contact"
              className="mt-3 rounded-lg bg-cyan-500 px-4 py-3 text-center font-semibold text-black"
              onClick={() => setMenuOpen(false)}
            >
              Hire Me
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;