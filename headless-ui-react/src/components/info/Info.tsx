import { WEATHER, WeatherCodes } from '../../data/globals';

export interface InfoProps {
  city: string;
  code: WeatherCodes;
  temp: number;
}

const Info = (props: InfoProps) => {
  const { city, code, temp } = props;

  return (
    <section>
      <h2>{city}</h2>
      <h3>
        {WEATHER[code]}: {temp}°C
      </h3>
    </section>
  );
};

export { Info };
