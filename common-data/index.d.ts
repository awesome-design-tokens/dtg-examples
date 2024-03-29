export interface Weather {
  uid: string;
  city: string;
  code: WeatherCodes;
  temp: number;
  status: string;
}

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
  Awsm,
  Futura,
  Cyber,
  Retro,
  Mono
}

export const data: Weather[];
export const themes: Record<Themes, string>;
export const weather: Record<WeatherCodes, string>;
export const images: Record<WeatherCodes, string>;

export type ThemeNames = (typeof themes)[Themes];
