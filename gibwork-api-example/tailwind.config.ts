import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        purple: "#8151fd",
        black: "#18181b",
        grey: "#71717a",
        grey100: "#f4f4f5",
        green: {
          500: "#059669",
          100: "#ecfdf5",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
