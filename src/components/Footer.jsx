function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950">
      <div className="mx-auto max-w-6xl px-6 py-8">
        <h3 className="text-xl font-bold text-white">
          PortfolioFlow<span className="text-cyan-400">AI</span>
        </h3>

        <p className="mt-2 text-slate-400">
          Built by Constantine Akas
        </p>

        <div className="mt-4 flex gap-6">
          <a
            href="https://github.com/codestantceasar"
            target="_blank"
            rel="noreferrer"
            className="text-slate-400 hover:text-cyan-400"
          >
            GitHub
          </a>

          <a
            href="https://linkedin.com/in/constantineakas"
            target="_blank"
            rel="noreferrer"
            className="text-slate-400 hover:text-cyan-400"
          >
            LinkedIn
          </a>

          <a
            href="mailto:c.akas@alustudent.com"
            className="text-slate-400 hover:text-cyan-400"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;