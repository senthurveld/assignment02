/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#0EA5A4",
          dark: "#0B7C7B",
        },
        accent: "#2563EB",
        cta: "#EF4444",
        "cta-hover": "#DC2626",
        heading: "#0F172A",
        body: "#334155",
        muted: "#64748B",
        bgmain: "#F8FAFC",
        section: "#F1F5F9",
      },
      backdropBlur: {
        glass: "10px",
      },
    },
  },
  plugins: [
    require("tailwindcss/plugin")(function ({ addUtilities }) {
      addUtilities({
        ".glass": {
          background: "rgba(255, 255, 255, 0.15)",
          "backdrop-filter": "blur(10px)",
          "-webkit-backdrop-filter": "blur(10px)",
          border: "1px solid rgba(255, 255, 255, 0.2)",
        },
      });
    }),
  ],
};
