/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      textShadow: {
        lg: "0.5px 0.5px 1px rgba(55, 244, 197, 1)",
        white: "0.5px 0.5px 1px rgb(255, 255, 255)",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        ".text-shadow": {
          textShadow: "0.5px 0.5px 1px rgba(55, 244, 197, 1)",
        },
        ".text-shadow-white": {
          textShadow: "0.5px 0.5px 1px rgb(255, 255, 255)",
        },
      };
      addUtilities(newUtilities);
    },
  ],
};
