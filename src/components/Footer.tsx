import { profile } from "../data/profile";

export default function Footer() {
  return (
    <footer className="border-t border-border py-6">
      <div className="container-page flex flex-col items-start justify-between gap-3 text-xs text-text-mute md:flex-row md:items-center">
        <p>
          Designed & engineered by{" "}
          <span className="text-text-dim">{profile.name}</span>
        </p>
        <p className="font-mono">
          {profile.location.toLowerCase()}{" "}
          <span className="mx-2 text-border">·</span>{" "}
          {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
}
