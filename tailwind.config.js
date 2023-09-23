/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  important:"#root",
  theme: {
    screens: {
      'nm':'140px',
        // => @media (min-width: 140px) { ... }
      'sm': '540px',
      // => @media (min-width: 540px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    }
  },

    extend: {},
  }
  plugins: [    function({addUtilities}){
const newUtilities = {
".no-scrollbar::-webkit-scrollbar":{
  display:"none",
},
".no-scrollbar":{
  "-ms-overflow-style":"none",
  "scrollbar-width":"none",
},
};
addUtilities(newUtilities)

    }
  ]


