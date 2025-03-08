/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{vue,js,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./app.vue",
  ],
  theme: {
    extend: {
      colors: {
        primary: "var(--primary)",
        primaryText: "var(--primaryText)",
      },
      backgroundColor: {
        sidebar: "var(--sidebar)",
        input: "var(--input)",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
      },
      spacing: {
        sidebar: "13rem",
      },
    },
  },
  plugins: [],
};
