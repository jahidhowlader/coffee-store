/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors:{
      "add-coffee" : "#F4F3F0",
      "btn-clr": "#D2B48C",
      "black": "#3C393B",
      "White": "#ffffff",
      "coffee": "#331A15",
      "icon-bg": "#ECEAE3",
      "red": "#EA4744",
      "card-bg": "#F5F4F1"
    },
    extend: {
      
    },
  },
  plugins: [require("daisyui")]
}

