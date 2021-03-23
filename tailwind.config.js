module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      Montserrat: ['Montserrat', 'Roboto'],
      Jost: ['Jost', '"Open Sans"']
    },
    extend: {
      colors: {
        'blue-550': '#0066CC'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: ['gatsby-plugin-postcss'],
}
