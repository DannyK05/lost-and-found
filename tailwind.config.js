/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "lost-blue": "#191970",
        "lost-accent-dark": "#9F7332",
        "lost-accent-light": "#FECC50",
        "lost-white": "#F1F5F8",
      },
    },
  },
  plugins: [],
};
