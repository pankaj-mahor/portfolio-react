import Link from "next/link";
import { Code2 } from "lucide-react";
import { contact, profile } from "@/data/portfolio";

const footerLinks = [
  { href: "/#projects", label: "Projects" },
  { href: "/#experience", label: "Experience" },
  { href: "/#skills", label: "Skills" },
  { href: "/#contact", label: "Contact" },
  { href: "/resume", label: "Resume" },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-12">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 px-4 text-slate-400 sm:px-6 md:flex-row">
        <Link href="/" className="flex items-center gap-3">
          <div className="flex items-center justify-center rounded-md bg-slate-800 p-1.5">
            <Code2 className="size-3.5 text-white" aria-hidden />
          </div>
          <span className="font-display font-bold text-white">{profile.name}</span>
        </Link>
        <p className="text-sm">© {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
        <nav className="flex flex-wrap items-center justify-center gap-5 text-sm" aria-label="Footer">
          {footerLinks.map((link) => (
            <Link key={link.href} href={link.href} className="transition-colors hover:text-primary">
              {link.label}
            </Link>
          ))}
          <a
            href={contact.linkedin}
            target="_blank"
            rel="noreferrer"
            className="transition-colors hover:text-primary"
            aria-label="LinkedIn"
          >
            LinkedIn
          </a>
        </nav>
      </div>
    </footer>
  );
}
