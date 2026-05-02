import { useMemo } from "react";

type Variant = "tech" | "stats" | "values" | "focus" | "available";

const SETS: Record<Variant, string[]> = {
  tech: [
    "Python",
    "PyTorch",
    "TensorFlow",
    "LangChain",
    "FAISS",
    "AWS",
    "ECS Fargate",
    "CloudFormation",
    "Docker",
    "Kubernetes",
    "GitHub Actions",
    "FastAPI",
    "PostgreSQL",
    "Redis",
    "Kafka",
    "Terraform",
    "React",
    "TypeScript",
    "Grafana",
    "Prometheus",
  ],
  stats: [
    "Top 0.1% — Amazon ML 2024",
    "60–70% latency cut",
    "$30–50/mo infra savings",
    "Zero-downtime ECS deploys",
    "Self-healing CI/CD",
    "5-job pipeline w/ Trivy scans",
    "Sidecar container architecture",
    "Single CloudFormation IaC",
  ],
  values: [
    "Ship to prod",
    "Own outcomes",
    "Scale what works",
    "Test what matters",
    "Read the logs",
    "Keep it simple",
    "Document the why",
    "Measure twice",
  ],
  focus: [
    "Machine Learning",
    "Cloud Infrastructure",
    "DevOps & CI/CD",
    "Backend Engineering",
    "Data Pipelines",
    "Observability",
    "RAG & LLMs",
    "Production AI",
  ],
  available: [
    "Available for full-time roles",
    "Open to opportunities",
    "Bengaluru, India",
    "Graduating Jun 2026",
    "Currently @ Rooman Technologies",
    "Let's build something",
    "Drop a message below",
  ],
};

const SYMBOLS: Record<Variant, string> = {
  tech: "✦",
  stats: "◇",
  values: "✺",
  focus: "✶",
  available: "→",
};

type Props = {
  variant: Variant;
  reverse?: boolean;
  size?: "sm" | "md" | "lg";
  muted?: boolean;
};

export default function SectionDivider({
  variant,
  reverse,
  size = "md",
  muted = false,
}: Props) {
  const items = SETS[variant];
  const symbol = SYMBOLS[variant];
  const repeated = useMemo(() => [...items, ...items, ...items], [items]);

  const fontSize =
    size === "sm"
      ? "clamp(1rem, 1.6vw, 1.4rem)"
      : size === "lg"
      ? "clamp(1.5rem, 3vw, 2.6rem)"
      : "clamp(1.2rem, 2.2vw, 1.9rem)";

  const py = size === "sm" ? "py-6" : size === "lg" ? "py-10 md:py-14" : "py-8 md:py-10";

  return (
    <section
      aria-label={variant}
      className={`relative -my-px overflow-hidden border-y border-border bg-bg-deep ${py}`}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-bg-deep to-transparent md:w-32"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-bg-deep to-transparent md:w-32"
      />

      <div
        className={`flex items-center gap-10 whitespace-nowrap ${
          reverse ? "marquee-row marquee-row--reverse" : "marquee-row"
        }`}
      >
        {repeated.map((label, i) => (
          <span
            key={i}
            className={`inline-flex shrink-0 items-center gap-10 font-display font-semibold uppercase tracking-tight transition-colors ${
              muted ? "text-text-mute hover:text-text-dim" : "text-text hover:text-accent-warm"
            }`}
            style={{ fontSize }}
          >
            <span>{label}</span>
            <span aria-hidden className="text-text-mute">
              {symbol}
            </span>
          </span>
        ))}
      </div>
    </section>
  );
}
