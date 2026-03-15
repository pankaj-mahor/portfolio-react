import { orgs } from "../data/portfolio";
import { useScrollSpy } from "../context/ScrollSpyContext";

export default function Orgs() {
  const { activeSection } = useScrollSpy();
  const isActive = activeSection === "experience";

  return (
    <section
      id="experience"
      className={`scroll-mt-20 py-24 relative ${isActive ? "ring-inset ring-l-4 ring-primary/50" : ""}`}
    >
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-4xl font-black mb-16 text-center text-slate-900 dark:text-white">
          My Career Roadmap
        </h2>
        {orgs.map((org, index) => (
          <div key={org.name} className="mb-16 relative last:mb-0">
            <div
              className={`absolute top-0 -left-[11px] md:left-1/2 md:-translate-x-1/2 size-5 rounded-full border-4 border-background-light dark:border-background-dark ${
                index === 0 ? "bg-primary" : "bg-slate-300 dark:bg-slate-700"
              }`}
            />
            <div
              className={`ml-10 ${
                index % 2 === 1
                  ? "md:w-[calc(50%-1.5rem)] md:pr-12 md:text-right"
                  : "md:w-[calc(50%-1.5rem)] md:ml-[calc(50%+0.5rem)] md:pl-12"
              }`}
            >
              <span className="text-primary font-bold text-sm">
                {org.period}
              </span>
              <h3 className="text-2xl font-bold mt-1 text-slate-900 dark:text-white">
                {org.role}
              </h3>
              <p className="text-slate-500 dark:text-slate-400 font-medium mb-4">
                {org.name}
              </p>
              <ul className="flex flex-col gap-2 text-slate-500 dark:text-slate-500 text-sm">
                {org.highlights.slice(0, 3).map((h, i) => (
                  <li
                    key={i}
                    className={`flex items-start gap-3 ${index % 2 === 1 ? "md:flex-row-reverse md:items-end" : ""}`}
                  >
                    <span className="material-symbols-outlined text-primary text-sm mt-0.5 shrink-0">
                      check_circle
                    </span>
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2 mt-4">
                {org.tech.map((t) => (
                  <span
                    key={t}
                    className="text-[10px] bg-slate-100 dark:bg-slate-700 px-2 py-1 rounded font-medium text-slate-600 dark:text-slate-400"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
        <div className="relative border-l-2 border-slate-200 dark:border-slate-800 ml-4 md:ml-0 md:left-1/2 md:-translate-x-px"></div>
      </div>
    </section>
  );
}
