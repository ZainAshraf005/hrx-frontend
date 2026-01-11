import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/modules/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        bgColor: "#f5f5f5",
        whiteColor: "#ffffff",
        mainColor: "#1890ff",
        greyColor: "#8c8c8c",
        halfWhite: "#fafafa",
      },
    },
  },
  plugins: [],
};

export default config;
