import { ArrowUpRight, Code2, GraduationCap, Landmark, Leaf, Network, ShoppingBag, Wallet, Workflow } from "lucide-react";
import { projects } from "@/data/portfolio";

const typeStyles = {
  "Web3 / NFT": {
    gradient: "from-violet-500/35 to-primary/10",
    badge: "bg-violet-600",
    icon: Network,
  },
  "E-commerce": {
    gradient: "from-emerald-500/35 to-primary/10",
    badge: "bg-emerald-600",
    icon: ShoppingBag,
  },
  FinTech: {
    gradient: "from-cyan-500/35 to-primary/10",
    badge: "bg-cyan-600",
    icon: Wallet,
  },
  "B2B FinTech": {
    gradient: "from-blue-500/35 to-primary/10",
    badge: "bg-blue-600",
    icon: Landmark,
  },
  Web3: {
    gradient: "from-fuchsia-500/35 to-primary/10",
    badge: "bg-fuchsia-600",
    icon: Workflow,
  },
  LMS: {
    gradient: "from-amber-500/35 to-primary/10",
    badge: "bg-amber-600",
    icon: GraduationCap,
  },
  Events: {
    gradient: "from-rose-500/35 to-primary/10",
    badge: "bg-rose-600",
    icon: Leaf,
  },
};

const fallbackStyle = {
  gradient: "from-primary/30 to-primary/5",
  badge: "bg-primary",
  icon: Code2,
};

export default function Projects() {
  return (
    <section id="projects" className="scroll-mt-20 bg-slate-950/40 py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mb-16 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-primary">Selected work</p>
            <h2 className="font-display mb-4 text-4xl font-black text-white">Featured Projects</h2>
            <p className="max-w-xl text-slate-400">
              A selection of my work, from Web3 and e-commerce to fintech and internal tools.
            </p>
          </div>
          <span className="w-fit rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
            {projects.length} projects
          </span>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => {
            const style = typeStyles[project.type] || fallbackStyle;
            const Icon = style.icon;
            return (
              <article
                key={project.name}
                className="group flex flex-col overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/70 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-2xl hover:shadow-primary/10"
              >
                <div className={`relative aspect-video overflow-hidden bg-gradient-to-br ${style.gradient}`}>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Icon className="size-16 text-white/25 transition-transform duration-300 group-hover:scale-110" aria-hidden />
                  </div>
                  <div className="absolute left-4 top-4">
                    <span
                      className={`${style.badge} rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-white`}
                    >
                      {project.type}
                    </span>
                  </div>
                </div>
                <div className="flex grow flex-col p-8">
                  <h3 className="mb-2 text-xl font-bold text-white">{project.name}</h3>
                  <p className="mb-6 grow text-sm leading-relaxed text-slate-400">{project.description}</p>
                  <div className="mt-auto flex items-center justify-between">
                    <span className="rounded-lg bg-slate-800 px-2 py-1 text-[10px] font-medium text-slate-300">
                      {project.type}
                    </span>
                    {project.link ? (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1 text-sm font-bold text-primary"
                      >
                        Details
                        <ArrowUpRight className="size-4" aria-hidden />
                      </a>
                    ) : (
                      <span className="text-sm text-slate-600">Private</span>
                    )}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
