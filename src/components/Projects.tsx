import { motion } from "framer-motion";
import Section from "./ui/Section";
import TechTag from "./ui/TechTag";
import { projects } from "../data/projects";

export default function Projects() {
  return (
    <Section
      id="projects"
      label="Projects"
      title="Selected work."
      description="A few things I've built end-to-end — from data pipelines to deployed inference."
    >
      <div className="grid gap-5 md:grid-cols-2">
        {projects.map((p, idx) => (
          <motion.article
            key={p.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55, delay: idx * 0.06 }}
            className={`card flex flex-col ${
              p.featured ? "md:col-span-2 border-text/20" : ""
            }`}
          >
            <div className="flex items-baseline justify-between gap-3">
              <div className="flex items-baseline gap-3">
                <h3 className="font-display text-xl font-semibold text-text">
                  {p.title}
                </h3>
                {p.featured && (
                  <span className="rounded-full bg-text/10 px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wider text-accent-warm">
                    Featured
                  </span>
                )}
              </div>
              <span className="font-mono text-xs text-text-mute">{p.date}</span>
            </div>
            <p className="mt-2 text-sm text-text-dim">{p.tagline}</p>

            <ul className="mt-4 space-y-2 text-sm text-text-dim">
              {p.bullets.map((b, i) => (
                <li key={i} className="flex gap-3">
                  <span className="mt-2 inline-block h-1 w-1 shrink-0 rounded-full bg-accent" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>

            <div className="mt-auto pt-4">
              <div className="flex flex-wrap gap-1.5">
                {p.stack.map((s) => (
                  <TechTag key={s}>{s}</TechTag>
                ))}
              </div>
              {p.links && p.links.length > 0 && (
                <div className="mt-4 flex gap-4 border-t border-border pt-3">
                  {p.links.map((l) => (
                    <a
                      key={l.href}
                      href={l.href}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="inline-flex items-center gap-1.5 text-sm font-medium text-accent transition-transform hover:translate-x-0.5"
                    >
                      {l.label} <span aria-hidden>→</span>
                    </a>
                  ))}
                </div>
              )}
            </div>
          </motion.article>
        ))}
      </div>
    </Section>
  );
}
