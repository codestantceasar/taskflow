import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import profile from "../assets/profile.jpeg";

function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar />

      {/* Hero */}
      <section className="mx-auto max-w-6xl px-6 py-24 text-center">
        <img
          src={profile}
          alt="Constantine Akas"
          className="mx-auto mb-6 h-48 w-48 rounded-full border-4 border-cyan-500 object-cover shadow-2xl"
        />

        <p className="mb-4 text-cyan-400 font-semibold">
          Software Engineer • Entrepreneur • Builder
        </p>

        <h1 className="mb-6 text-5xl font-bold md:text-7xl">
          Constantine Akas
        </h1>

        <p className="mx-auto mb-10 max-w-3xl text-lg text-slate-400">
          Software Engineering student at African Leadership University
          building software products, exploring AI and mobile development,
          and solving real-world problems through technology and
          entrepreneurship.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <Link
            to="/projects"
            className="rounded-xl bg-cyan-500 px-6 py-3 font-semibold text-black"
          >
            View Projects
          </Link>

          <Link
            to="/resume"
            className="rounded-xl border border-slate-700 px-6 py-3"
          >
            Download Resume
          </Link>

          <Link
            to="/contact"
            className="rounded-xl border border-slate-700 px-6 py-3"
          >
            Contact Me
          </Link>
        </div>
      </section>

      {/* Stats */}
      <section className="mx-auto max-w-6xl px-6 pb-20">
        <div className="grid gap-6 md:grid-cols-4">
          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 transition duration-300 hover:-translate-y-2 hover:border-cyan-500">
            <h2 className="text-4xl font-bold text-cyan-400">10+</h2>
            <p className="mt-2 text-slate-400">Projects</p>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 transition duration-300 hover:-translate-y-2 hover:border-cyan-500">
            <h2 className="text-4xl font-bold text-cyan-400">4+</h2>
            <p className="mt-2 text-slate-400">Certificates</p>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 transition duration-300 hover:-translate-y-2 hover:border-cyan-500">
            <h2 className="text-4xl font-bold text-cyan-400">3+</h2>
            <p className="mt-2 text-slate-400">Professional Roles</p>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 transition duration-300 hover:-translate-y-2 hover:border-cyan-500">
            <h2 className="text-4xl font-bold text-cyan-400">1</h2>
            <p className="mt-2 text-slate-400">Startup Founder</p>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="mx-auto max-w-6xl px-6 pb-20">
        <h2 className="mb-8 text-4xl font-bold">
          Featured Projects
        </h2>

        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 transition duration-300 hover:-translate-y-2 hover:border-cyan-500">
            <h3 className="mb-2 text-xl font-bold">
              PortfolioFlow AI
            </h3>

            <p className="text-slate-400">
              A platform for creating and managing professional portfolios.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 transition duration-300 hover:-translate-y-2 hover:border-cyan-500">
            <h3 className="mb-2 text-xl font-bold">
              Spotlight
            </h3>

            <p className="text-slate-400">
              A talent discovery platform built with Flutter and Firebase.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 transition duration-300 hover:-translate-y-2 hover:border-cyan-500">
            <h3 className="mb-2 text-xl font-bold">
              ConstructionConnect
            </h3>

            <p className="text-slate-400">
              A construction marketplace developed using Flutter.
            </p>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="mx-auto max-w-6xl px-6 pb-24">
        <h2 className="mb-8 text-4xl font-bold">
          Core Skills
        </h2>

        <div className="flex flex-wrap gap-3">
          {[
            "Python",
            "Flutter",
            "Dart",
            "React",
            "JavaScript",
            "Machine Learning",
            "Git",
            "Linux",
            "REST APIs",
            "Firebase",
          ].map((skill) => (
            <span
              key={skill}
              className="rounded-full bg-slate-900 px-4 py-2"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>
        <Footer />
    </div>
  );
}

export default Home;