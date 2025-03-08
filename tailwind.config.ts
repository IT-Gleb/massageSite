import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter"],
        roboto: ["Roboto"],
        materialSymbolsOulined: ["Material Symbols Outlined"],
        oswald: ["Oswald"],
        verdana: ["Verdana", "Tahoma", "serif"],
        pacifico: ["Pacifico"],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        mint: {
          "100": "#FFFE99",
          "200": "#FFD599",
          "300": "#FFDB99",
          "400": "#B3A36B",
          "500": "#B3956B",
          "600": "#EA9A62",
          "700": "#A47345",
          "800": "#A45445",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
