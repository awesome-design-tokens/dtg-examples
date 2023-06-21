import { WeatherCodes, images, weather } from '@dtg-examples/common-data';

export interface PictureProps {
  code: WeatherCodes;
}

const Picture = (props: PictureProps) => {
  const { code } = props;

  return (
    <figure className="m-0 p-0 bg-base-dark text-contrast-dark leading-reset">
      <img
        className="w-full object-cover"
        src={images[code]}
        alt={`Weather illustration: ${weather[code]}`}
      />
    </figure>
  );
};

export { Picture };
