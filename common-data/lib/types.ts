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
