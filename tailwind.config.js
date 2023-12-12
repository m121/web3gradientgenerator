module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
        colors: {
          'primary-100': '#4E2E99',
          'secondary-100': '#4DA3F0',
          'gradient-100': '#EDFFFB',
          'background-100': '#EEF6FE'
        },
        backgroundImage: {
          'hero-pattern': "url('/img/hero_bg.png')",
         
        },
        fontFamily:{
          'manrope' : 'Manrope,sans-serif'
        },
        
      
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
