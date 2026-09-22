import {
  Brush,
  Database,
  Gauge,
  Layers,
  Palette,
  Search,
  Server,
  Terminal,
} from "lucide-react";
import { skills } from "@/data/portfolio";

const categories = [
  { key: "frontend", label: "Frontend", icon: Brush },
  { key: "dataForms", label: "Data & Forms", icon: Database },
  { key: "ui", label: "UI & Styling", icon: Palette },
  { key: "rendering", label: "Rendering", icon: Layers },
  { key: "performance", label: "Performance", icon: Gauge },
  { key: "seo", label: "SEO", icon: Search },
  { key: "backend", label: "Backend", icon: Server },
  { key: "tools", label: "Tools & Platforms", icon: Terminal },
];

export default function Skills() {
  return (
    <section id="skills" className="scroll-mt-20 bg-slate-950/40 py-24">
      <div className="mx-auto max-w-7xl px-4 text-center sm:px-6">
        <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-primary">Capabilities</p>
        <h2 className="font-display mb-16 text-4xl font-black text-white">Technical Arsenal</h2>
        <div className="grid grid-cols-1 gap-6 text-left md:grid-cols-2 lg:grid-cols-4">
          {categories.map(({ key, label, icon: Icon }) => (
            <div
              key={key}
              className="flex flex-col rounded-3xl border border-slate-800 bg-slate-900/70 p-6 shadow-sm transition-colors hover:border-primary/30"
            >
              <div className="mb-6 flex items-center gap-3">
                <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Icon className="size-5" aria-hidden />
                </div>
                <h3 className="text-lg font-bold tracking-tight text-white">{label}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills[key].map((skill) => (
                  <span
                    key={skill}
                    className="rounded-lg bg-slate-800 px-3 py-1.5 text-xs font-semibold text-slate-300 transition-colors hover:bg-primary/15 hover:text-white"
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
