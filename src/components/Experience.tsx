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
      <ol className="relative space-y-10 border-l border-border pl-8">
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
                exp.current ? "bg-text shadow-soft" : "bg-border"
              }`}
              aria-hidden
            />
            <div className="card group">
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <h3 className="font-display text-xl font-semibold text-text">
                  {exp.role}{" "}
                  <span className="text-text-dim">@ {exp.company}</span>
                </h3>
                <p className="font-mono text-xs text-text-mute">{exp.period}</p>
              </div>
              <p className="mt-1 font-mono text-xs text-text-mute">{exp.location}</p>

              <ul className="mt-5 space-y-2.5 text-sm text-text-dim">
                {exp.bullets.map((b, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="mt-2 inline-block h-1 w-1 shrink-0 rounded-full bg-accent" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-5 flex flex-wrap gap-1.5">
                {exp.stack.map((s) => (
                  <TechTag key={s}>{s}</TechTag>
                ))}
              </div>
            </div>
          </motion.li>
        ))}
      </ol>
    </Section>
  );
}
