/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-orange": "#F05600",
        "light-orange": "#FEA700",
        "test-black": "#02060C",
        "primary-grey": "#F0F0F5",
      },
    },
  },
  plugins: [],
};

