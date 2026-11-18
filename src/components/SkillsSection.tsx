import { motion, useReducedMotion } from "framer-motion";

const groups = [
  {
    title: "Backend & Frameworks",
    skills: [
      { name: "Laravel / PHP", pct: 98 },
      { name: "Inertia.js", pct: 95 },
      { name: "Adonis.js", pct: 92 },
      { name: "Ts.Ed / Express.js", pct: 90 },
      { name: "Node.js", pct: 88 },
      { name: "MySQL / PostgreSQL", pct: 93 },
      { name: "MongoDB", pct: 82 },
    ],
  },
  {
    title: "Frontend & Mobile",
    skills: [
      { name: "React / Next.js", pct: 95 },
      { name: "Vue.js / Nuxt", pct: 90 },
      { name: "TypeScript", pct: 88 },
      { name: "React Native", pct: 85 },
      { name: "Ionic", pct: 88 },
      { name: "Angular / Svelte", pct: 82 },
      { name: "Docker / CI/CD", pct: 80 },
    ],
  },
];

const SkillRow = ({ name, pct, index }: { name: string; pct: number; index: number }) => {
  const reduceMotion = useReducedMotion();
  return (
    <div className="grid grid-cols-[1fr_auto] items-center gap-3 border-b border-border/60 py-3 sm:grid-cols-[minmax(0,1fr)_180px_auto]">
      <span className="text-sm text-foreground/95">{name}</span>
      <div className="hidden h-1.5 overflow-hidden rounded-full bg-secondary/70 sm:block" aria-hidden>
        <motion.div
          className="h-full rounded-full bg-[linear-gradient(90deg,hsl(var(--signal)),hsl(var(--signal)/0.55))]"
          initial={reduceMotion ? false : { width: 0 }}
          whileInView={{ width: `${pct}%` }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: index * 0.03, ease: [0.22, 1, 0.36, 1] }}
          style={reduceMotion ? { width: `${pct}%` } : undefined}
        />
      </div>
      <span className="font-meta text-[11px] tabular-nums text-muted-foreground">{pct}%</span>
    </div>
  );
};

const SkillsSection = () => {
  const reduceMotion = useReducedMotion();

  return (
    <section id="skills" className="scroll-mt-24 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 grid gap-4 border-b border-border/70 pb-6 sm:mb-12 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <p className="font-meta text-[11px] uppercase tracking-[0.22em] text-muted-foreground">Technical proficiency</p>
            <h2 className="mt-2 font-display text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              Tools I use to ship reliable work
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-muted-foreground lg:text-right">
            A practical stack across backend systems, modern frontends, mobile delivery, and deployment workflows.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2 lg:gap-10">
          {groups.map((group, gi) => (
            <motion.div
              key={group.title}
              initial={reduceMotion ? false : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: gi * 0.05, ease: [0.22, 1, 0.36, 1] }}
              className="rounded-lg border border-border/80 bg-card/40 p-5 sm:p-6"
            >
              <div className="mb-4 flex items-center justify-between border-b border-border/70 pb-3">
                <h3 className="font-meta text-[11px] uppercase tracking-[0.18em] text-foreground/90">{group.title}</h3>
                <span className="font-meta text-[10px] uppercase tracking-[0.14em] text-muted-foreground">
                  {group.skills.length} areas
                </span>
              </div>
              <div>
                {group.skills.map((skill, i) => (
                  <SkillRow key={skill.name} name={skill.name} pct={skill.pct} index={i} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.45, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="mt-8 rounded-lg border border-border/80 bg-[linear-gradient(180deg,hsl(var(--card)/0.7),hsl(var(--surface-raised)/0.45))] p-6 sm:p-7"
        >
          <p className="font-meta text-[10px] uppercase tracking-[0.2em] text-[hsl(var(--signal))]">Full stack expertise</p>
          <p className="mt-3 max-w-3xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Specialised in creating <span className="font-medium text-foreground">RESTful APIs</span>, building responsive
            frontends, and implementing <span className="font-medium text-foreground">scalable architectures</span>.
            Experienced with both monolithic and microservice approaches, including{" "}
            <span className="font-medium text-foreground">InertiaJS</span> for seamless full-stack development with
            Laravel and React.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
