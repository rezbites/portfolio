import { motion } from "framer-motion";
import type { ReactNode } from "react";

type Props = {
  id: string;
  label: string;
  title: string;
  description?: string;
  children: ReactNode;
  className?: string;
};

export default function Section({ id, label, title, description, children, className = "" }: Props) {
  return (
    <section id={id} className={`relative scroll-mt-20 py-24 md:py-32 ${className}`}>
      <div className="container-page">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-12 max-w-2xl"
        >
          <p className="section-label">{label}</p>
          <h2 className="section-title">{title}</h2>
          {description && <p className="mt-3 text-text-dim">{description}</p>}
        </motion.div>
        {children}
      </div>
    </section>
  );
}
