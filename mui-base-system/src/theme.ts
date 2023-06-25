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

  spacing: (factor: any) => DTGSpacingMap.get(factor),
});

export { theme };
