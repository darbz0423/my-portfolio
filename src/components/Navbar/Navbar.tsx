import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface NavbarProps {
  darkMode: boolean;
  toggleTheme: () => void;
}

const links = [
  { name: "Home", id: "home" },
  { name: "About", id: "about" },
  { name: "Projects", id: "projects" },
  { name: "Contact", id: "contact" },
];

function Navbar({ darkMode, toggleTheme }: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 25);

      const position = window.scrollY + 180;

      for (const link of links) {
        const section = document.getElementById(link.id);
        if (!section) continue;

        const top = section.offsetTop;
        const bottom = top + section.offsetHeight;

        if (position >= top && position < bottom) {
          setActiveSection(link.id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const navigate = (id: string) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6">
      <nav
        className={cn(
          "relative mx-auto flex h-[68px] max-w-[1180px] items-center justify-between rounded-[22px] border border-[var(--border)] px-5 transition-colors duration-300 sm:px-6",
          scrolled
            ? "bg-[var(--card)]/80 shadow-[0_15px_45px_var(--shadow)] backdrop-blur-2xl"
            : "bg-[var(--card)]/45 backdrop-blur-xl"
        )}
      >
        <a
          href="#home"
          aria-label="Khen Darby Baruc - Home"
          className="text-xl font-black tracking-[-0.08em] text-[var(--text)] transition-colors hover:text-[var(--accent)]"
        >
          KD
        </a>

        <div className="hidden items-center gap-7 md:flex">
          {links.map((link) => {
            const active = activeSection === link.id;

            return (
              <button
                key={link.id}
                type="button"
                onClick={() => navigate(link.id)}
                className={cn(
                  "group relative py-2 text-sm font-medium transition-colors",
                  active
                    ? "text-[var(--text)]"
                    : "text-[var(--secondary)] hover:text-[var(--text)]"
                )}
              >
                {link.name}
                <span
                  className={cn(
                    "absolute bottom-0 left-1/2 h-[2px] -translate-x-1/2 rounded-full bg-[var(--text)] transition-[width] duration-200",
                    active ? "w-full" : "w-0 group-hover:w-1/2"
                  )}
                />
              </button>
            );
          })}
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={toggleTheme}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--background)]/50 text-[var(--text)] transition-colors hover:border-[var(--primary)] hover:bg-[var(--background)] active:scale-95"
            aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
          >
            {darkMode ? "☀" : "☾"}
          </button>

          <button
            type="button"
            onClick={() => setMenuOpen((value) => !value)}
            className="flex h-10 w-10 flex-col items-center justify-center gap-[5px] rounded-full border border-[var(--border)] transition-colors active:scale-95 md:hidden"
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
          >
            <span className={cn("h-[2px] w-[18px] rounded-full bg-[var(--text)] transition-transform", menuOpen && "translate-y-[7px] rotate-45")} />
            <span className={cn("h-[2px] w-[18px] rounded-full bg-[var(--text)] transition-opacity", menuOpen ? "opacity-0" : "opacity-100")} />
            <span className={cn("h-[2px] w-[18px] rounded-full bg-[var(--text)] transition-transform", menuOpen && "-translate-y-[7px] -rotate-45")} />
          </button>
        </div>

        <div
          className={cn(
            "absolute left-0 right-0 top-[76px] overflow-hidden rounded-[22px] border border-[var(--border)] bg-[var(--card)]/95 p-3 shadow-[0_20px_50px_var(--shadow)] backdrop-blur-2xl transition-[opacity,transform,visibility] md:hidden",
            menuOpen
              ? "visible translate-y-0 opacity-100"
              : "invisible -translate-y-3 opacity-0"
          )}
        >
          <div className="flex flex-col gap-1">
            {links.map((link) => {
              const active = activeSection === link.id;

              return (
                <button
                  key={link.id}
                  type="button"
                  onClick={() => navigate(link.id)}
                  className={cn(
                    "flex items-center justify-between rounded-[15px] px-4 py-3.5 text-left text-sm font-medium transition-colors",
                    active
                      ? "bg-[var(--primary)] text-[var(--background)]"
                      : "text-[var(--secondary)] hover:bg-black/5 hover:text-[var(--text)] dark:hover:bg-white/5"
                  )}
                >
                  {link.name}
                  {active && <span className="h-1.5 w-1.5 rounded-full bg-current" />}
                </button>
              );
            })}
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;