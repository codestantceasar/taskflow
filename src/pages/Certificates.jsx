import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Certificates() {
  const certificates = [
    {
      title: "Neural Networks and Deep Learning",
      provider: "Coursera",
      issued: "2026",
      skills: "Deep Learning, Neural Networks, AI, Machine Learning",
      link: "https://www.coursera.org/account/accomplishments/verify/ZX8XHKQEHOHD",
    },
    {
      title: "Flutter and Dart: Developing iOS, Android, and Mobile Apps",
      provider: "Coursera",
      issued: "2026",
      skills: "Flutter, Dart, Mobile Development, UI Design",
      link: "https://www.coursera.org/account/accomplishments/certificate/59I8P3AZXHWH",
    },
    {
      title: "R Programming",
      provider: "Coursera",
      issued: "2026",
      skills: "Data Analysis, R, Statistics, Data Visualization",
      link: "https://www.coursera.org/account/accomplishments/certificate/AB9RQEMX6MV7",
    },
    {
      title: "Financial Planning for Young Adults",
      provider: "Coursera",
      issued: "2026",
      skills: "Financial Literacy, Budgeting, Personal Finance",
      link: "https://www.coursera.org/account/accomplishments/certificate/TM5FPMR5YHRD",
    },
    {
  title: "ALX Virtual Assistant Program",
  provider: "ALX Africa",
  issued: "2024",
  skills:
    "Email Management, Calendar Management, Communication, Organization, Remote Work",
  link: "/ALX_Virtual_Assistant_Certificate.png",
},
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar />

      <div className="mx-auto max-w-6xl px-6 py-16">
        <h1 className="mb-4 text-5xl font-bold">
          Certifications
        </h1>

        <p className="mb-12 text-slate-400">
          Professional development and continuous learning achievements.
        </p>

        <div className="grid gap-6 md:grid-cols-2">
          {certificates.map((cert) => (
            <div
              key={cert.title}
              className="rounded-2xl border border-slate-800 bg-slate-900 p-6 transition duration-300 hover:-translate-y-2 hover:border-cyan-500"
            >
              <h2 className="mb-2 text-2xl font-bold">
                {cert.title}
              </h2>

              <p className="mb-1 text-cyan-400">
                {cert.provider}
              </p>

              <p className="mb-3 text-slate-500">
                Issued: {cert.issued}
              </p>

              <p className="mb-5 text-slate-400">
                {cert.skills}
              </p>

              <a
                href={cert.link}
                target="_blank"
                rel="noreferrer"
                className="font-semibold text-cyan-400 hover:underline"
              >
                View Credential →
              </a>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Certificates;