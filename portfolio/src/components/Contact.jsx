import { contact } from "../data/portfolio";
import { useScrollSpy } from "../context/ScrollSpyContext";

export default function Contact() {
  const { activeSection } = useScrollSpy();
  const isActive = activeSection === "contact";

  return (
    <section
      id="contact"
      className={`scroll-mt-20 py-24 ${isActive ? "ring-inset ring-l-4 ring-primary/50" : ""}`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-primary/5 border border-primary/10 rounded-[3rem] p-12 lg:p-20 overflow-hidden relative text-center">
          <div className="absolute -bottom-24 -right-24 size-96 bg-primary/10 blur-[100px] rounded-full" />
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-4xl lg:text-5xl font-black mb-6 leading-tight text-slate-900 dark:text-white">
              Let's build something{" "}
              <span className="text-primary underline decoration-4 underline-offset-8">
                extraordinary
              </span>{" "}
              together.
            </h2>
            <p className="text-lg text-slate-500 dark:text-slate-400 mb-12">
              Open to new opportunities and freelance projects. I usually respond within 24 hours.
            </p>
            <div className="flex flex-col items-center gap-8">
              <div className="flex flex-wrap justify-center gap-6">
                <a
                  className="flex items-center gap-3 bg-white dark:bg-slate-800 px-6 py-4 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700 hover:border-primary transition-colors group"
                  href={`mailto:${contact.email}`}
                >
                  <div className="size-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined text-xl">mail</span>
                  </div>
                  <span className="font-bold text-slate-900 dark:text-white">{contact.email}</span>
                </a>
                <div className="flex items-center gap-3 bg-white dark:bg-slate-800 px-6 py-4 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700">
                  <div className="size-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined text-xl">location_on</span>
                  </div>
                  <span className="font-bold text-slate-900 dark:text-white">{contact.location}</span>
                </div>
                <a
                  className="flex items-center gap-3 bg-white dark:bg-slate-800 px-6 py-4 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700 hover:border-primary transition-colors"
                  href={`tel:${contact.phone}`}
                >
                  <div className="size-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined text-xl">call</span>
                  </div>
                  <span className="font-bold text-slate-900 dark:text-white">{contact.phone}</span>
                </a>
              </div>
              <div className="flex items-center gap-4">
                <a
                  className="size-12 rounded-full bg-slate-200 dark:bg-slate-800 flex items-center justify-center text-slate-700 dark:text-slate-300 hover:bg-primary hover:text-white transition-all"
                  href={contact.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                >
                  <svg className="size-6 fill-current" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
