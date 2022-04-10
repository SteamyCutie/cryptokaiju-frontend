module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'body': ['"Varela Round"', 'sans-serif'],
      },
      colors: {
        'light-blue': '#1282a2',
        'dark-blue': '#1f2760',
        'light-oliver': '#efe9e5',
        'light-sky': '#f0f8f5',
        'dark-white': '#dddddd',
        'black': '#222222',
        'blacker': '#000000'
      }
    },
  },
  plugins: [],
}