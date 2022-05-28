module.exports = {
  content: ['./src/**/*.{html,js,ts,tsx}'],
  theme: {
    extend: {
      order: {
        '4': '4'
      },
      gridTemplateRows: {
        // Complex site-specific row configuration
        main: '100px repeat(2, minmax(0, 1fr)) 50px'
      }
    }
  },
  plugins: []
};
