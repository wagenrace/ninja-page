/** @type {import('tailwindcss').Config} */
export default {
  
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    backgroundImage: {
      "banner-image":
        "url('./assets/banner-image.webp')",
    },
    extend: {
      colors: {
        "company-color": {
          100: "#3395d6",
          200: "#3084bc",
          300: "#2d73a2",
          400: "#2a628a",
          500: "#265272",
          600: "#22425b",
          700: "#1d3345",
          800: "#182530",
          900: "#0f1418",
        },
      },
      screens: {
        bg: "920px",
      },
    },
  },
  plugins: [],
}

