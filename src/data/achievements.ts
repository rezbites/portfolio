export type Achievement = {
  title: string;
  description: string;
  meta: string;
  href?: string;
};

export const achievements: Achievement[] = [
  {
    title: "Amazon ML Challenge 2024",
    description:
      "Built an end-to-end ML regression system under real-world constraints. Final score 0.098.",
    meta: "Top 0.1% nationwide",
    href: "https://github.com/rezbites/Amazon-ML_hackathon",
  },
];
