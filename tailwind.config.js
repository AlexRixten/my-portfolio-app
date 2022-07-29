module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        '-2xl': { max: '1535px' },
        // => @media (max-width: 1535px) { ... }

        '-xl': { max: '1279px' },
        // => @media (max-width: 1279px) { ... }

        '-lg': { max: '991px' },
        // => @media (max-width: 1023px) { ... }

        '-md': { max: '767px' },
        // => @media (max-width: 767px) { ... }

        '-sm': { max: '639px' },
        // => @media (max-width: 639px) { ... }
      },
      colors:{
        orangeColor: '#FFB400',
        grayColor: '#767676',
        mainGray: '#242526',
      },
      shadow:{
        boxShadow: 'rgb(28 28 28 / 10%) 4px 0px 10px',
      }
    },
  },
  plugins: [],
}
