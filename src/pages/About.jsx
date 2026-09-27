import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import profile from "../assets/profile.jpeg";

function About() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar />

      <div className="mx-auto max-w-6xl px-6 py-16">
        <h1 className="mb-12 text-center text-5xl font-bold">
          About Me
        </h1>

        <div className="grid items-center gap-12 md:grid-cols-2">
          {/* Profile Image */}
          <div className="flex justify-center">
            <img
              src={profile}
              alt="Constantine Akas"
              className="h-80 w-80 rounded-3xl object-cover shadow-2xl"
            />
          </div>

          {/* About Text */}
          <div>
            <h2 className="mb-4 text-3xl font-bold text-cyan-400">
              Constantine Akas
            </h2>

            <p className="mb-4 text-slate-300">
              I am a Software Engineering student at African Leadership
              University (ALU) with a passion for building technology that
              solves real-world problems.
            </p>

            <p className="mb-4 text-slate-300">
              My interests span software development, mobile applications,
              artificial intelligence, machine learning, entrepreneurship,
              and digital innovation.
            </p>

            <p className="mb-4 text-slate-300">
              I have worked on projects ranging from Flutter mobile
              applications and machine learning systems to web platforms
              focused on governance, transparency, and community impact.
            </p>

            <p className="mb-4 text-slate-300">
              Beyond software engineering, I enjoy exploring business,
              leadership, and technology-driven solutions that can improve
              lives and create opportunities across Africa.
            </p>

            <p className="text-slate-300">
              My goal is to become a world-class software engineer,
              entrepreneur, and technology innovator capable of building
              products that create lasting impact.
            </p>
          </div>
        </div>

        {/* Education */}
        <section className="mt-20">
          <h2 className="mb-8 text-4xl font-bold">
            Education
          </h2>

          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
            <h3 className="text-2xl font-bold">
              African Leadership University
            </h3>

            <p className="mt-2 text-cyan-400">
              BSc Software Engineering
            </p>

            <p className="mt-2 text-slate-400">
              Expected Graduation: 2027
            </p>
          </div>
        </section>

        {/* Interests */}
        <section className="mt-20">
          <h2 className="mb-8 text-4xl font-bold">
            Interests
          </h2>

          <div className="flex flex-wrap gap-4">
            {[
              "Software Engineering",
              "Flutter Development",
              "Artificial Intelligence",
              "Machine Learning",
              "Entrepreneurship",
              "Web Development",
              "Product Design",
              "Innovation",
              "Leadership",
            ].map((item) => (
              <span
                key={item}
                className="rounded-full bg-slate-900 px-5 py-3"
              >
                {item}
              </span>
            ))}
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
}

export default About;