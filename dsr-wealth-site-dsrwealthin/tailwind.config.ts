
import type { Config } from "tailwindcss";
const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      borderRadius: {
        '2xl': '1.25rem',
      },
      boxShadow: {
        soft: "0 10px 30px rgba(0,0,0,0.08)",
      },
      colors: {
        brand: {
          bg: "#0b0f1a",
          ink: "#0b1220",
          accent: "#e2b714",
          muted: "#5b657a"
        }
      }
    },
  },
  plugins: [],
};
export default config;
