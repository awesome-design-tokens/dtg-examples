export enum WeatherCodes {
  Sunny,
  Cloudy,
  Fog,
  Drizzle,
  Rain,
  Snow,
  Storm,
}

export default {
  [WeatherCodes.Sunny]: 'Sunny',
  [WeatherCodes.Cloudy]: 'Cloudy',
  [WeatherCodes.Fog]: 'Dense Fog',
  [WeatherCodes.Drizzle]: 'Drizzle',
  [WeatherCodes.Rain]: 'Heavy Rain',
  [WeatherCodes.Snow]: 'Snow',
  [WeatherCodes.Storm]: 'Stormy',
};
