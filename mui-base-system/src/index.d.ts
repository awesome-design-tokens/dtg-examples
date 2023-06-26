import {
  PaletteColorOptions as MUISimplePaletteColorOptions,
  PaletteOptions as MUIPaletteOptions,
  Palette as MUIPalette,
  TypeText as MUITypeText
} from '@mui/material';

declare module '@mui/material/styles/createPalette' {
  interface SimplePaletteColorOptions extends MUISimplePaletteColorOptions {
    tone: string;
  }

  interface GammaPaletteColorOptions {
    '000': string;
    '050': string;
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
}
