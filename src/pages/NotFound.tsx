import { useLocation, Link } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();
  return (
    <div className="flex min-h-[100dvh] items-center justify-center bg-background px-6 text-foreground">
      <div className="max-w-md border border-border/80 bg-card/60 p-8 text-center backdrop-blur-sm">
        <p className="font-meta text-[11px] uppercase tracking-[0.22em] text-muted-foreground">Route missing</p>
        <h1 className="mt-3 font-display text-6xl font-extrabold tracking-tight text-foreground">404</h1>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
          No page exists at <span className="font-meta text-foreground/90">{location.pathname}</span>.
        </p>
        <Link
          to="/"
          className="mt-6 inline-flex items-center justify-center rounded-md border border-border bg-secondary/60 px-4 py-2 font-meta text-[11px] uppercase tracking-[0.18em] text-foreground transition-colors hover:border-[hsl(var(--signal)/0.5)] hover:text-[hsl(var(--signal))] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        >
          Return home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
