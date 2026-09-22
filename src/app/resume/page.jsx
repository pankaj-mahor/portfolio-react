import Link from "next/link";
import { ArrowLeft, Download } from "lucide-react";
import { profile } from "@/data/portfolio";
import { buildMetadata } from "@/lib/seo";

const RESUME_HREF = "/pankaj_resume_frontend.pdf";

export const metadata = buildMetadata({
  title: "Resume",
  description: `Download the resume of ${profile.name}, ${profile.title}. ${profile.tagline}`,
  path: "/resume",
  ogTitle: `${profile.name} | Resume`,
});

export default function ResumePage() {
  return (
    <div className="resume-page">
      <div className="resume-pdf-wrapper flex min-h-0 flex-1 flex-col items-center p-4 sm:p-6">
        <div className="mb-4 flex w-full max-w-4xl items-center justify-between gap-4">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-400 transition-colors hover:text-primary"
          >
            <ArrowLeft className="size-4" aria-hidden />
            Back to Home
          </Link>
          <a
            href={RESUME_HREF}
            download
            className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-primary/20 transition-colors hover:bg-primary/90"
          >
            <Download className="size-4" aria-hidden />
            Download PDF
          </a>
        </div>
        <h1 className="sr-only">{profile.name} Resume</h1>
        <div className="resume-pdf-container">
          <iframe src={RESUME_HREF} title={`${profile.name} - Resume`} className="resume-iframe" />
        </div>
      </div>
    </div>
  );
}
