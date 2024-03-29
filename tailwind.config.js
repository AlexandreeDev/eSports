/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.tsx", "./index.html"],
  plugins: [],
  theme: {
    extend: {
      backgroundImage: {
        galaxy: "url(/background-galaxy.png)",
        "game-gradient":
          "linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.9) 67.08%)",
        "nlw-gradient":
          "linear-gradient(89.86deg, #9572FC 23.08%, #43E7AD 33.94%, #E1D55D 44.57%)",
      },
    },
    fontFamily: {
      sans: ["Inter", "sans-serif"],
    },
  },
};
