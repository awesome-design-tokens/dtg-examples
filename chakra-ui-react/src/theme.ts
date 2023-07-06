import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  // overriding original naming
  colors: {
    primary: {
      default: 'var(--awsm-color-primary)',
      tint: 'var(--awsm-color-primary-tint)',
      shade: 'var(--awsm-color-primary-shade)',
      tone: 'var(--awsm-color-primary-tone)',
      contrast: 'var(--awsm-color-primary-contrast)',

      alpha10: 'rgba(var(--awsm-color-primary-rgb), 0.1)',
      alpha20: 'rgba(var(--awsm-color-primary-rgb), 0.2)',
      alpha30: 'rgba(var(--awsm-color-primary-rgb), 0.3)',
      alpha40: 'rgba(var(--awsm-color-primary-rgb), 0.4)',
      alpha50: 'rgba(var(--awsm-color-primary-rgb), 0.5)',
      alpha60: 'rgba(var(--awsm-color-primary-rgb), 0.6)',
      alpha70: 'rgba(var(--awsm-color-primary-rgb), 0.7)',
      alpha80: 'rgba(var(--awsm-color-primary-rgb), 0.8)',
      alpha90: 'rgba(var(--awsm-color-primary-rgb), 0.9)',
    },
    secondary: {
      default: 'var(--awsm-color-secondary)',
      tint: 'var(--awsm-color-secondary-tint)',
      shade: 'var(--awsm-color-secondary-shade)',
      tone: 'var(--awsm-color-secondary-tone)',
      contrast: 'var(--awsm-color-secondary-contrast)',

      alpha10: 'rgba(var(--awsm-color-secondary-rgb), 0.1)',
      alpha20: 'rgba(var(--awsm-color-secondary-rgb), 0.2)',
      alpha30: 'rgba(var(--awsm-color-secondary-rgb), 0.3)',
      alpha40: 'rgba(var(--awsm-color-secondary-rgb), 0.4)',
      alpha50: 'rgba(var(--awsm-color-secondary-rgb), 0.5)',
      alpha60: 'rgba(var(--awsm-color-secondary-rgb), 0.6)',
      alpha70: 'rgba(var(--awsm-color-secondary-rgb), 0.7)',
      alpha80: 'rgba(var(--awsm-color-secondary-rgb), 0.8)',
      alpha90: 'rgba(var(--awsm-color-secondary-rgb), 0.9)',
    },
    accent: {
      default: 'var(--awsm-color-accent)',
      tint: 'var(--awsm-color-accent-tint)',
      shade: 'var(--awsm-color-accent-shade)',
      tone: 'var(--awsm-color-accent-tone)',
      contrast: 'var(--awsm-color-accent-contrast)',

      alpha10: 'rgba(var(--awsm-color-accent-rgb), 0.1)',
      alpha20: 'rgba(var(--awsm-color-accent-rgb), 0.2)',
      alpha30: 'rgba(var(--awsm-color-accent-rgb), 0.3)',
      alpha40: 'rgba(var(--awsm-color-accent-rgb), 0.4)',
      alpha50: 'rgba(var(--awsm-color-accent-rgb), 0.5)',
      alpha60: 'rgba(var(--awsm-color-accent-rgb), 0.6)',
      alpha70: 'rgba(var(--awsm-color-accent-rgb), 0.7)',
      alpha80: 'rgba(var(--awsm-color-accent-rgb), 0.8)',
      alpha90: 'rgba(var(--awsm-color-accent-rgb), 0.9)',
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
      dark: 'var(--awsm-color-base-dark)',
    },
    contrast: {
      light: 'var(--awsm-color-contrast-light)',
      dark: 'var(--awsm-color-contrast-dark)',
    },
    text: {
      strong: 'var(--awsm-color-text-strong)',
      regular: 'var(--awsm-color-text-regular)',
      subtle: 'var(--awsm-color-text-subtle)',
      accent: 'var(--awsm-color-text-accent)',
    },
  },

  // preserving original naming
  fonts: {
    body: 'Play, Jura, "Helvetica Neue", sans-serif',
    heading: 'Play, Jura, "Helvetica Neue", sans-serif',
  },

  // preserving original naming
  fontSizes: {
    xs: 'var(--awsm-font-size-xs)',
    sm: 'var(--awsm-font-size-s)',
    md: 'var(--awsm-font-size-n)',
    lg: 'var(--awsm-font-size-l)',
    xl: 'var(--awsm-font-size-xl)',
    '2xl': 'var(--awsm-font-size-xxl)',
  },

  // preserving original naming
  lineHeights: {
    reset: 0,
    normal: 'var(--awsm-line-height-regular)',
    none: 1,
    shorter: null,
    short: 'var(--awsm-line-height-tight)',
    base: 'var(--awsm-line-height-regular)',
    tall: 'var(--awsm-line-height-loose)',
    taller: null,
  },

  // preserving original naming
  space: {
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

  // custom field
  sizes: {
    formBase: 'calc(var(--awsm-font-size-n) + 2 * var(--awsm-space-075))',
  },

  // preserving original naming
  radii: {
    none: '0',
    base: 'var(--awsm-radius-medium)',
    sm: 'var(--awsm-radius-small)',
    md: 'var(--awsm-radius-medium)',
    lg: 'var(--awsm-radius-large)',
    xl: 'var(--awsm-radius-round)',
    full: 'var(--awsm-radius-pill)',
    round: 'var(--awsm-radius-round)',
  },

  shadows: {
    xs: null,
    sm: 'var(--awsm-shadow-small)',
    base: 'var(--awsm-shadow-medium)',
    md: 'var(--awsm-shadow-medium)',
    lg: 'var(--awsm-shadow-large)',
    xl: null,
    '2xl': null,
    outline: 'var(--awsm-shadow-small)', // focus ring TODO
    none: 'none',
  },

  // preserving original naming
  transition: {
    duration: {
      ['ultra-fast']: null,
      faster: 'var(--awsm-duration-instant)',
      fast: 'var(--awsm-duration-short)',
      normal: 'var(--awsm-duration-regular)',
      slow: 'var(--awsm-duration-long)',
      slower: 'var(--awsm-duration-extra)',
      ['ultra-slow']: null,
    },
  },

  borders: {
    px: '1px solid',
    0: 'none',
    0.5: 'var(--awsm-space-012) solid',
    1: 'var(--awsm-space-025) solid',
    1.5: 'calc(var(--awsm-space-025) + var(--awsm-space-012)) solid',
    2: 'var(--awsm-space-050) solid',
  },
});

export { theme };
