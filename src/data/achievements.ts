export type Achievement = {
  title: string;
  description: string;
  meta: string;
  href?: string;
  icon: string;
};

export const achievements: Achievement[] = [
  {
    title: "Amazon ML Challenge 2024",
    description:
      "Built an end-to-end ML regression system under real-world constraints. Ranked in the top 0.1% nationwide out of thousands of participants.",
    meta: "Top 0.1% nationwide",
    href: "https://github.com/rezbites/Amazon-ML_hackathon",
    icon: "🏆",
  },
  {
    title: "Blulinked — Production AI Platform",
    description:
      "Architected and deployed a full AI-powered social platform on AWS from zero to live users — complete with sidecar microservices, NSFW filtering, and an LLM interview engine.",
    meta: "Full-stack · shipped to production",
    icon: "🚀",
  },
  {
    title: "Self-Healing CI/CD Pipeline",
    description:
      "Designed a 5-stage GitHub Actions pipeline that auto-provisions infrastructure, runs Trivy security scans, builds parallel Docker images, and deploys with zero downtime — no human intervention required.",
    meta: "Zero-downtime deployments",
    icon: "⚙️",
  },
  {
    title: "RAG Wealth Assistant",
    description:
      "Built a retrieval-augmented financial advisor using FAISS, LangChain, and Google Gemini — achieving contextual accuracy above baseline with semantic search over financial documents.",
    meta: "AI / LLM · end-to-end",
    href: "https://github.com/rezbites/ai-powered-wealth-assistant",
    icon: "🤖",
  },
];
