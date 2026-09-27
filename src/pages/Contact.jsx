import Navbar from "../components/Navbar";

function Contact() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar />

      <div className="mx-auto max-w-4xl px-6 py-16">
        <h1 className="mb-4 text-5xl font-bold">
          Contact
        </h1>

        <p className="mb-10 text-slate-400">
          Let's connect and discuss opportunities, projects, or collaborations.
        </p>

        <div className="grid gap-6">
          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 transition duration-300 hover:-translate-y-2 hover:border-cyan-500">
            <h2 className="mb-2 text-xl font-bold">Email</h2>
            <p className="text-slate-300">
              c.akas@alustudent.com
            </p>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 transition duration-300 hover:-translate-y-2 hover:border-cyan-500">
            <h2 className="mb-2 text-xl font-bold">LinkedIn</h2>
            <a
              href="https://linkedin.com/in/constantine-akas-"
              target="_blank"
              rel="noreferrer"
              className="text-cyan-400"
            >
              linkedin.com/in/constantine-akas-
            </a>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 transition duration-300 hover:-translate-y-2 hover:border-cyan-500">
            <h2 className="mb-2 text-xl font-bold">GitHub</h2>
            <a
              href="https://github.com/codestantceasar"
              target="_blank"
              rel="noreferrer"
              className="text-cyan-400"
            >
              github.com/codestantceasar
            </a>
          </div>

         <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 transition duration-300 hover:-translate-y-2 hover:border-cyan-500">
  <h2 className="mb-2 text-xl font-bold">Location</h2>

  <p className="text-slate-300">
    Kigali, Rwanda
  </p>
</div>
<div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 transition duration-300 hover:-translate-y-2 hover:border-cyan-500">
  <h2 className="mb-2 text-xl font-bold">
    Availability
  </h2>

  <p className="text-slate-300">
    Open to internships, software engineering opportunities, collaborations, and entrepreneurial projects.
  </p>
</div>
        </div>
      </div>
    </div>
  );
}

export default Contact;