import Link from "next/link";
import { ArrowRight, FileText, Sparkles, Zap } from "lucide-react";
import { profile, projects, orgs } from "@/data/portfolio";

const stackChips = ["Next.js", "React", "TypeScript", "TanStack Query", "Tailwind"];

export default function Hero() {
  return (
    <section className="relative overflow-hidden scroll-mt-20 pb-28 pt-16 sm:pt-20" id="home">
      <div className="pointer-events-none absolute inset-0 bg-grid" aria-hidden />
      <div className="pointer-events-none absolute inset-0 bg-noise" aria-hidden />
      <div className="pointer-events-none absolute -top-24 right-0 size-[420px] rounded-full bg-primary/20 blur-[140px]" aria-hidden />
      <div className="pointer-events-none absolute bottom-0 left-0 size-[320px] rounded-full bg-cyan-500/10 blur-[120px]" aria-hidden />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-4 sm:px-6 lg:grid-cols-2">
        <div className="flex flex-col gap-8">
          <div className="inline-flex w-fit items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-bold uppercase tracking-widest text-primary">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
            </span>
            Available for Work
          </div>
          <div>
            <h1 className="font-display mb-6 text-5xl font-black leading-[1.08] tracking-tight text-white md:text-7xl">
              {profile.name.split(" ")[0]}{" "}
              <span className="bg-gradient-to-r from-primary to-cyan-400 bg-clip-text text-transparent">
                {profile.name.split(" ")[1]}
              </span>
            </h1>
            <p className="mb-4 text-xl font-medium text-slate-300 md:text-2xl">{profile.title}</p>
            <p className="max-w-lg text-lg leading-relaxed text-slate-400">{profile.tagline}</p>
          </div>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/#projects"
              className="inline-flex items-center gap-2 rounded-xl bg-primary px-8 py-4 font-bold text-white transition-all hover:shadow-xl hover:shadow-primary/30"
            >
              View Work
              <ArrowRight className="size-5" aria-hidden />
            </Link>
            <Link
              href="/resume"
              className="inline-flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-800/80 px-8 py-4 font-bold text-white transition-all hover:border-slate-500 hover:bg-slate-800"
            >
              <FileText className="size-5" aria-hidden />
              View Resume
            </Link>
          </div>
          <dl className="grid max-w-lg grid-cols-3 gap-4 border-t border-white/5 pt-8">
            <div>
              <dt className="text-xs font-semibold uppercase tracking-wider text-slate-500">Experience</dt>
              <dd className="font-display mt-1 text-2xl font-bold text-white">4.8+ yrs</dd>
            </div>
            <div>
              <dt className="text-xs font-semibold uppercase tracking-wider text-slate-500">Projects</dt>
              <dd className="font-display mt-1 text-2xl font-bold text-white">{projects.length}</dd>
            </div>
            <div>
              <dt className="text-xs font-semibold uppercase tracking-wider text-slate-500">Companies</dt>
              <dd className="font-display mt-1 text-2xl font-bold text-white">{orgs.length}</dd>
            </div>
          </dl>
        </div>

        <div className="relative hidden lg:block">
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-slate-900/60 p-8 shadow-2xl shadow-primary/10 backdrop-blur-sm">
            <div className="absolute -right-16 -top-16 size-48 rounded-full bg-primary/20 blur-3xl" aria-hidden />
            <div className="relative flex flex-col gap-6">
              <div className="flex items-center gap-3 text-slate-400">
                <Sparkles className="size-4 text-primary" aria-hidden />
                <span className="text-xs font-bold uppercase tracking-widest">Currently building</span>
              </div>
              <p className="font-display text-3xl font-bold text-white">FinTech Loan Application & CRM</p>
              <p className="text-slate-400">
                Next.js App Router, SSG/ISR, SEO, and Core Web Vitals, CRM and Management System.
              </p>
              <div className="flex flex-wrap gap-2">
                {stackChips.map((chip) => (
                  <span
                    key={chip}
                    className="rounded-full border border-slate-700 bg-slate-800/80 px-3 py-1 text-xs font-semibold text-slate-200"
                  >
                    {chip}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <div className="absolute -bottom-20 -left-8 rounded-2xl border border-slate-700 bg-slate-800/95 p-6 shadow-xl backdrop-blur">
            <div className="flex items-center gap-4">
              <div className="flex size-12 items-center justify-center rounded-full bg-primary/20 text-primary">
                <Zap className="size-5" aria-hidden />
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-tighter text-slate-400">Current Role</p>
                <p className="font-bold text-white">Frontend Engineer @ LNVS Fintech</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
