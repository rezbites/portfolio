import { AnimatePresence, motion } from "framer-motion";
import { useEffect } from "react";
import { profile } from "../data/profile";

const items = [
  { num: "01", label: "Home", id: "top" },
  { num: "02", label: "About", id: "about" },
  { num: "03", label: "Work", id: "experience" },
  { num: "04", label: "Projects", id: "projects" },
  { num: "05", label: "Contact", id: "contact" },
];

export default function MenuOverlay({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          key="overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-[60] bg-bg-deep"
        >
          <div className="container-page flex h-full flex-col justify-between py-8 md:py-12">
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs uppercase tracking-[0.3em] text-text-mute">
                {profile.initials.toLowerCase()} / {profile.name.toLowerCase()}
              </span>
              <button
                onClick={onClose}
                aria-label="Close menu"
                className="grid h-10 w-10 place-items-center rounded-full transition-colors hover:bg-surface"
              >
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 22 22"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                >
                  <path d="M4 4 L18 18 M18 4 L4 18" />
                </svg>
              </button>
            </div>

            <nav className="flex-1 flex items-center">
              <ul className="w-full space-y-3 md:space-y-5">
                {items.map((item, i) => (
                  <motion.li
                    key={item.id}
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.45, delay: 0.08 + i * 0.06 }}
                  >
                    <a
                      href={`#${item.id}`}
                      onClick={onClose}
                      className="invert-hover inline-flex items-baseline gap-6 font-display font-semibold uppercase leading-none tracking-tight text-text"
                      style={{ fontSize: "clamp(2.5rem, 9vw, 6.5rem)" }}
                    >
                      <span className="font-mono" style={{ fontSize: "0.75rem", letterSpacing: "0.05em" }}>
                        {item.num}
                      </span>
                      {item.label}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </nav>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.5 }}
              className="flex flex-wrap items-center justify-between gap-4 font-mono text-xs uppercase tracking-[0.25em] text-text-dim"
            >
              <div className="flex flex-wrap gap-x-6 gap-y-2">
                <a
                  href={profile.links.github}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="arrow-link !text-xs"
                  style={{ letterSpacing: "0.25em" }}
                >
                  github
                </a>
                <a
                  href={profile.links.linkedin}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="arrow-link !text-xs"
                  style={{ letterSpacing: "0.25em" }}
                >
                  linkedin
                </a>
                <a
                  href={`mailto:${profile.email}`}
                  className="arrow-link !text-xs"
                  style={{ letterSpacing: "0.25em" }}
                >
                  email
                </a>
              </div>
              <span>Bengaluru, IN</span>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
