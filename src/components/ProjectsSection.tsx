import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    name: "Folashade Fashion",
    url: "https://folashadefashion.com",
    tech: ["React Router v8", "React Query", "TailwindCSS"],
    desc: "A modern e-commerce platform for Folashade Fashion, built with React Router v8, React Query, and TailwindCSS for a seamless shopping experience.",
  },
  {
    name: "Frontlett",
    url: "https://uloofstories.com",
    tech: ["PHP", "Laravel", "React Router v7"],
    desc: "A dynamic storytelling platform that combines PHP, Laravel, and React Router v7 to deliver engaging narratives with interactive features.",
  },
  {
    name: "Care Ambassadors",
    url: "https://careambassadors.co.uk",
    tech: ["React"],
    desc: "A healthcare-focused platform for managing patient care and medical records with a modern React interface.",
  },
  {
    name: "Timelife Documentaries",
    url: "https://timelifedocumentaries.com/",
    tech: ["React"],
    desc: "A documentary storytelling platform that showcases life stories and experiences through a React-based web application.",
  },
  {
    name: "Wanodu Barter",
    url: "https://wanodu.com",
    tech: ["Laravel", "React"],
    desc: "A peer-to-peer barter exchange marketplace built on Laravel + React with secure trading flows.",
  },
  {
    name: "SincPartners",
    url: "https://sincpartners.com",
    tech: ["React"],
    desc: "Professional corporate web presence showcasing partnership offerings with clean, conversion-focused design.",
  },
  {
    name: "Rizoka",
    url: "https://rizoka.com",
    tech: ["PHP", "Laravel", "React", "Next.js"],
    desc: "A modern e-commerce platform built with PHP, Laravel, React, and Next.js for a seamless shopping experience.",
  },
  {
    name: "Ullweb",
    url: "https://ullweb.com.ng",
    tech: ["React"],
    desc: "Nigerian-based digital agency platform with a localized approach and strong performance focus.",
  },
  {
    name: "Ideas Global",
    url: "https://ideasglobal.org",
    tech: ["React"],
    desc: "iDEAS (Initiative for Development Empowerment and Social Action) builds lasting impact through education, inclusion, and collective action inspired by the UN Sustainable Development Goals.",
  },
  {
    name: "Vive Cafe",
    url: "https://vivecafe.com.ng",
    tech: ["React"],
    desc: "Experience the perfect harmony of premium coffee, artisanal cuisine, and professional ambiance in the heart of downtown. Your perfect spot for meetings, dates, and everything in between.",
  },
  {
    name: "Space trxform",
    url: "https://spacetrxform.com",
    tech: ["React"],
    desc: "At Spacetrxform, We design spaces that blend creativity, engineering, and culture to shape environments that inspire and empower communities.",
  },
  {
    name: "Dallas Ville",
    url: "https://dallasville.com",
    tech: ["React"],
    desc: "Dallasville is a leading real estate company dedicated to helping individuals and families find their perfect homes.",
  },
];

const thumbSources = (url: string) => {
  const microlink = new URLSearchParams({
    url,
    screenshot: "true",
    meta: "false",
    embed: "screenshot.url",
    "viewport.width": "1280",
    "viewport.height": "800",
    "screenshot.type": "jpeg",
    "screenshot.quality": "80",
  });

  return [
    `https://image.thum.io/get/width/1280/crop/800/noanimate/wait/5/${url}`,
    `https://api.microlink.io/?${microlink.toString()}`,
  ];
};

const ProjectCard = ({ project, index }: { project: (typeof projects)[0]; index: number }) => {
  const [imgState, setImgState] = useState<"loading" | "loaded" | "error">("loading");
  const [sourceIndex, setSourceIndex] = useState(0);
  const reduceMotion = useReducedMotion();
  const sources = thumbSources(project.url);
  const thumbnail = sources[sourceIndex];
  const featured = index === 0 || index === 5 || index === 8;
  const domain = project.url.replace(/^https?:\/\//, "");

  const handleImageError = () => {
    if (sourceIndex < sources.length - 1) {
      setSourceIndex((i) => i + 1);
      setImgState("loading");
    } else {
      setImgState("error");
    }
  };

  return (
    <motion.article
      initial={reduceMotion ? false : { opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.45, delay: (index % 4) * 0.04, ease: [0.22, 1, 0.36, 1] }}
      className={`group relative overflow-hidden rounded-lg border border-border/80 bg-card/55 transition-colors hover:border-[hsl(var(--signal)/0.4)] ${
        featured ? "md:col-span-2" : ""
      }`}
    >
      <a
        href={project.url}
        target="_blank"
        rel="noopener noreferrer"
        className="block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        aria-label={`Visit ${project.name}`}
      >
        <div className={`relative overflow-hidden bg-secondary/30 ${featured ? "aspect-[16/8]" : "aspect-[16/10]"}`}>
          {imgState === "loading" && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="h-5 w-5 animate-spin rounded-full border-2 border-border border-t-[hsl(var(--signal))]" />
            </div>
          )}
          {imgState === "error" && (
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 p-6 text-center">
              <span className="font-meta text-[10px] uppercase tracking-[0.16em] text-muted-foreground">Preview unavailable</span>
              <span className="font-meta text-[11px] text-foreground/80">{domain}</span>
            </div>
          )}
          <img
            key={`${project.url}-${sourceIndex}`}
            src={thumbnail}
            alt={`${project.name} website screenshot`}
            loading="lazy"
            decoding="async"
            referrerPolicy="no-referrer"
            onLoad={() => setImgState("loaded")}
            onError={handleImageError}
            className={`h-full w-full object-cover transition duration-500 group-hover:scale-[1.02] ${
              imgState === "loaded" ? "opacity-100" : "opacity-0"
            } ${imgState === "error" ? "hidden" : "block"}`}
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/70 via-background/10 to-transparent opacity-80" />
          <div className="absolute right-3 top-3 inline-flex items-center gap-1 rounded-md border border-border/80 bg-background/70 px-2 py-1 font-meta text-[10px] uppercase tracking-[0.14em] text-foreground backdrop-blur-sm">
            Live <ArrowUpRight className="h-3 w-3" aria-hidden />
          </div>
        </div>
      </a>

      <div className="flex flex-col gap-3 p-4 sm:p-5">
        <div className="flex flex-wrap items-center gap-2">
          <span className="font-meta text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
            {String(index + 1).padStart(2, "0")}
          </span>
          <span className="h-px w-6 bg-border" aria-hidden />
          <span className="truncate font-meta text-[10px] uppercase tracking-[0.14em] text-muted-foreground">{domain}</span>
        </div>
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-display text-xl font-bold tracking-tight text-foreground sm:text-2xl">{project.name}</h3>
        </div>
        <p className="text-sm leading-relaxed text-muted-foreground">{project.desc}</p>
        <div className="mt-1 flex flex-wrap gap-1.5">
          {project.tech.map((t) => (
            <span
              key={t}
              className="rounded border border-border/80 bg-secondary/40 px-2 py-1 font-meta text-[10px] uppercase tracking-[0.12em] text-muted-foreground"
            >
              {t}
            </span>
          ))}
        </div>
        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-1 inline-flex w-fit items-center gap-2 font-meta text-[11px] uppercase tracking-[0.16em] text-foreground transition-colors hover:text-[hsl(var(--signal))] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm"
        >
          Visit site <ArrowUpRight className="h-3.5 w-3.5" aria-hidden />
        </a>
      </div>
    </motion.article>
  );
};

const ProjectsSection = () => (
  <section id="work" className="scroll-mt-24 py-20 sm:py-24">
    <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
      <div className="mb-10 flex flex-col gap-4 border-b border-border/70 pb-6 sm:mb-12 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="font-meta text-[11px] uppercase tracking-[0.22em] text-muted-foreground">Selected work</p>
          <h2 className="mt-2 font-display text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Live projects, shipped and running
          </h2>
        </div>
        <p className="max-w-sm text-sm leading-relaxed text-muted-foreground sm:text-right">
          A mix of commerce, platforms, storytelling, and business sites built across Laravel, React, and modern web stacks.
          <span className="mt-2 block font-meta text-[10px] uppercase tracking-[0.16em] text-muted-foreground/80">
            {projects.length} projects
          </span>
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:gap-5">
        {projects.map((project, i) => (
          <ProjectCard key={project.url} project={project} index={i} />
        ))}
      </div>
    </div>
  </section>
);

export default ProjectsSection;
