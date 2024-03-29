import { WeatherCodes, weather } from '@dtg-examples/common-data';

import styles from './info.module.css';

export interface InfoProps {
  city: string;
  code: WeatherCodes;
  temp: number;
}

const Info = (props: InfoProps) => {
  const { city, code, temp } = props;

  return (
    <section className={styles.root}>
      <h2>{city}</h2>
      <h3>
        {weather[code]}: {temp}°C
      </h3>
    </section>
  );
};

export { Info };
