import { WeatherCodes, weather } from '@dtg-examples/common-data';
import { css } from '@emotion/react';

export interface InfoProps {
  city: string;
  code: WeatherCodes;
  temp: number;
}

const Info = (props: InfoProps) => {
  const { city, code, temp } = props;

  return (
    <section
      css={css`
        z-index: 10;
        padding: var(--awsm-space-100);

        background: var(--awsm-color-secondary);
        color: var(--awsm-color-secondary-contrast);

        box-shadow: var(--awsm-shadow-small);
      `}
    >
      <h2
        css={css`
          margin: 0;
          margin-bottom: var(--awsm-space-050);
        `}
      >
        {city}
      </h2>
      <h3
        css={css`
          margin: 0;
        `}
      >
        {weather[code]}: {temp}°C
      </h3>
    </section>
  );
};

export { Info };
