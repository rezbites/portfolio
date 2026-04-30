import { motion } from "framer-motion";
import Section from "./ui/Section";
import { achievements } from "../data/achievements";

export default function Achievements() {
  return (
    <Section
      id="achievements"
      label="Achievements"
      title="Some receipts."
    >
      <div className="grid gap-4 md:grid-cols-2">
        {achievements.map((a, idx) => (
          <motion.div
            key={a.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: idx * 0.05 }}
            className="card"
          >
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
              {a.meta}
            </p>
            <h3 className="mt-3 font-display text-lg font-semibold text-text">
              {a.title}
            </h3>
            <p className="mt-2 text-sm text-text-dim">{a.description}</p>
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
