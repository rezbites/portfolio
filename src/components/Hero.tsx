import { lazy, Suspense, useEffect, useState } from "react";
import { motion } from "framer-motion";

const HeroCanvas = lazy(() => import("../three/HeroCanvas"));

export default function Hero() {
  const [showCanvas, setShowCanvas] = useState(false);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;
    const w = window as Window & {
      requestIdleCallback?: (cb: () => void) => number;
    };
    const handle = w.requestIdleCallback
      ? w.requestIdleCallback(() => setShowCanvas(true))
      : window.setTimeout(() => setShowCanvas(true), 300);
    return () => {
      if (typeof handle === "number") window.clearTimeout(handle);
    };
  }, []);

  return (
    <section
      id="top"
      className="relative isolate overflow-hidden"
      style={{ minHeight: "100vh" }}
    >
      <div className="absolute inset-0 -z-10">
        {showCanvas ? (
          <Suspense fallback={null}>
            <HeroCanvas />
          </Suspense>
        ) : null}
      </div>

      <div className="container-page flex min-h-screen flex-col items-center justify-center pb-20 pt-28 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        >
          <h1
            className="font-display font-bold leading-[1.05] tracking-[-0.02em] text-text"
            style={{ fontSize: "clamp(2.4rem, 6vw, 5.5rem)" }}
          >
            Shashank Choudhary
          </h1>

          <p
            className="mt-2 font-display italic leading-[1.1] text-text-dim"
            style={{ fontSize: "clamp(1.2rem, 3vw, 2.4rem)", fontWeight: 400 }}
          >
            Building AI that lives beyond the notebook.
          </p>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-8 max-w-md text-sm leading-relaxed text-text-mute md:text-base"
        >
          Software engineer turning research into production systems on AWS.
          <br className="hidden sm:block" />
          AI/ML · Cloud Infrastructure · Shipping code that scales.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="#about"
            className="inline-flex items-center gap-2 rounded-full border border-text bg-text px-7 py-3 font-sans text-sm font-medium text-bg-deep transition-all duration-200 hover:bg-accent-warm hover:border-accent-warm hover:-translate-y-0.5"
          >
            More about me
            <span aria-hidden className="text-bg-deep/60">↓</span>
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full border border-border px-7 py-3 font-sans text-sm font-medium text-text transition-all duration-200 hover:border-text hover:-translate-y-0.5"
          >
            Talk to me
            <span aria-hidden className="text-text-dim">↗</span>
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1 }}
        className="pointer-events-none absolute inset-x-0 bottom-6 hidden justify-center md:flex"
      >
        <div className="flex flex-col items-center gap-2 font-mono text-[10px] uppercase tracking-[0.4em] text-text-mute">
          scroll
          <span className="block h-6 w-px animate-pulse bg-text-mute" />
        </div>
      </motion.div>
    </section>
  );
}
