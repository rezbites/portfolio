import { motion } from "framer-motion";
import Section from "./ui/Section";
import { skillClusters } from "../data/skills";

export default function Skills() {
  return (
    <Section
      id="skills"
      label="Stack"
      title="Tools I reach for."
      description="Grouped by what I'm doing — modeling, shipping, or keeping things alive."
    >
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {skillClusters.map((cluster, idx) => (
          <motion.div
            key={cluster.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: idx * 0.04 }}
            className="card"
          >
            <div className="flex items-baseline justify-between">
              <h3 className="font-display text-base font-semibold text-text">
                {cluster.title}
              </h3>
              <span className="font-mono text-xs text-text-mute">
                {String(idx + 1).padStart(2, "0")}
              </span>
            </div>
            <p className="mt-1 text-sm text-text-mute">{cluster.blurb}</p>
            <ul className="mt-4 flex flex-wrap gap-1.5">
              {cluster.items.map((item) => (
                <li
                  key={item}
                  className="rounded-md border border-border bg-surface-2 px-2.5 py-1 font-mono text-xs text-text-dim"
                >
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
