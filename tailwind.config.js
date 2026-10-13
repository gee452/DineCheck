/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{html,js}",
  ],

  theme: {
    extend: {
      colors: {
        primary: "#174A3A",
        "primary-light": "#6F9F82",
        accent: "#CF9121",
        cream: "#FAF8F2",
        charcoal: "#202522",
        white: "#FFFFFF",
      },

      fontFamily: {
        heading: ["Poppins", "sans-serif"],
        body: ["Inter", "sans-serif"],
      },

      spacing: {
        "18": "4.5rem",
        "22": "5.5rem",
        "26": "6.5rem",
      },

      borderRadius: {
        brand: "14px",
      },
    },
  },

  plugins: [],
};  /**Custom Tailwind configuration */