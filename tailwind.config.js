/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'linear1': "rgba(82,196,235,1)",
        'linear2': "rgba(67,127,181,1)"
      }
    },
  },
  plugins: [],
}

