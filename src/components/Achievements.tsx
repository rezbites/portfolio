import { motion } from "framer-motion";
import Section from "./ui/Section";
import { achievements } from "../data/achievements";

export default function Achievements() {
  return (
    <Section id="achievements" label="Achievements" title="Proof of work.">
      <div className="grid gap-4 md:grid-cols-2">
        {achievements.map((a, idx) => (
          <motion.div
            key={a.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: idx * 0.06 }}
            className="group relative overflow-hidden rounded-2xl border border-border bg-surface p-6 transition-all duration-300 hover:border-text/30 hover:shadow-card-hover"
          >
            {/* Subtle top accent gradient */}
            <div
              aria-hidden
              className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-text/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            />

            <div className="flex items-start gap-4">
              <span
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-surface-2 text-lg"
                aria-hidden
              >
                {a.icon}
              </span>
              <div className="min-w-0">
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent-warm">
                  {a.meta}
                </p>
                <h3 className="mt-1.5 font-display text-base font-semibold text-text md:text-lg">
                  {a.title}
                </h3>
              </div>
            </div>

            <p className="mt-3 text-sm leading-relaxed text-text-dim">
              {a.description}
            </p>

            {a.href && (
              <a
                href={a.href}
                target="_blank"
                rel="noreferrer noopener"
                className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-accent transition-transform hover:translate-x-0.5"
              >
                View on GitHub <span aria-hidden>→</span>
              </a>
            )}
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
