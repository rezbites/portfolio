import { profile } from "../data/profile";

export default function Footer() {
  return (
    <footer className="border-t border-border py-8">
      <div className="container-page flex flex-col items-start justify-between gap-3 text-xs text-text-mute md:flex-row md:items-center">
        <p>
          © {new Date().getFullYear()} {profile.name}. Built with React, Three.js, and Tailwind.
        </p>
        <p className="font-mono">
          <span className="text-accent">~</span>/portfolio · {profile.location.toLowerCase()}
        </p>
      </div>
    </footer>
  );
}
