import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js, ts, jsx, tsx, mdx}",
    "./components/**/*.{js, ts, jsx, tsx, mdx}",
    "./app/**/*.{js, ts, jsx, tsx, mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#121212",
        surface: "#181818",
        surfaceHover: "#282828",
        brand: "#1ED760",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
