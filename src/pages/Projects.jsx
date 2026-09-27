import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Projects() {
  const projects = [
    {
      title: "Taskflow",
      tech: ["React", "Vite", "Tailwind CSS"],
      description:
        "Personal portfolio platform showcasing projects, certifications, skills, experience, and career achievements.",
      github: "https://github.com/codestantceasar/taskflow",
    },
    {
      title: "Spotlight",
      tech: ["Flutter", "Dart", "Firebase"],
      description:
        "Talent discovery platform where creators showcase skills, gain visibility, and build professional profiles.",
      github:
        "https://github.com/codestantceasar/Spotlight--formative-assignment-2",
    },
    {
      title: "ConstructionConnect",
      tech: ["Flutter", "Firebase"],
      description:
        "Construction marketplace connecting contractors, suppliers, and clients.",
      github:
        "https://github.com/Shumbusho43/constructionconnect",
    },
    {
      title: "Connect Care Rwanda",
      tech: ["Flutter", "Healthcare"],
      description:
        "Healthcare-focused application designed to improve access to medical information and services.",
      github:
        "https://github.com/codestantceasar/connect-care-Rwanda",
    },
    {
      title: "ALU Machine Learning",
      tech: ["Python", "NumPy", "Machine Learning"],
      description:
        "Collection of machine learning projects covering classification, neural networks, model evaluation, and predictive analytics.",
      github:
        "https://github.com/codestantceasar/alu-machine_learning",
    },
    {
      title: "Linear Regression Model",
      tech: ["Python", "Jupyter Notebook"],
      description:
        "Predictive analytics project implementing linear regression techniques for data modeling.",
      github:
        "https://github.com/codestantceasar/linear_regression_model",
    },
    {
      title: "Nigeria Transparency Program",
      tech: ["HTML", "CSS", "JavaScript"],
      description:
        "Civic technology platform focused on transparency, accountability, and citizen engagement.",
      github:
        "https://github.com/codestantceasar/Nigeria-Transparency-program",
    },
    {
      title: "DSA Sparse Matrix",
      tech: ["Python", "Data Structures"],
      description:
        "Data structures and algorithms project focused on sparse matrix implementation and optimization.",
      github:
        "https://github.com/codestantceasar/DSA-HW01---Sparse-Matrix",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar />

      <div className="mx-auto max-w-7xl px-6 py-16">
        <h1 className="mb-4 text-5xl font-bold">
          Projects
        </h1>

        <p className="mb-12 text-slate-400">
          A collection of software engineering, mobile development,
          machine learning, and problem-solving projects built throughout
          my academic and professional journey.
        </p>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.title}
              className="rounded-2xl border border-slate-800 bg-slate-900 p-6 transition duration-300 hover:-translate-y-2 hover:border-cyan-500"
            >
              <h2 className="mb-3 text-2xl font-bold">
                {project.title}
              </h2>

              <div className="mb-4 flex flex-wrap gap-2">
                {project.tech.map((item) => (
                  <span
                    key={item}
                    className="rounded-full bg-slate-800 px-3 py-1 text-sm text-slate-300"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <p className="mb-5 text-slate-400">
                {project.description}
              </p>

              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="font-semibold text-cyan-400 hover:underline"
              >
                View GitHub →
              </a>
            </div>
          ))}
        </div>

        <div className="mt-16 rounded-2xl border border-slate-800 bg-slate-900 p-8 text-center">
          <h2 className="mb-4 text-3xl font-bold">
            30+ Additional GitHub Repositories
          </h2>

          <p className="mb-6 text-slate-400">
            My GitHub profile contains additional repositories covering
            Machine Learning, Backend Development, DevOps, Linux,
            Data Structures & Algorithms, Web Development, API
            integrations, and collaborative university projects.
          </p>

          <a
            href="https://github.com/codestantceasar"
            target="_blank"
            rel="noreferrer"
            className="inline-block rounded-xl bg-cyan-500 px-6 py-3 font-semibold text-black transition hover:scale-105"
          >
            View GitHub Profile
          </a>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Projects;