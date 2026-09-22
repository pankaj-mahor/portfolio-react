"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Code2, Download, Menu, X } from "lucide-react";
import { useScrollSpy } from "@/context/ScrollSpyContext";

const navLinks = [
  { href: "/", label: "Home", section: "home" },
  { href: "/#projects", label: "Projects", section: "projects" },
  { href: "/#experience", label: "Experience", section: "experience" },
  { href: "/#skills", label: "Skills", section: "skills" },
  { href: "/#contact", label: "Contact", section: "contact" },
  { href: "/resume", label: "Resume", section: "resume", icon: true },
];

function scrollToSection(sectionId) {
  const el = document.getElementById(sectionId);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
}

export default function Nav() {
  const pathname = usePathname();
  const router = useRouter();
  const { activeSection } = useScrollSpy();
  const [open, setOpen] = useState(false);
  const isResumePage = pathname === "/resume";
  const isHome = pathname === "/";

  const handleSectionClick = (e, href, section) => {
    if (section === "resume") {
      setOpen(false);
      return;
    }
    e.preventDefault();
    setOpen(false);
    if (isHome) {
      scrollToSection(section);
      window.history.replaceState(null, "", href);
    } else {
      router.push(href);
    }
  };

  const isActive = (section) => {
    if (isResumePage) return section === "resume";
    if (section === "home") return !activeSection || activeSection === "home";
    return activeSection === section;
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/5 bg-background-dark/80 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6">
        <Link href="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <div className="flex items-center justify-center rounded-lg bg-primary p-2 shadow-lg shadow-primary/30">
            <Code2 className="size-5 text-white" aria-hidden />
          </div>
          <span className="font-display text-xl font-bold tracking-tight text-white">PK.</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {navLinks.map(({ href, label, section, icon }) => (
            <Link
              key={href}
              href={href}
              onClick={(e) => handleSectionClick(e, href, section)}
              className={`flex items-center gap-1.5 text-sm font-medium transition-colors ${
                isActive(section)
                  ? "text-primary"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              {label}
              {icon ? <Download className="size-3.5" aria-hidden /> : null}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/#contact"
            onClick={(e) => handleSectionClick(e, "/#contact", "contact")}
            className="hidden rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-primary/20 transition-all hover:bg-primary/90 sm:inline-flex"
          >
            Get in Touch
          </Link>
          <button
            type="button"
            className="inline-flex size-10 items-center justify-center rounded-lg border border-slate-800 text-slate-200 md:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {open ? (
        <div
          id="mobile-nav"
          className="border-t border-white/5 bg-background-dark/95 px-4 py-4 backdrop-blur-xl md:hidden"
        >
          <nav className="flex flex-col gap-1" aria-label="Mobile">
            {navLinks.map(({ href, label, section, icon }) => (
              <Link
                key={href}
                href={href}
                onClick={(e) => handleSectionClick(e, href, section)}
                className={`flex items-center justify-between rounded-xl px-4 py-3 text-sm font-medium ${
                  isActive(section)
                    ? "bg-primary/10 text-primary"
                    : "text-slate-300 hover:bg-slate-800/80"
                }`}
              >
                {label}
                {icon ? <Download className="size-4" aria-hidden /> : null}
              </Link>
            ))}
            <Link
              href="/#contact"
              onClick={(e) => handleSectionClick(e, "/#contact", "contact")}
              className="mt-2 rounded-xl bg-primary px-4 py-3 text-center text-sm font-semibold text-white"
            >
              Get in Touch
            </Link>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
