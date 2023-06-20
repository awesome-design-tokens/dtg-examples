import { WeatherCodes } from "@dtg-examples/common-data";

export enum Themes {
  Awsm,
  Futura,
  Cyber,
  Retro,
  Mono
}

export const IMAGES = {
  [WeatherCodes.Sunny]: '/images/demo-sun.jpeg',
  [WeatherCodes.Cloudy]: '/images/demo-fog.jpeg',
  [WeatherCodes.Fog]: '/images/demo-fog.jpeg',
  [WeatherCodes.Drizzle]: '/images/demo-rain.jpeg',
  [WeatherCodes.Rain]: '/images/demo-rain.jpeg',
  [WeatherCodes.Snow]: '/images/demo-snow.jpeg',
  [WeatherCodes.Storm]: '/images/demo-snow.jpeg',
};

export const WEATHER = {
  [WeatherCodes.Sunny]: 'Sunny',
  [WeatherCodes.Cloudy]: 'Cloudy',
  [WeatherCodes.Fog]: 'Dense Fog',
  [WeatherCodes.Drizzle]: 'Drizzle',
  [WeatherCodes.Rain]: 'Heavy Rain',
  [WeatherCodes.Snow]: 'Snow',
  [WeatherCodes.Storm]: 'Stormy',
} as const;

export const THEME = {
  [Themes.Awsm]: 'awsm',
  [Themes.Futura]: 'futura',
  [Themes.Cyber]: 'cyber',
  [Themes.Retro]: 'retro',
  [Themes.Mono]: 'mono',
} as const;

export type ThemeNames = (typeof THEME)[Themes];
