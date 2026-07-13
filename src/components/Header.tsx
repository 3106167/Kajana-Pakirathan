import { useState, useEffect } from "react";
import { Menu, X, FileText, Download } from "lucide-react";
import { PERSONAL_INFO } from "../data";

interface HeaderProps {
  onPrint: () => void;
}

export default function Header({ onPrint }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("about");
  const [scrolled, setScrolled] = useState(false);

  const navItems = [
    { id: "about", label: "About" },
    { id: "experience", label: "Experience" },
    { id: "education", label: "Education" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "blog", label: "Blog" },
    { id: "testimonials", label: "Testimonials" },
    { id: "contact", label: "Contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Simple active section detection
      const scrollPosition = window.scrollY + 120;
      for (const item of navItems) {
        const el = document.getElementById(item.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(item.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsOpen(false);
    const el = document.getElementById(id);
    if (el) {
      const offset = 80; // height of fixed header
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 no-print ${
        scrolled
          ? "bg-slate-950/80 backdrop-blur-md shadow-lg border-b border-slate-850"
          : "bg-transparent"
      }`}
      id="header-navigation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo / Initials */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center space-x-2 text-left cursor-pointer group"
            id="nav-logo-btn"
          >
            <div className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-indigo-400 font-mono font-bold text-sm tracking-tighter group-hover:border-indigo-500/50 transition-colors">
              KP
            </div>
            <div>
              <span className="block font-sans font-bold text-white tracking-tight text-base sm:text-lg">
                {PERSONAL_INFO.name}
              </span>
              <span className="block text-xs text-indigo-400 font-mono -mt-1">
                Computer Science
              </span>
            </div>
          </button>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center space-x-1" id="desktop-nav">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-all cursor-pointer ${
                  activeSection === item.id
                    ? "text-white bg-slate-900 border border-slate-800 font-semibold"
                    : "text-slate-400 hover:text-white hover:bg-slate-900/50"
                }`}
                id={`nav-link-${item.id}`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Download PDF button */}
          <div className="hidden sm:flex items-center space-x-2" id="header-actions">
            <button
              onClick={onPrint}
              className="flex items-center space-x-1.5 px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl text-sm font-medium shadow-lg shadow-indigo-500/20 transition-all cursor-pointer"
              id="header-cv-btn"
            >
              <FileText className="w-4 h-4" />
              <span>Print/Download CV</span>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="flex lg:hidden items-center" id="mobile-menu-toggle-container">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-900 transition-all cursor-pointer"
              aria-label="Toggle Menu"
              id="mobile-menu-btn"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div
          className="lg:hidden bg-slate-950 border-b border-slate-800 px-4 pt-2 pb-6 space-y-2 shadow-xl animate-in fade-in slide-in-from-top-4 duration-200"
          id="mobile-drawer-menu"
        >
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`block w-full text-left px-4 py-3 rounded-xl text-base font-medium transition-all ${
                activeSection === item.id
                  ? "bg-indigo-600 text-white font-semibold"
                  : "text-slate-300 hover:bg-slate-900 hover:text-white"
              }`}
              id={`mobile-nav-link-${item.id}`}
            >
              {item.label}
            </button>
          ))}
          <div className="pt-4 border-t border-slate-850 px-4 flex flex-col gap-2" id="mobile-drawer-actions">
            <button
              onClick={() => {
                setIsOpen(false);
                onPrint();
              }}
              className="flex items-center justify-center space-x-2 w-full px-4 py-3 bg-indigo-650 hover:bg-indigo-600 text-white rounded-xl text-sm font-semibold shadow-md transition-all"
              id="mobile-drawer-cv-btn"
            >
              <FileText className="w-4 h-4" />
              <span>Print/Download CV</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
