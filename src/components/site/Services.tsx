import { motion } from "framer-motion";
import { Workflow, FileText, TrendingUp, LayoutGrid, ArrowUpRight } from "lucide-react";

const services = [
  {
    icon: Workflow,
    title: "AI Automation",
    copy: "Replace slow manual work with clean workflows that respond, sort, follow up, and keep moving.",
  },
  {
    icon: TrendingUp,
    title: "Growth Systems",
    copy: "Shape the path from first click to booked call so interested people know exactly what to do next.",
  },
  {
    icon: LayoutGrid,
    title: "Brand Strategy",
    copy: "Make the offer sharper, the message easier to trust, and the whole brand feel more premium.",
  },
  {
    icon: FileText,
    title: "Content Engine",
    copy: "Turn ideas into repeatable posts, pages, and follow-up sequences without starting from zero.",
  },
];

export function Services() {
  return (
    <section
      id="services"
      className="relative mx-auto max-w-7xl overflow-hidden px-6 py-24 lg:px-10"
    >
      <motion.div
        aria-hidden
        initial={{ x: "-18%" }}
        whileInView={{ x: "12%" }}
        viewport={{ once: false }}
        transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
        className="absolute left-0 top-10 h-px w-[140%] bg-gradient-to-r from-transparent via-[var(--gold)] to-transparent opacity-50"
      />
      <motion.div
        aria-hidden
        initial={{ x: "14%" }}
        whileInView={{ x: "-10%" }}
        viewport={{ once: false }}
        transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
        className="absolute bottom-10 left-0 h-px w-[140%] bg-gradient-to-r from-transparent via-primary to-transparent opacity-20"
      />
      <div className="mb-12 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-foreground/50">Choose the lever</p>
          <h2 className="mt-5 font-display text-4xl leading-[1.04] tracking-normal md:text-6xl">
            Pick the move
            <br />
            <span className="italic text-primary">that gets calls booked.</span>
          </h2>
        </div>
        <p className="max-w-sm text-foreground/65">
          We use the first conversation to find the fastest win, then build the system around it.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {services.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ y: -8, rotate: i % 2 === 0 ? -0.8 : 0.8 }}
            className="group relative flex min-h-64 flex-col justify-between overflow-hidden rounded-[1.4rem] border border-foreground/10 bg-background/75 p-6 shadow-[0_28px_80px_-70px_var(--ink)] transition-colors duration-500 hover:bg-[var(--olive-deep)] md:p-7"
          >
            <span className="absolute inset-0 translate-y-full bg-[linear-gradient(135deg,transparent_0%,color-mix(in_oklch,var(--gold)_18%,transparent)_45%,transparent_70%)] transition-transform duration-700 group-hover:translate-y-0" />
            <div className="relative z-10 flex items-start justify-between">
              <motion.div
                whileHover={{ rotate: 12, scale: 1.08 }}
                transition={{ type: "spring", stiffness: 260, damping: 16 }}
              >
                <s.icon
                  className="h-6 w-6 text-foreground transition-colors group-hover:text-[var(--cream)]"
                  strokeWidth={1.2}
                />
              </motion.div>
              <ArrowUpRight
                className="h-5 w-5 -translate-y-1 translate-x-1 text-[var(--gold)] opacity-0 transition-all duration-500 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100"
                strokeWidth={1.2}
              />
            </div>
            <div className="relative z-10">
              <h3 className="font-display text-2xl tracking-normal text-foreground transition-colors group-hover:text-[var(--cream)]">
                {s.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-foreground/65 transition-colors group-hover:text-[var(--cream)]/80">
                {s.copy}
              </p>
              <div className="mt-4 flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-foreground/50 transition-colors group-hover:text-[var(--gold)]">
                <span>0{i + 1}</span>
                <motion.span
                  initial={{ width: 16 }}
                  whileInView={{ width: 34 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.2 + i * 0.08 }}
                  className="h-px bg-current"
                />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
