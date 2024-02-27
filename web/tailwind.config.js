/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.tsx", "./index.html"],
  theme: {
    extend: {
      backgroundImage: {
        "background-galaxy": "url(./background-galaxy.png)",
        "nlw-gradient":
          "linear-gradient(89.86deg, #9572FC 11.08%, #43E7AD 46.94%, #E1D55D 80.57%)",
        "game-gradient":
          "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.9) 67.08%)",
      },
    },
  },
  plugins: [],
};
