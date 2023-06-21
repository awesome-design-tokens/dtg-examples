import { WeatherCodes, weather } from '@dtg-examples/common-data';

export interface InfoProps {
  city: string;
  code: WeatherCodes;
  temp: number;
}

const Info = (props: InfoProps) => {
  const { city, code, temp } = props;

  return (
    <section className="p-4 bg-secondary text-secondary-contrast">
      <h2 className="m-0 mb-2 text-xl leading-tight">{city}</h2>
      <h3 className="m-0 text-lg leading-tight">
        {weather[code]}: {temp}°C
      </h3>
    </section>
  );
};

export { Info };
