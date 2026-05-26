import { motion } from "framer-motion";

const points = [
  { k: "Systems", v: "Over noise. We ship infrastructure that runs when you don't." },
  { k: "Automation", v: "Over manual work. Every workflow we touch becomes self operating." },
  { k: "Strategy", v: "Before content. We architect the game before we play it." },
  { k: "AI first", v: "From the foundation. Not a layer. The substrate." },
];

export function Why() {
  return (
    <section id="why" className="relative mx-auto max-w-7xl px-6 py-32 lg:px-10">
      <div className="grid gap-16 md:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="md:col-span-5"
        >
          <p className="text-xs uppercase tracking-[0.3em] text-foreground/50">
            Why Aurben. 04 / 04
          </p>
          <h2 className="mt-6 font-display text-5xl leading-[1.02] tracking-normal md:text-6xl">
            We don't run
            <br />
            campaigns.
            <br />
            <span className="italic text-primary">We build engines.</span>
          </h2>
          <p className="mt-8 max-w-md text-foreground/65">
            Most agencies sell hours. We sell compounding leverage. Systems that get sharper,
            cheaper, and more profitable every quarter you own them.
          </p>
          <motion.div
            aria-hidden
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="mt-8 h-px max-w-sm origin-left bg-primary/25"
          />
        </motion.div>

        <div className="md:col-span-7">
          <div className="divide-y divide-foreground/10 border-y border-foreground/10">
            {points.map((p, i) => (
              <motion.div
                key={p.k}
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className="group flex items-baseline gap-8 border-l-2 border-transparent py-8 pl-4 transition-all duration-300 hover:border-[var(--gold)] hover:pl-8"
              >
                <span className="font-display text-sm text-foreground/40">0{i + 1}</span>
                <div className="flex-1">
                  <h3 className="font-display text-3xl tracking-normal text-foreground transition-transform duration-500 group-hover:translate-x-2">
                    {p.k}
                  </h3>
                  <p className="mt-2 text-foreground/65">{p.v}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
