const Footer = () => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <footer className="border-t border-border/70 bg-card/20">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-6 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
        <p className="font-meta text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
          © {new Date().getFullYear()} Reinhard — Fullstack Developer
        </p>
        <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
          {[
            { label: "Work", id: "work" },
            { label: "Services", id: "services" },
            { label: "Skills", id: "skills" },
            { label: "Contact", id: "contact" },
          ].map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => scrollTo(item.id)}
              className="font-meta text-[11px] uppercase tracking-[0.14em] text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm"
            >
              {item.label}
            </button>
          ))}
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="font-meta text-[11px] uppercase tracking-[0.14em] text-muted-foreground transition-colors hover:text-[hsl(var(--signal))] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm"
          >
            GitHub ↗
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
