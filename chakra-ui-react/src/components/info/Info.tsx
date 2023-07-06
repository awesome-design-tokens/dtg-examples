import { Box, Heading } from '@chakra-ui/react';

import { WeatherCodes, weather } from '@dtg-examples/common-data';

export interface InfoProps {
  city: string;
  code: WeatherCodes;
  temp: number;
}

const Info = (props: InfoProps) => {
  const { city, code, temp } = props;

  return (
    <Box
      as="section"
      zIndex={10}
      shadow="sm"
      p={4}
      bg="secondary.default"
      color="secondary.contrast"
    >
      <Heading as="h2" fontSize="xl" lineHeight="short" m={0} mb={2}>
        {city}
      </Heading>
      <Heading as="h3" fontSize="l" lineHeight="short" m={0}>
        {weather[code]}: {temp}°C
      </Heading>
    </Box>
  );
};

export { Info };
