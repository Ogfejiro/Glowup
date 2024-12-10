/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        ubuntu: ["ubuntu", "sans-serif"],
        medium: ["medium", "sans-serif"],
      },

      backgroundImage: {
        'hero-pattern': "url('/images/back.png')",
      },
      opacity: {
        '80': '.8',
      },
    },
  },
  plugins: [],
};
