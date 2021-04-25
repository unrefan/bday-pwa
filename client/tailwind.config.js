module.exports = {
  purge: [
    './src/**/*.html',
    './src/**/*.vue',
    './src/**/*.jsx',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      gridTemplateColumns: {
       'layout': '50px repeat(11, minmax(0, 1fr))',
      },
      gridTemplateRows: {
        'layout': '40px minmax(calc(100vh - 40px), 1fr)'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
