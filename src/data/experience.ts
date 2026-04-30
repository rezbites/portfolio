export type Experience = {
  company: string;
  role: string;
  location: string;
  period: string;
  current?: boolean;
  bullets: string[];
  stack: string[];
};

export const experience: Experience[] = [
  {
    company: "Rooman Technologies",
    role: "AI Product Developer Intern",
    location: "Bangalore, India",
    period: "Jan 2026 — Present",
    current: true,
    bullets: [
      "Architected and deployed a production-grade AWS system for an AI-powered social platform from scratch using a single CloudFormation template (IaC) covering VPC, ALB, ECS Fargate, RDS PostgreSQL 16, ECR, S3, IAM, Secrets Manager, and CloudWatch — enabling one-command environment teardown and recreation.",
      "Engineered a sidecar container architecture on ECS Fargate, co-locating REST API, LLM interview service, and NSFW classifier in one task via AWS VPC — replacing cross-network HTTP with localhost calls, cutting ML microservice latency by ~60–70% and saving $30–50/month by consolidating 3 Fargate tasks into 1.",
      "Built a fully automated CI/CD pipeline (GitHub Actions, 5 sequential jobs) with infra validation, lint checks, CI tests, Trivy vulnerability scans, parallel Docker builds, ECR pushes tagged with git SHA, smoke tests, deployment gates, and zero-downtime ECS rolling deployments on every push to main.",
      "Implemented self-healing infrastructure: pipeline auto-creates the CloudFormation stack if absent, detects and applies IaC diffs, and handles in-progress states — all without human intervention.",
      "Secured secrets via AWS Secrets Manager with scoped least-privilege IAM roles per ECS task; monitored and resolved production issues through log analysis, metrics, and root-cause analysis across ECS startup, ALB routing, RDS connectivity, and container health checks via CloudWatch.",
    ],
    stack: [
      "AWS",
      "CloudFormation",
      "ECS Fargate",
      "RDS",
      "GitHub Actions",
      "Docker",
      "Trivy",
      "Python",
      "CloudWatch",
    ],
  },
  {
    company: "CodexIntern",
    role: "Machine Learning Intern",
    location: "Remote",
    period: "Jul 2025",
    bullets: [
      "Built and deployed ML-based backend APIs using Python, Scikit-learn, and Flask/FastAPI with automated preprocessing pipelines.",
    ],
    stack: ["Python", "Scikit-learn", "FastAPI", "Flask"],
  },
];
