module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'serif': ['Cinzel'],
      'cursive':['Tangerine'],
      'cursive2':['Parisienne'],
      'cursive3':['Kaushan Script'],
      'cursive4':['Cormorant Upright']


    }
  },
  plugins: [],
  images: {
    domains: ['tuk-cdn.s3.amazonaws.com'], //Domain of image host
  },
}