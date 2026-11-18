import { motion, useReducedMotion } from "framer-motion";
import { Boxes, CloudCog, Database, Globe, Layers3, Route, ShoppingCart, Smartphone, UsersRound } from "lucide-react";

const services = [
  {
    num: "01",
    name: "Fullstack Web Development",
    desc: "End-to-end applications with Laravel backends and React/Vue frontends. RESTful APIs, database design, auth, and deployment.",
    icon: Layers3,
  },
  {
    num: "02",
    name: "Laravel Application Development",
    desc: "Scalable Laravel apps — multi-tenant SaaS, CMS, ERP, CRM, and custom business logic with clean architecture principles.",
    icon: Boxes,
  },
  {
    num: "03",
    name: "Mobile App Development",
    desc: "Cross-platform iOS & Android apps with React Native and Ionic, tightly integrated with REST APIs.",
    icon: Smartphone,
  },
  {
    num: "04",
    name: "API Design & Development",
    desc: "RESTful and GraphQL APIs with authentication, versioning, rate limiting, and thorough documentation.",
    icon: Route,
  },
  {
    num: "05",
    name: "Database Architecture",
    desc: "Database modeling, optimisation, and migration strategies for MySQL, PostgreSQL, and MongoDB at scale.",
    icon: Database,
  },
  {
    num: "06",
    name: "E-Commerce Development",
    desc: "Multi-vendor marketplaces, payment gateway integrations (Stripe, Flutterwave), inventory management, and order systems.",
    icon: ShoppingCart,
  },
  {
    num: "07",
    name: "SaaS Product Development",
    desc: "Subscription-based SaaS from scratch — multi-tenancy, billing (Paddle/Stripe), onboarding flows, and analytics dashboards.",
    icon: Globe,
  },
  {
    num: "08",
    name: "System Integration & DevOps",
    desc: "Docker containerisation, CI/CD pipelines, third-party API integrations, cloud deployments on AWS/DigitalOcean.",
    icon: CloudCog,
  },
  {
    num: "09",
    name: "Technical Consulting",
    desc: "Architecture reviews, code audits, tech stack selection, and mentoring teams to improve quality and delivery speed.",
    icon: UsersRound,
  },
];

const ServicesSection = () => {
  const reduceMotion = useReducedMotion();

  return (
    <section id="services" className="scroll-mt-24 border-y border-border/70 bg-card/20 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 grid gap-4 border-b border-border/70 pb-6 sm:mb-12 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <p className="font-meta text-[11px] uppercase tracking-[0.22em] text-muted-foreground">What I do</p>
            <h2 className="mt-2 font-display text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              Services shaped around delivery
            </h2>
          </div>
          <p className="font-meta text-[11px] uppercase tracking-[0.16em] text-muted-foreground lg:text-right">
            {services.length} service areas
          </p>
        </div>

        <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.article
                key={service.num}
                initial={reduceMotion ? false : { opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: (i % 3) * 0.05, ease: [0.22, 1, 0.36, 1] }}
                className="group rounded-lg border border-border/80 bg-background/45 p-5 transition-colors hover:border-[hsl(var(--signal)/0.35)] hover:bg-background/70"
              >
                <div className="flex items-start justify-between gap-4">
                  <span className="font-meta text-[10px] uppercase tracking-[0.18em] text-muted-foreground">{service.num}</span>
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-border/80 bg-secondary/40 text-[hsl(var(--signal))] transition-colors group-hover:border-[hsl(var(--signal)/0.35)]">
                    <Icon className="h-4 w-4" aria-hidden />
                  </span>
                </div>
                <h3 className="mt-4 font-display text-xl font-bold tracking-tight text-foreground">{service.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{service.desc}</p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
