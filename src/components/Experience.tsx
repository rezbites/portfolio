import { motion } from "framer-motion";
import Section from "./ui/Section";
import TechTag from "./ui/TechTag";
import { experience } from "../data/experience";

export default function Experience() {
  return (
    <Section
      id="experience"
      label="Experience"
      title="Where I've built things."
      description="Production AWS, ML pipelines, and the CI/CD that ties them together."
    >
      <ol className="relative space-y-8 border-l border-border pl-8">
        {/* Gradient glow on timeline */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 left-[-1px] w-px"
          style={{
            background:
              "linear-gradient(to bottom, transparent, rgba(232,230,224,0.3) 30%, rgba(232,230,224,0.3) 70%, transparent)",
          }}
        />

        {experience.map((exp, idx) => (
          <motion.li
            key={exp.company}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: idx * 0.05 }}
            className="relative"
          >
            <span
              className={`absolute -left-[37px] top-2 h-3 w-3 rounded-full ring-4 ring-bg ${
                exp.current
                  ? "bg-text shadow-soft timeline-dot-pulse"
                  : "bg-border"
              }`}
              aria-hidden
            />
            <motion.div
              className="card group"
              whileHover={{ y: -3 }}
              transition={{ duration: 0.2 }}
            >
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <h3 className="font-display text-xl font-semibold text-text">
                  {exp.role}{" "}
                  <span className="text-text-dim">@ {exp.company}</span>
                </h3>
                <p className="font-mono text-xs text-text-mute">{exp.period}</p>
              </div>
              <p className="mt-1 font-mono text-xs text-text-mute">{exp.location}</p>

              <ul className="mt-4 space-y-2 text-sm text-text-dim">
                {exp.bullets.map((b, i) => (
                  <motion.li
                    key={i}
                    className="flex gap-3"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.1 + i * 0.03 }}
                  >
                    <span className="mt-2 inline-block h-1 w-1 shrink-0 rounded-full bg-accent" />
                    <span>{b}</span>
                  </motion.li>
                ))}
              </ul>

              <div className="mt-4 flex flex-wrap gap-1.5">
                {exp.stack.map((s) => (
                  <TechTag key={s}>{s}</TechTag>
                ))}
              </div>
            </motion.div>
          </motion.li>
        ))}
      </ol>
    </Section>
  );
}
