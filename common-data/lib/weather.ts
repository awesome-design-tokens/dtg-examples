import { WeatherCodes } from "./types";

export const weather = {
  [WeatherCodes.Sunny]: 'Sunny',
  [WeatherCodes.Cloudy]: 'Cloudy',
  [WeatherCodes.Fog]: 'Dense Fog',
  [WeatherCodes.Drizzle]: 'Drizzle',
  [WeatherCodes.Rain]: 'Heavy Rain',
  [WeatherCodes.Snow]: 'Snow',
  [WeatherCodes.Storm]: 'Stormy',
} as const;
