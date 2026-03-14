import { skills } from "../data/portfolio";
import { useScrollSpy } from "../context/ScrollSpyContext";

const categories = [
  { key: "frontend", label: "Frontend", icon: "brush" },
  { key: "backend", label: "Backend", icon: "database" },
  { key: "tools", label: "Tools & Platforms", icon: "terminal" },
  { key: "techniques", label: "Techniques", icon: "psychology" },
];

export default function Skills() {
  const { activeSection } = useScrollSpy();
  const isActive = activeSection === "skills";

  return (
    <section
      id="skills"
      className={`scroll-mt-20 py-24 bg-slate-50 dark:bg-slate-900/50 ${isActive ? "ring-inset ring-l-4 ring-primary/50" : ""}`}
    >
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-black mb-16 text-slate-900 dark:text-white">
          Technical Arsenal
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
          {categories.map(({ key, label, icon }) => (
            <div
              key={key}
              className="bg-white dark:bg-slate-800 p-6 rounded-3xl border border-slate-200 dark:border-slate-700 shadow-sm flex flex-col"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="size-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <span className="material-symbols-outlined text-xl">{icon}</span>
                </div>
                <h3 className="text-lg font-bold tracking-tight text-slate-900 dark:text-white">
                  {label}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills[key].map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 bg-slate-100 dark:bg-slate-700 rounded-lg text-xs font-semibold text-slate-700 dark:text-slate-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
