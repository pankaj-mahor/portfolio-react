import { Link, useLocation, useNavigate } from "react-router-dom";
import { useScrollSpy } from "../context/ScrollSpyContext";

const navLinks = [
  { to: "/", label: "Home", section: "home" },
  { to: "/#projects", label: "Projects", section: "projects" },
  { to: "/#experience", label: "Experience", section: "experience" },
  { to: "/#skills", label: "Skills", section: "skills" },
  { to: "/#contact", label: "Contact", section: "contact" },
  { to: "/resume", label: "Resume", section: "resume", icon: "download" },
];

function scrollToSection(sectionId) {
  const el = document.getElementById(sectionId);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
}

export default function Nav() {
  const location = useLocation();
  const navigate = useNavigate();
  const { activeSection } = useScrollSpy();
  const isResumePage = location.pathname === "/resume";
  const isHome = location.pathname === "/";

  const handleSectionClick = (e, to, section) => {
    if (section === "resume") return; // let Link handle it
    if (isHome) {
      e.preventDefault();
      scrollToSection(section);
    } else {
      e.preventDefault();
      navigate(to); // HomePage useEffect will scroll to hash
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 dark:border-slate-800 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <div className="bg-primary p-2 rounded-lg flex items-center justify-center">
            <span className="material-symbols-outlined text-white text-xl">code</span>
          </div>
          <span className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">
            PK.
          </span>
        </Link>
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map(({ to, label, section, icon }) => {
            const isActive = isResumePage
              ? section === "resume"
              : section === "home"
                ? !activeSection
                : activeSection === section;
            const isSectionLink = section !== "resume";
            return (
              <Link
                key={to}
                to={to}
                onClick={isSectionLink ? (e) => handleSectionClick(e, to, section) : undefined}
                className={`text-sm font-medium transition-colors flex items-center gap-1 ${
                  isActive ? "text-primary" : "text-slate-600 dark:text-slate-400 hover:text-primary"
                }`}
              >
                {label}
                {icon && <span className="material-symbols-outlined text-xs">{icon}</span>}
              </Link>
            );
          })}
        </nav>
        <Link
          to="/#contact"
          onClick={(e) => handleSectionClick(e, "/#contact", "contact")}
          className="bg-primary hover:bg-primary/90 text-white px-5 py-2.5 rounded-full text-sm font-semibold transition-all shadow-lg shadow-primary/20"
        >
          Get in Touch
        </Link>
      </div>
    </header>
  );
}
