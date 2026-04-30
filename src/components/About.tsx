import { motion } from "framer-motion";

const sidebar = [
  { label: "Based in", value: "Bengaluru, India" },
  { label: "Role", value: "AI Product Developer Intern @ Rooman Technologies" },
  { label: "Education", value: "B.Tech CSE — AI/ML, JSSATE Bangalore (Jun 2026)" },
  { label: "Focus", value: "Production AI/ML systems & cloud infrastructure on AWS" },
  { label: "Achievement", value: "Top 0.1% — Amazon ML Challenge 2024" },
  { label: "Email", value: "shashank.30choudhary@gmail.com" },
];

export default function About() {
  return (
    <section
      id="about"
      className="relative scroll-mt-20 bg-cream py-24 text-ink md:py-32"
    >
      <div className="container-page">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="font-mono text-xs uppercase tracking-[0.3em] text-ink/60"
        >
          <span className="mr-3 inline-block h-px w-8 translate-y-[-3px] bg-ink/40 align-middle" />
          01 — About
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
          className="mt-6 max-w-5xl font-serif font-normal leading-[1.05] tracking-tight text-ink"
          style={{ fontSize: "clamp(2rem, 5.5vw, 4.6rem)" }}
        >
          End-to-end AI:{" "}
          <em className="font-serif italic font-normal text-ink/85">
            data → model → API → cloud → production.
          </em>
        </motion.h2>

        <div className="mt-14 grid gap-12 md:grid-cols-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-5 text-base text-ink/85 md:col-span-7 md:text-lg"
          >
            <p>
              I'm a software engineer who builds AI systems that don't stop at the
              notebook. From multimodal pricing ensembles to retrieval-augmented
              wealth assistants, I take problems through{" "}
              <span className="font-medium text-ink">research, modeling,</span>{" "}
              <span className="font-medium text-ink">backend engineering,</span> and{" "}
              <span className="font-medium text-ink">live deployment.</span>
            </p>

            <p>
              Currently an{" "}
              <strong className="font-semibold">
                AI Product Developer Intern at Rooman Technologies
              </strong>
              , where I architected a production AWS platform from a single
              CloudFormation template, engineered a sidecar container architecture
              on ECS Fargate that cut ML microservice latency by{" "}
              <strong className="font-semibold">~60–70%</strong>, and shipped
              self-healing CI/CD pipelines that handle every push to{" "}
              <span className="font-mono text-sm">main</span> without human
              intervention.
            </p>

            <p>
              On the ML side, I've shipped multimodal stacking ensembles, RAG systems
              with FAISS / LangChain / Gemini, and ranked in the{" "}
              <strong className="font-semibold">top 0.1%</strong> of the Amazon ML
              Challenge 2024. I care about systems that are accurate, fast, and
              actually shippable — preferably all three.
            </p>
          </motion.div>

          <motion.aside
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:col-span-5"
          >
            <div className="rounded-2xl border border-ink/10 bg-cream-2/60 p-6 md:p-8">
              <ul className="divide-y divide-ink/10">
                {sidebar.map((row) => (
                  <li
                    key={row.label}
                    className="grid grid-cols-3 gap-4 py-3.5 first:pt-0 last:pb-0"
                  >
                    <span className="col-span-1 font-mono text-[11px] uppercase tracking-[0.18em] text-ink/55">
                      {row.label}
                    </span>
                    <span className="col-span-2 text-sm text-ink">{row.value}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.aside>
        </div>
      </div>
    </section>
  );
}
