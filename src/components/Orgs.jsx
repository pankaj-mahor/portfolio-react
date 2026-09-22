import { CheckCircle2 } from "lucide-react";
import { orgs } from "@/data/portfolio";

export default function Orgs() {
  return (
    <section id="experience" className="relative scroll-mt-20 py-24">
      <div className="pointer-events-none absolute left-1/2 top-32 hidden h-[70%] w-px -translate-x-1/2 bg-gradient-to-b from-primary/40 via-slate-800 to-transparent md:block" aria-hidden />
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <p className="mb-3 text-center text-xs font-bold uppercase tracking-[0.2em] text-primary">Career</p>
        <h2 className="font-display mb-16 text-center text-4xl font-black text-white">My Career Roadmap</h2>
        <ol className="relative border-l border-slate-800 md:border-l-0">
          {orgs.map((org, index) => (
            <li key={org.name} className="relative mb-16 last:mb-0 md:grid md:grid-cols-2 md:gap-12">
              <div
                className={`absolute -left-[5px] top-1.5 size-2.5 rounded-full border-2 border-background-dark md:left-1/2 md:-translate-x-1/2 ${
                  index === 0 ? "bg-primary shadow-[0_0_12px] shadow-primary/80" : "bg-slate-600"
                }`}
                aria-hidden
              />
              <div
                className={`ml-8 md:ml-0 ${
                  index % 2 === 1 ? "md:col-start-1 md:pr-8 md:text-right" : "md:col-start-2 md:pl-8"
                }`}
              >
                <span className="text-sm font-bold text-primary">{org.period}</span>
                <h3 className="font-display mt-1 text-2xl font-bold text-white">{org.role}</h3>
                <p className={`font-medium text-slate-300 ${org.childCompany ? "" : "mb-4"}`}>
                  {org.childCompany || org.name}
                  {org.location ? ` · ${org.location}` : ""}
                </p>
                {org.childCompany ? (
                  <p className="mb-4 mt-1 text-xs font-semibold uppercase tracking-wider text-slate-500">
                    Child company of {org.name}
                  </p>
                ) : null}
                <ul className="flex flex-col gap-2 text-sm text-slate-400">
                  {org.highlights.slice(0, 3).map((h) => (
                    <li
                      key={h}
                      className={`flex items-start gap-3 ${index % 2 === 1 ? "md:flex-row-reverse" : ""}`}
                    >
                      <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
                <div className={`mt-4 flex flex-wrap gap-2 ${index % 2 === 1 ? "md:justify-end" : ""}`}>
                  {org.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded bg-slate-800 px-2 py-1 text-[10px] font-medium text-slate-400"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
