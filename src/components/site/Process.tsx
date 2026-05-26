import { motion } from "framer-motion";

const steps = [
  {
    n: "01",
    title: "Discovery",
    body: "We map your market, funnel, and operational gaps to find where leverage actually lives.",
  },
  {
    n: "02",
    title: "Strategy",
    body: "A precise roadmap. What we build, in what order, and how it compounds quarter over quarter.",
  },
  {
    n: "03",
    title: "Build",
    body: "Our team ships systems: automations, content engines, funnels, and integrations.",
  },
  {
    n: "04",
    title: "Scale",
    body: "We instrument, iterate, and pour fuel into what works. The system gets sharper every cycle.",
  },
];

export function Process() {
  return (
    <section
      id="process"
      className="relative overflow-hidden bg-primary py-32 text-primary-foreground"
    >
      <motion.div
        aria-hidden
        className="absolute left-0 top-0 flex w-max animate-marquee gap-10 py-6 text-xs uppercase tracking-[0.35em] text-primary-foreground/12"
      >
        {["Discover", "Design", "Build", "Launch", "Learn", "Scale", "Discover", "Design"].map(
          (word, i) => (
            <span key={`${word}-${i}`}>{word}</span>
          ),
        )}
      </motion.div>
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mb-24 max-w-3xl"
        >
          <p className="text-xs uppercase tracking-[0.3em] text-primary-foreground/60">
            How it works. 02 / 04
          </p>
          <h2 className="mt-5 font-display text-5xl leading-[1.02] tracking-normal md:text-7xl">
            A method, not a
            <br />
            <span className="italic text-[var(--gold)]">retainer.</span>
          </h2>
          <motion.div
            aria-hidden
            initial={{ width: 0 }}
            whileInView={{ width: "12rem" }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="mt-8 h-px bg-[var(--gold)]"
          />
        </motion.div>

        <div className="relative">
          <div className="absolute left-0 right-0 top-12 hidden h-px bg-primary-foreground/15 md:block" />
          <motion.div
            aria-hidden
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, margin: "-140px" }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="absolute left-0 right-0 top-12 hidden h-px origin-left bg-[var(--gold)] md:block"
          />
          <div className="grid gap-16 md:grid-cols-4">
            {steps.map((s, i) => (
              <motion.div
                key={s.n}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.7, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
                className="group relative"
              >
                <div className="relative mb-6 flex items-center">
                  <motion.div
                    animate={{ rotate: [0, 180, 360] }}
                    transition={{ duration: 8 + i, repeat: Infinity, ease: "linear" }}
                    className="relative h-4 w-4 bg-[var(--gold)] transition-transform duration-300 group-hover:scale-125"
                  />
                </div>
                <div className="font-display text-7xl leading-none tracking-normaler text-primary-foreground/30 md:text-8xl">
                  {s.n}
                </div>
                <motion.div
                  aria-hidden
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.75, delay: i * 0.15 + 0.15 }}
                  className="mt-4 h-1 origin-left rounded-full bg-primary-foreground/15"
                />
                <h3 className="mt-6 font-display text-2xl tracking-normal">{s.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-primary-foreground/70">{s.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
