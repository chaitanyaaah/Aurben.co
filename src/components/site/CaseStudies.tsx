import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const cases = [
  {
    industry: "B2B SaaS",
    title: "From 2k MRR to a self serve funnel doing $180k/mo.",
    metric: "+9.4x",
    metricLabel: "Pipeline in 6 months",
  },
  {
    industry: "Personal Brand",
    title: "An editorial content engine producing 80 assets / week.",
    metric: "32M",
    metricLabel: "Organic impressions",
  },
  {
    industry: "Agency",
    title: "AI ops layer that retired 4 manual roles in 90 days.",
    metric: "68%",
    metricLabel: "Lower ops cost",
  },
];

export function CaseStudies() {
  return (
    <section id="work" className="mx-auto max-w-7xl px-6 py-32 lg:px-10">
      <div className="mb-20 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-foreground/50">
            Selected work. 03 / 04
          </p>
          <h2 className="mt-5 font-display text-5xl leading-[1.02] tracking-normal md:text-7xl">
            Outcomes,
            <br />
            <span className="italic text-primary">in the open.</span>
          </h2>
        </div>
        <a
          href="#contact"
          className="text-sm text-foreground/70 underline decoration-foreground/30 underline-offset-8 transition-colors hover:text-foreground hover:decoration-foreground"
        >
          Request full case studies →
        </a>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {cases.map((c, i) => (
          <motion.article
            key={c.title}
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ y: -8 }}
            className="group relative flex flex-col justify-between overflow-hidden rounded-2xl bg-primary p-8 text-primary-foreground transition-shadow duration-500 hover:shadow-[0_30px_60px_-20px_color-mix(in_oklch,var(--olive)_40%,transparent)]"
          >
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--gold)] to-transparent opacity-60" />
            <div className="flex items-center justify-between text-xs uppercase tracking-[0.25em] text-primary-foreground/60">
              <span>{c.industry}</span>
              <span>0{i + 1}</span>
            </div>

            <div className="my-12">
              <div className="font-display text-6xl leading-none tracking-normal text-[var(--gold)] md:text-7xl">
                {c.metric}
              </div>
              <div className="mt-2 text-xs uppercase tracking-[0.25em] text-primary-foreground/55">
                {c.metricLabel}
              </div>
            </div>

            <p className="font-display text-xl leading-snug tracking-normal text-primary-foreground">
              {c.title}
            </p>

            <div className="mt-8 inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-primary-foreground/70 transition-all group-hover:text-[var(--gold)]">
              Read more
              <ArrowUpRight
                className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                strokeWidth={1.5}
              />
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
