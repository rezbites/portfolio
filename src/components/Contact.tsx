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
  // honeypot — bots fill this; humans don't see it
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
    defaultValues: { name: "", email: "", message: "", website: "" },
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
    <section id="contact" className="relative scroll-mt-20 py-24 md:py-32">
      <div className="container-page">
        <div className="grid gap-12 md:grid-cols-5">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="md:col-span-2"
          >
            <p className="section-label">Contact</p>
            <h2 className="section-title">Let's build something.</h2>
            <p className="mt-4 text-text-dim">
              Whether it's a full-time role, an internship, or a project that needs an extra
              pair of hands — drop a note. I usually reply within a day.
            </p>

            <ul className="mt-8 space-y-3 text-sm">
              <li>
                <span className="font-mono text-xs uppercase tracking-[0.2em] text-text-mute">
                  Email
                </span>
                <br />
                <a href={`mailto:${profile.email}`} className="text-accent hover:underline">
                  {profile.email}
                </a>
              </li>
              <li>
                <span className="font-mono text-xs uppercase tracking-[0.2em] text-text-mute">
                  LinkedIn
                </span>
                <br />
                <a
                  href={profile.links.linkedin}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="text-accent hover:underline"
                >
                  linkedin.com/in/itsshashank
                </a>
              </li>
              <li>
                <span className="font-mono text-xs uppercase tracking-[0.2em] text-text-mute">
                  GitHub
                </span>
                <br />
                <a
                  href={profile.links.github}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="text-accent hover:underline"
                >
                  github.com/rezbites
                </a>
              </li>
              <li>
                <span className="font-mono text-xs uppercase tracking-[0.2em] text-text-mute">
                  Phone
                </span>
                <br />
                <a href={`tel:${profile.phone.replace(/\s/g, "")}`} className="text-text">
                  {profile.phone}
                </a>
              </li>
            </ul>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            onSubmit={handleSubmit(onSubmit)}
            noValidate
            className="card md:col-span-3"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <Field
                label="Name"
                error={errors.name?.message}
                input={
                  <input
                    type="text"
                    autoComplete="name"
                    placeholder="Your name"
                    {...register("name")}
                    className="form-input"
                  />
                }
              />
              <Field
                label="Email"
                error={errors.email?.message}
                input={
                  <input
                    type="email"
                    autoComplete="email"
                    placeholder="you@company.com"
                    {...register("email")}
                    className="form-input"
                  />
                }
              />
            </div>
            <div className="mt-5">
              <Field
                label="Message"
                error={errors.message?.message}
                input={
                  <textarea
                    rows={6}
                    placeholder="What's on your mind?"
                    {...register("message")}
                    className="form-input resize-y"
                  />
                }
              />
            </div>

            {/* Honeypot — visually hidden, off the tab order */}
            <div aria-hidden className="absolute left-[-9999px] h-0 w-0 overflow-hidden">
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

            <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
              <p className="text-xs text-text-mute">
                Delivered straight to my inbox. No tracking, no list.
              </p>
              <button
                type="submit"
                disabled={status.kind === "submitting"}
                className="btn-primary disabled:cursor-not-allowed disabled:opacity-60"
              >
                {status.kind === "submitting" ? "Sending…" : "Send message"}
                {status.kind !== "submitting" && <span aria-hidden>→</span>}
              </button>
            </div>

            {status.kind === "success" && (
              <p className="mt-4 rounded-lg border border-text/30 bg-text/5 p-3 text-sm text-text">
                Thanks — your message is on its way. I'll get back to you soon.
              </p>
            )}
            {status.kind === "error" && (
              <p className="mt-4 rounded-lg border border-red-500/30 bg-red-500/10 p-3 text-sm text-red-300">
                {status.message}. You can also email me directly at{" "}
                <a href={`mailto:${profile.email}`} className="underline">
                  {profile.email}
                </a>
                .
              </p>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  error,
  input,
}: {
  label: string;
  error?: string;
  input: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-2 block font-mono text-xs uppercase tracking-[0.18em] text-text-mute">
        {label}
      </span>
      {input}
      {error && <span className="mt-1.5 block text-xs text-red-300">{error}</span>}
    </label>
  );
}
