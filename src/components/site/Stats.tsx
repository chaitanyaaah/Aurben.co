import { motion } from "framer-motion";

const stats = [
  { value: "50M+", label: "Views generated", fill: "86%" },
  { value: "120+", label: "Systems built", fill: "72%" },
  { value: "$10M+", label: "Revenue influenced", fill: "80%" },
  { value: "4.9", label: "Client rating", fill: "94%" },
];

export function Stats() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="rounded-[2rem] border border-foreground/10 bg-background/70 p-4 shadow-[0_28px_90px_-70px_var(--ink)] backdrop-blur md:p-5"
      >
        <div className="grid gap-5 md:grid-cols-[0.9fr_1.6fr] md:items-center">
          <div className="rounded-[1.4rem] bg-[var(--stone)] p-6 md:p-7">
            <p className="text-xs uppercase tracking-[0.3em] text-foreground/50">By the numbers</p>
            <h2 className="mt-4 font-display text-3xl leading-[1.04] tracking-normal md:text-4xl">
              Proof that the
              <span className="italic text-primary"> system is moving.</span>
            </h2>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-foreground/60">
              Small enough to scan fast. Strong enough to show why booking the call matters.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.55, delay: i * 0.07 }}
                className="rounded-[1.25rem] border border-foreground/10 bg-[var(--cream)] p-5"
              >
                <div className="flex items-start justify-between gap-3">
                  <span className="font-display text-3xl tracking-normal text-foreground md:text-4xl">
                    {s.value}
                  </span>
                  <motion.span
                    initial={{ opacity: 0, scale: 0.7 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.25 + i * 0.08 }}
                    className="mt-2 h-2 w-2 rounded-full bg-primary"
                  />
                </div>
                <span className="mt-5 block text-[0.68rem] uppercase tracking-[0.18em] text-foreground/55">
                  {s.label}
                </span>
                <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-foreground/10">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: s.fill }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.18 + i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                    className="h-full rounded-full bg-primary"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
