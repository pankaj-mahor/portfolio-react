import { Link } from "react-router-dom";
import { contact } from "../data/portfolio";

export default function Footer() {
  return (
    <footer className="py-12 border-t border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8 text-slate-500 dark:text-slate-400">
        <Link to="/" className="flex items-center gap-3">
          <div className="bg-slate-200 dark:bg-slate-800 p-1.5 rounded-md flex items-center justify-center">
            <span className="material-symbols-outlined text-slate-900 dark:text-white text-sm">
              code
            </span>
          </div>
          <span className="font-bold text-slate-900 dark:text-white">Pankaj Kori</span>
        </Link>
        <p className="text-sm">© {new Date().getFullYear()} Pankaj Kori. All rights reserved.</p>
        <div className="flex items-center gap-6">
          <Link to="/resume" className="hover:text-primary transition-colors">
            Resume
          </Link>
          <a href="#contact" className="hover:text-primary transition-colors">
            Contact
          </a>
          <a
            href={contact.linkedin}
            target="_blank"
            rel="noreferrer"
            className="hover:text-primary transition-colors"
            aria-label="LinkedIn"
          >
            <svg className="size-5 fill-current" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}
