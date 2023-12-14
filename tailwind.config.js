import defaultTheme from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Space Mono"', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        offwhite: '#f3f3f3',
        red: '#dd3a39',
        charcoal: '#4E4E4E',
      },
    },
  },
  plugins: [],
};
