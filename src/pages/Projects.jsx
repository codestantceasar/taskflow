import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Projects() {
  const projects = [
    {
      title: "PortfolioFlow AI",
      tech: ["React", "Vite", "Tailwind CSS"],
      description:
        "A portfolio management platform that helps users showcase projects, certifications, skills, and professional experience.",
      github: "#",
    },
    {
      title: "Spotlight",
      tech: ["Flutter", "Dart", "Firebase"],
      description:
        "A talent discovery platform where creators can showcase their skills and gain visibility.",
      github:
        "https://github.com/codestantceasar/Spotlight--formative-assignment-2",
    },
    {
      title: "ConstructionConnect",
      tech: ["Flutter", "Firebase"],
      description:
        "A construction marketplace connecting contractors, suppliers, and clients.",
      github:
        "https://github.com/Shumbusho43/constructionconnect",
    },
    {
      title: "Nigeria Transparency Program",
      tech: ["HTML", "CSS", "JavaScript"],
      description:
        "A civic technology platform focused on transparency, accountability, and citizen engagement.",
      github:
        "https://github.com/codestantceasar/Nigeria-Transparency-program",
    },
    {
      title: "ALU Machine Learning",
      tech: ["Python", "NumPy", "Machine Learning"],
      description:
        "Machine learning projects covering neural networks, classification, regression, and model evaluation.",
      github:
        "https://github.com/codestantceasar/alu-machine_learning",
    },
    {
      title: "Linear Regression Model",
      tech: ["Python", "Jupyter Notebook"],
      description:
        "Implementation of linear regression algorithms for predictive analytics and data modeling.",
      github:
        "https://github.com/codestantceasar/linear_regression_model",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar />

      <div className="mx-auto max-w-6xl px-6 py-16">
        <h1 className="mb-4 text-5xl font-bold">
          Projects
        </h1>

        <p className="mb-12 text-slate-400">
          Software engineering, mobile development, machine learning,
          and entrepreneurship projects.
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
                    className="rounded-full bg-slate-800 px-3 py-1 text-sm"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <p className="mb-5 text-slate-400">
                {project.description}
              </p>

              {project.github !== "#" ? (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="font-semibold text-cyan-400 hover:underline"
                >
                  View GitHub →
                </a>
              ) : (
                <span className="text-slate-500">
                  Coming Soon
                </span>
              )}
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Projects;