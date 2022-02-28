module.exports = {
  content: [
    '**/*.html',
    '**/*.js',
    '**/*.svg',
    '**/*.css',
  ],
  theme: {
    extend: {
      transitionDelay: {
        '0': '0ms',
        '2000': '2000ms',
      }
    },
    fontFamily: {
      fira: ['Fira Code', 'monospace'],
    },
  },
  plugins: [],
  darkMode: 'class',
}
