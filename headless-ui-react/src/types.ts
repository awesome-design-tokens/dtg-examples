import { WeatherCodes } from './data/globals';

export interface Weather {
  uid: string;
  city: string;
  code: WeatherCodes;
  temp: number;
  status: string;
}

export interface ComponentProps {
  clsx?: string;
  tabIndex?: number;
}
