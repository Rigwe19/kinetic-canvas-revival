import { motion, useReducedMotion } from "framer-motion";

const mobileApps = [
  {
    name: "Certification App",
    image: "/mobile/cert-dark-2c030111.jpg",
    desc: "A secure and streamlined application for digital certifications and credential management.",
    tech: ["React Native", "Firebase", "TypeScript"],
  },
  {
    name: "Geolocation Tracker",
    image: "/mobile/geo-dark-fdffd28a.jpg",
    desc: "Real-time location tracking and geofencing solutions for logistics and personal safety.",
    tech: ["React Native", "Google Maps API", "Node.js"],
  },
  {
    name: "JJB Mobile App",
    image: "/mobile/jjb-app-ea5963ac.jpg",
    desc: "Comprehensive mobile solution for business management and customer engagement.",
    tech: ["Flutter", "Dart", "REST API"],
  },
];

const MobileAppsSection = () => {
  const reduceMotion = useReducedMotion();

  return (
    <section id="mobile-apps" className="scroll-mt-24 border-y border-border/70 bg-card/20 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 grid gap-4 border-b border-border/70 pb-6 sm:mb-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
          <div>
            <p className="font-meta text-[11px] uppercase tracking-[0.22em] text-muted-foreground">Mobile delivery</p>
            <h2 className="mt-2 font-display text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              Apps built for hands, not just screens
            </h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-muted-foreground lg:justify-self-end">
            Cross-platform builds that connect interfaces, device capabilities, and backend services into usable products.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {mobileApps.map((app, index) => (
            <motion.article
              key={app.name}
              initial={reduceMotion ? false : { opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
              className="group overflow-hidden rounded-lg border border-border/80 bg-background/50 p-4 sm:p-5"
            >
              <div className="flex items-start justify-between gap-3">
                <span className="font-meta text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                  0{index + 1}
                </span>
                <div className="flex flex-wrap justify-end gap-1.5">
                  {app.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded border border-border/80 bg-secondary/40 px-2 py-0.5 font-meta text-[10px] uppercase tracking-[0.12em] text-muted-foreground"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-4 flex justify-center rounded-md border border-border/60 bg-[radial-gradient(circle_at_top,hsl(var(--signal)/0.12),transparent_55%),linear-gradient(to_bottom,hsl(var(--card)/0.8),hsl(var(--background)/0.4))] p-4">
                <div className="relative h-[420px] w-[210px] rounded-[2rem] border-[10px] border-zinc-800 bg-zinc-900 shadow-[0_25px_60px_-30px_rgba(0,0,0,0.9)] sm:h-[460px] sm:w-[230px]">
                  <div className="absolute -left-[13px] top-[56px] h-[26px] w-[3px] rounded-l bg-zinc-700" />
                  <div className="absolute -left-[13px] top-[96px] h-[38px] w-[3px] rounded-l bg-zinc-700" />
                  <div className="absolute -left-[13px] top-[142px] h-[38px] w-[3px] rounded-l bg-zinc-700" />
                  <div className="absolute -right-[13px] top-[112px] h-[54px] w-[3px] rounded-r bg-zinc-700" />
                  <div className="h-full w-full overflow-hidden rounded-[1.35rem] bg-black">
                    <img
                      src={app.image}
                      alt={`${app.name} mobile interface`}
                      loading="lazy"
                      decoding="async"
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                    />
                  </div>
                </div>
              </div>

              <div className="mt-4">
                <h3 className="font-display text-2xl font-bold tracking-tight text-foreground">{app.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{app.desc}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MobileAppsSection;
