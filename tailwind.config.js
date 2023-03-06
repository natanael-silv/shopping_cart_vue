/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        Kumbh: ["font-family: 'Epilogue', sans-serif"]
      },
      colors: {
        halloween: 'hsl(26, 100%, 55%)',
        sorrow: 'hsl(223, 64%, 98%)'
      }
    }
  },
  plugins: []
}
