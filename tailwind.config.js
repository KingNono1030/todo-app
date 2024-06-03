/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#ff3333',
          DEFAULT: '#ff6666',
          dark: '#1F618D',
        },
        secondary: {
          light: '#FADBD8',
          DEFAULT: '#E74C3C',
          dark: '#943126',
        },
        accent: {
          light: '#ccc',
          DEFAULT: '#F1C40F',
          dark: '#9A7D0A',
        },
      },
    },
  },
  plugins: [],
};
