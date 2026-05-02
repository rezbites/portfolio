import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

type Stat = {
  prefix?: string;
  suffix?: string;
  value: number;
  decimals?: number;
  label: string;
  caption: string;
  accent?: string;
};

const STATS: Stat[] = [
  {
    value: 0.1,
    decimals: 1,
    suffix: "%",
    label: "Top",
    caption: "Amazon ML Challenge 2024 · nationwide",
    accent: "#22D3EE",
  },
  {
    value: 200,
    prefix: "<",
    suffix: "ms",
    label: "P95 Latency",
    caption: "Production API endpoints on ECS Fargate",
    accent: "#A78BFA",
  },
  {
    value: 12,
    suffix: "+",
    label: "Microservices",
    caption: "Architected, containerized & deployed on AWS",
    accent: "#34D399",
  },
  {
    value: 99.9,
    decimals: 1,
    suffix: "%",
    label: "Uptime",
    caption: "Zero-downtime rolling ECS deployments",
    accent: "#FBBF24",
  },
];

function CountUp({
  to,
  decimals = 0,
  duration = 1.8,
  start,
}: {
  to: number;
  decimals?: number;
  duration?: number;
  start: boolean;
}) {
  const [val, setVal] = useState(0);

  useEffect(() => {
    if (!start) return;
    let raf = 0;
    const t0 = performance.now();
    const tick = (now: number) => {
      const p = Math.min(1, (now - t0) / (duration * 1000));
      const eased = 1 - Math.pow(1 - p, 3);
      setVal(eased * to);
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [start, to, duration]);

  return <span>{val.toFixed(decimals)}</span>;
}

export default function StatsBand() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      aria-label="By the numbers"
      className="relative border-y border-border bg-bg-deep py-10 md:py-12"
    >
      <div className="container-page">
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 14 }}
          transition={{ duration: 0.5 }}
          className="font-mono text-xs uppercase tracking-[0.3em] text-text-mute"
        >
          <span className="mr-3 inline-block h-px w-8 translate-y-[-3px] bg-text-mute/60 align-middle" />
          By the numbers
        </motion.p>

        <div className="mt-6 grid grid-cols-2 gap-4 md:mt-8 md:grid-cols-4 md:gap-6">
          {STATS.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{
                duration: 0.5,
                delay: 0.1 + i * 0.07,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group relative overflow-hidden rounded-xl border border-border bg-surface/50 p-5 transition-all duration-300 hover:border-text/20 hover:shadow-lg"
            >
              {/* Accent bar */}
              <div
                className="absolute left-0 top-0 h-full w-1 rounded-l-xl transition-all duration-300 group-hover:w-1.5"
                style={{ background: s.accent }}
              />

              <div
                className="pl-3 font-display font-bold leading-none tracking-tight text-text"
                style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)" }}
              >
                <span className="text-text-mute">{s.prefix}</span>
                <CountUp
                  to={s.value}
                  decimals={s.decimals}
                  start={inView}
                  duration={1.2 + i * 0.15}
                />
                <span className="text-text-dim">{s.suffix}</span>
              </div>
              <p className="mt-2 pl-3 font-display text-xs font-semibold uppercase tracking-[0.12em] text-text-dim">
                {s.label}
              </p>
              <p className="mt-1.5 pl-3 text-xs leading-relaxed text-text-mute">
                {s.caption}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
