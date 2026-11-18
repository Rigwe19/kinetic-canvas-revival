import { motion, useReducedMotion } from "framer-motion";
import { CheckCircle2, Clock, Loader2, Mail, MapPin } from "lucide-react";
import { useState } from "react";
import { useSendEmail } from "../hooks/useSendEmail";
import { useToast } from "../hooks/use-toast";

const ContactSection = () => {
  const [sent, setSent] = useState(false);
  const { toast } = useToast();
  const reduceMotion = useReducedMotion();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    projectType: "",
    message: "",
  });

  const { sendEmail, isLoading } = useSendEmail({
    toast: ({ title, description }) => {
      toast({ title, description });
    },
    onSuccess: () => setSent(true),
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await sendEmail({
      data: formData,
      subject: `New Project Inquiry from ${formData.firstName} ${formData.lastName}`,
      emailTitle: "New Contact Form Submission",
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const contactItems = [
    { icon: Mail, label: "Email", value: "contact@reinhard.name.ng" },
    { icon: MapPin, label: "Location", value: "Remote — Worldwide" },
    { icon: Clock, label: "Response time", value: "Within 24 hours" },
  ];

  const fieldClass =
    "w-full rounded-md border border-border/80 bg-background/70 px-3.5 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/70 transition-colors focus:border-[hsl(var(--signal)/0.55)] focus:outline-none focus:ring-2 focus:ring-ring/40";
  const labelClass = "mb-1.5 block font-meta text-[10px] uppercase tracking-[0.16em] text-muted-foreground";

  return (
    <section id="contact" className="scroll-mt-24 border-t border-border/70 bg-card/20 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 grid gap-4 border-b border-border/70 pb-6 sm:mb-12 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <p className="font-meta text-[11px] uppercase tracking-[0.22em] text-muted-foreground">Let&apos;s work together</p>
            <h2 className="mt-2 font-display text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              Start the conversation
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-muted-foreground lg:text-right">
            New builds, integrations, product improvements, or rescue work — I&apos;m open to hearing what you need.
          </p>
        </div>

        <div className="grid gap-4 lg:grid-cols-[0.95fr_1.05fr] lg:gap-5">
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="rounded-lg border border-border/80 bg-background/45 p-6 sm:p-7"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-border/80 bg-card/50 px-3 py-1.5 font-meta text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
              <span className="h-2 w-2 rounded-full bg-[hsl(var(--success))]" aria-hidden />
              Open for new projects
            </div>

            <h3 className="mt-5 font-display text-3xl font-extrabold leading-tight tracking-tight text-foreground sm:text-4xl">
              Got a project
              <span className="block text-[hsl(var(--signal))]">in mind?</span>
            </h3>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-muted-foreground sm:text-base">
              Whether it&apos;s a new build, a complex integration, or a system that needs rescuing, tell me what you&apos;re
              trying to ship.
            </p>

            <dl className="mt-8 space-y-4">
              {contactItems.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.label} className="flex gap-3 border-t border-border/60 pt-4 first:border-t-0 first:pt-0">
                    <span className="mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-md border border-border/80 bg-secondary/40 text-[hsl(var(--signal))]">
                      <Icon className="h-4 w-4" aria-hidden />
                    </span>
                    <div>
                      <dt className="font-meta text-[10px] uppercase tracking-[0.16em] text-muted-foreground">{item.label}</dt>
                      <dd className="mt-1 text-sm text-foreground/95">{item.value}</dd>
                    </div>
                  </div>
                );
              })}
            </dl>
          </motion.div>

          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.45, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
            className="rounded-lg border border-border/80 bg-card/50 p-6 sm:p-7"
          >
            {sent ? (
              <div className="flex min-h-[380px] flex-col items-center justify-center gap-3 text-center">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-[hsl(var(--success)/0.4)] bg-[hsl(var(--success)/0.12)] text-[hsl(var(--success))]">
                  <CheckCircle2 className="h-6 w-6" aria-hidden />
                </span>
                <h3 className="font-display text-2xl font-bold tracking-tight text-foreground">Message sent</h3>
                <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
                  Thanks for reaching out. I&apos;ll get back to you within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="firstName" className={labelClass}>
                      First name
                    </label>
                    <input
                      id="firstName"
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      placeholder="John"
                      required
                      autoComplete="given-name"
                      className={fieldClass}
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className={labelClass}>
                      Last name
                    </label>
                    <input
                      id="lastName"
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      placeholder="Doe"
                      required
                      autoComplete="family-name"
                      className={fieldClass}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className={labelClass}>
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    required
                    autoComplete="email"
                    className={fieldClass}
                  />
                </div>

                <div>
                  <label htmlFor="projectType" className={labelClass}>
                    Project type
                  </label>
                  <input
                    id="projectType"
                    type="text"
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                    placeholder="Web app, API, mobile app..."
                    className={fieldClass}
                  />
                </div>

                <div>
                  <label htmlFor="message" className={labelClass}>
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project, timeline, and goals..."
                    rows={6}
                    required
                    className={`${fieldClass} resize-y min-h-[140px]`}
                  />
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-[hsl(var(--signal))] px-5 py-3 font-meta text-[11px] uppercase tracking-[0.18em] text-[hsl(var(--primary-foreground))] transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" aria-hidden />
                      Sending...
                    </>
                  ) : (
                    "Send message"
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
