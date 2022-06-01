module.exports = {
  content: ['./src/**/*.{html,js,ts,tsx}'],
  theme: {
    colors: {
      'steel': '#242629',
      'steel2': '#16161a',
      'mint': '#fffffe',
      'purpGrey': '#242431',
      'cream': '#EAE7DC',
      'beige': '#D8C3A5',
      'gret': '#8E8D8A'

    },
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
