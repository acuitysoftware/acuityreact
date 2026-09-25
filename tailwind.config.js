/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary:    "#062B6E",  // Deep Navy Blue â€” headings, navbar, footer
        secondary:  "#01A9FB",  // Bright Cyan Blue â€” links, secondary buttons
        accent:     "#FD6301",  // Orange â€” CTA, highlights, icons
        gold:       "#FCAE01",  // Golden Yellow â€” badges, decorative
        surface:    "#F4F8FC",  // Soft Blue â€” alternate sections/cards
        body:       "#0B1730",  // Dark Navy â€” body text
        // legacy aliases (kept so nothing breaks)
        navy:       "#062B6E",
        brand:      "#FD6301",
      },
      fontFamily: {
        heading: ["Manrope", "sans-serif"],
        body:    ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
