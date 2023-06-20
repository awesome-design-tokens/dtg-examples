import { WeatherCodes, images, weather } from '@dtg-examples/common-data';

import styles from './picture.module.css';

export interface PictureProps {
  code: WeatherCodes;
}

const Picture = (props: PictureProps) => {
  const { code } = props;

  return (
    <figure className={styles.root}>
      <img src={images[code]} alt={`Weather illustration: ${weather[code]}`} />
    </figure>
  );
};

export { Picture };
