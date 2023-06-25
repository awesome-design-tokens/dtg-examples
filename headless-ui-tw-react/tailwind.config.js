/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],

  theme: {
    // overriding original naming
    colors: {
      primary: {
        DEFAULT: 'var(--awsm-color-primary)',
        contrast: 'var(--awsm-color-primary-contrast)',
        shade: 'var(--awsm-color-primary-shade)',
        tone: 'var(--awsm-color-primary-tone)',
        tint: 'var(--awsm-color-primary-tint)',
        alpha: 'rgba(var(--awsm-color-primary-rgb) , <alpha-value>)',
      },
      secondary: {
        DEFAULT: 'var(--awsm-color-secondary)',
        contrast: 'var(--awsm-color-secondary-contrast)',
        shade: 'var(--awsm-color-secondary-shade)',
        tone: 'var(--awsm-color-secondary-tone)',
        tint: 'var(--awsm-color-secondary-tint)',
        alpha: 'rgba(var(--awsm-color-secondary-rgb) , <alpha-value>)',
      },
      accent: {
        DEFAULT: 'var(--awsm-color-accent)',
        contrast: 'var(--awsm-color-accent-contrast)',
        shade: 'var(--awsm-color-accent-shade)',
        tone: 'var(--awsm-color-accent-tone)',
        tint: 'var(--awsm-color-accent-tint)',
        alpha: 'rgba(var(--awsm-color-accent-rgb) , <alpha-value>)',
      },
      gamma: {
        950: 'var(--awsm-color-gamma-950)',
        900: 'var(--awsm-color-gamma-900)',
        850: 'var(--awsm-color-gamma-850)',
        800: 'var(--awsm-color-gamma-800)',
        750: 'var(--awsm-color-gamma-750)',
        700: 'var(--awsm-color-gamma-700)',
        650: 'var(--awsm-color-gamma-650)',
        600: 'var(--awsm-color-gamma-600)',
        550: 'var(--awsm-color-gamma-550)',
        500: 'var(--awsm-color-gamma-500)',
        450: 'var(--awsm-color-gamma-450)',
        400: 'var(--awsm-color-gamma-400)',
        350: 'var(--awsm-color-gamma-350)',
        300: 'var(--awsm-color-gamma-300)',
        250: 'var(--awsm-color-gamma-250)',
        200: 'var(--awsm-color-gamma-200)',
        150: 'var(--awsm-color-gamma-150)',
        100: 'var(--awsm-color-gamma-100)',
        '050': 'var(--awsm-color-gamma-050)',
        '000': 'var(--awsm-color-gamma-000)',
      },
      base: {
        light: 'var(--awsm-color-base-light)',
        'light-alpha': 'rgba(var(--awsm-color-base-light-rgb) , <alpha-value>)',
        dark: 'var(--awsm-color-base-dark)',
        'dark-alpha': 'rgba(var(--awsm-color-base-dark-rgb) , <alpha-value>)',
      },
      contrast: {
        light: 'var(--awsm-color-contrast-light)',
        'light-alpha':
          'rgba(var(--awsm-color-contrast-light-rgb) , <alpha-value>)',
        dark: 'var(--awsm-color-contrast-dark)',
        'dark-alpha':
          'rgba(var(--awsm-color-contrast-dark-rgb) , <alpha-value>)',
      },
      text: {
        strong: 'var(--awsm-color-text-strong)',
        regular: 'var(--awsm-color-text-regular)',
        subtle: 'var(--awsm-color-text-subtle)',
        accent: 'var(--awsm-color-text-accent)',
      },
    },

    // preserving original naming
    fontFamily: {
      sans: ['Play', 'Jura', '"Helvetica Neue"', 'sans-serif'],
    },

    // preserving original naming
    fontSize: {
      xs: [
        'var(--awsm-font-size-xs)',
        { lineHeight: 'var(--awsm-line-height-regular)' },
      ],
      sm: [
        'var(--awsm-font-size-s)',
        { lineHeight: 'var(--awsm-line-height-regular)' },
      ],
      base: [
        'var(--awsm-font-size-n)',
        { lineHeight: 'var(--awsm-line-height-regular)' },
      ],
      lg: [
        'var(--awsm-font-size-l)',
        { lineHeight: 'var(--awsm-line-height-regular)' },
      ],
      xl: [
        'var(--awsm-font-size-xl)',
        { lineHeight: 'var(--awsm-line-height-tight)' },
      ],
      '2xl': [
        'var(--awsm-font-size-xxl)',
        { lineHeight: 'var(--awsm-line-height-tight)' },
      ],
    },

    // preserving original naming
    lineHeight: {
      reset: '0',
      none: '1',
      tight: 'var(--awsm-line-height-tight)',
      snug: 'var(--awsm-line-height-tight)',
      normal: 'var(--awsm-line-height-regular)',
      relaxed: 'var(--awsm-line-height-loose)',
      loose: 'var(--awsm-line-height-loose)',
    },

    // preserving original naming
    spacing: {
      px: '1px',
      0: '0',
      0.5: 'var(--awsm-space-012)',
      1: 'var(--awsm-space-025)',
      1.5: 'calc(var(--awsm-space-025) + var(--awsm-space-012))',
      2: 'var(--awsm-space-050)',
      3: 'var(--awsm-space-075)',
      4: 'var(--awsm-space-100)',
      5: 'var(--awsm-space-125)',
      6: 'var(--awsm-space-150)',
      7: 'var(--awsm-space-175)',
      8: 'var(--awsm-space-200)',
      12: 'calc(var(--awsm-space-100) * 3)',
      16: 'calc(var(--awsm-space-100) * 4)',
    },

    // preserving original naming
    borderRadius: {
      DEFAULT: 'var(--awsm-radius-medium)',
      none: '0',
      sm: 'var(--awsm-radius-small)',
      md: 'var(--awsm-radius-medium)',
      lg: 'var(--awsm-radius-large)',
      xl: 'var(--awsm-radius-round)',
      full: 'var(--awsm-radius-pill)',
    },

    // preserving original naming
    boxShadow: {
      DEFAULT: 'var(--awsm-shadow-medium)',
      none: 'none',
      sm: 'var(--awsm-shadow-small)',
      md: 'var(--awsm-shadow-medium)',
      lg: 'var(--awsm-shadow-large)',
      xl: 'var(--awsm-shadow-large)',
      color: 'var(--awsm-shadow-color)',
    },

    // overriding original naming
    transitionDuration: {
      DEFAULT: 'var(--awsm-duration-regular)',
      0: '0s',
      instant: 'var(--awsm-duration-instant)',
      short: 'var(--awsm-duration-short)',
      regular: 'var(--awsm-duration-regular)',
      long: 'var(--awsm-duration-long)',
      extra: 'var(--awsm-duration-extra)',
    },

    extend: {
      borderWidth: {
        2: 'var(--awsm-space-012)',
        4: 'var(--awsm-space-025)',
        8: 'var(--awsm-space-050)',
      },

      width: {
        'screen-10': '10vw',
        'screen-20': '20vw',
        'screen-30': '30vw',
        'screen-40': '40vw',
        'screen-50': '50vw',
        'screen-60': '60vw',
        'screen-70': '70vw',
        'screen-80': '80vw',
        'screen-90': '90vw',
      },

      height: {
        'form-base':
          'calc(var(--awsm-font-size-n) + 2 * var(--awsm-space-075))',
      },

      maxHeight: {
        'screen-10': '10vh',
        'screen-20': '20vh',
        'screen-30': '30vh',
        'screen-40': '40vh',
        'screen-50': '50vh',
        'screen-60': '60vh',
        'screen-70': '70vh',
        'screen-80': '80vh',
        'screen-90': '90vh',
      },

      minWidth: {
        DEFAULT: 'var(--min-width)',
      },

      maxWidth: {
        DEFAULT: 'var(--max-width)',
      },
    },
  },
};
