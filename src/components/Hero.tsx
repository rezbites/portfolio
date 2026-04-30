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
      : window.setTimeout(() => setShowCanvas(true), 200);
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

      <div className="container-page flex min-h-screen flex-col items-center justify-center pb-20 pt-32 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="font-display font-semibold uppercase leading-[0.95] tracking-[-0.02em]"
          style={{ fontSize: "clamp(2rem, 5.6vw, 5rem)" }}
        >
          <span className="block text-text-dim">Hi, I'm</span>
          <span
            className="echo-text mt-2 block"
            data-text="Shashank Choudhary"
          >
            Shashank Choudhary
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="mt-8 max-w-xl text-base text-text-dim md:text-lg"
        >
          I'm an AI/ML engineer & cloud-native developer
          <br className="hidden sm:block" />
          shipping production systems on AWS.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.65 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-x-10 gap-y-4"
        >
          <a href="#projects" className="arrow-link">
            see my projects
          </a>
          <a href="#about" className="arrow-link">
            more about me
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1 }}
        className="pointer-events-none absolute inset-x-0 bottom-8 hidden justify-center md:flex"
      >
        <div className="flex flex-col items-center gap-2 font-mono text-[10px] uppercase tracking-[0.4em] text-text-mute">
          scroll
          <span className="block h-6 w-px animate-pulse bg-text-mute" />
        </div>
      </motion.div>
    </section>
  );
}
