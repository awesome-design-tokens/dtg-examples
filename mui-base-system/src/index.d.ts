import {
  PaletteColorOptions as MUISimplePaletteColorOptions,
  PaletteOptions as MUIPaletteOptions,
  Palette as MUIPalette,
  TypeText as MUITypeText,
  Duration as MUIDuration,
  ThemeOptions as MUIThemeOptions,
  Theme as MUITheme,
  CssVarsThemeOptions as MUICssVarsThemeOptions,
} from '@mui/material';

import { Shape as MUIShape } from '@mui/system';

declare module '@mui/material/styles' {
  interface SimplePaletteColorOptions extends MUISimplePaletteColorOptions {
    tone: string;
  }

  interface GammaPaletteColorOptions {
    '000': string;
    '050': string;
    '100': string;
    '150': string;
    '200': string;
    '250': string;
    '300': string;
    '350': string;
    '400': string;
    '450': string;
    '500': string;
    '550': string;
    '600': string;
    '650': string;
    '700': string;
    '750': string;
    '800': string;
    '850': string;
    '900': string;
    '950': string;
  }

  interface CommonPaletteColorOptions {
    light: string;
    dark: string;
  }

  interface PaletteOptions extends MUIPaletteOptions {
    accent: SimplePaletteColorOptions;
    gamma: GammaPaletteColorOptions;
    base: CommonPaletteColorOptions;
    contrast: CommonPaletteColorOptions;
  }

  interface Palette extends MUIPalette {
    accent: SimplePaletteColorOptions;
    gamma: GammaPaletteColorOptions;
    base: CommonPaletteColorOptions;
    contrast: CommonPaletteColorOptions;
  }

  interface TypeText extends MUITypeText {
    regular: string;
    strong: string;
    subtle: string;
    accent: string;
  }

  interface CssVarsThemeOptions extends MUICssVarsThemeOptions {
    shadow: {
      small: string;
      medium: string;
      large: string;
    };

    radius: {
      small: string;
      medium: string;
      large: string;
      round: string;
      pill: string;
    };

    duration: {
      instant: string;
      short: string;
      regular: string;
      long: string;
      extra: string;
    };
  }

  interface Theme extends MUITheme {
    shadow: {
      small: string;
      medium: string;
      large: string;
    };

    radius: {
      small: string;
      medium: string;
      large: string;
      round: string;
      pill: string;
    };

    duration: {
      instant: string;
      short: string;
      regular: string;
      long: string;
      extra: string;
    };
  }
}
