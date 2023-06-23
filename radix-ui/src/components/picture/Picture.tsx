import { WeatherCodes, images, weather } from '@dtg-examples/common-data';
import { css } from '@emotion/react';

export interface PictureProps {
  code: WeatherCodes;
}

const Picture = (props: PictureProps) => {
  const { code } = props;

  return (
    <figure
      css={css`
        margin: 0;
        padding: 0;

        background: var(--awsm-color-base-dark);
        color: var(--awsm-color-contrast-dark);

        line-height: 0;
      `}
    >
      <img
        css={css`
          width: 100%;

          object-fit: cover;
        `}
        src={images[code]}
        alt={`Weather illustration: ${weather[code]}`}
      />
    </figure>
  );
};

export { Picture };
