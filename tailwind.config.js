module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      width: {
        'custom': '20rem', 
      },
      fontFamily: {
        'Poppins':['Poppins'],
        'Rubik':['Rubik','sans-serif']
      },
      rotate: {
        '24': '24deg',
      },
      spacing: {
        '1': '0.25rem',
        '2': '0.5rem',
      },
    },
  },
  plugins: [
    function({ addUtilities }) {
      const newUtilities = {
        '.word-spacing-1': {
          'word-spacing': '0.25rem',
        },
        '.word-spacing-2': {
          'word-spacing': '0.5rem',
        },
      }
      addUtilities(newUtilities)
    }
  ],
}