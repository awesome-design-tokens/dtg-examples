/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      primary: 'var(--awsm-color-primary)',
      secondary: {
        DEFAULT: 'var(--awsm-color-secondary)',
        shade: 'var(--awsm-color-secondary-shade)',
        tone: 'var(--awsm-color-secondary-tone)',
        tint: 'var(--awsm-color-secondary-tint)',
      },
    },
    extend: {},
  },
  plugins: [],
};
