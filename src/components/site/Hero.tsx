import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, 160]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      ref={ref}
      id="top"
      className="relative isolate flex min-h-[92svh] w-full flex-col justify-center overflow-hidden pt-24 md:min-h-[94svh] md:pt-28"
    >
      {/* Ambient layered background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,var(--stone),transparent_55%)] opacity-90" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_30%,color-mix(in_oklch,var(--gold)_25%,transparent),transparent_60%)]" />
        <svg
          className="absolute inset-0 h-full w-full opacity-[0.035]"
          xmlns="http://www.w3.org/2000/svg"
        >
          <filter id="n">
            <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" />
          </filter>
          <rect width="100%" height="100%" filter="url(#n)" />
        </svg>
      </div>

      <GrowthToken constraintRef={ref} />

      <motion.div style={{ y, opacity }} className="mx-auto w-full max-w-7xl px-6 py-12 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mb-10 text-xs uppercase tracking-[0.3em] text-foreground/60"
        >
          AI systems, funnels, and content engines built to compound
        </motion.div>

        <h1 className="relative z-10 max-w-5xl font-display text-balance text-[clamp(3.15rem,13vw,8.7rem)] leading-[0.94] tracking-normal text-foreground md:leading-[0.9]">
          <Reveal delay={0.15}>Growth systems</Reveal>
          <br />
          <Reveal delay={0.3}>
            that <span className="italic text-primary">move brands.</span>
          </Reveal>
        </h1>

        <div className="relative z-10 mt-12 grid items-end gap-10 md:grid-cols-12">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="max-w-md text-pretty text-[0.95rem] leading-relaxed text-foreground/70 md:col-span-5 md:col-start-1 md:text-base"
          >
            Aurben builds AI workflows, sharper funnels, and content loops that help serious brands
            turn attention into conversations, then conversations into booked calls.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.85 }}
            className="flex flex-col items-stretch gap-3 sm:flex-row sm:flex-wrap sm:items-center md:col-span-6 md:col-start-7 md:justify-end"
          >
            <a
              href="#contact"
              className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full bg-primary px-6 py-3.5 text-sm text-primary-foreground transition-all hover:-translate-y-0.5 hover:bg-[var(--olive-deep)] hover:shadow-[0_18px_45px_-30px_var(--ink)]"
            >
              <span className="absolute inset-y-0 -left-1/3 w-1/3 skew-x-[-20deg] bg-white/20 transition-transform duration-700 group-hover:translate-x-[420%]" />
              <span className="relative">Build with Aurben</span>
              <span className="relative transition-transform group-hover:translate-x-1">→</span>
            </a>
            <a
              href="#services"
              className="group inline-flex items-center justify-center gap-2 rounded-full border border-foreground/20 px-6 py-3.5 text-sm text-foreground transition-all hover:border-foreground/60"
            >
              See what we do
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-12 overflow-hidden rounded-full border border-foreground/10 bg-background/45 py-3 backdrop-blur-sm [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)] md:mt-14"
        >
          <div className="flex w-max animate-marquee gap-6 px-5 text-[0.68rem] uppercase tracking-[0.2em] text-foreground/50 md:gap-8 md:px-6 md:text-xs md:tracking-[0.24em]">
            {[
              "Capture",
              "Qualify",
              "Nurture",
              "Book",
              "Learn",
              "Improve",
              "Capture",
              "Qualify",
            ].map((word, i) => (
              <span
                key={`${word}-${i}`}
                className="flex items-center gap-6 whitespace-nowrap md:gap-8"
              >
                {word}
                <span className="h-1.5 w-1.5 rounded-full bg-[var(--gold)]" />
              </span>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

function GrowthToken({ constraintRef }: { constraintRef: React.RefObject<HTMLElement | null> }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, y: 24 }}
      animate={{
        opacity: 1,
        scale: 1,
        y: [0, -8, 0],
        rotate: 360,
      }}
      transition={{
        opacity: { duration: 0.7, delay: 0.75 },
        scale: { duration: 0.7, delay: 0.75, ease: [0.22, 1, 0.36, 1] },
        y: { duration: 4.2, repeat: Infinity, ease: "easeInOut" },
        rotate: { duration: 4.8, repeat: Infinity, ease: "linear" },
      }}
      drag
      dragConstraints={constraintRef}
      dragElastic={0.24}
      dragMomentum={false}
      whileTap={{ cursor: "grabbing" }}
      whileDrag={{ scale: 1.12, rotateZ: -8, boxShadow: "0 36px 90px -46px var(--ink)" }}
      whileHover={{ scale: 1.05, y: -6 }}
      className="absolute right-[11%] top-[18%] z-30 hidden h-[4.9rem] w-[4.9rem] cursor-grab touch-none select-none place-items-center rounded-full border border-foreground/10 bg-[radial-gradient(circle_at_32%_28%,white_0%,var(--cream)_28%,var(--gold)_62%,var(--olive)_116%)] shadow-[0_30px_78px_-48px_var(--ink)] active:cursor-grabbing md:grid lg:right-[16%] lg:top-[18%] lg:h-[6.2rem] lg:w-[6.2rem]"
      aria-label="Aurben moving growth token"
    >
      <motion.span
        aria-hidden
        animate={{ rotate: -360 }}
        transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
        className="absolute inset-2 rounded-full border border-dashed border-background/70"
      />
      <motion.span
        aria-hidden
        animate={{ rotate: 360 }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0"
      >
        <span className="absolute left-1/2 top-0 h-2 w-2 -translate-x-1/2 rounded-full bg-primary shadow-[0_0_18px_color-mix(in_oklch,var(--olive)_45%,transparent)]" />
        <span className="absolute bottom-1 left-1/2 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-background/80" />
      </motion.span>
      <span className="absolute inset-0 grid place-items-center">
        <span className="relative grid h-[3.2rem] w-[3.2rem] place-items-center rounded-full bg-background/84 text-center shadow-[inset_0_1px_14px_rgba(255,255,255,0.9),inset_0_-12px_22px_rgba(46,59,47,0.08)] backdrop-blur lg:h-[4.1rem] lg:w-[4.1rem]">
          <span className="absolute inset-2 rounded-full border border-foreground/10" />
          <span className="font-display text-3xl italic leading-none text-primary lg:text-4xl">
            A
          </span>
        </span>
      </span>
      <motion.span
        aria-hidden
        animate={{ scale: [1, 1.16, 1], opacity: [0.36, 0.12, 0.36] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -inset-4 rounded-full bg-primary/5"
      />
    </motion.div>
  );
}

function Reveal({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  return (
    <span className="inline-block overflow-hidden align-bottom">
      <motion.span
        initial={{ y: "110%" }}
        animate={{ y: 0 }}
        transition={{ duration: 1, delay, ease: [0.22, 1, 0.36, 1] }}
        className="inline-block"
      >
        {children}
      </motion.span>
    </span>
  );
}
