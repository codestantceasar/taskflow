import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { auth } from "../firebase/firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate("/login");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar />

      <div className="mx-auto max-w-6xl px-6 py-16">
        <h1 className="mb-4 text-5xl font-bold">
          Portfolio Dashboard
        </h1>

        <p className="mb-2 text-cyan-400">
          Logged in as: {auth.currentUser?.email}
        </p>

        <button
          onClick={handleLogout}
          className="mb-8 rounded-lg bg-red-500 px-4 py-2 font-semibold text-white hover:bg-red-600"
        >
          Logout
        </button>

        <p className="mb-12 text-slate-400">
          Manage projects, certifications, skills, and career growth.
        </p>

        <div className="grid gap-6 md:grid-cols-4">
          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
            <h2 className="text-4xl font-bold text-cyan-400">
              10+
            </h2>
            <p className="mt-2 text-slate-400">
              Projects
            </p>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
            <h2 className="text-4xl font-bold text-cyan-400">
              4
            </h2>
            <p className="mt-2 text-slate-400">
              Certificates
            </p>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
            <h2 className="text-4xl font-bold text-cyan-400">
              5
            </h2>
            <p className="mt-2 text-slate-400">
              Experiences
            </p>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
            <h2 className="text-4xl font-bold text-cyan-400">
              20+
            </h2>
            <p className="mt-2 text-slate-400">
              Skills
            </p>
          </div>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
            <h2 className="mb-4 text-2xl font-bold">
              Current Focus
            </h2>

            <ul className="space-y-3 text-slate-400">
              <li>🚀 PortfolioFlow AI</li>
              <li>📱 Flutter Development</li>
              <li>🤖 Machine Learning</li>
              <li>🌐 Full-Stack Web Development</li>
              <li>💡 Entrepreneurship</li>
            </ul>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
            <h2 className="mb-4 text-2xl font-bold">
              2026 Goals
            </h2>

            <ul className="space-y-3 text-slate-400">
              <li>✔ Build PortfolioFlow AI</li>
              <li>✔ Complete ALU ML Coursework</li>
              <li>✔ Strengthen React Skills</li>
              <li>✔ Publish More Projects</li>
              <li>✔ Secure Software Internship</li>
            </ul>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Dashboard;