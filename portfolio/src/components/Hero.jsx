import { Link } from "react-router-dom";
import { profile } from "../data/portfolio";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-20 pb-32 scroll-mt-20" id="home">
      <div className="absolute top-0 right-0 -z-10 w-1/3 h-1/3 bg-primary/10 blur-[120px] rounded-full" />
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="flex flex-col gap-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
            </span>
            Available for Work
          </div>
          <div>
            <h1 className="text-5xl md:text-7xl font-black tracking-tight leading-[1.1] mb-6 text-slate-900 dark:text-white">
              {profile.name.split(" ")[0]}{" "}
              <span className="text-primary">{profile.name.split(" ")[1]}</span>
            </h1>
            <p className="text-xl md:text-2xl font-medium text-slate-600 dark:text-slate-400 mb-4">
              {profile.title}
            </p>
            <p className="text-lg text-slate-500 dark:text-slate-500 leading-relaxed max-w-lg">
              {profile.tagline}
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <Link
              to="/#projects"
              className="bg-primary text-white px-8 py-4 rounded-xl font-bold flex items-center gap-2 hover:shadow-xl hover:shadow-primary/30 transition-all"
            >
              View Work
              <span className="material-symbols-outlined">arrow_forward</span>
            </Link>
            <Link
              to="/resume"
              className="bg-slate-200 dark:bg-slate-800 text-slate-900 dark:text-white px-8 py-4 rounded-xl font-bold hover:bg-slate-300 dark:hover:bg-slate-700 transition-all border border-slate-300 dark:border-slate-700 flex items-center gap-2"
            >
              <span className="material-symbols-outlined">description</span>
              View Resume
            </Link>
          </div>
        </div>
        <div className="relative hidden lg:block">
          <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl border-8 border-slate-100 dark:border-slate-900 rotate-2 bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
            <span className="material-symbols-outlined text-primary/40 text-9xl">code</span>
          </div>
          <div className="absolute -bottom-6 -left-6 bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-xl border border-slate-100 dark:border-slate-700">
            <div className="flex items-center gap-4">
              <div className="size-12 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                <span className="material-symbols-outlined">bolt</span>
              </div>
              <div>
                <p className="text-xs text-slate-500 dark:text-slate-400 uppercase font-bold tracking-tighter">
                  Current Role
                </p>
                <p className="font-bold text-slate-900 dark:text-white">
                  Frontend Engineer @ Zynklabs
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
