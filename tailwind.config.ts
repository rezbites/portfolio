import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#26282F",
        "bg-deep": "#1B1D22",
        surface: "#2E3038",
        "surface-2": "#34363F",
        border: "#3A3D46",
        "border-soft": "#33353D",
        text: "#E8E6E0",
        "text-dim": "#A8A59B",
        "text-mute": "#6E6C66",
        accent: "#E8E6E0",
        "accent-warm": "#D8D2C4",
        cream: "#F2EEE3",
        "cream-2": "#E8E2D2",
        ink: "#1B1D22",
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["'Playfair Display'", "Georgia", "serif"],
        serif: ["Fraunces", "Newsreader", "Georgia", "serif"],
        mono: ["'JetBrains Mono'", "ui-monospace", "monospace"],
      },
      boxShadow: {
        soft: "0 20px 60px -20px rgba(0, 0, 0, 0.5)",
        "card-hover": "0 0 0 1px rgba(232, 230, 224, 0.18) inset, 0 24px 60px -24px rgba(0, 0, 0, 0.6)",
      },
      backgroundImage: {
        "grain": "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='200' height='200'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.55 0'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>\")",
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out forwards",
        "slide-up": "slideUp 0.7s ease-out forwards",
        marquee: "marquee 30s linear infinite",
        pulse: "pulse 2.5s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: { "0%": { opacity: "0" }, "100%": { opacity: "1" } },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        pulse: {
          "0%, 100%": { opacity: "0.4" },
          "50%": { opacity: "1" },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
