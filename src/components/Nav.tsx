import { useEffect, useState } from "react";
import MenuOverlay from "./MenuOverlay";
import { profile } from "../data/profile";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "py-3 bg-bg/80 backdrop-blur-md border-b border-border/50"
            : "py-5"
        }`}
      >
        <div className="container-page">
          <div className="flex items-center justify-between">
            <a
              href="#top"
              aria-label="Home"
              className="group flex items-center gap-3"
            >
              <span className="grid h-10 w-10 place-items-center rounded-full border border-border bg-bg-deep/60 font-display text-sm font-semibold text-text backdrop-blur-md transition-colors group-hover:border-text/40">
                {profile.initials}
              </span>
              <span className="hidden font-mono text-xs uppercase tracking-[0.25em] text-text-dim sm:inline">
                {profile.name.toLowerCase()}
              </span>
            </a>

            <button
              onClick={() => setMenuOpen(true)}
              aria-label="Open menu"
              className="flex items-center gap-3 rounded-full border border-border bg-bg-deep/60 px-4 py-2 backdrop-blur-md transition-colors hover:border-text/40"
            >
              <span className="font-mono text-xs uppercase tracking-[0.25em] text-text">
                menu
              </span>
              <span className="flex flex-col gap-[5px]">
                <span className="block h-px w-5 bg-text" />
                <span className="block h-px w-5 bg-text" />
              </span>
            </button>
          </div>
        </div>
      </header>

      <MenuOverlay open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
