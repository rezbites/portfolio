export type Project = {
  title: string;
  tagline: string;
  date: string;
  bullets: string[];
  stack: string[];
  links?: { label: string; href: string }[];
  accent: "ml" | "cloud";
};

export const projects: Project[] = [
  {
    title: "Smart Product Pricing",
    tagline: "End-to-end multimodal pricing intelligence with a stacking ensemble",
    date: "Oct 2025",
    accent: "ml",
    bullets: [
      "Designed an end-to-end pricing system using a multimodal stacking ensemble combining structured data, text, and image features.",
      "Implemented a scalable ML pipeline with EfficientNetB0 and DistilBERT, optimizing GPU memory to resolve OOM issues.",
      "Validated outputs with automated test datasets and repeatable evaluation pipelines for performance consistency.",
    ],
    stack: ["Python", "TensorFlow", "PyTorch", "LightGBM", "EfficientNetB0", "DistilBERT"],
    links: [
      {
        label: "Source",
        href: "https://github.com/rezbites/Smart-Product-Pricing-Challenge",
      },
    ],
  },
  {
    title: "AI-Powered Wealth Assistant",
    tagline: "Retrieval-Augmented Generation app for personalized financial insights",
    date: "Aug 2025",
    accent: "ml",
    bullets: [
      "Built a RAG app delivering personalized financial insights and wealth-management recommendations.",
      "Implemented semantic search with FAISS via LangChain for context-aware query resolution over financial documents.",
      "Integrated Google Gemini through langchain-google-genai for advanced LLM reasoning.",
      "Developed unit tests for API flows, retrieval pipelines, and query-response validation.",
    ],
    stack: ["Streamlit", "LangChain", "Gemini API", "FAISS", "Python"],
    links: [
      { label: "Source", href: "https://github.com/rezbites/ai-powered-wealth-assistant" },
    ],
  },
  {
    title: "Semantic Cache for LLMs",
    tagline: "Redis-backed semantic caching layer to cut LLM token spend and latency",
    date: "2025",
    accent: "cloud",
    bullets: [
      "Built a semantic cache that intercepts LLM calls and returns cached responses for semantically similar prompts.",
      "Used Redis vector store + embedding similarity for cache lookups with tunable similarity thresholds.",
      "Reduces redundant API spend and tail latency for repeated or near-duplicate queries.",
    ],
    stack: ["Python", "Redis", "Vector Search", "LLM APIs"],
    links: [
      {
        label: "Source",
        href: "https://github.com/rezbites/semantic-cache-with-redis-for-llms",
      },
    ],
  },
  {
    title: "Prometheus + Grafana on Docker Compose",
    tagline: "One-command observability stack — metrics, dashboards, alerting",
    date: "2025",
    accent: "cloud",
    bullets: [
      "Provisioned a full Prometheus + Grafana monitoring stack via Docker Compose with persistent volumes.",
      "Wired sample exporters and pre-built Grafana dashboards for instant visibility.",
      "Practical reference for spinning up local observability before reaching for managed offerings.",
    ],
    stack: ["Prometheus", "Grafana", "Docker Compose", "Linux"],
    links: [
      {
        label: "Source",
        href: "https://github.com/rezbites/prometheus-grafana-visualization-on-docker-compose",
      },
    ],
  },
];
