import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        lapis: "#05668D",
        teal: "#028090",
        persianGreen: "#00A896",
        mint: "#02C39A",
        cream: "#F0F3BD",
      },
    },
  },
  plugins: [],
} satisfies Config;
