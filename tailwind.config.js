const tokens = require('@contentful/f36-tokens');
const { fontFamily } = require('tailwindcss/defaultTheme');

const colors = Object.entries(tokens).reduce((acc, [key, value]) => {
  // Filter Hex colors from the f36-tokens
  if (/^#[0-9A-F]{6}$/i.test(value)) {
    acc[key] = value;
  }

  return acc;
}, {});

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ...colors,
        dark: {
          bg: '#121212',
          text: '#ffffff',
          primary: '#2563eb',
          secondary: '#4b5563',
        },
        light: {
          bg: '#ffffff',
          text: '#000000',
          primary: '#3b82f6',
          secondary: '#6b7280',
        },
        background: 'rgb(var(--background) / <alpha-value>)',
        foreground: 'rgb(var(--foreground) / <alpha-value>)',
      },
      maxWidth: {
        '8xl': '90rem',
      },
      letterSpacing: {
        snug: '-0.011em',
      },
      fontSize: {
        '2xs': '0.625rem',
        '3xl': '1.75rem',
        '4xl': '2.5rem',
      },
      lineHeight: {
        tighter: 1.1,
      },
      fontFamily: {
        sans: ['var(--font-urbanist)', ...fontFamily.sans],
      },
      backgroundColor: {
        dark: 'var(--dark-bg)',
        light: 'var(--light-bg)',
      }
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
