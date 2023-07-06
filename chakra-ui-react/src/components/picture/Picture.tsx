import { Box, Image } from '@chakra-ui/react';

import { WeatherCodes, images, weather } from '@dtg-examples/common-data';

export interface PictureProps {
  code: WeatherCodes;
}

const Picture = (props: PictureProps) => {
  const { code } = props;

  return (
    <Box as="figure" m={0} p={0} lineHeight="reset">
      <Image
        boxSize="100%"
        objectFit="cover"
        src={images[code]}
        alt={`Weather illustration: ${weather[code]}`}
      />
    </Box>
  );
};

export { Picture };
