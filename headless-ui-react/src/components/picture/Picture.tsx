import { IMAGES, WEATHER, WeatherCodes } from "../../data/globals";

import styles from './picture.module.css';

export interface PictureProps {
  code: WeatherCodes
}

const Picture = (props: PictureProps) => {
  const { code } = props;

  return (
    <figure className={styles.root}>
      <img src={IMAGES[code]} alt={`Weather illustration: ${WEATHER[code]}`} />
    </figure>
  );
};

export { Picture };
