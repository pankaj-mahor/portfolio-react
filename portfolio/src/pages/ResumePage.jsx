import { Link } from "react-router-dom";
import resumePdf from "../pankaj_resume_frontend_1.pdf";

export default function ResumePage() {
  return (
    <div className="resume-page min-h-screen bg-background-light dark:bg-background-dark flex flex-col">
      {/* <div className="shrink-0 border-b border-slate-200 dark:border-slate-800 bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-sm px-4 py-2 sm:px-6"> */}

      {/* </div> */}
      <div className="resume-pdf-wrapper flex-1 min-h-0 flex flex-col items-center justify-center p-0 md:p-0">
        <div className="w-full max-w-4xl mb-2 flex items-start justify-start">
          <Link
            to="/"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-500 dark:text-slate-400 transition-colors hover:text-primary"
          >
            <span className="material-symbols-outlined text-lg">
              arrow_back
            </span>
            Back to Home
          </Link>
        </div>
        <div className="resume-pdf-container">
          <iframe
            src={resumePdf}
            title="Pankaj Kori - Resume"
            className="resume-iframe"
          />
        </div>
      </div>
    </div>
  );
}
