type Props = { children: React.ReactNode; muted?: boolean };

export default function TechTag({ children, muted }: Props) {
  return (
    <span className={`tech-tag ${muted ? "opacity-70" : ""}`}>
      {children}
    </span>
  );
}
