import Link from "next/link";
import { Home } from "lucide-react";

export const metadata = {
  title: "Page not found",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center px-6 text-center">
      <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-primary">404</p>
      <h1 className="font-display mb-4 text-4xl font-black text-white">Page not found</h1>
      <p className="mb-8 max-w-md text-slate-400">
        That URL does not exist. Head back to the portfolio to see projects, experience, and contact details.
      </p>
      <Link
        href="/"
        className="inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 font-semibold text-white hover:bg-primary/90"
      >
        <Home className="size-4" aria-hidden />
        Back to Home
      </Link>
    </div>
  );
}
