const items = [
  "PHP",
  "Laravel",
  "React",
  "Vue.js",
  "Node.js",
  "Inertia.js",
  "MySQL",
  "PostgreSQL",
  "MongoDB",
  "Docker",
  "React Native",
  "Ionic",
  "TypeScript",
  "Next.js",
  "TailwindCSS",
  "REST APIs",
];

const TechMarquee = () => (
  <div
    aria-label="Core technologies"
    className="border-y border-border/70 bg-card/30 py-3"
  >
    <div className="overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
      <div className="flex w-max animate-marquee items-center gap-8 pr-8 motion-reduce:animate-none">
        {[...items, ...items].map((item, i) => (
          <span key={`${item}-${i}`} className="inline-flex items-center gap-3 whitespace-nowrap">
            <span className="font-meta text-[11px] uppercase tracking-[0.18em] text-muted-foreground">{item}</span>
            <span className="h-1 w-1 rounded-full bg-[hsl(var(--signal)/0.7)]" aria-hidden />
          </span>
        ))}
      </div>
    </div>
  </div>
);

export default TechMarquee;
