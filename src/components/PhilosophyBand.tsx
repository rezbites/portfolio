import { motion } from "framer-motion";

export default function PhilosophyBand() {
  return (
    <section
      aria-label="Philosophy"
      className="relative overflow-hidden bg-bg-deep py-24 md:py-32"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(232,230,224,0.6), transparent 70%)",
        }}
      />

      <div className="container-page relative">
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="font-mono text-xs uppercase tracking-[0.3em] text-text-mute"
        >
          <span className="mr-3 inline-block h-px w-8 translate-y-[-3px] bg-text-mute/60 align-middle" />
          Philosophy
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
          className="mt-8 max-w-5xl font-display font-bold uppercase leading-[0.95] tracking-tight text-text"
          style={{ fontSize: "clamp(2.2rem, 6vw, 5.5rem)" }}
        >
          From{" "}
          <span className="font-serif italic font-normal text-text-dim normal-case">
            data
          </span>{" "}
          to <span className="text-text">deployment.</span>
          <br />
          <span className="font-serif italic font-normal text-text-dim normal-case">
            without
          </span>{" "}
          the gaps in between.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-10 max-w-xl text-base text-text-dim md:text-lg"
        >
          I build systems that don't stop at the notebook. From multimodal
          ensembles to self-healing AWS pipelines — accurate, fast, and actually
          shippable.
        </motion.p>
      </div>
    </section>
  );
}
