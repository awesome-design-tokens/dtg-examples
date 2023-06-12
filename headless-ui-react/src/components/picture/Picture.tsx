import { IMAGES, WEATHER, WeatherCodes } from "../../data/globals";

export interface PictureProps {
  code: WeatherCodes
}

const Picture = (props: PictureProps) => {
  const { code } = props;

  return (
    <figure>
      <img src={IMAGES[code]} alt={`Weather illustration: ${WEATHER[code]}`} width="100%" />
    </figure>
  );
};

export { Picture };
