import { motion } from "framer-motion";
import { Star } from "lucide-react";

const items = [
  {
    q: "Aurben rebuilt our entire acquisition motion in 11 weeks. We doubled qualified pipeline without hiring a single rep. Wild.",
    a: "Maya Okafor",
    r: "COO, Northwind",
  },
  {
    q: "They think like operators, not like an agency. The systems they shipped still run our content team two years later.",
    a: "Jonas Reuter",
    r: "Founder, Halcyon",
  },
  {
    q: "Cleanest AI ops build I've seen. No vibes, no fluff. Just instrumentation and outcomes.",
    a: "Priya Vaidyanathan",
    r: "Head of Growth, Vertex",
  },
  {
    q: "First time marketing felt like infrastructure instead of a cost centre. Honestly, refreshing.",
    a: "Daniel Costa",
    r: "CEO, Atlas Labs",
  },
];

const EASE = [0.22, 1, 0.36, 1] as const;

export function Testimonials() {
  return (
    <section
      id="testimonials"
      className="relative overflow-hidden border-y border-foreground/10 bg-[var(--stone)] py-28"
    >
      <div className="pointer-events-none absolute -top-24 left-1/2 h-[480px] w-[480px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,color-mix(in_oklch,var(--gold)_35%,transparent),transparent_60%)] opacity-60 blur-3xl" />
      <motion.div
        initial={{ opacity: 0, y: 26 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.8, ease: EASE }}
        className="mx-auto mb-16 max-w-7xl px-6 lg:px-10"
      >
        <p className="text-xs uppercase tracking-[0.3em] text-foreground/50">
          Kind words from kind people
        </p>
        <h2 className="mt-5 max-w-3xl font-display text-4xl leading-[1.05] tracking-normal md:text-6xl">
          Don&apos;t take it from us.
          <br />
          <span className="italic text-primary">Take it from them.</span>
        </h2>
        <motion.div
          aria-hidden
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9, delay: 0.25, ease: EASE }}
          className="mt-8 h-px max-w-sm origin-left bg-primary/25"
        />
      </motion.div>

      <div className="relative mx-auto grid max-w-7xl gap-6 px-6 sm:grid-cols-2 lg:px-10">
        {items.map((t, i) => (
          <motion.figure
            key={i}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, delay: i * 0.15, ease: EASE }}
            whileHover={{ y: -6 }}
            className="group relative flex flex-col justify-between rounded-2xl border border-foreground/10 bg-background p-8 transition-shadow duration-500 hover:shadow-[0_30px_60px_-30px_color-mix(in_oklch,var(--olive)_35%,transparent)]"
          >
            <span className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--gold)] to-transparent opacity-70" />
            <motion.span
              initial={{ opacity: 0, scale: 0.6 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.15, ease: EASE }}
              aria-hidden
              className="absolute -top-4 left-6 font-display text-8xl leading-none text-[var(--gold)]"
            >
              &ldquo;
            </motion.span>
            <div className="flex items-center gap-1 text-[var(--gold)]">
              {Array.from({ length: 5 }).map((_, k) => (
                <Star key={k} className="h-3.5 w-3.5 fill-current" strokeWidth={0} />
              ))}
            </div>
            <motion.blockquote
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: i * 0.15 + 0.2, ease: EASE }}
              className="mt-5 font-display text-xl leading-snug tracking-normal text-foreground md:text-2xl"
            >
              {t.q}
            </motion.blockquote>
            <figcaption className="mt-8 flex items-center gap-3 border-t border-foreground/10 pt-5">
              <span className="grid h-10 w-10 place-items-center rounded-full bg-primary text-[11px] font-medium uppercase tracking-wider text-primary-foreground ring-2 ring-[var(--gold)]/30">
                {t.a
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </span>
              <div className="text-sm">
                <div className="text-foreground">{t.a}</div>
                <div className="text-foreground/55">{t.r}</div>
              </div>
            </figcaption>
          </motion.figure>
        ))}
      </div>
    </section>
  );
}
