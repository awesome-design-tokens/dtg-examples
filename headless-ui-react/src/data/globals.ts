export enum WeatherCodes {
  Sunny,
  Cloudy,
  Fog,
  Drizzle,
  Rain,
  Snow,
  Storm,
}

export enum Themes {
  Cyber,
  Futura,
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
  [Themes.Cyber]: 'cyber',
  [Themes.Futura]: 'futura',
  [Themes.Retro]: 'retro',
  [Themes.Mono]: 'mono',
} as const;
