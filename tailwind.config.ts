import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class', // Enable dark mode via a class like 'dark'
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',

        // * custom palette for dark mode
        primary: '#2C7A7B', // Primary green
        accent: '#68D391', // Brighter accent green for light mode
        backgroundLight: '#F7FAFC', // Light background
        'backgroundLight-dark': '#E2E8F0', // Slightly darker version for hover
        'backgroundLight-green': '#E6FFFA', // Light green for hover
        textDark: '#2D3748', // Dark text
        complementary: '#F6AD55', // Soft orange accent

        // * Custom palette for dark mode
        'dark-primary': '#2C7A7B', // Primary green for dark mode (same as light)
        'dark-accent': '#38B2AC', // Softer teal-green accent for dark mode
        'dark-bg': '#1A202C', // Dark background
        'dark-bg-light': '#2D3748', // Slightly lighter version for hover
        'dark-text': '#E2E8F0', // Light text for dark mode
        'dark-complementary': '#F6AD55', // Same complementary soft orange
      },
    },
  },
  plugins: [],
};
export default config;
