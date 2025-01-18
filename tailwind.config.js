/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: ['selector', "class"],
  theme: {
  	extend: {
  		colors: {
  			primary: '#0c0c0c',
  			gold: '#dcca87',
  			crimson: '#f5efdb',
  			gry: '#aaa',
  			white: '#fff'
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
}