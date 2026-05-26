import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const lanes = [
  "Audit",
  "Map",
  "Prototype",
  "Launch",
  "Measure",
  "Improve",
  "Signals",
  "Content",
  "Follow up",
  "Booked calls",
];

const stages = [
  { n: "01", title: "Signal", copy: "Spot the pattern hiding inside the noise." },
  { n: "02", title: "System", copy: "Turn the pattern into repeatable motion." },
  { n: "03", title: "Scale", copy: "Push what works until it compounds." },
];

const metrics = [
  { label: "Lead clarity", value: "82%", fill: "82%" },
  { label: "Follow up speed", value: "94%", fill: "94%" },
  { label: "Booking intent", value: "68%", fill: "68%" },
];

export function ScrollPlay() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const laneOne = useTransform(scrollYProgress, [0, 1], ["-8%", "-42%"]);
  const tilt = useTransform(scrollYProgress, [0, 0.5, 1], [-2, 2, -2]);
  const progress = useTransform(scrollYProgress, [0.08, 0.92], [0, 1]);
  const dialRotate = useTransform(scrollYProgress, [0, 1], [0, 360]);
  const badgeY = useTransform(scrollYProgress, [0, 0.5, 1], [24, -18, 24]);
  const pathX = useTransform(scrollYProgress, [0.12, 0.88], ["0%", "82%"]);
  const stageLift = useTransform(scrollYProgress, [0, 0.5, 1], [14, -18, 14]);

  return (
    <section
      ref={ref}
      className="relative overflow-hidden border-y border-foreground/10 bg-[var(--stone)] py-20 md:py-28"
    >
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(115deg,transparent_0%,rgba(255,255,255,0.32)_38%,transparent_62%)] opacity-70" />

      <div className="relative mx-auto mb-10 grid max-w-7xl gap-8 px-6 md:mb-14 md:grid-cols-[1fr_auto] md:items-end lg:px-10">
        <div className="flex flex-col gap-5">
          <p className="text-xs uppercase tracking-[0.3em] text-foreground/50">Growth machine</p>
          <h2 className="max-w-4xl font-display text-4xl leading-[1.06] tracking-normal md:text-6xl md:leading-[1.03]">
            Scroll and watch the system
            <span className="italic text-primary"> warm up.</span>
          </h2>
          <p className="max-w-xl text-foreground/65">
            The better the signal gets, the cleaner the funnel becomes. That is the work.
          </p>
        </div>

        <motion.div
          style={{ y: badgeY }}
          className="hidden min-w-48 rounded-3xl border border-foreground/10 bg-background/70 p-5 shadow-[0_24px_80px_-60px_var(--ink)] backdrop-blur md:block"
        >
          <div className="mb-4 flex items-center justify-between text-xs uppercase tracking-[0.22em] text-foreground/45">
            <span>Loop</span>
            <span>Live</span>
          </div>
          <motion.div
            style={{ rotate: dialRotate }}
            className="mx-auto grid h-24 w-24 place-items-center rounded-full border border-primary/25 bg-[var(--cream)]"
          >
            <span className="h-3 w-3 rounded-full bg-primary" />
          </motion.div>
        </motion.div>
      </div>

      <div className="relative mx-auto mb-8 h-2 max-w-7xl overflow-hidden rounded-full bg-foreground/10 px-6 md:mb-10 lg:px-10">
        <motion.div
          style={{ scaleX: progress }}
          className="absolute inset-y-0 left-0 w-full origin-left rounded-full bg-primary"
        />
      </div>

      <div className="relative mx-auto mb-10 max-w-7xl px-6 lg:px-10">
        <div className="relative overflow-hidden rounded-[1.5rem] border border-foreground/10 bg-background/55 p-3 shadow-[0_30px_90px_-70px_var(--ink)] backdrop-blur md:rounded-[2rem] md:p-4">
          <div className="pointer-events-none absolute inset-x-8 top-1/2 hidden h-px bg-foreground/10 md:block" />
          <motion.div
            aria-hidden
            style={{ x: pathX }}
            className="pointer-events-none absolute left-8 top-1/2 hidden h-4 w-4 -translate-y-1/2 rounded-full bg-primary shadow-[0_0_0_12px_color-mix(in_oklch,var(--olive)_12%,transparent)] md:block"
          />
          <div className="grid gap-4 md:grid-cols-3">
            {stages.map((stage, index) => (
              <motion.div
                key={stage.n}
                style={{ y: index === 1 ? stageLift : undefined }}
                whileHover={{ y: -10, rotate: index === 1 ? 1 : -1 }}
                className="relative min-h-36 rounded-[1.25rem] border border-foreground/10 bg-[var(--cream)] p-5 transition-colors hover:bg-primary hover:text-primary-foreground md:min-h-44 md:rounded-[1.5rem] md:p-6"
              >
                <div className="flex items-center justify-between gap-4">
                  <span className="font-display text-3xl md:text-4xl">{stage.n}</span>
                  <span className="h-2 w-2 rotate-45 bg-[var(--gold)]" />
                </div>
                <h3 className="mt-6 font-display text-2xl md:mt-8 md:text-3xl">{stage.title}</h3>
                <p className="mt-3 text-sm leading-relaxed opacity-70">{stage.copy}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <div className="relative mx-auto grid max-w-7xl gap-4 px-6 md:grid-cols-[1fr_0.75fr] md:items-center lg:px-10">
        <motion.div
          style={{ rotate: tilt }}
          className="overflow-hidden rounded-[1.5rem] border border-foreground/10 bg-background/70 py-4 shadow-[0_28px_80px_-68px_var(--ink)] backdrop-blur [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]"
        >
          <motion.div style={{ x: laneOne }} className="flex w-max gap-3 px-4 md:gap-4 md:px-6">
            {[...lanes, ...lanes, ...lanes].map((item, i) => (
              <motion.span
                key={`${item}-${i}`}
                whileHover={{ y: -8, scale: 1.04, rotate: i % 2 === 0 ? -1 : 1 }}
                className="inline-flex h-16 min-w-40 items-center justify-center rounded-xl border border-foreground/10 bg-[var(--cream)] px-5 font-display text-lg text-foreground shadow-[0_20px_60px_-45px_var(--ink)] transition-colors hover:bg-primary hover:text-primary-foreground md:h-20 md:min-w-52 md:rounded-2xl md:px-8 md:text-2xl"
              >
                {item}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>

        <div className="grid gap-3">
          {metrics.map((metric, index) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, x: 18 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: index * 0.08 }}
              className="rounded-[1.25rem] border border-foreground/10 bg-background/80 p-4 backdrop-blur"
            >
              <div className="flex items-center justify-between gap-4">
                <span className="text-xs uppercase tracking-[0.22em] text-foreground/50">
                  {metric.label}
                </span>
                <motion.span
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: 0.2 + index * 0.08 }}
                  className="font-display text-2xl text-primary"
                >
                  {metric.value}
                </motion.span>
              </div>
              <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-foreground/10">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: metric.fill }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.25 + index * 0.08, ease: [0.22, 1, 0.36, 1] }}
                  className="h-full rounded-full bg-primary"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
