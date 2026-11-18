import { motion, useReducedMotion } from "framer-motion";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";

const stats = [
  { num: "8+", label: "Years experience" },
  { num: "50+", label: "Projects shipped" },
  { num: "12+", label: "Core technologies" },
  { num: "100%", label: "Client satisfaction" },
];

const specs = [
  { label: "Stack focus", value: "PHP · Laravel · React · Vue · Node.js" },
  { label: "Delivery", value: "From concept and architecture to deployment" },
  { label: "Based", value: "Remote — available worldwide" },
];

const HeroSection = () => {
  const reduceMotion = useReducedMotion();

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", block: "start" });
  };

  const reveal = (delay = 0) =>
    reduceMotion
      ? {}
      : {
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] },
        };

  return (
    <section id="home" className="relative flex min-h-[100dvh] items-center pt-24 pb-16 sm:pt-28 lg:pt-24">
      <div className="mx-auto grid w-full max-w-6xl items-end gap-10 px-4 sm:px-6 lg:grid-cols-[minmax(0,1.15fr)_minmax(320px,0.85fr)] lg:gap-14 lg:px-8">
        <div className="relative">
          <motion.div
            {...reveal(0.05)}
            className="mb-6 inline-flex items-center gap-3 font-meta text-[11px] uppercase tracking-[0.22em] text-muted-foreground"
          >
            <span className="h-px w-10 bg-[hsl(var(--signal)/0.7)]" aria-hidden />
            Fullstack Developer
          </motion.div>

          <motion.div
            {...reveal(0.1)}
            className="mb-7 inline-flex items-center gap-2 rounded-full border border-border/80 bg-card/60 px-3 py-1.5 font-meta text-[11px] uppercase tracking-[0.14em] text-muted-foreground backdrop-blur-sm"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[hsl(var(--success)/0.55)] motion-reduce:animate-none" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[hsl(var(--success))]" />
            </span>
            Available for new projects
          </motion.div>

          <motion.h1
            {...reveal(0.16)}
            className="max-w-3xl font-display text-[clamp(2.8rem,7vw,5.4rem)] font-extrabold leading-[0.92] tracking-tight text-balance text-foreground"
          >
            Building the web
            <span className="block text-[hsl(var(--signal))]">that holds up.</span>
          </motion.h1>

          <motion.p
            {...reveal(0.24)}
            className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg"
          >
            I&apos;m Reinhard, a fullstack developer with <span className="font-medium text-foreground">8+ years</span> of
            experience crafting robust products with{" "}
            <span className="font-medium text-foreground">PHP, Laravel, React, Vue.js, and Node.js</span> — from concept
            to deployment.
          </motion.p>

          <motion.div {...reveal(0.32)} className="mt-8 flex flex-wrap items-center gap-3">
            <button
              type="button"
              onClick={() => scrollTo("work")}
              className="inline-flex items-center justify-center gap-2 rounded-md bg-[hsl(var(--signal))] px-5 py-3 font-meta text-[11px] uppercase tracking-[0.18em] text-[hsl(var(--primary-foreground))] transition-transform transition-opacity hover:opacity-90 active:translate-y-[1px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              View selected work
              <ArrowDownRight className="h-4 w-4" aria-hidden />
            </button>
            <button
              type="button"
              onClick={() => scrollTo("contact")}
              className="inline-flex items-center justify-center gap-2 rounded-md border border-border bg-card/40 px-5 py-3 font-meta text-[11px] uppercase tracking-[0.18em] text-foreground transition-colors hover:border-[hsl(var(--signal)/0.5)] hover:text-[hsl(var(--signal))] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              Start a conversation
              <ArrowUpRight className="h-4 w-4" aria-hidden />
            </button>
          </motion.div>

          <motion.dl
            {...reveal(0.4)}
            className="mt-10 grid gap-4 border-t border-border/70 pt-6 sm:grid-cols-3"
          >
            {specs.map((spec) => (
              <div key={spec.label} className="min-w-0">
                <dt className="font-meta text-[10px] uppercase tracking-[0.18em] text-muted-foreground">{spec.label}</dt>
                <dd className="mt-1.5 text-sm leading-snug text-foreground/90">{spec.value}</dd>
              </div>
            ))}
          </motion.dl>
        </div>

        <motion.aside
          {...reveal(0.22)}
          className="relative lg:pb-2"
          aria-label="Profile snapshot"
        >
          <div className="relative overflow-hidden rounded-lg border border-border/80 bg-card/55 p-5 shadow-[0_30px_80px_-40px_rgba(0,0,0,0.8)] backdrop-blur-sm sm:p-6">
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[hsl(var(--signal)/0.7)] to-transparent" />
            <div className="flex items-start justify-between gap-4 border-b border-border/70 pb-4">
              <div>
                <p className="font-meta text-[10px] uppercase tracking-[0.22em] text-muted-foreground">Snapshot</p>
                <p className="mt-1 font-display text-xl font-bold tracking-tight text-foreground">Reinhard</p>
                <p className="text-sm text-muted-foreground">Fullstack Web Developer</p>
              </div>
              <span className="rounded border border-[hsl(var(--signal)/0.35)] bg-[hsl(var(--signal)/0.1)] px-2 py-1 font-meta text-[10px] uppercase tracking-[0.16em] text-[hsl(var(--signal))]">
                Open
              </span>
            </div>

            <div className="mt-4 grid grid-cols-2 gap-px overflow-hidden rounded-md border border-border/70 bg-border/70">
              {stats.map((stat) => (
                <div key={stat.label} className="bg-card/80 px-4 py-4">
                  <div className="font-display text-3xl font-extrabold leading-none tracking-tight text-foreground sm:text-[2rem]">
                    {stat.num}
                  </div>
                  <div className="mt-2 font-meta text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-4 space-y-3 rounded-md border border-border/70 bg-background/40 p-4">
              <p className="font-meta text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Working style</p>
              <ul className="space-y-2 text-sm text-foreground/90">
                <li className="flex gap-2">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[hsl(var(--signal))]" aria-hidden />
                  Clean architecture, maintainable APIs, and thoughtful interfaces.
                </li>
                <li className="flex gap-2">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[hsl(var(--signal))]" aria-hidden />
                  Comfortable across monoliths, integrations, and cross-platform delivery.
                </li>
              </ul>
            </div>
          </div>
        </motion.aside>
      </div>
    </section>
  );
};

export default HeroSection;
