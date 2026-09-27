import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Resume() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar />

      <div className="mx-auto max-w-4xl px-6 py-16">
        <h1 className="mb-6 text-5xl font-bold">
          Resume
        </h1>

        <p className="mb-8 text-slate-400">
          Download my latest resume below.
        </p>

        <a
          href="/Constantine_Akas_Resume.pdf"
          download
          className="inline-block rounded-xl bg-cyan-500 px-6 py-3 font-semibold text-black"
        >
          Download Resume
        </a>
      </div>

      <Footer />
    </div>
  );
}

export default Resume;