import { motion } from "framer-motion";
import { BrandMark } from "./BrandMark";

export function Footer() {
  return (
    <footer className="bg-background">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          className="grid gap-12 md:grid-cols-12"
        >
          <div className="md:col-span-5">
            <a href="#top" className="group flex items-center gap-3">
              <BrandMark className="h-10 w-10" />
              <span className="font-display text-3xl italic tracking-normal text-foreground">
                Aurben
              </span>
            </a>
            <p className="mt-6 max-w-sm text-sm text-foreground/60">
              AI automation, funnel architecture, and content systems for teams that want cleaner
              growth without extra noise.
            </p>
          </div>

          <FooterCol
            title="Studio"
            links={[
              ["Services", "#services"],
              ["Process", "#process"],
              ["Why Aurben", "#why"],
              ["Book a meeting", "#contact"],
            ]}
          />
          <FooterCol
            title="Contact"
            links={[
              ["chaitanya@aurben.co", "mailto:chaitanya@aurben.co"],
              ["angad@aurben.co", "mailto:angad@aurben.co"],
            ]}
          />
          <FooterCol
            title="Social"
            links={[
              ["LinkedIn", "#"],
              ["X / Twitter", "#"],
              ["Instagram", "#"],
            ]}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
          className="mt-20 flex flex-col items-start justify-between gap-4 border-t border-foreground/10 pt-8 text-xs text-foreground/55 md:flex-row md:items-center"
        >
          <span>© {new Date().getFullYear()} Aurben Studio. All rights reserved.</span>
          <span className="uppercase tracking-[0.3em]">Crafted with intent</span>
        </motion.div>
      </div>
    </footer>
  );
}

function FooterCol({ title, links }: { title: string; links: [string, string][] }) {
  return (
    <div className="md:col-span-2">
      <h4 className="text-xs uppercase tracking-[0.3em] text-foreground/50">{title}</h4>
      <ul className="mt-5 space-y-3 text-sm">
        {links.map(([label, href]) => (
          <li key={label}>
            <a href={href} className="text-foreground/75 transition-colors hover:text-foreground">
              {label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
