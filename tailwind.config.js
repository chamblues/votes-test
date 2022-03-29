module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "15px",
      screens: {
        'sm': '640px', // => @media (min-width: 640px) { ... }
        'md': '768px', // => @media (min-width: 768px) { ... }
        'lg': '1024px', // => @media (min-width: 1024px) { ... }
        'xl': '1130px', // => @media (min-width: 1280px) { ... }
      }
    },
    extend: {},
  },
  plugins: [],
}