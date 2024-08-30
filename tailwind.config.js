/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    
    extend: {
      fontFamily :  {
        helv : ['Helvetica, Arial, sans-serif'],
        scripty : ['scripty', 'serif'],
        anetha : ['anetha', 'serif'],
      },
      colors : {
      'lightO': '#CD632E',
      'darkO' : '#8C391E',
      'beigey' : '#EEE6DC'
    },
    },
  },
  plugins: [],
}
