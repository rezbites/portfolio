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
      className="relative scroll-mt-20 bg-cream py-12 text-ink md:py-18"
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
          className="mt-5 max-w-5xl font-display font-bold leading-[1.05] tracking-tight text-ink"
          style={{ fontSize: "clamp(1.8rem, 4.5vw, 3.6rem)" }}
        >
          I don't just build models —{" "}
          <span className="font-serif italic font-normal text-ink/80">
            I ship them.
          </span>
        </motion.h2>

        <div className="mt-10 grid gap-10 md:grid-cols-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-4 text-[15px] leading-relaxed text-ink/85 md:col-span-7 md:text-base"
          >
            <p>
              I'm driven by a simple question:{" "}
              <strong className="font-semibold text-ink">
                what happens after the model works in a notebook?
              </strong>{" "}
              Most ML projects stall at the demo stage. I take them all the way
              to production — packaging models into APIs, wiring cloud
              infrastructure, and building the CI/CD that keeps everything alive.
            </p>

            <p>
              Right now I'm at{" "}
              <strong className="font-semibold text-ink">
                Rooman Technologies
              </strong>
              , where I architected a production AWS platform from a single
              CloudFormation template, engineered a sidecar architecture on ECS
              Fargate that cut ML microservice latency by{" "}
              <strong className="font-semibold">~60–70%</strong>, and shipped
              self-healing CI/CD pipelines that handle every push to{" "}
              <code className="rounded bg-ink/8 px-1.5 py-0.5 font-mono text-sm">
                main
              </code>{" "}
              without human intervention.
            </p>

            <p>
              On the ML side, I've built multimodal stacking ensembles, RAG
              systems powered by FAISS, LangChain, and Gemini, and ranked in the{" "}
              <strong className="font-semibold">top 0.1%</strong> of the Amazon
              ML Challenge 2024. Whether it's a pricing model or a wealth
              assistant, I care about systems that are accurate, fast, and
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
            <div className="rounded-2xl border border-ink/10 bg-cream-2/60 p-5 transition-shadow duration-300 hover:shadow-lg md:p-7">
              <ul className="divide-y divide-ink/10">
                {sidebar.map((row) => (
                  <li
                    key={row.label}
                    className="grid grid-cols-3 gap-4 py-3 first:pt-0 last:pb-0"
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
