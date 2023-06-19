import { WeatherCodes } from '@dtg-examples/common-data';

import { IMAGES, WEATHER } from '../../data/globals';

export interface PictureProps {
  code: WeatherCodes;
}

const Picture = (props: PictureProps) => {
  const { code } = props;

  return (
    <figure className="m-0 p-0 bg-base-dark text-contrast-dark leading-reset">
      <img
        className="w-full object-cover"
        src={IMAGES[code]}
        alt={`Weather illustration: ${WEATHER[code]}`}
      />
    </figure>
  );
};

export { Picture };
