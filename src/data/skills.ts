export type SkillCluster = {
  title: string;
  blurb: string;
  items: string[];
};

export const skillClusters: SkillCluster[] = [
  {
    title: "Languages",
    blurb: "Daily-driver and project languages.",
    items: ["Python", "TypeScript", "C", "Java", "Go", "SQL (Postgres)"],
  },
  {
    title: "ML & Data Science",
    blurb: "Modeling, NLP, retrieval, and the math beneath it.",
    items: [
      "PyTorch",
      "TensorFlow",
      "Scikit-learn",
      "HuggingFace",
      "LangChain",
      "FAISS",
      "LLMs",
      "RAG",
      "NLP",
      "Pandas",
      "NumPy",
    ],
  },
  {
    title: "Cloud & DevOps",
    blurb: "Production AWS, IaC, containers, and pipelines.",
    items: [
      "AWS (ECS, EC2, ECR, IAM, RDS, S3, ALB)",
      "CloudFormation",
      "Terraform",
      "Docker",
      "Kubernetes",
      "GitHub Actions",
      "Trivy",
      "Linux",
      "System Design",
    ],
  },
  {
    title: "Frameworks & APIs",
    blurb: "Backends, APIs, and the UIs that consume them.",
    items: [
      "FastAPI",
      "Flask",
      "RESTful APIs",
      "React (Vite)",
      "Streamlit",
      "Gunicorn",
      "Nginx",
    ],
  },
  {
    title: "Data & Messaging",
    blurb: "Streaming, caching, and stores.",
    items: [
      "Apache Kafka",
      "Redis",
      "MongoDB",
      "FAISS",
      "ETL Pipelines",
      "Vector Databases",
    ],
  },
  {
    title: "Tools & Monitoring",
    blurb: "What's open on the second monitor.",
    items: [
      "Git",
      "Postman",
      "Power BI",
      "AWS CloudWatch",
      "Prometheus",
      "Grafana",
      "Gemini API",
    ],
  },
];
