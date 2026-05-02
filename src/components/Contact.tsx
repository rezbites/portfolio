import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { profile } from "../data/profile";

const schema = z.object({
  name: z.string().min(2, "Please enter your name").max(80),
  email: z.string().email("That doesn't look like a valid email"),
  message: z.string().min(10, "A bit more detail, please").max(2000),
  website: z.string().max(0).optional().or(z.literal("")),
});

type FormValues = z.infer<typeof schema>;

type Status =
  | { kind: "idle" }
  | { kind: "submitting" }
  | { kind: "success" }
  | { kind: "error"; message: string };

export default function Contact() {
  const [status, setStatus] = useState<Status>({ kind: "idle" });
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
      website: "",
    },
  });

  const onSubmit = async (data: FormValues) => {
    setStatus({ kind: "submitting" });
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.error || "Couldn't send message");
      }
      setStatus({ kind: "success" });
      reset();
    } catch (err) {
      setStatus({
        kind: "error",
        message: err instanceof Error ? err.message : "Something went wrong",
      });
    }
  };

  return (
    <section
      id="contact"
      className="relative scroll-mt-20 bg-bg-deep py-16 md:py-24"
    >
      <div className="container-page">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="font-mono text-xs uppercase tracking-[0.3em] text-text-dim"
        >
          <span className="mr-3 inline-block h-px w-8 translate-y-[-3px] bg-text-dim/40 align-middle" />
          05 — Contact
        </motion.p>

        <div className="mt-8 grid gap-10 md:grid-cols-12 md:gap-10">
          {/* Left column — headline + socials */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="md:col-span-5"
          >
            <h2
              className="font-display font-bold leading-[1.05] tracking-tight text-text"
              style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)" }}
            >
              Let's build something{" "}
              <span className="font-serif italic font-normal text-text-dim">
                great.
              </span>
            </h2>

            <p className="mt-4 max-w-md text-sm leading-relaxed text-text-dim md:text-base">
              Have an idea, a role, or just want to chat about systems and AI?
              I'd love to hear from you. I usually reply within a day.
            </p>

            {/* Social buttons */}
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={profile.links.linkedin}
                target="_blank"
                rel="noreferrer noopener"
                className="group inline-flex items-center gap-2.5 rounded-full border border-border bg-surface/50 px-5 py-2.5 text-sm font-medium text-text transition-all duration-200 hover:border-text/40 hover:bg-surface"
              >
                <svg
                  className="h-4 w-4 text-text-dim transition-colors group-hover:text-text"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                LinkedIn
              </a>
              <a
                href={profile.links.github}
                target="_blank"
                rel="noreferrer noopener"
                className="group inline-flex items-center gap-2.5 rounded-full border border-border bg-surface/50 px-5 py-2.5 text-sm font-medium text-text transition-all duration-200 hover:border-text/40 hover:bg-surface"
              >
                <svg
                  className="h-4 w-4 text-text-dim transition-colors group-hover:text-text"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                </svg>
                GitHub
              </a>
              <a
                href={`mailto:${profile.email}`}
                className="group inline-flex items-center gap-2.5 rounded-full border border-border bg-surface/50 px-5 py-2.5 text-sm font-medium text-text transition-all duration-200 hover:border-text/40 hover:bg-surface"
              >
                <svg
                  className="h-4 w-4 text-text-dim transition-colors group-hover:text-text"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
                Email
              </a>
            </div>

            <p className="mt-6 font-mono text-xs text-text-mute">
              {profile.email} · {profile.phone}
            </p>
          </motion.div>

          {/* Right column — form */}
          <motion.form
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            onSubmit={handleSubmit(onSubmit)}
            noValidate
            className="md:col-span-7"
          >
            <div className="space-y-5 rounded-2xl border border-border bg-surface/30 p-6 md:p-8">
              {/* Name */}
              <div>
                <label className="block text-sm text-text-dim">
                  Your name
                </label>
                <input
                  type="text"
                  autoComplete="name"
                  placeholder="Jane Doe"
                  {...register("name")}
                  className="form-input mt-2"
                />
                {errors.name?.message && (
                  <span className="mt-1.5 block text-xs text-red-300">
                    {errors.name.message}
                  </span>
                )}
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm text-text-dim">
                  Your email
                </label>
                <input
                  type="email"
                  autoComplete="email"
                  placeholder="you@company.com"
                  {...register("email")}
                  className="form-input mt-2"
                />
                {errors.email?.message && (
                  <span className="mt-1.5 block text-xs text-red-300">
                    {errors.email.message}
                  </span>
                )}
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm text-text-dim">
                  Your message
                </label>
                <textarea
                  rows={4}
                  placeholder="Tell me about your project, idea, or opportunity..."
                  {...register("message")}
                  className="form-input mt-2 resize-y"
                />
                {errors.message?.message && (
                  <span className="mt-1.5 block text-xs text-red-300">
                    {errors.message.message}
                  </span>
                )}
              </div>

              {/* Honeypot */}
              <div
                aria-hidden
                className="absolute left-[-9999px] h-0 w-0 overflow-hidden"
              >
                <label>
                  Don't fill this out
                  <input
                    type="text"
                    tabIndex={-1}
                    autoComplete="off"
                    {...register("website")}
                  />
                </label>
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={status.kind === "submitting"}
                className="group w-full rounded-xl border border-text bg-text px-6 py-3.5 font-display text-sm font-semibold text-bg-deep transition-all duration-200 hover:bg-accent-warm hover:border-accent-warm disabled:cursor-not-allowed disabled:opacity-60"
              >
                {status.kind === "submitting" ? (
                  "Sending…"
                ) : (
                  <span className="flex items-center justify-center gap-2">
                    Send message
                    <span
                      aria-hidden
                      className="inline-block transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    >
                      ↗
                    </span>
                  </span>
                )}
              </button>

              {status.kind === "success" && (
                <p className="rounded-lg border border-text/20 bg-text/5 p-3 text-sm text-text">
                  Thanks — your message is on its way. I'll get back to you
                  soon.
                </p>
              )}
              {status.kind === "error" && (
                <p className="rounded-lg border border-red-500/30 bg-red-500/10 p-3 text-sm text-red-300">
                  {status.message}. Email me directly at{" "}
                  <a href={`mailto:${profile.email}`} className="underline">
                    {profile.email}
                  </a>
                  .
                </p>
              )}
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
