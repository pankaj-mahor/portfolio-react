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
              Open to new opportunities and freelance projects. I usually
              respond within 24 hours.
            </p>
            <div className="flex flex-col items-center gap-8">
              <div className="flex flex-wrap justify-center gap-6">
                <a
                  className="flex items-center gap-3 bg-white dark:bg-slate-800 px-6 py-4 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700 hover:border-primary transition-colors group"
                  href={`mailto:${contact.email}`}
                >
                  <div className="size-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined text-xl">
                      mail
                    </span>
                  </div>
                  <span className="font-bold text-slate-900 dark:text-white">
                    {contact.email}
                  </span>
                </a>
                <div className="flex items-center gap-3 bg-white dark:bg-slate-800 px-6 py-4 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700">
                  <div className="size-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined text-xl">
                      location_on
                    </span>
                  </div>
                  <span className="font-bold text-slate-900 dark:text-white">
                    {contact.location}
                  </span>
                </div>
                <a
                  className="flex items-center gap-3 bg-white dark:bg-slate-800 px-6 py-4 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700 hover:border-primary transition-colors"
                  href={`tel:${contact.phone}`}
                >
                  <div className="size-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined text-xl">
                      call
                    </span>
                  </div>
                  <span className="font-bold text-slate-900 dark:text-white">
                    {contact.phone}
                  </span>
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
                <a
                  className="size-12 rounded-full bg-slate-200 dark:bg-slate-800 flex items-center justify-center text-slate-700 dark:text-slate-300 hover:bg-primary hover:text-white transition-all"
                  href={contact.github}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub"
                >
                  <svg className="size-6 fill-current" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
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
