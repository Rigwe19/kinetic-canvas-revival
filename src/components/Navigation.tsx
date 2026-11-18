import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";

const navItems = [
  { id: "home", label: "Home" },
  { id: "work", label: "Work" },
  { id: "mobile-apps", label: "Mobile" },
  { id: "services", label: "Services" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];

const Navigation = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const reduceMotion = useReducedMotion();

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", block: "start" });
    setActiveSection(id);
    setMobileOpen(false);
  };

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 12);
      const pos = window.scrollY + 140;
      for (let i = navItems.length - 1; i >= 0; i--) {
        const el = document.getElementById(navItems[i].id);
        if (el && pos >= el.offsetTop) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <motion.header
        className={`fixed inset-x-0 top-0 z-50 transition-[background,border-color,backdrop-filter] duration-300 ${
          scrolled || mobileOpen
            ? "border-b border-border/80 bg-background/80 backdrop-blur-md"
            : "border-b border-transparent bg-transparent"
        }`}
        initial={reduceMotion ? false : { y: -24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      >
        <nav
          aria-label="Primary"
          className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:h-[72px] lg:px-8"
        >
          <button
            type="button"
            onClick={() => scrollTo("home")}
            className="group inline-flex items-center gap-2 rounded-md text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            <span className="inline-flex h-7 w-7 items-center justify-center rounded-sm border border-[hsl(var(--signal)/0.45)] bg-[hsl(var(--signal)/0.12)] font-meta text-[11px] text-[hsl(var(--signal))]">
              R
            </span>
            <span className="flex flex-col leading-none">
              <span className="font-display text-sm font-bold tracking-tight text-foreground">Reinhard</span>
              <span className="font-meta text-[10px] uppercase tracking-[0.18em] text-muted-foreground">Build Log</span>
            </span>
          </button>

          <ul className="hidden items-center gap-1 md:flex">
            {navItems.map((item) => {
              const active = activeSection === item.id;
              return (
                <li key={item.id}>
                  <button
                    type="button"
                    onClick={() => scrollTo(item.id)}
                    className={`relative rounded-md px-3 py-2 font-meta text-[11px] uppercase tracking-[0.16em] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${
                      active ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {item.label}
                    {active && (
                      <motion.span
                        layoutId="nav-active"
                        className="absolute inset-x-3 -bottom-[1px] h-px bg-[hsl(var(--signal))]"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                  </button>
                </li>
              );
            })}
          </ul>

          <div className="hidden items-center md:flex">
            <button
              type="button"
              onClick={() => scrollTo("contact")}
              className="inline-flex items-center gap-2 rounded-md border border-border bg-secondary/40 px-3.5 py-2 font-meta text-[11px] uppercase tracking-[0.16em] text-foreground transition-all hover:border-[hsl(var(--signal)/0.5)] hover:bg-[hsl(var(--signal)/0.1)] hover:text-[hsl(var(--signal))] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              Start a project
              <ArrowUpRight className="h-3.5 w-3.5" aria-hidden />
            </button>
          </div>

          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-border bg-secondary/30 text-foreground transition-colors hover:border-[hsl(var(--signal)/0.5)] hover:text-[hsl(var(--signal))] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring md:hidden"
            onClick={() => setMobileOpen((open) => !open)}
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            {mobileOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </nav>
      </motion.header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            id="mobile-nav"
            className="fixed inset-0 z-40 bg-background/98 backdrop-blur-md md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <div className="mx-auto flex h-full max-w-6xl flex-col px-6 pb-10 pt-24">
              <p className="font-meta text-[11px] uppercase tracking-[0.22em] text-muted-foreground">Navigate</p>
              <ul className="mt-6 flex flex-1 flex-col gap-2">
                {navItems.map((item, i) => {
                  const active = activeSection === item.id;
                  return (
                    <motion.li
                      key={item.id}
                      initial={reduceMotion ? false : { opacity: 0, y: 14 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: reduceMotion ? 0 : i * 0.04, duration: 0.25 }}
                    >
                      <button
                        type="button"
                        onClick={() => scrollTo(item.id)}
                        className={`flex w-full items-center justify-between rounded-lg border px-4 py-4 text-left transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${
                          active
                            ? "border-[hsl(var(--signal)/0.45)] bg-[hsl(var(--signal)/0.08)] text-foreground"
                            : "border-border/70 bg-card/40 text-muted-foreground hover:text-foreground"
                        }`}
                      >
                        <span className="font-display text-2xl font-bold tracking-tight">{item.label}</span>
                        <span className="font-meta text-[10px] uppercase tracking-[0.18em]">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                      </button>
                    </motion.li>
                  );
                })}
              </ul>
              <button
                type="button"
                onClick={() => scrollTo("contact")}
                className="mt-4 inline-flex items-center justify-center gap-2 rounded-md bg-[hsl(var(--signal))] px-4 py-3 font-meta text-[11px] uppercase tracking-[0.18em] text-[hsl(var(--primary-foreground))] transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                Start a project
                <ArrowUpRight className="h-4 w-4" aria-hidden />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;
