/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1A6B5A',
          dark: '#134D40',
          light: '#2A8B72',
        },
        accent: {
          DEFAULT: '#D4943A',
          dark: '#B87A2A',
          light: '#E8AE5C',
        },
        surface: '#F3EDE4',
        warm: {
          50: '#FAFAF8',
          100: '#F5F0EA',
          200: '#E8DFD2',
          800: '#2C2C2C',
          900: '#1C1C1C',
        },
      },
      fontFamily: {
        serif: ['Georgia', 'Cambria', '"Times New Roman"', 'Times', 'serif'],
        sans: ['"Inter"', 'system-ui', '-apple-system', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
