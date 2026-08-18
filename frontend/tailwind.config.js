/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#4A1B22",
        brass: "#D98A52",
        ivory: "#FBF5EA",
        sage: "#C9A28A",
        charcoal: "#2B1013",
      },
      fontFamily: {
        display: ["Fraunces", "serif"],
        body: ["Work Sans", "sans-serif"],
        heading: ["Montserrat", "sans-serif"],
      },
      keyframes: {
        slide: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        slide: "slide 30s linear infinite",
      },
    },
  },
  plugins: [],
};