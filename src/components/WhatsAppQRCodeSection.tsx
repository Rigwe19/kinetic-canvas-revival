import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, MessageCircle } from "lucide-react";
import QRCode from "react-qr-code";

const WhatsAppQRCodeSection = () => {
  const reduceMotion = useReducedMotion();
  const whatsappNumber = "+2348103382000";
  const whatsappUrl = `https://wa.me/${whatsappNumber.replace("+", "")}`;

  return (
    <section className="scroll-mt-24 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="relative overflow-hidden rounded-xl border border-border/80 bg-[linear-gradient(135deg,hsl(var(--card)/0.95),hsl(var(--surface-raised)/0.75))] p-6 sm:p-8 lg:p-10"
        >
          <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[hsl(var(--signal)/0.12)] blur-3xl" />
          <div className="relative grid items-center gap-8 lg:grid-cols-[1.1fr_0.7fr] lg:gap-12">
            <div>
              <div className="inline-flex items-center gap-2 font-meta text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
                <MessageCircle className="h-3.5 w-3.5 text-[hsl(var(--signal))]" aria-hidden />
                Direct line
              </div>
              <h2 className="mt-3 max-w-2xl font-display text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
                Scan to start a WhatsApp conversation
              </h2>
              <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
                Have a project in mind or want to ask a question? Scan the QR code or open the link to chat directly.
                I usually respond quickly.
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-md bg-[hsl(var(--signal))] px-5 py-3 font-meta text-[11px] uppercase tracking-[0.18em] text-[hsl(var(--primary-foreground))] transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  Open WhatsApp
                  <ArrowUpRight className="h-4 w-4" aria-hidden />
                </a>
                <span className="rounded-md border border-border/80 bg-background/40 px-3 py-2 font-meta text-[11px] tracking-[0.08em] text-foreground/90">
                  {whatsappNumber}
                </span>
              </div>
            </div>

            <div className="mx-auto w-full max-w-xs">
              <div className="rounded-lg border border-border/80 bg-white p-4 shadow-[0_25px_60px_-30px_rgba(0,0,0,0.6)]">
                <div className="rounded-md bg-white p-2">
                  <QRCode value={whatsappUrl} size={256} level="H" style={{ height: "auto", maxWidth: "100%", width: "100%" }} viewBox="0 0 256 256" />
                </div>
                <p className="mt-3 text-center font-meta text-[10px] uppercase tracking-[0.18em] text-zinc-600">
                  Scan with your camera
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhatsAppQRCodeSection;
