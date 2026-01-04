import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Authentic TVA colour palette - 1970s retrofuturistic
        tva: {
          // Backgrounds - dark brown/sepia tones
          black: "#0C0A09",
          darker: "#1C1917",
          dark: "#292524",
          brown: "#44403C",

          // The iconic TVA orange - Miss Minutes, monitors, logo
          orange: {
            50: "#FFF7ED",
            100: "#FFEDD5",
            200: "#FED7AA",
            300: "#FDBA74",
            400: "#FB923C",
            500: "#F97316", // Primary TVA orange
            600: "#EA580C",
            700: "#C2410C",
            800: "#9A3412",
            900: "#7C2D12",
          },

          // Amber/gold accents
          amber: {
            300: "#FCD34D",
            400: "#FBBF24",
            500: "#F59E0B",
            600: "#D97706",
          },

          // Cream/paper tones for text and accents
          cream: {
            50: "#FEFCE8",
            100: "#FEF9C3",
            200: "#FEF08A",
            300: "#FDE047",
            400: "#FACC15",
          },

          // Olive/muted green - Loki's colour, TVA accents
          olive: {
            400: "#A3E635",
            500: "#84CC16",
            600: "#65A30D",
            700: "#4D7C0F",
            800: "#3F6212",
          },
        },
      },
      fontFamily: {
        display: ["var(--font-bebas)", "Impact", "sans-serif"],
        mono: ["var(--font-ibm-mono)", "Courier New", "monospace"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      animation: {
        "glitch": "glitch 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94) infinite",
        "glow-pulse": "glow-pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "branch-grow": "branch-grow 1.5s ease-out forwards",
        "scan-line": "scan-line 6s linear infinite",
        "flicker": "flicker 0.1s infinite",
        "typing": "typing 2s steps(20) forwards",
        "blink": "blink 1s step-end infinite",
        "float": "float 6s ease-in-out infinite",
      },
      keyframes: {
        glitch: {
          "0%, 100%": { transform: "translate(0)" },
          "20%": { transform: "translate(-3px, 3px)" },
          "40%": { transform: "translate(-3px, -3px)" },
          "60%": { transform: "translate(3px, 3px)" },
          "80%": { transform: "translate(3px, -3px)" },
        },
        "glow-pulse": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.6" },
        },
        "branch-grow": {
          "0%": { strokeDashoffset: "1000", opacity: "0" },
          "100%": { strokeDashoffset: "0", opacity: "1" },
        },
        "scan-line": {
          "0%": { top: "-10%" },
          "100%": { top: "110%" },
        },
        flicker: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.94" },
        },
        typing: {
          "from": { width: "0" },
          "to": { width: "100%" },
        },
        blink: {
          "50%": { borderColor: "transparent" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "noise": "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")",
      },
      boxShadow: {
        "glow-orange": "0 0 20px rgba(249, 115, 22, 0.5), 0 0 40px rgba(249, 115, 22, 0.3)",
        "glow-amber": "0 0 15px rgba(245, 158, 11, 0.4)",
        "inner-dark": "inset 0 2px 10px rgba(0, 0, 0, 0.5)",
      },
    },
  },
  plugins: [],
};

export default config;
