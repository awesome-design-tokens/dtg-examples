import { experimental_extendTheme as extendTheme } from '@mui/material/styles';

const DTGSpacingMap = new Map();

DTGSpacingMap.set(0, 0);
DTGSpacingMap.set(0.5, 'var(--awsm-space-012)');
DTGSpacingMap.set(1, 'var(--awsm-space-025)');
DTGSpacingMap.set(1.5, 'calc(var(--awsm-space-025) + var(--awsm-space-012))');
DTGSpacingMap.set(2, 'var(--awsm-space-050)');
DTGSpacingMap.set(3, 'var(--awsm-space-075)');
DTGSpacingMap.set(4, 'var(--awsm-space-100)');
DTGSpacingMap.set(5, 'var(--awsm-space-125)');
DTGSpacingMap.set(6, 'var(--awsm-space-150)');
DTGSpacingMap.set(7, 'var(--awsm-space-175)');
DTGSpacingMap.set(8, 'var(--awsm-space-200)');
DTGSpacingMap.set(12, 'calc(var(--awsm-space-100) * 3)');
DTGSpacingMap.set(16, 'calc(var(--awsm-space-100) * 4)');


const theme = extendTheme({
  // ----------------------------------
  // palette
  // ----------------------------------
  colorSchemes: {
    light: {
      palette: {
        // here and further simply entering a placeholder
        // theming occurs in css variables
        primary: {
          main: '#000',
          light: '#000',
          dark: '#000',
          tone: '#000',
        },
        secondary: {
          main: '#000',
          light: '#000',
          dark: '#000',
          tone: '#000',
        },
        accent: {
          main: '#000',
          light: '#000',
          dark: '#000',
          tone: '#000',
        },
        gamma: {
          950: '#000',
          900: '#000',
          850: '#000',
          800: '#000',
          750: '#000',
          700: '#000',
          650: '#000',
          600: '#000',
          550: '#000',
          500: '#000',
          450: '#000',
          400: '#000',
          350: '#000',
          300: '#000',
          250: '#000',
          200: '#000',
          150: '#000',
          100: '#000',
          '050': '#000',
          '000': '#000',
        },
        base: {
          light: '#000',
          dark: '#000',
        },
        contrast: {
          light: '#000',
          dark: '#000',
        },
        text: {
          regular: '#000',
          strong: '#000',
          subtle: '#000',
          accent: '#000'
        }
      },
    },
  },

  // ----------------------------------
  // content
  // ----------------------------------
  typography: {
    fontFamily: ['Play', 'Jura', '"Helvetica Neue"', 'sans-serif'].join(','),
    htmlFontSize: 16,

    h1: {
      fontSize: 'var(--awsm-font-size-xxl)',
      lineHeight: 'var(--awsm-line-height-tight)',
    },

    h2: {
      fontSize: 'var(--awsm-font-size-xl)',
      lineHeight: 'var(--awsm-line-height-tight)',
    },

    h3: {
      fontSize: 'var(--awsm-font-size-l)',
      lineHeight: 'var(--awsm-line-height-tight)',
    },

    h4: {
      fontSize: 'var(--awsm-font-size-n)',
      lineHeight: 'var(--awsm-line-height-tight)',
    },

    h5: {
      fontSize: 'var(--awsm-font-size-n)',
      lineHeight: 'var(--awsm-line-height-tight)',
    },

    h6: {
      fontSize: 'var(--awsm-font-size-n)',
      lineHeight: 'var(--awsm-line-height-tight)',
    },

    body1: {
      fontSize: 'var(--awsm-font-size-n)',
      lineHeight: 'var(--awsm-line-height-regular)',
    },

    body2: {
      fontSize: 'var(--awsm-font-size-s)',
      lineHeight: 'var(--awsm-line-height-tight)',
    },

    subtitle1: {
      fontSize: 'var(--awsm-font-size-n)',
      lineHeight: 'var(--awsm-line-height-loose)',
    },

    subtitle2: {
      fontSize: 'var(--awsm-font-size-s)',
      lineHeight: 'var(--awsm-line-height-regular)',
    },

    button: {
      fontSize: 'var(--awsm-font-size-n)',
      lineHeight: '0',
    },

    overline: {
      fontSize: 'var(--awsm-font-size-s)',
      lineHeight: 'var(--awsm-line-height-tight)',
    },

    caption: {
      fontSize: 'var(--awsm-font-size-xs)',
      lineHeight: 'var(--awsm-line-height-tight)',
    },
  },

  // ----------------------------------
  // space
  // ----------------------------------
  spacing: (factor: number) => DTGSpacingMap.get(factor),

  // ----------------------------------
  // details
  // ----------------------------------
  shadows: [
    // simplifying shadows
    // similar can be done via variables
    'none',
    'var(--awsm-shadow-small)',
    'var(--awsm-shadow-small)',
    'var(--awsm-shadow-small)',
    'var(--awsm-shadow-small)',
    'var(--awsm-shadow-small)',
    'var(--awsm-shadow-small)',
    'var(--awsm-shadow-small)',
    'var(--awsm-shadow-small)',
    'var(--awsm-shadow-medium)',
    'var(--awsm-shadow-medium)',
    'var(--awsm-shadow-medium)',
    'var(--awsm-shadow-medium)',
    'var(--awsm-shadow-medium)',
    'var(--awsm-shadow-medium)',
    'var(--awsm-shadow-medium)',
    'var(--awsm-shadow-medium)',
    'var(--awsm-shadow-large)',
    'var(--awsm-shadow-large)',
    'var(--awsm-shadow-large)',
    'var(--awsm-shadow-large)',
    'var(--awsm-shadow-large)',
    'var(--awsm-shadow-large)',
    'var(--awsm-shadow-large)',
    'var(--awsm-shadow-large)',
  ],

  transitions: {
    // values directly from DTG: Details/Duration
    duration: {
      shortest: 118,
      shorter: 118,
      short: 158,
      standard: 210,
      complex: 373,
      enteringScreen: 280,
      leavingScreen: 210,

      // custom variables
      _instant: 'var(--awsm-duration-instant)',
      _short: 'var(--awsm-duration-short)',
      _regular: 'var(--awsm-duration-regular)',
      _long: 'var(--awsm-duration-long)',
      _extra: 'var(--awsm-duration-extra)',
    }
  }
});


export { theme };
