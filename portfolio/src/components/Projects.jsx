import { Link } from "react-router-dom";
import { projects } from "../data/portfolio";
import { useScrollSpy } from "../context/ScrollSpyContext";

export default function Projects() {
  const { activeSection } = useScrollSpy();
  const isActive = activeSection === "projects";

  return (
    <section
      id="projects"
      className={`scroll-mt-20 py-24 bg-slate-50 dark:bg-slate-900/50 ${isActive ? "ring-inset ring-l-4 ring-primary/50" : ""}`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <h2 className="text-4xl font-black mb-4 text-slate-900 dark:text-white">
              Featured Projects
            </h2>
            <p className="text-slate-500 dark:text-slate-400 max-w-xl">
              A selection of my work, from Web3 and e-commerce to fintech and internal tools.
            </p>
          </div>
          <Link
            to="/#projects"
            className="text-primary font-bold flex items-center gap-2 group w-fit"
          >
            View All Projects
            <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">
              arrow_forward
            </span>
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.name}
              className="group flex flex-col bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 overflow-hidden hover:shadow-2xl transition-all"
            >
              <div className="relative aspect-video overflow-hidden bg-gradient-to-br from-primary/20 to-primary/5">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="material-symbols-outlined text-primary/30 text-6xl">code</span>
                </div>
                <div className="absolute top-4 left-4">
                  <span className="bg-primary/90 backdrop-blur-md text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase">
                    {project.type}
                  </span>
                </div>
              </div>
              <div className="p-8 flex flex-col grow">
                <h3 className="text-xl font-bold mb-2 text-slate-900 dark:text-white">
                  {project.name}
                </h3>
                <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-6 grow">
                  {project.description}
                </p>
                <div className="flex items-center justify-between mt-auto">
                  <div className="flex gap-2 flex-wrap">
                    <span className="text-[10px] bg-slate-100 dark:bg-slate-700 px-2 py-1 rounded font-medium text-slate-600 dark:text-slate-300">
                      {project.type}
                    </span>
                  </div>
                  {project.link ? (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noreferrer"
                      className="text-primary flex items-center gap-1 font-bold text-sm"
                    >
                      Details
                      <span className="material-symbols-outlined text-sm">open_in_new</span>
                    </a>
                  ) : (
                    <span className="text-slate-400 dark:text-slate-500 text-sm">—</span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
