import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Experience() {
  const experiences = [
    {
      role: "Founder / Food Entrepreneur",
      company: "Caesar's Kitchen",
      period: "2025 – Present",
      description:
        "Founded and operate a food business, managing product development, sales, pricing, customer service, inventory, marketing, and daily operations.",
    },
    {
      role: "Social Media Manager",
      company: "Bubble Tea Rwanda",
      period: "Aug 2024 – Aug 2025",
      description:
        "Created marketing content, managed digital campaigns, developed content strategies, and supported customer engagement across social platforms.",
    },
    {
      role: "Remote Web3 Research Extern",
      company: "Webacy",
      period: "Jul 2024 – Aug 2024",
      description:
        "Conducted blockchain security competitor research, analyzed decentralized solutions, and prepared strategic market reports.",
    },
    {
      role: "Virtual Assistant Trainee",
      company: "ALX",
      period: "Jul 2024 – Aug 2024",
      description:
        "Managed administrative tasks, scheduling, communication, and developed strong remote collaboration skills.",
    },
    {
      role: "Creative Sales Representative",
      company: "Paul & cc Enterprise",
      period: "2019 – 2024",
      description:
        "Supported sales operations, customer communication, relationship building, and KPI-driven business growth initiatives.",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar />

      <div className="mx-auto max-w-6xl px-6 py-16">
        <h1 className="mb-4 text-5xl font-bold">
          Experience
        </h1>

        <p className="mb-12 text-slate-400">
          Professional, entrepreneurial, and leadership experience.
        </p>

        <div className="space-y-6">
          {experiences.map((exp) => (
            <div
              key={exp.role}
              className="rounded-2xl border border-slate-800 bg-slate-900 p-6 transition duration-300 hover:border-cyan-500"
            >
              <h2 className="text-2xl font-bold">
                {exp.role}
              </h2>

              <p className="mt-1 text-cyan-400">
                {exp.company}
              </p>

              <p className="mt-1 text-slate-500">
                {exp.period}
              </p>

              <p className="mt-4 text-slate-400">
                {exp.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Experience;